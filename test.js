const { LokaliseApi } = require("@lokalise/node-api");

const lokaliseApi = new LokaliseApi({
  apiKey: "0e22eb37649dafbca29396f3d37ba5c5d3d40f9d",
});

(async function main() {
  const projects = await lokaliseApi
    .files()
    .download("2847011262416e7f5d20d7.21782814", {
      format: "json",
      original_filenames: true,
    });
  //   const projects = await lokaliseApi.projects().list();

  console.log(projects);
})();
