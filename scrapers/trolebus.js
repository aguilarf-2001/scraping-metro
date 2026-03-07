const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarTrolebus() {
  try {

    const estados = {
      Linea_1: "Operando",
      Linea_2: "Operando",
      Linea_3: "Operando",
      Linea_4: "Operando",
      Linea_5: "Operando",
      Linea_6: "Operando",
      Linea_7: "Operando",
      Linea_8: "Operando",
      Linea_9: "Operando",
      Linea_10: "Operando",
      Linea_11: "Operando",
      Linea_12: "Operando",
      Linea_13: "Operando"
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