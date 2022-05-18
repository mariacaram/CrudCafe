import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/Contador';
import TheNav from './components/TheNav';

function App() {
  return (
    <div className="text-center">
      <TheNav />
      <h1 > Hola Mundo</h1>

      <button type="button" className="btn btn-primary">Primary</button>

    </div>
  );
}

export default App;
