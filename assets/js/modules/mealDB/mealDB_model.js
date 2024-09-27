
export default async function getAllProducts() {

}

export async function getCategories() {
    let categoryURL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

}

export async function findProduct(searchString) {


    let searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`

    return fetchStuff(searchURL)
}


async function fetchStuff(url) {

    return fetch(url)
        .then((response) => {

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            return data
        })
        .catch((error) => {
            console.error(error)
            return error
        })
}