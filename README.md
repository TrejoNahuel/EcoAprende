# EcoAprende - Guía de Inicio Rápido y Reglamento del Equipo

Bienvenidos al repositorio oficial de **EcoAprende**, plataforma educativa ambiental de xAcademy.

Para asegurar que todos los miembros del equipo podamos trabajar sin conflictos de entorno ("en mi máquina sí funciona"), hemos automatizado la instalación. Ahora existen **dos formas de levantar el proyecto**: la forma tradicional (dos terminales, todo local) y con **Docker** (todo en contenedores). Elegí la que prefieras — ambas quedan documentadas en la sección 4.

---

## 1. Requisitos Previos (¡Muy Importante!)

Los requisitos dependen de qué opción vayas a usar para levantar el proyecto (sección 4).

### Si vas a usar Docker (Opción B, recomendada)

- **Docker** y **Docker Compose** instalados (Docker Desktop en Windows/Mac, o Docker Engine + el plugin `docker compose` en Linux).
- No necesitás tener Node instalado en tu máquina: los contenedores corren con Node 24 adentro, sin importar la versión que tengas localmente. El requisito de Node de abajo aplica solo a la Opción A.

### Si vas a usar la forma tradicional (Opción A, sin Docker)

- **Node.js:** Debes usar la versión `v20.x` (LTS), para evitar el error `EBADENGINE`.
  - *Si tienes una versión mayor (ej. 22) o menor, te recomendamos usar NVM para cambiar a la v20.*

---

## 2. Instalación de dependencias (El "Comando Mágico")

> Este paso solo es necesario si vas a trabajar con la **Opción A**, o si querés tener los `node_modules` instalados localmente para que tu editor te dé autocompletado y linting. Si vas a usar **Docker** de forma exclusiva, podés saltear este paso: las dependencias se instalan solas dentro de las imágenes cuando se construyen los contenedores.

**No intenten instalar las carpetas una por una ni usar comandos de otros lenguajes.** Hemos creado un archivo `package.json` global en la raíz del proyecto que hace todo por ustedes.

1. Abre tu terminal y clona este repositorio.
2. Ingresa a la carpeta raíz:

```bash
cd EcoAprende
```

3. Ejecuta este único comando:

```bash
npm run instalar-todo
```

**¿Qué hace este comando automáticamente?**

- Instala Angular CLI (`v18.x`) y NestJS CLI (`v11.x`) de forma global en sus computadoras.
- Entra a la carpeta `/frontend` e instala todas las dependencias.
- Entra a la carpeta `/backend` e instala todas las dependencias.

> **Nota para usuarios de Linux/Mac:** Si el comando anterior les da un error de permisos `EACCES`, es posible que necesiten permisos de administrador para instalar las herramientas globales.

---

## 3. Configuración inicial del Backend

Antes de iniciar el proyecto por primera vez, es necesario configurar el entorno y preparar la base de datos.

### 3.1 Crear el archivo `.env` — **solo si vas a usar la Opción A (sin Docker)**

Dentro de la carpeta `backend`, crear una copia del archivo de ejemplo:

```bash
cd backend
cp .env.template .env
```

*(En Windows pueden copiar el archivo manualmente y renombrarlo a `.env`.)*

> ⚠️ **Importante:** las variables de conexión a la base (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`) y las de JWT (`JWT_SECRET`, `JWT_EXPIRATION`) ya **no tienen valores por defecto** en el código. Si falta alguna en tu `.env`, el backend no va a poder arrancar.

> 🐳 **Si vas a usar Docker (Opción B), no hace falta crear este archivo.** `docker-compose.dev.yml` ya define esas mismas variables directamente como entorno del contenedor, y el `.dockerignore` del backend excluye el `.env` a propósito, para que nunca termine copiado dentro de la imagen.

---

### 3.2 Crear la base de datos

Este paso se ejecuta igual en ambas opciones — lo único que cambia es *desde dónde* lo corrés (ver sección 4 para el detalle de cada caso):

```bash
npm run db:reset
```

Este comando:

- Elimina la base de datos (si existe).
- Crea una nueva base de datos.
- Ejecuta todas las migraciones.

---

### 3.3 Cargar datos iniciales

Una vez creada la base de datos, ejecutar:

```bash
npm run db:seed
```

Este comando carga los datos iniciales necesarios para el desarrollo, incluyendo usuarios de prueba y módulos.

#### Usuarios disponibles

| Rol | Email | Contraseña |
|------|------------------------|------------|
| Estudiante | `student@example.com` | `student` |
| Profesor | `teacher@example.com` | `teacher` |

---

## 4. Cómo levantar el proyecto localmente

Elegí una de las dos opciones. No hace falta hacer las dos.

### Opción A — Modo tradicional (dos terminales)

Necesitas abrir **dos terminales distintas** (una para el Front y otra para el Back). Requiere haber hecho la instalación de dependencias (sección 2) y haber creado el `.env` (sección 3.1).

**Backend (API en puerto 3000)**

```bash
cd backend
npm run start:dev
```

**Frontend (Web en puerto 4200)**

```bash
cd frontend
ng serve
```

---

### Opción B — Con Docker (todo en un solo comando)

No hace falta instalar Node, Angular CLI ni NestJS CLI localmente, ni crear el `.env`: todo corre adentro de contenedores, ya configurados en `docker-compose.dev.yml`.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta los 3 servicios (`db`, `backend`, `frontend`) con `docker compose up`. La primera vez construye las imágenes automáticamente. |
| `npm run dev:build` | Igual que `dev`, pero fuerza el rebuild de las imágenes (`--build`). Usalo la primera vez, o cada vez que cambies un `dockerfile.dev` o instales una dependencia nueva en `backend/package.json` o `frontend/package.json`. |
| `npm run dev:down` | Apaga y elimina los contenedores. **No borra los datos de la base**: el volumen `mysql_data` persiste entre reinicios. |
| `npm run db:reset` | Corre, **dentro del contenedor `backend`**, el mismo script `db:reset` que ya existe en `/backend/package.json` (sección 3.2): borra la base (si existe), la crea de nuevo y corre las migraciones. |
| `npm run db:seed` | Corre, dentro del contenedor `backend`, el mismo script `db:seed` de `/backend/package.json` (sección 3.3): carga los usuarios de prueba y módulos iniciales. |

**Primera vez que levantás el proyecto:**

```bash
npm run dev:build
```

En otra terminal, con los contenedores ya corriendo, preparás la base:

```bash
npm run db:reset
npm run db:seed
```

**Uso normal, día a día (sin cambios en dependencias):**

```bash
npm run dev
```

**Para apagar todo:**

```bash
npm run dev:down
```

> ⚠️ `db:reset` y `db:seed` usan `docker compose exec`, así que necesitan que los contenedores ya estén corriendo (`npm run dev` en otra terminal, o el mismo `dev`/`dev:build` corriendo en background).

Una vez arriba, los servicios quedan disponibles en:

- **Frontend:** http://localhost:4200
- **Backend (API):** http://localhost:3000
- **MySQL:** `localhost:3306` (user `ecoaprende` / pass `ecoaprende`, o `root` / `root`) — útil si querés conectarte con un cliente como DBeaver o TablePlus para inspeccionar la base.

---

## 5. Reglamento de Git (Feature Branch Workflow)

Para mantener el código limpio y no pisarnos el trabajo, seguiremos este flujo.

**Regla de Oro:** 1 Ticket = 1 Rama = 1 Pull Request (PR). **NO** mezclar tareas en la misma rama.

### 1. Actualizar SIEMPRE tu rama `main` antes de empezar

```bash
git checkout main
git pull
```

### 2. Crear la rama para tu ticket (Ejemplo: Ticket T005)

```bash
git checkout -b feature/T005
```

### 3. Trabajar, guardar y subir

```bash
git add .
git commit -m "T005: Descripción clara de lo que hiciste"
git push -u origin feature/T005
```

### 4. Crear el Pull Request

- Ve a GitHub y crea un PR desde tu rama hacia `main`.
- El título del PR debe ser: `T005: descripción corta`.
- Espera la revisión de un compañero antes de hacer el merge.