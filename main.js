function loadBillingContent() {
    var dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <header>
            <h1>Bill Reminders</h1>
        </header>
        <main>
            <section id="reminder-form">
                <h2>Add a New Bill Reminder</h2>
                <form onsubmit="event.preventDefault(); addReminder();">
                    <label for="reminder-name">Name:</label>
                    <input type="text" id="reminder-name" required>
                    <label for="reminder-amount">Amount:</label>
                    <input type="number" id="reminder-amount" required>
                    <label for="reminder-due-date">Due Date:</label>
                    <input type="date" id="reminder-due-date" required>
                    <button type="submit" class="submit">Add Reminder</button>
                </form>
            </section>
            <section id="reminder-list">
                <h2>My Bill Reminders</h2>
                <ul id="reminders"></ul>
            </section>
        </main>
    `;
}

function addReminder() {
    const reminderName = document.getElementById("reminder-name").value;
    const reminderAmount = document.getElementById("reminder-amount").value;
    const reminderDueDate = document.getElementById("reminder-due-date").value;

    if (reminderName.trim() === '' || isNaN(reminderAmount) || reminderAmount <= 0 || reminderDueDate === '') {
        alert("Please fill out all fields correctly.");
        return;
    }

    const reminder = {
        name: reminderName,
        amount: parseFloat(reminderAmount),
        dueDate: reminderDueDate
    };

    displayReminder(reminder);
    clearInputFields();
}

function displayReminder(reminder) {
    const remindersList = document.getElementById("reminders");
    const listItem = document.createElement("li");
    listItem.textContent = `${reminder.name}: $${reminder.amount} (Due: ${reminder.dueDate})`;
    remindersList.appendChild(listItem);
}

function clearInputFields() {
    document.getElementById("reminder-name").value = '';
    document.getElementById("reminder-amount").value = '';
    document.getElementById("reminder-due-date").value = '';
}

// Placeholder functions for other button actions
function loadGoalsContent() {
    // Implement goals content loading logic here
}

function loadRevenuesContent() {
    // Implement revenues content loading logic here
}

function loadAnalyticsContent() {
    // Implement analytics content loading logic here
}