<template>
  <div class="list-block">
    <slot></slot>
    <list-block
      v-for="item in vusibleItems"
      :item="item"
      :key="item.name"
    ></list-block>
  </div>
</template>

<script>
export default {
  name: "list-visual",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  computed: {
    vusibleItems() {
      return this.list.items.filter((item) => item.check && !!item.numValue);
    },
  },
};
</script>

<style lang="scss">
.list-block {
  width: 100%;
  margin-bottom: 2%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid teal;
}
</style>
