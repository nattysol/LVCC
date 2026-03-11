module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
async function HomePage() {
    const backendUrl = "https://chocolate.medusajs.app";
    console.log(`[DEBUG] Attempting fetch to: ${backendUrl}/store/production-batches`);
    try {
        const response = await fetch(`${backendUrl}/store/production-batches`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-publishable-api-key": "pk_2392098ce782473f7b5916a5c8d3e3bc1ba92564fcd37bcebb7a48919af952f6"
            },
            cache: 'no-store'
        });
        // Log the status code to your terminal
        console.log(`[DEBUG] Response Status: ${response.status} ${response.statusText}`);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[DEBUG] Error Body: ${errorText}`);
            throw new Error(`Server responded with ${response.status}`);
        }
        const data = await response.json();
        console.log(`[DEBUG] Data Received:`, JSON.stringify(data).substring(0, 100));
        const production_batches = data?.production_batches || [];
        const activeBatch = production_batches[0] || {
            name: "No Active Batches",
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
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-zinc-500 mt-2 uppercase",
                            children: [
                                "Signal: ",
                                production_batches.length > 0 ? "Stable" : "Empty Set"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "max-w-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-white/10 bg-black/40 p-8 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-zinc-600 uppercase mb-1",
                                children: "Active Batch"
                            }, void 0, false, {
                                fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl italic mb-6",
                                children: activeBatch.name
                            }, void 0, false, {
                                fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-end border-t border-white/5 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-600 uppercase",
                                        children: "Intensity"
                                    }, void 0, false, {
                                        fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-black",
                                        children: [
                                            activeBatch.cocoa_percentage,
                                            ".0%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    } catch (error) {
        console.error(`[DEBUG] Fetch Operation Failed: ${error.message}`);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 font-mono text-red-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-bold",
                    children: "CONNECTION_ERROR"
                }, void 0, false, {
                    fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-white/50 mt-2",
                    children: "Check terminal for [DEBUG] logs."
                }, void 0, false, {
                    fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
}
}),
"[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f2449b3._.js.map