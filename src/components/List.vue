<template>
  <details class="list">
    <summary class="list_label">
      <input
        class="list_checkbox"
        type="checkbox"
        v-model="someItemOn"
        @change="onChange"
      /><slot></slot>
    </summary>
    <list-item
      v-for="(item, index) in this.list.items"
      :item="{ ...item, value: itemsValue[index], itemIndex: index }"
      :key="item.name"
      @onCheck="childChecked"
      >{{ item.name }}</list-item
    >
  </details>
</template>

<script>
export default {
  name: "list",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      itemsValue: this.list.items.map(function () {
        return false;
      }),
    };
  },
  methods: {
    childChecked(item) {
      this.itemsValue[item.itemIndex] = item.value;
    },
    onChange(event) {
      this.itemsValue.forEach((item, index, array) => {
        array[index] = event.target.checked;
      });
    },
  },
  computed: {
    someItemOn() {
      return this.itemsValue.reduce((summ, item) => summ || item);
    },
  },
};
</script>

<style lang="scss">
.list {
  padding: 10px;
  border-top: 2px solid crimson;

  .list_label {
    display: flex;
    gap: 10px;
    padding: 10px;
    align-items: center;

    &::before {
      content: "";
      display: block;
      height: 10px;
      width: 10px;
      border: 2px solid crimson;
      border-left: none;
      border-top: none;
      transform-origin: center;
      transition-duration: 0.5s;
      transform: rotate(-45deg);
    }

    .list_checkbox {
      height: 20px;
      width: 20px;
    }
  }
  &[open] {
    .list_label::before {
      transform: rotate(45deg);
    }
  }
}
</style>
