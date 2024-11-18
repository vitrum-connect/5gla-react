import { AppBar, Typography, Toolbar, MenuItem, Button } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const pages = ["Home"];

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
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </header>
  );
}
