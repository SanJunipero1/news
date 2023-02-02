const menu = document.querySelector('.menu')
const close = document.querySelector('.close')

menu.addEventListener('click',()=>{
    document.getElementById('categorie').style.display='block'
})


close.addEventListener('click',()=>{
    document.getElementById('categorie').style.display='none'
})