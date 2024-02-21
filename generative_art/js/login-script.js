window.onload = function(){
    
    console.log('work');
    
    var login = 'DarkRed Web';
    var password = 'EnterRed';
    
    document.getElementById('enter-site').onclick = function(){
        var enterLogin = document.getElementById('login-site').value;
        var enterPassword = document.getElementById('password-site').value;
        
        if(enterLogin == login && enterPassword == password){
            location.href = 'green_rain.html';
        }
        else{
            document.getElementById('error').innerHTML = 'error';
        }
        
    }
}