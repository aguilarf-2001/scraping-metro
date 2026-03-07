const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarCorredores() {
  try {

    await db.collection("estado_servicio")
      .doc("corredores")
      .set({
        Estado: "Operando",
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Corredores actualizado");

  } catch (error) {
    console.error("Error actualizando Corredores:", error);
  }
}

module.exports = actualizarCorredores;