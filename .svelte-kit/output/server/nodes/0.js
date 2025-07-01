import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.4Eo4szOR.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/Dn3YWNOJ.js","_app/immutable/chunks/BhQ-HJB1.js"];
export const stylesheets = ["_app/immutable/assets/0.DB1znGJj.css"];
export const fonts = [];
