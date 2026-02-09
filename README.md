# ChocosFront 🍫

Este proyecto es el frontend de **Chocos**, desarrollado con **React + Vite**.  
En este documento se explican los pasos necesarios para instalar, configurar y ejecutar el proyecto de manera local, así como el flujo básico de trabajo con Git.

---

## 🛠️ Herramientas necesarias

Antes de iniciar, es necesario tener instaladas las siguientes herramientas:

### Editor de código
- **Visual Studio Code**  
  https://code.visualstudio.com/

### Node.js
- **Node.js v24 o superior**  
  https://nodejs.org/

### Controlador de versiones
- **Git**  
  https://git-scm.com/

---

## ✅ Verificar instalación

Después de instalar las herramientas, abre una terminal (CMD, PowerShell o Terminal) y ejecuta los siguientes comandos:

```bash
node -v
npm -v
git -v
```
Si todo ha salido bien y ha mostrado la versión de cada herramienta, se puede continuar con la siguiente sección de instalación.

## Configuración local del proyecto

Al estar dentro del repositorio de “Github”, dará clic en la parte de “Code” y copiará el link que se muestra del repositorio

Después iremos a la carpeta de nuestra computadora donde queramos guardar el proyecto

Y en la barra superior de direcciones escribiremos “CMD” y daremos “Enter”

De esta manera se nos abrirá una terminal en donde ejecutaremos los siguientes comandos

```bash
git clone https://github.com/rodrigocarreonc/ChocosFront.git (para bajar el proyecto)

cd ChocosFront (entrar dentro de la carpeta del proyecto)

code . (abrir proyecto en VS Code)
```
## Inicializar rama de desarrollo
Ya dentro de “Visual Studio Code” se debe presionar la combinación de teclas “CTRL + Shift + Ñ” (o “Command + Shift + Ñ” en MAC), de esta manera se abrirá una terminal dentro de nuestro proyecto y podremos 	quitar la anterior del CMD. 

Para comenzar a desarrollar en el proyecto se debe de crear una rama para guardar nuestros cambios, actualmente existen dos:

•	“main” (producción o resultado final)
•	“dev” (área de desarrollo). 

Cada uno deberá crear una rama con su nombre desde dev. Con los comandos:

```bash
git branch (ver en que rama estas)

git switch dev (cambiar a rama “dev”)

git checkout -b {nombre} (crear una nueva rama personal)
```
De esta manera cada uno tendrá su área de desarrollo y podrá aportar sin afectar el avance de los demás.

De igual manera, si ya existe su rama solo hace falta cambiar hacia ella con 
```bash 
git switch {su_rama} 
```

Para que Github empiece a rastrear nuestros cambios y se puedan guardar correctamente en el repositorio correremos el comando 
```bash 
git push --set-upstream origin {su_rama}
```

Así registraremos nuestra rama en el repositorio y se podrán guardar los cambios correctamente

Después, para instalar todas las dependencias necesarias del proyecto, en esta terminal se correrá el comando 
```bash 
npm install. 
```

En esa misma terminal después se correrá el comando 
```bash 
npm run dev
``` 
para ejecutar el proyecto en el navegador.

Entre a la dirección http://localhost:5173/ (o la que se muestre) y ahí estará nuestro proyecto corriendo

Listo! ya podrás comenzar a desarrollar dentro del proyecto. 

Como recomendación siempre verifica en que rama estas antes de hacer algún cambio, esto para no hacer cambios en ramas ajenas:
```bash 
git branch
```
Y cuando termines de hacer un avance corre estos comandos para guardar:
```bash 
git add . (guardar los cambios)

git commit -m “{mensaje}” (poner mensaje de que se hizo de desarrollo)

git push origin {su_nombre} (subir cambios al repositorio de github desde su rama)
```
