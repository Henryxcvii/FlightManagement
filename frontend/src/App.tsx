    import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
    import CloudIcon from '@mui/icons-material/Cloud';
    import DashboardIcon from '@mui/icons-material/Dashboard';
    import Metar from './pages/Metar.page';
    import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
    import FlightPlan from './pages/FlightPlan.page';
    import './App.css';
    import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

    function App() {
    return (
        <>  
            <div id='app'>
                <header>
                    <h1 id='headline'>Dashboard</h1>
                </header>
                <div id='div_body'>
                    <div id="div_sidebar">
                        <List component="nav">
                            <ListItemButton className='btn' href="/">
                                <ListItemIcon><DashboardIcon /></ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>

                            <ListItemButton href="/metar">
                                <ListItemIcon><CloudIcon /></ListItemIcon>
                                <ListItemText primary="Metar" />
                            </ListItemButton>

                            <ListItemButton href="/flightplan">
                                <ListItemIcon><FlightTakeoffIcon /></ListItemIcon>
                                <ListItemText primary="Flugplan" />
                            </ListItemButton>
                        </List>
                    </div>
                    <div id='div_content'>
                        <BrowserRouter>
                            <Routes>
                            <Route path="/" element={<p>value</p>} />
                            <Route path="/metar" element={<Metar />} />
                            <Route path="/flightplan" element={<FlightPlan />} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </>
    );
    }
    
    export default App;
