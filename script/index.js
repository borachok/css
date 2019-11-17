// document.getElementById("btnRemove")
//     .addEventListener('click', removeBtn)
//
//
// function removeBtn() {
//     setTimeout(function () {
//         document.getElementById("btnRemove").remove();
//     },800);
// }

document.getElementById('btnRemove')
    .addEventListener('click', getContactBlock);

function getContactBlock() {
    fetch('client-data.html')
        .then(response => response.text())
        .then(html => document.querySelector('.contact-main').innerHTML = html);
}
