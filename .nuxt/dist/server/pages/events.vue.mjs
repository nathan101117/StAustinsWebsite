import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../public/stilletos.jpg.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "font-sans text-gray-900 bg-white" }, _attrs))}><section class="py-24 px-6 bg-gradient-to-b from-white to-gray-100"><div class="max-w-6xl mx-auto"><h3 class="text-4xl font-bold text-center mb-12">Upcoming Events</h3><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10"><div class="bg-white shadow-lg rounded-xl overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="Stilettos &amp; Spanners Poster" class="w-full h-60 object-cover"><div class="p-6"><h4 class="text-xl font-bold mb-2">Stilettos &amp; Spanners</h4><p class="text-gray-600 mb-2">📍 Langata/Karen Road – Opposite Nairobi Academy</p><p class="text-gray-600 mb-2">📅 April 4 &amp; 5, 2025 | 🕗 08:00 – 16:30</p><p class="text-gray-600 text-sm">Learn how to change a spare wheel, check tyre pressure, top up fluids, and more.</p></div></div><div class="bg-white shadow-lg rounded-xl overflow-hidden flex items-center justify-center text-gray-400"><p>More events coming soon...</p></div></div></div></section><section class="py-24 px-6 bg-white"><div class="max-w-6xl mx-auto"><h3 class="text-4xl font-bold text-center mb-12">Past Events</h3><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10"><div class="bg-gray-100 rounded-xl p-6 text-center text-gray-500"><h4 class="text-xl font-semibold mb-2">Car Basics for Beginners</h4><p class="text-sm">Held in January 2024 at St. Austins - Hardy. Covered basic car maintenance skills and diagnostics.</p></div><div class="bg-gray-100 rounded-xl p-6 text-center text-gray-500"><h4 class="text-xl font-semibold mb-2">Fleet Maintenance Seminar</h4><p class="text-sm">November 2023, Jacaranda Motors. Focused on company fleet management and preventive service.</p></div></div></div></section></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const events = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  events as default
};
//# sourceMappingURL=events.vue.mjs.map
