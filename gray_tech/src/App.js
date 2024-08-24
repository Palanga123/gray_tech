// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/main/testimonials/testimonials';
import Uq from './components/main/header/header2';
import Content from './components/main/main/content';
import Hero from './components/main/main/intro';
import Contact from './components/main/contact/form'



function App() 
{
    return (        

        <>
        
            <Uq/>
            <Hero/> 
            <Content/>
            <List/> 
            <Contact/>

        </>

    );
}

export default App;
