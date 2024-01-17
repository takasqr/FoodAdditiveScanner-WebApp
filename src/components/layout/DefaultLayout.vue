<template>
  <SideBarMenu>

    <Banner></Banner>

    <div class="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
      <div class="mx-auto max-w-3xl">

        <Breadcrumb></Breadcrumb>

        <div class="mt-4">
          <!-- Content goes here -->
          <slot />
        </div>
      </div>
    </div>

    <Footer></Footer>

  </SideBarMenu>
</template>

<script setup lang="ts">
import SideBarMenu from '@/components/basic/SideBarMenu.vue'
import Footer from '@/components/basic/Footer.vue'
import Breadcrumb from '@/components/basic/Breadcrumb.vue'
import Banner from '@/components/basic/Banner.vue'
</script>