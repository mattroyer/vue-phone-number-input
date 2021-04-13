(function(e){function t(t){for(var n,i,s=t[0],u=t[1],l=t[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1fc9":function(e,t,r){},2286:function(e,t,r){"use strict";var n=r("8a1b"),a=r.n(n);a.a},"28bd":function(e,t,r){"use strict";var n=r("8534"),a=r.n(n);a.a},"37c7":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{dark:e.dark},attrs:{id:"app"}},[r("h1",{staticClass:"text-center py-3"},[e._v(" VuePhoneNumberInput ")]),r("div",{staticClass:"container mb-3 flex direction-column"},[e._m(0),r("div",{staticClass:"flex align-center justify-center"},[r("button",{staticClass:"btn mr-2",on:{click:function(t){e.dark=!e.dark}}},[e._v(" Toggle Dark Mode ")]),r("button",{staticClass:"btn btn--success mr-2",on:{click:function(t){e.hasLoaderActive=!e.hasLoaderActive}}},[e._v(" Toggle loader ")]),r("button",{staticClass:"btn btn--danger",on:{click:function(t){e.hasErrorActive=!e.hasErrorActive}}},[e._v(" Toggle error ")])])]),r("div",{staticClass:"container mb-3"},[r("div",{staticClass:"flex flex-wrap"},[r("div",{staticClass:"component-container"},[r("h3",{staticClass:"mb-2"},[e._v(" Basic usage ")]),r("div",{staticClass:"component mb-2"},[r("VuePhoneNumberInput",{staticClass:"mb-2",attrs:{id:"phoneNumber1",color:"#dfe1e3",size:"lg",dark:e.dark,disabled:e.disabled,loader:e.hasLoaderActive,error:e.hasErrorActive,"border-radius":"10"},on:{update:e.onUpdate},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}}),r("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber)+" ")],1),r("div",{staticClass:"component"},[r("h4",{staticClass:"mb-2"},[e._v(' Datas returned with "update" event ')]),r("div",{staticClass:"flex flex-wrap"},[r("table",{staticClass:"mr-2"},[e._m(1),e._l(e.resultsTable,(function(t){return r("tr",{key:t,staticClass:"w-100"},[r("td",{attrs:{align:"left"}},[e._v(" "+e._s(t)+" ")]),r("td",[e._v(e._s(e.results[t]))])])}))],2),r("div",{staticClass:"flex flex-direction-column flex-1"},[r("b",[e._v("Payload:")]),e._v(" "+e._s(e.results)+" ")])])])]),r("div",{staticClass:"component-container"},[r("h3",{staticClass:"mb-2"},[e._v(" With translations (FR) - No flags - Dark - No Use Browser Locale ")]),r("div",{staticClass:"component mb-2"},[r("VuePhoneNumberInput",{staticClass:"mb-2",attrs:{id:"phoneNumber2",translations:e.translations,dark:!e.dark,"no-flags":"",required:"","no-use-browser-locale":"",loader:e.hasLoaderActive,error:e.hasErrorActive,clearable:"",color:"#FF9933","dark-color":"#21222e","border-radius":8,"show-code-on-list":""},on:{update:e.onUpdate2},model:{value:e.phoneNumber2,callback:function(t){e.phoneNumber2=t},expression:"phoneNumber2"}}),r("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber2)+" ")],1),r("div",{staticClass:"component"},[r("h4",{staticClass:"mb-2"},[e._v(' Datas returned with "update" event ')]),r("div",{staticClass:"flex flex-wrap"},[r("table",{staticClass:"mr-2"},[e._m(2),e._l(e.resultsTable2,(function(t){return r("tr",{key:t,staticClass:"w-100"},[r("td",{attrs:{align:"left"}},[e._v(" "+e._s(t)+" ")]),r("td",[e._v(e._s(e.results2[t]))])])}))],2),r("div",{staticClass:"flex flex-direction-column  flex-1"},[r("b",[e._v("Payload:")]),e._v(" "+e._s(e.results2)+" ")])])])])]),r("div",{staticClass:"component-container"},[r("h3",{staticClass:"mb-2"},[e._v(" No country chooser (use `default-country-code` to set the country) ")]),r("div",{staticClass:"component mb-2"},[r("VuePhoneNumberInput",{staticClass:"mb-2",attrs:{id:"phoneNumber3",loader:e.hasLoaderActive,error:e.hasErrorActive,dark:e.dark,"default-country-code":e.defaultCountry,"no-country-selector":""},on:{update:e.onUpdate3},model:{value:e.phoneNumber3,callback:function(t){e.phoneNumber3=t},expression:"phoneNumber3"}}),r("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber2)+" "),r("br"),r("b",[e._v("Current country code")]),e._v(" : "+e._s(e.defaultCountry)+" ")],1),r("div",{staticClass:"component"},[r("h4",{staticClass:"mb-2"},[e._v(' Datas returned with "update" event ')]),r("div",{staticClass:"flex flex-wrap"},[r("table",{staticClass:"mr-2"},[e._m(3),e._l(e.resultsTable3,(function(t){return r("tr",{key:t,staticClass:"w-100"},[r("td",{attrs:{align:"left"}},[e._v(" "+e._s(t)+" ")]),r("td",[e._v(e._s(e.results3[t]))])])}))],2),r("div",{staticClass:"flex flex-direction-column flex-1"},[r("b",[e._v("Payload:")]),e._v(" "+e._s(e.results3)+" ")])])])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex align-center justify-center mb-3"},[r("a",{staticClass:"btn btn--dark mr-2",attrs:{target:"_blank",href:"https://github.com/LouisMazel/vue-phone-number-input"}},[e._v(" Github ")]),r("a",{staticClass:"btn btn--danger",attrs:{target:"_blank",href:"https://www.npmjs.com/package/vue-phone-number-input"}},[e._v(" NPM ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",[e._v("Key")]),r("th",[e._v("Value")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",[e._v("Key")]),r("th",[e._v("Value")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",[e._v("Key")]),r("th",[e._v("Value")])])}],i=(r("ac6a"),r("456d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-phone-number-input flex",class:[{dark:e.dark},e.size],attrs:{id:e.id}},[e.noCountrySelector?e._e():r("div",{staticClass:"select-country-container",class:{"no-phone-container":e.noPhone}},[r("CountrySelector",{ref:"CountrySelector",staticClass:"input-country-selector",class:{"no-phone":e.noPhone},attrs:{id:e.uniqueId+"_country_selector",items:e.codesCountries,"countries-height":e.countriesHeight,error:e.shouldChooseCountry,hint:e.shouldChooseCountry?e.t.countrySelectorError:null,disabled:e.disabled,valid:e.isValid&&!e.noValidatorState,"preferred-countries":e.preferredCountries,"only-countries":e.onlyCountries,"ignored-countries":e.ignoredCountries,label:e.t.countrySelectorLabel,"no-flags":e.noFlags,"no-phone":e.noPhone,"show-code-on-list":e.showCodeOnList,size:e.size,dark:e.dark,theme:e.theme},model:{value:e.countryCode,callback:function(t){e.countryCode=t},expression:"countryCode"}},[e._t("arrow",null,{slot:"arrow"})],2)],1),e.noPhone?e._e():r("div",{staticClass:"flex-1"},[r("InputTel",e._b({ref:"PhoneNumberInput",staticClass:"input-phone-number",attrs:{id:e.uniqueId+"_phone_number",label:e.t.phoneNumberLabel,hint:e.hintValue,dark:e.dark,disabled:e.disabled,size:e.size,error:e.error,valid:e.isValid&&!e.noValidatorState,required:e.required,"no-country-selector":e.noCountrySelector,theme:e.theme},on:{keydown:function(t){e.lastKeyPressed=t.keyCode},focus:function(t){return e.$emit("phone-number-focused")},blur:function(t){return e.$emit("phone-number-blur")}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}},"InputTel",e.$attrs,!1))],1)])}),s=[],u=(r("8e6e"),r("6b54"),r("96cf"),r("3b8d")),l=r("bd86"),c=(r("c5f6"),r("6762"),r("2fdb"),[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]]),d=c.map((function(e){return e[1].toUpperCase()})),h=c.map((function(e){return{name:e[0],iso2:e[1].toUpperCase(),dialCode:e[2],priority:e[3]||0,areaCodes:e[4]||null}})),p=r("d391"),f=r("3e84"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"parent",staticClass:"input-tel",class:[{"is-focused":e.isFocus,"is-valid":e.valid,"has-value":e.value,"has-error":e.error,"is-disabled":e.disabled,"is-dark":e.dark,"has-hint":e.hint},e.size],on:{click:e.focusInput,mouseenter:function(t){return e.updateHoverState(!0)},mouseleave:function(t){return e.updateHoverState(!1)}}},["checkbox"===e.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"InputTel",staticClass:"input-tel__input",class:{"no-country-selector":e.noCountrySelector},style:[e.noCountrySelector?e.radiusStyle:e.radiusRightStyle,e.inputCaretStyle,e.inputBorderStyle,e.inputBoxShadowStyle],attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"checkbox"},domProps:{checked:Array.isArray(e.inputValue)?e._i(e.inputValue,null)>-1:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){return e.$emit("click",t)},change:function(t){var r=e.inputValue,n=t.target,a=!!n.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);n.checked?i<0&&(e.inputValue=r.concat([o])):i>-1&&(e.inputValue=r.slice(0,i).concat(r.slice(i+1)))}else e.inputValue=a}}},"input",e.$attrs,!1)):"radio"===e.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"InputTel",staticClass:"input-tel__input",class:{"no-country-selector":e.noCountrySelector},style:[e.noCountrySelector?e.radiusStyle:e.radiusRightStyle,e.inputCaretStyle,e.inputBorderStyle,e.inputBoxShadowStyle],attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:"radio"},domProps:{checked:e._q(e.inputValue,null)},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){return e.$emit("click",t)},change:function(t){e.inputValue=null}}},"input",e.$attrs,!1)):r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],ref:"InputTel",staticClass:"input-tel__input",class:{"no-country-selector":e.noCountrySelector},style:[e.noCountrySelector?e.radiusStyle:e.radiusRightStyle,e.inputCaretStyle,e.inputBorderStyle,e.inputBoxShadowStyle],attrs:{id:e.id,placeholder:e.labelValue,disabled:e.disabled,required:e.required,type:e.type},domProps:{value:e.inputValue},on:{keydown:e.keyDown,keyup:e.keyUp,focus:e.onFocus,blur:e.onBlur,click:function(t){return e.$emit("click",t)},input:function(t){t.target.composing||(e.inputValue=t.target.value)}}},"input",e.$attrs,!1)),e.clearable&&e.inputValue?r("button",{staticClass:"input-tel__clear",attrs:{title:"clear",type:"button",tabindex:"-1"},on:{click:e.clear}},[r("span",{staticClass:"input-tel__clear__effect"}),r("span",[e._v(" ✕ ")])]):e._e(),e.loader?r("div",{staticClass:"input-tel__loader"},[r("div",{staticClass:"input-tel__loader__progress-bar"})]):e._e()])},b=[],y={props:{theme:{type:Object,required:!0}},computed:{labelColorStyle:function(){return this.error?this.theme.errorColor:this.valid?this.theme.validColor:this.isFocus?this.theme.color:null},inputBorderStyle:function(){return this.error?this.theme.borderErrorColor:this.valid?this.theme.borderValidColor:this.isHover||this.isFocus?this.theme.borderColor:null},inputBoxShadowStyle:function(){return this.isFocus?this.error?this.theme.boxShadowError:this.valid?this.theme.boxShadowValid:this.theme.boxShadowColor:null},inputCaretStyle:function(){return{caretColor:this.theme.colorValue}},radiusStyle:function(){return this.theme.borderRadius},radiusLeftStyle:function(){return this.theme.borderLeftRadius},radiusRightStyle:function(){return this.theme.borderRightRadius},bgItemSelectedStyle:function(){return this.theme.bgColor}}},v={name:"InputTel",mixins:[y],props:{value:{type:[String,Number],default:null},label:{type:String,default:"Enter text"},hint:{type:String,default:null},error:{type:Boolean,default:Boolean},disabled:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},id:{type:String,default:"InputTel"},size:{type:String,default:null},type:{type:String,default:"tel"},readonly:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},required:{type:Boolean,default:!1},loader:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},noCountrySelector:{type:Boolean,default:!1}},data:function(){return{isFocus:!1,isHover:!1}},computed:{inputValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},labelValue:function(){var e=this.label;return this.required&&e?"".concat(e," *"):e},hintValue:function(){var e=this.hint;return this.required&&e?"".concat(e," *"):e}},methods:{updateHoverState:function(e){this.isHover=e},focusInput:function(){this.$refs.InputTel.focus()},onFocus:function(){this.$emit("focus"),this.isFocus=!0},onBlur:function(){this.$emit("blur"),this.isFocus=!1},clear:function(){this.$emit("input",null),this.$emit("clear")},keyUp:function(e){this.$emit("keyup",e)},keyDown:function(e){this.$emit("keydown",e)}}},g=v,C=(r("2286"),r("0c7c")),S=Object(C["a"])(g,m,b,!1,null,"75475f9c",null),k=S.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"parent",staticClass:"country-selector",class:[{"is-focused":e.isFocus,"has-value":e.value,"has-hint":e.hint,"has-error":e.error,"is-disabled":e.disabled,"is-dark":e.dark,"no-flags":e.noFlags,"has-list-open":e.hasListOpen,"is-valid":e.valid},e.size],on:{"!blur":function(t){return e.handleBlur(t)},mouseenter:function(t){return e.updateHoverState(!0)},mouseleave:function(t){return e.updateHoverState(!1)}}},[e.value&&!e.noFlags?r("div",{staticClass:"country-selector__country-flag",on:{click:function(t){return t.stopPropagation(),e.toggleList(t)}}},[r("div",{class:"iti-flag-small iti-flag "+e.value.toLowerCase()})]):e._e(),r("input",{ref:"CountrySelector",staticClass:"country-selector__input",style:[e.radiusLeftStyle,e.inputBorderStyle,e.inputBoxShadowStyle],attrs:{id:e.id,placeholder:e.label,disabled:e.disabled,readonly:""},domProps:{value:e.callingCode},on:{focus:function(t){e.isFocus=!0},keydown:e.keyboardNav,click:function(t){return t.stopPropagation(),e.toggleList(t)}}}),r("div",{staticClass:"country-selector__toggle",on:{click:function(t){return t.stopPropagation(),e.toggleList(t)}}},[e._t("arrow",[r("svg",{staticClass:"country-selector__toggle__arrow",attrs:{mlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{staticClass:"arrow",attrs:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}),r("path",{attrs:{fill:"none",d:"M0 0h24v24H0V0z"}})])])],2),r("Transition",{attrs:{name:"slide"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.hasListOpen,expression:"hasListOpen"}],ref:"countriesList",staticClass:"country-selector__list",class:{"has-calling-code":e.showCodeOnList},style:[e.radiusStyle,e.listHeight]},[r("RecycleScroller",{attrs:{items:e.countriesSorted,"item-size":1,"key-field":"iso2"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[r("button",{key:"item-"+n.code,staticClass:"flex align-center country-selector__list__item",class:[{selected:e.value===n.iso2},{"keyboard-selected":e.value!==n.iso2&&e.tmpValue===n.iso2}],style:[e.itemHeight,e.value===n.iso2?e.bgItemSelectedStyle:null],attrs:{tabindex:"-1",type:"button"},on:{click:function(t){return t.stopPropagation(),e.updateValue(n.iso2)}}},[e.noFlags?e._e():r("div",{staticClass:"country-selector__list__item__flag-container"},[r("div",{class:"iti-flag-small iti-flag "+n.iso2.toLowerCase()})]),e.showCodeOnList?r("span",{staticClass:"country-selector__list__item__calling-code flex-fixed"},[e._v("+"+e._s(n.dialCode))]):e._e(),r("div",{staticClass:"dots-text"},[e._v(" "+e._s(n.name)+" ")])])]}}])})],1)])],1)},w=[],x=(r("f559"),r("7f7f"),r("20d6"),r("75fc")),N=(r("7514"),r("e508")),L={name:"CountrySelector",components:{RecycleScroller:N["a"]},mixins:[y],props:{id:{type:String,default:"CountrySelector"},value:{type:[String,Object],default:null},label:{type:String,default:"Choose country"},hint:{type:String,default:String},size:{type:String,default:String},error:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},items:{type:Array,default:Array,required:!0},preferredCountries:{type:Array,default:null},onlyCountries:{type:Array,default:null},ignoredCountries:{type:Array,default:null},noFlags:{type:Boolean,default:!1},noPhone:{type:Boolean,default:!1},countriesHeight:{type:Number,default:35},showCodeOnList:{type:Boolean,default:!1}},data:function(){return{isFocus:!1,isHover:!1,hasListOpen:!1,selectedIndex:null,tmpValue:this.value,query:"",indexItemToShow:0}},computed:{itemHeight:function(){return{height:"".concat(this.countriesHeight,"px")}},listHeight:function(){return{height:"".concat(7*(this.countriesHeight+1),"px"),maxHeight:"".concat(7*(this.countriesHeight+1),"px")}},countriesList:function(){var e=this;return this.items.filter((function(t){return!e.ignoredCountries.includes(t.iso2)}))},countriesFiltered:function(){var e=this,t=this.onlyCountries||this.preferredCountries;return t.map((function(t){return e.countriesList.find((function(e){return e.iso2.includes(t)}))}))},otherCountries:function(){var e=this;return this.countriesList.filter((function(t){return!e.preferredCountries.includes(t.iso2)}))},countriesSorted:function(){return this.preferredCountries?[].concat(Object(x["a"])(this.countriesFiltered),Object(x["a"])(this.otherCountries)):this.onlyCountries?this.countriesFiltered:this.countriesList},selectedValueIndex:function(){var e=this;return this.value?this.countriesSorted.findIndex((function(t){return t.iso2===e.value})):null},tmpValueIndex:function(){var e=this;return this.countriesSorted.findIndex((function(t){return t.iso2===e.tmpValue}))},countryName:function(){return this.noPhone&&this.selectedValueIndex?" "+this.countriesSorted[this.selectedValueIndex].name:""},callingCode:function(){return this.value?"+".concat(Object(f["b"])(this.value)).concat(this.countryName):null}},methods:{updateHoverState:function(e){this.isHover=e},handleBlur:function(e){this.$el.contains(e.relatedTarget)||(this.isFocus=!1,this.closeList())},toggleList:function(){this.hasListOpen?this.closeList():this.openList()},openList:function(){this.disabled||(this.$emit("open"),this.isFocus=!0,this.hasListOpen=!0,this.value&&this.scrollToSelectedOnFocus(this.selectedValueIndex))},closeList:function(){this.$emit("close"),this.hasListOpen=!1},updateValue:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.tmpValue=t,this.$emit("input",t||null),e.next=4,this.$nextTick();case 4:this.closeList();case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),scrollToSelectedOnFocus:function(e){var t=this;this.$nextTick((function(){t.$refs.countriesList.scrollTop=e*(t.countriesHeight+1)-3*(t.countriesHeight+1)}))},keyboardNav:function(e){var t=e.keyCode;if(40===t||38===t){e.view&&e.view.event&&e.view.event.preventDefault(),this.hasListOpen||this.openList();var r=40===t?this.tmpValueIndex+1:this.tmpValueIndex-1;(-1===r||r>=this.countriesSorted.length)&&(r=-1===r?this.countriesSorted.length-1:0),this.tmpValue=this.countriesSorted[r].iso2,this.scrollToSelectedOnFocus(r)}else 13===t?this.hasListOpen?this.updateValue(this.tmpValue):this.openList():27===t?this.closeList():this.searching(e)},searching:function(e){var t=this,r=e.keyCode;clearTimeout(this.queryTimer),this.queryTimer=setTimeout((function(){t.query=""}),1e3);var n=String.fromCharCode(r);if(8===r&&""!==this.query)this.query=this.query.substring(0,this.query.length-1);else if(/[a-zA-Z-e ]/.test(n)){this.hasListOpen||this.openList(),this.query+=e.key;var a=this.preferredCountries?this.countriesSorted.slice(this.preferredCountries.length):this.countriesSorted,o=a.findIndex((function(e){return t.tmpValue=e.iso2,e.name.toLowerCase().startsWith(t.query)}));-1!==o&&this.scrollToSelectedOnFocus(o+(this.preferredCountries?this.preferredCountries.length:0))}}}},V=L,B=(r("28bd"),Object(C["a"])(V,_,w,!1,null,"ee6f5fb6",null)),P=B.exports,I={countrySelectorLabel:"Country code",countrySelectorError:"Choose country",phoneNumberLabel:"Phone number",example:"Example:"},O=r("4883");function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){return Object(O["isColorName"])(e)?Object(O["HexToRgba"])(Object(O["colorNameToHex"])(e),.7):Object(O["HexToRgba"])(e,.7)},M=function(){if(!window)return null;var e=window.navigator.userLanguage||window.navigator.language,t=e?e.substr(3,4).toUpperCase():null;return""===t&&(t=e.substr(0,2).toUpperCase()),t},z=function(e){return d.includes(e)},E={name:"MazPhoneNumberInput",components:{InputTel:k,CountrySelector:P},props:{value:{type:String,default:null},id:{type:String,default:"MazPhoneNumberInput"},color:{type:String,default:"dodgerblue"},validColor:{type:String,default:"yellowgreen"},errorColor:{type:String,default:"orangered"},darkColor:{type:String,default:"#424242"},disabled:{type:Boolean,default:!1},defaultCountryCode:{type:String,default:null},size:{type:String,default:null},preferredCountries:{type:Array,default:null},onlyCountries:{type:Array,default:null},ignoredCountries:{type:Array,default:Array},translations:{type:Object,default:null},noValidatorState:{type:Boolean,default:!1},noFlags:{type:Boolean,default:!1},noPhone:{type:Boolean,default:!1},error:{type:Boolean,default:!1},noExample:{type:Boolean,default:!1},required:{type:Boolean,default:!1},countriesHeight:{type:Number,default:30},noUseBrowserLocale:{type:Boolean,default:!1},fetchCountry:{type:Boolean,default:!1},noCountrySelector:{type:Boolean,default:!1},showCodeOnList:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},borderRadius:{type:Number,default:4}},data:function(){return{results:{},userLocale:this.defaultCountryCode,lastKeyPressed:null}},computed:{uniqueId:function(){return"".concat(this.id,"-").concat(this._uid)},t:function(){return j({},I,{},this.translations)},codesCountries:function(){return h},countryCode:{get:function(){return this.results.countryCode||this.userLocale},set:function(e){this.emitValues({countryCode:e,phoneNumber:this.phoneNumber}),this.$refs.PhoneNumberInput.$el.querySelector("input").focus()}},phoneNumber:{get:function(){return this.value},set:function(e){this.emitValues({countryCode:this.countryCode,phoneNumber:e})}},shouldChooseCountry:function(){return!this.countryCode&&!!this.phoneNumber},phoneFormatted:function(){return this.results.formatInternational},isValid:function(){return this.results.isValid},phoneNumberExample:function(){var e=this.countryCode?Object(f["c"])(this.countryCode,p):null;return e?e.formatNational():null},hasEmptyPhone:function(){return""===this.phoneNumber||null===this.phoneNumber},hintValue:function(){return this.noExample||!this.phoneNumberExample?null:this.hasEmptyPhone||this.isValid?null:"".concat(this.t.example," ").concat(this.phoneNumberExample)},theme:function(){return{colorValue:this.color,color:{color:this.color},validColor:{color:this.validColor},errorColor:{color:this.errorColor},darkColor:{color:this.darkColor},bgColor:{backgroundColor:this.color},bgValidColor:{backgroundColor:this.validColor},bgErrorColor:{backgroundColor:this.errorColor},bgDarkColor:{backgroundColor:this.darkColor},borderColor:{borderColor:this.color},borderValidColor:{borderColor:this.validColor},borderErrorColor:{borderColor:this.errorColor},borderDarkColor:{borderColor:this.darkColor},boxShadowColor:{boxShadow:"0 0 0 0 ".concat(R(this.color))},boxShadowValid:{boxShadow:"0 0 0 0 ".concat(R(this.validColor))},boxShadowError:{boxShadow:"0 0 0 0 ".concat(R(this.errorColor))},borderRadius:{borderRadius:"".concat(this.borderRadius,"px")},borderLeftRadius:{borderTopLeftRadius:"".concat(this.borderRadius,"px"),borderBottomLeftRadius:"".concat(this.borderRadius,"px")},borderRightRadius:{borderTopRightRadius:"".concat(this.borderRadius,"px"),borderBottomRightRadius:"".concat(this.borderRadius,"px")}}}},watch:{defaultCountryCode:function(e,t){e!==t&&this.setLocale(e)}},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.phoneNumber&&this.defaultCountryCode&&this.emitValues({countryCode:this.defaultCountryCode,phoneNumber:this.phoneNumber}),!this.defaultCountryCode||!this.fetchCountry){e.next=4;break}throw new Error('MazPhoneNumberInput: Do not use "fetch-country" and "default-country-code" options in the same time');case 4:if(!this.defaultCountryCode||!this.noUseBrowserLocale){e.next=6;break}throw new Error('MazPhoneNumberInput: If you use a "default-country-code", do not use "no-use-browser-locale" options');case 6:if(!this.defaultCountryCode){e.next=8;break}return e.abrupt("return");case 8:this.fetchCountry?this.fetchCountryCode():!this.noUseBrowserLocale&&this.setLocale(M()),e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{getAsYouTypeFormat:function(e){var t=new f["a"](e.countryCode);return t.input(e.phoneNumber)},getParsePhoneNumberFromString:function(e){var t=e.phoneNumber,r=e.countryCode,n=t&&r?Object(f["d"])(t,r):null;return j({countryCode:r,isValid:!1},t&&""!==t?{phoneNumber:t}:null,{},n?{countryCallingCode:n.countryCallingCode,formattedNumber:n.number,nationalNumber:n.nationalNumber,isValid:n.isValid(),type:n.getType(),formatInternational:n.formatInternational(),formatNational:n.formatNational(),uri:n.getURI(),e164:n.format("E.164")}:null)},emitValues:function(e){var t=this,r=this.getAsYouTypeFormat(e),n=8===this.lastKeyPressed;this.$nextTick((function(){var a=!!t.phoneNumber&&t.phoneNumber.trim().slice(-1);n&&a&&")"===a.slice(-1)&&(r=t.phoneNumber.slice(0,-2),e.phoneNumber=t.phoneNumber.slice(0,-2)),t.results=t.getParsePhoneNumberFromString(e),t.$emit("update",t.results),t.$emit("input",r)}))},setLocale:function(e){var t=z(e);t&&e?this.countryCode=e:!t&&e&&window.console.warn("The locale ".concat(e," is not available")),this.userLocale=t?e:null},fetchCountryCode:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ip2c.org/s");case 3:return t=e.sent,e.next=6,t.text();case 6:r=e.sent,n=(r||"").toString(),n&&"1"===n[0]&&this.setLocale(n.substr(2,2)),e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](0),new Error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}},F=E,A=(r("71b5"),Object(C["a"])(F,i,s,!1,null,"2e90d179",null)),q=A.exports,$={name:"App",components:{VuePhoneNumberInput:q},data:function(){return{phoneNumber:null,phoneNumber2:null,phoneNumber3:"0665656565",defaultCountry:"FR",countriesList:["FR","BE","DE"],countriesIgnored:["AF","AD","AL"],translations:{countrySelectorLabel:"Code pays",countrySelectorError:"Choisir un pays",phoneNumberLabel:"Numéro de téléphone",example:"Exemple :"},results:{},results2:{},results3:{},dark:!1,disabled:!1,hasLoaderActive:!1,hasErrorActive:!1}},computed:{resultsTable:function(){return Object.keys(this.results)},resultsTable2:function(){return Object.keys(this.results2)},resultsTable3:function(){return Object.keys(this.results3)}},methods:{onUpdate:function(e){this.results=e},onUpdate2:function(e){this.results2=e},onUpdate3:function(e){this.results3=e}}},H=$,U=(r("5c0b"),r("bceb"),Object(C["a"])(H,a,o,!1,null,"c7baf710",null)),D=U.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(D)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("37c7"),a=r.n(n);a.a},"71b5":function(e,t,r){"use strict";var n=r("96b8"),a=r.n(n);a.a},8534:function(e,t,r){},"8a1b":function(e,t,r){},"96b8":function(e,t,r){},bceb:function(e,t,r){"use strict";var n=r("1fc9"),a=r.n(n);a.a}});
//# sourceMappingURL=app.7fd65e8e.js.map