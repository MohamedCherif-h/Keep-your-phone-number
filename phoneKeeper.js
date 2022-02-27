let nom = document.querySelector("#name") ;
let numero = document.querySelector("#number");
let add = document.querySelector("#add");
let content = document.querySelector(".content");
let change = document.querySelector(".change");
let inpNameC = document.querySelector("#inpNameC");
let inpNumeroC = document.querySelector("#inpNumeroC");
let save = document.querySelector("#save");
//counting the number of phone number
let counter = 0 ;
document.querySelector("#X").innerHTML = `${counter}` ;


// adding new phone number on click
add.onclick = adding;


function adding() {
    if (nom.value === "" || nom.value.length < 4 && numero.value === "" || numero.value.length < 10) {
        alert("Please Enter valid information");
    }

    else {

   
        content.style.display = "flex" ;
        let nomRecuperer = nom.value ;
        let numeroRecuperer = numero.value ;
    
        let content1 = document.createElement("div");
        content1.setAttribute("class" , "content1");
    
        let titre = document.createElement("h2");
        titre.innerHTML = nomRecuperer ;
    
        let numeroT = document.createElement("h3");
        numeroT.innerHTML = numeroRecuperer ;

        let c = document.createElement("div");
        c.setAttribute("class" , "c");
        c.appendChild(titre);
        c.appendChild(numeroT);
    
        let mod = document.createElement("div");
        mod.setAttribute("class" , "mod");

        let del = document.createElement("button");
        del.innerHTML = "Delete";
        del.setAttribute("id" , "del");

        // removing phone number
        del.onclick = ()=>{

            content.removeChild(content1);
            counter-- ;
            document.querySelector("#X").innerHTML = `${counter}` ;
        }

        let edit = document.createElement("button");
        edit.innerHTML = "Edit"
        edit.setAttribute("id" , "ed");

        edit.onclick = ()=>{
            change.style.visibility = "visible";
            inpNameC.value = nomRecuperer;
            inpNumeroC.value = numeroRecuperer;

            let changeNom = inpNameC.value;
            let changeNumero = inpNumeroC.value;

            save.onclick= ()=>{
                nomRecuperer = inpNameC.value;
                numeroRecuperer = inpNumeroC.value ;
                titre.innerHTML = nomRecuperer ;
                numeroT.innerHTML = numeroRecuperer ;
                change.style.visibility = "hidden";
            }
           


        }

        mod.appendChild(del);
        mod.appendChild(edit);


        content1.appendChild(c);
        content1.appendChild(mod);
    
        content.appendChild(content1);
        
        nom.value = "";
        numero.value = ""

        counter++
        document.querySelector("#X").innerHTML = `${counter}` ;
    }


}
