const btn = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const messages = [
    'Message 1',
    'Message 2',
    'Message 3',
    'Message 4',
]

const types = ['info', 'success', 'error']

btn.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const note = document.createElement('div')
    note.classList.add('toast')
    note.classList.add(type ? type : getRandomType())


    note.innerText = message ? message : getRandomMessage()

    toasts.appendChild(note)

    setTimeout(() => {
        note.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    // console.log(Math.floor(Math.random() * types.length))
    return types[Math.floor(Math.random() * types.length)]
}

