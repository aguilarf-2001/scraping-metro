const axios = require("axios");
const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function scrape() {
  try {
    console.log("Iniciando scraping Metro...");

    const url = "https://www.metro.cdmx.gob.mx/estado-del-servicio";

    const response = await axios.get(url, {
      timeout: 15000,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "es-MX,es;q=0.9",
      },
    });

    const html = response.data;

    if (!html || html.length < 100) {
      throw new Error("HTML vacío o incompleto");
    }

    console.log("Scraping exitoso");

    await db.collection("estado_servicio").doc("metro").set(
      {
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    console.log("Firestore actualizado correctamente");

  } catch (error) {
    console.error("Error scraping:", error.message);
    process.exit(1);
  }
}

scrape();