import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../index';

let wrapper;

it('Should mount', () => {
  wrapper = shallow(
    <InputField
      inputState="INITIAL"
      value=""
      onChange={() => {}}
      placeholder="Input here..."
    />,
  );

  expect(wrapper).toBeTruthy();
});
