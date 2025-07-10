const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.height = "50px";
    square.style.width = "50px";

    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });

    container.appendChild(square);
}
const changeSize = document.querySelector(".change-size");
changeSize.addEventListener("click", () => {
    let numSquares = parseInt(prompt("How many squares per side?"));
    if (numSquares <= 100 && numSquares > 0) {
          const squares = document.querySelectorAll(".square");
          squares.forEach(square => square.remove());
          let squareSize = 800 / numSquares;
          for (let i = 0; i < numSquares * numSquares; i++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";

            square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
          });

            container.appendChild(square);
    }
    } else {
        alert("invalid value!");
    }
    
})
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    const squareAll = document.querySelectorAll(".square");
    squareAll.forEach(currentSquare => currentSquare.style.backgroundColor = "aquamarine"); 
});

