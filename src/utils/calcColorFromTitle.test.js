import { calcColorFromTitle } from './calcColorFromTitle';
// Test calcColorFromTitle function

test('returns a rgb string', () => {
  expect(calcColorFromTitle('A Very Christie Title')).toMatch(/^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/);
})

test('throws error on non-string parameters', () => {
  expect(() => calcColorFromTitle(123)).toThrowError(/^Parameter is not a string!$/);
  expect(() => calcColorFromTitle([123])).toThrowError(/^Parameter is not a string!$/);
  expect(() => calcColorFromTitle({id: 123})).toThrowError(/^Parameter is not a string!$/);
})

test('returns an array with expected numbers', () => {
  expect(calcColorFromTitle('Why Didn’t They Ask Evans?')).toMatch(/^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/);
  expect(calcColorFromTitle('Death Comes As The End')).toMatch(/^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/);
  expect(calcColorFromTitle('The Mysterious Affair at Styles')).toMatch(/^rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)$/);
})
