import * as React from 'react';
import {ReactDOMTestContainer} from '../../../test/dom-test-container';
import {iconWithOptionsDriverFactory} from './icon-with-options.driver';
import {IconWithOptions} from '.';
import {OptionFactory} from '../DropdownOption';
import {generateOptions} from '../DropdownOption/option-factory';

describe('IconWithOptions', () => {
  const createDriver =
    new ReactDOMTestContainer()
    .unmountAfterEachTest()
    .createLegacyRenderer(iconWithOptionsDriverFactory);

  const options = generateOptions();
  const createIconWithOptions = (props = {}) => (
    <IconWithOptions
      {...Object.assign({
        options: [],
        iconUrl: ''
      }, props)}
    />
  );

  it('should render default component', () => {
    const driver = createDriver(createIconWithOptions({options}));
    expect(driver.isTargetElementExists()).toBeTruthy();
    expect(driver.isContentElementExists()).toBeFalsy();
  });
});