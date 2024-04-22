document.getElementById('complete-reservation').addEventListener('click', function() {
    var name = document.querySelector('input[name="name"]').value;
    var surname = document.querySelector('input[name="surname"]').value;
    var tickets = document.querySelector('input[name="tickets"]').value;
  
    var price = 2.5; //PRICE HERE

    var formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('tickets', tickets);
    formData.append('price', price);
  
    fetch('https://script.google.com/macros/s/AKfycbzQlx7085jfd3w-thBdtHmbwWhf1-gmFuH3V6C6afwoJrLQccN4ZS0qqb6j9h7Ii1BkNw/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Reserva realizada com sucesso!');
      } else {
        alert('Erro ao realizar reserva. Por favor, tenta novamente.');
      }
    })
    .catch(error => {
      console.error('Erro ao fazer solicitação:', error);
      alert('Erro ao realizar reserva. Por favor, tenta novamente.');
    });
  });