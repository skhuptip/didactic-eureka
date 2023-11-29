console.log('this works');

const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uve" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "xenia" },
    { name: "yadri" },
    { name: "zack" }
];

// specify the container / location
const ul = document.querySelector('ul');
const searchBar = document.querySelector{'input'};

// write a function
const renderNamesToPage = (names) => {
    for (let i = 0; i < names.length; i++){
        console.log(names[i])

        // create the list items
        let list_item = document.createElement("li");

        // add a class to the lis item result-item
        list_item.classList.add("result-item");

        // pass in the name
        list_item.textContent = names[i].name;

        // append to ul (container)
        ul.appendChild(list_item)
    }
}

// search names
const searchNames = (event) => {
    console.log(event.target.value)
    let searchString = event.target.value;

    const nameFilter = people.filter(function(person){
        if(searchString){
            return person.name.includes(searchString)
        }
    })

    // display search string function
    displaySearched(nameFilter)
}

const displaySearched = (name) => {
    console.log('line 67', name)
    clearlist()
    for(let i = 0; i < name.length; i++){
        let listItem = document.createElement("li");
        listItem.textContent = name[i].name;
        ul.appendChild(listItem)
    }
}


// call the function
renderNamesToPage(people)

searchBar.addEventListener{'keyup', searchNames}