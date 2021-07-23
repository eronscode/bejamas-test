import { useState } from "react";
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

function MultiCheckBox() {
  const [checkedItems, setCheckedItems] = useState([]);
  const [items, setItems] = useState([
    {
      id: "1",
      category: "Nice",
      isChecked: false,
    },
    {
      id: "2",
      category: "SAamuel",
      isChecked: false,
    },
    {
      id: "3",
      category: "Hello",
      isChecked: false,
    },
  ]);

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
      setCheckedItems((prevState) => [...prevState, value]);
    } else {
      const newCategory = checkedItems.filter(
        (product) => product !== value
      );
      setCheckedItems(newCategory);
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
          <span  className="checkbox-label">
            {item.category}
          </span>
        </label>
      ))}
    </CheckBoxWrapper>
  );
}

export default MultiCheckBox;
