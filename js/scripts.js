document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('single-form');
  const table = document.getElementById('table');
  const title = document.getElementById('second-title');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const numberInput = document.getElementById('number');
      const multiplicatorInput = document.getElementById('multiplicator');
      
      const number = parseInt(numberInput.value);
      const multiplicator = parseInt(multiplicatorInput.value);
      
      // Limpa o conteúdo anterior da tabela
      table.innerHTML = '';
      
      // Cria e exibe o título da tabuada
      title.textContent = `Tabuada do número ${number}:`;
      
      // Cria e exibe as linhas da tabuada
      for (let i = 1; i <= multiplicator; i++) {
          const row = document.createElement('div');
          row.classList.add('row');
          const equation = `${number} x ${i} = `;
          const result = number * i;
          row.textContent = `${equation} ${result}`;
          table.appendChild(row);
      }
  });
});