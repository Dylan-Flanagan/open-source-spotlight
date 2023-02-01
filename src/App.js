import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import PetChart from './components/Chart.js';
import DdosTable from './components/Table.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>People I Have DDos&lsquo;d</h1>
          <DdosTable />
        </Route>
        <Route path="/charts">
          <h1>A National Poll on Favorite Pet Types</h1>
          <PetChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
