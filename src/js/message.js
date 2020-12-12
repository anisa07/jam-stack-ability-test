const messages = [
    "new meesage ⏰",
    "no messages 🕸",
    "message cannot be read 💣",
    "memory is full, clean it, to open a new one ⛔️"
]

const m = messages[Math.floor(Math.random() * messages.length)]

document.querySelector(".message").append(m);