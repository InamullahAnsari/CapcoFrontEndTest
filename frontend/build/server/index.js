import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useRouteError } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region ../node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region src/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default
});
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	const [queryClient] = useState(() => new QueryClient({ defaultOptions: { mutations: { retry: false } } }));
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary() {
	const error = useRouteError();
	const notFound = isRouteErrorResponse(error) && error.status === 404;
	return /* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx("h1", { children: notFound ? "Page not found" : "Something went wrong" }), /* @__PURE__ */ jsx("p", { children: notFound ? "The page you requested does not exist." : "Please try again." })] });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-Bsc_6dv7.js",
		"imports": [
			"/assets/react-BqBvWGiZ.js",
			"/assets/react-dom-B0iBkxEe.js",
			"/assets/utils-12T_Mppr.js",
			"/assets/components-1ld0DHkR.js",
			"/assets/errorBoundaries-9xicq626.js",
			"/assets/jsx-runtime-BurxjvZa.js",
			"/assets/preload-helper-BZ1Pz5am.js"
		],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-2WSO18p0.js",
			"imports": [
				"/assets/react-BqBvWGiZ.js",
				"/assets/react-dom-B0iBkxEe.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/components-1ld0DHkR.js",
				"/assets/errorBoundaries-9xicq626.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/preload-helper-BZ1Pz5am.js",
				"/assets/lib-BEYffjpV.js"
			],
			"css": ["/assets/root-DJH_oJda.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/index": {
			"id": "routes/index",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": true,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/index-main-DbNEoYZz.js",
			"imports": [
				"/assets/components-1ld0DHkR.js",
				"/assets/react-BqBvWGiZ.js",
				"/assets/utils-12T_Mppr.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": "/assets/index-client-loader-D24fhnHn.js",
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/api-docs-redirect": {
			"id": "routes/api-docs-redirect",
			"parentId": "root",
			"path": "api/docs",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": true,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/api-docs-redirect-main-CtaHJ_Yo.js",
			"imports": ["/assets/utils-12T_Mppr.js", "/assets/react-BqBvWGiZ.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": "/assets/api-docs-redirect-client-loader-BHuCSiuz.js",
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/api-docs": {
			"id": "routes/api-docs",
			"parentId": "root",
			"path": "api-docs",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": true,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/api-docs-main-Z5Qofcwi.js",
			"imports": [
				"/assets/components-1ld0DHkR.js",
				"/assets/lib-BEYffjpV.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/api-docs-client-loader-CvrPQiKn.js",
				"/assets/react-BqBvWGiZ.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/errorBoundaries-9xicq626.js",
				"/assets/preload-helper-BZ1Pz5am.js"
			],
			"css": ["/assets/api-docs-C6IIiuhS.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": "/assets/api-docs-client-loader-CvrPQiKn.js",
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/create-account": {
			"id": "routes/create-account",
			"parentId": "root",
			"path": "create-account",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": true,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/create-account-main-Dlz4pTte.js",
			"imports": [
				"/assets/react-BqBvWGiZ.js",
				"/assets/components-1ld0DHkR.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/DS-Bmptpt3z.js",
				"/assets/-return-target-BGyWVnmt.js",
				"/assets/account-access.module-BC3SKnIm.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/react-dom-B0iBkxEe.js"
			],
			"css": ["/assets/DS-D5WgTn8n.css", "/assets/account-access-D8VhChLS.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": "/assets/create-account-client-loader-C6hb_e8h.js",
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/sign-in": {
			"id": "routes/sign-in",
			"parentId": "root",
			"path": "sign-in",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": true,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/sign-in-main-ChhYfDwE.js",
			"imports": [
				"/assets/react-BqBvWGiZ.js",
				"/assets/components-1ld0DHkR.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/DS-Bmptpt3z.js",
				"/assets/-return-target-BGyWVnmt.js",
				"/assets/account-access.module-BC3SKnIm.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/react-dom-B0iBkxEe.js"
			],
			"css": ["/assets/DS-D5WgTn8n.css", "/assets/account-access-D8VhChLS.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": "/assets/sign-in-client-loader-C6hb_e8h.js",
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/applications": {
			"id": "routes/applications",
			"parentId": "root",
			"path": "applications",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/applications-htv9-kXY.js",
			"imports": [
				"/assets/components-1ld0DHkR.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/react-BqBvWGiZ.js",
				"/assets/utils-12T_Mppr.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/applications/current": {
			"id": "routes/applications/current",
			"parentId": "routes/applications",
			"path": "current",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/current-Sbko8zsw.js",
			"imports": [
				"/assets/components-1ld0DHkR.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/DS-Bmptpt3z.js",
				"/assets/react-BqBvWGiZ.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/react-dom-B0iBkxEe.js"
			],
			"css": ["/assets/current-DzgEwoeN.css", "/assets/DS-D5WgTn8n.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/applications/$applicationId.submitted": {
			"id": "routes/applications/$applicationId.submitted",
			"parentId": "routes/applications",
			"path": ":applicationId/submitted",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/_applicationId.submitted-B0g-Dy4u.js",
			"imports": [
				"/assets/components-1ld0DHkR.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/DS-Bmptpt3z.js",
				"/assets/react-BqBvWGiZ.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/react-dom-B0iBkxEe.js"
			],
			"css": ["/assets/DS-D5WgTn8n.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/applications/$applicationId/$step": {
			"id": "routes/applications/$applicationId/$step",
			"parentId": "routes/applications",
			"path": ":applicationId/:step",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/_step-CeFTJl-b.js",
			"imports": [
				"/assets/react-BqBvWGiZ.js",
				"/assets/components-1ld0DHkR.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/DS-Bmptpt3z.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/react-dom-B0iBkxEe.js"
			],
			"css": ["/assets/_step-35KkQH26.css", "/assets/DS-D5WgTn8n.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/reviewer/applications": {
			"id": "routes/reviewer/applications",
			"parentId": "root",
			"path": "reviewer/applications",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": true,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/applications-BJIZCrY_.js",
			"imports": [
				"/assets/react-BqBvWGiZ.js",
				"/assets/components-1ld0DHkR.js",
				"/assets/jsx-runtime-BurxjvZa.js",
				"/assets/DS-Bmptpt3z.js",
				"/assets/utils-12T_Mppr.js",
				"/assets/react-dom-B0iBkxEe.js"
			],
			"css": ["/assets/applications-BSAvN2aQ.css", "/assets/DS-D5WgTn8n.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-ff6c2263.js",
	"version": "ff6c2263",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var route1 = { default: () => null };
var route2 = { default: () => null };
var route3 = { default: () => null };
var route4 = { default: () => null };
var route5 = { default: () => null };
var route6 = { default: () => null };
var route7 = { default: () => null };
var route8 = { default: () => null };
var route9 = { default: () => null };
var route10 = { default: () => null };
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = false;
var isSpaMode = true;
var prerender = [];
var routeDiscovery = { "mode": "initial" };
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/index": {
		id: "routes/index",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: route1
	},
	"routes/api-docs-redirect": {
		id: "routes/api-docs-redirect",
		parentId: "root",
		path: "api/docs",
		index: void 0,
		caseSensitive: void 0,
		module: route2
	},
	"routes/api-docs": {
		id: "routes/api-docs",
		parentId: "root",
		path: "api-docs",
		index: void 0,
		caseSensitive: void 0,
		module: route3
	},
	"routes/create-account": {
		id: "routes/create-account",
		parentId: "root",
		path: "create-account",
		index: void 0,
		caseSensitive: void 0,
		module: route4
	},
	"routes/sign-in": {
		id: "routes/sign-in",
		parentId: "root",
		path: "sign-in",
		index: void 0,
		caseSensitive: void 0,
		module: route5
	},
	"routes/applications": {
		id: "routes/applications",
		parentId: "root",
		path: "applications",
		index: void 0,
		caseSensitive: void 0,
		module: route6
	},
	"routes/applications/current": {
		id: "routes/applications/current",
		parentId: "routes/applications",
		path: "current",
		index: void 0,
		caseSensitive: void 0,
		module: route7
	},
	"routes/applications/$applicationId.submitted": {
		id: "routes/applications/$applicationId.submitted",
		parentId: "routes/applications",
		path: ":applicationId/submitted",
		index: void 0,
		caseSensitive: void 0,
		module: route8
	},
	"routes/applications/$applicationId/$step": {
		id: "routes/applications/$applicationId/$step",
		parentId: "routes/applications",
		path: ":applicationId/:step",
		index: void 0,
		caseSensitive: void 0,
		module: route9
	},
	"routes/reviewer/applications": {
		id: "routes/reviewer/applications",
		parentId: "root",
		path: "reviewer/applications",
		index: void 0,
		caseSensitive: void 0,
		module: route10
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
