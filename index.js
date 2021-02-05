// usamos las dependencias venom-bot y child-process
const venom = require('venom-bot');   //bot WhatsApp se debe instalar ---https://github.com/orkestral/venom
const spawn =require('child_process').spawn;  //dependencia propia de nodejs permite usar spawn

// esta funcion  se conecta al script de python y lo ejecuta
function ejecuta_script_python() {   
    const process =spawn('python',['./dash.py']);
    process.stdout.on('data',data=>{
        if (error) throw error;
                console.log("finished"); //proceso ocurrio con exito y finalizado
    });
}

//se incia el uso de la dependencia venom-bot instanciando la creacion y sension del client invocando a la funcion client
venom
  .create()
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);    //muestra error en caso de que falle la conexion
  });

//Se incializa al cliente para que escuche y envie mensaje usando la siguiente funcion
function start(client) {  
  client.onMessage((message) => {
    if (message.body === '@51963160327 Hi') {   //para el caso en que el bot sea etiquetado
      client
        .sendText(message.from, 'Welcome a este Bot!')
        .then((result) => {
          console.log('Result: ', result); //en caso de exito se retorna lo enviado
        })
        .catch((error) => {
          console.error('Error when sending: ', error); //retorna el error en caso de error
        });
    }
    else if (message.body === 'Hi' && message.isGroupMsg === false) {//para el caso en que el bot no sea etiquetado
        client
          .sendText(message.from, 'Esta es una respuesta personal!')
          .then((result) => {
            console.log('Result: ', result); //en caso de exito se retorna lo enviado
          })
          .catch((error) => {
            console.error('Error when sending: ', error); //retorna el error en caso de error
          });
      }     
      if (message.body === '@51963160327 Bot dame db1') { //para el caso en que el bot sea etiquetado
        client
        .sendImage(
            message.from,
            './graficasdb1.jpg',
            'image-name',
            'Este es el dashboard db1'
          )
          .then((result) => {
            console.log('Result: ', result); //en caso de exito se retorna lo enviado
          })
          .catch((error) => {
            console.error('Error when sending: ', error); //retorna el error en caso de error
          });
      }  
      if (message.body === '@51963160327 Bot dame db2') { //para el caso en que el bot sea etiquetado
        client
        .sendImage(
            message.from,
            './graficasdb2.jpg',
            'image-name',
            'Este es el dashboard db2'
          )
          .then((result) => {
            console.log('Result: ', result); //en caso de exito se retorna lo enviado
          })
          .catch((error) => {
            console.error('Error when sending: ', error); //retorna el error en caso de error
          });
      }   
      if (message.body === '@51963160327 Bot dame db3') { //para el caso en que el bot sea etiquetado

        // esta funcion tiene el formato para poder enviar el mensaje de respuesta con la imagen solicitada
        function enviar_mensaje_db3() {    
            client
            .sendImage(
                message.from,
                './graficasdb3.jpg',
                'image-name',
                'Este es el dashboard db3'
              )
              .then((result) => {
                console.log('Result: ', result); //en caso de exito se retorna lo enviado
              })
              .catch((error) => {
                console.error('Error when sending: ', error);//retorna el error en caso de error
              });
        }
        ejecuta_script_python();     //se invoca a esta funcion para que obtenga la imagen db3  
        setTimeout(enviar_mensaje_db3, 10000); //despues de 10 segundos se invocara a la funcion enviar_mensaje_db3
        
      }  
  });
}