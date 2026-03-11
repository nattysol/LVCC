module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/LVCC-GitHub/LVCC/storefront/lib/medusa.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sdk",
    ()=>sdk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
;
const sdk = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "https://your-medusa-url.com",
    debug: ("TURBOPACK compile-time value", "development") === "development"
});
}),
"[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$lib$2f$medusa$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/lib/medusa.ts [app-rsc] (ecmascript)");
;
;
async function HomePage() {
    // Replace 'prod_123' with an actual ID from your database later
    // For now, we'll fetch the first batch to verify the connection
    const { production_batches } = await __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$lib$2f$medusa$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sdk"].admin.custom.get("/production-batches");
    const activeBatch = production_batches?.[0] || {
        name: "System Offline",
        cocoa_percentage: 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-l-2 border-white pl-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold tracking-tighter uppercase italic",
                        children: "LVCC / Mission Control"
                    }, void 0, false, {
                        fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500 mt-2",
                        children: [
                            "CONNECTION: ",
                            ("TURBOPACK compile-time truthy", 1) ? "ESTABLISHED" : "TURBOPACK unreachable"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-white/10 bg-black/40 p-8 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-8",
                            children: "Current Batch Logic"
                        }, void 0, false, {
                            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-zinc-600 uppercase mb-1",
                                            children: "Profile Name"
                                        }, void 0, false, {
                                            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-2xl italic tracking-tight",
                                            children: activeBatch.name
                                        }, void 0, false, {
                                            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end border-t border-white/5 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-zinc-600 uppercase",
                                            children: "Cocoa Intensity"
                                        }, void 0, false, {
                                            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl font-black tracking-tighter",
                                            children: [
                                                activeBatch.cocoa_percentage,
                                                ".0%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c9f28913._.js.map