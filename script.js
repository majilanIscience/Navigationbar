let menu = document.querySelector('nav');
let menubtn = document.querySelector('.menu-btn'); // Added dot for class selector
let closebtn = document.querySelector('.close-btn'); // Added dot for class selector

menubtn.addEventListener('click', function() {
    menu.classList.add('active');
});

closebtn.addEventListener('click', function() {
    menu.classList.remove('active');
});
