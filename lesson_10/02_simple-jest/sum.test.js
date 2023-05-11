const sum = require('./sum.js')

describe('sum', () => {
  test('1 + 2 should return 3', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it('1 + -2 should return -1', () => {
    const result = sum(1, -2)
    expect(result).toBe(-1)
  })

  describe('not a number', () => {
    it('`1` + -2 should return -1', () => {
      const result = sum('1', -2)
      expect(result).toEqual(-1)
    })
  })
})
