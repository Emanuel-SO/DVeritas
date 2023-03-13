/* import { useState } from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";

const FormSU = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, password });
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            marginTop: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            borderRadius: "20px",
            padding: "15px",
            margin: "15px",
            maxWidth: "500px",
            width: "0 auto",
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1067978744616206456/1084727330515202108/image.png"
            alt="Imagen de registro"
            style={{ objectFit: "cover", width: "80%", height: "auto", display: "block", margin: "auto" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            bgcolor: "#F2F2F2",
            borderRadius: "20px",
            border: "4px solid #276678",
            padding: "32px",
            margin: "32px",
            maxWidth: "500px",
            width: "0 auto",
          }}
        >
          <Typography variant="h5" mb={3} sx={{ fontFamily: "Lato, sans-serif", color: "#276678", fontSize: { xs: '2.5rem', sm: '3rem' } }}>
            Registrate
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
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
              <Button variant="contained" type="submit" sx={{ fontFamily:  "Lato, sans-serif", backgroundColor: "#276678 !important"  }}>
                Registrarme
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FormSU;  */

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
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            marginTop: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            borderRadius: "20px",
            padding: "15px",
            margin: "15px",
            maxWidth: "500px",
            width: "0 auto",
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1067978744616206456/1084727330515202108/image.png"
            alt="Imagen de registro"
            style={{ objectFit: "cover", width: "80%", height: "auto", display: "block", margin: "auto" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "fit-content",
            bgcolor: "#F2F2F2",
            borderRadius: "20px",
            border: "4px solid #276678",
            padding: "32px",
            margin: "32px",
            maxWidth: "500px",
            width: "0 auto",
          }}
        >
          <Typography variant="h5" mb={3} sx={{ fontFamily: "Lato, sans-serif", color: "#276678", fontSize: { xs: '2.5rem', sm: '3rem' } }}>
            Registrate
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
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
                label="Acepto los términos y condiciones"
                sx={{ fontFamily: "Lato, sans-serif", mb: 3 }}
              />
              <Button variant="contained" type="submit" sx={{ fontFamily:  "Lato, sans-serif", backgroundColor: "#276678 !important"  }}>
                Registrarme
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FormSU;  