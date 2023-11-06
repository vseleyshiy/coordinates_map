let square = document.getElementById('square');
let resultButton = document.getElementById('resultButton');
let xMap = document.getElementById('X');
let yMap = document.getElementById('Y');
let btnTop = document.getElementById('btnTop');
let btnBottom = document.getElementById('btnBottom');
let btnTop2 = document.getElementById('btnTop2');
let btnBottom2 = document.getElementById('btnBottom2');
let error = document.getElementById('error');

btnTop.addEventListener('click', () => {
    let num = Number(xMap.value);
    num += 20;
    xMap.value = num;
    if (num > 200) {
        error.style.opacity = '1';
    }
})

btnBottom.addEventListener('click', () => {
    let num = Number(xMap.value);
    num -= 20;
    xMap.value = num;
    if (num < 200) {
        error.style.opacity = '0';
    };
})

btnTop2.addEventListener('click', () => {
    let num = Number(yMap.value);
    num += 20;
    yMap.value = num;
    if (num > 200) {
        error.style.opacity = '1';
    }
})

btnBottom2.addEventListener('click', () => {
    let num = Number(yMap.value);
    num -= 20;
    yMap.value = num;
    if (num < 200) {
        error.style.opacity = '0';
    };
})

resultButton.addEventListener('click', () => {
    numX = xMap.value;
    numY = yMap.value;
    numX = numX + 'px';
    numY = numY + 'px';
    square.style.transform = 'translate(' + numX + ',' + numY + ')';
});


// let btnLeft = document.getElementById('btnLeft');
// let btnRight = document.getElementById('btnRight');

// btnTop.addEventListener('click', () => {
//     num -= 20;
//     let number = num + 'px)';
//     square.style.transform = 'translate(0px, '+number;
// });

// btnRight.addEventListener('click', () => {
//     num += 20;
//     let number = num + 'px';
//     square.style.transform = 'translate('+number+',0px)';
// });

// btnRight.addEventListener('click', () => {
//     if (num > 0) {
//         num = 0;
//     }
//     num += 20;
//     let number = num + 'px';
//     square.style.left = number;
// })
// btnBottom.addEventListener('click', () => {
//     num += 20;
//     if (num > 0) {
//         num = 20;
//     }
//     let number = num + 'px';
//     square.style.top = number;
// });

// btnTop.addEventListener('click', () => {
//     num -= 20;
//     if (num < 0) {
//         num = 20;
//     }
//     let number = num + 'px';
//     square.style.top = number;
// });

// btnLeft.addEventListener('click', () => {
//     num -= 20;
//     if (num < 0) {
//         num = 20;
//     }
//     let number = num + 'px';
//     square.style.left = number;
// });

// btnRight.addEventListener('click', () => {
//     num += 20;
//     if (num > 0) {
//         num = 20;
//     }
//     let number = num + 'px';
//     square.style.left = number;
// });
// btnBottom.addEventListener('click', () => {
//     num += 20;
//     if (square.style.translate = true) {
//         num = 20;
//     }
//     let number = num + 'px';
//     square.style.transform = "translate(0," + number;
// });

// btnTop.addEventListener('click', () => {
//     num -= 20;
//     let number = num + 'px';
//     square.style.transform = "translate(0," + number;
// });

// btnLeft.addEventListener('click', () => {
//     num -= 20;
//     if (num > 0) {
//         num = -60;
//     }
//     let number = num + 'px';
//     square.style.translate = number;
// });

// btnRight.addEventListener('click', () => {
//     num += 20;
//     let number = num + 'px';
//     square.style.translate = number;
// });
