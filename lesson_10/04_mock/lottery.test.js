const lottery = require('./lottery.js')

const mockGenerateNumber = jest.fn()

jest.mock('./generateNumber', () => {
  return {
    generateNumber: () => mockGenerateNumber(),
  }
})

describe('lottery', () => {
  beforeAll(() => {
    mockGenerateNumber.mockImplementation(() => 2)
  })

  it('should won when 2', () => {
    const result = lottery(2)
    expect(result).toBe('You won!')
  })

  it.skip('should lose', () => {
    const result = lottery(1)
    expect(result).toBe('You lose')
  })
})
