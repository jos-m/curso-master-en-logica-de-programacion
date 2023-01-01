class Hora {
    constructor() {
        this.horaActual = new Date();
        this.encendido = false;
        this.hora = this.horaActual.getHours();
        this.minutos = this.horaActual.getMinutes();
        this.segundos = this.horaActual.getSeconds();
    }
    actualizar(){
        this.segundos++;
        if (this.segundos > 59){
            this.minutos++
            this.segundos = 0;
        }
        if(this.minutos > 59){
            this.hora++;
            this.minutos = 0;
        }
        if (this.hora > 23){
            this.hora = 0;
        }
    }
    encender (){
        setInterval( ()=>{
            this.actualizar();
            console.log(`${this.hora}:${this.minutos}:${this.segundos}`)
        },1000),this
    }
}
a = new Hora;
a.encender();
//a.actualizar();

// Codigo del curso:
class Reloj {

  constructor() {
    this.fecha = new Date();
    this.horas = this.fecha.getHours();
    this.minutos = this.fecha.getMinutes();
    this.segundos = this.fecha.getSeconds();
  }

  actualizar(segundos) {
    this.segundos += segundos;

    // Actualizar segundos
    if (this.segundos >= 60) {
      this.minutos++;
      this.segundos = 0;
    }

    // Actualizar minutos
    if (this.minutos >= 60) { 
      this.horas++;
      this.minutos = 0;
    }

    // Actualizar horas
    if (this.horas >= 24) {
      this.horas = 0;
    }
  }

  mostrar() {
    this.actualizar(1);
    console.log(`${this.horas}:${this.minutos}:${this.segundos}`);
  }

  encender() {
    setInterval(() => {
      this.mostrar();
    }, 1000);
  }
}

let mi_reloj = new Reloj();
mi_reloj.encender();
