import { useEffect } from "react";
import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import ImageLayer from "ol/layer/Image";
import ImageWMS from "ol/source/ImageWMS";
import TileLayer from "ol/layer/Tile";
import PageContainer from "../Container/PageContainer";
import config from "../../config.json";

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
        center: [10.43969630922362, 52.90026358079064],
        zoom: 7,
      }),
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <div>
      <PageContainer id="map" height="60vh" />
    </div>
  );
}
