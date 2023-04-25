// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const div = document.querySelector(".teste");
for (let i = 1; i < 1009; i++) {
    const poke = document.createElement('div');
    poke.classList.add('pokemon')
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    poke.appendChild(img);
    poke.appendChild(label)
    div.appendChild(poke);
    
}