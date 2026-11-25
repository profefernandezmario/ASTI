EXAMEN Asistente Soporte Tecnico Informatico - 2026
======================================================

ARCHIVOS
- index.html: estructura del examen.
- styles.css: estilos adaptables a celulares y escritorio.
- script.js: preguntas, clave de respuestas, temporizador, corrección y exportación TXT.

CONFIGURACIÓN Y PUNTAJE
Pregunta 1: 5 ítems x 0,30 = 1,50 puntos.
Pregunta 2: 4 ítems x 0,50 = 2,00 puntos.
Pregunta 3: 10 ítems x 0,25 = 2,50 puntos.
Pregunta 4: 8 ítems x 0,50 = 4,00 puntos.
Total: 10 puntos. Aprobación: 8 puntos.
Tiempo máximo: 30 minutos.
Cantidad total: 27 ítems.

CONTENIDOS ACTUALIZADOS
- Pregunta 1: mantiene conceptos IDE y ATAPI como referencia histórica, y evalúa SATA, su comunicación serial, cable de datos y condiciones para hot-plug.
- Pregunta 2: conserva fuente ATX y +5VSB; reemplaza los ítems de particiones primaria/extendida MBR por ventajas de GPT y la partición del sistema EFI (ESP) en un inicio UEFI sobre GPT.
- Pregunta 3: conserva contenidos de memoria y TPM/Windows; incorpora UEFI, Secure Boot, GPT, estructuras de respaldo, ESP y conectores SATA. Se retiran las afirmaciones específicas sobre particiones lógicas/extendidas y límites MBR.
- Pregunta 4: elimina jumpers Master/Slave, tipos de partición MBR y límite de entradas MBR. Incorpora conectores SATA, GPT, límite habitual de particiones GPT en Windows y entradas de arranque UEFI/NVRAM. Se mantienen sistema de archivos, NTFS y RISC.
- No se evalúa la configuración de arranque BIOS Legacy ni la asignación Master/Slave de discos PATA.

COMPROBANTE TXT AL FINALIZAR
Al entregar el examen, ya sea voluntariamente o por agotarse el tiempo, el navegador genera y descarga un archivo .txt con:
- Apellido y nombre, comisión/turno, fecha y hora.
- Tiempo utilizado y modalidad de entrega.
- Puntaje final sobre 10 y condición (aprobado/no aprobado).
- Respuesta elegida por cada ítem, respuesta correcta y puntaje obtenido.
- Puntaje desglosado por sección.

Si la descarga automática es bloqueada por la configuración del navegador, se puede utilizar el botón “Descargar comprobante TXT” que aparece en la pantalla de resultados.

PRIVACIDAD Y FUNCIONAMIENTO
- Todo el examen se corrige en el navegador del equipo.
- El archivo TXT se crea localmente y no se envía a ningún servidor.
- No hay backend ni almacenamiento remoto de resultados. El docente debe recibir el TXT descargado por el medio que utilice habitualmente.
- El archivo se puede abrir con el Bloc de notas o cualquier editor de texto.

PARA UTILIZAR
1. Descomprimir el ZIP conservando los cuatro archivos en la misma carpeta.
2. Abrir index.html en un navegador moderno.
3. Completar los datos del alumno y presionar “Iniciar examen”.
4. Al finalizar, guardar el comprobante TXT generado.
5. Para publicar en un hosting, subir index.html, styles.css y script.js a la misma carpeta; README.txt es documentación.

NOTA DOCENTE
Las preguntas se formularon para distinguir el esquema de particionado GPT del MBR y el modo de arranque UEFI. La disponibilidad de hot-plug SATA depende de la plataforma y su configuración; por eso el ítem no lo presenta como una propiedad garantizada de todo puerto SATA. El límite de 128 particiones se refiere a discos básicos GPT administrados por Windows.


ACTUALIZACIÓN DE INICIO Y RESULTADO (VENTANA MODAL)
- Al abrir el examen, todas las preguntas y el botón “Entregar examen” permanecen bloqueados.
- El alumno solo puede responder después de presionar “Iniciar examen”. Ese botón habilita las preguntas e inicia los 30 minutos.
- No es posible entregar ni calificar el examen antes del inicio.
- Al entregar voluntariamente o agotarse el tiempo, aparece una ventana modal flotante con el puntaje final sobre 10 y la condición (aprobado/no aprobado).
- La ventana permite descargar el comprobante TXT o pasar al detalle de respuestas.
- El comprobante TXT se genera automáticamente al finalizar y puede descargarse nuevamente desde el modal o desde el detalle.
