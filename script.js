document.addEventListener("DOMContentLoaded", function() {
      if (localStorage.getItem('reserved5')){
        document.getElementById('complete-reservation').disabled = true;
      } else {
        document.getElementById('complete-reservation').addEventListener('click', function() {
          var name = document.querySelector('input[name="name"]').value;
          var surname = document.querySelector('input[name="surname"]').value;
          var ticketsInput = document.querySelector('input[name="tickets"]').value;
          var tickets = parseInt(ticketsInput);
        
          var price = 3.0; //PRICE HERE

          name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
          surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
      
          if(!name||!surname||tickets<1||tickets>10||isNaN(tickets)||tickets !== Math.floor(tickets)){
              return;
          }
      
          document.getElementById('complete-reservation').textContent = "A fazer reserva...";
          console.log("A fazer reserva de "+tickets+" para "+name+" "+surname)
      
          var formData = new FormData();
          formData.append('type', "party")
          formData.append('name', name)
          formData.append('surname', surname)
          formData.append('tickets', tickets)
          formData.append('price', price)
          
          fetch('https://script.google.com/macros/s/AKfycbzFqC3ed5QOShgKZkiCheWjadz3ETPgQFjimqqXHfbB7wmYMnzrpjwKVnnVGA0I5ZtsaQ/exec', {
            method: 'POST',
            body: formData
          })
          .then(response => {
            if (response.ok) {
              console.log("Reserva de "+tickets+" para "+name+" "+surname+" concluída")
              window.location.href = 'success';
              localStorage.setItem('reserved5', true);
              document.getElementById('complete-reservation').disabled = true;
              getElementById('complete-reservation').value = "A carregar..."

            } else {
              //alert('Erro ao realizar reserva. Por favor, tenta novamente.')
            }
          })
          .catch(error => {
            console.error('Erro ao fazer solicitação:', error);
            //alert('Erro ao realizar reserva. Por favor, tenta novamente.')
          });
        });
      }
});



  