function calculateBudget() {
    // Get the input value
    var income = parseFloat(document.getElementById("income").value);
  
    // Calculate the budget amounts
    var fixedExpenses = income * 0.65;
    var investments = income * 0.10;
    var goWild = income * 0.10;
    var savings = income * 0.15;
  
    // Display the budget amounts
    document.getElementById("fixedExpenses").value = fixedExpenses.toFixed(2);
    document.getElementById("investments").value = investments.toFixed(2);
    document.getElementById("goWild").value = goWild.toFixed(2);
    document.getElementById("savings").value = savings.toFixed(2);
  }

  function addExpense() {
    // Get the input values
    var expenseName = document.getElementById("expenseName").value;
    var expenseAmount = parseFloat(document.getElementById("expenseAmount").value);
    var selectedCategory = document.getElementById("category").value;
  
    // Update the budget amounts based on the selected category and expense amount
    var categoryTotal = parseFloat(document.getElementById(selectedCategory + "Total").textContent);
    categoryTotal -= expenseAmount;
  
    // Display the updated category total
    document.getElementById(selectedCategory + "Total").textContent = categoryTotal.toFixed(2);
  
    // Reset the expense input fields
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
  }