import { Box, Container, Typography } from "@mui/material";

function ImpressumPage() {

  return (
    <>
      <Box>
        <Container maxWidth="xl" sx={{ textAlign: "left" }}>
          <Typography variant="h3">Impressum</Typography>
          <Typography variant="body2">
            Anghaben gemäß § 5 TMG <br />
            Landkreis Uelzen <br />
            Albrecht-Thaer-Straße 101 <br />
            29525 Uelzen <br />
            Vertreten durch: <br />
            Landrat Dr. Heiko Blume <br />
            Kontakt <br />
            Telefon: +49(0)581 / 82-D <br />
            E-Mail: <u>5gla@landkreis-uelzen.de</u> <br />
            Umsatzsteuer-ID <br />
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz{" "}
            <br />
            DE116678257 <br />
            Redaktionell verantwortlich <br />
            Thies-Benedict Lüdtke, Alisa Lunow <br />
            Verbraucherstreitbeteiligung/Universalschlichtungsstelle <br />
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeteiligungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen <br />
            Quelle: <u>eRecht24</u> <br />
            Haftungsausschluss: <br />
            1. Inhalt des Onlineangebotes <br />
            Der Landkreis Uelzen (Landkreis) übernimmt keinerlei Gewähr für die
            Aktualität, Korrektheit, Vollständigkeit oder Qualität der
            bereitgestellten Informationen. Haftungsansprüche, welche sich auf
            Schäden materieller oder ideeller Art beziehen, die durch die
            Nutzung oder Nichtnutzung der <br />
            dargebotenen Informat
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default ImpressumPage;
