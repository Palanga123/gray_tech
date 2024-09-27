import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/main/header & footer/header.jsx';
import Footer from './components/main/header & footer/footer.jsx';
import Main from './components/main/main/content.jsx';
import Contact from './components/main/contact/form.jsx';
import About from './components/main/about/about.jsx';
import Services from './components/main/main/services.jsx';



function App() 
{
    return (        

        <>
            <BrowserRouter>
                <Header/>

                <div className="w-full">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/services" element={<Services/>}/>                           
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
 
                <Footer/>
            </BrowserRouter>
        </>

    );
}

export default App;
