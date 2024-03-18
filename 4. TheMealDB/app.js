// get meals from api call with search value
const loadmeal = (searchvalue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchvalue}`)
    .then(res => res.json())
    .then(meals => displaymeal(meals.meals))
}

// Display all meals in a card depend on search result
const displaymeal = (meals) => {
    const previousdiv = document.getElementById("meal")
    // console.log(previousdiv)
    previousdiv.innerHTML = ""
    meals.forEach(meal => {
        console.log(meal)
        const newdiv = document.createElement("div")
        newdiv.innerHTML = `
        <div class="card col mb-5" >
                <img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    <button class="btn btn-danger" onclick="loadAndDisplayDetails('${meal.idMeal}')">Meal Details</button>
                </div>
            </div>
        `
        previousdiv.appendChild(newdiv)
    })
}

loadmeal("fish")
// Get search value and call loadmeal function
const getsearchvalue = () => {
    const searchvalue = document.getElementById("input_field").value
    loadmeal(searchvalue)
    searchvalue.value = ""
}

// load and display meals details
const loadAndDisplayDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const meal = data.meals[0]
        document.getElementById("mealcontainer").innerHTML = ""
        const previousdiv = document.getElementById("details_body")
        console.log(previousdiv)

        previousdiv.innerHTML = `
            <div>
                <img src="${meal.strMealThumb}" alt="meal img">
            </div>
            <div>
                <h3>Name : ${meal.strMeal}</h3>
            </div>
            <div>
                <p>Instructions : ${meal.strInstructions}</p>
            </div>
        `
     

    })
}
