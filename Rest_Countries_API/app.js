const loadAllCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => {
        console.log(countries)
        const parentdiv = document.getElementById("countries")
        countries.forEach(country => {
            const newdiv = document.createElement("div")
            newdiv.innerHTML = `
            <div class="card col " style="width: 18rem;">
                <img  src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text">In publishing and graphic design, Lorem ipsum is a placeholder text .</p>
                    <a href="#" class="btn btn-primary" onclick="countryDetails('${country.cca2}')">Country Details</a>
                </div>
            </div>
            `
            newdiv.classList.add("mb-5")
            parentdiv.appendChild(newdiv)
        })
    })
}
loadAllCountry()

const countryDetails = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => {
        console.log(data[0])
        const language_Key = Object.keys(data[0].languages)
   
        const country = data[0]
        document.getElementById("country_name").innerText = `${country.name.common} Details`
        const cardBody = document.getElementById("single_country")
        cardBody.innerHTML = ""
        const newdiv = document.createElement("div")
        newdiv.innerHTML = `
            <h1 class="text-center mb-3">Official Name : ${country.name.official} </h1>
            <div class="row gap-5 mb-5">
                <div class="col">
                    <img style="width: 28rem;"  src="${country.flags.png}" class="" alt="...">
                </div>           
                <div class="col">
                    <img style="width: 18rem;" src="${country.coatOfArms.png}" class="" alt="...">
                </div>           
            </div>
            <hr>

            <div class="row mt-5">
                <div class="col">
                    <p>Continents :  ${country.continents ? country.continents[0] : 'Does not Under any Continents' }</p>
                    <p>Population :  ${country.population}</p>
                    <p>Region :  ${country.region}</p>
                    <p>Timezones :  ${country.timezones[0]}</p>
                </div>
                <div class="col">
                    <p>Capital :  ${country.capital ? country.capital[0] : 'This Country has no Capital'}</p>
                    <p>Languages :  ${language_Key[0] ? country.languages[language_Key[0]] : 'No language'}</p>
                    <p>Subregion :  ${country.subregion}</p>
                </div>
            </div>
            <div>
            
        </div>
        `
        cardBody.appendChild(newdiv)
    })
}