let cards = document.querySelectorAll('.card');

function expandCards() {
    
    this.classList.toggle('expanded');
}
cards.forEach(currentCard => currentCard.addEventListener('click', expandCards));

    // console.log('.card'); checking function works

/*|| Declare and assign variable cards all elements with class="card".

Declare function expandCards() this is the function for cards to expand and contract.
This function uses the .classList.toggle() method.
A method is the function of the object.
A boolean method the classList.toggle() method is a way to add or remove a class from an element. 
It takes a class name as its first argument, if the element has that class (True), it removes it. 
If the element does not have the class (False), it adds it.

After the function is an event listener, this calls the function when cards are clicked.
*/