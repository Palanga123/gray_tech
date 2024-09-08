// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/main/testimonials/testimonials.jsx';
import Header from './components/main/header & footer/header.jsx';
import Footer from './components/main/header & footer/footer.jsx';
import Content from './components/main/main/content.jsx';
import Hero from './components/main/main/intro.jsx';
import Contact from './components/main/contact/form.jsx'



function App() 
{
    return (        

        <>
        
            <Header/>
            <Hero/> 
            <Content/>
            <List/> 
            <Contact/>
            <Footer/>

        </>

    );
}

export default App;
