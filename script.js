const a=document.querySelector('.a')
const b=document.querySelector('.b')
const oper=document.querySelector('.oper')
const res=document.querySelector('.rez')
const btn=document.querySelector('.btn')



btn.addEventListener('click',()=>{
    let num=0
    if(oper.value==='+'){
       num= +a.value + +b.value
        res.innerHTML=`Результат: ${num}`
    }else if(oper.value==='-'){
        num= +a.value - +b.value
        res.innerHTML=`Результат: ${num}`
    }else if(oper.value==='*'){
        num= +a.value * +b.value
        res.innerHTML=`Результат: ${num}`
    }else if(oper.value==='/'){
        num= +a.value / +b.value
        res.innerHTML=`Результат: ${num}`
    }
console.log(+a.value+ +b.value);
}
)
// switch (oper) {
//     case '+':
//         kosh()
        
//         break;

//     default:
//         break;
// }

// function kosh(a,b){
//     let res= +a.value+ +b.value
//     return res
// }
// function kem(a,b){
//     let res= +a.value- +b.value
//     return res
// }function kob(a,b){
//     let res= +a.value* +b.value
//     return res
// }function bol(a,b){
//     let res= +a.value/ +b.value
//     return res
// }