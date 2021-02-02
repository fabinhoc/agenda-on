import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import App from "@/App.vue";

Vue.use(Vuetify);

describe("App.vue", () => {

  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    localVue.use(Vuetify);
  })

  it("Should data values { mini = true, drawer = false }", () => {
    const wrapper = mount(App, {
      localVue,
      vuetify
    })

    expect(expect(wrapper.vm).toBeTruthy());
  });
});