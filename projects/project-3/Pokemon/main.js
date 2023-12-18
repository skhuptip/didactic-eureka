console.log('this works');

const pokemon = [
    {
        name: "Bulbasaur",
        type: ["grass", "poison"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png"
    },
    {
        name: "Ivysaur",
        type: ["grass", "poison"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/250px-0002Ivysaur.png"
    },
    {
        name: "Venusaur",
        type: ["grass", "poison"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/250px-0003Venusaur.png"
    },

    {
        name: "Charmander",
        type: ["fire"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png"
    },
    {
        name: "Charmeleon",
        type: ["fire"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/250px-0005Charmeleon.png"
    },
    {
        name: "Charizard",
        type: ["fire", "flying"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/250px-0006Charizard.png"
    },

    {
        name: "Squirtle",
        type: ["water"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/250px-0007Squirtle.png"
    },
    {
        name: "Wartortle",
        type: ["water"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/250px-0008Wartortle.png"
    },
    {
        name: "Blastoise",
        type: ["water"],
        image: "https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/250px-0009Blastoise.png"
    },

    {
        name: "Caterpie",
        type: ["bug"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/250px-0010Caterpie.png"
    },
    {
        name: "Metapod",
        type: ["bug"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/d/da/0011Metapod.png/250px-0011Metapod.png"
    },
    {
        name: "Butterfree",
        type: ["bug", "flying"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/250px-0012Butterfree.png"
    },

    {
        name: "Weedle",
        type: ["bug", "poison"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/250px-0013Weedle.png"
    },
    {
        name: "Kakuna",
        type: ["bug", "poison"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/250px-0014Kakuna.png"
    },
    {
        name: "Beedrill",
        type: ["bug", "poison"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/f/f7/0015Beedrill.png/250px-0015Beedrill.png"
    },

    {
        name: "Pidgey",
        type: ["normal","flying"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/0/0c/0016Pidgey.png/250px-0016Pidgey.png"
    },
    {
        name: "Pidgeotto",
        type: ["normal","flying"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/250px-0017Pidgeotto.png"
    },
    {
        name: "Pidgeot",
        type: ["normal","flying"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/7/73/0018Pidgeot.png/250px-0018Pidgeot.png"
    },

    {
        name: "Rattata",
        type: ["normal"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/250px-0019Rattata.png"
    },
    {
        name: "Raticate",
        type: ["normal"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/2/2c/0020Raticate.png/600px-0020Raticate.png"
    },

    {
        name: "Spearow",
        type: ["normal", "flying"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/2/2d/0021Spearow.png/600px-0021Spearow.png"
    },
    {
        name: "Fearow",
        type: ["normal", "flying"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/9/92/0022Fearow.png/600px-0022Fearow.png"
    },

    {
        name: "Ekans",
        type: ["poison"],
        image:
        "https://archives.bulbagarden.net/media/upload/thumb/d/d2/0023Ekans.png/600px-0023Ekans.png"
    },
    {
        name: "Arbok",
        type: ["poison"],
        image:
        ""
    },

    {
        name: "Pikachu",
        type: ["electric"],
        image:
        ""
    },
    {
        name: "Raichu",
        type: ["electric"],
        image:
        ""
    },

    {
        name: "Sandshrew",
        type: ["ground"],
        image:
        ""
    },
    {
        name: "Sandslash",
        type: ["ground"],
        image:
        ""
    },

    {
        name: "Nidoran-F",
        type: ["poison"],
        image:
        ""
    },
    {
        name: "Nidorina",
        type: ["poison"],
        image:
        ""
    },
    {
        name: "Nidoqueen",
        type: ["poison", "ground"],
        image:
        ""
    },

    {
        name: "Nidoran-M",
        type: ["poison"],
        image:
        ""
    },
    {
        name: "Nidorino",
        type: ["poison"],
        image:
        ""
    },
    {
        name: "Nidoking",
        type: ["poison", "ground"],
        image:
        ""
    },

    {
        name: "Clefairy",
        type: ["normal"],
        image:
        ""
    },
    {
        name: "Clefable",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Vulpix",
        type: ["fire"],
        image:
        ""
    },
    {
        name: "Ninetales",
        type: ["fire"],
        image:
        ""
    },

    {
        name: "Jigglypuff",
        type: ["normal"],
        image:
        ""
    },
    {
        name: "Wigglytuff",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Zubat",
        type: ["poison", "flying"],
        image:
        ""
    },
    {
        name: "Golbat",
        type: ["poison", "flying"],
        image:
        ""
    },

    {
        name: "Oddish",
        type: ["grass", "poison"],
        image:
        ""
    },
    {
        name: "Gloom",
        type: ["grass", "poison"],
        image:
        ""
    },
    {
        name: "Vileplume",
        type: ["grass", "poison"],
        image:
        ""
    },

    {
        name: "Paras",
        type: ["bug", "grass"],
        image:
        ""
    },
    {
        name: "Parasect",
        type: ["bug", "grass"],
        image:
        ""
    },

    {
        name: "Venonat",
        type: ["bug", "poison"],
        image:
        ""
    },
    {
        name: "Venomoth",
        type: ["bug", "poison"],
        image:
        ""
    },

    {
        name: "Diglett",
        type: ["ground"],
        image:
        ""
    },
    {
        name: "Dugtrio",
        type: ["ground"],
        image:
        ""
    },

    {
        name: "Meowth",
        type: ["normal"],
        image:
        ""
    },
    {
        name: "Persian",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Psyduck",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Golduck",
        type: ["water"],
        image:
        ""
    },

    {
        name: "Mankey",
        type: ["fighting"],
        image:
        ""
    },
    {
        name: "Primeape",
        type: ["fighting"],
        image:
        ""
    },

    {
        name: "Growlithe",
        type: ["fire"],
        image:
        ""
    },
    {
        name: "Arcanine",
        type: ["fire"],
        image:
        ""
    },

    {
        name: "Poliwag",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Poliwhirl",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Poliwrath",
        type: ["water", "fighting"],
        image:
        ""
    },

    {
        name: "Abra",
        type: ["psychic"],
        image:
        ""
    },
    {
        name: "Kadabra",
        type: ["psychic"],
        image:
        ""
    },
    {
        name: "Alakazam",
        type: ["psychic"],
        image:
        ""
    },

    {
        name: "Machop",
        type: ["fighting"],
        image:
        ""
    },
    {
        name: "Machoke",
        type: ["fighting"],
        image:
        ""
    },
    {
        name: "Machamp",
        type: ["fighting"],
        image:
        ""
    },

    {
        name: "Bellsprout",
        type: ["grass", "poison"],
        image:
        ""
    },
    {
        name: "Weepinbell",
        type: ["grass", "poison"],
        image:
        ""
    },
    {
        name: "Victreebel",
        type: ["grass", "poison"],
        image:
        ""
    },

    {
        name: "Tentacool",
        type: ["water", "poison"],
        image:
        ""
    },
    {
        name: "Tentacruel",
        type: ["water", "poison"],
        image:
        ""
    },

    {
        name: "Geodude",
        type: ["rock", "ground"],
        image:
        ""
    },
    {
        name: "Graveler",
        type: ["rock", "ground"],
        image:
        ""
    },
    {
        name: "Golem",
        type: ["rock", "ground"],
        image:
        ""
    },

    {
        name: "Ponyta",
        type: ["fire"],
        image:
        ""
    },
    {
        name: "Rapidash",
        type: ["fire"],
        image:
        ""
    },

    {
        name: "Slowpoke",
        type: ["water", "psychic"],
        image:
        ""
    },
    {
        name: "Slowbro",
        type: ["water", "psychic"],
        image:
        ""
    },

    {
        name: "Magnemite",
        type: ["electric"],
        image:
        ""
    },
    {
        name: "Magneton",
        type: ["electric"],
        image:
        ""
    },

    {
        name: "Farfetch'd",
        type: ["normal", "flying"],
        image:
        ""
    },

    {
        name: "Doduo",
        type: ["normal", "flying"],
        image:
        ""
    },
    {
        name: "Dodrio",
        type: ["normal", "flying"],
        image:
        ""
    },

    {
        name: "Seel",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Dewgong",
        type: ["water", "ice"],
        image:
        ""
    },

    {
        name: "Grimer",
        type: ["poison"],
        image:
        ""
    },
    {
        name: "Muk",
        type: ["poison"],
        image:
        ""
    },

    {
        name: "Shellder",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Cloyster",
        type: ["water", "ice"],
        image:
        ""
    },

    {
        name: "Gastly",
        type: ["ghost", "poison"],
        image:
        ""
    },
    {
        name: "Haunter",
        type: ["ghost", "poison"],
        image:
        ""
    },
    {
        name: "Gengar",
        type: ["ghost", "poison"],
        image:
        ""
    },

    {
        name: "Onix",
        type: ["rock", "ground"],
        image:
        ""
    },

    {
        name: "Drowzee",
        type: ["psychic"],
        image:
        ""
    },
    {
        name: "Hypno",
        type: ["psychic"],
        image:
        ""
    },
    
    {
        name: "Krabby",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Kingler",
        type: ["water"],
        image:
        ""
    },

    {
        name: "Voltorb",
        type: ["electric"],
        image:
        ""
    },
    {
        name: "Electrode",
        type: ["electric"],
        image:
        ""
    },

    {
        name: "Exeggcute",
        type: ["grass", "psychic"],
        image:
        ""
    },
    {
        name: "Exeggutor",
        type: ["grass", "psychic"],
        image:
        ""
    },

    {
        name: "Cubone",
        type: ["ground"],
        image:
        ""
    },
    {
        name: "Marowak",
        type: ["ground"],
        image:
        ""
    },

    {
        name: "Hitmonlee",
        type: ["fighting"],
        image:
        ""
    },
    {
        name: "Hitmonchan",
        type: ["fighting"],
        image:
        ""
    },

    {
        name: "Lickitung",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Koffing",
        type: ["poison"],
        image:
        ""
    },
    {
        name: "Weezing",
        type: ["poison"],
        image:
        ""
    },

    {
        name: "Rhyhorn",
        type: ["rock", "ground"],
        image:
        ""
    },
    {
        name: "Rhydon",
        type: ["rock", "ground"],
        image:
        ""
    },

    {
        name: "Chansey",
        type: ["normal"],
        image:
        ""
    },
    
    {
        name: "Tangela",
        type: ["grass"],
        image:
        ""
    },

    {
        name: "Kangaskhan",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Horsea",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Seadra",
        type: ["water"],
        image:
        ""
    },

    {
        name: "Goldeen",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Seaking",
        type: ["water"],
        image:
        ""
    },

    {
        name: "Staryu",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Starmie",
        type: ["water", "psychic"],
        image:
        ""
    },

    {
        name: "Mr. Mime",
        type: ["psychic"],
        image:
        ""
    },

    {
        name: "Scyther",
        type: ["bug", "flying"],
        image:
        ""
    },

    {
        name: "Jynx",
        type: ["ice", "psychic"],
        image:
        ""
    },

    {
        name: "Electabuzz",
        type: ["electric"],
        image:
        ""
    },

    {
        name: "Magmar",
        type: ["fire"],
        image:
        ""
    },

    {
        name: "Pinsir",
        type: ["bug"],
        image:
        ""
    },

    {
        name: "Tauros",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Magikarp",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Gyarados",
        type: ["water", "flying"],
        image:
        ""
    },

    {
        name: "Lapras",
        type: ["water", "ice"],
        image:
        ""
    },

    {
        name: "Ditto",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Eevee",
        type: ["normal"],
        image:
        ""
    },
    {
        name: "Vaporeon",
        type: ["water"],
        image:
        ""
    },
    {
        name: "Jolteon",
        type: ["electric"],
        image:
        ""
    },
    {
        name: "Flareon",
        type: ["fire"],
        image:
        ""
    },

    {
        name: "Porygon",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Omanyte",
        type: ["rock", "water"],
        image:
        ""
    },
    {
        name: "Omastar",
        type: ["rock", "water"],
        image:
        ""
    },

    {
        name: "Kabuto",
        type: ["rock", "water"],
        image:
        ""
    },
    {
        name: "Kabutops",
        type: ["rock", "water"],
        image:
        ""
    },

    {
        name: "Aerodactyl",
        type: ["rock", "flying"],
        image:
        ""
    },

    {
        name: "Snorlax",
        type: ["normal"],
        image:
        ""
    },

    {
        name: "Articuno",
        type: ["ice", "flying"],
        image:
        ""
    },
    {
        name: "Zapdos",
        type: ["electric", "flying"],
        image:
        ""
    },
    {
        name: "Moltres",
        type: ["fire", "flying"],
        image:
        ""
    },

    {
        name: "Dratini",
        type: ["dragon"],
        image:
        ""
    },
    {
        name: "Dragonair",
        type: ["dragon"],
        image:
        ""
    },
    {
        name: "Dragonite",
        type: ["dragon", "flying"],
        image:
        ""
    },

    {
        name: "Mewtwo",
        type: ["psychic"],
        image:
        ""
    },

    {
        name: "Mew",
        type: ["psychic"],
        image:
        ""
    },

/*
    {
        name: "",
        type: [""],
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
        list_item.appendChild(image)
        list_item.appendChild(title)
        list_item.appendChild(type)
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