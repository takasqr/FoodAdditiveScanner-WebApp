<template>
  <div class="overflow-hidden px-4 py-4 rounded-lg ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
    <label for="comment" class="sr-only">{{ label }}</label>
    <textarea
     :rows=String(rows)
     :value="value"
     @change="changeValue($event)"
     @input="inputValue($event)"
     class="block w-full resize-none border-0 bg-transparent text-text dark:text-text-dark placeholder:text-gray-400 focus:ring-0 leading-6"
     :placeholder="placeholder"
     :required="required"
    />
  </div>
  <p v-if="errorMassage.length > 0" class="mt-1 ml-1 text-sm text-red-600">{{ errorMassage }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// props を定義
interface Props{
  value?: string
  label?: string
  placeholder?: string
  type?: string
  autocomplete?: string
  required?: boolean
  rules?: ValidationRule[]
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  rows: 3
})

// emit を定義
const emit = defineEmits<{
  change: [value: Event],
  input: [value: Event]
}>()

const errorMassage = ref("")

type ValidationRule = (value: string) => boolean | string

let rules: ValidationRule[] = [
  // value => !!value || 'Required.', // required
  // value => value.length <= 20 || 'Max 20 characters', // max
  // value => {
  //   const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   return pattern.test(value) || 'Invalid e-mail.'
  // }, // email
]

if (props.rules) {
  rules = props.rules
}

// 初回バリデーション
if (props.value) {
  const setupErrorMessage = validate(props.value)
  if (setupErrorMessage as boolean !== true) {
    errorMassage.value = setupErrorMessage as string
  }
}

// input の変更を受け取る
function changeValue(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (target) {
    const validationResult = validate(target.value)
    if (validationResult === true) {
      // バリデーションに通ったら
      emit('change', event)
      errorMassage.value = ""; // エラーメッセージをクリア
    } else {
      errorMassage.value = validationResult as string; // エラーメッセージを設定
    }
  }
}

function inputValue(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (target) {
    const validationResult = validate(target.value)
    if (validationResult === true) {
      // バリデーションに通ったら
      emit('input', event)
      errorMassage.value = ""; // エラーメッセージをクリア
    } else {
      errorMassage.value = validationResult as string; // エラーメッセージを設定
    }
  }
}

// バリデーション
function validate(value: string): boolean | string {
  for (const rule of rules) {
    const result = rule(value);
    if (result !== true) {
      // ルールが文字列（エラーメッセージ）を返した場合、バリデーション失敗
      return result;
    }
  }
  return true; // すべてのルールが成功
}
</script>