const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarMexibus() {
  try {

    const estados = {
      Linea_1: "Operando",
      Linea_1A: "Operando",
      Linea_2: "Operando",
      Linea_2A: "Operando",
      Linea_3: "Operando",
      Linea_3A: "Operando",
      Linea_4: "Operando"
    };

    await db.collection("estado_servicio")
      .doc("mexibus")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Mexibús actualizado");

  } catch (error) {
    console.error("Error actualizando Mexibús:", error);
  }
}

module.exports = actualizarMexibus;