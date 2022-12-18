let planName = 'Arcade';
let planPrice = '$9/mo';
let planDate = 'Monthly';
let planDateSymbol = 'mo';
let addonsTotal = 0;

const form1 = document.querySelector('.background .card .form-1');
const form2 = document.querySelector('.background .card .form-2');
const form3 = document.querySelector('.background .card .form-3');
const form4 = document.querySelector('.background .card .form-4');
const form5 = document.querySelector('.background .card .form-5');

const next1Btn = document.querySelector('.background .card .content .buttons .next-1');
const next2Btn = document.querySelector('.background .card .content .buttons .next-2');
const next3Btn = document.querySelector('.background .card .content .buttons .next-3');
const next4Btn = document.querySelector('.background .card .content .buttons .next-4');
const prev2Btn = document.querySelector('.background .card .content .buttons .prev-2');
const prev3Btn = document.querySelector('.background .card .content .buttons .prev-3');
const prev4Btn = document.querySelector('.background .card .content .buttons .prev-4');
const changeBtn = document.querySelector('.background .card .content .total-detalis .plan .text .change');

const step1 = document.querySelector('.background .card .image-bg .steps .step .step-1');
const step2 = document.querySelector('.background .card .image-bg .steps .step .step-2');
const step3 = document.querySelector('.background .card .image-bg .steps .step .step-3');
const step4 = document.querySelector('.background .card .image-bg .steps .step .step-4');

const nameInput = document.querySelector('.background .card .content .input-control #name');
const emailInput = document.querySelector('.background .card .content .input-control #email');
const phoneInput = document.querySelector('.background .card .content .input-control #phone');
const planSelected = document.querySelectorAll('.background .card .content .boxes .radio-group input[type="radio"]');
const addOnsSelected = document.querySelectorAll('.background .card .content .add-ons-boxes .add-ons-checkbox input');
const Detalis = document.querySelector('.background .card .content .total-detalis');
const switchButton = document.querySelector('.background .card .content .switch-buttons input');

planSelected.forEach((item) => {
    item.addEventListener('click', function () {
        planName = item.parentNode.querySelector('.label .radio-control .text h6').textContent;
        planPrice = item.parentNode.querySelector('.label .radio-control .text p').textContent;
    });
});
const checkPlanSelected = () => {
    planSelected.forEach((item) => {
        if (item.checked) {
            planName = item.parentNode.querySelector('.label .radio-control .text h6').textContent;
            planPrice = item.parentNode.querySelector('.label .radio-control .text p').textContent;
        }
    });
}

switchButton.addEventListener('click', function () {
    if (switchButton.checked === true) {
        planDateSymbol = 'yr';
        document.querySelector('.background .card .content .boxes .radio-group label .radio-control .arcade p').textContent = '$' + 90 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .boxes .radio-group label .radio-control .advanced p').textContent = '$' + 120 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .boxes .radio-group label .radio-control .pro p').textContent = '$' + 150 + '/' + planDateSymbol;
        document.querySelectorAll('.background .card .content .boxes .radio-group label .radio-control .text span').forEach((item) => item.textContent = '2 months free');
        planDate = 'Yearly';
        checkPlanDate();
        checkPlanSelected();
        checkAddonsSelected();
    }
    else {
        planDateSymbol = 'mo';
        document.querySelector('.background .card .content .boxes .radio-group label .radio-control .arcade p').textContent = '$' + 9 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .boxes .radio-group label .radio-control .advanced p').textContent = '$' + 12 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .boxes .radio-group label .radio-control .pro p').textContent = '$' + 15 + '/' + planDateSymbol;
        document.querySelectorAll('.background .card .content .boxes .radio-group label .radio-control .text span').forEach((item) => item.textContent = '');
        planDate = 'Monthly';
        checkPlanDate();
        checkPlanSelected();
        checkAddonsSelected();
    }
});

addOnsSelected.forEach((item) => {
    item.addEventListener('click', function () {
        if (item.checked) {
            const boxDetails = document.createElement('div');
            boxDetails.classList.add('box');
            boxDetails.setAttribute('id', item.parentNode.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox label').className);
            const AddonName = document.createElement('h6');
            const AddonPrice = document.createElement('p');
            AddonName.innerText = item.parentNode.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox label .desc h6').textContent;
            AddonPrice.innerText = item.parentNode.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox label .price').textContent;
            Detalis.appendChild(boxDetails);
            boxDetails.appendChild(AddonName);
            boxDetails.appendChild(AddonPrice);
            addonsTotal += Number(item.parentNode.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox label .price').textContent.match(/\d+/));
        }
        else {
            const removeItem = document.querySelector(`.background .card .content .total-detalis #${item.id}`);
            removeItem.remove();
            addonsTotal -= Number(item.parentNode.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox label .price').textContent.match(/\d+/));
        }

    });
})

const checkAddonsSelected = () => {
    addonsTotal = 0;
    addOnsSelected.forEach((item) => {
        if (item.checked) {
            document.querySelector(`.background .card .content .total-detalis #${item.id} p`).textContent = item.parentNode.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox label .price').textContent;
            addonsTotal += Number(item.parentNode.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox label .price').textContent.match(/\d+/));
        }
    });
}

const checkPlanDate = () => {
    if (planDate === 'Yearly') {
        document.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox .online-service .price').textContent = '+'+'$' + 10 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox .larger-storage .price').textContent = '+'+'$' + 20 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox .customizable-profile .price').textContent = '+'+'$' + 20 + '/' + planDateSymbol;
    } else {
        document.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox .online-service .price').textContent = '+'+'$' + 1 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox .larger-storage .price').textContent = '+'+'$' + 2 + '/' + planDateSymbol;
        document.querySelector('.background .card .content .add-ons-boxes .add-ons-checkbox .customizable-profile .price').textContent = '+'+'$' + 2 + '/' + planDateSymbol;
    }
}

const checkedInput = (inputValue) => {
    if (inputValue.value !== '') {
        inputValue.parentNode.childNodes[1].childNodes[3].textContent = '';
        return true;
    } else {
        inputValue.parentNode.childNodes[1].childNodes[3].textContent = 'Thid field is required';
        inputValue.style.border ='1px solid #ed3548';
        return false;
    }
}

next1Btn.addEventListener('click', function () {
    if (checkedInput(nameInput) && checkedInput(emailInput) && checkedInput(phoneInput)) {
        form1.style.display = 'none';
        form2.style.display = 'flex';
        step1.classList.remove('active');
        step2.classList.add('active');
    }

});

next2Btn.addEventListener('click', function () {
    form2.style.display = 'none';
    form3.style.display = 'flex';
    step2.classList.remove('active');
    step3.classList.add('active');
    checkPlanDate();
});

prev2Btn.addEventListener('click', function () {
    form2.style.display = 'none';
    form1.style.display = 'flex';
    step2.classList.remove('active');
    step1.classList.add('active');
});

next3Btn.addEventListener('click', function () {
    form3.style.display = 'none';
    form4.style.display = 'flex';
    step3.classList.remove('active');
    step4.classList.add('active');
    document.querySelector('.background .card .content .total-detalis .plan .text h6').textContent = `${planName} (${planDate})`;
    document.querySelector('.background .card .content .total-detalis .plan p').textContent = planPrice;
    document.querySelector('.background .card .content .total h6 span').textContent = '(per'+ ' '+planDate.toLowerCase().substring(0,planDate.length-2)+')';
    document.querySelector('.background .card .content .total p').textContent = '$' + (Number(planPrice.substring(1, planPrice.length - 3)) + Number(addonsTotal)) + '/' + planDateSymbol;
});

prev3Btn.addEventListener('click', function () {
    form3.style.display = 'none';
    form2.style.display = 'flex';
    step3.classList.remove('active');
    step2.classList.add('active');
});

next4Btn.addEventListener('click', function () {
    form4.style.display = 'none';
    form5.style.display = 'flex';
    // console.log(document.getElementsByClassName('mobile-footer'));
    document.querySelector('.mobile-footer').style.display = 'none';
});

prev4Btn.addEventListener('click', function () {
    form4.style.display = 'none';
    form3.style.display = 'flex';
    step4.classList.remove('active');
    step3.classList.add('active');
});

changeBtn.addEventListener('click', function () {
    form4.style.display = 'none';
    form2.style.display = 'flex';
    step4.classList.remove('active');
    step2.classList.add('active');
});