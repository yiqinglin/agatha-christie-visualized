import { calcMinMax } from './calcMinMax';

const testData = [
  {
    title: "The Mysterious Affair at Styles",
    pageCount: 300,
    publishDate: 1920,
    deathCount: 4
  },
  {
    title: "The Murder on the Links",
    pageCount: 272,
    publishDate: 1923,
    deathCount: 1
  },
  {
    title: "The Murder of Roger Ackroyd",
    pageCount: 256,
    publishDate: 1946,
    deathCount: 1
  }
];

test('returns an array with two digits', () => {
  const testRes = calcMinMax(testData, ['publishDate', 'deathCount']);
  expect(testRes).toEqual({ 'publishDate': [1920, 1946], 'deathCount': [1, 4]});
})
