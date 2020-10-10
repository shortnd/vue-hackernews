<template>
  <div class="item-list">
    <item v-for="item in displayItems" :key="item.id" :item="item"></item>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  components: {
    Item
  },
  data: () => ({
    displayItems: window.items
  })
}
</script>

<style>

</style>
