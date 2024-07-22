

    const inputs = document.querySelectorAll("input");
    const button = document.querySelector("button");
    const p = document.querySelector("#selection");

    button.addEventListener("click", handler);

    function handler() {
        let choose = "";
        for (let input of inputs) {
            if (input.checked == true) {
                choose += input.value + " and ";
            }
        }
        p.innerHTML = choose;
    }































// const inputs = document.querySelectorAll("input");  
// const button = document.querySelector('button');  
// const p = document.querySelector("#selection");  
  
// button.addEventListener('click', handler);  
  
// function handler() {  
//   let choose = '';  
//   for (let input of inputs) {  
//    if (input.checked == true) {  
//       choose += input.value + ' ';  
//     }  
//   }  
//   p.innerHTML = choose;  
// }  

 
// const checkboxes = document.querySelectorAll('.input-style');
// const button = document.querySelector('button');
// const selectionParagraph = document.getElementById('selection');
  
// button.addEventListener('click', () =&gt; {
//   const selectedLanguages = [];
//   checkboxes.forEach((checkbox) =&gt; {
//    if (checkbox.checked) {
//     selectedLanguages.push(checkbox.value);
//    }
//   });
//   selectionParagraph.textContent = `You selected: ${selectedLanguages.join(', ')}`;
// });


