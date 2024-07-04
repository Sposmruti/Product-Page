document.addEventListener('DOMContentLoaded', function () {
    const quantityElement = document.querySelector('.quantity');
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    const colorCheckboxes = document.querySelectorAll('input[name="color"]');
    const addToCartButton = document.querySelector('.add-to-cart');
    const cartMessage = document.querySelector('.cart-message');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImage = document.getElementById('main-image');

    // Update quantity on button click
    decreaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantityElement.textContent = --quantity;
        }
    });

    increaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
    });

    // Ensure only one color can be selected
    colorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                colorCheckboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });

    // Add to cart button functionality
    addToCartButton.addEventListener('click', function () {
        const selectedColorElement = document.querySelector('input[name="color"]:checked');
        const selectedSizeElement = document.querySelector('input[name="tnc"]:checked');

        if (selectedColorElement && selectedSizeElement) {
            const color = selectedColorElement.value;
            const size = selectedSizeElement.value;
            const quantity = quantityElement.textContent;

            cartMessage.textContent = `Embrace Sideboard with Color ${color} and Size ${size} added to cart`;
            cartMessage.style.display = 'block';
        } 
    });

    // Change main image when thumbnail is clicked
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const imageUrl = this.getAttribute('src');
            mainImage.setAttribute('src', imageUrl);
        });
    });

    // Initially hide the cart message
    cartMessage.style.display = 'none';
});
