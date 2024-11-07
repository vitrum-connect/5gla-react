import { BottomNavigation, MenuItem, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";

const pages = ["Impressum"];

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
      <Toolbar>
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
    </BottomNavigation>
  );
}
