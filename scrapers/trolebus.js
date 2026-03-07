const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarTrolebus() {
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
      Linea_10: "Operando con Normalidad",
      Linea_11: "Operando con Normalidad",
      Linea_12: "Operando con Normalidad",
      Linea_13: "Operando con Normalidad"
    };

    await db.collection("estado_servicio")
      .doc("trolebus")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Trolebús actualizado");

  } catch (error) {
    console.error("Error actualizando Trolebús:", error);
  }
}

module.exports = actualizarTrolebus;