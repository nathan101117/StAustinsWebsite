import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import _imports_0 from "../public/team/johndoe.png.mjs";
import _imports_1 from "../public/team/janesmith.png.mjs";
import _imports_2 from "../public/team/paulotieno.png.mjs";
import _imports_3 from "../public/team/lindawanjiku.png.mjs";
const _sfc_main = {
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "font-sans text-gray-900 bg-white py-24 px-6" }, _attrs))}><div class="max-w-7xl mx-auto"><h3 class="text-4xl font-bold text-center mb-12">Meet the Team</h3><div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"><div class="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden text-center"><img${ssrRenderAttr("src", _imports_0)} alt="John Doe" class="w-full h-60 object-cover"><div class="p-4"><h4 class="text-lg font-semibold">John Doe</h4><p class="text-gray-600 text-sm">Managing Director</p></div></div><div class="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden text-center"><img${ssrRenderAttr("src", _imports_1)} alt="Jane Smith" class="w-full h-60 object-cover"><div class="p-4"><h4 class="text-lg font-semibold">Jane Smith</h4><p class="text-gray-600 text-sm">Operations Manager</p></div></div><div class="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden text-center"><img${ssrRenderAttr("src", _imports_2)} alt="Paul Otieno" class="w-full h-60 object-cover"><div class="p-4"><h4 class="text-lg font-semibold">Paul Otieno</h4><p class="text-gray-600 text-sm">Finance &amp; Admin</p></div></div><div class="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden text-center"><img${ssrRenderAttr("src", _imports_3)} alt="Linda Wanjiku" class="w-full h-60 object-cover"><div class="p-4"><h4 class="text-lg font-semibold">Linda Wanjiku</h4><p class="text-gray-600 text-sm">Customer Relations</p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=team.vue.mjs.map
