import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  //handleAdd
  // const handleAdd = () => {
  //   // setCategories(["HunterXHunter", ...categories]);
  //   setCategories((cat) => ["HunterXHunter", ...cat]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
