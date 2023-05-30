function register(){
    let email = document.getElementById('imputEmail').value;
    let password = document.getElementById('imputPassword').value;
    alert('usuario registrado correctamente')
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>{

    }).catch(function(error){
        console.log(error,message);
      
        alert('hubo un error al momento de registrarse el usuario')


    });
}





 