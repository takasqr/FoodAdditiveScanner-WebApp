<template>
  <slot />

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div>
      <TextArea :rows="8" @input="convert"></TextArea>
    </div>

    <div>
      <Card style="height: 224px;" class="">
        <div class="px-4 py-4">
          <div style="height: 192px;" class="overflow-auto">
            <p style="white-space: pre-line;" class="leading-6">{{ resultText }}</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, type PropType } from 'vue'
import TextArea from '../../basic/text-area/TextArea.vue';
import Card from '../../basic/card/Card.vue'

const resultText = ref('')

// emit を定義
const emit = defineEmits<{
  convert: [value: string]
}>()

const props = defineProps({
  func: {
    type: Function as PropType<(inputText: string) => string>,
    required: true
  }
})

function convert(event: Event) {

  const target = event.target as HTMLInputElement

  if (target) {
    resultText.value = props.func(target.value)

    emit('convert', resultText.value)
  }
}
</script>