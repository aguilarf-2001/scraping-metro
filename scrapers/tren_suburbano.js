const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarTrenSuburbano() {
  try {

    const estados = {
      Linea_1: "Operando con Normalidad"
    };

    await db.collection("estado_servicio")
      .doc("tren_suburbano")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Tren Suburbano actualizado");

  } catch (error) {
    console.error("Error actualizando Tren Suburbano:", error);
  }
}

module.exports = actualizarTrenSuburbano;