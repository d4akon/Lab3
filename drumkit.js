document.addEventListener('keypress', onKeyPress)

const track1 = {sounds:[], timeOfStart: 0};
const track2 = {sounds:[], timeOfStart: 0};
const track3 = {sounds:[], timeOfStart: 0};
const track4 = {sounds:[], timeOfStart: 0};

let currentTrack = {sounds:[], timeOfStart: 0};

const track1Btn = document.getElementById('track1');
const track2Btn = document.getElementById('track2');
const track3Btn = document.getElementById('track3');
const track4Btn = document.getElementById('track4');

const delete1Btn = document.getElementById('delete1');
const delete2Btn = document.getElementById('delete2');
const delete3Btn = document.getElementById('delete3');
const delete4Btn = document.getElementById('delete4');

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    'f': document.querySelector('#s4'),
    'g': document.querySelector('#s5'),
    'h': document.querySelector('#s6'),
    'j': document.querySelector('#s7'),
    'k': document.querySelector('#s8'),
    'l': document.querySelector('#s9'),
}

function onKeyPress(event) {
    const soundKey = KeyToSound[event.key]

    if(currentTrack.timeOfStart != 0){
        var currentSound = {sound: soundKey, 
        duration: Date.now() - currentTrack.timeOfStart}
        currentTrack.sounds.push(currentSound);
        console.log(currentTrack);
    }
    playSound(soundKey)
}

function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}

track1Btn.onclick = function(){startTrack(track1, "track1")};
track2Btn.onclick = function(){startTrack(track2, "track2")};
track3Btn.onclick = function(){startTrack(track3, "track3")};
track4Btn.onclick = function(){startTrack(track4, "track4")};

delete1Btn.onclick = function(){deleteTrack(track1)};
delete2Btn.onclick = function(){deleteTrack(track2)};
delete3Btn.onclick = function(){deleteTrack(track3)};
delete4Btn.onclick = function(){deleteTrack(track4)};

function startTrack(track, idName){
    console.log(track)
    console.log(currentTrack)
    if(currentTrack.sounds.length == 0)
        document.getElementById(idName).innerHTML = "&#9209;";

    if(currentTrack.sounds.length > 0)
    document.getElementById(idName).innerHTML = "&#9658;";

    if(track.sounds.length > 0){
        let delay = 0;
        console.log(track);

        for(let i = 0; i < track.sounds.length; i++) {
            setTimeout(() => {
                playSound(track.sounds[i].sound);
            }, delay);
            delay = track.sounds[i].duration;
        }
        
        setTimeout(() => {
            document.getElementById(idName).innerHTML = "&#9658;";
        },delay)
    }
    else{
        track.sounds = currentTrack.sounds;
        track.timeOfStart = currentTrack.timeOfStart;
        currentTrack = {sounds:[], timeOfStart: Date.now()};
    }
    
}

function deleteTrack(track){
    track.sounds = [];
    track.timeOfStart = 0;
}
