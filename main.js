

const menuicon = document.querySelector('.menu-icon'); 
const links = document.querySelector('.links'); 

menuicon.addEventListener('click', function(){
    links.classList.toggle('show-links')

    if (links.classList.contains('show-links')) {
        menuicon.innerHTML = '<i class="bx bx-x"></i>'; 
    } else {
        menuicon.innerHTML = '<i class="bx bx-menu"></i>'; 
    }
})


// --------------footer date------------------

const year = document.querySelector('#year').innerHTML = new Date().getFullYear()