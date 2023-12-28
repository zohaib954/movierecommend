import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleIcon from '@mui/icons-material/People';
import PetsIcon from '@mui/icons-material/Pets';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, menuClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
      <MenuItem
      active={selected === title}
      rootStyles={{
        [`.${menuClasses.button}`]: {
          backgroundColor: `${colors.primary[500]}`,
              color: 'white',
              "&:hover": {
                  backgroundColor: `${colors.pink[500]}!important`,
                  color:"white",
              },
              "&:active": {
                  backgroundColor: `${colors.pink[500]}!important`,
                  color:"white"
              },
               
          },
      }}
     
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography color={colors.ternary[900]}>{title}</Typography>
     
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box>
          <Sidebar collapsed={isCollapsed}
           rootStyles={{
            [`.${menuClasses.button}`]: {
                   backgroundColor: `${colors.primary[500]}`,
                   ml: -10,
                  height:"50px",
                  color: 'white',
                  "&:hover": {
                      backgroundColor: `${colors.pink[500]}`,
                      color:"white",
                  },
                  "&:active": {
                      backgroundColor: `${colors.pink[500]}`,
                      color:"white"
                  }
               },
               
               
          }}
          
          width={"150px"}>
              <Menu iconShape="square"
                
              >
          
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.primary[100],
            }}
           
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
               
              >
                 
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
           <Link to="/"
            style={{textDecoration:"none"}}
           > <Item
              title="Films"
              to="/"
              icon={<HomeMaxIcon />}
              selected={selected}
              setSelected={setSelected}
                      />
                          </Link>

            <Link to={"/people"}
              style={{ textDecoration: "none", color:`${colors.primary[500]}!important` }}
             
            >
                     
            <Item
              title="People"
              to="/people"
              icon={<PeopleIcon />}
              selected={selected}
              setSelected={setSelected}
                          />
                           </Link>
            <Item
              title="Planets"
              to="/planets"
              icon={<PublicIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Species"
              to="/species"
              icon={<PetsIcon />}
              selected={selected}
              setSelected={setSelected}
            />

             
            <Item
              title="Spaceship"
              to="/spaceship"
              icon={<RocketLaunchIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vehicle"
              to="/vehicle"
              icon={<ElectricCarIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;