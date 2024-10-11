document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var currentPath = window.location.pathname;
    if (currentPath.includes("reservas.html")) {
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
          formData.append('type', "party")
          formData.append('name', name)
          formData.append('surname', surname)
          formData.append('tickets', tickets)
          formData.append('price', price)
          
          fetch('https://script.google.com/macros/s/AKfycbzNyZHv_DbyDYpCZQuKYHAcQfzL8DIcVqVg6LcH4TaJs0QJ3_edgdlUctn8AIq_wu3w9w/exec', {
            method: 'POST',
            body: formData
          })
          .then(response => {
            if (response.ok) {
              console.log("Reserva de "+tickets+" para "+name+" "+surname+" concluída")
              window.location.href = 'success.html';
              localStorage.setItem('reserved', true);
            } else {
              alert('Erro ao realizar reserva. Por favor, tenta novamente.')
            }
          })
          .catch(error => {
            console.error('Erro ao fazer solicitação:', error);
            alert('Erro ao realizar reserva. Por favor, tenta novamente.')
          });
        });
      }
      } else
        
      
      if (localStorage.getItem('reserved_futsal')){
        document.getElementById('complete-reservation-futsal').disabled = true;
      } else {
          document.getElementById('complete-reservation-futsal').addEventListener('click', function() {
            console.log("abc")
            var team_name = document.querySelector('input[name="team-name"]').value
            var member1 = document.querySelector('input[name="name1').value + " " + document.querySelector('input[name="class1').value
            var member2 = document.querySelector('input[name="name2').value + " " + document.querySelector('input[name="class2').value
            var member3 = document.querySelector('input[name="name3').value + " " + document.querySelector('input[name="class3').value
            var member4 = document.querySelector('input[name="name4').value + " " + document.querySelector('input[name="class4').value
            var member5 = document.querySelector('input[name="name5').value + " " + document.querySelector('input[name="class5').value
      
            var formData = new FormData();
            formData.append('type', 'futsal')
            formData.append('team_name', team_name)
            formData.append('member1', member1)
            formData.append('member2', member2)
            formData.append('member3', member3)
            formData.append('member4', member4)
            formData.append('member5', member5)
      
            if(document.querySelector('input[name="name6"]').value) {
              var member6 = document.querySelector('input[name="name6"]').value + " " + document.querySelector('input[name="class6"]').value;
              formData.append('member6', member6);
            }
            if(document.querySelector('input[name="name7"]').value) {
              var member7 = document.querySelector('input[name="name7"]').value + " " + document.querySelector('input[name="class7"]').value;
              formData.append('member7', member7);
            }
            if(document.querySelector('input[name="name8"]').value) {
              var member8 = document.querySelector('input[name="name8"]').value + " " + document.querySelector('input[name="class8"]').value;
              formData.append('member8', member8);
            }
            if(document.querySelector('input[name="name9"]').value) {
              var member9 = document.querySelector('input[name="name9"]').value + " " + document.querySelector('input[name="class9"]').value;
              formData.append('member9', member9);
            }
            if(document.querySelector('input[name="name10"]').value) {
              var member10 = document.querySelector('input[name="name10"]').value + " " + document.querySelector('input[name="class10"]').value;
              formData.append('member10', member10);
            }
            if(document.querySelector('input[name="name11"]').value) {
              var member11 = document.querySelector('input[name="name11"]').value + " " + document.querySelector('input[name="class11"]').value;
              formData.append('member11', member11);
            }
      
            fetch('https://script.google.com/macros/s/AKfycbzNyZHv_DbyDYpCZQuKYHAcQfzL8DIcVqVg6LcH4TaJs0QJ3_edgdlUctn8AIq_wu3w9w/exec', {
              method: 'POST',
              body: formData
            })
            .then(response => {
              if (response.ok) {
                window.location.href = 'success.html';
                localStorage.setItem('reserved_futsal', true);
              } else {
                alert('Erro ao criar equipa. Por favor, tenta novamente.')
              }
            })
            .catch(error => {
              console.error('Erro ao fazer solicitação:', error);
              alert('Erro ao criar equipa. Por favor, tenta novamente.')
            });
          })
        }
  });
});



  