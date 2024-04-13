document.addEventListener('DOMContentLoaded', function () {
    const minusButton = document.querySelector('.minus')
    const plusButton = document.querySelector('.plus')
    const countInput = document.getElementById('count')

    minusButton.addEventListener('click', function () {
        let currentValue = parseInt(countInput.value)
        if (currentValue > 2) {
            countInput.value = currentValue - 1;
        }
    })

    plusButton.addEventListener('click', function () {
        let currentValue = parseInt(countInput.value)

        countInput.value = currentValue + 1;

    })

}

)


function generateBoxes() {
    var count = document.getElementById("count").value;
    var container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous content

    for (var i = 1; i <= count; i++) {
        var box = document.createElement("div");
        box.classList.add("boxes");

        var firstLine = document.createElement("div");
        firstLine.classList.add("first-line");

        var img1 = document.createElement("img");
        img1.classList.add("first-img");
        img1.src = "assets/user-svgrepo-com.svg";
        img1.alt = "";

        var inputName = document.createElement("input");
        inputName.type = "text";
        inputName.name = "name";
        inputName.id = "name";
        inputName.placeholder = "Name " + i;

        var img2 = document.createElement("img");
        img2.classList.add("rupee");
        img2.src = "assets/rupee-1-frame-svgrepo-com.svg";
        img2.alt = "";

        var spanTotal = document.createElement("span");
        spanTotal.classList.add("person-total");
        spanTotal.textContent = "0";

        firstLine.appendChild(img1);
        firstLine.appendChild(inputName);
        firstLine.appendChild(img2);
        firstLine.appendChild(spanTotal);

        var secondLine = document.createElement("div");
        secondLine.classList.add("second-line");

        var inputWhat = document.createElement("input");
        inputWhat.type = "text";
        inputWhat.name = "what";
        inputWhat.id = "what";
        inputWhat.placeholder = "What";

        var inputHow = document.createElement("input");
        inputHow.type = "number";
        inputHow.name = "how";
        inputHow.id = "how";
        inputHow.placeholder = "How much?";

        var img3 = document.createElement("img");
        img3.src = "assets/group2-svgrepo-com.svg";
        img3.alt = "";

        var img4 = document.createElement("img");
        img4.src = "assets/minus-circle-svgrepo-com.svg";
        img4.alt = "";

        secondLine.appendChild(inputWhat);
        secondLine.appendChild(inputHow);
        secondLine.appendChild(img3);
        secondLine.appendChild(img4);

        var thirdLine = document.createElement("div");
        thirdLine.classList.add("third-line");

        var button = document.createElement("button");
        button.classList.add("button");
        button.setAttribute("onclick", "addLine()");
        button.innerHTML = '<img src="assets/add-circle-svgrepo-com (1).svg" alt="">more';

        thirdLine.appendChild(button);

        box.appendChild(firstLine);
        box.appendChild(secondLine);
        box.appendChild(thirdLine);

        container.appendChild(box);
    }
}


// Generate boxes initially
generateBoxes();



function addLine() {
    const secondLine = document.querySelector('.second-line');
    const newLine = secondLine.cloneNode(true);

    
    newLine.querySelector('input[name="what"]').value = '';
    newLine.querySelector('input[name="how"]').value = '';

    const boxesContainer = document.querySelector('.boxes');
    boxesContainer.insertBefore(newLine, boxesContainer.lastElementChild); 
}


function generateBoxes() {
    var count = document.getElementById("count").value;
    var container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous content

    for (var i = 1; i <= count; i++) {
        var box = document.createElement("div");
        box.classList.add("boxes");

        var firstLine = document.createElement("div");
        firstLine.classList.add("first-line");

        var img1 = document.createElement("img");
        img1.classList.add("first-img");
        img1.src = "assets/user-svgrepo-com.svg";
        img1.alt = "";

        var inputName = document.createElement("input");
        inputName.type = "text";
        inputName.name = "name";
        inputName.id = "name";
        inputName.placeholder = "Name " + i;

        var img2 = document.createElement("img");
        img2.classList.add("rupee");
        img2.src = "assets/rupee-1-frame-svgrepo-com.svg";
        img2.alt = "";

        var spanTotal = document.createElement("span");
        spanTotal.classList.add("person-total");
        spanTotal.textContent = "0";

        firstLine.appendChild(img1);
        firstLine.appendChild(inputName);
        firstLine.appendChild(img2);
        firstLine.appendChild(spanTotal);

        var secondLine = document.createElement("div");
        secondLine.classList.add("second-line");

        var inputWhat = document.createElement("input");
        inputWhat.type = "text";
        inputWhat.name = "what";
        inputWhat.id = "what";
        inputWhat.placeholder = "What";

        var inputHow = document.createElement("input");
        inputHow.type = "number";
        inputHow.name = "how";
        inputHow.id = "how";
        inputHow.placeholder = "How much?";

        var img3 = document.createElement("img");
        img3.src = "assets/group2-svgrepo-com.svg";
        img3.alt = "";

        var img4 = document.createElement("img");
        img4.src = "assets/minus-circle-svgrepo-com.svg";
        img4.alt = "";

        secondLine.appendChild(inputWhat);
        secondLine.appendChild(inputHow);
        secondLine.appendChild(img3);
        secondLine.appendChild(img4);

        var thirdLine = document.createElement("div");
        thirdLine.classList.add("third-line");

        var button = document.createElement("button");
        button.classList.add("button");
        button.setAttribute("onclick", "addLine()");
        button.innerHTML = '<img src="assets/add-circle-svgrepo-com (1).svg" alt="">more';

        thirdLine.appendChild(button);

        box.appendChild(firstLine);
        box.appendChild(secondLine);
        box.appendChild(thirdLine);

        container.appendChild(box);
    }
}


// Generate boxes initially
generateBoxes();



