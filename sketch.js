const gridContainer = document.getElementById("grid-container");
const sizeSlider = document.getElementById("slider");
const initSize = sizeSlider.value;

function createNewGrid(size) 
{
    for (let i = 0; i < (size * size); i++)
    {
        const newSquare = document.createElement("div");
        newSquare.classList.add('square');
        newSquare.style.width = (600 / size) + "px";
        newSquare.style.height = (600 / size) + "px";

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
            square.style.backgroundColor = "black";
            // square.classList.add('colored-square');
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

createNewGrid(initSize);

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