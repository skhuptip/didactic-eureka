console.log('this works');

const pokemon = [
    {
        name: "Bulbasaur",
        number: "0001",
        type: ["grass" , "poison"],
        type2: "poison",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"
    },
    {
        name: "Ivysaur",
        number: "0001",
        type: ["grass" , "poison"],
        type2: "poison",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/250px-0002Ivysaur.png"
    },
    {
        name: "Venusaur",
        number: "0001",
        type: "grass",
        type2: "poison",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/250px-0003Venusaur.png"
    },

    {
        name: "Charmander",
        type: "fire",
        type2: "none",
        image: "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png"
    },
    {
        name: "Charmeleon",
        type: "fire",
        type2: "none",
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/250px-0005Charmeleon.png"
    },
    {
        name: "Charizard",
        type: "fire",
        type2: "flying",
        image: "https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/250px-0006Charizard.png"
    },

    {
        name: "Squirtle",
        type: "water",
        type2: "none",
        image: "https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/250px-0007Squirtle.png"
    },
    {
        name: "Wartortle",
        type: "water",
        type2: "none",
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/250px-0008Wartortle.png"
    },
    {
        name: "Blastoise",
        type: "water",
        type2: "none",
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/250px-0009Blastoise.png"
    },

    {
        name: "Caterpie",
        type: "bug",
        type2: "none",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/250px-0010Caterpie.png"
    },
    {
        name: "Metapod",
        type: "bug",
        type2: "none",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/d/da/0011Metapod.png/250px-0011Metapod.png"
    },
    {
        name: "Butterfree",
        type: "bug",
        type2: "flying",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/250px-0012Butterfree.png"
    },

    {
        name: "Weedle",
        type: "bug",
        type2: "poison",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/250px-0013Weedle.png"
    },
    {
        name: "Kakuna",
        type: "bug",
        type2: "poison",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/250px-0014Kakuna.png"
    },
    {
        name: "Beedrill",
        type: "bug",
        type2: "poison",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/f/f7/0015Beedrill.png/250px-0015Beedrill.png"
    },


    {
        name: "Pidgey",
        type: ["normal","flying"],
        type2: "flying",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/0/0c/0016Pidgey.png/250px-0016Pidgey.png"
    },
    {
        name: "Pidgeotto",
        type: ["normal","flying"],
        type2: "flying",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/250px-0017Pidgeotto.png"
    },
    {
        name: "Pidgeot",
        type: ["normal","flying"],
        type2: "flying",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/7/73/0018Pidgeot.png/250px-0018Pidgeot.png"
    },

    {
        name: "Rattata",
        type: "normal",
        type2: "none",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/250px-0019Rattata.png"
    },
    {
        name: "Rattata-Alolan",
        type: "dark",
        type2: "normnal",
        image:
        "https://archives.bulbagarden.net/media/upload/b/be/0019Rattata-Alola.png"
    },
    {
        name: "Raticate",
        type: "normal",
        type2: "none",
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/2/2c/0020Raticate.png/600px-0020Raticate.png"
    },
    {
        name: "Raticate-Alolan",
        type: "dark",
        type2: "normal",
        image:
        "https://archives.bulbagarden.net/media/upload/a/ad/0020Raticate-Alola.png"
    },

/*
    {
        name: "",
        type: "",
        type2: "",
        image:
        ""
    },
*/

];


// grab the ul (unordered list)
const ul = document.querySelector('ul');
const filterBtns = document.querySelector('.filters')
const cards = document.getElementsByClassName('card');

// write function
const renderPokemonToThePage = (items) => {
    for(let i = 0; i < items.length; i++){
        // console.log(items[i]);

        // create a list item
        let list_item = document.createElement("li");
        list_item.classList.add("card", pokemon[i].type, `item--${i + 1}`)

        // pokemon name
        let title = document.createElement("h3");
        title.textContent = pokemon[i].name;

        // pokemon type
        let type = document.createElement("p");
        type.textContent = pokemon[i].type;

        // pokemon type2
        //let type = document.createElement("p");
        //type.textContent = pokemon[i].type2;

        // pokemon image
        let image = document.createElement("img");
        image.setAttribute("src", pokemon[i].image);

        // append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        list_item.appendChild(type)
        list_item.appendChild(image)
    }
}

// pass data into it
renderPokemonToThePage(pokemon)



// filter pokemon by type function
const filterFn = (event) => {
    // console.log(event)
    console.log(event.target)
    
    if(event.target.classList.contains('filter-btn')){
        // logic
        let active = filterBtns.querySelector('.active');
        active.classList.remove('active');
        
        event.target.classList.add('active');
        
        const filterValue = event.target.getAttribute("data-filter")
        console.log(filterValue)
   
        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains(filterValue) || filterValue === "all"){
                cards[i].classList.remove('hide');
                cards[i].classList.add('show');
            } else {
                cards[i].classList.remove('show');
                cards[i].classList.add('hide');             
            }
        }
    }
}

filterBtns.addEventListener('click', filterFn)