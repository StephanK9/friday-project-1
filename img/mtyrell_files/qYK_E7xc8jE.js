if (self.CavalryLogger) { CavalryLogger.start_js(["DJJ0e"]); }

__d('XUIDialogSaveButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'confirm',label:h._("Save")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('update',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={}.hasOwnProperty;function j(u){if(Array.isArray(u)){return u.concat();}else if(u&&typeof u==='object'){return Object.assign(new u.constructor(),u);}else return u;}var k='$push',l='$unshift',m='$splice',n='$set',o='$merge',p='$apply',q=[k,l,m,n,o,p],r={};q.forEach(function(u){r[u]=true;});function s(u,v,w){!Array.isArray(u)?h(0):void 0;var x=v[w];!Array.isArray(x)?h(0):void 0;}function t(u,v){!(typeof v==='object')?h(0):void 0;if(i.call(v,n)){!(Object.keys(v).length===1)?h(0):void 0;return v[n];}var w=j(u);if(i.call(v,o)){var x=v[o];!(x&&typeof x==='object')?h(0):void 0;!(w&&typeof w==='object')?h(0):void 0;Object.assign(w,v[o]);}if(i.call(v,k)){s(u,v,k);v[k].forEach(function(z){w.push(z);});}if(i.call(v,l)){s(u,v,l);v[l].forEach(function(z){w.unshift(z);});}if(i.call(v,m)){!Array.isArray(u)?h(0):void 0;!Array.isArray(v[m])?h(0):void 0;v[m].forEach(function(z){!Array.isArray(z)?h(0):void 0;w.splice.apply(w,z);});}if(i.call(v,p)){!(typeof v[p]==='function')?h(0):void 0;w=v[p](w);}for(var y in v)if(!(r.hasOwnProperty(y)&&r[y]))w[y]=t(u[y],v[y]);return w;}f.exports=t;}),null);
__d('XUITypeahead.react',['cx','AbstractTypeahead.react','Image.react','React','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','joinClasses','update'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l={ViewRenderer:c('XUITypeaheadView.react'),useLayer:true},m={ViewRenderer:c('XUITypeaheadView.react'),useLayer:false},n={ViewRenderer:c('XUITypeaheadTextOnlyView.react'),useLayer:true};i=babelHelpers.inherits(o,c('React').Component);j=i&&i.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=j.constructor).call.apply(p,[this].concat(s)),this.focusInput=function(){this.refs.typeahead&&this.refs.typeahead.focusInput();}.bind(this),this.blurInput=function(){this.refs.typeahead&&this.refs.typeahead.blurInput();}.bind(this),this.hideView=function(){this.refs.typeahead.hideView();}.bind(this),this.getTextFieldDOM=function(){return this.refs.typeahead.getTextFieldDOM();}.bind(this),this.$XUITypeahead1=function(){this.props.onClear();setTimeout(function(){return this.focusInput();}.bind(this),0);}.bind(this),q;}o.prototype.componentWillMount=function(){'use strict';};o.prototype.render=function(){'use strict';var p="_55r1"+(!!this.props.tallInput?' '+"_55r2":''),q=null;if(this.props.presenter){q=this.props.presenter;}else if(this.props.viewStyle=='rich'){q=l;}else if(this.props.viewStyle=='richNoLayer'){q=m;}else q=n;if(!this.props.presenter&&this.props.maxEntries)q=c('update')(q,{maxEntries:{$set:this.props.maxEntries}});var r=this.props.showPhoto&&this.props.selectedEntry?c('React').createElement(c('Image.react'),{className:"_wrl",src:this.props.selectedEntry.getPhoto()}):null,s=this.props.clearable?c('React').createElement(c('XUICloseButton.react'),{className:"_wrm"+(this.props.disabled||!this.props.queryString?' '+"hidden_elem":''),size:this.props.tallInput?'medium':'small',type:'button',onClick:this.$XUITypeahead1}):null,t=this.props,u=t.className,v=babelHelpers.objectWithoutProperties(t,['className']);return (c('React').createElement(c('XUIError.react'),this.props,c('React').createElement('span',{className:c('joinClasses')("_wrn"+(!!this.props.tallInput?' '+"_213j":'')+(!!s?' '+"_4ehf":'')+(!!r?' '+"_4ehg":'')+(!!this.props.queryString?' '+"_4in7":'')+(this.props.highlightOnSelect&&this.props.selectedEntry?' '+"_wrr":''),u)},r,c('React').createElement(c('AbstractTypeahead.react'),babelHelpers['extends']({},v,{inputClassName:p,ref:'typeahead',presenter:q})),s)));};o.propTypes=babelHelpers['extends']({maxEntries:k.number,onChange:k.func.isRequired,onSelectAttempt:k.func.isRequired,onEnterWithoutSelection:k.func,onEntriesFound:k.func,onNoEntriesFound:k.func,selectedEntry:k.instanceOf(c('SearchableEntry')),tallInput:k.bool,viewStyle:k.oneOf(['textonly','rich','richNoLayer']),clearable:k.bool,onClear:k.func,showPhoto:k.bool,highlightOnSelect:k.bool,presenter:k.object,inputID:k.string},c('XUIError.react').propTypes);o.defaultProps={viewStyle:'rich'};f.exports=o;}),null);
__d('highlight',['Animation','Style'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){new (c('Animation'))(i).from('background',l||'#fff9d7').to('background',k||'#fff').ease(c('Animation').ease.both).duration(2000).ondone(function(){c('Style').set(i,'background','');j&&j();}).go();}f.exports=h;}),null);
__d("QueriesHistory",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$QueriesHistory1=i;this.reset();}h.prototype.getQueries=function(){"use strict";return this.$QueriesHistory2;};h.prototype.getCurrentLength=function(){"use strict";return this.$QueriesHistory3;};h.prototype.add=function(i){"use strict";this.$QueriesHistory2.push(i);this.$QueriesHistory3+=i.length;while(this.$QueriesHistory2.length!==0&&this.$QueriesHistory3>this.$QueriesHistory1){var j=this.$QueriesHistory2.shift();this.$QueriesHistory3-=j.length;}};h.prototype.reset=function(){"use strict";this.$QueriesHistory3=0;this.$QueriesHistory2=[];};f.exports=h;}),null);
__d('trim',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(j,k){!(k.length===1)?h(0):void 0;if(j==='')return j;while(j.charAt(0)===k)j=j.slice(1);while(j.charAt(j.length-1)===k)j=j.slice(0,-1);return j;}f.exports=i;}),null);
__d("XGamesDesktopAppDownloadController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/games\/desktopapp\/download\/",{app_id:{type:"Int"},fbsource:{type:"Int"}});}),null);