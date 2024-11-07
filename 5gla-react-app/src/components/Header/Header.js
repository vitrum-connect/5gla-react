import { AppBar, Typography, Toolbar, MenuItem } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const pages = ["Home", "Impressum"];

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
          {pages.map((page) => (
            <MenuItem key={page}>
              <Typography sx={{ textAlign: "center" }}>{page}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </header>
  );
}
