_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"4v9j":function(e,t,n){t._link=n("YFqc").default},"97Is":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("uNx/")}])},"W+VZ":function(e,t,n){"use strict";var r=n("kCQW"),o=n("jwlp"),i=n("NL7e"),a=n("jPEo"),c=n("a08Y"),f=n("+rx9"),l=n("a0EN"),s=n("2+07"),u=n("7HZk"),d=n("sfHK"),p=n("h+YZ"),h=n("bgH5"),m=n("xxbb"),v=a.bind(c.bindReaderT(l.bindEffect))(s.liftEffect(c.monadEffectReader(s.monadEffectEffect))(o.mkNavigation))((function(e){return r.component("NotFound")((function(t){return function(t){return i.pure(h.applicativeRender(m.refl))((n={navigation:e},u.fragment([n.navigation(f.unit),p.div()({className:"max-w-5xl flex mx-auto my-12",children:[p.div()({className:"mr-1 text-gray-100 w-3/5 shadow-2xl bg-gray-800 p-12 text-left",children:[p.h1()({className:"text-3xl font-bold",children:[d.text("404: Not found")]}),p.div()({className:"w-4/5 pt-3 border-b-2 border-teal-500"}),p.p()({className:"pt-4 text-sm",children:[d.text("Looks like you took a wrong turn somewhere.")]})]}),p.div()({className:"w-2/5",children:[p.img()({className:"shadow-2xl",src:"https://source.unsplash.com/O35rT6OytRo"})]})]})])));var n}}))}));e.exports={mkNotFound:v}},YFqc:function(e,t,n){e.exports=n("cTJO")},bwVA:function(e,t,n){"use strict";var r=n("4v9j"),o=n("7HZk");e.exports={link:function(e){return function(e){return o.element(r._link)(e)}},_link:r._link}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i,a=o(n("FdF9")),c=n("elyg"),f=n("nOHt"),l=new Map,s=window.IntersectionObserver,u={};var d=function(e,t){var n=i||(s?i=new s((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),u[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=a.default.useState(),o=r(n,2),i=o[0],l=o[1],h=(0,f.useRouter)(),m=h&&h.pathname||"/",v=a.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href);return{href:t,as:e.as?(0,c.resolveHref)(m,e.as):t}}),[m,e.href,e.as]),x=v.href,b=v.as;a.default.useEffect((function(){if(t&&s&&i&&i.tagName&&(0,c.isLocalURL)(x)&&!u[x+"%"+b])return d(i,(function(){p(h,x,b)}))}),[t,i,x,b,h]);var w=e.children,N=e.replace,E=e.shallow,k=e.scroll;"string"===typeof w&&(w=a.default.createElement("a",null,w));var g=a.Children.only(w),y={ref:function(e){e&&l(e),g&&"object"===typeof g&&g.ref&&("function"===typeof g.ref?g.ref(e):"object"===typeof g.ref&&(g.ref.current=e))},onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,x,b,N,E,k)}};return t&&(y.onMouseEnter=function(e){(0,c.isLocalURL)(x)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),p(h,x,b,{priority:!0}))}),(e.passHref||"a"===g.type&&!("href"in g.props))&&(y.href=(0,c.addBasePath)(b)),a.default.cloneElement(g,y)};t.default=h},jwlp:function(e,t,n){"use strict";var r=n("NL7e"),o=n("bwVA"),i=n("sfHK"),a=n("h+YZ"),c=n("C9r8"),f=n("bgH5"),l=n("xxbb"),s=function(){var e=a.nav()({className:"text-gray-800 w-full flex items-center justify-between py-3 px-4",children:[a.div()({className:"font-extrabold text-xl",children:[i.text("Next.js with Purescript Example")]}),a.ul()({className:"flex-grow flex justify-end items-center",children:[a.li()({children:[o.link()({href:"/",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[i.text("Home")]})})]}),a.li()({children:[o.link()({href:"/about",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[i.text("About")]})})]}),a.li()({children:[o.link()({href:"/profile",passHref:!0,children:a.a()({className:"inline-block py-2 px-4 font-bold",children:[i.text("Profile")]})})]})]})]});return c.component("Navigation")((function(t){return r.pure(f.applicativeRender(l.refl))(e)}))}();e.exports={mkNavigation:s}},kCQW:function(e,t,n){"use strict";var r=n("jPEo"),o=n("SQdI"),i=n("a08Y"),a=n("a0EN"),c=n("2+07"),f=n("C9r8");e.exports={component:function(e){return function(t){return r.bind(i.bindReaderT(a.bindEffect))(o.ask(i.monadAskReaderT(a.monadEffect)))((function(n){return c.liftEffect(i.monadEffectReader(c.monadEffectEffect))(f.component(e)((function(e){return t(n)(e)})))}))}}}},"uNx/":function(e,t,n){"use strict";n.r(t);var r=n("W+VZ");t.default=r.mkNotFound}},[["97Is",0,2,1,3]]]);