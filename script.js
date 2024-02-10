function addNewWEField() {


    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control'); 
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','Enter here');

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton"); // Fix typo in 'getElementsById' to 'getElementById'

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control'); 
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','Enter here');

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton"); 
    aqOb.insertBefore(newNode, aqAddButtonOb)

}


//copy input info then displaying at different in diff page

function generateCV(){
    let namefield=document.getElementById("namefield").value;//taking input
    let nameT1=document.getElementById("nameT1");//put input here for name
     
    //name field connected 
    nameT1.innerHTML=namefield;
    document.getElementById("nameT2").innerHTML=namefield;


    //contacts
    document.getElementById("contactT").innerHTML= document.getElementById("contactfield").value;
    //adress
    document.getElementById("adressT").innerHTML=document.getElementById("Adressfield").value;
    //links
    document.getElementById("instaT").innerHTML=document.getElementById("Instfield").value;
    document.getElementById("gitT").innerHTML=document.getElementById("Gitfield").value;
    document.getElementById("fbT").innerHTML=document.getElementById("Fbfield").value;
    document.getElementById("linkT").innerHTML=document.getElementById("Linkdfield").value;

    //objective 
    document.getElementById("ObjectiveT").innerHTML=document.getElementById("Objectivefield").value;

    //work exxppprpr//


    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //academic qualification 
    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    

    //it hide first then after generating it show everyhting 
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";//displaying template

}
function printCV(){
    window.print();
}
