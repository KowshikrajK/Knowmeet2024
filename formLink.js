const formLinkBtns = document.querySelectorAll('#formLink');

if (formLinkBtns) {
    formLinkBtns.forEach(function (button) {
        button.addEventListener('click', function () {
            window.open('https://fonts.google.com/', '_blank', 'noopener');
            // form Link
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