/*document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to submit contact form');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});*/


/*document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Collect form data
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };
  
    // Send POST request to backend
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // Handle response
      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        throw new Error('Failed to submit contact form');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit contact form');
    }
  });*/
  

  // Select the form element
/*const form = document.getElementById('contactForm');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  // Send a POST request to the server
  fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Form submitted successfully') {
        alert('Form submitted successfully');
        // Clear the form after successful submission
        form.reset();
      } else {
        alert('Failed to submit contact form');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to submit contact form');
    });
});*/


// Select the form element
const form = document.getElementById('contactForm');

// Add event listener to handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  let errorMessage = '';

  // Name validation (ensure it's not empty)
  if (!name.trim()) {
    errorMessage += 'Please enter your name.<br>';
  }

  // Email validation (checks if '@' is present)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    errorMessage += 'Please enter a valid email address.<br>';
  }

  // Phone number validation (checks for exactly 10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    errorMessage += 'Phone number must be exactly 10 digits.<br>';
  }

  // Message validation (ensure it's not empty)
  if (!message.trim()) {
    errorMessage += 'Please enter your message.<br>';
  }

  // If there are validation errors, display them and prevent form submission
  if (errorMessage) {
    document.getElementById('error-message').innerHTML = errorMessage;
  } else {
    // Send a POST request to the server if validation passes
    const data = { name, email, phone, message };

    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Form submitted successfully') {
          alert('Form submitted successfully');
          form.reset(); // Clear the form after successful submission
        } else {
          alert('Failed to submit contact form');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit contact form');
      });
  }
});
