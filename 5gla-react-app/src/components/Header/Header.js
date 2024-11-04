import {
  AppBar,
  Typography,
  Container,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function Header() {
  return (
    <header>
      <AppBar
        position="static"
        sx={{
          bgcolor: blueGrey[900],
        }}
      >
        <Container maxWidth="xl" />
        <Typography
          variant="h1"
          noWrap
          component="div"
          href="/"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          AquaBrain
        </Typography>
      </AppBar>
    </header>
  );
}
