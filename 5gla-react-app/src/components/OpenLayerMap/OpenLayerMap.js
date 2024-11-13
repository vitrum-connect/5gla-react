import { useEffect } from "react";
import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import ImageLayer from "ol/layer/Image";
import ImageWMS from "ol/source/ImageWMS";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TileLayer from "ol/layer/Tile";

export default function MapComponent() {
  // useEffect -> an empty " [] " --> compo is load during first rendering only
  useEffect(() => {
    const layers = [
      new TileLayer({
        source: new OSM(),
      }),

      new ImageLayer({
        source: new ImageWMS({
          url: "https://ahocevar.com/geoserver/wms",
          params: {
            LAYERS: "topp:states",
          },
        }),
      }),
    ];

    const map = new Map({
      target: "map",
      layers: layers,
      view: new View({
        center: [52.90026358079064, 10.43969630922362],
        zoom: 5,
      }),
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <div>
      <Container>
        <Box id="map" sx={{ height: "60vh", border: 1 }}></Box>
      </Container>
    </div>
  );
}
