import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _imports_0 = "" + __buildAssetsURL("im-bank.CXTgP-Nx.png");

const _imports_1 = "" + __buildAssetsURL("gok.BLrytXSD.png");

const _imports_2 = "" + __buildAssetsURL("mrm.DzyGwKJ1.png");

const _imports_3 = "" + __buildAssetsURL("tc.BMl_PvwS.png");

const _imports_4 = "" + __buildAssetsURL("jubilee.D_XD_nfB.png");

const _imports_5 = "" + __buildAssetsURL("twiga.B9SEC5in.png");

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-gray-100" }, _attrs))}><section id="clients" class="py-24 px-6 bg-gray-100"><div class="text-center mb-16"><h3 class="text-4xl font-bold">Our Clients</h3><p class="text-gray-600 mt-2">We’re trusted by institutions and organizations across Kenya</p></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"><div class="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"><img${ssrRenderAttr("src", _imports_0)} alt="I&amp;M Bank" class="h-16 w-auto mb-3"><p class="text-gray-800 font-medium">I&amp;M Bank</p></div><div class="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"><img${ssrRenderAttr("src", _imports_1)} alt="Ministries of Government" class="h-16 w-auto mb-3"><p class="text-gray-800 font-medium text-center">Ministries of Government</p></div><div class="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"><img${ssrRenderAttr("src", _imports_2)} alt="Mabati Rolling Mills" class="h-16 w-auto mb-3"><p class="text-gray-800 font-medium text-center">Mabati Rolling Mills</p></div><div class="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"><img${ssrRenderAttr("src", _imports_3)} alt="Tile &amp; Carpet Centre" class="h-16 w-auto mb-3"><p class="text-gray-800 font-medium text-center">Tile &amp; Carpet Centre</p></div><div class="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"><img${ssrRenderAttr("src", _imports_4)} alt="Jubilee Allianz Insurance" class="h-16 w-auto mb-3"><p class="text-gray-800 font-medium text-center">Jubilee Allianz Insurance</p></div><div class="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300"><img${ssrRenderAttr("src", _imports_5)} alt="Twiga Tours" class="h-16 w-auto mb-3"><p class="text-gray-800 font-medium text-center">Twiga Tours</p></div></div></section><section class="py-24 px-6 bg-white"><h3 class="text-4xl font-bold text-center mb-12">Client Testimonials</h3><div class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"><div class="bg-gray-50 p-6 rounded-lg shadow"><p class="text-gray-700 italic mb-4">&quot;St. Austins keeps our delivery vehicles road-ready 24/7. A game-changer for our logistics.&quot;</p><p class="text-gray-800 font-semibold">— Peter M., Logistics Manager at Twiga Tours</p></div><div class="bg-gray-50 p-6 rounded-lg shadow"><p class="text-gray-700 italic mb-4">&quot;I’ve never had a smoother experience dealing with fleet servicing. Reliable and professional.&quot;</p><p class="text-gray-800 font-semibold">— Sylvia K., Procurement Lead, Tile &amp; Carpet Centre</p></div><div class="bg-gray-50 p-6 rounded-lg shadow"><p class="text-gray-700 italic mb-4">&quot;From diagnostics to paintwork — everything was on point. Highly recommend St. Austins!&quot;</p><p class="text-gray-800 font-semibold">— Brian O., Facility Manager, Mabati Rolling Mills</p></div><div class="bg-gray-50 p-6 rounded-lg shadow"><p class="text-gray-700 italic mb-4">&quot;The team is courteous, knowledgeable, and quick. We trust them with all our government fleet.&quot;</p><p class="text-gray-800 font-semibold">— Clara N., Ministry of Infrastructure</p></div></div></section></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/clients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const clients = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { clients as default };
//# sourceMappingURL=clients.vue.mjs.map
