import { useEffect, useState } from "react";
import { CheckBoxWrapper } from "./styles";

const Checkbox = ({ type = "checkbox", name, checked, value, onChange }) => (
  <input
    type={type}
    name={name}
    checked={checked}
    value={value}
    onChange={onChange}
  />
);

function MultiCheckBox({ values, checkedItems, onChange }) {
  const [items, setItems] = useState([]);

  useEffect(() => setItems(values), []);

  function handleChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;

    setItems((prevState) =>
      prevState.map((product) =>
        product.category === value
          ? { ...product, isChecked: isChecked }
          : product
      )
    );

    if (isChecked) {
      onChange([...checkedItems, value]);
    } else {
      const newCategory = checkedItems.filter((product) => product !== value);
      onChange(newCategory);
    }
  }

  return (
    <CheckBoxWrapper>
      {items?.map((item, i) => (
        <label className="checkbox-wrapper" key={item.id}>
          <Checkbox
            id={item?.category}
            name={item?.category}
            value={item.category}
            checked={items[i].isChecked}
            onChange={handleChange}
          />
          <span className="checkbox-label">{item.category}</span>
        </label>
      ))}
    </CheckBoxWrapper>
  );
}

export default MultiCheckBox;
