<template>
  <Stepper :step-count="3" :current-step="currentStep">

    <template v-slot:1>
      <RequestFormOne
       @next="next"
       ></RequestFormOne>
    </template>

    <template v-slot:2>
      <RequestFormTwo
       @next="next"
       @previous="previous"
      ></RequestFormTwo>
    </template>

    <template v-slot:3>
      <RequestFormThree
       @request="request"
       @previous="previous"
      ></RequestFormThree>
    </template>
  </Stepper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Stepper from '../../template/stepper/Stepper.vue';
import RequestFormOne from './RequestFormOne.vue';
import RequestFormTwo from './RequestFormTwo.vue';
import RequestFormThree from './RequestFormThree.vue';

const currentStep = ref(1)

function next() {
  currentStep.value ++
  console.log('next', currentStep.value)
}

function previous() {
  currentStep.value --
}

function request() {
  console.log('ここまで辿り着きました。')
}
</script>