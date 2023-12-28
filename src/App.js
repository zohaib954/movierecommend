import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import Films from "./scenes/pages/Films";
import People from "./scenes/pages/People";
import Planets from "./scenes/pages/Planets";
import Species from "./scenes/pages/Species";
import StarShips from "./scenes/pages/StarShips";
import Vehicles from "./scenes/pages/Vehicles";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }
    fetchPeople();
    setLoading(false);
  }, [])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <TopBar setIsSidebar={setIsSidebar} />
        <div className="app">
          <main className="content">
            <SideBar isSidebar={isSidebar} className="sidebar" />
            <div className="main">
              
                
                <Routes>
              <Route path="/" element={<Films />}  />
              <Route path="/people" element={<People data={people}/>} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/species" element={<Species />} />
              <Route path="/starships" element={<StarShips />} />
              <Route path="/vehicles" element={<Vehicles />} />
            </Routes>
                  
            
            </div>
          </main>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
