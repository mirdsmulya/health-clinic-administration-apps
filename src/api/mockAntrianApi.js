import delay from './delay';


let antrian= [
  {
    id: "sri-rezeki",
    number: '1',
    name: "Sri Rezeki Indriana",
    gender: "Wanita",
    address: "Jl. Kamuncang No 11, Cisarua",
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
          debugger;
        }, 0);
      });
  }

  static antrianUpdate(data) {
    data = Object.assign({}, data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let dataUpdate = antrian.filter(datap => datap.id == data.id);
        if (dataUpdate.length == 0) {
          data = null;
        } else {
          dataUpdate = dataUpdate.number;
          data.number = dataUpdate;
        }

        debugger;
        resolve(data);
      }, delay);
    });

  }

  static saveAntrian(data) {
    data = Object.assign({}, data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let number = antrian.length;
        number = number + 1;
        data.number = number;
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
