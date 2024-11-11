import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import ImageLayer from "ol/layer/Image";
import ImageWMS from "ol/source/ImageWMS";

export default function MapComponent() {
  // useEffect -> an empty " [] " --> compo is load during first rendering only
  useEffect(() => {
    const imgLayer = new ImageLayer({
      source: new ImageWMS({
        url: "https://ahocevar.com/geoserver/wms",
        params:{
            "LAYERS": 'topp:states'
        }
      }),
    });

    const map = new Map({
      target: "map",
      layers: [imgLayer],
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <div
      style={{ height: "300px", width: "30%" }}
      id="map"
      className="map-container"
    />
  );
}
