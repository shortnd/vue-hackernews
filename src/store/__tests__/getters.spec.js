import getters from '../getters'

describe('getters', () => {
  test('displayItems return the first 20 items from state.items', () => {
    const items = Array(21).fill().map((v, i) => i)
    const state = {
      items,
      route: {
        params: {}
      }
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

  test('displayItems returns items 20-40 if page is 2', () => {
    const items = Array(40).fill().map((v, i) => i)
    const result = getters.displayItems({
      items,
      route: {
        params: {
          page: '2'
        }
      }
    })
    const expectedResult = items.slice(20, 40)
    expect(result).toEqual(expectedResult)
  })

  test('displayItems returns remaining item if there are insufficient items', () => {
    const numberArray = Array(21).fill().map((v, i) => i)
    const store = {
      items: numberArray,
      route: {
        params: {
          page: '2'
        }
      }
    }
    const result = getters.displayItems(store)
    expect(result).toHaveLength(1)
    expect(result[0]).toEqual(numberArray[20])
  })
})
