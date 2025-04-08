import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { a as __nuxt_component_1 } from './server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.png.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="fixed w-full bg-white/90 backdrop-blur-md shadow z-[999]"><nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"><div class="flex items-center space-x-3"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="h-8 w-8 object-contain"><h1 class="text-2xl font-extrabold tracking-wide text-gray-900 uppercase">St. Austins</h1></div><ul class="hidden md:flex space-x-10 text-sm font-semibold uppercase"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-800 hover:text-orange-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#about" class="text-gray-800 hover:text-orange-600 transition">About</a></li><li><a href="#services" class="text-gray-800 hover:text-orange-600 transition">Services</a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/clients",
        class: "text-gray-800 hover:text-orange-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Clients`);
          } else {
            return [
              createTextVNode("Clients")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/team",
        class: "text-gray-800 hover:text-orange-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Meet the Team`);
          } else {
            return [
              createTextVNode("Meet the Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/events",
        class: "text-gray-800 hover:text-orange-600 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Events`);
          } else {
            return [
              createTextVNode("Events")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="#contact" class="text-gray-800 hover:text-orange-600 transition">Contact</a></li></ul></nav></header>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<footer class="bg-gray-900 text-white text-center py-8 mt-20"><p class="text-sm">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} St. Austins Service Centre. All rights reserved.</p></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
