// Get serach value
const getSearchFieldValue = () => {
    const phone = document.getElementById("input_field").value
    console.log(phone)
    // loading start
    loadloder(true)
    loadphoneHuntingAPI(phone)

}
// Search input field enter key handler
document.getElementById("input_field").addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        const phone = document.getElementById("input_field").value
        loadphoneHuntingAPI(phone)
    }
})
// Load phone hunting api
const loadphoneHuntingAPI = async(phone) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${phone}`
    console.log(URL)
    const res = await fetch(URL)
    const data = await res.json()
    displayPhone(data.data)
    // console.log(data.data)
    // fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    // .then(res => res.json())
    // .then(data => displayPhone(data.data))
}
// Display dinamically phone and phone details
const displayPhone = (phones) => {
    // console.log(phones)
    const previousdiv = document.getElementById("phone_container")
    previousdiv.innerHTML = ''
    const display = document.getElementById("display_found_or_not")
    if(phones.length){
        display.classList.add("d-none")

        // Display product function
        const displayProduct = (phones) =>{
            phones.forEach(phone => {
                const newdiv = document.createElement("div")
                newdiv.classList.add("col")
                newdiv.innerHTML = `
                <div class="card">
                    <img style="width:50%; margin:auto; padding: 10px" src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Brand - ${phone.brand}</h5>
                        <p class="card-text">Phone Name - ${phone.phone_name}</p>
                        <button class="btn btn-success" onclick=loadSingle_phone('${phone.slug}') data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
                    </div>
             
                </div>
                `
                previousdiv.appendChild(newdiv)
            })
        }

        // check product less then or greater then 10.
        const showMore_Button = document.getElementById("show_more")
        if(phones.length > 10){
            const slicePhone =  phones.slice(0, 10)
            displayProduct(slicePhone)
            showMore_Button.classList.remove("d-none")
            // when click show more button show all product
            document.getElementById("show").addEventListener('click', () => {
                previousdiv.innerHTML = ''
                displayProduct(phones)
                showMore_Button.classList.add("d-none")
            })
            
        }
        else{
            displayProduct(phones)
            showMore_Button.classList.add("d-none")
        }
        // loding stop
        loadloder(false)
    }
    else{
        display.classList.remove("d-none")
        const search_value = document.getElementById("input_field").value
        document.getElementById("search_result").innerText = search_value
        // loding stop
        loadloder(false)
    }

}
loadphoneHuntingAPI('phone')


// loder functon
const loadloder = (isloading) => {
    const loder = document.getElementById("loder")
    if(isloading){
        loder.classList.remove("d-none")
    }
    else{
        loder.classList.add("d-none")
    }
}


// load and display every single phone
const loadSingle_phone = async (id) => {
    const URL = `https://openapi.programming-hero.com/api/phone/${id}`
    const res =  await fetch(URL)
    const data = await res.json()
    // console.log(data.data)
    display_single_phone(data.data)
}
const display_single_phone = (phone) => {
    // console.log(phone)
    document.getElementById("phoneDetailsModalLabel").innerText = phone.name
    const parentdiv = document.getElementById("modal_body")
    parentdiv.innerHTML = `
    <img src="${phone.image}" alt="">
    <div>
      <h3>Brand : ${phone.brand} || Name : ${phone.name}</h3>
      <p>Display size : ${phone.mainFeatures.displaySize}</p>
      <p>Memory : ${phone.mainFeatures.memory}</p>
      <p>ChipSet : ${phone.mainFeatures.chipSet}</p>
      <p>Storage : ${phone.mainFeatures.storage}</p>
      <p>Release Date : ${phone.releaseDate ? phone.releaseDate : 'No release Date found'}</p>
    </div>
    `
}