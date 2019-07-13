import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';

const StatsFilter = ({stats, onChange, options, value}) => {
  return (
    <form>
      <SelectInput
        name= "year"
        label= "Tahun"
        value = {value}
        onChange = {onChange}
        options= {options}
        />
    </form>
  );
};

StatsFilter.propTypes = {
  stats: React.PropTypes.object,
  onChange: React.PropTypes.func,
  options: React.PropTypes.array,
  value: React.PropTypes.string
};


export default StatsFilter;
