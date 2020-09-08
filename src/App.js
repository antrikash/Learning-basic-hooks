import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("Antriksh");
  const [surName, setSurName] = useState("Sharma");
  const [width, setWidth] = useState(window.innerWidth);
  onChangeName = (e) => {
    setName(e.target.value);
  };
  onChangeSurName = (e) => {
    setSurName(e.target.value);
  };

  useEffect(() => {
    console.log(document.title);
    document.title = name + " " + surName;
    console.log(document.title, "llll");
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section>
      <label>Name: </label>
      <input value={name} onChange={this.onChangeName} />
      <br />
      <label>Surname: </label>
      <input value={surName} onChange={this.onChangeSurName} />
      <br />
      <label>Width: </label>
      <input value={width} />
      <br />
    </section>
  );
}
