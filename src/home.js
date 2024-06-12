function loadHomePage() {
    // Select Div //
    const content = document.getElementById('content');

    // Create Elements //
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Our Restaurant";

    const image = document.createElement('img');
    image.src = '../img/main_img.png';
    image.alt = 'restaurant_img';

    const description = document.createElement('p');
    description.textContent = "We offer the best food in town. Come visit!";

    // Add Elements //
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
}

export default loadHomePage;