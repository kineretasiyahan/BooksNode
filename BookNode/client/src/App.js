import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/routing/AppRouter'
import NavBar from './components/Features/navBar/NavBar'


function App() {
  return (
      <Router>
      <NavBar />
        <AppRouter/>
      </Router>
  )
}
export default App;
