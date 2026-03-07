const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarMetrobus() {
  try {

    const estados = {
      Linea_1: "Operando con Normalidad",
      Linea_2: "Operando con Normalidad",
      Linea_3: "Operando con Normalidad",
      Linea_4: "Operando con Normalidad",
      Linea_5: "Operando con Normalidad",
      Linea_6: "Operando con Normalidad",
      Linea_7: "Operando con Normalidad"
    };

    await db.collection("estado_servicio")
      .doc("metrobus")
      .set({
        ...estados,
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("Metrobús actualizado");

  } catch (error) {
    console.error("Error actualizando Metrobús:", error);
  }
}

module.exports = actualizarMetrobus;