<template>
  <div class="task_wrapper">
    <div class="control_wrapper">
      <list-control
        v-for="(list, index) in sessionlistInner"
        :list="{ ...list, index: index }"
        :key="list.name"
        @onListChecked="onListChecked"
        @onItemChecked="onItemChecked"
        @onNumChange="onNumChange"
        @onColorChange="onColorChange"
        >{{ list.name }}</list-control
      >
    </div>
    <div class="visual_wrapper">
      <list-visual v-for="list in lists" :list="list" :key="list.name">{{
        list.name
      }}</list-visual>
    </div>
  </div>
</template>

<script>
import ListControl from "./ListControl.vue";
import ListVisual from "./ListVisual.vue";
import { listInner } from "./mock/listInner.json";
export default {
  components: { ListControl, ListVisual },
  data() {
    return {
      sessionlistInner: [],
    };
  },
  methods: {
    onListChecked(event) {
      this.sessionlistInner[event.list].check = event.listChecked;
    },
    onItemChecked(event) {
      this.sessionlistInner[event.list].items[event.item].check = event.checked;
    },
    onNumChange(event) {
      this.sessionlistInner[event.list].items[event.item].numValue =
        event.numValue;
    },
    onColorChange(event) {
      this.sessionlistInner[event.list].items[event.item].color = event.color;
    },
  },
  mounted() {
    this.sessionlistInner = listInner.map(function (list) {
      list.check = false;
      list.items.forEach((item) => (item.check = false));
      return list;
    });
  },
  computed: {
    lists() {
      return this.sessionlistInner.filter((list) => list.check);
    },
  },
};
</script>

<style lang="scss">
.task_wrapper {
  min-height: 100vh;
  display: flex;
  gap: 1%;
  padding: 1%;
  & > * {
    width: 50%;
    border: 1px solid teal;
  }
  .control_wrapper {
    padding: 10px;
  }
  .visual_wrapper {
    color: initial;
  }
}
.visual_wrapper {
  padding: 1%;
}
</style>
