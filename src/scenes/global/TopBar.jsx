import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, useTheme } from '@mui/material';
import InputBase from "@mui/material/InputBase";
import React, { useContext } from 'react';
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logoblack.png";
import { ColorModeContext, tokens } from '../../theme';


function TopBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const searchBarColor = colors.primary[600];
    return (
        <Box
            display="flex"
            justifyContent={"space-between"}
            p={2}
            
        >
            {/* STAR WARS LOGO */}
            <Box>
                <img src={theme.palette.mode === "dark" ? logo:logo2} alt="Logo"
                    style={{ width: 120, height:50}}
                ></img>
            </Box>

            {/* RIGHT SEARCHBOX AND ICONS */}
            <Box>
                {/* SEARCH BAR */}
                <Box display={"flex"}>
                    <Box backgroundColor={searchBarColor} borderRadius={3}>
                    <InputBase sx={{p:1,mt:1, ml: 2, flex: 1, height:25 }} placeHolder="search" />
                    <IconButton type='button' sx={{p:1}}>
                        <SearchIcon />
                    </IconButton>
                    </Box>
                


                {/* ICONS */}
               
                    <IconButton onClick={colorMode.toggleColorMode} sx={{mr:3}}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeIcon />
                        ) : (
                            <LightModeIcon />
                        )}
                    </IconButton>
                </Box>
            </Box>

        </Box>
    )
}

export default TopBar