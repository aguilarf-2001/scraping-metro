const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarMexicable() {
  try {

    const estados = {
      Linea_1: "Operando",
      Linea_2: "Operando"
    };

    await db.collection("estado_servicio")
      .doc("mexicable")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Mexicable actualizado");

  } catch (error) {
    console.error("Error actualizando Mexicable:", error);
  }
}

module.exports = actualizarMexicable;