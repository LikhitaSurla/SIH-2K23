const tostart =document.getElementById('tostart');
tostart.addEventListener('click',function(){

    console.log("buttonclicked");
    const loginpage='../pages/login.html';
    
    window.location.href=loginpage;
});