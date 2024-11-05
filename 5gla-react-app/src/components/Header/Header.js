import { AppBar, Typography, Toolbar } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
//<Container maxWidth="xl" />
export default function Header() {
  return (
    <header>
      <AppBar
        position="static"
        sx={{
          bgcolor: blueGrey[900],
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="div"
          href="/"
          align="center"
          sx={{ flexGrow: 1 }}
        >
          AquaBrain
        </Typography>

        <Toolbar
          sx={{
            bgcolor: grey[600],
          }}
        >
          <Link
            to="/"
            style={{
              padding: "10px",
              color: "#FFFFFF",
            }}
          >
            Startseite
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
}
