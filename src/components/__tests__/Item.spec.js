import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'
import mergeWith from 'lodash.mergewith'

describe('Item.vue', () => {
  function createWrapper (overrides) {
    const defaultProps = { propsData: {} }
    return shallowMount(Item, mergeWith(defaultProps, overrides))
  }
  test('renders item.url', () => {
    const item = {
      url: 'https://some-url.com/with-paths'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain('(some-url.com)')
  })

  test('renders item.score', () => {
    const item = {
      score: 10
    }
    const wrapper = createWrapper({ propsData: { item } })
    expect(wrapper.text()).toContain(item.score)
  })

  test('render item.by', () => {
    const item = {
      by: 'some author'
    }
    const wrapper = createWrapper({ propsData: { item } })
    expect(wrapper.text()).toContain(item.by)
  })

  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some-title'
    }
    const wrapper = createWrapper({ propsData: { item } })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
  })

  test('renders the time since the last post', () => {
    const dateNow = jest.spyOn(Date, 'now')
    const dateNowTime = new Date('2018')
    dateNow.mockImplementation(() => dateNowTime)
    const item = {
      time: (dateNowTime / 1000) - 600
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    dateNow.mockRestore()
    expect(wrapper.text()).toContain('10 minutes ago')
  })
})
