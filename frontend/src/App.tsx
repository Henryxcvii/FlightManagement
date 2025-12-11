import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './App.css';

function App() {
  return (
    <>  
        <div id='app'>
            <header>
                <h1 id='headline'>Dashboard</h1>
            </header>
            <div id='div_body'>
                <div id='div_sidebar'>
                    <Button href='/'>Dashboard</Button>
                    <Button href='/metar'>Metar</Button>
                    <Button href='/flightplan'>Flugplan</Button>
                </div>
                <div id='div_content'>
                    <BrowserRouter>
                        <Routes>
                        <Route path="/" element={<p>value</p>} />
                        <Route path="/metar" element={<h1>Metar</h1>} />
                        <Route path="/flightplan" element={<h1>Flugplan</h1>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    </>
  );
}
 
export default App;
