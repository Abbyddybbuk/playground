const tasks = {
    tasks: [
        {
            text: 'Grocery Shopping',
            completed: true
        },
        {
            text: 'Daily Exercise',
            completed: false
        },
        {
            text: 'Playing with Ayaan',
            completed: false
        }                
    ],

    getTasksToDo() {
       return this.tasks.filter((task) => task.completed === false)
    }
}

console.log(tasks.getTasksToDo())