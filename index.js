console.log("script on the way")
document.querySelector('.cross').style.display ='none';  //dont show us cross at starting
document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    // remove sidebar and insert sidebar

    // if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
    // {
    //     document.querySelector('.ham').style.display ='inline'
    //     document.querySelector('.cross').style.display ='none'
        
    // }
    // else{
    //     document.querySelector('.ham').style.display ='none'
    //     setTimeout(() => {
    //         document.querySelector('.cross').style.display ='inline'
 
    //     }, 250);
    // }

})