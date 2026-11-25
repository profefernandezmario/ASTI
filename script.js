// Banco de preguntas y clave de corrección. El resultado se genera localmente en el navegador.
const exam = {
  q1: [
    {text:"¿Qué describe correctamente la interfaz IDE (Integrated Drive Electronics)?", options:[
      "Una interfaz de conexión para unidades de almacenamiento que integra la electrónica controladora en la propia unidad",
      "Un sistema de archivos utilizado exclusivamente por Windows",
      "Una tecnología de memoria RAM",
      "Un conector de alimentación para placas de video"
    ], answer:0},
    {text:"¿Qué es ATAPI (ATA Packet Interface)?", options:[
      "Una interfaz exclusiva para discos SSD",
      "Una extensión de ATA que permite enviar comandos en paquetes a dispositivos como unidades ópticas",
      "Un tipo de conector de alimentación SATA",
      "Un protocolo de comunicación de la memoria RAM"
    ], answer:1},
    {text:"¿Qué tipo de comunicación utiliza la interfaz SATA para transferir datos?", options:[
      "Comunicación paralela mediante un cable ancho",
      "Comunicación serial de alta velocidad mediante enlaces punto a punto",
      "Comunicación inalámbrica entre el disco y la placa madre",
      "Comunicación óptica mediante fibra"
    ], answer:1},
    {text:"En una conexión SATA convencional, ¿qué función cumple el cable de datos?", options:[
      "Transportar los datos entre la unidad y el controlador SATA de la placa madre",
      "Suministrar toda la energía eléctrica que necesita la unidad",
      "Reemplazar la memoria RAM durante el arranque",
      "Conectar directamente el monitor a la unidad"
    ], answer:0},
    {text:"¿Qué afirmación sobre la conexión en caliente (hot-plug) de unidades SATA es correcta?", options:[
      "Siempre funciona en cualquier puerto SATA, sin importar la configuración",
      "Depende de que el controlador, el firmware, el sistema operativo y la configuración admitan esa función",
      "Solo funciona con discos IDE mediante adaptadores",
      "Es una función exclusiva de las unidades ópticas"
    ], answer:1}
  ],
  q2: [
    {text:"¿Cuál es la función principal de una fuente de alimentación ATX?", options:[
      "Almacenar temporalmente los datos del sistema",
      "Convertir la corriente alterna de la red eléctrica en tensiones continuas utilizadas por los componentes",
      "Regular exclusivamente la velocidad del procesador",
      "Controlar el acceso del sistema operativo al disco"
    ], answer:1},
    {text:"¿Qué función cumple la línea +5VSB de una fuente ATX?", options:[
      "Alimentar exclusivamente al procesador durante su funcionamiento",
      "Proporcionar una tensión de espera cuando la fuente está conectada a la red, aunque la PC esté apagada",
      "Alimentar exclusivamente los puertos SATA de datos",
      "Regular la tensión de salida de 12 V"
    ], answer:1},
    {text:"¿Qué ventaja importante ofrece el esquema de particionado GPT frente al MBR tradicional?", options:[
      "Permite únicamente dos particiones por disco",
      "No necesita ningún tipo de firmware para iniciar un sistema operativo",
      "Admite discos de gran capacidad y una cantidad de particiones mayor que el límite clásico de MBR",
      "Solo puede utilizarse con discos conectados por USB"
    ], answer:2},
    {text:"En una instalación de Windows iniciada en modo UEFI sobre un disco GPT, ¿qué partición contiene los archivos de arranque del sistema?", options:[
      "La partición extendida",
      "La partición del sistema EFI (ESP), normalmente formateada en FAT32",
      "La partición de intercambio MBR",
      "La partición de recuperación obligatoriamente formateada en NTFS"
    ], answer:1}
  ],
  q3: [
    {text:"Los módulos DDR DIMM de escritorio incorporan una muesca de posición que ayuda a evitar una instalación incorrecta.",answer:true},
    {text:"Entre las variantes clásicas de SIMM se encuentran módulos de 30 y de 72 contactos.",answer:true},
    {text:"Windows 10 puede utilizar TPM 1.2 o TPM 2.0 para determinadas funciones; TPM 2.0 no fue un requisito universal de toda instalación convencional de Windows 10.",answer:true},
    {text:"Windows 11 establece TPM 2.0 como uno de sus requisitos mínimos de hardware.",answer:true},
    {text:"UEFI es un firmware de la plataforma que inicializa el hardware y ofrece servicios para iniciar el sistema operativo.",answer:true},
    {text:"Secure Boot (Arranque seguro) permite verificar firmas de componentes del proceso de arranque antes de ejecutarlos.",answer:true},
    {text:"GPT limita todos los discos a un máximo de cuatro particiones primarias, igual que el esquema MBR clásico.",answer:false},
    {text:"GPT mantiene estructuras de particionado de respaldo, incluida una copia secundaria de la cabecera y de la tabla de particiones.",answer:true},
    {text:"En un arranque UEFI estándar, los archivos de inicio suelen ubicarse en una partición del sistema EFI (ESP).",answer:true},
    {text:"La conexión SATA utiliza un conector de datos de 7 contactos; la alimentación se proporciona mediante un conector separado.",answer:true}
  ],
  q4: [
    {label:"A",text:"¿Cuál es la descripción correcta de los conectores habituales de una unidad SATA de 2,5 o 3,5 pulgadas?",options:[
      "Un conector de datos de 7 contactos y otro de alimentación de 15 contactos",
      "Un único conector de 40 contactos que transporta datos y alimentación",
      "Dos conectores idénticos de 4 contactos",
      "Un conector de datos USB y uno de video HDMI"
    ],answer:0},
    {label:"B",text:"El sistema de archivos tiene como función principal…",options:[
      "Controlar el funcionamiento del firmware UEFI",
      "Administrar la memoria RAM",
      "Organizar los datos y definir cómo se almacenan y recuperan en un dispositivo",
      "Regular la velocidad del procesador"
    ],answer:2},
    {label:"C",text:"¿Cuál es una característica de NTFS que ayuda a mantener la consistencia del sistema de archivos ante interrupciones inesperadas?",options:[
      "Utiliza un registro de transacciones (journaling) para proteger principalmente la consistencia de los metadatos",
      "Corrige automáticamente cualquier daño físico del disco",
      "Utiliza el firmware UEFI para recuperar todos los archivos eliminados",
      "No realiza ningún mecanismo de recuperación"
    ],answer:0},
    {label:"D",text:"Una partición de un disco es…",options:[
      "Una división lógica del espacio de almacenamiento definida en el disco",
      "Una división física que requiere cortar el dispositivo",
      "Un dispositivo de almacenamiento externo",
      "Una memoria temporal utilizada por el procesador"
    ],answer:0},
    {label:"E",text:"¿Qué identifica a GPT (GUID Partition Table)?",options:[
      "Es un esquema moderno de particionado que utiliza identificadores GUID y estructuras de partición propias",
      "Es un sistema de archivos exclusivo de Windows",
      "Es un tipo de conector físico para discos SATA",
      "Es una tecnología para aumentar la velocidad de la memoria RAM"
    ],answer:0},
    {label:"F",text:"En los discos básicos GPT administrados por Windows, ¿cuál es el límite habitual de particiones?",options:[
      "4 particiones",
      "16 particiones",
      "128 particiones",
      "No permite crear particiones"
    ],answer:2},
    {label:"G",text:"¿Qué caracteriza principalmente a la arquitectura de procesadores RISC?",options:[
      "Utiliza un conjunto reducido de instrucciones, generalmente simples y diseñadas para ejecutarse eficientemente",
      "No utiliza registros internos",
      "Siempre consume más energía que cualquier procesador CISC",
      "Solo se utiliza en computadoras de escritorio antiguas"
    ],answer:0},
    {label:"H",text:"En un equipo configurado para iniciar en modo UEFI, ¿dónde se almacenan habitualmente las entradas de arranque que administra el firmware?",options:[
      "En variables de firmware almacenadas en memoria no volátil (NVRAM)",
      "En el cable de datos SATA",
      "En la memoria caché del procesador",
      "En el sector de arranque MBR de cualquier pendrive"
    ],answer:0}
  ]
};

const letters = ["a","b","c","d","e"];
const form = document.getElementById("examForm");
let started = false, submitted = false, remaining = 1800, ticker = null, finalReport = "";

function renderChoice(targetId, key, items) {
  document.getElementById(targetId).innerHTML = items.map((item,i)=>`
    <article class="question">
      <h3>${item.label ? item.label+" — " : (i+1)+". "}${item.text}</h3>
      <div class="options">${item.options.map((opt,j)=>`
        <label class="option"><input type="radio" name="${key}${i}" value="${j}"><span><b>${letters[j]})</b> ${opt}</span></label>
      `).join("")}</div>
    </article>`).join("");
}
renderChoice("q1","q1",exam.q1);
renderChoice("q2","q2",exam.q2);
renderChoice("q4","q4",exam.q4);

document.getElementById("q3").innerHTML = exam.q3.map((item,i)=>`
  <div class="tf-row">
    <div class="tf-text"><b>${i+1}.</b> ${item.text}</div>
    <div class="tf-controls">
      <label><input type="radio" name="q3${i}" value="true"> Verdadero</label>
      <label><input type="radio" name="q3${i}" value="false"> Falso</label>
    </div>
  </div>`).join("");

function displayTime() {
  const h=String(Math.floor(remaining/3600)).padStart(2,"0");
  const m=String(Math.floor((remaining%3600)/60)).padStart(2,"0");
  const s=String(remaining%60).padStart(2,"0");
  document.getElementById("timer").textContent=`${h}:${m}:${s}`;
}
function startExam(){
  if(started || submitted) return;
  if(!document.getElementById("studentName").value.trim()){
    document.getElementById("studentName").focus();
    alert("Ingresá apellido y nombre para iniciar.");
    return;
  }
  started=true;
  document.getElementById("startBtn").disabled=true;
  document.getElementById("examQuestions").disabled=false;
  ticker=setInterval(()=>{
    remaining--; displayTime();
    if(remaining<=0){clearInterval(ticker); submitExam(true);}
  },1000);
}
document.getElementById("startBtn").addEventListener("click",startExam);
function selected(name){
  const el=form.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}
function gradeGroup(items,key,points,boolean=false){
  let score=0, detail=[];
  items.forEach((item,i)=>{
    const value=selected(`${key}${i}`);
    const ok=value!==null && value===String(item.answer);
    if(ok) score+=points;
    const chosen = value===null ? "Sin responder" : boolean
      ? (value==="true"?"Verdadero":"Falso")
      : `${letters[Number(value)]}) ${item.options[Number(value)]}`;
    const expected = boolean ? (item.answer?"Verdadero":"Falso")
      : `${letters[item.answer]}) ${item.options[item.answer]}`;
    detail.push({text:item.text,ok,answered:value!==null,chosen,expected,points:ok?points:0});
  });
  return {score,detail};
}
function fmt(n){return n.toFixed(2).replace(".",",");}
function safeFilePart(value){
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,50)||"alumno";
}
function buildReport(student,shift,total,condition,groups,auto){
  const now=new Date();
  const date=now.toLocaleString("es-AR");
  const elapsed=1800-remaining;
  const elapsedText=`${String(Math.floor(elapsed/60)).padStart(2,"0")}:${String(elapsed%60).padStart(2,"0")}`;
  const lines=[
    "EXAMEN INTEGRADOR TEÓRICO — REPARADOR DE PC 2025",
    "=================================================",
    `Alumno: ${student}`,
    `Comisión / turno: ${shift||"No indicado"}`,
    `Fecha y hora de entrega: ${date}`,
    `Tiempo utilizado: ${elapsedText} (máximo 30:00)`,
    `Modalidad de entrega: ${auto?"Automática por tiempo agotado":"Entrega voluntaria"}`,
    "",
    `PUNTAJE FINAL: ${fmt(total)} / 10,00`,
    `CONDICIÓN: ${condition.toUpperCase()}`,
    "Criterio de aprobación: 8,00 puntos",
    "",
    "RESPUESTAS ELEGIDAS",
    "------------------"
  ];
  groups.forEach(group=>{
    lines.push("",group.title);
    group.detail.forEach((item,index)=>{
      lines.push(`${index+1}. ${item.text}`);
      lines.push(`   Elegida: ${item.chosen}`);
      lines.push(`   Correcta: ${item.expected}`);
      lines.push(`   Resultado: ${item.ok?"Correcta":item.answered?"Incorrecta":"Sin responder"} | Puntaje: ${fmt(item.points)} / ${fmt(group.itemPoints)}`);
    });
  });
  lines.push("","PUNTAJE POR SECCIÓN", "-------------------");
  groups.forEach(group=>lines.push(`${group.title}: ${fmt(group.score)} / ${fmt(group.max)}`));
  lines.push("", "Fin del comprobante.");
  return lines.join("\r\n");
}
function downloadReport(){
  if(!finalReport) return;
  const blob=new Blob(["\uFEFF",finalReport],{type:"text/plain;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  const student=document.getElementById("studentName").value.trim();
  a.href=url;
  a.download=`resultado_examen_${safeFilePart(student)}_${new Date().toISOString().slice(0,10)}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function submitExam(auto=false){
  if(submitted)return;
  if(!started) return;
  if(!auto && !document.getElementById("studentName").value.trim()) return;
  submitted=true;
  if(ticker) clearInterval(ticker);
  form.querySelectorAll("input,select,textarea,button").forEach(el=>el.disabled=true);
  const g1=gradeGroup(exam.q1,"q1",.30);
  const g2=gradeGroup(exam.q2,"q2",.50);
  const g3=gradeGroup(exam.q3,"q3",.25,true);
  const g4=gradeGroup(exam.q4,"q4",.50);
  const groups=[
    {title:"Pregunta 1 — Opción múltiple",...g1,itemPoints:.30,max:1.50},
    {title:"Pregunta 2 — Opción múltiple",...g2,itemPoints:.50,max:2.00},
    {title:"Pregunta 3 — Verdadero o falso",...g3,itemPoints:.25,max:2.50},
    {title:"Pregunta 4 — Opción múltiple",...g4,itemPoints:.50,max:4.00}
  ];
  const total=groups.reduce((sum,g)=>sum+g.score,0);
  const condition=total>=8?"Aprobado":"No aprobado";
  const student=document.getElementById("studentName").value.trim();
  const shift=document.getElementById("shift").value;
  document.getElementById("resultStudent").textContent=`${student} · ${shift||"Turno no indicado"}`;
  document.getElementById("autoScore").textContent=`${fmt(total)} / 10,00`;
  document.getElementById("conditionScore").textContent=condition;
  document.getElementById("fullScore").textContent=`${fmt(total)} / 10,00`;
  document.getElementById("statusText").textContent=total>=8
    ?"APROBADO: alcanzaste el mínimo de 8 puntos."
    :"NO APROBADO: no alcanzaste el mínimo de 8 puntos.";
  document.getElementById("modalScore").innerHTML=`${fmt(total)} <span>/ 10,00</span>`;
  const modalCondition=document.getElementById("modalCondition");
  modalCondition.textContent=condition.toUpperCase();
  modalCondition.classList.toggle("approved",total>=8);
  modalCondition.classList.toggle("not-approved",total<8);
  const all=groups.flatMap((g)=>g.detail.map((x,i)=>({...x,section:g.title,n:i+1})));
  document.getElementById("review").innerHTML=`<h3>Detalle de respuestas</h3>`+all.map(x=>`
    <div class="review-item"><strong class="${x.ok?"correct":"incorrect"}">${x.section} · ítem ${x.n}: ${x.ok?"Correcta":x.answered?"Incorrecta":"Sin responder"}</strong>
    <span>${x.text}</span><br><span class="muted">Elegida: ${x.chosen} · Respuesta correcta: ${x.expected}</span></div>`).join("");
  finalReport=buildReport(student,shift,total,condition,groups,auto);
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("scoreModal").classList.remove("hidden");
  document.getElementById("closeModalBtn").focus();
  downloadReport();
}
form.addEventListener("submit",e=>{
  e.preventDefault();
  if(!started){
    alert("Primero tenés que presionar “Iniciar examen”. Las preguntas todavía están bloqueadas.");
    return;
  }
  if(confirm("¿Querés entregar el examen? No podrás modificar las respuestas.")) submitExam(false);
});
document.getElementById("printBtn").addEventListener("click",()=>window.print());
document.getElementById("downloadTxtBtn").addEventListener("click",downloadReport);
document.getElementById("modalDownloadBtn").addEventListener("click",downloadReport);
function closeScoreModal(){
  document.getElementById("scoreModal").classList.add("hidden");
  document.getElementById("results").scrollIntoView({behavior:"smooth"});
}
document.getElementById("closeModalBtn").addEventListener("click",closeScoreModal);
document.getElementById("modalDetailsBtn").addEventListener("click",closeScoreModal);
document.getElementById("scoreModal").addEventListener("click",e=>{
  if(e.target.id==="scoreModal") closeScoreModal();
});
document.getElementById("restartBtn").addEventListener("click",()=>window.location.reload());
displayTime();
