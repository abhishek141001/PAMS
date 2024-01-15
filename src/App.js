
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Section1 from './components/sections/section1';
import Section2 from './components/sections/section2';
import WhatWeDo from './components/sections/WhatWeDo/whatWeDo';
import PoliticalExp from './components/sections/experience/politicalExperience';
import Contact from './components/contact';
import Clients from './components/sections/experience/clients';
import { BrowserRouter } from 'react-router-dom';
import About from './components/sections/about/about';



function App() {
  return (
    <BrowserRouter>
    <div>
  <Header/>
<Section1/>
<Section2/>
<WhatWeDo/>
<PoliticalExp/>
<Clients/>
<About/>
<Contact/>
  <Footer/>
  </div>
  </BrowserRouter>
  );
}

export default App;
