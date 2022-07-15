import logo from './logo.svg';
import './App.css';
import ComponenteA from './componentes/A';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* ---- llamo al componenteA y le paso las props y valores ----*/}
       <ComponenteA nombre={"Maria"} apellido={"Derkacheva"} email={"@gmail.com"} conectado={true}></ComponenteA>
       
        
      </header>
    </div>
  );
}

export default App;
