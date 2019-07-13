import delay from './delay';

debugger;
let stats = [
  {
    year: 2018,
    data:
    [
      { x: 1, y: 700},
      { x: 2, y: 870},
      { x: 3, y: 960},
      { x: 4, y: 510},
      { x: 5, y: 820},
      { x: 6, y: 710},
      { x: 7, y: 800},
      { x: 8, y: 460},
      { x: 9, y: 210},
      { x: 10, y: 920},
      { x: 11, y: 510},
      { x: 12, y: 400}
    ]
  },
  {
    year: 2017,
    data:
    [
      { x: 1, y: 600},
      { x: 2, y: 670},
      { x: 3, y: 560},
      { x: 4, y: 610},
      { x: 5, y: 620},
      { x: 6, y: 610},
      { x: 7, y: 600},
      { x: 8, y: 560},
      { x: 9, y: 610},
      { x: 10, y: 620},
      { x: 11, y: 610},
      { x: 12, y: 600}
    ]
  },
  {
    year: 2016,
    data:
    [
      { x: 1, y: 200},
      { x: 2, y: 370},
      { x: 3, y: 460},
      { x: 4, y: 610},
      { x: 5, y: 520},
      { x: 6, y: 410},
      { x: 7, y: 300},
      { x: 8, y: 560},
      { x: 9, y: 510},
      { x: 10, y: 320},
      { x: 11, y: 410},
      { x: 12, y: 500}
    ]
  }
];

function findIndex(stats, year) {
  let indexNumber = stats.findIndex(data => data.year == year);
  return indexNumber;
}

function statsDataByYear(indexNumber) {
  let statsByYear = stats[indexNumber].data;
  return statsByYear;

}

class StatsApi {
  static getAllStats() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], stats));
        debugger;
      }, 0);
    });
  }


  static displayStats(year) {
    //let year = Object.assign()
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (stats.year) {
          let statsDataByYear = statsDataByYear(findIndex(stats, year));
        }

        resolve(Object.assign([], statsDataByYear));
      }, 0);
    });
  }
}
export default StatsApi;
