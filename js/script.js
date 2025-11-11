console.log('Lets write JavaScript');

async function getSongs() {
    // Go up one level from /songs/ to access /gaana/
    let a = await fetch("../gaana/");
    let response = await a.text();

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/gaana/")[1]);
        }
    }

    return songs;
}

async function main() {
    let songs = await getSongs();
    console.log("Loaded songs:", songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";

    for (const song of songs) {
        songUL.innerHTML += `<li>${song.replaceAll("%20", " ")}</li>`;
    }

    // Use relative path from /songs/ to /gaana/
    let audio = new Audio(`../gaana/${songs[0]}`);
    audio.play().catch(err => {
        console.error("Playback failed:", err);
    });

    audio.onerror = () => {
        console.error("Audio file could not be loaded:", audio.src);
    };

    audio.addEventListener("loadeddata", () => {
        console.log("Duration:", audio.duration);
    });
}

main();