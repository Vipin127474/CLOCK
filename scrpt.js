// Get all the option lists
const optionLists = document.querySelectorAll('.options li');

// Add event listeners for drag events
optionLists.forEach(option => {
  option.setAttribute('draggable', 'true');
  option.addEventListener('dragstart', handleDragStart);
  option.addEventListener('dragover', handleDragOver);
  option.addEventListener('drop', handleDrop);
});

let draggedItem = null;

// Drag event handlers
function handleDragStart(e) {
  draggedItem = this;
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
  if (draggedItem !== this) {
    this.parentNode.insertBefore(draggedItem, this);
  }
}
const cartItems = document.getElementById('cart-items');

optionLists.forEach(option => {
  option.addEventListener('dragend', handleDragEnd);
});

function handleDragEnd() {
  if (this.parentNode === cartItems) {
    // Item is dropped in the cart
    // Add the item to the cart
    const cartItem = document.createElement('li');
    cartItem.textContent = this.dataset.name;
    cartItems.appendChild(cartItem);
  }
}
