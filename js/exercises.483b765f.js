(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["exercises"],{"608c":function(e,t,s){},"650e":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-dialog",{attrs:{width:"800"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[e._t("content",null,{on:s,attrs:i})]}}],null,!0)},[s("v-card",[s("v-card-title",[e._v(e._s(e.title))]),s("v-card-text",[e._t("default")],2)],1)],1)},r=[],n={props:{title:{type:String,required:!0}}},a=n,c=s("2877"),o=s("6544"),l=s.n(o),d=s("b0af"),h=s("99d9"),u=s("169a"),f=Object(c["a"])(a,i,r,!1,null,null,null);t["a"]=f.exports;l()(f,{VCard:d["a"],VCardText:h["c"],VCardTitle:h["d"],VDialog:u["a"]})},"7efd":function(e,t,s){"use strict";s.d(t,"a",(function(){return x}));var i=s("b85c"),r=s("5530"),n=(s("2af1"),s("caad"),s("99af"),s("fb6a"),s("608c"),s("9d26")),a=s("0789"),c=s("604c"),o=s("e4cd"),l=s("dc22"),d=s("c3f0"),h=s("58df"),u=s("80d2");function f(e){var t=.501,s=Math.abs(e);return Math.sign(e)*(s/((1/t-2)*(1-s)+1))}function v(e,t,s,i){var r=e.clientWidth,n=s?t.content-e.offsetLeft-r:e.offsetLeft;s&&(i=-i);var a=t.wrapper+i,c=r+n,o=.4*r;return n<=i?i=Math.max(n-o,0):a<=c&&(i=Math.min(i-(a-c-o),t.content-t.wrapper)),s?-i:i}function p(e,t,s){var i=e.offsetLeft,r=e.clientWidth;if(s){var n=t.content-i-r/2-t.wrapper/2;return-Math.min(t.content-t.wrapper,Math.max(0,n))}var a=i+r/2-t.wrapper/2;return Math.min(t.content-t.wrapper,Math.max(0,a))}var x=Object(h["a"])(c["a"],o["a"]).extend({name:"base-slide-group",directives:{Resize:l["a"],Touch:d["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(e){return"boolean"===typeof e||["always","desktop","mobile"].includes(e)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(r["a"])(Object(r["a"])({},c["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var e=this.widths,t=e.content,s=e.wrapper;return t>Math.abs(this.scrollOffset)+s},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(e){var t=e<=0?f(-e):e>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+f(this.widths.content-this.widths.wrapper-e):-e;this.$refs.content.style.transform="translateX(".concat(t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(e){if(this.isOverflowing){var t,s=Object(i["a"])(Object(u["g"])(e));try{for(s.s();!(t=s.n()).done;){var r,n=t.value,a=Object(i["a"])(this.items);try{for(a.s();!(r=a.n()).done;){var c=r.value;if(c.$el===n)return void(this.scrollOffset=v(c.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(o){a.e(o)}finally{a.f()}}}catch(o){s.e(o)}finally{s.f()}}},genNext:function(){var e=this,t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return e.onAffixClick("next")}},key:"next"},[t])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(e){var t=e;this.$vuetify.rtl&&"prev"===e?t="next":this.$vuetify.rtl&&"next"===e&&(t="prev");var s="".concat(e[0].toUpperCase()).concat(e.slice(1)),i=this["has".concat(s)];return this.showArrows||i?this.$createElement(n["a"],{props:{disabled:!i}},this["".concat(t,"Icon")]):null},genPrev:function(){var e=this,t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return e.onAffixClick("prev")}},key:"prev"},[t])},genTransition:function(e){return this.$createElement(a["c"],[this.genIcon(e)])},genWrapper:function(){var e=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(e,t,s,i){var r=s?-1:1,n=r*i+("prev"===e?-1:1)*t.wrapper;return r*Math.max(Math.min(n,t.content-t.wrapper),0)},onAffixClick:function(e){this.$emit("click:".concat(e)),this.scrollTo(e)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(e){var t=this.$refs.content;this.startX=this.scrollOffset+e.touchstartX,t.style.setProperty("transition","none"),t.style.setProperty("willChange","transform")},onTouchMove:function(e){if(this.canTouch){if(!this.isSwiping){var t=e.touchmoveX-e.touchstartX,s=e.touchmoveY-e.touchstartY;this.isSwipingHorizontal=Math.abs(t)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-e.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var e=this.$refs,t=e.content,s=e.wrapper,i=t.clientWidth-s.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(e,t){e.stopPropagation(),this.isOverflowing&&t(e)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var e=this.items[this.items.length-1].$el.getBoundingClientRect(),t=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&t.right<e.right||!this.$vuetify.rtl&&t.left>e.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=p(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=v(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(e){this.scrollOffset=this.calculateNewOffset(e,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var e=this;window.requestAnimationFrame((function(){var t=e.$refs,s=t.content,i=t.wrapper;e.widths={content:s?s.clientWidth:0,wrapper:i?i.clientWidth:0},e.isOverflowing=e.widths.wrapper+1<e.widths.content,e.scrollIntoView()}))}},render:function(e){return e("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});t["b"]=x.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},b280:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"justify-center"},[s("slide-table",{attrs:{instances:e.myExercises,title:"My exercises",loaded:e.exercisesLoaded,"has-add":""},scopedSlots:e._u([{key:"header",fn:function(){return[s("exercises-modal",{directives:[{name:"show",rawName:"v-show",value:e.exercisesLoaded&&e.myExercises.length>5,expression:"exercisesLoaded && myExercises.length > 5"}],attrs:{title:"My exercises"},scopedSlots:e._u([{key:"content",fn:function(t){var i=t.on,r=t.attrs;return[s("div",{staticClass:"d-flex align-center"},[s("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",r,!1),i),[e._v(" Show all ")])],1)]}}])},[s("card-table",{attrs:{instances:e.myExercises,loaded:e.exercisesLoaded},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[s("exercise-modal",{attrs:{exercise:i,"is-edit":""},on:{"saved-exercise":e.editExercise,"removed-exercise":e.removeExercise}})]}}])})],1)]},proxy:!0},{key:"create",fn:function(){return[s("exercise-modal",{attrs:{"is-add":""},on:{"saved-exercise":e.addExercise}})]},proxy:!0},{key:"default",fn:function(t){var i=t.item;return[s("exercise-modal",{attrs:{exercise:i,"is-edit":""},on:{"saved-exercise":e.editExercise,"removed-exercise":e.removeExercise}})]}}])}),s("card-table",{attrs:{instances:e.exercises,loaded:e.exercisesLoaded,title:"Exercises"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.item;return[s("exercise-modal",{attrs:{exercise:t}})]}}])}),s("card-table",{attrs:{instances:e.wGerexercises,loaded:e.exercisesLoaded,title:"Wger exercises"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.item;return[s("wger-exercise",{attrs:{exercise:t}})]}}])})],1)},r=[],n=s("1da1"),a=(s("c740"),s("4de4"),s("d3b7"),s("7db0"),s("96cf"),s("a074")),c=s("77b5"),o=s("650e"),l=s("5458"),d=s("ee0f"),h=s("93d6"),u={components:{WgerExercise:a["a"],ExerciseModal:c["a"],ExercisesModal:o["a"],CardTable:l["a"],SlideTable:d["a"]},data:function(){return{wGerexercises:[],exercises:[],exercisesLoaded:!1,myExercises:[]}},created:function(){this.loadExercises()},methods:{loadExercises:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h["a"].getWgerExercises();case 2:return s=t.sent,e.wGerexercises=s.data.wGerExercises,t.next=6,h["a"].getExercises();case 6:i=t.sent,e.exercises=i.data.exercises,i.data.myExercises&&(e.myExercises=i.data.myExercises),e.exercisesLoaded=!0;case 10:case"end":return t.stop()}}),t)})))()},addExercise:function(e){var t=this;return h["a"].createExercise(e).then((function(s){var i=s.data;t.myExercises.push(i.data),e.access_public&&t.exercises.push(i.data)}))},editExercise:function(e){var t=this;return h["a"].editExercise(e.id,e).then((function(e){var s=e.data,i=s.data,r=t.myExercises.findIndex((function(e){return e.id===i.id})),n=t.exercises.findIndex((function(e){return e.id===i.id}));t.$set(t.myExercises,r,i),i.access_public||-1===n||(t.exercises=t.exercises.filter((function(e){return e.id!==i.id}))),i.access_public&&-1!==n&&t.$set(t.exercises,n,i),i.access_public&&-1===n&&t.exercises.push(i)}))},removeExercise:function(e){var t=this.myExercises.find((function(t){return t.id===e}));return this.myExercises=this.myExercises.filter((function(t){return t.id!==e})),t.access_public&&(this.exercises=this.exercises.filter((function(t){return t.id!==e}))),h["a"].removeExercise(e)}}},f=u,v=s("2877"),p=s("6544"),x=s.n(p),m=s("8336"),w=s("a523"),g=Object(v["a"])(f,i,r,!1,null,null,null);t["default"]=g.exports;x()(g,{VBtn:m["a"],VContainer:w["a"]})},ee0f:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-divider",{staticStyle:{"margin-top":"12px"}}),s("div",{staticClass:"d-flex"},[s("h1",{staticClass:"subheading justify-center grey--text my-3"},[e._v(" "+e._s(e.title)+" ")]),s("v-spacer"),e._t("header")],2),s("v-divider",{staticStyle:{"margin-bottom":"12px"}}),s("v-sheet",[e.loaded?s("v-slide-group",{staticClass:"justify-center",attrs:{"show-arrows":""}},[e.hasAdd?s("v-slide-item",{key:"create"},[e._t("create")],2):e._e(),e._l(e.source,(function(t,i){return s("v-slide-item",{key:i},[e._t("default",null,{item:t})],2)}))],2):s("v-slide-group",{staticClass:"justify-center",attrs:{"show-arrows":""}},e._l(e.source,(function(e,t){return s("v-slide-item",{key:"skeleton-"+t},[s("v-skeleton-loader",{staticClass:"ma-2",attrs:{type:"card",elevation:"2",width:"300",height:"250"}})],1)})),1)],1)],1)},r=[],n={props:{title:{type:String,required:!0},hasAdd:{type:Boolean,default:!1},instances:{type:Array,required:!0},loaded:{type:Boolean,default:!1}},computed:{source:function(){return this.loaded?this.instances:[{},{},{},{},{},{}]}}},a=n,c=s("2877"),o=s("6544"),l=s.n(o),d=s("a523"),h=s("ce7e"),u=s("8dd9"),f=s("3129"),v=s("7efd"),p=s("ade3"),x=s("4e82"),m=s("58df"),w=s("d9bd"),g=s("2b0e"),y=g["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(e.data=this._b(e.data||{},e.tag,{class:Object(p["a"])({},this.activeClass,this.isActive)}),e):(Object(w["c"])("v-item should only contain a single element",this),e)):(Object(w["c"])("v-item is missing a default scopedSlot",this),null);var e}}),b=(Object(m["a"])(y,Object(x["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(m["a"])(y,Object(x["a"])("slideGroup")).extend({name:"v-slide-item"})),O=s("2fa4"),_=Object(c["a"])(a,i,r,!1,null,null,null);t["a"]=_.exports;l()(_,{VContainer:d["a"],VDivider:h["a"],VSheet:u["a"],VSkeletonLoader:f["a"],VSlideGroup:v["b"],VSlideItem:b,VSpacer:O["a"]})}}]);
//# sourceMappingURL=exercises.483b765f.js.map