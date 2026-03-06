const db = require("../firebase");

async function actualizarMetrobus() {

  const estados = {
    Linea_1: "Operando",
    Linea_2: "Operando",
    Linea_3: "Operando",
    Linea_4: "Operando",
    Linea_5: "Operando",
    Linea_6: "Operando",
    Linea_7: "Operando"
  };

  await db.collection("estado_servicio")
    .doc("metrobus")
    .set({
      ...estados,
      Ultima_actualizacion: new Date()
    }, { merge: true });

  console.log("Metrobús actualizado");
}

module.exports = actualizarMetrobus;