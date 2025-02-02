import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DhBU0s4G.mjs';
import { manifest } from './manifest_BGOSu0Ny.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/privacy.astro.mjs');
const _page2 = () => import('./pages/terms.astro.mjs');
const _page3 = () => import('./pages/treatments/_slug_.astro.mjs');
const _page4 = () => import('./pages/treatments.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/privacy.astro", _page1],
    ["src/pages/terms.astro", _page2],
    ["src/pages/treatments/[slug].astro", _page3],
    ["src/pages/treatments/index.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///D:/Github/beauty-awakening/frontend/dist/client/",
    "server": "file:///D:/Github/beauty-awakening/frontend/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
