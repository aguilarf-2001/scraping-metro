const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function scrape() {
  try {
    console.log("Probando escritura directa...");

    await db.collection("estado_servicio").doc("metro").set({
      estado: "Prueba Automática",
      actualizado: new Date(),
    });

    console.log("Actualizado correctamente");
  } catch (error) {
    console.error("Error:", error);
    throw error; // importante para que falle el workflow si hay error
  }
}

scrape();