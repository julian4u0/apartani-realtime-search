var map;
mapboxgl.accessToken =
  "pk.eyJ1IjoianVsaWFudXN1IiwiYSI6ImNrbm56dWU3ZjEzZ2Uyb21vMXRpaHp0bDMifQ.jOaoVuPdkcgQcpgq7yHz1Q";

var initial_point = [-74.039882, 4.697];

console.info("wawawa");
map = new mapboxgl.Map({
  container: "map-container",
  style: "mapbox://styles/mapbox/light-v10",
  center: initial_point,
  zoom: 15,
});

const template = document.getElementById("template");

var point = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: initial_point,
      },
    },
  ],
};

map.on("load", function () {
  map.addSource("pointpos", {
    type: "geojson",
    data: point,
  });

  map.addLayer({
    id: "pointpos",
    source: "pointpos",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#3887be",
    },
  });
  add_new("asdf", -74.0393, 4.6975);
  add_new("cabeza", -74.0343, 4.6925);
  add_new("13ad", -74.03243, 4.6825);
});

function add_new(pid, lat, lon) {
  console.log("Added!");
  var el = document.createElement("div");
  el.classList = "marker";
  el.id = pid;

  el.addEventListener("click", function () {
    var currentDiv = document.getElementById("properties-list");
    const firstClone = template.content.cloneNode(true);
    currentDiv.appendChild(firstClone);
    console.log("Clicked!");
  });

  new mapboxgl.Marker(el).setLngLat([lat, lon]).addTo(map);
}
