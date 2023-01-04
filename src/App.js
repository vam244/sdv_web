import Hero from './Hero'
import Navbar from './Navbar'
import Client from './Client'
import About from './About'
import Service_cta from './Service_cta'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'
import Registration_form from './Registration_form'
import './index.css'
// import {
//   BrowserRouter as Routes,
//   Router,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (<>

  {/* <Router> */}
    <Navbar/>
   <Registration_form/>
    <Hero/>
    {/* <Client/>  */}
    {/* <About /> */}
     {/* <Routes>
          <Route exact path="/">
          <About/>
          </Route>
        </Routes> */}
    {/* <About/> */}
    <Faq/>
    <Service_cta/>
    {/* <Contact/> */}
    <Footer/>
    {/* </Router> */}
    </>
  );
}

export default App;
