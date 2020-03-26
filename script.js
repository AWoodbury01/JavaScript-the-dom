var greeting = "Hello, world"

document.querySelector("#hello-container").innerHTML = greeting

//Lightning exercise 2
// var choresArray = ["vacuum", "litter box", "laundry", "dishes"]

// for(var i = 0; i < choresArray.length; i++){
//     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
// }

//Movie Poster

var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }

document.querySelector("#title").innerHTML = movieObject.title
document.querySelector("#genre").innerHTML = movieObject.genre
document.querySelector("#release-date").innerHTML = movieObject.releaseDate
