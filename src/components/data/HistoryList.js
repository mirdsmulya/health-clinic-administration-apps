import React, {PropTypes} from 'react';
import HistoryListRow from './HistoryListRow';
import HistoryListInput from './HistoryListInput';


const HistoryList = ({med, medicalHistory, data, onChange, onClick, addHistory}) => {
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
        <HistoryListInput med={med} onChange={onChange} onClick={addHistory}/>
        {medicalHistory.map(data => <HistoryListRow data={data} onClick={onClick} />)}

      </tbody>
    </table>


  );
};


HistoryList.propTypes = {
  medicalHistory: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.function,
  onClick:  PropTypes.function,
  addHistory: PropTypes.function,
  med: PropTypes.object.isRequired
};


export default HistoryList;

/*
{datas.map(data =>
  <DataListRow key={data.id} data={data} />
)}

{datas.map(data => <HistoryListRow key={data.medicalHistory} data={data} />)}
*/
