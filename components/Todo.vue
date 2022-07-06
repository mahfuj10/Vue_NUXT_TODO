<template>
    <article id="todo">
        <h2>{{ todo.task }} </h2>
        <span style="margin-left: 20px">
            <button v-on:click="deleteTodo(todo.id)">Delete</button>
            <button v-on:click="doneTodo(todo.id)">Done</button>
        </span>
    </article>
</template>

<script>
export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
        deleteTodo(id) {
            this.$store.commit('REMOVE_TODO', id);
        },
        doneTodo(id) {
            this.$store.commit('DONE_TODO', id);
        }
    },
    data() {
        return {
            done: this.todo.done
        }
    }
}
</script>

<style>
#todo {
    background-color: white;
    padding: 5px;
    margin-bottom: 20px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    background-color: white;
    border: 1px solid black;
    padding: 5px 10px;
    cursor: pointer;
}
</style>