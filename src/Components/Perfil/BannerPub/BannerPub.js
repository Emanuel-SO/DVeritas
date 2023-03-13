/*  import { Box, Typography } from "@mui/material";

const BannerPub = () => {
  return (
    <Box sx={{ backgroundColor: "#276678", padding: "20px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px"}}>
      <Typography variant="h4" sx={{ fontFamily: "Lato, sans-serif", color: "#fff" }}>
        Mis publicaciones
      </Typography>
    </Box>
  );
};

export default BannerPub;*/

import { Box, Typography, Grid } from "@mui/material";

const BannerPub = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Box sx={{ backgroundColor: "#276678", padding: "10px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
          <Typography variant="h5" sx={{ fontFamily: "Lato, sans-serif", color: "#fff", fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            Mis publicaciones
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BannerPub;






