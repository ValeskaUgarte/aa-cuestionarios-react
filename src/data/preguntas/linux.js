const preguntas_linux = [

  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "Richard Stallman inició el Proyecto GNU en los años 80 para crear un sistema operativo similar a UNIX. En 1991, Linus Torvalds creó el kernel Linux.",
    "q": "¿Cuál fue la principal motivación de Linus Torvalds para crear Linux?",
    "extra": "",
    "opts": [
      "Crear un sistema operativo de pago con soporte técnico profesional",
      "Desarrollar un sistema que compita directamente con Windows",
      "Crear un sistema operativo que se comporte como UNIX y ejecute programas GNU",
      "Reemplazar completamente el sistema Minix de Andrew Tanenbaum"
    ],
    "ans": 2,
    "exp": "Linus Torvalds, estudiante de la Universidad de Helsinki, se inspiró en Minix y planteó crear un sistema operativo que se comportara como UNIX y ejecutara programas GNU."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "Linux se distribuye bajo la licencia GNU General Public License (GPL) que permite libre distribución y modificación.",
    "q": "¿Cuáles son las dos características principales que diferencian a Linux de otros sistemas operativos?",
    "extra": "",
    "opts": [
      "Es gratuito y tiene soporte técnico 24/7",
      "Es libre (sin pago de licencias) y viene acompañado del código fuente",
      "Es más rápido y tiene mejor interfaz gráfica",
      "Es compatible con Windows y Mac"
    ],
    "ans": 1,
    "exp": "Linux es libre (no requiere pago de licencia) y viene acompañado del código fuente, permitiendo su estudio y modificación."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "Durante la instalación de Red Hat Enterprise Linux en VirtualBox, se deben configurar los recursos de hardware de la máquina virtual.",
    "q": "¿Cuáles son las especificaciones de hardware recomendadas para la máquina virtual en VirtualBox?",
    "extra": "",
    "opts": [
      "2 GB de RAM, 1 CPU, 20 GB de disco duro",
      "4 GB de RAM, 2 CPU, 30 GB de disco duro",
      "8 GB de RAM, 4 CPU, 50 GB de disco duro",
      "16 GB de RAM, 8 CPU, 100 GB de disco duro"
    ],
    "ans": 1,
    "exp": "Según los pasos de instalación, se deben configurar 4 GB de RAM, 2 CPU y un disco duro de 30 GB."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "Después de crear la máquina virtual, se inicia y aparece el menú de arranque del ISO de Red Hat Enterprise Linux 10.0.",
    "q": "¿Qué opción se debe seleccionar al iniciar la instalación desde el ISO?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#00ff00;padding:15px;font-family:monospace;border-radius:5px;">
      <b>Red Hat Enterprise Linux 10.0</b><br><br>
      <span style="color:#ffff00;">▶ Install Red Hat Enterprise Linux 10.0</span><br>
      <span style="color:#ffff00;">▶ Test this media & install Red Hat Enterprise Linux 10.0</span><br>
      <span style="color:#ffff00;">▶ Rescue a Red Hat Enterprise Linux system</span><br>
      <span style="color:#ffff00;">▶ Run a memory test</span><br><br>
      Tab - switch between elements | Enter - select
      </div>
      `,
    "opts": [
      "Test this media & install Red Hat Enterprise Linux 10.0",
      "Install Red Hat Enterprise Linux 10.0",
      "Rescue a Red Hat Enterprise Linux system",
      "Run a memory test"
    ],
    "ans": 0,
    "exp": "Se debe seleccionar 'Test this media & install Red Hat Enterprise Linux 10.0' para iniciar el proceso de instalación con verificación del medio."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "Durante la instalación, aparece la pantalla de configuración de idioma y distribución de teclado.",
    "q": "¿Qué configuraciones de idioma se deben seleccionar durante la instalación de Red Hat según los pasos?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>📋 LOCALIZATION</b><br><br>
      <span style="color:#00ffff;">▼ Language</span>  <span style="color:#ffa500;">[ Español Chile ]</span><br>
      <span style="color:#00ffff;">▼ Keyboard</span>  <span style="color:#ffa500;">[ Castellano ]</span><br>
      <span style="color:#00ffff;">▼ Time & Date</span>  <span style="color:#ffa500;">[ America/Santiago ]</span><br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Inglés Estados Unidos y teclado en inglés",
      "Español Chile y teclado en castellano",
      "Español España y teclado en español",
      "Portugués Brasil y teclado en portugués"
    ],
    "ans": 1,
    "exp": "Se debe seleccionar el idioma Español Chile y el teclado en castellano como se muestra en la interfaz."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "En la instalación se debe configurar el usuario y la contraseña de root, y también crear un usuario administrador.",
    "q": "¿Qué pasos se deben seguir para la creación del usuario durante la instalación de Red Hat?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>👤 USER SETTINGS</b><br><br>
      <span style="color:#00ffff;">▼ Root Password</span>  <span style="color:#ffa500;">[ ●●●●●●● ]</span><br>
      <span style="color:#00ffff;">▼ User Creation</span><br>
      &nbsp;&nbsp;Full name: <input placeholder="Nombre Apellido" style="background:#333;color:#fff;border:1px solid #555;"><br>
      &nbsp;&nbsp;Username: <input placeholder="usuario" style="background:#333;color:#fff;border:1px solid #555;"><br>
      &nbsp;&nbsp;Password: <input placeholder="●●●●●●●●" style="background:#333;color:#fff;border:1px solid #555;"><br>
      &nbsp;&nbsp;☑ <span style="color:#ffa500;">Make this user administrator</span><br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Crear solo la contraseña de root y omitir la creación del usuario",
      "Crear el usuario con su nombre y apellido y marcarlo como administrador",
      "Crear el usuario sin contraseña",
      "Crear el usuario solo después de finalizar la instalación"
    ],
    "ans": 1,
    "exp": "Se debe crear el usuario con nombre y apellido, y marcarlo como administrador con la opción 'Make this user administrator'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "En la sección 'Selección de Software' del instalador de Red Hat, se deben elegir los paquetes y roles para el servidor.",
    "q": "¿Qué opciones de software se deben marcar durante la instalación de Red Hat según los pasos?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>📦 SOFTWARE SELECTION</b><br><br>
      <span style="color:#ffa500;">Base Environment:</span><br>
      ☑ <span style="color:#00ff00;">Server with GUI</span> - Servidor integrado y fácil de administrar con interfaz gráfica<br><br>
      <span style="color:#ffa500;">Additional software for selected environment:</span><br>
      ☑ <span style="color:#00ff00;">DNS Name Server</span><br>
      ☑ <span style="color:#00ff00;">FTP Server</span><br>
      ☑ <span style="color:#00ff00;">Mail Server</span><br>
      ☐ Web Server<br>
      ☐ Database Server<br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Servidor con GUI, Servidor de nombres DNS, Servidor FTP y Servidores de correo",
      "Solo Servidor con GUI y Servidor FTP",
      "Servidor con GUI, Servidor web y Servidor de base de datos",
      "Todas las opciones disponibles"
    ],
    "ans": 0,
    "exp": "Se deben seleccionar 'Server with GUI' como base environment, y como adicionales: DNS Name Server, FTP Server y Mail Server."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "KDUMP es una característica que aparece en la instalación de Red Hat para diagnóstico de fallos.",
    "q": "¿Qué es KDUMP y para qué sirve en la instalación de Red Hat?",
    "extra": "",
    "opts": [
      "Un sistema de copia de seguridad de archivos",
      "Un mecanismo de volcado de memoria de daños de kernel para troubleshooting",
      "Un sistema de monitoreo de red",
      "Un sistema de gestión de paquetes"
    ],
    "ans": 1,
    "exp": "KDUMP es un mecanismo que captura información del sistema en caso de fallo del kernel, sirviendo para troubleshooting posterior."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Durante la instalación, en la sección 'Network & Hostname' se configura la conectividad de red del sistema.",
    "q": "¿Cómo se configura la red durante la instalación de Red Hat?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>🌐 NETWORK & HOSTNAME</b><br><br>
      Interface: <span style="color:#00ffff;">enp0s3</span><br>
      <span style="color:#ffa500;">Status:</span> <span style="color:#ff4444;">● Disconnected</span><br>
      <span style="color:#ffa500;">Hostname:</span> <input placeholder="localhost.localdomain" style="background:#333;color:#fff;border:1px solid #555;"><br><br>
      <span style="color:#ffa500;">IPv4 Settings:</span><br>
      Method: <select style="background:#333;color:#fff;border:1px solid #555;"><option>DHCP</option><option>Manual</option></select><br><br>
      <span style="color:#888;">[Configure] [Hecho]</span>
      </div>
      `,
    "opts": [
      "Las interfaces vienen habilitadas por defecto con IP estática",
      "Las interfaces aparecen deshabilitadas con DHCP por defecto, y se pueden configurar IPs estáticas pulsando Configurar",
      "Se debe configurar la red después de la instalación",
      "No se requiere configuración de red durante la instalación"
    ],
    "ans": 1,
    "exp": "Las interfaces aparecen deshabilitadas con DHCP. Para establecer IPs estáticas o modificar el Hostname, se debe pulsar 'Configure'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Después de instalar Red Hat, se debe registrar el sistema para recibir actualizaciones desde la terminal.",
    "q": "¿Qué comando se utiliza para registrar el sistema con Red Hat Subscription Manager?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#00ff00;padding:15px;font-family:monospace;border-radius:5px;">
      [root@localhost ~]# <input placeholder="Comando de registro" style="background:#333;color:#00ff00;border:1px solid #555;width:400px;"><br>
      <span style="color:#ffa500;">Enter username:</span> <input placeholder="correo@redhat.com" style="background:#333;color:#fff;border:1px solid #555;"><br>
      <span style="color:#ffa500;">Enter password:</span> <input placeholder="●●●●●●●●" style="background:#333;color:#fff;border:1px solid #555;"><br><br>
      <span style="color:#00ffff;">The system has been registered with ID: 12345678-90ab-cdef-1234-567890abcdef</span>
      </div>
      `,
    "opts": [
      "subscription-manager register --username usuario --password contraseña",
      "register --username usuario --password contraseña",
      "rhsm-register --username usuario --password contraseña",
      "redhat-register --username usuario --password contraseña"
    ],
    "ans": 0,
    "exp": "El comando correcto es 'subscription-manager register --username usuario --password contraseña' usando las credenciales de Red Hat."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "Al iniciar sesión por primera vez en el sistema instalado, aparece la pantalla de bienvenida de Red Hat.",
    "q": "¿Cómo se procede al iniciar sesión en Red Hat Enterprise Linux por primera vez?",
    "extra": "",
    "opts": [
      "Se selecciona 'Empezar tour' y luego se registra el sistema",
      "Se pulsa 'No gracias' en la bienvenida y luego se registra el sistema para actualizaciones",
      "Se omite completamente el registro del sistema",
      "Se configura inmediatamente el escritorio"
    ],
    "ans": 1,
    "exp": "Se debe pulsar 'No gracias' en la pantalla de bienvenida y luego registrar el sistema para recibir actualizaciones."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El nombre de la máquina virtual en VirtualBox debe seguir un formato específico para identificarla correctamente.",
    "q": "¿Qué formato debe seguir el nombre de la máquina virtual en VirtualBox?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>💻 VirtualBox - Create Virtual Machine</b><br><br>
      <span style="color:#ffa500;">Name:</span> <input placeholder="RARSREDHAT" style="background:#333;color:#fff;border:1px solid #555;"><br>
      <span style="color:#ffa500;">Folder:</span> /home/user/VirtualBox VMs<br>
      <span style="color:#ffa500;">ISO Image:</span> rhel-10.0-x86_64-dvd.iso<br><br>
      <span style="color:#ffa500;">ⓘ El nombre debe ser la inicial del nombre y apellido seguidas de REDHAT</span>
      </div>
      `,
    "opts": [
      "REDHAT + números",
      "Iniciales de nombre y apellido + REDHAT",
      "SOLO REDHAT",
      "Nombre completo + REDHAT"
    ],
    "ans": 1,
    "exp": "El nombre debe ser la inicial del nombre y apellido seguidas de REDHAT. Ejemplo: RARSREDHAT (R=nombre, ARS=apellidos)."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "Desde la terminal se puede verificar la versión del sistema operativo instalado.",
    "q": "¿Qué comando se utiliza para verificar la versión de Red Hat instalada?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#00ff00;padding:15px;font-family:monospace;border-radius:5px;">
      [rromero@localhost ~]$ <input placeholder="Comando para ver versión" style="background:#333;color:#00ff00;border:1px solid #555;width:300px;"><br>
      <span style="color:#00ffff;">Red Hat Enterprise Linux release 10.0 (Plow)</span>
      </div>
      `,
    "opts": [
      "uname -r",
      "version",
      "cat /etc/redhat-release",
      "system-info"
    ],
    "ans": 2,
    "exp": "El comando 'cat /etc/redhat-release' muestra la versión de Red Hat instalada, como se ve en la terminal."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "La política de seguridad (Security Policy) se puede configurar durante la instalación para entornos específicos.",
    "q": "¿Para qué sirve la configuración de Security Policy en la instalación de Red Hat?",
    "extra": `
      <div class="terminal-box" style="background:#1a1a1a;color:#ffffff;padding:15px;font-family:monospace;border-radius:5px;">
      <b>🔒 SECURITY POLICY</b><br><br>
      <span style="color:#ffa500;">Security Profile:</span><br>
      ☐ PCI-DSS (Payment Card Industry)<br>
      ☐ OSPP (Operating System Protection Profile)<br><br>
      <span style="color:#888;">⚠️ Si el sistema va a formar parte de un entorno PCI u OSPP,<br>aquí se puede habilitar una política de seguridad específica.</span><br><br>
      <span style="color:#888;">[Hecho]</span>
      </div>
      `,
    "opts": [
      "Para configurar el firewall del sistema",
      "Para habilitar una política de seguridad específica si el sistema forma parte de un entorno PCI u OSPP",
      "Para instalar antivirus",
      "Para configurar contraseñas complejas"
    ],
    "ans": 1,
    "exp": "La política de seguridad permite habilitar una política específica en caso de que el sistema forme parte de un entorno PCI u OSPP."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "Después de completar todos los pasos de instalación y registro, se debe realizar un paso final para preservar el estado.",
    "q": "¿Cuál es el último paso recomendado después de completar la instalación y registro del sistema?",
    "extra": "",
    "opts": [
      "Apagar la máquina inmediatamente",
      "Guardar la máquina virtual",
      "Eliminar los archivos de instalación",
      "Crear un punto de restauración"
    ],
    "ans": 1,
    "exp": "Después de completar la instalación y el registro, se debe guardar la máquina virtual para preservar el estado."
  },


  //COMANDOS BASICOS CON IMAGENES SOBRE PPT DEL PROFESOR

  //Organigrama de la empresa
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "En Linux, el símbolo del prompt indica el nivel de privilegios del usuario actual.",
    "q": "¿Qué diferencia al símbolo $ del símbolo # en la terminal de Linux?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Organigrama de la empresa:<br><img src='/img/diagrama_empresa.jpg' alt='Organigrama' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Esta imagen muestra la estructura jerárquica de la empresa con los usuarios Jimena, Clara y Valeria. Observa cómo se relacionan los cargos para entender qué acceso debe tener cada usuario a las carpetas.</span></div>",
    "opts": [
      "$ indica usuario root y # indica usuario normal",
      "$ indica usuario normal y # indica usuario root o superusuario",
      "Ambos indican usuario root",
      "Ambos indican usuario normal"
    ],
    "ans": 1,
    "exp": "El símbolo $ se utiliza para indicar que estamos logueados con un usuario normal, mientras que # indica que estamos con privilegios de administrador o root."
  },

  //Estructura de Carpetas Compartidas
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'ls' lista el contenido de un directorio con diferentes opciones.",
    "q": "¿Qué muestra el comando 'ls -l' al listar el contenido de un directorio?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Estructura de Carpetas Compartidas:<br><img src='/img/linux_carpetas_compartidas.jpg' alt='Estructura de Carpetas' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Esta imagen muestra cómo deben quedar organizadas las carpetas: CarpetasCompartidas → AltaGerencia, Estrategias, Tacticas. Además, dentro de AltaGerencia están InformeRendimiento y ReporteSeguridad, y dentro de Estrategias están Mercadeo y Nvosprod.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost Carpetascompartidas]#</div></div>",
    "opts": [
      "Solo los nombres de los archivos",
      "Permisos, propietario, grupo, tamaño y fecha de modificación",
      "Solo el tamaño de los archivos",
      "La fecha de creación de los archivos"
    ],
    "ans": 1,
    "exp": "El comando 'ls -l' muestra los permisos, número de enlaces, propietario, grupo, tamaño en bytes, fecha/hora de modificación y nombre del archivo o directorio."
  },

  //Comando ls y ls

  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'ls' puede listar el contenido de cualquier directorio especificando la ruta.",
    "q": "¿Qué muestra el comando 'ls /' en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost ~]# ls\nanaconda-ks.cfg\n[root@localhost ~]# ls /\nafs boot etc lib media opt root sbin sys usr\nbin dev home lib64 mnt proc run srv tmp var\n[root@localhost ~]#</div>",
    "opts": [
      "Lista el contenido del directorio raíz del sistema",
      "Lista el contenido del directorio home",
      "Lista el contenido del directorio actual",
      "Muestra una lista de todos los usuarios del sistema"
    ],
    "ans": 0,
    "exp": "El comando 'ls /' lista el contenido del directorio raíz del sistema, mostrando todas las carpetas principales como bin, dev, etc, home, usr, var, entre otras."
  },

  //El comando 'cd'
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'pwd' muestra la ruta actual del directorio de trabajo.",
    "q": "¿Qué función cumple el comando 'pwd' en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost ~]# pwd\n/root\n[root@localhost ~]# cd /home\n[root@localhost home]# pwd\n/home\n[root@localhost home]#</div>",
    "opts": [
      "Lista los archivos del directorio",
      "Cambia de directorio",
      "Muestra la ruta del directorio de trabajo actual",
      "Crea un nuevo directorio"
    ],
    "ans": 2,
    "exp": "El comando 'pwd' (print working directory) muestra la ruta completa del directorio de trabajo actual donde te encuentras."
  },

  //El comando 'useradd'
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'useradd' se utiliza para crear nuevos usuarios en el sistema.",
    "q": "¿Qué comando se utiliza para crear un nuevo usuario llamado 'Jimena' en Linux?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Organigrama de la empresa:<br><img src='/img/diagrama_empresa.jpg' alt='Organigrama' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Jimena es la CEO y tiene acceso a todas las carpetas.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# passwd Jimena\nCambiando la contraseña del usuario Jimena.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exit\n[root@localhost ~]#</div></div>",
    "opts": [
      "adduser Jimena",
      "useradd Jimena",
      "createuser Jimena",
      "newuser Jimena"
    ],
    "ans": 1,
    "exp": "El comando 'useradd' seguido del nombre de usuario (useradd Jimena) crea un nuevo usuario. Luego se debe usar 'passwd' para asignar una contraseña."
  },

  //Comando passwd
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'passwd' se utiliza para cambiar o asignar contraseñas a usuarios.",
    "q": "¿Qué comando se utiliza para asignar una contraseña al usuario 'Clara'?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Organigrama de la empresa:<br><img src='/img/diagrama_empresa.jpg' alt='Organigrama' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Clara es Directora de Cuentas y tiene acceso a la carpeta AltaGerencia.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Clara\n[root@localhost ~]# passwd Clara\nCambiando la contraseña del usuario Clara.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exit\n[root@localhost ~]#</div></div>",
    "opts": [
      "passwd Clara",
      "password Clara",
      "changepwd Clara",
      "setpass Clara"
    ],
    "ans": 0,
    "exp": "El comando 'passwd' seguido del nombre de usuario (passwd Clara) permite asignar o cambiar la contraseña del usuario especificado."
  },

  //Comando mkdir
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'mkdir' permite crear directorios en el sistema.",
    "q": "¿Qué comando se utiliza para crear un directorio llamado 'AltaGerencia'?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Estructura de Carpetas Compartidas:<br><img src='/img/linux_carpetas_compartidas.jpg' alt='Estructura de Carpetas' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Esta imagen muestra la estructura completa de carpetas que debes crear. Observa que la carpeta principal es 'CarpetasCompartidas' y dentro están 'AltaGerencia', 'Estrategias' y 'Tacticas'.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /home/Jimena\n[root@localhost Jimena]# mkdir Carpetascompartidas\n[root@localhost Jimena]# ls\nCarpetascompartidas\n[root@localhost Jimena]# cd Carpetascompartidas\n[root@localhost Carpetascompartidas]# mkdir AltaGerencia\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia\n[root@localhost Carpetascompartidas]#</div></div>",
    "opts": [
      "create AltaGerencia",
      "mkdir AltaGerencia",
      "newdir AltaGerencia",
      "dir AltaGerencia"
    ],
    "ans": 1,
    "exp": "El comando 'mkdir' seguido del nombre del directorio (mkdir AltaGerencia) crea un nuevo directorio en la ubicación actual."
  },

  //Comando mkdir
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'mkdir' permite crear múltiples directorios a la vez.",
    "q": "¿Cómo se crean múltiples directorios de una sola vez con 'mkdir'?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Estructura de Carpetas Compartidas:<br><img src='/img/linux_carpetas_compartidas2.jpg' alt='Estructura de Carpetas' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Los tres directorios internos que debes crear: AltaGerencia, Estrategias y Tacticas.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /home/Jimena/Carpetascompartidas\n[root@localhost Carpetascompartidas]# mkdir AltaGerencia Estrategias Tacticas\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia  Estrategias  Tacticas\n[root@localhost Carpetascompartidas]#</div></div>",
    "opts": [
      "mkdir dir1 dir2 dir3",
      "mkdir {dir1,dir2,dir3}",
      "mkdir dir1; mkdir dir2; mkdir dir3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se pueden crear múltiples directorios de varias formas: 'mkdir dir1 dir2 dir3', 'mkdir {dir1,dir2,dir3}', o usando ';' para ejecutar múltiples comandos."
  },

  //COMANDO TOUCH

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'touch' permite crear archivos vacíos en Linux.",
    "q": "¿Cómo se crean varios archivos de manera simultánea en un directorio?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Creación de archivos con touch y ls:<br><img src='/img/linux_carpetas_compartidas.jpg' alt='touch y ls' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Esta imagen muestra el comando 'touch {2025,2026,Trazabilidad}.txt' para crear múltiples archivos a la vez. También muestra cómo listarlos con 'ls'. Observa que si no pones espacio después de las comas, el sistema lo toma como un solo archivo.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# touch {2025,2026,Trazabilidad}.txt\n[root@localhost Carpetascompartidas]# ls\n2025.txt 2026.txt Trazabilidad.txt AltaGerencia Estrategias Tacticas\n[root@localhost Carpetascompartidas]#</div></div>",
    "opts": [
      "touch archivo1 archivo2 archivo3",
      "touch {archivo1,archivo2,archivo3}.txt",
      "touch archivo1; touch archivo2; touch archivo3",
      "Todas las anteriores"
    ],
    "ans": 1,
    "exp": "El comando 'touch {arch1,arch2,arch3}.txt' permite crear múltiples archivos de manera simultánea utilizando llaves y el sufijo común."
  },

  // Comando rm

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'rm' elimina archivos y directorios, y requiere flags específicos para directorios con contenido.",
    "q": "¿Qué comando se utiliza para eliminar un directorio con todo su contenido?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Estructura de Carpetas Compartidas:<br><img src='/img/linux_carpetas_compartidas.jpg' alt='Estructura de Carpetas' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Esta imagen muestra la estructura de carpetas que debes tener. Si usas 'rm -rf Tacticas', eliminas esa carpeta y todo su contenido. Luego debes volver a crearla con 'mkdir Tacticas' para mantener la estructura completa.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# rm -rf Tacticas\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia Estrategias\n[root@localhost Carpetascompartidas]# mkdir Tacticas\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia Estrategias Tacticas\n[root@localhost Carpetascompartidas]#</div></div>",
    "opts": [
      "rm -r directorio",
      "rm -rf directorio",
      "rmdir directorio",
      "del directorio"
    ],
    "ans": 1,
    "exp": "El comando 'rm -rf directorio' elimina el directorio y todo su contenido de forma recursiva y forzada. '-r' es recursivo y '-f' es forzado."
  },


  //Patrones de busqueda
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Los patrones de búsqueda con ls permiten listar archivos que coinciden con ciertos caracteres.",
    "q": "¿Qué comando lista los archivos que comienzan con un carácter alfabético en Linux?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Creación de archivos con touch y ls:<br><img src='/img/linux_carpetas_compartidas.jpg' alt='touch y ls' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>Esta imagen muestra cómo listar archivos que comienzan con letras usando 'ls [[:alpha:]]*' y archivos que comienzan con números usando 'ls [[:digit:]]*'. Observa que 'Trazabilidad' comienza con letra y '2025', '2026' comienzan con números.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# ls [[:alpha:]]*\nAltaGerencia Estrategias Tacticas Trazabilidad.txt\n[root@localhost Carpetascompartidas]# ls [[:digit:]]*\n2025.txt 2026.txt\n[root@localhost Carpetascompartidas]#</div></div>",
    "opts": [
      "ls [[:digit:]]*",
      "ls [[:alpha:]]*",
      "ls [[:alnum:]]*",
      "ls [[:space:]]*"
    ],
    "ans": 1,
    "exp": "El comando 'ls [[:alpha:]]*' lista los archivos que comienzan con un carácter alfabético (letras). '[[:digit:]]*' lista los que comienzan con números."
  },

  //Comando cat
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cat' permite concatenar archivos y mostrar su contenido en pantalla.",
    "q": "¿Qué función cumple el comando 'cat' en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>CAT(1)    User Commands    CAT(1)\n\nNAME\n    cat - concatenate files and print on the standard output\n\nSYNOPSIS\n    cat [OPTION]... [FILE]...\n\nDESCRIPTION\n    Concatenate FILE(s) to standard output.\n\n    With no FILE, or when FILE is -, read standard input.\n\n    -A, --show-all\n    equivalent to -OET\n\n    -b, --number-nonblank\n    number nonempty output lines, overrides -n\n\n    -E, --show-ends\n    display $ at end of each line\n\n    -n, --number\n    number all output lines\n\n    -s, --squeeze-blank\n    suppress repeated empty output lines\n\n    -T, --show-tabs\n    display TAB characters as ^I\n\n[root@localhost ~]#</div>",
    "opts": [
      "Copiar archivos de un lugar a otro",
      "Concatenar archivos y mostrar su contenido en pantalla",
      "Eliminar archivos del sistema",
      "Mover archivos entre directorios"
    ],
    "ans": 1,
    "exp": "El comando 'cat' (concatenate) lee uno o más archivos y muestra su contenido en la salida estándar (pantalla). También puede concatenar varios archivos."
  },

  //Comando cp
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' con la opción '-a' (archive) preserva atributos y copia recursivamente.",
    "q": "¿Qué hace la opción '-a' del comando 'cp'?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:15px;border-radius:8px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;'><div style='background:#2d2d2d;color:#ccc;padding:5px 10px;margin:-15px -15px 10px -15px;border-radius:8px 8px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:12px;'>Terminal - root@localhost</div>CP(1)    User Commands    CP(1)\n\nNAME\n    cp - copy files and directories\n\nSYNOPSIS\n    cp [OPTION]... [-T] SOURCE DEST\n    cp [OPTION]... SOURCE... DIRECTORY\n    cp [OPTION]... -t DIRECTORY SOURCE...\n\nDESCRIPTION\n    Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.\n\n    Mandatory arguments to long options are mandatory for short options too.\n\n    -a, --archive\n    same as -dR --preserve=all\n\n    -r, --recursive\n    copy directories recursively\n\n    -i, --interactive\n    prompt before overwrite\n\n[root@localhost ~]#</div>",
    "opts": [
      "Copia solo el nombre del archivo",
      "Copia de forma recursiva preservando todos los atributos",
      "Elimina el archivo origen después de copiar",
      "Muestra ayuda sobre el comando cp"
    ],
    "ans": 1,
    "exp": "La opción '-a' (archive) es equivalente a '-dR --preserve=all', lo que significa que copia recursivamente preservando todos los atributos del archivo."
  },

  //Comando cp
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' permite copiar archivos y directorios en Linux.",
    "q": "¿Cuál es la sintaxis correcta para copiar un archivo a un directorio en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cp archivo.txt /home/usuario/\n[root@localhost ~]#</div>",
    "opts": [
      "cp origen destino",
      "cp origen directorio",
      "cp -r origen directorio",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "El comando 'cp' tiene varias sintaxis: 'cp SOURCE DEST' para copiar a un archivo, 'cp SOURCE DIRECTORY' para copiar a un directorio, y 'cp -r SOURCE DIRECTORY' para copiar directorios recursivamente."
  },

  //ls -l
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "En Linux, los archivos y directorios tienen permisos específicos para propietario, grupo y otros.",
    "q": "En la salida de 'ls -l', ¿qué representa la primera letra de cada línea como 'd' o '-'?",
    "extra": "<div style='text-align:center;'>IMAGEN DE REFERENCIA - Estructura de Carpetas Compartidas:<br><img src='/img/linux_carpetas_compartidas.jpg' alt='Estructura de Carpetas' style='max-width:60%;border-radius:5px;display:block;margin:0 auto;'><br><span style='color:#555;'>En la imagen de 'ls -l', observa que la primera letra de cada línea es 'd' para directorios (AltaGerencia, Estrategias, Tacticas). Los archivos regulares tienen '-' como primera letra.</span><br><br><div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>drwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\n-rw-r--r--. 1 root root 0 nov 16 16:00 archivo.txt\n[root@localhost Carpetascompartidas]#</div></div>",
    "opts": [
      "El tamaño del archivo",
      "El propietario del archivo",
      "Si es un directorio (d) o un archivo regular (-)",
      "La fecha de modificación"
    ],
    "ans": 2,
    "exp": "En 'ls -l', la primera letra indica el tipo: 'd' para directorio, '-' para archivo regular, 'l' para enlace simbólico, entre otros."
  },

  //POSIBLES PREGUNTAS DE LA PRUEBA
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los usuarios Jimena, Clara y Valeria para la estructura de carpetas compartidas.",
    "q": "¿Qué comando se utiliza para crear un nuevo usuario en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# passwd Jimena\nCambiando la contraseña del usuario Jimena.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exit\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Jimena",
      "adduser Jimena",
      "newuser Jimena",
      "createuser Jimena"
    ],
    "ans": 0,
    "exp": "El comando 'useradd' seguido del nombre de usuario crea un nuevo usuario en el sistema."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear la estructura de carpetas: CarpetasCompartidas → AltaGerencia, Estrategias, Tacticas.",
    "q": "¿Qué comando se utiliza para crear un directorio llamado 'AltaGerencia' dentro de CarpetasCompartidas?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /home/Jimena\n[root@localhost Jimena]# mkdir Carpetascompartidas\n[root@localhost Jimena]# cd Carpetascompartidas\n[root@localhost Carpetascompartidas]# mkdir AltaGerencia\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "mkdir AltaGerencia",
      "create AltaGerencia",
      "newdir AltaGerencia",
      "dir AltaGerencia"
    ],
    "ans": 0,
    "exp": "El comando 'mkdir' seguido del nombre del directorio crea un nuevo directorio en la ubicación actual."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los directorios AltaGerencia, Estrategias y Tacticas dentro de CarpetasCompartidas.",
    "q": "¿Cómo se crean varios directorios de una sola vez en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# mkdir AltaGerencia Estrategias Tacticas\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia  Estrategias  Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "mkdir dir1 dir2 dir3",
      "mkdir {dir1,dir2,dir3}",
      "mkdir dir1; mkdir dir2; mkdir dir3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se pueden crear múltiples directorios con 'mkdir dir1 dir2 dir3', con llaves o con punto y coma."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar los permisos de la estructura de carpetas creada.",
    "q": "¿Qué comando muestra los permisos, propietario, grupo y fecha de modificación de los directorios?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "ls",
      "ls -l",
      "ls -a",
      "dir"
    ],
    "ans": 1,
    "exp": "El comando 'ls -l' muestra permisos, propietario, grupo, tamaño y fecha de modificación."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear archivos dentro de los directorios de la estructura.",
    "q": "¿Qué comando crea archivos vacíos en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# touch InformeRendimiento.txt ReporteSeguridad.txt\n[root@localhost AltaGerencia]# ls\nInformeRendimiento.txt ReporteSeguridad.txt\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "touch archivo.txt",
      "create archivo.txt",
      "new archivo.txt",
      "mkfile archivo.txt"
    ],
    "ans": 0,
    "exp": "El comando 'touch' seguido del nombre del archivo crea un archivo vacío."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide eliminar un directorio con todo su contenido y luego volverlo a crear.",
    "q": "¿Qué comando elimina un directorio con todo su contenido de forma forzada?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# rm -rf Tacticas\n[root@localhost Carpetascompartidas]# ls\nAltaGerencia Estrategias\n[root@localhost Carpetascompartidas]# mkdir Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "rm -r directorio",
      "rm -rf directorio",
      "rmdir directorio",
      "del directorio"
    ],
    "ans": 1,
    "exp": "El comando 'rm -rf directorio' elimina el directorio y todo su contenido de forma recursiva y forzada."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pregunta sobre el símbolo del prompt en la terminal.",
    "q": "¿Qué diferencia al símbolo $ del símbolo # en la terminal de Linux?",
    "extra": "",
    "opts": [
      "$ es usuario normal, # es usuario root",
      "$ es usuario root, # es usuario normal",
      "Ambos son usuario root",
      "Ambos son usuario normal"
    ],
    "ans": 0,
    "exp": "El símbolo $ indica usuario normal, mientras que # indica usuario root o superusuario."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pide moverse entre directorios durante la prueba.",
    "q": "¿Qué comando se utiliza para cambiar de directorio en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /home/Jimena\n[root@localhost Jimena]# pwd\n/home/Jimena\n[root@localhost Jimena]# cd Carpetascompartidas\n[root@localhost Carpetascompartidas]# pwd\n/home/Jimena/Carpetascompartidas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "cd directorio",
      "move directorio",
      "chdir directorio",
      "goto directorio"
    ],
    "ans": 0,
    "exp": "El comando 'cd' (change directory) seguido del nombre del directorio cambia a ese directorio."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pide crear varios archivos a la vez en la prueba.",
    "q": "¿Cómo se crean varios archivos con nombres diferentes de manera simultánea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# touch {2025,2026,Trazabilidad}.txt\n[root@localhost Carpetascompartidas]# ls\n2025.txt 2026.txt Trazabilidad.txt AltaGerencia Estrategias Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "touch archivo1 archivo2 archivo3",
      "touch {archivo1,archivo2,archivo3}.txt",
      "touch archivo1; touch archivo2; touch archivo3",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se pueden crear múltiples archivos con 'touch arch1 arch2 arch3', con llaves o con punto y coma."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El profesor pregunta sobre los permisos mostrados en 'ls -l'.",
    "q": "En la salida de 'ls -l', ¿qué indica la primera letra 'd' en los permisos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>drwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\n-rw-r--r--. 1 root root 0 nov 16 16:00 archivo.txt\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "Es un archivo ejecutable",
      "Es un directorio",
      "Es un archivo de texto",
      "Es un enlace simbólico"
    ],
    "ans": 1,
    "exp": "La letra 'd' al inicio de los permisos indica que es un directorio. '-' indica archivo regular."
  },

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Después de crear la estructura de carpetas, el profesor pide asignar propietarios a cada carpeta según el organigrama.",
    "q": "¿Qué comando se utiliza para cambiar el propietario de un directorio en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# chown Jimena AltaGerencia\n[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwxr-xr-x. 2 Jimena root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "chown",
      "chmod",
      "chgrp",
      "chuser"
    ],
    "ans": 0,
    "exp": "El comando 'chown' (change owner) cambia el propietario de un archivo o directorio. Se usa 'chown usuario directorio'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide asignar el grupo 'gerencia' a la carpeta AltaGerencia.",
    "q": "¿Qué comando se utiliza para cambiar el grupo propietario de un directorio?",
    "extra": "",
    "opts": [
      "chown",
      "chmod",
      "chgrp",
      "groupadd"
    ],
    "ans": 2,
    "exp": "El comando 'chgrp' (change group) cambia el grupo propietario de un archivo o directorio."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide que solo Jimena pueda acceder a su carpeta y el resto no.",
    "q": "¿Qué comando se utiliza para cambiar los permisos de un directorio en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# chmod 700 AltaGerencia\n[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwx------. 2 Jimena root 64 nov 16 15:39 AltaGerencia\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "chown",
      "chmod",
      "chgrp",
      "chperm"
    ],
    "ans": 1,
    "exp": "El comando 'chmod' (change mode) cambia los permisos de un archivo o directorio. 'chmod 700' da permisos solo al propietario."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar que los permisos estén correctamente asignados.",
    "q": "¿Qué comando permite ver los permisos y propietarios de los directorios?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Carpetascompartidas]# ls -l\ntotal 0\ndrwx------. 2 Jimena root 64 nov 16 15:39 AltaGerencia\ndrwxr-x---. 2 Clara root 46 nov 16 15:55 Estrategias\ndrwxr-x---. 2 Valeria root 6 nov 16 15:21 Tacticas\n[root@localhost Carpetascompartidas]#</div>",
    "opts": [
      "ls",
      "ls -l",
      "ls -a",
      "dir"
    ],
    "ans": 1,
    "exp": "El comando 'ls -l' muestra los permisos, propietario, grupo, tamaño y fecha de modificación de cada archivo o directorio."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear un grupo nuevo para los usuarios de la empresa.",
    "q": "¿Qué comando se utiliza para crear un nuevo grupo en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# groupadd gerencia\n[root@localhost ~]# groupadd comunicacion\n[root@localhost ~]#</div>",
    "opts": [
      "addgroup",
      "groupadd",
      "creategroup",
      "newgroup"
    ],
    "ans": 1,
    "exp": "El comando 'groupadd' seguido del nombre del grupo crea un nuevo grupo en el sistema."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide agregar un usuario a un grupo específico.",
    "q": "¿Qué comando se utiliza para agregar un usuario a un grupo existente?",
    "extra": "",
    "opts": [
      "useradd -G grupo usuario",
      "adduser -G grupo usuario",
      "usermod -G grupo usuario",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede agregar un usuario a un grupo con 'useradd -G', 'adduser -G' o 'usermod -G'."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide que el usuario Clara pueda leer y ejecutar pero no escribir en su carpeta.",
    "q": "¿Qué permisos en notación simbólica permiten al propietario leer y ejecutar, pero no escribir?",
    "extra": "",
    "opts": [
      "r-x",
      "rwx",
      "r--",
      "--x"
    ],
    "ans": 0,
    "exp": "Los permisos 'r-x' significan lectura (r), sin escritura (-) y ejecución (x)."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide asignar permisos de lectura, escritura y ejecución solo al propietario.",
    "q": "¿Qué comando asigna permisos solo al propietario con 'chmod'?",
    "extra": "",
    "opts": [
      "chmod 700 directorio",
      "chmod 777 directorio",
      "chmod 755 directorio",
      "chmod 644 directorio"
    ],
    "ans": 0,
    "exp": "'chmod 700 directorio' da todos los permisos (rwx) solo al propietario y nada a grupo y otros."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar en qué directorio está el usuario actualmente.",
    "q": "¿Qué comando muestra la ruta del directorio de trabajo actual?",
    "extra": "",
    "opts": [
      "pwd",
      "ls",
      "cd",
      "dir"
    ],
    "ans": 0,
    "exp": "El comando 'pwd' (print working directory) muestra la ruta completa del directorio donde está el usuario."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide salir del usuario root y volver al usuario normal.",
    "q": "¿Qué comando se utiliza para salir de la sesión de usuario root?",
    "extra": "",
    "opts": [
      "exit",
      "logout",
      "su - usuario",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede salir de la sesión root con 'exit', 'logout' o 'su - nombre_usuario'."
  },

  //POSIBLES PRUEBA CON NUEVOS ESCENARIOS

  //Escenario 1: Nuevos empleados
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "La empresa contrata a Johana como encargada de TI y a Carlos para Finanzas. Crea los usuarios y sus directorios.",
    "q": "¿Qué comandos se utilizan para crear un usuario y su directorio personal?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Johana\n[root@localhost ~]# passwd Johana\n[root@localhost ~]# useradd Carlos\n[root@localhost ~]# passwd Carlos\n[root@localhost ~]# ls /home\nJohana Carlos\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Johana y useradd Carlos",
      "adduser Johana y adduser Carlos",
      "newuser Johana y newuser Carlos",
      "create Johana y create Carlos"
    ],
    "ans": 0,
    "exp": "El comando 'useradd' seguido del nombre crea el usuario y automáticamente su directorio personal en /home/nombre."
  },

  //Escenario 2: Crear directorios por área
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear los directorios TI, Finanzas y RecursosHumanos dentro del directorio /empresa.",
    "q": "¿Qué comando crea estos tres directorios de una sola vez?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir -p /empresa/{TI,Finanzas,RecursosHumanos}\n[root@localhost ~]# ls /empresa\nTI Finanzas RecursosHumanos\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir /empresa/{TI,Finanzas,RecursosHumanos}",
      "mkdir TI Finanzas RecursosHumanos",
      "mkdir -p /empresa/TI /empresa/Finanzas /empresa/RecursosHumanos",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede usar mkdir con llaves, con -p para crear rutas completas, o uno por uno."
  },

  //Escenario 3: Asignar propietarios
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Johana es encargada de TI, Carlos de Finanzas y María de Recursos Humanos. Asígnales propietario a sus carpetas.",
    "q": "¿Qué comando asigna a Johana como propietaria de la carpeta TI?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# chown Johana /empresa/TI\n[root@localhost ~]# chown Carlos /empresa/Finanzas\n[root@localhost ~]# chown Maria /empresa/RecursosHumanos\n[root@localhost ~]# ls -l /empresa\nTI: Johana\nFinanzas: Carlos\nRecursosHumanos: Maria\n[root@localhost ~]#</div>",
    "opts": [
      "chown Johana /empresa/TI",
      "chmod Johana /empresa/TI",
      "chgrp Johana /empresa/TI",
      "owner Johana /empresa/TI"
    ],
    "ans": 0,
    "exp": "El comando 'chown' cambia el propietario de un directorio. Se usa 'chown usuario directorio'."
  },

  //Escenario 4: Usuario de baja

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Carlos se va de vacaciones, debe darlo de baja temporal. Su compañera Ana asume Finanzas.",
    "q": "¿Qué comando elimina al usuario Carlos pero conserva sus archivos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# userdel Carlos\n[root@localhost ~]# useradd Ana\n[root@localhost ~]# passwd Ana\n[root@localhost ~]# chown Ana /empresa/Finanzas\n[root@localhost ~]# ls /home\nJohana Ana Maria\n[root@localhost ~]#</div>",
    "opts": [
      "userdel Carlos",
      "userdel -r Carlos",
      "deluser Carlos",
      "remove Carlos"
    ],
    "ans": 0,
    "exp": "'userdel Carlos' elimina al usuario pero mantiene sus archivos. '-r' los elimina también."
  },

  //Escenario 5: Usuario asume nuevo puesto

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Ana asume Finanzas mientras Carlos está de vacaciones. Cambia el propietario de la carpeta.",
    "q": "¿Qué comando asigna a Ana como propietaria de Finanzas?",
    "extra": "",
    "opts": [
      "chown Ana /empresa/Finanzas",
      "chmod Ana /empresa/Finanzas",
      "chgrp Ana /empresa/Finanzas",
      "move Ana /empresa/Finanzas"
    ],
    "ans": 0,
    "exp": "'chown Ana /empresa/Finanzas' cambia el propietario de Finanzas a Ana."
  },

  //Escenario 6: Crear grupo y asignar usuarios

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide crear un grupo 'finanzas' y meter a Carlos y Ana.",
    "q": "¿Qué comando crea el grupo 'finanzas' y agrega a Carlos y Ana?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# groupadd finanzas\n[root@localhost ~]# usermod -G finanzas Carlos\n[root@localhost ~]# usermod -G finanzas Ana\n[root@localhost ~]#</div>",
    "opts": [
      "groupadd finanzas; usermod -G finanzas Carlos; usermod -G finanzas Ana",
      "addgroup finanzas; adduser Carlos finanzas; adduser Ana finanzas",
      "creategroup finanzas; useradd Carlos finanzas; useradd Ana finanzas",
      "Todas las anteriores"
    ],
    "ans": 0,
    "exp": "Se crea el grupo con 'groupadd' y se agregan usuarios con 'usermod -G grupo usuario'."
  },

  //Escenario 7: Permisos según rol

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El encargado de TI debe tener todos los permisos en su carpeta, los demás solo lectura.",
    "q": "¿Qué permisos debe tener Johana en /empresa/TI y el resto del grupo?",
    "extra": "",
    "opts": [
      "chmod 700 /empresa/TI",
      "chmod 750 /empresa/TI",
      "chmod 755 /empresa/TI",
      "chmod 770 /empresa/TI"
    ],
    "ans": 1,
    "exp": "750: propietario (7=rwx), grupo (5=r-x), otros (0=---). Johana hace todo, grupo solo lee y ejecuta, otros nada."
  },

  //Escenario 8: Mover usuario entre directorios

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Ana termina su reemplazo en Finanzas y vuelve a su puesto en RecursosHumanos.",
    "q": "¿Qué comando cambia el propietario de Finanzas de vuelta a Carlos?",
    "extra": "",
    "opts": [
      "chown Carlos /empresa/Finanzas",
      "chmod Carlos /empresa/Finanzas",
      "chgrp Carlos /empresa/Finanzas",
      "move Carlos /empresa/Finanzas"
    ],
    "ans": 0,
    "exp": "'chown Carlos /empresa/Finanzas' devuelve la propiedad de Finanzas a Carlos."
  },

  //Escenario 9: Verificar estructura completa

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El profesor pide verificar que todos los usuarios, grupos y permisos estén correctos.",
    "q": "¿Qué comando muestra la estructura completa con propietarios y permisos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls -l /empresa\ntotal 0\ndrwx------. 2 Johana finanzas 64 nov 16 15:39 TI\ndrwxr-x---. 2 Carlos finanzas 46 nov 16 15:55 Finanzas\ndrwx------. 2 Maria rrhh 6 nov 16 15:21 RecursosHumanos\n[root@localhost ~]#</div>",
    "opts": [
      "ls -l /empresa",
      "ls /empresa",
      "ls -a /empresa",
      "dir /empresa"
    ],
    "ans": 0,
    "exp": "'ls -l' muestra permisos, propietario, grupo, tamaño y fecha de modificación."
  },

  //Escenario 10: Escenario completo

  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Resuelve el escenario completo: crea usuarios, grupos, directorios, asigna propietarios y permisos.",
    "q": "Ordena los comandos correctos para: crear usuario Johana, grupo ti, directorio TI, asignar propietario y permisos.",
    "extra": "",
    "opts": [
      "useradd Johana → groupadd ti → mkdir TI → chown Johana:ti TI → chmod 750 TI",
      "mkdir TI → useradd Johana → chown Johana TI → groupadd ti → chmod 750 TI",
      "groupadd ti → mkdir TI → useradd Johana → chmod 750 TI → chown Johana TI",
      "chmod 750 TI → useradd Johana → groupadd ti → mkdir TI → chown Johana TI"
    ],
    "ans": 0,
    "exp": "El orden correcto es: 1) crear usuario, 2) crear grupo, 3) crear directorio, 4) asignar propietario, 5) asignar permisos."
  },


  //PREGUNTAS PARA LA PRUEBA PRÁCTICA DE LINUX

  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se solicita crear los usuarios Johana (Directora de TI) y Carlos (Director de Finanzas) para la estructura de la empresa.",
    "q": "¿Qué comando crea al usuario Johana con su directorio personal?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Johana\n[root@localhost ~]# passwd Johana\nNueva contraseña: \n[root@localhost ~]# useradd Carlos\n[root@localhost ~]# passwd Carlos\nNueva contraseña: \n[root@localhost ~]#</div>",
    "opts": [
      "useradd Johana y useradd Carlos",
      "adduser Johana y adduser Carlos",
      "newuser Johana y newuser Carlos",
      "create Johana y create Carlos"
    ],
    "ans": 0,
    "exp": "El comando 'useradd' seguido del nombre de usuario crea al usuario y su directorio personal en /home."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe crear la estructura de directorios TI y FINANZAS dentro de /empresa.",
    "q": "¿Qué comando crea los directorios TI y FINANZAS?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir -p /empresa/TI\n[root@localhost ~]# mkdir -p /empresa/FINANZAS\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir /empresa/TI /empresa/FINANZAS",
      "mkdir -p /empresa/TI /empresa/FINANZAS",
      "mkdir /empresa/{TI,FINANZAS}",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede crear directorios de varias formas: con mkdir uno por uno, con -p para crear la ruta completa, o con llaves."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe asignar a Johana como propietaria de TI y a Carlos de FINANZAS.",
    "q": "¿Qué comando asigna a Johana como propietaria del directorio TI?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# chown Johana /empresa/TI\n[root@localhost ~]# chown Carlos /empresa/FINANZAS\n[root@localhost ~]#</div>",
    "opts": [
      "chown Johana /empresa/TI",
      "chmod Johana /empresa/TI",
      "chgrp Johana /empresa/TI",
      "owner Johana /empresa/TI"
    ],
    "ans": 0,
    "exp": "El comando 'chown' (change owner) cambia el propietario de un archivo o directorio."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe asignar permisos para que Johana tenga todos los permisos en TI y el grupo solo lectura y ejecución.",
    "q": "¿Qué permisos debe tener Johana en /empresa/TI?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# chmod 750 /empresa/TI\n[root@localhost ~]# chmod 750 /empresa/FINANZAS\n[root@localhost ~]#</div>",
    "opts": [
      "chmod 700 /empresa/TI",
      "chmod 750 /empresa/TI",
      "chmod 755 /empresa/TI",
      "chmod 770 /empresa/TI"
    ],
    "ans": 1,
    "exp": "750: propietario (7=rwx), grupo (5=r-x), otros (0=---). Johana hace todo, grupo lee y ejecuta, otros nada."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe crear el grupo 'administracion' y agregar a Johana y Carlos.",
    "q": "¿Qué comando crea el grupo y agrega a los usuarios?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# groupadd administracion\n[root@localhost ~]# usermod -G administracion Johana\n[root@localhost ~]# usermod -G administracion Carlos\n[root@localhost ~]#</div>",
    "opts": [
      "groupadd administracion; usermod -G administracion Johana; usermod -G administracion Carlos",
      "addgroup administracion; adduser Johana administracion; adduser Carlos administracion",
      "creategroup administracion; useradd Johana administracion; useradd Carlos administracion",
      "Todas las anteriores"
    ],
    "ans": 0,
    "exp": "Se crea el grupo con 'groupadd' y se agregan usuarios con 'usermod -G grupo usuario'."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe cambiar el grupo propietario de TI a 'administracion'.",
    "q": "¿Qué comando cambia el grupo propietario de un directorio?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# chgrp administracion /empresa/TI\n[root@localhost ~]# ls -l /empresa\ndrwxr-x---. 2 Johana administracion 64 nov 16 15:39 TI\n[root@localhost ~]#</div>",
    "opts": [
      "chown Johana:administracion /empresa/TI",
      "chgrp administracion /empresa/TI",
      "chmod administracion /empresa/TI",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede cambiar el grupo con 'chgrp grupo directorio' o con 'chown usuario:grupo directorio'."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Carlos no debe poder acceder al directorio TI. Solo Johana y el grupo administracion.",
    "q": "¿Qué permisos debe tener TI para que Carlos no pueda acceder?",
    "extra": "",
    "opts": [
      "chmod 750 /empresa/TI",
      "chmod 700 /empresa/TI",
      "chmod 770 /empresa/TI",
      "chmod 755 /empresa/TI"
    ],
    "ans": 0,
    "exp": "Con 750: propietario (7=rwx), grupo (5=r-x), otros (0=---). Carlos está en otros, no tiene acceso."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe crear un usuario llamado Lola Flores como Directora de TI.",
    "q": "¿Qué comando crea a Lola Flores y le asigna una contraseña que nunca expire?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd LolaFlores\n[root@localhost ~]# passwd -x -1 LolaFlores\n[root@localhost ~]#</div>",
    "opts": [
      "useradd LolaFlores y passwd -x -1 LolaFlores",
      "useradd LolaFlores y passwd -d LolaFlores",
      "adduser LolaFlores y passwd -x -1 LolaFlores",
      "newuser LolaFlores y passwd -x -1 LolaFlores"
    ],
    "ans": 0,
    "exp": "'useradd LolaFlores' crea al usuario. 'passwd -x -1 LolaFlores' hace que la contraseña nunca expire."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe restringir el acceso a la carpeta TI solo a Johana y al grupo administracion.",
    "q": "¿Qué comando restringe el acceso a TI solo a Johana y al grupo administracion?",
    "extra": "",
    "opts": [
      "chmod 750 /empresa/TI",
      "chmod 700 /empresa/TI",
      "chmod 770 /empresa/TI",
      "chmod 755 /empresa/TI"
    ],
    "ans": 0,
    "exp": "750: Johana tiene todos los permisos, el grupo administracion puede leer y ejecutar, otros no tienen acceso."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe verificar la estructura completa de usuarios, grupos y permisos creados.",
    "q": "¿Qué comando muestra todos los usuarios creados en el sistema?",
    "extra": "",
    "opts": [
      "cat /etc/passwd",
      "cat /etc/group",
      "ls /home",
      "Todas las anteriores"
    ],
    "ans": 3,
    "exp": "Se puede ver los usuarios en /etc/passwd, los grupos en /etc/group, y los directorios personales en /home."
  },



  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando sudo permite ejecutar comandos con privilegios de superusuario.",
    "q": "¿Qué significa la abreviatura 'sudo' y para qué sirve?",
    "extra": "",
    "opts": [
      "Significa 'superuser do' y permite actuar como superusuario o root",
      "Significa 'system update' y actualiza el sistema",
      "Significa 'save user data' y guarda archivos",
      "Significa 'simple user command' y ejecuta comandos básicos"
    ],
    "ans": 0,
    "exp": "sudo significa 'superuser do' y permite actuar como superusuario o usuario root mientras se ejecuta un comando específico, protegiendo el sistema de modificaciones accidentales."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando clear se utiliza para limpiar la terminal.",
    "q": "¿Qué función cumple el comando 'clear' en Linux?",
    "extra": "",
    "opts": [
      "Elimina archivos del sistema",
      "Limpia la pantalla de la terminal borrando el texto",
      "Cierra la sesión del usuario",
      "Reinicia el sistema operativo"
    ],
    "ans": 1,
    "exp": "El comando clear se utiliza para limpiar los comandos en la terminal, borrando el texto de la pantalla o consola."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'su -' permite cambiar al usuario root.",
    "q": "¿Qué comando se utiliza para cambiarse al usuario root en Linux?",
    "extra": "",
    "opts": [
      "sudo root",
      "su -",
      "login root",
      "useradd root"
    ],
    "ans": 1,
    "exp": "El comando 'su -' permite cambiarse al usuario root, solicitando la contraseña del mismo."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'man' permite consultar el manual de otros comandos.",
    "q": "¿Qué comando se utiliza para ver el manual o ayuda de un comando en Linux?",
    "extra": "",
    "opts": [
      "help",
      "man",
      "info",
      "doc"
    ],
    "ans": 1,
    "exp": "El comando 'man' permite observar la funcionalidad y opciones de los comandos de Linux. Por ejemplo: 'man ls' muestra el manual del comando ls."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'cd' permite cambiar entre directorios.",
    "q": "¿Qué función cumple el comando 'cd' y cómo se utiliza?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /\n[root@localhost /]# pwd\n/\n[root@localhost /]# cd /home\n[root@localhost home]# pwd\n/home\n[root@localhost home]#</div>",
    "opts": [
      "Crea un nuevo directorio",
      "Cambia al directorio raíz del sistema",
      "Cambia al directorio especificado como argumento",
      "Elimina el directorio actual"
    ],
    "ans": 2,
    "exp": "El comando 'cd' (change directory) se utiliza para cambiar al directorio especificado como argumento. 'cd /' te cambia al directorio raíz y 'cd ..' al directorio padre."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'cd ..' permite moverse al directorio padre.",
    "q": "¿Qué sucede cuando se ejecuta el comando 'cd ..'?",
    "extra": "",
    "opts": [
      "Cambia al directorio raíz",
      "Cambia al directorio padre del directorio actual",
      "Cambia al directorio home del usuario",
      "Crea un nuevo directorio"
    ],
    "ans": 1,
    "exp": "El comando 'cd ..' cambia al directorio padre (el directorio que contiene al directorio actual), permitiendo navegar hacia atrás en la estructura de carpetas."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'useradd' solo puede ser ejecutado por el usuario root o con privilegios sudo.",
    "q": "¿Quién puede ejecutar el comando 'useradd' en Linux?",
    "extra": "",
    "opts": [
      "Cualquier usuario del sistema",
      "Solo el usuario root o usuarios con privilegios sudo",
      "Solo el usuario que creó el sistema",
      "Todos los usuarios del grupo admin"
    ],
    "ans": 1,
    "exp": "El comando 'useradd' de Linux solo se puede utilizar desde usuarios que tengan permisos root o los privilegios del comando sudo."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'passwd' sin argumentos cambia la contraseña del usuario actual.",
    "q": "¿Qué sucede cuando un usuario ejecuta 'passwd' sin argumentos?",
    "extra": "",
    "opts": [
      "Cambia la contraseña del usuario root",
      "Cambia la contraseña del usuario actual",
      "Muestra la contraseña actual del usuario",
      "Elimina la contraseña del usuario"
    ],
    "ans": 1,
    "exp": "Cuando un usuario ejecuta 'passwd' sin argumentos, el comando cambia la contraseña del usuario actual que está logueado en el sistema."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'touch' también se usa para actualizar la marca de tiempo de un archivo.",
    "q": "Además de crear archivos vacíos, ¿qué otra función tiene el comando 'touch'?",
    "extra": "",
    "opts": [
      "Eliminar archivos",
      "Actualizar la fecha y hora de modificación de un archivo existente",
      "Copiar archivos",
      "Mover archivos de ubicación"
    ],
    "ans": 1,
    "exp": "El comando 'touch' no solo crea archivos vacíos, sino que también actualiza la marca de tiempo (fecha y hora de modificación) de un archivo existente."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'rm' sin flags solo elimina archivos, no directorios.",
    "q": "¿Qué sucede cuando se ejecuta 'rm directorio' si 'directorio' es una carpeta?",
    "extra": "",
    "opts": [
      "Elimina el directorio y todo su contenido",
      "Muestra un error indicando que es un directorio",
      "Elimina solo los archivos dentro del directorio",
      "Renombra el directorio"
    ],
    "ans": 1,
    "exp": "El comando 'rm' sin flags solo elimina archivos. Si se intenta eliminar un directorio, muestra un error. Se debe usar 'rm -r' o 'rm -rf' para eliminar directorios."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "medium",
    "case": "El comando 'rmdir' elimina solo directorios vacíos.",
    "q": "¿Qué comando elimina un directorio solo si está vacío?",
    "extra": "",
    "opts": [
      "rm -r directorio",
      "rmdir directorio",
      "rm -rf directorio",
      "delete directorio"
    ],
    "ans": 1,
    "exp": "El comando 'rmdir' elimina un directorio solo si está vacío. Si contiene archivos, muestra un error."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' con la opción '-r' permite copiar directorios completos.",
    "q": "¿Qué opción del comando 'cp' permite copiar un directorio con todo su contenido?",
    "extra": "",
    "opts": [
      "-a",
      "-r",
      "-f",
      "-i"
    ],
    "ans": 1,
    "exp": "La opción '-r' (recursive) del comando 'cp' permite copiar directorios completos con todo su contenido de forma recursiva."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cp' con la opción '-i' solicita confirmación antes de sobrescribir.",
    "q": "¿Qué opción del comando 'cp' solicita confirmación antes de sobrescribir un archivo?",
    "extra": "",
    "opts": [
      "-f",
      "-i",
      "-v",
      "-u"
    ],
    "ans": 1,
    "exp": "La opción '-i' (interactive) del comando 'cp' solicita confirmación al usuario antes de sobrescribir un archivo existente."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "Los patrones de búsqueda con ls permiten listar archivos que comienzan con caracteres numéricos.",
    "q": "¿Qué comando lista los archivos que comienzan con un carácter numérico en Linux?",
    "extra": "",
    "opts": [
      "ls [[:alpha:]]*",
      "ls [[:alnum:]]*",
      "ls [[:digit:]]*",
      "ls [[:punct:]]*"
    ],
    "ans": 2,
    "exp": "El comando 'ls [[:digit:]]*' lista los archivos que comienzan con un carácter numérico (dígitos del 0 al 9)."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "hard",
    "case": "El comando 'cat' con la opción '-n' muestra números de línea.",
    "q": "¿Qué opción del comando 'cat' muestra los números de línea en la salida?",
    "extra": "",
    "opts": [
      "-b",
      "-n",
      "-E",
      "-T"
    ],
    "ans": 1,
    "exp": "La opción '-n' (number) del comando 'cat' numera todas las líneas de salida, incluyendo las líneas vacías."
  },
  {
    "profe": true,
    "unit": "Linux",
    "diff": "easy",
    "case": "El comando 'sudo' con la opción '-h' muestra ayuda sobre su uso.",
    "q": "¿Qué opción del comando 'sudo' muestra un mensaje de ayuda sobre su uso?",
    "extra": "",
    "opts": [
      "-a",
      "-h",
      "-v",
      "-l"
    ],
    "ans": 1,
    "exp": "La opción '-h' (help) del comando 'sudo' muestra un mensaje de ayuda con los usos y opciones disponibles del comando."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se requiere crear los usuarios Jimena, Clara y Valeria, asignando una contraseña a cada uno.",
    "q": "¿Qué secuencia de comandos completa correctamente la actividad?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# passwd Jimena\nCambiando la contraseña del usuario Jimena.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]# useradd Clara\n[root@localhost ~]# passwd Clara\nCambiando la contraseña del usuario Clara.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]# useradd Valeria\n[root@localhost ~]# passwd Valeria\nCambiando la contraseña del usuario Valeria.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Jimena → passwd Jimena → useradd Clara → passwd Clara → useradd Valeria → passwd Valeria",
      "mkdir Jimena → mkdir Clara → mkdir Valeria",
      "touch Jimena → touch Clara → touch Valeria",
      "passwd Jimena → passwd Clara → passwd Valeria"
    ],
    "ans": 0,
    "exp": "Los usuarios se crean mediante useradd y posteriormente se asigna una contraseña mediante passwd."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe construir la estructura CarpetasCompartidas con los directorios AltaGerencia, Estrategias y Tacticas.",
    "q": "¿Qué conjunto de comandos realiza correctamente la creación de la estructura?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir CarpetasCompartidas\n[root@localhost ~]# cd CarpetasCompartidas\n[root@localhost CarpetasCompartidas]# mkdir AltaGerencia\n[root@localhost CarpetasCompartidas]# mkdir Estrategias\n[root@localhost CarpetasCompartidas]# mkdir Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias Tacticas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "mkdir CarpetasCompartidas → cd CarpetasCompartidas → mkdir AltaGerencia → mkdir Estrategias → mkdir Tacticas",
      "touch CarpetasCompartidas → touch AltaGerencia → touch Estrategias → touch Tacticas",
      "mkdir AltaGerencia → mkdir Estrategias → mkdir Tacticas",
      "cd CarpetasCompartidas → mkdir AltaGerencia → mkdir Estrategias"
    ],
    "ans": 0,
    "exp": "Primero debe crearse CarpetasCompartidas y luego ingresar a ella para crear los directorios internos."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Dentro del directorio AltaGerencia deben crearse los archivos InformeRendimiento y ReporteSeguridad.",
    "q": "¿Qué comando realiza correctamente la tarea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# touch InformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]# ls\nInformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "touch InformeRendimiento ReporteSeguridad",
      "mkdir InformeRendimiento ReporteSeguridad",
      "useradd InformeRendimiento ReporteSeguridad",
      "passwd InformeRendimiento ReporteSeguridad"
    ],
    "ans": 0,
    "exp": "touch permite crear ambos archivos desde una única instrucción."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Ha iniciado sesión con un usuario normal y necesita continuar el ejercicio como administrador.",
    "q": "¿Qué secuencia permite cambiar correctamente al usuario root?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[usuario@localhost ~]$ su -\nPassword: ********\n[root@localhost ~]#</div>",
    "opts": [
      "su -",
      "sudo",
      "root",
      "cd /root"
    ],
    "ans": 0,
    "exp": "El comando su - permite cambiar al usuario root ingresando la contraseña correspondiente."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se debe crear la carpeta principal CarpetasCompartidas y posteriormente ingresar a ella.",
    "q": "¿Cuál es la secuencia correcta?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir CarpetasCompartidas\n[root@localhost ~]# cd CarpetasCompartidas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "mkdir CarpetasCompartidas → cd CarpetasCompartidas",
      "touch CarpetasCompartidas → cd CarpetasCompartidas",
      "mkdir CarpetasCompartidas → ls",
      "cd CarpetasCompartidas → mkdir CarpetasCompartidas"
    ],
    "ans": 0,
    "exp": "Primero debe crearse el directorio y luego ingresar a él mediante cd."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Ya se encuentra dentro de CarpetasCompartidas.",
    "q": "¿Qué conjunto de comandos crea correctamente la estructura solicitada?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# mkdir AltaGerencia\n[root@localhost CarpetasCompartidas]# mkdir Estrategias\n[root@localhost CarpetasCompartidas]# mkdir Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias Tacticas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "mkdir AltaGerencia → mkdir Estrategias → mkdir Tacticas",
      "touch AltaGerencia → touch Estrategias → touch Tacticas",
      "useradd AltaGerencia → useradd Estrategias → useradd Tacticas",
      "passwd AltaGerencia → passwd Estrategias → passwd Tacticas"
    ],
    "ans": 0,
    "exp": "Los directorios internos se crean utilizando mkdir."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se encuentra dentro del directorio AltaGerencia.",
    "q": "¿Qué comando crea los archivos InformeRendimiento y ReporteSeguridad?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# touch InformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]# ls\nInformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "touch InformeRendimiento ReporteSeguridad",
      "mkdir InformeRendimiento ReporteSeguridad",
      "useradd InformeRendimiento ReporteSeguridad",
      "passwd InformeRendimiento ReporteSeguridad"
    ],
    "ans": 0,
    "exp": "touch permite crear ambos archivos en una sola instrucción."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Dentro del directorio Estrategias deben crearse los archivos Mercadeo y NvosProd.",
    "q": "¿Qué comando corresponde?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# touch Mercadeo NvosProd\n[root@localhost Estrategias]# ls\nMercadeo NvosProd\n[root@localhost Estrategias]#</div>",
    "opts": [
      "touch Mercadeo NvosProd",
      "mkdir Mercadeo NvosProd",
      "useradd Mercadeo NvosProd",
      "ls Mercadeo NvosProd"
    ],
    "ans": 0,
    "exp": "Los archivos se crean mediante touch."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "El directorio Tacticas debe eliminarse completamente como demostración del comando rm.",
    "q": "¿Qué comando realiza correctamente la tarea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# rm -r Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "rm -r Tacticas",
      "rm Tacticas",
      "delete Tacticas",
      "touch Tacticas"
    ],
    "ans": 0,
    "exp": "La opción -r permite eliminar directorios y su contenido."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Antes de crear archivos desea verificar en qué directorio se encuentra.",
    "q": "¿Qué comando debe ejecutar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# pwd\n/home/Jimena/CarpetasCompartidas/Estrategias\n[root@localhost Estrategias]#</div>",
    "opts": [
      "pwd",
      "ls",
      "cd",
      "man"
    ],
    "ans": 0,
    "exp": "pwd muestra la ruta completa del directorio actual."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Desea visualizar permisos, propietario, tamaño y fecha de modificación de los archivos.",
    "q": "¿Qué comando debe utilizar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# ls -l\ntotal 0\ndrwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "ls -l",
      "ls",
      "pwd",
      "cd"
    ],
    "ans": 0,
    "exp": "ls -l muestra información detallada de archivos y directorios."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Debe crear los usuarios Jimena, Clara y Valeria.",
    "q": "¿Cuál es el siguiente comando después de crear Jimena?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Jimena\n[root@localhost ~]# passwd Jimena\nCambiando la contraseña del usuario Jimena.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]#</div>",
    "opts": [
      "passwd Jimena",
      "mkdir Jimena",
      "touch Jimena",
      "cd Jimena"
    ],
    "ans": 0,
    "exp": "Después de crear un usuario, el siguiente paso es asignarle una contraseña mediante passwd."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Jimena ya creó CarpetasCompartidas y necesita ingresar al directorio.",
    "q": "¿Qué comando debe ejecutar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[jimena@localhost ~]$ ls\nCarpetasCompartidas\n[jimena@localhost ~]$ cd CarpetasCompartidas\n[jimena@localhost CarpetasCompartidas]$</div>",
    "opts": [
      "cd CarpetasCompartidas",
      "pwd CarpetasCompartidas",
      "ls CarpetasCompartidas",
      "mkdir CarpetasCompartidas"
    ],
    "ans": 0,
    "exp": "cd permite ingresar al directorio especificado."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Observe el siguiente prompt.",
    "q": "¿Qué indica el símbolo #?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]#</div>",
    "opts": [
      "Usuario normal",
      "Invitado",
      "Usuario root",
      "Grupo administrador"
    ],
    "ans": 2,
    "exp": "El símbolo # identifica al usuario root."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Olvidó cómo funciona el comando touch.",
    "q": "¿Qué comando le permite consultar la ayuda completa?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# man touch\ntouch - change file timestamps\n...\n[root@localhost ~]#</div>",
    "opts": [
      "man touch",
      "help touch",
      "touch -?",
      "sudo touch"
    ],
    "ans": 0,
    "exp": "man muestra el manual del comando."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Necesita crear simultáneamente los archivos Mercadeo.txt y NvosProd.txt.",
    "q": "¿Cuál es la mejor alternativa?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# touch {Mercadeo,NvosProd}.txt\n[root@localhost Estrategias]# ls\nMercadeo.txt NvosProd.txt\n[root@localhost Estrategias]#</div>",
    "opts": [
      "touch {Mercadeo,NvosProd}.txt",
      "mkdir {Mercadeo,NvosProd}.txt",
      "touch Mercadeo,NvosProd.txt",
      "ls {Mercadeo,NvosProd}.txt"
    ],
    "ans": 0,
    "exp": "El PPT muestra la creación múltiple utilizando llaves para ahorrar tiempo."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Acaba de crear los archivos InformeRendimiento y ReporteSeguridad.",
    "q": "¿Qué comando utilizaría para verificar que fueron creados?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost AltaGerencia]# ls\nInformeRendimiento ReporteSeguridad\n[root@localhost AltaGerencia]#</div>",
    "opts": [
      "ls",
      "pwd",
      "cd",
      "passwd"
    ],
    "ans": 0,
    "exp": "ls muestra el contenido del directorio actual."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Se encuentra dentro de Estrategias y necesita volver a CarpetasCompartidas.",
    "q": "¿Qué comando debe ejecutar?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost Estrategias]# cd ..\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "cd ..",
      "cd /",
      "cd root",
      "pwd"
    ],
    "ans": 0,
    "exp": "cd .. permite regresar al directorio padre."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Un estudiante intenta crear un directorio usando el siguiente comando.",
    "q": "¿Qué problema presenta?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# touch AltaGerencia\n[root@localhost ~]# ls\nAltaGerencia\n[root@localhost ~]#</div>",
    "opts": [
      "Crea un archivo, no un directorio",
      "No existe el comando touch",
      "El nombre es inválido",
      "Falta usar sudo"
    ],
    "ans": 0,
    "exp": "touch crea archivos. Para crear directorios debe utilizarse mkdir."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Una empresa necesita crear la siguiente estructura:",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>CarpetasCompartidas\n├── AltaGerencia\n├── Estrategias\n└── Tacticas\n[root@localhost ~]#</div>",
    "q": "¿Cuál es el primer directorio que debe crearse para construir correctamente la estructura?",
    "opts": [
      "AltaGerencia",
      "Estrategias",
      "CarpetasCompartidas",
      "Tacticas"
    ],
    "ans": 2,
    "exp": "Los directorios AltaGerencia, Estrategias y Tacticas dependen de CarpetasCompartidas, por lo que primero debe crearse el directorio principal."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "case": "Analice la siguiente situación. Un administrador necesita crear un directorio llamado Proyectos dentro de su directorio actual y luego verificar su creación.",
    "q": "¿Cuál es la secuencia correcta de comandos para realizar la tarea?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir Proyectos && ls\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir Proyectos && ls",
      "touch Proyectos && pwd",
      "rm Proyectos && ls",
      "cd Proyectos && mkdir"
    ],
    "ans": 0,
    "exp": "El comando mkdir crea directorios. Después de crear el directorio, el comando ls permite verificar que existe dentro del directorio actual. Las demás opciones utilizan comandos incorrectos para la tarea solicitada."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "q": "¿Qué comando permite visualizar la ruta completa del directorio donde se encuentra actualmente el usuario?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# pwd\n/root\n[root@localhost ~]#</div>",
    "opts": [
      "ls",
      "pwd",
      "cd",
      "mkdir"
    ],
    "ans": 1,
    "exp": "El comando pwd (Print Working Directory) muestra la ruta absoluta del directorio actual. Es utilizado frecuentemente para conocer la ubicación exacta dentro del sistema de archivos."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué comando permite consultar el manual de uso del comando cp?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# man cp\nCP(1)                    User Commands                    CP(1)\n...\n[root@localhost ~]#</div>",
    "opts": [
      "help cp",
      "cp -help",
      "man cp",
      "sudo cp"
    ],
    "ans": 2,
    "exp": "El comando man muestra el manual de cualquier comando Linux. Por ejemplo, man cp despliega la documentación del comando cp."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué comando muestra la ruta completa del directorio actual?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# pwd\n/root\n[root@localhost ~]#</div>",
    "opts": [
      "ls",
      "pwd",
      "cd",
      "dir"
    ],
    "ans": 1,
    "exp": "pwd significa Print Working Directory y permite visualizar la ruta completa del directorio donde se encuentra el usuario."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Un administrador necesita crear un usuario llamado Clara y posteriormente asignarle una contraseña.",
    "q": "¿Cuál es la secuencia correcta de comandos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# useradd Clara\n[root@localhost ~]# passwd Clara\nCambiando la contraseña del usuario Clara.\nNueva contraseña: \nVuelva a escribir la nueva contraseña: \npasswd: todos los tokens de autenticación se actualizaron exitosamente.\n[root@localhost ~]#</div>",
    "opts": [
      "useradd Clara → passwd Clara",
      "passwd Clara → useradd Clara",
      "mkdir Clara → passwd Clara",
      "touch Clara → passwd Clara"
    ],
    "ans": 0,
    "exp": "Primero se crea el usuario mediante useradd Clara. Luego se asigna una contraseña utilizando passwd Clara."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Se ejecuta el siguiente comando:",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls -l\ntotal 0\ndrwxr-xr-x. 2 root root 64 nov 16 15:39 AltaGerencia\ndrwxr-xr-x. 2 root root 46 nov 16 15:55 Estrategias\ndrwxr-xr-x. 2 root root 6 nov 16 15:21 Tacticas\n[root@localhost ~]#</div>",
    "q": "¿Cuál de los siguientes datos NO es mostrado por ls -l?",
    "opts": [
      "Permisos",
      "Propietario",
      "Fecha de modificación",
      "Dirección IP"
    ],
    "ans": 3,
    "exp": "El comando ls -l muestra permisos, enlaces, propietario, grupo, tamaño, fecha de modificación y nombre del archivo. No muestra direcciones IP."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué comando permite cambiar desde el usuario actual al usuario root?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[usuario@localhost ~]$ su -\nPassword: ********\n[root@localhost ~]#</div>",
    "opts": [
      "sudo root",
      "su -",
      "root",
      "cd root"
    ],
    "ans": 1,
    "exp": "El comando su - permite cambiar al usuario root ingresando la contraseña correspondiente."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "case": "Existe un directorio llamado Tacticas que contiene varios archivos.",
    "q": "¿Qué comando permite eliminar el directorio junto con todo su contenido?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost CarpetasCompartidas]# rm -r Tacticas\n[root@localhost CarpetasCompartidas]# ls\nAltaGerencia Estrategias\n[root@localhost CarpetasCompartidas]#</div>",
    "opts": [
      "rm Tacticas",
      "rm -r Tacticas",
      "rmdir Tacticas",
      "del Tacticas"
    ],
    "ans": 1,
    "exp": "La opción -r permite eliminar directorios de forma recursiva, incluyendo todos los archivos y subdirectorios contenidos."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "medium",
    "q": "¿Qué símbolo identifica a un usuario con privilegios de administrador (root) en Linux?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]#</div>",
    "opts": [
      "$",
      "#",
      "@",
      "%"
    ],
    "ans": 1,
    "exp": "Linux identifica al usuario root mediante el símbolo #. Los usuarios normales utilizan el símbolo $ en la terminal."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "hard",
    "q": "¿Qué comando permite eliminar un directorio junto con todo su contenido?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# rm -r Directorio\n[root@localhost ~]#</div>",
    "opts": [
      "rm Directorio",
      "rm -r Directorio",
      "rmdir Directorio",
      "del Directorio"
    ],
    "ans": 1,
    "exp": "La opción -r elimina directorios de forma recursiva."
  },
  {
    "profe": false,
    "unit": "Linux",
    "diff": "easy",
    "q": "¿Qué comando se utiliza para crear un directorio llamado Proyectos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir Proyectos\n[root@localhost ~]# ls\nProyectos\n[root@localhost ~]#</div>",
    "opts": [
      "touch Proyectos",
      "mkdir Proyectos",
      "cd Proyectos",
      "useradd Proyectos"
    ],
    "ans": 1,
    "exp": "mkdir crea directorios dentro del sistema de archivos."
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando muestra el contenido de un directorio?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls\nanaconda-ks.cfg\n[root@localhost ~]#</div>",
    "opts": [
      "ls",
      "cd",
      "pwd",
      "dir"
    ],
    "ans": 0,
    "exp": "El comando 'ls' (list) muestra el contenido del directorio actual.\nOpciones útiles:\n  ls -l  → lista detallada (permisos, tamaño, fecha)\n  ls -a  → muestra archivos ocultos\n  ls -la → combinación de ambas"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando muestra el directorio actual en el que te encuentras?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# pwd\n/root\n[root@localhost ~]#</div>",
    "opts": [
      "pwd",
      "cd",
      "ls",
      "where"
    ],
    "ans": 0,
    "exp": "El comando 'pwd' (Print Working Directory) imprime la ruta absoluta del directorio actual.\nEjemplo de salida:\n  /home/usuario/documentos"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando muestra el directorio actual en el que te encuentra?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cd /\n[root@localhost /]# pwd\n/\n[root@localhost /]# cd /home\n[root@localhost home]# pwd\n/home\n[root@localhost home]#</div>",
    "opts": [
      "cd",
      "mv",
      "ls",
      "chdir"
    ],
    "ans": 0,
    "exp": "El comando 'cd' (Change Directory) permite navegar entre directorios.\nEjemplos:\n  cd /home/usuario  → va a esa ruta absoluta\n  cd ..             → sube un nivel\n  cd ~              → va al directorio home\n  cd -              → vuelve al directorio anterior"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando crea un directorio nuevo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mkdir nueva_carpeta\n[root@localhost ~]# ls\nnueva_carpeta\n[root@localhost ~]#</div>",
    "opts": [
      "mkdir",
      "touch",
      "newdir",
      "create"
    ],
    "ans": 0,
    "exp": "El comando 'mkdir' (Make Directory) crea un nuevo directorio.\nEjemplos:\n  mkdir carpeta         → crea una carpeta\n  mkdir -p a/b/c        → crea directorios anidados\n  mkdir carpeta1 carpeta2 → crea múltiples directorios"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando elimina un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# rm archivo.txt\n[root@localhost ~]# ls\n[root@localhost ~]#</div>",
    "opts": [
      "rm",
      "del",
      "erase",
      "delete"
    ],
    "ans": 0,
    "exp": "El comando 'rm' (Remove) elimina archivos y directorios.\nEjemplos:\n  rm archivo.txt     → elimina un archivo\n  rm -r carpeta/     → elimina directorio y su contenido\n  rm -f archivo.txt  → fuerza la eliminación sin preguntar\n  rm -rf carpeta/    → elimina recursivo y forzado (¡peligroso!)"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando copia un archivo de una ubicación a otra?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cp origen.txt destino.txt\n[root@localhost ~]# ls\norigen.txt destino.txt\n[root@localhost ~]#</div>",
    "opts": [
      "cp",
      "mv",
      "copy",
      "clone"
    ],
    "ans": 0,
    "exp": "El comando 'cp' (Copy) copia archivos o directorios.\nEjemplos:\n  cp archivo.txt copia.txt       → copia un archivo\n  cp archivo.txt /home/usuario/  → copia a otro directorio\n  cp -r carpeta/ destino/        → copia directorio completo"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando mueve o renombra un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# mv viejo.txt nuevo.txt\n[root@localhost ~]# ls\nnuevo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "mv",
      "cp",
      "rename",
      "move"
    ],
    "ans": 0,
    "exp": "El comando 'mv' (Move) mueve o renombra archivos y directorios.\nEjemplos:\n  mv viejo.txt nuevo.txt         → renombra el archivo\n  mv archivo.txt /home/usuario/  → mueve a otro directorio\n  mv carpeta1/ carpeta2/         → mueve o renombra carpeta"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando muestra el contenido de un archivo de texto en la terminal?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# cat archivo.txt\nEste es el contenido del archivo\n[root@localhost ~]#</div>",
    "opts": [
      "cat",
      "read",
      "show",
      "print"
    ],
    "ans": 0,
    "exp": "El comando 'cat' (concatenate) muestra el contenido de archivos.\nEjemplos:\n  cat archivo.txt              → muestra el contenido\n  cat archivo1.txt archivo2.txt → concatena y muestra ambos\n  cat -n archivo.txt           → muestra con números de línea"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando crea un archivo vacío o actualiza su fecha de modificación?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# touch nuevo_archivo.txt\n[root@localhost ~]# ls\nnuevo_archivo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "touch",
      "mkdir",
      "new",
      "create"
    ],
    "ans": 0,
    "exp": "El comando 'touch' crea un archivo vacío si no existe, o actualiza la fecha de acceso/modificación si ya existe.\nEjemplos:\n  touch archivo.txt            → crea archivo vacío\n  touch archivo1.txt archivo2.txt → crea múltiples archivos"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué comando busca texto dentro de archivos?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# grep \"error\" /var/log/syslog\n...\n[root@localhost ~]#</div>",
    "opts": [
      "grep",
      "find",
      "search",
      "locate"
    ],
    "ans": 0,
    "exp": "El comando 'grep' busca patrones de texto en archivos.\nEjemplos:\n  grep 'error' archivo.txt        → busca la palabra 'error'\n  grep -i 'error' archivo.txt    → sin distinguir mayúsculas\n  grep -r 'error' /var/log/      → búsqueda recursiva\n  grep -n 'error' archivo.txt    → muestra número de línea"
  },
  {
    "profe": false,
    "unit": "Linux - Permisos y Usuarios",
    "diff": "medium",
    "q": "¿Qué significan los permisos 'rwxr-xr--' en un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# ls -l\n-rwxr-xr--. 1 root root 0 nov 16 16:00 archivo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "Propietario: lectura/escritura/ejecución | Grupo: lectura/ejecución | Otros: solo lectura",
      "Propietario: lectura/escritura | Grupo: lectura/escritura | Otros: ejecución",
      "Propietario: todos los permisos | Grupo: todos | Otros: ninguno",
      "Propietario: lectura/ejecución | Grupo: escritura | Otros: lectura/escritura"
    ],
    "ans": 0,
    "exp": "Los permisos en Linux se dividen en 3 grupos de 3 caracteres:\n  rwxr-xr--\n  ||||||||\n  rwx → Propietario: puede leer (r), escribir (w) y ejecutar (x)\n  r-x → Grupo: puede leer (r) y ejecutar (x), NO escribir (-)\n  r-- → Otros: solo puede leer (r), NO escribir ni ejecutar\n\nEquivalencia numérica:\n  r=4, w=2, x=1\n  rwx = 4+2+1 = 7\n  r-x = 4+0+1 = 5\n  r-- = 4+0+0 = 4\n  → chmod 754 archivo"
  },
  {
    "profe": false,
    "unit": "Linux - Permisos y Usuarios",
    "diff": "medium",
    "q": "¿Qué comando cambia los permisos de un archivo?",
    "extra": "<div style='background:#1a1a1a;color:#00ff00;padding:10px 12px;border-radius:6px;font-family:monospace;white-space:pre-wrap;border:1px solid #333;text-align:left;font-size:13px;'><div style='background:#2d2d2d;color:#ccc;padding:3px 8px;margin:-10px -12px 8px -12px;border-radius:6px 6px 0 0;border-bottom:1px solid #444;font-family:sans-serif;font-size:11px;'>Terminal - root@localhost</div>[root@localhost ~]# chmod 755 archivo.txt\n[root@localhost ~]# ls -l\n-rwxr-xr-x. 1 root root 0 nov 16 16:00 archivo.txt\n[root@localhost ~]#</div>",
    "opts": [
      "chmod",
      "chown",
      "chgrp",
      "setperm"
    ],
    "ans": 0,
    "exp": "El comando 'chmod' (Change Mode) cambia los permisos de archivos.\n\nNotación numérica:\n  chmod 755 archivo → rwxr-xr-x\n  chmod 644 archivo → rw-r--r--\n  chmod 777 archivo → rwxrwxrwx (¡peligroso!)\n\nNotación simbólica:\n  chmod +x archivo  → agrega ejecución a todos\n  chmod u+w archivo → agrega escritura al propietario\n  chmod o-r archivo → quita lectura a otros"
  },
  {
    "profe": false,
    "unit": "Linux - Permisos y Usuarios",
    "diff": "medium",
    "q": "¿Qué valor numérico corresponde a los permisos 'rwxr--r--'?",
    "extra": "",
    "opts": [
      "744",
      "755",
      "644",
      "711"
    ],
    "ans": 0,
    "exp": "Cálculo de permisos numéricos:\n  r=4, w=2, x=1, -=0\n\n  Propietario: rwx = 4+2+1 = 7\n  Grupo:       r-- = 4+0+0 = 4\n  Otros:       r-- = 4+0+0 = 4\n\n  → chmod 744 archivo"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "hard",
    "case": "En un servidor Ubuntu necesitas instalar nginx, asegurarte de que esté actualizado y luego verificar su versión.",
    "q": "¿Cuál es la secuencia correcta de comandos?",
    "extra": "",
    "opts": [
      "apt update → apt install nginx → nginx -v → systemctl status nginx",
      "apt upgrade → apt install nginx → nginx --version → service nginx status",
      "apt-get update → apt-get upgrade nginx → nginx -v → ps aux | grep nginx",
      "apt update && apt upgrade → install nginx → check nginx version"
    ],
    "ans": 0,
    "exp": "Secuencia correcta en Ubuntu/Debian:\n\n" +
      "  sudo apt update              → actualiza la lista de paquetes disponibles\n" +
      "  sudo apt install nginx       → instala nginx\n" +
      "  nginx -v                     → muestra la versión de nginx\n" +
      "  systemctl status nginx       → verifica el estado del servicio\n\n" +
      "Diferencia entre update y upgrade:\n" +
      "  apt update  → solo actualiza la lista de paquetes (no instala nada)\n" +
      "  apt upgrade → instala las actualizaciones disponibles\n\n" +
      "Otros comandos apt útiles:\n" +
      "  apt remove nginx             → desinstala nginx\n" +
      "  apt purge nginx              → desinstala + elimina configuración\n" +
      "  apt autoremove               → elimina dependencias no usadas\n" +
      "  apt search nginx             → busca paquetes\n" +
      "  apt show nginx               → información del paquete"
  },
  {
    "profe": false,
    "unit": "Linux - Comandos Básicos",
    "diff": "easy",
    "q": "¿Qué hace la combinación de teclas Ctrl+C en la terminal?",
    "extra": "",
    "opts": [
      "Interrumpe/cancela el proceso en ejecución",
      "Copia el texto seleccionado",
      "Cierra la terminal",
      "Pausa el proceso temporalmente"
    ],
    "ans": 0,
    "exp": "Ctrl+C envía la señal SIGINT al proceso en primer plano, interrumpiéndolo.\n\n" +
      "Atajos útiles en terminal Linux:\n" +
      "  Ctrl+C → interrumpe el proceso actual\n" +
      "  Ctrl+Z → pausa el proceso (lo manda al background)\n" +
      "  Ctrl+D → cierra la sesión / envía EOF\n" +
      "  Ctrl+L → limpia la pantalla (igual que 'clear')\n" +
      "  Ctrl+A → va al inicio de la línea\n" +
      "  Ctrl+E → va al final de la línea\n" +
      "  Ctrl+R → búsqueda en historial de comandos\n" +
      "  Tab    → autocompletado\n" +
      "  ↑ ↓    → navegar historial de comandos"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "easy",
    "q": "¿Qué comando muestra información sobre el sistema operativo Linux instalado?",
    "extra": "",
    "opts": ["uname -a", "sysinfo", "os-release", "hostinfo"],
    "ans": 0,
    "exp": "El comando 'uname' muestra información del sistema.\n\n" +
      "Opciones:\n" +
      "  uname -a → toda la información\n" +
      "  uname -r → versión del kernel\n" +
      "  uname -s → nombre del sistema operativo\n" +
      "  uname -m → arquitectura (x86_64, arm64, etc.)\n\n" +
      "Otros comandos de info del sistema:\n" +
      "  cat /etc/os-release   → distribución y versión\n" +
      "  lsb_release -a        → info de la distribución (Ubuntu/Debian)\n" +
      "  hostnamectl           → hostname y sistema\n" +
      "  uptime                → tiempo que lleva encendido el sistema"
  },
  {
    "profe": false,
    "unit": "Linux - Bash y Scripts",
    "diff": "medium",
    "q": "¿Qué comando muestra todas las variables de entorno del sistema?",
    "extra": "",
    "opts": [
      "env",
      "printenv",
      "set",
      "export"
    ],
    "ans": 0,
    "exp": "El comando 'env' muestra todas las variables de entorno.\n\n" +
      "Comandos relacionados:\n" +
      "  env              → muestra todas las variables de entorno\n" +
      "  printenv         → igual que env\n" +
      "  printenv PATH    → muestra solo la variable PATH\n" +
      "  echo $HOME       → muestra el valor de una variable específica\n" +
      "  set              → muestra variables + funciones del shell\n\n" +
      "Variables de entorno importantes:\n" +
      "  $PATH   → directorios donde se buscan los comandos\n" +
      "  $HOME   → directorio del usuario\n" +
      "  $USER   → nombre del usuario actual\n" +
      "  $SHELL  → shell por defecto\n" +
      "  $PWD    → directorio actual\n\n" +
      "Para crear/exportar una variable:\n" +
      "  export MI_VAR='valor'"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema de Archivos",
    "diff": "medium",
    "q": "¿Qué diferencia hay entre un enlace simbólico (soft link) y un enlace duro (hard link)?",
    "extra": "",
    "opts": [
      "Soft link: apunta a la ruta (se rompe si se elimina el original) | Hard link: apunta al mismo inode (el archivo persiste)",
      "Soft link: copia el archivo | Hard link: apunta a la ruta original",
      "Soft link: solo para directorios | Hard link: solo para archivos de texto",
      "Son exactamente iguales, solo cambia el comando de creación"
    ],
    "ans": 0,
    "exp": "Diferencias entre tipos de enlace:\n\n" +
      "Enlace simbólico (soft link):\n" +
      "  ln -s original.txt enlace.txt\n" +
      "  → Apunta a la RUTA del archivo original\n" +
      "  → Si se elimina el original, el enlace se 'rompe' (dangling link)\n" +
      "  → Puede enlazar directorios\n" +
      "  → Puede cruzar sistemas de archivos distintos\n" +
      "  → ls -la muestra: enlace.txt -> original.txt\n\n" +
      "Enlace duro (hard link):\n" +
      "  ln original.txt enlace.txt\n" +
      "  → Apunta al mismo INODE (mismos datos en disco)\n" +
      "  → Si se elimina el original, el enlace sigue funcionando\n" +
      "  → No puede enlazar directorios\n" +
      "  → No puede cruzar sistemas de archivos\n" +
      "  → Ambos archivos son indistinguibles"
  },
  {
    "profe": false,
    "unit": "Linux - Bash y Scripts",
    "diff": "medium",
    "q": "¿Qué comando muestra el historial de comandos ejecutados en la terminal?",
    "extra": "",
    "opts": [
      "history",
      "log",
      "last",
      "recent"
    ],
    "ans": 0,
    "exp": "El comando 'history' muestra el historial de comandos.\n\n" +
      "Usos:\n" +
      "  history        → muestra todos los comandos\n" +
      "  history 20     → muestra los últimos 20\n" +
      "  history | grep ssh → busca comandos SSH en el historial\n\n" +
      "Atajos del historial:\n" +
      "  !!             → repite el último comando\n" +
      "  !500           → ejecuta el comando número 500\n" +
      "  !ssh           → ejecuta el último comando que empezó con 'ssh'\n" +
      "  Ctrl+R         → búsqueda inversa en el historial\n\n" +
      "El historial se guarda en:\n" +
      "  ~/.bash_history  → para bash\n" +
      "  ~/.zsh_history   → para zsh"
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "hard",
    "case": "El servidor tiene alta carga de CPU. Necesitas identificar qué proceso está consumiendo más recursos y luego terminarlo.",
    "q": "¿Cuál es la secuencia correcta de comandos?",
    "extra": "",
    "opts": [
      "top (ordenar con P) → anotar PID → kill -9 PID → ps aux | grep PID",
      "ps aux → kill proceso → top → verify",
      "htop → stop proceso → reboot → check",
      "cat /proc/cpu → find PID → terminate PID → check /var/log"
    ],
    "ans": 0,
    "exp": "Secuencia para identificar y terminar un proceso problemático:\n\n" +
      "1) top → presionar 'P' para ordenar por CPU\n" +
      "   o: ps aux --sort=-%cpu | head -10\n\n" +
      "2) Anotar el PID del proceso que más consume\n" +
      "   o: pgrep nombre_proceso\n\n" +
      "3) Terminar el proceso:\n" +
      "   kill PID        → intenta terminar con gracia (SIGTERM)\n" +
      "   kill -9 PID     → fuerza la terminación (SIGKILL)\n\n" +
      "4) Verificar que terminó:\n" +
      "   ps aux | grep PID\n" +
      "   o volver a top\n\n" +
      "Alternativa rápida:\n" +
      "   htop → seleccionar proceso → F9 → SIGKILL\n\n" +
      "Siempre intentar SIGTERM antes de SIGKILL,\n" +
      "ya que SIGTERM permite al proceso limpiar recursos."
  },
  {
    "profe": false,
    "unit": "Linux - Sistema",
    "diff": "hard",
    "case": "Necesitas ver los logs del servicio nginx de los últimos 30 minutos para diagnosticar un error.",
    "q": "¿Qué comando de journalctl usas?",
    "extra": "",
    "opts": [
      'journalctl -u nginx --since "30 minutes ago"',
      'journalctl nginx -t 30m',
      'journalctl --service=nginx --last=30',
      'cat /var/log/nginx/error.log | tail -30m'
    ],
    "ans": 0,
    "exp": "El comando correcto es:\n" +
      '  journalctl -u nginx --since "30 minutes ago"\n\n' +
      "Opciones útiles de journalctl:\n" +
      "  -u nginx              → filtra por servicio nginx\n" +
      '  --since "1 hour ago"  → desde hace 1 hora\n' +
      '  --since "2026-04-13"  → desde una fecha\n' +
      '  --until "2026-04-13 12:00" → hasta una hora\n' +
      "  -f                    → sigue en tiempo real\n" +
      "  -n 100                → últimas 100 líneas\n" +
      "  -p err                → solo errores\n" +
      "  -p warning            → advertencias y superior\n\n" +
      "Combinaciones útiles:\n" +
      '  journalctl -u nginx -f                    → logs nginx en tiempo real\n' +
      '  journalctl -u nginx -p err --since today  → errores de hoy\n' +
      "  journalctl --disk-usage                   → espacio usado por logs"
  },
  {
    "profe": false,
    "unit": "Linux - Redes",
    "diff": "hard",
    "case": "Necesitas copiar el directorio /var/www/html completo desde tu máquina local al servidor remoto 192.168.1.50, usuario deploy, puerto 22, en la ruta /var/backups/.",
    "q": "¿Cuál es el comando scp correcto?",
    "extra": "",
    "opts": [
      "scp -r /var/www/html deploy@192.168.1.50:/var/backups/",
      "scp /var/www/html deploy@192.168.1.50:/var/backups/",
      "scp -r deploy@192.168.1.50:/var/www/html /var/backups/",
      "rsync /var/www/html deploy@192.168.1.50:/var/backups/"
    ],
    "ans": 0,
    "exp": "El comando correcto es:\n" +
      "  scp -r /var/www/html deploy@192.168.1.50:/var/backups/\n\n" +
      "Desglose:\n" +
      "  scp       → Secure Copy (copia por SSH)\n" +
      "  -r        → recursivo (necesario para directorios)\n" +
      "  origen    → /var/www/html (local)\n" +
      "  destino   → deploy@192.168.1.50:/var/backups/\n\n" +
      "Otros ejemplos scp:\n" +
      "  scp archivo.txt user@host:/destino/          → copia archivo local a remoto\n" +
      "  scp user@host:/remoto/archivo.txt /local/    → copia remoto a local\n" +
      "  scp -P 2222 archivo.txt user@host:/destino/  → con puerto específico\n\n" +
      "Alternativa más eficiente para sincronización:\n" +
      "  rsync -avz /var/www/html deploy@192.168.1.50:/var/backups/"
  },
  {
    "profe": false,
    "unit": "Linux - Bash y Scripts",
    "diff": "hard",
    "case": "Escribe un script que verifique si el archivo /etc/nginx/nginx.conf existe. Si existe, muestra 'Configuración encontrada'. Si no, muestra 'Archivo no encontrado'.",
    "q": "¿Cuál es el script correcto?",
    "extra": "",
    "opts": [
      '#!/bin/bash\nif [ -f /etc/nginx/nginx.conf ]; then\n  echo "Configuración encontrada"\nelse\n  echo "Archivo no encontrado"\nfi',
      '#!/bin/bash\nif exists /etc/nginx/nginx.conf; then\n  echo "Configuración encontrada"\nfi',
      '#!/bin/bash\ncheck -f /etc/nginx/nginx.conf\necho "Configuración encontrada"',
      '#!/bin/bash\nif /etc/nginx/nginx.conf == true; then\n  echo "Configuración encontrada"\nfi'
    ],
    "ans": 0,
    "exp": "El script correcto:\n" +
      "  #!/bin/bash\n" +
      "  if [ -f /etc/nginx/nginx.conf ]; then\n" +
      '    echo "Configuración encontrada"\n' +
      "  else\n" +
      '    echo "Archivo no encontrado"\n' +
      "  fi\n\n" +
      "Operadores de archivos en bash:\n" +
      "  -f archivo  → verdadero si existe y es un archivo regular\n" +
      "  -d archivo  → verdadero si existe y es un directorio\n" +
      "  -e archivo  → verdadero si existe (cualquier tipo)\n" +
      "  -r archivo  → verdadero si tiene permiso de lectura\n" +
      "  -w archivo  → verdadero si tiene permiso de escritura\n" +
      "  -x archivo  → verdadero si tiene permiso de ejecución\n" +
      "  -s archivo  → verdadero si existe y no está vacío\n\n" +
      "Estructura if-else en bash:\n" +
      "  if [ condición ]; then\n" +
      "    comandos\n" +
      "  elif [ otra_condición ]; then\n" +
      "    otros_comandos\n" +
      "  else\n" +
      "    comandos_por_defecto\n" +
      "  fi"
  },
  {
    "profe": false,
    "unit": "Linux - Bash y Scripts",
    "diff": "hard",
    "case": "Tienes el siguiente pipeline y debes explicar qué hace cada parte:\ncat /var/log/auth.log | grep 'Failed password' | awk '{print $11}' | sort | uniq -c | sort -rn | head -10",
    "q": "¿Qué hace este comando completo?",
    "extra": "",
    "opts": [
      "Muestra las 10 IPs que más intentos fallidos de SSH tienen (posibles ataques de fuerza bruta)",
      "Muestra los 10 usuarios que fallaron al iniciar sesión",
      "Muestra los últimas 10 líneas del log de autenticación",
      "Cuenta cuántos usuarios tienen contraseña fallida en el sistema"
    ],
    "ans": 0,
    "exp": "Este comando analiza intentos fallidos de SSH (detección de fuerza bruta):\n\n" +
      "  cat /var/log/auth.log     → lee el log de autenticación\n" +
      "  grep 'Failed password'    → filtra solo los intentos fallidos\n" +
      "  awk '{print $11}'         → extrae el campo 11 (la IP de origen)\n" +
      "  sort                      → ordena las IPs alfabéticamente\n" +
      "  uniq -c                   → cuenta ocurrencias únicas\n" +
      "  sort -rn                  → ordena numéricamente de mayor a menor\n" +
      "  head -10                  → muestra solo las 10 primeras\n\n" +
      "Salida típica (IP → cantidad de intentos):\n" +
      "    342 192.168.1.200\n" +
      "    128 10.0.0.55\n" +
      "     45 172.16.0.10\n\n" +
      "Este tipo de análisis es fundamental en ciberseguridad para:\n" +
      "  → Detectar ataques de fuerza bruta\n" +
      "  → Identificar IPs a bloquear con fail2ban o ufw"
  }


];



export default preguntas_linux;