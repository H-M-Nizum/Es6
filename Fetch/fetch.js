/////////////////////////////////////////////////////////////////////////////////
///////////////////////////  Load Data from API /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')       // Get the data from the url
    .then(response => response.json())                          // Convert the data to JSON Object
    .then(data => console.log(data))                            // display the json object
}

/////////////////////////////////////////////////////////////////////////////////
///////////////  Load and Display Data from API /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => displayUser(users))
}

function displayUser(users) {
    const t_body = document.getElementById("table_body")
    users.forEach(user => {
        const new_user = document.createElement('tr')
        new_user.innerHTML = `
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.address.city}</td>
            <td>${user.company.name}</td>
        `
        t_body.appendChild(new_user)
    });
}
function removeData(){
    const t_body = document.getElementById("table_body")
    t_body.innerHTML = ""
}
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  GET method /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  POST method /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


function createApost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  PUT method //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

function putApost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));
}
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  PATCH method ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function patchApost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}


/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  DELETE method ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function deleteApost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    });
    
}
