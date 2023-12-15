const navbarChild1 = document.getElementById('navbarChild1');
const navbarChild2 = document.getElementById('navbarChild2');
const navbarParent1 = document.getElementById('navbarParent1');
const navbarParent2 = document.getElementById('navbarParent2');


navbarParent1.addEventListener('mouseenter', ()=>{
    navbarChild1.style.display= 'block';
});
navbarParent1.addEventListener('mouseleave', ()=>{
    navbarChild1.style.display= 'none';
});
navbarParent2.addEventListener('mouseenter', ()=>{
    navbarChild2.style.display= 'block';
});
navbarParent2.addEventListener('mouseleave', ()=>{
    navbarChild2.style.display= 'none';
});

    

