window.onload = function(){
    var form = document.getElementById('form')
    form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var value = evt.srcElement[0].value;
    window.location = "https://www.google.com/search?q=" + value
})}
