(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calendar~exercises~meals~supervisors~workouts"],{"2af1":function(t,e,i){var n=i("23e7"),s=i("f748");n({target:"Math",stat:!0},{sign:s})},"495d":function(t,e,i){},"4a1a":function(t,e,i){"use strict";var n=i("5530"),s=i("2909"),a=(i("a9e3"),i("fb6a"),i("ac1f"),i("841c"),i("4e827"),i("c740"),i("a434"),i("d81d"),i("99af"),i("80d2")),o=i("2b0e");e["a"]=o["a"].extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},sortBy:{type:[String,Array],default:function(){return[]}},sortDesc:{type:[Boolean,Array],default:function(){return[]}},customSort:{type:Function,default:a["E"]},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:function(){return[]}},groupDesc:{type:[Boolean,Array],default:function(){return[]}},customGroup:{type:Function,default:a["w"]},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:a["D"]},serverItemsLength:{type:Number,default:-1}},data:function(){var t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:Object(a["H"])(this.sortBy),sortDesc:Object(a["H"])(this.sortDesc),groupBy:Object(a["H"])(this.groupBy),groupDesc:Object(a["H"])(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(t=Object.assign(t,this.options));var e,i,n=t,o=n.sortBy,r=n.sortDesc,p=n.groupBy,u=n.groupDesc,c=o.length-r.length,h=p.length-u.length;c>0&&(e=t.sortDesc).push.apply(e,Object(s["a"])(Object(a["n"])(c,!1)));h>0&&(i=t.groupDesc).push.apply(i,Object(s["a"])(Object(a["n"])(h,!1)));return{internalOptions:t}},computed:{itemsLength:function(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount:function(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart:function(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop:function(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped:function(){return!!this.internalOptions.groupBy.length},pagination:function(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems:function(){var t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems:function(){var t=this.filteredItems.slice();return(!this.disableSort||this.internalOptions.groupBy.length)&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems:function(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps:function(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions:function(){return Object(n["a"])({},this.options)}},watch:{computedOptions:{handler:function(t,e){Object(a["k"])(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler:function(t,e){Object(a["k"])(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page:function(t){this.updateOptions({page:t})},"internalOptions.page":function(t){this.$emit("update:page",t)},itemsPerPage:function(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage":function(t){this.$emit("update:items-per-page",t)},sortBy:function(t){this.updateOptions({sortBy:Object(a["H"])(t)})},"internalOptions.sortBy":function(t,e){!Object(a["k"])(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc:function(t){this.updateOptions({sortDesc:Object(a["H"])(t)})},"internalOptions.sortDesc":function(t,e){!Object(a["k"])(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy:function(t){this.updateOptions({groupBy:Object(a["H"])(t)})},"internalOptions.groupBy":function(t,e){!Object(a["k"])(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc:function(t){this.updateOptions({groupDesc:Object(a["H"])(t)})},"internalOptions.groupDesc":function(t,e){!Object(a["k"])(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort:function(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort":function(t){this.$emit("update:multi-sort",t)},mustSort:function(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort":function(t){this.$emit("update:must-sort",t)},pageCount:{handler:function(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler:function(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler:function(t,e){Object(a["k"])(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle:function(t,e,i,n,s,o){var r=e.slice(),p=i.slice(),u=r.findIndex((function(e){return e===t}));return u<0?(o||(r=[],p=[]),r.push(t),p.push(!1)):u>=0&&!p[u]?p[u]=!0:s?p[u]=!1:(r.splice(u,1),p.splice(u,1)),Object(a["k"])(r,e)&&Object(a["k"])(p,i)||(n=1),{by:r,desc:p,page:n}},group:function(t){var e=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1),i=e.by,n=e.desc,s=e.page;this.updateOptions({groupBy:i,groupDesc:n,page:s})},sort:function(t){if(Array.isArray(t))return this.sortArray(t);var e=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort),i=e.by,n=e.desc,s=e.page;this.updateOptions({sortBy:i,sortDesc:n,page:s})},sortArray:function(t){var e=this,i=t.map((function(t){var i=e.internalOptions.sortBy.findIndex((function(e){return e===t}));return i>-1&&e.internalOptions.sortDesc[i]}));this.updateOptions({sortBy:t,sortDesc:i})},updateOptions:function(t){this.internalOptions=Object(n["a"])(Object(n["a"])(Object(n["a"])({},this.internalOptions),t),{},{page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page})},sortItems:function(t){var e=[],i=[];return this.disableSort||(e=this.internalOptions.sortBy,i=this.internalOptions.sortDesc),this.internalOptions.groupBy.length&&(e=[].concat(Object(s["a"])(this.internalOptions.groupBy),Object(s["a"])(e)),i=[].concat(Object(s["a"])(this.internalOptions.groupDesc),Object(s["a"])(i))),this.customSort(t,e,i,this.locale)},groupItems:function(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems:function(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,Math.ceil(t.length/this.internalOptions.itemsPerPage))||1),t.slice(this.pageStart,this.pageStop)}},render:function(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}})},c377:function(t,e,i){"use strict";var n=i("3835"),s=i("5530"),a=(i("d3b7"),i("4de4"),i("b64b"),i("07ac"),i("caad"),i("2532"),i("c740"),i("d81d"),i("4a1a")),o=i("f41f"),r=i("e4cd"),p=i("7560"),u=i("58df"),c=i("80d2"),h=i("d9bd");e["a"]=Object(u["a"])(r["a"],p["a"]).extend({name:"v-data-iterator",props:Object(s["a"])(Object(s["a"])({},a["a"].options.props),{},{itemKey:{type:String,default:"id"},value:{type:Array,default:function(){return[]}},singleSelect:Boolean,expanded:{type:Array,default:function(){return[]}},mobileBreakpoint:Object(s["a"])(Object(s["a"])({},r["a"].options.props.mobileBreakpoint),{},{default:600}),singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}}),data:function(){return{selection:{},expansion:{},internalCurrentItems:[],shiftKeyDown:!1,lastEntry:-1}},computed:{everyItem:function(){var t=this;return!!this.selectableItems.length&&this.selectableItems.every((function(e){return t.isSelected(e)}))},someItems:function(){var t=this;return this.selectableItems.some((function(e){return t.isSelected(e)}))},sanitizedFooterProps:function(){return Object(c["d"])(this.footerProps)},selectableItems:function(){var t=this;return this.internalCurrentItems.filter((function(e){return t.isSelectable(e)}))}},watch:{value:{handler:function(t){var e=this;this.selection=t.reduce((function(t,i){return t[Object(c["q"])(i,e.itemKey)]=i,t}),{})},immediate:!0},selection:function(t,e){Object(c["k"])(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler:function(t){var e=this;this.expansion=t.reduce((function(t,i){return t[Object(c["q"])(i,e.itemKey)]=!0,t}),{})},immediate:!0},expansion:function(t,e){var i=this;if(!Object(c["k"])(t,e)){var n=Object.keys(t).filter((function(e){return t[e]})),s=n.length?this.items.filter((function(t){return n.includes(String(Object(c["q"])(t,i.itemKey)))})):[];this.$emit("update:expanded",s)}}},created:function(){var t=this,e=[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]];e.forEach((function(e){var i=Object(n["a"])(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&Object(h["a"])(s,a,t)}));var i=["expand","content-class","content-props","content-tag"];i.forEach((function(e){t.$attrs.hasOwnProperty(e)&&Object(h["e"])(e)}))},mounted:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)},methods:{onKeyDown:function(t){t.keyCode===c["y"].shift&&(this.shiftKeyDown=!0)},onKeyUp:function(t){t.keyCode===c["y"].shift&&(this.shiftKeyDown=!1)},toggleSelectAll:function(t){for(var e=Object.assign({},this.selection),i=0;i<this.selectableItems.length;i++){var n=this.selectableItems[i];if(this.isSelectable(n)){var s=Object(c["q"])(n,this.itemKey);t?e[s]=n:delete e[s]}}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable:function(t){return!1!==Object(c["q"])(t,this.selectableKey)},isSelected:function(t){return!!this.selection[Object(c["q"])(t,this.itemKey)]||!1},select:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.isSelectable(t)){var s=this.singleSelect?{}:Object.assign({},this.selection),a=Object(c["q"])(t,this.itemKey);i?s[a]=t:delete s[a];var o=this.selectableItems.findIndex((function(t){return Object(c["q"])(t,e.itemKey)===a}));if(-1===this.lastEntry)this.lastEntry=o;else if(this.shiftKeyDown&&!this.singleSelect&&n){var r=Object(c["q"])(this.selectableItems[this.lastEntry],this.itemKey),p=Object.keys(this.selection).includes(String(r));this.multipleSelect(p,n,s,o)}if(this.lastEntry=o,this.singleSelect&&n){var u=Object.keys(this.selection),h=u.length&&Object(c["q"])(this.selection[u[0]],this.itemKey);h&&h!==a&&this.$emit("item-selected",{item:this.selection[h],value:!1})}this.selection=s,n&&this.$emit("item-selected",{item:t,value:i})}},multipleSelect:function(){for(var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,s=n<this.lastEntry?n:this.lastEntry,a=n<this.lastEntry?this.lastEntry:n,o=s;o<=a;o++){var r=this.selectableItems[o],p=Object(c["q"])(r,this.itemKey);t?i[p]=r:delete i[p],e&&this.$emit("item-selected",{currentItem:r,value:t})}},isExpanded:function(t){return this.expansion[Object(c["q"])(t,this.itemKey)]||!1},expand:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.singleExpand?{}:Object.assign({},this.expansion),n=Object(c["q"])(t,this.itemKey);e?i[n]=!0:delete i[n],this.expansion=i,this.$emit("item-expanded",{item:t,value:e})},createItemProps:function(t,e){var i=this;return{item:t,index:e,select:function(e){return i.select(t,e)},isSelected:this.isSelected(t),expand:function(e){return i.expand(t,e)},isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper:function(t){return this.$createElement("div",t)},genEmpty:function(t,e){if(0===t&&this.loading){var i=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(i)}if(0===t){var n=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(n)}if(0===e){var s=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(s)}return null},genItems:function(t){var e=this,i=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return i?[i]:this.$scopedSlots.default?this.$scopedSlots.default(Object(s["a"])(Object(s["a"])({},t),{},{isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,isMobile:this.isMobile,expand:this.expand})):this.$scopedSlots.item?t.items.map((function(t,i){return e.$scopedSlots.item(e.createItemProps(t,i))})):[]},genFooter:function(t){if(this.hideDefaultFooter)return null;var e={props:Object(s["a"])(Object(s["a"])({},this.sanitizedFooterProps),{},{options:t.options,pagination:t.pagination}),on:{"update:options":function(e){return t.updateOptions(e)}}},i=Object(c["r"])("footer.",this.$scopedSlots);return this.$createElement(o["a"],Object(s["a"])({scopedSlots:i},e))},genDefaultScopedSlot:function(t){var e=Object(s["a"])(Object(s["a"])({},t),{},{someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll});return this.$createElement("div",{staticClass:"v-data-iterator"},[Object(c["t"])(this,"header",e,!0),this.genItems(t),this.genFooter(t),Object(c["t"])(this,"footer",e,!0)])}},render:function(){var t=this;return this.$createElement(a["a"],{props:this.$props,on:{"update:options":function(e,i){return!Object(c["k"])(e,i)&&t.$emit("update:options",e)},"update:page":function(e){return t.$emit("update:page",e)},"update:items-per-page":function(e){return t.$emit("update:items-per-page",e)},"update:sort-by":function(e){return t.$emit("update:sort-by",e)},"update:sort-desc":function(e){return t.$emit("update:sort-desc",e)},"update:group-by":function(e){return t.$emit("update:group-by",e)},"update:group-desc":function(e){return t.$emit("update:group-desc",e)},pagination:function(e,i){return!Object(c["k"])(e,i)&&t.$emit("pagination",e)},"current-items":function(e){t.internalCurrentItems=e,t.$emit("current-items",e)},"page-count":function(e){return t.$emit("page-count",e)}},scopedSlots:{default:this.genDefaultScopedSlot}})}})},f41f:function(t,e,i){"use strict";var n=i("53ca"),s=(i("d81d"),i("7db0"),i("d3b7"),i("25f0"),i("495d"),i("b974")),a=i("9d26"),o=i("afdd"),r=i("2b0e"),p=i("80d2");e["a"]=r["a"].extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:function(){return[5,10,15,-1]}},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon:function(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions:function(){var t=this;return this.itemsPerPageOptions.map((function(e){return"object"===Object(n["a"])(e)?e:t.genDataItemsPerPageOption(e)}))}},methods:{updateOptions:function(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage:function(){this.updateOptions({page:1})},onPreviousPage:function(){this.updateOptions({page:this.options.page-1})},onNextPage:function(){this.updateOptions({page:this.options.page+1})},onLastPage:function(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage:function(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption:function(t){return{text:-1===t?this.$vuetify.lang.t(this.itemsPerPageAllText):String(t),value:t}},genItemsPerPageSelect:function(){var t=this.options.itemsPerPage,e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find((function(e){return e.value===t}))||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(s["a"],{attrs:{"aria-label":this.$vuetify.lang.t(this.itemsPerPageText)},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo:function(){var t=["–"],e=this.pagination.itemsLength,i=this.pagination.pageStart,n=this.pagination.pageStop;return this.pagination.itemsLength&&this.pagination.itemsPerPage?(i=this.pagination.pageStart+1,n=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop,t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:i,pageStop:n,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,i,n,e)]):this.$scopedSlots["page-text"]&&(t=[this.$scopedSlots["page-text"]({pageStart:i,pageStop:n,itemsLength:e})]),this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon:function(t,e,i,n){return this.$createElement(o["a"],{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":i}},[this.$createElement(a["a"],n)])},genIcons:function(){var t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render:function(){return this.$createElement("div",{staticClass:"v-data-footer"},[Object(p["t"])(this,"prepend"),this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}})}}]);
//# sourceMappingURL=calendar~exercises~meals~supervisors~workouts.740f0eaf.js.map