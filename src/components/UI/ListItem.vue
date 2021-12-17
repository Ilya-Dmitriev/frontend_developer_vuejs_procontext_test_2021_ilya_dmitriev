<template>
  <div class="list-item">
    <input
      class="checkbox_input"
      type="checkbox"
      v-model="itemCheck"
      @change="onItemCheck"
    />
    <slot></slot>
    <input
      class="number_input"
      type="number"
      min="0"
      :value="numValue"
      @change="onNumChange"
    />
    <input
      class="color_input"
      type="color"
      :value="colorValue"
      @change="onColorChange"
    />
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
      itemCheck: this.item.checked,
      numValue: this.item.numValue,
      colorValue: this.item.color,
    };
  },
  methods: {
    onItemCheck(event) {
      this.$emit("onCheck", {
        itemIndex: this.item.itemIndex,
        checked: event.target.checked,
      });
    },
    onColorChange(event) {
      this.colorValue = event.target.value;
      this.$emit("onColorChange", {
        itemIndex: this.item.itemIndex,
        color: this.colorValue,
      });
    },
    onNumChange(event) {
      this.numValue = event.target.value;
      this.$emit("onNumChange", {
        itemIndex: this.item.itemIndex,
        numValue: this.numValue,
      });
    },
  },
  watch: {
    "item.value"(value) {
      this.itemCheck = value;
      this.onItemCheck({ target: { checked: value } });
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
