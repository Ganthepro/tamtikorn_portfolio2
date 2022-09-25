function blur_all1() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-1') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main1');
            const sub = document.getElementById('sub1');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    } 
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all2() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-2') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main2');
            const sub = document.getElementById('sub2');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all3() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-3') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main3');
            const sub = document.getElementById('sub3');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all4() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-4') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main4');
            const sub = document.getElementById('sub4');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}

function blur_all5() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-5') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main5');
            const sub = document.getElementById('sub5');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        } 
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}
function blur_all6() {
    const allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const allElements2 = document.querySelectorAll('body > *');
    for (const element of allElements) {
        // console.log(element.className)
        if (element.className != 'but-6') {
            element.style.filter = 'blur(4px)';
        } else {
            const main = document.getElementById('main6');
            const sub = document.getElementById('sub6');
            main.style.borderBottom = '4px solid rgb(255, 209, 63)';
            sub.style.color = 'black';
        }
    }
    for (const element of allElements2) {
        // console.log(element.className)
        if (element.id != 'button-container') {
            element.style.filter = 'blur(4px)';
        }
    }
    for (const element of h6_allElements) {
        element.style.transition = 'border-bottom 1s'   
    }
}

function clear_blur_all() {
    const allElements = document.querySelectorAll('body > *');
    const a_allElements = document.querySelectorAll('a');
    const h6_allElements = document.querySelectorAll('a > h6');
    const p_allElements = document.querySelectorAll('a > p');
    for (const element of allElements) {
        element.style.filter = 'blur(0px)';
    }
    for (const element of a_allElements) {
        element.style.filter = 'blur(0px)';
    }
    for (const element of h6_allElements) {
        element.style.borderBottom = '0.1px solid white';
    }
    for (const element of p_allElements) {
        element.style.color = 'white';
    } 
}
