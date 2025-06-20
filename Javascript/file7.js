// callback functions
const f1 = ()=>{
    console.log("hello");
}
const main = (x)=>{
    x()
}
main(f1)