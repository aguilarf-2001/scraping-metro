const scrapeMetro = require("./scrapers/metro");
const scrapeMetrobus = require("./scrapers/metrobus");
const scrapeCablebus = require("./scrapers/cablebus");
const scrapeMexibus = require("./scrapers/mexibus");
const scrapeMexicable = require("./scrapers/mexicable");
const scrapeRTP = require("./scrapers/rtp");
const scrapeCorredor = require("./scrapers/corredor");
const scrapeTrenInterurbano = require("./scrapers/tren_interurbano");
const scrapeTrenLigero = require("./scrapers/tren_ligero");
const scrapeTrenSuburbano = require("./scrapers/tren_suburbano");
const scrapeTrolebus = require("./scrapers/trolebus");

async function runScrapers() {
  try {
    console.log("Iniciando scrapers...");

    await Promise.all([
      scrapeMetro(),
      scrapeMetrobus(),
      scrapeCablebus(),
      scrapeMexibus(),
      scrapeMexicable(),
      scrapeRTP(),
      scrapeCorredor(),
      scrapeTrenInterurbano(),
      scrapeTrenLigero(),
      scrapeTrenSuburbano(),
      scrapeTrolebus()
    ]);

    console.log("Todos los scrapers terminaron correctamente");

  } catch (error) {
    console.error("Error ejecutando scrapers:", error);
    process.exit(1);
  }
}

runScrapers();