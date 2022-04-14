
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },


]

//Example function
// function findMexicanFood(){
//     let results = dishes.filter(function(el){
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

//     return results;
// }

// let mexicanFood = findMexicanFood();
// console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

// function findItalianFood(){
// let results = dishes.filter(function(el){
//     if(el.cuisine === "Italian"){
//         return true;
//     }
//         else{
//             return false;
//         }})


//     return results;
// }

// let italianFood = findItalianFood();
// console.log('Italian Foods: ', italianFood)

//2. Create a function that will return all dishes with the cuisine type of "Italian"
// and a serving size greater than 5.
//Filter

// function findItalianFood(){
//     let results = dishes.filter(function(el){
//         if(el.cuisine === "Italian", el.servings > 5){
//             return true;
//         }
//         else{
//             return false;
//         }})



//     return results;
// }
// let italianFood = findItalianFood();
// console.log('Italian Foods: ', italianFood)

// Debug tip: Place a Breakpoint on the return AFTER the filter,
//then hover over "results" to see results of filter without having to step 
//through the whole thing!

//3. Create a function that will return only dishes whose 
//serving id number matches their serving count.
//Filter

// function findFood(){
//     let results = dishes.filter(function(el){
//         if(el.id === el.servings){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let Food = findFood();
// console.log(Food)


//comeback
//4. Create a function that will return only dishes whose serving count is even.
//Filter
// function getevennumbers(){
//     let servings = [1,3,5,7,9,11,13,15,17,19,23,29,31];
//     let evenNumbers = servings.filter(function(el){
//         if(el % 2 === 0){
//             return true;

//         }
//         else{
//             return false
//         }
//     })

// }
// getevennumbers(servings);

//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

// function findingredients() {
//     let results = dishes.filter(function (el) {
//         if (el.ingredients.includes('tomato') && el.ingredients.includes('cheese')) {
//             return true;
//         }
//     })


//     return results;
// }

// let ingredientFood = findingredients();
// console.log(ingredientFood)



//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
// BONUS: (come back to this after finishing all)

// function getCuisineTypes() {
//     let results = dishes.map((el) => {
//       return el.cuisine;
//     });
  
//     return results;
//   }
  
  // console.log(getCuisineTypes());

//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

// function getDistinctElements(arr) {
//     let results = arr.filter((el, i) => {
//       return arr.indexOf(el) == i; // If index of current element is the index of the first instance of the element
//     });
  
//     return results;
//   }
  
  // console.log(getDistinctElements(getCuisineTypes()));
  

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map build string and return string

// function getCuisinesAndDishes() {
//     let results = dishes.map((el) => {
//       return `${el.cuisine} ${el.name}`;
//     });
  
//     return results;
//   }
  
  // console.log(getCuisineAndDish());
  

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

// function getVegetarianCuisinesAndDishes() {
//     let cuisinesAndDishes = getCuisinesAndDishes();
//     let result = cuisinesAndDishes.filter((el) => {
//       return el.includes("Vegetarian");
//     });
  
//     return result;
//   }
  
  // console.log(getVegetarianCuisinesAndDishes());


//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

