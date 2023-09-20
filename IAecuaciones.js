// Define las operaciones matemáticas que puede entender la IA
const operaciones = {
    "suma": (a, b) => a + b,
    "resta": (a, b) => a - b,
    "multiplicación": (a, b) => a * b,
    "división": (a, b) => a / b,
  };
  
  // Define una función para evaluar una ecuación
  function evaluarEcuacion(ecuacion) {
    // Divide la ecuación en dos partes: los operandos y el operador
    const [operando1, operador, operando2] = ecuacion.split(" ");
  
    // Comprueba que la ecuación es válida
    if (!operaciones.hasOwnProperty(operador)) {
      throw new Error("Operador no válido");
    }
  
    // Devuelve el resultado de la evaluación
    return operaciones[operador](Number(operando1), Number(operando2));
  }
  
  // Prueba la IA
  /* console.log(evaluarEcuacion("2 + 2")); // 4
  console.log(evaluarEcuacion("10 - 5")); // 5
  console.log(evaluarEcuacion("2 * 3")); // 6
  console.log(evaluarEcuacion("10 / 2")); // 5 */
  