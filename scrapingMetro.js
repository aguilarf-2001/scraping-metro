const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function scrape() {
  try {
    console.log("Actualizando estado metro...");

    await db.collection("estado_servicio").doc("metro").update({
      Linea_1: "Operando",
      Linea_2: "Operando",
      Linea_3: "Operando",
      Linea_4: "Operando",
      Linea_5: "Operando",
      Linea_6: "Operando",
      Linea_7: "Operando",
      Linea_8: "Operando",
      Linea_9: "Operando",
      Linea_A: "Operando",
      Linea_B: "Operando",
      Linea_12: "Operando",
      Ultima_actualizacion: new Date()
    });

    console.log("Estado actualizado correctamente");

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

scrape();
