// class Particula {
//   constructor() {
//     this.tamanoInicial = random(10, 50);
//     this.tamano = this.tamanoInicial;
//     this.estaMuerta = false;
//     this.tiempoDeVidaInicial = Math.ceil(random(10, 300));
//     this.tiempoDeVida = this.tiempoDeVidaInicial;
//     // Math.cell = para tener numeros enteros

//     this.pos = createVector(100, windowHeight / 1.1);

//     this.vel = createVector(0.5, random(-0.5, 0.5));
//     this.vel.multi(random(2, 5)); //multiplica la melocidad para un movimiento mas rapido
//     this.vel.rotate(random(360));

//     this.g = createVector(0.1, -0.05);
//     this.color = color(random(100, 200), 255, 0, 50);

//     // loa angulos en p5 utilizan radianes
//   }

//   // Metodo ___ method update
//   // funciones inernas de la clase se llaman metodos
//   update() {
//     // Modifica la posición inicial de las partículas y la dirección de movimiento
//     this.pos.add(this.vel);

//     // se calcula primero la gravedad
//     this.vel.add(this.g);
//     // cada ves que se ejecute update desde el draw se le va a mermar un punto de dibujo
//     this.tamano = map(
//       this.tiempoDeVida,
//       0,
//       this.tiempoDeVidaInicial,
//       0,
//       this.tamanoInicial * 2 //aumenta el tamaño al moverse a la derecha
//     );

//     this.tiempoDeVida -= 1;

//     if (this.tiempoDeVida <= 0) {
//       this.estaMuerta = true;
//       print("ups, me morí!");
//       circle(this.pos.x, this.pos.y, this.tamanoInicial);
//     }

//     // Modifica la posición inicial de las partículas y la dirección de movimiento
//     this.pos.add(this.vel);
//     // Modifica la siguiente línea para hacer que las pelotas se desvanezcan
//     this.color.setAlpha(
//       map(this.tiempoDeVida, 0, this.tiempoDeVidaInicial, 0, 255)
//     );
//   }

//   display() {
//     circle(this.pos.x, this.pos.y, this.tamano);
//   }
// }
class Particula {
  constructor() {
    this.tamanoInicial = random(10, 50);
    this.tamano = this.tamanoInicial;
    this.estaMuerta = false;
    this.tiempoDeVidaInicial = Math.ceil(random(10, 300));
    this.tiempoDeVida = this.tiempoDeVidaInicial;

    this.pos = createVector(100, windowHeight / 1.1);

    // Ajusta la velocidad inicial para que las partículas se muevan más rápido hacia la derecha
    this.vel = createVector(0.5, random(-0.5, 0.5));
    this.vel.mult(random(2, 5)); // Multiplica la velocidad para un movimiento más rápido
    this.vel.rotate(random(360));

    this.g = createVector(0.1, -0.05);
    this.color = color(random(100, 200), 255, 0, 50);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.g);

    // Ajusta la tasa de crecimiento del tamaño y el tiempo de vida
    this.tamano = map(
      this.tiempoDeVida,
      0,
      this.tiempoDeVidaInicial,
      0,
      this.tamanoInicial * 2 // Aumenta el tamaño máximo a medida que se mueven a la derecha
    );

    this.tiempoDeVida -= 1;

    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      print("Ups, me morí!");
      noStroke();
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, this.tamanoInicial * 2);
    }

    // this.color.setAlpha(
    //   map(this.tiempoDeVida, 0, this.tiempoDeVidaInicial, 0, 255)
    // );
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.tamano);
  }
}
