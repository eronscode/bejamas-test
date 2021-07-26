import { useEffect, useState } from "react";
import { CheckBoxWrapper } from "./styles";

const Checkbox = ({ type = "checkbox", name, checked, value, onChange, ...restProps }) => (
  <input
    type={type}
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    {...restProps}
  />
);

function MultiCheckBox({ values, checkedItems, onChange }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (checkedItems.length !== 0) {
      const newItems = values.map((product) => {
        return [...checkedItems].includes(product.category)
          ? { ...product, isChecked: true }
          : product;
      });
      
      setItems(newItems);
    }else{
      setItems(values);
    }
  }, [checkedItems]);

  

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
      {items?.map((item, i) => {
        return(
        <label className="checkbox-wrapper" key={item.id}>
          <Checkbox
            id={item.id}
            name={item.category}
            value={item.category}
            checked={item.isChecked}
            onChange={handleChange}
          />
          <span className="checkbox-label">{item.category}</span>
        </label>
      )})}
    </CheckBoxWrapper>
  );
}

export default MultiCheckBox;
