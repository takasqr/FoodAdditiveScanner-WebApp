<template>
  <div class="overflow-hidden px-3 pt-2.5 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
    <label for="comment" class="sr-only">Add your comment</label>
    <textarea rows="3" name="comment" id="comment" class="block w-full resize-none border-0 bg-transparent py-1.5 text-text dark:text-text-dark placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..." />

    <!-- Spacer element to match the height of the toolbar -->
    <div class="py-2" aria-hidden="true">
      <!-- Matches height of button in toolbar (1px border + 36px content height) -->
      <div class="py-px">
        <div class="h-9" />
      </div>
    </div>
  </div>
</template>