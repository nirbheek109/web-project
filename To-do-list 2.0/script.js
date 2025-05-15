let date = new Date();
let finalDate = date.toDateString()
const displayDate = document.querySelector('h5');
displayDate.innerText = finalDate

const btn = document.getElementById('add-btn');
const input = document.querySelector('input');
const tasks = document.querySelector('.tasks')
const del = document.querySelector ('#del')
const delAll = document.querySelector ('#del-all')

btn.addEventListener('click', function() {
    if(input.value === '') {
        alert('Please add a text')
    } else {
        const li = document.createElement('li');
        li.innerHTML = `<h6>${input.value.charAt(0).toUpperCase() + input.value.slice(1)}</h6>`
        tasks.appendChild(li)
        li.addEventListener('click', function() {
            li.classList.add('completed')
            li.style.textDecoration = 'line-through';
        })
        input.value = '';
        input.focus();
    }
})

del.addEventListener('click', function() {
    const li = tasks.querySelector('li')
    if (li) {
        tasks.removeChild(li)
    }
})

delAll.addEventListener('click', function () {
    const li = tasks.querySelector('li');
    if(li) {
        tasks.innerHTML = ('')
    }
})
