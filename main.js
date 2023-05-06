const container=document.createElement('div');
container.classList.add('container');
const numberDivs = 64;
for(let i=0; i<numberDivs;i++) {
    let div = document.createElement("div");
    div.classList.add('squareDiv');
    container.appendChild(div);
}
document.body.appendChild(container);
let divs = document.getElementsByClassName('squareDiv');
for(const div of divs) {
div.addEventListener('mouseover', function clicker(){
    div.classList.add('hoverColor');
});
}
