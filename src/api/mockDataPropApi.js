import delay from './delay';
//import datas from './Data'
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
debugger;

let datas = [
  {
    id: "sri-rezeki",
    name: "Sri Rezeki Indriana",
    gender: "Wanita",
    address: "Jl. Kamuncang No 11, Cisarua",
    lastArrived: "12/09/2018",
    age: "50",
    number:"",
    status: true,
    medicalHistory: [
      {date:"12/11/2018", diagnose: "Typhus", therapy: "Antibiotik"},
      {date:"04/06/2018", diagnose: "Flu & batuk", therapy: "Therabex"}
    ]

  },
  {
    id: "gumilar-salawasna",
    name: "Gumilar Gungun Salawasna",
    gender: "Pria",
    age: "30",
    number:"",
    status: true,
    address: "Jl. Ibrahim Adjie No. 120, Karang Mekar",
    lastArrived: "16/11/2018",
    medicalHistory:
    [
      {date:"12/11/2018", diagnose: "Typhus", therapy: "Antibiotik"},
      {date:"04/06/2018", diagnose: "Flu & batuk", therapy: "Therabex"}
    ]

  },
  {
    id: "kersa-wahana",
    name: "Kersa Jumala Wahana",
    gender: "Pria",
    age: "25",
    number:"",
    status: true,
    address: "Jl. Jend. Sudirman Gg. Jamiatun, Bandung",
    lastArrived: "09/08/2018",
    medicalHistory:
      [
        {date:"12/11/2018", diagnose: "Typhus", therapy: "Antibiotik"},
        {date:"04/06/2018", diagnose: "Flu & batuk", therapy: "Therabex"}
      ]

  },
  {
    id: "kris-fathurohman",
    name: "Kris fathurohman",
    gender: "Pria",
    age: "23",
    number:"",
    status: true,
    address: "Jl. Pasar Atas No. 70, Cimahi Tengah",
    lastArrived: "11/12/2018",
    medicalHistory:
      [
        {date:"12/11/2018", diagnose: "Typhus", therapy: "Antibiotik"},
        {date:"04/06/2018", diagnose: "Flu & batuk", therapy: "Therabex"}
      ]

  },
  {
    id: "gilbert-situmorang",
    name: "Gilbert Situmorang",
    gender: "Pria",
    age: "43",
    number:"",
    status: true,
    address: "Jl. Adhyaksa Barat No. 456, Cigugur Tengah, Kota Cimahi",
    lastArrived: "14/01/2018",
    medicalHistory:
      [
        {date:"12/11/2018", diagnose: "Typhus", therapy: "Antibiotik"},
        {date:"04/06/2018", diagnose: "Flu & batuk", therapy: "Therabex"}
      ]

  }
];

const entrances = [
  {

  }
];




function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (data) => {
  //return replaceAll(data.name.toLowerCase(), ' ', '-');
  return replaceAll(data.name.toLowerCase(), ' ', '-');

};

class DataApi {

  static getAllDatas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], datas));
        debugger;
      }, delay);
    });
  }



  static saveData(data) {
    data = Object.assign({}, data); // to avoid manipulating object passed in.
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minDataNameAge = 1;
        const name = data.name;
        debugger;
        if (name.length < minDataNameAge) {
          reject(`name must be at least ${minDataNameAge} characters.`);
        } else {
          if (data.id) {
            const existingDataIndex = datas.findIndex(a => a.id == data.id);
            datas.splice(existingDataIndex, 1, data);
            debugger;
            } else {
            //Just simulating creation here.
            //The server would generate ids and address's for new datas in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            data.id = generateId(data);
            data.number = '';
            data.status = true;
            //data.push({medicalHistory:[]})
            datas.push(data);
            debugger;
          }
        }


        resolve(data);
        debugger;
      }, delay);
    });
  }

  static addHistory(data, med) {
    data = Object.assign({}, data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minDataNameAge = 1;
        if (data.name.length < minDataNameAge) {
          reject(`name must be at least ${minDataNameAge} characters.`);
        }
        if (data.id) {
          const existingDataIndex = datas.findIndex(a => a.id == data.id);
          let datap = datas[existingDataIndex].medicalHistory ;
          datap.splice(0,0, med);
        }

        resolve(datas);
      }, delay);
    });
  }

  static displayedDatas(dataDisp) {
    dataDisp = Object.assign([], dataDisp);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //datas = [];
        //datas.push(dataDisp);

        resolve(dataDisp);
      }, delay);
    });
  }



  static deleteData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const indexOfDataToDelete = datas.findIndex(d =>
        d.id == dataId);
        if (indexOfDataToDelete) {
          datas.splice(indexOfDataToDelete, 1);
        }
        debugger;
        resolve(datas);
      }, delay);
    });
  }


}

export default DataApi;


/*
static getDataById(dataId) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      //const datas = Object.asssign({}, datas);
      const indexOfDataToDisplay = datas.findIndex(data => {data.id == dataId;});
      //const data = datas[indexOfDataToDisplay];
      //var data = datas.find(datas, {id: dataId });
      //var data = datas[indexOfDataToDisplay];
      var data= datas.pop();

      resolve(Object.assign({}, datas.pop()));
      debugger;
    }, 0);
  });
}

*/
