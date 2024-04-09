<template>
  <ImageUpload />
</template>

<script setup lang="ts">
import ImageUpload from '@/ui/template/image-upload/ImageUpload.vue';
import { FoodAdditiveApplicationService } from '@/model/domain/food-additive/FoodAdditiveApplicationService';
import { FoodAdditiveRepository } from '@/model/domain/food-additive/FoodAdditiveRepository';

const foodAdditiveRepository = new FoodAdditiveRepository
const foodAdditiveApplicationService = new FoodAdditiveApplicationService(foodAdditiveRepository)
</script>
