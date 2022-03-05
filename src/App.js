import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Dashboard, Login } from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
