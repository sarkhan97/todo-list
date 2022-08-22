let addBtn = document.querySelector("#add")

let myList = document.querySelector(".mylist")

let inputText = document.querySelector("#input-text")

let clean = document.querySelector("#clean")



addBtn.addEventListener("click", function () {
  paragraph = document.createElement('p')
  myList.appendChild(paragraph)
  paragraph.innerHTML = inputText.value
  inputText.value = ""
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through"

  })

  paragraph.addEventListener("dblclick", function () {
    myList.removeChild(paragraph)
  })

  clean.addEventListener("click", function () {
    myList.remove(paragraph)
  })

})

let paragraph = document.querySelector("p")

let div = documnet.querySelector("#div")


x = document.createElement('p')
div.appendChild(x)