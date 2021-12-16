<template>
  <div class="task_wrapper">
    <div class="control_wrapper">
      <list-control v-for="list in listInner" :list="list" :key="list.name">{{
        list.name
      }}</list-control>
    </div>
    <div class="visual_wrapper">
      <list-visual v-for="list in listInner" :list="list" :key="list.name">{{
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
      listInner,
    };
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
