//Element References
const form$ = $('form');
const input$ = $(`input[type="text"]`);
const title$ = $('#gameTitle');
const info$ = $('#gameData');
const result$ = $('#gameImage');

//Variables


//Event listeners
form$.on('submit', loadData)

//Functions

function loadData(evt){

    evt.preventDefault()
    let userInput = input$.val()
    //if statement for genre names
    if (userInput.toLowerCase() === 'rpg' || userInput.toLowerCase() === 'role playing game') {
        userInput = 'role-playing-games-rpg'
    } else if (userInput.toLowerCase() === 'mmo') {
        userInput = 'massively-multiplayer'
    } else if (userInput.toLowerCase() === 'shooting') {
        userInput = 'shooter'
    }
    const URL = `https://api.rawg.io/api/games?page_size=50&genres=${userInput}&key=65a0d6caa83f42fdaace4080c7d3d576`
    


    $.ajax(URL).then(function(data) {
        // console.log(data)
        const x = Math.floor((Math.random() * data.results.length) + 0)
        title$.text(data.results[x].name)
        result$.html(`<img src="${data.results[x].background_image}"/>`)
        const plats = data.results[x].platforms.map(plat => {
            // console.log(plat.platform.name)
            return `${plat.platform.name}`
        })
        console.log(info$)
        info$.text(`Platforms: ${plats.join(', ')}`)
        
    }).catch(function(data) {
        alert('Try a different genre!')
    })
    };