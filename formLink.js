const menuBtn = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navLeft');
const closeBtn = document.querySelector('#close-icon');

if(menuBtn){
    menuBtn.addEventListener('click', function() {
        closeBtn.style.display = 'block';
        menuBtn.style.display = 'none';
        
        if (navbar.style.display === 'flex') {

            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        }
    });
}

if(closeBtn){
    closeBtn.addEventListener('click', function() {
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'block';
        
        if (navbar.style.display === 'flex') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        }
    });
}

const formLinkBtns = document.querySelectorAll('#formLink');

if (formLinkBtns) {
    formLinkBtns.forEach(function (button) {
        button.addEventListener('click', function () {
            window.open('/pages/registraionForm.html', '_blank', 'noopener');
        });
    });
}

const linkTreeBtn = document.querySelector('#linkTree');

if(linkTreeBtn){
    linkTreeBtn.addEventListener('click', function() {
        navigateTo('https://linktr.ee/KowshikrajK');
    });
}

function navigateTo(page) {
    window.location.href = page;
}