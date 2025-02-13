
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Componentes
import Home from './components/home/Home';
import About from './components/about/About';
import NavBarMain from './layouts/NavBar';

import Services from './components/services/Services';
import Footer from './layouts/Footer';
import Work from './components/work/Work';
import DescriptionServices from './components/services/DescriptionServices';


function App() {
  return (
    <section>
            <div className='App'>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={ <NavBarMain /> }>
                <Route index element={<Home />} />
                <Route path='services' element={<Services />} />
                <Route path='work' element={<Work />} />
                <Route path='about' element={<About />} />
                <Route path='descriptionservices' element={<DescriptionServices />} />
               

                <Route path='*' element={ <Navigate replace to='/'/>} />

                </Route>
              </Routes>
              
              </BrowserRouter>
           
            </div>
            <section>
              <Footer/>
            </section>
          </section>

  );
}

export default App