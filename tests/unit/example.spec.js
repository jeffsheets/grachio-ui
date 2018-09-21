import { shallowMount } from "@vue/test-utils";
import GrachioDisplay from "@/components/GrachioDisplay.vue";

describe("GrachioDisplay.vue", () => {
  it("renders Loading when there is no data", () => {
    const wrapper = shallowMount(GrachioDisplay);
    expect(wrapper.text()).toMatch("Loading...");
  });
});
