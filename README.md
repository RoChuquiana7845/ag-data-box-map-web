# 📌 Ag-Data-Box-Map-Web

Este es el repositorio del frontend del proyecto **Ag-Data-Box-Map-Web**, desarrollado con **Next.js**.

## 📋 Prerrequisitos

Antes de comenzar con este proyecto, asegúrate de haber ejecutado los siguientes proyectos en el orden especificado:

1. **Ag-Data-Box-Map-DB** → Configuración y despliegue de la base de datos.
2. **Ag-Data-Box-Map-Service** → Backend y servicios API para la aplicación.

## 🧑‍💻 Desarrollo

Sigue estos pasos para ejecutar el proyecto en un entorno de desarrollo:

### 1️⃣ Configurar el archivo de entorno

Crea un archivo `.env` copiando el ejemplo proporcionado:

```bash
cp .env.example .env
```

Edita el archivo `.env` con los valores correctos según tu configuración.

### 2️⃣ Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

### 3️⃣ Iniciar el servidor de desarrollo

Para iniciar el servidor de desarrollo en el puerto especificado en el archivo `.env`, ejecuta:

```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3001` o en el puerto que hayas definido en el archivo de entorno.

## ⚙️ Variables de Entorno

Asegúrate de que tu archivo `.env` contenga las siguientes variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3005/
```

Recuerda que este url debe coincidir con tu url del backend.

## 🚀 Despliegue

Para desplegar la aplicación en un entorno de producción, sigue estos pasos:

1. Construye la aplicación:

   ```bash
   npm run build
   ```

2. Inicia la aplicación en modo producción:

   ```bash
   npm start
   ```

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.

---

Author - [Roberto Chuquiana] 🚀
