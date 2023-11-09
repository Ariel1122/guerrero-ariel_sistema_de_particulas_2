// let sistema = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   angleMode(DEGREES);
//   // PARA DECLARAR LAS CIRCUFERENCIA EN GRADOS Y NO RADIANES
//   p = new Particula();
// }

// function draw() {
//   background(0, 50);
//   fill(0);
//   // noFill();
//   stroke(255);
//   // stroke(255, 20);
//   strokeWeight(2);
//   // tamaño del contorno de la linea -trazo
//   //  fill(0);
//   // // noFill();
//   // stroke(255);
//   // // stroke(255, 20);
//   // strokeWeight(2);
//   // // circle(mouseX, mouseY, 20);
//   // if (!p.estamuerta) {
//   //   // el signo de admiracion dentro de una variable boleana (verdadero o falso), hace una pregunta negativa
//   //   p.update();
//   //   p.display();
//   //   // p ya es un objeto construido por los blue prints.
//   // }

//   // creamos un sistema para el arrai[], cada segundo creo una nueva particula
//   let p = new Particula();
//   // agrego estos elementos al arrai
//   sistema.push(p);

//   // asemos que estos se repitan
//   // i menor que la cantidad del sistema
//   for (let i = 0; i < sistema.length; i++) {
//     // me pregunta si la particula esta muertam con if ya que es voleano
//     if (sistema[i].estamuerta) {
//       // eliminamos a las particulas que van muriendo, haciendo que la paicula se mantengan en un limite de numero
//       // splice me permite elminar un elemento del arrai, las particulas muertas, en nuestro caso eliminamos los elemento i que mueres
//       sistema.splice(i);
//       // si alguna muere la eliminamos del arrai
//     }
//   }

//   // otro for loop para visualizar las particulas vivas
//   for (let i = 0; i < sistema.length; i++) {
//     if (!p.estamuerta) {
//       // el signo de admiracion dentro de una variable boleana (verdadero o falso), hace una pregunta negativa
//       p.update();
//       p.display();
//       // p ya es un objeto construido por los blue prints.
//       print("esta muerta");
//     }
//   }
//   print(sistema.length);
// }

// // matematica de vectores
// // un ente gemetrico con dos componente. trayectoria determinada por un angulo. Magnitud, que tan grande es el vector.

// // PUSH PARA COLOCAR NUEVOS ELEMENTOS EN E ARRAI
// ---------------------------------
let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 50); // Fondo negro
  for (let i = particulas.length - 1; i >= 0; i--) {
    particulas[i].update();
    particulas[i].display();
    if (particulas[i].estaMuerta) {
      particulas.splice(i, 1);
    }
  }

  // Crea nuevas partículas automáticamente
  if (frameCount % 10 === 0) {
    particulas.push(new Particula(createVector(0, height)));
  }
}
