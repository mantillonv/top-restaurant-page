function loadMenuPage() {
    // Select Div //
    const content = document.getElementById('content');

    // Create Elements //
    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.innerHTML = `
        <h2>Roast Suckling Pig $34.99</h2>
        <p>Tender suckling pig slow-roasted to perfection, boasting crispy skin and succulent meat infused with aromatic herbs and spices. Served with a side of seasonal vegetables and a rich jus.</p>
    `;

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.innerHTML = `
        <h2>Veal Cutlet Breaded w/Potatoes $29.99</h2>
        <p>A delicately breaded veal cutlet served alongside golden, thinly sliced potatoes, pan-fried to a crisp perfection. Accompanied by a fresh arugula salad dressed in lemon vinaigrette, offering a balanced blend of textures and flavors.</p>
    `;

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.innerHTML = `
        <h2>Rioja Style Salad $15.99</h2>
        <p>A vibrant salad inspired by the flavors of Spain's Rioja region, featuring mixed greens tossed with marinated artichokes, sun-dried tomatoes, Spanish olives, and crumbled Manchego cheese. Finished with a drizzle of sherry vinegar and extra virgin olive oil.</p>
    `;

    // Clear existing content
    content.innerHTML = '';

    // Add Elements //
    content.appendChild(headline);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
}
export default loadMenuPage;