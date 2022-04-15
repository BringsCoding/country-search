let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-input");

let population = document.getElementById("population");
let capital = document.getElementById("capital");
let flag = document.getElementById("image");
let ctyName = document.getElementById("name");
let nativeName = document.getElementById("nativeName");
let region = document.getElementById("region");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finaleURL = `https://restcountries.com/v2/name/${countryName}?fullText=true
  `;
  console.log(finaleURL);

  fetch(finaleURL).then((response) =>
    response
      .json()
      .then((data) => {
        console.log(data);
        population.innerText = data[0].population.toLocaleString("de-DE");
        capital.innerText = data[0].capital;
        flag.src = data[0].flags.svg;
        flag.style.height = "150px";
        ctyName.innerText = data[0].name;
        nativeName.innerText = data[0].nativeName;
        region.innerText = data[0].region;
      })
      .catch(() => {
        if (countryName.length === 0) {
        } else {
          alert("This country not exist");
        }
      })
  );
});
