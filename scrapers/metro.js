const db = require("../firebase");

async function actualizarMetro() {

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
      Ultima_actualizacion: new Date()
    }, { merge: true });

  console.log("Metro actualizado");
}

module.exports = actualizarMetro;