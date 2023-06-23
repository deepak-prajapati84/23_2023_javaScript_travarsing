function view(e){
    console.log("VIew e----->",e.closest('tr').querySelector('td:nth-child(2)').innerHTML);
}

let ement=document.querySelector('.d_view');
ement.addEventListener("click",(e)=>{
    console.log("deepak---------->",e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML);

})