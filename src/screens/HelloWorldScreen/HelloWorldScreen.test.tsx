import { HelloWorldScreen } from '@screens/HelloWorldScreen/HelloWorldScreen';
import { render, screen } from '@testing/test-utils';
import React from 'react';

describe('HelloWorldScreen', () => {
  const navigationMock: any = {
    navigate: jest.fn(),
    push: jest.fn(),
  };

  const routeMock: any = {};
  it('should have HelloWorld text', () => {
    render(<HelloWorldScreen navigation={navigationMock} route={routeMock} />);
    expect(screen.getByText('HelloWorld')).toBeTruthy();
  });
});
