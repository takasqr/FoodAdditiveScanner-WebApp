<template>
  <NavigationDrawer>

    <Banner></Banner>

    <div class="mt-4 lg:mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
      <div class="mx-auto max-w-3xl">

        <Breadcrumb></Breadcrumb>

        <div class="mt-4 lg:mt-10">
          <!-- Content goes here -->
          <slot />
        </div>
      </div>
    </div>

    <FooterSimple></FooterSimple>

  </NavigationDrawer>
</template>

<script setup lang="ts">
import NavigationDrawer from '@/ui/basic/navigation-drawer/NavigationDrawer.vue'
import FooterSimple from '@/ui/template/footer-simple/FooterSimple.vue'
import Breadcrumb from '@/ui/basic/breadcrumb/Breadcrumb.vue'
import Banner from '@/ui/basic/banner/Banner.vue'
</script>