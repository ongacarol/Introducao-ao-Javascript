function changeMode() {
  //boa prática no js: que cada funcao tenha uma responsabilidade só, então para mudar o modo vai precisar mudar as classes e alguns textos, então vamos fazer funções separadas  
  changeClasses();
  changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)); {    
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darktMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector'); 
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //index 0, pois é o unico 
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode)