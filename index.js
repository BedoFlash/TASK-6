let products =[
    {Name : "iphone 10", price: 400 , isActive: true},
    {Name : "iphone 11", price: 600 ,isActive: true},
    {Name : "iphone 12", price: 800 , isActive: true},
    {Name : "iphone 13", price: 950 , isActive: true},
    {Name : "iphone 14", price: 1000 , isActive: true},
    {Name : "iphone 15", price: 1100 , isActive: true},
    {Name : "iphone 16", price: 1050 , isActive: true},
    {Name : "SamsingA25", price: 1200 , isActive: true},
    
];

let FatoraContent =[

];

let containerDiv = document.querySelector("#productsContainer");
let tbody =document.querySelector("table tbody");
let span = document.querySelector("table tfoot span");
let nameInput = document.querySelector("#newphone");
let priceInput = document.querySelector("#newprice");


let Showproducts = ()=>{
    containerDiv.innerHTML= "";
 products.forEach((el , index) => {

     containerDiv.innerHTML += `<button class="btn btn-primary " onclick =  "addProductToFatora(${index})">
     ${el.Name} [${el.price}] 
      </button>` ;   
});

};


let showFatoraContent = () =>{
     tbody.innerHTML ="";
    FatoraContent.forEach((el,index)=>{
        tbody.innerHTML +=`
        <tr>
        <td>${index + 1}</td>
        <td>${el.Name}</td>
        <td>${el.price}</td>
        <td> <button onclick="decrementQty(${index})" class="btn btn-primary">-</button>${el.qty} <button onclick = "incrementQty(${index})" class="btn btn-success">+</button></td>
        <td>${el.qty * el.price}</td>
        <td>
        <button onclick="RemoveProduct(${index})">Remove</button>
        </td>
        
        </tr>`
    });
    getTotal();
};

let addProductToFatora =(index) =>{
 let product = products[index];
 product.qty = 1;
 FatoraContent.push(product);
 showFatoraContent();
};



let incrementQty =(index)=>{
    let product = FatoraContent[index]
    product.qty++;
    showFatoraContent();
    
};


let  decrementQty =(index)=>{
 let product = FatoraContent[index]
 if(product.qty >1){

     product.qty--;
 }
 showFatoraContent();

};


let RemoveProduct = (index)=>{
    FatoraContent.splice (index, 1);
    showFatoraContent();
};

let getTotal = ()=>{
    let total = 0;
     FatoraContent.forEach((el , index)=>{
      total = total + el.qty * el.price;

     });
     span.innerHTML = total ;
};


let addPhone =()=>{
let val1 = nameInput.value;
let val2 = priceInput.value;
let obj =  {Name :  val1, price: val2,  };
products.push(obj);
 
Showproducts();
};


Showproducts();
showFatoraContent();
