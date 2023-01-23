import { useState } from "react";

export default function LoginForm() {
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
    <form action="submit" onSubmit={handleSubmmit}>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prenom..."
        required
      />
      <button>Accedez a votre espace</button>
    </form>
  );
}
