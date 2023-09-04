import React from "react";
import "./WordSearchInput.css";

function WordSearchInput({
  value,
  setValue,
  selectedItems,
  setSelectedItems,
  placeHolder,
}) {
  const handleRemoveSelectedItem = (event) => {
    // Use the getAttribute method to get the data attribute:
    const itemToRemove = event.target.getAttribute("data-selectedItem");
    const selectedItemsCopy = [...selectedItems];
    const indexOfItemToRemove = selectedItemsCopy.indexOf(itemToRemove);
    selectedItemsCopy.splice(indexOfItemToRemove, 1);
    const newSelectedItems = [...selectedItemsCopy];
    setSelectedItems(newSelectedItems);
  };

  const selectedItemsElements = selectedItems.map((selectedItem) => (
    <div className="selected-item">
      <span>{selectedItem}</span>
      <button
        className="word-search-input-remove"
        onClick={handleRemoveSelectedItem}
        data-selectedItem={selectedItem}
        key={selectedItem}
      ></button>
    </div>
  ));

  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <div className="word-search-input">
      {selectedItemsElements}
      <input
        value={value}
        type="search"
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
}
export default WordSearchInput;

// Component WordSearchInput:
// Receives 5 props :
// value: value for input element.
// setValue: The updater function for value state in parent component
// selectedItems: selected items in input field
// setSelectedItems: The updater function for selectedItems state in parent component
//  placeHolder: placeHolder for input element
