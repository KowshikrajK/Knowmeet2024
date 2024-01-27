const technicalBtn = document.querySelector('#technicalBtn');

if(technicalBtn){
    technicalBtn.addEventListener('click', function() {
        navigateTo('/pages/technicalEvents.html');
    });
}

const nontechnicalBtn = document.querySelector('#nontechnicalBtn');

if(nontechnicalBtn){
    nontechnicalBtn.addEventListener('click', function() {
        navigateTo('/pages/non-TechnicalEvents.html');
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

function navigateTo(page) {
    window.location.href = page;
}