
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import DataForm from './DataForm';


function setup() {
  const props = {
    data: {}, errors:{},
    onSave: () => {},
    //onChange: () => {},
    onDelete: () => {}

  };
  return shallow(<DataForm {...props}  />);
}


describe('React Component for DataForm Test', () => {
  it('renders form, h1, textinput, selectinput and input', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Pengaturan Data Pasien');
    expect(wrapper.find('TextInput').length).toBe(3);
    expect(wrapper.find('SelectInput').length).toBe(1);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('[id="save"]').simulate('click'));
    expect(wrapper.find('[id="delete"]').simulate('click'));

    //expect(wrapper.find('button').simulate('click'));
    //wrapper.find('input').simulate('click');
  });
});
