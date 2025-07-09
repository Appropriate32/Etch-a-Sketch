const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.height = "50px";
    square.style.width = "50px";

    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    })
    square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "aquamarine";
    })

    container.appendChild(square);
}
let oldSquareCount = 256;
const button = document.querySelector("button");
button.addEventListener("click", () => {
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
            square.addEventListener("mouseleave",() => {
            square.style.backgroundColor = "aquamarine";
          });

            container.appendChild(square);
    }
    } else {
        alert("invalid value!");
    }
    
})


