
export default async function getAllProducts() {
    console.log('getAllProducts');


}


export async function findProduct(searchString) {

    let searchURL = `https://dummyjson.com/products/search?q=${searchString}`

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