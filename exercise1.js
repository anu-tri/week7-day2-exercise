/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function listOfFoods(inputFoods){
    console.log("\nFavorite Food Dishes:")
    for (food of Object.values(inputFoods)){
        if(Array.isArray(food)) {
            if(typeof food[0] == "string"){
                console.log(food.join(", "))
            }
            else if(typeof food[0] == "object"){
                console.log(Object.values(food[0]).join(", "))
            }
        }
        else if(typeof food == "object"){
            console.log(Object.values(food).join(", "))
        }
        else if(typeof food == "string"){
            console.log(food)
        }
        
    }

}

listOfFoods(person3)

