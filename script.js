// ==============================
// THEME
// ==============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";
}


// ==============================
// TASK MANAGEMENT
// ==============================

const taskInput = document.getElementById("taskInput");
const saveTaskBtn = document.getElementById("saveTaskBtn");
const taskList = document.getElementById("taskList");
const completedCount = document.getElementById("completedCount");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const taskElement = document.createElement("div");

        taskElement.className =
            "task " +
            (task.completed ? "completed" : "");

        taskElement.innerHTML = `

            <div class="task-left">

                <span class="checkbox" onclick="toggleTask(${index})">
                    ${task.completed ? "☑" : "☐"}
                </span>

                <span>${task.text}</span>

            </div>

            <button
                class="delete-task"
                onclick="deleteTask(${index})"
            >
                Delete
            </button>

        `;

        taskList.appendChild(taskElement);

    });

    updateCompletedCount();

}

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        text: text,

        completed: false

    });

    taskInput.value = "";

    saveTasks();

    displayTasks();

}

function toggleTask(index) {

    tasks[index].completed =
        !tasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

}

function updateCompletedCount() {

    const completed =
        tasks.filter(task => task.completed).length;

    completedCount.textContent = completed;

}

saveTaskBtn.addEventListener(
    "click",
    addTask
);

taskInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            addTask();

        }

    }
);

displayTasks();


// ==============================
// POMODORO TIMER
// ==============================

let timerSeconds = 25 * 60;

let timerInterval = null;

const timerDisplay =
    document.getElementById("timerDisplay");

const startTimer =
    document.getElementById("startTimer");

const resetTimer =
    document.getElementById("resetTimer");

function updateTimerDisplay() {

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}

startTimer.addEventListener("click", () => {

    if (timerInterval) return;

    timerInterval = setInterval(() => {

        if (timerSeconds <= 0) {

            clearInterval(timerInterval);

            timerInterval = null;

            alert("Focus session completed! 🎉");

            return;

        }

        timerSeconds--;

        updateTimerDisplay();

    }, 1000);

});

resetTimer.addEventListener("click", () => {

    clearInterval(timerInterval);

    timerInterval = null;

    timerSeconds = 25 * 60;

    updateTimerDisplay();

});


// ==============================
// NOTES
// ==============================

const notesArea =
    document.getElementById("notesArea");

const saveNotes =
    document.getElementById("saveNotes");

notesArea.value =
    localStorage.getItem("notes") || "";

saveNotes.addEventListener("click", () => {

    localStorage.setItem(
        "notes",
        notesArea.value
    );

    alert("Notes saved successfully! 📝");

});


// ==============================
// FOCUS MINUTES
// ==============================

let focusMinutes =
    localStorage.getItem("focusMinutes") || 0;

document.getElementById(
    "focusMinutes"
).textContent = focusMinutes;