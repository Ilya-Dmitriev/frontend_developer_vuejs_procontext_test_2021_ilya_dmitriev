<template>
  <div class="color-grid">
    <div
      v-for="block in colorBlocks"
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
  data() {
    return {
      colorBlocks: [],
    };
  },
  beforeMount() {
    for (let index = 0; index < this.item.numValue; index++) {
      const newBlok = document.createElement("div");
      newBlok.className = "color-blok";
      this.colorBlocks.push(newBlok);
    }
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
