<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Todo app</h1>
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
        <input type="checkbox" class="todo-checkbox" v-model="item.checked" />
        <li class="todo-content" :class="{isChecked: item.checked}">{{item.todo}}</li>
        <button class="btn-removeItem" @click="removeItem(idx)">x</button>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus">
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
export default {
  name: "Todo-app",

  data() {
    return {
      newItem: '',
      todos: []
    }
  },

  methods: {
    addItem() {
      let trimmedTodo = this.newItem.trim();

      if(trimmedTodo){
        this.todos.push({
          todo: trimmedTodo,
          checked: false
        });
        this.newItem = '';
      }
    },
    removeItem(idx) {
      let todoLen = this.todos.length;
      if(idx >= 0 && idx < todoLen){
        this.todos.splice(idx, 1);
      }
    }
  }

}
</script>