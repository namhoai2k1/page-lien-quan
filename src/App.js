import NavMenu from './components/NavMenu/NavMenu';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Player from './pages/Player';
import Highlights from './pages/Highlights';
import SmoothScrollbar from './components/SmoothScorollbar/SmoothScrollbar';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            {' '}
            <main className="main">
                {' '}
                {/* <SmoothScrollbar /> */}
                <NavMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="player" element={<Player />} />
                    <Route path="highlights" element={<Highlights />} />
                </Routes>
            </main>{' '}
            <Footer />
        </>
    );
}

export default App;
