const grid = document.getElementById("sketch");

for (let i = 1; i <= 16*16; i++) {
    const div = document.createElement("div");
    div.className = "cell";
    grid.appendChild(div);
}

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("mouseover", (e) => {
        cell.classList.add("color");
    });
})

const button = document.querySelector("button");
button.addEventListener("click", () => {
    cells.forEach(cell => cell.classList.remove("color"));
});
