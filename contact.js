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

const linkTreeBtn = document.querySelector('#linkTree');
if(linkTreeBtn){
    linkTreeBtn.addEventListener('click', function() {
        navigateTo('https://linktr.ee/KowshikrajK');
    });
}

const whatsappBtnSasi = document.querySelector('.whatsappSasi');
if(whatsappBtnSasi){
    whatsappBtnSasi.addEventListener('click', function() {
        navigateTo('https://wa.me/+919976949310');
    });
}

const whatsappBtnChandru = document.querySelector('.whatsappChandru');
if(whatsappBtnChandru){
    whatsappBtnChandru.addEventListener('click', function() {
        navigateTo('https://wa.me/+919791889331');
    });
}

function navigateTo(page) {
    window.location.href = page;
}