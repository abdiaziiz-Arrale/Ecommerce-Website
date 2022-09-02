
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
  return (
   <div className='space-y-20'>
<Router>
     <Header/>
     <Home/>
     <Footer />
</Router>
 
   </div>
  );
}

export default App;
