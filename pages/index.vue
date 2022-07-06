<template>
  <main>
    <h3>Save your thing</h3>
    <h3>Save your thing</h3>
    <h3>Save your thing</h3>
    <article class="search-container">
      <input @keyup.enter="addTodo" v-model="text" type="search">
    </article>
    <h3> {{ $store.state.tasks.length }}</h3>
    <Todo v-for="todo of todos" :todo="todo" />


  </main>
</template>

<script>

import Todo from '../components/Todo'

export default {
  name: 'Main',
  components: {
    Todo
  },
  data() {
    return {
      text: '',
      todos: this.$store.state.tasks
    }
  },
  methods: {
    addTodo() {
      if (this.text) {
        this.$store.commit('ADD_TODO', this.text);
        this.text = '';
      }
    }

  }
}
</script>

<style lang="scss">
@import '~assets/main';

body {
  background-color: rgb(19, 19, 114);
}

.search-container {
  display: flex;
  justify-content: center;
}

h3 {
  margin-top: 50px;
  color: $color;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
}

input[type="search"],
input[type="search"]:focus {
  outline: 1px solid black;
  padding: 10px;
}
</style>