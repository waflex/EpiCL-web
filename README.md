


          
# EpiCL-web: Epic The Musical Fan Club Chile

![Epic The Musical Logo](https://epic-musical-chile.netlify.app/_astro/Epic_Logo.BCeKytGC_Z1emcf9.webp)

## 📖 Descripción

EpiCL-web es el sitio web oficial del Fan Club de Epic: The Musical en Chile. Nuestra plataforma está diseñada para conectar a los fans chilenos de este increíble musical, ofreciendo un espacio donde pueden compartir su pasión, teorías, fanarts y experiencias relacionadas con Epic: The Musical.

## ✨ Características

- **Diseño Responsivo**: Experiencia óptima en dispositivos móviles, tablets y escritorio
- **Modo Oscuro/Claro**: Cambia entre temas según tu preferencia
- **Templos Temáticos**: Espacios dedicados a diferentes aspectos de la comunidad
- **Mapa Interactivo**: Visualiza actividades por región en Chile
- **Galería de Fanarts**: Comparte y explora creaciones de la comunidad
- **Calendario de Eventos**: Mantente al día con nuestras actividades
- **Carrusel de Instagram**: Muestra las últimas publicaciones de artistas de la comunidad
- **Widgets de Discord**: Integración con nuestro servidor oficial

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web para sitios estáticos de alto rendimiento
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [DaisyUI](https://daisyui.com/) - Componentes para Tailwind CSS
- [Cloudinary](https://cloudinary.com/) - Gestión de imágenes
- [Google Analytics](https://analytics.google.com/) - Análisis de tráfico web

## 🚀 Estructura del Proyecto

```
EpiCL-web/
├── public/
│   ├── Img/
│   └── maps/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   ├── CaruselInsta.astro
│   │   ├── BtnDiscord.astro
│   │   └── ThemeToggle.astro
│   ├── css/
│   ├── Img/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── About.astro
│       ├── actividades.astro
│       ├── index.astro
│       ├── Templos.astro
│       └── templos/
│           ├── apolo.astro
│           ├── ares.astro
│           ├── artemisa.astro
│           ├── athenea.astro
│           ├── demeter.astro
│           ├── dioniso.astro
│           └── hecate.astro
├── astro.config.mjs
├── package.json
├── netlify.toml
└── tsconfig.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa de la build antes de desplegar      |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtén ayuda usando Astro CLI                     |

## 🌐 Despliegue

El sitio está configurado para desplegarse automáticamente en Netlify. Cualquier cambio en la rama principal activará un nuevo despliegue.

```bash
# Para desplegar manualmente
npm run build
```

## 🏛️ Templos

Nuestro sitio cuenta con "Templos" temáticos, cada uno dedicado a un aspecto diferente de la comunidad:

- **Templo de Ares**: Dedicado a videojuegos y Minecraft
- **Templo de Artemisa**: Espacio seguro para miembros menores de edad
- **Templo de Atenea**: Para amantes de la literatura y escritura creativa
- **Templo de Hécate**: Enfocado en artes místicas y conocimiento esotérico
- **Templo de Apolo**: Dedicado a la música y composición
- **Templo de Dioniso**: Espacio exclusivo para adultos con conversaciones elevadas sobre Epic
- **Templo de Demeter**: [En desarrollo]
- **Templo de Proteo**: Espacio dedicado a los fanáticos del cosplay y las creaciones de ficción
- **Templo de Hefesto**: Dedidado a los artistas de nuestra comunidad

## 👥 Contribución

¿Quieres contribuir al desarrollo del sitio? ¡Genial! Sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.

## 📞 Contacto

- Discord: [Servidor Oficial](https://discordapp.com/widget?id=1342862509509578834)
- Sitio Web: [epicchile.com](https://www.epicchile.com/)

---

Desarrollado con ❤️ por el Fan Club de Epic: The Musical en Chile
        
