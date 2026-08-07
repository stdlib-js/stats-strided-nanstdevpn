"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(R,s){
var c=require('@stdlib/stats-strided-nanvariancepn/dist').ndarray,o=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,a,n,d){return o(c(e,r,a,n,d))}s.exports=p
});var v=i(function(b,u){
var y=require('@stdlib/strided-base-stride2offset/dist'),f=t();function x(e,r,a,n){return f(e,r,a,n,y(e,n))}u.exports=x
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),m=t();l(q,"ndarray",m);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
