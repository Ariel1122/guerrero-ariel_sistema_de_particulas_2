class Particula {
  constructor() {
    this.tamanoInicial = random(10, 50);
    this.tamano = this.tamanoInicial;
    this.estaMuerta = false;
    this.tiempoDeVidaInicial = Math.ceil(random(10, 300));
    this.tiempoDeVida = this.tiempoDeVidaInicial;
    // Math.cell = para tener numeros enteros

    this.pos = createVector(mouseX, mouseY);

    this.vel = createVector(0, random(1, 3));
    this.vel.rotate(random(360));

    this.g = createVector(0.1, -0.05);
    this.color = color(random(100, 200), 255, 0, 50);

    // loa angulos en p5 utilizan radianes
  }

  // Metodo ___ method update
  // funciones inernas de la clase se llaman metodos
  update() {
    // se calcula primero la gravedad
    this.vel.add(this.g);
    this.pos.add(this.vel);
    //   actualiza la posicion de la pelota, de manera aleatoria

    // cada ves que se ejecute update desde el draw se le va a mermar un punto de dibujo
    this.tamano = map(
      this.tiempoDeVida,
      0,
      this.tiempoDeVidaInicial,
      0,
      this.tamanoInicial
    );

    this.tiempoDeVida -= 1;

    if (this.tiempoDeVida <= 0) {
      this.estaMuerta = true;
      print("ups, me morí!");
      circle(this.pos.x, this.pos.y, this.tamanoInicial);
    }
  }

  display() {
    circle(this.pos.x, this.pos.y, this.tamano);
  }
}
