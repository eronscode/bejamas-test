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

function SingleCheckBox({ onChange = () => null }) {
  const [checkedItem, setCheckedItem] = useState("");
  const [items, setItems] = useState([
    {
      id: "1",
      category: "Item 1",
      isChecked: false,
    },
    {
      id: "2",
      category: "Wooooou",
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

    const copy = [...items].map((product) => ({
      ...product,
      isChecked: false,
    }));

    const newState = copy.map((product) =>
      product.category === value
        ? { ...product, isChecked: isChecked }
        : product
    );
    setItems(newState);

    if (isChecked) {
      setCheckedItem(value);
      onChange(value);
    } else {
        setCheckedItem("");
        onChange("");
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

export default SingleCheckBox;
