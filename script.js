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



function addLine() {
    const secondLine = document.querySelector('.second-line');
    const newLine = secondLine.cloneNode(true);

    
    newLine.querySelector('input[name="what"]').value = '';
    newLine.querySelector('input[name="how"]').value = '';

    const boxesContainer = document.querySelector('.boxes');
    boxesContainer.insertBefore(newLine, boxesContainer.lastElementChild); 
}






