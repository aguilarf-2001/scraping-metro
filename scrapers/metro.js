const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarMetro() {
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
      Linea_A: "Operando",
      Linea_B: "Operando",
      Linea_12: "Operando"
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