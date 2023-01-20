import './App.css';

const App = () => {

  // State

  // Behavior
  const handleSubmit = () => {

  }

  // Render

  return (
    <div className="App">
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form>
        <label>
          <button placeholder="Entrez votre prenom" onSubmit={handleSubmit}>
            Accedez a votre espace
          </button>
        </label>
      </form>
    </div>
  );
}

export default App;
