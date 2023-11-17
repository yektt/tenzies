import Dice from "./components/Dice";

function App() {
  function randomValue() {
    const rand = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return rand;
  }

  return (
    <main>
      <Dice randomFunction={randomValue} />
    </main>
  );
}

export default App;
