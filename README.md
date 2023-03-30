# Take-Home Assessment

### The Goal
Please design a set of radio options using Vite and Vue 3’s Composition API with the `<script setup>` syntax.

#### Specs
Present the user with `n` number radio button options. Within each radio’s label should be a ‘title’ (in bold weight) and ‘subtitle’ (in normal weight). When a given radio is selected, it should (1) expand like an accordion to show more details, and (2) emit an event to update the `modelValue` on input. Don’t worry about client-side validation of the form field values, or even the functionality of the form as a whole. No radio option should be selected by default.

#### Guidelines
See the attached screenshots (which were taken from a working application) for an idea of what this should look like when complete. This task should take approximately an hour or so. Please use Git to track changes and publish your work in a public repository (on Github, Bitbucket, or Gitlab). Focus on the content and reactive functionality first and foremost, and styling second — if time permits. Bonus points for styling as close as possible to the provided mockup using Tailwind CSS. More bonus points for making use of TypeScript.

#### Hints
Your <RadioAccordion> component may need these props:
```
interface Props {
  modelValue?: string
  value?: string
  name?: string
  id: string
  active: boolean
  option: Options
}
```

Also, here is a simple SVG element which will render the checkmark visible inside of a selected radio button:
```
<svg
  class="hidden w-2 h-2 pointer-events-none fill-current"
  version="1.1"
  viewBox="0 0 17 12"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="none" fill-rule="evenodd">
    <g transform="translate(-9 -11)" fill="#B17583" fill-rule="nonzero">
      <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"/>
    </g>
  </g>
</svg>
```