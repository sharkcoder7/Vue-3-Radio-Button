<template>
  <div>
    <div v-for="(option, index) in options" :key="index" class="flex flex-row rounded shadow-md my-5 p-5 w-full"
      :class="{ 'bg-orange-50': selectedOption === option.value }">
      <div class="w-4 h-4 rounded-full border-2 border-pink-800 flex items-center justify-center m-2">
        <svg v-if="selectedOption === option.value" class="w-2 h-2 pointer-events-none fill-current" version="1.1"
          viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-9 -11)" fill="#B17583" fill-rule="nonzero">
              <path
                d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
      <div class="w-full">
        <label :for="'option-' + index" class="flex items-center justify-between cursor-pointer">

          <div class="w-full">
            <div class="font-bold">{{ option.title }}</div>
            <div class="text-gray-500">{{ option.subtitle }}</div>
          </div>
          <input type="radio" :name="name" :id="'option-' + index" :value="option.value" v-model="selectedOption"
            @change="updateModelValue" class="hidden">
        </label>
        <div v-if="selectedOption === option.value && option.details" class="mt-2">
          <div class="border-t border-gray-200 pt-2">
            <a v-for="(detail, detailIndex) in option.details" :href="detail.target" target="_blank"
              rel="noopener noreferrer"
              class="w-full my-2 flex flex-row justify-between items-center content-center no-underline bg-transparent text-gray-500 hover:bg-transparent focus:bg-transparent active:bg-transparent"
              :key="detailIndex">
              <span>{{ detail.text }}</span>
              <span class="arrow-right"></span>
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type Option from 'types/Option'
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'options',
  },
  options: {
    type: Array as () => Option[],
    required: true,
  },
  modelValue: {
    type: Number,
    default: -1,
  },
})

const emits = defineEmits(['update:modelValue'])

const selectedOption = ref(props.modelValue)

function updateModelValue() {
  emits('update:modelValue', selectedOption.value)
}
</script>

<style scoped lang="postcss">
.arrow-right {
  width: 0; 
  height: 0; 
  border-top: .5em solid transparent;
  border-bottom: .5em solid transparent;
  
  border-left: .5em solid rgb(157 23 77);
}
</style>