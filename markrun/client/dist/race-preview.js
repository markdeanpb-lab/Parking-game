var Fl="170";var gu=0,ic=1,xu=2;var xh=1,Ol=2,zn=3,li=0,Ve=1,Pe=2,oi=0,ns=1,sc=2,rc=3,oc=4,_u=5,Mi=100,yu=101,vu=102,Mu=103,bu=104,Su=200,Eu=201,wu=202,Tu=203,pa=204,ma=205,Au=206,Ru=207,Cu=208,Iu=209,Pu=210,Lu=211,Du=212,Uu=213,Nu=214,ga=0,xa=1,_a=2,os=3,ya=4,va=5,Ma=6,ba=7,_h=0,Fu=1,Ou=2,Cn=0,zu=1,Bu=2,ku=3,Hu=4,Vu=5,Gu=6,Wu=7;var yh=300,as=301,ls=302,Sa=303,Ea=304,So=306,wi=1e3,Si=1001,wa=1002,Ke=1003,Xu=1004;var sr=1005;var An=1006,Uo=1007;var Ei=1008;var Vn=1009,vh=1010,Mh=1011,Os=1012,zl=1013,Ti=1014,Rn=1015,Ks=1016,Bl=1017,kl=1018,cs=1020,bh=35902,Sh=1021,Eh=1022,cn=1023,wh=1024,Th=1025,is=1026,hs=1027,Hl=1028,Vl=1029,Ah=1030,Gl=1031;var Wl=1033,Nr=33776,Fr=33777,Or=33778,zr=33779,Ta=35840,Aa=35841,Ra=35842,Ca=35843,Ia=36196,Pa=37492,La=37496,Da=37808,Ua=37809,Na=37810,Fa=37811,Oa=37812,za=37813,Ba=37814,ka=37815,Ha=37816,Va=37817,Ga=37818,Wa=37819,Xa=37820,qa=37821,Br=36492,Ya=36494,$a=36495,Rh=36283,Za=36284,Ja=36285,Ka=36286;var kr=2300,ja=2301,No=2302,ac=2400,lc=2401,cc=2402;var qu=3200,Yu=3201;var Ch=0,$u=1,si="",ke="srgb",ms="srgb-linear",Eo="linear",xe="srgb";var Ni=7680;var hc=519,Zu=512,Ju=513,Ku=514,Ih=515,ju=516,Qu=517,tf=518,ef=519,Qa=35044;var uc="300 es",kn=2e3,Hr=2001,ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=1234567,Ls=Math.PI/180,zs=180/Math.PI;function In(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function Xl(i,t){return(i%t+t)%t}function nf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function sf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ds(i,t,e){return(1-e)*i+e*t}function rf(i,t,e,n){return Ds(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(Xl(i,t*2)-t)}function af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hf(i,t){return i+Math.random()*(t-i)}function uf(i){return i*(.5-Math.random())}function ff(i){i!==void 0&&(fc=i);let t=fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function df(i){return i*Ls}function pf(i){return i*zs}function mf(i){return(i&i-1)===0&&i!==0}function gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),u=r((n-t)/2),x=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ph={DEG2RAD:Ls,RAD2DEG:zs,generateUUID:In,clamp:He,euclideanModulo:Xl,mapLinear:nf,inverseLerp:sf,lerp:Ds,damp:rf,pingpong:of,smoothstep:af,smootherstep:lf,randInt:cf,randFloat:hf,randFloatSpread:uf,seededRandom:ff,degToRad:df,radToDeg:pf,isPowerOfTwo:mf,ceilPowerOfTwo:gf,floorPowerOfTwo:xf,setQuaternionFromProperEuler:_f,normalize:me,denormalize:yn},Ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oe=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],x=n[8],M=s[0],m=s[3],p=s[6],S=s[1],_=s[4],y=s[7],W=s[2],F=s[5],A=s[8];return r[0]=o*M+a*S+l*W,r[3]=o*m+a*_+l*F,r[6]=o*p+a*y+l*A,r[1]=c*M+h*S+d*W,r[4]=c*m+h*_+d*F,r[7]=c*p+h*y+d*A,r[2]=f*M+u*S+x*W,r[5]=f*m+u*_+x*F,r[8]=f*p+u*y+x*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,x=e*d+n*f+s*u;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=u*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fo.makeScale(t,e)),this}rotate(t){return this.premultiply(Fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fo=new oe;function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yf(){let i=Vr("canvas");return i.style.display="block",i}var dc={};function Is(i){i in dc||(dc[i]=!0,console.warn(i))}function vf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Mf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ce={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],gc=[.3127,.329],xc=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[ms]:{primaries:pc,whitePoint:gc,transfer:Eo,toXYZ:xc,fromXYZ:_c,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:pc,whitePoint:gc,transfer:xe,toXYZ:xc,fromXYZ:_c,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});var Fi,tl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=Vr("canvas")),Fi.width=t.width,Fi.height=t.height;let n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sf=0,Gr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oo(s[o].image)):r.push(Oo(s[o]))}else r=Oo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ef=0,en=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Si,s=Si,r=An,o=Ei,a=cn,l=Vn,c=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=In(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wi:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wi:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=yh;en.DEFAULT_ANISOTROPY=1;var Ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],x=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(u+1)/2,W=(p+1)/2,F=(h+f)/4,A=(d+M)/4,D=(x+m)/4;return _>y&&_>W?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=F/n,r=A/n):y>W?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=F/s,r=D/s):W<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),n=A/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-M)/S,this.z=(f-h)/S,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Gr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends el{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],x=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=x,t[e+3]=M;return}if(d!==M||l!==f||c!==u||h!==x){let m=1-a,p=l*f+c*u+h*x+d*M,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let W=Math.sqrt(_),F=Math.atan2(W,p*S);m=Math.sin(m*F)/W,a=Math.sin(a*F)/W}let y=a*S;if(l=l*m+f*y,c=c*m+u*y,h=h*m+x*y,d=d*m+M*y,m===1-a){let W=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=W,c*=W,h*=W,d*=W}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],x=r[o+3];return t[e]=a*x+h*d+l*u-c*f,t[e+1]=l*x+h*f+c*d-a*u,t[e+2]=c*x+h*u+a*f-l*d,t[e+3]=h*x-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*x,this._y=c*u*d-f*h*x,this._z=c*h*x+f*u*d,this._w=c*h*d-f*u*x;break;case"YXZ":this._x=f*h*d+c*u*x,this._y=c*u*d-f*h*x,this._z=c*h*x-f*u*d,this._w=c*h*d+f*u*x;break;case"ZXY":this._x=f*h*d-c*u*x,this._y=c*u*d+f*h*x,this._z=c*h*x+f*u*d,this._w=c*h*d-f*u*x;break;case"ZYX":this._x=f*h*d-c*u*x,this._y=c*u*d+f*h*x,this._z=c*h*x-f*u*d,this._w=c*h*d+f*u*x;break;case"YZX":this._x=f*h*d+c*u*x,this._y=c*u*d+f*h*x,this._z=c*h*x-f*u*d,this._w=c*h*d-f*u*x;break;case"XZY":this._x=f*h*d-c*u*x,this._y=c*u*d-f*h*x,this._z=c*h*x+f*u*d,this._w=c*h*d+f*u*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zo=new z,yc=new Pn,Wn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),or.subVectors(this.max,vs),Oi.subVectors(t.a,vs),zi.subVectors(t.b,vs),Bi.subVectors(t.c,vs),jn.subVectors(zi,Oi),Qn.subVectors(Bi,zi),pi.subVectors(Oi,Bi);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-pi.z,pi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,pi.z,0,-pi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-pi.y,pi.x,0];return!Bo(e,Oi,zi,Bi,or)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,Oi,zi,Bi,or))?!1:(ar.crossVectors(jn,Qn),e=[ar.x,ar.y,ar.z],Bo(e,Oi,zi,Bi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new z,new z,new z,new z,new z,new z,new z,new z],gn=new z,rr=new Wn,Oi=new z,zi=new z,Bi=new z,jn=new z,Qn=new z,pi=new z,vs=new z,or=new z,ar=new z,mi=new z;function Bo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var wf=new Wn,Ms=new z,ko=new z,hi=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(ko)),this.expandByPoint(Ms.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new z,Ho=new z,lr=new z,ti=new z,Vo=new z,cr=new z,Go=new z,Xr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ho.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Ho);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=ti.dot(this.direction),l=-ti.dot(lr),c=ti.lengthSq(),h=Math.abs(1-o*o),d,f,u,x;if(h>0)if(d=o*l-a,f=o*a-l,x=r*h,d>=0)if(f>=-x)if(f<=x){let M=1/h;d*=M,f*=M,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ho).addScaledVector(lr,f),u}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){Vo.subVectors(e,t),cr.subVectors(n,t),Go.crossVectors(Vo,cr);let o=this.direction.dot(Go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);let l=a*this.direction.dot(cr.crossVectors(ti,cr));if(l<0)return null;let c=a*this.direction.dot(Vo.cross(ti));if(c<0||l+c>o)return null;let h=-a*ti.dot(Go);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,x,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,x,M,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,x,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=x,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,x=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+x*c,e[5]=f-M*c,e[9]=-a*l,e[2]=M-f*c,e[6]=x+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,x=c*h,M=c*d;e[0]=f+M*a,e[4]=x*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-x,e[6]=M+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,x=c*h,M=c*d;e[0]=f-M*a,e[4]=-o*d,e[8]=x+u*a,e[1]=u+x*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,x=a*h,M=a*d;e[0]=l*h,e[4]=x*c-u,e[8]=f*c+M,e[1]=l*d,e[5]=M*c+f,e[9]=u*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,x=a*l,M=a*c;e[0]=l*h,e[4]=M-f*d,e[8]=x*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+x,e[10]=f-M*d}else if(t.order==="XZY"){let f=o*l,u=o*c,x=a*l,M=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+M,e[5]=o*h,e[9]=u*d-x,e[2]=x*d-u,e[6]=a*h,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Af)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ei.crossVectors(n,an),ei.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ei.crossVectors(n,an)),ei.normalize(),hr.crossVectors(an,ei),s[0]=ei.x,s[4]=hr.x,s[8]=an.x,s[1]=ei.y,s[5]=hr.y,s[9]=an.y,s[2]=ei.z,s[6]=hr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],x=n[2],M=n[6],m=n[10],p=n[14],S=n[3],_=n[7],y=n[11],W=n[15],F=s[0],A=s[4],D=s[8],b=s[12],g=s[1],E=s[5],T=s[9],P=s[13],k=s[2],K=s[6],L=s[10],Z=s[14],tt=s[3],ct=s[7],ft=s[11],H=s[15];return r[0]=o*F+a*g+l*k+c*tt,r[4]=o*A+a*E+l*K+c*ct,r[8]=o*D+a*T+l*L+c*ft,r[12]=o*b+a*P+l*Z+c*H,r[1]=h*F+d*g+f*k+u*tt,r[5]=h*A+d*E+f*K+u*ct,r[9]=h*D+d*T+f*L+u*ft,r[13]=h*b+d*P+f*Z+u*H,r[2]=x*F+M*g+m*k+p*tt,r[6]=x*A+M*E+m*K+p*ct,r[10]=x*D+M*T+m*L+p*ft,r[14]=x*b+M*P+m*Z+p*H,r[3]=S*F+_*g+y*k+W*tt,r[7]=S*A+_*E+y*K+W*ct,r[11]=S*D+_*T+y*L+W*ft,r[15]=S*b+_*P+y*Z+W*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],x=t[3],M=t[7],m=t[11],p=t[15];return x*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*u-n*l*u)+M*(+e*l*u-e*c*f+r*o*f-s*o*u+s*c*h-r*l*h)+m*(+e*c*d-e*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],x=t[12],M=t[13],m=t[14],p=t[15],S=d*m*c-M*f*c+M*l*u-a*m*u-d*l*p+a*f*p,_=x*f*c-h*m*c-x*l*u+o*m*u+h*l*p-o*f*p,y=h*M*c-x*d*c+x*a*u-o*M*u-h*a*p+o*d*p,W=x*d*l-h*M*l-x*a*f+o*M*f+h*a*m-o*d*m,F=e*S+n*_+s*y+r*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/F;return t[0]=S*A,t[1]=(M*f*r-d*m*r-M*s*u+n*m*u+d*s*p-n*f*p)*A,t[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*u-n*l*u)*A,t[4]=_*A,t[5]=(h*m*r-x*f*r+x*s*u-e*m*u-h*s*p+e*f*p)*A,t[6]=(x*l*r-o*m*r-x*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*u+e*l*u)*A,t[8]=y*A,t[9]=(x*d*r-h*M*r-x*n*u+e*M*u+h*n*p-e*d*p)*A,t[10]=(o*M*r-x*a*r+x*n*c-e*M*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*u-e*a*u)*A,t[12]=W*A,t[13]=(h*M*s-x*d*s+x*n*f-e*M*f-h*n*m+e*d*m)*A,t[14]=(x*a*s-o*M*s-x*n*l+e*M*l+o*n*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,x=r*d,M=o*h,m=o*d,p=a*d,S=l*c,_=l*h,y=l*d,W=n.x,F=n.y,A=n.z;return s[0]=(1-(M+p))*W,s[1]=(u+y)*W,s[2]=(x-_)*W,s[3]=0,s[4]=(u-y)*F,s[5]=(1-(f+p))*F,s[6]=(m+S)*F,s[7]=0,s[8]=(x+_)*A,s[9]=(m-S)*A,s[10]=(1-(f+M))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ki.set(s[0],s[1],s[2]).length(),o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/o,d=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),u,x;if(a===kn)u=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Hr)u=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,u=(n+s)*h,x,M;if(a===kn)x=(o+r)*d,M=-2*d;else if(a===Hr)x=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ki=new z,xn=new ue,Tf=new z(0,0,0),Af=new z(1,1,1),ei=new z,hr=new z,an=new z,vc=new ue,Mc=new Pn,vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rf=0,bc=new z,Hi=new Pn,Nn=new ue,ur=new z,bs=new z,Cf=new z,If=new Pn,Sc=new z(1,0,0),Ec=new z(0,1,0),wc=new z(0,0,1),Tc={type:"added"},Pf={type:"removed"},Vi={type:"childadded",child:null},Wo={type:"childremoved",child:null},Te=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new vn,n=new Pn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new oe}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(bs,ur,this.up):Nn.lookAt(ur,bs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pf),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,If,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Te.DEFAULT_UP=new z(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new z,Fn=new z,Xo=new z,On=new z,Gi=new z,Wi=new z,Ac=new z,qo=new z,Yo=new z,$o=new z,Zo=new Ie,Jo=new Ie,Ko=new Ie,ri=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Fn.subVectors(n,e),Xo.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(Fn),l=_n.dot(Xo),c=Fn.dot(Fn),h=Fn.dot(Xo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-u-x,x,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zo.setScalar(0),Jo.setScalar(0),Ko.setScalar(0),Zo.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),Ko.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zo,r.x),o.addScaledVector(Jo,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Fn.subVectors(t,e),_n.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),_n.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gi.subVectors(s,n),Wi.subVectors(r,n),qo.subVectors(t,n);let l=Gi.dot(qo),c=Wi.dot(qo);if(l<=0&&c<=0)return e.copy(n);Yo.subVectors(t,s);let h=Gi.dot(Yo),d=Wi.dot(Yo);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gi,o);$o.subVectors(t,r);let u=Gi.dot($o),x=Wi.dot($o);if(x>=0&&u<=x)return e.copy(r);let M=u*c-l*x;if(M<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Wi,a);let m=h*x-u*d;if(m<=0&&d-h>=0&&u-x>=0)return Ac.subVectors(r,s),a=(d-h)/(d-h+(u-x)),e.copy(s).addScaledVector(Ac,a);let p=1/(m+M+f);return o=M*p,a=f*p,e.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},fr={h:0,s:0,l:0};function jo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Xl(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jo(o,r,t+1/3),this.g=jo(o,r,t),this.b=jo(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ce.fromWorkingColorSpace(Xe.copy(this),t),Math.round(He(Xe.r*255,0,255))*65536+Math.round(He(Xe.g*255,0,255))*256+Math.round(He(Xe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=ke){ce.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(fr);let n=Ds(ni.h,fr.h,e),s=Ds(ni.s,fr.s,e),r=Ds(ni.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Jt;Jt.NAMES=Dh;var Lf=0,Xn=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=In(),this.name="",this.blending=ns,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fn=class extends Xn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new z,dr=new Ct,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qa,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qa&&(t.usage=this.usage),t}};var Yr=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $r=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},Df=0,un=new ue,Qo=new Te,Xi=new z,ln=new Wn,Ss=new Wn,Be=new z,_e=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?$r:Yr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(ln.min,Ss.min),ln.expandByPoint(Be),Be.addVectors(ln.max,Ss.max),ln.expandByPoint(Be)):(ln.expandByPoint(Ss.min),ln.expandByPoint(Ss.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(t,c),Be.add(Xi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new z,l[D]=new z;let c=new z,h=new z,d=new z,f=new Ct,u=new Ct,x=new Ct,M=new z,m=new z;function p(D,b,g){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,g),f.fromBufferAttribute(r,D),u.fromBufferAttribute(r,b),x.fromBufferAttribute(r,g),h.sub(c),d.sub(c),u.sub(f),x.sub(f);let E=1/(u.x*x.y-x.x*u.y);isFinite(E)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(d,-u.y).multiplyScalar(E),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-x.x).multiplyScalar(E),a[D].add(M),a[b].add(M),a[g].add(M),l[D].add(m),l[b].add(m),l[g].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,b=S.length;D<b;++D){let g=S[D],E=g.start,T=g.count;for(let P=E,k=E+T;P<k;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let _=new z,y=new z,W=new z,F=new z;function A(D){W.fromBufferAttribute(s,D),F.copy(W);let b=a[D];_.copy(b),_.sub(W.multiplyScalar(W.dot(b))).normalize(),y.crossVectors(F,b);let E=y.dot(l[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,E)}for(let D=0,b=S.length;D<b;++D){let g=S[D],E=g.start,T=g.count;for(let P=E,k=E+T;P<k;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let f=0,u=t.count;f<u;f+=3){let x=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,x=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?u=l[M]*a.data.stride+a.offset:u=l[M]*h;for(let p=0;p<h;p++)f[x++]=c[u++]}return new Re(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rc=new ue,gi=new Xr,pr=new hi,Cc=new z,mr=new z,gr=new z,xr=new z,ta=new z,_r=new z,Ic=new z,yr=new z,we=class extends Te{constructor(t=new _e,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ta.fromBufferAttribute(d,t),o?_r.addScaledVector(ta,h):_r.addScaledVector(ta.sub(e),h))}e.add(_r)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(pr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(pr,Cc)===null||gi.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Rc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let m=f[x],p=o[m.materialIndex],S=Math.max(m.start,u.start),_=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=S,W=_;y<W;y+=3){let F=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);s=vr(this,p,t,n,c,h,d,F,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,u.start),M=Math.min(a.count,u.start+u.count);for(let m=x,p=M;m<p;m+=3){let S=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=vr(this,o,t,n,c,h,d,S,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=f.length;x<M;x++){let m=f[x],p=o[m.materialIndex],S=Math.max(m.start,u.start),_=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=S,W=_;y<W;y+=3){let F=y,A=y+1,D=y+2;s=vr(this,p,t,n,c,h,d,F,A,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,u.start),M=Math.min(l.count,u.start+u.count);for(let m=x,p=M;m<p;m+=3){let S=m,_=m+1,y=m+2;s=vr(this,o,t,n,c,h,d,S,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Uf(i,t,e,n,s,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yr);return c<e.near||c>e.far?null:{distance:c,point:yr.clone(),object:i}}function vr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,xr);let h=Uf(i,t,e,n,mr,gr,xr,Ic);if(h){let d=new z;ri.getBarycoord(Ic,mr,gr,xr,d),s&&(h.uv=ri.getInterpolatedAttribute(s,a,l,c,d,new Ct)),r&&(h.uv1=ri.getInterpolatedAttribute(r,a,l,c,d,new Ct)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};ri.getNormal(mr,gr,xr,f.normal),h.face=f,h.barycoord=d}return h}var ye=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function x(M,m,p,S,_,y,W,F,A,D,b){let g=y/A,E=W/D,T=y/2,P=W/2,k=F/2,K=A+1,L=D+1,Z=0,tt=0,ct=new z;for(let ft=0;ft<L;ft++){let H=ft*E-P;for(let Rt=0;Rt<K;Rt++){let Q=Rt*g-T;ct[M]=Q*S,ct[m]=H*_,ct[p]=k,c.push(ct.x,ct.y,ct.z),ct[M]=0,ct[m]=0,ct[p]=F>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(Rt/A),d.push(1-ft/D),Z+=1}}for(let ft=0;ft<D;ft++)for(let H=0;H<A;H++){let Rt=f+H+K*ft,Q=f+H+K*(ft+1),q=f+(H+1)+K*(ft+1),V=f+(H+1)+K*ft;l.push(Rt,Q,V),l.push(Q,q,V),tt+=6}a.addGroup(u,tt,b),u+=tt,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){let t={};for(let e=0;e<i.length;e++){let n=us(i[e]);for(let s in n)t[s]=n[s]}return t}function Nf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var ql={clone:us,merge:Ze},Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends Xn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Zr=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new z,Pc=new Ct,Lc=new Ct,Je=class extends Zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Lc),e.subVectors(Lc,Pc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qi=-90,Yi=1,il=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(qi,Yi,t,e);s.layers=this.layers,this.add(s);let r=new Je(qi,Yi,t,e);r.layers=this.layers,this.add(r);let o=new Je(qi,Yi,t,e);o.layers=this.layers,this.add(o);let a=new Je(qi,Yi,t,e);a.layers=this.layers,this.add(a);let l=new Je(qi,Yi,t,e);l.layers=this.layers,this.add(l);let c=new Je(qi,Yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Jr=class extends en{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sl=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ye(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:oi});r.uniforms.tEquirect.value=e;let o=new we(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=An),new il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ea=new z,zf=new z,Bf=new oe,Bn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ea.subVectors(n,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bf.getNormalMatrix(t),s=this.coplanarPoint(ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new hi,Mr=new z,Bs=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],x=s[9],M=s[10],m=s[11],p=s[12],S=s[13],_=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,m-u,y-p).normalize(),n[1].setComponents(l+r,f+c,m+u,y+p).normalize(),n[2].setComponents(l+o,f+h,m+x,y+S).normalize(),n[3].setComponents(l-o,f-h,m-x,y-S).normalize(),n[4].setComponents(l-a,f-d,m-M,y-_).normalize(),e===kn)n[5].setComponents(l+a,f+d,m+M,y+_).normalize();else if(e===Hr)n[5].setComponents(a,d,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,x)=>u.start-x.start);let f=0;for(let u=1;u<d.length;u++){let x=d[f],M=d[u];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,d[f]=M)}d.length=f+1;for(let u=0,x=d.length;u<x;u++){let M=d[u];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var nn=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],x=[],M=[],m=[];for(let p=0;p<h;p++){let S=p*f-o;for(let _=0;_<c;_++){let y=_*d-r;x.push(y,-S,0),M.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let _=S+c*p,y=S+c*(p+1),W=S+1+c*(p+1),F=S+1+c*p;u.push(_,y,F),u.push(y,W,F)}this.setIndex(u),this.setAttribute("position",new te(x,3)),this.setAttribute("normal",new te(M,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",_d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,um=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Hf,alphahash_pars_fragment:Vf,alphamap_fragment:Gf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:$f,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Kf,beginnormal_vertex:jf,bsdfs:Qf,iridescence_fragment:td,bumpmap_pars_fragment:ed,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:ld,color_vertex:cd,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:fd,displacementmap_pars_vertex:dd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:xd,colorspace_pars_fragment:_d,envmap_fragment:yd,envmap_common_pars_fragment:vd,envmap_pars_fragment:Md,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Dd,envmap_vertex:Sd,fog_vertex:Ed,fog_pars_vertex:wd,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Pd,lights_pars_begin:Ld,lights_toon_fragment:Ud,lights_toon_pars_fragment:Nd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:zd,lights_physical_pars_fragment:Bd,lights_fragment_begin:kd,lights_fragment_maps:Hd,lights_fragment_end:Vd,logdepthbuf_fragment:Gd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:Yd,map_pars_fragment:$d,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:jd,morphinstance_vertex:Qd,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:op,normal_pars_vertex:ap,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:fp,iridescence_pars_fragment:dp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:xp,dithering_fragment:_p,dithering_pars_fragment:yp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:Sp,shadowmap_vertex:Ep,shadowmask_pars_fragment:wp,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:Rp,skinnormal_vertex:Cp,specularmap_fragment:Ip,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Dp,transmission_fragment:Up,transmission_pars_fragment:Np,uv_pars_fragment:Fp,uv_pars_vertex:Op,uv_vertex:zp,worldpos_vertex:Bp,background_vert:kp,background_frag:Hp,backgroundCube_vert:Vp,backgroundCube_frag:Gp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distanceRGBA_vert:$p,distanceRGBA_frag:Zp,equirect_vert:Jp,equirect_frag:Kp,linedashed_vert:jp,linedashed_frag:Qp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:om,meshnormal_frag:am,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:fm,meshtoon_frag:dm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:xm,sprite_vert:_m,sprite_frag:ym},zt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Tn={basic:{uniforms:Ze([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ze([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ze([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ze([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ze([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ze([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ze([zt.points,zt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ze([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ze([zt.common,zt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ze([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ze([zt.sprite,zt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ze([zt.common,zt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ze([zt.lights,zt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Tn.physical={uniforms:Ze([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var br={r:0,b:0,g:0},_i=new vn,vm=new ue;function Mm(i,t,e,n,s,r,o){let a=new Jt(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function x(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function M(S){let _=!1,y=x(S);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,o):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,_){let y=x(_);y&&(y.isCubeTexture||y.mapping===So)?(h===void 0&&(h=new we(new ye(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:us(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,F,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(_.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(_i)),h.material.toneMapped=ce.getTransfer(y.colorSpace)!==xe,(d!==y||f!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,u=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new we(new nn(2,2),new je({name:"BackgroundMaterial",uniforms:us(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ce.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,_){S.getRGB(br,Uh(i)),n.buffers.color.setClear(br.r,br.g,br.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:M,addToRenderList:m}}function bm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(g,E,T,P,k){let K=!1,L=d(P,T,E);r!==L&&(r=L,c(r.object)),K=u(g,P,T,k),K&&x(g,P,T,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(g,E,T,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function d(g,E,T){let P=T.wireframe===!0,k=n[g.id];k===void 0&&(k={},n[g.id]=k);let K=k[E.id];K===void 0&&(K={},k[E.id]=K);let L=K[P];return L===void 0&&(L=f(l()),K[P]=L),L}function f(g){let E=[],T=[],P=[];for(let k=0;k<e;k++)E[k]=0,T[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:T,attributeDivisors:P,object:g,attributes:{},index:null}}function u(g,E,T,P){let k=r.attributes,K=E.attributes,L=0,Z=T.getAttributes();for(let tt in Z)if(Z[tt].location>=0){let ft=k[tt],H=K[tt];if(H===void 0&&(tt==="instanceMatrix"&&g.instanceMatrix&&(H=g.instanceMatrix),tt==="instanceColor"&&g.instanceColor&&(H=g.instanceColor)),ft===void 0||ft.attribute!==H||H&&ft.data!==H.data)return!0;L++}return r.attributesNum!==L||r.index!==P}function x(g,E,T,P){let k={},K=E.attributes,L=0,Z=T.getAttributes();for(let tt in Z)if(Z[tt].location>=0){let ft=K[tt];ft===void 0&&(tt==="instanceMatrix"&&g.instanceMatrix&&(ft=g.instanceMatrix),tt==="instanceColor"&&g.instanceColor&&(ft=g.instanceColor));let H={};H.attribute=ft,ft&&ft.data&&(H.data=ft.data),k[tt]=H,L++}r.attributes=k,r.attributesNum=L,r.index=P}function M(){let g=r.newAttributes;for(let E=0,T=g.length;E<T;E++)g[E]=0}function m(g){p(g,0)}function p(g,E){let T=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;T[g]=1,P[g]===0&&(i.enableVertexAttribArray(g),P[g]=1),k[g]!==E&&(i.vertexAttribDivisor(g,E),k[g]=E)}function S(){let g=r.newAttributes,E=r.enabledAttributes;for(let T=0,P=E.length;T<P;T++)E[T]!==g[T]&&(i.disableVertexAttribArray(T),E[T]=0)}function _(g,E,T,P,k,K,L){L===!0?i.vertexAttribIPointer(g,E,T,k,K):i.vertexAttribPointer(g,E,T,P,k,K)}function y(g,E,T,P){M();let k=P.attributes,K=T.getAttributes(),L=E.defaultAttributeValues;for(let Z in K){let tt=K[Z];if(tt.location>=0){let ct=k[Z];if(ct===void 0&&(Z==="instanceMatrix"&&g.instanceMatrix&&(ct=g.instanceMatrix),Z==="instanceColor"&&g.instanceColor&&(ct=g.instanceColor)),ct!==void 0){let ft=ct.normalized,H=ct.itemSize,Rt=t.get(ct);if(Rt===void 0)continue;let Q=Rt.buffer,q=Rt.type,V=Rt.bytesPerElement,G=q===i.INT||q===i.UNSIGNED_INT||ct.gpuType===zl;if(ct.isInterleavedBufferAttribute){let Y=ct.data,ot=Y.stride,yt=ct.offset;if(Y.isInstancedInterleavedBuffer){for(let Tt=0;Tt<tt.locationSize;Tt++)p(tt.location+Tt,Y.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Tt=0;Tt<tt.locationSize;Tt++)m(tt.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Tt=0;Tt<tt.locationSize;Tt++)_(tt.location+Tt,H/tt.locationSize,q,ft,ot*V,(yt+H/tt.locationSize*Tt)*V,G)}else{if(ct.isInstancedBufferAttribute){for(let Y=0;Y<tt.locationSize;Y++)p(tt.location+Y,ct.meshPerAttribute);g.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Y=0;Y<tt.locationSize;Y++)m(tt.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Y=0;Y<tt.locationSize;Y++)_(tt.location+Y,H/tt.locationSize,q,ft,H*V,H/tt.locationSize*Y*V,G)}}else if(L!==void 0){let ft=L[Z];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(tt.location,ft);break;case 3:i.vertexAttrib3fv(tt.location,ft);break;case 4:i.vertexAttrib4fv(tt.location,ft);break;default:i.vertexAttrib1fv(tt.location,ft)}}}}S()}function W(){D();for(let g in n){let E=n[g];for(let T in E){let P=E[T];for(let k in P)h(P[k].object),delete P[k];delete E[T]}delete n[g]}}function F(g){if(n[g.id]===void 0)return;let E=n[g.id];for(let T in E){let P=E[T];for(let k in P)h(P[k].object),delete P[k];delete E[T]}delete n[g.id]}function A(g){for(let E in n){let T=n[E];if(T[g.id]===void 0)continue;let P=T[g.id];for(let k in P)h(P[k].object),delete P[k];delete T[g.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function Sm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let x=0;x<d;x++)u+=h[x];e.update(u,n,1)}function l(c,h,d,f){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let x=0;for(let M=0;M<d;M++)x+=h[M]*f[M];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let D=A===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Rn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=x>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:W,maxSamples:F}}function wm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Bn,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let x=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,_=S*4,y=p.clippingState||null;l.value=y,y=h(x,f,_,u);for(let W=0;W!==_;++W)y[W]=e[W];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,x){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,x!==!0||m===null){let p=u+M*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=u;_!==M;++_,y+=4)o.copy(d[_]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Tm(i){let t=new WeakMap;function e(o,a){return a===Sa?o.mapping=as:a===Ea&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sa||a===Ea)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Kr=class extends Zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,Dc=[.125,.215,.35,.446,.526,.582],bi=20,na=new Kr,Uc=new Jt,ia=null,sa=0,ra=0,oa=!1,vi=(1+Math.sqrt(5))/2,$i=1/vi,Nc=[new z(-vi,$i,0),new z(vi,$i,0),new z(-$i,0,vi),new z($i,0,vi),new z(0,vi,-$i),new z(0,vi,$i),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=oa,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ks,format:cn,colorSpace:ms,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Am(r)),this._blurMaterial=Rm(r,t,e)}return s}_compileMaterial(t){let e=new we(this._lodPlanes[0],t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,s){let a=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Uc),h.toneMapping=Cn,h.autoClear=!1;let u=new fn({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),x=new we(new ye,u),M=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,M=!0):(u.color.copy(Uc),M=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Sr(s,S*_,p>2?_:0,_,_),h.setRenderTarget(s),M&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===as||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(s-r-1)%Nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new we(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*bi-1),M=r/x,m=isFinite(r)?1+Math.floor(h*M):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let p=[],S=0;for(let A=0;A<bi;++A){let D=A/M,b=Math.exp(-D*D/2);p.push(b),A===0?S+=b:A<m&&(S+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;let y=this._sizeLods[s],W=3*y*(s>_-ts?s-_+ts:0),F=4*(this._cubeSize-y);Sr(e,W,F,3*y,2*y),l.setRenderTarget(e),l.render(d,na)}};function Am(i){let t=[],e=[],n=[],s=i,r=i-ts+1+Dc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ts?l=Dc[o-i+ts-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,x=6,M=3,m=2,p=1,S=new Float32Array(M*x*u),_=new Float32Array(m*x*u),y=new Float32Array(p*x*u);for(let F=0;F<u;F++){let A=F%3*2/3-1,D=F>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];S.set(b,M*x*F),_.set(f,m*x*F);let g=[F,F,F,F,F,F];y.set(g,p*x*F)}let W=new _e;W.setAttribute("position",new Re(S,M)),W.setAttribute("uv",new Re(_,m)),W.setAttribute("faceIndex",new Re(y,p)),t.push(W),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(i,t,e){let n=new Gn(i,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rm(i,t,e){let n=new Float32Array(bi),s=new z(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Oc(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function zc(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Sa||l===Ea,h=l===as||l===ls;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new jr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new jr(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Im(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pm(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let M=f.morphAttributes[x];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let x in f)t.update(f[x],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let x in u){let M=u[x];for(let m=0,p=M.length;m<p;m++)t.update(M[m],i.ARRAY_BUFFER)}}function c(d){let f=[],u=d.index,x=d.attributes.position,M=0;if(u!==null){let S=u.array;M=u.version;for(let _=0,y=S.length;_<y;_+=3){let W=S[_+0],F=S[_+1],A=S[_+2];f.push(W,F,F,A,A,W)}}else if(x!==void 0){let S=x.array;M=x.version;for(let _=0,y=S.length/3-1;_<y;_+=3){let W=_+0,F=_+1,A=_+2;f.push(W,F,F,A,A,W)}}else return;let m=new(Lh(f)?$r:Yr)(f,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Lm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,x){x!==0&&(i.drawElementsInstanced(n,u,r,f*o,x),e.update(u,n,x))}function h(f,u,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,x);let m=0;for(let p=0;p<x;p++)m+=u[p];e.update(m,n,1)}function d(f,u,x,M){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,u[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,M,0,x);let p=0;for(let S=0;S<x;S++)p+=u[S]*M[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Dm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Um(i,t,e){let n=new WeakMap,s=new Ie;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;u===!0&&(_=1),x===!0&&(_=2),M===!0&&(_=3);let y=a.attributes.position.count*_,W=1;y>t.maxTextureSize&&(W=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let F=new Float32Array(y*W*4*d),A=new Wr(F,y,W,d);A.type=Rn,A.needsUpdate=!0;let D=_*4;for(let g=0;g<d;g++){let E=m[g],T=p[g],P=S[g],k=y*W*4*g;for(let K=0;K<E.count;K++){let L=K*D;u===!0&&(s.fromBufferAttribute(E,K),F[k+L+0]=s.x,F[k+L+1]=s.y,F[k+L+2]=s.z,F[k+L+3]=0),x===!0&&(s.fromBufferAttribute(T,K),F[k+L+4]=s.x,F[k+L+5]=s.y,F[k+L+6]=s.z,F[k+L+7]=0),M===!0&&(s.fromBufferAttribute(P,K),F[k+L+8]=s.x,F[k+L+9]=s.y,F[k+L+10]=s.z,F[k+L+11]=P.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new Ct(y,W)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let M=0;M<c.length;M++)u+=c[M];let x=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Nm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Qr=class extends en{constructor(t,e,n,s,r,o,a,l,c,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ti),n===void 0&&h===hs&&(n=cs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fh=new en,Bc=new Qr(1,1),Oh=new Wr,zh=new nl,Bh=new Jr,kc=[],Hc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wo(i,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function km(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),Oe(e,n)}}function Hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),Oe(e,n)}}function Vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Oe(e,n)}}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=Ih,r=Bc):r=Fh,e.setTexture2D(t||r,s)}function jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zh,s)}function Qm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bh,s)}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function e0(i){switch(i){case 5126:return Fm;case 35664:return Om;case 35665:return zm;case 35666:return Bm;case 35674:return km;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Gm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return $m;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return t0}}function n0(i,t){i.uniform1fv(this.addr,t)}function i0(i,t){let e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function s0(i,t){let e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function r0(i,t){let e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function o0(i,t){let e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function a0(i,t){let e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function l0(i,t){let e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function c0(i,t){i.uniform1iv(this.addr,t)}function h0(i,t){i.uniform2iv(this.addr,t)}function u0(i,t){i.uniform3iv(this.addr,t)}function f0(i,t){i.uniform4iv(this.addr,t)}function d0(i,t){i.uniform1uiv(this.addr,t)}function p0(i,t){i.uniform2uiv(this.addr,t)}function m0(i,t){i.uniform3uiv(this.addr,t)}function g0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function _0(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zh,r[o])}function y0(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bh,r[o])}function v0(i,t,e){let n=this.cache,s=t.length,r=wo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function M0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return f0;case 5125:return d0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return v0}}var rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=e0(e.type)}},ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M0(e.type)}},al=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},aa=/(\w+)(\])?(\[|\.)?/g;function Xc(i,t){i.seq.push(t),i.map[t.id]=t}function b0(i,t,e){let n=i.name,s=n.length;for(aa.lastIndex=0;;){let r=aa.exec(n),o=aa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xc(e,c===void 0?new rl(a,i,t):new ol(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new al(a),Xc(e,d)),e=d}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);b0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function qc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var S0=37297,E0=0;function w0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Yc=new oe;function T0(i){ce._getMatrix(Yc,ce.workingColorSpace,i);let t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Eo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $c(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+w0(i.getShaderSource(t),o)}else return s}function A0(i,t){let e=T0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function R0(i,t){let e;switch(t){case zu:e="Linear";break;case Bu:e="Reinhard";break;case ku:e="Cineon";break;case Hu:e="ACESFilmic";break;case Gu:e="AgX";break;case Wu:e="Neutral";break;case Vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Er=new z;function C0(){ce.getLuminanceCoefficients(Er);let i=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function P0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ps(i){return i!==""}function Zc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(i){return i.replace(D0,N0)}var U0=new Map;function N0(i,t){let e=ee[t];if(e===void 0){let n=U0.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}var F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(F0,O0)}function O0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function B0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case So:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function H0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case Fu:t="ENVMAP_BLENDING_MIX";break;case Ou:t="ENVMAP_BLENDING_ADD";break}return t}function V0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function G0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=z0(e),c=B0(e),h=k0(e),d=H0(e),f=V0(e),u=I0(e),x=P0(r),M=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Cn?R0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,A0("linearToOutputTexel",e.outputColorSpace),C0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=ll(o),o=Zc(o,e),o=Jc(o,e),a=ll(a),a=Zc(a,e),a=Jc(a,e),o=Kc(o),a=Kc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=S+m+o,y=S+p+a,W=qc(s,s.VERTEX_SHADER,_),F=qc(s,s.FRAGMENT_SHADER,y);s.attachShader(M,W),s.attachShader(M,F),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(E){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(M).trim(),P=s.getShaderInfoLog(W).trim(),k=s.getShaderInfoLog(F).trim(),K=!0,L=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,W,F);else{let Z=$c(s,W,"vertex"),tt=$c(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+T+`
`+Z+`
`+tt)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||k==="")&&(L=!1);L&&(E.diagnostics={runnable:K,programLog:T,vertexShader:{log:P,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(W),s.deleteShader(F),D=new rs(s,M),b=L0(s,M)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(M,S0)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=W,this.fragmentShader=F,this}var W0=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hl(t),e.set(t,n)),n}},hl=class{constructor(t){this.id=W0++,this.code=t,this.usedTimes=0}};function X0(i,t,e,n,s,r,o){let a=new qr,l=new cl,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,u=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,g,E,T,P){let k=T.fog,K=P.geometry,L=b.isMeshStandardMaterial?T.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||L),tt=Z&&Z.mapping===So?Z.image.height:null,ct=x[b.type];b.precision!==null&&(u=s.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,H=ft!==void 0?ft.length:0,Rt=0;K.morphAttributes.position!==void 0&&(Rt=1),K.morphAttributes.normal!==void 0&&(Rt=2),K.morphAttributes.color!==void 0&&(Rt=3);let Q,q,V,G;if(ct){let ut=Tn[ct];Q=ut.vertexShader,q=ut.fragmentShader}else Q=b.vertexShader,q=b.fragmentShader,l.update(b),V=l.getVertexShaderID(b),G=l.getFragmentShaderID(b);let Y=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),yt=P.isInstancedMesh===!0,Tt=P.isBatchedMesh===!0,wt=!!b.map,st=!!b.matcap,pt=!!Z,B=!!b.aoMap,Et=!!b.lightMap,Mt=!!b.bumpMap,et=!!b.normalMap,At=!!b.displacementMap,Ht=!!b.emissiveMap,Nt=!!b.metalnessMap,O=!!b.roughnessMap,C=b.anisotropy>0,dt=b.clearcoat>0,nt=b.dispersion>0,it=b.iridescence>0,rt=b.sheen>0,vt=b.transmission>0,mt=C&&!!b.anisotropyMap,It=dt&&!!b.clearcoatMap,Pt=dt&&!!b.clearcoatNormalMap,bt=dt&&!!b.clearcoatRoughnessMap,Dt=it&&!!b.iridescenceMap,Wt=it&&!!b.iridescenceThicknessMap,Xt=rt&&!!b.sheenColorMap,Lt=rt&&!!b.sheenRoughnessMap,Qt=!!b.specularMap,qt=!!b.specularColorMap,w=!!b.specularIntensityMap,R=vt&&!!b.transmissionMap,J=vt&&!!b.thicknessMap,v=!!b.gradientMap,I=!!b.alphaMap,N=b.alphaTest>0,$=!!b.alphaHash,at=!!b.extensions,X=Cn;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(X=i.toneMapping);let j={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:q,defines:b.defines,customVertexShaderID:V,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&P._colorsTexture!==null,instancing:yt,instancingColor:yt&&P.instanceColor!==null,instancingMorph:yt&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ms,alphaToCoverage:!!b.alphaToCoverage,map:wt,matcap:st,envMap:pt,envMapMode:pt&&Z.mapping,envMapCubeUVHeight:tt,aoMap:B,lightMap:Et,bumpMap:Mt,normalMap:et,displacementMap:f&&At,emissiveMap:Ht,normalMapObjectSpace:et&&b.normalMapType===$u,normalMapTangentSpace:et&&b.normalMapType===Ch,metalnessMap:Nt,roughnessMap:O,anisotropy:C,anisotropyMap:mt,clearcoat:dt,clearcoatMap:It,clearcoatNormalMap:Pt,clearcoatRoughnessMap:bt,dispersion:nt,iridescence:it,iridescenceMap:Dt,iridescenceThicknessMap:Wt,sheen:rt,sheenColorMap:Xt,sheenRoughnessMap:Lt,specularMap:Qt,specularColorMap:qt,specularIntensityMap:w,transmission:vt,transmissionMap:R,thicknessMap:J,gradientMap:v,opaque:b.transparent===!1&&b.blending===ns&&b.alphaToCoverage===!1,alphaMap:I,alphaTest:N,alphaHash:$,combine:b.combine,mapUv:wt&&M(b.map.channel),aoMapUv:B&&M(b.aoMap.channel),lightMapUv:Et&&M(b.lightMap.channel),bumpMapUv:Mt&&M(b.bumpMap.channel),normalMapUv:et&&M(b.normalMap.channel),displacementMapUv:At&&M(b.displacementMap.channel),emissiveMapUv:Ht&&M(b.emissiveMap.channel),metalnessMapUv:Nt&&M(b.metalnessMap.channel),roughnessMapUv:O&&M(b.roughnessMap.channel),anisotropyMapUv:mt&&M(b.anisotropyMap.channel),clearcoatMapUv:It&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&M(b.sheenRoughnessMap.channel),specularMapUv:Qt&&M(b.specularMap.channel),specularColorMapUv:qt&&M(b.specularColorMap.channel),specularIntensityMapUv:w&&M(b.specularIntensityMap.channel),transmissionMapUv:R&&M(b.transmissionMap.channel),thicknessMapUv:J&&M(b.thicknessMap.channel),alphaMapUv:I&&M(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(et||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!K.attributes.uv&&(wt||I),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ot,skinning:P.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Rt,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:X,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&ce.getTransfer(b.map.colorSpace)===xe,decodeVideoTextureEmissive:Ht&&b.emissiveMap.isVideoTexture===!0&&ce.getTransfer(b.emissiveMap.colorSpace)===xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pe,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return j.vertexUv1s=c.has(1),j.vertexUv2s=c.has(2),j.vertexUv3s=c.has(3),c.clear(),j}function p(b){let g=[];if(b.shaderID?g.push(b.shaderID):(g.push(b.customVertexShaderID),g.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)g.push(E),g.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(S(g,b),_(g,b),g.push(i.outputColorSpace)),g.push(b.customProgramCacheKey),g.join()}function S(b,g){b.push(g.precision),b.push(g.outputColorSpace),b.push(g.envMapMode),b.push(g.envMapCubeUVHeight),b.push(g.mapUv),b.push(g.alphaMapUv),b.push(g.lightMapUv),b.push(g.aoMapUv),b.push(g.bumpMapUv),b.push(g.normalMapUv),b.push(g.displacementMapUv),b.push(g.emissiveMapUv),b.push(g.metalnessMapUv),b.push(g.roughnessMapUv),b.push(g.anisotropyMapUv),b.push(g.clearcoatMapUv),b.push(g.clearcoatNormalMapUv),b.push(g.clearcoatRoughnessMapUv),b.push(g.iridescenceMapUv),b.push(g.iridescenceThicknessMapUv),b.push(g.sheenColorMapUv),b.push(g.sheenRoughnessMapUv),b.push(g.specularMapUv),b.push(g.specularColorMapUv),b.push(g.specularIntensityMapUv),b.push(g.transmissionMapUv),b.push(g.thicknessMapUv),b.push(g.combine),b.push(g.fogExp2),b.push(g.sizeAttenuation),b.push(g.morphTargetsCount),b.push(g.morphAttributeCount),b.push(g.numDirLights),b.push(g.numPointLights),b.push(g.numSpotLights),b.push(g.numSpotLightMaps),b.push(g.numHemiLights),b.push(g.numRectAreaLights),b.push(g.numDirLightShadows),b.push(g.numPointLightShadows),b.push(g.numSpotLightShadows),b.push(g.numSpotLightShadowsWithMaps),b.push(g.numLightProbes),b.push(g.shadowMapType),b.push(g.toneMapping),b.push(g.numClippingPlanes),b.push(g.numClipIntersection),b.push(g.depthPacking)}function _(b,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reverseDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let g=x[b.type],E;if(g){let T=Tn[g];E=ql.clone(T.uniforms)}else E=b.uniforms;return E}function W(b,g){let E;for(let T=0,P=h.length;T<P;T++){let k=h[T];if(k.cacheKey===g){E=k,++E.usedTimes;break}}return E===void 0&&(E=new G0(i,g,b,r),h.push(E)),E}function F(b){if(--b.usedTimes===0){let g=h.indexOf(b);h[g]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:W,releaseProgram:F,releaseShaderCache:A,programs:h,dispose:D}}function q0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Y0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function th(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,u,x,M,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:x,renderOrder:d.renderOrder,z:M,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=M,p.group=m),t++,p}function a(d,f,u,x,M,m){let p=o(d,f,u,x,M,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(d,f,u,x,M,m){let p=o(d,f,u,x,M,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||Y0),n.length>1&&n.sort(f||Qc),s.length>1&&s.sort(f||Qc)}function h(){for(let d=t,f=i.length;d<f;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function $0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new th,i.set(n,[o])):s>=r.length?(o=new th,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Jt};break;case"SpotLight":e={position:new z,direction:new z,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function J0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var K0=0;function j0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q0(i){let t=new Z0,e=J0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new ue,o=new ue;function a(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,x=0,M=0,m=0,p=0,S=0,_=0,y=0,W=0,F=0,A=0;c.sort(j0);for(let b=0,g=c.length;b<g;b++){let E=c[b],T=E.color,P=E.intensity,k=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=T.r*P,d+=T.g*P,f+=T.b*P;else if(E.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(E.sh.coefficients[L],P);A++}else if(E.isDirectionalLight){let L=t.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Z=E.shadow,tt=e.get(E);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,n.directionalShadow[u]=tt,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=E.shadow.matrix,S++}n.directional[u]=L,u++}else if(E.isSpotLight){let L=t.get(E);L.position.setFromMatrixPosition(E.matrixWorld),L.color.copy(T).multiplyScalar(P),L.distance=k,L.coneCos=Math.cos(E.angle),L.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),L.decay=E.decay,n.spot[M]=L;let Z=E.shadow;if(E.map&&(n.spotLightMap[W]=E.map,W++,Z.updateMatrices(E),E.castShadow&&F++),n.spotLightMatrix[M]=Z.matrix,E.castShadow){let tt=e.get(E);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=K,y++}M++}else if(E.isRectAreaLight){let L=t.get(E);L.color.copy(T).multiplyScalar(P),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=L,m++}else if(E.isPointLight){let L=t.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),L.distance=E.distance,L.decay=E.decay,E.castShadow){let Z=E.shadow,tt=e.get(E);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,tt.shadowCameraNear=Z.camera.near,tt.shadowCameraFar=Z.camera.far,n.pointShadow[x]=tt,n.pointShadowMap[x]=K,n.pointShadowMatrix[x]=E.shadow.matrix,_++}n.point[x]=L,x++}else if(E.isHemisphereLight){let L=t.get(E);L.skyColor.copy(E.color).multiplyScalar(P),L.groundColor.copy(E.groundColor).multiplyScalar(P),n.hemi[p]=L,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==u||D.pointLength!==x||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==W||D.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=M,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+W-F,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=A,D.directionalLength=u,D.pointLength=x,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=W,D.numLightProbes=A,n.version=K0++)}function l(c,h){let d=0,f=0,u=0,x=0,M=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isRectAreaLight){let y=n.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let y=n.hemi[M];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function eh(i){let t=new Q0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new eh(i),t.set(s,[a])):r>=o.length?(a=new eh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ul=class extends Xn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends Xn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(i,t,e){let n=new Bs,s=new Ct,r=new Ct,o=new Ie,a=new ul({depthPacking:Yu}),l=new fl,c={},h=e.maxTextureSize,d={[li]:Ve,[Ve]:li,[Pe]:Pe},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let x=new _e;x.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new we(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(F,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;let b=i.getRenderTarget(),g=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),T=i.state;T.setBlending(oi),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let P=p!==zn&&this.type===zn,k=p===zn&&this.type!==zn;for(let K=0,L=F.length;K<L;K++){let Z=F[K],tt=Z.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let ct=tt.getFrameExtents();if(s.multiply(ct),r.copy(tt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,tt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,tt.mapSize.y=r.y)),tt.map===null||P===!0||k===!0){let H=this.type!==zn?{minFilter:Ke,magFilter:Ke}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Gn(s.x,s.y,H),tt.map.texture.name=Z.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let ft=tt.getViewportCount();for(let H=0;H<ft;H++){let Rt=tt.getViewport(H);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),T.viewport(o),tt.updateMatrices(Z,H),n=tt.getFrustum(),y(A,D,tt.camera,Z,this.type)}tt.isPointLightShadow!==!0&&this.type===zn&&S(tt,D),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,g,E)};function S(F,A){let D=t.update(M);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,u.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Gn(s.x,s.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,M,null),u.uniforms.shadow_pass.value=F.mapPass.texture,u.uniforms.resolution.value=F.mapSize,u.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(A,null,D,u,M,null)}function _(F,A,D,b){let g=null,E=D.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(E!==void 0)g=E;else if(g=D.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let T=g.uuid,P=A.uuid,k=c[T];k===void 0&&(k={},c[T]=k);let K=k[P];K===void 0&&(K=g.clone(),k[P]=K,A.addEventListener("dispose",W)),g=K}if(g.visible=A.visible,g.wireframe=A.wireframe,b===zn?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:d[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,D.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let T=i.properties.get(g);T.light=D}return g}function y(F,A,D,b,g){if(F.visible===!1)return;if(F.layers.test(A.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&g===zn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,F.matrixWorld);let P=t.update(F),k=F.material;if(Array.isArray(k)){let K=P.groups;for(let L=0,Z=K.length;L<Z;L++){let tt=K[L],ct=k[tt.materialIndex];if(ct&&ct.visible){let ft=_(F,ct,b,g);F.onBeforeShadow(i,F,A,D,P,ft,tt),i.renderBufferDirect(D,null,P,ft,F,tt),F.onAfterShadow(i,F,A,D,P,ft,tt)}}}else if(k.visible){let K=_(F,k,b,g);F.onBeforeShadow(i,F,A,D,P,K,null),i.renderBufferDirect(D,null,P,K,F,null),F.onAfterShadow(i,F,A,D,P,K,null)}}let T=F.children;for(let P=0,k=T.length;P<k;P++)y(T[P],A,D,b,g)}function W(F){F.target.removeEventListener("dispose",W);for(let D in c){let b=c[D],g=F.target.uuid;g in b&&(b[g].dispose(),delete b[g])}}}var sg={[ga]:xa,[_a]:Ma,[ya]:ba,[os]:va,[xa]:ga,[Ma]:_a,[ba]:ya,[va]:os};function rg(i,t){function e(){let R=!1,J=new Ie,v=null,I=new Ie(0,0,0,0);return{setMask:function(N){v!==N&&!R&&(i.colorMask(N,N,N,N),v=N)},setLocked:function(N){R=N},setClear:function(N,$,at,X,j){j===!0&&(N*=X,$*=X,at*=X),J.set(N,$,at,X),I.equals(J)===!1&&(i.clearColor(N,$,at,X),I.copy(J))},reset:function(){R=!1,v=null,I.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,v=null,I=null,N=null;return{setReversed:function($){if(J!==$){let at=t.get("EXT_clip_control");J?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);let X=N;N=null,this.setClear(X)}J=$},getReversed:function(){return J},setTest:function($){$?Y(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function($){v!==$&&!R&&(i.depthMask($),v=$)},setFunc:function($){if(J&&($=sg[$]),I!==$){switch($){case ga:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}I=$}},setLocked:function($){R=$},setClear:function($){N!==$&&(J&&($=1-$),i.clearDepth($),N=$)},reset:function(){R=!1,v=null,I=null,N=null,J=!1}}}function s(){let R=!1,J=null,v=null,I=null,N=null,$=null,at=null,X=null,j=null;return{setTest:function(ut){R||(ut?Y(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(ut){J!==ut&&!R&&(i.stencilMask(ut),J=ut)},setFunc:function(ut,St,Ot){(v!==ut||I!==St||N!==Ot)&&(i.stencilFunc(ut,St,Ot),v=ut,I=St,N=Ot)},setOp:function(ut,St,Ot){($!==ut||at!==St||X!==Ot)&&(i.stencilOp(ut,St,Ot),$=ut,at=St,X=Ot)},setLocked:function(ut){R=ut},setClear:function(ut){j!==ut&&(i.clearStencil(ut),j=ut)},reset:function(){R=!1,J=null,v=null,I=null,N=null,$=null,at=null,X=null,j=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,u=[],x=null,M=!1,m=null,p=null,S=null,_=null,y=null,W=null,F=null,A=new Jt(0,0,0),D=0,b=!1,g=null,E=null,T=null,P=null,k=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,Z=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(tt)[1]),L=Z>=1):tt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),L=Z>=2);let ct=null,ft={},H=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Q=new Ie().fromArray(H),q=new Ie().fromArray(Rt);function V(R,J,v,I){let N=new Uint8Array(4),$=i.createTexture();i.bindTexture(R,$),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<v;at++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,I,0,i.RGBA,i.UNSIGNED_BYTE,N):i.texImage2D(J+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,N);return $}let G={};G[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(os),Mt(!1),et(ic),Y(i.CULL_FACE),B(oi);function Y(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function ot(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function yt(R,J){return d[R]!==J?(i.bindFramebuffer(R,J),d[R]=J,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function Tt(R,J){let v=u,I=!1;if(R){v=f.get(J),v===void 0&&(v=[],f.set(J,v));let N=R.textures;if(v.length!==N.length||v[0]!==i.COLOR_ATTACHMENT0){for(let $=0,at=N.length;$<at;$++)v[$]=i.COLOR_ATTACHMENT0+$;v.length=N.length,I=!0}}else v[0]!==i.BACK&&(v[0]=i.BACK,I=!0);I&&i.drawBuffers(v)}function wt(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let st={[Mi]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};st[Mu]=i.MIN,st[bu]=i.MAX;let pt={[Su]:i.ZERO,[Eu]:i.ONE,[wu]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function B(R,J,v,I,N,$,at,X,j,ut){if(R===oi){M===!0&&(ot(i.BLEND),M=!1);return}if(M===!1&&(Y(i.BLEND),M=!0),R!==_u){if(R!==m||ut!==b){if((p!==Mi||y!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,y=Mi),ut)switch(R){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,_=null,W=null,F=null,A.set(0,0,0),D=0,m=R,b=ut}return}N=N||J,$=$||v,at=at||I,(J!==p||N!==y)&&(i.blendEquationSeparate(st[J],st[N]),p=J,y=N),(v!==S||I!==_||$!==W||at!==F)&&(i.blendFuncSeparate(pt[v],pt[I],pt[$],pt[at]),S=v,_=I,W=$,F=at),(X.equals(A)===!1||j!==D)&&(i.blendColor(X.r,X.g,X.b,j),A.copy(X),D=j),m=R,b=!1}function Et(R,J){R.side===Pe?ot(i.CULL_FACE):Y(i.CULL_FACE);let v=R.side===Ve;J&&(v=!v),Mt(v),R.blending===ns&&R.transparent===!1?B(oi):B(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let I=R.stencilWrite;a.setTest(I),I&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ht(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(R){g!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),g=R)}function et(R){R!==gu?(Y(i.CULL_FACE),R!==E&&(R===ic?i.cullFace(i.BACK):R===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),E=R}function At(R){R!==T&&(L&&i.lineWidth(R),T=R)}function Ht(R,J,v){R?(Y(i.POLYGON_OFFSET_FILL),(P!==J||k!==v)&&(i.polygonOffset(J,v),P=J,k=v)):ot(i.POLYGON_OFFSET_FILL)}function Nt(R){R?Y(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function O(R){R===void 0&&(R=i.TEXTURE0+K-1),ct!==R&&(i.activeTexture(R),ct=R)}function C(R,J,v){v===void 0&&(ct===null?v=i.TEXTURE0+K-1:v=ct);let I=ft[v];I===void 0&&(I={type:void 0,texture:void 0},ft[v]=I),(I.type!==R||I.texture!==J)&&(ct!==v&&(i.activeTexture(v),ct=v),i.bindTexture(R,J||G[R]),I.type=R,I.texture=J)}function dt(){let R=ft[ct];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function It(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xt(R){Q.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function Lt(R){q.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),q.copy(R))}function Qt(R,J){let v=c.get(J);v===void 0&&(v=new WeakMap,c.set(J,v));let I=v.get(R);I===void 0&&(I=i.getUniformBlockIndex(J,R.name),v.set(R,I))}function qt(R,J){let I=c.get(J).get(R);l.get(J)!==I&&(i.uniformBlockBinding(J,I,R.__bindingPointIndex),l.set(J,I))}function w(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,ft={},d={},f=new WeakMap,u=[],x=null,M=!1,m=null,p=null,S=null,_=null,y=null,W=null,F=null,A=new Jt(0,0,0),D=0,b=!1,g=null,E=null,T=null,P=null,k=null,Q.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ot,bindFramebuffer:yt,drawBuffers:Tt,useProgram:wt,setBlending:B,setMaterial:Et,setFlipSided:Mt,setCullFace:et,setLineWidth:At,setPolygonOffset:Ht,setScissorTest:Nt,activeTexture:O,bindTexture:C,unbindTexture:dt,compressedTexImage2D:nt,compressedTexImage3D:it,texImage2D:Dt,texImage3D:Wt,updateUBOMapping:Qt,uniformBlockBinding:qt,texStorage2D:Pt,texStorage3D:bt,texSubImage2D:rt,texSubImage3D:vt,compressedTexSubImage2D:mt,compressedTexSubImage3D:It,scissor:Xt,viewport:Lt,reset:w}}function nh(i,t,e,n){let s=og(n);switch(e){case Sh:return i*t;case wh:return i*t;case Th:return i*t*2;case Hl:return i*t/s.components*s.byteLength;case Vl:return i*t/s.components*s.byteLength;case Ah:return i*t*2/s.components*s.byteLength;case Gl:return i*t*2/s.components*s.byteLength;case Eh:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Wl:return i*t*4/s.components*s.byteLength;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Or:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ca:return Math.max(i,16)*Math.max(t,8)/4;case Ta:case Ra:return Math.max(i,8)*Math.max(t,8)/2;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Br:case Ya:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rh:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ja:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(i){switch(i){case Vn:case vh:return{byteLength:1,components:1};case Os:case Mh:case Ks:return{byteLength:2,components:1};case Bl:case kl:return{byteLength:2,components:4};case Ti:case zl:case Rn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ag(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,C){return u?new OffscreenCanvas(O,C):Vr("canvas")}function M(O,C,dt){let nt=1,it=Nt(O);if((it.width>dt||it.height>dt)&&(nt=dt/Math.max(it.width,it.height)),nt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let rt=Math.floor(nt*it.width),vt=Math.floor(nt*it.height);d===void 0&&(d=x(rt,vt));let mt=C?x(rt,vt):d;return mt.width=rt,mt.height=vt,mt.getContext("2d").drawImage(O,0,0,rt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+rt+"x"+vt+")."),mt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),O;return O}function m(O){return O.generateMipmaps}function p(O){i.generateMipmap(O)}function S(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(O,C,dt,nt,it=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let rt=C;if(C===i.RED&&(dt===i.FLOAT&&(rt=i.R32F),dt===i.HALF_FLOAT&&(rt=i.R16F),dt===i.UNSIGNED_BYTE&&(rt=i.R8)),C===i.RED_INTEGER&&(dt===i.UNSIGNED_BYTE&&(rt=i.R8UI),dt===i.UNSIGNED_SHORT&&(rt=i.R16UI),dt===i.UNSIGNED_INT&&(rt=i.R32UI),dt===i.BYTE&&(rt=i.R8I),dt===i.SHORT&&(rt=i.R16I),dt===i.INT&&(rt=i.R32I)),C===i.RG&&(dt===i.FLOAT&&(rt=i.RG32F),dt===i.HALF_FLOAT&&(rt=i.RG16F),dt===i.UNSIGNED_BYTE&&(rt=i.RG8)),C===i.RG_INTEGER&&(dt===i.UNSIGNED_BYTE&&(rt=i.RG8UI),dt===i.UNSIGNED_SHORT&&(rt=i.RG16UI),dt===i.UNSIGNED_INT&&(rt=i.RG32UI),dt===i.BYTE&&(rt=i.RG8I),dt===i.SHORT&&(rt=i.RG16I),dt===i.INT&&(rt=i.RG32I)),C===i.RGB_INTEGER&&(dt===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),dt===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),dt===i.UNSIGNED_INT&&(rt=i.RGB32UI),dt===i.BYTE&&(rt=i.RGB8I),dt===i.SHORT&&(rt=i.RGB16I),dt===i.INT&&(rt=i.RGB32I)),C===i.RGBA_INTEGER&&(dt===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),dt===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),dt===i.UNSIGNED_INT&&(rt=i.RGBA32UI),dt===i.BYTE&&(rt=i.RGBA8I),dt===i.SHORT&&(rt=i.RGBA16I),dt===i.INT&&(rt=i.RGBA32I)),C===i.RGB&&dt===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),C===i.RGBA){let vt=it?Eo:ce.getTransfer(nt);dt===i.FLOAT&&(rt=i.RGBA32F),dt===i.HALF_FLOAT&&(rt=i.RGBA16F),dt===i.UNSIGNED_BYTE&&(rt=vt===xe?i.SRGB8_ALPHA8:i.RGBA8),dt===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),dt===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function y(O,C){let dt;return O?C===null||C===Ti||C===cs?dt=i.DEPTH24_STENCIL8:C===Rn?dt=i.DEPTH32F_STENCIL8:C===Os&&(dt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ti||C===cs?dt=i.DEPTH_COMPONENT24:C===Rn?dt=i.DEPTH_COMPONENT32F:C===Os&&(dt=i.DEPTH_COMPONENT16),dt}function W(O,C){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ke&&O.minFilter!==An?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function F(O){let C=O.target;C.removeEventListener("dispose",F),D(C),C.isVideoTexture&&h.delete(C)}function A(O){let C=O.target;C.removeEventListener("dispose",A),g(C)}function D(O){let C=n.get(O);if(C.__webglInit===void 0)return;let dt=O.source,nt=f.get(dt);if(nt){let it=nt[C.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(O),Object.keys(nt).length===0&&f.delete(dt)}n.remove(O)}function b(O){let C=n.get(O);i.deleteTexture(C.__webglTexture);let dt=O.source,nt=f.get(dt);delete nt[C.__cacheKey],o.memory.textures--}function g(O){let C=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let it=0;it<C.__webglFramebuffer[nt].length;it++)i.deleteFramebuffer(C.__webglFramebuffer[nt][it]);else i.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)i.deleteFramebuffer(C.__webglFramebuffer[nt]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let dt=O.textures;for(let nt=0,it=dt.length;nt<it;nt++){let rt=n.get(dt[nt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(dt[nt])}n.remove(O)}let E=0;function T(){E=0}function P(){let O=E;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),E+=1,O}function k(O){let C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function K(O,C){let dt=n.get(O);if(O.isVideoTexture&&At(O),O.isRenderTargetTexture===!1&&O.version>0&&dt.__version!==O.version){let nt=O.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(dt,O,C);return}}e.bindTexture(i.TEXTURE_2D,dt.__webglTexture,i.TEXTURE0+C)}function L(O,C){let dt=n.get(O);if(O.version>0&&dt.__version!==O.version){q(dt,O,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,dt.__webglTexture,i.TEXTURE0+C)}function Z(O,C){let dt=n.get(O);if(O.version>0&&dt.__version!==O.version){q(dt,O,C);return}e.bindTexture(i.TEXTURE_3D,dt.__webglTexture,i.TEXTURE0+C)}function tt(O,C){let dt=n.get(O);if(O.version>0&&dt.__version!==O.version){V(dt,O,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture,i.TEXTURE0+C)}let ct={[wi]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},ft={[Ke]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},H={[Zu]:i.NEVER,[ef]:i.ALWAYS,[Ju]:i.LESS,[Ih]:i.LEQUAL,[Ku]:i.EQUAL,[tf]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function Rt(O,C){if(C.type===Rn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===An||C.magFilter===Uo||C.magFilter===sr||C.magFilter===Ei||C.minFilter===An||C.minFilter===Uo||C.minFilter===sr||C.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,ct[C.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,ct[C.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,ct[C.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ft[C.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,H[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ke||C.minFilter!==sr&&C.minFilter!==Ei||C.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let dt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Q(O,C){let dt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",F));let nt=C.source,it=f.get(nt);it===void 0&&(it={},f.set(nt,it));let rt=k(C);if(rt!==O.__cacheKey){it[rt]===void 0&&(it[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,dt=!0),it[rt].usedTimes++;let vt=it[O.__cacheKey];vt!==void 0&&(it[O.__cacheKey].usedTimes--,vt.usedTimes===0&&b(C)),O.__cacheKey=rt,O.__webglTexture=it[rt].texture}return dt}function q(O,C,dt){let nt=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=i.TEXTURE_3D);let it=Q(O,C),rt=C.source;e.bindTexture(nt,O.__webglTexture,i.TEXTURE0+dt);let vt=n.get(rt);if(rt.version!==vt.__version||it===!0){e.activeTexture(i.TEXTURE0+dt);let mt=ce.getPrimaries(ce.workingColorSpace),It=C.colorSpace===si?null:ce.getPrimaries(C.colorSpace),Pt=C.colorSpace===si||mt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let bt=M(C.image,!1,s.maxTextureSize);bt=Ht(C,bt);let Dt=r.convert(C.format,C.colorSpace),Wt=r.convert(C.type),Xt=_(C.internalFormat,Dt,Wt,C.colorSpace,C.isVideoTexture);Rt(nt,C);let Lt,Qt=C.mipmaps,qt=C.isVideoTexture!==!0,w=vt.__version===void 0||it===!0,R=rt.dataReady,J=W(C,bt);if(C.isDepthTexture)Xt=y(C.format===hs,C.type),w&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Xt,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Dt,Wt,null));else if(C.isDataTexture)if(Qt.length>0){qt&&w&&e.texStorage2D(i.TEXTURE_2D,J,Xt,Qt[0].width,Qt[0].height);for(let v=0,I=Qt.length;v<I;v++)Lt=Qt[v],qt?R&&e.texSubImage2D(i.TEXTURE_2D,v,0,0,Lt.width,Lt.height,Dt,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,v,Xt,Lt.width,Lt.height,0,Dt,Wt,Lt.data);C.generateMipmaps=!1}else qt?(w&&e.texStorage2D(i.TEXTURE_2D,J,Xt,bt.width,bt.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Dt,Wt,bt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,bt.width,bt.height,0,Dt,Wt,bt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){qt&&w&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,Xt,Qt[0].width,Qt[0].height,bt.depth);for(let v=0,I=Qt.length;v<I;v++)if(Lt=Qt[v],C.format!==cn)if(Dt!==null)if(qt){if(R)if(C.layerUpdates.size>0){let N=nh(Lt.width,Lt.height,C.format,C.type);for(let $ of C.layerUpdates){let at=Lt.data.subarray($*N/Lt.data.BYTES_PER_ELEMENT,($+1)*N/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,v,0,0,$,Lt.width,Lt.height,1,Dt,at)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,v,0,0,0,Lt.width,Lt.height,bt.depth,Dt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,v,Xt,Lt.width,Lt.height,bt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,v,0,0,0,Lt.width,Lt.height,bt.depth,Dt,Wt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,v,Xt,Lt.width,Lt.height,bt.depth,0,Dt,Wt,Lt.data)}else{qt&&w&&e.texStorage2D(i.TEXTURE_2D,J,Xt,Qt[0].width,Qt[0].height);for(let v=0,I=Qt.length;v<I;v++)Lt=Qt[v],C.format!==cn?Dt!==null?qt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,v,0,0,Lt.width,Lt.height,Dt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,v,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?R&&e.texSubImage2D(i.TEXTURE_2D,v,0,0,Lt.width,Lt.height,Dt,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,v,Xt,Lt.width,Lt.height,0,Dt,Wt,Lt.data)}else if(C.isDataArrayTexture)if(qt){if(w&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,Xt,bt.width,bt.height,bt.depth),R)if(C.layerUpdates.size>0){let v=nh(bt.width,bt.height,C.format,C.type);for(let I of C.layerUpdates){let N=bt.data.subarray(I*v/bt.data.BYTES_PER_ELEMENT,(I+1)*v/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,I,bt.width,bt.height,1,Dt,Wt,N)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Dt,Wt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,bt.width,bt.height,bt.depth,0,Dt,Wt,bt.data);else if(C.isData3DTexture)qt?(w&&e.texStorage3D(i.TEXTURE_3D,J,Xt,bt.width,bt.height,bt.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Dt,Wt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,bt.width,bt.height,bt.depth,0,Dt,Wt,bt.data);else if(C.isFramebufferTexture){if(w)if(qt)e.texStorage2D(i.TEXTURE_2D,J,Xt,bt.width,bt.height);else{let v=bt.width,I=bt.height;for(let N=0;N<J;N++)e.texImage2D(i.TEXTURE_2D,N,Xt,v,I,0,Dt,Wt,null),v>>=1,I>>=1}}else if(Qt.length>0){if(qt&&w){let v=Nt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,J,Xt,v.width,v.height)}for(let v=0,I=Qt.length;v<I;v++)Lt=Qt[v],qt?R&&e.texSubImage2D(i.TEXTURE_2D,v,0,0,Dt,Wt,Lt):e.texImage2D(i.TEXTURE_2D,v,Xt,Dt,Wt,Lt);C.generateMipmaps=!1}else if(qt){if(w){let v=Nt(bt);e.texStorage2D(i.TEXTURE_2D,J,Xt,v.width,v.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Wt,bt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Dt,Wt,bt);m(C)&&p(nt),vt.__version=rt.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function V(O,C,dt){if(C.image.length!==6)return;let nt=Q(O,C),it=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+dt);let rt=n.get(it);if(it.version!==rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+dt);let vt=ce.getPrimaries(ce.workingColorSpace),mt=C.colorSpace===si?null:ce.getPrimaries(C.colorSpace),It=C.colorSpace===si||vt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Pt=C.isCompressedTexture||C.image[0].isCompressedTexture,bt=C.image[0]&&C.image[0].isDataTexture,Dt=[];for(let I=0;I<6;I++)!Pt&&!bt?Dt[I]=M(C.image[I],!0,s.maxCubemapSize):Dt[I]=bt?C.image[I].image:C.image[I],Dt[I]=Ht(C,Dt[I]);let Wt=Dt[0],Xt=r.convert(C.format,C.colorSpace),Lt=r.convert(C.type),Qt=_(C.internalFormat,Xt,Lt,C.colorSpace),qt=C.isVideoTexture!==!0,w=rt.__version===void 0||nt===!0,R=it.dataReady,J=W(C,Wt);Rt(i.TEXTURE_CUBE_MAP,C);let v;if(Pt){qt&&w&&e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Qt,Wt.width,Wt.height);for(let I=0;I<6;I++){v=Dt[I].mipmaps;for(let N=0;N<v.length;N++){let $=v[N];C.format!==cn?Xt!==null?qt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,0,0,$.width,$.height,Xt,$.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,Qt,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,0,0,$.width,$.height,Xt,Lt,$.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N,Qt,$.width,$.height,0,Xt,Lt,$.data)}}}else{if(v=C.mipmaps,qt&&w){v.length>0&&J++;let I=Nt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Qt,I.width,I.height)}for(let I=0;I<6;I++)if(bt){qt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Dt[I].width,Dt[I].height,Xt,Lt,Dt[I].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Qt,Dt[I].width,Dt[I].height,0,Xt,Lt,Dt[I].data);for(let N=0;N<v.length;N++){let at=v[N].image[I].image;qt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,0,0,at.width,at.height,Xt,Lt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,Qt,at.width,at.height,0,Xt,Lt,at.data)}}else{qt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Xt,Lt,Dt[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Qt,Xt,Lt,Dt[I]);for(let N=0;N<v.length;N++){let $=v[N];qt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,0,0,Xt,Lt,$.image[I]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,N+1,Qt,Xt,Lt,$.image[I])}}}m(C)&&p(i.TEXTURE_CUBE_MAP),rt.__version=it.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function G(O,C,dt,nt,it,rt){let vt=r.convert(dt.format,dt.colorSpace),mt=r.convert(dt.type),It=_(dt.internalFormat,vt,mt,dt.colorSpace),Pt=n.get(C),bt=n.get(dt);if(bt.__renderTarget=C,!Pt.__hasExternalTextures){let Dt=Math.max(1,C.width>>rt),Wt=Math.max(1,C.height>>rt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,rt,It,Dt,Wt,C.depth,0,vt,mt,null):e.texImage2D(it,rt,It,Dt,Wt,0,vt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),et(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,it,bt.__webglTexture,0,Mt(C)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,it,bt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(O,C,dt){if(i.bindRenderbuffer(i.RENDERBUFFER,O),C.depthBuffer){let nt=C.depthTexture,it=nt&&nt.isDepthTexture?nt.type:null,rt=y(C.stencilBuffer,it),vt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Mt(C);et(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,rt,C.width,C.height):dt?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,rt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,O)}else{let nt=C.textures;for(let it=0;it<nt.length;it++){let rt=nt[it],vt=r.convert(rt.format,rt.colorSpace),mt=r.convert(rt.type),It=_(rt.internalFormat,vt,mt,rt.colorSpace),Pt=Mt(C);dt&&et(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,It,C.width,C.height):et(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,It,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,It,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(C.depthTexture);nt.__renderTarget=C,(!nt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),K(C.depthTexture,0);let it=nt.__webglTexture,rt=Mt(C);if(C.depthTexture.format===is)et(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(C.depthTexture.format===hs)et(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function yt(O){let C=n.get(O),dt=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){let nt=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),nt){let it=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,nt.removeEventListener("dispose",it)};nt.addEventListener("dispose",it),C.__depthDisposeCallback=it}C.__boundDepthTexture=nt}if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(dt)throw new Error("target.depthTexture not supported in Cube render targets");ot(C.__webglFramebuffer,O)}else if(dt){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]===void 0)C.__webglDepthbuffer[nt]=i.createRenderbuffer(),Y(C.__webglDepthbuffer[nt],O,!1);else{let it=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=C.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),Y(C.__webglDepthbuffer,O,!1);else{let nt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(O,C,dt){let nt=n.get(O);C!==void 0&&G(nt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),dt!==void 0&&yt(O)}function wt(O){let C=O.texture,dt=n.get(O),nt=n.get(C);O.addEventListener("dispose",A);let it=O.textures,rt=O.isWebGLCubeRenderTarget===!0,vt=it.length>1;if(vt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=C.version,o.memory.textures++),rt){dt.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(C.mipmaps&&C.mipmaps.length>0){dt.__webglFramebuffer[mt]=[];for(let It=0;It<C.mipmaps.length;It++)dt.__webglFramebuffer[mt][It]=i.createFramebuffer()}else dt.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){dt.__webglFramebuffer=[];for(let mt=0;mt<C.mipmaps.length;mt++)dt.__webglFramebuffer[mt]=i.createFramebuffer()}else dt.__webglFramebuffer=i.createFramebuffer();if(vt)for(let mt=0,It=it.length;mt<It;mt++){let Pt=n.get(it[mt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&et(O)===!1){dt.__webglMultisampledFramebuffer=i.createFramebuffer(),dt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){let It=it[mt];dt.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Pt=r.convert(It.format,It.colorSpace),bt=r.convert(It.type),Dt=_(It.internalFormat,Pt,bt,It.colorSpace,O.isXRRenderTarget===!0),Wt=Mt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Dt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(dt.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(dt.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,C);for(let mt=0;mt<6;mt++)if(C.mipmaps&&C.mipmaps.length>0)for(let It=0;It<C.mipmaps.length;It++)G(dt.__webglFramebuffer[mt][It],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,It);else G(dt.__webglFramebuffer[mt],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(C)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let mt=0,It=it.length;mt<It;mt++){let Pt=it[mt],bt=n.get(Pt);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),Rt(i.TEXTURE_2D,Pt),G(dt.__webglFramebuffer,O,Pt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Pt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(mt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,nt.__webglTexture),Rt(mt,C),C.mipmaps&&C.mipmaps.length>0)for(let It=0;It<C.mipmaps.length;It++)G(dt.__webglFramebuffer[It],O,C,i.COLOR_ATTACHMENT0,mt,It);else G(dt.__webglFramebuffer,O,C,i.COLOR_ATTACHMENT0,mt,0);m(C)&&p(mt),e.unbindTexture()}O.depthBuffer&&yt(O)}function st(O){let C=O.textures;for(let dt=0,nt=C.length;dt<nt;dt++){let it=C[dt];if(m(it)){let rt=S(O),vt=n.get(it).__webglTexture;e.bindTexture(rt,vt),p(rt),e.unbindTexture()}}}let pt=[],B=[];function Et(O){if(O.samples>0){if(et(O)===!1){let C=O.textures,dt=O.width,nt=O.height,it=i.COLOR_BUFFER_BIT,rt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(O),mt=C.length>1;if(mt)for(let It=0;It<C.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let It=0;It<C.length;It++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[It]);let Pt=n.get(C[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,dt,nt,0,0,dt,nt,it,i.NEAREST),l===!0&&(pt.length=0,B.length=0,pt.push(i.COLOR_ATTACHMENT0+It),O.depthBuffer&&O.resolveDepthBuffer===!1&&(pt.push(rt),B.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let It=0;It<C.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,vt.__webglColorRenderbuffer[It]);let Pt=n.get(C[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&l){let C=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Mt(O){return Math.min(s.maxSamples,O.samples)}function et(O){let C=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function At(O){let C=o.render.frame;h.get(O)!==C&&(h.set(O,C),O.update())}function Ht(O,C){let dt=O.colorSpace,nt=O.format,it=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||dt!==ms&&dt!==si&&(ce.getTransfer(dt)===xe?(nt!==cn||it!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",dt)),C}function Nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=T,this.setTexture2D=K,this.setTexture2DArray=L,this.setTexture3D=Z,this.setTextureCube=tt,this.rebindTextures=Tt,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=G,this.useMultisampledRTT=et}function lg(i,t){function e(n,s=si){let r,o=ce.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===cn)return i.RGBA;if(n===wh)return i.LUMINANCE;if(n===Th)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===Ah)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Or||n===zr)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Pa)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===za)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===Ya||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Za||n===Ja||n===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dl=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},cg={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,x=.005;c.inputState.pinching&&f>u+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,x=null,M=new pl,m=e.getContextAttributes(),p=null,S=null,_=[],y=[],W=new Ct,F=null,A=new Je;A.viewport=new Ie;let D=new Je;D.viewport=new Ie;let b=[A,D],g=new dl,E=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let V=_[q];return V===void 0&&(V=new Us,_[q]=V),V.getTargetRaySpace()},this.getControllerGrip=function(q){let V=_[q];return V===void 0&&(V=new Us,_[q]=V),V.getGripSpace()},this.getHand=function(q){let V=_[q];return V===void 0&&(V=new Us,_[q]=V),V.getHandSpace()};function P(q){let V=y.indexOf(q.inputSource);if(V===-1)return;let G=_[V];G!==void 0&&(G.update(q.inputSource,q.frame,c||o),G.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let q=0;q<_.length;q++){let V=y[q];V!==null&&(y[q]=null,_[q].disconnect(V))}E=null,T=null,M.reset(),t.setRenderTarget(p),u=null,f=null,d=null,s=null,S=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(W),s.renderState.layers===void 0){let V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new Gn(u.framebufferWidth,u.framebufferHeight,{format:cn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,G=null,Y=null;m.depth&&(Y=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=m.stencil?hs:is,G=m.stencil?cs:Ti);let ot={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Gn(f.textureWidth,f.textureHeight,{format:cn,type:Vn,depthTexture:new Qr(f.textureWidth,f.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(q){for(let V=0;V<q.removed.length;V++){let G=q.removed[V],Y=y.indexOf(G);Y>=0&&(y[Y]=null,_[Y].disconnect(G))}for(let V=0;V<q.added.length;V++){let G=q.added[V],Y=y.indexOf(G);if(Y===-1){for(let yt=0;yt<_.length;yt++)if(yt>=y.length){y.push(G),Y=yt;break}else if(y[yt]===null){y[yt]=G,Y=yt;break}if(Y===-1)break}let ot=_[Y];ot&&ot.connect(G)}}let L=new z,Z=new z;function tt(q,V,G){L.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(G.matrixWorld);let Y=L.distanceTo(Z),ot=V.projectionMatrix.elements,yt=G.projectionMatrix.elements,Tt=ot[14]/(ot[10]-1),wt=ot[14]/(ot[10]+1),st=(ot[9]+1)/ot[5],pt=(ot[9]-1)/ot[5],B=(ot[8]-1)/ot[0],Et=(yt[8]+1)/yt[0],Mt=Tt*B,et=Tt*Et,At=Y/(-B+Et),Ht=At*-B;if(V.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ht),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ot[10]===-1)q.projectionMatrix.copy(V.projectionMatrix),q.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let Nt=Tt+At,O=wt+At,C=Mt-Ht,dt=et+(Y-Ht),nt=st*wt/O*Nt,it=pt*wt/O*Nt;q.projectionMatrix.makePerspective(C,dt,nt,it,Nt,O),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ct(q,V){V===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(V.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let V=q.near,G=q.far;M.texture!==null&&(M.depthNear>0&&(V=M.depthNear),M.depthFar>0&&(G=M.depthFar)),g.near=D.near=A.near=V,g.far=D.far=A.far=G,(E!==g.near||T!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),E=g.near,T=g.far),A.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,g.layers.mask=A.layers.mask|D.layers.mask;let Y=q.parent,ot=g.cameras;ct(g,Y);for(let yt=0;yt<ot.length;yt++)ct(ot[yt],Y);ot.length===2?tt(g,A,D):g.projectionMatrix.copy(A.projectionMatrix),ft(q,g,Y)};function ft(q,V,G){G===null?q.matrix.copy(V.matrixWorld):(q.matrix.copy(G.matrixWorld),q.matrix.invert(),q.matrix.multiply(V.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(V.projectionMatrix),q.projectionMatrixInverse.copy(V.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(g)};let H=null;function Rt(q,V){if(h=V.getViewerPose(c||o),x=V,h!==null){let G=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let Y=!1;G.length!==g.cameras.length&&(g.cameras.length=0,Y=!0);for(let yt=0;yt<G.length;yt++){let Tt=G[yt],wt=null;if(u!==null)wt=u.getViewport(Tt);else{let pt=d.getViewSubImage(f,Tt);wt=pt.viewport,yt===0&&(t.setRenderTargetTextures(S,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(S))}let st=b[yt];st===void 0&&(st=new Je,st.layers.enable(yt),st.viewport=new Ie,b[yt]=st),st.matrix.fromArray(Tt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Tt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(wt.x,wt.y,wt.width,wt.height),yt===0&&(g.matrix.copy(st.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Y===!0&&g.cameras.push(st)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){let yt=d.getDepthInformation(G[0]);yt&&yt.isValid&&yt.texture&&M.init(t,yt,s.renderState)}}for(let G=0;G<_.length;G++){let Y=y[G],ot=_[G];Y!==null&&ot!==void 0&&ot.update(Y,V,c||o)}H&&H(q,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),x=null}let Q=new Nh;Q.setAnimationLoop(Rt),this.setAnimationLoop=function(q){H=q},this.dispose=function(){}}},yi=new vn,fg=new ue;function dg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Uh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),_=S.envMap,y=S.envMapRotation;_&&(m.envMap.value=_,yi.copy(y),yi.x*=-1,yi.y*=-1,yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(fg.makeRotationFromEuler(yi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){let y=_.program;n.uniformBlockBinding(S,y)}function c(S,_){let y=s[S.id];y===void 0&&(x(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));let W=_.program;n.updateUBOMapping(S,W);let F=t.render.frame;r[S.id]!==F&&(f(S),r[S.id]=F)}function h(S){let _=d();S.__bindingPointIndex=_;let y=i.createBuffer(),W=S.__size,F=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,W,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let _=s[S.id],y=S.uniforms,W=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let F=0,A=y.length;F<A;F++){let D=Array.isArray(y[F])?y[F]:[y[F]];for(let b=0,g=D.length;b<g;b++){let E=D[b];if(u(E,F,b,W)===!0){let T=E.__offset,P=Array.isArray(E.value)?E.value:[E.value],k=0;for(let K=0;K<P.length;K++){let L=P[K],Z=M(L);typeof L=="number"||typeof L=="boolean"?(E.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,T+k,E.__data)):L.isMatrix3?(E.__data[0]=L.elements[0],E.__data[1]=L.elements[1],E.__data[2]=L.elements[2],E.__data[3]=0,E.__data[4]=L.elements[3],E.__data[5]=L.elements[4],E.__data[6]=L.elements[5],E.__data[7]=0,E.__data[8]=L.elements[6],E.__data[9]=L.elements[7],E.__data[10]=L.elements[8],E.__data[11]=0):(L.toArray(E.__data,k),k+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,_,y,W){let F=S.value,A=_+"_"+y;if(W[A]===void 0)return typeof F=="number"||typeof F=="boolean"?W[A]=F:W[A]=F.clone(),!0;{let D=W[A];if(typeof F=="number"||typeof F=="boolean"){if(D!==F)return W[A]=F,!0}else if(D.equals(F)===!1)return D.copy(F),!0}return!1}function x(S){let _=S.uniforms,y=0,W=16;for(let A=0,D=_.length;A<D;A++){let b=Array.isArray(_[A])?_[A]:[_[A]];for(let g=0,E=b.length;g<E;g++){let T=b[g],P=Array.isArray(T.value)?T.value:[T.value];for(let k=0,K=P.length;k<K;k++){let L=P[k],Z=M(L),tt=y%W,ct=tt%Z.boundary,ft=tt+ct;y+=ct,ft!==0&&W-ft<Z.storage&&(y+=W-ft),T.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,y+=Z.storage}}}let F=y%W;return F>0&&(y+=W-F),S.__size=y,S.__cache={},this}function M(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var to=class{constructor(t={}){let{canvas:e=yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let x=new Uint32Array(4),M=new Int32Array(4),m=null,p=null,S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Cn,this.toneMappingExposure=1;let y=this,W=!1,F=0,A=0,D=null,b=-1,g=null,E=new Ie,T=new Ie,P=null,k=new Jt(0),K=0,L=e.width,Z=e.height,tt=1,ct=null,ft=null,H=new Ie(0,0,L,Z),Rt=new Ie(0,0,L,Z),Q=!1,q=new Bs,V=!1,G=!1,Y=new ue,ot=new ue,yt=new z,Tt=new Ie,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function pt(){return D===null?tt:1}let B=n;function Et(U,lt){return e.getContext(U,lt)}try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",$,!1),B===null){let lt="webgl2";if(B=Et(lt,U),B===null)throw Et(lt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Mt,et,At,Ht,Nt,O,C,dt,nt,it,rt,vt,mt,It,Pt,bt,Dt,Wt,Xt,Lt,Qt,qt,w,R;function J(){Mt=new Im(B),Mt.init(),qt=new lg(B,Mt),et=new Em(B,Mt,t,qt),At=new rg(B,Mt),et.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),Ht=new Dm(B),Nt=new q0,O=new ag(B,Mt,At,Nt,et,qt,Ht),C=new Tm(y),dt=new Cm(y),nt=new kf(B),w=new bm(B,nt),it=new Pm(B,nt,Ht,w),rt=new Nm(B,it,nt,Ht),Xt=new Um(B,et,O),bt=new wm(Nt),vt=new X0(y,C,dt,Mt,et,w,bt),mt=new dg(y,Nt),It=new $0,Pt=new tg(Mt),Wt=new Mm(y,C,dt,At,rt,u,l),Dt=new ig(y,rt,et),R=new pg(B,Ht,et,At),Lt=new Sm(B,Mt,Ht),Qt=new Lm(B,Mt,Ht),Ht.programs=vt.programs,y.capabilities=et,y.extensions=Mt,y.properties=Nt,y.renderLists=It,y.shadowMap=Dt,y.state=At,y.info=Ht}J();let v=new ml(y,B);this.xr=v,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let U=Mt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=Mt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(U){U!==void 0&&(tt=U,this.setSize(L,Z,!1))},this.getSize=function(U){return U.set(L,Z)},this.setSize=function(U,lt,xt=!0){if(v.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=U,Z=lt,e.width=Math.floor(U*tt),e.height=Math.floor(lt*tt),xt===!0&&(e.style.width=U+"px",e.style.height=lt+"px"),this.setViewport(0,0,U,lt)},this.getDrawingBufferSize=function(U){return U.set(L*tt,Z*tt).floor()},this.setDrawingBufferSize=function(U,lt,xt){L=U,Z=lt,tt=xt,e.width=Math.floor(U*xt),e.height=Math.floor(lt*xt),this.setViewport(0,0,U,lt)},this.getCurrentViewport=function(U){return U.copy(E)},this.getViewport=function(U){return U.copy(H)},this.setViewport=function(U,lt,xt,_t){U.isVector4?H.set(U.x,U.y,U.z,U.w):H.set(U,lt,xt,_t),At.viewport(E.copy(H).multiplyScalar(tt).round())},this.getScissor=function(U){return U.copy(Rt)},this.setScissor=function(U,lt,xt,_t){U.isVector4?Rt.set(U.x,U.y,U.z,U.w):Rt.set(U,lt,xt,_t),At.scissor(T.copy(Rt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(U){At.setScissorTest(Q=U)},this.setOpaqueSort=function(U){ct=U},this.setTransparentSort=function(U){ft=U},this.getClearColor=function(U){return U.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(U=!0,lt=!0,xt=!0){let _t=0;if(U){let ht=!1;if(D!==null){let Ut=D.texture.format;ht=Ut===Wl||Ut===Gl||Ut===Vl}if(ht){let Ut=D.texture.type,kt=Ut===Vn||Ut===Ti||Ut===Os||Ut===cs||Ut===Bl||Ut===kl,Yt=Wt.getClearColor(),$t=Wt.getClearAlpha(),ie=Yt.r,re=Yt.g,Zt=Yt.b;kt?(x[0]=ie,x[1]=re,x[2]=Zt,x[3]=$t,B.clearBufferuiv(B.COLOR,0,x)):(M[0]=ie,M[1]=re,M[2]=Zt,M[3]=$t,B.clearBufferiv(B.COLOR,0,M))}else _t|=B.COLOR_BUFFER_BIT}lt&&(_t|=B.DEPTH_BUFFER_BIT),xt&&(_t|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",$,!1),It.dispose(),Pt.dispose(),Nt.dispose(),C.dispose(),dt.dispose(),rt.dispose(),w.dispose(),R.dispose(),vt.dispose(),v.dispose(),v.removeEventListener("sessionstart",Ft),v.removeEventListener("sessionend",Bt),Vt.stop()};function I(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;let U=Ht.autoReset,lt=Dt.enabled,xt=Dt.autoUpdate,_t=Dt.needsUpdate,ht=Dt.type;J(),Ht.autoReset=U,Dt.enabled=lt,Dt.autoUpdate=xt,Dt.needsUpdate=_t,Dt.type=ht}function $(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function at(U){let lt=U.target;lt.removeEventListener("dispose",at),X(lt)}function X(U){j(U),Nt.remove(U)}function j(U){let lt=Nt.get(U).programs;lt!==void 0&&(lt.forEach(function(xt){vt.releaseProgram(xt)}),U.isShaderMaterial&&vt.releaseShaderCache(U))}this.renderBufferDirect=function(U,lt,xt,_t,ht,Ut){lt===null&&(lt=wt);let kt=ht.isMesh&&ht.matrixWorld.determinant()<0,Yt=du(U,lt,xt,_t,ht);At.setMaterial(_t,kt);let $t=xt.index,ie=1;if(_t.wireframe===!0){if($t=it.getWireframeAttribute(xt),$t===void 0)return;ie=2}let re=xt.drawRange,Zt=xt.attributes.position,he=re.start*ie,Me=(re.start+re.count)*ie;Ut!==null&&(he=Math.max(he,Ut.start*ie),Me=Math.min(Me,(Ut.start+Ut.count)*ie)),$t!==null?(he=Math.max(he,0),Me=Math.min(Me,$t.count)):Zt!=null&&(he=Math.max(he,0),Me=Math.min(Me,Zt.count));let be=Me-he;if(be<0||be===1/0)return;w.setup(ht,_t,Yt,xt,$t);let tn,fe=Lt;if($t!==null&&(tn=nt.get($t),fe=Qt,fe.setIndex(tn)),ht.isMesh)_t.wireframe===!0?(At.setLineWidth(_t.wireframeLinewidth*pt()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(ht.isLine){let Kt=_t.linewidth;Kt===void 0&&(Kt=1),At.setLineWidth(Kt*pt()),ht.isLineSegments?fe.setMode(B.LINES):ht.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else ht.isPoints?fe.setMode(B.POINTS):ht.isSprite&&fe.setMode(B.TRIANGLES);if(ht.isBatchedMesh)if(ht._multiDrawInstances!==null)fe.renderMultiDrawInstances(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount,ht._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))fe.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{let Kt=ht._multiDrawStarts,Ln=ht._multiDrawCounts,de=ht._multiDrawCount,mn=$t?nt.get($t).bytesPerElement:1,Ui=Nt.get(_t).currentProgram.getUniforms();for(let on=0;on<de;on++)Ui.setValue(B,"_gl_DrawID",on),fe.render(Kt[on]/mn,Ln[on])}else if(ht.isInstancedMesh)fe.renderInstances(he,be,ht.count);else if(xt.isInstancedBufferGeometry){let Kt=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,Ln=Math.min(xt.instanceCount,Kt);fe.renderInstances(he,be,Ln)}else fe.render(he,be)};function ut(U,lt,xt){U.transparent===!0&&U.side===Pe&&U.forceSinglePass===!1?(U.side=Ve,U.needsUpdate=!0,En(U,lt,xt),U.side=li,U.needsUpdate=!0,En(U,lt,xt),U.side=Pe):En(U,lt,xt)}this.compile=function(U,lt,xt=null){xt===null&&(xt=U),p=Pt.get(xt),p.init(lt),_.push(p),xt.traverseVisible(function(ht){ht.isLight&&ht.layers.test(lt.layers)&&(p.pushLight(ht),ht.castShadow&&p.pushShadow(ht))}),U!==xt&&U.traverseVisible(function(ht){ht.isLight&&ht.layers.test(lt.layers)&&(p.pushLight(ht),ht.castShadow&&p.pushShadow(ht))}),p.setupLights();let _t=new Set;return U.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;let Ut=ht.material;if(Ut)if(Array.isArray(Ut))for(let kt=0;kt<Ut.length;kt++){let Yt=Ut[kt];ut(Yt,xt,ht),_t.add(Yt)}else ut(Ut,xt,ht),_t.add(Ut)}),_.pop(),p=null,_t},this.compileAsync=function(U,lt,xt=null){let _t=this.compile(U,lt,xt);return new Promise(ht=>{function Ut(){if(_t.forEach(function(kt){Nt.get(kt).currentProgram.isReady()&&_t.delete(kt)}),_t.size===0){ht(U);return}setTimeout(Ut,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let St=null;function Ot(U){St&&St(U)}function Ft(){Vt.stop()}function Bt(){Vt.start()}let Vt=new Nh;Vt.setAnimationLoop(Ot),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(U){St=U,v.setAnimationLoop(U),U===null?Vt.stop():Vt.start()},v.addEventListener("sessionstart",Ft),v.addEventListener("sessionend",Bt),this.render=function(U,lt){if(lt!==void 0&&lt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),lt.parent===null&&lt.matrixWorldAutoUpdate===!0&&lt.updateMatrixWorld(),v.enabled===!0&&v.isPresenting===!0&&(v.cameraAutoUpdate===!0&&v.updateCamera(lt),lt=v.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,lt,D),p=Pt.get(U,_.length),p.init(lt),_.push(p),ot.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),q.setFromProjectionMatrix(ot),G=this.localClippingEnabled,V=bt.init(this.clippingPlanes,G),m=It.get(U,S.length),m.init(),S.push(m),v.enabled===!0&&v.isPresenting===!0){let Ut=y.xr.getDepthSensingMesh();Ut!==null&&se(Ut,lt,-1/0,y.sortObjects)}se(U,lt,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ct,ft),st=v.enabled===!1||v.isPresenting===!1||v.hasDepthSensing()===!1,st&&Wt.addToRenderList(m,U),this.info.render.frame++,V===!0&&bt.beginShadows();let xt=p.state.shadowsArray;Dt.render(xt,U,lt),V===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();let _t=m.opaque,ht=m.transmissive;if(p.setupLights(),lt.isArrayCamera){let Ut=lt.cameras;if(ht.length>0)for(let kt=0,Yt=Ut.length;kt<Yt;kt++){let $t=Ut[kt];De(_t,ht,U,$t)}st&&Wt.render(U);for(let kt=0,Yt=Ut.length;kt<Yt;kt++){let $t=Ut[kt];ve(m,U,$t,$t.viewport)}}else ht.length>0&&De(_t,ht,U,lt),st&&Wt.render(U),ve(m,U,lt);D!==null&&(O.updateMultisampleRenderTarget(D),O.updateRenderTargetMipmap(D)),U.isScene===!0&&U.onAfterRender(y,U,lt),w.resetDefaultState(),b=-1,g=null,_.pop(),_.length>0?(p=_[_.length-1],V===!0&&bt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function se(U,lt,xt,_t){if(U.visible===!1)return;if(U.layers.test(lt.layers)){if(U.isGroup)xt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(lt);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||q.intersectsSprite(U)){_t&&Tt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ot);let kt=rt.update(U),Yt=U.material;Yt.visible&&m.push(U,kt,Yt,xt,Tt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||q.intersectsObject(U))){let kt=rt.update(U),Yt=U.material;if(_t&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Tt.copy(U.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Tt.copy(kt.boundingSphere.center)),Tt.applyMatrix4(U.matrixWorld).applyMatrix4(ot)),Array.isArray(Yt)){let $t=kt.groups;for(let ie=0,re=$t.length;ie<re;ie++){let Zt=$t[ie],he=Yt[Zt.materialIndex];he&&he.visible&&m.push(U,kt,he,xt,Tt.z,Zt)}}else Yt.visible&&m.push(U,kt,Yt,xt,Tt.z,null)}}let Ut=U.children;for(let kt=0,Yt=Ut.length;kt<Yt;kt++)se(Ut[kt],lt,xt,_t)}function ve(U,lt,xt,_t){let ht=U.opaque,Ut=U.transmissive,kt=U.transparent;p.setupLightsView(xt),V===!0&&bt.setGlobalState(y.clippingPlanes,xt),_t&&At.viewport(E.copy(_t)),ht.length>0&&Ne(ht,lt,xt),Ut.length>0&&Ne(Ut,lt,xt),kt.length>0&&Ne(kt,lt,xt),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function De(U,lt,xt,_t){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[_t.id]===void 0&&(p.state.transmissionRenderTarget[_t.id]=new Gn(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Ks:Vn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let Ut=p.state.transmissionRenderTarget[_t.id],kt=_t.viewport||E;Ut.setSize(kt.z,kt.w);let Yt=y.getRenderTarget();y.setRenderTarget(Ut),y.getClearColor(k),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),st&&Wt.render(xt);let $t=y.toneMapping;y.toneMapping=Cn;let ie=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),p.setupLightsView(_t),V===!0&&bt.setGlobalState(y.clippingPlanes,_t),Ne(U,xt,_t),O.updateMultisampleRenderTarget(Ut),O.updateRenderTargetMipmap(Ut),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Zt=0,he=lt.length;Zt<he;Zt++){let Me=lt[Zt],be=Me.object,tn=Me.geometry,fe=Me.material,Kt=Me.group;if(fe.side===Pe&&be.layers.test(_t.layers)){let Ln=fe.side;fe.side=Ve,fe.needsUpdate=!0,Sn(be,xt,_t,tn,fe,Kt),fe.side=Ln,fe.needsUpdate=!0,re=!0}}re===!0&&(O.updateMultisampleRenderTarget(Ut),O.updateRenderTargetMipmap(Ut))}y.setRenderTarget(Yt),y.setClearColor(k,K),ie!==void 0&&(_t.viewport=ie),y.toneMapping=$t}function Ne(U,lt,xt){let _t=lt.isScene===!0?lt.overrideMaterial:null;for(let ht=0,Ut=U.length;ht<Ut;ht++){let kt=U[ht],Yt=kt.object,$t=kt.geometry,ie=_t===null?kt.material:_t,re=kt.group;Yt.layers.test(xt.layers)&&Sn(Yt,lt,xt,$t,ie,re)}}function Sn(U,lt,xt,_t,ht,Ut){U.onBeforeRender(y,lt,xt,_t,ht,Ut),U.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ht.onBeforeRender(y,lt,xt,_t,U,Ut),ht.transparent===!0&&ht.side===Pe&&ht.forceSinglePass===!1?(ht.side=Ve,ht.needsUpdate=!0,y.renderBufferDirect(xt,lt,_t,ht,U,Ut),ht.side=li,ht.needsUpdate=!0,y.renderBufferDirect(xt,lt,_t,ht,U,Ut),ht.side=Pe):y.renderBufferDirect(xt,lt,_t,ht,U,Ut),U.onAfterRender(y,lt,xt,_t,ht,Ut)}function En(U,lt,xt){lt.isScene!==!0&&(lt=wt);let _t=Nt.get(U),ht=p.state.lights,Ut=p.state.shadowsArray,kt=ht.state.version,Yt=vt.getParameters(U,ht.state,Ut,lt,xt),$t=vt.getProgramCacheKey(Yt),ie=_t.programs;_t.environment=U.isMeshStandardMaterial?lt.environment:null,_t.fog=lt.fog,_t.envMap=(U.isMeshStandardMaterial?dt:C).get(U.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&U.envMap===null?lt.environmentRotation:U.envMapRotation,ie===void 0&&(U.addEventListener("dispose",at),ie=new Map,_t.programs=ie);let re=ie.get($t);if(re!==void 0){if(_t.currentProgram===re&&_t.lightsStateVersion===kt)return Do(U,Yt),re}else Yt.uniforms=vt.getUniforms(U),U.onBeforeCompile(Yt,y),re=vt.acquireProgram(Yt,$t),ie.set($t,re),_t.uniforms=Yt.uniforms;let Zt=_t.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Zt.clippingPlanes=bt.uniform),Do(U,Yt),_t.needsLights=mu(U),_t.lightsStateVersion=kt,_t.needsLights&&(Zt.ambientLightColor.value=ht.state.ambient,Zt.lightProbe.value=ht.state.probe,Zt.directionalLights.value=ht.state.directional,Zt.directionalLightShadows.value=ht.state.directionalShadow,Zt.spotLights.value=ht.state.spot,Zt.spotLightShadows.value=ht.state.spotShadow,Zt.rectAreaLights.value=ht.state.rectArea,Zt.ltc_1.value=ht.state.rectAreaLTC1,Zt.ltc_2.value=ht.state.rectAreaLTC2,Zt.pointLights.value=ht.state.point,Zt.pointLightShadows.value=ht.state.pointShadow,Zt.hemisphereLights.value=ht.state.hemi,Zt.directionalShadowMap.value=ht.state.directionalShadowMap,Zt.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,Zt.spotShadowMap.value=ht.state.spotShadowMap,Zt.spotLightMatrix.value=ht.state.spotLightMatrix,Zt.spotLightMap.value=ht.state.spotLightMap,Zt.pointShadowMap.value=ht.state.pointShadowMap,Zt.pointShadowMatrix.value=ht.state.pointShadowMatrix),_t.currentProgram=re,_t.uniformsList=null,re}function Di(U){if(U.uniformsList===null){let lt=U.currentProgram.getUniforms();U.uniformsList=rs.seqWithValue(lt.seq,U.uniforms)}return U.uniformsList}function Do(U,lt){let xt=Nt.get(U);xt.outputColorSpace=lt.outputColorSpace,xt.batching=lt.batching,xt.batchingColor=lt.batchingColor,xt.instancing=lt.instancing,xt.instancingColor=lt.instancingColor,xt.instancingMorph=lt.instancingMorph,xt.skinning=lt.skinning,xt.morphTargets=lt.morphTargets,xt.morphNormals=lt.morphNormals,xt.morphColors=lt.morphColors,xt.morphTargetsCount=lt.morphTargetsCount,xt.numClippingPlanes=lt.numClippingPlanes,xt.numIntersection=lt.numClipIntersection,xt.vertexAlphas=lt.vertexAlphas,xt.vertexTangents=lt.vertexTangents,xt.toneMapping=lt.toneMapping}function du(U,lt,xt,_t,ht){lt.isScene!==!0&&(lt=wt),O.resetTextureUnits();let Ut=lt.fog,kt=_t.isMeshStandardMaterial?lt.environment:null,Yt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ms,$t=(_t.isMeshStandardMaterial?dt:C).get(_t.envMap||kt),ie=_t.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,re=!!xt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),Zt=!!xt.morphAttributes.position,he=!!xt.morphAttributes.normal,Me=!!xt.morphAttributes.color,be=Cn;_t.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(be=y.toneMapping);let tn=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,fe=tn!==void 0?tn.length:0,Kt=Nt.get(_t),Ln=p.state.lights;if(V===!0&&(G===!0||U!==g)){let hn=U===g&&_t.id===b;bt.setState(_t,U,hn)}let de=!1;_t.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ln.state.version||Kt.outputColorSpace!==Yt||ht.isBatchedMesh&&Kt.batching===!1||!ht.isBatchedMesh&&Kt.batching===!0||ht.isBatchedMesh&&Kt.batchingColor===!0&&ht.colorTexture===null||ht.isBatchedMesh&&Kt.batchingColor===!1&&ht.colorTexture!==null||ht.isInstancedMesh&&Kt.instancing===!1||!ht.isInstancedMesh&&Kt.instancing===!0||ht.isSkinnedMesh&&Kt.skinning===!1||!ht.isSkinnedMesh&&Kt.skinning===!0||ht.isInstancedMesh&&Kt.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&Kt.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&Kt.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&Kt.instancingMorph===!1&&ht.morphTexture!==null||Kt.envMap!==$t||_t.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==ie||Kt.vertexTangents!==re||Kt.morphTargets!==Zt||Kt.morphNormals!==he||Kt.morphColors!==Me||Kt.toneMapping!==be||Kt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Kt.__version=_t.version);let mn=Kt.currentProgram;de===!0&&(mn=En(_t,lt,ht));let Ui=!1,on=!1,_s=!1,Se=mn.getUniforms(),wn=Kt.uniforms;if(At.useProgram(mn.program)&&(Ui=!0,on=!0,_s=!0),_t.id!==b&&(b=_t.id,on=!0),Ui||g!==U){At.buffers.depth.getReversed()?(Y.copy(U.projectionMatrix),Mf(Y),bf(Y),Se.setValue(B,"projectionMatrix",Y)):Se.setValue(B,"projectionMatrix",U.projectionMatrix),Se.setValue(B,"viewMatrix",U.matrixWorldInverse);let Jn=Se.map.cameraPosition;Jn!==void 0&&Jn.setValue(B,yt.setFromMatrixPosition(U.matrixWorld)),et.logarithmicDepthBuffer&&Se.setValue(B,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&Se.setValue(B,"isOrthographic",U.isOrthographicCamera===!0),g!==U&&(g=U,on=!0,_s=!0)}if(ht.isSkinnedMesh){Se.setOptional(B,ht,"bindMatrix"),Se.setOptional(B,ht,"bindMatrixInverse");let hn=ht.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Se.setValue(B,"boneTexture",hn.boneTexture,O))}ht.isBatchedMesh&&(Se.setOptional(B,ht,"batchingTexture"),Se.setValue(B,"batchingTexture",ht._matricesTexture,O),Se.setOptional(B,ht,"batchingIdTexture"),Se.setValue(B,"batchingIdTexture",ht._indirectTexture,O),Se.setOptional(B,ht,"batchingColorTexture"),ht._colorsTexture!==null&&Se.setValue(B,"batchingColorTexture",ht._colorsTexture,O));let ys=xt.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&Xt.update(ht,xt,mn),(on||Kt.receiveShadow!==ht.receiveShadow)&&(Kt.receiveShadow=ht.receiveShadow,Se.setValue(B,"receiveShadow",ht.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(wn.envMap.value=$t,wn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&lt.environment!==null&&(wn.envMapIntensity.value=lt.environmentIntensity),on&&(Se.setValue(B,"toneMappingExposure",y.toneMappingExposure),Kt.needsLights&&pu(wn,_s),Ut&&_t.fog===!0&&mt.refreshFogUniforms(wn,Ut),mt.refreshMaterialUniforms(wn,_t,tt,Z,p.state.transmissionRenderTarget[U.id]),rs.upload(B,Di(Kt),wn,O)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(rs.upload(B,Di(Kt),wn,O),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&Se.setValue(B,"center",ht.center),Se.setValue(B,"modelViewMatrix",ht.modelViewMatrix),Se.setValue(B,"normalMatrix",ht.normalMatrix),Se.setValue(B,"modelMatrix",ht.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){let hn=_t.uniformsGroups;for(let Jn=0,Kn=hn.length;Jn<Kn;Jn++){let nc=hn[Jn];R.update(nc,mn),R.bind(nc,mn)}}return mn}function pu(U,lt){U.ambientLightColor.needsUpdate=lt,U.lightProbe.needsUpdate=lt,U.directionalLights.needsUpdate=lt,U.directionalLightShadows.needsUpdate=lt,U.pointLights.needsUpdate=lt,U.pointLightShadows.needsUpdate=lt,U.spotLights.needsUpdate=lt,U.spotLightShadows.needsUpdate=lt,U.rectAreaLights.needsUpdate=lt,U.hemisphereLights.needsUpdate=lt}function mu(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,lt,xt){Nt.get(U.texture).__webglTexture=lt,Nt.get(U.depthTexture).__webglTexture=xt;let _t=Nt.get(U);_t.__hasExternalTextures=!0,_t.__autoAllocateDepthBuffer=xt===void 0,_t.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_t.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,lt){let xt=Nt.get(U);xt.__webglFramebuffer=lt,xt.__useDefaultFramebuffer=lt===void 0},this.setRenderTarget=function(U,lt=0,xt=0){D=U,F=lt,A=xt;let _t=!0,ht=null,Ut=!1,kt=!1;if(U){let $t=Nt.get(U);if($t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(B.FRAMEBUFFER,null),_t=!1;else if($t.__webglFramebuffer===void 0)O.setupRenderTarget(U);else if($t.__hasExternalTextures)O.rebindTextures(U,Nt.get(U.texture).__webglTexture,Nt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Zt=U.depthTexture;if($t.__boundDepthTexture!==Zt){if(Zt!==null&&Nt.has(Zt)&&(U.width!==Zt.image.width||U.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(U)}}let ie=U.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(kt=!0);let re=Nt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(re[lt])?ht=re[lt][xt]:ht=re[lt],Ut=!0):U.samples>0&&O.useMultisampledRTT(U)===!1?ht=Nt.get(U).__webglMultisampledFramebuffer:Array.isArray(re)?ht=re[xt]:ht=re,E.copy(U.viewport),T.copy(U.scissor),P=U.scissorTest}else E.copy(H).multiplyScalar(tt).floor(),T.copy(Rt).multiplyScalar(tt).floor(),P=Q;if(At.bindFramebuffer(B.FRAMEBUFFER,ht)&&_t&&At.drawBuffers(U,ht),At.viewport(E),At.scissor(T),At.setScissorTest(P),Ut){let $t=Nt.get(U.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+lt,$t.__webglTexture,xt)}else if(kt){let $t=Nt.get(U.texture),ie=lt||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,xt||0,ie)}b=-1},this.readRenderTargetPixels=function(U,lt,xt,_t,ht,Ut,kt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Nt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){At.bindFramebuffer(B.FRAMEBUFFER,Yt);try{let $t=U.texture,ie=$t.format,re=$t.type;if(!et.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}lt>=0&&lt<=U.width-_t&&xt>=0&&xt<=U.height-ht&&B.readPixels(lt,xt,_t,ht,qt.convert(ie),qt.convert(re),Ut)}finally{let $t=D!==null?Nt.get(D).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(U,lt,xt,_t,ht,Ut,kt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Nt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&kt!==void 0&&(Yt=Yt[kt]),Yt){let $t=U.texture,ie=$t.format,re=$t.type;if(!et.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(lt>=0&&lt<=U.width-_t&&xt>=0&&xt<=U.height-ht){At.bindFramebuffer(B.FRAMEBUFFER,Yt);let Zt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Zt),B.bufferData(B.PIXEL_PACK_BUFFER,Ut.byteLength,B.STREAM_READ),B.readPixels(lt,xt,_t,ht,qt.convert(ie),qt.convert(re),0);let he=D!==null?Nt.get(D).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,he);let Me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await vf(B,Me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Zt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ut),B.deleteBuffer(Zt),B.deleteSync(Me),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,lt=null,xt=0){U.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),lt=arguments[0]||null,U=arguments[1]);let _t=Math.pow(2,-xt),ht=Math.floor(U.image.width*_t),Ut=Math.floor(U.image.height*_t),kt=lt!==null?lt.x:0,Yt=lt!==null?lt.y:0;O.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,xt,0,0,kt,Yt,ht,Ut),At.unbindTexture()},this.copyTextureToTexture=function(U,lt,xt=null,_t=null,ht=0){U.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),_t=arguments[0]||null,U=arguments[1],lt=arguments[2],ht=arguments[3]||0,xt=null);let Ut,kt,Yt,$t,ie,re,Zt,he,Me,be=U.isCompressedTexture?U.mipmaps[ht]:U.image;xt!==null?(Ut=xt.max.x-xt.min.x,kt=xt.max.y-xt.min.y,Yt=xt.isBox3?xt.max.z-xt.min.z:1,$t=xt.min.x,ie=xt.min.y,re=xt.isBox3?xt.min.z:0):(Ut=be.width,kt=be.height,Yt=be.depth||1,$t=0,ie=0,re=0),_t!==null?(Zt=_t.x,he=_t.y,Me=_t.z):(Zt=0,he=0,Me=0);let tn=qt.convert(lt.format),fe=qt.convert(lt.type),Kt;lt.isData3DTexture?(O.setTexture3D(lt,0),Kt=B.TEXTURE_3D):lt.isDataArrayTexture||lt.isCompressedArrayTexture?(O.setTexture2DArray(lt,0),Kt=B.TEXTURE_2D_ARRAY):(O.setTexture2D(lt,0),Kt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,lt.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,lt.unpackAlignment);let Ln=B.getParameter(B.UNPACK_ROW_LENGTH),de=B.getParameter(B.UNPACK_IMAGE_HEIGHT),mn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ui=B.getParameter(B.UNPACK_SKIP_ROWS),on=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,be.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,be.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$t),B.pixelStorei(B.UNPACK_SKIP_ROWS,ie),B.pixelStorei(B.UNPACK_SKIP_IMAGES,re);let _s=U.isDataArrayTexture||U.isData3DTexture,Se=lt.isDataArrayTexture||lt.isData3DTexture;if(U.isRenderTargetTexture||U.isDepthTexture){let wn=Nt.get(U),ys=Nt.get(lt),hn=Nt.get(wn.__renderTarget),Jn=Nt.get(ys.__renderTarget);At.bindFramebuffer(B.READ_FRAMEBUFFER,hn.__webglFramebuffer),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Kn=0;Kn<Yt;Kn++)_s&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,ht,re+Kn),U.isDepthTexture?(Se&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.get(lt).__webglTexture,ht,Me+Kn),B.blitFramebuffer($t,ie,Ut,kt,Zt,he,Ut,kt,B.DEPTH_BUFFER_BIT,B.NEAREST)):Se?B.copyTexSubImage3D(Kt,ht,Zt,he,Me+Kn,$t,ie,Ut,kt):B.copyTexSubImage2D(Kt,ht,Zt,he,Me+Kn,$t,ie,Ut,kt);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Se?U.isDataTexture||U.isData3DTexture?B.texSubImage3D(Kt,ht,Zt,he,Me,Ut,kt,Yt,tn,fe,be.data):lt.isCompressedArrayTexture?B.compressedTexSubImage3D(Kt,ht,Zt,he,Me,Ut,kt,Yt,tn,be.data):B.texSubImage3D(Kt,ht,Zt,he,Me,Ut,kt,Yt,tn,fe,be):U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ht,Zt,he,Ut,kt,tn,fe,be.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ht,Zt,he,be.width,be.height,tn,be.data):B.texSubImage2D(B.TEXTURE_2D,ht,Zt,he,Ut,kt,tn,fe,be);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ln),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de),B.pixelStorei(B.UNPACK_SKIP_PIXELS,mn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ui),B.pixelStorei(B.UNPACK_SKIP_IMAGES,on),ht===0&&lt.generateMipmaps&&B.generateMipmap(Kt),At.unbindTexture()},this.copyTextureToTexture3D=function(U,lt,xt=null,_t=null,ht=0){return U.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),xt=arguments[0]||null,_t=arguments[1]||null,U=arguments[2],lt=arguments[3],ht=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,lt,xt,_t,ht)},this.initRenderTarget=function(U){Nt.get(U).__webglFramebuffer===void 0&&O.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?O.setTextureCube(U,0):U.isData3DTexture?O.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?O.setTexture2DArray(U,0):O.setTexture2D(U,0),At.unbindTexture()},this.resetState=function(){F=0,A=0,D=null,At.reset(),w.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var eo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},no=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},io=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qa,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$e=new z,ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hs=class extends Xn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zi,Es=new z,Ji=new z,Ki=new z,ji=new Ct,ws=new Ct,kh=new ue,wr=new z,Ts=new z,Tr=new z,ih=new Ct,la=new Ct,sh=new Ct,so=class extends Te{constructor(t=new Hs){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new ks(n,3,0,!1)),Zi.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),kh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ar(wr.set(-.5,-.5,0),Ki,o,Ji,s,r),Ar(Ts.set(.5,-.5,0),Ki,o,Ji,s,r),Ar(Tr.set(.5,.5,0),Ki,o,Ji,s,r),ih.set(0,0),la.set(1,0),sh.set(1,1);let a=t.ray.intersectTriangle(wr,Ts,Tr,!1,Es);if(a===null&&(Ar(Ts.set(-.5,.5,0),Ki,o,Ji,s,r),la.set(0,1),a=t.ray.intersectTriangle(wr,Tr,Ts,!1,Es),a===null))return;let l=t.ray.origin.distanceTo(Es);l<t.near||l>t.far||e.push({distance:l,point:Es.clone(),uv:ri.getInterpolation(Es,wr,Ts,Tr,ih,la,sh,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ar(i,t,e,n,s,r){ji.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ws.x=r*ji.x-s*ji.y,ws.y=s*ji.x+r*ji.y):ws.copy(ji),i.copy(t),i.x+=ws.x,i.y+=ws.y,i.applyMatrix4(kh)}var Vs=class extends en{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ke,h=Ke,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gs=class extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qi=new ue,rh=new ue,Rr=[],oh=new Wn,mg=new ue,As=new we,Rs=new hi,sn=class extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),oh.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(oh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Rs.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),rh.multiplyMatrices(n,Qi),As.matrixWorld=rh,As.raycast(t,Rr);for(let o=0,a=Rr.length;o<a;o++){let l=Rr[o];l.instanceId=r,l.object=this,e.push(l)}Rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vs(new Float32Array(s*this.count),s,this.count,Hl,Rn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ai=class extends Xn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ro=new z,oo=new z,ah=new ue,Cs=new Xr,Cr=new hi,ca=new z,lh=new z,gl=class extends Te{constructor(t=new _e,e=new Ai){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ro.fromBufferAttribute(e,s-1),oo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ro.distanceTo(oo);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,t.ray.intersectsSphere(Cr)===!1)return;ah.copy(s).invert(),Cs.copy(t.ray).applyMatrix4(ah);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let M=u,m=x-1;M<m;M+=c){let p=h.getX(M),S=h.getX(M+1),_=Ir(this,t,Cs,l,p,S);_&&e.push(_)}if(this.isLineLoop){let M=h.getX(x-1),m=h.getX(u),p=Ir(this,t,Cs,l,M,m);p&&e.push(p)}}else{let u=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let M=u,m=x-1;M<m;M+=c){let p=Ir(this,t,Cs,l,M,M+1);p&&e.push(p)}if(this.isLineLoop){let M=Ir(this,t,Cs,l,x-1,u);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ir(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(ro.fromBufferAttribute(o,s),oo.fromBufferAttribute(o,r),e.distanceSqToSegment(ro,oo,ca,lh)>n)return;ca.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ca);if(!(l<t.near||l>t.far))return{distance:l,point:lh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var ch=new z,hh=new z,fs=class extends gl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ch.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ch.distanceTo(hh);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ds=class extends en{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ct:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new z,s=[],r=[],o=[],a=new z,l=new ue;for(let u=0;u<=t;u++){let x=u/t;s[u]=this.getTangentAt(x,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(He(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,x))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(He(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],u*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ws=class extends dn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xl=class extends Ws{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $l(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Pr=new z,ha=new $l,ua=new $l,fa=new $l,Xs=class extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),c=Pr);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),u),M=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);M<1e-4&&(M=1),x<1e-4&&(x=M),m<1e-4&&(m=M),ha.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,x,M,m),ua.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,x,M,m),fa.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,x,M,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ua.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),fa.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(ha.calc(l),ua.calc(l),fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function gg(i,t){let e=1-i;return e*e*t}function xg(i,t){return 2*(1-i)*i*t}function _g(i,t){return i*i*t}function Ns(i,t,e,n){return gg(i,t)+xg(i,e)+_g(i,n)}function yg(i,t){let e=1-i;return e*e*e*t}function vg(i,t){let e=1-i;return 3*e*e*i*t}function Mg(i,t){return 3*(1-i)*i*i*t}function bg(i,t){return i*i*i*t}function Fs(i,t,e,n,s){return yg(i,t)+vg(i,e)+Mg(i,n)+bg(i,s)}var ao=class extends dn{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,s.x,r.x,o.x,a.x),Fs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_l=class extends dn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,s.x,r.x,o.x,a.x),Fs(t,s.y,r.y,o.y,a.y),Fs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends dn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends dn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends dn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends dn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y),Ns(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(uh(a,l.x,c.x,h.x,d.x),uh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},fo=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:Xs,CubicBezierCurve:ao,CubicBezierCurve3:_l,EllipseCurve:Ws,LineCurve:lo,LineCurve3:yl,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),vl=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fo[s.type]().fromJSON(s))}return this}},qs=class extends vl{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lo(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new co(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ao(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ws(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ys=class i extends _e{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new z,f=new Ct,u=new z,x=new z,M=new z,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,u.x=p*1,u.y=-m,u.z=p*0,M.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.x+=M.x,u.y+=M.y,u.z+=M.z,u.normalize(),l.push(u.x,u.y,u.z),M.copy(x)}for(let S=0;S<=e;S++){let _=n+S*h*s,y=Math.sin(_),W=Math.cos(_);for(let F=0;F<=t.length-1;F++){d.x=t[F].x*y,d.y=t[F].y,d.z=t[F].x*W,o.push(d.x,d.y,d.z),f.x=S/e,f.y=F/(t.length-1),a.push(f.x,f.y);let A=l[3*F+0]*y,D=l[3*F+1],b=l[3*F+0]*W;c.push(A,D,b)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){let y=_+S*t.length,W=y,F=y+t.length,A=y+t.length+1,D=y+1;r.push(W,F,D),r.push(A,D,F)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ui=class i extends Ys{constructor(t=1,e=1,n=4,s=8){let r=new qs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var ae=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],x=0,M=[],m=n/2,p=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(u,2));function S(){let y=new z,W=new z,F=0,A=(e-t)/n;for(let D=0;D<=r;D++){let b=[],g=D/r,E=g*(e-t)+t;for(let T=0;T<=s;T++){let P=T/s,k=P*l+a,K=Math.sin(k),L=Math.cos(k);W.x=E*K,W.y=-g*n+m,W.z=E*L,d.push(W.x,W.y,W.z),y.set(K,A,L).normalize(),f.push(y.x,y.y,y.z),u.push(P,1-g),b.push(x++)}M.push(b)}for(let D=0;D<s;D++)for(let b=0;b<r;b++){let g=M[b][D],E=M[b+1][D],T=M[b+1][D+1],P=M[b][D+1];(t>0||b!==0)&&(h.push(g,E,P),F+=3),(e>0||b!==r-1)&&(h.push(E,T,P),F+=3)}c.addGroup(p,F,0),p+=F}function _(y){let W=x,F=new Ct,A=new z,D=0,b=y===!0?t:e,g=y===!0?1:-1;for(let T=1;T<=s;T++)d.push(0,m*g,0),f.push(0,g,0),u.push(.5,.5),x++;let E=x;for(let T=0;T<=s;T++){let k=T/s*l+a,K=Math.cos(k),L=Math.sin(k);A.x=b*L,A.y=m*g,A.z=b*K,d.push(A.x,A.y,A.z),f.push(0,g,0),F.x=K*.5+.5,F.y=L*.5*g+.5,u.push(F.x,F.y),x++}for(let T=0;T<s;T++){let P=W+T,k=E+T;y===!0?h.push(k,k+1,P):h.push(k+1,k,P),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Le=class i extends ae{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ml=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new z,y=new z,W=new z;for(let F=0;F<e.length;F+=3)u(e[F+0],_),u(e[F+1],y),u(e[F+2],W),l(_,y,W,S)}function l(S,_,y,W){let F=W+1,A=[];for(let D=0;D<=F;D++){A[D]=[];let b=S.clone().lerp(y,D/F),g=_.clone().lerp(y,D/F),E=F-D;for(let T=0;T<=E;T++)T===0&&D===F?A[D][T]=b:A[D][T]=b.clone().lerp(g,T/E)}for(let D=0;D<F;D++)for(let b=0;b<2*(F-D)-1;b++){let g=Math.floor(b/2);b%2===0?(f(A[D][g+1]),f(A[D+1][g]),f(A[D][g])):(f(A[D][g+1]),f(A[D+1][g+1]),f(A[D+1][g]))}}function c(S){let _=new z;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(S),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let S=new z;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let y=m(S)/2/Math.PI+.5,W=p(S)/Math.PI+.5;o.push(y,1-W)}x(),d()}function d(){for(let S=0;S<o.length;S+=6){let _=o[S+0],y=o[S+2],W=o[S+4],F=Math.max(_,y,W),A=Math.min(_,y,W);F>.9&&A<.1&&(_<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),W<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function u(S,_){let y=S*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function x(){let S=new z,_=new z,y=new z,W=new z,F=new Ct,A=new Ct,D=new Ct;for(let b=0,g=0;b<r.length;b+=9,g+=6){S.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),F.set(o[g+0],o[g+1]),A.set(o[g+2],o[g+3]),D.set(o[g+4],o[g+5]),W.copy(S).add(_).add(y).divideScalar(3);let E=m(W);M(F,g+0,S,E),M(A,g+2,_,E),M(D,g+4,y,E)}}function M(S,_,y,W){W<0&&S.x===1&&(o[_]=S.x-1),y.x===0&&y.z===0&&(o[_]=W/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ri=class extends qs{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new qs().fromJSON(s))}return this}},Sg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,f,u;if(n&&(r=Rg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)d=i[x],f=i[x+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return $s(r,o,e,a,l,u,0),o}};function Hh(i,t,e,n,s){let r,o;if(s===Bg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=fh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=fh(r,i[r],i[r+1],o);return o&&To(o,o.next)&&(Js(o),o=o.next),o}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(To(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Dg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?wg(i,n,s,r):Eg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Js(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Tg(Ci(i),t,e),$s(i,t,e,n,s,r,2)):o===2&&Ag(i,t,e,n,s,r):$s(Ci(i),t,e,n,s,r,1);break}}}function Eg(i){let t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=d&&x.y<=u&&es(s,a,r,l,o,c,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function wg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ae(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,u=a<l?a<c?a:c:l<c?l:c,x=h<d?h<f?h:f:d<f?d:f,M=a>l?a>c?a:c:l>c?l:c,m=h>d?h>f?h:f:d>f?d:f,p=bl(u,x,t,e,n),S=bl(M,m,t,e,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=p&&y&&y.z<=S;){if(_.x>=u&&_.x<=M&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&es(a,h,l,d,c,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=u&&y.x<=M&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&es(a,h,l,d,c,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=M&&_.y>=x&&_.y<=m&&_!==s&&_!==o&&es(a,h,l,d,c,f,_.x,_.y)&&Ae(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=S;){if(y.x>=u&&y.x<=M&&y.y>=x&&y.y<=m&&y!==s&&y!==o&&es(a,h,l,d,c,f,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Tg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!To(s,r)&&Vh(s,n,n.next,r)&&Zs(s,r)&&Zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Js(n),Js(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function Ag(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fg(o,a)){let l=Gh(o,a);o=Ci(o,o.next),l=Ci(l,l.next),$s(o,t,e,n,s,r,0),$s(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Hh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ng(c));for(s.sort(Cg),r=0;r<s.length;r++)e=Ig(s[r],e);return e}function Cg(i,t){return i.x-t.x}function Ig(i,t){let e=Pg(i,t);if(!e)return t;let n=Gh(e,i);return Ci(n,n.next),Ci(e,e.next)}function Pg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&es(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Zs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Lg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Lg(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function Dg(i,t,e,n){let s=i;do s.z===0&&(s.z=bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ug(s)}function Ug(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ng(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function es(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Fg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Og(i,t)&&(Zs(i,t)&&Zs(t,i)&&zg(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||To(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function To(i,t){return i.x===t.x&&i.y===t.y}function Vh(i,t,e,n){let s=Dr(Ae(i,t,e)),r=Dr(Ae(i,t,n)),o=Dr(Ae(e,n,i)),a=Dr(Ae(e,n,t));return!!(s!==r&&o!==a||s===0&&Lr(i,e,t)||r===0&&Lr(i,n,t)||o===0&&Lr(e,i,n)||a===0&&Lr(e,t,n))}function Lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Dr(i){return i>0?1:i<0?-1:0}function Og(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function zg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gh(i,t){let e=new Sl(i.i,i.x,i.y),n=new Sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fh(i,t,e,n){let s=new Sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dh(t),ph(n,t);let o=t.length;e.forEach(dh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ph(n,e[l]);let a=Sg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var po=class i extends _e{constructor(t=new Ri([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:u-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:kg,_,y=!1,W,F,A,D;p&&(_=p.getSpacedPoints(h),y=!0,f=!1,W=p.computeFrenetFrames(h,!1),F=new z,A=new z,D=new z),f||(m=0,u=0,x=0,M=0);let b=a.extractPoints(c),g=b.shape,E=b.holes;if(!ai.isClockWise(g)){g=g.reverse();for(let st=0,pt=E.length;st<pt;st++){let B=E[st];ai.isClockWise(B)&&(E[st]=B.reverse())}}let P=ai.triangulateShape(g,E),k=g;for(let st=0,pt=E.length;st<pt;st++){let B=E[st];g=g.concat(B)}function K(st,pt,B){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(pt,B)}let L=g.length,Z=P.length;function tt(st,pt,B){let Et,Mt,et,At=st.x-pt.x,Ht=st.y-pt.y,Nt=B.x-st.x,O=B.y-st.y,C=At*At+Ht*Ht,dt=At*O-Ht*Nt;if(Math.abs(dt)>Number.EPSILON){let nt=Math.sqrt(C),it=Math.sqrt(Nt*Nt+O*O),rt=pt.x-Ht/nt,vt=pt.y+At/nt,mt=B.x-O/it,It=B.y+Nt/it,Pt=((mt-rt)*O-(It-vt)*Nt)/(At*O-Ht*Nt);Et=rt+At*Pt-st.x,Mt=vt+Ht*Pt-st.y;let bt=Et*Et+Mt*Mt;if(bt<=2)return new Ct(Et,Mt);et=Math.sqrt(bt/2)}else{let nt=!1;At>Number.EPSILON?Nt>Number.EPSILON&&(nt=!0):At<-Number.EPSILON?Nt<-Number.EPSILON&&(nt=!0):Math.sign(Ht)===Math.sign(O)&&(nt=!0),nt?(Et=-Ht,Mt=At,et=Math.sqrt(C)):(Et=At,Mt=Ht,et=Math.sqrt(C/2))}return new Ct(Et/et,Mt/et)}let ct=[];for(let st=0,pt=k.length,B=pt-1,Et=st+1;st<pt;st++,B++,Et++)B===pt&&(B=0),Et===pt&&(Et=0),ct[st]=tt(k[st],k[B],k[Et]);let ft=[],H,Rt=ct.concat();for(let st=0,pt=E.length;st<pt;st++){let B=E[st];H=[];for(let Et=0,Mt=B.length,et=Mt-1,At=Et+1;Et<Mt;Et++,et++,At++)et===Mt&&(et=0),At===Mt&&(At=0),H[Et]=tt(B[Et],B[et],B[At]);ft.push(H),Rt=Rt.concat(H)}for(let st=0;st<m;st++){let pt=st/m,B=u*Math.cos(pt*Math.PI/2),Et=x*Math.sin(pt*Math.PI/2)+M;for(let Mt=0,et=k.length;Mt<et;Mt++){let At=K(k[Mt],ct[Mt],Et);Y(At.x,At.y,-B)}for(let Mt=0,et=E.length;Mt<et;Mt++){let At=E[Mt];H=ft[Mt];for(let Ht=0,Nt=At.length;Ht<Nt;Ht++){let O=K(At[Ht],H[Ht],Et);Y(O.x,O.y,-B)}}}let Q=x+M;for(let st=0;st<L;st++){let pt=f?K(g[st],Rt[st],Q):g[st];y?(A.copy(W.normals[0]).multiplyScalar(pt.x),F.copy(W.binormals[0]).multiplyScalar(pt.y),D.copy(_[0]).add(A).add(F),Y(D.x,D.y,D.z)):Y(pt.x,pt.y,0)}for(let st=1;st<=h;st++)for(let pt=0;pt<L;pt++){let B=f?K(g[pt],Rt[pt],Q):g[pt];y?(A.copy(W.normals[st]).multiplyScalar(B.x),F.copy(W.binormals[st]).multiplyScalar(B.y),D.copy(_[st]).add(A).add(F),Y(D.x,D.y,D.z)):Y(B.x,B.y,d/h*st)}for(let st=m-1;st>=0;st--){let pt=st/m,B=u*Math.cos(pt*Math.PI/2),Et=x*Math.sin(pt*Math.PI/2)+M;for(let Mt=0,et=k.length;Mt<et;Mt++){let At=K(k[Mt],ct[Mt],Et);Y(At.x,At.y,d+B)}for(let Mt=0,et=E.length;Mt<et;Mt++){let At=E[Mt];H=ft[Mt];for(let Ht=0,Nt=At.length;Ht<Nt;Ht++){let O=K(At[Ht],H[Ht],Et);y?Y(O.x,O.y+_[h-1].y,_[h-1].x+B):Y(O.x,O.y,d+B)}}}q(),V();function q(){let st=s.length/3;if(f){let pt=0,B=L*pt;for(let Et=0;Et<Z;Et++){let Mt=P[Et];ot(Mt[2]+B,Mt[1]+B,Mt[0]+B)}pt=h+m*2,B=L*pt;for(let Et=0;Et<Z;Et++){let Mt=P[Et];ot(Mt[0]+B,Mt[1]+B,Mt[2]+B)}}else{for(let pt=0;pt<Z;pt++){let B=P[pt];ot(B[2],B[1],B[0])}for(let pt=0;pt<Z;pt++){let B=P[pt];ot(B[0]+L*h,B[1]+L*h,B[2]+L*h)}}n.addGroup(st,s.length/3-st,0)}function V(){let st=s.length/3,pt=0;G(k,pt),pt+=k.length;for(let B=0,Et=E.length;B<Et;B++){let Mt=E[B];G(Mt,pt),pt+=Mt.length}n.addGroup(st,s.length/3-st,1)}function G(st,pt){let B=st.length;for(;--B>=0;){let Et=B,Mt=B-1;Mt<0&&(Mt=st.length-1);for(let et=0,At=h+m*2;et<At;et++){let Ht=L*et,Nt=L*(et+1),O=pt+Et+Ht,C=pt+Mt+Ht,dt=pt+Mt+Nt,nt=pt+Et+Nt;yt(O,C,dt,nt)}}}function Y(st,pt,B){l.push(st),l.push(pt),l.push(B)}function ot(st,pt,B){Tt(st),Tt(pt),Tt(B);let Et=s.length/3,Mt=S.generateTopUV(n,s,Et-3,Et-2,Et-1);wt(Mt[0]),wt(Mt[1]),wt(Mt[2])}function yt(st,pt,B,Et){Tt(st),Tt(pt),Tt(Et),Tt(pt),Tt(B),Tt(Et);let Mt=s.length/3,et=S.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);wt(et[0]),wt(et[1]),wt(et[3]),wt(et[1]),wt(et[2]),wt(et[3])}function Tt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function wt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fo[s.type]().fromJSON(s)),new i(n,t.options)}},kg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Ct(r,o),new Ct(a,l),new Ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],u=t[s*3+1],x=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ct(o,1-l),new Ct(c,1-d),new Ct(f,1-x),new Ct(M,1-p)]:[new Ct(a,1-l),new Ct(h,1-d),new Ct(u,1-x),new Ct(m,1-p)]}};function Hg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qe=class i extends Ml{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var mo=class i extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/s,u=new z,x=new Ct;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let p=r+m/n*o;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),x.x=(u.x/e+1)/2,x.y=(u.y/e+1)/2,h.push(x.x,x.y)}d+=f}for(let M=0;M<s;M++){let m=M*(n+1);for(let p=0;p<n;p++){let S=p+m,_=S,y=S+n+1,W=S+n+2,F=S+1;a.push(_,y,F),a.push(y,W,F)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},go=class i extends _e{constructor(t=new Ri([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(h){let d=s.length/3,f=h.extractPoints(e),u=f.shape,x=f.holes;ai.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=x.length;m<p;m++){let S=x[m];ai.isClockWise(S)===!0&&(x[m]=S.reverse())}let M=ai.triangulateShape(u,x);for(let m=0,p=x.length;m<p;m++){let S=x[m];u=u.concat(S)}for(let m=0,p=u.length;m<p;m++){let S=u[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=M.length;m<p;m++){let S=M[m],_=S[0]+d,y=S[1]+d,W=S[2]+d;n.push(_,y,W),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Vg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Vg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ge=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new z,f=new z,u=[],x=[],M=[],m=[];for(let p=0;p<=n;p++){let S=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let W=0;W<=e;W++){let F=W/e;d.x=-t*Math.cos(s+F*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+F*r)*Math.sin(o+_*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(F+y,1-_),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let _=h[p][S+1],y=h[p][S],W=h[p+1][S],F=h[p+1][S+1];(p!==0||o>0)&&u.push(_,y,F),(p!==n-1||l<Math.PI)&&u.push(y,W,F)}this.setIndex(u),this.setAttribute("position",new te(x,3)),this.setAttribute("normal",new te(M,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qe=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new z,d=new z,f=new z;for(let u=0;u<=n;u++)for(let x=0;x<=s;x++){let M=x/s*r,m=u/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let x=1;x<=s;x++){let M=(s+1)*u+x-1,m=(s+1)*(u-1)+x-1,p=(s+1)*(u-1)+x,S=(s+1)*u+x;o.push(M,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xo=class i extends _e{constructor(t=new ho(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,l=new z,c=new Ct,h=new z,d=[],f=[],u=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(u,2));function M(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),S(),p()}function m(_){h=t.getPointAt(_/e,h);let y=o.normals[_],W=o.binormals[_];for(let F=0;F<=s;F++){let A=F/s*Math.PI*2,D=Math.sin(A),b=-Math.cos(A);l.x=b*y.x+D*W.x,l.y=b*y.y+D*W.y,l.z=b*y.z+D*W.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){let W=(s+1)*(_-1)+(y-1),F=(s+1)*_+(y-1),A=(s+1)*_+y,D=(s+1)*(_-1)+y;x.push(W,F,D),x.push(F,A,D)}}function S(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var _o=class extends Xn{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Jt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Ur(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lc:r=t,a=2*e-n;break;case cc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:o=t,l=2*n-e;break;case cc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,x=(n-e)/(s-e),M=x*x,m=M*x,p=-f*m+2*f*M-f*x,S=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*x+1,_=(-1-u)*m+(1.5+u)*M+.5*x,y=u*m-u*M;for(let W=0;W!==a;++W)r[W]=p*o[h+W]+S*o[c+W]+_*o[l+W]+y*o[d+W];return r}},wl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Tl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case ja:e=this.InterpolantFactoryMethodLinear;break;case No:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Gg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let x=0;x!==n;++x){let M=e[d+x];if(M!==e[f+x]||M!==e[u+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ja;var Ii=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=kr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Mn{};Al.prototype.ValueTypeName="color";var Rl=class extends Mn{};Rl.prototype.ValueTypeName="number";var Cl=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},yo=class extends Mn{InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=kr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Mn{};Il.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],x=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return x}return null}}},Wg=new Pl,Ll=class{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var vo=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Mo=class extends vo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},da=new ue,mh=new z,gh=new z,Dl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ul=class extends Dl{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Zl="\\[\\]\\.:\\/",Xg=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",qg="[^"+Zl.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",Jl),$g=/(WCOD+)?/.source.replace("WCOD",qg),Zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Kg=new RegExp("^"+Yg+$g+Zg+Jg+"$"),jg=["material","materials","bones","map"],Nl=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){let e=Kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Nl;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);var Qg=2.3,Ce=7.2,Ao=.16,fi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Wh(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=Q=>{let q=Math.max(0,Math.min(s,Q/r)),V=Math.min(s-1,Math.floor(q)),G=q-V,Y=n[Math.max(0,V-1)],ot=n[V],yt=n[V+1],Tt=n[Math.min(s,V+2)],wt=st=>.5*(2*ot[st]+(-Y[st]+yt[st])*G+(2*Y[st]-5*ot[st]+4*yt[st]-Tt[st])*G*G+(-Y[st]+3*ot[st]-3*yt[st]+Tt[st])*G*G*G);return[wt(0),wt(2),ot[1]+(yt[1]-ot[1])*G]},a=Q=>{if(Q<=i.lengthM)return o(Q);let q=o(i.lengthM-20),V=o(i.lengthM),G=(Q-i.lengthM)/20;return[V[0]+(V[0]-q[0])*G,V[1]+(V[1]-q[1])*G,V[2]]},l=2700,c=2585,h=i.overlaps.filter(([Q,q])=>q>Q).sort((Q,q)=>Q[1]-q[1]),d=Q=>{for(let G=0;G<h.length-1;G++){let[Y,ot]=h[G],[yt,Tt]=h[G+1];if(Q<=Tt)return Y+(Q-ot)*(yt-Y)/(Tt-ot)}let[q,V]=h.at(-1);return q+(Q-V)},f=[];for(let Q=0;Q<=l;Q+=2)f.push([Q,...o(Q)]);let u=2600,x=4900,M=[];for(let Q=u;Q<=x;Q+=10){let q=o(Q),V=d(Q),G=V,Y=1e9;for(let ot of f){if(Math.abs(ot[0]-V)>60)continue;let yt=(ot[1]-q[0])**2+(ot[2]-q[1])**2;yt<Y&&(Y=yt,G=ot[0])}M.push(G)}let m=M.map((Q,q)=>{let V=0,G=0;for(let Y=-3;Y<=3;Y++){let ot=q+Y;ot>=0&&ot<M.length&&(V+=M[ot],G++)}return V/G});for(let Q=1;Q<m.length;Q++)m[Q]=Math.max(m[Q],m[Q-1]+.5);let p=Q=>{let q=(Q-u)/10,V=Math.max(0,Math.min(m.length-2,Math.floor(q))),G=q-V;return m[V]+(m[V+1]-m[V])*G},S={};for(let Q of e?.runners||[])Q.diversions&&(S[Q.id]=Q.diversions.map(q=>{let V=q.path,G=[0];for(let Y=1;Y<V.length;Y++)G.push(G[Y-1]+Math.hypot(V[Y][0]-V[Y-1][0],V[Y][1]-V[Y-1][1]));return{...q,cum:G,len:G.at(-1)}}));let _=(Q,q)=>{let V=Math.max(0,Math.min(1,(q-Q.fromM)/(Q.toM-Q.fromM)))*Q.len,G=0;for(;G<Q.cum.length-2&&Q.cum[G+1]<V;)G++;let Y=(V-Q.cum[G])/Math.max(1e-6,Q.cum[G+1]-Q.cum[G]);return[Q.path[G][0]+(Q.path[G+1][0]-Q.path[G][0])*Y,Q.path[G][1]+(Q.path[G+1][1]-Q.path[G][1])*Y]};function y(Q){if(Q<u-60){let Y=a(Q);return[Y[0],Y[1]]}let q=a(Q);if(Q>=x+40)return[q[0],q[1]];let V=fi(u-60,u+60,Q)*(1-fi(x-60,x,Q));if(V<=0)return[q[0],q[1]];let G=o(Math.min(l,p(Math.max(u,Math.min(x,Q)))));return[q[0]+(G[0]-q[0])*V,q[1]+(G[1]-q[1])*V]}function W(Q,q){let V=y(Q),G=q&&S[q];if(G){for(let Y of G)if(Q>Y.fromM&&Q<Y.toM){let ot=fi(Y.fromM,Y.fromM+30,Q)*(1-fi(Y.toM-30,Y.toM,Q)),yt=_(Y,Q);return V=[V[0]+(yt[0]-V[0])*ot,V[1]+(yt[1]-V[1])*ot],{x:V[0],z:V[1],div:ot,divInfo:Y}}}return{x:V[0],z:V[1],div:0,divInfo:null}}let[F,A,D,b]=t.bounds,g={x0:F-60,z0:A-60,cell:5};g.nx=Math.ceil((D+60-g.x0)/g.cell)+1,g.nz=Math.ceil((b+60-g.z0)/g.cell)+1,g.h=new Float32Array(g.nx*g.nz);let E=[];for(let Q=0;Q<=s;Q+=2)E.push(n[Q]);let T=0;for(let Q of E)T+=Q[1];T/=E.length;let P=(Q,q)=>Math.sin(Q*.011+1.3)*Math.cos(q*.009-.4)*2.2+Math.sin(Q*.027+q*.019)*.9;for(let Q=0;Q<g.nz;Q++)for(let q=0;q<g.nx;q++){let V=g.x0+q*g.cell,G=g.z0+Q*g.cell,Y=0,ot=0,yt=1e9;for(let st of E){let pt=(st[0]-V)**2+(st[2]-G)**2;pt<yt&&(yt=pt);let B=1/(pt+400),Et=B*B;Y+=Et,ot+=Et*st[1]}let Tt=fi(30,160,Math.sqrt(yt)),wt=ot/Y*(1-Tt*.4)+T*Tt*.4+P(V,G)*Tt;g.h[Q*g.nx+q]=wt*Qg}let k=t.features.filter(Q=>Q.closed&&["water","track","tennis","pitch"].includes(Q.kind)&&Q.pts.length>3);for(let Q of k){let q=Yn(Q.pts),V=[];for(let ot=Math.max(0,Math.floor((q[1]-12-g.z0)/g.cell));ot<=Math.min(g.nz-1,Math.ceil((q[3]+12-g.z0)/g.cell));ot++)for(let yt=Math.max(0,Math.floor((q[0]-12-g.x0)/g.cell));yt<=Math.min(g.nx-1,Math.ceil((q[2]+12-g.x0)/g.cell));yt++){let Tt=g.x0+yt*g.cell,wt=g.z0+ot*g.cell,st=js(Q.pts,Tt,wt);st<12&&V.push([ot*g.nx+yt,st])}let G=0,Y=0;for(let[ot,yt]of V)yt<0&&(G+=g.h[ot],Y++);if(Y){G/=Y,Q.kind==="water"&&(G=Math.min(...V.filter(ot=>ot[1]<0).map(ot=>g.h[ot[0]]))-.2),Q._level=G;for(let[ot,yt]of V){let Tt=1-fi(0,12,yt);g.h[ot]=g.h[ot]*(1-Tt)+G*Tt-(Q.kind==="water"?1.6*(1-fi(-6,0,yt)):0)}}}{for(let wt=0;wt<3;wt++){let st=new Float32Array(g.h);for(let pt=1;pt<g.nz-1;pt++)for(let B=1;B<g.nx-1;B++){let Et=pt*g.nx+B;st[Et]=(g.h[Et]*4+g.h[Et-1]+g.h[Et+1]+g.h[Et-g.nx]+g.h[Et+g.nx])/8}g.h.set(st)}let Q=new Float32Array(g.nx*g.nz).fill(1e9),q=new Float32Array(g.nx*g.nz),V=new Float32Array(g.nx*g.nz),G=(wt,st)=>g.h[st*g.nx+wt],Y=(wt,st)=>{let pt=Math.round((wt-g.x0)/g.cell),B=Math.round((st-g.z0)/g.cell);return G(Math.max(0,Math.min(g.nx-1,pt)),Math.max(0,Math.min(g.nz-1,B)))},ot=[[0,c],[2540,2690],[x-80,i.lengthM+45]],yt=[];for(let[wt,st]of ot)for(let pt=wt;pt<=st;pt+=2){let B=y(pt);yt.push([B[0],B[1],Y(B[0],B[1])])}for(let wt=0;wt<4;wt++)for(let st=1;st<yt.length-1;st++)yt[st][2]=(yt[st-1][2]+yt[st][2]*2+yt[st+1][2])/4;let Tt=Ce/2+7;for(let[wt,st,pt]of yt){let B=Math.floor((wt-Tt-g.x0)/g.cell),Et=Math.ceil((wt+Tt-g.x0)/g.cell),Mt=Math.floor((st-Tt-g.z0)/g.cell),et=Math.ceil((st+Tt-g.z0)/g.cell);for(let At=Math.max(0,Mt);At<=Math.min(g.nz-1,et);At++)for(let Ht=Math.max(0,B);Ht<=Math.min(g.nx-1,Et);Ht++){let Nt=Math.hypot(g.x0+Ht*g.cell-wt,g.z0+At*g.cell-st);if(Nt>Tt)continue;let O=At*g.nx+Ht,C=(1-Nt/Tt)**2;q[O]+=C,V[O]+=C*pt,Nt<Q[O]&&(Q[O]=Nt)}}for(let wt=0;wt<Q.length;wt++)if(Q[wt]<Tt&&q[wt]>0){let st=1-fi(Ce/2+.5,Tt,Q[wt]);g.h[wt]=g.h[wt]*(1-st)+V[wt]/q[wt]*st}g.pathSamples=yt}let K=k.filter(Q=>Q.kind==="water").sort((Q,q)=>q.pts.length-Q.pts.length)[0];function L(Q,q){let V=(Q-g.x0)/g.cell,G=(q-g.z0)/g.cell,Y=Math.max(0,Math.min(g.nx-2,Math.floor(V))),ot=Math.max(0,Math.min(g.nz-2,Math.floor(G))),yt=Math.max(0,Math.min(1,V-Y)),Tt=Math.max(0,Math.min(1,G-ot)),wt=g.h[ot*g.nx+Y],st=g.h[ot*g.nx+Y+1],pt=g.h[(ot+1)*g.nx+Y],B=g.h[(ot+1)*g.nx+Y+1];return yt+Tt<=1?wt+(st-wt)*yt+(pt-wt)*Tt:B+(pt-B)*(1-yt)+(st-B)*(1-Tt)}let Z=new z;function tt(Q,q,V={}){let G=W(Q,q),Y=Math.max(0,Q-4),ot=Y+8,yt=W(Y,q),Tt=W(ot,q),wt=Tt.x-yt.x,st=Tt.z-yt.z,pt=Math.hypot(wt,st)||1;return wt/=pt,st/=pt,V.x=G.x,V.z=G.z,V.y=L(G.x,G.z)+Ao,V.tx=wt,V.tz=st,V.rx=-st,V.rz=wt,V.slope=(L(Tt.x,Tt.z)-L(yt.x,yt.z))/Math.max(1,pt),V.div=G.div,V.divInfo=G.divInfo,V}function ct(Q,q=25){let V=Math.max(0,Q-q),G=y(V),Y=y(V+2*q),ot=Math.hypot(Y[0]-G[0],Y[1]-G[1])||1;return Z.set((Y[0]-G[0])/ot,0,(Y[1]-G[1])/ot).clone()}let ft=[{from:0,to:c,lift:0},{from:2540,to:2690,lift:.02},{from:x-80,to:i.lengthM+45,lift:.035}],H=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:y,LAP1_END_DRAW:c,xzAt:W,sample:tt,heading:ct,heightAt:L,terrain:g,ribbons:ft,finishM:H,lake:K,flat:k,geoOf:Q=>Q>=u&&Q<=x?p(Q):Q,diversions:S,LAP1_END:l,MAP_FROM:u,MAP_TO:x}}function Yn(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function Ro(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function js(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,c]=i[s],h=l-o,d=c-a,f=h*h+d*d||1,u=Math.max(0,Math.min(1,((t-o)*h+(e-a)*d)/f));n=Math.min(n,Math.hypot(t-o-h*u,e-a-d*u))}return Ro(i,t,e)?-n:n}function rn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<i.length;++h){let d=i[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let x=0;x<u.count;++x)d.push(u.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Xh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let M=0;M<o[h].length;++M)u.push(o[h][M][f]);let x=Xh(u);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Xh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Re(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let x=0;x<e;x++){let M=h.getComponent(f,x);a.setComponent(f+d,x,M)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Qs=new z;function pn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Qs.copy(t),Qs[n]=0,Qs.normalize();let c=.5*o/(o+a),h=1-Qs.angleTo(i)/l;return Math.sign(Qs[e])===1?h*c:a/(o+a)+c+c*(1-h)}var le=class extends ye{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new z,l=new z,c=new z(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,u=h.length/6,x=new z,M=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/u)){case 0:x.set(1,0,0),f[p+0]=pn(x,l,"z","y",r,n),f[p+1]=1-pn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[p+0]=1-pn(x,l,"z","y",r,n),f[p+1]=1-pn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[p+0]=1-pn(x,l,"x","z",r,t),f[p+1]=pn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[p+0]=1-pn(x,l,"x","z",r,t),f[p+1]=1-pn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[p+0]=1-pn(x,l,"x","y",r,t),f[p+1]=1-pn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[p+0]=pn(x,l,"x","y",r,t),f[p+1]=1-pn(x,l,"y","x",r,e);break}}};var di=null;function tx(){if(di)return di;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),di=new Vs(t,i.length,1,cn),di.minFilter=di.magFilter=Ke,di.generateMipmaps=!1,di.needsUpdate=!0,di}var tr=new Map;function gt(i,t={}){let e=typeof i=="number"||typeof i=="string"?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&tr.has(e))return tr.get(e);let n=new _o({color:new Jt(i??16777215),gradientMap:tx(),...t});return e&&!t.map&&tr.set(e,n),n}function qh(){for(let i of tr.values())i.dispose();tr.clear(),er.forEach(i=>i.dispose()),er.clear()}var Kl={uRes:{value:new Ct(1920,1080)}},er=new Map;function ex(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(er.has(n))return er.get(n);let s=new je({uniforms:{...ql.clone(zt.fog),uRes:Kl.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new Jt(t)}},vertexShader:`
      attribute vec3 onormal;
      uniform vec2 uRes; uniform float uWidth; uniform float uRef;
      #include <fog_pars_vertex>
      void main() {
        mat4 m = modelMatrix;
        #ifdef USE_INSTANCING
          m = modelMatrix * instanceMatrix;
        #endif
        vec4 wp = m * vec4(position, 1.0);
        vec3 wn = normalize(mat3(m) * onormal);
        vec4 clip = projectionMatrix * viewMatrix * wp;
        vec4 clipN = projectionMatrix * viewMatrix * vec4(wp.xyz + wn * 0.05, 1.0);
        vec2 dir = clipN.xy / clipN.w - clip.xy / clip.w;
        float l = length(dir);
        dir = l > 1e-6 ? dir / l : vec2(0.0);
        float k = clamp(uRef / max(clip.w, 0.1), 0.18, 1.0);
        float px = uWidth * k * (uRes.y / 1080.0);
        clip.xy += dir * px * 2.0 / uRes * clip.w;
        clip.z += 0.0004 * clip.w;
        gl_Position = clip;
        vec4 mvPosition = viewMatrix * wp;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uColor;
      #include <fog_pars_fragment>
      void main() { gl_FragColor = vec4(uColor, 1.0);
        #include <fog_fragment>
      }`,side:Ve,fog:!0});return er.set(n,s),s}function jl(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),c=n.get(l);c||(c=[0,0,0],n.set(l,c)),c[0]+=e.getX(a),c[1]+=e.getY(a),c[2]+=e.getZ(a),r.push(c)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}return i.setAttribute("onormal",new Re(o,3)),i}function Li(i,t=3,e,n){jl(i.geometry);let s=ex(t,e,n),r;return i.isInstancedMesh?(r=new sn(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new we(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function pe(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new we(i,t);return a.castShadow=e,a.receiveShadow=n,s&&Li(a,s,r,o),a}function Ye(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new ds(o);return s&&(l.colorSpace=ke),n&&(l.wrapS=l.wrapT=wi),l.anisotropy=r,l}var Ql='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',Gt=bn(20240817);function bn(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function $n(i,t,e,n){let s=Ye(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function Ge(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${Ql}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function $h(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new ne;i.add(a);let l=w=>(a.add(w),w),c=t.terrain,h=(c.nx-1)*c.cell,d=(c.nz-1)*c.cell,f=new Map,u=6,x=(w,R)=>`${Math.floor(w/u)},${Math.floor(R/u)}`,M=(w,R,J)=>{let v=x(w,R),I=f.get(v);I||f.set(v,I=[]),I.push([w,R,J])},m=(w,R,J)=>{let v=Math.floor(w/u),I=Math.floor(R/u),N=Math.ceil((J+30)/u);for(let $=-N;$<=N;$++)for(let at=-N;at<=N;at++){let X=f.get(`${v+$},${I+at}`);if(X){for(let[j,ut,St]of X)if((j-w)**2+(ut-R)**2<(St+J)**2)return!1}}return!0},p=[];for(let w of t.ribbons)for(let R=w.from;R<=w.to;R+=3){let J=t.baseXZ(R);p.push(J),M(J[0],J[1],Ce/2+1.5)}for(let w in t.diversions)for(let R of t.diversions[w])for(let J of R.path)M(J[0],J[1],4);let S=s.features.filter(w=>w.kind==="park").sort((w,R)=>R.pts.length-w.pts.length)[0].pts,_=(w,R)=>Ro(S,w,R),W=s.features.filter(w=>w.closed&&["water","track","tennis","pitch","playground","building"].includes(w.kind)).map(w=>[Yn(w.pts),w]),F=(w,R,J=2)=>W.some(([v,I])=>w>v[0]-J&&w<v[2]+J&&R>v[1]-J&&R<v[3]+J&&js(I.pts,w,R)<J),A=1.7,D=Ye(Math.round(h*A),Math.round(d*A),(w,R,J)=>b(w,R,J),{aniso:8});o.push(D);function b(w,R,J){let v=X=>(X-c.x0)*A,I=X=>(X-c.z0)*A,N=(X,j=!0)=>{w.beginPath(),X.forEach((ut,St)=>St?w.lineTo(v(ut[0]),I(ut[1])):w.moveTo(v(ut[0]),I(ut[1]))),j&&w.closePath()};w.fillStyle="#d8d2c2",w.fillRect(0,0,R,J);for(let X=0;X<9e3;X++)w.fillStyle=Gt()<.5?"#cfc8b6":"#e2dccd",w.fillRect(Gt()*R,Gt()*J,3,3);N(S),w.fillStyle="#66cf45",w.fill(),w.save(),N(S),w.clip(),w.translate(R/2,J/2),w.rotate(-.62);for(let X=-2e3;X<2e3;X+=2*14*A)w.fillStyle="rgba(255,255,140,0.10)",w.fillRect(X,-2500,14*A,5e3);w.setTransform(1,0,0,1,0,0);for(let X=0;X<26e3;X++){let j=Gt()*R,ut=Gt()*J;w.fillStyle=Gt()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",w.fillRect(j,ut,2+Gt()*2,2+Gt()*3)}w.restore();let $=(X,j,ut)=>{for(let St of s.features)St.kind===X&&St.closed&&(N(St.pts),w.fillStyle=j,w.fill(),ut&&(w.strokeStyle=ut,w.lineWidth=2,w.stroke()))};$("grass","#72d64e"),$("garden","#86dc5c"),$("wood","#3f9e3a"),$("scrub","#5cb544");for(let X of s.features)if(X.kind==="pitch"&&X.closed){w.save(),N(X.pts),w.clip(),w.fillStyle="#5ccc3f",w.fill();let j=Yn(X.pts);for(let ut=j[0];ut<j[2];ut+=8)w.fillStyle="rgba(255,255,255,0.10)",w.fillRect(v(ut),I(j[1]),4*A,(j[3]-j[1])*A);w.restore(),N(X.pts),w.strokeStyle="#ffffff",w.lineWidth=2.2,w.stroke()}$("playground","#ffa25a","#e07a35");for(let X of s.features)if(X.kind==="playground"&&X.closed){let j=Yn(X.pts);for(let ut=0;ut<6;ut++)w.beginPath(),w.arc(v(j[0]+Gt()*(j[2]-j[0])),I(j[1]+Gt()*(j[3]-j[1])),3*A,0,7),w.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][ut%3],w.fill()}for(let X of s.features)if(X.kind==="track"&&X.closed){w.save(),N(X.pts),w.clip(),w.fillStyle="#5ccc3f",w.fill();let j=11*A;for(let ut=6;ut>=0;ut--){let St=ut/6*j;N(X.pts),w.lineJoin="round",w.strokeStyle="#ffffff",w.lineWidth=2*St+2.4,w.stroke(),w.strokeStyle="#e2523a",w.lineWidth=Math.max(0,2*St-2.4),ut>0&&w.stroke()}w.restore(),N(X.pts),w.strokeStyle="#ffffff",w.lineWidth=3,w.stroke()}for(let X of s.features)if(X.kind==="tennis"&&X.closed){N(X.pts),w.fillStyle="#3f9fd1",w.fill(),w.strokeStyle="#ffffff",w.lineWidth=2.5,w.stroke();let j=Yh(X.pts),ut=Yn(X.pts);w.save(),N(X.pts),w.clip(),w.strokeStyle="rgba(255,255,255,0.9)",w.lineWidth=1.5,w.beginPath(),w.moveTo(v(j[0]),I(ut[1])),w.lineTo(v(j[0]),I(ut[3])),w.stroke(),w.restore()}for(let X of s.features)X.kind==="water"&&X.closed&&(N(X.pts),w.strokeStyle="#f4efe0",w.lineWidth=3.4*A,w.lineJoin="round",w.stroke(),w.fillStyle="#2f8fe0",w.fill());for(let X of s.features)X.kind==="path"&&(N(X.pts,!1),w.lineCap="round",w.lineJoin="round",w.strokeStyle="#c9ad78",w.lineWidth=3.6*A,w.stroke());for(let X of s.features)X.kind==="path"&&(N(X.pts,!1),w.strokeStyle="#ecd8a6",w.lineWidth=2.6*A,w.stroke());let at=X=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[X.tags?.highway]||7;for(let X of s.features)X.kind==="road"&&(N(X.pts,X.closed),w.lineCap="round",w.lineJoin="round",w.strokeStyle="#ece6d6",w.lineWidth=(at(X)+4)*A,w.stroke());for(let X of s.features)X.kind==="road"&&(N(X.pts,X.closed),w.strokeStyle="#7f8597",w.lineWidth=at(X)*A,w.stroke());for(let X of s.features)X.kind==="road"&&at(X)>=11&&(N(X.pts,!1),w.setLineDash([5*A,5*A]),w.strokeStyle="#f4f1e6",w.lineWidth=.5*A,w.stroke(),w.setLineDash([]));for(let X of s.features)X.kind==="rail"&&(N(X.pts,!1),w.strokeStyle="#9b8f84",w.lineWidth=5*A,w.stroke());for(let X of s.features)X.kind==="rail"&&(N(X.pts,!1),w.setLineDash([1,2]),w.strokeStyle="#5b4f46",w.lineWidth=3*A,w.stroke(),w.setLineDash([]),N(X.pts,!1),w.strokeStyle="#c9ccd6",w.lineWidth=.8,w.stroke());for(let X of s.features)X.kind==="building"&&X.closed&&(N(X.pts),w.fillStyle="#9c968a",w.fill());for(let X in t.diversions)for(let j of t.diversions[X])w.beginPath(),j.path.forEach((ut,St)=>St?w.lineTo(v(ut[0]),I(ut[1])):w.moveTo(v(ut[0]),I(ut[1]))),w.lineCap="round",w.lineJoin="round",w.strokeStyle="rgba(196,160,96,0.85)",w.lineWidth=4*A,w.stroke(),w.setLineDash([2*A,3*A]),w.strokeStyle="rgba(255,240,200,0.8)",w.lineWidth=.6*A,w.stroke(),w.setLineDash([])}{let w=c.nx*c.nz,R=new Float32Array(w*3),J=new Float32Array(w*2);for(let St=0;St<c.nz;St++)for(let Ot=0;Ot<c.nx;Ot++){let Ft=St*c.nx+Ot;R[Ft*3]=c.x0+Ot*c.cell,R[Ft*3+1]=c.h[Ft],R[Ft*3+2]=c.z0+St*c.cell,J[Ft*2]=Ot/(c.nx-1),J[Ft*2+1]=1-St/(c.nz-1)}let v=new Uint32Array((c.nx-1)*(c.nz-1)*6),I=0;for(let St=0;St<c.nz-1;St++)for(let Ot=0;Ot<c.nx-1;Ot++){let Ft=St*c.nx+Ot,Bt=Ft+1,Vt=Ft+c.nx,se=Vt+1;v[I++]=Ft,v[I++]=Vt,v[I++]=Bt,v[I++]=Bt,v[I++]=Vt,v[I++]=se}let N=new _e;N.setAttribute("position",new Re(R,3)),N.setAttribute("uv",new Re(J,2)),N.setIndex(new Re(v,1)),N.computeVertexNormals();let $=gt(16777215,{map:D}),at=Ye(256,256,(St,Ot,Ft)=>{St.fillStyle="#808080",St.fillRect(0,0,Ot,Ft);for(let Bt=0;Bt<1800;Bt++){let Vt=100+Math.floor(Gt()*70);St.fillStyle=`rgb(${Vt},${Vt},${Vt})`;let se=Gt()*Ot,ve=Gt()*Ft;St.fillRect(se,ve,2,3+Gt()*5)}for(let Bt=0;Bt<500;Bt++)St.fillStyle="rgba(255,255,255,0.18)",St.fillRect(Gt()*Ot,Gt()*Ft,2,2)},{repeat:!0,srgb:!1});o.push(at),$.onBeforeCompile=St=>{St.uniforms.uDetail={value:at},St.vertexShader=St.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),St.fragmentShader=St.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},$.customProgramCacheKey=()=>"terrain-detail";let X=pe(N,$,{cast:!1});X.name="terrain",l(X);let j=new we(new mo(700,5200,48,1),gt(13227680));j.rotation.x=-Math.PI/2,j.position.set(c.x0+h/2,-2,c.z0+d/2),j.receiveShadow=!1,l(j);let ut=new we(new nn(h+1800,d+1800),gt(13686197));ut.rotation.x=-Math.PI/2,ut.position.set(c.x0+h/2,-3,c.z0+d/2),l(ut)}let g=Ye(256,256,(w,R,J)=>{w.fillStyle="#7f8fb0",w.fillRect(0,0,R,J);for(let v=0;v<1600;v++)w.fillStyle=Gt()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",w.fillRect(Gt()*R,Gt()*J,2,2);w.fillStyle="#6b7a9b",w.fillRect(0,0,R*.035,J),w.fillRect(R*.965,0,R*.035,J),w.fillStyle="#ffffff",w.fillRect(R*.06,0,R*.045,J),w.fillRect(R*.895,0,R*.045,J),w.fillStyle="rgba(255,255,255,0.35)",w.fillRect(R*.49,0,R*.02,J*.5)},{repeat:!0});o.push(g);{let w=[];for(let N of t.ribbons)w.push(E(N));let R=rn(w),J=pe(R,gt(16777215,{map:g}),{cast:!1});J.name="path",l(J);let v=rn(t.ribbons.map(N=>E(N,!0))),I=pe(v,gt(5924226),{cast:!1});l(I)}function E(w,R=!1){let J=[];for(let j=w.from;j<=w.to+.01;j+=2)J.push(t.baseXZ(j));let v=[],I=[],N=[],$=0;for(let j=0;j<J.length;j++){let ut=J[Math.max(0,j-1)],St=J[Math.min(J.length-1,j+1)],Ot=St[0]-ut[0],Ft=St[1]-ut[1],Bt=Math.hypot(Ot,Ft)||1;Ot/=Bt,Ft/=Bt;let Vt=-Ft,se=Ot,ve=Ce/2,De=[J[j][0]-Vt*ve,J[j][1]-se*ve],Ne=[J[j][0]+Vt*ve,J[j][1]+se*ve],Sn=t.heightAt(J[j][0],J[j][1]),En=Math.max(t.heightAt(De[0],De[1]),Sn-.05)+Ao+w.lift,Di=Math.max(t.heightAt(Ne[0],Ne[1]),Sn-.05)+Ao+w.lift;R?(v.push(De[0]-Vt*.15,En-.45,De[1]-se*.15,De[0],En,De[1],Ne[0],Di,Ne[1],Ne[0]+Vt*.15,Di-.45,Ne[1]+se*.15),I.push(0,0,0,1,0,1,0,0)):(v.push(De[0],En,De[1],Ne[0],Di,Ne[1]),I.push(0,$/8,1,$/8)),j&&($+=2)}let at=R?4:2;for(let j=0;j<J.length-1;j++){let ut=j*at,St=(j+1)*at;R?(N.push(ut,St,ut+1,ut+1,St,St+1),N.push(ut+2,St+2,ut+3,ut+3,St+2,St+3)):N.push(ut,St,ut+1,ut+1,St,St+1)}let X=new _e;if(X.setAttribute("position",new te(v,3)),X.setAttribute("uv",new te(I,2)),X.setIndex(N),X.computeVertexNormals(),X.getAttribute("normal").getY(0)<0&&!R){let j=X.index.array;for(let ut=0;ut<j.length;ut+=3){let St=j[ut+1];j[ut+1]=j[ut+2],j[ut+2]=St}X.computeVertexNormals()}return X}let T={uTime:{value:0}},P=s.features.filter(w=>w.kind==="water"&&w.closed);for(let w of P){let R=(w._level??Math.min(...w.pts.map($=>t.heightAt($[0],$[1]))))+.05,J=new Ri(w.pts.map($=>new Ct($[0],-$[1]))),v=new go(J,4);v.rotateX(-Math.PI/2),v.translate(0,R,0);let I=new je({uniforms:{...T,...zt.fog},vertexShader:`varying vec3 vW;
${ee.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${ee.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${ee.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${ee.fog_fragment}
        }`,fog:!0}),N=new we(v,I);N.name="water",l(N),o.push(I),w._waterLevel=R}let k=[];if(t.lake){let w=t.lake,R=Yn(w.pts),J=[16767291,16735581,5752831,16777215,16748497,8257418],v=new le(2,.7,3.6,2,.32),I=new le(1.2,.5,.8,2,.2);for(let N=0,$=0;N<9&&$<300;$++){let at=R[0]+Gt()*(R[2]-R[0]),X=R[1]+Gt()*(R[3]-R[1]);if(js(w.pts,at,X)>-7)continue;let j=new ne,ut=pe(v,gt(J[N%J.length]),{ol:2.5});j.add(ut);let St=pe(I,gt(16777215),{ol:2});St.position.y=.45,j.add(St);let Ot=pe(new ge(.42,12,8),gt(J[(N+2)%J.length]),{ol:2});Ot.position.set(0,.9,.7),j.add(Ot),j.position.set(at,(w._waterLevel??0)+.1,X),j.rotation.y=Gt()*6.28,l(j),k.push({g:j,ph:Gt()*6.28,x:at,z:X,a:j.rotation.y}),N++}}{let w=Ye(128,128,(N,$,at)=>{N.fillStyle="#ffffff",N.fillRect(0,0,$,at),N.fillStyle="#ffffff",N.fillRect(0,0,14,14),N.fillStyle="#3b4a6b",N.fillRect(34,30,60,58),N.fillStyle="#9ec9ff",N.fillRect(38,34,52,50),N.fillStyle="#ffffff",N.fillRect(62,34,4,50),N.fillRect(38,56,52,4),N.fillStyle="rgba(0,0,0,0.08)",N.fillRect(0,118,$,10)},{repeat:!0});o.push(w);let R={generateTopUV:(N,$,at,X,j)=>[new Ct(.02,.98),new Ct(.02,.98),new Ct(.02,.98)],generateSideWallUV:(N,$,at,X,j,ut)=>{let St=$[at*3],Ot=$[at*3+1],Ft=$[at*3+2],Bt=$[X*3],Vt=$[X*3+1],se=$[X*3+2],ve=$[j*3+2],De=$[ut*3+2],Ne=(Math.abs(Ot-Vt)<Math.abs(St-Bt)?St:Ot)/4.2,Sn=(Math.abs(Ot-Vt)<Math.abs(St-Bt)?Bt:Vt)/4.2;return[new Ct(Ne,Ft/3.2),new Ct(Sn,se/3.2),new Ct(Sn,ve/3.2),new Ct(Ne,De/3.2)]}},J=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],v=["#5d6488","#7a5d6c","#4f6b78"],I=[];for(let N of s.features){if(N.kind!=="building"||!N.closed||N.pts.length<4)continue;let $=Yh(N.pts);if(_($[0],$[1]))continue;let at=parseFloat(N.tags?.["building:levels"])||(Gt()<.7?3:4),X=Math.min(30,at*3.1),j=new Ri(N.pts.map(ve=>new Ct(ve[0],-ve[1]))),ut;try{ut=new po(j,{depth:X,bevelEnabled:!1,UVGenerator:R})}catch{continue}ut.rotateX(-Math.PI/2);let St=Math.min(...N.pts.map(ve=>t.heightAt(ve[0],ve[1])))-1.5;ut.translate(0,St,0);let Ot=ut.getAttribute("normal"),Ft=Ot.count,Bt=new Float32Array(Ft*3),Vt=new Jt(J[Math.floor(Gt()*J.length)]).convertSRGBToLinear(),se=new Jt(v[Math.floor(Gt()*v.length)]).convertSRGBToLinear();for(let ve=0;ve<Ft;ve++){let De=Ot.getY(ve)>.5?se:Vt;Bt[ve*3]=De.r,Bt[ve*3+1]=De.g,Bt[ve*3+2]=De.b}ut.setAttribute("color",new Re(Bt,3)),I.push(ut.index?ut.toNonIndexed():ut)}if(I.length){let N=rn(I),$=pe(N,gt(16777215,{map:w,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});$.name="buildings",l($)}}let K=t.sample(t.finishM),L=t.sample(0),Z={start:L,finish:K},tt=new ne;l(tt);function ct(w,R,J,v){let I=new ne,N=Ce/2+1.4,$=.85,at=Ye(256,32,(Ft,Bt,Vt)=>{for(let se=0;se<16;se++)Ft.fillStyle=se%2?J:v,Ft.fillRect(se*Bt/16,0,Bt/16+1,Vt)},{repeat:!1});o.push(at);let X=new Qe(N,$,14,40,Math.PI);X.scale(1,1.25,1);let j=pe(X,gt(16777215,{map:at}),{ol:3.5});I.add(j);let ut=new ae($*1.4,$*1.6,.8,16);for(let Ft of[-1,1]){let Bt=pe(ut,gt(v),{ol:3});Bt.position.set(Ft*N,.3,0),I.add(Bt)}let St=$n(1024,256,(Ft,Bt,Vt)=>{Ft.fillStyle="#1b1b3a",ze(Ft,0,0,Bt,Vt,60),Ft.fill(),Ft.fillStyle=J,ze(Ft,12,12,Bt-24,Vt-24,50),Ft.fill(),Ge(Ft,"MARKRUN",Bt/2,Vt*.42,150,"#ffffff","#1b1b3a",.18),Ge(Ft,R,Bt/2,Vt*.83,56,"#ffe14d","#1b1b3a",.2)},o),Ot=pe(new le(N*1.55,N*.4,.7,3,.25),[gt(v),gt(v),gt(v),gt(v),gt(16777215,{map:St}),gt(16777215,{map:St})],{ol:3.5});return Ot.position.y=N*1.25+$*1.25+N*.2-.15,I.add(Ot),I.position.set(w.x,w.y-.1,w.z),I.rotation.y=Math.atan2(-w.rz,w.rx),tt.add(I),I}Z.finishArch=ct(K,"FINISH","#ff3d8b","#ffd23f"),ct(L,"START","#2e9bff","#ffd23f");let ft=Ye(256,64,(w,R,J)=>{let I=R/16;for(let N=0;N<16;N++)for(let $=0;$<4;$++)w.fillStyle=(N+$)%2?"#111":"#fff",w.fillRect(N*I,$*I,I,I)});o.push(ft);function H(w,R,J,v=.03){let I=new nn(Ce,J);I.rotateX(-Math.PI/2);let N=new we(I,gt(16777215,{map:R,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return N.position.set(w.x,w.y+v,w.z),N.rotation.y=Math.atan2(-w.rz,w.rx),N.receiveShadow=!0,l(N),N}H(K,ft,2.2,.05);let Rt=$n(512,128,(w,R,J)=>{w.fillStyle="#ffffff",w.fillRect(0,0,R,22),Ge(w,"START",R/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let w=t.sample(2.5);H(w,Rt,3,.05).rotation.y+=Math.PI}let Q=new Te;function q(w,R,J,{ol:v=0,olRef:I,cast:N=!0,colors:$,chunk:at=0}={}){if(!J.length)return null;if(at){let j=new Map;J.forEach((St,Ot)=>{let Ft=`${Math.floor(St.x/at)},${Math.floor(St.z/at)}`,Bt=j.get(Ft);Bt||j.set(Ft,Bt={l:[],c:[]}),Bt.l.push(St),$&&Bt.c.push($[Ot])});let ut=null;for(let{l:St,c:Ot}of j.values()){let Ft=q(w,R,St,{ol:v,olRef:I,cast:N,colors:$?Ot:null});ut=ut||Ft}return ut}let X=new sn(w,R,J.length);return J.forEach((j,ut)=>{Q.position.set(j.x,j.y,j.z),Q.rotation.set(j.rx||0,j.ry||0,j.rz||0),Q.scale.set(j.sx??j.s??1,j.sy??j.s??1,j.sz??j.s??1),Q.updateMatrix(),X.setMatrixAt(ut,Q.matrix),$&&X.setColorAt(ut,new Jt($[ut]))}),X.castShadow=N,X.receiveShadow=!0,X.computeBoundingSphere(),v&&Li(X,v,void 0,I),l(X),X}let V=[];{let w=J=>{let v=t.rawExt(J-12),I=t.rawExt(J),N=t.rawExt(J+12),$=Math.atan2(I[1]-v[1],I[0]-v[0]),X=Math.atan2(N[1]-I[1],N[0]-I[0])-$;for(;X>Math.PI;)X-=2*Math.PI;for(;X<-Math.PI;)X+=2*Math.PI;return X},R=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[J,v]of R){let I=null;for(let N=J;N<v;N+=4){let $=w(N);Math.abs($)>.45?(!I||Math.abs($)>Math.abs(I.d))&&(I={m:N,d:$}):I&&(V.some(at=>Math.abs(at.m-I.m)<50)||V.push(I),I=null)}}}let G=[],Y=[],ot=[],yt=[];for(let w of V){let R=w.d>0;for(let J=-2;J<=2;J++){let v=t.sample(w.m+J*5),I=R?-1:1,N=Ce/2+1.6,$=v.x+v.rx*N*I,at=v.z+v.rz*N*I;m($,at,.3),(R?Y:G).push({x:$,y:t.heightAt($,at),z:at,ry:Math.atan2(-v.tz,v.tx)+(I>0?Math.PI:0)})}for(let J=-3;J<=3;J++){let v=t.sample(w.m+J*3.5),I=R?1:-1,N=Ce/2+.7;ot.push({x:v.x+v.rx*N*I,y:t.heightAt(v.x+v.rx*N*I,v.z+v.rz*N*I),z:v.z+v.rz*N*I,ry:Gt()*6});for(let $=0;$<2;$++){let at=t.sample(w.m+J*3.5+$*1.75),X=Ce/2+.1;yt.push({x:at.x+at.rx*X*I,y:at.y-.05,z:at.z+at.rz*X*I,ry:Math.atan2(at.tx,at.tz),red:(J*2+$)%2===0})}}}Z.corners=V;{let w=Ye(256,96,(X,j,ut)=>{X.fillStyle="#2f6fe0",X.fillRect(0,0,j,ut),X.fillStyle="#ffffff";for(let St=0;St<4;St++){let Ot=18+St*60;X.beginPath(),X.moveTo(Ot,12),X.lineTo(Ot+26,12),X.lineTo(Ot+54,ut/2),X.lineTo(Ot+26,ut-12),X.lineTo(Ot,ut-12),X.lineTo(Ot+28,ut/2),X.closePath(),X.fill()}X.strokeStyle="#1b3f8f",X.lineWidth=8,X.strokeRect(0,0,j,ut)}),R=w.clone();R.repeat.x=-1,R.offset.x=1,R.wrapS=wi,R.needsUpdate=!0,o.push(w,R);let v=(X=>{let j=new ye(3.2,1.2,.12);j.rotateX(-.32),j.translate(0,.62,.22);let ut=new ye(3.2,1.2,.12);return ut.rotateX(.32),ut.translate(0,.62,-.22),ut.rotateY(Math.PI),rn([j,ut])})();jl(v),q(v,gt(16777215,{map:w}),Y,{ol:2.5}),q(v,gt(16777215,{map:R}),G,{ol:2.5});let I=Ye(16,64,(X,j,ut)=>{for(let St=0;St<4;St++)X.fillStyle=St%2?"#ffffff":"#ff6a2b",X.fillRect(0,St*ut/4,j,ut/4)});o.push(I);let N=new ae(.06,.32,.9,12,1);N.translate(0,.5,0);let $=new ye(.8,.08,.8);$.translate(0,.04,0),q(N,gt(16777215,{map:I}),ot,{ol:2}),q($,gt(16738859),ot,{ol:1.5});let at=new ye(.5,.22,1.75);at.translate(0,.11,0),q(at,gt(16777215),yt.map(X=>X),{ol:1.5,colors:yt.map(X=>X.red?15216959:16777215)})}let Tt=new ne;l(Tt);function wt(w,R,J,v,I,{postH:N=1.6,face:$=0,scale:at=1}={}){let X=$n(512,Math.round(512*v/J),I,o),j=new ne,ut=pe(new le(J,v,.25,2,.08),[gt(5978660),gt(5978660),gt(5978660),gt(5978660),gt(16777215,{map:X}),gt(16777215,{map:X})],{ol:3});ut.position.y=N+v/2,j.add(ut);let St=new ye(.25,N+v*.5,.25);for(let Vt of[-1,1]){let se=pe(St,gt(9067062),{ol:2});se.position.set(Vt*J*.35,(N+v*.5)/2,-.1),j.add(se)}let Ot=Ce/2+2.2+J*.15,Ft=w.x+w.rx*Ot*R,Bt=w.z+w.rz*Ot*R;return j.position.set(Ft,t.heightAt(Ft,Bt)-.1,Bt),j.rotation.y=Math.atan2(-w.tx,-w.tz)+R*.5+$,j.scale.setScalar(at),Tt.add(j),j}let st=1720,pt=t.sample(st-10);Z.hillSign=wt(pt,1,6,3.2,(w,R,J)=>{w.fillStyle="#ffd23f",ze(w,0,0,R,J,40),w.fill(),w.lineWidth=16,w.strokeStyle="#1b1b3a",ze(w,8,8,R-16,J-16,34),w.stroke(),w.fillStyle="#3aa845",w.beginPath(),w.moveTo(40,J-40),w.lineTo(150,70),w.lineTo(260,J-40),w.closePath(),w.fill(),w.strokeStyle="#1b1b3a",w.lineWidth=8,w.stroke(),w.fillStyle="#fff",w.beginPath(),w.moveTo(118,118),w.lineTo(150,70),w.lineTo(182,118),w.closePath(),w.fill(),Ge(w,"THE",380,J*.3,72,"#ffffff","#1b1b3a",.2),Ge(w,"HILL",370,J*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),Z.hillM=st;for(let w of[1,2,3,4]){let R=w*1e3,J=t.sample(t.geoOf(R));wt(J,-1,1.6,1.3,(v,I,N)=>{v.fillStyle="#ffffff",ze(v,0,0,I,N,50),v.fill(),v.fillStyle="#ff3d8b",ze(v,20,20,I-40,N-40,36),v.fill(),Ge(v,`${w}K`,I/2,N/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let B=t.sample(2475);Z.lapBoard=wt(B,1,4.4,2.6,(w,R,J)=>{w.fillStyle="#1b1b3a",ze(w,0,0,R,J,40),w.fill(),w.fillStyle="#2e9bff",ze(w,14,14,R-28,J-28,30),w.fill(),Ge(w,"LAP",R/2,J*.28,90,"#ffffff","#1b1b3a",.18),Ge(w,"2 OF 2",R/2,J*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),Z.lapM=2500;let Et=[],Mt=[],et=[],At=[];function Ht(w,R,J,v=3.2,I=12){let N=null;for(let $=w;$<=R;$+=I){let at=t.sample($),X=Ce/2+1,j=at.x+at.rx*X*J,ut=at.z+at.rz*X*J,St=t.heightAt(j,ut);Mt.push({x:j,y:St,z:ut});let Ot=new z(j,St+v,ut);if(N){let Ft=[];for(let Bt=0;Bt<=12;Bt++){let Vt=Bt/12,se=N.clone().lerp(Ot,Vt);se.y-=Math.sin(Vt*Math.PI)*.6,Ft.push(se)}et.push(Ft);for(let Bt=1;Bt<12;Bt++){let Vt=Ft[Bt],se=Ft[Bt+1].clone().sub(Ft[Bt-1]);Et.push({x:Vt.x,y:Vt.y,z:Vt.z,ry:Math.atan2(-se.z,se.x)})}}N=Ot}}function Nt(w,R,J,v=Ce/2+2.2){for(let I=w;I<=R;I+=2.4){let N=t.sample(I),$=N.x+N.rx*v*J,at=N.z+N.rz*v*J;At.push({x:$,y:t.heightAt($,at),z:at,ry:Math.atan2(N.tx,N.tz)})}}let O=t.finishM;Ht(O-70,O+10,1),Ht(O-70,O+10,-1),Ht(-6,50,1),Ht(-6,50,-1),Nt(O-60,O+14,1),Nt(O-60,O+14,-1),Nt(-4,40,1),Nt(-4,40,-1);{let w=new _e;w.setAttribute("position",new te([-.3,0,0,.3,0,0,0,-.62,0],3)),w.setAttribute("normal",new te([0,0,1,0,0,1,0,0,1],3));let R=Et.map((j,ut)=>[16727435,16765503,3054591,4054148,16747069,16777215][ut%6]);q(w,gt(16777215,{side:Pe}),Et,{colors:R,cast:!1});let J=new ae(.07,.09,3.3,6);J.translate(0,1.65,0),q(J,gt(16777215),Mt,{ol:1.5});let v=new _e().setFromPoints(et.flatMap(j=>j.slice(0,-1).flatMap((ut,St)=>[ut,j[St+1]]))),I=new fs(v,new Ai({color:3355443}));l(I),o.push(v);let N=[];for(let j=0;j<4;j++){let ut=new ye(.16,1,.06);ut.translate(-.9+j*.6,.5,0),N.push(ut)}let $=new ye(2.4,.12,.05);$.translate(0,.65,.05),N.push($);let at=$.clone();at.translate(0,-.35,0),N.push(at);let X=rn(N);X.rotateY(Math.PI/2),q(X,gt(16777215),At,{ol:1.8})}let C=[],dt=(w,R,J,v,I,N=1.35)=>C.push({m0:w,m1:R,side:J,off:Ce/2+3,depth:v,density:I,spacing:N});dt(O-58,O+12,1,6,1),dt(O-58,O+12,-1,6,1),dt(-2,38,1,5,.9),dt(-2,38,-1,5,.9),dt(1940,2010,1,4,.7),dt(1960,2010,-1,3,.6),dt(st-10,st+40,-1,3,.55),dt(2440,2490,-1,3,.7),Z.crowdZones=C;{let w=s.pois.filter(v=>v.kind==="bench"&&_(v.pos[0],v.pos[1])&&m(v.pos[0],v.pos[1],1)).map(v=>({x:v.pos[0],y:t.heightAt(v.pos[0],v.pos[1]),z:v.pos[1],ry:Gt()*6})),R=rn([new ye(1.8,.12,.5).translate(0,.5,0),new ye(1.8,.4,.1).translate(0,.8,-.22),new ye(.1,.5,.45).translate(-.8,.25,0),new ye(.1,.5,.45).translate(.8,.25,0)]);q(R,gt(11892031),w,{ol:1.5});let J=s.pois.filter(v=>v.kind==="cafe"&&_(v.pos[0],v.pos[1])&&m(v.pos[0],v.pos[1],4));for(let v of J){let I=new ne;I.add(pe(new le(5,3,4,2,.2),gt(16774108),{ol:2.5})).position.y=1.5;let N=Ye(128,16,(X,j,ut)=>{for(let St=0;St<8;St++)X.fillStyle=St%2?"#fff":"#ff4f6d",X.fillRect(St*16,0,16,ut)});o.push(N);let $=pe(new ye(5.6,.2,2),gt(16777215,{map:N}),{ol:2});$.position.set(0,2.9,2.3),$.rotation.x=.35,I.add($);let at=pe(new Le(4,1.6,4),gt(3054591),{ol:2.5});at.position.y=3.8,at.rotation.y=Math.PI/4,I.add(at),I.position.set(v.pos[0],t.heightAt(v.pos[0],v.pos[1]),v.pos[1]),I.rotation.y=Gt()*6,l(I),M(v.pos[0],v.pos[1],5)}}for(let w of C)for(let R=w.m0-8;R<=w.m1+8;R+=4){let J=t.sample(R),v=w.off+w.depth/2;M(J.x+J.rx*v*w.side,J.z+J.rz*v*w.side,w.depth/2+3)}for(let w of[L,K])M(w.x,w.z,14);if(r&&n.funfair){let w=Object.values(t.diversions)[0]?.[0];if(w)for(let R of w.path){let J=nt(R[0],R[1]),v=(R[0]+J[0])/2,I=(R[1]+J[1])/2;M(v,I,Math.max(6,Math.hypot(R[0]-J[0],R[1]-J[1])/2-3))}}function nt(w,R){let J=null,v=1e9;for(let I of p){let N=(I[0]-w)**2+(I[1]-R)**2;N<v&&(v=N,J=I)}return J}Z.nearestOnRibbon=nt;let it=new Map;for(let w of p){let R=`${Math.floor(w[0]/10)},${Math.floor(w[1]/10)}`,J=it.get(R);J||it.set(R,J=[]),J.push(w)}let rt=(w,R,J=1)=>{let v=Math.floor(w/10),I=Math.floor(R/10),N=(Ce/2+J)**2;for(let $=-1;$<=1;$++)for(let at=-1;at<=1;at++)for(let X of it.get(`${v+$},${I+at}`)||[])if((X[0]-w)**2+(X[1]-R)**2<N)return!0;return!1};Z.reserve=M,Z.clearOf=m;let vt=[],mt=(w,R,J,v)=>!m(w,R,2.5*v)||F(w,R,1.5)?!1:(vt.push({x:w,z:R,kind:J,s:v}),M(w,R,2.2*v),!0);for(let w of s.pois)w.kind==="tree"&&mt(w.pos[0],w.pos[1],0,.85+Gt()*.35);for(let w of s.features)if(w.kind==="wood"&&w.closed){let R=Yn(w.pts),J=(R[2]-R[0])*(R[3]-R[1]);for(let v=0;v<J/90;v++){let I=R[0]+Gt()*(R[2]-R[0]),N=R[1]+Gt()*(R[3]-R[1]);Ro(w.pts,I,N)&&mt(I,N,1,.9+Gt()*.5)}}{let w=Yn(S);for(let R=0;R<2600;R++){let J=w[0]+Gt()*(w[2]-w[0]),v=w[1]+Gt()*(w[3]-w[1]);!_(J,v)||-js(S,J,v)>45&&Gt()<.75||mt(J,v,Gt()<.7?1:2,.8+Gt()*.5)}for(let R of s.features)if(R.kind==="road"&&!R.closed)for(let J=1;J<R.pts.length;J++){let v=R.pts[J-1],I=R.pts[J],N=Math.hypot(I[0]-v[0],I[1]-v[1]);for(let $=0;$<N;$+=22){let at=$/N,X=v[0]+(I[0]-v[0])*at,j=v[1]+(I[1]-v[1])*at,ut=-(I[1]-v[1])/N,St=(I[0]-v[0])/N,Ot=8+Gt()*2;Gt()<.5&&mt(X+ut*Ot,j+St*Ot,0,.6+Gt()*.2)}}}{let w=[3978315,5031250,3121226,6539594,8376650,3450963],R=new ae(.32,.5,4.2,7);R.translate(0,2.1,0);let J=new qe(3.2,1);J.scale(1,1.08,1),J.translate(0,6.6,0);let v=rn([new qe(3,1).translate(0,6.2,0),new qe(2.3,0).translate(1.9,5.3,.6),new qe(2.2,0).translate(-1.7,5.5,-.8),new qe(2,0).translate(.2,8.2,.3)].map(X=>X.toNonIndexed())),I=rn([new Le(3,4.2,8).translate(0,5,0),new Le(2.4,3.6,8).translate(0,7.2,0),new Le(1.6,3,8).translate(0,9.2,0)].map(X=>X.index?X.toNonIndexed():X)),N=vt.map(X=>({x:X.x,y:t.heightAt(X.x,X.z)-.2,z:X.z,ry:Gt()*6.28,s:X.s}));q(R,gt(9067062),N,{ol:2,olRef:40,chunk:160});let $=gt(16777215,{flatShading:!0});[J,v,I].forEach((X,j)=>{let ut=N.filter((St,Ot)=>vt[Ot].kind===j);q(X,$,ut,{ol:2.2,olRef:40,colors:ut.map(()=>w[Math.floor(Gt()*w.length)]),chunk:160})}),Z.treeCount=vt.length}{let w=rn([0,1,2,3].map(N=>{let $=new Le(.09,.55,3);return $.translate(0,.27,0),$.rotateZ((N-1.5)*.25),$.rotateY(N*1.7),$.translate((N-1.5)*.08,0,N%2*.06),$.toNonIndexed()})),R=rn([new ae(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new qe(.13,0).translate(0,.38,0)]),J=[],v=[],I=[];for(let N=0;N<9e3;N++){let $=p[Math.floor(Gt()*p.length)],at=Gt()*6.283,X=Ce/2+1+Gt()*22,j=$[0]+Math.cos(at)*X,ut=$[1]+Math.sin(at)*X;if(!_(j,ut)||F(j,ut,.5)||!m(j,ut,.2))continue;let St=t.heightAt(j,ut)-.03;Gt()<.62?J.push({x:j,y:St,z:ut,ry:Gt()*6,s:.5+Gt()*.6}):(v.push({x:j,y:St,z:ut,ry:Gt()*6,s:.35+Gt()*.25}),I.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(Gt()*6)]))}q(w,gt(5226296),J,{cast:!1,chunk:120}),q(R,gt(16777215),v,{cast:!1,colors:I,chunk:120})}let It=new je({side:Ve,depthWrite:!1,fog:!1,uniforms:{top:{value:new Jt(3116287)},mid:{value:new Jt(9425919)},bot:{value:new Jt(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Pt=new we(new ge(5e3,32,16),It);Pt.renderOrder=-10,Pt.frustumCulled=!1,i.add(Pt),o.push(It,Pt.geometry);let bt=rn([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([w,R,J,v])=>new qe(v,2).translate(w,R,J)));bt.scale(1,.7,.8);let Dt=[c.x0+h/2,c.z0+d/2],Wt=[];for(let w=0;w<26;w++){let R=Gt()*6.28,J=300+Gt()*1300;Wt.push({x:Dt[0]+Math.cos(R)*J,y:170+Gt()*120,z:Dt[1]+Math.sin(R)*J,ry:Gt()*6,s:.8+Gt()*1.4})}let Xt=q(bt,gt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Wt,{ol:1.5,olRef:300,cast:!1}),Lt=[];for(let w=0;w<18;w++){let R=w/18*6.28+Gt()*.2,J=1900+Gt()*500;Lt.push({x:Dt[0]+Math.cos(R)*J,y:-40,z:Dt[1]+Math.sin(R)*J,sx:320+Gt()*260,sy:80+Gt()*90,sz:260+Gt()*200,ry:Gt()*6})}q(new ge(1,24,12),gt(7128954),Lt,{cast:!1,colors:Lt.map((w,R)=>[8047487,6273413,9425290][R%3])});function Qt(w){T.uTime.value=w;for(let R of k)R.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(w*1.7+R.ph)*.08,R.g.rotation.z=Math.sin(w*1.3+R.ph)*.06,R.g.rotation.y=R.a+Math.sin(w*.1+R.ph)*.4;Xt&&(Xt.position.x=Math.sin(w*.01)*40)}function qt(){a.traverse(w=>{w.geometry&&w.geometry.dispose()});for(let w of o)w.dispose?.();i.remove(a),i.remove(Pt)}return{group:a,anchors:Z,update:Qt,dispose:qt,inPark:_,clearOf:m,reserve:M,blocked:F,groundTex:D,onPath:rt}}function Yh(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function ze(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var Zh=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],Jh=[4054148,16727435,16765503,3054591,16777215];function nx(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new Ct(Math.max(.001,o),r))}i.unshift(new Ct(.001,0));let e=new Ys(i,12);return e.computeVertexNormals(),e}function Kh(i,t){let e=bn(99),n=t.length,s=new ne;if(i.add(s),!n)return{update(){},dispose(){i.remove(s)},group:s};let r=nx(),o=new ge(.15,8,5);o.scale(.8,1.15,.5);let a=new ge(.075,6,4);a.scale(.85,1.2,.5);let l=new ge(.13,6,5),c=new Le(.14,.36,6);c.translate(0,.18,0);let h=new Le(.26,.55,8);h.translate(0,.27,0);let d=new ge(.2,7,5),f=(L,Z,tt,ct)=>{let ft=new sn(L,Z,tt);return ft.castShadow=!0,ft.receiveShadow=!0,ft.userData.ol=ct,s.add(ft),ft},u=f(r,gt(16777215),n,2.6),x=f(o,new fn({color:16777215}),n*2,0),M=f(a,new fn({color:1709088}),n*2,0),m=f(l,gt(16777215),n*2,2);x.castShadow=M.castShadow=!1;let p=[f(c,gt(16777215),n,2),f(h,gt(16777215),n,2),f(d,gt(16777215),n,2)],S=[0,0,0],_=new Jt,y=t.map((L,Z)=>{let tt=L.colour??Zh[Math.floor(e()*Zh.length)];u.setColorAt(Z,_.set(tt)),m.setColorAt(Z*2,_),m.setColorAt(Z*2+1,_);let ct=e()<.3?-1:Math.floor(e()*3),ft=-1;return ct>=0&&(ft=S[ct]++,p[ct].setColorAt(ft,_.set(Jh[Math.floor(e()*Jh.length)]))),{...L,s:L.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:ct,ti:ft,wave:e()<.5,ex:.3}});p.forEach((L,Z)=>{L.count=S[Z]});for(let L of[u,m,...p])L.instanceColor&&(L.instanceColor.needsUpdate=!0);let W=new ue,F=new Pn,A=new vn,D=new z,b=new z,g=new ue,E=new ue;function T(L,Z,tt){let ct=y[L],ft=ct.ex,H=Z*ct.sp*(.5+ft*.6)+ct.ph,Rt=Math.max(0,Math.sin(H))*.32*ft,Q=1-Math.cos(H*2)*.05*ft;A.set(0,ct.yaw+Math.sin(Z*.8+ct.ph)*.25*(1-ft),Math.sin(H*.5)*.08*ft),F.setFromEuler(A),g.compose(D.set(ct.x,ct.y+Rt,ct.z),F,b.set(ct.s/Math.sqrt(Q),ct.s*Q,ct.s/Math.sqrt(Q))),u.setMatrixAt(L,g);for(let q=0;q<2;q++){let V=q?.19:-.19;E.makeTranslation(V,.86,.5),W.multiplyMatrices(g,E),x.setMatrixAt(L*2+q,W),E.makeTranslation(V*1.02,.84+(ft>.6?.03:0),.565),W.multiplyMatrices(g,E),M.setMatrixAt(L*2+q,W);let G=ft>.55?1:.15+.2*Math.max(0,Math.sin(H)),Y=ct.wave?Math.sin(H*1.5+q*3)*.25*ft:0,ot=(q?1:-1)*(.62+G*.05+Y*.3),yt=.45+G*.85+Y;E.makeTranslation(ot,yt,.12),W.multiplyMatrices(g,E),m.setMatrixAt(L*2+q,W)}ct.tk>=0&&(E.makeTranslation(0,1.22,0),ct.tk===0&&E.multiply(new ue().makeRotationZ(Math.sin(H)*.3)),W.multiplyMatrices(g,E),p[ct.tk].setMatrixAt(ct.ti,W))}for(let L=0;L<n;L++)T(L,0,!0);let P=()=>{for(let L of[u,x,M,m,...p])L.instanceMatrix.needsUpdate=!0};P();for(let L of[u,x,M,m,...p]){if(!L.count){L.visible=!1;continue}L.computeBoundingSphere(),L.boundingSphere.radius+=2,L.userData.ol&&Li(L,L.userData.ol,void 0,18)}function k(L,Z,tt=[],ct=null){let ft=!1;for(let H=0;H<n;H++){let Rt=y[H];if(Z&&(Rt.x-Z.x)**2+(Rt.z-Z.z)**2>260*260)continue;let Q=.25;if(ct!=null)Q=ct;else for(let q of tt){let V=(q.x-Rt.x)**2+(q.z-Rt.z)**2;V<45*45&&(Q=Math.max(Q,1-Math.sqrt(V)/70))}Rt.ex+=(Q-Rt.ex)*.05,T(H,L),ft=!0}ft&&P()}function K(){for(let L of[r,o,a,l,c,h,d])L.dispose();for(let L of[u,x,M,m,...p])L.dispose();i.remove(s)}return{update:k,dispose:K,group:s,members:y}}function jh(i,t,e=5,n=null){let s=bn(e),r=[];for(let[o,a]of t.entries())for(let l=a.m0;l<=a.m1;l+=a.spacing??1.35){let c=i.sample(l),h=Math.max(1,Math.round(a.depth/1.25));for(let d=0;d<h;d++){if(s()>a.density)continue;let f=a.off+d*1.25+s()*.35,u=(s()-.5)*.6,x=c.x+c.rx*f*a.side+c.tx*u,M=c.z+c.rz*f*a.side+c.tz*u;n&&n(x,M,1.4)||r.push({zone:o,x,y:i.heightAt(x,M),z:M,yaw:Math.atan2(-c.rx*a.side,-c.rz*a.side)+(s()-.5)*.5})}}return r}var Qh={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},tu=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],ix=3.2,nr=new Map,jt=(i,t)=>(nr.has(i)||nr.set(i,t()),nr.get(i));function eu(){for(let i of nr.values())i.dispose();nr.clear()}function sx(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function rx(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,c=t*.058,h="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])i.beginPath(),i.ellipse(o+m*c*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let d=(m,p)=>{if(p==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=h,i.lineWidth=5,i.beginPath();let y=t*.03;i.moveTo(m,a+y*1.1),i.bezierCurveTo(m-y*2.2,a-y*.2,m-y*.9,a-y*1.9,m,a-y*.6),i.bezierCurveTo(m+y*.9,a-y*1.9,m+y*2.2,a-y*.2,m,a+y*1.1),i.fill(),i.stroke();return}if(p==="closed"||p==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),p==="happy"?i.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(m-t*.025,a),i.lineTo(m+t*.025,a)),i.stroke();return}if(p==="x"){i.strokeStyle=h,i.lineWidth=8,i.lineCap="round";let y=t*.02;i.beginPath(),i.moveTo(m-y,a-y),i.lineTo(m+y,a+y),i.moveTo(m+y,a-y),i.lineTo(m-y,a+y),i.stroke();return}let S=t*.03,_=e*.085;i.fillStyle="#fff",i.strokeStyle=h,i.lineWidth=6,i.beginPath(),i.ellipse(m,a,S,_,0,0,7),i.fill(),i.stroke(),i.fillStyle=h,i.beginPath(),i.ellipse(m+S*.15,a+_*.12,S*.55,_*.6,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(m+S*.35,a-_*.2,S*.22,0,7),i.fill(),p==="half"&&(i.fillStyle=n,i.fillRect(m-S-4,a-_-4,S*2+8,_*1.05),i.strokeStyle=h,i.lineWidth=7,i.beginPath(),i.moveTo(m-S-2,a-_*.1),i.lineTo(m+S+2,a-_*.1),i.stroke())},f={sleepy:"half",smug:"half"}[s]||"open";r==="happy"&&(f="happy"),r==="love"&&(f="heart"),r==="dead"&&(f="x"),r==="effort"&&s!=="goofy"&&(f="open");for(let m of[-1,1])d(o+m*c,f);i.strokeStyle=h,i.lineWidth=10,i.lineCap="round";let u=r==="effort"||s==="determined"?.35:r==="sad"||s==="worried"?-.35:s==="smug"?.15:0;for(let m of[-1,1]){let p=o+m*c,S=a-e*.13,_=t*.026,y=p-m*_,W=p+m*_;i.beginPath(),i.moveTo(W,S-u*18),i.lineTo(y,S+u*18),i.stroke()}i.lineWidth=8,i.strokeStyle=h,i.fillStyle="#7a1e2e";let x=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")i.beginPath(),i.moveTo(x-t*.04,l-e*.02),i.quadraticCurveTo(x,l+e*.12,x+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(x-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(x,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(M==="effort"){i.fillStyle="#fff",i.beginPath(),ze(i,x-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(x-t*.035,l),i.lineTo(x+t*.035,l);for(let m=-2;m<=2;m++)i.moveTo(x+m*t*.012,l-e*.03),i.lineTo(x+m*t*.012,l+e*.035);i.stroke()}else if(M==="sad"||M==="dead")i.beginPath(),i.moveTo(x-t*.03,l+e*.04),i.quadraticCurveTo(x,l-e*.04,x+t*.03,l+e*.04),i.stroke(),M==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(x+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(M==="love"||M==="pant")i.beginPath(),i.ellipse(x,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(x-t*.03,l+e*.01),i.quadraticCurveTo(x+t*.01,l+e*.05,x+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(x-t*.03,l+e*.02);for(let m=0;m<=6;m++)i.lineTo(x-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(x-t*.04,l),i.quadraticCurveTo(x,l+e*.09,x+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(x+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(x-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(x-t*.03,l+e*.01),i.lineTo(x+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(x-t*.035,l-e*.01),i.quadraticCurveTo(x,l+e*.07,x+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function ox(i,t){return Ye(256,200,(e,n,s)=>{e.fillStyle="#ffffff",ze(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${Ql}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),Ge(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function ax(i){return Ye(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")Ge(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function nu(i,t={}){let e=i.look||{},n=Qh[e.build]||Qh.compact,s=sx(i.id+(i.nickname||"")),r=bn(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",c=tu[s%tu.length],h=[],d=gt(o),f=gt(a),u=gt(l),x=gt(c),M=new Jt(a).getHSL({}).l>.85?"#ffffff":a,m=gt(M),p=gt("#ffffff"),S=gt("#22202c"),_=(nt,it,rt=ix)=>pe(nt,it,{ol:rt,olRef:9}),y=new ne;y.name=`runner-${i.id}`;let W=new ne;y.add(W);let F=new ne;W.add(F);let A=n.leg/2,D=n.leg+n.shoe[1]*.75;F.position.y=D;let b=_(jt(`shorts${e.build}`,()=>new le(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),f);b.position.y=.02,F.add(b);let g=new ne;g.position.y=.12,F.add(g);let E=_(jt(`torso${e.build}`,()=>new le(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),d);E.position.y=n.torso[1]/2,g.add(E);for(let nt of[-1,1]){let it=pe(jt(`stripe${e.build}`,()=>new ye(.06,n.torso[1]*.8,n.torso[2]*.7)),gt(a),{cast:!1});it.position.set(nt*n.torso[0]*.5,n.torso[1]*.5,0),g.add(it)}let T=ox(i.lane??0,o);h.push(T);let P=new we(jt("bib",()=>new nn(1,.78)),gt(16777215,{map:T})),k=Math.min(.42,n.torso[0]*.6);P.scale.setScalar(k),P.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),g.add(P);let K=new ne;K.position.y=n.torso[1]+.02,g.add(K);let L=new ne;K.add(L);let Z=document.createElement("canvas");Z.width=1024,Z.height=512;let tt=new ds(Z);tt.colorSpace=ke,tt.anisotropy=4,h.push(tt);let ct=null,ft=nt=>{nt!==ct&&(ct=nt,rx(Z.getContext("2d"),1024,512,l,e.face||"grin",nt),tt.needsUpdate=!0)};ft("normal");let H=n.head,Rt=_(jt(`head${H}`,()=>new ge(H,32,20).scale(1,.98,.96)),gt(16777215,{map:tt}));Rt.position.y=H*.92,L.add(Rt);for(let nt of[-1,1]){let it=_(jt(`ear${H}`,()=>new ge(H*.2,10,8).scale(.6,1,.8)),u,2.5);it.position.set(nt*H*.97,H*.9,0),L.add(it)}let Q=_(jt(`nose${H}`,()=>new ge(H*.14,10,8)),u,2);Q.position.set(0,H*.84,H*.97),L.add(Q),wt(e.hair,e.hat),st(e.hat);let q=[];for(let nt of[-1,1]){let it=new ne;it.position.set(nt*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),g.add(it);let rt=_(jt(`sleeve${e.build}`,()=>new ge(n.armR*1.65,14,10)),d);it.add(rt);let vt=_(jt(`uarm${e.build}`,()=>new ui(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);it.add(vt);let mt=new ne;mt.position.y=-n.arm/2+n.armR*.4,it.add(mt);let It=_(jt(`farm${e.build}`,()=>new ui(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);mt.add(It);let Pt=_(jt(`hand${e.build}`,()=>new ge(n.hand,14,10).scale(1,1.1,.9)),u);Pt.position.y=-n.arm/2-n.hand*.4,mt.add(Pt),q.push({sh:it,el:mt,hand:Pt})}let V=[];for(let nt of[-1,1]){let it=new ne;it.position.set(nt*n.torso[0]*.24,0,0),F.add(it);let rt=_(jt(`thigh${e.build}`,()=>new ui(n.legR*1.15,A-n.legR,4,10).translate(0,-A/2,0)),u);it.add(rt);let vt=_(jt(`sleg${e.build}`,()=>new ae(n.legR*1.6,n.legR*1.5,A*.5,12).translate(0,-A*.2,0)),f);it.add(vt);let mt=new ne;mt.position.y=-A,it.add(mt);let It=_(jt(`shin${e.build}`,()=>new ui(n.legR,A-n.legR,4,10).translate(0,-A/2,0)),u);mt.add(It);let Pt=_(jt(`sock${e.build}`,()=>new ae(n.legR*1.12,n.legR*1.12,A*.25,10).translate(0,-A*.86,0)),gt(16777215),2.5);mt.add(Pt);let bt=new ne;bt.position.y=-A,mt.add(bt);let Dt=_(jt(`shoe${e.build}`,()=>new le(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),m);bt.add(Dt);let Wt=pe(jt(`sole${e.build}`,()=>new le(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),p,{ol:2.5,olRef:9});bt.add(Wt);let Xt=pe(jt(`swoosh${e.build}`,()=>new ye(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),gt(o),{cast:!1});bt.add(Xt),V.push({hp:it,kn:mt,an:bt})}pt(e.accessory);let G={},Y=new so(new Hs({transparent:!0,depthTest:!1}));Y.scale.setScalar(.9),Y.visible=!1,Y.renderOrder=20,y.add(Y);let ot=nt=>{if(!nt){Y.visible=!1;return}G[nt]||(G[nt]=ax(nt),h.push(G[nt])),Y.material.map=G[nt],Y.material.needsUpdate=!0,Y.visible=!0},yt=D+.12+n.torso[1]+.02+H*2;Y.position.y=yt+.45;let Tt=new Set([E,b,Rt,...q.flatMap(nt=>[nt.hand]),...V.map(nt=>nt.an.children[0])]);for(let nt of q)nt.sh.children.forEach(it=>it.isMesh&&Tt.add(it));for(let nt of V)nt.hp.children.forEach(it=>it.isMesh&&Tt.add(it));y.traverse(nt=>{nt.isMesh&&!nt.userData.isOutline&&(nt.castShadow=Tt.has(nt))});function wt(nt,it){let rt=nt||"short";if(rt==="bald")return;let vt=(mt=1.07,It=.48)=>{let Pt=_(jt(`hcap${H}${mt}${It}`,()=>new ge(H*mt,24,14,0,Math.PI*2,0,Math.PI*It)),x);return Pt.position.y=H*.92,Pt.rotation.x=-.32,L.add(Pt),Pt};if(rt==="curly"||rt==="afro"){let mt=jt(`curly${H}`,()=>{let Pt=bn(7),bt=[];for(let Dt=0;Dt<26;Dt++){let Wt=Pt()*Math.PI*.55,Xt=Pt()*Math.PI*2,Lt=new z(Math.sin(Wt)*Math.cos(Xt),Math.cos(Wt),Math.sin(Wt)*Math.sin(Xt)).multiplyScalar(H*1.02);Lt.z>H*.55&&Lt.y<H*.75||bt.push(new qe(H*.33,1).translate(Lt.x,Lt.y,Lt.z-H*.08))}return rn(bt)}),It=_(mt,x);It.position.y=H*.98,L.add(It);return}if(it==="beanie"||it==="bucket"){vt(1.05,.5);return}if(vt(),rt==="long"){let mt=_(jt(`hlong${H}`,()=>new le(H*1.8,H*1.6,H*.5,3,H*.2)),x);mt.position.set(0,H*.4,-H*.62),L.add(mt)}if(rt==="ponytail"){let mt=new ne;mt.position.set(0,H*1.35,-H*.85),L.add(mt);for(let It=0;It<3;It++){let Pt=_(jt(`pt${H}${It}`,()=>new ge(H*(.32-It*.05),12,8)),x);Pt.position.set(0,-It*H*.32,-It*H*.18),mt.add(Pt)}L.userData.pony=mt}if(rt==="bun"){let mt=_(jt(`bun${H}`,()=>new ge(H*.38,14,10)),x);mt.position.set(0,H*2,-H*.2),L.add(mt)}if(rt==="mohawk"||rt==="spiky"){let mt=rt==="mohawk"?5:9;for(let It=0;It<mt;It++){let Pt=_(jt(`spk${H}`,()=>new Le(H*.2,H*.7,8)),x),bt=rt==="mohawk"?0:It/mt*Math.PI*2,Dt=rt==="mohawk"?-.9+It/(mt-1)*1.8:.6;Pt.position.set(Math.sin(bt)*Math.sin(Dt)*H,H*.92+Math.cos(Dt)*H*1.05,(rt==="mohawk"?Math.sin(Dt):Math.cos(bt)*Math.sin(Dt))*H),Pt.lookAt(Pt.position.clone().multiplyScalar(3)),Pt.rotateX(Math.PI/2),L.add(Pt)}}}function st(nt){if(!nt)return;let it=gt(a==="#ffffff"||a==="#f8f8f8"?o:a),rt=gt(o);if(nt==="cap"||nt==="visor"){if(nt==="cap"){let mt=_(jt(`capd${H}`,()=>new ge(H*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),it);mt.position.y=H*.98,mt.rotation.x=-.18,L.add(mt)}else{let mt=_(jt(`vband${H}`,()=>new Qe(H*1,H*.12,8,24)),it);mt.rotation.x=Math.PI/2-.25,mt.position.y=H*1.35,L.add(mt)}let vt=_(jt(`brim${H}`,()=>new ae(H*.75,H*.75,H*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),rt);vt.position.set(0,H*1.42,H*.62),vt.rotation.x=.12,L.add(vt)}else if(nt==="beanie"){let vt=_(jt(`bean${H}`,()=>new ge(H*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),it);vt.position.y=H*.96,vt.rotation.x=-.12,L.add(vt);let mt=_(jt(`brim2${H}`,()=>new Qe(H*1.05,H*.17,8,24)),rt);mt.rotation.x=Math.PI/2-.12,mt.position.y=H*1.12,L.add(mt);let It=_(jt(`bob${H}`,()=>new qe(H*.3,1)),rt);It.position.y=H*2.25,L.add(It)}else if(nt==="headband"||nt==="sweatband"){let vt=_(jt(`hb${H}`,()=>new Qe(H*1,H*.13,8,28)),it);vt.rotation.x=Math.PI/2-.2,vt.position.y=H*1.3,L.add(vt);let mt=_(jt(`hbt${H}`,()=>new le(H*.2,H*.5,H*.08,2,.02)),it);mt.position.set(.12,H*1.1,-H*1.05),mt.rotation.z=.5,L.add(mt),L.userData.tail=mt}else if(nt==="bucket"){let vt=_(jt(`buck${H}`,()=>new ae(H*.8,H*1.02,H*.7,20)),it);vt.position.y=H*1.75,L.add(vt);let mt=_(jt(`buckb${H}`,()=>new ae(H*1.5,H*1.5,H*.06,24)),rt);mt.position.y=H*1.42,mt.rotation.x=.1,L.add(mt)}else if(nt==="crown"||nt==="tiara"){let vt=_(jt(`crown${H}`,()=>new ae(H*.7,H*.62,H*.5,8,1,!0)),gt("#ffd23f",{side:Pe}));vt.position.y=H*2,L.add(vt)}else if(nt==="wizard"||nt==="party"){let vt=_(jt(`cone${H}`,()=>new Le(H*.8,H*1.8,16)),it);vt.position.y=H*2.3,vt.rotation.z=.15,L.add(vt);let mt=_(jt(`bob${H}`,()=>new qe(H*.3,1)),rt);mt.position.set(-H*.12,H*3.15,0),L.add(mt)}else if(nt==="helmet"||nt==="bike_helmet"){let vt=_(jt(`helm${H}`,()=>new ge(H*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),it);vt.position.y=H*1,L.add(vt)}else if(nt==="santa"){let vt=_(jt(`santa${H}`,()=>new Le(H*.95,H*1.6,16)),gt("#e8313f"));vt.position.y=H*2.2,vt.rotation.z=.5,L.add(vt);let mt=_(jt(`santar${H}`,()=>new Qe(H*.95,H*.2,8,24)),gt("#ffffff"));mt.rotation.x=Math.PI/2,mt.position.y=H*1.45,L.add(mt)}else{let vt=_(jt(`cone${H}`,()=>new Le(H*.8,H*1.8,16)),it);vt.position.y=H*2.3,L.add(vt)}}function pt(nt){if(nt){if(nt==="sunglasses"||nt==="glasses"){let it=nt==="sunglasses";for(let vt of[-1,1]){let mt=_(jt(`lens${H}${it}`,()=>new le(H*.5,H*.32,H*.08,2,H*.06)),it?gt("#141420"):gt("#cfefff"),2);mt.position.set(vt*H*.3,H*1.02,H*.98),mt.rotation.y=vt*.28,L.add(mt)}let rt=pe(jt(`bridge${H}`,()=>new ye(H*.3,H*.06,H*.06)),gt("#141420"),{cast:!1});rt.position.set(0,H*1.06,H*1.04),L.add(rt)}else if(nt==="medal"){let it=_(jt("ribbon",()=>new Qe(.2,.03,6,20,Math.PI)),gt("#2e9bff"),2);it.rotation.z=Math.PI,it.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),it.rotation.x=-.3,g.add(it);let rt=_(jt("medal",()=>new ae(.11,.11,.04,16).rotateX(Math.PI/2)),gt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);rt.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),g.add(rt),P.position.y-=.1,P.position.x=.12,P.scale.multiplyScalar(.8)}else if(nt==="headphones"){let it=_(jt(`hp${H}`,()=>new Qe(H*1.08,H*.07,6,24,Math.PI)),gt("#22202c"),2);it.position.y=H*.95,L.add(it);for(let rt of[-1,1]){let vt=_(jt(`hpc${H}`,()=>new ae(H*.3,H*.3,H*.2,14).rotateZ(Math.PI/2)),gt(o),2.5);vt.position.set(rt*H*1.02,H*.92,0),L.add(vt)}}else if(nt==="sweatband"||nt==="wristbands"||nt==="watch")for(let it of q){let rt=_(jt(`wb${e.build}`,()=>new ae(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),gt(nt==="watch"?"#22202c":a),2);if(it.el.add(rt),nt==="watch")break}else if(nt==="scarf"){let it=_(jt("scarf",()=>new Qe(.22,.08,8,18)),gt(a));it.rotation.x=Math.PI/2,it.position.y=.02,K.add(it);let rt=_(jt("scarft",()=>new le(.14,.5,.06,2,.03)),gt(a));rt.position.set(.1,-.15,-.25),rt.rotation.x=.5,K.add(rt),L.userData.tail2=rt}else if(nt==="cape"){let it=_(jt(`cape${e.build}`,()=>new nn(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),gt(a,{side:Pe}),2),rt=new ne;rt.position.set(0,n.torso[1],-n.torso[2]/2-.03),rt.add(it),g.add(rt),L.userData.cape=rt}else if(nt==="backpack"){let it=_(jt(`bp${e.build}`,()=>new le(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),gt(a));it.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),g.add(it)}else if(nt==="moustache"||nt==="mustache"){let it=_(jt(`mou${H}`,()=>new ui(H*.09,H*.5,4,8).rotateZ(Math.PI/2)),gt("#3a2616"),2);it.position.set(0,H*.7,H*.98),L.add(it)}else if(nt==="bowtie")for(let it of[-1,1]){let rt=_(jt("bow",()=>new Le(.08,.16,4).rotateZ(Math.PI/2)),gt(a),2);rt.position.set(it*.08,n.torso[1]-.06,n.torso[2]/2+.03),rt.rotation.z=it>0?Math.PI:0,g.add(rt)}else if(nt==="tutu"){let it=_(jt(`tutu${e.build}`,()=>new ae(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),gt("#ff9bd2",{side:Pe}),2);it.position.y=-.05,F.add(it)}}}let B={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},Et=B.j,Mt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let nt of Mt)Et[nt]=0;let et={},At="idle",Ht=null,Nt=0;function O(nt,it=null){(nt!==At||it!==Ht)&&(At=nt,Ht=it,Nt=0)}function C(nt,it={}){B.t+=nt,Nt+=nt;let rt=B.t;for(let Pt of Mt)et[Pt]=0;let vt="normal",mt=10;if(At==="run"||At==="jog"||At==="trudge"||At==="distracted"){let Pt=Math.max(.5,it.speed??3.5),bt=Math.max(.2,it.rate??1),Dt=At==="trudge",Wt=Dt?1.7:(2.55+.14*(Pt-3.5))*Math.pow(bt,.3)*(At==="jog"?.8:1);B.phase+=nt*Math.PI*Wt;let Xt=B.phase,Lt=Math.sin(Xt),Qt=Math.cos(Xt),qt=Dt?.4:Math.max(.45,Math.min(1,.62+.13*(Pt-3.5)));et.hipLx=-qt*Lt,et.hipRx=qt*Lt,et.kneeL=.2+(Dt?.5:1.35)*Math.max(0,Qt)*(.7+qt*.3),et.kneeR=.2+(Dt?.5:1.35)*Math.max(0,-Qt)*(.7+qt*.3),et.ankL=-.2*Lt,et.ankR=.2*Lt;let w=Dt?.3:.75*qt+.15;et.shLx=w*Lt,et.shRx=-w*Lt,et.shLz=-.18,et.shRz=.18,et.elL=Dt?-.5:-1.5,et.elR=Dt?-.5:-1.5,et.twist=.16*Lt,et.roll=.05*Lt,et.bob=(Dt?.03:.11)*(Math.abs(Qt)-.4),et.lean=(Dt?.05:.16)+Math.max(-.25,Math.min(.45,(it.slope??0)*1.6)),et.headX=-et.lean*.6,et.headY=-.08*Lt,mt=18,vt=it.effort>.6?"effort":it.effort>.3?"pant":"normal",Dt&&(et.headX=.35,et.lean=.25,vt="sad"),At==="distracted"&&(et.headY=it.lookYaw??.9,et.headX=-.15,et.twist+=(it.lookYaw??.9)*.3,vt="love")}else if(At==="ready")et.hipLx=-.5,et.hipRx=.35,et.kneeL=.6,et.kneeR=.5,et.lean=.35,et.bob=-.12,et.shLx=.5,et.shRx=-.6,et.elL=-1.3,et.elR=-1.3,et.headX=-.25,et.bob+=Math.sin(rt*3)*.01,vt="effort";else if(At==="wave")et.shRz=2.7,et.elR=.2*Math.sin(rt*9)-.25,et.shRx=Math.sin(rt*9)*.25,et.shLz=-.3,et.elL=-.4,et.bob=Math.abs(Math.sin(rt*4))*.05,et.headY=.1*Math.sin(rt*2),vt="happy";else if(At==="pose"){let Pt=Ht||"flex";if(Pt==="flex")et.shLz=-1.5,et.shRz=1.5,et.elL=-1.9-Math.sin(rt*6)*.15,et.elR=-1.9-Math.sin(rt*6+1)*.15,et.shLx=-0,et.bob=-.06+Math.abs(Math.sin(rt*3))*.03,et.hipSpread=.25,et.kneeL=.3,et.kneeR=.3,vt="effort";else if(Pt==="point")et.shRx=-1.5,et.elR=0,et.shLz=-.3,et.elL=-1.6,et.shLx=-.3,et.headX=-.1,et.lean=-.05,vt="happy",et.bob=Math.sin(rt*5)*.02;else if(Pt==="stretch")et.hipRx=-.2,et.kneeR=2.3,et.shRx=.8,et.elR=-.6,et.shLz=-2.6,et.lean=.08+Math.sin(rt*2)*.04,vt="smug";else if(Pt==="spin"){let bt=Math.min(1,Nt/1.1);et.bodyY=(1-(1-bt)**2)*Math.PI*4,et.shLz=bt<1?-1.3:-2.6,et.shRz=bt<1?1.3:2.6,et.bob=bt<1?Math.abs(Math.sin(rt*7))*.2:Math.abs(Math.sin(rt*5))*.12,vt="happy"}else Pt==="bow"?(et.lean=.75+Math.sin(rt*2)*.05,et.shLx=.4,et.shRx=-1.2,et.elR=-1.6,et.shRz=.4,et.headX=-.2,vt="happy"):(et.shLz=-2.5,et.shRz=2.5,et.bob=Math.abs(Math.sin(rt*6))*.25,vt="happy");vt==="smug"&&(vt="normal")}else if(At==="celebrate"){let Pt=Ht||"jump";if(Pt==="jump"){let bt=Math.abs(Math.sin(rt*5.5));et.bob=bt*.55,et.shLz=-2.6-bt*.3,et.shRz=2.6+bt*.3,et.elL=-.2,et.elR=-.2,et.kneeL=et.kneeR=(1-bt)*.8,et.hipLx=et.hipRx=-(1-bt)*.4,vt="happy",mt=22}else if(Pt==="fist"){let bt=Math.sin(rt*7);et.shRx=-2.6,et.elR=-.4+bt*.4,et.shLx=.4,et.elL=-1.8,et.bob=Math.abs(bt)*.08,et.lean=-.1,vt="happy"}else Pt==="kneel"?(et.lean=.85,et.kneeL=et.kneeR=.7,et.hipLx=et.hipRx=-.6,et.bob=-.25+Math.sin(rt*7)*.025,et.shLx=et.shRx=-.55,et.elL=et.elR=-.1,et.shLz=-.15,et.shRz=.15,et.headX=-.6,vt="pant"):Pt==="collapse"?(et.bodyX=-Math.PI/2+.05,et.shLz=-2.2,et.shRz=2.2,et.hipSpread=.4,et.kneeL=.3+Math.max(0,Math.sin(rt*9))*.4*(Math.sin(rt*.7)>.6?1:0),et.kneeR=.2,vt="dead",mt=4):Pt==="shrug"&&(et.shLz=-.9,et.shRz=.9,et.elL=-1.4,et.elR=-1.4,et.shLx=-.5,et.shRx=-.5,et.headX=.1,et.headY=Math.sin(rt*1.5)*.3,vt="sad")}else et.bob=Math.sin(rt*2)*.015,et.shLz=-.18,et.shRz=.18,et.elL=-.25,et.elR=-.25,et.headY=Math.sin(rt*.7)*.25,et.lean=.02,et.kneeL=et.kneeR=.05;it.lookYaw!=null&&At!=="distracted"&&(et.headY+=it.lookYaw);let It=1-Math.exp(-mt*nt);for(let Pt of Mt){if(Pt==="bodyY"&&At==="pose"&&Ht==="spin"){Et[Pt]=et[Pt];continue}Et[Pt]+=(et[Pt]-Et[Pt])*It}if(At==="pose"&&Ht==="spin"||(Et.bodyY=Et.bodyY%(Math.PI*2),Et.bodyY>Math.PI&&(Et.bodyY-=Math.PI*2)),V[0].hp.rotation.set(Et.hipLx,0,-Et.hipSpread),V[1].hp.rotation.set(Et.hipRx,0,Et.hipSpread),V[0].kn.rotation.x=Et.kneeL,V[1].kn.rotation.x=Et.kneeR,V[0].an.rotation.x=Et.ankL-Et.kneeL*.35,V[1].an.rotation.x=Et.ankR-Et.kneeR*.35,q[0].sh.rotation.set(Et.shLx,0,Et.shLz-0),q[1].sh.rotation.set(Et.shRx,0,Et.shRz),q[0].el.rotation.x=Et.elL,q[1].el.rotation.x=Et.elR,g.rotation.set(Et.lean,Et.twist,0),F.rotation.set(0,-Et.twist*.5,Et.roll),F.position.y=D+Et.bob,L.rotation.set(Et.headX,Et.headY,0),W.rotation.set(Et.bodyX,Et.bodyY,Et.bodyZ),W.position.y+=((At==="celebrate"&&Ht==="collapse"?n.torso[2]*.5+.08:0)-W.position.y)*It,L.userData.pony&&(L.userData.pony.rotation.x=.4+Math.sin(B.phase*2)*.35),L.userData.tail&&(L.userData.tail.rotation.x=.6+Math.sin(B.phase*2)*.3),L.userData.cape&&(L.userData.cape.rotation.x=-.3-Math.min(1.1,(it.speed??0)*.15)+Math.sin(rt*8)*.08),it.expr&&(vt=it.expr),ft(vt),Y.visible){Y.position.y=yt+.45+Math.sin(rt*6)*.08;let Pt=.9+Math.sin(rt*9)*.05;Y.scale.set(Pt,Pt,Pt)}}function dt(){for(let nt of h)nt.dispose?.();Y.material.dispose()}return{id:i.id,info:i,root:y,update:C,set:O,setPop:ot,setExpr:ft,dispose:dt,height:yt,hipH:D,get state(){return At},get variant(){return Ht}}}function xs(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function iu(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function su(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function Co(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}var lx=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function ru(i,t,e){let n=i.timeMap,s={};e.forEach((b,g)=>s[b.id]=b.lane??g+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Ce-1.6)/Math.max(1,r-1)),c=i.runners.map((b,g)=>{let E=su(n,b.officialS),T=((s[b.id]??g+1)-a)*l;return{...b,finishB:E,base:T,seed:g*1.7+.3}}),h=Object.fromEntries(c.map(b=>[b.id,b])),d=[...c].sort((b,g)=>b.officialS-g.officialS).map(b=>b.id),f=Object.fromEntries(d.map((b,g)=>[b,g+1])),u=h[d[0]],x=d.map(b=>h[b].officialS),M=h[d[0]].finishB,m=h[d.at(-1)].finishB,p=r>1&&x[1]-x[0]<=1.5,S=b=>Math.max(.05,(Co(n,b+.05)-Co(n,b-.05))/.1),_=new Map;function y(b){let g=Math.round(b*1e3);if(_.has(g))return _.get(g);let E=b<=0?0:Co(n,b),T=b<=0?4:S(b),P={b,raceS:E,rate:T,byId:{},order:[]};for(let Z of c){let tt=xs(Z.progress,E),ct=E>=Z.officialS&&b>=Z.finishB-1e-6,ft=(xs(Z.progress,E+1)-xs(Z.progress,Math.max(0,E-1)))/(E>1?2:1);P.byId[Z.id]={id:Z.id,m:tt,finished:ct,vRace:ct?0:ft,place:f[Z.id]}}for(let Z of c){let tt=P.byId[Z.id],ct=tt.m,ft=Z.base;ft+=.22*Math.sin(tt.m/85+Z.seed);for(let Q of c){if(Q===Z)continue;let q=P.byId[Q.id],V=tt.m-q.m;if(Math.abs(V)<4&&!tt.finished&&!q.finished){let G=(1-Math.abs(V)/4)*.32;ft+=Math.sign(Z.base-Q.base||Z.seed-Q.seed)*G}}let H=0;if(tt.finished){let Q=b-Z.finishB,q=(xs(Z.progress,Z.officialS)-xs(Z.progress,Z.officialS-2))/2*S(Z.finishB),V=Math.min(14,Math.max(4,q)),G=1.6;ct=5e3+(Q<G?V*(Q-Q*Q/(2*G)):V*G/2+Math.min(10+f[Z.id]*1.5,(Q-G)*.9));let ot=(f[Z.id]-(r+1)/2)*1.6;ft=ft+(ot-ft)*lx(0,2.5,Q),H=Q}let Rt=t.sample(ct,Z.id);ft*=1-Rt.div,ft=Math.max(-Ce/2+.6,Math.min(Ce/2-.6,ft)),Object.assign(tt,{mVis:ct,x:Rt.x+Rt.rx*ft,z:Rt.z+Rt.rz*ft,y:t.heightAt(Rt.x+Rt.rx*ft,Rt.z+Rt.rz*ft)+.16,tx:Rt.tx,tz:Rt.tz,slope:Rt.slope,div:Rt.div,divInfo:Rt.divInfo,lat:ft,post:H,distToFinish:Math.max(0,5e3-tt.m)})}let k=c.filter(Z=>P.byId[Z.id].finished).sort((Z,tt)=>Z.officialS-tt.officialS),K=c.filter(Z=>!P.byId[Z.id].finished).sort((Z,tt)=>P.byId[tt.id].m-P.byId[Z.id].m||Z.officialS-tt.officialS);P.order=[...k,...K].map(Z=>Z.id),P.leader=P.byId[P.order[0]];let L=h[P.order[0]];for(let[Z,tt]of P.order.entries()){let ct=P.byId[tt];if(ct.finished)ct.gapText=Z===0?Io(h[tt].officialS):`+${(h[tt].officialS-u.officialS).toFixed(0)}s`;else if(Z===0)ct.gapText="LEADER";else{let ft=P.byId[P.order[0]].finished?u:L;ct.gapText=`+${Math.max(0,E-iu(ft.progress,ct.m)).toFixed(1)}s`}}return _.size>400&&_.clear(),_.set(g,P),P}return{stateAt:y,orderAt:b=>y(b).order,gapM:(b,g,E)=>{let T=y(E);return Math.abs((T.byId[b]?.m??0)-(T.byId[g]?.m??0))},finishedAt:(b,g)=>y(g).byId[b]?.finished,allFinishedAt:b=>b>m,firstFinishB:M,lastFinishB:m,photoFinish:p,finishOrder:d,place:f,byId:h,R:c,rateAt:S,durationS:n.durationS}}function Io(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}function ou({plan:i,sim:t,backedIds:e=[],hasDiversion:n}){let s=i.events,r=t.lastFinishB+3.5,o=[],a=(A,D,b,g,E={})=>{b-D>=1.2&&o.push({type:A,a:D,b,prio:g,...E})},l=t.firstFinishB,c=s.filter(A=>A.type==="finish").sort((A,D)=>A.broadcastS-D.broadcastS),h=l-5.5;c.forEach((A,D)=>{let b=c[D-1];b&&A.broadcastS-b.broadcastS>7.5&&(a("front",b.broadcastS+2.2,A.broadcastS-3.2,10,{ids:[A.who],tag:"chaser"}),h=A.broadcastS-3.2),a("finishcam",h,A.broadcastS+2.2,10,{ids:[A.who]}),h=A.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let d=s.find(A=>A.type==="final_stretch");if(d){let A=d.broadcastS,D=l-5.5,b=Math.max(1,Math.round((D-A)/6)),g=["final","track","battle","final","drone","front"];for(let E=0;E<b;E++){let T=A+(D-A)*E/b,P=A+(D-A)*(E+1)/b,k=(T+P)/2,K=t.orderAt(k),L=g[E%g.length],Z=[K[0]];L==="battle"&&(Z=[K[0],K[1]]);let tt=t.gapM(K[0],K[1],k)<12;E===0?(L="final",Z=[K[0]]):tt&&L!=="final"&&(L="battle",Z=[K[0],K[1]]),a(L,T,P,5,{ids:Z})}}let f=s.filter(A=>A.type==="diversion").sort((A,D)=>A.broadcastS-D.broadcastS);f[0]&&a("distracted",f[0].broadcastS+.6,Math.min(f[0].endBroadcastS-.4,f[0].broadcastS+6),9,{ids:[f[0].who],banner:!0});for(let A of s.filter(D=>D.type==="hill")){let D=t.rateAt(A.broadcastS),b=Math.max(2.6,Math.min(6,140/Math.max(1,D*3.4)));a("hill",A.broadcastS-1.4,A.broadcastS+b,7,{lap:A.lap})}let u=s.find(A=>A.type==="lap");u&&a("lapboard",u.broadcastS-2.6,u.broadcastS+2,6);for(let A of s.filter(D=>D.type==="lead_change"))a("battle",A.broadcastS-1.6,A.broadcastS+2.8,6,{ids:[A.to,A.from],tag:"lead"});let x=-1e9,M=s.filter(A=>A.type==="lead_change").map(A=>A.broadcastS);for(let A of s.filter(D=>D.type==="overtake")){let D=e.includes(A.by)||e.includes(A.on),g=t.orderAt(A.broadcastS+.5).indexOf(A.by)<=1;!D&&!g||A.broadcastS-x<11||M.some(E=>Math.abs(E-A.broadcastS)<6)||(x=A.broadcastS,a("battle",A.broadcastS-1.4,A.broadcastS+2.6,D?4:3,{ids:[A.by,A.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((A,D)=>D.prio-A.prio||A.a-D.a);let m=[],p=(A,D)=>!m.some(b=>A<b.b&&D>b.a);for(let A of o){if(p(A.a,A.b)){m.push(A);continue}let D=A.a,b=A.b;for(let g of m)D<g.b&&b>g.a&&(g.a<=D?D=g.b:b=Math.min(b,g.a));b-D>=2.2&&p(D,b)&&m.push({...A,a:D,b})}m.sort((A,D)=>A.a-D.a);let S=[],_=-8.5,y=0,W=["track","drone","front","chase","track","blimp","front","side"],F=(A,D)=>{let b=D-A;if(b<=.05)return;if(b<2.2&&S.length){S.at(-1).b=D;return}let g=Math.max(1,Math.round(b/5.2));for(let E=0;E<g;E++){let T=A+b*E/g,P=A+b*(E+1)/g,k=(T+P)/2,K=t.orderAt(k),L=W[y++%W.length],Z=[K[0]],tt=e.filter(ct=>!t.finishedAt(ct,k)&&t.gapM(K[0],ct,k)>25);tt.length&&y%3===0?(L="chase",Z=[tt[y%tt.length]]):L==="track"||L==="side"?Z=K.filter(ct=>t.gapM(K[0],ct,k)<15).slice(0,3):(L==="drone"||L==="blimp")&&(Z=K),t.allFinishedAt(k-2)&&(L="celebrate",Z=t.finishOrder),S.push({type:L,a:T,b:P,prio:1,ids:Z,filler:!0})}};for(let A of m)A.a>_&&F(_,A.a),S.push(A),_=Math.max(_,A.b);return _<r+30&&F(_,r+30),S}function au({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new z,look:new z,fov:45},o={off:new z,lookOff:new z,fov:45,init:!1},a=null,l=new z,c=new z,h=new z(0,1,0),d={};function f(S,_){let y=e.stateAt(_),W=S.map(K=>y.byId[K]).filter(Boolean);if(!W.length)return{p:new z(y.leader.x,y.leader.y,y.leader.z),h:new z(y.leader.tx,0,y.leader.tz),m:y.leader.m,spread:0};let F=new z,A=0;for(let K of W)F.x+=K.x,F.y+=K.y,F.z+=K.z,A+=K.m;F.divideScalar(W.length),A/=W.length;let D=1e9,b=-1e9;for(let K of W)D=Math.min(D,K.m),b=Math.max(b,K.m);let g=W[0],E=Math.max(0,g.mVis-18),T=t.xzAt(E,g.id),P=t.xzAt(E+36,g.id),k=new z(P.x-T.x,0,P.z-T.z).normalize();return isFinite(k.x)||k.set(0,0,1),{p:F,h:k,m:A,spread:b-D,list:W}}let u=S=>new z(-S.z,0,S.x);function x(S,_,y){let W=(_-S.a)/Math.max(.01,S.b-S.a),F=n.anchors.finish,A=n.anchors.start,D,b,g=45,E=!0;switch(S.type){case"heli":{let T=new z(150,0,0),P=new z(A.x,A.y,A.z),k=tc(Math.min(1,W*1.05)),K=-1.2+k*1.6,L=420-k*360;D=new z(T.x+Math.cos(K)*L,170-k*140,T.z+Math.sin(K)*L).lerp(new z(P.x-A.tx*40+A.rx*25,P.y+22,P.z-A.tz*40+A.rz*25),k*k),b=T.clone().setY(10).lerp(P,Math.min(1,k*1.3)),g=50,E=!1;break}case"startgo":{let T=new z(A.x,A.y,A.z),P=new z(A.tx,0,A.tz),k=u(P);if(_<.6)D=T.clone().addScaledVector(P,9.5+(_+3.2)*.25).addScaledVector(k,2.6).add(h.clone().multiplyScalar(1.9)),b=T.clone().add(h.clone().multiplyScalar(1.3)).addScaledVector(P,-1),g=42;else{let K=f(e.orderAt(_).slice(0,3),_);D=K.p.clone().addScaledVector(K.h,11).addScaledVector(u(K.h),3.5).add(h.clone().multiplyScalar(2.2)),b=K.p.clone().add(h.clone().multiplyScalar(1.2)),g=44}E=!1;break}case"track":case"side":{let T=f(S.ids,_),P=u(T.h),k=S.type==="side"?-1:1,K=8+Math.min(14,T.spread*.6);D=T.p.clone().addScaledVector(P,k*(K+2)).addScaledVector(T.h,3+Math.sin(W*3)*.6).add(h.clone().multiplyScalar(2.6)),b=T.p.clone().addScaledVector(T.h,1.5).add(h.clone().multiplyScalar(1.1)),g=42;break}case"front":case"final":{let T=f(S.ids,_),P=u(T.h),k=S.type==="final"?7.5-W*1.5:7;D=T.p.clone().addScaledVector(T.h,k).addScaledVector(P,S.type==="final"?1.4:-2).add(h.clone().multiplyScalar(S.type==="final"?.9:1.8)),b=T.p.clone().add(h.clone().multiplyScalar(1.35)).addScaledVector(T.h,-2),g=S.type==="final"?38:42;break}case"chase":{let T=f(S.ids,_),P=u(T.h);D=T.p.clone().addScaledVector(T.h,-7.5).addScaledVector(P,2.2).add(h.clone().multiplyScalar(3)),b=T.p.clone().addScaledVector(T.h,5).add(h.clone().multiplyScalar(1.2)),g=46;break}case"battle":{let T=f(S.ids,_),P=u(T.h),k=Math.floor(S.a*7)%2?1:-1,K=11+Math.min(10,T.spread*.7);D=T.p.clone().addScaledVector(T.h,K*.7).addScaledVector(P,k*K*.75).add(h.clone().multiplyScalar(2.3)),b=T.p.clone().add(h.clone().multiplyScalar(1.1)),g=42;break}case"drone":case"blimp":{let T=e.stateAt(_),P=T.byId[T.order[0]],k=T.order.map(H=>T.byId[H]).filter(H=>!H.finished),K=new z;for(let H of k.length?k:[P])K.add(new z(H.x,H.y,H.z));K.divideScalar(Math.max(1,k.length));let L=k.length?k[0].m-k.at(-1).m:0,Z=f([T.order[0]],_),tt=S.type==="blimp"?38+Math.min(50,L*.25):20+Math.min(40,L*.25),ct=S.type==="blimp"?48:30+Math.min(40,L*.25),ft=K.clone().lerp(new z(P.x,P.y,P.z),.5);D=ft.clone().addScaledVector(Z.h,-ct).addScaledVector(u(Z.h),ct*.6).add(h.clone().multiplyScalar(tt)),b=ft,g=46;break}case"hill":{let T=n.anchors.hillM,P=t.sample(T+105),k=new z(P.tx,0,P.tz),K=u(k);D=new z(P.x,P.y,P.z).addScaledVector(K,6.5).add(h.clone().multiplyScalar(2.2));let L=e.stateAt(_),Z=L.order.map(H=>L.byId[H]).filter(H=>t.geoOf(H.m)>T-120&&t.geoOf(H.m)<T+200&&!H.finished),tt=Z.length?Z[0]:null,ct=tt?new z(tt.x,tt.y+1.1,tt.z):new z(P.x,P.y+1,P.z);b=ct;let ft=D.distanceTo(ct);g=Ph.clamp(2*Math.atan(5.5/ft)*180/Math.PI,12,50),E=!0;break}case"lapboard":{let T=n.anchors.lapBoard,P=new z;T.getWorldPosition(P);let k=t.sample(2491),K=new z(k.tx,0,k.tz),L=u(K);D=new z(k.x,k.y,k.z).addScaledVector(L,-(4.6+3)).add(h.clone().multiplyScalar(2.4));let Z=e.stateAt(_),tt=Z.order.map(ft=>Z.byId[ft]).filter(ft=>ft.m>2350&&ft.m<2600),ct=tt.length?new z(tt[0].x,tt[0].y+1.2,tt[0].z):P.clone().add(h.clone().multiplyScalar(2));b=P.clone().add(h.clone().multiplyScalar(1.8)).lerp(ct,.45),g=46;break}case"finishcam":{let T=new z(F.tx,0,F.tz),P=u(T),k=e.stateAt(_),K=S.ids?.[0]??k.order[0],L=k.byId[K];D=new z(F.x,F.y,F.z).addScaledVector(T,16).addScaledVector(P,-4).add(h.clone().multiplyScalar(2.6));let Z=new z(F.x,F.y+2.5,F.z),tt=L&&!L.finished?new z(L.x,L.y+1.3,L.z):Z;b=Z.clone().lerp(tt,L&&!L.finished?Math.min(.85,15/Math.max(15,L.distToFinish)):.3),g=L&&!L.finished&&L.distToFinish>30?30:40;break}case"celebrate":{let T=e.stateAt(_),P=new z;for(let Z of T.order)P.add(new z(T.byId[Z].x,T.byId[Z].y,T.byId[Z].z));P.divideScalar(T.order.length);let k=new z(F.tx,0,F.tz),K=u(k),L=Math.sin(_*.15)*.5;D=P.clone().addScaledVector(k,-10*Math.cos(L)).addScaledVector(K,10*Math.sin(L)).add(h.clone().multiplyScalar(2.6)),b=P.clone().add(h.clone().multiplyScalar(1.2)),g=46,E=!1;break}case"photo":{let T=new z(F.tx,0,F.tz),P=u(T);D=new z(F.x,F.y,F.z).addScaledVector(P,8.5).add(h.clone().multiplyScalar(1.3)),b=new z(F.x,F.y+1.1,F.z),g=40,E=!1;break}case"distracted":{let T=f(S.ids,_),P=u(T.h),k=n.anchors.nearestOnRibbon(T.p.x,T.p.z),K=Math.sign((k[0]-T.p.x)*P.x+(k[1]-T.p.z)*P.z)||1,L=P.clone().multiplyScalar(K);if(W<.55){let Z=T.h.clone().multiplyScalar(.55).addScaledVector(L,.85).normalize();D=T.p.clone().addScaledVector(Z,5.2).add(h.clone().multiplyScalar(2)),b=T.p.clone().add(h.clone().multiplyScalar(1.85)),g=46}else D=T.p.clone().addScaledVector(T.h,-12).addScaledVector(L,-9).add(h.clone().multiplyScalar(7.5)),b=T.p.clone().addScaledVector(L,10).add(h.clone().multiplyScalar(2.5)),g=52;break}default:{let T=f(S.ids||[],_);D=T.p.clone().addScaledVector(T.h,-10).add(h.clone().multiplyScalar(4)),b=T.p.clone()}}return{pos:D,look:b,fov:g,damp:E}}let M=0;function m(S,_,y){let W=y.find(g=>S>=g.a&&S<g.b)||y.at(-1),F=W.type==="distracted"&&(S-W.a)/(W.b-W.a)>=.55?1:0,A=W!==a||F!==M;M=F,a=W;let D=x(W,S,_);if(!D)return{shot:W,cut:A};let b=t.heightAt(D.pos.x,D.pos.z)+.8;if(D.pos.y<b&&(D.pos.y=b),A||!o.init||!D.damp)r.pos.copy(D.pos),r.look.copy(D.look),o.fov=D.fov,o.init=!0;else{let g=1-Math.exp(-4.5*_),E=r.pos.clone().sub(r.look),T=D.pos.clone().sub(D.look);E.lerp(T,g),r.look.copy(D.look),r.pos.copy(r.look).add(E),o.fov+=(D.fov-o.fov)*g}return i.position.copy(r.pos),i.lookAt(r.look),Math.abs(i.fov-o.fov)>.01&&(i.fov=o.fov,i.updateProjectionMatrix()),{shot:W,cut:A}}function p(){o.init=!1,a=null}return{update:m,reset:p,evaluate:x,get shot(){return a},cam:r}}function tc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var cx=`
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:"Lilita One","Arial Black",Impact,sans-serif;color:#fff;
  --ink:#1a1420;--blue:#2e6fe0;--blue2:#1d4fb8;--yellow:#ffd23f;--pink:#ff3d8b;--u:calc(min(1vw,1.78vh));letter-spacing:.02em}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(-10deg);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.35)}
.mr-panel>.mr-unskew{transform:skewX(10deg)}
.mr-top{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;gap:calc(var(--u)*1);align-items:stretch}
.mr-live{background:var(--pink);padding:calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*1.5);display:flex;align-items:center;gap:calc(var(--u)*.5)}
.mr-live i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff;display:inline-block;animation:mrblink 1s infinite}
@keyframes mrblink{50%{opacity:.25}}
.mr-clock{padding:calc(var(--u)*.2) calc(var(--u)*1.4);font-size:calc(var(--u)*2.9);line-height:1.1;min-width:calc(var(--u)*12);text-align:center}
.mr-lap{padding:calc(var(--u)*.2) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*1.4)}
.mr-lap b{font-size:calc(var(--u)*2.9);font-weight:400}
.mr-dist{padding:calc(var(--u)*.3) calc(var(--u)*1.2);font-size:calc(var(--u)*1.4);display:flex;flex-direction:column;justify-content:center;min-width:calc(var(--u)*11)}
.mr-bar{height:calc(var(--u)*.7);background:rgba(0,0,0,.35);border-radius:9px;margin-top:calc(var(--u)*.3);overflow:hidden;border:2px solid var(--ink)}
.mr-bar>i{display:block;height:100%;background:var(--yellow);width:0}
.mr-tower{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*8.2);width:calc(var(--u)*28)}
.mr-row{position:absolute;left:0;width:100%;height:calc(var(--u)*4.1);display:flex;align-items:center;transition:transform .55s cubic-bezier(.3,1.4,.5,1),opacity .3s}
.mr-row .mr-pos{width:calc(var(--u)*5.2);font-size:calc(var(--u)*3.3);text-align:center;line-height:1}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;height:calc(var(--u)*3.4);display:flex;align-items:center;padding:0 calc(var(--u)*.8) 0 0;background:rgba(20,22,48,.82);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);transform:skewX(-10deg);overflow:hidden}
.mr-row .mr-card>*{transform:skewX(10deg)}
.mr-row .mr-chip{width:calc(var(--u)*1.6);align-self:stretch;margin-right:calc(var(--u)*.8)}
.mr-row .mr-name{flex:1;font-size:calc(var(--u)*1.45);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:Nunito,"Arial Rounded MT Bold",sans-serif;font-weight:900;font-size:calc(var(--u)*1.2);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-block;background:#fff;color:var(--ink);border:2px solid var(--ink);border-radius:99px;font-size:calc(var(--u)*.95);padding:0 calc(var(--u)*.45);margin-left:calc(var(--u)*.35);transform:skewX(10deg);line-height:1.35}
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*17);height:calc(var(--u)*21);padding:calc(var(--u)*.5)}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.88);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*1.2);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.3)}
.mr-banner{position:absolute;left:50%;top:22%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;padding:calc(var(--u)*.4) calc(var(--u)*3);font-size:calc(var(--u)*5.6);line-height:1.05;background:var(--pink);border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg) rotate(-3deg);box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(10deg)}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*1);font-size:calc(var(--u)*2.1);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*.35);font-size:calc(var(--u)*1.25);will-change:transform;transition:opacity .25s}
.mr-tag .mr-tp{background:var(--ink);color:var(--yellow);border-radius:calc(var(--u)*.5);padding:0 calc(var(--u)*.45);font-size:calc(var(--u)*1.35)}
.mr-tag .mr-tn{padding:calc(var(--u)*.05) calc(var(--u)*.6);border:calc(var(--u)*.22) solid var(--ink);border-radius:calc(var(--u)*.6);-webkit-text-stroke:calc(var(--u)*.22) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.25) 0 rgba(0,0,0,.3)}
.mr-tag:after{content:"";position:absolute;left:50%;bottom:calc(var(--u)*-.75);border:calc(var(--u)*.45) solid transparent;border-top-color:var(--ink);transform:translateX(-50%)}
.mr-card3{position:absolute;left:calc(var(--u)*5);bottom:19%;display:flex;align-items:stretch;opacity:0;transform:translateX(-30%);transition:all .45s cubic-bezier(.3,1.4,.5,1)}
.mr-card3.on{opacity:1;transform:none}
.mr-card3 .mr-lane{width:calc(var(--u)*8);font-size:calc(var(--u)*6.5);display:flex;align-items:center;justify-content:center;border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg);margin-right:calc(var(--u)*-.6);z-index:1}
.mr-card3 .mr-lane span{transform:skewX(10deg)}
.mr-card3 .mr-info{padding:calc(var(--u)*.8) calc(var(--u)*3) calc(var(--u)*.8) calc(var(--u)*2.4)}
.mr-card3 .mr-nick{font-size:calc(var(--u)*4.4);line-height:1;-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-card3 .mr-tagl{font-family:Nunito,sans-serif;font-weight:900;font-size:calc(var(--u)*1.55);opacity:.95;margin-top:calc(var(--u)*.4)}
.mr-count{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) scale(1);font-size:calc(var(--u)*16);opacity:0}
.mr-count.pop{animation:mrpop .9s ease-out}
@keyframes mrpop{0%{transform:translate(-50%,-50%) scale(2.2);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.8);opacity:0}}
.mr-photo{position:absolute;inset:0;opacity:0;transition:opacity .15s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 50%,rgba(0,0,0,.55) 100%)}
.mr-photo.on{opacity:1}
.mr-photo .mr-flash{position:absolute;inset:0;background:#fff;opacity:0}
.mr-photo.on .mr-flash{animation:mrflash .6s ease-out}
@keyframes mrflash{0%{opacity:.95}100%{opacity:0}}
.mr-photo .mr-pf{position:absolute;left:50%;top:14%;transform:translateX(-50%) skewX(-10deg);background:#fff;color:var(--ink);border:calc(var(--u)*.4) solid var(--ink);padding:calc(var(--u)*.4) calc(var(--u)*2.5);font-size:calc(var(--u)*4)}
.mr-photo .mr-line{position:absolute;left:0;top:0;height:calc(var(--u)*.35);background:rgba(255,40,80,.9);transform-origin:0 50%;box-shadow:0 0 6px rgba(255,40,80,.8)}
.mr-results{position:absolute;right:calc(var(--u)*3);top:50%;transform:translate(120%,-50%);transition:transform .6s cubic-bezier(.3,1.3,.5,1);width:calc(var(--u)*30)}
.mr-results.on{transform:translate(0,-50%)}
.mr-results .mr-rh{font-size:calc(var(--u)*3);margin-bottom:calc(var(--u)*.8);padding:calc(var(--u)*.3) calc(var(--u)*1.5);display:inline-block}
.mr-results .mr-rr{display:flex;align-items:center;gap:calc(var(--u)*.8);margin:calc(var(--u)*.5) 0;font-size:calc(var(--u)*1.8);background:rgba(20,22,48,.85);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.3) calc(var(--u)*1);transform:skewX(-10deg)}
.mr-results .mr-rr>*{transform:skewX(10deg)}
.mr-results .mr-rr .mr-num{font-size:calc(var(--u)*2.6);width:calc(var(--u)*4.2)}
.mr-results .mr-rr .mr-t{margin-left:auto;font-family:Nunito,sans-serif;font-weight:900}
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity .4s}
`,lu=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,hx=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,ux=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},ir=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),fx=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function cu(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let V=document.createElement("style");V.id="mr-hud-css",V.textContent=cx,document.head.appendChild(V)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
    <div class="mr-top">
      <div class="mr-panel mr-live"><div class="mr-unskew"><i></i> LIVE</div></div>
      <div class="mr-panel mr-clock"><div class="mr-unskew mr-num" data-k="clock">0:00</div></div>
      <div class="mr-panel mr-lap"><div class="mr-unskew">LAP <b class="mr-num" data-k="lap">1</b>/2</div></div>
      <div class="mr-panel mr-dist"><div class="mr-unskew"><span data-k="dist">0.0 KM</span><div class="mr-bar"><i data-k="bar"></i></div></div></div>
    </div>
    <div class="mr-tower"></div>
    <div class="mr-map"><div class="mr-mapwrap"></div><canvas></canvas></div>
    <div class="mr-tags"></div>
    <div class="mr-banner"><div class="mr-b1"><span></span></div><span class="mr-b2"></span></div>
    <div class="mr-card3"><div class="mr-lane mr-num"><span></span></div><div class="mr-panel mr-info"><div class="mr-unskew"><div class="mr-nick"></div><div class="mr-tagl"></div></div></div></div>
    <div class="mr-count mr-num"></div>
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-line"></div><div class="mr-pf">PHOTO FINISH!</div></div>
    <div class="mr-results"></div>`,i.appendChild(o);let a=V=>o.querySelector(V),l={};o.querySelectorAll("[data-k]").forEach(V=>l[V.dataset.k]=V);let c=a(".mr-tower"),h={},d={};for(let V of t){let G=document.createElement("div");G.className="mr-row";let Y=(e[V.id]||[]).map(yt=>`<span class="mr-badge">${ir(String(yt)).slice(0,10)}</span>`).join("");G.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${V.colour.primary};border-right:4px solid ${V.colour.secondary}"></div><div class="mr-name">${ir(V.nickname)}${Y}</div><div class="mr-gap"></div></div>`,c.appendChild(G),h[V.id]={el:G,pos:G.querySelector(".mr-pos"),gap:G.querySelector(".mr-gap"),last:""};let ot=document.createElement("div");ot.className="mr-tag",ot.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${V.colour.primary};color:#fff">${ir(V.nickname)}</span>`,ot.style.opacity="0",a(".mr-tags").appendChild(ot),d[V.id]={el:ot,pos:ot.querySelector(".mr-tp"),x:0,y:0,vis:!1}}let f=a(".mr-map canvas"),u=f.getContext("2d"),x=null,M=340,m=420;f.width=M,f.height=m;let p=n.points,S=1e9,_=1e9,y=-1e9,W=-1e9;for(let V of p)S=Math.min(S,V[0]),y=Math.max(y,V[0]),_=Math.min(_,V[2]),W=Math.max(W,V[2]);for(let V in r.diversions)for(let G of r.diversions[V])for(let Y of G.path)S=Math.min(S,Y[0]),y=Math.max(y,Y[0]),_=Math.min(_,Y[1]),W=Math.max(W,Y[1]);let F=26,A=Math.min((M-F*2)/(y-S),(m-F*2)/(W-_)),D=(M-(y-S)*A)/2,b=(m-(W-_)*A)/2,g=V=>D+(V-S)*A,E=V=>b+(V-_)*A;function T(){let V=document.createElement("canvas");V.width=M,V.height=m;let G=V.getContext("2d"),Y=(pt,B,Et,Mt)=>{G.beginPath(),pt.forEach((et,At)=>At?G.lineTo(g(et[0]),E(et[1])):G.moveTo(g(et[0]),E(et[1]))),G.strokeStyle=B,G.lineWidth=Et,G.lineJoin=G.lineCap="round",G.setLineDash(Mt||[]),G.stroke(),G.setLineDash([])},ot=(pt,B)=>{for(let Et of s.features)Et.kind===pt&&Et.closed&&(G.beginPath(),Et.pts.forEach((Mt,et)=>et?G.lineTo(g(Mt[0]),E(Mt[1])):G.moveTo(g(Mt[0]),E(Mt[1]))),G.fillStyle=B,G.fill())},yt=s.features.filter(pt=>pt.kind==="park").sort((pt,B)=>B.pts.length-pt.pts.length)[0];G.save(),G.beginPath(),yt.pts.forEach((pt,B)=>B?G.lineTo(g(pt[0]),E(pt[1])):G.moveTo(g(pt[0]),E(pt[1]))),G.fillStyle="#9be27a",G.fill(),G.restore(),ot("water","#49a6ff"),ot("track","#ff7a5c");for(let pt in r.diversions)for(let B of r.diversions[pt])Y(B.path,"#c79a5a",4,[6,6]);let Tt=[];for(let pt=0;pt<=r.LAP1_END_DRAW;pt+=10)Tt.push(r.baseXZ(pt));Y(Tt,"#1a1420",11),Y(Tt,"#8fa0c4",6);let wt=[];for(let pt=r.MAP_TO-80;pt<=r.finishM;pt+=10)wt.push(r.baseXZ(pt));Y(wt,"#1a1420",11),Y(wt,"#8fa0c4",6);let st=r.rawExt(r.finishM);return G.fillStyle="#fff",G.strokeStyle="#1a1420",G.lineWidth=3,G.fillRect(g(st[0])-7,E(st[1])-7,14,14),G.strokeRect(g(st[0])-7,E(st[1])-7,14,14),G.fillStyle="#1a1420",G.fillRect(g(st[0])-7,E(st[1])-7,7,7),G.fillRect(g(st[0]),E(st[1]),7,7),V}x=T();let P=0,k=a(".mr-banner");function K(V,G="",Y="#ff3d8b",ot=2.4){k.querySelector(".mr-b1 span").textContent=V,k.querySelector(".mr-b1").style.background=Y,k.querySelector(".mr-b2").textContent=G,k.classList.remove("on"),k.offsetWidth,k.classList.add("on"),P=ot}let L="";function Z(V,G){if(P>0&&(P-=V,P<=0&&k.classList.remove("on")),!!G){if(G.raceS!=null&&(l.clock.textContent=ux(G.raceS)),G.leaderM!=null&&(l.lap.textContent=G.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,G.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,G.leaderM/5e3*100)}%`),G.order){let Y=c.clientHeight||0,ot=(c.querySelector(".mr-row")?.offsetHeight||40)+6;G.order.forEach((yt,Tt)=>{let wt=h[yt.id];if(!wt)return;wt.el.style.transform=`translateY(${Tt*ot}px)`;let st=`${Tt}|${yt.gapText}|${yt.finished}`;st!==wt.last&&(wt.last=st,wt.pos.innerHTML=lu(Tt+1),wt.gap.textContent=yt.gapText,wt.el.classList.toggle("lead",Tt===0),wt.el.classList.toggle("fin",!!yt.finished))})}if(G.tags)for(let Y of G.tags){let ot=d[Y.id];ot&&(Y.visible!==ot.vis&&(ot.vis=Y.visible,ot.el.style.opacity=Y.visible?"1":"0"),Y.visible&&(ot.el.style.transform=`translate(${Y.x}px, ${Y.y}px) translate(-50%,-100%) scale(${Y.scale??1})`,ot.p!==Y.pos&&(ot.p=Y.pos,ot.pos.textContent=Y.pos?hx(Y.pos):"",ot.pos.style.display=Y.pos?"":"none")))}if(G.dots){u.clearRect(0,0,M,m),u.drawImage(x,0,0);for(let Y of[...G.dots].reverse())u.beginPath(),u.arc(g(Y.x),E(Y.z),Y.lead?11:9,0,7),u.fillStyle=Y.colour,u.fill(),u.lineWidth=3.5,u.strokeStyle="#1a1420",u.stroke(),Y.focus&&(u.beginPath(),u.arc(g(Y.x),E(Y.z),15,0,7),u.strokeStyle="#fff",u.lineWidth=3,u.stroke());G.camDot&&(u.save(),u.translate(g(G.camDot.x),E(G.camDot.z)),u.rotate(G.camDot.a),u.fillStyle="rgba(26,20,32,.6)",u.beginPath(),u.moveTo(0,0),u.lineTo(-10,-22),u.lineTo(10,-22),u.fill(),u.restore())}}}function tt(V){o.classList.toggle("mr-dim",!!V)}function ct(V){let G=a(".mr-card3");if(!V){G.classList.remove("on");return}G.querySelector(".mr-lane span").textContent=V.lane??"",G.querySelector(".mr-lane").style.background=V.colour.primary,G.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${V.colour.primary}, ${dx(V.colour.primary,-.25)})`,G.querySelector(".mr-nick").textContent=V.nickname,G.querySelector(".mr-nick").style.color="#fff",G.querySelector(".mr-tagl").textContent=V.tagline||"",G.querySelector(".mr-tagl").style.color=fx(V.colour.primary)==="#ffffff"?"#fff":"#1a1420",G.classList.remove("on"),G.offsetWidth,G.classList.add("on")}function ft(V){let G=a(".mr-count");G.textContent=V,G.classList.remove("pop"),G.offsetWidth,G.classList.add("pop")}function H(V){a(".mr-photo").classList.toggle("on",!!V)}function Rt(V,G){let Y=G[0]-V[0],ot=G[1]-V[1],yt=Math.hypot(Y,ot)||1,Tt=Y/yt,wt=ot/yt,st=V[0]-Tt*yt*.6,pt=V[1]-wt*yt*.6,B=a(".mr-photo .mr-line");B.style.width=`${yt*2.2}px`,B.style.transform=`translate(${st}px, ${pt}px) rotate(${Math.atan2(wt,Tt)}rad)`}function Q(V){let G=a(".mr-results");if(!V){G.classList.remove("on");return}G.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+V.map(Y=>`<div class="mr-rr"><span class="mr-num">${lu(Y.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${Y.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${ir(Y.nickname)}</span><span class="mr-t">${ir(Y.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>G.classList.add("on"))}function q(){o.remove()}return{root:o,update:Z,showBanner:K,setDim:tt,introCard:ct,countdown:ft,photo:H,photoLine:Rt,results:Q,dispose:q}}function dx(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var Po=(i,t,e=12,n=!0)=>Ye(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function hu(i,t,e,n){let s=bn(42),r=new ne;i.add(r);let o=[],a=[],l=(E,T=3)=>(Li(E,T,void 0,30),E),c=(E,T,P=3)=>pe(E,T,{ol:P,olRef:30}),h=[];for(let E=0;E<n.path.length;E++){let T=n.path[E],P=e.anchors.nearestOnRibbon(T[0],T[1]),k=Math.hypot(T[0]-P[0],T[1]-P[1]);h.push({x:(T[0]+P[0])/2,z:(T[1]+P[1])/2,gap:k})}let d=0;h.forEach((E,T)=>{T&&(d+=Math.hypot(E.x-h[T-1].x,E.z-h[T-1].z)),E.s=d});let f=d,u=E=>{let T=0;for(;T<h.length-2&&h[T+1].s<E;)T++;let P=h[T],k=h[T+1],K=Math.max(0,Math.min(1,(E-P.s)/Math.max(1e-6,k.s-P.s))),L=P.x+(k.x-P.x)*K,Z=P.z+(k.z-P.z)*K,tt=Math.hypot(k.x-P.x,k.z-P.z)||1;return{x:L,z:Z,gap:P.gap+(k.gap-P.gap)*K,tx:(k.x-P.x)/tt,tz:(k.z-P.z)/tt,y:t.heightAt(L,Z)}},x=h.filter(E=>E.gap>26),M=x.length?x[0].s:f*.25,m=x.length?x.at(-1).s:f*.75,p=E=>Array.from({length:E},(T,P)=>u(M+(P+.5)/E*(m-M))),S=(E,T,P=0)=>(E.position.set(T.x,T.y-.1,T.z),E.rotation.y=Math.atan2(T.tx,T.tz)+P,r.add(E),E),_={center:u((M+m)/2),rides:[]},y=p(7);{let E=y.slice(1,6).sort((G,Y)=>Y.gap-G.gap)[0],T=new ne,P=Math.min(12,E.gap*.42),k=P+2.6,K=new ae(.35,.5,k/Math.cos(.32)+1,8);for(let G of[-1,1])for(let Y of[-1,1]){let ot=c(K,gt("#ffffff"));ot.position.set(G*1.3,k/2,Y*Math.tan(.32)*k/2),ot.rotation.x=-Y*.32,T.add(ot)}let L=c(new le(6,1,8,2,.3),gt("#2e9bff"));L.position.y=.5,T.add(L);let Z=new ne;Z.position.y=k,T.add(Z);let tt=c(new Qe(P,.32,8,48),gt("#ff3d8b"));tt.rotation.y=Math.PI/2,tt.position.x=.9,Z.add(tt);let ct=c(new Qe(P,.32,8,48),gt("#ff3d8b"));ct.rotation.y=Math.PI/2,ct.position.x=-.9,Z.add(ct);let ft=c(new ae(1,1,2.6,16).rotateZ(Math.PI/2),gt("#ffd23f"));Z.add(ft);let H=10,Rt=[],Q=[];for(let G=0;G<H;G++){let Y=G/H*Math.PI*2,ot=c(new ye(.18,P,.18).translate(0,P/2,0),gt("#ffffff"),2);ot.rotation.x=Y,ot.position.x=.9,Z.add(ot);let yt=ot.clone();yt.position.x=-.9,Z.add(yt);let Tt=new ne;Tt.position.set(0,Math.cos(Y)*P,Math.sin(Y)*P),Z.add(Tt);let wt=new ne;Tt.add(wt);let st=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][G%5],pt=c(new le(1.7,1.3,1.5,2,.35),gt(st));pt.position.y=-1.3,wt.add(pt);let B=c(new Le(1.2,.7,4).rotateY(Math.PI/4),gt("#ffffff"),2);B.position.y=-.1,wt.add(B),Rt.push(Tt);for(let Et=0;Et<3;Et++){let Mt=Y+Et/3*(Math.PI*2/H);Q.push([.9,Math.cos(Mt)*P,Math.sin(Mt)*P],[-.9,Math.cos(Mt)*P,Math.sin(Mt)*P])}}let q=new sn(new ge(.22,8,6),new fn({color:16777215}),Q.length),V=new Te;Q.forEach((G,Y)=>{V.position.set(...G),V.updateMatrix(),q.setMatrixAt(Y,V.matrix),q.setColorAt(Y,new Jt(["#fff27a","#ff7ac8","#7affff"][Y%3]))}),Z.add(q),S(T,E,Math.PI/2),a.push(G=>{Z.rotation.x=G*.25;for(let Y of Rt)Y.rotation.x=-G*.25}),_.rides.push({kind:"wheel",obj:T,pos:new z(E.x,E.y+k,E.z),r:P}),E.used=!0}{let E=y.filter(Q=>!Q.used).sort((Q,q)=>q.gap-Q.gap)[0];E.used=!0;let T=new ne,P=Math.min(6.5,E.gap*.28),k=Po("#ffffff","#ff4f6d",16);o.push(k);let K=c(new ae(P,P+.3,.9,32),gt("#ffffff",{map:k}));K.position.y=.45,T.add(K);let L=new ne;T.add(L);let Z=c(new ae(.7,.7,5,16),gt("#ffd23f"));Z.position.y=3,L.add(Z);let tt=Po("#ffd23f","#ff3d8b",16);o.push(tt);let ct=c(new Le(P+.8,2.8,16),gt("#ffffff",{map:tt}));ct.position.y=6.6,L.add(ct);let ft=c(new ae(P+.8,P+.8,.7,16,1,!0),gt("#2e9bff",{side:Pe}));ft.position.y=4.9,L.add(ft);let H=c(new ge(.5,12,8),gt("#ff3d8b"));H.position.y=8.2,L.add(H);let Rt=[];for(let Q=0;Q<8;Q++){let q=Q/8*Math.PI*2,V=P*.72,G=new ne;G.position.set(Math.cos(q)*V,0,Math.sin(q)*V),G.rotation.y=-q,L.add(G);let Y=c(new ae(.06,.06,4.2,6),gt("#ffd23f"),1.5);Y.position.y=2.9,G.add(Y);let ot=new ne;G.add(ot);let yt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][Q%4],Tt=c(new le(.7,.7,1.6,2,.3),gt(yt));ot.add(Tt);let wt=c(new le(.45,.9,.5,2,.2),gt(yt));wt.position.set(0,.55,.7),wt.rotation.x=.4,ot.add(wt);let st=c(new le(.45,.45,.8,2,.2),gt(yt));st.position.set(0,.95,1.05),ot.add(st);let pt=c(new le(.15,.8,.3,1,.06),gt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][Q%4]),2);pt.position.set(0,.75,.55),pt.rotation.x=.4,ot.add(pt);let B=c(new le(.75,.2,.6,1,.08),gt("#ff3d8b"),2);B.position.y=.4,ot.add(B);for(let[Et,Mt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let et=c(new ye(.16,.7,.16),gt(yt),1.5);et.position.set(Et,-.55,Mt),et.rotation.x=Mt>0?-.5:.5,ot.add(et)}ot.rotation.y=Math.PI/2,Rt.push({horse:ot,ph:Q*.8})}S(T,E),a.push(Q=>{L.rotation.y=Q*.6;for(let q of Rt)q.horse.position.y=2+Math.sin(Q*2.2+q.ph)*.35}),_.rides.push({kind:"carousel",obj:T,pos:new z(E.x,E.y+4,E.z),r:P})}{let E=y.filter(Q=>!Q.used).sort((Q,q)=>q.gap-Q.gap)[0];E.used=!0;let T=new ne,P=15,k=Po("#ff3d3d","#ffffff",10,!1);o.push(k);let K=c(new ae(1.6,2.6,P,16),gt("#ffffff",{map:k}));K.position.y=P/2,T.add(K);let L=c(new Le(2.6,3.4,16),gt("#2e9bff"));L.position.y=P+1.7,T.add(L);let Z=c(new ae(.06,.06,2,6),gt("#ffffff"),1.5);Z.position.y=P+4.2,T.add(Z);let tt=c(new nn(1.2,.7).translate(.6,0,0),gt("#ffd23f",{side:Pe}),1.5);tt.position.y=P+4.8,T.add(tt);let ct=[],ft=3.2;for(let Q=0;Q<=160;Q++){let q=Q/160,V=q*ft*Math.PI*2,G=2.6+(1-q)*-.8+1.6;ct.push(new z(Math.cos(V)*G,P-1-q*(P-2),Math.sin(V)*G))}let H=c(new xo(new Xs(ct),220,.55,8,!1),gt("#ffd23f"));H.scale.y=1,T.add(H);let Rt=c(new le(3,.3,2,2,.1),gt("#3ddc84"),2);Rt.position.set(ct.at(-1).x+1,.15,ct.at(-1).z),T.add(Rt),S(T,E),a.push(Q=>{tt.rotation.y=Math.sin(Q*3)*.4}),_.rides.push({kind:"helter",obj:T,pos:new z(E.x,E.y+8,E.z),r:4})}let W=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],F=[];[...y.filter(E=>!E.used),...p(13).filter((E,T)=>T%2===1)].slice(0,7).forEach((E,T)=>{let[P,k]=W[T%W.length],K=new ne,L=T%2?1:-1,Z=c(new le(4.2,2.4,3,2,.2),gt("#fff6e0"));Z.position.y=1.2,K.add(Z);let tt=c(new le(4.4,1.1,.8,2,.15),gt(k));tt.position.set(0,.55,1.7),K.add(tt);let ct=Po("#ffffff",k,10);o.push(ct);let ft=c(new ye(4.8,.18,2.4),gt("#ffffff",{map:ct}));ft.position.set(0,2.9,1.4),ft.rotation.x=.32,K.add(ft);for(let Y of[-1,1]){let ot=c(new ae(.09,.09,2.6,6),gt("#ffffff"),1.5);ot.position.set(Y*2.2,1.6,2.4),K.add(ot)}let H=$n(512,128,(Y,ot,yt)=>{Y.fillStyle="#1a1420",ze(Y,0,0,ot,yt,30),Y.fill(),Y.fillStyle=k,ze(Y,8,8,ot-16,yt-16,24),Y.fill(),Ge(Y,P,ot/2,yt/2+4,P.length>11?52:64,"#ffffff","#1a1420",.2)},o),Rt=pe(new le(4.2,1.05,.3,2,.1),[gt(k),gt(k),gt(k),gt(k),gt("#ffffff",{map:H}),gt("#ffffff",{map:H})],{ol:2.5,olRef:30});if(Rt.position.set(0,3.7,.4),K.add(Rt),P==="CANDYFLOSS")for(let Y=0;Y<4;Y++){let ot=c(new qe(.32,1),gt("#ff9bd2"),1.5);ot.position.set(-1.4+Y*.9,1.45,1.75),K.add(ot)}if(P==="HOOK-A-DUCK"){let Y=c(new ae(1.6,1.6,.6,20),gt("#57c7ff"),2);Y.position.set(0,.3,3.6),K.add(Y);let ot=new ne;ot.position.set(0,.7,3.6),K.add(ot);for(let yt=0;yt<6;yt++){let Tt=yt/6*Math.PI*2,wt=c(new ge(.22,10,8),gt("#ffd23f"),1.5);wt.position.set(Math.cos(Tt)*1.1,0,Math.sin(Tt)*1.1);let st=c(new ge(.14,8,6),gt("#ffd23f"),1.2);st.position.set(0,.22,.12),wt.add(st),ot.add(wt)}F.push(ot)}let Q=e.anchors.nearestOnRibbon(E.x,E.z),q=Math.atan2(Q[0]-E.x,Q[1]-E.z),V=Math.min(E.gap*.3,7)*L,G=S(K,{...E,x:E.x+E.tz*V,z:E.z-E.tx*V,y:t.heightAt(E.x+E.tz*V,E.z-E.tx*V)});G.rotation.y=q+(L>0?0:Math.PI)*0}),a.push(E=>{for(let T of F)T.rotation.y=E*.8});{let E=[],T=[],P=[],k=[],K=[];for(let H of[-1,1]){let Rt=null;for(let Q=M-10;Q<=m+10;Q+=9){let q=u(Q),V=(q.gap/2-6)*H,G=q.x+q.tz*V,Y=q.z-q.tx*V,ot=t.heightAt(G,Y),yt=new z(G,ot+4.2,Y),Tt=c(new ae(.08,.1,4.3,6),gt("#ffffff"),1.5);if(Tt.position.set(G,ot+2.1,Y),r.add(Tt),Rt)for(let wt=0;wt<=10;wt++){let st=wt/10,pt=Rt.clone().lerp(yt,st);pt.y-=Math.sin(st*Math.PI)*.7,E.push(pt),wt<10&&(wt%2?(T.push(pt.clone()),P.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(wt+Math.round(Q))%4])):(k.push({v:pt.clone(),a:Math.atan2(-(yt.z-Rt.z),yt.x-Rt.x)}),K.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(wt+Math.round(Q/9))%5])))}Rt=yt}}let L=new Te,Z=new sn(new ge(.16,8,6),new fn({color:16777215}),T.length);T.forEach((H,Rt)=>{L.position.copy(H),L.updateMatrix(),Z.setMatrixAt(Rt,L.matrix),Z.setColorAt(Rt,new Jt(P[Rt]))}),r.add(Z);let tt=new _e;tt.setAttribute("position",new te([-.32,0,0,.32,0,0,0,-.65,0],3)),tt.setAttribute("normal",new te([0,0,1,0,0,1,0,0,1],3));let ct=new sn(tt,gt("#ffffff",{side:Pe}),k.length);k.forEach((H,Rt)=>{L.position.copy(H.v),L.rotation.set(0,H.a,0),L.updateMatrix(),ct.setMatrixAt(Rt,L.matrix),ct.setColorAt(Rt,new Jt(K[Rt]))}),r.add(ct);let ft=[];for(let H=0;H+1<E.length;H++)E[H].distanceTo(E[H+1])<3&&ft.push(E[H],E[H+1]);r.add(new fs(new _e().setFromPoints(ft),new Ai({color:3355443}))),a.push(H=>{Z.material.color.setScalar(.85+.15*Math.sin(H*6))})}{let E=u(M-4),T=$n(1024,256,(k,K,L)=>{k.fillStyle="#1a1420",ze(k,0,0,K,L,60),k.fill(),k.fillStyle="#ff3d8b",ze(k,10,10,K-20,L-20,52),k.fill(),Ge(k,"\u2605 FUNFAIR \u2605",K/2,L/2+6,120,"#ffe14d","#1a1420",.18)},o),P=pe(new le(10,2.4,.4,2,.15),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:T}),gt("#ffffff",{map:T})],{ol:3,olRef:30});P.position.set(E.x,E.y+7.5,E.z),P.rotation.y=Math.atan2(E.tx,E.tz)+Math.PI/2,r.add(P);for(let k of[-1,1]){let K=c(new ae(.25,.3,7.6,8),gt("#ffd23f"));K.position.set(E.x+E.tz*4.5*k,E.y+3.8,E.z-E.tx*4.5*k),r.add(K)}}let D=[];for(let E=0;E<60;E++){let T=M+s()*(m-M),P=u(T),k=(s()-.5)*(P.gap-16),K=P.x+P.tz*k,L=P.z-P.tx*k;D.push({x:K,y:t.heightAt(K,L),z:L,yaw:s()*6.28})}function b(E){for(let T of a)T(E)}function g(){r.traverse(E=>{E.geometry&&E.geometry.dispose()});for(let E of o)E.dispose?.();i.remove(r)}return{group:r,update:b,dispose:g,anchors:_,crowd:D,at:u,s0:M,s1:m}}function uu(i,t,e,n,s,{camera:r}){let o=new ne;i.add(o);let a=[],l=t.sample(t.finishM+28),c=new z(l.tx,0,l.tz),h=new z(l.rx,0,l.rz),d=new z(l.x,t.heightAt(l.x,l.z),l.z),f=Math.atan2(c.x,c.z);o.position.copy(d),o.rotation.y=f;let u=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let T of u){let P=$n(256,256,(K,L,Z)=>{K.fillStyle="#2e6fe0",K.fillRect(0,0,L,Z),K.fillStyle=T.col,K.fillRect(0,0,L,26),Ge(K,String(T.place),L/2,Z/2+14,170,T.col,"#1a1420",.16)},a),k=pe(new le(2.25,T.hgt,2,3,.12),[gt("#2e6fe0"),gt("#2e6fe0"),gt(T.col),gt("#2e6fe0"),gt("#ffffff",{map:P}),gt("#2e6fe0")],{ol:3.5,olRef:12});k.position.set(T.x,T.hgt/2,0),o.add(k),T.top=T.hgt}let x=$n(1024,256,(T,P,k)=>{T.fillStyle="#1a1420",ze(T,0,0,P,k,50),T.fill(),T.fillStyle="#ff3d8b",ze(T,10,10,P-20,k-20,42),T.fill(),Ge(T,"MARKRUN CHAMPIONS",P/2,k/2+6,100,"#ffffff","#1a1420",.16)},a),M=pe(new le(9,2.2,.3,2,.1),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:x}),gt("#ffffff",{map:x})],{ol:3,olRef:14});M.position.set(0,4.6,-2.4),o.add(M);for(let T of[-1,1]){let P=pe(new ae(.14,.16,4.6,8),gt("#ffffff"),{ol:2,olRef:14});P.position.set(T*4.3,2.3,-2.4),o.add(P)}let m=s.length,p=[];for(let T of s){let P=n[T.runnerId];if(!P)continue;let k=u.find(Z=>Z.place===T.place),K=k?new z(k.x,k.top,.1):null,L;if(T.place===1?L=["celebrate","jump"]:T.place===2?L=["pose","flex"]:T.place===3?L=["celebrate","fist"]:T.place===m&&m>3?L=["celebrate","collapse"]:L=["celebrate","shrug"],!K){p.push({rr:P,o:T,pose:L});continue}S(P,K,L)}p.forEach((T,P)=>{let k=P%2?1:-1,K=Math.floor(P/2),L=T.pose[1]==="collapse",Z=new z(k*(L?4.6:4.2+K*1.6),0,L?1.6:.6+K*.8);S(T.rr,Z,T.pose,L?-k*Math.PI/2:0)});function S(T,P,k,K=0){let L=P.clone().applyAxisAngle(new z(0,1,0),f).add(d);P.y===0&&(L.y=t.heightAt(L.x,L.z)+.05),T.root.position.copy(L),T.root.rotation.set(0,f+K,0),T.set(...k),T.setPop(null)}let _=bn(3),y=420,W=new sn(new nn(.16,.26),new fn({side:Pe}),y),F=[],A=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let T=0;T<y;T++)F.push({x:(_()-.5)*14,y:_()*12,z:(_()-.5)*8,vy:1+_()*1.6,sp:_()*6,ph:_()*6.28}),W.setColorAt(T,new Jt(A[T%A.length]));W.frustumCulled=!1,o.add(W);let D=new Te,b=0;function g(T,P){b+=T;for(let tt=0;tt<y;tt++){let ct=F[tt];ct.y-=ct.vy*T,ct.y<0&&(ct.y+=12),D.position.set(ct.x+Math.sin(b*1.3+ct.ph)*.5,ct.y,ct.z+Math.cos(b+ct.ph)*.4),D.rotation.set(b*ct.sp+ct.ph,b*ct.sp*.7,ct.ph),D.updateMatrix(),W.setMatrixAt(tt,D.matrix)}W.instanceMatrix.needsUpdate=!0;let k=Math.sin(b*.18)*.4,K=15-Math.min(2.5,b*.2),L=new z(Math.sin(k)*K,3+Math.sin(b*.3)*.3,Math.cos(k)*K).applyAxisAngle(new z(0,1,0),f);r.position.copy(d).add(L);let Z=new z(3.2,2.2,0).applyAxisAngle(new z(0,1,0),f).add(d);r.lookAt(Z),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function E(){o.traverse(T=>{T.geometry&&T.geometry.dispose()}),W.material.dispose();for(let T of a)T.dispose?.();i.remove(o)}return{update:g,dispose:E,center:d}}var Lo=8.5;function fu(i,t={}){let{course:e,park:n,round:s,plan:r}=t,o=t.backedBy||{},a=Object.keys(o).filter(v=>(o[v]||[]).length),l=[...s?.runners||[]].sort((v,I)=>(v.lane??0)-(I.lane??0)),c=!!r?.runners?.some(v=>v.diversions&&v.diversions.length),h=new to({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});h.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),h.outputColorSpace=ke,h.toneMapping=Cn,h.shadowMap.enabled=!0,h.shadowMap.type=Ol;let d=h.domElement;d.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(d);let f=new no;f.fog=new eo(13496063,700,3200);let u=new Je(45,16/9,.3,9e3),x=new Mo(14676223,9420912,1.45);f.add(x);let M=new bo(16774109,2.3),m=new z(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,f.add(M),f.add(M.target);let p=Wh(e,n,r),S=$h(f,p,{course:e,park:n,hasFunfair:c}),_=null;if(c){let v=r.runners.find(N=>N.diversions?.length).diversions[0],I=p.diversions[r.runners.find(N=>N.diversions?.length).id][0];_=hu(f,p,S,I||v)}let y=jh(p,S.anchors.crowdZones,5,S.onPath);_&&y.push(..._.crowd.map(v=>({...v,zone:"fair"})));let W=new Map;for(let v of y){let I=v.zone??"x";W.has(I)||W.set(I,[]),W.get(I).push(v)}let F=[...W.values()].map(v=>Kh(f,v)),A={update:(...v)=>F.forEach(I=>I.update(...v)),dispose:()=>F.forEach(v=>v.dispose())},D=ru(r,p,l),b={};for(let v of l){let I=nu(v);b[v.id]=I,f.add(I.root)}let g=l.map(v=>v.id),E=Object.fromEntries(l.map(v=>[v.id,v])),T=cu(i,{runners:l,backedBy:o,course:e,park:n,C:p}),P=ou({plan:r,sim:D,backedIds:a,hasDiversion:c}),k=au({camera:u,C:p,sim:D,world:S,funfair:_}),K=null,L=[];for(let v of r.events||[])L.push({at:v.broadcastS,evt:{...v,kind:"event"}});for(let v of r.commentary||[])L.push({at:v.broadcastS,evt:{...v,kind:"commentary"}});L.sort((v,I)=>v.at-I.at);let Z="idle",tt=!1,ct=!1,ft=-Lo,H=0,Rt=null,Q=null,q=0,V=!1,G=!1,Y=0,ot=0,yt=new Set;function Tt(){let v=i.clientWidth||window.innerWidth,I=i.clientHeight||window.innerHeight;h.setSize(v,I,!1),u.aspect=v/I,u.updateProjectionMatrix(),Kl.uRes.value.set(v*h.getPixelRatio(),I*h.getPixelRatio())}let wt=typeof ResizeObserver<"u"?new ResizeObserver(Tt):null;wt?.observe(i),window.addEventListener("resize",Tt),Tt();let st={};{let v=g.length;g.forEach((I,N)=>{let $=(N-(v-1)/2)*Math.min(1.25,(Ce-1.6)/Math.max(1,v-1)),at=p.sample(0);st[I]={x:at.x+at.rx*$-at.tx*1.2,z:at.z+at.rz*$-at.tz*1.2,yaw:Math.atan2(at.tx,at.tz)},st[I].y=p.heightAt(st[I].x,st[I].z)+.16})}function pt(v="idle"){for(let I of g){let N=st[I],$=b[I];$.root.position.set(N.x,N.y,N.z),$.root.rotation.set(0,N.yaw,0),v&&$.set(v),$.setPop(null)}}pt();let B=(v,I)=>v===1?"jump":v===2||v===3?"fist":v===I?"collapse":"kneel";function Et(v,I){let N=D.stateAt(Math.max(0,v)),$=g.length;for(let at of g){let X=N.byId[at],j=b[at];if(v<0)continue;j.root.position.set(X.x,X.y,X.z);let ut=Math.atan2(X.tx,X.tz)+(X.finished&&X.post>2.4&&!(X.place>3&&X.post<4)?Math.PI*(X.place%2?1:-1)*.92:0),St=j.root.rotation.y,Ot=ut-St;for(;Ot>Math.PI;)Ot-=2*Math.PI;for(;Ot<-Math.PI;)Ot+=2*Math.PI;j.root.rotation.y=St+Ot*Math.min(1,I*10);let Ft={speed:X.vRace,rate:N.rate,slope:X.slope};if(X.finished){let Bt=X.place;X.post<1.6?(j.set("run"),Ft.speed=3,Ft.rate=1.2):Bt>3&&X.post<4?j.set("trudge"):j.set("celebrate",B(Bt,$)),j.setPop(null)}else if(X.div>.3){j.set("distracted");let Bt=_?.anchors.rides.reduce((Vt,se)=>!Vt||se.pos.distanceToSquared(j.root.position)<Vt.pos.distanceToSquared(j.root.position)?se:Vt,null);if(Bt){let se=Math.atan2(Bt.pos.x-X.x,Bt.pos.z-X.z)-j.root.rotation.y;for(;se>Math.PI;)se-=2*Math.PI;for(;se<-Math.PI;)se+=2*Math.PI;Ft.lookYaw=Math.max(-1.3,Math.min(1.3,se))}j.setPop(["!","heart","floss"][Math.floor((X.m-X.divInfo.fromM)/120)%3])}else{j.set("run"),j.setPop(null);let Bt=p.geoOf(X.m);Ft.effort=X.m>4300?.4+(X.m-4300)/700*.5:Bt>1700&&Bt<2060?.7:.1}j.update(I,Ft)}}let Mt=new z,et=null,At=-1,Ht=()=>{if(At!==H||!et){let v=d.getBoundingClientRect();et=[...T.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(I=>{let N=I.getBoundingClientRect();return{left:N.left-v.left,right:N.right-v.left,top:N.top-v.top,bottom:(I.classList.contains("mr-tower")?N.top+I.querySelectorAll(".mr-row").length*((I.querySelector(".mr-row")?.offsetHeight||40)+6):N.bottom)-v.top}}),At=H}return et};function Nt(v,I=!0){let N=d.clientWidth,$=d.clientHeight,at=[];for(let j of g){let ut=b[j];Mt.set(ut.root.position.x,ut.root.position.y+ut.height+.55,ut.root.position.z);let St=Mt.distanceTo(u.position);Mt.project(u);let Ot=I&&Mt.z<1&&Mt.z>-1&&Math.abs(Mt.x)<.95&&Mt.y<.82&&Mt.y>-.62&&St>9.5&&St<150,Ft=(Mt.x*.5+.5)*N,Bt=(-Mt.y*.5+.5)*$;Ot&&Ht().some(Vt=>Ft>Vt.left-40&&Ft<Vt.right+40&&Bt>Vt.top-10&&Bt<Vt.bottom+40)&&(Ot=!1),at.push({id:j,x:(Mt.x*.5+.5)*N,y:(-Mt.y*.5+.5)*$,visible:Ot,pos:v?v.order.indexOf(j)+1:0,scale:Math.max(.7,Math.min(1.15,30/St)),dist:St})}at.sort((j,ut)=>j.dist-ut.dist);let X=[];for(let j of at){if(!j.visible)continue;let ut=(E[j.id].nickname.length*11+60)*j.scale;for(let St=0;St<8;St++){let Ot=X.find(Ft=>Math.abs(Ft.x-j.x)<(Ft.tw+ut)/2&&Math.abs(Ft.y-j.y)<30*Math.max(Ft.scale,j.scale));if(!Ot)break;j.y=Ot.y-31*Math.max(Ot.scale,j.scale)}j.tw=ut,X.push(j)}return v?{raceS:v.raceS,leaderM:v.leader.m,tags:at,order:v.order.map(j=>({id:j,gapText:v.byId[j].gapText,finished:v.byId[j].finished})),dots:v.order.map((j,ut)=>({x:v.byId[j].x,z:v.byId[j].z,colour:E[j].colour.primary,lead:ut===0,focus:k.shot?.ids?.includes(j)}))}:Z!=="race"?{tags:at}:{tags:at,raceS:0,leaderM:0,order:g.map(j=>({id:j,gapText:"",finished:!1})),dots:g.map(j=>({x:st[j].x,z:st[j].z,colour:E[j].colour.primary}))}}function O(v,I){let N=Math.max(30,Math.min(220,I)),$=M.shadow.camera;$.right!==N&&($.left=-N,$.right=N,$.top=N,$.bottom=-N,$.near=1,$.far=900,$.updateProjectionMatrix());let at=2*N/M.shadow.mapSize.x,X=Math.round(v.x/at)*at,j=Math.round(v.z/at)*at;M.target.position.set(X,v.y,j),M.position.set(X+m.x*400,v.y+m.y*400,j+m.z*400)}let C=["wave","flex","point","stretch","spin","bow"];function dt(v,I){let N=[...v.personality||v.id].reduce(($,at)=>$+at.charCodeAt(0),I);return C[N%C.length]}function nt(v,I={}){Z="intro",T.setDim(!0),T.results(null),bt(),pt("idle");let N=I.perRunnerS??t.introPerRunnerS??4.2,$=I.flyoverS??7;return Q={t:0,idx:-1,per:N,fly:$,onDone:v,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:$,perRunnerS:N,runners:g.slice()}}function it(v){let I=Q;if(!I)return;I.t+=v;let N=st;if(I.idx===-1){let Ft=Math.min(1,I.t/I.fly),Bt=tc(Ft),Vt=p.sample(0),se=new z(170,0,-40),ve=2.2-Bt*2,De=520-Bt*470,Ne=new z(se.x+Math.cos(ve)*De,190-Bt*170,se.z+Math.sin(ve)*De),Sn=new z(Vt.x+Vt.tx*22+Vt.rx*10,Vt.y+9,Vt.z+Vt.tz*22+Vt.rz*10);Ne.lerp(Sn,Bt*Bt);let En=se.clone().setY(15).lerp(new z(Vt.x,Vt.y+1,Vt.z),Math.min(1,Bt*1.2));u.position.copy(Ne),u.lookAt(En),Qt(50),Ft>=1&&rt();return}if(I.group){let Ft=p.sample(0),Bt=(I.t-I.segStart)/3;if(u.position.set(Ft.x+Ft.tx*(9+Bt*2)+Ft.rx*2,Ft.y+2.2+Bt*.6,Ft.z+Ft.tz*(9+Bt*2)+Ft.rz*2),u.lookAt(Ft.x,Ft.y+1.3,Ft.z),Qt(46),Bt>=1&&!I.done){I.done=!0,T.introCard(null);let Vt=I.onDone;Q=null,Z="idle",Vt?.()}return}let $=g[I.idx],at=N[$],X=I.t-I.segStart,j=new z(Math.sin(at.yaw),0,Math.cos(at.yaw)),ut=new z(-j.z,0,j.x),St=b[$].height,Ot=3.2+St*.6-Math.min(.6,X*.12);u.position.set(at.x+j.x*Ot+ut.x*.9,at.y+St*.62,at.z+j.z*Ot+ut.z*.9),u.lookAt(at.x-ut.x*1.25,at.y+St*.55,at.z-ut.z*1.25),Qt(40),!I.waiting&&X>=I.per&&rt(),I.waiting==="released"&&X>=I.minSeg&&rt()}function rt(){let v=Q;v.idx++,v.segStart=v.t;for(let at of g)b[at].set("idle");if(v.idx>=g.length){v.group=!0;for(let at of g)b[at].set("pose","point");T.introCard(null),setTimeout(()=>{},0);for(let at of g)b[at].set("wave");return}let I=g[v.idx];b[I].set(dt(E[I],v.idx)==="wave"?"wave":"pose",dt(E[I],v.idx)),t.introCards!==!1&&T.introCard(E[I]),v.waiting=!1;let $=t.onIntroRunner?.(I,v.idx);$&&typeof $.then=="function"&&(v.waiting=!0,$.then(()=>{Q===v&&(v.waiting="released")},()=>{Q===v&&(v.waiting="released")}))}function vt(v,I){Z="race",T.setDim(!1),T.results(null),bt(),Q=null,T.introCard(null),ft=-Lo,Y=0,ot=0,q=0,V=!1,G=!1,yt.clear(),Rt={onEvent:v,onDone:I},pt("idle"),k.reset()}let mt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function It(v){let I=N=>E[N]?.nickname||N;switch(v.type){case"lead_change":return["LEAD CHANGE!",`${I(v.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(v.by)&&!a.includes(v.on)&&D.stateAt(v.broadcastS).order.indexOf(v.by)>1?null:["OVERTAKE!",`${I(v.by)} passes ${I(v.on)}`,"#2e6fe0"];case"hill":return[v.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return yt.has("div")?null:(yt.add("div"),["DISTRACTED!",`${I(v.who)} has spotted the funfair`,"#b04bff"]);case"finish":return v.place===1&&!D.photoFinish?["WINNER!",I(v.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${I(v.who)} makes a break`,"#ff3d8b"];default:return null}}function Pt(v){if(q>0){if(q-=v,q<=0){T.photo(!1),d.style.filter="",S.anchors.finishArch.visible=!0,k.reset();let N=D.finishOrder[0];T.showBanner("WINNER!",E[N]?.nickname||N,"#ffb000",2.6)}return}let I=ft;for(ft+=v;ot<mt.length&&ft>=mt[ot][0];){let[N,$]=mt[ot++];if(T.countdown($),Rt?.onEvent?.({kind:"countdown",n:$==="GO!"?0:Number($),text:$,broadcastS:N}),N===-3)for(let at of g)b[at].set("ready")}for(;Y<L.length&&ft>=L[Y].at;){let N=L[Y++].evt;try{Rt?.onEvent?.(N)}catch($){console.error($)}if(N.kind==="event"){let $=It(N);$&&T.showBanner(...$)}}D.photoFinish&&!V&&ft>=D.firstFinishB&&(V=!0,ft=D.firstFinishB,q=t.photoFreezeS??2.8,T.photo(!0),d.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",Rt?.onEvent?.({kind:"photo_finish",broadcastS:ft,ids:D.finishOrder.slice(0,2)})),!G&&ft>=D.lastFinishB+3.5&&(G=!0,Rt?.onDone?.())}function bt(){K&&(K.dispose(),K=null)}function Dt(v){Z="podium",T.setDim(!0),Q=null,bt();let I=v?.finishOrder?.length?[...v.finishOrder].sort((N,$)=>N.place-$.place):D.finishOrder.map((N,$)=>({runnerId:N,place:$+1,officialS:D.byId[N].officialS,timeText:Io(D.byId[N].officialS)}));K=uu(f,p,S,b,I,{camera:u}),t.podiumCard!==!1&&T.results(I.map(N=>({place:N.place,nickname:E[N.runnerId]?.nickname||N.runnerId,colour:E[N.runnerId]?.colour.primary||"#888",timeText:N.timeText||Io(N.officialS)})))}let Wt=performance.now(),Xt=0,Lt={frames:0,acc:0,fps:0};function Qt(v){Math.abs(u.fov-v)>.01&&(u.fov=v,u.updateProjectionMatrix())}function qt(v,I=!1){H+=v;let N=null;tt||(Z==="intro"&&it(v),Z==="race"&&Pt(v));let $=tt?0:v;if(Z==="race"){if(q>0){let j=S.anchors.finish;S.anchors.finishArch.visible=!1,u.position.set(j.x+j.rx*9-j.tx*.6,j.y+6.4,j.z+j.rz*9-j.tz*.6),u.lookAt(j.x-j.rx*.6-j.tx*.6,j.y+.8,j.z-j.rz*.6-j.tz*.6),Qt(42),u.updateMatrixWorld();let ut=new z(j.x+j.rx*3,j.y+.05,j.z+j.rz*3).project(u),St=new z(j.x-j.rx*3,j.y+.05,j.z-j.rz*3).project(u);T.photoLine([(ut.x*.5+.5)*d.clientWidth,(-ut.y*.5+.5)*d.clientHeight],[(St.x*.5+.5)*d.clientWidth,(-St.y*.5+.5)*d.clientHeight])}else k.update(ft,$,P);if(N=ft>=0?D.stateAt(ft):null,ft<0)for(let j of g)b[j].update($,{});else Et(ft,q>0?0:$);let X=k.shot?.type;O(k.cam.look,X==="drone"||X==="blimp"||X==="heli"?160:45)}else if(Z==="podium"&&K){K.update($,H);for(let X of g)b[X].update($,{});O(K.center,40)}else{for(let X of g)b[X].update($,{});if(Z==="idle"){let X=p.sample(0),j=H*.12;u.position.set(X.x+Math.sin(j)*14,X.y+4.5,X.z+Math.cos(j)*14),u.lookAt(X.x,X.y+1.2,X.z),Qt(45)}O(new z(st[g[0]]?.x??0,0,st[g[0]]?.z??0),Z==="intro"&&Q?.idx===-1?160:40)}S.update(H),_?.update(H);let at=g.map(X=>b[X].root.position);A.update(H,u.position,at,Z==="podium"?.9:null),T.update(v,Z==="race"?Nt(N,ft>-1):Z==="intro"?{tags:[]}:Nt(null,!1)),I||h.render(f,u)}function w(v){if(ct)return;Xt=requestAnimationFrame(w);let I=Math.min(.1,(v-Wt)/1e3);Wt=v,Lt.frames++,Lt.acc+=I,Lt.acc>1&&(Lt.fps=Lt.frames/Lt.acc,Lt.frames=0,Lt.acc=0),qt(I)}t.manualLoop||(Xt=requestAnimationFrame(w));function R(){ct=!0,cancelAnimationFrame(Xt),wt?.disconnect(),window.removeEventListener("resize",Tt),bt();for(let v of g)f.remove(b[v].root),b[v].dispose();A.dispose(),_?.dispose(),S.dispose(),T.dispose(),f.traverse(v=>{v.geometry&&v.geometry.dispose()}),eu(),qh(),h.dispose(),h.forceContextLoss?.(),d.remove()}let J={seek(v,I=1.2){Z="race",T.setDim(!1),Q=null,bt(),Rt=Rt||{},T.introCard(null),T.results(null),T.photo(!1),d.style.filter="",k.reset();let N=Math.round(I*30);for(let $=N;$>=0;$--){if(ft=v-$/30,Y=L.findIndex(at=>at.at>ft),Y<0&&(Y=L.length),ot=mt.findIndex(at=>at[0]>ft),ot<0&&(ot=mt.length),V=ft>=D.firstFinishB,G=ft>=D.lastFinishB+3.5,q=0,ft<-3)for(let at of g)b[at].set("idle");else if(ft<0)for(let at of g)b[at].set("ready");if($>0)if(k.update(ft,1/30,P),ft>=0)Et(ft,1/30);else for(let at of g)b[at].update(1/30,{})}tt=!0,qt(0)},introAt(v,I=1.5){if(nt(()=>{},{}),tt=!1,v<0){Q.t=I,it(0),qt(0),tt=!0;return}for(Q.t=Q.fly,it(0);Q&&Q.idx<v;)Q.t=Q.segStart+Q.per+.01,it(0);for(let N=0;N<I*30;N++){it(1/30);for(let $ of g)b[$].update(1/30,{})}tt=!0,qt(0)},podiumAt(v=3){T.introCard(null),Dt(null);for(let I=0;I<v*30;I++){K.update(1/30,I/30);for(let N of g)b[N].update(1/30,{})}tt=!0,qt(0)},photoAt(){this.seek(D.firstFinishB-.05),tt=!1,V=!1;for(let v=0;v<3;v++)qt(1/30);tt=!0,qt(0)},render(){qt(0)},lookFrom(v,I,N,$,at,X,j=45){Z="debugcam",u.position.set(v,I,N),u.lookAt($,at,X),Qt(j),T.setDim(!0),h.render(f,u)},step(v,I=!0){qt(v,!I)},get mode(){return Z},get b(){return ft},shots:P,sim:D,C:p,director:k,renderer:h,scene:f,camera:u,info:()=>h.info,fps:()=>Lt.fps};return{playIntro:nt,playRace:vt,showPodium:Dt,setPaused(v){tt=!!v},dispose:R,hudRoot:T.root,get broadcastTime(){return ft},get durationS(){return Lo+D.lastFinishB+3.5},preRollS:Lo,_debug:J}}var Zn=new URLSearchParams(location.search);async function ec(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function px(){let i=Zn.get("fixture"),[t,e,n]=await Promise.all([ec("/data/course/course.json"),ec("/data/course/park.json"),ec(i?`/client/tv/race/fixtures/${i}.json`:"/data/fixtures/round.json")]);Zn.get("shot")&&document.body.classList.add("shot");let s=(Zn.get("backed")??"r2").split(",").filter(Boolean),r={};s.forEach((h,d)=>r[h]=[d%2?"Mrs M":"Mark"]);let o=document.getElementById("sub"),a=fu(document.getElementById("stage"),{course:t,park:e,round:n.public,plan:n.racePlan,backedBy:r,preserveDrawingBuffer:!!Zn.get("shot"),manualLoop:!!Zn.get("shot"),onIntroRunner:h=>{let d=n.public.runners.find(f=>f.id===h);o.textContent=`${d.nickname} - ${d.tagline}`}});window.view=a;let l=h=>{h.kind==="commentary"&&(o.textContent=h.text),h.kind==="countdown"&&(o.textContent=h.text)},c={intro:()=>a.playIntro(()=>{o.textContent="(betting would happen here)",Zn.get("auto")!=="0"&&setTimeout(c.race,1500)}),race:()=>a.playRace(l,()=>{o.textContent="Race over",setTimeout(c.podium,2500)}),podium:()=>a.showPodium(null),pause:(()=>{let h=!1;return()=>a.setPaused(h=!h)})()};document.getElementById("ctl").addEventListener("click",h=>{let d=h.target.dataset?.a;d&&c[d]()}),Zn.get("shot")||setInterval(()=>{document.getElementById("fps").textContent=`${a._debug.fps().toFixed(0)} fps`},1e3),Zn.get("auto")!=="0"&&!Zn.get("shot")&&c.intro(),window.__ready=!0}px().catch(i=>{console.error(i),document.getElementById("sub").textContent=String(i),window.__error=String(i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
