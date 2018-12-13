import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const datas = [
  {
    id: "sri-rezeki",
    name: "Sri Rezeki Indriana",
    address: "Jl. Kamuncang No 11, Cisarua",
    lastArrived: "12/09/2018",
    age: "50",
    medicalHistory: "Typhus"
  },
  {
    id: "gumilar-salawasna",
    name: "Gumilar Gungun Salawasna",
    age: "30",
    address: "Jl. Ibrahim Adjie No. 120, Karang Mekar",
    lastArrived: "16/11/2018",
    medicalHistory: "Diare"
  },
  {
    id: "kersa-wahana",
    name: "Kersa Jumala Wahana",
    age: "25",
    address: "Jl. Jend. Sudirman Gg. Jamiatun, Bandung",
    lastArrived: "09/08/2018",
    medicalHistory: "Infeksi Saluran Paru"
  },
  {
    id: "kris-fathurohman",
    name: "Kris fathurohman",
    age: "23",
    address: "Jl. Pasar Atas No. 70, Cimahi Tengah",
    lastArrived: "11/12/2018",
    medicalHistory: "Demam"
  },
  {
    id: "gilbert-situmorang",
    name: "Gilbert Situmorang",
    age: "43",
    address: "Jl. Adhyaksa Barat No. 456, Cigugur Tengah, Kota Cimahi",
    lastArrived: "14/01/2018",
    medicalHistory: "Flu dan Batuk"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (data) => {
  return replaceAll(data.name, ' ', '-');
};

class DataApi {
  static getAllDatas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], datas));
      }, delay);
    });
  }

  static saveData(data) {
    data = Object.assign({}, data); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minDataNameAge = 1;
        if (data.name.length < minDataNameAge) {
          reject(`name must be at least ${minDataNameAge} characters.`);
        }

        if (data.id) {
          const existingDataIndex = datas.findIndex(a => a.id == data.id);
          datas.splice(existingDataIndex, 1, data);
        } else {
          //Just simulating creation here.
          //The server would generate ids and address's for new datas in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          data.id = generateId(data);
          data.address = `http://www.pluralsight.com/datas/${data.id}`;
          datas.push(data);
        }

        resolve(data);
      }, delay);
    });
  }

  static deleteData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfDataToDelete = datas.findIndex(data => {
          data.id == dataId;
        });
        datas.splice(indexOfDataToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default DataApi;
