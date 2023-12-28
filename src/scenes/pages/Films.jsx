import ViewListIcon from '@mui/icons-material/ViewList';
import WindowIcon from '@mui/icons-material/Window';
import { Box, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { Dimmer, Loader } from "semantic-ui-react";
import "../../assets/style/style.css";
import FilmGrid from '../../components/FilmGrid';
import ListGrid from '../../components/ListGrid';
import { tokens } from "../../theme";





export default function Films() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(true);
  const [film, setFilm] = useState([]);
  const [button, setButton] = useState(true);

  
  
  useEffect(() => {
    async function fetchFilm() {
      let res = await fetch("https://swapi.dev/api/films/?format=json");
      let data = await res.json();
      setFilm(data.results);
    }
    fetchFilm();
    setLoading(false);
  }, [])

  const btnHandlerList = () => {
    setButton(false)
  }
  const btnHandlerGrid = () => {
    setButton(true)
  }
  return (
    <>
      <Box className="film-page">
        <Box className="film-topbar">
          <div>
            <Typography><h2>Films</h2></Typography>
          </div>
          <div>
            <ToggleButtonGroup
              orientation="horizontal"
              // value={view}
              exclusive
              
            >
              
              <ToggleButton className={`button-50 ${button ? 'mybtn-active' : ''} `} value="module" aria-label="module"
                 box-shadow= {`${colors.primary[500]} 4px 4px 0 0,#000 4px 4px 0 1px`}
                 onClick={btnHandlerGrid}
              >
                <WindowIcon />
              </ToggleButton>
               
              <ToggleButton className={`button-50 ${button===false ? 'mybtn-active' : ''} `} value="list" aria-label="list"
                 box-shadow= {`${colors.primary[500]} 4px 4px 0 0,#000 4px 4px 0 1px`}
                 onClick={btnHandlerList}
              >
                <ViewListIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

        </Box>
        {loading ? (
          < Dimmer active inverted>
            <Loader inverted>loading</Loader>
          </Dimmer>
        ) : (
            button === true ? (<FilmGrid data={film} />) : (<ListGrid data={ film} />)
        )}
      </Box>
      </>
  )
}

