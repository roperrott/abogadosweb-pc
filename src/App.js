import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Dashboard, Login, Queries } from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/consultas" element={<Queries />} />
    </Routes>
  </Router>
);

export default App;
