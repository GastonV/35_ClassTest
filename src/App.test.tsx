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

describe('FizzBuzz()', () => {
  const spy = jest.spyOn(console, 'log');
  it('should return FizzBuzz', () => {
    Utils.fizzBuzz(15);

    expect(spy.mock.calls[0][0]).toEqual(1);
    expect(spy.mock.calls[1][0]).toBe(2);
    expect(spy.mock.calls[2][0]).toEqual('Fizz');
    expect(spy.mock.calls[3][0]).toEqual(4);
    expect(spy.mock.calls[4][0]).toEqual('Buzz');
    expect(spy.mock.calls[5][0]).toEqual('Fizz');
    expect(spy.mock.calls[6][0]).toEqual(7);
    expect(spy.mock.calls[7][0]).toEqual(8);
    expect(spy.mock.calls[8][0]).toEqual('Fizz');
    expect(spy.mock.calls[9][0]).toEqual('Buzz');
    expect(spy.mock.calls[10][0]).toEqual(11);
    expect(spy.mock.calls[11][0]).toEqual('Fizz');
    expect(spy.mock.calls[12][0]).toEqual(13);
    expect(spy.mock.calls[13][0]).toEqual(14);
    expect(spy.mock.calls[14][0]).toEqual('FizzBuzz');

    expect(spy.mock.calls).toHaveLength(15);
    spy.mockClear();
  });

  it('should not be NaN', () => {
    expect(() => {
      Utils.fizzBuzz(NaN);
    }).toThrowError('Can not be NaN');
  });
});

describe('ArmstrongNumber()', () => {
  it('Single digit numbers are Armstrong 5', () => {
    expect(Utils.armStrong(5)).toBeTruthy();
  });

  it('There are no 2 digit Armstrong 11', () => {
    expect(Utils.armStrong(11)).toBeFalsy();
  });

  it('Three digit number that is an Armstrong 153', () => {
    expect(Utils.armStrong(153)).toBeTruthy();
  });

  it('Three digit number that is not an Armstrong 100', () => {
    expect(Utils.armStrong(100)).toBeFalsy();
  });

  it('Four digit number that is an Armstrong 9474', () => {
    expect(Utils.armStrong(9474)).toBeTruthy();
  });

  it('Four digit number that is not an Armstrong 9499', () => {
    expect(Utils.armStrong(9499)).toBeFalsy();
  });

  it('Seven digit number that is not an Armstrong 9926314', () => {
    expect(Utils.armStrong(9926314)).toBeFalsy();
  });

  it('Sixteen digit number that is an Armstrong 32164049650', () => {
    expect(Utils.armStrong(4338281769391371)).toBeTruthy();
  });
});
