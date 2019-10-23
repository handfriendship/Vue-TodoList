<template>
  <div id="app">
    <p>{{total}}</p>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';

// var eventBus = new Vue();

export default {
  data() {
    return {
      total: 0
    }
  },
  methods: {
    incrementTotal: function(){
      this.total += 1
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoInput': TodoInput,
    'TodoFooter': TodoFooter,
  }
}
</script>

<style>

</style>
