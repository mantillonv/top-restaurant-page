function loadContactPage() {
    // Select Div //
    const content = document.getElementById('content');

    // Create Elements //
    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";

    const address = document.createElement('p');
    address.textContent = "1062 N Scottsdale Rd, Scottsdale AZ 85251";

    const phone = document.createElement('p');
    phone.textContent = "Phone: (602) 501 6349";

    const email = document.createElement('p');
    email.textContent = "Email: contact@rocinanterestaurant.com";

    // Clear existing content
    content.innerHTML = '';

    // Add Elements //
    content.appendChild(headline);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
}

export default loadContactPage;