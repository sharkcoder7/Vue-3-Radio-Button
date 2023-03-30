<template>
  <div class="grid h-screen place-items-center">
    <form>
      <h2 class="text-gray-400">What are you looking to do?</h2>
      <RadioAccordion
        :modelValue="modelValue"
        :name="name"
        :options="options"
        @update:modelValue="updateModelValue"
      >
    </RadioAccordion>

    </form>
  </div>
</template>

<script lang="ts">
import type Option from 'types/Option';
import { defineComponent, ref } from 'vue';
import RadioAccordion from './components/RadioAccordion.vue';

export default defineComponent({
  name: 'App',
  components: {
    RadioAccordion,
  },
  setup() {
    const modelValue = ref<number>(0);
    const name = 'options';

    const options: Option[] = [
      {
        id: 'option1',
        title: `I'm looking to sell a property I own`,
        subtitle: 'Awesome, we can get you listing published right now.',
        value: 1,
        details: [{text: 'Create a listing now', target: 'https://example.com'},{text: 'Explore active listing in your area', target: 'https://example.com'}]
      },
      {
        id: 'option2',
        title: `I'm looking for a good deal to buy`,
        subtitle: `Great! We're so glad you're here. Start browsing and happy hunting.`,
        value: 2,
      },
      {
        id: 'option3',
        title: `I'm just exploring`,
        subtitle: `No problem, we'd love to help you learn about Aloha My Home.`,
        value: 3,
      },
    ];

    const updateModelValue = (value: Number) => {
      modelValue.value = value;
    };

    return {
      modelValue,
      name,
      options,
      updateModelValue,
    };
  },
});
</script>

