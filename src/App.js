import {
  HashRouter as Router,
} from 'react-router-dom';
import './App.css';
import Navigator from './components/Navigator';

const App = () => (
  <div className="App">
    <Router>
      <Navigator />
    </Router>
  </div>
);

export default App;
