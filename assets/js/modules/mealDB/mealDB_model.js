
export default async function getAllProducts() {

}

export async function findProduct(searchString) {
    console.log(searchString);

    let searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`

    return fetch(searchURL)
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