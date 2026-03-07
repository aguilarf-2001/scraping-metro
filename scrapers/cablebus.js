const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarCablebus() {
  try {

    const estados = {
      Linea_1: "Operando con Normalidad",
      Linea_2: "Operando con Normalidad",
      Linea_3: "Operando con Normalidad"
    };

    await db.collection("estado_servicio")
      .doc("cablebus")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Cablebús actualizado");

  } catch (error) {
    console.error("Error actualizando Cablebús:", error);
  }
}

module.exports = actualizarCablebus;