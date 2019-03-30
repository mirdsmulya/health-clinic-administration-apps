import delay from './delay';

debugger;
let stats = [
  {
    year: 2018,
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
