
const linkTreeBtn = document.querySelector('#linkTree');
if(linkTreeBtn){
    linkTreeBtn.addEventListener('click', function() {
        navigateTo('https://linktr.ee/KowshikrajK');
    });
}

function navigateTo(page) {
    window.location.href = page;
}