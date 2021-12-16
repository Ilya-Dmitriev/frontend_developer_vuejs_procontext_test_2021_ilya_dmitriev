<template>
  <div class="list-block">
    <slot></slot>
    <list-block
      v-for="item in notEmptyItems"
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
    notEmptyItems() {
      return this.list.items.filter((item) => item.numValue);
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
