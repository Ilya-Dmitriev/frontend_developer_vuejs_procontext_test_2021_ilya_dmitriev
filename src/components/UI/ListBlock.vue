<template>
  <div class="color-grid">
    <div
      v-for="block in +item.numValue"
      :key="block"
      class="color-block"
      :style="{ backgroundColor: this.item.color }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "list-block",
  props: {
    item: {
      type: Object,
      reqeired: true,
    },
  },
};
</script>

<style lang="scss">
.color-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .color-block {
    width: 20px;
    height: 20px;
  }
}
</style>
