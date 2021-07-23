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
  const [checkedPermissionItems, setCheckedPermissionItems] = useState([]);
  const [permissions, setPermissions] = useState([
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

  function handlePermissionChange(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;

    setPermissions((prevState) =>
      prevState.map((product) =>
        product.category === value
          ? { ...product, isChecked: isChecked }
          : product
      )
    );

    if (isChecked) {
      setCheckedPermissionItems((prevState) => [...prevState, value]);
    } else {
      const newAddedProducts = checkedPermissionItems.filter(
        (product) => product !== value
      );
      setCheckedPermissionItems(newAddedProducts);
    }
  }

  console.log("Check", checkedPermissionItems);

  return (
    <CheckBoxWrapper>
      {permissions?.map((item, i) => (
        <div className="checkbox-wrapper" key={item.id}>
          <Checkbox
            id={item?.category}
            name={item?.category}
            value={item.category}
            checked={permissions[i].isChecked}
            onChange={handlePermissionChange}
          />
          <label htmlFor={item?.category} className="checkbox-label">
            {item.category}
          </label>
        </div>
      ))}
    </CheckBoxWrapper>
  );
}

export default MultiCheckBox;
