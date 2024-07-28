const url = "https://jsonplaceholder.typicode.com/posts";   
const showdata = document.querySelector(".post");

const addpostform = document.querySelector(".form-input");

const titleValue = document.getElementById("title-value")
const bodyValue = document.getElementById("body-content")

let output = "";

const renderpost = (data) => {
    
    output +=
        `<div class="card">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 text-body-secondary">${data.id}</h6>
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.body}</p>
                <a class="edit-btn ml-5">Edit</a>
                <a class="delete-btn">Delete</a>
            </div>
            </div><br />  `
}

// get

fetch(url)
    .then((res) => (res.json()))
    .then((finaldata) => {
        finaldata.forEach((post) => {
            renderpost(post)
        });
        showdata.innerHTML = output
    })

// post   


addpostform.addEventListener("submit", (e) => {
    e.preventDefault();
 
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: titleValue.value,
            body: bodyValue.value
        })
    })
    .then(res => res.json())
    .then(data=>{
        const dataArr= [];
        dataArr.push(data);

        renderpost(dataArr)      
    })
})






