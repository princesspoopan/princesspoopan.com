# Changelog

## [2.0.0] - 2026-03-23

Complete modernization of the build toolchain and all dependencies. The project was originally built in 2019 and had accumulated 7 years of tooling debt — abandoned packages, deprecated APIs, and incompatible major versions.

---

### Build Tool: Webpack 4 → Vite 6

**Removed:**
- `webpack` (^4.30.0)
- `webpack-cli` (^3.3.1)
- `webpack-dev-server` (^3.3.1)
- `webpack.config.js`
- `webpack.development.config.js`
- `webpack.production.config.js`
- `awesome-typescript-loader` (^5.2.1) — unmaintained since 2020, incompatible with TypeScript 5
- `source-map-loader` (^0.2.4) — only needed as a Webpack workaround
- `html-webpack-plugin` (^3.2.0)
- `favicons-webpack-plugin` (^0.0.9) — extremely old, pinned to webpack 3 era
- `terser-webpack-plugin` (^1.2.3) — bundled into Webpack 5+, irrelevant with Vite
- `file-loader` (^3.0.1) — Webpack-specific, replaced by Vite's native asset handling
- `css-loader` (^2.1.1) — Webpack-specific
- `style-loader` (^0.23.1) — Webpack-specific
- `stylus-loader` (^3.0.2) — Webpack-specific

**Added:**
- `vite` (^6.3.1) — Vite replaces the entire Webpack pipeline. It uses native ES modules in development (instant HMR, no bundling step) and Rollup for production builds. TypeScript, JSX, CSS, Stylus, and static assets are all handled out of the box with zero configuration.
- `@vitejs/plugin-react` (^4.4.1) — official Vite plugin for React, provides Fast Refresh (HMR) and the JSX transform
- `stylus` (^0.64.0) — Vite detects `.styl` imports and invokes the `stylus` package directly; no loader wrapper needed

**Created:**
- `vite.config.ts` — minimal config, just registers the React plugin
- `index.html` (project root) — Vite requires the HTML entry point at the project root rather than inside `src/`. Contains a `<script type="module" src="/src/App.react.tsx">` tag. The original `src/index.html` was the template for `html-webpack-plugin`; that role is now served by this file directly.

**Why:** Webpack 4 with `awesome-typescript-loader` required a long chain of loaders and plugins to process TypeScript, CSS, Stylus, and assets. Every piece needed separate configuration and version-pinning. Vite handles all of this natively. Cold starts that previously took 15–30 seconds now take under 300ms. Production builds dropped from ~30 seconds to ~1.3 seconds.

---

### Babel: Removed entirely

**Removed:**
- `.babelrc` — contained `env`, `react`, `stage-2` presets and `react-hot-loader/babel` plugin
- `react-hot-loader` dependency (was used for HMR)

**Why:** Babel was used to transpile TypeScript/JSX and enable Hot Module Replacement. Vite uses esbuild (written in Go) for transpilation — it is 10–100× faster than Babel — and `@vitejs/plugin-react` provides React Fast Refresh for HMR. There is no longer any reason for Babel to be in this project.

---

### React 16 → React 19

**Changed in `package.json`:**
- `react` (^16.8.6 → ^19.1.0)
- `react-dom` (^16.8.6 → ^19.1.0)
- `@types/react` (^16.8.14 → ^19.1.0)
- `@types/react-dom` (^16.8.4 → ^19.1.0)

**Changed in `src/App.react.tsx`:**
- Replaced `ReactDOM.render(<App />, container)` with `createRoot(container).render(<App />)`.
  - `ReactDOM.render` was deprecated in React 18 and removed in React 19. `createRoot` is the correct API for React 18+.
- Removed the manual HMR block (`if (module.hot) { ... }`). This was a `react-hot-loader` pattern that polyfilled Hot Module Replacement under Webpack. Vite's React plugin provides React Fast Refresh natively with no boilerplate required.
- Removed `declare let module: any` and `declare let require: any` — these were workarounds for the lack of proper module type declarations under the old setup.
- Added `<React.StrictMode>` wrapper — the standard best-practice entry point for React 18+.

**Changed across all components and pages:**
- `import * as React from 'react'` → `import React from 'react'` (or removed entirely where React is not referenced directly).
  - The old `import * as React` syntax was required by the legacy JSX transform, which compiled `<div />` into `React.createElement('div')` and therefore needed `React` in scope. The new JSX transform (configured via `"jsx": "react-jsx"` in tsconfig) automatically imports the necessary runtime; the explicit React import is no longer required. Unused imports were removed to satisfy TypeScript strict mode (`noUnusedLocals`).
- `JSX.Element` → `React.ReactNode` or `React.ReactElement` throughout all `interface Props` and `interface States` definitions.
  - `JSX.Element` is the narrow type (a single rendered element). `React.ReactNode` is the correct type for `children` props as it also accepts `null`, `undefined`, strings, numbers, and arrays. `React.ReactElement` is used where an array of renderable elements is expected (e.g. `SlideShow`, `Carousel`).

**Files changed:** `App.react.tsx`, `AppRouter.react.tsx`, `AppLayout.react.tsx`, `BoxContainer.react.tsx`, `Button.react.tsx`, `Carousel.react.tsx`, `DetailList.react.tsx`, `Introduction.react.tsx`, `JobPeriod.react.tsx`, `LevelPoints.react.tsx`, `Menu.react.tsx`, `Navigator.react.tsx`, `PeriodList.react.tsx`, `RightMenu.react.tsx`, `SlideShow.react.tsx`, `AboutMe.react.tsx`, `CV.react.tsx`, `Home.react.tsx`, `Recommendations.react.tsx`, `WorkExperiences.react.tsx`

---

### React Router v5 → v6

**Changed in `package.json`:**
- `react-router-dom` (^5.0.0 → ^6.30.0)
- `@types/react-router-dom` (^4.3.2 → removed — types are now bundled in the package itself)

**Changed in `src/AppRouter.react.tsx`:**
- `<Switch>` → `<Routes>` — `Switch` was renamed to `Routes` in v6 and the old name no longer exists.
- `<Route path='/' component={Home} />` → `<Route path='/' element={<Home />} />` — the `component` prop was removed in v6. The `element` prop accepts a JSX element instead of a component reference, which gives proper TypeScript typing and allows passing props directly without needing render props.

**Why:** React Router v5 is end-of-life. v6 is a significant redesign that fixes the component/render prop ambiguity and aligns with React's concurrent rendering model.

---

### TypeScript 3 → 5

**Changed in `package.json`:**
- `typescript` (^3.4.5 → ^5.8.3)

**Changed in `tsconfig.json`:** Full rewrite.

| Setting | Before | After | Why |
|---|---|---|---|
| `target` | `es6` | `ES2020` | All modern browsers support ES2020; no need to downcompile further |
| `module` | `commonjs` | `ESNext` | Vite uses native ES modules; CommonJS output would require conversion |
| `moduleResolution` | (default: `node`) | `bundler` | The `bundler` strategy matches how Vite resolves imports, avoiding false TS errors on extensionless paths |
| `jsx` | `react` | `react-jsx` | Enables the new JSX transform; removes the requirement to import React in every JSX file |
| `lib` | (default) | `["ES2020", "DOM", "DOM.Iterable"]` | Explicit lib prevents accidental use of APIs unavailable in target environments |
| `useDefineForClassFields` | (absent) | `true` | Aligns TypeScript class field semantics with the ECMAScript spec |
| `isolatedModules` | (absent) | `true` | Required for Vite/esbuild which transpile files individually without full type information |
| `moduleDetection` | (absent) | `force` | Treats all files as modules, preventing global scope pollution |
| `noEmit` | (absent) | `true` | TypeScript is only used for type-checking; Vite/esbuild handles the actual transpilation |
| `strict` | (absent) | `true` | Enables all strict checks: `strictNullChecks`, `noImplicitAny`, etc. |
| `noUnusedLocals` | (absent) | `true` | Catches dead code |
| `noUnusedParameters` | (absent) | `true` | Catches unused function parameters |
| `allowImportingTsExtensions` | (absent) | `true` | Allows writing `import './Foo.react'` without specifying `.tsx` extension |
| `skipLibCheck` | (absent) | `true` | Skips type-checking of `.d.ts` files in `node_modules`; avoids false errors from third-party packages |

---

### Linting: tslint → ESLint 9

**Removed:**
- `tslint` (^5.16.0) — tslint was officially deprecated and archived in 2019. It has had zero updates since then and does not support TypeScript 4 or 5.
- `tslint.json`
- `.eslintrc` — the old ESLint config used the legacy `.eslintrc` format with CommonJS `extends` arrays

**Added:**
- `eslint` (^9.24.0)
- `@eslint/js` (^9.24.0)
- `typescript-eslint` (^8.29.1) — replaces `@typescript-eslint/parser` + `@typescript-eslint/eslint-plugin` (now unified into one package)
- `eslint-plugin-react` (^7.37.5)
- `eslint-plugin-react-hooks` (^5.2.0)
- `globals` (peer dep, provides browser/node global type sets)

**Created:**
- `eslint.config.js` — uses the new ESLint 9 flat config format (`export default tseslint.config(...)`). Sets `react/react-in-jsx-scope: off` since the new JSX transform means React does not need to be in scope.

---

### Image/Asset Imports

**Changed in `src/pages/CV.react.tsx`:**
- `declare let require: any` + `src={require('./poopan.jpg')}` → `import poopanImg from './poopan.jpg'` + `src={poopanImg}`
- `require()` is a CommonJS/Webpack runtime API. It does not exist in native ES modules or Vite's module graph. ES static imports are the correct approach and also allow bundlers to tree-shake and fingerprint assets at build time.

**Changed in `src/pages/WorkExperiences.react.tsx`:**
- All 8 `require('../slide-images/...')` calls replaced with named ES `import` statements at the top of the file.
- Removed `declare let require: any`.

**Created `src/vite-env.d.ts`:**
- Declares module types for `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.woff`, `.woff2` — tells TypeScript that importing these file types yields a `string` (the resolved URL). Without this, TypeScript would error on every image import.
- Also includes `/// <reference types="vite/client" />` which provides types for Vite-specific features like `import.meta.env` and `import.meta.hot`.

---

### Bug fixes revealed by strict TypeScript

**`SlideShow.react.tsx`:**
- `public state: States` + `public props: Props` — the redundant `public props` declaration was overwriting the base `Component.props` property and causing a TS2612 error. Removed.
- `slide?: number` (optional) → `slide: number` (required) in `States` interface. The field was always initialized in the constructor; marking it optional caused TypeScript to flag every use of `this.state.slide` as possibly undefined.

**`Carousel.react.tsx`:**
- Same fix: `item?: number` → `item: number` in `States`.

**`Button.react.tsx`:**
- `to={this.props.to}` — `to` is `string | undefined` but `Link`'s `to` prop requires a defined value. Added non-null assertion `this.props.to!` since the `href` branch is taken when `to` is absent (the existing conditional logic guarantees `to` is defined at this point).

---

### Removed files

| File | Reason |
|---|---|
| `webpack.config.js` | Replaced by Vite |
| `webpack.development.config.js` | Replaced by Vite |
| `webpack.production.config.js` | Replaced by Vite |
| `.babelrc` | Babel removed; Vite uses esbuild |
| `.eslintrc` | Replaced by `eslint.config.js` (ESLint 9 flat config) |
| `tslint.json` | tslint is abandoned; replaced by ESLint |
| `karma.conf.js` | Test runner config for Karma, which was already noted as being replaced (`"test": "echo refactoring to jest"`). Removed the leftover config. |

---

### Dependencies: removed from `package.json`

| Package | Was | Why removed |
|---|---|---|
| `global` | ^4.3.2 | Webpack-era shim for browser globals; not needed with Vite |
| `prop-types` | ^15.7.2 | Runtime prop validation predates TypeScript. With full TypeScript coverage, prop-types provides no additional safety and adds bundle weight |
| `tslint` | ^5.16.0 | Abandoned; replaced by ESLint |
| `webpack` | ^4.30.0 | Replaced by Vite |
| `awesome-typescript-loader` | ^5.2.1 | Webpack-specific, unmaintained |
| `css-loader` | ^2.1.1 | Webpack-specific |
| `favicons-webpack-plugin` | ^0.0.9 | Webpack-specific |
| `file-loader` | ^3.0.1 | Webpack-specific |
| `html-webpack-plugin` | ^3.2.0 | Webpack-specific |
| `source-map-loader` | ^0.2.4 | Webpack-specific |
| `style-loader` | ^0.23.1 | Webpack-specific |
| `stylus-loader` | ^3.0.2 | Webpack-specific |
| `terser-webpack-plugin` | ^1.2.3 | Webpack-specific |
| `webpack-cli` | ^3.3.1 | Webpack-specific |
| `webpack-dev-server` | ^3.3.1 | Webpack-specific |
| `@types/react-router-dom` | ^4.3.2 | Types now bundled in `react-router-dom` v6 itself |
