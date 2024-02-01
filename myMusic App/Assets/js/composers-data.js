let MusicData = {
  "SamuelBarber": [
    {
      "img": "./Images/Composers/SamuelBarber.png",
      "composerName": "Samuel Barber",
      "composerYear": "1910 - 1981",
      "musicName": "Adagio for Strings",
      "musicYear": "1936",
      "descriptionText": "Adagio for Strings creates an uneasy, shifting suspension as the melody begins a stepwise motion, like the hesitant climbing of stairs.",
      "chordText": "features a poignant arrangement for first violins, second violins, violas, cellos, and double basses.",
      "compositions": "features a poignant arrangement for first violins, second violins, violas, cellos, and double basses.",
      "playMusicName": "Adagio for Strings",
      "playMusicComposer": "Samuel Barber",
      "songs": "./Songs/Samuel Barber/x2mate.com - Samuel Barber - Adagio for Strings (320 kbps).mp3",
    }
  ],
};

const composerDataElem = document.querySelector(".composerData");

for (let i = 0; i < MusicData["SamuelBarber"].length; i++) {
  // console.log(MusicData["SamuelBarber"][i].fullName);
  composerDataElem.innerHTML += `
  <div class="composerData">

  <div class="sectionClass1">
    <img class="composerImg" src="${MusicData["SamuelBarber"][i].img}" alt="Samuel Barber" />

    <div class="div-NameYear">
      <h1 class="composerName">${MusicData["SamuelBarber"][i].composerName}</h1>
      <p class="composerYear">${MusicData["SamuelBarber"][i].composerYear}</p>
    </div>
  </div>
  

  
  <div class="sectionClass2">
  <div class="div-NameYearResponsive">
  <h1 class="composerName">${MusicData["SamuelBarber"][i].composerName}</h1>
  <p class="composerYear">${MusicData["SamuelBarber"][i].composerYear}</p>
</div>
    <div class="div-MusicInfo">
      <p class="musicName">${MusicData["SamuelBarber"][i].musicName}</p>
      <p class="musicYear">${MusicData["SamuelBarber"][i].musicYear}</p>
    </div>

    <div class="div-DescriptionInfo">
      <p class="descriptionTitle">Description</p>
      <p class="descriptionText">
      ${MusicData["SamuelBarber"][i].descriptionText}
      </p>
    </div>

    <div class="div-chordInfo">
      <p class="chordTitle">Chord</p>
      <p class="chordText">
      ${MusicData["SamuelBarber"][i].chordText}
      </p>
    </div>
  </div>
  

  
  <div class="sectionClass3">
    <div class="div-CompositionsInfo">
      <p class="compositionsTitle">Compositions</p>
      <ul class="compositionsList">
        <li>Adagio for Strings</li>
        <li>Agnus Dei</li>
        <li>Vanessa</li>
        <li>Sure on this shining night</li>
        <li>Violin Concerto</li>
        <li>Adagio</li>
        <li>Hermit Songs</li>
        <li>Knoxville: Summer of 1915</li>
        <li>Excursions</li>
        <li>A Hand of Bridge</li>
        <li>Piano Sonata</li>
        <li>Capricorn Concerto</li>
        <li>Antony and Cleopatra</li>
        <li>Cello Concerto</li>
        <li>Summer Music</li>
        <li>Symphony in One Movement</li>
        <li>Easter Chorale</li>
        <li>The School for Scandal</li>
        <li>A Slumber Song of the Madonna</li>
        <li>Commando March</li>
        <li>Medea</li>
        <li>Excursions, op. 20</li>
        <li>Canzone</li>
        <li>Medea's Dance of Vengeance</li>
        <li>Second Essay for Orchestra</li>
        <li>Symphony No. 2</li>
        <li>Third Essay for Orchestra</li>
        <li>Prayers of Kierkegaard</li>
        <li>Au clair de la lune</li>
        <li>Summer Music, op. 31: IV. With motion, as before</li>
        <li>Three Sketches: III. Minuet: Tempo di minuetto</li>
        <li>2 Pieces, op. 42, no. 1: Twelfth Night</li>
        <li>La nuit</li>
        <li>The Lovers, op. 43: III. In the Hot Depth of This Summer</li>
        <li>Three Songs (The Words from Old England): II. An Earnest Suite to His Unkind Mistress Not to Forsake Him</li>
        <li>Souvenirs, op. 28: IV. Two-step</li>
        <li>2 Choruses, op. 8: no. 1. The Virgin Martyrs</li>
        <li>Mélodies passagères, op. 27: No. 3. Tombeau dans un parc</li>
        <li>Souvenirs, op. 28: I. Waltz</li>
        <li>Vanessa, op. 32: Act I. Must the winter come so soon?</li>
        <li>Summer Music, op. 31: I. Slow and indolent</li>
        <li>Capricorn Concerto, op. 21: II. Allegretto</li>
        <li>Vanessa, op. 32: Act II. Under the Willow Tree</li>
        <li>A Nun Takes the Veil, op. 13 no. 1</li>
        <li>Medea Ballet Suite, op. 23: VI. Kantikos Agonias</li>
        <li>Despite and Still, op. 41: No. 2. My Lizard</li>
        <li>Fresh from West Chester</li>
        <li>Souvenirs, op. 28: III. Pas de deux</li>
        <li>Reincarnations: I. Mary Hynes</li>
        <li>Three Songs (The Words from Old England): III. Hey Nonny No!</li>
        <li>Sonata, Op. 26: I. Allegro energico</li>
        </ul>
      </div>
  </div>
  

  
  <div class="sectionClass4">
    <div class="Class4Item">
      <!-- <img class="loopIcon" src="./Icons/loop.svg" alt="Loop"> -->
      <div class="div-PlayInfo">
        <p class="playMusicName">${MusicData["SamuelBarber"][i].playMusicName}</p>
        <p class="playMusicComposer">${MusicData["SamuelBarber"][i].playMusicComposer}</p>
      </div>
      <div class="div-PlayBarInfo">
        <div class="div-TimePlay">
          <p>0:00</p>
          <P>8:00</P>
        </div>
        <div class="div-MusicBar">
          <p class="musicBar"></p>
        </div>
        <div class="div-PlayButtons">
          <img class="rewindIcon" id="rewind" src="./Icons/rewind.svg" alt="Rewind">
          <img class="playIcon" id="play" src="./Icons/play.svg" alt="Play">
          <img class="forwardIcon" id="forward" src="./Icons/forward.svg" alt="Forward">
        </div>
      </div>
    </div>
  </div>

</div>

  `
}




















// composerData.map((item,index,id)=>{
// if(item.id===1){
//   document.getElementById('name').innerHTML= `<h1 class="composerName">${item.name}</h1>`
// document.getElementById('date').innerHTML= `<p class="composerYear" id="date">${item.composerDate}</p>`
// }
// else if(item.id===2){
//   document.getElementById('name').innerHTML= `<h1 class="composerName">${item.name}</h1>`
// document.getElementById('date1').innerHTML= `<p class="composerYear" id="date">${item.composerDate}</p>`
// }
// })