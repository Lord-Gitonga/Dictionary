const dictionaryUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result')
//const sound = document.getElementById('sound')
const btn = document.getElementById('search-btn')

btn.addEventListener('click', ()=>{
    let inputWord = document.getElementById('input-word').value;
     fetch(`${dictionaryUrl}${inputWord}`)
     .then(resp=>resp.json())
     
     .then(data=>{
        //console.log(data)
         result.innerHTML = `
         <div class="word">
                <h3>${inputWord}</h3>
                
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetics[1].text}/</p>
            </div>
            <p class="word-meaning">
             ${data[0].meanings[0].definitions[0].definition}
            <p class="word-example">
            ${data[0].meanings[0].synonyms}
            </p>
         `; 
         //sound.setAttribute("src", `https:${data[0].phonetics[1].audio}`);
         //console.log(sound);
     })

     .catch(()=>{
        result.innerHTML = `<h3 class="error">Couldn\'t Find The word</h3>`
     });
})

// function playSound(){
//     sound.play();
// }

