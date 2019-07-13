import React, {PropTypes} from 'react';
import DataListRow from './DataListRow';


const DataList = ({datas, onEntry, logicButton}) => {
  let data=Object.assign({}, {data});
  return(
    <table className="table">
      <thead>
      <tr>
        <th>Nama</th>
        <th>Jenis Kelamin</th>
        <th>Umur</th>
        <th>Alamat</th>
        <th>Status</th>


      </tr>
      </thead>
      <tbody>
        {datas.map(data =>
          <DataListRow key={data.id} data={data} logicButton={logicButton} />)}
      </tbody>
    </table>


  );
};


DataList.propTypes = {
  datas: PropTypes.array,
  logicButton: React.PropTypes.function 
};

export default DataList;

//<th>Terakhir Berobat</th>
//<th>Riwayat Medis Terak</th>
