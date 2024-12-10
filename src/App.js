import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Login } from './components/Login';

const HomePage = () => {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <Footer />

    </div>



  );
}
function App() {
  return (
    <Router> {/* Wrap Routes inside Router */}
      <Routes>
        {/* التوجيه إلى الصفحة الرئيسية */}
        <Route path="/" element={<HomePage />} />
        {/* التوجيه إلى صفحة تسجيل الدخول */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

);
}


export default App;
