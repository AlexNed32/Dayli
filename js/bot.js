let subscribe = document.getElementById('subscribe');


subscribe.addEventListener('input', function(){
    let emailOne = document.getElementById('email1').value.length;
    let emailTwo = document.getElementById('email2').value.length;
    console.log(emailOne)
    if (emailOne > 5 || emailTwo > 5){
        btn_form_1.removeAttribute('disabled');
        btn_form_2.removeAttribute('disabled');
    }else{
        btn_form_1.setAttribute('disabled', 'disabled');
        btn_form_2.setAttribute('disabled', 'disabled');
    }
}, false)

document.addEventListener('click', function(e){

   
    if(e.target.id == 'btn_form_1'){
        let emailOne = document.getElementById('email1').value;
        let message = `Email : ${emailOne}`;
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("text/xml; charset=UTF-8");
        document.getElementById('email1').value = '';
        
        let telUrl = `https://api.telegram.org/bot1533391025:AAF8EWXktXboff3IL4bLVySEIYhM63YPHXs/sendMessage?chat_id=-1001140243717&text=`;
        xhr.open('GET', telUrl + message, true);
        xhr.send();
    }
    if(e.target.id == 'btn_form_2'){
        let emailTwo = document.getElementById('email2').value;
        let message = `Email : ${emailTwo}`;
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("text/xml; charset=UTF-8");
        document.getElementById('email2').value = '';
        
        let telUrl = `https://api.telegram.org/bot1533391025:AAF8EWXktXboff3IL4bLVySEIYhM63YPHXs/sendMessage?chat_id=-1001140243717&text=`;
        xhr.open('GET', telUrl + message, true);
        xhr.send();
    }
}, false);