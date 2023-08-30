const sub = document.querySelectorAll('.sub')
const btn = document.querySelector('nav .btn')
const nav_bg = document.querySelector('.nav_bg')
console.log(sub,btn,nav_bg)

function sub_func (status){
    nav_bg.style.display = status
    for(let i of sub){i.style.display = status}
}
sub_func('none')
btn.addEventListener('click',function(){
    for(let i of sub){i.style.display ='block'}
    nav_bg.style.display = 'block'
})
btn.addEventListener('dblclick',function(){
    for(let i of sub){i.style.display ='none'}
    nav_bg.style.display = 'none'
})

const heart = document.querySelectorAll('.info a')
console.log(heart)
for(let i of heart){
    i.addEventListener('click',function(e){
        e.preventDefault()
    })
}