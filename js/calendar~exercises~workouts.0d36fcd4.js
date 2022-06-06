(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calendar~exercises~workouts"],{"13b3":function(e,t,i){},"1e6c":function(e,t,i){"use strict";var n=i("9d65"),r=i("4e82"),s=i("c3f0"),a=i("80d2"),o=i("58df"),c=Object(o["a"])(n["a"],Object(r["a"])("windowGroup","v-window-item","v-window"));t["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:s["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(a["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(a["h"])(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}})},"33a6":function(e,t,i){e.exports=i.p+"img/genericExercise.316b9256.png"},"63b7":function(e,t,i){},"77b5":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"600","retain-focus":!1},on:{"click:outside":e.resetForm},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[e.custom?e._t("custom",null,{attrs:s,on:r}):e.workout?n("v-card",{staticClass:"ma-2"},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.exercise.imageUrl&&e.exercise.imageUrl.length>0?e.exercise.imageUrl:i("bbaa"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"250px"}},[n("v-card-title",{domProps:{textContent:e._s(e.exercise.name)}})],1),n("v-card-actions",[n("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",s,!1),r),[n("v-icon",{attrs:{color:"primary"}},[e._v(" mdi-information-outline ")])],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:e.addExerciseToWorkout}},[n("v-icon",{attrs:{color:"primary"}},[e._v(" mdi-plus ")])],1)],1)],1):e.isAdd?n("v-card",e._g(e._b({staticClass:"ma-2",attrs:{width:"300",height:"250"}},"v-card",s,!1),r),[n("v-alert",{staticClass:"d-flex justify-center",attrs:{outlined:"",color:"primary",width:"300",height:"250"}},[n("v-card-title",{staticClass:"justify-center text-xs-center"},[n("v-icon",{attrs:{color:"primary"}},[e._v(" mdi-plus ")])],1),n("v-card-text",{staticClass:"text-xs-center"},[e._v(" Create new exercise ")])],1)],1):n("v-card",e._g(e._b({staticClass:"ma-2",attrs:{width:e.isEdit?"300":""}},"v-card",s,!1),r),[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.exercise.imageUrl&&e.exercise.imageUrl.length>0?e.exercise.imageUrl:i("bbaa"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"250px"}},[n("v-card-title",{domProps:{textContent:e._s(e.exercise.name)}})],1)],1)]}}],null,!0),model:{value:e.activeModal,callback:function(t){e.activeModal=t},expression:"activeModal"}},[e.showForm?n("v-card",[n("v-card-title",[e._v(e._s(e.titleText)+" exercise")]),n("v-divider"),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),n("v-text-field",{attrs:{label:"Category"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}}),n("v-text-field",{attrs:{label:"Description"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),n("v-text-field",{attrs:{label:"Muscles"},model:{value:e.form.muscles,callback:function(t){e.$set(e.form,"muscles",t)},expression:"form.muscles"}}),n("v-text-field",{attrs:{label:"Secondary muscles"},model:{value:e.form.muscles_secondary,callback:function(t){e.$set(e.form,"muscles_secondary",t)},expression:"form.muscles_secondary"}}),n("v-text-field",{attrs:{label:"Equipment"},model:{value:e.form.equipment,callback:function(t){e.$set(e.form,"equipment",t)},expression:"form.equipment"}}),n("v-text-field",{attrs:{label:"Secondary equipment"},model:{value:e.form.equipment_secondary,callback:function(t){e.$set(e.form,"equipment_secondary",t)},expression:"form.equipment_secondary"}}),n("v-text-field",{attrs:{label:"Image URL"},model:{value:e.form.imageUrl,callback:function(t){e.$set(e.form,"imageUrl",t)},expression:"form.imageUrl"}}),n("v-text-field",{attrs:{label:"Video URL"},model:{value:e.form.videoUrl,callback:function(t){e.$set(e.form,"videoUrl",t)},expression:"form.videoUrl"}}),n("v-checkbox",{attrs:{label:"Show publicly"},model:{value:e.form.access_public,callback:function(t){e.$set(e.form,"access_public",t)},expression:"form.access_public"}})],1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:e.resetForm}},[e._v(" Back ")]),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"red"},on:{click:e.removeExercise}},[e._v(" Remove ")]),n("v-btn",{attrs:{text:"",color:"blue"},on:{click:function(t){return e.saveExercise()}}},[e._v(" Save ")])],1)],1):n("v-card",[n("v-card-title",[n("div",[e._v(" "+e._s(e.exercise.name)+" ")]),n("v-spacer"),e.isEdit?n("v-btn",{attrs:{color:"blue",text:""},on:{click:e.openEdit}},[e._v(" Edit ")]):e._e()],1),n("v-divider"),e._l(e.exercise,(function(t,i){return n("div",{key:i},["createdAt"===i?[n("v-card-subtitle",{staticStyle:{color:"rgba(0, 0, 0, 0.6)"}},[e._v(" Created at ")]),n("v-card-text",[e._v(" "+e._s(e.parseTime(t))+" ")])]:"access_public"===i?[n("v-card-subtitle",{staticStyle:{color:"rgba(0, 0, 0, 0.6)"}},[e._v(" Visible to public ")]),n("v-card-text",{staticStyle:{color:"black"}},[e._v(" "+e._s("true"===t?"Yes":"No")+" ")])]:"client"===i?[n("v-card-subtitle",{staticStyle:{color:"rgba(0, 0, 0, 0.6)"}},[e._v(" License author ")]),n("v-card-text",{staticStyle:{color:"black"}},[e._v(" "+e._s(t.username)+" ")])]:e.ignorableFields.includes(i)?e._e():[n("v-card-subtitle",{staticStyle:{color:"rgba(0, 0, 0, 0.6)"}},[e._v(" "+e._s(e.parseTitle(i))+" ")]),n("v-card-text",{staticStyle:{color:"black"}},[e._v(" "+e._s(e.parseSubtitle(t))+" ")])]],2)})),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.resetForm()}}},[e._v(" Close ")])],1)],2)],1)},r=[],s=i("5530"),a=i("1da1"),o=(i("96cf"),i("ac1f"),i("5319"),i("1276"),i("b0c0"),{name:"ExerciseModal",props:{exercise:{type:Object,default:function(){}},workout:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!1},isAdd:{type:Boolean,default:!1}},data:function(){return{test:1,valid:!0,activeModal:!1,editable:!1,ignorableFields:["id","clientId","imageUrl","videoUrl","updatedAt","client","createdAt","name"],form:{name:"",category:"",description:"",muscles:"",muscles_secondary:"",equipment:"",equipment_secondary:"",imageUrl:"",videoUrl:"",access_public:!1}}},computed:{showForm:function(){return this.isEdit&&this.editable||this.isAdd},titleText:function(){return this.isEdit?"Update":"Create new"}},methods:{parseTitle:function(e){return e.replace(/_/g," ").replace(/^./,e[0].toUpperCase())},parseSubtitle:function(e){return(null===e||void 0===e?void 0:e.length)>0?e:"None"},parseTime:function(e){return e.split("T")[0]||"-"},resetForm:function(){this.editable=!1,this.activeModal=!1,this.form={name:"",category:"",description:"",muscles:"",muscles_secondary:"",equipment:"",equipment_secondary:"",imageUrl:"",videoUrl:"",access_public:!1}},saveExercise:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.form.validate();case 2:if(e.valid){t.next=4;break}return t.abrupt("return");case 4:if(0!==e.form.name.length){t.next=6;break}return t.abrupt("return");case 6:i=e.form,e.resetForm(),e.$emit("saved-exercise",i);case 9:case"end":return t.stop()}}),t)})))()},removeExercise:function(){this.resetForm(),this.$emit("removed-exercise",this.exercise.id)},openEdit:function(){this.editable=!0,this.form=Object(s["a"])({},this.exercise)},addExerciseToWorkout:function(){this.$emit("exercise-add",{id:this.exercise.id,name:this.exercise.name,thirdParty:!1})}}}),c=o,l=i("2877"),u=i("6544"),d=i.n(u),h=i("0798"),v=i("8336"),m=i("b0af"),f=i("99d9"),p=i("ac7c"),g=i("169a"),b=i("ce7e"),x=i("4bd4"),w=i("132d"),_=i("adda"),y=i("2fa4"),T=i("8654"),C=Object(l["a"])(c,n,r,!1,null,null,null);t["a"]=C.exports;d()(C,{VAlert:h["a"],VBtn:v["a"],VCard:m["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCheckbox:p["a"],VDialog:g["a"],VDivider:b["a"],VForm:x["a"],VIcon:w["a"],VImg:_["a"],VSpacer:y["a"],VTextField:T["a"]})},a074:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[e.custom?e._t("custom",null,{attrs:s,on:r}):n("v-card",e._g(e._b({staticClass:"ma-2"},"v-card",s,!1),r),[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.exercise.images.length>0?e.exercise.images[0].image:i("33a6"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"250px"}},[n("v-card-title",[n("div",{staticClass:"text-truncate"},[e._v(" "+e._s(e.exercise.name)+" ")])])],1)],1)]}}],null,!0)},[n("v-card",[n("v-card-title",[n("h1",[e._v(e._s(e.exercise.name))])]),e._l(e.exercise,(function(t,i){return n("div",{key:i},["description"===i||"creation_date"===i||"license_author"===i?n("div",[n("v-card-subtitle",[n("h2",[e._v(e._s(e.parseTitle(i)))])]),n("v-card-text",{domProps:{innerHTML:e._s(t)}})],1):"category"===i||"equipment"===i||"muscles"===i||"muscles_secondary"===i?n("div",[n("v-card-subtitle",[n("h2",[e._v(e._s(e.parseTitle(i)))])]),n("v-card-text",[e._v(" "+e._s(e.parseSubtitle(t))+" ")])],1):"images"===i&&t.length>0?n("div",[n("v-card-subtitle",[n("h2",[e._v(e._s(e.parseTitle(i)))])]),n("v-card-text",[n("v-carousel",e._l(t,(function(e,t){return n("v-carousel-item",{key:t},[n("img",{staticStyle:{height:"100%",width:"100%"},attrs:{src:e.image,alt:""}})])})),1)],1)],1):e._e()])}))],2)],1)},r=[],s=i("53ca"),a=(i("ac1f"),i("5319"),i("a15b"),i("d81d"),i("b0c0"),i("b64b"),{props:{exercise:{type:Object},custom:{type:Boolean,default:!1}},methods:{parseTitle:function(e){return e.replace(/_/g," ").replace(/^./,e[0].toUpperCase())},parseSubtitle:function(e){return Array.isArray(e)&&e.length>0?e.map((function(e){return e.name})).join(", "):"object"===Object(s["a"])(e)&&Object.keys(e).length>0?e.name:"-"}}}),o=a,c=i("2877"),l=i("6544"),u=i.n(l),d=i("b0af"),h=i("99d9"),v=i("5530"),m=(i("a9e3"),i("63b7"),i("f665")),f=i("afdd"),p=i("9d26"),g=i("37c6"),b=i("3860"),x=i("80d2"),w=i("d9bd"),_=m["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(e){return e>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},m["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(e,t){e!==t&&e&&(this.internalHeight=e)},cycle:function(e){e?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(w["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:m["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var e=this,t=this.items.length,i=[],n=0;n<t;n++){var r=this.$createElement(f["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(p["a"],{props:{size:18}},this.delimiterIcon)]);i.push(r)}return this.$createElement(b["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(t){e.internalValue=t}}},i)},genProgress:function(){return this.$createElement(g["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(e){var t=m["a"].options.render.call(this,e);return t.data.style="height: ".concat(Object(x["h"])(this.height),";"),this.hideDelimiters||t.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&t.children.push(this.genProgress()),t}}),y=i("1e6c"),T=i("adda"),C=i("58df"),k=i("1c87"),$=Object(C["a"])(y["a"],k["a"]),I=$.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(T["a"],{staticClass:"v-carousel__item",props:Object(v["a"])(Object(v["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(x["t"])(this))]},genWindowItem:function(){var e=this.generateRouteLink(),t=e.tag,i=e.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(t,i,this.genDefaultSlot())}}}),S=i("169a"),V=Object(c["a"])(o,n,r,!1,null,null,null);t["a"]=V.exports;u()(V,{VCard:d["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCarousel:_,VCarouselItem:I,VDialog:S["a"],VImg:T["a"]})},bbaa:function(e,t,i){e.exports=i.p+"img/basketball.ee5f8da8.svg"},f665:function(e,t,i){"use strict";var n=i("5530"),r=(i("99af"),i("7db0"),i("d3b7"),i("c740"),i("13b3"),i("c3f0")),s=i("afdd"),a=i("9d26"),o=i("604c");t["a"]=o["a"].extend({name:"v-window",directives:{Touch:r["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(n["a"])(Object(n["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var e=this.vertical?"y":"x",t=this.internalReverse?!this.isReverse:this.isReverse,i=t?"-reverse":"";return"v-window-".concat(e).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(e){return!e.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var e=this;return this.items.findIndex((function(t,i){return e.internalValue===e.getValue(t,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(e,t){this.isReverse=this.updateReverse(e,t)}},mounted:function(){var e=this;window.requestAnimationFrame((function(){return e.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var e=[this.genDefaultSlot()];return this.showArrows&&e.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},e)},genIcon:function(e,t,i){var n,r,o,c=this,l={click:function(e){e.stopPropagation(),c.changedByDelimiters=!0,i()}},u={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(e))},d=null!=(n=null==(r=(o=this.$scopedSlots)[e])?void 0:r.call(o,{on:l,attrs:u}))?n:[this.$createElement(s["a"],{props:{icon:!0},attrs:u,on:l},[this.$createElement(a["a"],{props:{large:!0}},t)])];return this.$createElement("div",{staticClass:"v-window__".concat(e)},d)},genControlIcons:function(){var e=[],t=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&t&&"string"===typeof t){var i=this.genIcon("prev",t,this.prev);i&&e.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var r=this.genIcon("next",n,this.next);r&&e.push(r)}return e},getNextIndex:function(e){var t=(e+1)%this.items.length,i=this.items[t];return i.disabled?this.getNextIndex(t):t},getPrevIndex:function(e){var t=(e+this.items.length-1)%this.items.length,i=this.items[t];return i.disabled?this.getPrevIndex(t):t},next:function(){if(this.hasActiveItems&&this.hasNext){var e=this.getNextIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var e=this.getPrevIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},updateReverse:function(e,t){var i=this.items.length,n=i-1;return i<=2?e<t:e===n&&0===t||(0!==e||t!==n)&&e<t}},render:function(e){var t=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){t.$vuetify.rtl?t.prev():t.next()},right:function(){t.$vuetify.rtl?t.next():t.prev()},end:function(e){e.stopPropagation()},start:function(e){e.stopPropagation()}};i.directives.push({name:"touch",value:n})}return e("div",i,[this.genContainer()])}})}}]);
//# sourceMappingURL=calendar~exercises~workouts.0d36fcd4.js.map