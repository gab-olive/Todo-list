import "./styles.css";



class Todos {

    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    renderTodos() {
        const tasks = document.querySelector(".tasks")

        const task = document.createElement("div")
        task.className = "task"

        const taskCheck = document.createElement("button")
        taskCheck.className = "task-check"

        const taskTitle = document.createElement("div")
        taskTitle.className = "task-title"
        taskTitle.textContent = this.title

        const taskDetails = document.createElement("button")
        taskDetails.className = "task-details"
        taskDetails.textContent = "Details"

        const taskDate = document.createElement("div")
        taskDate.className = "task-dueDate"
        taskDate.textContent = this.dueDate

        const taskRemove = document.createElement("button")
        taskRemove.className = "task-remove"
        taskRemove.textContent = "Remove"


        task.appendChild(taskCheck)
        task.appendChild(taskTitle)
        task.appendChild(taskDetails)
        task.appendChild(taskDate)
        task.appendChild(taskRemove)

        tasks.appendChild(task)
    }
}



let taskOne = new Todos('Task Title', 'description', 'mm/dd')
taskOne.renderTodos()
taskOne.renderTodos()

const body = document.querySelector("body")

function renderForm() {
    const form = document.createElement("form") 
    body.appendChild(form)
}

const newButton = document.querySelector(".new-todo")
newButton.addEventListener("click", () => {

    renderForm()
})




/*
<div class="task">
                <button class="task-check"></button>
                <div class="task-title">Task Title</div>
                <button class="task-details">Details</button>
                <div class="task-dueDate">mm/dd</div>
                <button class="task-remove">Remove</button>
            </div>
*/