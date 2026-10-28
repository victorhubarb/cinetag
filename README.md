# Cinetag

A small movie and video catalog built with React. The home page lists titles, each card opens a player page, and a heart on every card adds it to a favorites page.

**Live demo:** [cinetag-indol.vercel.app](https://cinetag-indol.vercel.app)

## What's inside

- **Data from an API.** The list and the player both fetch from a mock REST API that I host from a separate repo, [cinetag-api](https://github.com/victorhubarb/cinetag-api), through `my-json-server.typicode.com`.
- **Routing.** React Router 6 with a shared layout route (`PaginaBase`: header, footer, outlet) and these pages: `/` (home), `/favoritos`, `/:id` (player) and a 404 fallback.
- **Favorites in Context.** `FavoritosProvider` keeps the list, and a `useFavoritoContext` hook exposes `adicionarFavorito`, which adds a movie or removes it if it is already there. Cards on every page read the same state, so the heart icon stays in sync.
- **Styling.** CSS Modules, one file per component, with absolute imports (`jsconfig.json` sets `baseUrl` to `src`).

The interface is in Portuguese.

## Stack

React 18, React Router 6, CSS Modules, Create React App, deployed on Vercel.

## Run it locally

Requires Node.js 18 or newer.

```bash
git clone https://github.com/victorhubarb/cinetag.git
cd cinetag
npm install
npm start
```

Opens at `http://localhost:3000`. It needs internet access because the movie data comes from the hosted API.

## Project structure

```
src/
├── pages/        Inicio, Favoritos, Player, NaoEncontrada, PaginaBase (layout)
├── componentes/  Banner, Cabecalho, CabecalhoLink, Card, Container, Rodape, Titulo
├── contextos/    Favoritos: provider and hook
└── routes.jsx    Route table
```

## Known gaps

- Favorites live in memory, so they are lost on reload. `localStorage` would fix that.
- In `Player`, the data-fetching `useEffect` has no dependency array (the `[]` ended up as an argument to `.then`), so it fetches again after every render. It should depend on `parametros.id`.
- The home page shows nothing while loading and has no error state if the API is down.
- No tests.

---

Victor Hugo Barbosa · [GitHub](https://github.com/victorhubarb) · [LinkedIn](https://www.linkedin.com/in/victorhbarbosa/)
