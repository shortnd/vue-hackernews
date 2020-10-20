import getters from '../getters'

describe('getters', () => {
  test('displayItems return the first 20 items from state.items', () => {
    const items = Array(21).fill().map((v, i) => i)
    const state = {
      items
    }
    const results = getters.displayItems(state)
    const expectedResult = items.splice(0, 20)
    expect(results).toEqual(expectedResult)
  })

  test('maxPage returns a rounded number using the current items', () => {
    const items = Array(49).fill().map((v, i) => i)
    const result = getters.maxPage({
      items
    })
    expect(result).toBe(3)
  })
})
