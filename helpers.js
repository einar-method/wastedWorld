/// HELPER FUNCTIONS
function pickUnique(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

function pickWithDuplicates(count, array) {
    return Array.from({ length: count }, () => array[Math.floor(Math.random() * array.length)]);
};

const isElmPresent = (id) => document.getElementById(id) ? true : false;

const toCamelCase = (str) =>
    str
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      .replace(/^[A-Z]/, (match) => match.toLowerCase())
;

function fadeInElements(elementIds) {
    requestAnimationFrame(function () {
        elementIds.forEach(function (elementId) {
        // Check the computed style to ensure the initial styles are applied
        window.getComputedStyle(document.getElementById(elementId)).opacity;
  
        // Set opacity to 1 after the initial styles are applied
        document.getElementById(elementId).style.opacity = 1;
      });
    });
};

function callError(txt) {
    document.getElementById("error-txt").innerHTML = txt;
    document.getElementById("error").open = true;
    fadeInElements(["error"])
    setTimeout(() => {
        document.getElementById("error").open = false;
        dialogFade(document.getElementById("error"), 0)
    }, 3000);
};

function callTip(txt) {
    document.getElementById("tip-txt").innerHTML = txt;
    document.getElementById("tip").open = true;
    fadeInElements(["tip"])
    setTimeout(() => {
        document.getElementById("tip").open = false;
        dialogFade(document.getElementById("tip"), 0)
    }, 3000);
};

function dialogFade(element, opacity) {
    element.style.opacity = opacity;
    element.style.transition = "none"; // Disable transition temporarily
    requestAnimationFrame(() => {
      element.style.transition = ""; // Re-enable transition
    });
};

function randomMath(input) {
    return input[Math.floor(Math.random() * input.length)];
}; // Great for picking a random element from an array.

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}; // Easy random int between two numbers. 

function getButtonText(button) {
    return button.innerText;
}

function getSectionId(spanId) {
    // Find the closest ancestor section element for the given spanId
    const sectionElement = document.getElementById(spanId).closest('section');

    // Return the ID of the section element
    return sectionElement ? sectionElement.id : null;
};

function makingElements(variable, parentId) {

    // let newEle = document.createElement("strong");

    // newEle.innerText = bold;

    // parentId.appendChild(newEle);

    parentId.innerHTML = variable;
}; // Not currently used.

function runArrLoop(limit, arr) {
    console.log("Initiating loop looking for " + limit + " item(s).")
    let i = 0;
    while (i < limit) {
        let tempIncl = randomMath(arr);
        console.log(tempIncl);

        let existing = arr.find(obj => obj.name === tempIncl.name && obj.hasIt);
        
        if (existing) {
            console.log(tempIncl.name + " was a duplicate.");
        } else {
            let match = arr.find(obj => obj.name === tempIncl.name);
            if (match) {
                //match.hasIt = true; //remove return for all random
                i++;
                return match
            }
        }
    }
};
function runNoReturnArrLoop(limit, arr) {
    console.log("Initiating loop looking for " + limit + " item(s).")
    let i = 0;
    while (i < limit) {
        let tempIncl = randomMath(arr);
        console.log(tempIncl);

        let existing = arr.find(obj => obj.name === tempIncl.name && obj.hasIt);
        
        if (existing) {
            console.log(tempIncl.name + " was a duplicate.");
        } else {
            let match = arr.find(obj => obj.name === tempIncl.name);
            if (match) {
                match.hasIt = true;
                i++;
            }
        }
    }
};