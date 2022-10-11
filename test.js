let btnBox = document.getElementById('btnBox');

let btnBoxWidth = btnBox.offsetWidth - 50; //50 = padding X

console.log(btnBoxWidth);

let btnBoxLink = document.querySelector('#btnBox > a');

console.log(btnBoxLink);

if (btnBoxWidth < 50) {
    btnBoxLink.textContent = 'lol';
}
