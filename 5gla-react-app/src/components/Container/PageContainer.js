import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// children props for individual container styling
export default function PageContainer(props) {
  return (
    <Container maxWidth="xl">
      <Box id={props.id} sx={{ height: props.height, mx: 'auto' }}></Box>
    </Container>
  );
}
