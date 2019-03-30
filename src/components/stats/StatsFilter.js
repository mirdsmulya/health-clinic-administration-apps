import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const StatsFilter = ({stats, onChange, options}) => {
  return (
    <form>
      <SelectInput
        name= "year"
        label= "Tahun"
        value = {stats.year}
        onChange = {onChange}
        />
    </form>
  );
};

StatsFilter.propTypes = {
  stats: React.PropTypes.object,
  onChange: React.PropTypes.func,
  options: React.PropTypes.object
};


export default StatsFilter;
