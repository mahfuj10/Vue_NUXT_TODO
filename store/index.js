export const state = () => ({
    tasks: [],
    counter: 333
})

export const mutations = {
    ADD_TODO(state, task) {
        state.tasks.unshift({ task, id: Math.random() * 99, done: false })
    },
    REMOVE_TODO(state, i) {
        let index = state.tasks.findIndex(task => task.id == i);
        state.tasks.splice(index, 1);
    },
    DONE_TODO(state, id) {
        const matchTask = state.tasks.find(task => task.id === id);
        matchTask.done = true;
    }
}