const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarMetro() {
  try {

    const estados = {
      Linea_1: "Operando con Normalidad",
      Linea_2: "Operando con Normalidad",
      Linea_3: "Operando con Normalidad",
      Linea_4: "Operando con Normalidad",
      Linea_5: "Operando con Normalidad",
      Linea_6: "Operando con Normalidad",
      Linea_7: "Operando con Normalidad",
      Linea_8: "Operando con Normalidad",
      Linea_9: "Operando con Normalidad",
      Linea_A: "Operando con Normalidad",
      Linea_B: "Operando con Normalidad",
      Linea_12: "Operando con Normalidad"
    };

    await db.collection("estado_servicio")
      .doc("metro")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Metro actualizado");

  } catch (error) {
    console.error("Error actualizando Metro:", error);
  }
}

module.exports = actualizarMetro;