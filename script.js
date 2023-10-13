const body = document.getElementsByTagName('body')[0];

// // display = "flex"
// // flexWrap = "wrap"
// // width = "800px"
// // height = "800px"

createContainer();

function createContainer() {
    let container = document.createElement('div');
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "800px";
    container.style.height = "800px";
    body.appendChild(container);
    
    for (let i = 0; i < 8; i++) {
        if(i % 2 === 0) {
        checker1(container);
        } else { 
        checker2(container);
        }
    }
    
}

// width = "12.5%"
// height = "12.5%"

function makeSquare() {
    let square = document.createElement('div');
    square.style.width = "12.5%";
    square.style.height = "12.5%";
    return square;
}
function checker1(container) {
    for (let i = 0; i < 8; i++) {
        let squares = makeSquare()
        if (i % 2 === 0) {
            squares.style.backgroundColor = 'red';
            container.appendChild(squares);
        } else if (i % 2 !== 0) {
            squares.style.backgroundColor = 'black';
            container.appendChild(squares);
        }
    }
}

function checker2(container) {
    for (let i = 0; i < 8; i++) {
        let squares = makeSquare()
        if (i % 2 === 0) {
            squares.style.backgroundColor = 'black';
            container.appendChild(squares);
        } else if (i % 2 !== 0) {
            squares.style.backgroundColor = 'red';
            container.appendChild(squares);
        }
    }
}

// createRanContainer();

// function createRanContainer() {
//     let ranContainer = document.createElement('div');
//     ranContainer.tagName = 'randomColors'
//     ranContainer.style.display = "flex";
//     ranContainer.style.flexWrap = "wrap";
//     ranContainer.style.width = "800px";
//     ranContainer.style.height = "800px";
//     body.appendChild(ranContainer);
    
//     for (let i = 0; i < 64; i++) {
//         let randomColor = Math.floor(Math.random()*16777215).toString(16);
//         console.log(randomColor);
//         let ranSquare = makeSquare();
//         ranSquare.style.backgroundColor = `#${randomColor}`;
//         ranContainer.appendChild(ranSquare); 
//     }
    
// }


