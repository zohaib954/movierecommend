import { Box, Grid, Typography, useTheme } from "@mui/material";
import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.png";
import img5 from "../assets/images/img-5.jpeg";
import img6 from "../assets/images/img-6.jpg";
import "../assets/style/style.css";
import { tokens } from "../theme";

function FilmGrid({data}) {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <Grid container spacing={3} className="film-grid">

          {data.map((film, i) => {
            let desc = film.opening_crawl;
          return (

            <Grid item xs={4} key={i} className="grid-card">
              <img src={images[i]} alt="" />
              <Box backgroundColor={colors.primary[500]} className="film-desc">

                <div >
                  <div className="film-title">
                <Typography color={`${colors.ternary[700]}!important`}><h3 >{film.title}</h3></Typography>
                  <Typography color={colors.ternary[600]}><p>Episode { film.episode_id }</p></Typography>
                  </div>
                  <Typography>{ desc.substring(0,100)+'...'}</Typography>
                <Typography color={colors.ternary[600]}><h4>Release Date { film.release_date }</h4></Typography>
                </div>
              </Box>
            </Grid>
            
          )
        })}
         </Grid>
  )
}

export default FilmGrid