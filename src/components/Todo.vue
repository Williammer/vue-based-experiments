<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1 class="todo-header">Todo List</h1>
    <input
        type="text"
        class="form-control"
        placeholder="add a todo item"
        autofocus
        v-model="newItem"
        @keyup.enter="addItem"
    >

    <div class="todo-container" v-if="todos">
      <ul class="todo-items" v-for="(idx, item) in todos">
        <input type="checkbox" class="todo-checkbox" @click="toggleItem(idx)" />
        <li class="todo-content" :class="{isChecked: item.checked}">{{item.todo}}</li>
        <button class="btn-removeItem" @click="removeItem(idx)">x</button>
      </ul>
    </div>
  </div>
</template>


<style lang="stylus">
.todo-header
  text-align center
  margin-bottom 20px

.todo-container
  margin-top 10px


.todo-items:first-child
  border-top 1px solid #cdcdcd
  
.todo-items 
  margin-top 0px
  margin-bottom 0px
  list-style-type none
  padding 6px 4px
  border 1px solid #cdcdcd
  border-top none

  .todo-checkbox 
    margin-right 4px
  
  .todo-content 
    font-size 16px
    color #333
    display inline-block
    width 490px
  
  .todo-content.isChecked 
    text-decoration line-through
    color #999
  
  .btn-removeItem 
    padding 0px 2px
</style>


<script>
import Vue from 'vue'
import Revue from 'revue'
import { createStore } from 'redux'
import reducer from '../reducers/index'

let store = createStore(reducer);

Vue.use(Revue, { store });

export default {
  name: "TodoApp",

  data() {
    return {
      newItem: '',
      todos: this.$revue.getState().todos
      // todos: []
    }
  },

  ready () {
    this.$subscribe('todos')
  },

  methods: {
    addItem() {
      let trimmedTodo = this.newItem.trim();

      if(trimmedTodo){
        /*this.todos.push({
          todo: trimmedTodo,
          checked: false
        });*/
        // [redux] The only way to mutate the state is to emit an action, an object describing what happened.
        this.$revue.dispatch({type: 'ADD_TODO', todo: trimmedTodo})
        this.newItem = '';
      }
    },
    toggleItem(idx) {
      this.$revue.dispatch({type: 'TOGGLE_ITEM', idx});
    },
    removeItem(idx) {
      let todoLen = this.todos.length;
      if(idx >= 0 && idx < todoLen){
        // this.todos.splice(idx, 1);
        this.$revue.dispatch({type: 'REMOVE_TODO', idx});
      }
    }
  }

}
</script>