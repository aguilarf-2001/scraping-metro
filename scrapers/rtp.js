const db = require("../firebase");
const admin = require("firebase-admin");

async function actualizarRTP() {
  try {

    await db.collection("estado_servicio")
      .doc("rtp")
      .set({
        Estado: "Operando",
        Ultima_actualizacion: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

    console.log("RTP actualizado");

  } catch (error) {
    console.error("Error actualizando RTP:", error);
  }
}

module.exports = actualizarRTP;