const pages=[
    {
        page:"Home",
        navigate: homePage
    },
    {
        page:"About",
        navigate: about
    },
    {
        page:"Interact",
        navigate: interact
    }
]
let counting = 0

function navButt(pg,pr, nv){
    let button = document.createElement("button")
    button.innerHTML=pg;
    button.addEventListener("click", function (){
        document.body.querySelector(".wrapper").innerHTML=""
         nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav= document.createElement("nav")
    let wrapper= document.createElement("div")
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="red";
   for (obj of pages){
       navButt(obj.page, nav, obj.navigate)
   }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper)
}

function homePage(){
    let home= document.createElement("div")
    home.innerHTML="Home"
    document.body.querySelector(".wrapper").appendChild(home);
}

function about(){
    let about= document.createElement("h1")
    let aboutName = document.createElement("h3")
    about.innerHTML="About"
    aboutName.innerHTML="Tanner Pease"
    document.body.querySelector(".wrapper").appendChild(about);
    document.body.querySelector(".wrapper").appendChild(aboutName);
}

function interact(){
    let interact= document.createElement("div")
    interact.innerHTML="Interact"
    document.body.querySelector(".wrapper").appendChild(interact);
    let countButt = document.createElement("button")
    countButt.innerHTML="Increase Counter " + counting
    document.body.querySelector(".wrapper").appendChild(countButt)
    countButt.addEventListener("click", function (){
    counting=counting+1
        countButt.innerHTML="Increase Counter " + counting

    })
}

navigation();
homePage();
