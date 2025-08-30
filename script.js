console.log("Welcome to Spotify")
let songIndex=0;
let audioElement = new Audio("Spotify Clone/songs/0.mp3");
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName: "Chikni-Chameli", filePath:"Spotify Clone/songs/0.mp3",coverPath:"Spotify Clone/covers/Chikni-Chameli.jpg"},
    {songName: "Chamak-Challo", filePath:"Spotify Clone/songs/1.mp3",coverPath:"Spotify Clone/covers/Chamak CHallo.jpeg"},
    {songName: "Bom Diggy", filePath:"Spotify Clone/songs/2.mp3",coverPath:"Spotify Clone/covers/Bom Diggy.jpeg"},
    {songName: "Dil-Chori", filePath:"Spotify Clone/songs/3.mp3",coverPath:"Spotify Clone/covers/Dil chori.jpeg"},
    {songName: "Love-Dose", filePath:"Spotify Clone/songs/4.mp3",coverPath:"Spotify Clone/covers/Love dose.jpeg"},
    
]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


// audioElement.play();

 audioElement.addEventListener('timeupdate',()=>{
    
    progress= parseInt((audioElement.currentTime/audioElement.duration) * 100)
    
    myProgressBar.value=progress;

 })

 myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
 }
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Spotify Clone/songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
 })

 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }

    else{
        songIndex -=1
    }
    audioElement.src = `Spotify Clone/songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0
    }

    else{
        songIndex +=1
    }
    audioElement.src = `Spotify Clone/songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
 })