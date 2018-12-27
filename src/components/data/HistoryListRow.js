import {Link} from 'react-router';
import React, {PropTypes} from 'react';

const HistoryListRow = ({data}) => {
  return(
    <tr>
      <td>{data.age}</td>

    </tr>
  );
};


HistoryListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default HistoryListRow;
