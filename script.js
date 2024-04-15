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





function saveFormData() {
    const count = document.getElementById('count').value;
    const tripname = document.getElementById('tripname').value;

    localStorage.setItem('count', count);
    localStorage.setItem('tripname', tripname);

    window.location.href = 'index2.html';
}



function addLine(button) {
    const container = button.parentElement;
    const newLine = `
        <div class="second-line">
            <input type="text" name="what" id="what" placeholder="What">
            <input type="number" name="how" id="how" placeholder="How much?">
            <img src="assets/group2-svgrepo-com.svg" alt="">
            <img src="assets/minus-circle-svgrepo-com.svg" alt="" onclick="removeLine(this)">
        </div>
    `;
    
    container.insertAdjacentHTML('beforebegin', newLine);

}


function removeLine(element) {
    const container = element.parentElement;
    
    container.remove();
}

window.onload = function () {
    const tripname = localStorage.getItem('tripname');
    document.querySelector('.tripname').innerText = tripname;

    const count = parseInt(localStorage.getItem('count'));
    const leftContainer = document.querySelector('.left');

    for (let i = 1; i < count +1; i++) {
        const box = `
        <div class="boxes">
        <div class="first-line">
            <img class="first-img" src="assets/user-svgrepo-com.svg" alt="">
            <input type="text" name="name" id="name" placeholder="Name ${i}">
            <img class="rupee" src="assets/rupee-1-frame-svgrepo-com.svg" alt="">
            <span class="person-total">0</span>
        </div>
        <div class="second-line">
            <input type="text" name="what" id="what" placeholder="What?">
            <input type="number" name="how" id="how" placeholder="How much?" onchange="calculateTotal(this)">
            <img src="assets/group2-svgrepo-com.svg" alt="">
            <img src="assets/minus-circle-svgrepo-com.svg" alt="" onclick="removeLine(this)">
        </div>
        <div class="third-line">
            <button class="button" onclick="addLine(this)">
                <img src="assets/add-circle-svgrepo-com (1).svg" alt="">
                more
            </button>
        </div>
    </div>
        `;
        leftContainer.insertAdjacentHTML('beforeend', box);
    }
};







        function calculateTotal() {
            const boxes = document.querySelectorAll('.boxes');
            boxes.forEach(box => {
                const inputs = box.querySelectorAll('input[name="how"]');
                let total = 0;
                inputs.forEach(input => {
                    if (!isNaN(input.value) && input.value !== '') {
                        total += parseFloat(input.value);
                    }
                });
                const personTotal = box.querySelector('.person-total');
                personTotal.innerText = total.toFixed(2);
            });
        }

        function calculatePayments() {
            const boxes = document.querySelectorAll('.left .boxes');
            let totalExpenses = 0;
            let totalPeople = 0;
            const payments = [];

            boxes.forEach(box => {
                const inputs = box.querySelectorAll('input[name="how"]');
                let total = 0;
                inputs.forEach(input => {
                    if (!isNaN(input.value) && input.value !== '') {
                        total += parseFloat(input.value);
                    }
                });
                totalExpenses += total;
                totalPeople++;
                const personName = box.querySelector('input[name="name"]').value;
                payments.push({ name: personName, total: total, personTotal: parseFloat(box.querySelector('.person-total').innerText) });
            });

            const averageExpense = totalExpenses / totalPeople;

            const paymentDetails = document.querySelector('.payment-details');
            paymentDetails.innerHTML = ''; 

            for (let i = 0; i < payments.length; i++) {
                for (let j = i + 1; j < payments.length; j++) {
                    const difference = averageExpense - payments[i].personTotal;
                    const paymentTo = difference.toFixed(2);
                    const paymentInfo = document.createElement('p');
                    paymentInfo.textContent = `${payments[i].name} should pay ${paymentTo} to ${payments[j].name}.`;
                    paymentDetails.appendChild(paymentInfo);
                }
            }

            paymentDetails.style.display = 'block';
        }