// Smoothie class definition
class Smoothie {
    constructor(base, ingredients, size, totalCost) {
      this.base = base;
      this.ingredients = ingredients;
      this.size = size;
      this.totalCost = totalCost;
    }
  
    getDescription() {
      return `
        <p><strong>Base:</strong> ${this.base}</p>
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
        <p><strong>Total Cost:</strong> $${this.totalCost.toFixed(2)}</p>
      `;
    }
  }
  
  // Function to calculate smoothie price and display order details
  function orderSmoothie() {
    // Get selected base
    const base = document.getElementById('base').value;
  
    // Get selected size and its price
    const sizeElement = document.getElementById('size');
    const size = sizeElement.options[sizeElement.selectedIndex].value;
    const sizePrice = parseFloat(sizeElement.options[sizeElement.selectedIndex].dataset.price);
  
    // Get selected ingredients and their prices
    const ingredientElements = document.querySelectorAll('input[name="ingredient"]:checked');
    const ingredients = [];
    let ingredientsCost = 0;
  
    ingredientElements.forEach(element => {
      ingredients.push(element.value);
      ingredientsCost += parseFloat(element.dataset.price);
    });
  
    // Calculate total cost
    const totalCost = sizePrice + ingredientsCost;
  
    // Create Smoothie object
    const smoothie = new Smoothie(base, ingredients, size, totalCost);
  
    // Output smoothie description to the page
    document.getElementById('output').innerHTML = smoothie.getDescription();
  }
  
