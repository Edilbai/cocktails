// const API1='https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

// const getKoktel1 =async()=>{
// 	const value1=input.value
// 	const request1= await fetch(API1+ value1)
// 	const response1 = await request1.json()
// 	console.log(response1)
// 	renderIngr(response1.ingredients)
// 	// input.value=''

// }
// const renderIngr=(info)=>{
// 	info.map((el)=>{
// const card1=document.createElement('div')
// const name1=document.createElement('h3')
// name1.innerHTML=el.strType
// const strAlc=document.createElement('h4')
// strAlc.innerHTML=el.strAlcohol
// const strDescrip =document.createElement('h5')
// strDescrip.innerHTML=el.strDescription
// const strIngr=document.createElement('h4')
// strIngr.innerHTML=el.strIngredient
// const strABV=document.createElement('h5')
// strABV.innerHTML=el.strABV
// card1.append(name1, strAlc,strDescrip, strIngr, strABV )
// 	})
	

// }
// getKoktel1();

// card.onclick = function(){
// 	getKoktel1();
//   document.body.append(card1)
// }