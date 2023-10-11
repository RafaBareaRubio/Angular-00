interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 33,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//Desestructuracion de audioPlayer
const { song:anotherSong, songDuration:duration } = audioPlayer;

//Desestructuracion de details dentro de audioPlayer
const { author:anotherAutor} = audioPlayer.details;


console.log('Song: ', anotherSong)
console.log('Duracion: ',duration)
console.log ('Author: ', anotherAutor)


const dragonBall: string[]=  ['Goku','Vegeta','Trunk'];

//Vamos a destructurar una tabla

const [, ,trunks = 'Not found']: string[] = ['Goku','Vegeta'];

console.log('Personaje 3:', dragonBall[2] || 'No hay personaje')
console.error('Personaje 3:', trunks)

export {}