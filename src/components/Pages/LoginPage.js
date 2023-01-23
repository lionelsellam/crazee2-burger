import React, { useState } from "react";

export default function LoginPage() {
  // state
  const [inputValue, setInputValue] = useState("");

  // behavior
  const handleSubmmit = (event) => {
    event.preventDefault();
      alert("bonjour");
      setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // render
  return (
    <div>
          <h1>Bienvenue chez nous</h1>
          <br/>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prenom..."
          required
        />
        <button>Accedez a votre espace</button>
      </form>
    </div>
  );
}
