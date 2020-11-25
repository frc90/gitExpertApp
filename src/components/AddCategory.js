import React, { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola mundo");

  return (
    <>
      <input type="text" value={inputValue} />
    </>
  );
};
