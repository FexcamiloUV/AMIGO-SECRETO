<h1> README </h1>

Funcionalidades

Agregar amigos:

  - El usuario escribe un nombre en un campo de texto.

  - Si el campo está vacío, aparece una alerta solicitando un nombre.

  - El nombre se agrega a un array y también se muestra en una lista HTML ```(<ul> o <ol>)```.

  - El campo de texto se limpia automáticamente después de agregar.

Sortear amigos

  -  Selecciona aleatoriamente un nombre de la lista.

  -  Muestra el nombre sorteado en un elemento de resultado.

  -  Elimina al ganador de la lista y de la interfaz visual.

  -  Si hay 1 o 0 amigos, no permite el sorteo y muestra una alerta.

Limpiar campo de entrada

  - La función ```limpiarCaja()``` se encarga de reiniciar el campo de texto después de agregar un nombre.

Funciones:

  -  ```agregarAmigo()``` → Valida y agrega un amigo a la lista y al HTML.

  -  ```sortearAmigos()``` → Elige un ganador aleatorio, lo muestra y lo elimina de la lista.

  -  ```limpiarCaja()``` → Vacía el campo de texto para un nuevo ingreso.
