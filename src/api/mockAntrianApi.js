import delay from './delay';


let antrian= [
  {
    id: "sri-rezeki",
    number: 1,
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
        /*
        const existingDataIndex = antrian.findIndex(a => a.id == data.id);
        let dataUpdate = antrian.filter(datap => datap.id == data.id);
        dataUpdate = dataUpdate[0];
        data.number = dataUpdate.number;
        antrian.splice(existingDataIndex, 1, data);
        //antrian.sort(number);
        */
        let dataUpdate = antrian.filter(datap => datap.id == data.id);
        if (dataUpdate.length == 0) {
          data = null;
        } else {
          const existingDataIndex = antrian.findIndex(a => a.id == data.id);
          //let dataUpdate = antrian.filter(datap => datap.id == data.id);
          dataUpdate = dataUpdate[0];
          data.number = dataUpdate.number;
          antrian.splice(existingDataIndex, 1, data);
        }

        debugger;
        resolve(Object.assign([], antrian));
      }, 0);
    });

  }

  static saveAntrian(data) {
    data = Object.assign({}, data);
    let antrianNumb = Object.assign([], antrian);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let number;
        if (antrian.length !== 0) {
          let antrianMaxNumber = antrianNumb.pop();
          number = antrianMaxNumber.number + 1;

        } else {
          number = 1;
        }
        data.number = number;
        antrian.push(data);
        //data.push(number);
        debugger;
        resolve(Object.assign({},data));
      }, delay);
    });

  }

  static deleteAntrian(id) {
    //id = Object.assign({}, id);
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        let indexOfdata = antrian.findIndex(a =>  a.id == id);
        antrian.splice(indexOfdata, 1);


      resolve(Object.assign([], antrian));
      }, delay);
    });


  }




}
export default AntrianApi;
