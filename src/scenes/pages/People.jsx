import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, Grid, Typography, useTheme } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import "../../assets/style/style.css";
import { tokens } from "../../theme";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function People({data}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

 
  return (
    <Box>
      <Box className="film-topbar">
          <div>
            <Typography><h2>People</h2></Typography>
          </div>
        <div></div>
      </Box>

      <div>
        {

          data.map((people, i) => {
            
            return (
              <Accordion expanded={expanded === `${i}`} onChange={handleChange(`${i}`)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography><h2>{ people.name }</h2></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <Typography><h4>Date of Birth:- {people.birth_year }</h4></Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography><h4>Gender:- {people.gender }</h4></Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography><h4>Hair Color:- {people.hair_color }</h4></Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography><h4>Height:- {people.height }</h4></Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography><h4>Mass:-{people.mass }</h4></Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography><h4>Skin color:- {people.skin_color }</h4></Typography>
                  </Grid>
                </Grid>
                </AccordionDetails>
              </Accordion>
            )
          })
        }
     
    </div>
      

    </Box>
  )
}

export default People