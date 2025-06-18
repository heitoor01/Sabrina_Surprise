function darkMode(){
    document.body.classList.toggle('darkMode');

    if(document.body.classList.contains('darkMode')){
        document.querySelector('#themeBtn').innerHTML = '☀️ Light Mode'
    } else {
        document.querySelector('#themeBtn').innerHTML = '🌙 Dark Mode'
    }
}