import * as React from 'react';
import Button from '../components/Button';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders correct text', () => {
  const buttonText = "Lorem ipsum";
  const button = mount(<Button primary>{buttonText}</Button>);
  expect(button.find('button').text()).toBe(buttonText);
});

it('has correct css class', () => {
  const buttonPrimary = mount(<Button primary>button</Button>);
  const buttonSecondary = mount(<Button secondary>button</Button>);
  const buttonTertiary = mount(<Button tertiary>button</Button>);
  expect(buttonPrimary.find('button').hasClass('button--blue')).toBeTruthy();
  expect(buttonSecondary.find('button').hasClass('button--red')).toBeTruthy();
  expect(buttonTertiary.find('button').hasClass('button--blue-light')).toBeTruthy();
});
