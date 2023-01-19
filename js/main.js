const ejercicios = [
  {
    nombre: "back squat",
    tren: "inferior",
    musculo: "cuadriceps",
    rm: "100",
  },

  {
    nombre: "deadlift",
    tren: "inferior",
    musculo: "femorales",
    rm: "200",
  },

  {
    nombre: "shoulder press",
    tren: "superior",
    musculo: "Hombros",
    rm: "50",
  },

  {
    nombre: "push jerk",
    tren: "superior",
    musculo: "hombros",
    rm: "65",
  },

  {
    nombre: "dominadas",
    tren: "superior",
    musculo: "dorsales",
    rm: "10",
  },
];

ejercicios.forEach((ejercicios) => {
  if (ejercicios.rm < 100) {
    console.log(ejercicios.nombre);
  }
});
