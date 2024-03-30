<template>
  <div class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
    <label for="name" class="block text-xs font-medium text-gray-900">{{ label }}</label>
    <input
     :value="value"
     @change="changeValue($event)"
     @input="inputValue($event)"
     :type="type"
     class="bg-white dark:bg-slate-800 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
     :placeholder="placeholder"
     :autocomplete="autocomplete"
     :required="required"
    />
  </div>
  <p v-if="errorMassage.length > 0" class="mt-1 ml-1 text-sm text-red-600" id="email-error">{{ errorMassage }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// props を定義
const props = defineProps<{
  value?: any
  label?: string
  placeholder?: string
  type?: string
  autocomplete?: string
  required?: boolean
  rules?: ValidationRule[]
}>()

// emit を定義
const emit = defineEmits<{
  input: [value: Event],
  change: [value: Event]
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
const setupErrorMessage = validate(props.value)
if (setupErrorMessage) {
  errorMassage.value = setupErrorMessage as string
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
      errorMassage.value = ""; // エラーメッセージをクリア
    } else {
      errorMassage.value = validationResult as string; // エラーメッセージを設定
    }
  }

  emit('input', event)
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