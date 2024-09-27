
// model imports
//import { findProduct } from '../dummyJSON/dummyJSON_model.js'
import { findProduct } from '../mealDB/mealDB_model.js'



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

    // findProduct er asynkron så derfor .then og .catch
    findProduct(searchInput.value)
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error))
}

