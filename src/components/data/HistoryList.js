import React, {PropTypes} from 'react';
import HistoryListRow from './HistoryListRow';
import HistoryListInput from './HistoryListInput';


const HistoryList = ({medicalHistory, data, onChange}) => {
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
        <HistoryListInput data={data} onChange={onChange}/>
        {medicalHistory.map(data =>
        <HistoryListRow data={data} />)}

      </tbody>
    </table>


  );
};


HistoryList.propTypes = {
  medicalHistory: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.function
};


export default HistoryList;

/*
{datas.map(data =>
  <DataListRow key={data.id} data={data} />
)}

{datas.map(data => <HistoryListRow key={data.medicalHistory} data={data} />)}
*/
