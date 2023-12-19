console.log('this works');

const pokemon = [
    {
        name: "Bulbasaur",
        type: ["grass", "poison"],
        image:
        "img/0001Bulbasaur.png"
    },
    {
        name: "Ivysaur",
        type: ["grass", "poison"],
        image:
        "img/0002Ivysaur.png"
    },
    {
        name: "Venusaur",
        type: ["grass", "poison"],
        image:
        "img/0003Venusaur.png"
    },

    {
        name: "Charmander",
        type: ["fire"],
        image:
        "img/0004Charmander.png"
    },
    {
        name: "Charmeleon",
        type: ["fire"],
        image:
        "img/0005Charmeleon.png"
    },
    {
        name: "Charizard",
        type: ["fire", "flying"],
        image:
        "img/0006Charizard.png"
    },

    {
        name: "Squirtle",
        type: ["water"],
        image:
        "img/0007Squirtle.png"
    },
    {
        name: "Wartortle",
        type: ["water"],
        image:
        "img/0008Wartortle.png"
    },
    {
        name: "Blastoise",
        type: ["water"],
        image:
        "img/0009Blastoise.png"
    },

    {
        name: "Caterpie",
        type: ["bug"],
        image:
        "img/0010Caterpie.png"
    },
    {
        name: "Metapod",
        type: ["bug"],
        image:
        "img/0011Metapod.png"
    },
    {
        name: "Butterfree",
        type: ["bug", "flying"],
        image:
        "img/0012Butterfree.png"
    },

    {
        name: "Weedle",
        type: ["bug", "poison"],
        image:
        "img/0013Weedle.png"
    },
    {
        name: "Kakuna",
        type: ["bug", "poison"],
        image:
        "img/0014Kakuna.png"
    },
    {
        name: "Beedrill",
        type: ["bug", "poison"],
        image:
        "img/0015Beedrill.png"
    },

    {
        name: "Pidgey",
        type: ["normal","flying"],
        image:
        "img/0016Pidgey.png"
    },
    {
        name: "Pidgeotto",
        type: ["normal","flying"],
        image:
        "img/0017Pidgeotto.png"
    },
    {
        name: "Pidgeot",
        type: ["normal","flying"],
        image:
        "img/0018Pidgeot.png"
    },

    {
        name: "Rattata",
        type: ["normal"],
        image:
        "img/0019Rattata.png"
    },
    {
        name: "Raticate",
        type: ["normal"],
        image:
        "img/0020Raticate.png"
    },

    {
        name: "Spearow",
        type: ["normal", "flying"],
        image:
        "img/0021Spearow.png"
    },
    {
        name: "Fearow",
        type: ["normal", "flying"],
        image:
        "img/0022Fearow.png"
    },

    {
        name: "Ekans",
        type: ["poison"],
        image:
        "img/0023Ekans.png"
    },
    {
        name: "Arbok",
        type: ["poison"],
        image:
        "img/0024Arbok.png"
    },

    {
        name: "Pikachu",
        type: ["electric"],
        image:
        "img/0025Pikachu.png"
    },
    {
        name: "Raichu",
        type: ["electric"],
        image:
        "img/0026Raichu.png"
    },

    {
        name: "Sandshrew",
        type: ["ground"],
        image:
        "img/0027Sandshrew.png"
    },
    {
        name: "Sandslash",
        type: ["ground"],
        image:
        "img/0028Sandslash.png"
    },

    {
        name: "Nidoran-F",
        type: ["poison"],
        image:
        "img/0029Nidoran.png"
    },
    {
        name: "Nidorina",
        type: ["poison"],
        image:
        "img/0030Nidorina.png"
    },
    {
        name: "Nidoqueen",
        type: ["poison", "ground"],
        image:
        "img/0031Nidoqueen.png"
    },

    {
        name: "Nidoran-M",
        type: ["poison"],
        image:
        "img/0032Nidoran.png"
    },
    {
        name: "Nidorino",
        type: ["poison"],
        image:
        "img/0033Nidorino.png"
    },
    {
        name: "Nidoking",
        type: ["poison", "ground"],
        image:
        "img/0034Nidoking.png"
    },

    {
        name: "Clefairy",
        type: ["normal"],
        image:
        "img/0035Clefairy.png"
    },
    {
        name: "Clefable",
        type: ["normal"],
        image:
        "img/0036Clefable.png"
    },

    {
        name: "Vulpix",
        type: ["fire"],
        image:
        "img/0037Vulpix.png"
    },
    {
        name: "Ninetales",
        type: ["fire"],
        image:
        "img/0038Ninetales.png"
    },

    {
        name: "Jigglypuff",
        type: ["normal"],
        image:
        "img/0039Jigglypuff.png"
    },
    {
        name: "Wigglytuff",
        type: ["normal"],
        image:
        "img/0040Wigglytuff.png"
    },

    {
        name: "Zubat",
        type: ["poison", "flying"],
        image:
        "img/0041Zubat.png"
    },
    {
        name: "Golbat",
        type: ["poison", "flying"],
        image:
        "img/0042Golbat.png"
    },

    {
        name: "Oddish",
        type: ["grass", "poison"],
        image:
        "img/0043Oddish.png"
    },
    {
        name: "Gloom",
        type: ["grass", "poison"],
        image:
        "img/0044Gloom.png"
    },
    {
        name: "Vileplume",
        type: ["grass", "poison"],
        image:
        "img/0045Vileplume.png"
    },

    {
        name: "Paras",
        type: ["bug", "grass"],
        image:
        "img/0046Paras.png"
    },
    {
        name: "Parasect",
        type: ["bug", "grass"],
        image:
        "img/0047Parasect.png"
    },

    {
        name: "Venonat",
        type: ["bug", "poison"],
        image:
        "img/0048Venonat.png"
    },
    {
        name: "Venomoth",
        type: ["bug", "poison"],
        image:
        "img/0049Venomoth.png"
    },

    {
        name: "Diglett",
        type: ["ground"],
        image:
        "img/0050Diglett.png"
    },
    {
        name: "Dugtrio",
        type: ["ground"],
        image:
        "img/0051Dugtrio.png"
    },

    {
        name: "Meowth",
        type: ["normal"],
        image:
        "img/0052Meowth.png"
    },
    {
        name: "Persian",
        type: ["normal"],
        image:
        "img/0053Persian.png"
    },

    {
        name: "Psyduck",
        type: ["water"],
        image:
        "img/0054Psyduck.png"
    },
    {
        name: "Golduck",
        type: ["water"],
        image:
        "img/0055Golduck.png"
    },

    {
        name: "Mankey",
        type: ["fighting"],
        image:
        "img/0056Mankey.png"
    },
    {
        name: "Primeape",
        type: ["fighting"],
        image:
        "img/0057Primeape.png"
    },

    {
        name: "Growlithe",
        type: ["fire"],
        image:
        "img/0058Growlithe.png"
    },
    {
        name: "Arcanine",
        type: ["fire"],
        image:
        "img/0059Arcanine.png"
    },

    {
        name: "Poliwag",
        type: ["water"],
        image:
        "img/0060Poliwag.png"
    },
    {
        name: "Poliwhirl",
        type: ["water"],
        image:
        "img/0061Poliwhirl.png"
    },
    {
        name: "Poliwrath",
        type: ["water", "fighting"],
        image:
        "img/0062Poliwrath.png"
    },

    {
        name: "Abra",
        type: ["psychic"],
        image:
        "img/0063Abra.png"
    },
    {
        name: "Kadabra",
        type: ["psychic"],
        image:
        "img/0064Kadabra.png"
    },
    {
        name: "Alakazam",
        type: ["psychic"],
        image:
        "img/0065Alakazam.png"
    },

    {
        name: "Machop",
        type: ["fighting"],
        image:
        "img/0066Machop.png"
    },
    {
        name: "Machoke",
        type: ["fighting"],
        image:
        "img/0067Machoke.png"
    },
    {
        name: "Machamp",
        type: ["fighting"],
        image:
        "img/0068Machamp.png"
    },

    {
        name: "Bellsprout",
        type: ["grass", "poison"],
        image:
        "img/0069Bellsprout.png"
    },
    {
        name: "Weepinbell",
        type: ["grass", "poison"],
        image:
        "img/0070Weepinbell.png"
    },
    {
        name: "Victreebel",
        type: ["grass", "poison"],
        image:
        "img/0071Victreebel.png"
    },

    {
        name: "Tentacool",
        type: ["water", "poison"],
        image:
        "img/0072Tentacool.png"
    },
    {
        name: "Tentacruel",
        type: ["water", "poison"],
        image:
        "img/0073Tentacruel.png"
    },

    {
        name: "Geodude",
        type: ["rock", "ground"],
        image:
        "img/0074Geodude.png"
    },
    {
        name: "Graveler",
        type: ["rock", "ground"],
        image:
        "img/0075Graveler.png"
    },
    {
        name: "Golem",
        type: ["rock", "ground"],
        image:
        "img/0076Golem.png"
    },

    {
        name: "Ponyta",
        type: ["fire"],
        image:
        "img/0077Ponyta.png"
    },
    {
        name: "Rapidash",
        type: ["fire"],
        image:
        "img/0078Rapidash.png"
    },

    {
        name: "Slowpoke",
        type: ["water", "psychic"],
        image:
        "img/0079Slowpoke.png"
    },
    {
        name: "Slowbro",
        type: ["water", "psychic"],
        image:
        "img/0080Slowbro.png"
    },

    {
        name: "Magnemite",
        type: ["electric"],
        image:
        "img/0081Magnemite.png"
    },
    {
        name: "Magneton",
        type: ["electric"],
        image:
        "img/0082Magneton.png"
    },

    {
        name: "Farfetch'd",
        type: ["normal", "flying"],
        image:
        "img/0083Farfetch'd.png"
    },

    {
        name: "Doduo",
        type: ["normal", "flying"],
        image:
        "img/0084Doduo.png"
    },
    {
        name: "Dodrio",
        type: ["normal", "flying"],
        image:
        "img/0085Dodrio.png"
    },

    {
        name: "Seel",
        type: ["water"],
        image:
        "img/0086Seel.png"
    },
    {
        name: "Dewgong",
        type: ["water", "ice"],
        image:
        "img/0087Dewgong.png"
    },

    {
        name: "Grimer",
        type: ["poison"],
        image:
        "img/0088Grimer.png"
    },
    {
        name: "Muk",
        type: ["poison"],
        image:
        "img/0089Muk.png"
    },

    {
        name: "Shellder",
        type: ["water"],
        image:
        "img/0090Shellder.png"
    },
    {
        name: "Cloyster",
        type: ["water", "ice"],
        image:
        "img/0091Cloyster.png"
    },

    {
        name: "Gastly",
        type: ["ghost", "poison"],
        image:
        "img/0092Gastly.png"
    },
    {
        name: "Haunter",
        type: ["ghost", "poison"],
        image:
        "img/0093Haunter.png"
    },
    {
        name: "Gengar",
        type: ["ghost", "poison"],
        image:
        "img/0094Gengar.png"
    },

    {
        name: "Onix",
        type: ["rock", "ground"],
        image:
        "img/0095Onix.png"
    },

    {
        name: "Drowzee",
        type: ["psychic"],
        image:
        "img/0096Drowzee.png"
    },
    {
        name: "Hypno",
        type: ["psychic"],
        image:
        "img/0097Hypno.png"
    },
    
    {
        name: "Krabby",
        type: ["water"],
        image:
        "img/0098Krabby.png"
    },
    {
        name: "Kingler",
        type: ["water"],
        image:
        "img/0099Kingler.png"
    },

    {
        name: "Voltorb",
        type: ["electric"],
        image:
        "img/0100Voltorb.png"
    },
    {
        name: "Electrode",
        type: ["electric"],
        image:
        "img/0101Electrode.png"
    },

    {
        name: "Exeggcute",
        type: ["grass", "psychic"],
        image:
        "img/0102Exeggcute.png"
    },
    {
        name: "Exeggutor",
        type: ["grass", "psychic"],
        image:
        "img/0103Exeggutor.png"
    },

    {
        name: "Cubone",
        type: ["ground"],
        image:
        "img/0104Cubone.png"
    },
    {
        name: "Marowak",
        type: ["ground"],
        image:
        "img/0105Marowak.png"
    },

    {
        name: "Hitmonlee",
        type: ["fighting"],
        image:
        "img/0106Hitmonlee.png"
    },
    {
        name: "Hitmonchan",
        type: ["fighting"],
        image:
        "img/0107Hitmonchan.png"
    },

    {
        name: "Lickitung",
        type: ["normal"],
        image:
        "img/0108Lickitung.png"
    },

    {
        name: "Koffing",
        type: ["poison"],
        image:
        "img/0109Koffing.png"
    },
    {
        name: "Weezing",
        type: ["poison"],
        image:
        "img/0110Weezing.png"
    },

    {
        name: "Rhyhorn",
        type: ["rock", "ground"],
        image:
        "img/0111Rhyhorn.png"
    },
    {
        name: "Rhydon",
        type: ["rock", "ground"],
        image:
        "img/0112Rhydon.png"
    },

    {
        name: "Chansey",
        type: ["normal"],
        image:
        "img/0113Chansey.png"
    },
    
    {
        name: "Tangela",
        type: ["grass"],
        image:
        "img/0114Tangela.png"
    },

    {
        name: "Kangaskhan",
        type: ["normal"],
        image:
        "img/0115Kangaskhan.png"
    },

    {
        name: "Horsea",
        type: ["water"],
        image:
        "img/0116Horsea.png"
    },
    {
        name: "Seadra",
        type: ["water"],
        image:
        "img/0117Seadra.png"
    },

    {
        name: "Goldeen",
        type: ["water"],
        image:
        "img/0118Goldeen.png"
    },
    {
        name: "Seaking",
        type: ["water"],
        image:
        "img/0119Seaking.png"
    },

    {
        name: "Staryu",
        type: ["water"],
        image:
        "img/0120Staryu.png"
    },
    {
        name: "Starmie",
        type: ["water", "psychic"],
        image:
        "img/0121Starmie.png"
    },

    {
        name: "Mr. Mime",
        type: ["psychic"],
        image:
        "img/0122Mr_Mime.png"
    },

    {
        name: "Scyther",
        type: ["bug", "flying"],
        image:
        "img/0123Scyther.png"
    },

    {
        name: "Jynx",
        type: ["ice", "psychic"],
        image:
        "img/0124Jynx.png"
    },

    {
        name: "Electabuzz",
        type: ["electric"],
        image:
        "img/0125Electabuzz.png"
    },

    {
        name: "Magmar",
        type: ["fire"],
        image:
        "img/0126Magmar.png"
    },

    {
        name: "Pinsir",
        type: ["bug"],
        image:
        "img/0127Pinsir.png"
    },

    {
        name: "Tauros",
        type: ["normal"],
        image:
        "img/0128Tauros.png"
    },

    {
        name: "Magikarp",
        type: ["water"],
        image:
        "img/0129Magikarp.png"
    },
    {
        name: "Gyarados",
        type: ["water", "flying"],
        image:
        "img/0130Gyarados.png"
    },

    {
        name: "Lapras",
        type: ["water", "ice"],
        image:
        "img/0131Lapras.png"
    },

    {
        name: "Ditto",
        type: ["normal"],
        image:
        "img/0132Ditto.png"
    },

    {
        name: "Eevee",
        type: ["normal"],
        image:
        "img/0133Eevee.png"
    },
    {
        name: "Vaporeon",
        type: ["water"],
        image:
        "img/0134Vaporeon.png"
    },
    {
        name: "Jolteon",
        type: ["electric"],
        image:
        "img/0135Jolteon.png"
    },
    {
        name: "Flareon",
        type: ["fire"],
        image:
        "img/0136Flareon.png"
    },

    {
        name: "Porygon",
        type: ["normal"],
        image:
        "img/0137Porygon.png"
    },

    {
        name: "Omanyte",
        type: ["rock", "water"],
        image:
        "img/0138Omanyte.png"
    },
    {
        name: "Omastar",
        type: ["rock", "water"],
        image:
        "img/0139Omastar.png"
    },

    {
        name: "Kabuto",
        type: ["rock", "water"],
        image:
        "img/0140Kabuto.png"
    },
    {
        name: "Kabutops",
        type: ["rock", "water"],
        image:
        "img/0141Kabutops.png"
    },

    {
        name: "Aerodactyl",
        type: ["rock", "flying"],
        image:
        "img/0142Aerodactyl.png"
    },

    {
        name: "Snorlax",
        type: ["normal"],
        image:
        "img/0143Snorlax.png"
    },

    {
        name: "Articuno",
        type: ["ice", "flying"],
        image:
        "img/0144Articuno.png"
    },
    {
        name: "Zapdos",
        type: ["electric", "flying"],
        image:
        "img/0145Zapdos.png"
    },
    {
        name: "Moltres",
        type: ["fire", "flying"],
        image:
        "img/0146Moltres.png"
    },

    {
        name: "Dratini",
        type: ["dragon"],
        image:
        "img/0147Dratini.png"
    },
    {
        name: "Dragonair",
        type: ["dragon"],
        image:
        "img/0148Dragonair.png"
    },
    {
        name: "Dragonite",
        type: ["dragon" /*, "flying"*/],
        image:
        "img/0149Dragonite.png"
    },

    {
        name: "Mewtwo",
        type: ["psychic"],
        image:
        "img/0150Mewtwo.png"
    },

    {
        name: "Mew",
        type: ["psychic"],
        image:
        "img/0151Mew.png"
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

console.table (
pokemon.filter(p => p.type.includes("poison"))
)