import React, {PropTypes} from 'react';
import HistoryListRow from './HistoryListRow';
import HistoryListInput from './HistoryListInput';


const HistoryList = ({med, medicalHistory, data, onChange, onClick, addHistory, hapusRiwayat, buttonStatus}) => {
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
        <HistoryListInput med={med} onChange={onChange} onClick={addHistory} buttonStatus={buttonStatus}/>
        {medicalHistory.map(data => <HistoryListRow data={data} key={data.date} onClick={hapusRiwayat} />)}

      </tbody>
    </table>


  );
};


HistoryList.propTypes = {
  medicalHistory: React.PropTypes.array ,
  data: React.PropTypes.object ,
  onChange: React.PropTypes.function ,
  onClick:  React.PropTypes.function ,
  addHistory: React.PropTypes.function ,
  med: React.PropTypes.object ,
  hapusRiwayat:  React.PropTypes.function ,
  buttonStatus: React.PropTypes.function
};


export default HistoryList;

/*
{datas.map(data =>
  <DataListRow key={data.id} data={data} />
)}

{datas.map(data => <HistoryListRow key={data.medicalHistory} data={data} />)}
*/
