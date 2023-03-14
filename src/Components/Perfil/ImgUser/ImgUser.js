import { Avatar, Container, Grid, Typography, useMediaQuery } from "@mui/material";

const ImgUser = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={6} sm={6} sx={{ textAlign: "right" }}>
                <Avatar
                    alt="Person"
                    src="https://i0.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1"
                    sx={{
                    width: matches ? 100 : 150,
                    height: matches ? 100 : 150,
                    border: "3px solid #276678",
                    marginLeft: matches ? "auto" : "inherit",
                    marginRight: "0",
                    alignItems: "right"
                    }}
                />
                </Grid>
        <Grid item xs={6} sm={6} sx={{ textAlign: matches ? "left" : "left" }}>
          <Typography
            sx={{
              fontFamily: "Lato, sans-serif",
              fontSize: matches ? "18px" : "34px",
              fontWeight: "bold",
              marginLeft: matches ? "20px" : "0",
              color: "#276678"
            }}
          >
            Sam Guy
          </Typography>
          <Typography
           sx={{
             fontFamily: "Lato, sans-serif",
             fontSize: matches ? "16px" : "24px",
             fontWeight: "bold",
             textAlign: matches ? "center" : "left",
             color: "#1687A7",
        }}
        >
        @samguy
        </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImgUser;



