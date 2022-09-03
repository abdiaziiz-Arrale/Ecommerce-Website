
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Product from './Components/Product';
function App() {
  return (
   <div className='space-y-20'>
<Router>
     <Header/>
  <Routes >

    <Route path='/' element={<Home />}/ >
    <Route path='/About' element={<About />}/ >
    <Route path='/Product' element={<Product />}/ >
    
  </Routes>
     
     <Footer />
</Router>
 
   </div>
  );
}

export default App;
