const scrapeMetro = require("./scrapers/metro");
const scrapeMetrobus = require("./scrapers/metrobus");

async function runScrapers() {
  try {
    console.log("Iniciando scrapers...");

    await Promise.all([
      scrapeMetro(),
      scrapeMetrobus()
    ]);

    console.log("Scrapers completados");

  } catch (error) {
    console.error("Error ejecutando scrapers:", error);
    process.exit(1);
  }
}

runScrapers();