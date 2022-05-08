
let btn = document.getElementById('btn');
let text = document.getElementById('text')

 btn.addEventListener("click", () => {
    if(getComputedStyle(text).display != "none"){
      text.style.display = "none";
      btn.ariaExpanded = true
      btn.textContent ='Afficher le texte';
    } else {
      text.style.display = "block";
      btn.ariaExpanded = false
      btn.textContent ='Masquer le texte'
    }
  })
  
  