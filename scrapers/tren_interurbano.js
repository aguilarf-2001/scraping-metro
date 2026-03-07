const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarTrenInterurbano() {
  try {

    const estados = {
      Linea_1: "Operando con Normalidad"
    };

    await db.collection("estado_servicio")
      .doc("tren_interurbano")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Tren Interurbano actualizado");

  } catch (error) {
    console.error("Error actualizando Tren Interurbano:", error);
  }
}

module.exports = actualizarTrenInterurbano;