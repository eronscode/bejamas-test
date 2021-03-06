import { useEffect, useState } from "react";
import { CheckBoxWrapper } from "./styles";
import { isEmpty } from "lodash";

const Checkbox = ({ type = "checkbox", name, checked, value, onChange }) => (
  <input
    type={type}
    name={name}
    checked={checked}
    value={value}
    onChange={onChange}
  />
);

function SingleCheckBox({ values, checkedItems, onChange = () => null }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!isEmpty(checkedItems)) {
      const newItems = values.map((product) => {
        return product.price === checkedItems
          ? { ...product, isChecked: true }
          : product;
      });

      setItems(newItems);
    } else {
      setItems(values);
    }
  }, [checkedItems]);

  function handleChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;

    const copy = [...items].map((product) => ({
      ...product,
      isChecked: false,
    }));

    const newState = copy.map((product) =>
      product.price === value ? { ...product, isChecked: isChecked } : product
    );
    setItems(newState);

    if (isChecked) {
      onChange(value);
    } else {
      onChange("");
    }
  }

  return (
    <CheckBoxWrapper>
      {items?.map((item, i) => (
        <label className="checkbox-wrapper" key={item.id}>
          <Checkbox
            id={item?.id}
            name={item.price}
            value={item.price}
            checked={item.isChecked}
            onChange={handleChange}
          />
          <span className="checkbox-label">{item.captionText}</span>
        </label>
      ))}
    </CheckBoxWrapper>
  );
}

export default SingleCheckBox;
