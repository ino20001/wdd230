const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  
  function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let info = document.createElement("p");

    
  
    h2.textContent = prophet.name + ' ' + prophet.lastname;
  

    info.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace} `
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');
  

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(info);
    cards.appendChild(card);
  }
  