document.getElementById('contactUs')
    .addEventListener('click', getContactBlock);

function getContactBlock() {
    fetch('client-data.html')
        .then(response => response.text())
        .then(html => document.querySelector('.contact-main').innerHTML = html);
}
