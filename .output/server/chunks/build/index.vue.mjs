import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logo.png.mjs';

const _imports_0 = "" + __buildAssetsURL("image.Uvos_KFH.png");

const _imports_1 = "" + __buildAssetsURL("workshop-popup.CHnRwXqV.png");

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopup = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-gray-100" }, _attrs))}><section class="relative w-full h-screen flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} alt="Workshop" class="absolute inset-0 w-full h-full object-cover z-0"><div class="absolute inset-0 bg-black/60 z-10"></div><div class="relative z-20 text-white text-center px-6 animate-fade-in"><h2 class="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">Drive. Repair. Repeat.</h2><p class="text-lg md:text-xl mb-6 font-light drop-shadow-md">Automotive Service Excellence Since 1974</p><a href="#contact" class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">Book Appointment</a></div></section><section id="about" class="py-24 px-6 text-center max-w-5xl mx-auto"><h3 class="text-4xl font-bold mb-6">About Us</h3><p class="text-lg text-gray-700 leading-8"> Founded in 1974 in Nairobi, St. Austins Service Centre has grown into a leading automotive service hub. Merging with Concorde Motor Ltd in 2017 elevated our reputation and allowed expansion to branches like Lang&#39;ata and Hardy. Our facilities are ultra-modern, and our values remain rooted in integrity, expertise, and customer care. </p></section><section id="services" class="py-24 px-6 bg-[url(&#39;/public/image.png&#39;)] bg-cover bg-center bg-no-repeat relative"><div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div><div class="relative z-10 max-w-6xl mx-auto text-center text-white"><h3 class="text-4xl font-bold mb-14">Our Services</h3><div class="grid md:grid-cols-3 gap-10"><div class="bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transition duration-300"><h4 class="text-xl font-semibold mb-3 text-orange-400">Mechanical Repairs</h4><p class="text-gray-100">Engine diagnostics, suspension, brake systems, and preventive maintenance.</p></div><div class="bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transition duration-300"><h4 class="text-xl font-semibold mb-3 text-orange-400">Body Shop</h4><p class="text-gray-100">Collision repair, body restoration, and professional auto painting.</p></div><div class="bg-white/10 border border-white/20 p-8 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transition duration-300"><h4 class="text-xl font-semibold mb-3 text-orange-400">Spare Parts</h4><p class="text-gray-100">We source genuine parts directly from Germany, Dubai, Japan &amp; USA.</p></div></div></div></section><div class="fixed bottom-6 right-6 z-[1000]"><button class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg transition">Subscribe</button></div>`);
      if (unref(showPopup)) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"><div class="flex flex-col md:flex-row max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl relative"><div class="md:w-1/2"><img${ssrRenderAttr("src", _imports_1)} alt="Workshop" class="w-full h-full object-cover"></div><div class="md:w-1/2 p-8"><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo" class="h-6 mb-4"><h4 class="text-xl font-bold mb-2">READY TO CLAIM <span class="text-orange-600">10%</span> OFF?</h4><p class="text-gray-700 mb-4 text-sm leading-relaxed"> Sign-Up and stay posted. Claim 10% off your next service. Join our inner circle and stay up-to-date on our latest and upcoming trends, </p><input type="email" placeholder="email" class="w-full px-4 py-2 border rounded mb-4"><button class="w-full bg-black text-white font-semibold py-2 rounded hover:bg-orange-600 transition">CLAIM DISCOUNT</button><p class="mt-3 text-xs text-center text-gray-500 italic cursor-pointer hover:underline">no thanks, I prefer full price</p><button class="absolute top-2 right-3 text-gray-500 text-2xl font-bold hover:text-red-600">×</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section id="contact" class="py-24 px-6"><div class="max-w-3xl mx-auto text-center"><h3 class="text-4xl font-bold mb-6">Contact Us</h3><p class="text-gray-700 text-lg mb-2">📍 Off Lang’ata Road – Opposite Nairobi Academy, Karen Nairobi</p><p class="text-gray-700 text-lg mb-2">📞 0781 44 77 00 | 020 80 000 08</p><p class="text-gray-700 text-lg mb-2">✉️ info2@austins.co.ke</p><p class="text-gray-700 text-lg mb-2">🌐 staustinsservicecentrekaren2019.com</p></div></section></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
