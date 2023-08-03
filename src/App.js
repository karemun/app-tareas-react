import './App.css';
import Logo from './components/Logo';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
