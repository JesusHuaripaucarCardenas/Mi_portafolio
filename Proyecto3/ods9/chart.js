const contexto = document.getElementById("myChart").getContext("2d");
const conexion = ["Nacional", "Lima", "Urbano", "Rural"];
const info = [57, 78, 61, 18];

const myChart = new Chart(contexto, {
  type: "bar",
  data: {
    labels: conexion,
    datasets: [
      {
        label: "Peruanos con conexión a internet",
        data: info,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  },
});

const contexto2 = document.getElementById("myChart2").getContext("2d");
const paises = ["China", "USA", "Alemania", 'EU-27+El resto del mundo'];
const inversion = [676, 303, 95, 618];

const myChart2 = new Chart(contexto2, {
  type: "pie",
  data: {
    labels: paises,
    datasets: [
      {
        label: "Millones de dolares invertidos en energia limpia",
        data: inversion,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  },
});
