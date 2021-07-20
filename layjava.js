window.addEventListener("resize", function(event) {
    if (window.innerWidth < 600) {
        let headName=document.getElementById('name');
        let headContainer=document.getElementById('header');
        headName.style.color="orange";
        headName.style.fontSize='100%';
        headContainer.style.gridTemplateRows='20px 50px auto';
        document.getElementById('photo').style.height='100%';
        document.getElementById('photo').style.width='35%';
        document.getElementById('contact').style.fontSize='50%';
       document.getElementById('main').style.fontSize='70%';
}
    else {
        let headName=document.getElementById('name');
        let headContainer=document.getElementById('header');
        headName.style.color="white";
        headName.style.fontSize='200%';
        headContainer.style.gridTemplateRows='1fr 1fr auto';
        document.getElementById('photo').style.height='100%';
        document.getElementById('photo').style.width='100%';
        document.getElementById('contact').style.fontSize='80%';
        document.getElementById('main').style.fontSize='100%';

         }
});
if (window.innerWidth < 600) {
        let headName=document.getElementById('name');
        let headContainer=document.getElementById('header');
        headName.style.color="orange";
        headName.style.fontSize='100%';
        headContainer.style.gridTemplateRows='20px 50px auto';
        document.getElementById('photo').style.height='100%';
        document.getElementById('photo').style.width='35%';
        document.getElementById('contact').style.fontSize='50%';
       document.getElementById('main').style.fontSize='70%';
}
    else {
        let headName=document.getElementById('name');
        let headContainer=document.getElementById('header');
        headName.style.color="white";
        headName.style.fontSize='200%';
        headContainer.style.gridTemplateRows='1fr 1fr auto';
        document.getElementById('photo').style.height='100%';
        document.getElementById('photo').style.width='100%';
        document.getElementById('contact').style.fontSize='80%';
        document.getElementById('main').style.fontSize='100%';

         }