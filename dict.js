let form=document.querySelector("form");
let ip=document.querySelector("input");
let h=document.querySelector("h1");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    dict()
    ip.value=""
    
})


async function dict(){
    let val=ip.value.trim()
    let API=`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
    if(ip.value===""){
        alert("Empty Text")
    }else{
        let key= await fetch(API);
        let response= await key.json()
        // console.log(response[0].meanings[0].definitions[0].definition );
        h.innerText=response[0].meanings[0].definitions[0].definition
        h.style.color="Green"
        
    }

}