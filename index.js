const actualizarMetro = require("./scrapers/metro");
const actualizarMetrobus = require("./scrapers/metrobus");

async function ejecutarScrapers() {

  console.log("Iniciando scrapers...");

  await actualizarMetro();
  await actualizarMetrobus();

  console.log("Scraping terminado");
}

ejecutarScrapers();