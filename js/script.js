var btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    
    var frmContato = document.querySelector("#contact-form");
    console.log(frmContato.nome.value);
    console.log(frmContato.email.value);
    console.log(frmContato.assunto.value);
    console.log(frmContato.mensagem.value);
})