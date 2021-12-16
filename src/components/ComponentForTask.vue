<template>
  <div class="task_wrapper">
    <div class="control_wrapper">
      <list v-for="list in listInner" :list="list" :key="list.name">{{
        list.name
      }}</list>
    </div>
    <div class="visual_wrapper"></div>
  </div>
</template>

<script>
import List from "./List.vue";
import { listInner } from "./mock/listInner.json";
export default {
  components: { List },
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
</style>
