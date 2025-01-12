// Додаткові завдання
import * as basicLightbox from 'basiclightbox'
import { nanoid } from 'nanoid'
let taskList = document.getElementById("taskList");
let userTask = document.getElementById("newTask");
const addTaskBtn = document.getElementById("addTask");

function addNewTask(newTask) {
    if (newTask.trim() === "") {
        alert("Будь ласка, введіть завдання!");
        return;
    }
    let id = nanoid(10)
    let newLi = document.createElement("li");
    newLi.classList.add("taskListElement");
    newLi.id = id;
    taskList.appendChild(newLi);
    newLi.innerHTML = `<label for="userTaskCheckbox" class="taskListLabel"> <input type="checkbox" id="userTaskCheckbox">${newTask}</label> <h4 class="task-id">ID: ${id}</h4> <button type="button" class="remove-btn">Delete</button>`;
    userTask.value = "";
}

function removeUserTask(parent) {
    parent.remove();
}

addTaskBtn.addEventListener("click", () => addNewTask(userTask.value));
document.addEventListener("keydown", (event) => {
    if (event.code === "Enter" && document.activeElement === userTask) {
        event.preventDefault();
        addNewTask(userTask.value)
    }    
})

taskList.addEventListener("click", (event) => {
    let btn = event.target;
    if (btn.classList.contains("remove-btn")) {
        let parentElement = btn.parentNode;
        removeUserTask(parentElement);
    }
});

taskList.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
        const listItem = event.target.closest("li");
        if (event.target.checked) {
            listItem.classList.add("active-task");
        } else {
            listItem.classList.remove("active-task");
        }
    }
});

// Творчі завдання

const gallery = document.querySelector('.gallery');
const imageArr = document.querySelectorAll('.gallery img');
let currentNumber = 0;
let currentInstance = null;

gallery.addEventListener('click', (event) => {
    if (event.target.tagName === "IMG") {
        currentNumber = parseInt(event.target.dataset.index, 10);
        const imgUrl = event.target.src;
        currentInstance = basicLightbox.create(`
            <img class="gallery-modal-img" src="${imgUrl}">
        `);
        currentInstance.show();
    }
});
document.addEventListener("keydown", (event) => {
    if (currentInstance) { 
        if (event.key === 'ArrowRight') {
            currentNumber = (currentNumber + 1) % imageArr.length; 
            const imgUrl = imageArr[currentNumber].src;
            currentInstance.element().querySelector('img').src = imgUrl;
        } else if (event.key === 'ArrowLeft') {
            currentNumber = (currentNumber - 1 + imageArr.length) % imageArr.length; 
            const imgUrl = imageArr[currentNumber].src;
            currentInstance.element().querySelector('img').src = imgUrl; 
        } else if (event.key === 'Escape') {
            currentInstance.close();
        }
    }
});

// Супертворчі завдання
// import Chart from 'chart.js';

import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const data = {
        labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'], 
        datasets: [{
            label: 'Кількість продажів',
            data: [120, 150, 180, 200, 220, 250],
            backgroundColor: 'rgba(23, 152, 178, 0.2)', 
            borderColor: 'rgb(54, 69, 235)', 
            borderWidth: 1
        }]
    };
    const config = {
        type: 'bar', 
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true 
                }
            }
        }
    };
    const myChart = new Chart(ctx, config);
});

// HW

// 2

const chartCanva = document.getElementById('sales-chart');
const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
        label: 'Продажі за останній місяць',
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: '#2196f3',
        borderColor: '#2196f3',
        borderWidth: 1
    }]
};
const chartConfig = {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            y: {
                beginAtZero: true 
            }
        }
    }
}
const salesChart = new Chart(chartCanva, chartConfig);