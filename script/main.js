const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const btn2= document.querySelector('#btnReturn')

const output = document.createElement('div')
const output2 = document.createElement('div')
const output3 = document.createElement('div')

document.body.append(output)
output.classList.add('output')



// const API = "https://thecocktaildb.com/api/json/v1/1/search.php?f="

const API = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

const value = input.value
const getKoktel = async () => {
	// const value=input.value
	const request = await fetch(API)
	const response = await request.json()
	console.log(response)
	renderKoktel(response.drinks)
	// input.value=''

}
getKoktel();

const renderKoktel = (info) => {
	info.map((el) => {

		const card = document.createElement('span')

		const name = document.createElement('h3')
		name.innerHTML = el.strDrink
		const image = document.createElement('img')
		image.classList.add('.image')
		image.src = el.strDrinkThumb
		const idDrink = document.createElement('h4')

		idDrink.innerHTML = el.idDrink

		card.append(name, image)
		output.append(card)
   image.addEventListener("click", ()=> {
		input.value=el.idDrink;
		getKoktel1()

	value.innerHTML = ''
	output.innerHTML = ''
})
	})

	// card.onclick=function(){
	// value=name;
	// 
	// output.style.cssText=`
	// width: 0px;`

}




//Ингредиенты
const API1 = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
// let url =API1+'filter.php?c=Cocktail'
const getKoktel1 = async () => {
	const value = input.value
	let request1 = await fetch(API1 + value)
	let response1 = await request1.json()
	console.log(response1)
	renderIngr(response1.drinks)
	// input.value=''

}

const renderIngr = (info) => {
	info.map((el) => {
		const card1 = document.createElement('div')
		const card12 = document.createElement('div')
		
		const strImage = document.createElement('img')
		strImage.src = el.strDrinkThumb
		const name1 = "Name: " + document.createElement('h3')
		name1.innerHTML = el.strDrink
		const strAlc = document.createElement('h4')
		strAlc.innerHTML = "Alcohol: " + el.strAlcoholic
		const strCat = document.createElement('h4')
		strCat.innerHTML = "Drink categolie: " + el.strCategory
		const strDescrip = document.createElement('h5')
		strDescrip.innerHTML = "Description: " +  el.strInstructions
		// const strIngr = document.createElement('h4')
		// strIngr.innerHTML = el.strInstructionsDE
		const strIngr1 = document.createElement('h5')
		strIngr1.innerHTML = "-" + el.strIngredient1
		const strIngr2 = document.createElement('h5')
		strIngr2.innerHTML = "-" + el.strIngredient2
		const strIngr3 = document.createElement('h5')
		strIngr3.innerHTML = "-" + el.strIngredient3
		const strIngr4 = document.createElement('h5')
		strIngr4.innerHTML = "-" + el.strIngredient4
		
		
		card1.append(name1, strAlc, strCat, strDescrip, strIngr1, strIngr2, strIngr3, strIngr4,  )
		
		
		card12.append(strImage)
		output2.append(card12, card1)
		output2.style.cssText=`
		display:flex;
		`
		card12.style.cssText=`
		margin-right:30px;`
		document.body.append(output2)
		
		strIngr1.addEventListener("click", ()=> {
		input.value=el.strIngredient1;
		getKoktel2()
    value.innerHTML = ''
	  output2.innerHTML = ''
		})
		strIngr2.addEventListener("click", ()=> {
		input.value=el.strIngredient2;
		getKoktel2()
    value.innerHTML = ''
	  output2.innerHTML = ''
		})
		strIngr3.addEventListener("click", ()=> {
		input.value=el.strIngredient3;
		getKoktel2()
    value.innerHTML = ''
	  output2.innerHTML = ''
		})
		strIngr4.addEventListener("click", ()=> {
		input.value=el.strIngredient4;
		getKoktel2()
    value.innerHTML = ''
	  output2.innerHTML = ''
		})


} )}
btn.addEventListener("click", () => {
	getKoktel1()

	input.value.innerHTML = ''
	output.innerHTML = ''

})
btn2.addEventListener("click", () => {
	getKoktel()

	input.value.innerHTML = ''
	output2.innerHTML = ''
	output3.innerHTML = ''

})


// Поиск ингредиента

const API2="https://www.thecocktaildb.com/api/json/v1/1/search.php?i="
const getKoktel2 = async () => {
	const value = input.value
	let request2 = await fetch(API2 + value)
	let response2 = await request2.json()
	console.log(response2)
	renderLime(response2.ingredients)
	input.value=''

}

const renderLime =(el)=>{
	el.map((el)=>{


const strIngredient = document.createElement('h4')
		strIngredient.innerHTML = "Ingredient name:  " + el.strIngredient

		const strType = document.createElement('h4')
		strType.innerHTML = "Ingredient type: " + el.strType

		const strAlcohol = document.createElement('h4')
		strAlcohol.innerHTML = "Alcohol: " + el.strAlcohol

		const strDescription = document.createElement('h4')
		strDescription.innerHTML = "Decription:  " + el.strDescription

		output3.append(strIngredient, strType, strAlcohol, strDescription)
		document.body.append(output3)
	})
}

