import { shallowMount } from '@vue/test-utils'
import Home from './Home.vue'


describe('', () => {


  test('wired', () => {
    const wrapper = shallowMount(Home, {
      propsData: {loaded: false}
    })
    
    expect(wrapper.exists()).toBe(true)

  })
})
