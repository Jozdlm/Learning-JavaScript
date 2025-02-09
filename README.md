# Personal Budget Tracker

A simple web application to help users manage their personal budget by tracking income and expenses. The project is built using **vanilla JavaScript**, **HTML**, and **CSS**, and stores transaction data in the browser's local storage.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, edit, and delete income and expense transactions.
- View transaction history with date, amount, category, and description.
- Real-time calculation of total income, expenses, and balance.
- Persistent data storage using browser's local storage.
- Responsive design for mobile and desktop users.
- Filter transactions by date.
- Visualize spending breakdown by category using a pie chart.
- Currency conversion feature for international users.

## Getting Started

### Prerequisites

You only need a modern web browser (e.g., Chrome, Firefox, Edge) to run this project.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/personal-budget-tracker.git
   ```
2. Navigate into the project folder:

   ```bash
   cd personal-budget-tracker
   ```

3. Use live server to run a server and serve the index.html in your browser

## Project Structure

```bash
budget-tracker/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Usage

**Add a Transaction**

- Use the input form to enter the transaction details (description, amount, category).
- Positive amounts represent income, while negative amounts represent expenses.

**View History**

- Your transactions are listed below the form, showing all details (description, amount, and date).

**Check Balance**

- The total balance, total income, and total expenses are updated in real-time.

**Persistent Data**

- All transaction data is stored locally and will persist even after closing the browser.

**Edit/Delete Transactions**

- You can modify or remove transactions using the corresponding buttons.

**Category Breakdown**

- A pie chart displays your spending by category.

**Date Filtering**

- Filter transactions by a specified date range.

**Currency Conversion**

- Convert transaction amounts into different currencies.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch `
3. Make your changes and commit them `git commit -m 'Add some feature'`
4. Push to the branch `git push origin feature-branch`.
5. Open a pull request.

## License

This project is open source and available under the MIT License.
