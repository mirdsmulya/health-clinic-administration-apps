import delay from './delay';


let antrian= [
  {
    id: "sri-rezeki",
    name: "Sri Rezeki Indriana",
    gender: "Wanita",
    address: "Jl. Kamuncang No 11, Cisarua",
    lastArrived: "12/09/2018",
    age: "50",
    medicalHistory: [
      {date:"12/11/2018", diagnose: "Typhus", therapy: "Antibiotik"},
      {date:"04/06/2018", diagnose: "Flu & batuk", therapy: "Therabex"}
    ]

  }

];

class AntrianApi {
  static getAllAntrian() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], antrian));
        }, delay);
      });
  }

  static saveAntrian(data) {
    data = Object.assign({}, data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        antrian.push(data);
        resolve();
      }, delay);
    });

  }

  static deleteAntrian(data) {
    data = Object.assign({}, data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let indexOfdata = antrian.findIndex(data => {
          data.id == antrian.id;
        });
        resolve();
      }, delay);
    });


  }




}
export default AntrianApi;
