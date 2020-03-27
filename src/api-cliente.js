const URL='https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=7e635f5fe3d01cd0cb267f94c4d5228a&format=json'

function getEventos(){
   return fetch(URL)
   .then(response=>response.json())
   .then(data=>data.topartists.artist)
   .then(artists=>artists.map(artist=>{
       return{
           name:artist.name,
           image:"https://imagenes.universia.net/gc/net/images/educacion/s/se/sem/semana_de_las-juventudes_2019.jpg",
           likes:200,
           comments:200

       }
   }))
}

export {getEventos}