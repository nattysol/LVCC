module.exports = [
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isStaticGeneration) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/cookie") + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect) {
            this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let prop;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    static #_ = prop = _NEXT_REQUEST_META = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"];
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req), this._req = _req, this.headers = this._req.headers, this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics, this[_NEXT_REQUEST_META] = this._req[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] || {}, this.streaming = false;
    }
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    /**
   * Returns the request body as a Web Readable Stream. The body here can only
   * be read once as the body will start flowing as soon as the data handler
   * is attached.
   *
   * @internal
   */ stream() {
        if (this.streaming) {
            throw Object.defineProperty(new Error('Invariant: NodeNextRequest.stream() can only be called once'), "__NEXT_ERROR_CODE", {
                value: "E467",
                enumerable: false,
                configurable: true
            });
        }
        this.streaming = true;
        return new ReadableStream({
            start: (controller)=>{
                this._req.on('data', (chunk)=>{
                    controller.enqueue(new Uint8Array(chunk));
                });
                this._req.on('end', ()=>{
                    controller.close();
                });
                this._req.on('error', (err)=>{
                    controller.error(err);
                });
            }
        });
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res), this._res = _res, this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
    onClose(callback) {
        this.originalResponse.on('close', callback);
    }
}
var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAppPageRouteModule",
    ()=>isAppPageRouteModule,
    "isAppRouteRouteModule",
    ()=>isAppRouteRouteModule,
    "isPagesAPIRouteModule",
    ()=>isPagesAPIRouteModule,
    "isPagesRouteModule",
    ()=>isPagesRouteModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
function isAppRouteRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE;
}
function isAppPageRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE;
}
function isPagesRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES;
}
function isPagesAPIRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API;
} //# sourceMappingURL=checks.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParamProperties",
    ()=>getParamProperties,
    "getSegmentParam",
    ()=>getSegmentParam,
    "isCatchAll",
    ()=>isCatchAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
function getSegmentParam(segment) {
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            paramType: 'optional-catchall',
            paramName: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : 'catchall',
            paramName: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : 'dynamic',
            paramName: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
} //# sourceMappingURL=get-segment-param.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInterceptionAppRoute",
    ()=>isInterceptionAppRoute,
    "isNormalizedAppRoute",
    ()=>isNormalizedAppRoute,
    "parseAppRoute",
    ()=>parseAppRoute,
    "parseAppRouteSegment",
    ()=>parseAppRouteSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
;
;
function parseAppRouteSegment(segment) {
    if (segment === '') {
        return null;
    }
    // Check if the segment starts with an interception marker
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
    const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(segment);
    if (param) {
        return {
            type: 'dynamic',
            name: segment,
            param,
            interceptionMarker
        };
    } else if (segment.startsWith('(') && segment.endsWith(')')) {
        return {
            type: 'route-group',
            name: segment,
            interceptionMarker
        };
    } else if (segment.startsWith('@')) {
        return {
            type: 'parallel-route',
            name: segment,
            interceptionMarker
        };
    } else {
        return {
            type: 'static',
            name: segment,
            interceptionMarker
        };
    }
}
function isNormalizedAppRoute(route) {
    return route.normalized;
}
function isInterceptionAppRoute(route) {
    return route.interceptionMarker !== undefined && route.interceptingRoute !== undefined && route.interceptedRoute !== undefined;
}
function parseAppRoute(pathname, normalized) {
    const pathnameSegments = pathname.split('/').filter(Boolean);
    // Build segments array with static and dynamic segments
    const segments = [];
    // Parse if this is an interception route.
    let interceptionMarker;
    let interceptingRoute;
    let interceptedRoute;
    for (const segment of pathnameSegments){
        // Parse the segment into an AppSegment.
        const appSegment = parseAppRouteSegment(segment);
        if (!appSegment) {
            continue;
        }
        if (normalized && (appSegment.type === 'route-group' || appSegment.type === 'parallel-route')) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`${pathname} is being parsed as a normalized route, but it has a route group or parallel route segment.`), "__NEXT_ERROR_CODE", {
                value: "E923",
                enumerable: false,
                configurable: true
            });
        }
        segments.push(appSegment);
        if (appSegment.interceptionMarker) {
            const parts = pathname.split(appSegment.interceptionMarker);
            if (parts.length !== 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${pathname}`), "__NEXT_ERROR_CODE", {
                    value: "E924",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptingRoute = normalized ? parseAppRoute(parts[0], true) : parseAppRoute(parts[0], false);
            interceptedRoute = normalized ? parseAppRoute(parts[1], true) : parseAppRoute(parts[1], false);
            interceptionMarker = appSegment.interceptionMarker;
        }
    }
    const dynamicSegments = segments.filter((segment)=>segment.type === 'dynamic');
    return {
        normalized,
        pathname,
        segments,
        dynamicSegments,
        interceptionMarker,
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=app.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLoaderTree",
    ()=>parseLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
function parseLoaderTree(tree) {
    const [segment, parallelRoutes, modules] = tree;
    const { layout, template } = modules;
    let { page } = modules;
    // a __DEFAULT__ segment means that this route didn't match any of the
    // segments in the route, so we should use the default page
    page = segment === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"] ? modules.defaultPage : page;
    const conventionPath = layout?.[1] || template?.[1] || page?.[1];
    return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes
    };
} //# sourceMappingURL=parse-loader-tree.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interceptionPrefixFromParamType",
    ()=>interceptionPrefixFromParamType
]);
function interceptionPrefixFromParamType(paramType) {
    switch(paramType){
        case 'catchall-intercepted-(..)(..)':
        case 'dynamic-intercepted-(..)(..)':
            return '(..)(..)';
        case 'catchall-intercepted-(.)':
        case 'dynamic-intercepted-(.)':
            return '(.)';
        case 'catchall-intercepted-(..)':
        case 'dynamic-intercepted-(..)':
            return '(..)';
        case 'catchall-intercepted-(...)':
        case 'dynamic-intercepted-(...)':
            return '(...)';
        case 'catchall':
        case 'dynamic':
        case 'optional-catchall':
        default:
            return null;
    }
} //# sourceMappingURL=interception-prefix-from-param-type.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveParamValue",
    ()=>resolveParamValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [app-rsc] (ecmascript)");
;
;
/**
 * Extracts the param value from a path segment, handling interception markers
 * based on the expected param type.
 *
 * @param pathSegment - The path segment to extract the value from
 * @param params - The current params object for resolving dynamic param references
 * @param paramType - The expected param type which may include interception marker info
 * @returns The extracted param value
 */ function getParamValueFromSegment(pathSegment, params, paramType) {
    // If the segment is dynamic, resolve it from the params object
    if (pathSegment.type === 'dynamic') {
        return params[pathSegment.param.paramName];
    }
    // If the paramType indicates this is an intercepted param, strip the marker
    // that matches the interception marker in the param type
    const interceptionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interceptionPrefixFromParamType"])(paramType);
    if (interceptionPrefix === pathSegment.interceptionMarker) {
        return pathSegment.name.replace(pathSegment.interceptionMarker, '');
    }
    // For static segments, use the name
    return pathSegment.name;
}
function resolveParamValue(paramName, paramType, depth, route, params) {
    switch(paramType){
        case 'catchall':
        case 'optional-catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            // For catchall routes, derive from pathname using depth to determine
            // which segments to use
            const processedSegments = [];
            // Process segments to handle any embedded dynamic params
            for(let index = depth; index < route.segments.length; index++){
                const pathSegment = route.segments[index];
                if (pathSegment.type === 'static') {
                    let value = pathSegment.name;
                    // For intercepted catch-all params, strip the marker from the first segment
                    const interceptionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interceptionPrefixFromParamType"])(paramType);
                    if (interceptionPrefix && index === depth && interceptionPrefix === pathSegment.interceptionMarker) {
                        // Strip the interception marker from the value
                        value = value.replace(pathSegment.interceptionMarker, '');
                    }
                    processedSegments.push(value);
                } else {
                    // If the segment is a param placeholder, check if we have its value
                    if (!params.hasOwnProperty(pathSegment.param.paramName)) {
                        // If the segment is an optional catchall, we can break out of the
                        // loop because it's optional!
                        if (pathSegment.param.paramType === 'optional-catchall') {
                            break;
                        }
                        // Unknown param placeholder in pathname - can't derive full value
                        return undefined;
                    }
                    // If the segment matches a param, use the param value
                    // We don't encode values here as that's handled during retrieval.
                    const paramValue = params[pathSegment.param.paramName];
                    if (Array.isArray(paramValue)) {
                        processedSegments.push(...paramValue);
                    } else {
                        processedSegments.push(paramValue);
                    }
                }
            }
            if (processedSegments.length > 0) {
                return processedSegments;
            } else if (paramType === 'optional-catchall') {
                return undefined;
            } else {
                // We shouldn't be able to match a catchall segment without any path
                // segments if it's not an optional catchall
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected empty path segments match for a route "${route.pathname}" with param "${paramName}" of type "${paramType}"`), "__NEXT_ERROR_CODE", {
                    value: "E931",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            // For regular dynamic parameters, take the segment at this depth
            if (depth < route.segments.length) {
                const pathSegment = route.segments[depth];
                // Check if the segment at this depth is a placeholder for an unknown param
                if (pathSegment.type === 'dynamic' && !params.hasOwnProperty(pathSegment.param.paramName)) {
                    // The segment is a placeholder like [category] and we don't have the value
                    return undefined;
                }
                // If the segment matches a param, use the param value from params object
                // Otherwise it's a static segment, just use it directly
                // We don't encode values here as that's handled during retrieval
                return getParamValueFromSegment(pathSegment, params, paramType);
            }
            return undefined;
        default:
            paramType;
    }
} //# sourceMappingURL=resolve-param-value.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractPathnameRouteParamSegmentsFromLoaderTree",
    ()=>extractPathnameRouteParamSegmentsFromLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)");
;
;
;
/**
 * Validates that the static segments in currentPath match the corresponding
 * segments in targetSegments. This ensures we only extract dynamic parameters
 * that are part of the target pathname structure.
 *
 * Segments are compared literally - interception markers like "(.)photo" are
 * part of the pathname and must match exactly.
 *
 * @example
 * // Matching paths
 * currentPath: ['blog', '(.)photo']
 * targetSegments: ['blog', '(.)photo', '[id]']
 * → Returns true (both static segments match exactly)
 *
 * @example
 * // Non-matching paths
 * currentPath: ['blog', '(.)photo']
 * targetSegments: ['blog', 'photo', '[id]']
 * → Returns false (segments don't match - marker is part of pathname)
 *
 * @param currentPath - The accumulated path segments from the loader tree
 * @param targetSegments - The target pathname split into segments
 * @returns true if all static segments match, false otherwise
 */ function validatePrefixMatch(currentPath, route) {
    for(let i = 0; i < currentPath.length; i++){
        const pathSegment = currentPath[i];
        const targetPathSegment = route.segments[i];
        // Type mismatch - one is static, one is dynamic
        if (pathSegment.type !== targetPathSegment.type) {
            return false;
        }
        // One has an interception marker, the other doesn't.
        if (pathSegment.interceptionMarker !== targetPathSegment.interceptionMarker) {
            return false;
        }
        // Both are static but names don't match
        if (pathSegment.type === 'static' && targetPathSegment.type === 'static' && pathSegment.name !== targetPathSegment.name) {
            return false;
        } else if (pathSegment.type === 'dynamic' && targetPathSegment.type === 'dynamic' && pathSegment.param.paramType !== targetPathSegment.param.paramType && pathSegment.param.paramName !== targetPathSegment.param.paramName) {
            return false;
        }
    }
    return true;
}
function extractPathnameRouteParamSegmentsFromLoaderTree(loaderTree, route) {
    const pathnameRouteParamSegments = [];
    const params = {};
    // BFS traversal with depth and path tracking
    const queue = [
        {
            tree: loaderTree,
            depth: 0,
            currentPath: []
        }
    ];
    while(queue.length > 0){
        const { tree, depth, currentPath } = queue.shift();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        // Build the path for the current node
        let updatedPath = currentPath;
        let nextDepth = depth;
        const appSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppRouteSegment"])(segment);
        // Only add to path if it's a real segment that appears in the URL
        // Route groups and parallel markers don't contribute to URL pathname
        if (appSegment && appSegment.type !== 'route-group' && appSegment.type !== 'parallel-route') {
            updatedPath = [
                ...currentPath,
                appSegment
            ];
            nextDepth = depth + 1;
        }
        // Check if this segment has a param and matches the target pathname at this depth
        if ((appSegment == null ? void 0 : appSegment.type) === 'dynamic') {
            const { paramName, paramType } = appSegment.param;
            // Check if this segment is at the correct depth in the target pathname
            // A segment matches if:
            // 1. There's a dynamic segment at this depth in the pathname
            // 2. The parameter names match (e.g., [id] matches [id], not [category])
            // 3. The static segments leading up to this point match (prefix check)
            if (depth < route.segments.length) {
                const targetSegment = route.segments[depth];
                // Match if the target pathname has a dynamic segment at this depth
                if (targetSegment.type === 'dynamic') {
                    // Check that parameter names match exactly
                    // This prevents [category] from matching against /[id]
                    if (paramName !== targetSegment.param.paramName) {
                        continue; // Different param names, skip this segment
                    }
                    // Validate that the path leading up to this dynamic segment matches
                    // the target pathname. This prevents false matches like extracting
                    // [slug] from "/news/[slug]" when the tree has "/blog/[slug]"
                    if (validatePrefixMatch(currentPath, route)) {
                        pathnameRouteParamSegments.push({
                            name: segment,
                            paramName,
                            paramType
                        });
                    }
                }
            }
            // Resolve parameter value if it's not already known.
            if (!params.hasOwnProperty(paramName)) {
                const paramValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveParamValue"])(paramName, paramType, depth, route, params);
                if (paramValue !== undefined) {
                    params[paramName] = paramValue;
                }
            }
        }
        // Continue traversing all parallel routes to find matching segments
        for (const parallelRoute of Object.values(parallelRoutes)){
            queue.push({
                tree: parallelRoute,
                depth: nextDepth,
                currentPath: updatedPath
            });
        }
    }
    return {
        pathnameRouteParamSegments,
        params
    };
} //# sourceMappingURL=extract-pathname-route-param-segments-from-loader-tree.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeParam",
    ()=>encodeParam,
    "extractPathnameRouteParamSegments",
    ()=>extractPathnameRouteParamSegments,
    "extractPathnameRouteParamSegmentsFromSegments",
    ()=>extractPathnameRouteParamSegmentsFromSegments,
    "normalizePathname",
    ()=>normalizePathname,
    "resolveRouteParamsFromTree",
    ()=>resolveRouteParamsFromTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)");
;
;
;
;
;
function encodeParam(value, encoder) {
    let replaceValue;
    if (Array.isArray(value)) {
        replaceValue = value.map(encoder).join('/');
    } else {
        replaceValue = encoder(value);
    }
    return replaceValue;
}
function normalizePathname(pathname) {
    return pathname.replace(/\\/g, '/').replace(/(?!^)\/$/, '');
}
function extractPathnameRouteParamSegments(routeModule, segments, route) {
    // For AppPageRouteModule, use the loaderTree traversal approach
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppPageRouteModule"])(routeModule)) {
        const { pathnameRouteParamSegments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractPathnameRouteParamSegmentsFromLoaderTree"])(routeModule.userland.loaderTree, route);
        return pathnameRouteParamSegments;
    }
    return extractPathnameRouteParamSegmentsFromSegments(segments);
}
function extractPathnameRouteParamSegmentsFromSegments(segments) {
    // TODO: should we consider what values are already present in the page?
    // For AppRouteRouteModule, filter the segments array to get the route params
    // that contribute to the pathname.
    const result = [];
    for (const segment of segments){
        // Skip segments without param info.
        if (!segment.paramName || !segment.paramType) continue;
        // Collect all the route param keys that contribute to the pathname.
        result.push({
            name: segment.name,
            paramName: segment.paramName,
            paramType: segment.paramType
        });
    }
    return result;
}
function resolveRouteParamsFromTree(loaderTree, params, route, fallbackRouteParams) {
    // Stack-based traversal with depth tracking
    const stack = [
        {
            tree: loaderTree,
            depth: 0
        }
    ];
    while(stack.length > 0){
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        const appSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppRouteSegment"])(segment);
        // If this segment is a route parameter, then we should process it if it's
        // not already known and is not already marked as a fallback route param.
        if ((appSegment == null ? void 0 : appSegment.type) === 'dynamic' && !params.hasOwnProperty(appSegment.param.paramName) && !fallbackRouteParams.some((param)=>param.paramName === appSegment.param.paramName)) {
            const { paramName, paramType } = appSegment.param;
            const paramValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveParamValue"])(paramName, paramType, depth, route, params);
            if (paramValue !== undefined) {
                params[paramName] = paramValue;
            } else if (paramType !== 'optional-catchall') {
                // If we couldn't resolve the param, mark it as a fallback
                fallbackRouteParams.push({
                    paramName,
                    paramType
                });
            }
        }
        // Calculate next depth - increment if this is not a route group and not empty
        let nextDepth = depth;
        if (appSegment && appSegment.type !== 'route-group' && appSegment.type !== 'parallel-route') {
            nextDepth++;
        }
        // Add all parallel routes to the stack for processing.
        for (const parallelRoute of Object.values(parallelRoutes)){
            stack.push({
                tree: parallelRoute,
                depth: nextDepth
            });
        }
    }
} //# sourceMappingURL=utils.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dynamicParamTypes",
    ()=>dynamicParamTypes
]);
const dynamicParamTypes = {
    catchall: 'c',
    'catchall-intercepted-(..)(..)': 'ci(..)(..)',
    'catchall-intercepted-(.)': 'ci(.)',
    'catchall-intercepted-(..)': 'ci(..)',
    'catchall-intercepted-(...)': 'ci(...)',
    'optional-catchall': 'oc',
    dynamic: 'd',
    'dynamic-intercepted-(..)(..)': 'di(..)(..)',
    'dynamic-intercepted-(.)': 'di(.)',
    'dynamic-intercepted-(..)': 'di(..)',
    'dynamic-intercepted-(...)': 'di(...)'
}; //# sourceMappingURL=get-short-dynamic-param-type.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOpaqueFallbackRouteParams",
    ()=>createOpaqueFallbackRouteParams,
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)");
;
;
;
;
function createOpaqueFallbackRouteParams(fallbackRouteParams) {
    // If there are no fallback route params, we can return early.
    if (fallbackRouteParams.length === 0) return null;
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    const keys = new Map();
    // Generate a unique key for the fallback route param, if this key is found
    // in the static output, it represents a bug in cache components.
    for (const { paramName, paramType } of fallbackRouteParams){
        keys.set(paramName, [
            `%%drp:${paramName}:${uniqueID}%%`,
            __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicParamTypes"][paramType]
        ]);
    }
    return keys;
}
function getFallbackRouteParams(page, routeModule) {
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppRoute"])(page, true);
    // Extract the pathname-contributing segments from the loader tree. This
    // mirrors the logic in buildAppStaticPaths where we determine which segments
    // actually contribute to the pathname.
    const { pathnameRouteParamSegments, params } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractPathnameRouteParamSegmentsFromLoaderTree"])(routeModule.userland.loaderTree, route);
    // Create fallback route params for the pathname segments.
    const fallbackRouteParams = pathnameRouteParamSegments.map(({ paramName, paramType })=>({
            paramName,
            paramType
        }));
    // Resolve route params from the loader tree. This mutates the
    // fallbackRouteParams array to add any route params that are
    // unknown at request time.
    //
    // The page parameter contains placeholders like [slug], which helps
    // resolveRouteParamsFromTree determine which params are unknown.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRouteParamsFromTree"])(routeModule.userland.loaderTree, params, route, fallbackRouteParams // Will be mutated to add route params
    );
    // Convert the fallback route params to an opaque format that can be safely
    // used in the postponed state without exposing implementation details.
    return createOpaqueFallbackRouteParams(fallbackRouteParams);
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientReferenceManifest",
    ()=>getClientReferenceManifest,
    "getServerActionsManifest",
    ()=>getServerActionsManifest,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding,
    "setManifestsSingleton",
    ()=>setManifestsSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
;
;
// This is a global singleton that is, among other things, also used to
// encode/decode bound args of server function closures. This can't be using a
// AsyncLocalStorage as it might happen at the module level.
const MANIFESTS_SINGLETON = Symbol.for('next.server.manifests');
const globalThisWithManifests = globalThis;
function createProxiedClientReferenceManifest(clientReferenceManifestsPerRoute) {
    const createMappingProxy = (prop)=>{
        return new Proxy({}, {
            get (_, id) {
                const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
                if (workStore) {
                    const currentManifest = clientReferenceManifestsPerRoute.get(workStore.route);
                    if (currentManifest == null ? void 0 : currentManifest[prop][id]) {
                        return currentManifest[prop][id];
                    }
                    // In development, we also check all other manifests to see if the
                    // module exists there. This is to support a scenario where React's
                    // I/O tracking (dev-only) creates a connection from one page to
                    // another through an emitted async I/O node that references client
                    // components from the other page, e.g. in owner props.
                    // TODO: Maybe we need to add a `debugBundlerConfig` option to React
                    // to avoid this workaround. The current workaround has the
                    // disadvantage that one might accidentally or intentionally share
                    // client references across pages (e.g. by storing them in a global
                    // variable), which would then only be caught in production.
                    if ("TURBOPACK compile-time truthy", 1) {
                        for (const [route, manifest] of clientReferenceManifestsPerRoute){
                            if (route === workStore.route) {
                                continue;
                            }
                            const entry = manifest[prop][id];
                            if (entry !== undefined) {
                                return entry;
                            }
                        }
                    }
                } else {
                    // If there's no work store defined, we can assume that a client
                    // reference manifest is needed during module evaluation, e.g. to
                    // create a server function using a higher-order function. This
                    // might also use client components which need to be serialized by
                    // Flight, and therefore client references need to be resolvable. In
                    // that case we search all page manifests to find the module.
                    for (const manifest of clientReferenceManifestsPerRoute.values()){
                        const entry = manifest[prop][id];
                        if (entry !== undefined) {
                            return entry;
                        }
                    }
                }
                return undefined;
            }
        });
    };
    const mappingProxies = new Map();
    return new Proxy({}, {
        get (_, prop) {
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            switch(prop){
                case 'moduleLoading':
                case 'entryCSSFiles':
                case 'entryJSFiles':
                    {
                        if (!workStore) {
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Cannot access "${prop}" without a work store.`), "__NEXT_ERROR_CODE", {
                                value: "E952",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        const currentManifest = clientReferenceManifestsPerRoute.get(workStore.route);
                        if (!currentManifest) {
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`The client reference manifest for route "${workStore.route}" does not exist.`), "__NEXT_ERROR_CODE", {
                                value: "E951",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        return currentManifest[prop];
                    }
                case 'clientModules':
                case 'rscModuleMapping':
                case 'edgeRscModuleMapping':
                case 'ssrModuleMapping':
                case 'edgeSSRModuleMapping':
                    {
                        let proxy = mappingProxies.get(prop);
                        if (!proxy) {
                            proxy = createMappingProxy(prop);
                            mappingProxies.set(prop, proxy);
                        }
                        return proxy;
                    }
                default:
                    {
                        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`This is a proxied client reference manifest. The property "${String(prop)}" is not handled.`), "__NEXT_ERROR_CODE", {
                            value: "E953",
                            enumerable: false,
                            configurable: true
                        });
                    }
            }
        }
    });
}
/**
 * This function creates a Flight-acceptable server module map proxy from our
 * Server Reference Manifest similar to our client module map. This is because
 * our manifest contains a lot of internal Next.js data that are relevant to the
 * runtime, workers, etc. that React doesn't need to know.
 */ function createServerModuleMap() {
    return new Proxy({}, {
        get: (_, id)=>{
            var _getServerActionsManifest__id, _getServerActionsManifest_;
            const workers = (_getServerActionsManifest_ = getServerActionsManifest()[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node']) == null ? void 0 : (_getServerActionsManifest__id = _getServerActionsManifest_[id]) == null ? void 0 : _getServerActionsManifest__id.workers;
            if (!workers) {
                return undefined;
            }
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            let workerEntry;
            if (workStore) {
                workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
                // If there's no work store defined, we can assume that a server
                // module map is needed during module evaluation, e.g. to create a
                // server action using a higher-order function. Therefore it should be
                // safe to return any entry from the manifest that matches the action
                // ID. They all refer to the same module ID, which must also exist in
                // the current page bundle. TODO: This is currently not guaranteed in
                // Turbopack, and needs to be fixed.
                workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
                return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
                id: moduleId,
                name: id,
                chunks: [],
                async
            };
        }
    });
}
/**
 * The flight entry loader keys actions by bundlePath. bundlePath corresponds
 * with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, 'app')) {
        return pageName;
    }
    return 'app' + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page
 * name.
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(bundlePath, 'app'));
}
function selectWorkerForForwarding(actionId, pageName) {
    var _serverActionsManifest__actionId;
    const serverActionsManifest = getServerActionsManifest();
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node'][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    // There are no workers to handle this action, nothing to forward to.
    if (!workers) {
        return;
    }
    // If there is an entry for the current page, we don't need to forward.
    if (workers[normalizeWorkerPageName(pageName)]) {
        return;
    }
    // Otherwise, grab the first worker that has a handler for this action id.
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
function setManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest }) {
    const existingSingleton = globalThisWithManifests[MANIFESTS_SINGLETON];
    if (existingSingleton) {
        existingSingleton.clientReferenceManifestsPerRoute.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page), clientReferenceManifest);
        existingSingleton.serverActionsManifest = serverActionsManifest;
    } else {
        const clientReferenceManifestsPerRoute = new Map([
            [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page),
                clientReferenceManifest
            ]
        ]);
        const proxiedClientReferenceManifest = createProxiedClientReferenceManifest(clientReferenceManifestsPerRoute);
        globalThisWithManifests[MANIFESTS_SINGLETON] = {
            clientReferenceManifestsPerRoute,
            proxiedClientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: createServerModuleMap()
        };
    }
}
function getManifestsSingleton() {
    const manifestSingleton = globalThisWithManifests[MANIFESTS_SINGLETON];
    if (!manifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('The manifests singleton was not initialized.'), "__NEXT_ERROR_CODE", {
            value: "E950",
            enumerable: false,
            configurable: true
        });
    }
    return manifestSingleton;
}
function getClientReferenceManifest() {
    return getManifestsSingleton().proxiedClientReferenceManifest;
}
function getServerActionsManifest() {
    return getManifestsSingleton().serverActionsManifest;
}
function getServerModuleMap() {
    return getManifestsSingleton().serverModuleMap;
} //# sourceMappingURL=manifests-singleton.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    // We don't actually support URL encoded actions, and the action handler will bail out if it sees one.
    // But we still want it to flow through to the action handler, to prevent changes in behavior when a regular
    // page component tries to handle a POST.
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/bytes/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        56: (e)=>{
            /*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */ e.exports = bytes;
            e.exports.format = format;
            e.exports.parse = parse;
            var r = /\B(?=(\d{3})+(?!\d))/g;
            var a = /(?:\.0*|(\.[^0]+)0+)$/;
            var t = {
                b: 1,
                kb: 1 << 10,
                mb: 1 << 20,
                gb: 1 << 30,
                tb: Math.pow(1024, 4),
                pb: Math.pow(1024, 5)
            };
            var i = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
            function bytes(e, r) {
                if (typeof e === "string") {
                    return parse(e);
                }
                if (typeof e === "number") {
                    return format(e, r);
                }
                return null;
            }
            function format(e, i) {
                if (!Number.isFinite(e)) {
                    return null;
                }
                var n = Math.abs(e);
                var o = i && i.thousandsSeparator || "";
                var s = i && i.unitSeparator || "";
                var f = i && i.decimalPlaces !== undefined ? i.decimalPlaces : 2;
                var u = Boolean(i && i.fixedDecimals);
                var p = i && i.unit || "";
                if (!p || !t[p.toLowerCase()]) {
                    if (n >= t.pb) {
                        p = "PB";
                    } else if (n >= t.tb) {
                        p = "TB";
                    } else if (n >= t.gb) {
                        p = "GB";
                    } else if (n >= t.mb) {
                        p = "MB";
                    } else if (n >= t.kb) {
                        p = "KB";
                    } else {
                        p = "B";
                    }
                }
                var b = e / t[p.toLowerCase()];
                var l = b.toFixed(f);
                if (!u) {
                    l = l.replace(a, "$1");
                }
                if (o) {
                    l = l.split(".").map(function(e, a) {
                        return a === 0 ? e.replace(r, o) : e;
                    }).join(".");
                }
                return l + s + p;
            }
            function parse(e) {
                if (typeof e === "number" && !isNaN(e)) {
                    return e;
                }
                if (typeof e !== "string") {
                    return null;
                }
                var r = i.exec(e);
                var a;
                var n = "b";
                if (!r) {
                    a = parseInt(e, 10);
                    n = "b";
                } else {
                    a = parseFloat(r[1]);
                    n = r[4].toLowerCase();
                }
                return Math.floor(t[n] * a);
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var i = r[a] = {
            exports: {}
        };
        var n = true;
        try {
            e[a](i, i.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete r[a];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/bytes") + "/";
    var a = __nccwpck_require__(56);
    module.exports = a;
})();
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_MAX_POSTPONED_STATE_SIZE",
    ()=>DEFAULT_MAX_POSTPONED_STATE_SIZE,
    "parseMaxPostponedStateSize",
    ()=>parseMaxPostponedStateSize
]);
const DEFAULT_MAX_POSTPONED_STATE_SIZE = '100 MB';
function parseSizeLimit(size) {
    const bytes = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/compiled/bytes/index.js [app-rsc] (ecmascript)").parse(size);
    if (bytes === null || isNaN(bytes) || bytes < 1) {
        return undefined;
    }
    return bytes;
}
function parseMaxPostponedStateSize(size) {
    return parseSizeLimit(size ?? DEFAULT_MAX_POSTPONED_STATE_SIZE);
} //# sourceMappingURL=size-limit.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/api-key.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiKey",
    ()=>ApiKey
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ApiKey {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This methods retrieves a paginated list of API keys. It sends a request to the
     * [List API Keys](https://docs.medusajs.com/api/admin#api-keys_getapikeys) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of API keys.
     *
     * @example
     * To retrieve the list of API keys:
     *
     * ```ts
     * sdk.admin.apiKey.list()
     * .then(({ api_keys, count, limit, offset }) => {
     *   console.log(api_keys)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.apiKey.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ api_keys, count, limit, offset }) => {
     *   console.log(api_keys)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each API key:
     *
     * ```ts
     * sdk.admin.apiKey.list({
     *   fields: "id,*sales_channels"
     * })
     * .then(({ api_keys, count, limit, offset }) => {
     *   console.log(api_keys)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/api-keys`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method creates an API key. It sends a request to the [Create API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeys)
     * API route.
     *
     * @param body - The API key's details.
     * @param query - Configure the fields to retrieve in the created API key.
     * @param headers - Headers to pass in the request
     * @returns The created API key
     *
     * @example
     * sdk.admin.apiKey.create({
     *   title: "Development",
     *   type: "publishable"
     * })
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/api-keys`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method revokes an API key. It sends a request to the
     * [Revoke API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysidrevoke) API route.
     *
     * @param id - The API key's ID.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.revoke("apk_123")
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */ revoke(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/api-keys/${id}/revoke`, {
                method: "POST",
                headers
            });
        });
    }
    /**
     * This method retrieves an API key's details. It sends a request to the
     * [Get API key](https://docs.medusajs.com/api/admin#api-keys_getapikeysid) API route.
     *
     * @param id - The API key's ID.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.retrieve("apk_123")
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */ retrieve(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/api-keys/${id}`, {
                headers
            });
        });
    }
    /**
     * This method updates an API key's details. It sends a request to the
     * [Update API Key](https://docs.medusajs.com/api/admin#api-keys_postapikeysid) API route.
     *
     * @param id - The API key's ID.
     * @param body - The data to update in the API key.
     * @param query - Configure the fields to retrieve in the API key.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.update("apk_123", {
     *   title: "Development"
     * })
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/api-keys/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes an API key by its ID. It sends a request to the
     * [Delete API Key](https://docs.medusajs.com/api/admin#api-keys_deleteapikeysid) API route.
     *
     * @param id - The API key's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.apiKey.delete("apk_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/api-keys/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages the sales channels associated with a publishable API key to either add
     * or remove associations. It sends a request to the [Manage Sales Channels](https://docs.medusajs.com/api/admin#api-keys_postapikeysidsaleschannels)
     * API route.
     *
     * @param id - The API key's ID.
     * @param body - The sales channels to add or remove from the API key.
     * @param headers - Headers to pass in the request.
     * @returns The API key's details.
     *
     * @example
     * sdk.admin.apiKey.batchSalesChannels("apk_123", {
     *   add: ["sc_123"],
     *   remove: ["sc_321"]
     * })
     * .then(({ api_key }) => {
     *   console.log(api_key)
     * })
     */ batchSalesChannels(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/api-keys/${id}/sales-channels`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=api-key.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/campaign.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Campaign",
    ()=>Campaign
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Campaign {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a campaign by its ID. It sends a request to the
     * [Get Campaign](https://docs.medusajs.com/api/admin#campaigns_getcampaignsid) API route.
     *
     * @param id - The campaign's ID.
     * @param query - Configure the fields to retrieve in the campaign.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * To retrieve a campaign by its ID:
     *
     * ```ts
     * sdk.admin.campaign.retrieve("procamp_123")
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.campaign.retrieve("procamp_123", {
     *   fields: "id,*budget"
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/campaigns/${id}`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of campaigns. It sends a request to the
     * [List Campaigns](https://docs.medusajs.com/api/admin#campaigns_getcampaigns) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of campaigns.
     *
     * @example
     * To retrieve the list of campaigns:
     *
     * ```ts
     * sdk.admin.campaign.list()
     * .then(({ campaigns, count, limit, offset }) => {
     *   console.log(campaigns)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.campaign.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ campaigns, count, limit, offset }) => {
     *   console.log(campaigns)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each campaign:
     *
     * ```ts
     * sdk.admin.campaign.list({
     *   fields: "id,*budget"
     * })
     * .then(({ campaigns, count, limit, offset }) => {
     *   console.log(campaigns)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/campaigns`, {
                headers,
                query
            });
        });
    }
    /**
     * This method creates a campaign. It sends a request to the
     * [Create Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaigns) API route.
     *
     * @param payload - The details of the campaign to create.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * sdk.admin.campaign.create({
     *   name: "Summer Campaign"
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     */ create(payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/campaigns`, {
                method: "POST",
                headers,
                body: payload
            });
        });
    }
    /**
     * This method updates a campaign. It sends a request to the
     * [Update Campaign](https://docs.medusajs.com/api/admin#campaigns_postcampaignsid) API route.
     *
     * @param id - The campaign's ID.
     * @param payload - The data to update in the campaign.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * sdk.admin.campaign.update("procamp_123", {
     *   name: "Summer Campaign"
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     */ update(id, payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/campaigns/${id}`, {
                method: "POST",
                headers,
                body: payload
            });
        });
    }
    /**
     * This method deletes a campaign by its ID. It sends a request to the
     * [Delete Campaign](https://docs.medusajs.com/api/admin#campaigns_deletecampaignsid) API route.
     *
     * @param id - The campaign's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.campaign.delete("procamp_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/campaigns/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages the promotions of a campaign to either add or remove the association between them.
     * It sends a request to the [Manage Promotions](https://docs.medusajs.com/api/admin#campaigns_postcampaignsidpromotions)
     * API route.
     *
     * @param id - The campaign's ID.
     * @param payload - The promotions to add or remove associations to them.
     * @param headers - Headers to pass in the request
     * @returns The campaign's details.
     *
     * @example
     * sdk.admin.campaign.batchPromotions("procamp_123", {
     *   add: ["prom_123", "prom_456"],
     *   remove: ["prom_789"]
     * })
     * .then(({ campaign }) => {
     *   console.log(campaign)
     * })
     */ batchPromotions(id, payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/campaigns/${id}/promotions`, {
                method: "POST",
                headers,
                body: payload
            });
        });
    }
} //# sourceMappingURL=campaign.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/claim.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Claim",
    ()=>Claim
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Claim {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of claims. It sends a request to the
     * [List Claims](https://docs.medusajs.com/api/admin#claims_getclaims) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of claims.
     *
     * @example
     * To retrieve the list of claims:
     *
     * ```ts
     * sdk.admin.claim.list()
     * .then(({ claims, count, limit, offset }) => {
     *   console.log(claims)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.claim.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ claims, count, limit, offset }) => {
     *   console.log(claims)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each claim:
     *
     * ```ts
     * sdk.admin.claim.list({
     *   fields: "id,*additional_items"
     * })
     * .then(({ claims, count, limit, offset }) => {
     *   console.log(claims)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a claim. It sends a request to the
     * [Get Claim](https://docs.medusajs.com/api/admin#claims_getclaimsid) API route.
     *
     * @param id - The claim's ID.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details.
     *
     * @example
     * To retrieve a claim by its ID:
     *
     * ```ts
     * sdk.admin.claim.retrieve("claim_123")
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.claim.retrieve("claim_123", {
     *   fields: "id,*additional_items"
     * })
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method creates a claim. It sends a request to the
     * [Create Claim](https://docs.medusajs.com/api/admin#claims_postclaims) API route.
     *
     * @param body - The claim's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim and order's details.
     *
     * @example
     * sdk.admin.claim.create({
     *   type: "refund",
     *   order_id: "order_123",
     * })
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels a claim. It sends a request to the
     * [Cancel Claim](https://docs.medusajs.com/api/admin#claims_postclaimsidcancel) API route.
     *
     * @param id - The claim's ID.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details.
     *
     * @example
     * sdk.admin.claim.cancel("claim_123")
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ cancel(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/cancel`, {
                method: "POST",
                headers,
                query
            });
        });
    }
    /**
     * This method adds items to the claim. It sends a request to the
     * [Add Items](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitems) API route.
     *
     * @param id - The ID of the claim to add the items to.
     * @param body - The items' details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addItems("claim_123", {
     *   items: [
     *     {
     *       id: "orli_123",
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ addItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/claim-items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a claim item by the ID of the item's `WRITE_OFF_ITEM` action. It
     * sends a request to the [Update Claim Item](https://docs.medusajs.com/api/admin#claims_postclaimsidclaimitemsaction_id) API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateItem(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ updateItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes a claim item from a claim by the ID of the item's `WRITE_OFF_ITEM` action.
     * It sends a request to the [Remove Claim Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidclaimitemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the order item's `WRITE_OFF_ITEM` action.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The claim's details with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.removeItem(
     *   "claim_123",
     *   "ordchact_123",
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ removeItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/claim-items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds inbound (or return) items to the claim. These inbound items will have a `RETURN_ITEM` action.
     *
     * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditems)
     * API route.
     *
     * @param id - The ID of the claim to add the inbound items to.
     * @param body - The inbound items' details.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated with the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addInboundItems(
     *   "claim_123",
     *   {
     *     items: [
     *       {
     *         id: "orli_123",
     *         quantity: 1
     *       }
     *     ]
     *   },
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ addInboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/inbound/items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an inbound (or return) item of a claim using the ID of the item's `RETURN_ITEM` action.
     * It sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidinbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param body - The details to update in the inbound item.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateInboundItem(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   },
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ updateInboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes an inbound (or return) item from a claim using the ID of the item's `RETURN_ITEM` action.
     * It sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The ID of the return item's `RETURN_ITEM` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.removeInboundItem(
     *   "claim_123",
     *   "ordchact_123",
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ removeInboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/inbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds an inbound (or return) shipping method to a claim.
     * The inbound shipping method will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethod)
     * API route.
     *
     * @param id - The claim's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addInboundShipping(
     *   "claim_123",
     *   {
     *     shipping_option_id: "so_123",
     *     custom_amount: 10
     *   },
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ addInboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
     * It sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidinboundshippingmethodaction_id)
     * API route.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update in the shipping method
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateInboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     custom_amount: 10
     *   },
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ updateInboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a shipping method for returning items in the claim using the ID of the method's `SHIPPING_ADD` action.
     * It sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#claims_deleteclaimsidinboundshippingmethodaction_id)
     * API route.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request
     * @returns The details of the return associated wth the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.deleteInboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     *   )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ deleteInboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/inbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds outbound (or new) items to a claim. These outbound items will have an `ITEM_ADD` action.
     * It sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditems)
     * API route.
     *
     * @param id - The ID of the claim to add the outbound items to.
     * @param body - The items' details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addOutboundItems(
     *   "claim_123",
     *   {
     *     items: [{
     *       id: "orli_123",
     *       quantity: 1
     *     }]
     *   },
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ addOutboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/outbound/items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an outbound (or new) item of a claim using the ID of the item's `ITEM_ADD` action.
     * It sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#claims_postclaimsidoutbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the new claim item's `ITEM_ADD` action.
     * @param body - The item's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateOutboundItem(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   },
     *   )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ updateOutboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes an outbound (or new) item from a claim using the ID of the item's `ITEM_ADD` action.
     * It sends a request to the [Remove Outbound Item](https://docs.medusajs.com/api/admin#claims_deleteclaimsidoutbounditemsaction_id)
     * API route.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the new claim item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.removeOutboundItem(
     *   "claim_123",
     *   "ordchact_123",
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ removeOutboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/outbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds outbound an outbound shipping method to a claim.
     * The outbound shipping method will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the
     * [Add Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethod)
     * API route.
     *
     * @param id - The claim's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.addOutboundShipping(
     *   "claim_123",
     *   {
     *     shipping_option_id: "so_123",
     *     custom_amount: 10
     *   },
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ addOutboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates the shipping method for delivering outbound items in a claim using the ID of the method's `SHIPPING_ADD` action.
     * It sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#claims_postclaimsidoutboundshippingmethodaction_id)
     * API route.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.updateOutboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     *   {
     *     custom_amount: 10
     *   },
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ updateOutboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes the shipping method for delivering outbound items in the claim using the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The claim's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.deleteOutboundShipping(
     *   "claim_123",
     *   "ordchact_123",
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ deleteOutboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/outbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method confirms a claim request, applying its changes on the associated order.
     * It sends a request to the [Confirm Claim Request](https://docs.medusajs.com/api/admin#claims_postclaimsidrequest)
     * API route.
     *
     * @param id - The claim's ID.
     * @param body - The confirmation details.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The details of the claim and its associated return, with a preview of the order when the claim is applied.
     *
     * @example
     * sdk.admin.claim.request(
     *   "claim_123",
     *   {},
     * )
     * .then(({ claim }) => {
     *   console.log(claim)
     * })
     */ request(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/request`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels a requested claim. It sends a request to the
     * [Cancel Claim Request](https://docs.medusajs.com/api/admin#claims_deleteclaimsidrequest)
     * API route.
     *
     * @param id - The claim's ID.
     * @param query - Configure the fields to retrieve in the claim.
     * @param headers - Headers to pass in the request
     * @returns The cancelation's details.
     *
     * @example
     * sdk.admin.claim.cancelRequest(
     *   "claim_123",
     * )
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ cancelRequest(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/claims/${id}/request`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=claim.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/currency.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Currency",
    ()=>Currency
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Currency {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of currencies. It sends a request to the
     * [List Currencies](https://docs.medusajs.com/api/admin#currencies_getcurrencies)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of currencies.
     *
     * @example
     * To retrieve the list of currencies:
     *
     * ```ts
     * sdk.admin.currency.list()
     * .then(({ currencies, count, limit, offset }) => {
     *   console.log(currencies)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.currency.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ currencies, count, limit, offset }) => {
     *   console.log(currencies)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each currency:
     *
     * ```ts
     * sdk.admin.currency.list({
     *   fields: "code,symbol"
     * })
     * .then(({ currencies, count, limit, offset }) => {
     *   console.log(currencies)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/currencies`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a currency by its code. It sends a request to the
     * [Get Currency](https://docs.medusajs.com/api/admin#currencies_getcurrenciescode) API route.
     *
     * @param code - The currency's code.
     * @param query - Configure the fields to retrieve in the currency.
     * @param headers - Headers to pass in the request
     * @returns The currency's details.
     *
     * @example
     * To retrieve a currency by its code:
     *
     * ```ts
     * sdk.admin.currency.retrieve("usd")
     * .then(({ currency }) => {
     *   console.log(currency)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.currency.retrieve("usd", {
     *   fields: "code,symbol"
     * })
     * .then(({ currency }) => {
     *   console.log(currency)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(code, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/currencies/${code}`, {
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=currency.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/customer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Customer",
    ()=>Customer
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Customer {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a customer. It sends a request to the
     * [Create Customer](https://docs.medusajs.com/api/admin#customers_postcustomers) API route.
     *
     * @param body - The customer's details.
     * @param query - Configure the fields to retrieve in the customer.
     * @param headers - Headers to pass in the request.
     * @returns The customer's details.
     *
     * @example
     * sdk.admin.customer.create({
     *   email: "customer@gmail.com"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/customers`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a customer's details. It sends a request to the
     * [Update Customer](https://docs.medusajs.com/api/admin#customers_postcustomersid) API route.
     *
     * @param id - The customer's ID.
     * @param body - The details to update of the customer.
     * @param query - Configure the fields to retrieve in the customer.
     * @param headers - Headers to pass in the request.
     * @returns The customer's details.
     *
     * @example
     * sdk.admin.customer.update("cus_123", {
     *   first_name: "John"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/customers/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of customers. It sends a request to the
     * [List Customers](https://docs.medusajs.com/api/admin#customers_getcustomers)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of customers.
     *
     * @example
     * To retrieve the list of customers:
     *
     * ```ts
     * sdk.admin.customer.list()
     * .then(({ customers, count, limit, offset }) => {
     *   console.log(customers)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.customer.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ customers, count, limit, offset }) => {
     *   console.log(customers)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each customer:
     *
     * ```ts
     * sdk.admin.customer.list({
     *   fields: "id,*groups"
     * })
     * .then(({ customers, count, limit, offset }) => {
     *   console.log(customers)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/customers`, {
                headers,
                query: queryParams
            });
        });
    }
    /**
     * This method retrieves a customer by its ID. It sends a request to the
     * [Get Customer](https://docs.medusajs.com/api/admin#customers_getcustomersid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param query - Configure the fields to retrieve in the customer.
     * @param headers - Headers to pass in the request.
     * @returns The customer's details.
     *
     * @example
     * To retrieve a customer by its ID:
     *
     * ```ts
     * sdk.admin.customer.retrieve("cus_123")
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.customer.retrieve("cus_123", {
     *   fields: "id,*groups"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/customers/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a customer by its ID. It sends a request to the
     * [Delete Customer](https://docs.medusajs.com/api/admin#customers_deletecustomersid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.customer.delete("cus_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/customers/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages customer groups for a customer.
     * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customers_postcustomersidcustomergroups)
     * API route.
     *
     * @param id - The customer's ID.
     * @param body - The groups to add customer to or remove customer from.
     * @param headers - Headers to pass in the request
     * @returns The customers details.
     *
     * @example
     * sdk.admin.customer.batchCustomerGroups("cus_123", {
     *   add: ["cusgroup_123"],
     *   remove: ["cusgroup_321"]
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */ batchCustomerGroups(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customers/${id}/customer-groups`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method creates a customer address. It sends a request to the
     * [Create Customer Address](https://docs.medusajs.com/api/admin#customers_postcustomersidaddresses)
     * API route.
     *
     * @param id - The customer's ID.
     * @param body - The customer address's details.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.createAddress("cus_123", {
     *   address_1: "123 Main St",
     *   city: "Anytown",
     *   country_code: "US",
     *   postal_code: "12345"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */ createAddress(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customers/${id}/addresses`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method updates a customer address. It sends a request to the
     * [Update Customer Address](https://docs.medusajs.com/api/admin#customers_postcustomersidaddressesaddressid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param addressId - The customer address's ID.
     * @param body - The customer address's details.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.updateAddress("cus_123", "cus_addr_123", {
     *   address_1: "123 Main St",
     *   city: "Anytown",
     *   country_code: "US",
     *   postal_code: "12345"
     * })
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */ updateAddress(id, addressId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customers/${id}/addresses/${addressId}`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method deletes a customer address. It sends a request to the
     * [Delete Customer Address](https://docs.medusajs.com/api/admin#customers_deletecustomersidaddressesaddressid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param addressId - The customer address's ID.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.deleteAddress("cus_123", "cus_addr_123")
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */ deleteAddress(id, addressId, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customers/${id}/addresses/${addressId}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a customer address by its ID. It sends a request to the
     * [Get Customer Address](https://docs.medusajs.com/api/admin#customers_getcustomersidaddressesaddressid)
     * API route.
     *
     * @param id - The customer's ID.
     * @param addressId - The customer address's ID.
     * @param headers - Headers to pass in the request.
     * @returns The customer address's details.
     *
     * @example
     * sdk.admin.customer.retrieveAddress("cus_123", "cus_addr_123")
     * .then(({ customer }) => {
     *   console.log(customer)
     * })
     */ retrieveAddress(id, addressId, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customers/${id}/addresses/${addressId}`, {
                headers
            });
        });
    }
    /**
     * This method retrieves a list of customer addresses. It sends a request to the
     * [List Customer Addresses](https://docs.medusajs.com/api/admin#customers_getcustomersidaddresses)
     * API route.
     *
     * @param id - The customer's ID.
     * @param headers - Headers to pass in the request.
     * @returns The list of customer addresses.
     *
     * @example
     * sdk.admin.customer.listAddresses("cus_123")
     * .then(({ addresses }) => {
     *   console.log(addresses)
     * })
     */ listAddresses(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customers/${id}/addresses`, {
                headers
            });
        });
    }
} //# sourceMappingURL=customer.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/customer-group.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomerGroup",
    ()=>CustomerGroup
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CustomerGroup {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a customer group by its ID. It sends a request to the
     * [Get Customer Group](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroupsid) API route.
     *
     * @param id - The customer group's ID.
     * @param query - Configure the fields to retrieve in the customer group.
     * @param headers - Headers to pass in the request
     * @returns The group's details.
     *
     * @example
     * To retrieve a customer group by its ID:
     *
     * ```ts
     * sdk.admin.customerGroup.retrieve("cusgroup_123")
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.customerGroup.retrieve("cusgroup_123", {
     *   fields: "id,*customer"
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customer-groups/${id}`, {
                method: "GET",
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a paginated list of customer groups. It sends a request to the
     * [List Customer Groups](https://docs.medusajs.com/api/admin#customer-groups_getcustomergroups)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of customer groups.
     *
     * @example
     * To retrieve the list of customer groups:
     *
     * ```ts
     * sdk.admin.customerGroup.list()
     * .then(({ customer_groups, count, limit, offset }) => {
     *   console.log(customer_groups)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.customerGroup.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ customer_groups, count, limit, offset }) => {
     *   console.log(customer_groups)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each customer group:
     *
     * ```ts
     * sdk.admin.customerGroup.list({
     *   fields: "id,*customer"
     * })
     * .then(({ customer_groups, count, limit, offset }) => {
     *   console.log(customer_groups)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customer-groups`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method creates a customer group. It sends a request to the
     * [Create Customer Group](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroups)
     * API route.
     *
     * @param body - The customer group's details.
     * @param query - Configure the fields to retrieve in the customer group.
     * @param headers - Headers to pass in the request.
     * @returns The customer group's details.
     *
     * @example
     * sdk.admin.customerGroup.create({
     *   name: "VIP"
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customer-groups`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a customer group's details. It sends a request to the
     * [Update Customer](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsid)
     * API route.
     *
     * @param id - The customer group's ID.
     * @param body - The details to update in the group.
     * @param query - Configure the fields to retrieve in the customer group.
     * @param headers - Headers to pass in the request.
     * @returns The customer group's details.
     *
     * @example
     * sdk.admin.customerGroup.update("cusgroup_123", {
     *   name: "VIP"
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customer-groups/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a customer group. This method sends a request to the
     * [Delete Customer Group](https://docs.medusajs.com/api/admin#customer-groups_deletecustomergroupsid)
     * API route.
     *
     * @param id - The customer group's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.customerGroup.delete("cusgroup_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customer-groups/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages customers of a group to add or remove them from the group.
     * It sends a request to the [Manage Customers](https://docs.medusajs.com/api/admin#customer-groups_postcustomergroupsidcustomers)
     * API route.
     *
     * @param id - The group's ID.
     * @param body - The customers to add or remove from the group.
     * @param headers - Headers to pass in the request
     * @returns The customer group's details.
     *
     * @example
     * sdk.admin.customerGroup.batchCustomers("cusgroup_123", {
     *   add: ["cus_123"],
     *   remove: ["cus_321"]
     * })
     * .then(({ customer_group }) => {
     *   console.log(customer_group)
     * })
     */ batchCustomers(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/customer-groups/${id}/customers`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=customer-group.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/draft-order.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraftOrder",
    ()=>DraftOrder
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DraftOrder {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a draft order by its ID. It sends a request to the
     * [Get Draft Order](https://docs.medusajs.com/api/admin#draft-orders_getdraftordersid)
     * API route.
     *
     * @param id - The draft order's ID.
     * @param query - Configure the fields to retrieve in the draft order.
     * @param headers - Headers to pass in the request
     * @returns The draft order's details.
     *
     * @example
     * To retrieve a draft order by its ID:
     *
     * ```ts
     * sdk.admin.draftOrder.retrieve("order_123")
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.draftOrder.retrieve("order_123", {
     *   fields: "id,*items"
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a paginated list of draft orders. It sends a request to the
     * [List Draft Orders](https://docs.medusajs.com/api/admin#draft-orders_getdraftorders) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of draft orders.
     *
     * @example
     * To retrieve the list of draft orders:
     *
     * ```ts
     * sdk.admin.draftOrder.list()
     * .then(({ draft_orders, count, limit, offset }) => {
     *   console.log(draft_orders)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.draftOrder.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ draft_orders, count, limit, offset }) => {
     *   console.log(draft_orders)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each draft order:
     *
     * ```ts
     * sdk.admin.draftOrder.list({
     *   fields: "id,*items"
     * })
     * .then(({ draft_orders, count, limit, offset }) => {
     *   console.log(draft_orders)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method creates a draft order. It sends a request to the
     * [Create Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftorders) API route.
     *
     * @param body - The data to create the draft order.
     * @param query - Configure the fields to retrieve in the draft order.
     * @param headers - Headers to pass in the request.
     * @returns The draft order's details.
     *
     * @example
     * sdk.admin.draftOrder.create({
     *   email: "test@test.com",
     *   items: [
     *     {
     *       variant_id: "variant_123",
     *       quantity: 1,
     *     },
     *   ],
     *   region_id: "region_123",
     *   sales_channel_id: "sc_123",
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders`, {
                method: "POST",
                body,
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a draft order. It sends a request to the
     * [Delete Draft Order](https://docs.medusajs.com/api/admin#draft-orders_deleteordereditsid) API route.
     *
     * @param id - The draft order's ID.
     * @param headers - Headers to pass in the request.
     *
     * @example
     * sdk.admin.draftOrder.delete("order_123")
     * .then(({ id, object, deleted }) => {
     *   console.log(id, object, deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method updates a draft order. It sends a request to the
     * [Update Draft Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersid) API route.
     *
     * @param id - The draft order's ID.
     * @param body - The data to update the draft order.
     * @param query - Configure the fields to retrieve in the draft order.
     * @param headers - Headers to pass in the request.
     * @returns The draft order's details.
     *
     * @example
     * sdk.admin.draftOrder.update("order_123", {
     *   email: "test@test.com",
     * })
     * .then(({ draft_order }) => {
     *   console.log(draft_order)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}`, {
                method: "POST",
                body,
                query,
                headers
            });
        });
    }
    /**
     * This method converts a draft order to an order. It sends a request to the
     * [Convert Draft Order to Order](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidconverttoorder) API route.
     *
     * @param id - The draft order's ID.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.draftOrder.convertToOrder("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ convertToOrder(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/convert-to-order`, {
                method: "POST",
                query,
                headers
            });
        });
    }
    /**
     * This method adds items to a draft order. It sends a request to the
     * [Add Draft Order Items](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedititems) API route.
     *
     * @param id - The draft order's ID.
     * @param body - The data to add the items to the draft order.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.addItems("order_123", {
     *   items: [
     *     {
     *       variant_id: "variant_123",
     *       quantity: 1,
     *     },
     *   ],
     * })
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ addItems(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items`, {
                method: "POST",
                body,
                headers
            });
        });
    }
    /**
     * This method updates an item that is part of an action in a draft order. It sends a request to the
     * [Update Draft Order Item](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedititemsaction_id) API route.
     *
     * @param id - The draft order's ID.
     * @param actionId - The action ID.
     * @param body - The data to update the item.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.updateActionItem("order_123", "action_123", {
     *   quantity: 2,
     * })
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ updateActionItem(id, actionId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items/${actionId}`, {
                method: "POST",
                body,
                headers
            });
        });
    }
    /**
     * This method removes an item that is part of an action in a draft order. It sends a request to the
     * [Remove Draft Order Item](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersidedititemsaction_id) API route.
     *
     * @param id - The draft order's ID.
     * @param actionId - The action ID.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.removeActionItem("order_123", "action_123")
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ removeActionItem(id, actionId, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items/${actionId}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method updates an item in a draft order. It sends a request to the
     * [Update Draft Order Item](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedititemsitemitem_id) API route.
     *
     * @param id - The draft order's ID.
     * @param itemId - The item ID.
     * @param body - The data to update the item.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.updateItem("order_123", "item_123", {
     *   quantity: 2,
     * })
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ updateItem(id, itemId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/items/item/${itemId}`, {
                method: "POST",
                body,
                headers
            });
        });
    }
    /**
     * This method adds promotions to a draft order. It sends a request to the
     * [Add Draft Order Promotions](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditpromotions) API route.
     *
     * @param id - The draft order's ID.
     * @param body - The data to add the promotions to the draft order.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.addPromotions("order_123", {
     *   promo_codes: ["PROMO_CODE_1", "PROMO_CODE_2"],
     * })
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ addPromotions(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/promotions`, {
                method: "POST",
                body,
                headers
            });
        });
    }
    /**
     * This method removes promotions from a draft order. It sends a request to the
     * [Remove Draft Order Promotions](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersideditpromotions) API route.
     *
     * @param id - The draft order's ID.
     * @param body - The data to remove the promotions from the draft order.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.removePromotions("order_123", {
     *   promo_codes: ["PROMO_CODE_1", "PROMO_CODE_2"],
     * })
     */ removePromotions(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/promotions`, {
                method: "DELETE",
                body,
                headers
            });
        });
    }
    /**
     * This method adds a shipping method to a draft order. It sends a request to the
     * [Add Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditshippingmethods) API route.
     *
     * @param id - The draft order's ID.
     * @param body - The data to add the shipping method to the draft order.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.addShippingMethod("order_123", {
     *   shipping_option_id: "shipping_option_123",
     * })
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ addShippingMethod(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods`, {
                method: "POST",
                body,
                headers
            });
        });
    }
    /**
     * This method updates a shipping method in a draft order. It sends a request to the
     * [Update Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditshippingmethodsaction_id) API route.
     *
     * @param id - The draft order's ID.
     * @param actionId - The action ID.
     * @param body - The data to update the shipping method.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.updateShippingMethod("order_123", "action_123", {
     *   shipping_option_id: "shipping_option_123",
     * })
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ updateActionShippingMethod(id, actionId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/${actionId}`, {
                method: "POST",
                body,
                headers
            });
        });
    }
    /**
     * This method removes a shipping method from a draft order. It sends a request to the
     * [Remove Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersideditshippingmethodsaction_id) API route.
     *
     * @param id - The draft order's ID.
     * @param actionId - The action ID.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.removeShippingMethod("order_123", "action_123")
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ removeActionShippingMethod(id, actionId, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/${actionId}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method removes a shipping method from an edited draft order. It sends a request to the
     * [Remove Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersideditshippingmethodsmethodmethod_id) API route.
     *
     * @param id - The draft order's ID.
     * @param shippingMethodId - The shipping method's ID.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.removeShippingMethod(
     *   "order_123",
     *   "shipping_method_123"
     * )
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ removeShippingMethod(id, shippingMethodId, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/method/${shippingMethodId}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method updates a shipping method in a draft order. It sends a request to the
     * [Update Draft Order Shipping Method](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditshippingmethodsmethodmethod_id) API route.
     *
     * @param id - The draft order's ID.
     * @param methodId - The shipping method's ID.
     * @param body - The data to update the shipping method.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.updateShippingMethod("order_123", "sm_123", {
     *  shipping_option_id: "so_123",
     * })
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ updateShippingMethod(id, methodId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/shipping-methods/method/${methodId}`, {
                method: "POST",
                body,
                headers
            });
        });
    }
    /**
     * This method begins an edit to a draft order. It sends a request to the
     * [Begin Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersidedit) API route.
     *
     * @param id - The draft order's ID.
     * @param headers - Headers to pass in the request.
     *
     * @example
     * sdk.admin.draftOrder.beginEdit("order_123")
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ beginEdit(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit`, {
                method: "POST",
                headers
            });
        });
    }
    /**
     * This method cancels an edit to a draft order. It sends a request to the
     * [Cancel Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_deletedraftordersidedit) API route.
     *
     * @param id - The draft order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The cancelation's details.
     *
     * @example
     * sdk.admin.draftOrder.cancelEdit("order_123")
     * .then(({ id, object, deleted }) => {
     *   console.log(id, object, deleted)
     * })
     */ cancelEdit(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method requests an edit to a draft order. It sends a request to the
     * [Request Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditrequest) API route.
     *
     * @param id - The draft order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.requestEdit("order_123")
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ requestEdit(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/request`, {
                method: "POST",
                headers
            });
        });
    }
    /**
     * This method confirms an edit to a draft order. It sends a request to the
     * [Confirm Draft Order Edit](https://docs.medusajs.com/api/admin#draft-orders_postdraftordersideditconfirm) API route.
     *
     * @param id - The draft order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The draft order preview's details.
     *
     * @example
     * sdk.admin.draftOrder.confirmEdit("order_123")
     * .then(({ draft_order_preview }) => {
     *   console.log(draft_order_preview)
     * })
     */ confirmEdit(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/draft-orders/${id}/edit/confirm`, {
                method: "POST",
                headers
            });
        });
    }
} //# sourceMappingURL=draft-order.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/exchange.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Exchange",
    ()=>Exchange
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Exchange {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of exchanges. It sends a request to the
     * [List Exchanges](https://docs.medusajs.com/api/admin#exchanges_getexchanges)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of exchanges.
     *
     * @example
     * To retrieve the list of exchanges:
     *
     * ```ts
     * sdk.admin.exchange.list()
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.exchange.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each exchange:
     *
     * ```ts
     * sdk.admin.exchange.list({
     *   fields: "id,*order"
     * })
     * .then(({ exchanges, count, limit, offset }) => {
     *   console.log(exchanges)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves an exchange by its ID. It sends a request to the
     * [Get Exchange](https://docs.medusajs.com/api/admin#exchanges_getexchangesid)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * To retrieve an exchange by its ID:
     *
     * ```ts
     * sdk.admin.exchange.retrieve("exchange_123")
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.exchange.retrieve("exchange_123", {
     *   fields: "id,*order"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method creates an admin exchange. It sends a request to the
     * [Create Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchanges) API route.
     *
     * @param body - The exchange's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * sdk.admin.exchange.create({
     *   order_id: "order_123"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels an exchange. It sends a request to the
     * [Cancel Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidcancel) API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request.
     * @returns The exchange's details.
     *
     * @example
     * sdk.admin.exchange.cancel("exchange_123")
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ cancel(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/cancel`, {
                method: "POST",
                headers,
                query
            });
        });
    }
    /**
     * This method adds inbound (or return) items to an exchange. These inbound items will
     * have the action `RETURN_ITEM`.
     *
     * This method sends a request to the [Add Inbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditems)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addInboundItems("exchange_123", {
     *   items: [{
     *     id: "orli_123",
     *     quantity: 1
     *   }]
     * })
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ addInboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an inbound (or return) item from an exchange using the ID of
     * the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can
     * check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateInboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ updateInboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes an inbound (or return) item from an exchange using the ID of the
     * item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Inbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the return item's `RETURN_ITEM` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.removeInboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ removeInboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds an inbound (or return) shipping method to an exchange.
     * The inbound shipping method will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
     * API route.
     *
     * This method sends a request to the [Add Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethod)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addInboundShipping("exchange_123", {
     *   shipping_option_id: "so_123"
     * })
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ addInboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates the shipping method for returning items in the exchange using the ID
     * of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidinboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateInboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     *    {
     *     custom_amount: 10
     *   }
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ updateInboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes the shipping method for returning items in the exchange using the ID
     * of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Inbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidinboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The details of the return associated with the exchange, with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.deleteInboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ return: returnData }) => {
     *   console.log(returnData)
     * })
     */ deleteInboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/inbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds outbound (or new) items to an exchange.
     * These outbound items will have the action `ITEM_ADD`.
     *
     * This method sends a request to the [Add Outbound Items](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditems)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addOutboundItems("exchange_123", {
     *   items: [{
     *     id: "variant_123",
     *     quantity: 1
     *   }]
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ addOutboundItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an outbound (or new) item from an exchange using the ID
     * of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Inbound Item](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
     * @param body - The item's details to update.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateOutboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ updateOutboundItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes an outbound (or new) item from an exchange using the ID
     * of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Outbound Item](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutbounditemsaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the new exchange item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.removeOutboundItem(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ removeOutboundItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds an outbound shipping method to an exchange. The outbound shipping method
     * will have a `SHIPPING_ADD` action.
     *
     * This method sends a request to the [Add Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethod)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The shipping method's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.addOutboundShipping("exchange_123", {
     *   shipping_option_id: "so_123"
     * })
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ addOutboundShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates the shipping method for delivering outbound items in the exchange using
     * the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Update Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_postexchangesidoutboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.updateOutboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     *   {
     *     custom_amount: 10
     *   }
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ updateOutboundShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes the shipping method for delivering outbound items in the exchange using
     * the ID of the method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * This method sends a request to the [Remove Outbound Shipping](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidoutboundshippingmethodaction_id)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param actionId - The id of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.deleteOutboundShipping(
     *   "exchange_123",
     *   "ordchact_123",
     * )
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ deleteOutboundShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/outbound/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method confirms an exchange request, applying its changes on the associated order.
     *
     * This method sends a request to the [Confirm Exchange](https://docs.medusajs.com/api/admin#exchanges_postexchangesidrequest)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param body - The confirmation's details.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The exchange and associated return's details with a preview of the order when the exchange is applied.
     *
     * @example
     * sdk.admin.exchange.request("exchange_123", {})
     * .then(({ exchange }) => {
     *   console.log(exchange)
     * })
     */ request(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels an exchange request. It sends a request to the
     * [Cancel Exchange Request](https://docs.medusajs.com/api/admin#exchanges_deleteexchangesidrequest)
     * API route.
     *
     * @param id - The exchange's ID.
     * @param query - Configure the fields to retrieve in the exchange.
     * @param headers - Headers to pass in the request
     * @returns The cancelation's details.
     *
     * @example
     * sdk.admin.exchange.cancel("exchange_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ cancelRequest(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/exchanges/${id}/request`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=exchange.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fulfillment",
    ()=>Fulfillment
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Fulfillment {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a fulfillment. It sends a request to the
     * [Create Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillments)
     * API route.
     *
     * @param body - The fulfillment's details.
     * @param query - Configure the fields to retrieve in the fulfillment.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment's details.
     *
     * @example
     * sdk.admin.fulfillment.create({
     *   location_id: "sloc_123",
     *   provider_id: "my_fulfillment",
     *   delivery_address: {
     *     country_code: "us"
     *   },
     *   items: [
     *     {
     *       title: "Shirt",
     *       sku: "SHIRT",
     *       quantity: 1,
     *       barcode: "123"
     *     }
     *   ],
     *   labels: [],
     *   order: {},
     *   order_id: "order_123"
     * })
     * .then(({ fulfillment }) => {
     *   console.log(fulfillment)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillments`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels a fulfillment. It sends a request to the
     * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidcancel)
     * API route.
     *
     * @param id - The fulfillment's ID.
     * @param query - Configure the fields to retrieve in the fulfillment.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment's details.
     *
     * @example
     * sdk.admin.fulfillment.cancel("ful_123")
     * .then(({ fulfillment }) => {
     *   console.log(fulfillment)
     * })
     */ cancel(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillments/${id}/cancel`, {
                method: "POST",
                body: {},
                headers,
                query
            });
        });
    }
    /**
     * This method creates a shipment for a fulfillment. It sends a request to the
     * [Create Shipment](https://docs.medusajs.com/api/admin#fulfillments_postfulfillmentsidshipment)
     * API route.
     *
     * @param id - The fulfillment's ID.
     * @param body - The shipment's details.
     * @param query - Configure the fields to retrieve in the fulfillment.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment's details.
     *
     * @example
     * sdk.admin.fulfillment.createShipment("ful_123", {
     *   labels: [
     *     {
     *       tracking_number: "123",
     *       tracking_url: "example.com",
     *       label_url: "example.com"
     *     }
     *   ]
     * })
     * .then(({ fulfillment }) => {
     *   console.log(fulfillment)
     * })
     */ createShipment(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillments/${id}/shipment`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
} //# sourceMappingURL=fulfillment.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment-provider.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FulfillmentProvider",
    ()=>FulfillmentProvider
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FulfillmentProvider {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of fulfillment providers. It sends a request to the
     * [List Fulfillment Providers](https://docs.medusajs.com/api/admin#fulfillment-providers_getfulfillmentproviders)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of providers.
     *
     * @example
     * To retrieve the list of fulfillment providers:
     *
     * ```ts
     * sdk.admin.fulfillmentProvider.list()
     * .then(({ fulfillment_providers, count, limit, offset }) => {
     *   console.log(fulfillment_providers)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.fulfillmentProvider.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ fulfillment_providers, count, limit, offset }) => {
     *   console.log(fulfillment_providers)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each fulfillment provider:
     *
     * ```ts
     * sdk.admin.fulfillmentProvider.list({
     *   fields: "id"
     * })
     * .then(({ fulfillment_providers, count, limit, offset }) => {
     *   console.log(fulfillment_providers)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillment-providers`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of fulfillment options for a given fulfillment provider. It sends a request to the
     * [List Fulfillment Options](https://docs.medusajs.com/api/admin#fulfillment-providers_getfulfillmentprovidersidoptions)
     * API route.
     *
     * @param id - The ID of the fulfillment provider.
     * @param headers - Headers to pass in the request.
     * @returns The list of fulfillment options.
     *
     * @example
     * sdk.admin.fulfillmentProvider.listFulfillmentOptions("fp_123")
     * .then(({ fulfillment_options }) => {
     *   console.log(fulfillment_options)
     * })
     */ listFulfillmentOptions(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillment-providers/${id}/options`, {
                method: "GET",
                headers
            });
        });
    }
} //# sourceMappingURL=fulfillment-provider.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment-set.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FulfillmentSet",
    ()=>FulfillmentSet
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FulfillmentSet {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method deletes a fulfillment set. It sends a request to the
     * [Delete Fulfillment Set](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsid)
     * API route.
     *
     * @param id - The fulfillment set's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.delete("fset_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillment-sets/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method adds a service zone to a fulfillment set. It uses the
     * [Add Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezones)
     * API route.
     *
     * @param id - The fulfillment set's ID.
     * @param body - The service zone's details.
     * @param query - Configure the fields to retrieve in the fulfillment set.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment set's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.createServiceZone("fset_123", {
     *   name: "Europe Service Zone",
     *   geo_zones: [{
     *     type: "country",
     *     country_code: "us"
     *   }]
     * })
     * .then(({ fulfillment_set }) => {
     *   console.log(fulfillment_set)
     * })
     */ createServiceZone(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillment-sets/${id}/service-zones`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a fulfillment set's service zone's details. It sends a request to the
     * [Get Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_getfulfillmentsetsidservicezoneszone_id)
     * API route.
     *
     * @param fulfillmentSetId - The fulfillment set's ID.
     * @param serviceZoneId - The service zone's ID.
     * @param query - Configure the fields to retrieve in the service zone.
     * @param headers - Headers to pass in the request.
     * @returns The service zone's details.
     *
     * @example
     * To retrieve a fulfillment set's service zone by its ID:
     *
     * ```ts
     * sdk.admin.fulfillmentSet.retrieveServiceZone(
     *   "fset_123",
     *   "serzo_123"
     * )
     * .then(({ service_zone }) => {
     *   console.log(service_zone)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.fulfillmentSet.retrieveServiceZone(
     *   "fset_123",
     *   "serzo_123",
     *   {
     *     fields: "id,*geo_zones"
     *   }
     * )
     * .then(({ service_zone }) => {
     *   console.log(service_zone)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieveServiceZone(fulfillmentSetId, serviceZoneId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method updates a service zone in a fulfillment set. It sends a request to the
     * [Update Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_postfulfillmentsetsidservicezoneszone_id)
     * API route.
     *
     * @param fulfillmentSetId - The fulfillment set's ID.
     * @param serviceZoneId - The service zone's ID.
     * @param body - The data to update in the service zone.
     * @param query - Configure the fields to retrieve in the fulfillment set.
     * @param headers - Headers to pass in the request.
     * @returns The fulfillment set's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.updateServiceZone(
     *   "fset_123",
     *   "serzo_123",
     *   {
     *     name: "Europe Service Zone",
     *   }
     * )
     * .then(({ fulfillment_set }) => {
     *   console.log(fulfillment_set)
     * })
     */ updateServiceZone(fulfillmentSetId, serviceZoneId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a service zone in a fulfillment set. It sends a request to the
     * [Remove Service Zone](https://docs.medusajs.com/api/admin#fulfillment-sets_deletefulfillmentsetsidservicezoneszone_id)
     * API route.
     *
     * @param fulfillmentSetId - The fulfullment set's ID.
     * @param serviceZoneId - The service zone's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.fulfillmentSet.deleteServiceZone(
     *   "fset_123",
     *   "serzo_123",
     * )
     * .then(({ deleted, parent: fulfillmentSet }) => {
     *   console.log(deleted, fulfillmentSet)
     * })
     */ deleteServiceZone(fulfillmentSetId, serviceZoneId, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/fulfillment-sets/${fulfillmentSetId}/service-zones/${serviceZoneId}`, {
                method: "DELETE",
                headers
            });
        });
    }
} //# sourceMappingURL=fulfillment-set.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/inventory-item.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InventoryItem",
    ()=>InventoryItem
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class InventoryItem {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates an inventory item. It sends a request to the
     * [Create Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitems)
     * API route.
     *
     * @param body - The inventory item's details.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request.
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.create({
     *   sku: "SHIRT"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an inventory level. It sends a request to the
     * [Update Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsid)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param body - The data to update.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request.
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.update("iitem_123", {
     *   sku: "SHIRT"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of inventory items. It sends a request to the
     * [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of inventory items.
     *
     * @example
     * To retrieve the list of inventory items:
     *
     * ```ts
     * sdk.admin.inventoryItem.list()
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.inventoryItem.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each inventory item:
     *
     * ```ts
     * sdk.admin.inventoryItem.list({
     *   fields: "id,*location_levels"
     * })
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves an inventory item by its ID. It sends a request to the
     * [Get Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitemsid) API route.
     *
     * @param id - The inventory item's ID.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * To retrieve an inventory item by its ID:
     *
     * ```ts
     * sdk.admin.inventoryItem.retrieve("iitem_123")
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.inventoryItem.retrieve("iitem_123", {
     *   fields: "id,*location_levels"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes an inventory item. This sends a request to the
     * [Delete Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsid)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.inventoryItem.delete("iitem_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a paginated list of inventory levels that belong to an inventory item.
     * It sends a request to the [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of inventory levels.
     *
     * @example
     * To retrieve the list of inventory levels:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123")
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123", {
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each inventory level:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123", {
     *   fields: "id,*inventory_item"
     * })
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ listLevels(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels`, {
                query,
                headers
            });
        });
    }
    /**
     * This method updates the inventory level of the specified inventory item and
     * stock location.
     *
     * This method sends a request to the
     * [Update Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelslocation_id)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param locationId - The stock location's ID.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.updateLevel(
     *   "iitem_123",
     *   "sloc_123",
     *   {
     *     stocked_quantity: 10
     *   }
     * )
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */ updateLevel(id, locationId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes an inventory level associated with an inventory item
     * and a stock location.
     *
     * This method sends a request to the
     * [Remove Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsidlocationlevelslocation_id)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param locationId - The stock location's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.inventoryItem.deleteLevel(
     *   "iitem_123",
     *   "sloc_123",
     * )
     * .then(({ deleted, parent: inventoryItem }) => {
     *   console.log(deleted, inventoryItem)
     * })
     */ deleteLevel(id, locationId, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages the inventory levels of an inventory item. It sends a request to the
     * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
     * API route.
     *
     * @deprecated Use `batchInventoryItemLocationLevels` instead.
     *
     * @param id - The inventory item's ID.
     * @param body - The inventory levels to create or delete.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.batchUpdateLevels("iitem_123", {
     *   create: [{
     *     location_id: "sloc_123",
     *     stocked_quantity: 10
     *   }],
     *   delete: ["ilvl_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batchUpdateLevels(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method manages the inventory levels of an inventory item. It sends a request to the
     * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.batchInventoryItemLocationLevels("iitem_123", {
     *   create: [{
     *     location_id: "sloc_123",
     *     stocked_quantity: 10
     *   }],
     *   delete: ["ilvl_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batchInventoryItemLocationLevels(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method manages the inventory levels of multiple inventory items.
     *
     * @param body - The inventory levels to create, update or delete, and an optional `force` flag.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.batchInventoryItemsLocationLevels({
     *   create: [{
     *     inventory_item_id: "iitem_123",
     *     location_id: "sloc_123",
     *     stocked_quantity: 10
     *   }],
     *   delete: ["ilvl_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batchInventoryItemsLocationLevels(body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/inventory-items/location-levels/batch`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=inventory-item.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/invite.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Invite",
    ()=>Invite
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
class Invite {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method accepts an invite. It requires sending a previous request to
     * the {@link Auth.register}.
     *
     * This method sends a request to the [Accept Invite]
     * (https://docs.medusajs.com/api/admin#invites_postinvitesaccept)
     * API route.
     *
     * @param input - The details of the user to create.
     * @param query - Configure the fields to retrieve in the user.
     * @param headers - Headers to pass in the request
     * @returns The user's details.
     *
     * @example
     * await sdk.auth.register("user", "emailpass", {
     *   email: "user@gmail.com",
     *   password: "supersecret"
     * })
     *
     * // all subsequent requests will use the token in the header
     * const { user } = await sdk.admin.invite.accept(
     *   {
     *     email: "user@gmail.com",
     *     first_name: "John",
     *     last_name: "Smith",
     *     invite_token: "12345..."
     *   },
     * )
     */ accept(input, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            const { invite_token } = input, rest = __rest(input, [
                "invite_token"
            ]);
            return yield this.client.fetch(`/admin/invites/accept?token=${input.invite_token}`, {
                method: "POST",
                headers,
                body: rest,
                query
            });
        });
    }
    /**
     * This method creates an invite. It sends a request to the
     * [Create Invite](https://docs.medusajs.com/api/admin#invites_postinvites)
     * API route.
     *
     * @param body - The invite's details.
     * @param query - Configure the fields to retrieve in the invite.
     * @param headers - Headers to pass in the request
     * @returns The invite's details.
     *
     * @example
     * sdk.admin.invite.create({
     *   email: "user@gmail.com",
     * })
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/invites`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves an invite by its ID. It sends a request to the
     * [Get Invite](https://docs.medusajs.com/api/admin#invites_getinvitesid)
     * API route.
     *
     * @param id - The invite's ID.
     * @param query - Configure the fields to retrieve in the invite.
     * @param headers - Headers to pass in the request
     * @returns The invite's details.
     *
     * @example
     * To retrieve an invite its ID:
     *
     * ```ts
     * sdk.admin.invite.retrieve("invite_123")
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.invite.retrieve("invite_123", {
     *   fields: "id,email"
     * })
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/invites/${id}`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of invites. It sends a request to the
     * [List Invites](https://docs.medusajs.com/api/admin#invites_getinvites)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of invites.
     *
     * @example
     * To retrieve the list of invites:
     *
     * ```ts
     * sdk.admin.invite.list()
     * .then(({ invites, count, limit, offset }) => {
     *   console.log(invites)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.invite.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ invites, count, limit, offset }) => {
     *   console.log(invites)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each invite:
     *
     * ```ts
     * sdk.admin.invite.list({
     *   fields: "id,email"
     * })
     * .then(({ invites, count, limit, offset }) => {
     *   console.log(invites)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/invites`, {
                headers,
                query: queryParams
            });
        });
    }
    /**
     * This method refreshes the token of an invite. It sends a request to the
     * [Refresh Invite Token](https://docs.medusajs.com/api/admin#invites_postinvitesidresend)
     * API route.
     *
     * @param id - The invite's ID.
     * @param headers - Headers to pass in the request.
     * @returns The invite's details.
     *
     * @example
     * sdk.admin.invite.resend("invite_123")
     * .then(({ invite }) => {
     *   console.log(invite)
     * })
     */ resend(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/invites/${id}/resend`, {
                method: "POST",
                headers
            });
        });
    }
    /**
     * This method deletes an invite. It sends a request to the
     * [Delete Invite](https://docs.medusajs.com/api/admin#invites_deleteinvitesid)
     * API route.
     *
     * @param id - The invite's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.invite.delete("invite_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/invites/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
} //# sourceMappingURL=invite.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/notification.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Notification",
    ()=>Notification
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Notification {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a notification's details. It sends a request to the
     * [Get Notification](https://docs.medusajs.com/api/admin#notifications_getnotificationsid)
     * API route.
     *
     * @param id - The notification's ID.
     * @param query - Configure the fields to retrieve in the notification.
     * @param headers - Headers to pass in the request
     * @returns The notification's details.
     *
     * @example
     * To retrieve a notification by its ID:
     *
     * ```ts
     * sdk.admin.notification.retrieve("notif_123")
     * .then(({ notification }) => {
     *   console.log(notification)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.notification.retrieve("notif_123", {
     *   fields: "id,to"
     * })
     * .then(({ notification }) => {
     *   console.log(notification)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/notifications/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of notifications. It sends a request to the
     * [List Notifications](https://docs.medusajs.com/api/admin#notifications_getnotifications)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of notifications.
     *
     * @example
     * To retrieve the list of notifications:
     *
     * ```ts
     * sdk.admin.notification.list()
     * .then(({ notifications, count, limit, offset }) => {
     *   console.log(notifications)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.notification.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ notifications, count, limit, offset }) => {
     *   console.log(notifications)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each notification:
     *
     * ```ts
     * sdk.admin.notification.list({
     *   fields: "id,to"
     * })
     * .then(({ notifications, count, limit, offset }) => {
     *   console.log(notifications)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/notifications`, {
                method: "GET",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=notification.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/order.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Order",
    ()=>Order
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Order {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves an order by its ID. It sends a request to the
     * [Get Order](https://docs.medusajs.com/api/admin#orders_getordersid)
     * API route.
     *
     * @param id - The order's ID.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * To retrieve an order by its ID:
     *
     * ```ts
     * sdk.admin.order.retrieve("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.order.retrieve("order_123", {
     *   fields: "id,*items"
     * })
     * .then(({ order }) => {
     *   console.log(order)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method updates an order. It sends a request to the
     * [Update Order Email](https://docs.medusajs.com/api/admin#orders_postordersid)
     * API route.
     *
     * @param id - The order's ID.
     * @param body - The update details.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.update(
     *   "order_123",
     *   {
     *     email: "new_email@example.com",
     *     shipping_address: {
     *       first_name: "John",
     *       last_name: "Doe",
     *       address_1: "123 Main St",
     *     }
     *   }
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ update(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method retrieves the preview of an order based on its last associated change. It sends a request to the
     * [Get Order Preview](https://docs.medusajs.com/api/admin#orders_getordersidpreview) API route.
     *
     * @param id - The order's ID.
     * @param query - Query parameters.
     * @param headers - Headers to pass in the request
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.order.retrievePreview("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ retrievePreview(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/preview`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a paginated list of orders. It sends a request to the
     * [List Orders](https://docs.medusajs.com/api/admin#orders_getorders) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of orders.
     *
     * @example
     * To retrieve the list of orders:
     *
     * ```ts
     * sdk.admin.order.list()
     * .then(({ orders, count, limit, offset }) => {
     *   console.log(orders)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.order.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ orders, count, limit, offset }) => {
     *   console.log(orders)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each order:
     *
     * ```ts
     * sdk.admin.order.list({
     *   fields: "id,*items"
     * })
     * .then(({ orders, count, limit, offset }) => {
     *   console.log(orders)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method archives an order. It sends a request to the
     * [Archive Order](https://docs.medusajs.com/api/admin#orders_postordersidarchive)
     * API route.
     *
     * @param id - The order's ID.
     * @param queryParams - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.archive("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ archive(id, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/archive`, {
                method: "POST",
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method cancels an order. It sends a request to the
     * [Cancel Order](https://docs.medusajs.com/api/admin#orders_postordersidcancel)
     * API route.
     *
     * @param id - The order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.cancel("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ cancel(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/cancel`, {
                method: "POST",
                headers
            });
        });
    }
    /**
     * This method completes an order. It sends a request to the
     * [Complete Order](https://docs.medusajs.com/api/admin#orders_postordersidcomplete)
     * API route.
     *
     * @param id - The order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.complete("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ complete(id, body, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/complete`, {
                method: "POST",
                body,
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method requests an order transfer. It sends a request to the
     * [Request Order Transfer](https://docs.medusajs.com/api/admin#orders_postordersidrequesttransfer)
     * API route.
     *
     * @param id - The order's ID.
     * @param headers - Headers to pass in the request.
     * @param body - The transfer's details - the id of the next owner.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.requestTransfer("order_123", {
     *   customer_id: "cus_123",
     *   internal_note: "Internal note",
     * })
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ requestTransfer(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/transfer`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method cancels an order transfer request. It sends a request to the
     * [Cancel Order Transfer Request](https://docs.medusajs.com/api/admin#orders_postordersidcanceltransferrequest)
     * API route.
     *
     * @param id - The order's ID.
     * @param headers - Headers to pass in the request.
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.cancelTransfer("order_123")
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ cancelTransfer(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/transfer/cancel`, {
                method: "POST",
                headers
            });
        });
    }
    /**
     * This method creates a fulfillment for an order. It sends a request to the
     * [Create Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillments)
     * API route.
     *
     * @param id - The order's ID.
     * @param body - The fulfillment's details.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.createFulfillment("order_123", {
     *   items: [
     *     {
     *       id: "orli_123",
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ createFulfillment(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels an order's fulfillment. It sends a request to the
     * [Cancel Fulfillment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idcancel)
     * API route.
     *
     * @param id - The order's ID.
     * @param fulfillmentId - The ID of the fulfillment to cancel.
     * @param body - The cancelation's details.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.cancelFulfillment(
     *   "order_123",
     *   "ful_123",
     *   {
     *     no_notification: false
     *   }
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ cancelFulfillment(id, fulfillmentId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/cancel`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method creates a shipment for an order's fulfillment. It sends a request to the
     * [Create Shipment](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idshipments)
     * API route.
     *
     * @param id - The order's ID.
     * @param fulfillmentId - The ID of the fulfillment.
     * @param body - The shipment's details.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.createShipment(
     *   "order_123",
     *   "ful_123",
     *   {
     *     items: [
     *       {
     *         id: "fulit_123",
     *         quantity: 1
     *       }
     *     ]
     *   }
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ createShipment(id, fulfillmentId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/shipments`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method marks an order's fulfillment as delivered. It sends a request to the
     * [Mark Delivered ](https://docs.medusajs.com/api/admin#orders_postordersidfulfillmentsfulfillment_idmarkasdelivered)
     * API route.
     *
     * @param id - The order's ID.
     * @param fulfillmentId - The fulfillment's ID.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.markAsDelivered(
     *   "order_123",
     *   "ful_123",
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ markAsDelivered(id, fulfillmentId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/fulfillments/${fulfillmentId}/mark-as-delivered`, {
                method: "POST",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of shipping options for an order based on the order's shipping address.
     *
     * This method sends a request to the [List Shipping Options](https://docs.medusajs.com/api/admin#orders_getordersidshipping-options)
     * API route.
     *
     * @param id - The order's ID.
     * @param queryParams - Configure the fields to retrieve in each shipping option.
     * @param headers - Headers to pass in the request
     * @returns The list of shipping options.
     *
     * @example
     * sdk.admin.order.listShippingOptions("order_123")
     * .then(({ shipping_options }) => {
     *   console.log(shipping_options)
     * })
     */ listShippingOptions(id, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/shipping-options`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method retrieves a list of changes made on an order, including returns, exchanges, etc...
     *
     * This method sends a request to the [List Changes](https://docs.medusajs.com/api/admin#orders_getordersidchanges)
     * API route.
     *
     * @param id - The order's ID.
     * @param queryParams - Configure the fields to retrieve in each order change.
     * @param headers - Headers to pass in the request
     * @returns The list of order changes.
     *
     * @example
     * sdk.admin.order.listChanges("order_123")
     * .then(({ order_changes }) => {
     *   console.log(order_changes)
     * })
     */ listChanges(id, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/changes`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method retrieves the order's line items. It sends a request to the
     * [List Line Items](https://docs.medusajs.com/api/admin#orders_getordersidlineitems)
     * API routes.
     *
     * @param id - The order's ID.
     * @param queryParams - Configure the fields to retrieve in each line item.
     * @param headers - Headers to pass in the request
     * @returns The list of line items.
     *
     * @example
     * sdk.admin.order.listLineItems("order_123")
     * .then(({ order_items }) => {
     *   console.log(order_items)
     * })
     */ listLineItems(id, queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${id}/line-items`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method creates a credit line for an order. It sends a request to the
     * [Create Credit Line](https://docs.medusajs.com/api/admin#orders_postordersidcredit-lines) API route.
     *
     * @param orderId - The order's ID.
     * @param body - The credit line's details.
     * @param query - Configure the fields to retrieve in the order.
     * @param headers - Headers to pass in the request
     * @returns The order's details.
     *
     * @example
     * sdk.admin.order.createCreditLine(
     *   "order_123",
     *   {
     *     amount: 100,
     *     reference: "order",
     *     reference_id: "order_123",
     *   }
     * )
     * .then(({ order }) => {
     *   console.log(order)
     * })
     */ createCreditLine(orderId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/${orderId}/credit-lines`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an order change. It sends a request to the
     * [Update Order Change](https://docs.medusajs.com/api/admin#order-changes_postorder-changesid)
     * API route.
     *
     * @since 2.12.0
     *
     * @param id - The order change's ID.
     * @param body - The update details.
     * @param query - Configure the fields to retrieve in the order change.
     * @param headers - Headers to pass in the request
     * @returns The order change's details.
     *
     * @example
     * sdk.admin.order.updateOrderChange(
     *   "ordch_123",
     *   {
     *     carry_over_promotions: true
     *   }
     * )
     * .then(({ order_change }) => {
     *   console.log(order_change)
     * })
     */ updateOrderChange(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-changes/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method starts an order export process to retrieve a CSV of exported orders. It sends
     * a request to the [Export Orders](https://docs.medusajs.com/api/admin#orders_postordersexport) API route.
     *
     * You'll receive in the response the transaction ID of the workflow generating the CSV file.
     * To check the status of the execution, send a `GET` request to
     * `/admin/workflows-executions/export-orders/:transaction-id`.
     *
     * Once the execution finishes successfully, a notification is created for the export.
     * You can retrieve the notifications using the `/admin/notification` API route to
     * retrieve the file's download URL.
     *
     * @since 2.12.3
     *
     * @param query - Filters to specify which orders to export.
     * @param headers - Headers to pass in the request.
     * @returns The export's details.
     *
     * @example
     * sdk.admin.order.export()
     * .then(({ transaction_id }) => {
     *   console.log(transaction_id)
     * })
     */ export(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/orders/export`, {
                method: "POST",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=order.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/order-edit.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderEdit",
    ()=>OrderEdit
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class OrderEdit {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates an order edit request. It sends a HTTP request to the
     * [Create Order Edit](https://docs.medusajs.com/api/admin#order-edits_postorderedits)
     * API route.
     *
     * @param body - The order edit's details.
     * @param query - Configure the fields to retrieve in the order edit.
     * @param headers - Headers to pass in the request.
     * @returns The order edit's details.
     *
     * @example
     * sdk.admin.orderEdit.initiateRequest({
     *   order_id: "order_123"
     * })
     * .then(({ order_change }) => {
     *   console.log(order_change)
     * })
     */ initiateRequest(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method changes an order edit to requested. It sends a request to the
     * [Request Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidrequest)
     * API route.
     *
     * @param id - The ID of the order that is being edited.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.request("order_123")
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */ request(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits/${id}/request`, {
                method: "POST",
                headers,
                query
            });
        });
    }
    /**
     * This method confirms an order edit and applies it on the order. It sends a request
     * to the [Confirm Order Edit](https://docs.medusajs.com/api/admin#order-edits_postordereditsidconfirm)
     * API route.
     *
     * @param id - The ID of the order that is being edited.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.confirm("order_123")
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */ confirm(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits/${id}/confirm`, {
                method: "POST",
                headers,
                query
            });
        });
    }
    /**
     * This method cancels a requested order edit. It sends a request to the
     * [Cancel Order Edit](https://docs.medusajs.com/api/admin#order-edits_deleteordereditsid)
     * API route.
     *
     * @param id - The ID of the order that is being edited.
     * @param query - Query parameters
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.orderEdit.cancelRequest("order_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ cancelRequest(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits/${id}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds items to an order edit. These items will have the action `ITEM_ADD`.
     *
     * The method sends a request to the [Add Items](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditems)
     * API route.
     *
     * @param id - The ID of the order that is being edited.
     * @param body - The items to add.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.addItems("order_123", {
     *   items: [
     *     {
     *       variant_id: "variant_123",
     *       quantity: 1
     *     }
     *   ]
     * })
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */ addItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits/${id}/items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates the quantity and other details of an item in an order. It sends a request to the
     * [Update Item Quantity](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsitemitem_id)
     * API route.
     *
     * You can also use this method to remove an item from an order by setting the `quantity` to `0`.
     *
     * @param id - The ID of the order that is being edited.
     * @param itemId - The item's ID in the order.
     * @param body - The data to edit in the item.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.updateOriginalItem(
     *   "order_123",
     *   "orli_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */ updateOriginalItem(id, itemId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits/${id}/items/item/${itemId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * It sends a request
     * to the [Update Item](https://docs.medusajs.com/api/admin#order-edits_postordereditsiditemsaction_id)
     * API route.
     *
     * @param id - The ID of the order that is being edited.
     * @param actionId - The id of the new item's `ITEM_ADD` action.
     * @param body - The data to update.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.updateAddedItem(
     *   "order_123",
     *   "orli_123",
     *   {
     *     quantity: 1
     *   }
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */ updateAddedItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes an added item in the order edit by the ID of the item's `ITEM_ADD` action.
     *
     * Every item has an `actions` property, whose value is an array of actions.
     * You can check the action's name using its `action` property, and use the value of the `id` property.
     *
     * @param id - The ID of the order that is being edited.
     * @param actionId - The id of the new item's `ITEM_ADD` action.
     * @param query - Configure the fields to retrieve in the order preview.
     * @param headers - Headers to pass in the request.
     * @returns The order preview's details.
     *
     * @example
     * sdk.admin.orderEdit.removeAddedItem(
     *   "order_123",
     *   "orli_123",
     * )
     * .then(({ order_preview }) => {
     *   console.log(order_preview)
     * })
     */ removeAddedItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/order-edits/${id}/items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=order-edit.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/payment.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Payment",
    ()=>Payment
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Payment {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of payments. It sends a request to the
     * [List Payments](https://docs.medusajs.com/api/admin#payments_getpayments) API route.
     *
     * @param query  - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of payments.
     *
     * @example
     * To retrieve the list of payments:
     *
     * ```ts
     * sdk.admin.payment.list()
     * .then(({ payments, count, limit, offset }) => {
     *   console.log(payments)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.payment.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ payments, count, limit, offset }) => {
     *   console.log(payments)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each payment:
     *
     * ```ts
     * sdk.admin.payment.list({
     *   fields: "id,*payment_collection"
     * })
     * .then(({ payments, count, limit, offset }) => {
     *   console.log(payments)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payments`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a paginated list of payment providers. It sends a request to the
     * [List Payment Providers](https://docs.medusajs.com/api/admin#payments_getpaymentspaymentproviders) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of payment providers.
     *
     * @example
     * To retrieve the list of payment providers:
     *
     * ```ts
     * sdk.admin.payment.listPaymentProviders()
     * .then(({ payment_providers, count, limit, offset }) => {
     *   console.log(payment_providers)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.payment.listPaymentProviders({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ payment_providers, count, limit, offset }) => {
     *   console.log(payment_providers)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each payment provider:
     *
     * ```ts
     * sdk.admin.payment.listPaymentProviders({
     *   fields: "id,is_enabled"
     * })
     * .then(({ payment_providers, count, limit, offset }) => {
     *   console.log(payment_providers)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ listPaymentProviders(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payments/payment-providers`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a payment's details. It sends a request to the
     * [Get Payment](https://docs.medusajs.com/api/admin#payments_getpaymentsid)
     * API route.
     *
     * @param id - The payment's ID.
     * @param query - Configure the fields to retrieve in the payment.
     * @param headers - Headers to pass in the request
     * @returns The payment's details.
     *
     * @example
     * To retrieve a payment by its ID:
     *
     * ```ts
     * sdk.admin.payment.retrieve("pay_123")
     * .then(({ payment }) => {
     *   console.log(payment)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.payment.retrieve("pay_123", {
     *   fields: "id,*payment_collection"
     * })
     * .then(({ payment }) => {
     *   console.log(payment)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payments/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method captures a payment. It sends a request to the
     * [Capture Payment](https://docs.medusajs.com/api/admin#payments_postpaymentsidcapture) API route.
     *
     * The API route uses the `capturePayment` method of the payment provider associated with the payment's collection.
     *
     * @param id - The payment's ID.
     * @param body - The capture's details.
     * @param query - Configure the fields to retrieve in the payment.
     * @param headers - Headers to pass in the request
     * @returns The payment's details.
     *
     * @example
     * sdk.admin.payment.capture("paycol_123", {})
     * .then(({ payment }) => {
     *   console.log(payment)
     * })
     */ capture(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payments/${id}/capture`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method refunds a payment. It sends a request to the
     * [Refund Payment](https://docs.medusajs.com/api/admin#payments_postpaymentsidrefund) API route.
     *
     * The API route uses the `refundPayment` method of the payment provider associated with the payment's collection.
     *
     * @param id - The payment's ID.
     * @param body - The refund's details.
     * @param query - Configure the fields to retrieve in the payment.
     * @param headers - Headers to pass in the request
     * @returns The payment's details.
     *
     * @example
     * sdk.admin.payment.refund("paycol_123", {})
     * .then(({ payment }) => {
     *   console.log(payment)
     * })
     */ refund(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payments/${id}/refund`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
} //# sourceMappingURL=payment.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/payment-collection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaymentCollection",
    ()=>PaymentCollection
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PaymentCollection {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a payment collection. It sends a request to the
     * [Create Payment Collection](https://docs.medusajs.com/api/admin#payment-collections_postpaymentcollections)
     * API route.
     *
     * @param body - The details of the payment collection to create.
     * @param query - Configure the fields to retrieve in the payment collection.
     * @param headers - Headers to pass in the request
     * @returns The payment collection's details.
     *
     * @example
     * sdk.admin.paymentCollection.create({
     *   order_id: "order_123"
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payment-collections`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a payment collection. It sends a request to the
     * [Delete Payment Collection](https://docs.medusajs.com/api/admin#payment-collections_deletepaymentcollectionsid)
     * API route.
     *
     * @param id - The payment collection's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.paymentCollection.delete("paycol_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payment-collections/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method marks a payment collection as paid. It sends a request to the
     * [Mark as Paid](https://docs.medusajs.com/api/admin#payment-collections_postpaymentcollectionsidmarkaspaid)
     * API route.
     *
     * The API route creates and authorizes a payment session, then capture its payment,
     * using the manual payment provider.
     *
     * @param id - The payment collection to mark as paid.
     * @param body - The details to mark the payment collection as paid.
     * @param query - Configure the fields to retrieve in the payment collection.
     * @param headers - Headers to pass in the request.
     * @returns The payment collection's details.
     *
     * @example
     * sdk.admin.paymentCollection.markAsPaid("paycol_123", {
     *   order_id: "order_123"
     * })
     * .then(({ payment_collection }) => {
     *   console.log(payment_collection)
     * })
     */ markAsPaid(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/payment-collections/${id}/mark-as-paid`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
} //# sourceMappingURL=payment-collection.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/plugin.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plugin",
    ()=>Plugin
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Plugin {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves the list of plugins installed in a Medusa application.
     *
     * @param headers - Headers to pass in the request.
     * @returns The list of plugins.
     *
     * @example
     * sdk.admin.plugin.list()
     * .then(({ plugins }) => {
     *   console.log(plugins)
     * })
     */ list(headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/plugins`, {
                headers,
                query: {}
            });
        });
    }
} //# sourceMappingURL=plugin.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/price-list.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PriceList",
    ()=>PriceList
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PriceList {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a price list. It sends a request to the
     * [Get Price List](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelistsid)
     * API route.
     *
     * @param id - The price list's ID.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * To retrieve a price list by its ID:
     *
     * ```ts
     * sdk.admin.priceList.retrieve("plist_123")
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.priceList.retrieve("plist_123", {
     *   fields: "id,*prices"
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of price lists. It sends a request to the
     * [List Price Lists](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelists) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of price lists.
     *
     * @example
     * To retrieve the list of price lists:
     *
     * ```ts
     * sdk.admin.priceList.list()
     * .then(({ price_lists, count, limit, offset }) => {
     *   console.log(price_lists)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.priceList.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ price_lists, count, limit, offset }) => {
     *   console.log(price_lists)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each price list:
     *
     * ```ts
     * sdk.admin.priceList.list({
     *   fields: "id,*prices"
     * })
     * .then(({ price_lists, count, limit, offset }) => {
     *   console.log(price_lists)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/v2/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method creates a price list. It sends a request to the
     * [Create Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelists)
     * API route.
     *
     * @param body - The details of the price list to create.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.create({
     *   title: "My Price List",
     *   status: "active",
     *   type: "sale",
     *   prices: [
     *     {
     *       variant_id: "variant_123",
     *       amount: 10,
     *       currency_code: "usd",
     *       rules: {
     *         region_id: "reg_123"
     *       }
     *     }
     *   ]
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a price list. It sends a request to the
     * [Update Price List](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsid)
     * API route.
     *
     * @param id - The price list's ID.
     * @param body - The data to update in the price list.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.update("plist_123", {
     *   title: "My Price List",
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a price list. It sends a request to the
     * [Delete Price List](https://docs.medusajs.com/v2/api/admin#price-lists_deletepricelistsid)
     * API route.
     *
     * @param id - The price list's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.priceList.delete("plist_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages the prices of a price list to create, update, or delete them.
     * It sends a request to the [Manage Prices](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidpricesbatch)
     * API route.
     *
     * @param id - The price list's ID.
     * @param body - The prices to create, update, or delete.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.batchPrices("plist_123", {
     *   create: [{
     *     variant_id: "variant_123",
     *     currency_code: "usd",
     *     amount: 10,
     *     rules: {
     *       region_id: "reg_123"
     *     }
     *   }],
     *   update: [{
     *     id: "price_123",
     *     variant_id: "variant_123",
     *     amount: 20,
     *   }],
     *   delete: ["price_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batchPrices(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists/${id}/prices/batch`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves the prices of a price list. It sends a request to the
     * [Get Prices](https://docs.medusajs.com/v2/api/admin#price-lists_getpricelistsidprices)
     * API route.
     *
     * @since 2.12.3
     *
     * @param id - The price list's ID.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's prices.
     *
     * @example
     * sdk.admin.priceList.prices("plist_123")
     * .then(({ prices }) => {
     *   console.log(prices)
     * })
     */ prices(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists/${id}/prices`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method removes products from a price list. It sends a request to the
     * [Remove Product](https://docs.medusajs.com/v2/api/admin#price-lists_postpricelistsidproducts)
     * API route.
     *
     * @param id - The price list's ID.
     * @param body - The details of the products to remove.
     * @param query - Configure the fields to retrieve in the price list.
     * @param headers - Headers to pass in the request
     * @returns The price list's details.
     *
     * @example
     * sdk.admin.priceList.linkProducts("plist_123", {
     *   remove: ["prod_123"]
     * })
     * .then(({ price_list }) => {
     *   console.log(price_list)
     * })
     */ linkProducts(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-lists/${id}/products`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
} //# sourceMappingURL=price-list.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/price-preference.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricePreference",
    ()=>PricePreference
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PricePreference {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a price preference. It sends a request to the
     * [Get Price Preference](https://docs.medusajs.com/api/admin#price-preferences_getpricepreferencesid)
     * API route.
     *
     * @param id - The price preference's ID.
     * @param query - Configure the fields to retrieve in the price preference.
     * @param headers - Headers to pass in the request
     * @returns The price preference's details.
     *
     * @example
     * To retrieve a price preference by its ID:
     *
     * ```ts
     * sdk.admin.pricePreference.retrieve("prpref_123")
     * .then(({ price_preference }) => {
     *   console.log(price_preference)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.pricePreference.retrieve("prpref_123", {
     *   fields: "id,is_tax_inclusive"
     * })
     * .then(({ price_preference }) => {
     *   console.log(price_preference)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-preferences/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of price preferences. It sends a request to the
     * [List Price Preferences](https://docs.medusajs.com/api/admin#price-preferences_getpricepreferences) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of price preferences.
     *
     * @example
     * To retrieve the list of price preferences:
     *
     * ```ts
     * sdk.admin.pricePreference.list()
     * .then(({ price_preferences, count, limit, offset }) => {
     *   console.log(price_preferences)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.pricePreference.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ price_preferences, count, limit, offset }) => {
     *   console.log(price_preferences)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each price preference:
     *
     * ```ts
     * sdk.admin.pricePreference.list({
     *   fields: "id,is_tax_inclusive"
     * })
     * .then(({ price_preferences, count, limit, offset }) => {
     *   console.log(price_preferences)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-preferences`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method creates a price preference. It sends a request to the
     * [Create Price Preference](https://docs.medusajs.com/api/admin#price-preferences_postpricepreferences)
     * API route.
     *
     * @param body - The details of the price preference to create.
     * @param query - Configure the fields to retrieve in the price preference.
     * @param headers - Headers to pass in the request
     * @returns The price preference's details.
     *
     * @example
     * sdk.admin.pricePreference.create({
     *   attribute: "region_id",
     *   value: "region_123",
     *   is_tax_inclusive: true
     * })
     * .then(({ price_preference }) => {
     *   console.log(price_preference)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-preferences`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a price preference. It sends a request to the
     * [Update Price Preference](https://docs.medusajs.com/api/admin#price-preferences_postpricepreferencesid)
     * API route.
     *
     * @param id - The price preference's ID.
     * @param body - The data to update in the price preference.
     * @param query - Configure the fields to retrieve in the price preference.
     * @param headers - Headers to pass in the request
     * @returns The price preference's details.
     *
     * @example
     * sdk.admin.pricePreference.update("prpref_123", {
     *   is_tax_inclusive: true
     * })
     * .then(({ price_preference }) => {
     *   console.log(price_preference)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-preferences/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a price preference. It sends a request to the
     * [Delete Price Preference](https://docs.medusajs.com/api/admin#price-preferences_deletepricepreferencesid)
     * API route.
     *
     * @param id - The price preference's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.pricePreference.delete("prpref_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/price-preferences/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
} //# sourceMappingURL=price-preference.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/fetch-event-stream/esm/deps/jsr.io/@std/streams/0.221.0/text_line_stream.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
/**
 * Transform a stream into a stream where each chunk is divided by a newline,
 * be it `\n` or `\r\n`. `\r` can be enabled via the `allowCR` option.
 *
 * @example
 * ```ts
 * import { TextLineStream } from "@std/streams/text-line-stream";
 *
 * const res = await fetch("https://example.com");
 * const lines = res.body!
 *   .pipeThrough(new TextDecoderStream())
 *   .pipeThrough(new TextLineStream());
 * ```
 */ __turbopack_context__.s([
    "TextLineStream",
    ()=>TextLineStream
]);
class TextLineStream extends TransformStream {
    #currentLine = "";
    /** Constructs a new instance. */ constructor(options = {
        allowCR: false
    }){
        super({
            transform: (chars, controller)=>{
                chars = this.#currentLine + chars;
                while(true){
                    const lfIndex = chars.indexOf("\n");
                    const crIndex = options.allowCR ? chars.indexOf("\r") : -1;
                    if (crIndex !== -1 && crIndex !== chars.length - 1 && (lfIndex === -1 || lfIndex - 1 > crIndex)) {
                        controller.enqueue(chars.slice(0, crIndex));
                        chars = chars.slice(crIndex + 1);
                        continue;
                    }
                    if (lfIndex === -1) break;
                    const endIndex = chars[lfIndex - 1] === "\r" ? lfIndex - 1 : lfIndex;
                    controller.enqueue(chars.slice(0, endIndex));
                    chars = chars.slice(lfIndex + 1);
                }
                this.#currentLine = chars;
            },
            flush: (controller)=>{
                if (this.#currentLine === "") return;
                const currentLine = options.allowCR && this.#currentLine.endsWith("\r") ? this.#currentLine.slice(0, -1) : this.#currentLine;
                controller.enqueue(currentLine);
            }
        });
    }
}
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/fetch-event-stream/esm/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fallback",
    ()=>fallback,
    "split",
    ()=>split,
    "stream",
    ()=>stream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$deps$2f$jsr$2e$io$2f40$std$2f$streams$2f$0$2e$221$2e$0$2f$text_line_stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/fetch-event-stream/esm/deps/jsr.io/@std/streams/0.221.0/text_line_stream.js [app-rsc] (ecmascript)");
;
function stream(input) {
    let decoder = new TextDecoderStream();
    let split = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$deps$2f$jsr$2e$io$2f40$std$2f$streams$2f$0$2e$221$2e$0$2f$text_line_stream$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextLineStream"]({
        allowCR: true
    });
    return input.pipeThrough(decoder).pipeThrough(split);
}
function split(input) {
    let rgx = /[:]\s*/;
    let match = rgx.exec(input);
    // ": comment" -> index=0 -> ignore
    let idx = match && match.index;
    if (idx) {
        return [
            input.substring(0, idx),
            input.substring(idx + match[0].length)
        ];
    }
}
function fallback(headers, key, value) {
    let tmp = headers.get(key);
    if (!tmp) headers.set(key, value);
}
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/fetch-event-stream/esm/mod.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "events",
    ()=>events,
    "stream",
    ()=>stream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/fetch-event-stream/esm/utils.js [app-rsc] (ecmascript)");
;
async function* events(res, signal) {
    // TODO: throw error?
    if (!res.body) return;
    let iter = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stream"](res.body);
    let line, reader = iter.getReader();
    let event;
    for(;;){
        if (signal && signal.aborted) {
            return reader.cancel();
        }
        line = await reader.read();
        if (line.done) return;
        if (!line.value) {
            if (event) yield event;
            event = undefined;
            continue;
        }
        let [field, value] = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["split"](line.value) || [];
        if (field === 'data') {
            event ||= {};
            event[field] = event[field] ? event[field] + '\n' + value : value;
        } else if (field === 'event') {
            event ||= {};
            event[field] = value;
        } else if (field === 'id') {
            event ||= {};
            event[field] = String(+value) === value ? +value : value;
        } else if (field === 'retry') {
            event ||= {};
            event[field] = +value || undefined;
        }
    }
}
async function stream(input, init) {
    let req = new Request(input, init);
    __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallback"](req.headers, 'Accept', 'text/event-stream');
    __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fallback"](req.headers, 'Content-Type', 'application/json');
    let r = await fetch(req);
    if (!r.ok) throw r;
    return events(r, req.signal);
}
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/type.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/object-inspect/util.inspect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inspect;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/object-inspect/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/object-inspect/util.inspect.js [app-rsc] (ecmascript)");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }
    if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }
    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++){
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) {
            s += '...';
        }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) {
            return '[]';
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) {
            return '[' + String(obj) + ']';
        }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, {
                depth: maxDepth - depth
            });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function(value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (typeof globalThis !== 'undefined' && obj === globalThis || ("TURBOPACK compile-time value", "object") !== 'undefined' && obj === /*TURBOPACK member replacement*/ __turbopack_context__.g) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) {
            return tag + '{}';
        }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
    return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
    return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') {
        return false;
    }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) {
        return '\\' + x;
    }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) {
        return '';
    }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++){
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++){
            symMap['$' + syms[k]] = syms[k];
        }
    }
    for(var key in obj){
        if (!has(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++){
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel-list/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var inspect = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('./list.d.ts').listGetNode} */ // eslint-disable-next-line consistent-return
var listGetNode = function(list, key, isDelete) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    // eslint-disable-next-line eqeqeq
    for(; (curr = prev.next) != null; prev = curr){
        if (curr.key === key) {
            prev.next = curr.next;
            if (!isDelete) {
                // eslint-disable-next-line no-extra-parens
                curr.next = list.next;
                list.next = curr; // eslint-disable-line no-param-reassign
            }
            return curr;
        }
    }
};
/** @type {import('./list.d.ts').listGet} */ var listGet = function(objects, key) {
    if (!objects) {
        return void undefined;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
        node.value = value;
    } else {
        // Prepend the new node to the beginning of the list
        objects.next = {
            key: key,
            next: objects.next,
            value: value
        };
    }
};
/** @type {import('./list.d.ts').listHas} */ var listHas = function(objects, key) {
    if (!objects) {
        return false;
    }
    return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */ // eslint-disable-next-line consistent-return
var listDelete = function(objects, key) {
    if (objects) {
        return listGetNode(objects, key, true);
    }
};
/** @type {import('.')} */ module.exports = function getSideChannelList() {
    /** @typedef {ReturnType<typeof getSideChannelList>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) {
                $o = void undefined;
            }
            return !!deletedNode;
        },
        get: function(key) {
            return listGet($o, key);
        },
        has: function(key) {
            return listHas($o, key);
        },
        set: function(key, value) {
            if (!$o) {
                // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
                $o = {
                    next: void undefined
                };
            }
            // eslint-disable-next-line no-extra-parens
            listSet($o, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/eval.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/range.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/ref.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/uri.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/gopd/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-define-property/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/has-symbols/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/function-bind/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/hasown/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/index.js [app-rsc] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/eval.js [app-rsc] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/range.js [app-rsc] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/ref.js [app-rsc] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/uri.js [app-rsc] (ecmascript)");
var abs = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)");
var floor = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)");
var max = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)");
var min = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)");
var pow = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)");
var round = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)");
var sign = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-define-property/index.js [app-rsc] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/has-symbols/index.js [app-rsc] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/index.js [app-rsc] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bound/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var callBindBasic = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
        return callBindBasic([
            intrinsic
        ]);
    }
    return intrinsic;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel-map/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bound/index.js [app-rsc] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $Map = GetIntrinsic('%Map%', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */ var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */ var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */ var $mapSize = callBound('Map.prototype.size', true);
/** @type {import('.')} */ module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
    /** @typedef {ReturnType<typeof getSideChannelMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {Map<K, V> | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($m) {
                var result = $mapDelete($m, key);
                if ($mapSize($m) === 0) {
                    $m = void undefined;
                }
                return result;
            }
            return false;
        },
        get: function(key) {
            if ($m) {
                return $mapGet($m, key);
            }
        },
        has: function(key) {
            if ($m) {
                return $mapHas($m, key);
            }
            return false;
        },
        set: function(key, value) {
            if (!$m) {
                // @ts-expect-error TS can't handle narrowing a variable inside a closure
                $m = new $Map();
            }
            $mapSet($m, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why TS is erroring here
    return channel;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel-weakmap/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var callBound = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/call-bound/index.js [app-rsc] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel-map/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */ var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */ var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
/** @type {import('.')} */ module.exports = $WeakMap ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
    /** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {WeakMap<K & object, V> | undefined} */ var $wm;
    /** @type {Channel | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapDelete($wm, key);
                }
            } else if (getSideChannelMap) {
                if ($m) {
                    return $m['delete'](key);
                }
            }
            return false;
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapGet($wm, key);
                }
            }
            return $m && $m.get(key);
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) {
                    return $weakMapHas($wm, key);
                }
            }
            return !!$m && $m.has(key);
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) {
                    $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
                if (!$m) {
                    $m = getSideChannelMap();
                }
                // eslint-disable-next-line no-extra-parens
                /** @type {NonNullable<typeof $m>} */ $m.set(key, value);
            }
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
} : getSideChannelMap;
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $TypeError = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var inspect = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/object-inspect/index.js [app-rsc] (ecmascript)");
var getSideChannelList = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel-list/index.js [app-rsc] (ecmascript)");
var getSideChannelMap = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel-map/index.js [app-rsc] (ecmascript)");
var getSideChannelWeakMap = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel-weakmap/index.js [app-rsc] (ecmascript)");
var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @typedef {ReturnType<typeof getSideChannel>} Channel */ /** @type {Channel | undefined} */ var $channelData;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError('Side channel does not contain ' + inspect(key));
            }
        },
        'delete': function(key) {
            return !!$channelData && $channelData['delete'](key);
        },
        get: function(key) {
            return $channelData && $channelData.get(key);
        },
        has: function(key) {
            return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
            if (!$channelData) {
                $channelData = makeChannel();
            }
            $channelData.set(key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};
module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var formats = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)");
var getSideChannel = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel/index.js [app-rsc] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
// Track objects created from arrayLimit overflow using side-channel
// Stores the current max numeric index for O(1) lookup
var overflowChannel = getSideChannel();
var markOverflow = function markOverflow(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
    return obj;
};
var isOverflow = function isOverflow(obj) {
    return overflowChannel.has(obj);
};
var getMaxIndex = function getMaxIndex(obj) {
    return overflowChannel.get(obj);
};
var setMaxIndex = function setMaxIndex(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
};
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i){
        array[array.length] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
    }
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j){
                if (typeof obj[j] !== 'undefined') {
                    compacted[compacted.length] = obj[j];
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? {
        __proto__: null
    } : {};
    for(var i = 0; i < source.length; ++i){
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) {
        return target;
    }
    if (typeof source !== 'object' && typeof source !== 'function') {
        if (isArray(target)) {
            var nextIndex = target.length;
            if (options && typeof options.arrayLimit === 'number' && nextIndex > options.arrayLimit) {
                return markOverflow(arrayToObject(target.concat(source), options), nextIndex);
            }
            target[nextIndex] = source;
        } else if (target && typeof target === 'object') {
            if (isOverflow(target)) {
                // Add at next numeric index for overflow objects
                var newIndex = getMaxIndex(target) + 1;
                target[newIndex] = source;
                setMaxIndex(target, newIndex);
            } else if (options && options.strictMerge) {
                return [
                    target,
                    source
                ];
            } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [
                target,
                source
            ];
        }
        return target;
    }
    if (!target || typeof target !== 'object') {
        if (isOverflow(source)) {
            // Create new object with target at 0, source values shifted by 1
            var sourceKeys = Object.keys(source);
            var result = options && options.plainObjects ? {
                __proto__: null,
                0: target
            } : {
                0: target
            };
            for(var m = 0; m < sourceKeys.length; m++){
                var oldKey = parseInt(sourceKeys[m], 10);
                result[oldKey + 1] = source[sourceKeys[m]];
            }
            return markOverflow(result, getMaxIndex(source) + 1);
        }
        var combined = [
            target
        ].concat(source);
        if (options && typeof options.arrayLimit === 'number' && combined.length > options.arrayLimit) {
            return markOverflow(arrayToObject(combined, options), combined.length - 1);
        }
        return combined;
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target[target.length] = item;
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        if (isOverflow(source) && !isOverflow(acc)) {
            markOverflow(acc, getMaxIndex(source));
        }
        if (isOverflow(acc)) {
            var keyNum = parseInt(key, 10);
            if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
                setMaxIndex(acc, keyNum);
            }
        }
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var limit = 1024;
/* eslint operator-linebreak: [2, "before"] */ var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }
    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }
    var out = '';
    for(var j = 0; j < string.length; j += limit){
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for(var i = 0; i < segment.length; ++i){
            var c = segment.charCodeAt(i);
            if (c === 0x2D // -
             || c === 0x2E // .
             || c === 0x5F // _
             || c === 0x7E // ~
             || c >= 0x30 && c <= 0x39 || c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
            ) {
                arr[arr.length] = segment.charAt(i);
                continue;
            }
            if (c < 0x80) {
                arr[arr.length] = hexTable[c];
                continue;
            }
            if (c < 0x800) {
                arr[arr.length] = hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                arr[arr.length] = hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
                continue;
            }
            i += 1;
            c = 0x10000 + ((c & 0x3FF) << 10 | segment.charCodeAt(i) & 0x3FF);
            arr[arr.length] = hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
        }
        out += arr.join('');
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: 'o'
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue[queue.length] = {
                    obj: obj,
                    prop: key
                };
                refs[refs.length] = val;
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b, arrayLimit, plainObjects) {
    // If 'a' is already an overflow object, add to it
    if (isOverflow(a)) {
        var newIndex = getMaxIndex(a) + 1;
        a[newIndex] = b;
        setMaxIndex(a, newIndex);
        return a;
    }
    var result = [].concat(a, b);
    if (result.length > arrayLimit) {
        return markOverflow(arrayToObject(result, {
            plainObjects: plainObjects
        }), result.length - 1);
    }
    return result;
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1){
            mapped[mapped.length] = fn(val[i]);
        }
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isOverflow: isOverflow,
    isRegExp: isRegExp,
    markOverflow: markOverflow,
    maybeMap: maybeMap,
    merge: merge
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var getSideChannel = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/side-channel/index.js [app-rsc] (ecmascript)");
var utils = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/utils.js [app-rsc] (ecmascript)");
var formats = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: 'indices',
    charset: 'utf-8',
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: '&',
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    filter: void undefined,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || typeof v === 'symbol' || typeof v === 'bigint';
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }
    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }
        obj = '';
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [
                formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))
            ];
        }
        return [
            formatter(prefix) + '=' + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === 'undefined') {
        return values;
    }
    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(',') || null : void undefined
            }
        ];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + '[]' : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + '[]';
    }
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === 'object' && key && typeof key.value !== 'undefined' ? key.value : obj[key];
        if (skipNulls && value === null) {
            continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, '%2E') : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? '.' + encodedKey : '[' + encodedKey + ']');
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === 'comma' && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
        throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if ('indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = defaults.arrayFormat;
    }
    if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat: arrayFormat,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== 'object' || obj === null) {
        return '';
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    if (options.sort) {
        objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
            continue;
        }
        pushToArray(keys, stringify(value, key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';
    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }
    return joined.length > 0 ? prefix + joined : '';
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var utils = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/utils.js [app-rsc] (ecmascript)");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    duplicates: 'combine',
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictMerge: true,
    strictNullHandling: false,
    throwOnLimitExceeded: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
    }
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    cleanStr = cleanStr.replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    var limit = options.parameterLimit === Infinity ? void undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, options.throwOnLimitExceeded ? limit + 1 : limit);
    if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError('Parameter limit exceeded. Only ' + limit + ' parameter' + (limit === 1 ? '' : 's') + ' allowed.');
    }
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i){
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            if (key !== null) {
                val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options, isArray(obj[key]) ? obj[key].length : 0), function(encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                });
            }
        }
        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(String(val));
        }
        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [
                val
            ] : val;
        }
        if (options.comma && isArray(val) && val.length > options.arrayLimit) {
            if (options.throwOnLimitExceeded) {
                throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
            }
            val = utils.combine([], val, options.arrayLimit, options.plainObjects);
        }
        if (key !== null) {
            var existing = has.call(obj, key);
            if (existing && (options.duplicates === 'combine' || part.indexOf('[]=') > -1)) {
                obj[key] = utils.combine(obj[key], val, options.arrayLimit, options.plainObjects);
            } else if (!existing || options.duplicates === 'last') {
                obj[key] = val;
            }
        }
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === '[]') {
        var parentKey = chain.slice(0, -1).join('');
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === '[]' && options.parseArrays) {
            if (utils.isOverflow(leaf)) {
                // leaf is already an overflow object, preserve it
                obj = leaf;
            } else {
                obj = options.allowEmptyArrays && (leaf === '' || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf, options.arrayLimit, options.plainObjects);
            }
        } else {
            obj = options.plainObjects ? {
                __proto__: null
            } : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, '.') : cleanRoot;
            var index = parseInt(decodedRoot, 10);
            var isValidArrayIndex = !isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
            if (!options.parseArrays && decodedRoot === '') {
                obj = {
                    0: leaf
                };
            } else if (isValidArrayIndex && index < options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
                throw new RangeError('Array limit exceeded. Only ' + options.arrayLimit + ' element' + (options.arrayLimit === 1 ? '' : 's') + ' allowed in an array.');
            } else if (isValidArrayIndex) {
                obj[index] = leaf;
                utils.markOverflow(obj, index);
            } else if (decodedRoot !== '__proto__') {
                obj[decodedRoot] = leaf;
            }
        }
        leaf = obj;
    }
    return leaf;
};
var splitKeyIntoSegments = function splitKeyIntoSegments(givenKey, options) {
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;
    if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        return [
            key
        ];
    }
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys[keys.length] = parent;
    }
    var i = 0;
    while((segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        var segmentContent = segment[1].slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys[keys.length] = segment[1];
    }
    if (segment) {
        if (options.strictDepth === true) {
            throw new RangeError('Input depth exceeded depth option of ' + options.depth + ' and strictDepth is true');
        }
        keys[keys.length] = '[' + key.slice(segment.index) + ']';
    }
    return keys;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }
    var keys = splitKeyIntoSegments(givenKey, options);
    if (!keys) {
        return;
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
        throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
    }
    if (typeof opts.decodeDotInKeys !== 'undefined' && typeof opts.decodeDotInKeys !== 'boolean') {
        throw new TypeError('`decodeDotInKeys` option can only be `true` or `false`, when provided');
    }
    if (opts.decoder !== null && typeof opts.decoder !== 'undefined' && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    if (typeof opts.throwOnLimitExceeded !== 'undefined' && typeof opts.throwOnLimitExceeded !== 'boolean') {
        throw new TypeError('`throwOnLimitExceeded` option must be a boolean');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === 'undefined' ? defaults.duplicates : opts.duplicates;
    if (duplicates !== 'combine' && duplicates !== 'first' && duplicates !== 'last') {
        throw new TypeError('The duplicates option must be either combine, first, or last');
    }
    var allowDots = typeof opts.allowDots === 'undefined' ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
        allowDots: allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === 'boolean' ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === 'number' || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates: duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === 'boolean' ? !!opts.strictDepth : defaults.strictDepth,
        strictMerge: typeof opts.strictMerge === 'boolean' ? !!opts.strictMerge : defaults.strictMerge,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === 'boolean' ? opts.throwOnLimitExceeded : false
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? {
            __proto__: null
        } : {};
    }
    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? {
        __proto__: null
    } : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
        return obj;
    }
    return utils.compact(obj);
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var stringify = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/stringify.js [app-rsc] (ecmascript)");
var parse = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/parse.js [app-rsc] (ecmascript)");
var formats = __turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/formats.js [app-rsc] (ecmascript)");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/client.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Client",
    ()=>Client,
    "FetchError",
    ()=>FetchError,
    "LOCALE_STORAGE_KEY",
    ()=>LOCALE_STORAGE_KEY,
    "PUBLISHABLE_KEY_HEADER",
    ()=>PUBLISHABLE_KEY_HEADER
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$mod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/fetch-event-stream/esm/mod.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/qs/lib/index.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
const PUBLISHABLE_KEY_HEADER = "x-publishable-api-key";
const LOCALE_STORAGE_KEY = "medusa_locale";
// We want to explicitly retrieve the base URL instead of relying on relative paths that differ in behavior between browsers.
const getBaseUrl = (passedBaseUrl)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return passedBaseUrl;
    }
    //TURBOPACK unreachable
    ;
};
const hasStorage = (storage)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return false;
};
const toBase64 = (str)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return Buffer.from(str).toString("base64");
};
const sanitizeHeaders = (headers)=>{
    return Object.assign(Object.assign({}, Object.fromEntries(headers.entries())), {
        authorization: "<REDACTED>"
    });
};
const normalizeRequest = (init, headers, config)=>{
    var _a, _b, _c;
    let body = init === null || init === void 0 ? void 0 : init.body;
    if (body && ((_a = headers.get("content-type")) === null || _a === void 0 ? void 0 : _a.includes("application/json"))) {
        body = JSON.stringify(body);
    }
    // "credentials" is not supported in some environments (eg. on the backend), and it might throw an exception if the field is set.
    const isFetchCredentialsSupported = "credentials" in Request.prototype;
    // Oftentimes the server will be on a different origin, so we want to default to include
    // Note that the cookie's SameSite attribute takes precedence over this setting.
    const credentials = ((_b = config.auth) === null || _b === void 0 ? void 0 : _b.type) === "session" ? ((_c = config.auth) === null || _c === void 0 ? void 0 : _c.fetchCredentials) || "include" : "omit";
    return Object.assign(Object.assign(Object.assign({}, init), {
        headers,
        credentials: isFetchCredentialsSupported ? credentials : undefined
    }), body ? {
        body: body
    } : {});
};
const normalizeResponse = (resp, reqHeaders)=>__awaiter(void 0, void 0, void 0, function*() {
        var _a, _b;
        if (resp.status >= 300) {
            const jsonError = yield resp.json().catch(()=>({}));
            throw new FetchError((_a = jsonError.message) !== null && _a !== void 0 ? _a : resp.statusText, resp.statusText, resp.status);
        }
        // If we requested JSON, we try to parse the response. Otherwise, we return the raw response.
        const isJsonRequest = (_b = reqHeaders.get("accept")) === null || _b === void 0 ? void 0 : _b.includes("application/json");
        return isJsonRequest ? yield resp.json() : resp;
    });
class FetchError extends Error {
    constructor(message, statusText, status){
        super(message);
        this.statusText = statusText;
        this.status = status;
    }
}
class Client {
    get locale() {
        if (hasStorage("localStorage")) {
            const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
            if (storedLocale) {
                return storedLocale;
            }
        }
        return this.locale_;
    }
    constructor(config){
        this.DEFAULT_JWT_STORAGE_KEY = "medusa_auth_token";
        this.token = "";
        this.locale_ = "";
        this.getApiKeyHeader_ = ()=>{
            return this.config.apiKey ? {
                Authorization: "Basic " + toBase64(this.config.apiKey + ":")
            } : {};
        };
        this.getPublishableKeyHeader_ = ()=>{
            return this.config.publishableKey ? {
                [PUBLISHABLE_KEY_HEADER]: this.config.publishableKey
            } : {};
        };
        this.getTokenStorageInfo_ = ()=>{
            var _a, _b, _c;
            const hasLocal = hasStorage("localStorage");
            const hasSession = hasStorage("sessionStorage");
            const hasCustom = Boolean((_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage);
            const storageMethod = ((_b = this.config.auth) === null || _b === void 0 ? void 0 : _b.jwtTokenStorageMethod) || (hasLocal ? "local" : "nostore");
            const storageKey = ((_c = this.config.auth) === null || _c === void 0 ? void 0 : _c.jwtTokenStorageKey) || this.DEFAULT_JWT_STORAGE_KEY;
            if (!hasLocal && storageMethod === "local") {
                this.throwError_("Local JWT storage is only available in the browser");
            }
            if (!hasSession && storageMethod === "session") {
                this.throwError_("Session JWT storage is only available in the browser");
            }
            if (!hasCustom && storageMethod === "custom") {
                this.throwError_("Custom storage was not provided in the config");
            }
            return {
                storageMethod,
                storageKey
            };
        };
        this.config = Object.assign(Object.assign({}, config), {
            baseUrl: getBaseUrl(config.baseUrl)
        });
        const logger = config.logger || {
            error: console.error,
            warn: console.warn,
            info: console.info,
            debug: console.debug
        };
        this.logger = Object.assign(Object.assign({}, logger), {
            debug: config.debug ? logger.debug : ()=>{}
        });
        if (hasStorage("localStorage")) {
            this.locale_ = window.localStorage.getItem(LOCALE_STORAGE_KEY) || "";
        }
        this.fetch_ = this.initClient();
    }
    setLocale(locale) {
        if (!window) {
            this.logger.warn("setLocale is not available in the server environment. Please set the locale directly through the 'x-medusa-locale' header.");
            return;
        }
        if (hasStorage("localStorage")) {
            window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
        }
        this.locale_ = locale;
    }
    /**
     * `fetch` closely follows (and uses under the hood) the native `fetch` API. There are, however, few key differences:
     * - Non 2xx statuses throw a `FetchError` with the status code as the `status` property, rather than resolving the promise
     * - You can pass `body` and `query` as objects, and they will be encoded and stringified.
     * - The response gets parsed as JSON if the `accept` header is set to `application/json`, otherwise the raw Response object is returned
     *
     * Since the response is dynamically determined, we cannot know if it is JSON or not. Therefore, it is important to pass `Response` as the return type
     *
     * @param input: FetchInput
     * @param init: FetchArgs
     * @returns Promise<T>
     */ fetch(input, init) {
        return this.fetch_(input, init);
    }
    /**
     * `fetchStream` is a helper method to deal with server-sent events. It returns an object with a stream and an abort function.
     * It follows a very similar interface to `fetch`, with the return value being an async generator.
     * The stream is an async generator that yields `ServerSentEventMessage` objects, which contains the event name, stringified data, and few other properties.
     * The caller is responsible for handling `disconnect` events and aborting the stream. The caller is also responsible for parsing the data field.
     *
     * @param input: FetchInput
     * @param init: FetchArgs
     * @returns FetchStreamResponse
     */ fetchStream(input, init) {
        return __awaiter(this, void 0, void 0, function*() {
            const abortController = new AbortController();
            const abortFunc = abortController.abort.bind(abortController);
            let res = yield this.fetch_(input, Object.assign(Object.assign({}, init), {
                signal: abortController.signal,
                headers: Object.assign(Object.assign({}, init === null || init === void 0 ? void 0 : init.headers), {
                    accept: "text/event-stream"
                })
            }));
            if (res.ok) {
                return {
                    stream: (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$fetch$2d$event$2d$stream$2f$esm$2f$mod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["events"])(res, abortController.signal),
                    abort: abortFunc
                };
            }
            return {
                stream: null,
                abort: abortFunc
            };
        });
    }
    setToken(token) {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.setToken_(token);
        });
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.getToken_();
        });
    }
    clearToken() {
        return __awaiter(this, void 0, void 0, function*() {
            yield this.clearToken_();
        });
    }
    clearToken_() {
        return __awaiter(this, void 0, void 0, function*() {
            var _a, _b;
            const { storageMethod, storageKey } = this.getTokenStorageInfo_();
            switch(storageMethod){
                case "local":
                    {
                        window.localStorage.removeItem(storageKey);
                        break;
                    }
                case "session":
                    {
                        window.sessionStorage.removeItem(storageKey);
                        break;
                    }
                case "custom":
                    {
                        yield (_b = (_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.removeItem(storageKey);
                        break;
                    }
                case "memory":
                    {
                        this.token = "";
                        break;
                    }
            }
        });
    }
    initClient() {
        const defaultHeaders = new Headers(Object.assign(Object.assign({
            "content-type": "application/json",
            accept: "application/json"
        }, this.getApiKeyHeader_()), this.getPublishableKeyHeader_()));
        this.logger.debug("Initiating Medusa client with default headers:\n", `${JSON.stringify(sanitizeHeaders(defaultHeaders), null, 2)}\n`);
        return (input, init)=>__awaiter(this, void 0, void 0, function*() {
                // We always want to fetch the up-to-date JWT token before firing off a request.
                const headers = new Headers(defaultHeaders);
                if (this.locale) {
                    headers.set("x-medusa-locale", this.locale);
                }
                const customHeaders = Object.assign(Object.assign(Object.assign({
                    "x-medusa-locale": this.locale
                }, this.config.globalHeaders), (yield this.getJwtHeader_())), init === null || init === void 0 ? void 0 : init.headers);
                // We use `headers.set` in order to ensure headers are overwritten in a case-insensitive manner.
                Object.entries(customHeaders).forEach(([key, value])=>{
                    if (value === null) {
                        headers.delete(key);
                    } else {
                        headers.set(key, value);
                    }
                });
                let normalizedInput = input;
                if (input instanceof URL || typeof input === "string") {
                    const baseUrl = new URL(this.config.baseUrl);
                    const fullPath = `${baseUrl.pathname.replace(/\/$/, "")}/${input.toString().replace(/^\//, "")}`;
                    normalizedInput = new URL(fullPath, baseUrl.origin);
                    if (init === null || init === void 0 ? void 0 : init.query) {
                        const params = Object.fromEntries(normalizedInput.searchParams.entries());
                        const stringifiedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringify"])(Object.assign(Object.assign({}, params), init.query), {
                            skipNulls: true
                        });
                        normalizedInput.search = stringifiedQuery;
                    }
                }
                this.logger.debug("Performing request to:\n", `URL: ${normalizedInput.toString()}\n`, `Headers: ${JSON.stringify(sanitizeHeaders(headers), null, 2)}\n`);
                // Any non-request errors (eg. invalid JSON in the response) will be thrown as-is.
                return yield fetch(normalizedInput, normalizeRequest(init, headers, this.config)).then((resp)=>{
                    this.logger.debug(`Received response with status ${resp.status}\n`);
                    return normalizeResponse(resp, headers);
                });
            });
    }
    getJwtHeader_() {
        return __awaiter(this, void 0, void 0, function*() {
            var _a;
            // If the user has requested for session storage, we don't want to send the JWT token in the header.
            if (((_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.type) === "session") {
                return {};
            }
            const token = yield this.getToken_();
            return token ? {
                Authorization: `Bearer ${token}`
            } : {};
        });
    }
    setToken_(token) {
        return __awaiter(this, void 0, void 0, function*() {
            var _a, _b;
            const { storageMethod, storageKey } = this.getTokenStorageInfo_();
            switch(storageMethod){
                case "local":
                    {
                        window.localStorage.setItem(storageKey, token);
                        break;
                    }
                case "session":
                    {
                        window.sessionStorage.setItem(storageKey, token);
                        break;
                    }
                case "custom":
                    {
                        yield (_b = (_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.setItem(storageKey, token);
                        break;
                    }
                case "memory":
                    {
                        this.token = token;
                        break;
                    }
            }
        });
    }
    getToken_() {
        return __awaiter(this, void 0, void 0, function*() {
            var _a, _b;
            const { storageMethod, storageKey } = this.getTokenStorageInfo_();
            switch(storageMethod){
                case "local":
                    {
                        return window.localStorage.getItem(storageKey);
                    }
                case "session":
                    {
                        return window.sessionStorage.getItem(storageKey);
                    }
                case "custom":
                    {
                        return yield (_b = (_a = this.config.auth) === null || _a === void 0 ? void 0 : _a.storage) === null || _b === void 0 ? void 0 : _b.getItem(storageKey);
                    }
                case "memory":
                    {
                        return this.token;
                    }
            }
            return null;
        });
    }
    throwError_(message) {
        this.logger.error(message);
        throw new Error(message);
    }
} //# sourceMappingURL=client.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Product",
    ()=>Product
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/client.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
class Product {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a product import. The products are only imported after
     * the import is confirmed using the {@link confirmImport} method.
     *
     * This method sends a request to the
     * [Create Product Import](https://docs.medusajs.com/api/admin#products_postproductsimport)
     * API route.
     *
     * @param body - The import's details.
     * @param query - Query parameters to pass to the request.
     * @param headers - Headers to pass in the request.
     * @returns The import's details.
     *
     * @example
     * sdk.admin.product.import({
     *   file // uploaded File instance
     * })
     * .then(({ transaction_id }) => {
     *   console.log(transaction_id)
     * })
     */ import(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            const form = new FormData();
            form.append("file", body.file);
            return yield this.client.fetch(`/admin/products/import`, {
                method: "POST",
                headers: Object.assign(Object.assign({}, headers), {
                    // Let the browser determine the content type.
                    "content-type": null
                }),
                body: form,
                query
            });
        });
    }
    /**
     * This method creates a product import. The products are only imported after
     * the import is confirmed using the {@link confirmImport} method.
     *
     * This method sends a request to the
     * [Create Product Import](https://docs.medusajs.com/api/admin#products_postproductsimports)
     * API route.
     *
     * @since 2.8.5
     *
     * @param body - The import's details.
     * @param query - Query parameters to pass to the request.
     * @param headers - Headers to pass in the request.
     * @returns The import's details.
     *
     * @example
     * sdk.admin.product.createImport({
     *   file // uploaded File instance
     * })
     * .then(({ transaction_id }) => {
     *   console.log(transaction_id)
     * })
     */ createImport(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            /**
             * Get signed URL for file uploads
             */ const response = yield this.client.fetch("admin/uploads/presigned-urls", {
                method: "POST",
                headers: headers,
                body: {
                    originalname: body.file.name,
                    mime_type: body.file.type,
                    size: body.file.size
                },
                query
            });
            /**
             * Upload file using the signed URL. We cannot send cookies or any other
             * special headers in this request, since external services like S3 will
             * give a CORS error.
             */ if (response.url.startsWith("http://") || response.url.startsWith("https://")) {
                const uploadResponse = yield fetch(response.url, {
                    method: "PUT",
                    body: body.file
                });
                if (uploadResponse.status >= 400) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FetchError"](uploadResponse.statusText, uploadResponse.statusText, uploadResponse.status);
                }
            } else {
                const form = new FormData();
                form.append("files", body.file);
                const localUploadResponse = yield this.client.fetch("admin/uploads", {
                    method: "POST",
                    headers: Object.assign(Object.assign({}, headers), {
                        // Let the browser determine the content type.
                        "content-type": null
                    }),
                    body: form,
                    query
                });
                response.filename = localUploadResponse.files[0].id;
            }
            /**
             * Perform products import using the uploaded file name
             */ return yield this.client.fetch("/admin/products/imports", {
                method: "POST",
                headers: Object.assign({}, headers),
                body: {
                    file_key: response.filename,
                    originalname: response.originalname,
                    extension: response.extension,
                    size: response.size,
                    mime_type: response.mime_type
                },
                query
            });
        });
    }
    /**
     * This method confirms a product import created using the method {@link import}.
     * It sends a request to the
     * [Confirm Product Import](https://docs.medusajs.com/api/admin#products_postproductsimporttransaction_idconfirm)
     * API route.
     *
     * @since 2.8.5
     *
     * @param transactionId - The ID of the transaction of the created product import. This is returned
     * by the API route used to create the product import.
     * @param query - Query parameters to pass in the request.
     * @param headers - Headers to pass in the request.
     *
     * @example
     * sdk.admin.product.confirmImport("transaction_123")
     * .then(() => {
     *   console.log("Import confirmed")
     * })
     */ confirmImport(transactionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/imports/${transactionId}/confirm`, {
                method: "POST",
                headers,
                body: {},
                query
            });
        });
    }
    /**
     * This method starts a product export process to retrieve a CSV of exported products.
     *
     * You'll receive in the response the transaction ID of the workflow generating the CSV file.
     * To check the status of the execution, send a `GET` request to
     * `/admin/workflows-executions/export-products/:transaction-id`.
     *
     * Once the execution finishes successfully, a notification is created for the export.
     * You can retrieve the notifications using the `/admin/notification` API route to
     * retrieve the file's download URL.
     *
     * This method sends a request to the [Export Product](https://docs.medusajs.com/api/admin#products_postproductsexport)
     * API route.
     *
     * @param body - The export's details.
     * @param query - Filters to specify which products to export.
     * @param headers - Headers to pass in the request.
     * @returns The export's details.
     *
     * @example
     * sdk.admin.product.export({})
     * .then(({ transaction_id }) => {
     *   console.log(transaction_id)
     * })
     */ export(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/export`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method manages products to create, update, or delete them. It sends a request to the
     * [Manage Products](https://docs.medusajs.com/api/admin#products_postproductsbatch)
     * API route.
     *
     * @param body - The products to create, update, or delete.
     * @param query - Configure the fields to retrieve in the products.
     * @param headers - Headers to pass in the request
     * @returns The batch operations details.
     *
     * @example
     * sdk.admin.product.batch({
     *   create: [
     *     {
     *       title: "Shirt",
     *       options: [{
     *         title: "Default",
     *         values: ["Default Option"]
     *       }],
     *       variants: [
     *         {
     *           title: "Default",
     *           options: {
     *             Default: "Default Option"
     *           },
     *           prices: []
     *         }
     *       ]
     *     }
     *   ],
     *   update: [{
     *     id: "prod_123",
     *     title: "Pants"
     *   }],
     *   delete: ["prod_321"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batch(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/batch`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method creates a product. It sends a request to the
     * [Create Product](https://docs.medusajs.com/api/admin#products_postproducts)
     * API route.
     *
     * @param body - The product's details.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.create({
     *   title: "Shirt",
     *   options: [{
     *     title: "Default",
     *     values: ["Default Option"]
     *   }],
     *   variants: [
     *     {
     *       title: "Default",
     *       options: {
     *         Default: "Default Option"
     *       },
     *       prices: []
     *     }
     *   ],
     *   shipping_profile_id: "sp_123"
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a product. It sends a request to the
     * [Update Product](https://docs.medusajs.com/api/admin#products_postproductsid)
     * API route.
     *
     * @param id - The product's ID.
     * @param body - The data to update in the product.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.update("prod_123", {
     *   title: "Shirt",
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of products. It sends a request to the
     * [List Products](https://docs.medusajs.com/api/admin#products_getproducts) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of products.
     *
     * @example
     * To retrieve the list of products:
     *
     * ```ts
     * sdk.admin.product.list()
     * .then(({ products, count, limit, offset }) => {
     *   console.log(products)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.product.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ products, count, limit, offset }) => {
     *   console.log(products)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each products:
     *
     * ```ts
     * sdk.admin.product.list({
     *   fields: "id,*variants"
     * })
     * .then(({ products, count, limit, offset }) => {
     *   console.log(products)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products`, {
                headers,
                query: queryParams
            });
        });
    }
    /**
     * This method retrieves a product by its ID. It sends a request to the
     * [Get Product](https://docs.medusajs.com/api/admin#products_getproductsid)
     * API route.
     *
     * @param id - The product's ID.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * To retrieve a product by its ID:
     *
     * ```ts
     * sdk.admin.product.retrieve("prod_123")
     * .then(({ product }) => {
     *   console.log(product)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.product.retrieve("prod_123", {
     *   fields: "id,*variants"
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a product. It sends a request to the
     * [Delete Product](https://docs.medusajs.com/api/admin#products_deleteproductsid)
     * API route.
     *
     * @param id - The product's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.product.delete("prod_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages the variants of a product. It sends a request to the
     * [Manage Variants](https://docs.medusajs.com/api/admin#products_postproductsidvariantsbatch)
     * API route.
     *
     * @param productId - The product's ID.
     * @param body - The variants to create, update, or delete.
     * @param query - Configure the fields to retrieve in the product variants.
     * @param headers - Headers to pass in the request
     * @returns The product variants' details.
     *
     * @example
     * sdk.admin.product.batchVariants("prod_123", {
     *   create: [
     *     {
     *       title: "Blue Shirt",
     *       options: {
     *         Color: "Blue"
     *       },
     *       prices: []
     *     }
     *   ],
     *   update: [
     *     {
     *       id: "variant_123",
     *       title: "Pants"
     *     }
     *   ],
     *   delete: ["variant_123"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batchVariants(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants/batch`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method creates a variant for a product. It sends a request to the
     * [Create Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariants)
     * API route.
     *
     * @param productId - The product's ID.
     * @param body - The variant's details.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.createVariant("prod_123", {
     *   title: "Blue Shirt",
     *   options: {
     *     Color: "Blue"
     *   },
     *   prices: [
     *     {
     *       amount: 10,
     *       currency_code: "usd"
     *     }
     *   ]
     * })
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */ createVariant(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a variant of a product. It sends a request to the
     * [Update Variant](https://docs.medusajs.com/api/admin#products_postproductsidvariantsvariant_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The variant's ID.
     * @param body - The data to update in the variant.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.updateVariant(
     *   "prod_123",
     *   "variant_123",
     *     {
     *     title: "Blue Shirt",
     *   }
     * )
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */ updateVariant(productId, id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of products. It sends a request to the
     * [List Products](https://docs.medusajs.com/api/admin#products_getproductsidvariants) API route.
     *
     * @param productId - The ID of the product to retrieve its variants.
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product variants.
     *
     * @example
     * To retrieve the list of product variants:
     *
     * ```ts
     * sdk.admin.product.listVariants("prod_123")
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.product.listVariants("prod_123", {
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product variant:
     *
     * ```ts
     * sdk.admin.product.listVariants("prod_123", {
     *   fields: "id,*product"
     * })
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ listVariants(productId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a product's variant. It sends a request to the
     * [Retrieve Variant](https://docs.medusajs.com/api/admin#products_getproductsidvariantsvariant_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The variant's ID.
     * @param query - Configure the fields to retrieve in the product variant.
     * @param headers - Headers to pass in the request
     * @returns The product variant's details.
     *
     * @example
     * To retrieve a product variant by its ID:
     *
     * ```ts
     * sdk.admin.product.retrieveVariant(
     *   "prod_123",
     *   "variant_123"
     * )
     * .then(({ variant }) => {
     *   console.log(variant)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.product.retrieveVariant(
     *   "prod_123",
     *   "variant_123",
     *   {
     *     fields: "id, *product"
     *   }
     * )
     * .then(({ variant }) => {
     *   console.log(variant)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieveVariant(productId, id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a product's variant. It sends a request to the
     * [Delete Variant](https://docs.medusajs.com/api/admin#products_deleteproductsidvariantsvariant_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The ID of the variant.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.product.deleteVariant("prod_123", "variant_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ deleteVariant(productId, id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages a product's variant's inventories to associate them with inventory items,
     * update their inventory items, or delete their association with inventory items.
     *
     * It sends a request to the
     * [Manage Variant Inventory](https://docs.medusajs.com/api/admin#products_postproductsidvariantsinventoryitemsbatch)
     * API route.
     *
     * @param productId - The ID of the product that the variant belongs to.
     * @param body - The inventory items to create, update, or delete.
     * @param query - Pass query parameters in the request.
     * @param headers - Headers to pass in the request
     * @returns The details of the created, updated, or deleted inventory items.
     *
     * @example
     * sdk.admin.product.batchVariantInventoryItems(
     *   "prod_123",
     *   {
     *     create: [
     *       {
     *         inventory_item_id: "iitem_123",
     *         variant_id: "variant_123",
     *         required_quantity: 10
     *       }
     *     ],
     *     update: [
     *       {
     *         inventory_item_id: "iitem_1234",
     *         variant_id: "variant_1234",
     *         required_quantity: 20
     *       }
     *     ],
     *     delete: [
     *       {
     *         inventory_item_id: "iitem_321",
     *         variant_id: "variant_321"
     *       }
     *     ]
     *   }
     * )
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batchVariantInventoryItems(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants/inventory-items/batch`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method creates an option in a product. It sends a request to the
     * [Create Option](https://docs.medusajs.com/api/admin#products_postproductsidoptions)
     * API route.
     *
     * @param productId - The product's ID.
     * @param body - The option's details.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.createOption(
     *   "prod_123",
     *   {
     *     title: "Color",
     *     values: ["Green", "Blue"]
     *   }
     * )
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */ createOption(productId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/options`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a product's option. It sends a request to the
     * [Update Option](https://docs.medusajs.com/api/admin#products_postproductsidoptionsoption_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The ID of the option to update.
     * @param body - The data to update in the option.
     * @param query - Configure the fields to retrieve in the product.
     * @param headers - Headers to pass in the request
     * @returns The product's details.
     *
     * @example
     * sdk.admin.product.updateOption(
     *   "prod_123",
     *   "prodopt_123",
     *   {
     *     title: "Color"
     *   }
     * )
     * .then(({ product }) => {
     *   console.log(product)
     * })
     */ updateOption(productId, id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of product options. It sends a request to the
     * [List Options](https://docs.medusajs.com/api/admin#products_getproductsidoptions) API route.
     *
     * @param productId - The ID of the product to retrieve its options
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product options.
     *
     * @example
     * To retrieve the list of product options:
     *
     * ```ts
     * sdk.admin.product.listOptions("prod_123")
     * .then(({ product_options, count, limit, offset }) => {
     *   console.log(product_options)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.product.listOptions("prod_123", {
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ product_options, count, limit, offset }) => {
     *   console.log(product_options)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product options:
     *
     * ```ts
     * sdk.admin.product.listOptions("prod_123", {
     *   fields: "id,title"
     * })
     * .then(({ product_options, count, limit, offset }) => {
     *   console.log(product_options)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ listOptions(productId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/options`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a product's option. It sends a request to the
     * [Get Option](https://docs.medusajs.com/api/admin#products_getproductsidoptionsoption_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The product option's ID.
     * @param query - Configure the fields to retrieve in the product option.
     * @param headers - Headers to pass in the request
     * @returns The product option's details.
     *
     * @example
     * To retrieve a product option by its ID:
     *
     * ```ts
     * sdk.admin.product.retrieveOption(
     *   "prod_123",
     *   "prodopt_123"
     * )
     * .then(({ product_option }) => {
     *   console.log(product_option)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.product.retrieveOption(
     *   "prod_123",
     *   "prodopt_123",
     *   {
     *     fields: "id,title"
     *   }
     * )
     * .then(({ product_option }) => {
     *   console.log(product_option)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieveOption(productId, id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a product's option. It sends a request to the
     * [Delete Option](https://docs.medusajs.com/api/admin#products_deleteproductsidoptionsoption_id)
     * API route.
     *
     * @param productId - The product's ID.
     * @param id - The option's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.product.deleteOption("prod_123", "prodopt_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ deleteOption(productId, id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/options/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages image-variant associations for a specific image. It sends a request to the
     * [Batch Image Variants](https://docs.medusajs.com/api/admin#products_postproductsidimagesimage_idvariantsbatch)
     * API route.
     *
     * @since 2.11.2
     *
     * @param productId - The product's ID.
     * @param imageId - The image's ID.
     * @param body - The variants to add or remove from the image.
     * @param headers - Headers to pass in the request
     * @returns The batch operation details.
     *
     * @example
     * sdk.admin.product.batchImageVariants("prod_123", "img_123", {
     *   add: ["variant_123", "variant_456"],
     *   remove: ["variant_789"]
     * })
     * .then(({ added, removed }) => {
     *   console.log(added, removed)
     * })
     */ batchImageVariants(productId, imageId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/images/${imageId}/variants/batch`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method manages variant-image associations for a specific variant. It sends a request to the
     * [Batch Variant Images](https://docs.medusajs.com/api/admin#products_postproductsidvariantsvariant_idimagesbatch)
     * API route.
     *
     * @since 2.11.2
     *
     * @param productId - The product's ID.
     * @param variantId - The variant's ID.
     * @param body - The images to add or remove from the variant.
     * @param headers - Headers to pass in the request
     * @returns The batch operation details.
     *
     * @example
     * sdk.admin.product.batchVariantImages("prod_123", "variant_123", {
     *   add: ["img_123", "img_456"],
     *   remove: ["img_789"]
     * })
     * .then(({ added, removed }) => {
     *   console.log(added, removed)
     * })
     */ batchVariantImages(productId, variantId, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/products/${productId}/variants/${variantId}/images/batch`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=product.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-category.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCategory",
    ()=>ProductCategory
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ProductCategory {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a product category. It sends a request to the
     * [Create Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategories)
     * API route.
     *
     * @param body - The details of the category to create.
     * @param query - Configure the fields to retrieve in the category.
     * @param headers - Headers to pass in the request
     * @returns The category's details.
     *
     * @example
     * sdk.admin.productCategory.create({
     *   name: "Shirts"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-categories`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a product category. It sends a request to the
     * [Update Category](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesid)
     * API route.
     *
     * @param id - The product category's ID.
     * @param body - The data to update in the category.
     * @param query - Configure the fields to retrieve in the category.
     * @param headers - Headers to pass in the request
     * @returns The category's details.
     *
     * @example
     * sdk.admin.productCategory.update("pcat_123", {
     *   name: "Shirts"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-categories/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of product categories. It sends a request to the
     * [List Product Categories](https://docs.medusajs.com/api/admin#product-categories_getproductcategories) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product categories.
     *
     * @example
     * To retrieve the list of product categories:
     *
     * ```ts
     * sdk.admin.productCategory.list()
     * .then(({ product_categories, count, limit, offset }) => {
     *   console.log(product_categories)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.productCategory.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ product_categories, count, limit, offset }) => {
     *   console.log(product_categories)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product category:
     *
     * ```ts
     * sdk.admin.productCategory.list({
     *   fields: "id,*products"
     * })
     * .then(({ product_categories, count, limit, offset }) => {
     *   console.log(product_categories)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-categories`, {
                headers,
                query: query
            });
        });
    }
    /**
     * This method retrieves a product category by its ID. It sends a request to the
     * [Get Product Category](https://docs.medusajs.com/api/admin#product-categories_getproductcategoriesid) API route.
     *
     * @param id - The category's ID.
     * @param query - Configure the fields to retrieve in the product category.
     * @param headers - Headers to pass in the request
     * @returns The product category's details.
     *
     * @example
     * To retrieve a product category by its ID:
     *
     * ```ts
     * sdk.admin.productCategory.retrieve("pcat_123")
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.productCategory.retrieve("pcat_123", {
     *   fields: "id,*products"
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-categories/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a product category. It sends a request to the
     * [Delete Product Category](https://docs.medusajs.com/api/admin#product-categories_deleteproductcategoriesid)
     * API route.
     *
     * @param id - The category's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.productCategory.delete("pcat_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-categories/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manaes the products of a category to add or remove them. It sends a request
     * to the [Manage Products](https://docs.medusajs.com/api/admin#product-categories_postproductcategoriesidproducts)
     * API route.
     *
     * @param id - The category's ID.
     * @param body - The products to create or update.
     * @param query - Configure the fields to retrieve in the product category.
     * @param headers - Headers to pass in the request
     * @returns The product category's details.
     *
     * @example
     * sdk.admin.productCategory.updateProducts("pcat_123", {
     *   add: ["prod_123"],
     *   remove: ["prod_321"]
     * })
     * .then(({ product_category }) => {
     *   console.log(product_category)
     * })
     */ updateProducts(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-categories/${id}/products`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
} //# sourceMappingURL=product-category.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-collection.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCollection",
    ()=>ProductCollection
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ProductCollection {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a product collection. It sends a request to the
     * [Create Collection](https://docs.medusajs.com/api/admin#collections_postcollections)
     * API route.
     *
     * @param body - The details of the product collection to create.
     * @param query - Configure the fields to retrieve in the product collection.
     * @param headers - Headers to pass in the request
     * @returns The product collection's details.
     *
     * @example
     * sdk.admin.productCollection.create({
     *   title: "Summer Collection"
     * })
     * .then(({ collection }) => {
     *   console.log(collection)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/collections`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a collection. It sends a request to the
     * [Update Collection](https://docs.medusajs.com/api/admin#collections_postcollectionsid)
     * API route.
     *
     * @param id - The ID of the collection.
     * @param body - The data to update in the collection.
     * @param query - Configure the fields to retrieve in the product collection.
     * @param headers - Headers to pass in the request
     * @returns The product collection's details.
     *
     * @example
     * sdk.admin.productCollection.update("pcol_123", {
     *   title: "Summer Collection"
     * })
     * .then(({ collection }) => {
     *   console.log(collection)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/collections/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of collections. It sends a request to the
     * [List Collections](https://docs.medusajs.com/api/admin#collections_getcollections) API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of collections.
     *
     * @example
     * To retrieve the list of collections:
     *
     * ```ts
     * sdk.admin.productCollection.list()
     * .then(({ collections, count, limit, offset }) => {
     *   console.log(collections)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.productCollection.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ collections, count, limit, offset }) => {
     *   console.log(collections)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each collection:
     *
     * ```ts
     * sdk.admin.productCollection.list({
     *   fields: "id,*products"
     * })
     * .then(({ collections, count, limit, offset }) => {
     *   console.log(collections)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/collections`, {
                headers,
                query: queryParams
            });
        });
    }
    /**
     * This method retrieves a collection by its ID. It sends a request to the
     * [Get Collection](https://docs.medusajs.com/api/admin#collections_getcollectionsid) API route.
     *
     * @param id - The collection's ID.
     * @param query - Configure the fields to retrieve in the collection.
     * @param headers - Headers to pass in the request
     * @returns The collection's details.
     *
     * @example
     * To retrieve a collection by its ID:
     *
     * ```ts
     * sdk.admin.productCollection.retrieve("pcol_123")
     * .then(({ collection }) => {
     *   console.log(collection)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.productCollection.retrieve("pcol_123", {
     *   fields: "id,*products"
     * })
     * .then(({ collection }) => {
     *   console.log(collection)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/collections/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a product collection. It sends a request to the
     * [Delete Collection](https://docs.medusajs.com/api/admin#collections_deletecollectionsid)
     * API route.
     *
     * @param id - The collection's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.productCollection.delete("pcol_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/collections/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method manages the products of a collection to add or remove them. It sends a request
     * to the [Manage Products](https://docs.medusajs.com/api/admin#collections_postcollectionsidproducts)
     * API route.
     *
     * @param id - The collection's ID.
     * @param body - The products to add or remove.
     * @param headers - Headers to pass in the request
     * @returns The product category's details.
     *
     * @example
     * sdk.admin.productCollection.updateProducts("pcol_123", {
     *   add: ["prod_123"],
     *   remove: ["prod_321"]
     * })
     * .then(({ collection }) => {
     *   console.log(collection)
     * })
     */ updateProducts(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/collections/${id}/products`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=product-collection.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-tag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductTag",
    ()=>ProductTag
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ProductTag {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a product tag. It sends a request to the
     * [Create Product Tag](https://docs.medusajs.com/api/admin#product-tags_postproducttags)
     * API route.
     *
     * @param body - The details of the product tag.
     * @param query - Configure the fields to retrieve in the product tag.
     * @param headers - Headers to pass in the request
     * @returns The product tag's details.
     *
     * @example
     * sdk.admin.productTag.create({
     *   value: "shirt"
     * })
     * .then(({ product_tag }) => {
     *   console.log(product_tag)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-tags`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a tag's details. It sends a request to the
     * [Update Product Tag](https://docs.medusajs.com/api/admin#product-tags_postproducttagsid)
     * API route.
     *
     * @param id - The tag's ID.
     * @param body - The data to update in the tag.
     * @param query - Configure the fields to retrieve in the product tag.
     * @param headers - Headers to pass in the request
     * @returns The product tag's details.
     *
     * @example
     * sdk.admin.productTag.update("ptag_123", {
     *   value: "shirt"
     * })
     * .then(({ product_tag }) => {
     *   console.log(product_tag)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-tags/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of product tags. It sends a request to the
     * [List Product Tags](https://docs.medusajs.com/api/admin#product-tags_getproducttags) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product tags.
     *
     * @example
     * To retrieve the list of product tags:
     *
     * ```ts
     * sdk.admin.productTag.list()
     * .then(({ product_tags, count, limit, offset }) => {
     *   console.log(product_tags)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.productTag.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ product_tags, count, limit, offset }) => {
     *   console.log(product_tags)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product tag:
     *
     * ```ts
     * sdk.admin.productTag.list({
     *   fields: "id,*products"
     * })
     * .then(({ product_tags, count, limit, offset }) => {
     *   console.log(product_tags)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-tags`, {
                headers,
                query: query
            });
        });
    }
    /**
     * This method retrieves a product tag by its ID. It sends a request to the
     * [Get Product Tag](https://docs.medusajs.com/api/admin#product-tags_getproducttagsid) API route.
     *
     * @param id - The product tag's ID.
     * @param query - Configure the fields to retrieve in the product tag.
     * @param headers - Headers to pass in the request
     * @returns The product tag's details.
     *
     * @example
     * To retrieve a product tag by its ID:
     *
     * ```ts
     * sdk.admin.productTag.retrieve("ptag_123")
     * .then(({ product_tag }) => {
     *   console.log(product_tag)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.productTag.retrieve("ptag_123", {
     *   fields: "id,*products"
     * })
     * .then(({ product_tag }) => {
     *   console.log(product_tag)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-tags/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a product tag. It sends a request to the
     * [Delete Product Tag](https://docs.medusajs.com/api/admin#product-tags_deleteproducttagsid)
     * API route.
     *
     * @param id - The tag's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.productTag.delete("ptag_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-tags/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
} //# sourceMappingURL=product-tag.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductType",
    ()=>ProductType
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ProductType {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a product type. It sends a request to the
     * [Create Product Type](https://docs.medusajs.com/api/admin#product-types_postproducttypes)
     * API route.
     *
     * @param body - The product type's details.
     * @param query - Configure the fields to retrieve in the product type.
     * @param headers - Headers to pass in the request
     * @returns The product type's details.
     *
     * @example
     * sdk.admin.productType.create({
     *   value: "Clothes"
     * })
     * .then(({ product_type }) => {
     *   console.log(product_type)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-types`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a product type. It sends a request to the
     * [Update Product Type](https://docs.medusajs.com/api/admin#product-types_postproducttypesid)
     * API route.
     *
     * @param id - The product type's ID.
     * @param body - The data to update in the product type.
     * @param query - Configure the fields to retrieve in the product type.
     * @param headers - Headers to pass in the request
     * @returns The product type's details.
     *
     * @example
     * sdk.admin.productType.update("ptyp_123", {
     *   value: "Clothes"
     * })
     * .then(({ product_type }) => {
     *   console.log(product_type)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-types/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of product types. It sends a request to the
     * [List Product Types](https://docs.medusajs.com/api/admin#product-types_getproducttypes) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product types.
     *
     * @example
     * To retrieve the list of product types:
     *
     * ```ts
     * sdk.admin.productType.list()
     * .then(({ product_types, count, limit, offset }) => {
     *   console.log(product_types)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.productType.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ product_types, count, limit, offset }) => {
     *   console.log(product_types)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each product type:
     *
     * ```ts
     * sdk.admin.productType.list({
     *   fields: "id,*products"
     * })
     * .then(({ product_types, count, limit, offset }) => {
     *   console.log(product_types)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-types`, {
                headers,
                query: query
            });
        });
    }
    /**
     * This method retrieves a product type by its ID. It sends a request to the
     * [Get Product Type](https://docs.medusajs.com/api/admin#product-types_getproducttypesid)
     * API route.
     *
     * @param id - The product type's ID.
     * @param query - Configure the fields to retrieve in the product type.
     * @param headers - Headers to pass in the request
     * @returns The product type's details.
     *
     * @example
     * To retrieve a product type by its ID:
     *
     * ```ts
     * sdk.admin.productType.retrieve("ptyp_123")
     * .then(({ product_type }) => {
     *   console.log(product_type)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.productType.retrieve("ptyp_123", {
     *   fields: "id,*products"
     * })
     * .then(({ product_type }) => {
     *   console.log(product_type)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-types/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a product type. It sends a request to the
     * [Delete Product Type](https://docs.medusajs.com/api/admin#product-types_deleteproducttypesid)
     * API route.
     *
     * @param id - The product type's ID.
     * @param headers - Headers to pass in the request
     * @returns The product type's details.
     *
     * @example
     * sdk.admin.productType.delete("ptyp_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/product-types/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
} //# sourceMappingURL=product-type.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-variant.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductVariant",
    ()=>ProductVariant
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ProductVariant {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of product variants. It sends a request to the
     * [List Product Variants](https://docs.medusajs.com/api/admin#product-variants_getproductvariants)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of product variants.
     *
     * @example
     * To retrieve the list of product variants:
     *
     * ```ts
     * sdk.admin.productVariant.list()
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.productVariant.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each campaign:
     *
     * ```ts
     * sdk.admin.productVariant.list({
     *   fields: "id,products"
     * })
     * .then(({ variants, count, limit, offset }) => {
     *   console.log(variants)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/product-variants`, {
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=product-variant.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/promotion.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Promotion",
    ()=>Promotion
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Promotion {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a promotion by its ID. It sends a request to the
     * [Retrieve Promotion](https://docs.medusajs.com/api/admin#promotions_getpromotionsid)
     * API route.
     *
     * @param id - The promotion's ID.
     * @param query - Configure the fields to retrieve in the promotion.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * To retrieve a promotion by its ID:
     *
     * ```ts
     * sdk.admin.promotion.retrieve("promo_123")
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.promotion.retrieve("promo_123", {
     *   fields: "id,*application_method"
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions/${id}`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of promotions. It sends a request to the
     * [List Promotions](https://docs.medusajs.com/api/admin#promotions_getpromotions)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of promotions.
     *
     * @example
     * To retrieve the list of promotions:
     *
     * ```ts
     * sdk.admin.promotion.list()
     * .then(({ promotions, count, limit, offset }) => {
     *   console.log(promotions)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.promotion.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ promotions, count, limit, offset }) => {
     *   console.log(promotions)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each promotion:
     *
     * ```ts
     * sdk.admin.promotion.list({
     *   fields: "id,*application_method"
     * })
     * .then(({ promotions, count, limit, offset }) => {
     *   console.log(promotions)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions`, {
                headers,
                query
            });
        });
    }
    /**
     * This method creates a new promotion. It sends a request to the
     * [Create Promotion](https://docs.medusajs.com/api/admin#promotions_postpromotions)
     * API route.
     *
     * @param payload - The promotion to create.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.create({
     *   name: "My Promotion",
     *   description: "This is a test promotion",
     *   code: "PROMO123",
     *   starts_at: "2021-01-01",
     *   ends_at: "2021-01-01",
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */ create(payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions`, {
                method: "POST",
                headers,
                body: payload
            });
        });
    }
    /**
     * This method updates a promotion. It sends a request to the
     * [Update Promotion](https://docs.medusajs.com/api/admin#promotions_postpromotionsid)
     * API route.
     *
     * @param id - The promotion's ID.
     * @param payload - The details to update in the promotion.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.update("promo_123", {
     *   code: "PROMO123",
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */ update(id, payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions/${id}`, {
                method: "POST",
                headers,
                body: payload
            });
        });
    }
    /**
     * This method deletes a promotion. It sends a request to the
     * [Delete Promotion](https://docs.medusajs.com/api/admin#promotions_deletepromotionsid)
     * API route.
     *
     * @param id - The promotion's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deleted promotion's details.
     *
     * @example
     * sdk.admin.promotion.delete("promo_123")
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method creates and adds rules to a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * - If you set the `ruleType` to `rules`, the method sends a request to the
     * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
     * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
     * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
     * - If you set the `ruleType` to `target-rules`, the method sends a request to the
     * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to create.
     * @param payload - The rules to create.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.addRules("promo_123", "rules", {
     *   rules: [
     *     {
     *       operator: "eq",
     *       attribute: "product_id",
     *       values: ["prod_123"]
     *     }
     *   ]
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */ addRules(id, ruleType, payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
                method: "POST",
                headers,
                body: {
                    create: payload.rules
                }
            });
        });
    }
    /**
     * This method updates the rules of a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * - If you set the `ruleType` to `rules`, the method sends a request to the
     * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
     * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
     * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
     * - If you set the `ruleType` to `target-rules`, the method sends a request to the
     * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to update.
     * @param payload - The rules to update.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.updateRules("promo_123", "rules", {
     *   rules: [
     *     {
     *       id: "rule_123",
     *       operator: "ne",
     *     }
     *   ]
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */ updateRules(id, ruleType, payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
                method: "POST",
                headers,
                body: {
                    update: payload.rules
                }
            });
        });
    }
    /**
     * This method removes rules from a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * - If you set the `ruleType` to `rules`, the method sends a request to the
     * [Manage Promotion's Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidrulesbatch).
     * - If you set the `ruleType` to `buy-rules`, the method sends a request to the
     * [Manage Promotion's Buy Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidbuyrulesbatch).
     * - If you set the `ruleType` to `target-rules`, the method sends a request to the
     * [Manage Promotion's Target Rules API Route](https://docs.medusajs.com/api/admin#promotions_postpromotionsidtargetrulesbatch).
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to remove.
     * @param payload - The rules to remove.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's details.
     *
     * @example
     * sdk.admin.promotion.removeRules("promo_123", "rules", {
     *   rule_ids: ["rule_123"]
     * })
     * .then(({ promotion }) => {
     *   console.log(promotion)
     * })
     */ removeRules(id, ruleType, payload, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}/batch`, {
                method: "POST",
                headers,
                body: {
                    delete: payload.rule_ids
                }
            });
        });
    }
    /**
     * This method retrieves the rules of a promotion. It can be the promotion's rules,
     * or its application method's buy or target rules. That depends on the rule type
     * you specify as a parameter.
     *
     * This method sends a request to the
     * [List Rules of a Promotion API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsidrule_type)
     *
     * @param id - The promotion's ID.
     * @param ruleType - The type of rules to retrieve. Can be `rules`, `buy-rules`, or `target-rules`.
     * @param query - Configure the fields to retrieve in the rules.
     * @param headers - Headers to pass in the request.
     * @returns The promotion's rules.
     *
     * @example
     * sdk.admin.promotion.listRules("promo_123", "rules")
     * .then(({ rules }) => {
     *   console.log(rules)
     * })
     */ listRules(id, ruleType, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            // eslint-disable-next-line max-len
            return yield this.client.fetch(`/admin/promotions/${id}/${ruleType}`, {
                headers,
                query
            });
        });
    }
    /**
     * Retrieve a list of potential rule attributes for the promotion and application method types specified in the query parameters. Only the attributes of the rule type specified in the path parameter are retrieved:
     *
     * - If `rule_type` is `rules`, the attributes of the promotion's type are retrieved.
     * - If `rule_type` is `target-rules`, the target rules' attributes of the application method's type are retrieved.
     * - If `rule_type` is `buy-rules`, the buy rules' attributes of the application method's type are retrieved.
     *
     * This method sends a request to the
     * [List Rule Attribute Options API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsruleattributeoptionsrule_type)
     *
     * @param ruleType - The type of rules to retrieve the attributes for. Can be `rules`, `buy-rules`, or `target-rules`.
     * @param promotionType - The type of promotion to retrieve the attributes for. It can be `standard` or `buyget`.
     * @param applicationMethodTargetType - The type of application method to retrieve the attributes for. It can be `order`, `items` (default) or `shipping_methods`.
     * @param headers - Headers to pass in the request.
     * @returns The list of rule attributes.
     *
     * @example
     * sdk.admin.promotion.listRuleAttributes("rules", "standard")
     * .then(({ attributes }) => {
     *   console.log(attributes)
     * })
     */ listRuleAttributes(ruleType, promotionType, applicationMethodTargetType, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            // eslint-disable-next-line max-len
            return yield this.client.fetch(`/admin/promotions/rule-attribute-options/${ruleType}`, {
                headers,
                query: {
                    promotion_type: promotionType,
                    application_method_target_type: applicationMethodTargetType
                }
            });
        });
    }
    /**
     * Retrieve all potential values for promotion rules and target and buy rules based on the specified rule attribute and type.
     * For example, if you provide the ID of the `currency_code` rule attribute, and set `rule_type` to rules,
     * a list of currencies are retrieved in label-value pairs.
     *
     * This method sends a request to the
     * [List Rule Values API Route](https://docs.medusajs.com/api/admin#promotions_getpromotionsrulevalueoptionsrule_typerule_attribute_id)
     *
     * @param ruleType - The type of rules to retrieve the values for. Can be `rules`, `buy-rules`, or `target-rules`.
     * @param ruleValue - The ID of the rule attribute to retrieve the values for.
     * @param query - Configure the fields to retrieve in the rule values.
     * @param headers - Headers to pass in the request.
     * @returns The list of rule values.
     *
     * @example
     * sdk.admin.promotion.listRuleValues("rules", "attr_123")
     * .then(({ values }) => {
     *   console.log(values)
     * })
     */ listRuleValues(ruleType, ruleValue, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/promotions/rule-value-options/${ruleType}/${ruleValue}`, {
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=promotion.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/refund-reasons.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefundReason",
    ()=>RefundReason
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RefundReason {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a list of refund reasons. It sends a request to the
     * [List Refund Reasons](https://docs.medusajs.com/api/admin#refund-reasons_getrefundreasons)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of refund reasons.
     *
     * @example
     * To retrieve the list of refund reasons:
     *
     * ```ts
     * sdk.admin.refundReason.list()
     * .then(({ refund_reasons, count, limit, offset }) => {
     *   console.log(refund_reasons)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.refundReason.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ refund_reasons, count, limit, offset }) => {
     *   console.log(refund_reasons)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each refund reason:
     *
     * ```ts
     * sdk.admin.refundReason.list({
     *   fields: "id,label"
     * })
     * .then(({ refund_reasons, count, limit, offset }) => {
     *   console.log(refund_reasons)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     *
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/refund-reasons`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a refund reason by ID. It sends a request to the
     * [Get Refund Reason](https://docs.medusajs.com/api/admin#refund-reasons_getrefundreasonsid)
     * API route.
     *
     * @since 2.11.0
     *
     * @param id - The refund reason's ID.
     * @param query - Configure the fields and relations to retrieve in the refund reason.
     * @param headers - Headers to pass in the request.
     * @returns The refund reason's details.
     *
     * @example
     * To retrieve a refund reason by its ID:
     *
     * ```ts
     * sdk.admin.refundReason.retrieve("refr_123")
     * .then(({ refund_reason }) => {
     *   console.log(refund_reason)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.refundReason.retrieve("refr_123", {
     *   fields: "id,code"
     * })
     * .then(({ refund_reason }) => {
     *   console.log(refund_reason)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/refund-reasons/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method creates a refund reason. It sends a request to the
     * [Create Refund Reason](https://docs.medusajs.com/api/admin#refund-reasons_postrefundreasons)
     * API route.
     *
     * @since 2.11.0
     *
     * @param body - The details of the refund reason to create.
     * @param query - Configure the fields and relations to retrieve in the refund reason.
     * @param headers - Headers to pass in the request.
     * @returns The refund reason's details.
     *
     * @example
     * sdk.admin.refundReason.create({
     *   code: "refund",
     *   label: "Refund",
     * })
     * .then(({ refund_reason }) => {
     *   console.log(refund_reason)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/refund-reasons`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a refund reason. It sends a request to the
     * [Update Refund Reason](https://docs.medusajs.com/api/admin#refund-reasons_postrefundreasonsid)
     * API route.
     *
     * @since 2.11.0
     *
     * @param id - The refund reason's ID.
     * @param body - The details of the refund reason to update.
     * @param query - Configure the fields and relations to retrieve in the refund reason.
     * @param headers - Headers to pass in the request.
     * @returns The refund reason's details.
     *
     * @example
     * sdk.admin.refundReason.update("ret_123", {
     *   code: "refund",
     *   label: "Refund",
     * })
     * .then(({ refund_reason }) => {
     *   console.log(refund_reason)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/refund-reasons/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a refund reason. It sends a request to the
     * [Delete Refund Reason](https://docs.medusajs.com/api/admin#refund-reasons_deleterefundreasonsid)
     * API route.
     *
     * @since 2.11.0
     *
     * @param id - The refund reason's ID.
     * @param query - Query parameters to pass to the request.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.refundReason.delete("ret_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/refund-reasons/${id}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=refund-reasons.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/region.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Region",
    ()=>Region
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Region {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a new region. It sends a request to the
     * [Create Region](https://docs.medusajs.com/api/admin#regions_postregions)
     * API route.
     *
     * @param body - The details of the region to create.
     * @param query - Configure the fields and relations to retrieve in the region.
     * @param headers - Headers to pass in the request.
     * @returns The created region's details.
     *
     * @example
     * sdk.admin.region.create({
     *   name: "United States",
     *   currency_code: "usd",
     * })
     * .then(({ region }) => {
     *   console.log(region)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/regions`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a region. It sends a request to the
     * [Update Region](https://docs.medusajs.com/api/admin#regions_postregionsid)
     * API route.
     *
     * @param id - The ID of the region to update.
     * @param body - The details of the region to update.
     * @param query - Configure the fields and relations to retrieve in the region.
     * @param headers - Headers to pass in the request.
     * @returns The updated region's details.
     *
     * @example
     * sdk.admin.region.update("region_123", {
     *   name: "United States",
     * })
     * .then(({ region }) => {
     *   console.log(region)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/regions/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a list of regions. It sends a request to the
     * [List Regions](https://docs.medusajs.com/api/admin#regions_getregions)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of regions.
     *
     * @example
     * To retrieve the list of regions:
     *
     * ```ts
     * sdk.admin.region.list()
     * .then(({ regions, count, limit, offset }) => {
     *   console.log(regions)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.region.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ regions, count, limit, offset }) => {
     *   console.log(regions)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each region:
     *
     * ```ts
     * sdk.admin.region.list({
     *   fields: "id,*countries"
     * })
     * .then(({ regions, count, limit, offset }) => {
     *   console.log(regions)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/regions`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method retrieves a region by ID. It sends a request to the
     * [Get Region](https://docs.medusajs.com/api/admin#regions_getregionsid)
     * API route.
     *
     * @param id - The ID of the region to retrieve.
     * @param query - Configure the fields and relations to retrieve in the region.
     * @param headers - Headers to pass in the request.
     * @returns The region's details.
     *
     * @example
     * To retrieve a region by its ID:
     *
     * ```ts
     * sdk.admin.region.retrieve("region_123")
     * .then(({ region }) => {
     *   console.log(region)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.region.retrieve("region_123", {
     *   fields: "id,*countries"
     * })
     * .then(({ region }) => {
     *   console.log(region)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/regions/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a region by ID. It sends a request to the
     * [Delete Region](https://docs.medusajs.com/api/admin#regions_deleteregionsid)
     * API route.
     *
     * @param id - The ID of the region to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.region.delete("region_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/regions/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
} //# sourceMappingURL=region.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/reservation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Reservation {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a reservation by ID. It sends a request to the
     * [Get Reservation](https://docs.medusajs.com/api/admin#reservations_getreservationsid)
     * API route.
     *
     * @param id - The reservation's ID.
     * @param query - Configure the fields and relations to retrieve in the reservation.
     * @param headers - Headers to pass in the request.
     * @returns The reservation's details.
     *
     * @example
     * To retrieve a reservation by its ID:
     *
     * ```ts
     * sdk.admin.reservation.retrieve("res_123")
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.reservation.retrieve("res_123", {
     *   fields: "id,name"
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/reservations/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of reservations. It sends a request to the
     * [List Reservations](https://docs.medusajs.com/api/admin#reservations_getreservations)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of reservations.
     *
     * @example
     * To retrieve the list of reservations:
     *
     * ```ts
     * sdk.admin.reservation.list()
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.reservation.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each reservation:
     *
     * ```ts
     * sdk.admin.reservation.list({
     *   fields: "id,*inventory_item"
     * })
     * .then(({ reservations, count, limit, offset }) => {
     *   console.log(reservations)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch("/admin/reservations", {
                method: "GET",
                query,
                headers
            });
        });
    }
    /**
     * This method creates a reservation. It sends a request to the
     * [Create Reservation](https://docs.medusajs.com/api/admin#reservations_postreservations)
     * API route.
     *
     * @param body - The details of the reservation to create.
     * @param query - Configure the fields and relations to retrieve in the reservation.
     * @param headers - Headers to pass in the request.
     * @returns The reservation's details.
     *
     * @example
     * sdk.admin.reservation.create({
     *   inventory_item_id: "iitem_123",
     *   location_id: "sloc_123",
     *   quantity: 10,
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch("/admin/reservations", {
                method: "POST",
                body,
                query,
                headers
            });
        });
    }
    /**
     * This method updates a reservation. It sends a request to the
     * [Update Reservation](https://docs.medusajs.com/api/admin#reservations_postreservationsid)
     * API route.
     *
     * @param id - The reservation's ID.
     * @param body - The details of the reservation to update.
     * @param query - Configure the fields and relations to retrieve in the reservation.
     * @param headers - Headers to pass in the request.
     * @returns The reservation's details.
     *
     * @example
     * sdk.admin.reservation.update("res_123", {
     *   quantity: 20,
     * })
     * .then(({ reservation }) => {
     *   console.log(reservation)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/reservations/${id}`, {
                method: "POST",
                body,
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a reservation by ID. It sends a request to the
     * [Delete Reservation](https://docs.medusajs.com/api/admin#reservations_deletereservationsid)
     * API route.
     *
     * @param id - The reservation's ID.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.reservation.delete("res_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/reservations/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
}
const __TURBOPACK__default__export__ = Reservation;
 //# sourceMappingURL=reservation.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/return.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Return",
    ()=>Return
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Return {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a list of returns. It sends a request to the
     * [List Returns](https://docs.medusajs.com/api/admin#returns_getreturns)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of returns.
     *
     * @example
     * To retrieve the list of returns:
     *
     * ```ts
     * sdk.admin.return.list()
     * .then(({ returns, count, limit, offset }) => {
     *   console.log(returns)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.return.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ returns, count, limit, offset }) => {
     *   console.log(returns)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each return:
     *
     * ```ts
     * sdk.admin.return.list({
     *   fields: "id,*items"
     * })
     * .then(({ returns, count, limit, offset }) => {
     *   console.log(returns)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns`, {
                query,
                headers
            });
        });
    }
    /**
     * This method retrieves a return by ID. It sends a request to the
     * [Get Return](https://docs.medusajs.com/api/admin#returns_getreturnsid)
     * API route.
     *
     * @param id - The ID of the return to retrieve.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * To retrieve a return by its ID:
     *
     * ```ts
     * sdk.admin.return.retrieve("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.return.retrieve("return_123", {
     *   fields: "id,*items"
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method initiates a return request by creating a return. It sends a request to the
     * [Create Return](https://docs.medusajs.com/api/admin#returns_postreturns)
     * API route.
     *
     * @param body - The details of the return to create.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.initiateRequest({
     *   order_id: "order_123",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ initiateRequest(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels a return. It sends a request to the
     * [Cancel Return](https://docs.medusajs.com/api/admin#returns_postreturnsidcancel)
     * API route.
     *
     * @param id - The ID of the return to cancel.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.cancel("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ cancel(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/cancel`, {
                method: "POST",
                headers,
                query
            });
        });
    }
    /**
     * This method cancels a return request. It sends a request to the
     * [Cancel Return Request](https://docs.medusajs.com/api/admin#returns_deletereturnsidrequest)
     * API route.
     *
     * @param id - The ID of the return to cancel.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.cancelRequest("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ cancelRequest(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/request`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds an item to a return request. It sends a request to the
     * [Add Return Item](https://docs.medusajs.com/api/admin#returns_postreturnsidrequestitems)
     * API route.
     *
     * @param id - The ID of the return to add the item to.
     * @param body - The details of the item to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.addReturnItem("return_123", {
     *   id: "orlitem_123",
     *   quantity: 1,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ addReturnItem(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/request-items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates an item in a return request by the ID of the item's `RETURN_ITEM` action.
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property. For example,
     * `item.actions.find((action) => action.action === "RETURN_ITEM")?.id` is the ID of an item's `RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Update Requested Return Item](https://docs.medusajs.com/api/admin#returns_postreturnsidrequestitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the item in.
     * @param actionId - The ID of the item's `RETURN_ITEM` action.
     * @param body - The details of the item to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateReturnItem("return_123", "orchach_123", {
     *   quantity: 2,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ updateReturnItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/request-items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes an item from a return request by the ID of the item's `RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property. For example,
     * `item.actions.find((action) => action.action === "RETURN_ITEM")?.id` is the ID of an item's `RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Remove Item from Return](https://docs.medusajs.com/api/admin#returns_deletereturnsidrequestitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the item from.
     * @param actionId - The ID of the item's `RETURN_ITEM` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.removeReturnItem("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ removeReturnItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/request-items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds a shipping method to a return request. It sends a request to the
     * [Add Shipping Method to Return](https://docs.medusajs.com/api/admin#returns_postreturnsidshippingmethod)
     * API route.
     *
     * @param id - The ID of the return to add the shipping method to.
     * @param body - The details of the shipping method to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.addReturnShipping("return_123", {
     *   shipping_option_id: "so_123",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ addReturnShipping(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/shipping-method`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a shipping method in a return request by the ID of the shipping method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `shipping_method.actions.find((action) => action.action === "SHIPPING_ADD")?.id` is
     * the ID of a shipping method's `SHIPPING_ADD` action.
     *
     * This method sends a request to the
     * [Update Shipping Method in Return](https://docs.medusajs.com/api/admin#returns_postreturnsidshippingmethodaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the shipping method in.
     * @param actionId - The ID of the shipping method's `SHIPPING_ADD` action.
     * @param body - The details of the shipping method to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateReturnShipping("return_123", "orchach_123", {
     *   custom_amount: 100,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ updateReturnShipping(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/shipping-method/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes a shipping method from a return request by the ID of the shipping method's `SHIPPING_ADD` action.
     *
     * Every shipping method has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `shipping_method.actions.find((action) => action.action === "SHIPPING_ADD")?.id` is
     * the ID of a shipping method's `SHIPPING_ADD` action.
     *
     * This method sends a request to the
     * [Remove Shipping Method from Return](https://docs.medusajs.com/api/admin#returns_deletereturnsidshippingmethodaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the shipping method from.
     * @param actionId - The ID of the shipping method's `SHIPPING_ADD` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.deleteReturnShipping("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ deleteReturnShipping(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/shipping-method/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method updates a return request. It sends a request to the
     * [Update Return](https://docs.medusajs.com/api/admin#returns_postreturnsid)
     * API route.
     *
     * @param id - The ID of the return to update.
     * @param body - The details of the return to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateRequest("return_123", {
     *   location_id: "sloc_123",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ updateRequest(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method confirms a return request. The return's changes are applied on the inventory quantity of the return
     * items and the order only after the return has been confirmed as received using the
     * [Confirm Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveconfirm)
     * API route.
     *
     * This method sends a request to the
     * [Confirm Return Request](https://docs.medusajs.com/api/admin#returns_postreturnsidrequest)
     * API route.
     *
     * @param id - The ID of the return to confirm.
     * @param body - The details of the return to confirm.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.confirmRequest("return_123", {
     *   no_notification: true,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ confirmRequest(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/request`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method starts the return receival process. It sends a request to the
     * [Start Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceive)
     * API route.
     *
     * @param id - The ID of the return to start the receival process.
     * @param body - The details of the return to start the receival process.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.initiateReceive("return_123", {
     *   internal_note: "Return received by the customer",
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ initiateReceive(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/receive`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method adds received items to a return. These items will have the action `RECEIVE_RETURN_ITEM`.
     *
     * The method sends a request to the
     * [Add Received Items](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveitems)
     * API route.
     *
     * @param id - The ID of the return to add the received items to.
     * @param body - The details of the received items to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.receiveItems("return_123", {
     *   items: [
     *     { id: "item_123", quantity: 1 },
     *   ],
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ receiveItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/receive-items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a received item in the return by the ID of the item's `RECEIVE_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `received_item.actions.find((action) => action.action === "RECEIVE_RETURN_ITEM")?.id` is
     * the ID of a received item's `RECEIVE_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Update Received Item](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the received item in.
     * @param actionId - The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param body - The details of the received item to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateReceiveItem("return_123", "orchach_123", {
     *   quantity: 2,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ updateReceiveItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/receive-items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes a received item from the return by the ID of the item's `RECEIVE_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `received_item.actions.find((action) => action.action === "RECEIVE_RETURN_ITEM")?.id` is
     * the ID of a received item's `RECEIVE_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Remove Received Item](https://docs.medusajs.com/api/admin#returns_deletereturnsidreceiveitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the received item from.
     * @param actionId - The ID of the received item's `RECEIVE_RETURN_ITEM` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.removeReceiveItem("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ removeReceiveItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/receive-items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method adds damaged items to the return. These items will have the action `RECEIVE_DAMAGED_RETURN_ITEM`.
     *
     * A damaged item's quantity is not added back to the associated inventory item's quantity in the
     * stock location where the return is initiated from.
     *
     * The method sends a request to the
     * [Add Damaged Items](https://docs.medusajs.com/api/admin#returns_postreturnsiddismissitems)
     * API route.
     *
     * @param id - The ID of the return to add the damaged items to.
     * @param body - The details of the damaged items to add to the return.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.dismissItems("return_123", {
     *   items: [
     *     { id: "orli_123", quantity: 1 },
     *   ],
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ dismissItems(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/dismiss-items`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a damaged item in the return by the ID of the item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `item.actions.find((action) => action.action === "RECEIVE_DAMAGED_RETURN_ITEM")?.id` is
     * the ID of a damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Update Damaged Item](https://docs.medusajs.com/api/admin#returns_postreturnsiddismissitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to update the damaged item in.
     * @param actionId - The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param body - The details of the damaged item to update.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.updateDismissItem("return_123", "orchach_123", {
     *   quantity: 2,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ updateDismissItem(id, actionId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/dismiss-items/${actionId}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method removes a damaged item from the return by the ID of the item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * Every item has an `actions` property, whose value is an array of actions. You can check the action's name
     * using its `action` property, and use the value of the `id` property.
     *
     * For example, `item.actions.find((action) => action.action === "RECEIVE_DAMAGED_RETURN_ITEM")?.id` is
     * the ID of a damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     *
     * This method sends a request to the
     * [Remove Damaged Item](https://docs.medusajs.com/api/admin#returns_deletereturnsiddismissitemsaction_id)
     * API route.
     *
     * @param id - The ID of the return to remove the damaged item from.
     * @param actionId - The ID of the damaged item's `RECEIVE_DAMAGED_RETURN_ITEM` action.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.removeDismissItem("return_123", "orchach_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ removeDismissItem(id, actionId, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/dismiss-items/${actionId}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
    /**
     * This method confirms the return receival. It sends a request to the
     * [Confirm Return Receival](https://docs.medusajs.com/api/admin#returns_postreturnsidreceiveconfirm)
     * API route.
     *
     * @param id - The ID of the return to confirm the receival of.
     * @param body - The details of the receival confirmation.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.confirmReceive("return_123", {
     *   no_notification: true,
     * })
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ confirmReceive(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/receive/confirm`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method cancels a return receival. It sends a request to the
     * [Cancel Return Receival](https://docs.medusajs.com/api/admin#returns_deletereturnsidreceive)
     * API route.
     *
     * @param id - The ID of the return to cancel the receival of.
     * @param query - Configure the fields and relations to retrieve in the return.
     * @param headers - Headers to pass in the request.
     * @returns The return's details.
     *
     * @example
     * sdk.admin.return.cancelReceive("return_123")
     * .then(({ return }) => {
     *   console.log(return)
     * })
     */ cancelReceive(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/returns/${id}/receive`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=return.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/return-reason.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReturnReason",
    ()=>ReturnReason
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ReturnReason {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a list of return reasons. It sends a request to the
     * [List Return Reasons](https://docs.medusajs.com/api/admin#return-reasons_returnreason_schema)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of return reasons.
     *
     * @example
     * To retrieve the list of return reasons:
     *
     * ```ts
     * sdk.admin.returnReason.list()
     * .then(({ return_reasons, count, limit, offset }) => {
     *   console.log(return_reasons)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.returnReason.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ return_reasons, count, limit, offset }) => {
     *   console.log(return_reasons)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each return reason:
     *
     * ```ts
     * sdk.admin.returnReason.list({
     *   fields: "id,value"
     * })
     * .then(({ return_reasons, count, limit, offset }) => {
     *   console.log(return_reasons)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch("/admin/return-reasons", {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a return reason by ID. It sends a request to the
     * [Get Return Reason](https://docs.medusajs.com/api/admin#return-reasons_getreturnreasonsid)
     * API route.
     *
     * @param id - The return reason's ID.
     * @param query - Configure the fields and relations to retrieve in the return reason.
     * @param headers - Headers to pass in the request.
     * @returns The return reason's details.
     *
     * @example
     * To retrieve a return reason by its ID:
     *
     * ```ts
     * sdk.admin.returnReason.retrieve("ret_123")
     * .then(({ return_reason }) => {
     *   console.log(return_reason)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.returnReason.retrieve("ret_123", {
     *   fields: "id,value"
     * })
     * .then(({ return_reason }) => {
     *   console.log(return_reason)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/return-reasons/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method creates a return reason. It sends a request to the
     * [Create Return Reason](https://docs.medusajs.com/api/admin#return-reasons_postreturnreasons)
     * API route.
     *
     * @param body - The details of the return reason to create.
     * @param query - Configure the fields and relations to retrieve in the return reason.
     * @param headers - Headers to pass in the request.
     * @returns The return reason's details.
     *
     * @example
     * sdk.admin.returnReason.create({
     *   value: "refund",
     *   label: "Refund",
     * })
     * .then(({ return_reason }) => {
     *   console.log(return_reason)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/return-reasons`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a return reason. It sends a request to the
     * [Update Return Reason](https://docs.medusajs.com/api/admin#return-reasons_postreturnreasonsid)
     * API route.
     *
     * @param id - The return reason's ID.
     * @param body - The details of the return reason to update.
     * @param query - Configure the fields and relations to retrieve in the return reason.
     * @param headers - Headers to pass in the request.
     * @returns The return reason's details.
     *
     * @example
     * sdk.admin.returnReason.update("ret_123", {
     *   value: "refund",
     *   label: "Refund",
     * })
     * .then(({ return_reason }) => {
     *   console.log(return_reason)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/return-reasons/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a return reason. It sends a request to the
     * [Delete Return Reason](https://docs.medusajs.com/api/admin#return-reasons_deletereturnreasonsid)
     * API route.
     *
     * @param id - The return reason's ID.
     * @param query - Query parameters to pass to the request.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.returnReason.delete("ret_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/return-reasons/${id}`, {
                method: "DELETE",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=return-reason.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/sales-channel.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalesChannel",
    ()=>SalesChannel
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class SalesChannel {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a new sales channel. It sends a request to the
     * [Create Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannels)
     * API route.
     *
     * @param body - The details of the sales channel to create.
     * @param query - Configure the fields and relations to retrieve in the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.create({
     *   name: "Storefront",
     * })
     * .then(({ salesChannel }) => {
     *   console.log(salesChannel)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/sales-channels`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a sales channel. It sends a request to the
     * [Update Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsid)
     * API route.
     *
     * @param id - The ID of the sales channel to update.
     * @param body - The details of the sales channel to update.
     * @param query - Configure the fields and relations to retrieve in the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.update(
     *   "sc_123",
     *   {
     *     name: "Storefront",
     *   }
     * )
     * .then(({ salesChannel }) => {
     *   console.log(salesChannel)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/sales-channels/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a sales channel. It sends a request to the
     * [Delete Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_deletesaleschannelsid)
     * API route.
     *
     * @param id - The ID of the sales channel to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.salesChannel.delete("sc_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/sales-channels/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a sales channel. It sends a request to the
     * [Retrieve Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_getsaleschannelsid)
     * API route.
     *
     * @param id - The ID of the sales channel to retrieve.
     * @param query - Configure the fields and relations to retrieve in the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * To retrieve a sales channel by its ID:
     *
     * ```ts
     * sdk.admin.salesChannel.retrieve("sc_123")
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.salesChannel.retrieve("sc_123", {
     *   fields: "id,*products"
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/sales-channels/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of sales channels. It sends a request to the
     * [List Sales Channels](https://docs.medusajs.com/api/admin#sales-channels_getsaleschannels)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of sales channels.
     *
     * @example
     * To retrieve the list of sales channels:
     *
     * ```ts
     * sdk.admin.salesChannel.list()
     * .then(({ sales_channels, count, limit, offset }) => {
     *   console.log(sales_channels)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.salesChannel.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ sales_channels, count, limit, offset }) => {
     *   console.log(sales_channels)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each sales channel:
     *
     * ```ts
     * sdk.admin.salesChannel.list({
     *   fields: "id,*products"
     * })
     * .then(({ sales_channels, count, limit, offset }) => {
     *   console.log(sales_channels)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/sales-channels`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method manages the products in a sales channel to add or remove them. It sends a request to the
     * [Manage Products in Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsidproducts)
     * API route.
     *
     * @param id - The ID of the sales channel to manage the products for.
     * @param body - The details of the products to add or remove from the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.updateProducts("sc_123", {
     *   add: ["prod_123", "prod_456"],
     *   remove: ["prod_789"]
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     *
     * @deprecated Use {@link batchProducts} instead
     */ updateProducts(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/sales-channels/${id}/products`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method manages the products in a sales channel to add or remove them. It sends a request to the
     * [Manage Products in Sales Channel](https://docs.medusajs.com/api/admin#sales-channels_postsaleschannelsidproducts)
     * API route.
     *
     * @param id - The ID of the sales channel to manage the products for.
     * @param body - The details of the products to add or remove from the sales channel.
     * @param headers - Headers to pass in the request.
     * @returns The sales channel's details.
     *
     * @example
     * sdk.admin.salesChannel.batchProducts("sc_123", {
     *   add: ["prod_123", "prod_456"],
     *   remove: ["prod_789"]
     * })
     * .then(({ sales_channel }) => {
     *   console.log(sales_channel)
     * })
     */ batchProducts(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/sales-channels/${id}/products`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=sales-channel.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-option.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShippingOption",
    ()=>ShippingOption
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ShippingOption {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a shipping option. It sends a request to the
     * [Create Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptions)
     * API route.
     *
     * @param body - The details of the shipping option to create.
     * @param query - Configure the fields and relations to retrieve in the shipping option.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * sdk.admin.shippingOption.create({
     *   name: "Standard Shipping",
     *   profile_id: "shp_123",
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-options`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a shipping option. It sends a request to the
     * [Get Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_getshippingoptionsid)
     * API route.
     *
     * @param id - The ID of the shipping option to retrieve.
     * @param query - Configure the fields and relations to retrieve in the shipping option.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * To retrieve a shipping option by its ID:
     *
     * ```ts
     * sdk.admin.shippingOption.retrieve("so_123")
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.shippingOption.retrieve("so_123", {
     *   fields: "id,*service_zone"
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-options/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method updates a shipping option. It sends a request to the
     * [Update Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptionsid)
     * API route.
     *
     * @param id - The ID of the shipping option to update.
     * @param body - The details of the shipping option to update.
     * @param query - Configure the fields and relations to retrieve in the shipping option.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * sdk.admin.shippingOption.update("so_123", {
     *   name: "Standard Shipping",
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-options/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a shipping option. It sends a request to the
     * [Delete Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_deleteshippingoptionsid)
     * API route.
     *
     * @param id - The ID of the shipping option to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.shippingOption.delete("so_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-options/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a list of shipping options. It sends a request to the
     * [List Shipping Options](https://docs.medusajs.com/api/admin#shipping-options_getshippingoptions)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of shipping options.
     *
     * @example
     * To retrieve the list of shipping options:
     *
     * ```ts
     * sdk.admin.shippingOption.list()
     * .then(({ shipping_options, count, limit, offset }) => {
     *   console.log(shipping_options)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.shippingOption.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ shipping_options, count, limit, offset }) => {
     *   console.log(shipping_options)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each shipping option:
     *
     * ```ts
     * sdk.admin.shippingOption.list({
     *   fields: "id,*service_zone"
     * })
     * .then(({ shipping_options, count, limit, offset }) => {
     *   console.log(shipping_options)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-options`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method manages the rules of a shipping option to create, update, or remove them. It sends a request to the
     * [Manage Rules of a Shipping Option](https://docs.medusajs.com/api/admin#shipping-options_postshippingoptionsidrulesbatch)
     * API route.
     *
     * @param id - The ID of the shipping option to manage the rules for.
     * @param body - The details of the shipping option rules to manage.
     * @param headers - Headers to pass in the request.
     * @returns The shipping option's details.
     *
     * @example
     * sdk.admin.shippingOption.updateRules("so_123", {
     *   create: [{ attribute: "enabled_in_store", operator: "eq", value: "true" }],
     * })
     * .then(({ shipping_option }) => {
     *   console.log(shipping_option)
     * })
     */ updateRules(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-options/${id}/rules/batch`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=shipping-option.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-profile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShippingProfile",
    ()=>ShippingProfile
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ShippingProfile {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a new shipping profile. It sends a request to the
     * [Create Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_postshippingprofiles)
     * API route.
     *
     * @param body - The details of the shipping profile to create.
     * @param query - Configure the fields and relations to retrieve in the shipping profile.
     * @param headers - Headers to pass in the request.
     * @returns The shipping profile's details.
     *
     * @example
     * sdk.admin.shippingProfile.create({
     *   name: "Default Shipping Profile",
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-profiles`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a shipping profile. It sends a request to the
     * [Update Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_postshippingprofilesid)
     * API route.
     *
     * @param id - The ID of the shipping profile to update.
     * @param body - The details of the shipping profile to update.
     * @param query - Configure the fields and relations to retrieve in the shipping profile.
     * @param headers - Headers to pass in the request.
     * @returns The shipping profile's details.
     *
     * @example
     * sdk.admin.shippingProfile.update("sp_123", {
     *   name: "Updated Shipping Profile",
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a shipping profile. It sends a request to the
     * [Delete Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_deleteshippingprofilesid)
     * API route.
     *
     * @param id - The ID of the shipping profile to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.shippingProfile.delete("sp_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a list of shipping profiles. It sends a request to the
     * [List Shipping Profiles](https://docs.medusajs.com/api/admin#shipping-profiles_getshippingprofiles)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of shipping profiles.
     *
     * @example
     * To retrieve the list of shipping profiles:
     *
     * ```ts
     * sdk.admin.shippingProfile.list()
     * .then(({ shipping_profiles, count, limit, offset }) => {
     *   console.log(shipping_profiles)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.shippingProfile.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ shipping_profiles, count, limit, offset }) => {
     *   console.log(shipping_profiles)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each shipping profile:
     *
     * ```ts
     * sdk.admin.shippingProfile.list({
     *   fields: "id,name"
     * })
     * .then(({ shipping_profiles, count, limit, offset }) => {
     *   console.log(shipping_profiles)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-profiles`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a shipping profile. It sends a request to the
     * [Get Shipping Profile](https://docs.medusajs.com/api/admin#shipping-profiles_getshippingprofilesid)
     * API route.
     *
     * @param id - The ID of the shipping profile to retrieve.
     * @param query - Configure the fields and relations to retrieve in the shipping profile.
     * @param headers - Headers to pass in the request.
     * @returns The shipping profile's details.
     *
     * @example
     * To retrieve a shipping profile by its ID:
     *
     * ```ts
     * sdk.admin.shippingProfile.retrieve("sp_123")
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.shippingProfile.retrieve("sp_123", {
     *   fields: "id,name"
     * })
     * .then(({ shipping_profile }) => {
     *   console.log(shipping_profile)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/shipping-profiles/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=shipping-profile.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/stock-location.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StockLocation",
    ()=>StockLocation
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StockLocation {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a new stock location. It sends a request to the
     * [Create Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocations)
     * API route.
     *
     * @param body - The details of the stock location to create.
     * @param query - Configure the fields and relations to retrieve in the stock location.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.create({
     *   name: "Main Warehouse",
     *   address_id: "addr_123",
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a stock location. It sends a request to the
     * [Update Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsid)
     * API route.
     *
     * @param id - The ID of the stock location to update.
     * @param body - The details of the stock location to update.
     * @param query - Configure the fields and relations to retrieve in the stock location.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.update("sloc_123", {
     *   name: "European Warehouse",
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a stock location. It sends a request to the
     * [Delete Stock Location](https://docs.medusajs.com/api/admin#stock-locations_deletestocklocationsid)
     * API route.
     *
     * @param id - The ID of the stock location to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.stockLocation.delete("sloc_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a stock location. It sends a request to the
     * [Get Stock Location](https://docs.medusajs.com/api/admin#stock-locations_getstocklocationsid)
     * API route.
     *
     * @param id - The ID of the stock location to retrieve.
     * @param query - Configure the fields and relations to retrieve in the stock location.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * To retrieve a stock location by its ID:
     *
     * ```ts
     * sdk.admin.stockLocation.retrieve("sloc_123")
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.stockLocation.retrieve("sloc_123", {
     *   fields: "id,*sales_channels"
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of stock locations. It sends a request to the
     * [List Stock Locations](https://docs.medusajs.com/api/admin#stock-locations_getstocklocations)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of stock locations.
     *
     * @example
     * To retrieve the list of stock locations:
     *
     * ```ts
     * sdk.admin.stockLocation.list()
     * .then(({ stock_locations, count, limit, offset }) => {
     *   console.log(stock_locations)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.stockLocation.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ stock_locations, count, limit, offset }) => {
     *   console.log(stock_locations)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each stock location:
     *
     * ```ts
     * sdk.admin.stockLocation.list({
     *   fields: "id,*sales_channels"
     * })
     * .then(({ stock_locations, count, limit, offset }) => {
     *   console.log(stock_locations)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method manages the sales channels of a stock location by adding or removing them. It sends a request to the
     * [Manage Stock Location Sales Channels](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidsaleschannels)
     * API route.
     *
     * @param id - The ID of the stock location to update the sales channels for.
     * @param body - The details of the sales channels to update.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.updateSalesChannels("sloc_123", {
     *   add: ["sc_123"],
     *   remove: ["sc_456"],
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */ updateSalesChannels(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations/${id}/sales-channels`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method adds a new fulfillment set to a stock location. It sends a request to the
     * [Add Fulfillment Set to Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidfulfillmentsets)
     * API route.
     *
     * @param id - The ID of the stock location to add the fulfillment set to.
     * @param body - The details of the fulfillment set to add.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.createFulfillmentSet("sloc_123", {
     *   name: "Shipping",
     *   type: "shipping",
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */ createFulfillmentSet(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations/${id}/fulfillment-sets`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method manages the fulfillment providers of a stock location by adding or removing them. It sends a request to the
     * [Manage Fulfillment Providers of Stock Location](https://docs.medusajs.com/api/admin#stock-locations_poststocklocationsidfulfillmentproviders)
     * API route.
     *
     * @param id - The ID of the stock location to manage the fulfillment providers for.
     * @param body - The details of the fulfillment providers to manage.
     * @param headers - Headers to pass in the request.
     * @returns The stock location's details.
     *
     * @example
     * sdk.admin.stockLocation.updateFulfillmentProviders("sloc_123", {
     *   add: ["fp_manual_manual"],
     *   remove: ["fp_shipstation_shipstation"],
     * })
     * .then(({ stock_location }) => {
     *   console.log(stock_location)
     * })
     */ updateFulfillmentProviders(id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stock-locations/${id}/fulfillment-providers`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=stock-location.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/store.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Store",
    ()=>Store
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Store {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a store by its ID. It sends a request to the
     * [Get Store](https://docs.medusajs.com/api/admin#stores_getstoresid)
     * API route.
     *
     * @param id - The ID of the store to retrieve.
     * @param query - Configure the fields and relations to retrieve in the store.
     * @param headers - Headers to pass in the request.
     * @returns The store's details.
     *
     * @example
     * To retrieve a store by its ID:
     *
     * ```ts
     * sdk.admin.store.retrieve("store_123")
     * .then(({ store }) => {
     *   console.log(store)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.store.retrieve("store_123", {
     *   fields: "id,*supported_currencies"
     * })
     * .then(({ store }) => {
     *   console.log(store)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stores/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of stores. It sends a request to the
     * [List Stores](https://docs.medusajs.com/api/admin#stores_getstores)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of stores.
     *
     * @example
     * To retrieve the list of stores:
     *
     * ```ts
     * sdk.admin.store.list()
     * .then(({ stores, count, limit, offset }) => {
     *   console.log(stores)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.store.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ stores, count, limit, offset }) => {
     *   console.log(stores)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each store:
     *
     * ```ts
     * sdk.admin.store.list({
     *   fields: "id,*supported_currencies"
     * })
     * .then(({ stores, count, limit, offset }) => {
     *   console.log(stores)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stores`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method updates a store. It sends a request to the
     * [Update Store](https://docs.medusajs.com/api/admin#stores_poststoresid)
     * API route.
     *
     * @param id - The ID of the store to update.
     * @param body - The details of the store to update.
     * @param query - Configure the fields and relations to retrieve in the store.
     * @param headers - Headers to pass in the request.
     * @returns The store's details.
     *
     * @example
     * sdk.admin.store.update("store_123", {
     *   name: "My Store",
     * })
     * .then(({ store }) => {
     *   console.log(store)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/stores/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
} //# sourceMappingURL=store.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/tax-provider.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaxProvider",
    ()=>TaxProvider
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const taxProviderUrl = "/admin/tax-providers";
class TaxProvider {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a list of tax providers. It sends a request to the
     * [List Tax Providers](https://docs.medusajs.com/api/admin#tax-providers_gettaxproviders)
     * API route.
     *
     * @since 2.8.0
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of tax providers.
     *
     * @example
     * To retrieve the list of tax providers:
     *
     * ```ts
     * sdk.admin.taxProvider.list()
     * .then(({ tax_providers, count, limit, offset }) => {
     *   console.log(tax_providers)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.taxProvider.list({
     *   limit: 10,
     *   offset: 10,
     * })
     * .then(({ tax_providers, count, limit, offset }) => {
     *   console.log(tax_providers)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each products:
     *
     * ```ts
     * sdk.admin.taxProvider.list({
     *   fields: "id,*regions"
     * })
     * .then(({ tax_providers, count, limit, offset }) => {
     *   console.log(tax_providers)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(taxProviderUrl, {
                method: "GET",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=tax-provider.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/tax-rate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaxRate",
    ()=>TaxRate
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const taxRateUrl = "/admin/tax-rates";
class TaxRate {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a tax rate. It sends a request to the
     * [Create Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_posttaxrates)
     * API route.
     *
     * @param body - The details of the tax rate to create.
     * @param query - Configure the fields and relations to retrieve in the tax rate.
     * @param headers - Headers to pass in the request.
     * @returns The tax rate's details.
     *
     * @example
     * sdk.admin.taxRate.create({
     *   name: "VAT",
     *   tax_region_id: "txreg_123",
     *   code: "VAT",
     *   rate: 2, // 2%
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(taxRateUrl, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a tax rate. It sends a request to the
     * [Update Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_posttaxratesid)
     * API route.
     *
     * @param id - The ID of the tax rate to update.
     * @param body - The details of the tax rate to update.
     * @param query - Configure the fields and relations to retrieve in the tax rate.
     * @param headers - Headers to pass in the request.
     * @returns The tax rate's details.
     *
     * @example
     * sdk.admin.taxRate.update("txrat_123", {
     *   name: "VAT",
     *   code: "VAT",
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`${taxRateUrl}/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a tax rate. It sends a request to the
     * [Delete Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_deletetaxratesid)
     * API route.
     *
     * @param id - The ID of the tax rate to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.taxRate.delete("txrat_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`${taxRateUrl}/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a tax rate. It sends a request to the
     * [Get Tax Rate](https://docs.medusajs.com/api/admin#tax-rates_gettaxratesid)
     * API route.
     *
     * @param id - The ID of the tax rate to retrieve.
     * @param query - Configure the fields and relations to retrieve in the tax rate.
     * @param headers - Headers to pass in the request.
     * @returns The tax rate's details.
     *
     * @example
     * To retrieve a tax rate by its ID:
     *
     * ```ts
     * sdk.admin.taxRate.retrieve("txrat_123")
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.taxRate.retrieve("txrat_123", {
     *   fields: "id,*tax_region"
     * })
     * .then(({ tax_rate }) => {
     *   console.log(tax_rate)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`${taxRateUrl}/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of tax rates. It sends a request to the
     * [List Tax Rates](https://docs.medusajs.com/api/admin#tax-rates_gettaxrates)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of tax rates.
     *
     * @example
     * To retrieve the list of tax rates:
     *
     * ```ts
     * sdk.admin.taxRate.list()
     * .then(({ tax_rates, count, limit, offset }) => {
     *   console.log(tax_rates)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.taxRate.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ tax_rates, count, limit, offset }) => {
     *   console.log(tax_rates)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each tax rate:
     *
     * ```ts
     * sdk.admin.taxRate.list({
     *   fields: "id,*tax_region"
     * })
     * .then(({ tax_rates, count, limit, offset }) => {
     *   console.log(tax_rates)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(taxRateUrl, {
                method: "GET",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=tax-rate.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/tax-region.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaxRegion",
    ()=>TaxRegion
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const taxRegionUrl = "/admin/tax-regions";
class TaxRegion {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a tax region. It sends a request to the
     * [Create Tax Region](https://docs.medusajs.com/api/admin#tax-regions_posttaxregions)
     * API route.
     *
     * @param body - The details of the tax region to create.
     * @param query - Configure the fields and relations to retrieve in the tax region.
     * @param headers - Headers to pass in the request.
     * @returns The tax region's details.
     *
     * @example
     * sdk.admin.taxRegion.create({
     *   country_code: "us",
     *   province_code: "ca",
     *   default_tax_rate: {
     *     code: "VAT",
     *     name: "VAT",
     *     rate: 20, // 20%
     *     is_combinable: true,
     *   },
     * })
     * .then(({ tax_region }) => {
     *   console.log(tax_region)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(taxRegionUrl, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a tax region. It sends a request to the
     * [Update Tax Region](https://docs.medusajs.com/api/admin#tax-regions_posttaxregionsid)
     * API route.
     *
     * @since 2.8.0
     *
     * @param id - The ID of the tax region to update.
     * @param body - The details of the tax region to update.
     * @param query - Configure the fields and relations to retrieve in the tax region.
     * @param headers - Headers to pass in the request.
     * @returns The tax region's details.
     *
     * @example
     * sdk.admin.taxRegion.update("txreg_123", {
     *   province_code: "ca",
     * })
     * .then(({ tax_region }) => {
     *   console.log(tax_region)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method deletes a tax region. It sends a request to the
     * [Delete Tax Region](https://docs.medusajs.com/api/admin#tax-regions_deletetaxregionsid)
     * API route.
     *
     * @param id - The ID of the tax region to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.taxRegion.delete("txreg_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves a tax region. It sends a request to the
     * [Get Tax Region](https://docs.medusajs.com/api/admin#tax-regions_gettaxregionsid)
     * API route.
     *
     * @param id - The ID of the tax region to retrieve.
     * @param query - Configure the fields and relations to retrieve in the tax region.
     * @param headers - Headers to pass in the request.
     * @returns The tax region's details.
     *
     * @example
     * To retrieve a tax region by its ID:
     *
     * ```ts
     * sdk.admin.taxRegion.retrieve("txreg_123")
     * .then(({ tax_region }) => {
     *   console.log(tax_region)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.taxRegion.retrieve("txreg_123", {
     *   fields: "id,*tax_rates"
     * })
     * .then(({ tax_region }) => {
     *   console.log(tax_region)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`${taxRegionUrl}/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a list of tax regions. It sends a request to the
     * [List Tax Regions](https://docs.medusajs.com/api/admin#tax-regions_gettaxregions)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of tax regions.
     *
     * @example
     * To retrieve the list of tax regions:
     *
     * ```ts
     * sdk.admin.taxRegion.list()
     * .then(({ tax_regions, count, limit, offset }) => {
     *   console.log(tax_regions)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.taxRegion.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ tax_regions, count, limit, offset }) => {
     *   console.log(tax_regions)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each tax region:
     *
     * ```ts
     * sdk.admin.taxRegion.list({
     *   fields: "id,*tax_rates"
     * })
     * .then(({ tax_regions, count, limit, offset }) => {
     *   console.log(tax_regions)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(taxRegionUrl, {
                method: "GET",
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=tax-region.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/upload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>Upload
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Upload {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a new upload. It sends a request to the
     * [Upload Files](https://docs.medusajs.com/api/admin#uploads_postuploads)
     * API route.
     *
     * @param body - The details of the files to upload.
     * @param query - Configure the fields and relations to retrieve in the uploaded files.
     * @param headers - Headers to pass in the request.
     * @returns The upload files' details.
     *
     * @privateRemarks
     *
     * Note: The creation/upload flow be made more advanced, with support for streaming and progress, but for now we keep it simple
     *
     * @example
     * sdk.admin.upload.create(
     *   {
     *     files: [
     *        // file uploaded as a binary string
     *       {
     *         name: "test.txt",
     *         content: "test", // Should be the binary string of the file
     *       },
     *       // file uploaded as a File object
     *       new File(["test"], "test.txt", { type: "text/plain" })
     *     ],
     *   }
     * )
     * .then(({ files }) => {
     *   console.log(files)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            const form = new FormData();
            if (body instanceof FileList) {
                Array.from(body).forEach((file)=>{
                    form.append("files", file);
                });
            } else {
                body.files.forEach((file)=>{
                    form.append("files", "content" in file ? new Blob([
                        file.content
                    ], {
                        type: "text/plain"
                    }) : file, file.name);
                });
            }
            return this.client.fetch(`/admin/uploads`, {
                method: "POST",
                headers: Object.assign(Object.assign({}, headers), {
                    // Let the browser determine the content type.
                    "content-type": null
                }),
                body: form,
                query
            });
        });
    }
    /**
     * This method retrieves a file's details by its ID. It sends a request to the
     * [Get File](https://docs.medusajs.com/api/admin#uploads_getuploadsid)
     * API route.
     *
     * @param id - The ID of the file to retrieve.
     * @param query - Query parameters to pass in the request.
     * @param headers - Headers to pass in the request.
     * @returns The file's details.
     *
     * @example
     * sdk.admin.upload.retrieve("test.txt")
     * .then(({ file }) => {
     *   console.log(file)
     * })
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/uploads/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a file by its ID from the configured File Module Provider. It sends a request to the
     * [Delete File](https://docs.medusajs.com/api/admin#uploads_deleteuploadsid)
     * API route.
     *
     * @param id - The ID of the file to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.upload.delete("test.txt")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/uploads/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method creates a presigned URL for a file upload. It sends a request to the
     * `/admin/uploads/presigned-urls` API route.
     *
     * @param body - The details of the file to upload.
     * @param query - Query parameters to pass in the request.
     * @param headers - Headers to pass in the request.
     * @returns The presigned URL for the file upload.
     *
     * @example
     * sdk.admin.upload.presignedUrl({
     *   name: "test.txt",
     *   size: 1000,
     *   type: "text/plain",
     * }))
     */ presignedUrl(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/uploads/presigned-urls`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
} //# sourceMappingURL=upload.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/user.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>User
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class User {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method updates a user. It sends a request to the
     * [Update User](https://docs.medusajs.com/api/admin#users_postusersid)
     * API route.
     *
     * @param id - The ID of the user to update.
     * @param body - The details of the user to update.
     * @param query - Configure the fields and relations to retrieve in the tax region.
     * @param headers - Headers to pass in the request.
     * @returns The user's details.
     *
     * @example
     * sdk.admin.user.update("user_123", {
     *   first_name: "John",
     *   last_name: "Doe",
     * })
     * .then(({ user }) => {
     *   console.log(user)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/users/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a list of users. It sends a request to the
     * [List Users](https://docs.medusajs.com/api/admin#users_getusers)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of users.
     *
     * @example
     * To retrieve the list of users:
     *
     * ```ts
     * sdk.admin.user.list()
     * .then(({ users, count, limit, offset }) => {
     *   console.log(users)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.user.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ users, count, limit, offset }) => {
     *   console.log(users)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each user:
     *
     * ```ts
     * sdk.admin.user.list({
     *   fields: "id,email"
     * })
     * .then(({ users, count, limit, offset }) => {
     *   console.log(users)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/users`, {
                headers,
                query: queryParams
            });
        });
    }
    /**
     * This method retrieves a user. It sends a request to the
     * [Get User](https://docs.medusajs.com/api/admin#users_getusersid)
     * API route.
     *
     * @param id - The ID of the user to retrieve.
     * @param query - Configure the fields and relations to retrieve in the user.
     * @param headers - Headers to pass in the request.
     * @returns The user's details.
     *
     * @example
     * To retrieve a user by its ID:
     *
     * ```ts
     * sdk.admin.user.retrieve("user_123")
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.user.retrieve("user_123", {
     *   fields: "id,email"
     * })
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/users/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a user. It sends a request to the
     * [Delete User](https://docs.medusajs.com/api/admin#users_deleteusersid)
     * API route.
     *
     * @param id - The ID of the user to delete.
     * @param headers - Headers to pass in the request.
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.user.delete("user_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/users/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * This method retrieves the currently authenticated user. It sends a request to the
     * [Get Logged-In User](https://docs.medusajs.com/api/admin#users_getusersme)
     * API route.
     *
     * @param query - Configure the fields and relations to retrieve in the user.
     * @param headers - Headers to pass in the request.
     * @returns The user's details.
     *
     * @example
     * To retrieve the currently authenticated user:
     *
     * ```ts
     * sdk.admin.user.me()
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.user.me({
     *   fields: "id,email"
     * })
     * .then(({ user }) => {
     *   console.log(user)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ me(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/users/me`, {
                query,
                headers
            });
        });
    }
} //# sourceMappingURL=user.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/views.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Views",
    ()=>Views
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Views {
    constructor(client){
        this.client = client;
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ columns(entity, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/columns`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ listConfigurations(entity, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/configurations`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ createConfiguration(entity, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/configurations`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ retrieveConfiguration(entity, id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/configurations/${id}`, {
                method: "GET",
                headers,
                query
            });
        });
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ updateConfiguration(entity, id, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/configurations/${id}`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ deleteConfiguration(entity, id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/configurations/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ retrieveActiveConfiguration(entity, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/configurations/active`, {
                method: "GET",
                headers
            });
        });
    }
    /**
     * @since 2.10.3
     * @featureFlag view_configurations
     */ setActiveConfiguration(entity, body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/views/${entity}/configurations/active`, {
                method: "POST",
                headers,
                body
            });
        });
    }
} //# sourceMappingURL=views.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/workflow-execution.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkflowExecution",
    ()=>WorkflowExecution
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class WorkflowExecution {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a list of workflow executions. It sends a request to the
     * [List Workflow Executions](https://docs.medusajs.com/api/admin#workflows-executions_getworkflowsexecutions)
     * API route.
     *
     * @param queryParams - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The list of workflow executions.
     *
     * @example
     * To retrieve the list of workflow executions:
     *
     * ```ts
     * sdk.admin.workflowExecution.list()
     * .then(({ workflow_executions, count, limit, offset }) => {
     *   console.log(workflow_executions)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.workflowExecution.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ workflow_executions, count, limit, offset }) => {
     *   console.log(workflow_executions)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each workflow execution:
     *
     * ```ts
     * sdk.admin.workflowExecution.list({
     *   fields: "id,name"
     * })
     * .then(({ workflow_executions, count, limit, offset }) => {
     *   console.log(workflow_executions)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/admin#select-fields-and-relations).
     */ list(queryParams, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/workflows-executions`, {
                query: queryParams,
                headers
            });
        });
    }
    /**
     * This method retrieves a workflow execution by its ID. It sends a request to the
     * [Get Workflow Execution](https://docs.medusajs.com/api/admin#workflows-executions_getworkflowsexecutionsworkflow_idtransaction_id)
     * API route.
     *
     * @param id - The ID of the workflow execution to retrieve.
     * @param headers - Headers to pass in the request.
     * @returns The workflow execution's details.
     *
     * @example
     * sdk.admin.workflowExecution.retrieve("wrk_123")
     * .then(({ workflow_execution }) => {
     *   console.log(workflow_execution)
     * })
     */ retrieve(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/workflows-executions/${id}`, {
                headers
            });
        });
    }
} //# sourceMappingURL=workflow-execution.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-option-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShippingOptionType",
    ()=>ShippingOptionType
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ShippingOptionType {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method creates a shipping option type. It sends a request to the
     * [Create Shipping Option Type](https://docs.medusajs.com/api/admin#shipping-option-types_postshippingoptiontypes)
     * API route.
     *
     * @param body - The shipping option type's details.
     * @param query - Configure the fields to retrieve in the shipping option type.
     * @param headers - Headers to pass in the request
     * @returns The shipping option type's details.
     *
     * @example
     * sdk.admin.shippingOptionType.create({
     *   label: "Standard",
     *   code: "standard",
     *   description: "Ship in 2-3 days."
     * })
     * .then(({ shipping_option_type }) => {
     *   console.log(shipping_option_type)
     * })
     */ create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/shipping-option-types`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method updates a shipping option type. It sends a request to the
     * [Update Shipping Option Type](https://docs.medusajs.com/api/admin#shipping-option-types_postshippingoptiontypesid)
     * API route.
     *
     * @param id - The shipping option type's ID.
     * @param body - The data to update in the shipping option type.
     * @param query - Configure the fields to retrieve in the shipping option type.
     * @param headers - Headers to pass in the request
     * @returns The shipping option type's details.
     *
     * @example
     * sdk.admin.shippingOptionType.update("sotype_123", {
     *   code: "express"
     * })
     * .then(({ shipping_option_type }) => {
     *   console.log(shipping_option_type)
     * })
     */ update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/shipping-option-types/${id}`, {
                method: "POST",
                headers,
                body,
                query
            });
        });
    }
    /**
     * This method retrieves a paginated list of shipping option types. It sends a request to the
     * [List Shipping Option Types](https://docs.medusajs.com/api/admin#shipping-option-types_getshippingoptiontypes) API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of shipping option types.
     *
     * @example
     * To retrieve the list of shipping option types:
     *
     * ```ts
     * sdk.admin.shippingOptionType.list()
     * .then(({ shipping_option_types, count, limit, offset }) => {
     *   console.log(shipping_option_types)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.shippingOptionType.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ shipping_option_types, count, limit, offset }) => {
     *   console.log(shipping_option_types)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each shipping option type:
     *
     * ```ts
     * sdk.admin.shippingOptionType.list({
     *   fields: "id,*shippingOptions"
     * })
     * .then(({ shipping_option_types, count, limit, offset }) => {
     *   console.log(shipping_option_types)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/shipping-option-types`, {
                headers,
                query: query
            });
        });
    }
    /**
     * This method retrieves a shipping option type by its ID. It sends a request to the
     * [Get Shipping Option Type](https://docs.medusajs.com/api/admin#shipping-option-types_getshippingoptiontypesid)
     * API route.
     *
     * @param id - The shipping option type's ID.
     * @param query - Configure the fields to retrieve in the shipping option type.
     * @param headers - Headers to pass in the request
     * @returns The shipping option type's details.
     *
     * @example
     * To retrieve a shipping option type by its ID:
     *
     * ```ts
     * sdk.admin.shippingOptionType.retrieve("sotype_123")
     * .then(({ shipping_option_type }) => {
     *   console.log(shipping_option_type)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.shippingOptionType.retrieve("sotype_123", {
     *   fields: "id,*shippingOptions"
     * })
     * .then(({ shipping_option_type }) => {
     *   console.log(shipping_option_type)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/shipping-option-types/${id}`, {
                query,
                headers
            });
        });
    }
    /**
     * This method deletes a shipping option type. It sends a request to the
     * [Delete Shipping Option Type](https://docs.medusajs.com/api/admin#shipping-option-types_deleteshippingoptiontypesid)
     * API route.
     *
     * @param id - The shipping option type's ID.
     * @param headers - Headers to pass in the request
     * @returns The shipping option type's details.
     *
     * @example
     * sdk.admin.shippingOptionType.delete("sotype_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */ delete(id, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/shipping-option-types/${id}`, {
                method: "DELETE",
                headers
            });
        });
    }
} //# sourceMappingURL=shipping-option-type.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/locale.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Locale",
    ()=>Locale
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Locale {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of locales. It sends a request to the
     * [List Locales](https://docs.medusajs.com/api/admin#locales_getlocales)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of locales.
     *
     * @example
     * To retrieve the list of locales:
     *
     * ```ts
     * sdk.admin.locale.list()
     * .then(({ locales, count, limit, offset }) => {
     *   console.log(locales)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.locale.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ locales, count, limit, offset }) => {
     *   console.log(locales)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each locale:
     *
     * ```ts
     * sdk.admin.locale.list({
     *   fields: "code,name"
     * })
     * .then(({ locales, count, limit, offset }) => {
     *   console.log(locales)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/locales`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves a locale by its code. It sends a request to the
     * [Get Locale](https://docs.medusajs.com/api/admin#locales_getlocalescode) API route.
     *
     * @param code - The locale's code in BCP 47 format.
     * @param query - Configure the fields to retrieve in the locale.
     * @param headers - Headers to pass in the request
     * @returns The locale's details.
     *
     * @example
     * To retrieve a locale by its code:
     *
     * ```ts
     * sdk.admin.locale.retrieve("en-US")
     * .then(({ locale }) => {
     *   console.log(locale)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.locale.retrieve("en-US", {
     *   fields: "code,name"
     * })
     * .then(({ locale }) => {
     *   console.log(locale)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ retrieve(code, query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.client.fetch(`/admin/locales/${code}`, {
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=locale.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/translation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Translation",
    ()=>Translation
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Translation {
    /**
     * @ignore
     */ constructor(client){
        this.client = client;
    }
    /**
     * This method retrieves a paginated list of translations. It sends a request to the
     * [List Translations](https://docs.medusajs.com/api/admin#translations_gettranslations)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of translations.
     *
     * @example
     * To retrieve the list of translations:
     *
     * ```ts
     * sdk.admin.translation.list()
     * .then(({ translations, count, limit, offset }) => {
     *   console.log(translations)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.translation.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ translations, count, limit, offset }) => {
     *   console.log(translations)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each translation:
     *
     * ```ts
     * sdk.admin.translation.list({
     *   fields: "id,name"
     * })
     * .then(({ translations, count, limit, offset }) => {
     *   console.log(translations)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */ list(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/translations`, {
                headers,
                query
            });
        });
    }
    /**
     * This method allows bulk operations on translations. It sends a request to the
     * [Manage Translations](https://docs.medusajs.com/api/admin#translations_posttranslationsbatch)
     * API route.
     *
     * @param payload - The translations to create, update, or delete.
     * @param headers - Headers to pass in the request.
     * @returns The translations' details.
     *
     * @example
     * sdk.admin.translation.batch({
     *   create: [
     *     {
     *       reference_id: "prod_123",
     *       reference: "product",
     *       locale_code: "en-US",
     *       translations: { title: "Shirt" }
     *     }
     *   ],
     *   update: [
     *     {
     *       id: "trans_123",
     *       translations: { title: "Pants" }
     *     }
     *   ],
     *   delete: ["trans_321"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     */ batch(body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/translations/batch`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method retrieves the settings for the translations for a given entity type or all entity types if no entity type is provided.
     * It sends a request to the
     * [Get Translation Settings](https://docs.medusajs.com/api/admin#translations_gettranslationssettings) API route.
     *
     * @param query - The query parameters which can optionally include the entity type to get the settings for and whether to get the settings for active/inactive entities only.
     * @param headers - Headers to pass in the request.
     * @returns The translation settings.
     *
     * @example
     * To retrieve the settings for the translations for a given entity type:
     *
     * ```ts
     * sdk.admin.translation.settings({
     *   entity_type: "product"
     * })
     * .then(({ translation_settings }) => {
     *   console.log(translation_settings)
     * })
     * ```
     *
     * To retrieve the settings for all entity types:
     *
     * ```ts
     * sdk.admin.translation.settings()
     * .then(({ translation_settings }) => {
     *   console.log(translation_settings)
     * })
     * ```
     *
     * To retrieve the settings for active entities only:
     *
     * ```ts
     * sdk.admin.translation.settings({
     *   is_active: true
     * })
     * .then(({ translation_settings }) => {
     *   console.log(translation_settings)
     * })
     * ```
     *
     * To retrieve the settings for inactive entities only:
     *
     * ```ts
     * sdk.admin.translation.settings({
     *   is_active: false
     * })
     * .then(({ translation_settings }) => {
     *   console.log(translation_settings)
     * })
     * ```
     */ settings(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/translations/settings`, {
                headers,
                query
            });
        });
    }
    /**
     * This method allows bulk operations on translation settings. It sends a request to the
     * [Batch Translation Settings](https://docs.medusajs.com/api/admin#translations_posttranslationssettingsbatch)
     * API route.
     *
     * @since 2.12.6
     *
     * @param body - The translation settings to create, update, or delete.
     * @param headers - Headers to pass in the request.
     * @returns The translation settings' details.
     *
     * @example
     * sdk.admin.translation.batchSettings({
     *   create: [
     *     {
     *       entity_type: "product",
     *       fields: ["title", "description"],
     *       is_active: true
     *     }
     *   ],
     *   update: [
     *     {
     *       id: "trset_123",
     *       fields: ["title", "description", "subtitle"],
     *       is_active: true
     *     }
     *   ],
     *   delete: ["trset_456"]
     * })
     * .then(({ created, updated, deleted }) => {
     *   console.log(created, updated, deleted)
     * })
     * ```
     */ batchSettings(body, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/translations/settings/batch`, {
                method: "POST",
                headers,
                body
            });
        });
    }
    /**
     * This method retrieves a paginated list of entities for a given entity type with only their
     * translatable fields.
     * It sends a request to the
     * [Get Translation Entities](https://docs.medusajs.com/api/admin#translations_gettranslationentities) API route.
     *
     * @since 2.12.4
     *
     * @param query - The query parameters including the entity type and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of entities with their translatable fields.
     *
     * @example
     * To retrieve the entities for a given entity type:
     *
     * ```ts
     * sdk.admin.translation.entities({
     *   type: "product"
     * })
     * .then(({ data, count, offset, limit }) => {
     *   console.log(data)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.translation.entities({
     *   type: "product",
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ data, count, offset, limit }) => {
     *   console.log(data)
     * })
     * ```
     */ entities(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/translations/entities`, {
                headers,
                query
            });
        });
    }
    /**
     * This method retrieves the statistics for the translations for a given entity type or all entity types if no entity type is provided.
     * It sends a request to the
     * [Get Translation Statistics](https://docs.medusajs.com/api/admin#translations_gettranslationsstatistics) API route.
     *
     * @param query - The query parameters which can optionally include the entity type to get the statistics for.
     * @param headers - Headers to pass in the request.
     * @returns The translation statistics.
     *
     * @example
     * To retrieve the statistics for the translations for a given entity type:
     *
     * ```ts
     * sdk.admin.translation.statistics({
     *   entity_type: "product"
     * })
     * .then(({ statistics }) => {
     *   console.log(statistics)
     * })
     * ```
     *
     * To retrieve the statistics for all entity types:
     *
     * ```ts
     * sdk.admin.translation.statistics()
     * .then(({ statistics }) => {
     *   console.log(statistics)
     * })
     * ```
     */ statistics(query, headers) {
        return __awaiter(this, void 0, void 0, function*() {
            return yield this.client.fetch(`/admin/translations/statistics`, {
                headers,
                query
            });
        });
    }
} //# sourceMappingURL=translation.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Admin",
    ()=>Admin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$api$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/api-key.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$campaign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/campaign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$claim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/claim.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$currency$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/currency.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$customer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/customer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$customer$2d$group$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/customer-group.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$draft$2d$order$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/draft-order.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$exchange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/exchange.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$fulfillment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$fulfillment$2d$provider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment-provider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$fulfillment$2d$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/fulfillment-set.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$inventory$2d$item$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/inventory-item.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$invite$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/invite.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$notification$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/notification.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$order$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/order.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$order$2d$edit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/order-edit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$payment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/payment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$payment$2d$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/payment-collection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$plugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/plugin.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$price$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/price-list.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$price$2d$preference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/price-preference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$category$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-category.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-collection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-tag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$variant$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/product-variant.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$promotion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/promotion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$refund$2d$reasons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/refund-reasons.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$region$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/region.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$reservation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/reservation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$return$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/return.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$return$2d$reason$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/return-reason.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$sales$2d$channel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/sales-channel.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$shipping$2d$option$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-option.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$shipping$2d$profile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-profile.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$stock$2d$location$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/stock-location.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/store.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$tax$2d$provider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/tax-provider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$tax$2d$rate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/tax-rate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$tax$2d$region$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/tax-region.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/upload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/user.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$views$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/views.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$workflow$2d$execution$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/workflow-execution.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$shipping$2d$option$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/shipping-option-type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/locale.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$translation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/translation.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class Admin {
    constructor(client){
        this.invite = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$invite$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Invite"](client);
        this.customer = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$customer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Customer"](client);
        this.productCollection = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCollection"](client);
        this.productCategory = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$category$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCategory"](client);
        this.priceList = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$price$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PriceList"](client);
        this.pricePreference = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$price$2d$preference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PricePreference"](client);
        this.product = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Product"](client);
        this.productType = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductType"](client);
        this.upload = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$upload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Upload"](client);
        this.region = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$region$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Region"](client);
        this.returnReason = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$return$2d$reason$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReturnReason"](client);
        this.stockLocation = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$stock$2d$location$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StockLocation"](client);
        this.salesChannel = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$sales$2d$channel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SalesChannel"](client);
        this.fulfillmentSet = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$fulfillment$2d$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FulfillmentSet"](client);
        this.fulfillment = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$fulfillment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fulfillment"](client);
        this.fulfillmentProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$fulfillment$2d$provider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FulfillmentProvider"](client);
        this.shippingOption = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$shipping$2d$option$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShippingOption"](client);
        this.shippingOptionType = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$shipping$2d$option$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShippingOptionType"](client);
        this.shippingProfile = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$shipping$2d$profile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShippingProfile"](client);
        this.inventoryItem = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$inventory$2d$item$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InventoryItem"](client);
        this.notification = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$notification$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Notification"](client);
        this.order = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$order$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Order"](client);
        this.draftOrder = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$draft$2d$order$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DraftOrder"](client);
        this.orderEdit = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$order$2d$edit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrderEdit"](client);
        this.return = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$return$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Return"](client);
        this.claim = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$claim$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Claim"](client);
        this.taxRate = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$tax$2d$rate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxRate"](client);
        this.taxRegion = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$tax$2d$region$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxRegion"](client);
        this.translation = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$translation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Translation"](client);
        this.store = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"](client);
        this.productTag = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductTag"](client);
        this.user = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["User"](client);
        this.locale = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Locale"](client);
        this.currency = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$currency$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Currency"](client);
        this.payment = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$payment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Payment"](client);
        this.productVariant = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$product$2d$variant$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductVariant"](client);
        this.refundReason = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$refund$2d$reasons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RefundReason"](client);
        this.exchange = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$exchange$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Exchange"](client);
        this.paymentCollection = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$payment$2d$collection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PaymentCollection"](client);
        this.apiKey = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$api$2d$key$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApiKey"](client);
        this.workflowExecution = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$workflow$2d$execution$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WorkflowExecution"](client);
        this.reservation = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$reservation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](client);
        this.customerGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$customer$2d$group$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomerGroup"](client);
        this.promotion = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$promotion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Promotion"](client);
        this.campaign = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$campaign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Campaign"](client);
        this.plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$plugin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Plugin"](client);
        this.taxProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$tax$2d$provider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxProvider"](client);
        this.views = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$views$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Views"](client);
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/auth/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Auth",
    ()=>Auth
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Auth {
    constructor(client, config){
        /**
         * This method is used to retrieve a registration JWT token for a user, customer, or custom actor type. It sends a request to the
         * [Retrieve Registration Token API route](https://docs.medusajs.com/api/store#auth_postactor_typeauth_provider_register).
         *
         * Then, it stores the returned token and passes it in the header of subsequent requests. So, you can call the
         * [store.customer.create](https://docs.medusajs.com/resources/references/js-sdk/store/customer#create) method,
         * for example, after calling this method.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `emailpass` or `google`.
         * @param payload - The data to pass in the request's body for authentication. When using the `emailpass` provider,
         * you pass the email and password.
         * @returns The JWT token used for registration later.
         *
         * @tags auth
         *
         * @example
         * await sdk.auth.register(
         *   "customer",
         *   "emailpass",
         *   {
         *     email: "customer@gmail.com",
         *     password: "supersecret"
         *   }
         * )
         *
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.create({
         *   email: "customer@gmail.com",
         *   password: "supersecret"
         * })
         */ this.register = (actor, method, payload)=>__awaiter(this, void 0, void 0, function*() {
                const { token } = yield this.client.fetch(`/auth/${actor}/${method}/register`, {
                    method: "POST",
                    body: payload
                });
                this.client.setToken(token);
                return token;
            });
        /**
         * This method retrieves the JWT authenticated token for an admin user, customer, or custom
         * actor type. It sends a request to the [Authenticate API Route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_provider).
         *
         * ### Third-Party Authentication
         *
         * If the API route returns a `location` property, it means that the authentication requires additional steps,
         * typically in a third-party service. The `location` property is returned so that you
         * can redirect the user to the appropriate page.
         *
         * :::note
         *
         * For an example of implementing third-party authentication, refer to the
         * [Third-Party Login in Storefront](https://docs.medusajs.com/resources/storefront-development/customers/third-party-login) guide.
         *
         * :::
         *
         * ### Session Authentication
         *
         * If the `auth.type` of the SDK is set to `session`, this method will also send a request to the
         * [Set Authentication Session API route](https://docs.medusajs.com/api/admin#auth_postsession).
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * ### Automatic Authentication
         *
         * If the authentication was successful, subsequent requests using the SDK will automatically have the necessary authentication headers / session
         * set, based on your JS SDK authentication configurations.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `emailpass` or `google`.
         * @param payload - The data to pass in the request's body for authentication. When using the `emailpass` provider,
         * you pass the email and password.
         * @returns The authentication JWT token
         *
         * @tags auth
         *
         * @example
         * const result = await sdk.auth.login(
         *   "customer",
         *   "emailpass",
         *   {
         *     email: "customer@gmail.com",
         *     password: "supersecret"
         *   }
         * )
         *
         * if (typeof result !== "string") {
         *   alert("Authentication requires additional steps")
         *   // replace with the redirect logic of your application
         *   window.location.href = result.location
         *   return
         * }
         *
         * // customer is now authenticated
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.retrieve()
         */ this.login = (actor, method, payload)=>__awaiter(this, void 0, void 0, function*() {
                // There will either be token or location returned from the backend.
                const { token, location } = yield this.client.fetch(`/auth/${actor}/${method}`, {
                    method: "POST",
                    body: payload
                });
                // In the case of an oauth login, we return the redirect location to the caller.
                // They can decide if they do an immediate redirect or put it in an <a> tag.
                if (location) {
                    return {
                        location
                    };
                }
                yield this.setToken_(token);
                return token;
            });
        /**
         * This method is used to validate an Oauth callback from a third-party service, such as Google, for an admin user, customer, or custom actor types.
         * It sends a request to the [Validate Authentication Callback](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providercallback).
         *
         * The method stores the returned token and passes it in the header of subsequent requests. So, you can call the
         * [store.customer.create](https://docs.medusajs.com/resources/references/js-sdk/store/customer#create) or {@link refresh} methods,
         * for example, after calling this method.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param method - The authentication provider to use. For example, `google`.
         * @param query - The query parameters from the Oauth callback, which should be passed to the API route. This includes query parameters like
         * `code` and `state`.
         * @returns The authentication JWT token
         *
         * @tags auth
         *
         * @example
         * await sdk.auth.callback(
         *   "customer",
         *   "google",
         *   {
         *     code: "123",
         *     state: "456"
         *   }
         * )
         *
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.create({
         *   email: "customer@gmail.com",
         *   password: "supersecret"
         * })
         *
         * @privateRemarks
         * The callback expects all query parameters from the Oauth callback to be passed to
         * the backend, and the provider is in charge of parsing and validating them
         */ this.callback = (actor, method, query)=>__awaiter(this, void 0, void 0, function*() {
                const { token } = yield this.client.fetch(`/auth/${actor}/${method}/callback`, {
                    method: "GET",
                    query
                });
                yield this.setToken_(token);
                return token;
            });
        /**
         * This method refreshes a JWT authentication token, which is useful after validating the Oauth callback
         * with {@link callback}. It sends a request to the [Refresh Authentication Token API route](https://docs.medusajs.com/api/admin#auth_postadminauthtokenrefresh).
         *
         * The method stores the returned token and passes it in the header of subsequent requests. So, you can call other
         * methods that require authentication after calling this method.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * For an example of implementing third-party authentication, refer to the
         * [Third-Party Login in Storefront](https://docs.medusajs.com/resources/storefront-development/customers/third-party-login) guide.
         *
         * @param headers - Headers to pass in the request
         *
         * @returns The refreshed JWT authentication token.
         *
         * @tags auth
         *
         * @example
         * const token = await sdk.auth.refresh()
         *
         * // all subsequent requests will use the token in the header
         * const { customer } = await sdk.store.customer.retrieve()
         */ this.refresh = (headers)=>__awaiter(this, void 0, void 0, function*() {
                const { token } = yield this.client.fetch("/auth/token/refresh", {
                    method: "POST",
                    headers
                });
                // Putting the token in session after refreshing is only useful when the new token has updated info (eg. actor_id).
                // Ideally we don't use the full JWT in session as key, but just store a pseudorandom key that keeps the rest of the auth context as value.
                yield this.setToken_(token);
                return token;
            });
        /**
         * This method logs out the currently authenticated user based on your JS SDK authentication configurations.
         *
         * If the `auth.type` of the SDK is set to `session`, this method will also send a request to the
         * [Delete Authentication Session API route](https://docs.medusajs.com/api/admin#auth_deletesession).
         *
         * The method also clears any stored tokens or sessions, based on your JS SDK authentication configurations.
         *
         * Learn more in the [JS SDK Authentication](https://docs.medusajs.com/resources/js-sdk/auth/overview) guide.
         *
         * @tags auth
         *
         * @example
         * await sdk.auth.logout()
         *
         * // user is now logged out
         * // you can't send any requests that require authentication
         */ this.logout = ()=>__awaiter(this, void 0, void 0, function*() {
                var _a, _b;
                if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
                    yield this.client.fetch("/auth/session", {
                        method: "DELETE"
                    });
                }
                this.client.clearToken();
            });
        /**
         * This method requests a reset password token for an admin user, customer, or custom actor type.
         * It sends a request to the [Generate Reset Password Token API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerresetpassword).
         *
         * To reset the password later using the token delivered to the user, use the {@link updateProvider} method.
         *
         * Related guide: [How to allow customers to reset their passwords in a storefront](https://docs.medusajs.com/resources/storefront-development/customers/reset-password).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param provider - The authentication provider to use. For example, `emailpass`.
         * @param body - The data required to identify the user.
         *
         * @tags auth
         *
         * @example
         * sdk.auth.resetPassword(
         *   "customer",
         *   "emailpass",
         *   {
         *     identifier: "customer@gmail.com"
         *   }
         * )
         * .then(() => {
         *   // user receives token
         * })
         */ this.resetPassword = (actor, provider, body)=>__awaiter(this, void 0, void 0, function*() {
                yield this.client.fetch(`/auth/${actor}/${provider}/reset-password`, {
                    method: "POST",
                    body,
                    headers: {
                        accept: "text/plain"
                    }
                });
            });
        /**
         * This method is used to update user-related data authentication data.
         *
         * More specifically, use this method when updating the password of an admin user, customer, or
         * custom actor type after requesting to reset their password with {@link resetPassword}.
         *
         * This method sends a request to [this API route](https://docs.medusajs.com/api/admin#auth_postactor_typeauth_providerupdate).
         *
         * Related guide: [How to allow customers to reset their passwords in a storefront](https://docs.medusajs.com/resources/storefront-development/customers/reset-password).
         *
         * @param actor - The actor type. For example, `user` for admin user, or `customer` for customer.
         * @param provider - The authentication provider to use. For example, `emailpass`.
         * @param body - The data necessary to update the user's authentication data. When resetting the user's password,
         * send the `password` property.
         *
         * @tags auth
         *
         * @example
         * sdk.auth.updateProvider(
         *   "customer",
         *   "emailpass",
         *   {
         *     password: "supersecret"
         *   },
         *   token
         * )
         * .then(() => {
         *   // password updated
         * })
         */ this.updateProvider = (actor, provider, body, token)=>__awaiter(this, void 0, void 0, function*() {
                yield this.client.fetch(`/auth/${actor}/${provider}/update`, {
                    method: "POST",
                    body,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            });
        /**
         * @ignore
         */ this.setToken_ = (token)=>__awaiter(this, void 0, void 0, function*() {
                var _a, _b;
                // By default we just set the token in the configured storage, if configured to use sessions we convert it into session storage instead.
                if (((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.type) === "session") {
                    yield this.client.fetch("/auth/session", {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                } else {
                    this.client.setToken(token);
                }
            });
        this.client = client;
        this.config = config;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/store/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Store",
    ()=>Store
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Store {
    /**
     * @ignore
     */ constructor(client){
        /**
         * @tags region
         */ this.region = {
            /**
             * This method retrieves the paginated list of regions in the store. It sends a request to the
             * [List Regions API route](https://docs.medusajs.com/api/store#regions_getregions).
             *
             * Related guide: [How to list regions in a storefront](https://docs.medusajs.com/resources/storefront-development/regions/list).
             *
             * @param query - Filters and pagination configurations.
             * @param headers - Headers to pass in the request
             * @returns The paginated list of regions.
             *
             * @example
             * To retrieve the list of regions:
             *
             * ```ts
             * sdk.store.region.list()
             * .then(({ regions, count, limit, offset }) => {
             *   console.log(regions)
             * })
             * ```
             *
             * To configure the pagination, pass the `limit` and `offset` query parameters.
             *
             * For example, to retrieve only 10 items and skip 10 items:
             *
             * ```ts
             * sdk.store.region.list({
             *   limit: 10,
             *   offset: 10
             * })
             * .then(({ regions, count, limit, offset }) => {
             *   console.log(regions)
             * })
             * ```
             *
             * Using the `fields` query parameter, you can specify the fields and relations to retrieve
             * in each region:
             *
             * ```ts
             * sdk.store.region.list({
             *   fields: "id,*countries"
             * })
             * .then(({ regions, count, limit, offset }) => {
             *   console.log(regions)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ list: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/regions`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method retrieves a region by its ID. It sends a request to the [Get Region](https://docs.medusajs.com/api/store#regions_getregionsid)
             * API route.
             *
             * Related guide: [Store and retrieve regions in a storefront](https://docs.medusajs.com/resources/storefront-development/regions/store-retrieve-region).
             *
             * @param id - The region's ID.
             * @param query - Configure the fields to retrieve in the region.
             * @param headers - Headers to pass in the request
             * @returns The region.
             *
             * @example
             * To retrieve a region by its ID:
             *
             * ```ts
             * sdk.store.region.retrieve("reg_123")
             * .then(({ region }) => {
             *   console.log(region)
             * })
             * ```
             *
             * To specify the fields and relations to retrieve:
             *
             * ```ts
             * sdk.store.region.retrieve(
             *   "reg_123",
             *   {
             *     fields: "id,*countries"
             *   }
             * )
             * .then(({ region }) => {
             *   console.log(region)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ retrieve: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/regions/${id}`, {
                        query,
                        headers
                    });
                })
        };
        /**
         * @tags product
         */ this.collection = {
            /**
             * This method retrieves a paginated list of product collections. It sends a request to the
             * [List Collections](https://docs.medusajs.com/api/store#collections_getcollections) API route.
             *
             * Related guide: [How to retrieve collections in a storefront](https://docs.medusajs.com/resources/storefront-development/products/collections/list).
             *
             * @param query - Filters and pagination configurations.
             * @param headers - Headers to pass in the request
             * @returns The paginated list of collections.
             *
             * @example
             * To retrieve the list of collections:
             *
             * ```ts
             * sdk.store.collection.list()
             * .then(({ collections, count, limit, offset }) => {
             *   console.log(collections)
             * })
             * ```
             *
             * To configure the pagination, pass the `limit` and `offset` query parameters.
             *
             * For example, to retrieve only 10 items and skip 10 items:
             *
             * ```ts
             * sdk.store.collection.list({
             *   limit: 10,
             *   offset: 10
             * })
             * .then(({ collections, count, limit, offset }) => {
             *   console.log(collections)
             * })
             * ```
             *
             * Using the `fields` query parameter, you can specify the fields and relations to retrieve
             * in each collection:
             *
             * ```ts
             * sdk.store.collection.list({
             *   fields: "id,handle"
             * })
             * .then(({ collections, count, limit, offset }) => {
             *   console.log(collections)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ list: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/collections`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method retrieves a collection by its ID. It sends a request to the [Get Collection](https://docs.medusajs.com/api/store#collections_getcollectionsid)
             * API route.
             *
             * Related guide: [How to retrieve a collection in a storefront](https://docs.medusajs.com/resources/storefront-development/products/collections/retrieve).
             *
             * @param id - The ID of the collection to retrieve.
             * @param query - Configure the fields to retrieve in the collection.
             * @param headers - Headers to pass in the request
             * @returns The collection.
             *
             * @example
             * To retrieve a collection by its ID:
             *
             * ```ts
             * sdk.store.collection.retrieve("pcol_123")
             * .then(({ collection }) => {
             *   console.log(collection)
             * })
             * ```
             *
             * To specify the fields and relations to retrieve:
             *
             * ```ts
             * sdk.store.collection.retrieve("pcol_123", {
             *   fields: "id,handle"
             * })
             * .then(({ collection }) => {
             *   console.log(collection)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ retrieve: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/collections/${id}`, {
                        query,
                        headers
                    });
                })
        };
        /**
         * @tags product
         */ this.category = {
            /**
             * This method retrieves a paginated list of product categories. It sends a request to the
             * [List Categories](https://docs.medusajs.com/api/store#product-categories_getproductcategories) API route.
             *
             * Related guide: [How to retrieve list of categories in the storefront](https://docs.medusajs.com/resources/storefront-development/products/categories/list).
             *
             * @param query - Filters and pagination configurations.
             * @param headers - Headers to pass in the request.
             * @returns The paginated list of categories.
             *
             * @example
             * To retrieve the list of categories:
             *
             * ```ts
             * sdk.store.category.list()
             * .then(({ product_categories, count, offset, limit }) => {
             *   console.log(product_categories)
             * })
             * ```
             *
             * To configure the pagination, pass the `limit` and `offset` query parameters.
             *
             * For example, to retrieve only 10 items and skip 10 items:
             *
             * ```ts
             * sdk.store.category.list({
             *   limit: 10,
             *   offset: 10
             * })
             * .then(({ product_categories, count, offset, limit }) => {
             *   console.log(product_categories)
             * })
             * ```
             *
             * Using the `fields` query parameter, you can specify the fields and relations to retrieve
             * in each category:
             *
             * ```ts
             * sdk.store.category.list({
             *   fields: "id,*parent_category"
             * })
             * .then(({ product_categories, count, offset, limit }) => {
             *   console.log(product_categories)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ list: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/product-categories`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method retrieves a category by its ID. It sends a request to the
             * [Retrieve Product Category](https://docs.medusajs.com/api/store#product-categories_getproductcategoriesid).
             *
             * Related guide: [How to retrieve a category in the storefront](https://docs.medusajs.com/resources/storefront-development/products/categories/retrieve).
             *
             * @param id - The ID of the category to retrieve.
             * @param query - Configure the fields to retrieve in the category.
             * @param headers - Headers to pass in the request
             * @returns The category.
             *
             * @example
             * To retrieve a category by its ID:
             *
             * ```ts
             * sdk.store.category.retrieve("pcat_123")
             * .then(({ product_category }) => {
             *   console.log(product_category)
             * })
             * ```
             *
             * To specify the fields and relations to retrieve:
             *
             * ```ts
             * sdk.store.category.retrieve("pcat_123", {
             *   fields: "id,*parent_category"
             * })
             * .then(({ product_category }) => {
             *   console.log(product_category)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ retrieve: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/product-categories/${id}`, {
                        query,
                        headers
                    });
                })
        };
        /**
         * @tags product
         */ this.product = {
            /**
             * This method retrieves a list of products. It sends a request to the
             * [List Products API route](https://docs.medusajs.com/api/store#products_getproducts).
             *
             * Related guides:
             *
             * - [How to list products in a storefront](https://docs.medusajs.com/resources/storefront-development/products/list).
             * - [How to retrieve a product variant's prices in the storefront](https://docs.medusajs.com/resources/storefront-development/products/price)
             *
             * @param query - Filters and pagination configurations.
             * @param headers - Headers to pass in the request.
             * @returns The paginated list of products.
             *
             * @example
             * To retrieve the list of products:
             *
             * ```ts
             * sdk.store.product.list()
             * .then(({ products, count, offset, limit }) => {
             *   console.log(products)
             * })
             * ```
             *
             * To configure the pagination, pass the `limit` and `offset` query parameters.
             *
             * For example, to retrieve only 10 items and skip 10 items:
             *
             * ```ts
             * sdk.store.product.list({
             *   limit: 10,
             *   offset: 10
             * })
             * .then(({ products, count, offset, limit }) => {
             *   console.log(products)
             * })
             * ```
             *
             * Using the `fields` query parameter, you can specify the fields and relations to retrieve
             * in each product:
             *
             * ```ts
             * sdk.store.product.list({
             *   fields: "id,*collection"
             * })
             * .then(({ products, count, offset, limit }) => {
             *   console.log(products)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ list: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/products`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method is used to retrieve a product by its ID. It sends a request to the
             * [Get Product](https://docs.medusajs.com/api/store#products_getproductsid) API route.
             *
             * Related guides:
             *
             * - [How to retrieve a product in the storefront](https://docs.medusajs.com/resources/storefront-development/products/retrieve).
             * - [How to retrieve a product variant's prices in the storefront](https://docs.medusajs.com/resources/storefront-development/products/price)
             *
             * @param id - The product's ID.
             * @param query - Configure the fields to retrieve in the product.
             * @param headers - Headers to pass in the request
             * @returns The product.
             *
             * @example
             * To retrieve a product by its ID:
             *
             * ```ts
             * sdk.store.product.retrieve("prod_123")
             * .then(({ product }) => {
             *   console.log(product)
             * })
             * ```
             *
             * To specify the fields and relations to retrieve:
             *
             * ```ts
             * sdk.store.product.retrieve("prod_123", {
             *   fields: "id,*collection"
             * })
             * .then(({ product }) => {
             *   console.log(product)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ retrieve: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/products/${id}`, {
                        query,
                        headers
                    });
                })
        };
        /**
         * Related guides: [How to implement carts in the storefront](https://docs.medusajs.com/resources/storefront-development/cart).
         *
         * @tags cart
         */ this.cart = {
            /**
             * This method creates a cart. It sends a request to the [Create Cart](https://docs.medusajs.com/api/store#carts_postcarts)
             * API route.
             *
             * Related guide: [How to create a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/create).
             *
             * @param body - The details of the cart to create.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The created cart.
             *
             * @example
             * sdk.store.cart.create({
             *   region_id: "reg_123"
             * })
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             */ create: (body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method updates a cart. It sends a request to the
             * [Update Cart](https://docs.medusajs.com/api/store#carts_postcartsid) API route.
             *
             * Related guide: [How to update a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/update).
             *
             * @param id - The cart's ID.
             * @param body - The data to update in the cart.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The updated cart.
             *
             * @example
             * sdk.store.cart.update("cart_123", {
             *   region_id: "reg_123"
             * })
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             */ update: (id, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${id}`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method retrieves a cart by its ID. It sends a request to the
             * [Get Cart](https://docs.medusajs.com/api/store#carts_getcartsid) API route.
             *
             * Related guide: [How to retrieve a cart in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/retrieve).
             *
             * @param id - The cart's ID.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The cart's details.
             *
             * @example
             * To retrieve a cart by its ID:
             *
             * ```ts
             * sdk.store.cart.retrieve("cart_123")
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             * ```
             *
             * To specify the fields and relations to retrieve:
             *
             * ```ts
             * sdk.store.cart.retrieve("cart_123", {
             *   fields: "id,*items"
             * })
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ retrieve: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${id}`, {
                        headers,
                        query
                    });
                }),
            /**
             * This methods adds a product variant to the cart as a line item. It sends a request to the
             * [Add Line Item](https://docs.medusajs.com/api/store#carts_postcartsidlineitems) API route.
             *
             * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
             *
             * @param cartId - The cart's ID.
             * @param body - The details of the item to add.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The cart's details.
             *
             * @example
             * sdk.store.cart.createLineItem("cart_123", {
             *   variant_id: "variant_123",
             *   quantity: 1
             * })
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             */ createLineItem: (cartId, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${cartId}/line-items`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method updates a line item in a cart. It sends a request to the
             * [Update Line Item](https://docs.medusajs.com/api/store#carts_postcartsidlineitemsline_id) API route.
             *
             * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
             *
             * @param cartId - The cart's ID.
             * @param lineItemId - The line item's ID.
             * @param body - The data to update.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The cart's details.
             *
             * @example
             * sdk.store.cart.updateLineItem(
             *   "cart_123",
             *   "li_123",
             *   {
             *     quantity: 1
             *   }
             * )
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             */ updateLineItem: (cartId, lineItemId, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method deletes a line item from a cart. It sends a request to the
             * [Remove Line Item](https://docs.medusajs.com/api/store#carts_deletecartsidlineitemsline_id) API route.
             *
             * Related guide: [How to manage a cart's line items in the storefront](https://docs.medusajs.com/resources/storefront-development/cart/manage-items).
             *
             * @param cartId - The cart's ID.
             * @param lineItemId - The item's ID.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The deletion's details.
             *
             * @example
             * sdk.store.cart.deleteLineItem(
             *   "cart_123",
             *   "li_123"
             * )
             * .then(({ deleted, parent: cart }) => {
             *   console.log(deleted, cart)
             * })
             */ deleteLineItem: (cartId, lineItemId, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${cartId}/line-items/${lineItemId}`, {
                        method: "DELETE",
                        query,
                        headers
                    });
                }),
            /**
             * This method adds a shipping method to a cart. It sends a request to
             * the [Add Shipping Method](https://docs.medusajs.com/api/store#carts_postcartsidshippingmethods) API routes.
             *
             * Related guide: [Implement shipping step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/shipping).
             *
             * @param cartId - The cart's ID.
             * @param body - The shipping method's details.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The cart's details.
             *
             * @example
             * sdk.store.cart.addShippingMethod("cart_123", {
             *   option_id: "so_123",
             *   data: {
             *     // custom data for fulfillment provider.
             *   }
             * })
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             */ addShippingMethod: (cartId, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${cartId}/shipping-methods`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method completes a cart and places the order. It's the last step of the checkout flow.
             * The method sends a request to the [Complete Cart](https://docs.medusajs.com/api/store#carts_postcartsidcomplete)
             * API route.
             *
             * Related guide: [Learn how to complete cart in checkout flow](https://docs.medusajs.com/resources/storefront-development/checkout/complete-cart).
             *
             * @param cartId - The cart's ID.
             * @param query - Configure the fields to retrieve in the created order.
             * @param headers - Headers to pass in the request.
             * @returns The order's details, if it was placed successfully. Otherwise, the cart is returned with an error.
             *
             * @example
             * sdk.store.cart.complete("cart_123")
             * .then((data) => {
             *   if(data.type === "cart") {
             *     // an error occurred
             *     console.log(data.error, data.cart)
             *   } else {
             *     // order placed successfully
             *     console.log(data.order)
             *   }
             * })
             */ complete: (cartId, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${cartId}/complete`, {
                        method: "POST",
                        headers,
                        query
                    });
                }),
            /**
             * This method updates the customer of a cart.
             *
             * @param id - The cart's ID.
             * @param query - Configure the fields to retrieve in the cart.
             * @param headers - Headers to pass in the request.
             * @returns The updated cart.
             *
             * @example
             * // TODO must be authenticated as the customer to set the cart's customer
             * sdk.store.cart.transferCart("cart_123")
             * .then(({ cart }) => {
             *   console.log(cart)
             * })
             */ transferCart: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/carts/${id}/customer`, {
                        method: "POST",
                        headers,
                        query
                    });
                })
        };
        /**
         * @tags fulfillment
         */ this.fulfillment = {
            /**
             * This method retrieves the list of shipping options for a cart. It sends a request to
             * the [List Shipping Options](https://docs.medusajs.com/api/store#shipping-options_getshippingoptions)
             * API route.
             *
             * Related guide: [Implement shipping step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/shipping).
             *
             * @param query - The cart's details along with configurations of the fields to retrieve in the options.
             * @param headers - Headers to pass in the request.
             * @returns The shipping options that can be used for the cart.
             *
             * @example
             * sdk.store.fulfillment.listCartOptions({
             *   cart_id: "cart_123"
             * })
             * .then(({ shipping_options }) => {
             *   console.log(shipping_options)
             * })
             */ listCartOptions: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/shipping-options`, {
                        headers,
                        query
                    });
                }),
            /**
             * This method calculates the price of a shipping option in a cart, which is useful during checkout.
             * It sends a request to the [Calculate Shipping Option Price](https://docs.medusajs.com/api/store#shipping-options_postshippingoptionsidcalculate)
             * API route.
             *
             * @param id - The shipping option's ID.
             * @param body - The price calculation's details.
             * @param query - Configure the fields to retrieve in the shipping option.
             * @param headers - Headers to pass in the request.
             * @returns The shipping option's details.
             *
             * @example
             * sdk.store.fulfillment.calculate("so_123", {
             *   cart_id: "cart_123"
             * })
             * .then(({ shipping_option }) => {
             *   console.log(shipping_option)
             * })
             */ calculate: (id, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return yield this.client.fetch(`/store/shipping-options/${id}/calculate`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                })
        };
        /**
         * @tags payment
         */ this.payment = {
            /**
             * This method retrieves the payment providers available in a region, which is useful during checkout.
             * It sends a request to the [List Payment Providers](https://docs.medusajs.com/api/store#payment-providers_getpaymentproviders)
             * API route.
             *
             * Related guide: [Implement payment step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/payment).
             *
             * @param query - The filters to apply on the retrieved providers, along with configurations of the
             * fields to retrieve in the options.
             * @param headers - Headers to pass in the request.
             * @returns The list of payment providers.
             *
             * @example
             * To retrieve the list of payment providers for a region:
             *
             * ```ts
             * sdk.store.payment.listPaymentProviders({
             *   region_id: "reg_123"
             * })
             * .then(({ payment_providers, count, offset, limit }) => {
             *   console.log(payment_providers)
             * })
             * ```
             *
             * To configure the pagination, pass the `limit` and `offset` query parameters.
             *
             * For example, to retrieve only 10 items and skip 10 items:
             *
             * ```ts
             * sdk.store.payment.listPaymentProviders({
             *   region_id: "reg_123",
             *   limit: 10,
             *   offset: 10
             * })
             * .then(({ payment_providers, count, offset, limit }) => {
             *   console.log(payment_providers)
             * })
             * ```
             *
             * Using the `fields` query parameter, you can specify the fields and relations to retrieve
             * in each provider:
             *
             * ```ts
             * sdk.store.payment.listPaymentProviders({
             *   region_id: "reg_123",
             *   limit: 10,
             *   offset: 10,
             *   fields: "id"
             * })
             * .then(({ payment_providers, count, offset, limit }) => {
             *   console.log(payment_providers)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ listPaymentProviders: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/payment-providers`, {
                        headers,
                        query
                    });
                }),
            /**
             * This method creates a payment session of a cart's payment collection, selecting a payment provider.
             * It sends a request to the [Initialize Payment Session](https://docs.medusajs.com/api/store#payment-collections_postpaymentcollectionsidpaymentsessions)
             * API route.
             *
             * If the cart doesn't have a payment collection, a payment collection is created for the cart by
             * sending a request to the [Create Payment Collection](https://docs.medusajs.com/api/store#payment-collections_postpaymentcollections)
             * API route.
             *
             * Related guide: [Implement payment step during checkout](https://docs.medusajs.com/resources/storefront-development/checkout/payment).
             *
             * @param cart - The cart's details.
             * @param body - The payment session's details.
             * @param query - Configure the fields to retrieve in the payment collection.
             * @param headers - Headers to pass in the request.
             * @returns The payment collection's details.
             *
             * @example
             * sdk.store.payment.initiatePaymentSession(
             *   cart, // assuming you already have the cart object.
             *   {
             *     provider_id: "pp_stripe_stripe",
             *     data: {
             *       // any data relevant for the provider.
             *     }
             *   }
             * )
             * .then(({ payment_collection }) => {
             *   console.log(payment_collection)
             * })
             */ initiatePaymentSession: (cart, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    var _a;
                    let paymentCollectionId = (_a = cart.payment_collection) === null || _a === void 0 ? void 0 : _a.id;
                    if (!paymentCollectionId) {
                        const collectionBody = {
                            cart_id: cart.id
                        };
                        paymentCollectionId = (yield this.client.fetch(`/store/payment-collections`, {
                            method: "POST",
                            headers,
                            body: collectionBody
                        })).payment_collection.id;
                    }
                    return this.client.fetch(`/store/payment-collections/${paymentCollectionId}/payment-sessions`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                })
        };
        /**
         * @tags order
         */ this.order = {
            /**
             * This method retrieves a paginated list of orders matching the specified filters. It
             * sends a request to the [List Orders](https://docs.medusajs.com/api/store#orders_getorders)
             * API route.
             *
             * @param query - Configure the fields to retrieve in the orders.
             * @param headers - Headers to pass in the request.
             * @returns The paginated list of orders.
             *
             * @example
             * To retrieve the list of orders:
             *
             * ```ts
             * // TODO must be authenticated as the customer to list their orders
             * sdk.store.order.list()
             * .then(({ orders, count, offset, limit }) => {
             *   console.log(orders)
             * })
             * ```
             *
             * To configure the pagination, pass the `limit` and `offset` query parameters.
             *
             * For example, to retrieve only 10 items and skip 10 items:
             *
             * ```ts
             * // TODO must be authenticated as the customer to list their orders
             * sdk.store.order.list({
             *   limit: 10,
             *   offset: 10
             * })
             * .then(({ orders, count, offset, limit }) => {
             *   console.log(orders)
             * })
             * ```
             *
             * Using the `fields` query parameter, you can specify the fields and relations to retrieve
             * in each order:
             *
             * ```ts
             * // TODO must be authenticated as the customer to list their orders
             * sdk.store.order.list({
             *   fields: "id,*items"
             * })
             * .then(({ orders, count, offset, limit }) => {
             *   console.log(orders)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ list: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/orders`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method retrieves an order by its ID. It sends a request to the
             * [Get Order](https://docs.medusajs.com/api/store#orders_getordersid) API route.
             *
             * @param id - The order's ID.
             * @param query - Configure the fields to retrieve in the order.
             * @param headers - Headers to pass in the request.
             * @returns The order's details.
             *
             * @example
             * To retrieve an order by its ID:
             *
             * ```ts
             * sdk.store.order.retrieve("order_123")
             * .then(({ order }) => {
             *   console.log(order)
             * })
             * ```
             *
             * To specify the fields and relations to retrieve:
             *
             * ```ts
             * sdk.store.order.retrieve("order_123", {
             *   fields: "id,*items"
             * })
             * .then(({ order }) => {
             *   console.log(order)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ retrieve: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/orders/${id}`, {
                        headers,
                        query
                    });
                }),
            /**
             * This method requests a order transfer from a guest account to the current, logged in customer account.
             *
             * Customer requesting the transfer must be logged in.
             *
             * @param body - The transfer's details.
             * @param query - Configure the fields to retrieve in the order.
             * @param headers - Headers to pass in the request.
             * @returns The order details.
             *
             * @example
             * // TODO must be authenticated as the customer to request the order transfer
             * sdk.store.order.requestTransfer(
             *   "order_123",
             *   {
             *     description: "I want to transfer this order to my friend."
             *   },
             *   {},
             *   {
             *     Authorization: `Bearer ${token}`
             *   }
             * )
             * .then(({ order }) => {
             *   console.log(order)
             * })
             */ requestTransfer: (id, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/orders/${id}/transfer/request`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method cancels an order transfer request.
             *
             * Customer requesting the transfer must be logged in.
             *
             * @param id - The order's ID.
             * @param query - Configure the fields to retrieve in the order.
             * @param headers - Headers to pass in the request.
             * @returns The order details.
             *
             * @example
             * // TODO must be authenticated as the customer to cancel the order transfer
             * sdk.store.order.cancelTransfer(
             *   "order_123",
             *   {},
             *   {
             *     Authorization: `Bearer ${token}`
             *   }
             * )
             * .then(({ order }) => {
             *   console.log(order)
             * })
             */ cancelTransfer: (id, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/orders/${id}/transfer/cancel`, {
                        method: "POST",
                        headers,
                        query
                    });
                }),
            /**
             * The method called for the original owner to accept the order transfer to a new owner.
             *
             * @param id - The order's ID.
             * @param body - The payload containing the transfer token.
             * @param query - Configure the fields to retrieve in the order.
             * @param headers - Headers to pass in the request.
             * @returns The order details.
             *
             * @example
             * sdk.store.order.acceptTransfer(
             *   "order_123",
             *   {
             *     token: "transfer_token"
             *   },
             *   {
             *     Authorization: `Bearer ${token}`
             *   }
             * )
             * .then(({ order }) => {
             *   console.log(order)
             * })
             */ acceptTransfer: (id, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/orders/${id}/transfer/accept`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * The method called for the original owner to decline the order transfer to a new owner.
             *
             * @param id - The order's ID.
             * @param body - The payload containing the transfer token.
             * @param query - Configure the fields to retrieve in the order.
             * @param headers - Headers to pass in the request.
             * @returns The order details.
             *
             * @example
             * sdk.store.order.declineTransfer(
             *   "order_123",
             *   {
             *     token: "transfer_token"
             *   },
             *   {
             *     Authorization: `Bearer ${token}`
             *   }
             * )
             * .then(({ order }) => {
             *   console.log(order)
             * })
             */ declineTransfer: (id, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/orders/${id}/transfer/decline`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                })
        };
        /**
         * @tags customer
         */ this.customer = {
            /**
             * This method registers a customer. It sends a request to the [Register Customer](https://docs.medusajs.com/api/store#customers_postcustomers)
             * API route.
             *
             * You must use the {@link Auth.register} method first to retrieve a registration token. Then, pass that
             * registration token in the `headers` parameter of this method as an authorization bearer header.
             *
             * Related guide: [How to register customer in storefront](https://docs.medusajs.com/resources/storefront-development/customers/register)
             *
             * @param body - The customer's details.
             * @param query - Configure the fields to retrieve in the customer.
             * @param headers - Headers to pass in the request. This is where you include the authorization JWT registration token.
             * @returns The customer's details.
             *
             * @example
             * const token = await sdk.auth.register("customer", "emailpass", {
             *   "email": "customer@gmail.com",
             *   "password": "supersecret"
             * })
             *
             * sdk.store.customer.create(
             *   {
             *     "email": "customer@gmail.com"
             *   },
             *   {},
             *   {
             *     Authorization: `Bearer ${token}`
             *   }
             * )
             * .then(({ customer }) => {
             *   console.log(customer)
             * })
             */ create: (body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method updates the logged-in customer's details. The customer must be logged in
             * first with the {@link Auth.login} method.
             *
             * It sends a request to the
             * [Update Customer](https://docs.medusajs.com/api/store#customers_postcustomersme) API route.
             *
             * Related guide: [How to edit customer's profile in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/profile).
             *
             * @param body - The customer's details to update.
             * @param query - Configure the fields to retrieve in the customer.
             * @param headers - Headers to pass in the request.
             * @returns The customer's details.
             *
             * @example
             * // TODO must be authenticated as the customer to update their details
             * sdk.store.customer.update({
             *   first_name: "John"
             * })
             * .then(({ customer }) => {
             *   console.log(customer)
             * })
             */ update: (body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers/me`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method retrieves the logged-in customer's details. The customer must be logged in
             * first with the {@link Auth.login} method.
             *
             * It sends a request to the [Get Logged-In Customer](https://docs.medusajs.com/api/store#customers_getcustomersme)
             * API route.
             *
             * @param query - Configure the fields to retrieve in the customer.
             * @param headers - Headers to pass in the request.
             * @returns The customer's details.
             *
             * @example
             * // TODO must be authenticated as the customer to retrieve their details
             * sdk.store.customer.retrieve()
             * .then(({ customer }) => {
             *   console.log(customer)
             * })
             */ retrieve: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers/me`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method creates an address for the logged-in customer. The customer must be logged in
             * first with the {@link Auth.login} method.
             *
             * It sends a request to the [Create Address](https://docs.medusajs.com/api/store#customers_postcustomersmeaddresses)
             * API route.
             *
             * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
             *
             * @param body - The address's details.
             * @param query - Configure the fields to retrieve in the customer.
             * @param headers - Headers to pass in the request.
             * @returns The customer's details.
             *
             * @example
             * // TODO must be authenticated as the customer to create an address
             * sdk.store.customer.createAddress({
             *   country_code: "us"
             * })
             * .then(({ customer }) => {
             *   console.log(customer)
             * })
             */ createAddress: (body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers/me/addresses`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method updates the address of the logged-in customer. The customer must be logged in
             * first with the {@link Auth.login} method.
             *
             * It sends a request to the [Update Address](https://docs.medusajs.com/api/store#customers_postcustomersmeaddressesaddress_id)
             * API route.
             *
             * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
             *
             * @param addressId - The ID of the address to update.
             * @param body - The details to update in the address.
             * @param query - Configure the fields to retrieve in the customer.
             * @param headers - Headers to pass in the request.
             * @returns The customer's details.
             *
             * @example
             * // TODO must be authenticated as the customer to update their address
             * sdk.store.customer.updateAddress(
             *   "caddr_123",
             *   {
             *     country_code: "us"
             *   }
             * )
             * .then(({ customer }) => {
             *   console.log(customer)
             * })
             */ updateAddress: (addressId, body, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                        method: "POST",
                        headers,
                        body,
                        query
                    });
                }),
            /**
             * This method retrieves the logged-in customer's address. The customer must be logged in
             * first with the {@link Auth.login} method.
             *
             * It sends a request to the [List Customer's Address](https://docs.medusajs.com/api/store#customers_getcustomersmeaddresses)
             * API route.
             *
             * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
             *
             * @param query - Configure the fields to retrieve in the addresses.
             * @param headers - Headers to pass in the request.
             * @returns The paginated list of addresses.
             *
             * @example
             * To retrieve the list of addresses:
             *
             * ```ts
             * // TODO must be authenticated as the customer to list their addresses
             * sdk.store.customer.listAddress()
             * .then(({ addresses, count, offset, limit }) => {
             *   console.log(addresses)
             * })
             * ```
             *
             * To configure the pagination, pass the `limit` and `offset` query parameters.
             *
             * For example, to retrieve only 10 items and skip 10 items:
             *
             * ```ts
             * // TODO must be authenticated as the customer to list their addresses
             * sdk.store.customer.listAddress({
             *   limit: 10,
             *   offset: 10
             * })
             * .then(({ addresses, count, offset, limit }) => {
             *   console.log(addresses)
             * })
             * ```
             *
             * Using the `fields` query parameter, you can specify the fields and relations to retrieve
             * in each address:
             *
             * ```ts
             * // TODO must be authenticated as the customer to list their addresses
             * sdk.store.customer.listAddress({
             *   fields: "id,country_code"
             * })
             * .then(({ addresses, count, offset, limit }) => {
             *   console.log(addresses)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ listAddress: (query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers/me/addresses`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method retrieves an address of the logged-in customer. The customer must be logged in
             * first with the {@link Auth.login} method.
             *
             * It sends a request to the [Get Address](https://docs.medusajs.com/api/store#customers_getcustomersmeaddressesaddress_id)
             * API route.
             *
             * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
             *
             * @param addressId - The address's ID.
             * @param query - Configure the fields to retrieve in the address.
             * @param headers - Headers to pass in the request.
             * @returns The address's details.
             *
             * @example
             * To retrieve an address by its ID:
             *
             * ```ts
             * // TODO must be authenticated as the customer to retrieve their address
             * sdk.store.customer.retrieveAddress(
             *   "caddr_123"
             * )
             * .then(({ address }) => {
             *   console.log(address)
             * })
             * ```
             *
             * To specify the fields and relations to retrieve:
             *
             * ```ts
             * // TODO must be authenticated as the customer to retrieve their address
             * sdk.store.customer.retrieveAddress(
             *   "caddr_123",
             *   {
             *     fields: "id,country_code"
             *   }
             * )
             * .then(({ address }) => {
             *   console.log(address)
             * })
             * ```
             *
             * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
             */ retrieveAddress: (addressId, query, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                        query,
                        headers
                    });
                }),
            /**
             * This method deletes an address of the logged-in customer. The customer must be logged in
             * first with the {@link Auth.login} method.
             *
             * It sends a request to the [Remove Address](https://docs.medusajs.com/api/store#customers_deletecustomersmeaddressesaddress_id)
             * API route.
             *
             * Related guides: [How to manage customer's addresses in the storefront](https://docs.medusajs.com/resources/storefront-development/customers/addresses)
             *
             * @param addressId - The address's ID.
             * @param headers - Headers to pass in the request.
             * @returns The deletion's details.
             *
             * @example
             * // TODO must be authenticated as the customer to delete their address
             * sdk.store.customer.deleteAddress("caddr_123")
             * .then(({ deleted, parent: customer }) => {
             *   console.log(customer)
             * })
             */ deleteAddress: (addressId, headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/customers/me/addresses/${addressId}`, {
                        method: "DELETE",
                        headers
                    });
                })
        };
        /**
         * @tags locale
         */ this.locale = {
            /**
             * This method retrieves the list of supported locales in the store. It sends a request to the
             * [List Locales](https://docs.medusajs.com/api/store#locales_getlocales) API route.
             *
             * @param headers - Headers to pass in the request.
             * @returns The list of supported locales.
             *
             * @example
             * sdk.store.locale.list()
             * .then(({ locales }) => {
             *   console.log(locales)
             * })
             */ list: (headers)=>__awaiter(this, void 0, void 0, function*() {
                    return this.client.fetch(`/store/locales`, {
                        headers
                    });
                })
        };
        this.client = client;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/admin/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/auth/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$store$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/@medusajs/js-sdk/dist/esm/store/index.js [app-rsc] (ecmascript)");
;
;
;
;
class Medusa {
    constructor(config){
        this.client = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Client"](config);
        this.admin = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$admin$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Admin"](this.client);
        this.store = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$store$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Store"](this.client);
        this.auth = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f40$medusajs$2f$js$2d$sdk$2f$dist$2f$esm$2f$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Auth"](this.client, config);
    }
    setLocale(locale) {
        this.client.setLocale(locale);
    }
    getLocale() {
        return this.client.locale;
    }
}
const __TURBOPACK__default__export__ = Medusa;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const __TURBOPACK__layout__$23$0__ = ()=>__turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__not$2d$found__$23$1__ = ()=>__turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__forbidden__$23$2__ = ()=>__turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__unauthorized__$23$3__ = ()=>__turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__global$2d$error__$23$4__ = ()=>__turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__page__$23$5__ = ()=>__turbopack_context__.r("[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    __TURBOPACK__page__$23$5__,
                    "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx"
                ]
            }
        ]
    },
    {
        "layout": [
            __TURBOPACK__layout__$23$0__,
            "[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$1__,
            "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$2__,
            "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$3__,
            "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$4__,
            "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next/dev") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    if (routeModule.isDev) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
    }
    const isMinimalMode = Boolean(("TURBOPACK compile-time value", false) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode'));
    let srcPage = "/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns, deploymentId } = prepareResult;
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    // We use the resolvedPathname instead of the parsedUrl.pathname because it
    // is not rewritten as resolvedPathname is. This will ensure that the correct
    // prerender info is used instead of using the original pathname as the
    // source. If however PPR is enabled and cacheComponents is disabled, we
    // treat the pathname as dynamic. Currently, there's a bug in the PPR
    // implementation that incorrectly leaves %%drp placeholders in the output of
    // parallel routes. This is addressed with cacheComponents.
    const prerenderInfo = nextConfig.experimental.ppr && !nextConfig.cacheComponents && (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(resolvedPathname) ? null : routeModule.match(resolvedPathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') && couldSupportPPR && req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_RESUME_HEADER"]] === '1' && req.method === 'POST') {
        // Decode the postponed state from the request body, it will come as
        // an array of buffers, so collect them and then concat them to form
        // the string.
        const body = [];
        for await (const chunk of req){
            body.push(chunk);
        }
        const postponed = Buffer.concat(body).toString('utf8');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'postponed', postponed);
    }
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // During a PPR revalidation, the RSC request is not dynamic if we do not have the postponed data.
    // We only attach the postponed data during a resume. If there's no postponed data, then it must be a revalidation.
    // This is to ensure that we don't bypass the cache during a revalidation.
    if (isMinimalMode) {
        isDynamicRSCRequest = isDynamicRSCRequest && !!minimalPostponed;
    }
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    const serveStreamingMetadata = isHtmlBot && isRoutePPREnabled ? false : !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && // If this is a html bot request and PPR is enabled, then we don't want
    // to serve a static response.
    !(isHtmlBot && isRoutePPREnabled));
    // When a page supports cacheComponents, we can support RDC for Navigations
    const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
    // In development, we always want to generate dynamic HTML.
    const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof minimalPostponed === 'string' || // If this handler supports onCacheEntryV2, then we can only support
    // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
    // doesn't support it we must fallback to the default behavior.
    (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
    // which will trigger the `supportsDynamicResponse` to be true.
    isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    const render404 = async ()=>{
        // TODO: should route-module itself handle rendering the 404
        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
            await routerServerContext.render404(req, res, parsedUrl, false);
        } else {
            res.end('This page could not be found');
        }
        return null;
    };
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${srcPage}`);
                }
            });
        };
        const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache');
        const doRender = async ({ span, postponed, fallbackRouteParams, forceStaticRender })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                    sendErrorsToBrowser: routerServerContext == null ? void 0 : routerServerContext.sendErrorsToBrowser,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    images: nextConfig.images,
                    previewProps: prerenderManifest.preview,
                    deploymentId: deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache,
                    cacheLifeProfiles: nextConfig.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    cacheComponents: Boolean(nextConfig.cacheComponents),
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                        clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins,
                        maxPostponedStateSizeBytes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMaxPostponedStateSize"])(nextConfig.experimental.maxPostponedStateSize)
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext, silenceLog)=>routeModule.onRequestError(req, error, errorContext, silenceLog, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                context.renderOpts.nextExport = true;
                context.renderOpts.supportsDynamicResponse = false;
                context.renderOpts.isDebugDynamicAccesses = isDebugDynamicAccesses;
            }
            // When we're revalidating in the background, we should not allow dynamic
            // responses.
            if (forceStaticRender) {
                context.renderOpts.supportsDynamicResponse = false;
            }
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousIncrementalCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    if (nextConfig.experimental.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                // When cacheComponents is enabled, we can use the fallback
                // response if the request is not a dynamic RSC request because the
                // RSC data when this feature flag is enabled does not contain any
                // param references. Without this feature flag enabled, the RSC data
                // contains param references, and therefore we can't use the fallback.
                if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                    const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                    const fallbackRouteParams = // can use the manifest fallback route params.
                    isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    const fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams,
                                forceStaticRender: false
                            }),
                        waitUntil: ctx.waitUntil,
                        isMinimalMode
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // If this is a dynamic RSC request, we should use the postponed data from
            // the static render (if available). This ensures that we can utilize the
            // resume data cache (RDC) from the static render to ensure that the data
            // is consistent between the static and dynamic renders.
            if (supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && isDynamicRSCRequest && // We don't typically trigger an on-demand revalidation for dynamic RSC
            // requests, as we're typically revalidating the page in the background
            // instead. However, if the cache entry is stale, we should trigger a
            // background revalidation on dynamic RSC requests. This prevents us
            // from entering an infinite loop of revalidations.
            !forceStaticRender) {
                const incrementalCacheEntry = await incrementalCache.get(resolvedPathname, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE,
                    isRoutePPREnabled: true,
                    isFallback: false
                });
                // If the cache entry is found, we should use the postponed data from
                // the cache.
                if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    // CRITICAL: we're assigning the postponed data from the cache entry
                    // here as we're using the RDC to resume the render.
                    postponed = incrementalCacheEntry.value.postponed;
                    // If the cache entry is stale, we should trigger a background
                    // revalidation so that subsequent requests will get a fresh response.
                    if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                    // the requested revalidation flow is either foreground or
                    // background.
                    (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                        // We want to schedule this on the next tick to ensure that the
                        // render is not blocked on it.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(async ()=>{
                            const responseCache = routeModule.getResponseCache(req);
                            try {
                                await responseCache.revalidate(resolvedPathname, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                        ...c,
                                        // CRITICAL: we need to set this to true as we're
                                        // revalidating in the background and typically this dynamic
                                        // RSC request is not treated as static.
                                        forceStaticRender: true
                                    }), // previous cache entry here (which is stale) will switch on
                                // isOnDemandRevalidate and break the prerendering.
                                null, hasResolved, ctx.waitUntil);
                            } catch (err) {
                                console.error('Error revalidating the page in the background', err);
                            }
                        });
                    }
                }
            }
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            const fallbackRouteParams = // can use the manifest fallback route params if we need to render the
            // fallback shell.
            isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams,
                forceStaticRender
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil,
                isMinimalMode
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!isMinimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (isDynamicRSCRequest) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options. If we support RDC for Navigations, we
            // prefer the `onCacheEntryV2` callback. Once RDC for Navigations is the
            // default, we can remove the fallback to `onCacheEntry` as
            // `onCacheEntryV2` is now fully supported.
            const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry(cacheEntry, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL') ?? req.url
                });
                if (finished) return null;
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!isMinimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone && !isDynamicRSCRequest) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    // If the response is not an RSC response, then we can't serve it.
                    if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                        if (nextConfig.cacheComponents) {
                            res.statusCode = 404;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                                req,
                                res,
                                generateEtags: nextConfig.generateEtags,
                                poweredByHeader: nextConfig.poweredByHeader,
                                result: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                                cacheControl: cacheEntry.cacheControl
                            });
                        } else {
                            // Otherwise this case is not expected.
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`), "__NEXT_ERROR_CODE", {
                                value: "E789",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            const body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || isMinimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null,
                forceStaticRender: false
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${srcPage}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            const silenceLog = false;
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isStaticGeneration: isSSG,
                    isOnDemandRevalidate
                })
            }, silenceLog, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"],
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"],
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_0 => "[project]/LVCC-GitHub/LVCC/storefront/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_1 => "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/LVCC-GitHub/LVCC/storefront/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$LVCC$2d$GitHub$2f$LVCC$2f$storefront$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/LVCC-GitHub/LVCC/storefront/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=8048c_cf0e6e90._.js.map