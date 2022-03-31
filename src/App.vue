<template>
  <div id="app">
<!--  <TodoApp />-->
    <SeenImages />
  </div>
</template>

<script>
import Cy from './components/Cy';
import Test from './components/test';
import TodoApp from './components/todoApp';
import SeenImages from './components/seenImages';

export default {
  name: 'App',
  components: {
    Cy,
    Test,
    TodoApp,
    SeenImages
  }
}
</script>

<style>

</style>
