<template>
  <details class="list">
    <summary class="list_label">
      <input
        class="list_checkbox"
        type="checkbox"
        v-model="listChecked"
        @change="onChange($event), stateToComponent()"
      /><slot></slot>
    </summary>
    <list-item
      v-for="(item, index) in this.list.items"
      :item="{
        ...item,
        value: itemsValue[index],
        itemIndex: index,
      }"
      :key="item.name"
      @onCheck="childChecked($event)"
      @onNumChange="
        $emit('onNumChange', {
          list: list.index,
          item: $event.itemIndex,
          numValue: $event.numValue,
        })
      "
      @onColorChange="
        $emit('onColorChange', {
          list: list.index,
          item: $event.itemIndex,
          color: $event.color,
        })
      "
      >{{ item.name }}</list-item
    >
  </details>
</template>

<script>
export default {
  name: "list-control",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      listChecked: false,
      itemsValue: this.list.items.map(function () {
        return false;
      }),
    };
  },
  methods: {
    stateToComponent() {
      this.$emit("onListChecked", {
        listChecked: this.listChecked,
        list: this.list.index,
      });
    },
    childChecked(item) {
      this.itemsValue[item.itemIndex] = item.checked;
      this.listChecked = this.itemsValue.reduce((summ, item) => summ || item);
      this.$emit("onItemChecked", {
        list: this.list.index,
        item: item.itemIndex,
        checked: item.checked,
      });
      this.stateToComponent();
    },
    onChange(event) {
      if (event.target.checked) {
        this.openList = true;
      }
      this.itemsValue.forEach((item, index, array) => {
        array[index] = event.target.checked;
      });
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
