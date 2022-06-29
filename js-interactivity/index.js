
let message = document.querySelector("HTML");

console.log('hello world');

let inputfield = document.querySelector("input");
function crossOffMovie(event){
    event.target.classList.toggle("checked");
    if(event.target.classList.contains("checked")){
        message.textContent = "Movie watched";
    }
    else{
        message.textContent = 'Movie added back!';
    }
}
function deleteMovie(event){
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

function addMovie(event){
event.preventDefault();
let movie = document.createElement("li");
let movieTitle = document.createElement("span");
movieTitle.textContent = inputfield.value;
movieTitle.addEventListener("click",crossOffMovie);
movie.appendChild(movieTitle);
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "x";
deleteBtn.addEventListener("click",deleteMovie);
movie.appendChild(deleteBtn);
let UL = document.querySelector("ul");
UL.appendChild(movie);
inputfield.value = "";
}
let form = document.querySelector("form");
form.addEventListener("submit", addMovie);

