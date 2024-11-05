import { BottomNavigation } from "@mui/material";
import { Link } from "react-router-dom";
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
      <Link
        to="/impressum"
        style={{
          padding: "10px",
          color: "#FFFFFF",
        }}
      >
        Impressum
      </Link>
    </BottomNavigation>
  );
}
