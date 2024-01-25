<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <a href="/" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <a :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { useRouter, useRoute } from 'vue-router'
import type { RouteMeta } from 'vue-router';

type Page = {
    name: string;
    href: string;
    current: boolean;
};

const pages: Page[] = []


set()

// Breadcrumb を設定する
function set() {

  const route = useRoute()

  const pathString = route.path
  const pathSegments = splitPath(pathString);

  pathSegments.forEach(segment => {

      let title: string = segment

      const metaData = getRouteMeta('/' + segment);
      if (metaData?.title) {
        title = metaData.title
      }

      pages.push({
          name: title,
          href: segment,
          current: false // 新しく追加されるページは現在のページではないと仮定
      });
  });
}

// パスを文字列の配列に分割して返す
function splitPath(path: string): string[] {
  // 先頭のスラッシュを削除してから分割する
  return path.replace(/^\//, '').split('/');
}

// パスを引数に渡すとメタデータを返す
function getRouteMeta(path: string): RouteMeta | null {
  
  const router = useRouter()

  const matchedRoute = router.getRoutes().find(route => route.path === path);
  return matchedRoute ? matchedRoute.meta : null;
}
</script>