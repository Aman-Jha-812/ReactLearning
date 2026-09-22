import { useState } from "react";

import "./App.css";

function App() {
  // const [IsHtml, setIsHtml] = useState(true)
  // const [IsCss, setIsCss] = useState(true)
  // const [Isjs, setIsjs] = useState(true)

  const [isLanguages, setIsLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleLanguage = (e) => {
    const key = e.target.name;
    setIsLanguages({
      ...isLanguages,
      [key]: e.target.checked,
    });
  };

  const isAllchecked = Object.values(isLanguages).every(
    (item) => item === true,
  );
  console.log(isAllchecked);

  return (
    <>
      {/* select all */}
      <label htmlFor="sa">
        <input
          type="checkbox"
          id="sa"
          name="html"
          checked={isAllchecked}
          onChange={(e)=>{
            setIsLanguages({
            html: e.target.checked,
            css: e.target.checked,
            js: e.target.checked,
          })
        }}
        />
        Select All
      </label>

      <label htmlFor="html">
        <input
          type="checkbox"
          id="html"
          name="html"
          checked={isLanguages.html}
          onChange={handleLanguage}
        />
        html
      </label>

      <label htmlFor="css">
        <input
          type="checkbox"
          id="css"
          name="css"
          checked={isLanguages.css}
          onChange={handleLanguage}
        />
        css
      </label>

      <label htmlFor="js">
        <input
          type="checkbox"
          id="ch"
          name="js"
          checked={isLanguages.js}
          onChange={handleLanguage}
        />{" "}
        Js
      </label>

      {isLanguages.html && "html checked"}
      <br />
      <br />
      {isLanguages.css && "css is checked"}
      <br />
      <br />
      {isLanguages.js && "js is checked"}
    </>
  );
}

export default App;
