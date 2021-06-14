const grid = document.getElementById("sketch");

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 1; i <= gridSize*gridSize; i++) {
        const div = document.createElement("div");
        div.className = "cell";
        grid.appendChild(div);
        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = setColor();
        });
    }
}

createGrid(16);

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "";
    });
});

const changeGrid = document.getElementById("changeGrid");
changeGrid.addEventListener("click", setGridSize);

let color = "black";
const randomBtn = document.getElementById("randomColor");
randomBtn.addEventListener("click", () => {
    randomBtn.classList.toggle("pressed");
    if (color == "black") {
        color = "random";
    } else if (color == "random") {
        color = "black";
    }
});

function setGridSize() {
    let newGridSize = prompt("Enter between 1 and 64 squares per side to make the new grid.");
    if (newGridSize == null) {
        return;
    } else if (newGridSize < 1 || newGridSize > 64 
            || !Number.isInteger(parseInt(newGridSize))) {
        setGridSize();    
    } else {
    grid.innerHTML="";
    createGrid(newGridSize);
    }
}

function setColor() {
    return color == "random" ? randomColor() : "black";
}

function randomColor() {
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    return `rgb(${r},${b},${g})`;
}