"use strict";(()=>{var Z=Object.create;var q=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var N=(c=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(c,{get:(s,g)=>(typeof require<"u"?require:s)[g]}):c)(function(c){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+c+'" is not supported')});var re=(c,s)=>()=>(s||c((s={exports:{}}).exports,s),s.exports);var ie=(c,s,g,S)=>{if(s&&typeof s=="object"||typeof s=="function")for(let _ of ee(s))!ne.call(c,_)&&_!==g&&q(c,_,{get:()=>s[_],enumerable:!(S=$(s,_))||S.enumerable});return c};var oe=(c,s,g)=>(g=c!=null?Z(te(c)):{},ie(s||!c||!c.__esModule?q(g,"default",{value:c,enumerable:!0}):g,c));var z=re(U=>{(function c(s){"use strict";var g,S,_,f,b,p;function A(n){var e={},r,t;for(r in n)n.hasOwnProperty(r)&&(t=n[r],typeof t=="object"&&t!==null?e[r]=A(t):e[r]=t);return e}function v(n,e){var r,t,l,a;for(t=n.length,l=0;t;)r=t>>>1,a=l+r,e(n[a])?t=r:(l=a+1,t-=r+1);return l}g={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ChainExpression:"ChainExpression",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ComprehensionBlock:"ComprehensionBlock",ComprehensionExpression:"ComprehensionExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DebuggerStatement:"DebuggerStatement",DirectiveStatement:"DirectiveStatement",DoWhileStatement:"DoWhileStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",ForOfStatement:"ForOfStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",GeneratorExpression:"GeneratorExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportExpression:"ImportExpression",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",ModuleSpecifier:"ModuleSpecifier",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",PrivateIdentifier:"PrivateIdentifier",Program:"Program",Property:"Property",PropertyDefinition:"PropertyDefinition",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"},_={AssignmentExpression:["left","right"],AssignmentPattern:["left","right"],ArrayExpression:["elements"],ArrayPattern:["elements"],ArrowFunctionExpression:["params","body"],AwaitExpression:["argument"],BlockStatement:["body"],BinaryExpression:["left","right"],BreakStatement:["label"],CallExpression:["callee","arguments"],CatchClause:["param","body"],ChainExpression:["expression"],ClassBody:["body"],ClassDeclaration:["id","superClass","body"],ClassExpression:["id","superClass","body"],ComprehensionBlock:["left","right"],ComprehensionExpression:["blocks","filter","body"],ConditionalExpression:["test","consequent","alternate"],ContinueStatement:["label"],DebuggerStatement:[],DirectiveStatement:[],DoWhileStatement:["body","test"],EmptyStatement:[],ExportAllDeclaration:["source"],ExportDefaultDeclaration:["declaration"],ExportNamedDeclaration:["declaration","specifiers","source"],ExportSpecifier:["exported","local"],ExpressionStatement:["expression"],ForStatement:["init","test","update","body"],ForInStatement:["left","right","body"],ForOfStatement:["left","right","body"],FunctionDeclaration:["id","params","body"],FunctionExpression:["id","params","body"],GeneratorExpression:["blocks","filter","body"],Identifier:[],IfStatement:["test","consequent","alternate"],ImportExpression:["source"],ImportDeclaration:["specifiers","source"],ImportDefaultSpecifier:["local"],ImportNamespaceSpecifier:["local"],ImportSpecifier:["imported","local"],Literal:[],LabeledStatement:["label","body"],LogicalExpression:["left","right"],MemberExpression:["object","property"],MetaProperty:["meta","property"],MethodDefinition:["key","value"],ModuleSpecifier:[],NewExpression:["callee","arguments"],ObjectExpression:["properties"],ObjectPattern:["properties"],PrivateIdentifier:[],Program:["body"],Property:["key","value"],PropertyDefinition:["key","value"],RestElement:["argument"],ReturnStatement:["argument"],SequenceExpression:["expressions"],SpreadElement:["argument"],Super:[],SwitchStatement:["discriminant","cases"],SwitchCase:["test","consequent"],TaggedTemplateExpression:["tag","quasi"],TemplateElement:[],TemplateLiteral:["quasis","expressions"],ThisExpression:[],ThrowStatement:["argument"],TryStatement:["block","handler","finalizer"],UnaryExpression:["argument"],UpdateExpression:["argument"],VariableDeclaration:["declarations"],VariableDeclarator:["id","init"],WhileStatement:["test","body"],WithStatement:["object","body"],YieldExpression:["argument"]},f={},b={},p={},S={Break:f,Skip:b,Remove:p};function k(n,e){this.parent=n,this.key=e}k.prototype.replace=function(e){this.parent[this.key]=e},k.prototype.remove=function(){return Array.isArray(this.parent)?(this.parent.splice(this.key,1),!0):(this.replace(null),!1)};function w(n,e,r,t){this.node=n,this.path=e,this.wrap=r,this.ref=t}function x(){}x.prototype.path=function(){var e,r,t,l,a,m;function o(i,u){if(Array.isArray(u))for(t=0,l=u.length;t<l;++t)i.push(u[t]);else i.push(u)}if(!this.__current.path)return null;for(a=[],e=2,r=this.__leavelist.length;e<r;++e)m=this.__leavelist[e],o(a,m.path);return o(a,this.__current.path),a},x.prototype.type=function(){var n=this.current();return n.type||this.__current.wrap},x.prototype.parents=function(){var e,r,t;for(t=[],e=1,r=this.__leavelist.length;e<r;++e)t.push(this.__leavelist[e].node);return t},x.prototype.current=function(){return this.__current.node},x.prototype.__execute=function(e,r){var t,l;return l=void 0,t=this.__current,this.__current=r,this.__state=null,e&&(l=e.call(this,r.node,this.__leavelist[this.__leavelist.length-1].node)),this.__current=t,l},x.prototype.notify=function(e){this.__state=e},x.prototype.skip=function(){this.notify(b)},x.prototype.break=function(){this.notify(f)},x.prototype.remove=function(){this.notify(p)},x.prototype.__initialize=function(n,e){this.visitor=e,this.root=n,this.__worklist=[],this.__leavelist=[],this.__current=null,this.__state=null,this.__fallback=null,e.fallback==="iteration"?this.__fallback=Object.keys:typeof e.fallback=="function"&&(this.__fallback=e.fallback),this.__keys=_,e.keys&&(this.__keys=Object.assign(Object.create(this.__keys),e.keys))};function I(n){return n==null?!1:typeof n=="object"&&typeof n.type=="string"}function L(n,e){return(n===g.ObjectExpression||n===g.ObjectPattern)&&e==="properties"}function j(n,e){for(var r=n.length-1;r>=0;--r)if(n[r].node===e)return!0;return!1}x.prototype.traverse=function(e,r){var t,l,a,m,o,i,u,E,d,y,h,C;for(this.__initialize(e,r),C={},t=this.__worklist,l=this.__leavelist,t.push(new w(e,null,null,null)),l.push(new w(null,null,null,null));t.length;){if(a=t.pop(),a===C){if(a=l.pop(),i=this.__execute(r.leave,a),this.__state===f||i===f)return;continue}if(a.node){if(i=this.__execute(r.enter,a),this.__state===f||i===f)return;if(t.push(C),l.push(a),this.__state===b||i===b)continue;if(m=a.node,o=m.type||a.wrap,y=this.__keys[o],!y)if(this.__fallback)y=this.__fallback(m);else throw new Error("Unknown node type "+o+".");for(E=y.length;(E-=1)>=0;)if(u=y[E],h=m[u],!!h){if(Array.isArray(h)){for(d=h.length;(d-=1)>=0;)if(h[d]&&!j(l,h[d])){if(L(o,y[E]))a=new w(h[d],[u,d],"Property",null);else if(I(h[d]))a=new w(h[d],[u,d],null,null);else continue;t.push(a)}}else if(I(h)){if(j(l,h))continue;t.push(new w(h,u,null,null))}}}}},x.prototype.replace=function(e,r){var t,l,a,m,o,i,u,E,d,y,h,C,D;function M(P){var B,W,F,V;if(P.ref.remove()){for(W=P.ref.key,V=P.ref.parent,B=t.length;B--;)if(F=t[B],F.ref&&F.ref.parent===V){if(F.ref.key<W)break;--F.ref.key}}}for(this.__initialize(e,r),h={},t=this.__worklist,l=this.__leavelist,C={root:e},i=new w(e,null,null,new k(C,"root")),t.push(i),l.push(i);t.length;){if(i=t.pop(),i===h){if(i=l.pop(),o=this.__execute(r.leave,i),o!==void 0&&o!==f&&o!==b&&o!==p&&i.ref.replace(o),(this.__state===p||o===p)&&M(i),this.__state===f||o===f)return C.root;continue}if(o=this.__execute(r.enter,i),o!==void 0&&o!==f&&o!==b&&o!==p&&(i.ref.replace(o),i.node=o),(this.__state===p||o===p)&&(M(i),i.node=null),this.__state===f||o===f)return C.root;if(a=i.node,!!a&&(t.push(h),l.push(i),!(this.__state===b||o===b))){if(m=a.type||i.wrap,d=this.__keys[m],!d)if(this.__fallback)d=this.__fallback(a);else throw new Error("Unknown node type "+m+".");for(u=d.length;(u-=1)>=0;)if(D=d[u],y=a[D],!!y)if(Array.isArray(y)){for(E=y.length;(E-=1)>=0;)if(y[E]){if(L(m,d[u]))i=new w(y[E],[D,E],"Property",new k(y,E));else if(I(y[E]))i=new w(y[E],[D,E],null,new k(y,E));else continue;t.push(i)}}else I(y)&&t.push(new w(y,D,null,new k(a,D)))}}return C.root};function R(n,e){var r=new x;return r.traverse(n,e)}function J(n,e){var r=new x;return r.replace(n,e)}function Q(n,e){var r;return r=v(e,function(l){return l.range[0]>n.range[0]}),n.extendedRange=[n.range[0],n.range[1]],r!==e.length&&(n.extendedRange[1]=e[r].range[0]),r-=1,r>=0&&(n.extendedRange[0]=e[r].range[1]),n}function X(n,e,r){var t=[],l,a,m,o;if(!n.range)throw new Error("attachComments needs range information");if(!r.length){if(e.length){for(m=0,a=e.length;m<a;m+=1)l=A(e[m]),l.extendedRange=[0,n.range[0]],t.push(l);n.leadingComments=t}return n}for(m=0,a=e.length;m<a;m+=1)t.push(Q(A(e[m]),r));return o=0,R(n,{enter:function(i){for(var u;o<t.length&&(u=t[o],!(u.extendedRange[1]>i.range[0]));)u.extendedRange[1]===i.range[0]?(i.leadingComments||(i.leadingComments=[]),i.leadingComments.push(u),t.splice(o,1)):o+=1;if(o===t.length)return S.Break;if(t[o].extendedRange[0]>i.range[1])return S.Skip}}),o=0,R(n,{leave:function(i){for(var u;o<t.length&&(u=t[o],!(i.range[1]<u.extendedRange[0]));)i.range[1]===u.extendedRange[0]?(i.trailingComments||(i.trailingComments=[]),i.trailingComments.push(u),t.splice(o,1)):o+=1;if(o===t.length)return S.Break;if(t[o].extendedRange[0]>i.range[1])return S.Skip}}),n}return s.Syntax=g,s.traverse=R,s.replace=J,s.attachComments=X,s.VisitorKeys=_,s.VisitorOption=S,s.Controller=x,s.cloneEnvironment=function(){return c({})},s})(U)});var H=oe(z()),T=N("worker_threads");var K=N("./vendor/acorn.js"),O=N("./vendor/acorn-loose.js"),ae={ecmaVersion:"latest",locations:!0,allowAwaitOutsideFunction:!0,allowImportExportEverywhere:!0,allowReserved:!0,allowReturnOutsideFunction:!0};var Y=(c,s=!1)=>(s?K.parse:O.parse)(c,ae);var G={StaticBlock:["body"]};function se(c,s){let g=Y(c),S=(p,{loc:A}=p,{loc:v}=p)=>{if(!A||!v)throw new Error("should include locations");let k=s(A,v);if(f.length>0){let w=f[f.length-1];w.scopeNode.children??=[],w.scopeNode.children.push(k)}f.push({node:p,scopeNode:k})},_=new Set,f=[],b;return(0,H.traverse)(g,{keys:G,enter:p=>{switch(p.type){case"FunctionDeclaration":case"ArrowFunctionExpression":S(p,p.params[0]||p.body,p.body),_.add(p.body);break;case"Program":S(p),b=f[0].scopeNode;break;case"ForStatement":case"ForOfStatement":case"ForInStatement":S(p),_.add(p.body);break;case"BlockStatement":_.has(p)||S(p);break}},leave:p=>{p===f[f.length-1].node&&f.pop()}}),b}T.isMainThread||T.parentPort?.postMessage(se(T.workerData,(c,s)=>({start:c.start,end:s.end})));})();
//# sourceMappingURL=renameWorker.js.map
