// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/main/testimonials/testimonials';
import Header from './components/main/header/header';
import Content from './components/main/main/content';
import Hero from './components/main/main/intro';
import Contact from './components/main/contact/form'



function App() 
{
    return (        

        <>
        
            <Header/>
            <Hero/> 
            <Content/>
            <List/> 
            <Contact/>

        </>

    );
}

export default App;
