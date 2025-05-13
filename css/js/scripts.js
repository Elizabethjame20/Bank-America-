const transactions = [
    { date: "05/10/2025", desc: "Grocery Store", amount: "-$45.32" },
    { date: "05/09/2025", desc: "Salary Deposit", amount: "+$3,200.00" },
    { date: "05/08/2025", desc: "Utility Bill", amount: "-$120.00" }
];

function displayTransactions() {
    const tableBody = document.querySelector("#transaction-table tbody");
    if (tableBody) {
        transactions.forEach(tx => {
            const row = `<tr><td class="p-2">${tx.date}</td><td class="p-2">${tx.desc}</td><td class="p-2">${tx.amount}</td></tr>`;
            tableBody.innerHTML += row;
        });
    }
}

document.querySelector("#login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username && password.length >= 6) {
        alert("Login successful (mock)");
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter a valid username and password (6+ characters)");
    }
});

document.querySelector("#bill-pay-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const payee = e.target.payee.value;
    const amount = e.target.amount.value;
    if (payee && amount > 0) {
        alert(`Payment to ${payee} for $${amount} submitted (mock)`);
    } else {
        alert("Please enter a valid payee and amount");
    }
});

document.querySelector("#contact-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const message = e.target.message.value;
    if (name && message) {
        alert("Message sent (mock)");
    } else {
        alert("Please fill out all fields");
    }
});

document.querySelectorAll(".accordion > div").forEach(item => {
    item.addEventListener("click", () => {
        const p = item.querySelector("p");
        p.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", displayTransactions);
