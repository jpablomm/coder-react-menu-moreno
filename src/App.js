import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ListContainer greeting="Hola usuario nuevo!" />
    </div>
  );
}

export default App;
