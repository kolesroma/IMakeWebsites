const prices = {
    'landing_page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online_store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web_application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile_application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};

function showTotalSum() {
    const websiteTypeElement = document.querySelector("#project_type");
    const currentPrices = prices[websiteTypeElement.value];

    const pmEl = document.querySelector("#project_management");
    const designEl = document.querySelector("#design");
    const developerEl = document.querySelector("#developer");
    const qaEl = document.querySelector("#qa");

    let totalSum = 0;
    if (pmEl.checked) {totalSum += currentPrices.pm; }
    if (designEl.checked) {totalSum += currentPrices.design; }
    if (developerEl.checked) {totalSum += currentPrices.developer; }
    if (qaEl.checked) {totalSum += currentPrices.qa; }

    const pEl = document.querySelector("#project_price_total");
    pEl.textContent = totalSum.toString();
}

const formElement = document.querySelector("#project_price_form");
formElement.addEventListener("change", showTotalSum);

const emailModal = document.querySelector("#modal_email");
const successModal = document.querySelector("#modal_success");

function submitClicked(ev) {
    ev.preventDefault();
    emailModal.classList.add("modal_active");
}

formElement.addEventListener("submit", submitClicked);

const closeButtons = document.querySelectorAll(".modal_container_cross_button");
const emailErrorTextEl = document.querySelector(".email_error_text");
const userEmailInput = document.querySelector("#user_email");

closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
        emailModal.classList.remove("modal_active");
        successModal.classList.remove("modal_active");
        emailErrorTextEl.classList.remove("email_error_text_active");
        userEmailInput.classList.remove("user_email_error");
    });
});


const modalEmailContainer = document.querySelector("#modal_email_container");

modalEmailContainer.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (!userEmailInput.value) {
        emailErrorTextEl.classList.add("email_error_text_active");
        userEmailInput.classList.add("user_email_error");
        return;
    }
    emailModal.classList.remove("modal_active");
    successModal.classList.add("modal_active");
});
