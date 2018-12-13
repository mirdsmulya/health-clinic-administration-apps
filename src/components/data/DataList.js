import React, {PropTypes} from 'react';
import DataListRow from './DataListRow';


const DataList = ({datas}) => {
  return(
    <table className="table">
      <thead>
      <tr>
        <th>Nama</th>
        <th>Umur</th>
        <th>Alamat</th>
        <th>Terakhir Berobat</th>
        <th>Riwayat Medis Terakhir</th>
      </tr>
      </thead>
      <tbody>
        {datas.map(data =>
          <DataListRow key={data.id} data={data} />
        )}
      </tbody>
    </table>


  );
};


DataList.propTypes = {
  datas: PropTypes.array.isRequired
};

export default DataList;
