const board = document.querySelector('#board');
const colors = ['#c53f3f' ,'#c5a53f', '#3fc59d', '#3f71c5', '#703fc5','#e91e63' , '#795548', '#009688'];
const SQUARES_NUMBER = 450;

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => {
        setColor(square);

    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);

    });

    board.append(square);
}

function setColor(element){
    const color = getRandomColor ();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = 'black';
    element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor (){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}