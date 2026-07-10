# 🌱 EcoAprende - Guía de Inicio Rápido y Reglamento del Equipo

[cite_start]Bienvenidos al repositorio oficial de **EcoAprende**, plataforma educativa ambiental de xAcademy[cite: 3]. 
[cite_start]Para asegurar que los 11 miembros del equipo podamos trabajar sin conflictos de entorno ("en mi máquina sí funciona"), hemos automatizado la instalación[cite: 183, 205]. Por favor, sigan **estrictamente** estos pasos.

---

## 🛠️ 1. Requisitos Previos (¡Muy Importante!)

[cite_start]Antes de clonar el proyecto, debes asegurarte de tener la versión correcta de Node.js instalada para evitar el error `EBADENGINE`[cite: 185]:

* [cite_start]**Node.js:** Debes usar la versión `v20.x` (LTS)[cite: 184].
* *Si tienes una versión mayor (ej. 22) o menor, te recomendamos usar NVM para cambiar a la v20.*

---

## 🚀 2. Instalación Automática (El "Comando Mágico")

[cite_start]**No intenten instalar las carpetas una por una ni usar comandos de otros lenguajes.** Hemos creado un archivo `package.json` global en la raíz del proyecto que hace todo por ustedes[cite: 236, 267].

1. Abre tu terminal y clona este repositorio.
2. Ingresa a la carpeta raíz: `cd EcoAprende`
3. Ejecuta este único comando:

\`\`\`bash
npm run instalar-todo
\`\`\`

**¿Qué hace este comando automáticamente?**
* [cite_start]Instala Angular CLI (`v18.x`) y NestJS CLI (`v11.x`) de forma global en sus computadoras[cite: 270].
* [cite_start]Entra a la carpeta `/frontend` e instala todas las dependencias[cite: 271].
* [cite_start]Entra a la carpeta `/backend` e instala todas las dependencias[cite: 272].

[cite_start]*(Nota para usuarios de Linux/Mac: Si el comando anterior les da un error de permisos `EACCES`, es posible que necesiten permisos de administrador para instalar las herramientas globales [cite: 172]).*

---

## 💻 3. Cómo levantar el proyecto localmente

[cite_start]Para programar y ver los cambios, necesitas abrir **dos terminales distintas** (una para el Front y otra para el Back)[cite: 304]:

**Para el Backend (API en puerto 3000):**
\`\`\`bash
cd backend
npm run start:dev
\`\`\`

**Para el Frontend (Web en puerto 4200):**
\`\`\`bash
cd frontend
ng serve
\`\`\`

---

## 🌿 4. Reglamento de Git (Feature Branch Workflow)

[cite_start]Para mantener el código limpio y no pisarnos el trabajo, seguiremos este flujo[cite: 209]:

[cite_start]**Regla de Oro:** 1 Ticket = 1 Rama = 1 Pull Request (PR)[cite: 209]. [cite_start]**NO** mezclar tareas en la misma rama[cite: 210].

1. **Actualizar SIEMPRE tu rama main antes de empezar:**
   \`\`\`bash
   git checkout main
   git pull
   \`\`\`
2. **Crear la rama para tu ticket (Ejemplo: Ticket T005):**
   \`\`\`bash
   git checkout -b feature/T005
   \`\`\`
3. **Trabajar, guardar y subir:**
   \`\`\`bash
   git add .
   git commit -m "T005: Descripción clara de lo que hiciste"
   git push -u origin feature/T005
   \`\`\`
4. **Crear el Pull Request:**
   * [cite_start]Ve a GitHub y crea un PR desde tu rama hacia `main`[cite: 212].
   * [cite_start]El título del PR debe ser: `T005: descripción corta`[cite: 213].
   * [cite_start]Espera la revisión de un compañero antes de hacer el merge[cite: 214].