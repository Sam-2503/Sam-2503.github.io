export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","clouter.png","favicon.svg","ghost.png","me.png","portfolio.png","rsveepee.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.C_TalWgW.js",app:"_app/immutable/entry/app.CTKYzHhB.js",imports:["_app/immutable/entry/start.C_TalWgW.js","_app/immutable/chunks/BfjK1FeA.js","_app/immutable/chunks/kOybiQqv.js","_app/immutable/chunks/BhQ-HJB1.js","_app/immutable/chunks/6giCx1FX.js","_app/immutable/entry/app.CTKYzHhB.js","_app/immutable/chunks/BhQ-HJB1.js","_app/immutable/chunks/kOybiQqv.js","_app/immutable/chunks/6giCx1FX.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/ChNqUuzV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
