import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {DataPage} from './DataPage';


function setupDataPage() {
  const props = {
    datas: {},
    onentry: {},
    dataId: "sri",
    logicButton: () => {}
  };
  return shallow(<DataPage {...props} />);
}

describe('Datapage Test on render', () => {
  it('Data Pasien Title', () => {
    const wrapper = setupDataPage();
    expect(wrapper.find('h1').text()).toEqual('Data Pasien');
  });

});
