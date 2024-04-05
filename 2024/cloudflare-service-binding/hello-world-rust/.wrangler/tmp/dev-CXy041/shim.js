// .wrangler/tmp/bundle-NbZHQh/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// build/worker/shim.mjs
import H from "./94c63bb468e1acdfaee76fd609546b48bc3c7d0a-index.wasm";
import Xt from "./94c63bb468e1acdfaee76fd609546b48bc3c7d0a-index.wasm";
var z = Object.defineProperty;
var I = (e, t) => {
  for (var r in t)
    z(e, r, { get: t[r], enumerable: true });
};
var b = {};
I(b, { IntoUnderlyingByteSource: () => T, IntoUnderlyingSink: () => q, IntoUnderlyingSource: () => C, MinifyConfig: () => L, PipeOptions: () => $, PolishConfig: () => G, QueuingStrategy: () => F, R2Range: () => W, ReadableStreamGetReaderOptions: () => R, RequestRedirect: () => Q, __wbg_buffer_4e79326814bdd393: () => ft, __wbg_buffer_55ba7a6b1b92e2ac: () => Nt, __wbg_byobRequest_08c18cee35def1f4: () => it, __wbg_byteLength_5299848ed3264181: () => gt, __wbg_byteOffset_b69b0a07afccce19: () => at, __wbg_call_587b30eea3e09332: () => Mt, __wbg_cause_52959bcad93f9e0f: () => jt, __wbg_cf_703652f0d2c5b8d1: () => pt, __wbg_close_da7e6fb9d9851e5a: () => ut, __wbg_close_e9110ca16e2567db: () => ot, __wbg_enqueue_d71a1a518e21f5c3: () => st, __wbg_error_a7e23606158b68b9: () => Et, __wbg_headers_1eff4f53324496e6: () => lt, __wbg_instanceof_Error_fac23a8832b241da: () => At, __wbg_length_0aab7ffd65ad19ed: () => Ft, __wbg_method_e15eb9cf1c32cdbb: () => bt, __wbg_new_143b41b4342650bb: () => ht, __wbg_new_2b55e405e4af4986: () => Tt, __wbg_new_2b6fea4ea03b1b95: () => St, __wbg_new_87297f22973157c8: () => kt, __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b: () => $t, __wbg_newwithlength_89eeca401d8918c2: () => Lt, __wbg_newwithoptbuffersourceandinit_6c49960a834dd7cf: () => yt, __wbg_newwithoptreadablestreamandinit_d238e5b972c7b57f: () => vt, __wbg_newwithoptstrandinit_ff70839f3334d3aa: () => xt, __wbg_resolve_ae38ad63c43ff98b: () => qt, __wbg_respond_8fadc5f5c9d95422: () => wt, __wbg_set_07da13cc24b69217: () => Rt, __wbg_set_3698e3ca519b3c3c: () => Wt, __wbg_set_76353df4722f4954: () => mt, __wbg_then_8df675b8bb5d5e3c: () => Ct, __wbg_toString_506566b763774a16: () => Ot, __wbg_url_3325e0ef088003ca: () => dt, __wbg_view_231340b0dd8a2484: () => ct, __wbindgen_cb_drop: () => _t, __wbindgen_closure_wrapper2000: () => Jt, __wbindgen_debug_string: () => zt, __wbindgen_memory: () => Ht, __wbindgen_number_new: () => tt, __wbindgen_object_clone_ref: () => nt, __wbindgen_object_drop_ref: () => Dt, __wbindgen_string_get: () => rt, __wbindgen_string_new: () => et, __wbindgen_throw: () => It, fetch: () => D, getMemory: () => P });
var J = new WebAssembly.Instance(H, { "./index_bg.js": b });
var n = J.exports;
function P() {
  return n.memory;
}
var l = new Array(128).fill(void 0);
l.push(void 0, null, true, false);
var x = l.length;
function u(e) {
  x === l.length && l.push(l.length + 1);
  let t = x;
  if (x = l[t], typeof x != "number")
    throw new Error("corrupt heap");
  return l[t] = e, t;
}
var U = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var N = new U("utf-8", { ignoreBOM: true, fatal: true });
N.decode();
var A = null;
function j() {
  return (A === null || A.byteLength === 0) && (A = new Uint8Array(n.memory.buffer)), A;
}
function h(e, t) {
  return e = e >>> 0, N.decode(j().subarray(e, e + t));
}
function s(e) {
  return l[e];
}
var E = 0;
var B = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var O = new B("utf-8");
var V = typeof O.encodeInto == "function" ? function(e, t) {
  return O.encodeInto(e, t);
} : function(e, t) {
  let r = O.encode(e);
  return t.set(r), { read: e.length, written: r.length };
};
function M(e, t, r) {
  if (typeof e != "string")
    throw new Error("expected a string argument");
  if (r === void 0) {
    let a = O.encode(e), y = t(a.length) >>> 0;
    return j().subarray(y, y + a.length).set(a), E = a.length, y;
  }
  let _ = e.length, o = t(_) >>> 0, f = j(), w = 0;
  for (; w < _; w++) {
    let a = e.charCodeAt(w);
    if (a > 127)
      break;
    f[o + w] = a;
  }
  if (w !== _) {
    w !== 0 && (e = e.slice(w)), o = r(o, _, _ = w + e.length * 3) >>> 0;
    let a = j().subarray(o + w, o + _), y = V(e, a);
    if (y.read !== e.length)
      throw new Error("failed to pass whole string");
    w += y.written;
  }
  return E = w, o;
}
function p(e) {
  return e == null;
}
var k = null;
function g() {
  return (k === null || k.byteLength === 0) && (k = new Int32Array(n.memory.buffer)), k;
}
function K(e) {
  e < 132 || (l[e] = x, x = e);
}
function d(e) {
  let t = s(e);
  return K(e), t;
}
function v(e) {
  if (typeof e != "boolean")
    throw new Error("expected a boolean argument");
}
function S(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let o = e.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (t == "function") {
    let o = e.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(e)) {
    let o = e.length, f = "[";
    o > 0 && (f += S(e[0]));
    for (let w = 1; w < o; w++)
      f += ", " + S(e[w]);
    return f += "]", f;
  }
  let r = /\[object ([^\]]+)\]/.exec(toString.call(e)), _;
  if (r.length > 1)
    _ = r[1];
  else
    return toString.call(e);
  if (_ == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
function X(e, t, r, _) {
  let o = { a: e, b: t, cnt: 1, dtor: r }, f = (...w) => {
    o.cnt++;
    let a = o.a;
    o.a = 0;
    try {
      return _(a, o.b, ...w);
    } finally {
      --o.cnt === 0 ? n.__wbindgen_export_2.get(o.dtor)(a, o.b) : o.a = a;
    }
  };
  return f.original = o, f;
}
function c(e, t) {
  try {
    return e.apply(this, t);
  } catch (r) {
    let _ = function() {
      try {
        return r instanceof Error ? `${r.message}

Stack:
${r.stack}` : r.toString();
      } catch {
        return "<failed to stringify thrown value>";
      }
    }();
    throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", _), r;
  }
}
function i(e) {
  if (typeof e != "number")
    throw new Error("expected a number argument");
}
function Y(e, t, r) {
  i(e), i(t), n._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hdc785cf4cc48d529(e, t, u(r));
}
function D(e, t, r) {
  let _ = n.fetch(u(e), u(t), u(r));
  return d(_);
}
function m(e, t) {
  try {
    return e.apply(this, t);
  } catch (r) {
    n.__wbindgen_exn_store(u(r));
  }
}
function Z(e, t, r, _) {
  i(e), i(t), n.wasm_bindgen__convert__closures__invoke2_mut__h2a8e2dd756675a93(e, t, u(r), u(_));
}
var G = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var Q = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var T = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t, r;
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let f = n.__wbindgen_add_to_stack_pointer(-16);
      i(this.__wbg_ptr), n.intounderlyingbytesource_type(f, this.__wbg_ptr);
      var _ = g()[f / 4 + 0], o = g()[f / 4 + 1];
      return t = _, r = o, h(_, o);
    } finally {
      n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(t, r);
    }
  }
  get autoAllocateChunkSize() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr), n.intounderlyingbytesource_start(this.__wbg_ptr, u(t));
  }
  pull(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr);
    let r = n.intounderlyingbytesource_pull(this.__wbg_ptr, u(t));
    return d(r);
  }
  cancel() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    i(t), n.intounderlyingbytesource_cancel(t);
  }
};
var q = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr);
    let r = n.intounderlyingsink_write(this.__wbg_ptr, u(t));
    return d(r);
  }
  close() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    i(t);
    let r = n.intounderlyingsink_close(t);
    return d(r);
  }
  abort(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let r = this.__destroy_into_raw();
    i(r);
    let _ = n.intounderlyingsink_abort(r, u(t));
    return d(_);
  }
};
var C = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr);
    let r = n.intounderlyingsource_pull(this.__wbg_ptr, u(t));
    return d(r);
  }
  cancel() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    i(t), n.intounderlyingsource_cancel(t);
  }
};
var L = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_minifyconfig_free(t);
  }
  get js() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr), v(t), n.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
  get html() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr), v(t), n.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  get css() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr), v(t), n.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
};
var $ = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.pipeoptions_preventClose(this.__wbg_ptr) !== 0;
  }
  get preventCancel() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.pipeoptions_preventCancel(this.__wbg_ptr) !== 0;
  }
  get preventAbort() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.pipeoptions_preventAbort(this.__wbg_ptr) !== 0;
  }
  get signal() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr);
    let t = n.pipeoptions_signal(this.__wbg_ptr);
    return d(t);
  }
};
var F = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return i(this.__wbg_ptr), n.queuingstrategy_highWaterMark(this.__wbg_ptr);
  }
};
var W = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let _ = n.__wbindgen_add_to_stack_pointer(-16);
      i(this.__wbg_ptr), n.__wbg_get_r2range_offset(_, this.__wbg_ptr);
      var t = g()[_ / 4 + 0], r = g()[_ / 4 + 1];
      return t === 0 ? void 0 : r >>> 0;
    } finally {
      n.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr), p(t) || i(t), n.__wbg_set_r2range_offset(this.__wbg_ptr, !p(t), p(t) ? 0 : t);
  }
  get length() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let _ = n.__wbindgen_add_to_stack_pointer(-16);
      i(this.__wbg_ptr), n.__wbg_get_r2range_length(_, this.__wbg_ptr);
      var t = g()[_ / 4 + 0], r = g()[_ / 4 + 1];
      return t === 0 ? void 0 : r >>> 0;
    } finally {
      n.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr), p(t) || i(t), n.__wbg_set_r2range_length(this.__wbg_ptr, !p(t), p(t) ? 0 : t);
  }
  get suffix() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let _ = n.__wbindgen_add_to_stack_pointer(-16);
      i(this.__wbg_ptr), n.__wbg_get_r2range_suffix(_, this.__wbg_ptr);
      var t = g()[_ / 4 + 0], r = g()[_ / 4 + 1];
      return t === 0 ? void 0 : r >>> 0;
    } finally {
      n.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr), p(t) || i(t), n.__wbg_set_r2range_suffix(this.__wbg_ptr, !p(t), p(t) ? 0 : t);
  }
};
var R = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    i(this.__wbg_ptr);
    let t = n.readablestreamgetreaderoptions_mode(this.__wbg_ptr);
    return d(t);
  }
};
function tt(e) {
  return u(e);
}
function et(e, t) {
  let r = h(e, t);
  return u(r);
}
function rt(e, t) {
  let r = s(t), _ = typeof r == "string" ? r : void 0;
  var o = p(_) ? 0 : M(_, n.__wbindgen_malloc, n.__wbindgen_realloc), f = E;
  g()[e / 4 + 1] = f, g()[e / 4 + 0] = o;
}
function nt(e) {
  let t = s(e);
  return u(t);
}
function _t(e) {
  let t = d(e).original;
  if (t.cnt-- == 1)
    return t.a = 0, true;
  let r = false;
  return v(r), r;
}
function ot() {
  return c(function(e) {
    s(e).close();
  }, arguments);
}
function st() {
  return c(function(e, t) {
    s(e).enqueue(s(t));
  }, arguments);
}
function it() {
  return c(function(e) {
    let t = s(e).byobRequest;
    return p(t) ? 0 : u(t);
  }, arguments);
}
function ut() {
  return c(function(e) {
    s(e).close();
  }, arguments);
}
function ct() {
  return c(function(e) {
    let t = s(e).view;
    return p(t) ? 0 : u(t);
  }, arguments);
}
function wt() {
  return c(function(e, t) {
    s(e).respond(t >>> 0);
  }, arguments);
}
function ft() {
  return c(function(e) {
    let t = s(e).buffer;
    return u(t);
  }, arguments);
}
function at() {
  return c(function(e) {
    let t = s(e).byteOffset;
    return i(t), t;
  }, arguments);
}
function gt() {
  return c(function(e) {
    let t = s(e).byteLength;
    return i(t), t;
  }, arguments);
}
function pt() {
  return c(function(e) {
    let t = s(e).cf;
    return p(t) ? 0 : u(t);
  }, arguments);
}
function bt() {
  return c(function(e, t) {
    let r = s(t).method, _ = M(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = E;
    g()[e / 4 + 1] = o, g()[e / 4 + 0] = _;
  }, arguments);
}
function dt() {
  return c(function(e, t) {
    let r = s(t).url, _ = M(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = E;
    g()[e / 4 + 1] = o, g()[e / 4 + 0] = _;
  }, arguments);
}
function lt() {
  return c(function(e) {
    let t = s(e).headers;
    return u(t);
  }, arguments);
}
function ht() {
  return m(function() {
    let e = new Headers();
    return u(e);
  }, arguments);
}
function mt() {
  return m(function(e, t, r, _, o) {
    s(e).set(h(t, r), h(_, o));
  }, arguments);
}
function yt() {
  return m(function(e, t) {
    let r = new Response(s(e), s(t));
    return u(r);
  }, arguments);
}
function xt() {
  return m(function(e, t, r) {
    let _ = new Response(e === 0 ? void 0 : h(e, t), s(r));
    return u(_);
  }, arguments);
}
function vt() {
  return m(function(e, t) {
    let r = new Response(s(e), s(t));
    return u(r);
  }, arguments);
}
function Et() {
  return c(function(e) {
    console.error(s(e));
  }, arguments);
}
function At() {
  return c(function(e) {
    let t;
    try {
      t = s(e) instanceof Error;
    } catch {
      t = false;
    }
    let r = t;
    return v(r), r;
  }, arguments);
}
function kt() {
  return c(function(e, t) {
    let r = new Error(h(e, t));
    return u(r);
  }, arguments);
}
function jt() {
  return c(function(e) {
    let t = s(e).cause;
    return u(t);
  }, arguments);
}
function Ot() {
  return c(function(e) {
    let t = s(e).toString();
    return u(t);
  }, arguments);
}
function Mt() {
  return m(function(e, t, r) {
    let _ = s(e).call(s(t), s(r));
    return u(_);
  }, arguments);
}
function St() {
  return c(function() {
    let e = new Object();
    return u(e);
  }, arguments);
}
function Tt() {
  return c(function(e, t) {
    try {
      var r = { a: e, b: t }, _ = (f, w) => {
        let a = r.a;
        r.a = 0;
        try {
          return Z(a, r.b, f, w);
        } finally {
          r.a = a;
        }
      };
      let o = new Promise(_);
      return u(o);
    } finally {
      r.a = r.b = 0;
    }
  }, arguments);
}
function qt() {
  return c(function(e) {
    let t = Promise.resolve(s(e));
    return u(t);
  }, arguments);
}
function Ct() {
  return c(function(e, t) {
    let r = s(e).then(s(t));
    return u(r);
  }, arguments);
}
function Lt() {
  return c(function(e) {
    let t = new Uint8Array(e >>> 0);
    return u(t);
  }, arguments);
}
function $t() {
  return c(function(e, t, r) {
    let _ = new Uint8Array(s(e), t >>> 0, r >>> 0);
    return u(_);
  }, arguments);
}
function Ft() {
  return c(function(e) {
    let t = s(e).length;
    return i(t), t;
  }, arguments);
}
function Wt() {
  return c(function(e, t, r) {
    s(e).set(s(t), r >>> 0);
  }, arguments);
}
function Rt() {
  return m(function(e, t, r) {
    let _ = Reflect.set(s(e), s(t), s(r));
    return v(_), _;
  }, arguments);
}
function Dt(e) {
  d(e);
}
function Nt() {
  return c(function(e) {
    let t = s(e).buffer;
    return u(t);
  }, arguments);
}
function zt(e, t) {
  let r = S(s(t)), _ = M(r, n.__wbindgen_malloc, n.__wbindgen_realloc), o = E;
  g()[e / 4 + 1] = o, g()[e / 4 + 0] = _;
}
function It(e, t) {
  throw new Error(h(e, t));
}
function Ht() {
  let e = n.memory;
  return u(e);
}
function Jt() {
  return c(function(e, t, r) {
    let _ = X(e, t, 71, Y);
    return u(_);
  }, arguments);
}
var Yt = { fetch: D, scheduled: void 0, queue: void 0 };

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-NbZHQh/middleware-insertion-facade.js
Yt.middleware = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
  ...Yt.middleware ?? []
].filter(Boolean);
var middleware_insertion_facade_default = Yt;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-NbZHQh/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (worker.middleware === void 0 || worker.middleware.length === 0) {
    return worker;
  }
  for (const middleware of worker.middleware) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (klass.middleware === void 0 || klass.middleware.length === 0) {
    return klass;
  }
  for (const middleware of klass.middleware) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  T as IntoUnderlyingByteSource,
  q as IntoUnderlyingSink,
  C as IntoUnderlyingSource,
  L as MinifyConfig,
  $ as PipeOptions,
  G as PolishConfig,
  F as QueuingStrategy,
  W as R2Range,
  R as ReadableStreamGetReaderOptions,
  Q as RequestRedirect,
  ft as __wbg_buffer_4e79326814bdd393,
  Nt as __wbg_buffer_55ba7a6b1b92e2ac,
  it as __wbg_byobRequest_08c18cee35def1f4,
  gt as __wbg_byteLength_5299848ed3264181,
  at as __wbg_byteOffset_b69b0a07afccce19,
  Mt as __wbg_call_587b30eea3e09332,
  jt as __wbg_cause_52959bcad93f9e0f,
  pt as __wbg_cf_703652f0d2c5b8d1,
  ut as __wbg_close_da7e6fb9d9851e5a,
  ot as __wbg_close_e9110ca16e2567db,
  st as __wbg_enqueue_d71a1a518e21f5c3,
  Et as __wbg_error_a7e23606158b68b9,
  lt as __wbg_headers_1eff4f53324496e6,
  At as __wbg_instanceof_Error_fac23a8832b241da,
  Ft as __wbg_length_0aab7ffd65ad19ed,
  bt as __wbg_method_e15eb9cf1c32cdbb,
  ht as __wbg_new_143b41b4342650bb,
  Tt as __wbg_new_2b55e405e4af4986,
  St as __wbg_new_2b6fea4ea03b1b95,
  kt as __wbg_new_87297f22973157c8,
  $t as __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b,
  Lt as __wbg_newwithlength_89eeca401d8918c2,
  yt as __wbg_newwithoptbuffersourceandinit_6c49960a834dd7cf,
  vt as __wbg_newwithoptreadablestreamandinit_d238e5b972c7b57f,
  xt as __wbg_newwithoptstrandinit_ff70839f3334d3aa,
  qt as __wbg_resolve_ae38ad63c43ff98b,
  wt as __wbg_respond_8fadc5f5c9d95422,
  Rt as __wbg_set_07da13cc24b69217,
  Wt as __wbg_set_3698e3ca519b3c3c,
  mt as __wbg_set_76353df4722f4954,
  Ct as __wbg_then_8df675b8bb5d5e3c,
  Ot as __wbg_toString_506566b763774a16,
  dt as __wbg_url_3325e0ef088003ca,
  ct as __wbg_view_231340b0dd8a2484,
  _t as __wbindgen_cb_drop,
  Jt as __wbindgen_closure_wrapper2000,
  zt as __wbindgen_debug_string,
  Ht as __wbindgen_memory,
  tt as __wbindgen_number_new,
  nt as __wbindgen_object_clone_ref,
  Dt as __wbindgen_object_drop_ref,
  rt as __wbindgen_string_get,
  et as __wbindgen_string_new,
  It as __wbindgen_throw,
  middleware_loader_entry_default as default,
  D as fetch,
  P as getMemory,
  Xt as wasmModule
};
//# sourceMappingURL=shim.js.map
