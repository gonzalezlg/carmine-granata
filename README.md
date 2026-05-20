# Carmine Granata

Aplicacion web profesional para una bodega boutique.

## Stack inicial

- React
- Vite
- JavaScript
- TailwindCSS
- React Router
- Framer Motion
- Supabase client

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Estructura

- `src/components`: componentes reutilizables.
- `src/pages`: pantallas conectadas a rutas.
- `src/layouts`: estructuras comunes de pagina.
- `src/services`: funciones para servicios externos o Supabase.
- `src/hooks`: hooks reutilizables.
- `src/context`: estado global cuando realmente sea necesario.
- `src/supabase`: cliente y helpers de Supabase.
- `src/assets`: imagenes y archivos estaticos importados por React.
- `src/styles`: estilos base y configuraciones globales.

## Supabase

Cuando llegue la integracion real, crear un archivo `.env` local con:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Por ahora el proyecto no implementa auth, ecommerce, reservas ni dashboard.
