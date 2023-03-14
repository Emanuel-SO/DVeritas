import { useState } from "react";
import { Grid, Box, Typography, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const FormSU = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, password, isChecked });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12} md={8} sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
          <Typography variant="h5" mb={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Lato, sans-serif", color: "#276678", fontSize: { xs: '2.5rem', sm: '3rem' } }}>
            Registrate
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "500px"}}>
              <TextField
                label="Correo electrónico"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{fontFamily: "Lato, sans-serif", mb: 3}}
              />
              <TextField
                label="Nombre de usuario"
                variant="outlined"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{fontFamily: "Lato, sans-serif", mb: 3}}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{fontFamily: "Lato, sans-serif", mb: 3}}
              />
              <FormControlLabel
                control={<Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />}
                label={
                  <Typography component="a" href="/" target="_blank" rel="noopener">
                    Acepto los términos y condiciones
                  </Typography>
                }
                sx={{ fontFamily: "Lato, sans-serif", mb: 3 }}
              />
              <Button variant="contained" type="submit" sx={{ fontFamily:  "Lato, sans-serif",   bgcolor: '#1687A7',
    '&:hover': {
      bgcolor: '#125E75',
    },
 }}>
                Registrarme
              </Button>
            </Box>
          </form>
      </Grid>
    </div>
  );
};

export default FormSU;