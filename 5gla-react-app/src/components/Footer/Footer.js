import { BottomNavigation, Typography, Container } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function Footer() {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        backgroundColor: blueGrey[900],
        position: "absolute",
        bottom: 0,
      }}
    >
      <Typography
        variant="h5"
        noWrap
        color=""
        component="div"
        href="/"
        align="center"
        sx={{ flexGrow: 1, color:'#FFFFFF' }}
      >
        AquaBrain
      </Typography>
    </BottomNavigation>
  );
}
