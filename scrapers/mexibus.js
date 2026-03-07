const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarMexibus() {
  try {

    const estados = {
      Linea_1: "Operando con Normalidad",
      Linea_1A: "Operando con Normalidad",
      Linea_2: "Operando con Normalidad",
      Linea_2A: "Operando con Normalidad",
      Linea_3: "Operando con Normalidad",
      Linea_3A: "Operando con Normalidad",
      Linea_4: "Operando con Normalidad"
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