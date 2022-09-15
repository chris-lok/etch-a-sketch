const gridContainer = document.getElementById("grid-container");
const sizeSlider = document.getElementById("slider");
const initSize = sizeSlider.value;
const eraserButton = document.getElementById("eraser");
const blackButton = document.getElementById("black");
const colorButton = document.getElementById("color");
const resetButton = document.getElementById("reset");
let colorMode = 0;

function createNewGrid(size) 
{
    for (let i = 0; i < (size * size); i++)
    {
        const newSquare = document.createElement("div");
        newSquare.classList.add('square');
        newSquare.style.width = (550 / size) + "px";
        newSquare.style.height = (550 / size) + "px";

        gridContainer.appendChild(newSquare);
    }
    addGridEventListeners();
}

function addGridEventListeners()
{
    //add event listeners
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (colorMode == 1)
            {
                square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
            else if (colorMode == 0)
            {
                square.style.backgroundColor = "black";
            }
            else if (colorMode == 2)
            {
                square.style.backgroundColor = "white";
            }
        });
    });
}

function removeGrid()
{
    while (gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

//update size counter text smoothly
sizeSlider.addEventListener("input", () => {
    const sizeText = document.getElementById("size-text");
    sizeText.textContent = sizeSlider.value + " x " + sizeSlider.value;
});

//only make new grid once a value has been chosen
sizeSlider.addEventListener("change", () => {
    removeGrid();
    createNewGrid(sizeSlider.value);
});

eraserButton.addEventListener("click", () => {
    colorMode = 2;
});

blackButton.addEventListener("click", () => {
    colorMode = 0;
});

colorButton.addEventListener("click", () => {
    colorMode = 1;
});

resetButton.addEventListener("click", () => {
    removeGrid();
    createNewGrid(sizeSlider.value);
});

createNewGrid(initSize);

