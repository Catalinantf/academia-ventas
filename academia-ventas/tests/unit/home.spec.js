import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders h2 tag', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find("h2").text()).equal("Nuestro Equipo");
  });
});
