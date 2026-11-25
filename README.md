# HB-ECOM — E-commerce isomórfico con Handlebars

SW608 Lenguajes de Dominio Específico · UNI · Semestre 2026-II · Proyecto 5

## Requisitos
Node 20+, MongoDB 7 (o Docker).

## Ejecución (clone → install → run)
```bash
git clone <URL_DEL_REPO> && cd sw608-hb-ecom
cp .env.example .env
npm install
npm run build        # precompila las plantillas Handlebars
npm run seed         # carga el dataset semilla
npm run dev          # http://localhost:3000
```
Con Docker: `docker compose up --build`

## Módulos
| Módulo | Responsable | Carpeta principal |
|---|---|---|
| M1 Núcleo DSL | Gomez Felix Marco Sebastian | `src/views`, `src/shared/helpers`, `scripts/build-templates.js`, `demo-xss` |
| M2 Isomorfismo + i18n | Muñoz Bolaños Pablo Antonio | `src/client`, `src/shared/i18n.js`, `src/locales` |
| M3 Backend + datos + catálogo | Ramirez Veramendi Luis Angel | `src/server`, `scripts/seed.js` |
| M4 Carrito + checkout + calidad | Zuñiga Canto Fabricio Sebastian | `src/server/services/cart*`, `tests`, `.github` |

Documentación completa en [`docs/`](docs/).
