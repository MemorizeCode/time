let time = document.getElementById('time')
setInterval( ()=> {
let date = new Date()
let h =  date.getHours()
let m =  date.getMinutes()
let s =  date.getSeconds()
if (h<10){
    h = '0' + h
}
if (s<10){
    s = '0' + s
}
if (m<10){
    m = '0' + m
}
    time.textContent = h + ' : ' + m + ' : ' + s
},900)


function pro(){
    if ( window.innerWidth <=900){
        let  pr = confirm('Сайт не адаптирован под мобилу,уверены что хотите продолжить?')
        if (pr){
            alert('Дорбро пожаловать,да дизайн говно')
        }else{
            window.open('www.youtube.com')
        }
    }
}
pro()

//privet))