let addToy = false;

const baseUrl = 'http://localhost:3000/toys'
const toyCards = document.getElementById('toy-collection')
const toyForm = document.querySelector('.add-toy-form')
//takes in a single toy's info and renders a card to page
//fetch GET forEach
//POST
//function addCharacterInfoToDOM(character)

const addCharacterInfoToDOM = (toy) => {
  const img = document.createElement('img')
      const card = document.createElement('div')
      const toyHeader = document.createElement('h2')
      const likeCount = document.createElement('p')
      const likeButton = document.createElement('button')
      
      img.src = toy.image
      img.className = 'toy-avatar'
      card.className = 'card'
      likeButton.className = 'like-btn' 
      likeButton.setAttribute('id', 'character.id')
      
      likeCount.textContent = toy.likes + ' likes'
      toyHeader.textContent = toy.name
      likeButton.textContent = 'Like'
      
      toyCards.append(card)
      card.append(toyHeader)
      card.append(img)
      card.append(likeCount)
      card.append(likeButton)
      
      
      
      likeButton.addEventListener('click', (e) => {
        let amountOfLikes = parseInt(likeCount.innerText)
        amountOfLikes += 1
        likeCount.innerText = `${amountOfLikes} likes`

})

}


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

});

const getToys = () => {
  
  fetch(baseUrl).then((response) => {
    return response.json()
  }) .then((toys) => {
    toys.forEach((toy) => {
      const img = document.createElement('img')
      const card = document.createElement('div')
      const toyHeader = document.createElement('h2')
      const likeCount = document.createElement('p')
      const likeButton = document.createElement('button')
      
      img.src = toy.image
      img.className = 'toy-avatar'
      card.className = 'card'
      likeButton.className = 'like-btn' 
      likeButton.setAttribute('id', 'character.id')
      
      likeCount.textContent = toy.likes + ' likes'
      toyHeader.textContent = toy.name
      likeButton.textContent = 'Like'
      
      toyCards.append(card)
      card.append(toyHeader)
      card.append(img)
      card.append(likeCount)
      
      
      
      likeButton.addEventListener('click', (e) => {
        let amountOfLikes = parseInt(likeCount.innerText)
        amountOfLikes += 1
        likeCount.innerText = `${amountOfLikes} likes`
      })
      card.append(likeButton)
    });
  })
}
getToys()
//INCREASE A TOY'S LIKES using a button
//note - button tag addEventListener click
//on click make patch to increment like by 1

            
 const likeClickHandler = (e, likes) => {
  // console.log(e.target.id)
  fetch(`${baseUrl}/${e.target.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(amountOfLikes)
              })
            }
            
            
            
            
            
            
// ADD A NEW TOY
//get form node
// on form submit
  //get data
  //make post request <= option (can take data and populate DOM directly)
  // use response to populate DOM - addCharacterToDOM()

const postToys = () => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-type' : 'application/json',
      'accept' : 'application/json'
    },
    body: JSON.stringify({newToy})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}

toyForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = e.target.name.value
  let image = e.target.image.value
  let likes = 0
  let id = -1

  addCharacterInfoToDOM({
    id: id,
    name: name,
    image: image,
    likes: likes
  })
  
  e.target.reset()
  
})








