const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarTrenLigero() {
  try {

    const estados = {
      Linea_1: "Operando"
    };

    await db.collection("estado_servicio")
      .doc("tren_ligero")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Tren Ligero actualizado");

  } catch (error) {
    console.error("Error actualizando Tren Ligero:", error);
  }
}

module.exports = actualizarTrenLigero;