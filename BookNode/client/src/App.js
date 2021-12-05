import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../src/components/routing/AppRouter'
// import Autocomplete from './Components/Pages/home/Autocomplete'


function App() {
  return (
    // <Autocomplete suggestions={"Oranges", "Apples", "Banana", "Kiwi", "Mango"]}/>

      <Router>  
        <AppRouter/>
      </Router>
  )
}
export default App;
