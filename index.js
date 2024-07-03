document.querySelector('main#main').remove();
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = `${yourName} is the champion`;
document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Create an <h1> element and assign it to 'newHeader' variable
    const newHeader = document.createElement('h1');
  
    // Step 2: Set the id of the <h1> element to 'victory'
    newHeader.id = 'victory';
  
    // Step 3: Set the text content of the <h1> element
    const yourName = 'YOUR-NAME'; // Replace with your actual name
    newHeader.textContent = `${yourName} is the champion`;
  
    // Step 4: Append the <h1> element to the document body or another appropriate container
    document.body.appendChild(newHeader);
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Remove the <main> with id 'main'
    const main = document.querySelector('main#main');
    if (main) {
      main.remove();
    }
  
    // Step 2: Create an <h1> element and assign it to 'newHeader' variable
    const newHeader = document.createElement('h1');
  
    // Step 3: Set the id of the <h1> element to 'victory'
    newHeader.id = 'victory';
  
    // Step 4: Set the text content of the <h1> element
    const yourName = 'YOUR-NAME'; // Replace with your actual name
    newHeader.textContent = `${yourName} is the champion`;
  
    // Step 5: Append the <h1> element to the document body or another appropriate container
    document.body.appendChild(newHeader);
  });
  