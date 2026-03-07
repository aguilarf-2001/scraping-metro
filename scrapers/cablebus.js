const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarCablebus() {
  try {

    const estados = {
      Linea_1: "Operando",
      Linea_2: "Operando",
      Linea_3: "Operando"
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