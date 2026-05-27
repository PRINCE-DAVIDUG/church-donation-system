const form = document.getElementById('donationForm');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  const donationData = {
    fullname: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    donationType: document.getElementById('donationType').value,
    amount: document.getElementById('amount').value,
    message: document.getElementById('message').value
  };

  const response = await fetch('https://church-donation-system-534a.onrender.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(donationData)
  });

  const result = await response.json();

  if(result.success) {
    window.location.href = result.payment_url;
  } else {
    alert('Payment initialization failed');
  }
});
