import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      url: 'http://some-url.com',
      title: 'some title'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
  })

  test('renders a item.score and item.author', () => {
    const item = {
      score: '0',
      by: 'me'
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    expect(wrapper.find('.score').text()).toBe(item.score)
    expect(wrapper.find('.by').text()).toContain(item.by)
  })
})
