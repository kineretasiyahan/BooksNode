import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Components/routing/AppRouter';
import NavBar from './Components/Features/navBar/NavBar'


function App() {
  return (
      <Router>
      <NavBar />
        <AppRouter/>
      </Router>
  )
}

export default App;
