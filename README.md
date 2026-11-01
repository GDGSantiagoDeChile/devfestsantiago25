# GDG DevFest Santiago 2025

Sitio web histórico de **GDG DevFest Santiago 2025**, adaptado para su despliegue estático en **GitHub Pages** dentro de la organización [GDG Santiago de Chile](https://github.com/GDGSantiagoDeChile/devfestsantiago25).

## Desarrollo local

Instala las dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

## Exportación estática (GitHub Pages)

El proyecto está configurado con `output: "export"` en [`next.config.ts`](./next.config.ts) para generar una versión 100% estática en el directorio `out/`:

```bash
# Compilación local en raíz
npm run build

# Compilación con subruta de GitHub Pages
NEXT_PUBLIC_BASE_PATH=/devfestsantiago25 npm run build
```

El despliegue a GitHub Pages se realiza automáticamente mediante GitHub Actions (`.github/workflows/deploy.yml`) al hacer push a la rama `main`.

## Créditos y agradecimientos

Sitio web elaborado para **GDG Santiago de Chile** con la valiosa colaboración de [**Erasmo Hernandez (@erasmoh)**](https://github.com/erasmoh) en el desarrollo de la base original del proyecto ([`erasmoh/devfest`](https://github.com/erasmoh/devfest)).

