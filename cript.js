//Element References
const form$ = $('form');
const input$ = $(`input[type="text"]`);
const title$ = $('#gameTitle')
const info$ = $('#gameData');
const result$ = $('#gameImage')

//Variables


//Event listeners
form$.on('submit', loadData)

//Functions

function loadData(evt){

    evt.preventDefault()
    userInput = input$.val()
    const URL = `https://api.rawg.io/api/games?page_size=50&genres=${userInput}&key=65a0d6caa83f42fdaace4080c7d3d576`

    $.ajax(URL).then(function(data) {
        // console.log(data)
        // title$.text('')
        // result$.text('')
        title$.text(data.results[0].name)
        result$.html(`<img src="${data.results[0].background_image}"/>`)
        const plats = data.results[0].platforms.map(plat => {
            console.log(plat.platform.name)
            return `${plat.platform.name} `
        })
        console.log(info$)
        info$.text(`Platforms: ${plats}`)
        
    })
    }