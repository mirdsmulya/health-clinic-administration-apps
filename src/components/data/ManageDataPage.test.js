import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageDataPage, getDataById, mapStateToProps, getDateNumber} from './ManageDataPage';


describe('Manage Data Page', () => {
  it('Save and delete button test', () => {
    const props = {
      medicalHistory: [],
      actions: { saveData: () => { return Promise.resolve(); }}
    };

    const wrapper = mount(<ManageDataPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('text');
    saveButton.simulate('click');

  });
  it('Get dataId test', () => {
    const datas = [
      {id:"sri", name: "Sri Paduka"},
      {id: "kanda", name: "Kandaraan"}
    ]
    const id = "kanda"
    const getDataId = getDataById(datas, id)
    expect(getDataId).toEqual(datas[1]);

  });
  
  it('mapStateToProps test', () => {
    const initialState = 1
    const ownProps = "sri";
    //const wrapper = mapStateToProps(initialState, ownProps);

  });

  it('Date test', () => {
    const date = getDateNumber();
    const d = new Date();
    const expected = d.getDate() +"/"+(d.getMonth() + 1) +"/"+ d.getFullYear();
    expect(date).toEqual(expected);
  });

});
