const axios = require("axios");
const cheerio = require("cheerio");
const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function scrape() {
  try {
    console.log("Iniciando scraping...");

    const response = await axios.get("https://AQUI_TU_URL_REAL");
    const $ = cheerio.load(response.data);

    // Ajusta según lo que parses
    const estado = "Normal";

    await db.collection("estadoServicio").doc("metro").set({
      estado: estado,
      actualizado: new Date(),
    });

    console.log("Actualizado correctamente");
  } catch (error) {
    console.error("Error:", error);
  }
}

scrape();
