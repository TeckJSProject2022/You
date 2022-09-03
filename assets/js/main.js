function _get(name){
    return document.getElementById(name);
}
const sul = _get("sul"); 
const fana = _get("fana");
const lucie = _get("lucie");
const nousra = _get("nousra");
const serge = _get("serge");
const view1 = _get("view_btn1");
const view2 = _get("view_btn2");
const view3 = _get("view_btn3");
const view4 = _get("view_btn4");
const view5 = _get("view_btn5");

view1.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(sul.innerHTML);
})

view2.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(fana.innerHTML);
})

view3.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(lucie.innerHTML);
})

view4.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(nousra.innerHTML);
})

view5.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(serge.innerHTML);

})

