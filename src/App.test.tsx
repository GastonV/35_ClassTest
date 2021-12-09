import React from 'react';

import Utils from './utils';

describe('sum()', () => {
  it('should sum two digits', () => {
    const result = Utils.sum(1, 2);

    expect(result).toEqual(3);
  });
});

describe('divide()', () => {
  it('should not divide by zero and throw error', () => {
    expect(() => {
      Utils.divide(4, 0);
    }).toThrowError('Can not divide with zero');
  });

  it('should not divide by NaN and throw error', () => {
    expect(() => {
      Utils.divide(2, NaN);
    }).toThrowError('Can not divide with zero');
  });
});

describe('fizzBuzz()', () => {
  jest.spyOn(console, 'log');
  it('should return FizzBuzz', () => {
    Utils.fizzBuzz(15);
    jest.autoMockOn();
    expect(console.log('Hello')).toBe('Hello');
  });
});
