<template>
  <div class="list-item">
    <input class="checkbox_input" type="checkbox" v-model="itemCheck" />
    <slot></slot>
    <input class="number_input" type="number" :value="numValue" />
    <input class="color_input" type="color" :value="this.item.color" />
  </div>
</template>

<script>
export default {
  name: "list-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      numValue: this.item.numValue,
      itemCheck: false,
    };
  },
  watch: {
    "item.value"() {
      this.itemCheck = this.item.value;
    },
    itemCheck() {
      this.$emit("onCheck", {
        itemIndex: this.item.itemIndex,
        value: this.itemCheck,
      });
    },
  },
};
</script>

<style lang="scss">
.list-item {
  margin: 5px;
  margin-left: 55px;
  padding: 7px;
  display: flex;
  align-items: center;
  gap: 7px;
  border: 1px solid teal;

  .checkbox_input {
    height: 20px;
    width: 20px;
  }

  .number_input {
    width: 50px;
    margin-left: auto;
  }

  .color_input {
    background: none;
    outline: none;
    border: none;
    height: 29px;
    width: 25px;
  }
}
</style>
