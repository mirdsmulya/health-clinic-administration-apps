import React, {PropTypes} from 'react';
import HistoryListRow from './HistoryListRow';


const HistoryList = () => {
  return(
    <table className="table">
      <thead>
      <tr>
        <th>Tanggal</th>
        <th>Diagnosa</th>
        <th>Terapi</th>
        <th> Aksi </th>

      </tr>
      </thead>
      <tbody>

      </tbody>
    </table>


  );
};
export default HistoryList;

/*
{datas.map(data =>
  <DataListRow key={data.id} data={data} />
)}
*/
