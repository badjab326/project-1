//Variables
const URL = "https://rawg.io/api/games?key=65a0d6caa83f42fdaace4080c7d3d576&search=$"

//Element References
const form$ = $('form');
const input$ = $(`input[type="text"]`);
const title$ = $('#gameTitle')
const info$ = $('#gameData');
const result$ = $('#resultInfo')

//Event listeners
form$.on('submit', loadData)

//Functions

function loadData(evt){

    evt.preventDefault()
    const userInput = input$.val()

    $.ajax(URL + userInput).then(function(data) {
        console.log(data)
        title$.text(data.results[0].name)
        result$.prepend(`<img src="${data.results[0].background_image}"/>`)
        const plats = data.results[0].platforms.map(plat => {
            // console.log(plat.platform.name)
            return `${plat.platform.name} `
        })
        info$.text(`Platforms: ${plats}`)
        
    })
    }