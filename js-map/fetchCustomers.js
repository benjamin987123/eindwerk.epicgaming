document.addEventListener("DOMContentLoaded", function () {
    const klantenContainer = document.getElementById("klantenContainer");
 
    // Aantal klanten dat je wilt tonen
    const aantalKlanten = 10;
 
    // API voor Random User Generator
    const apiUrl = `https://randomuser.me/api/?results=${aantalKlanten}`;
 
    // Gegevens ophalen en verwerken
    fetch(apiUrl)
       .then(response => response.json())
       .then(data => {
          const klanten = data.results;
          klanten.forEach(klant => {
             toonKlant(klant);
          });
       })
       .catch(error => console.error("Fout bij het ophalen van klantengegevens", error));
 
    // Functie om een klant weer te geven in de flex-container
    function toonKlant(klant) {
       const customerCard = document.createElement("div");
       customerCard.classList.add("customer-card");
 
       const img = document.createElement("img");
       img.classList.add("customer-img");
       img.src = klant.picture.large;
       img.alt = `${klant.name.first} ${klant.name.last}`;
 
       const title = document.createElement("p");
       title.textContent = klant.name.title;
 
       const firstName = document.createElement("p");
       firstName.textContent = klant.name.first;
 
       const lastName = document.createElement("p");
       lastName.textContent = klant.name.last;
 
       const country = document.createElement("p");
       country.textContent = klant.location.country;
 
       customerCard.appendChild(img);
       customerCard.appendChild(title);
       customerCard.appendChild(firstName);
       customerCard.appendChild(lastName);
       customerCard.appendChild(country);
 
       klantenContainer.appendChild(customerCard);
    }
 });
 