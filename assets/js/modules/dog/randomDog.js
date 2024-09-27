const dogUrl = 'https://dog.ceo/api/breeds/image/random'
let dogElement


export default function randomDog(id) {
    dogElement = document.getElementById(id)

    setInterval(fetchRandomDog, 20000);
    fetchRandomDog()
}

function fetchRandomDog() {

    fetch(dogUrl)
        .then((response) => {

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            const dogImg = document.querySelector('.dog-img')
            showDog(data.message)
        })
        .catch(error => console.error(error))

}



function showDog(dogImgUrl) {
    let myHtml = `<img src="${dogImgUrl}" alt="Random dog" />`
    dogElement.innerHTML = myHtml
}