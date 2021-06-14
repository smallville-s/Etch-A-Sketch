const grid = document.getElementById("sketch");

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 1; i <= gridSize*gridSize; i++) {
        const div = document.createElement("div");
        div.className = "cell";
        div.addEventListener("mouseover", (e) => {
            div.classList.add("color");
        });
        grid.appendChild(div);
    }
}

createGrid(16);

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.remove("color"));
});

const changeGrid = document.getElementById("changeGrid");
changeGrid.addEventListener("click", setGridSize);

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