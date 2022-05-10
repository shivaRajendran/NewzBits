import { useState } from "react";
export default function ExportSearch(props) {
  const [inputValue, updateValue] = useState("");
  function handleType(event) {
    localStorage.setItem('lastReq', 'search');
    updateValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue !== null && inputValue !== "") {
      updateValue("");
      props.triggerSearch({
        operation: "search",
        value: inputValue,
      });
    } else {
      alert("Please enter a keyword inorder to fetch results!");
    }
  }
  
  return (
    <form className="search-wrapper" onSubmit={handleSubmit}>
      <input
        type="search"
        name=""
        id=""
        onChange={handleType}
        value={inputValue}
        placeholder="Search for keywords"
      />
      <i className="ri-search-2-line"></i>
    </form>
  );
}
