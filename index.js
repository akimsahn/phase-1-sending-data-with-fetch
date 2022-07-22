document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit',submitEventData)
})

function submitEventData(e) {
    e.preventDefault()
    const username = e.target.username.value
    const email = e.target.email.value
    submitData(username,email)
    e.target.reset()
}

function submitData(userName, userEmail) {
    const configureUser = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    }

    return fetch("http://localhost:3000/users", configureUser)
    .then(resp => resp.json())
    .then(data => appendID(data))
    .catch(err => appendError(err))
}

function displayNewUser(input) {
    const table = document.querySelector('table')
    const newRow = document.createElement('tr')
    const username = document.createElement('td')
    const email = document.createElement('td')
    username.textContent = input.name
    email.textContent = input.email
    console.log(input)
    newRow.appendChild(username)
    newRow.appendChild(email)
    table.append(newRow)
}

function appendID(input) {
    const body = document.querySelector('body')
    body.append(input.id)
}

function appendError(err) {
    const body = document.querySelector('body')
    body.append(err)
}