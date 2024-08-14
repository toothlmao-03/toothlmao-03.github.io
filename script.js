if (localStorage.getItem('reserved')){
  document.getElementById('complete-reservation').disabled = true;
} else {
  document.getElementById('complete-reservation').addEventListener('click', function() {
    var name = document.querySelector('input[name="name"]').value;
    var surname = document.querySelector('input[name="surname"]').value;
    var ticketsInput = document.querySelector('input[name="tickets"]').value;
    var tickets = parseInt(ticketsInput);
  
    var price = 2.5; //PRICE HERE

    if(!name||!surname||tickets<1||tickets>10||isNaN(tickets)||tickets !== Math.floor(tickets)){
        return;
    }

    document.getElementById('complete-reservation').textContent = "A fazer reserva...";
    console.log("A fazer reserva de "+tickets+" para "+name+" "+surname)

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
        console.log("Reserva de "+tickets+" para "+name+" "+surname+" concluída")
        window.location.href = 'success.html';
        localStorage.setItem('reserved', true);
      } else {
        alert('Erro ao realizar reserva. Por favor, tenta novamente.');
      }
    })
    .catch(error => {
      console.error('Erro ao fazer solicitação:', error);
      alert('Erro ao realizar reserva. Por favor, tenta novamente.');
    });
  });
}

  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
    });
  });