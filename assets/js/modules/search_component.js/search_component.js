

export default function CreateSearchComponent(id) {

    buildSearch(document.getElementById(id))
}

function buildSearch(element) {

    let myHTML = `<div class="search-bar">
            <input type="text" id="search-input" placeholder="Søg...">
            <button id="search-button">find</button>
        </div>`
    element.innerHTML = myHTML
    let searchButton = document.getElementById('search-button')
    searchButton.addEventListener('click', searchCallback)


}

function searchCallback() {

    let searchInput = document.getElementById('search-input')
    console.log(searchInput.value);
}

