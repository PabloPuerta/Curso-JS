// 1. Concatena dos cadenas de texto

// 2. Muestra la longitud de una cadena de texto

// 3. Muestra el primer y último carácter de un string

// 4. Convierte a mayúsculas y minúsculas un string

// 5. Crea una cadena de texto en varias líneas

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud

// SOLUCIONES

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1. Concatena dos cadenas de texto
console.log("Ejercicio 1: Concatena dos cadenas de texto");
rl.question("Introduce la primera cadena de texto: ", (cadena1) => {
  rl.question("Introduce la segunda cadena de texto: ", (cadena2) => {
    console.log(`Aquí tienes el resultado: ${cadena1} ${cadena2}`);

    // 2. Muestra la longitud de una cadena de texto
    console.log("\nEjercicio 2: Muestra la longitud de una cadena de texto");
    rl.question("Introduce tu cadena de texto: ", (cadenaUsuario) => {
      console.log(`La longitud de tu cadena es: ${cadenaUsuario.length}`);

      // 3. Muestra el primer y último carácter de un string
      console.log(
        "\nEjercicio 3: Muestra el primer y último carácter de un string"
      );
      rl.question("Introduce una cadena de texto: ", (cadenaUsuario2) => {
        longitudCadena = cadenaUsuario2.length;
        console.log(
          `El primer caracter es : "${cadenaUsuario2.charAt(
            0
          )}" y el último es "${cadenaUsuario2.charAt(longitudCadena - 1)}"`
        );

        // 4. Convierte a mayúsculas y minúsculas un string
        console.log(
          "\nEjercicio 4: Convierte a mayúsculas y minúsculas un string"
        );
        rl.question("Introduce una cadena de texto: ", (cadenaMinus) => {
          const cadenaMayus = cadenaMinus.toUpperCase();
          console.log(
            `La cadena introducida en mayúsculas queda de esta manera: ${cadenaMayus}`
          );

          // 5. Crea una cadena de texto en varias líneas
          console.log(
            "\nEjercicio 5: Crea una cadena te texto en varias lineas"
          );
          console.log("Esto es una cadena de texto \nEn dos lineas");

          // 6. Interpola el valor de una variable en un string
          console.log(
            "\nEjercicio 6: Interpola el valor de una variable en un string"
          );
          variableNum = 9;
          console.log(
            `Esto es una cadena inerpolada con una variable ${variableNum}`
          );

          // 7. Reemplaza todos los espacios en blanco de un string por guiones
          console.log(
            "\nEjercicio 7: Reemplaza todos los espacios en blanco de un string por guiones"
          );
          cadenaString =
            "Esto es una cadena con espacios reemplazados por guiones";
          console.log(`${cadenaString.replaceAll(" ", "-")}`);

          // 8. Comprueba si una cadena de texto contiene una palabra concreta
          console.log(
            "\nEjercicio 8: Comprueba si una cadena de texto contiene una palabra concreta"
          );

          rl.question(
            "Introduce una cadena de texto y compruebo si la palabra CASA está en ella\n",
            (cadenaUsuario8) => {
              if (cadenaUsuario8.toLowerCase().includes("casa")) {
                console.log(
                  "La cadena de texto introducida SI contiene la palabra casa"
                );
              } else {
                console.log(
                  "La cadena de texto intoducida NO contiene la palabra casa"
                );
              }

              // 9. Comprueba si dos strings son iguales
              console.log(
                "\nEjercicio 9: Comprueba si dos strings son iguales"
              )

              rl.question(
                "Introduce la primera cadena de texto: ",
                (cadenaString1) => {
                  rl.question(
                    "Introduce la segunndo cadena de texto: ",
                    (cadenaString2) => {
                      if (cadenaString1 == cadenaString2) {
                        console.log("Las cadenas introducidas son iguales");
                      } else {
                        console.log("Las cadenas introducidas NO son iguales");
                      }
                    }
                  );
                }
              )
            }
          );
        });
      });
    });
  });
});
