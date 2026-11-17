var Wl="170";var Ef=0,uc=1,wf=2;var Th=1,Xl=2,Zn=3,mi=0,je=1,Be=2,di=0,as=1,dc=2,pc=3,mc=4,Tf=5,Ri=100,Af=101,Rf=102,Cf=103,If=104,Pf=200,Lf=201,Df=202,Uf=203,ba=204,Sa=205,Nf=206,Ff=207,zf=208,Of=209,Bf=210,kf=211,Hf=212,Vf=213,Gf=214,Ea=0,wa=1,Ta=2,fs=3,Aa=4,Ra=5,Ca=6,Ia=7,Ah=0,Wf=1,Xf=2,Bn=0,qf=1,Yf=2,$f=3,Zf=4,Jf=5,Kf=6,jf=7;var Rh=300,us=301,ds=302,Pa=303,La=304,Io=306,Li=1e3,Ii=1001,Da=1002,ln=1003,Qf=1004;var fr=1005;var zn=1006,Vo=1007;var Pi=1008;var Qn=1009,Ch=1010,Ih=1011,Ws=1012,ql=1013,Di=1014,On=1015,sr=1016,Yl=1017,$l=1018,ps=1020,Ph=35902,Lh=1021,Dh=1022,gn=1023,Uh=1024,Nh=1025,ls=1026,ms=1027,Zl=1028,Jl=1029,Fh=1030,Kl=1031;var jl=1033,Vr=33776,Gr=33777,Wr=33778,Xr=33779,Ua=35840,Na=35841,Fa=35842,za=35843,Oa=36196,Ba=37492,ka=37496,Ha=37808,Va=37809,Ga=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,$a=37815,Za=37816,Ja=37817,Ka=37818,ja=37819,Qa=37820,tl=37821,qr=36492,el=36494,nl=36495,zh=36283,il=36284,sl=36285,rl=36286;var Yr=2300,ol=2301,Go=2302,gc=2400,xc=2401,yc=2402;var tu=3200,eu=3201;var Oh=0,nu=1,fi="",Je="srgb",vs="srgb-linear",Po="linear",Se="srgb";var ki=7680;var _c=519,iu=512,su=513,ru=514,Bh=515,ou=516,au=517,lu=518,cu=519,al=35044;var vc="300 es",Kn=2e3,$r=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=1234567,Bs=Math.PI/180,Xs=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function Ql(i,t){return(i%t+t)%t}function hu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fu(i,t,e){return i!==t?(e-i)/(t-i):0}function ks(i,t,e){return(1-e)*i+e*t}function uu(i,t,e,n){return ks(i,t,1-Math.exp(-e*n))}function du(i,t=1){return t-Math.abs(Ql(i,t*2)-t)}function pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xu(i,t){return i+Math.random()*(t-i)}function yu(i){return i*(.5-Math.random())}function _u(i){i!==void 0&&(Mc=i);let t=Mc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vu(i){return i*Bs}function Mu(i){return i*Xs}function bu(i){return(i&i-1)===0&&i!==0}function Su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*p,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var kh={DEG2RAD:Bs,RAD2DEG:Xs,generateUUID:kn,clamp:Ke,euclideanModulo:Ql,mapLinear:hu,inverseLerp:fu,lerp:ks,damp:uu,pingpong:du,smoothstep:pu,smootherstep:mu,randInt:gu,randFloat:xu,randFloatSpread:yu,seededRandom:_u,degToRad:vu,radToDeg:Mu,isPowerOfTwo:bu,ceilPowerOfTwo:Su,floorPowerOfTwo:Eu,setQuaternionFromProperEuler:wu,normalize:be,denormalize:Rn},Ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ue=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],u=s[6],S=s[1],y=s[4],M=s[7],B=s[2],I=s[5],E=s[8];return r[0]=o*v+a*S+l*B,r[3]=o*m+a*y+l*I,r[6]=o*u+a*M+l*E,r[1]=c*v+h*S+p*B,r[4]=c*m+h*y+p*I,r[7]=c*u+h*M+p*E,r[2]=d*v+f*S+g*B,r[5]=d*m+f*y+g*I,r[8]=d*u+f*M+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*p+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=p*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new ue;function Hh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){let i=Zr("canvas");return i.style.display="block",i}var bc={};function zs(i){i in bc||(bc[i]=!0,console.warn(i))}function Au(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ru(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ge={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Se&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Se&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Po:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sc=[.64,.33,.3,.6,.15,.06],Ec=[.2126,.7152,.0722],wc=[.3127,.329],Tc=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge.define({[vs]:{primaries:Sc,whitePoint:wc,transfer:Po,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:Ec,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Sc,whitePoint:wc,transfer:Se,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:Ec,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var Hi,ll=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=Zr("canvas")),Hi.width=t.width,Hi.height=t.height;let n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Iu=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xo(s[o].image)):r.push(Xo(s[o]))}else r=Xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pu=0,fn=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ii,s=Ii,r=zn,o=Pi,a=gn,l=Qn,c=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=kn(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Li:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Li:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Rh;fn.DEFAULT_ANISOTROPY=1;var ze=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,M=(f+1)/2,B=(u+1)/2,I=(h+d)/4,E=(p+v)/4,R=(g+m)/4;return y>M&&y>B?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=E/n):M>B?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=I/s,r=R/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=E/r,s=R/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(p-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(p!==v||l!==d||c!==f||h!==g){let m=1-a,u=l*d+c*f+h*g+p*v,S=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let B=Math.sqrt(y),I=Math.atan2(B,u*S);m=Math.sin(m*I)/B,a=Math.sin(a*I)/B}let M=a*S;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,p=p*m+v*M,m===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=B,c*=B,h*=B,p*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*f-c*d,t[e+1]=l*g+h*d+c*p-a*f,t[e+2]=c*g+h*f+a*d-l*p,t[e+3]=h*g-a*p-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*p+c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p-d*f*g;break;case"YXZ":this._x=d*h*p+c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p+d*f*g;break;case"ZXY":this._x=d*h*p-c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p-d*f*g;break;case"ZYX":this._x=d*h*p-c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p+d*f*g;break;case"YZX":this._x=d*h*p+c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p-d*f*g;break;case"XZY":this._x=d*h*p-c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+a+p;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>p){let f=2*Math.sqrt(1+n-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>p){let f=2*Math.sqrt(1+a-n-p);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*p+this._w*d,this._x=n*p+this._x*d,this._y=s*p+this._y*d,this._z=r*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qo=new k,Rc=new Hn,ei=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),dr.subVectors(this.max,As),Vi.subVectors(t.a,As),Gi.subVectors(t.b,As),Wi.subVectors(t.c,As),ri.subVectors(Gi,Vi),oi.subVectors(Wi,Gi),Mi.subVectors(Vi,Wi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!Yo(e,Vi,Gi,Wi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Vi,Gi,Wi,dr))?!1:(pr.crossVectors(ri,oi),e=[pr.x,pr.y,pr.z],Yo(e,Vi,Gi,Wi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new k,new k,new k,new k,new k,new k,new k,new k],wn=new k,ur=new ei,Vi=new k,Gi=new k,Wi=new k,ri=new k,oi=new k,Mi=new k,As=new k,dr=new k,pr=new k,bi=new k;function Yo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bi.fromArray(i,r);let a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),l=t.dot(bi),c=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Lu=new ei,Rs=new k,$o=new k,xi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add($o)),this.expandByPoint(Rs.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new k,Zo=new k,mr=new k,ai=new k,Jo=new k,gr=new k,Ko=new k,jr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zo.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Zo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(mr),a=ai.dot(this.direction),l=-ai.dot(mr),c=ai.lengthSq(),h=Math.abs(1-o*o),p,d,f,g;if(h>0)if(p=o*l-a,d=o*a-l,g=r*h,p>=0)if(d>=-g)if(d<=g){let v=1/h;p*=v,d*=v,f=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=r,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+d*(d+2*l)+c);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Zo).addScaledVector(mr,d),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){Jo.subVectors(e,t),gr.subVectors(n,t),Ko.crossVectors(Jo,gr);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(gr.crossVectors(ai,gr));if(l<0)return null;let c=a*this.direction.dot(Jo.cross(ai));if(c<0||l+c>o)return null;let h=-a*ai.dot(Ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,o,a,l,c,h,p,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,d,f,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,p,d,f,g,v,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=f,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*p,g=a*h,v=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*p,g=c*h,v=c*p;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*p,g=c*h,v=c*p;e[0]=d-v*a,e[4]=-o*p,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*p,g=a*h,v=a*p;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*p,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*p,e[8]=g*p+f,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*p+g,e[10]=d-v*p}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+v,e[5]=o*h,e[9]=f*p-g,e[2]=g*p-f,e[6]=a*h,e[10]=v*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Du,t,Uu)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),li.crossVectors(n,pn),li.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),li.crossVectors(n,pn)),li.normalize(),xr.crossVectors(pn,li),s[0]=li.x,s[4]=xr.x,s[8]=pn.x,s[1]=li.y,s[5]=xr.y,s[9]=pn.y,s[2]=li.z,s[6]=xr.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],u=n[14],S=n[3],y=n[7],M=n[11],B=n[15],I=s[0],E=s[4],R=s[8],_=s[12],x=s[1],b=s[5],w=s[9],T=s[13],z=s[2],W=s[6],D=s[10],q=s[14],Z=s[3],it=s[7],xt=s[11],U=s[15];return r[0]=o*I+a*x+l*z+c*Z,r[4]=o*E+a*b+l*W+c*it,r[8]=o*R+a*w+l*D+c*xt,r[12]=o*_+a*T+l*q+c*U,r[1]=h*I+p*x+d*z+f*Z,r[5]=h*E+p*b+d*W+f*it,r[9]=h*R+p*w+d*D+f*xt,r[13]=h*_+p*T+d*q+f*U,r[2]=g*I+v*x+m*z+u*Z,r[6]=g*E+v*b+m*W+u*it,r[10]=g*R+v*w+m*D+u*xt,r[14]=g*_+v*T+m*q+u*U,r[3]=S*I+y*x+M*z+B*Z,r[7]=S*E+y*b+M*W+B*it,r[11]=S*R+y*w+M*D+B*xt,r[15]=S*_+y*T+M*q+B*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*l*p-s*c*p-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*p-e*a*f-r*o*p+n*o*f+r*a*h-n*c*h)+u*(-s*a*h-e*l*p+e*a*d+s*o*p-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],u=t[15],S=p*m*c-v*d*c+v*l*f-a*m*f-p*l*u+a*d*u,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*u-o*d*u,M=h*v*c-g*p*c+g*a*f-o*v*f-h*a*u+o*p*u,B=g*p*l-h*v*l-g*a*d+o*v*d+h*a*m-o*p*m,I=e*S+n*y+s*M+r*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/I;return t[0]=S*E,t[1]=(v*d*r-p*m*r-v*s*f+n*m*f+p*s*u-n*d*u)*E,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*u+n*l*u)*E,t[3]=(p*l*r-a*d*r-p*s*c+n*d*c+a*s*f-n*l*f)*E,t[4]=y*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*u+e*d*u)*E,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*u-e*l*u)*E,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*E,t[8]=M*E,t[9]=(g*p*r-h*v*r-g*n*f+e*v*f+h*n*u-e*p*u)*E,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*u+e*a*u)*E,t[11]=(h*a*r-o*p*r-h*n*c+e*p*c+o*n*f-e*a*f)*E,t[12]=B*E,t[13]=(h*v*s-g*p*s+g*n*d-e*v*d-h*n*m+e*p*m)*E,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*E,t[15]=(o*p*s-h*a*s+h*n*l-e*p*l-o*n*d+e*a*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,d=r*c,f=r*h,g=r*p,v=o*h,m=o*p,u=a*p,S=l*c,y=l*h,M=l*p,B=n.x,I=n.y,E=n.z;return s[0]=(1-(v+u))*B,s[1]=(f+M)*B,s[2]=(g-y)*B,s[3]=0,s[4]=(f-M)*I,s[5]=(1-(d+u))*I,s[6]=(m+S)*I,s[7]=0,s[8]=(g+y)*E,s[9]=(m-S)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);let c=1/r,h=1/o,p=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=p,Tn.elements[9]*=p,Tn.elements[10]*=p,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$r)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Kn){let l=this.elements,c=1/(e-t),h=1/(n-s),p=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,v;if(a===Kn)g=(o+r)*p,v=-2*p;else if(a===$r)g=r*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new k,Tn=new ye,Du=new k(0,0,0),Uu=new k(1,1,1),li=new k,xr=new k,pn=new k,Cc=new ye,Ic=new Hn,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nu=0,Pc=new k,qi=new Hn,qn=new ye,yr=new k,Cs=new k,Fu=new k,zu=new Hn,Lc=new k(1,0,0),Dc=new k(0,1,0),Uc=new k(0,0,1),Nc={type:"added"},Ou={type:"removed"},Yi={type:"childadded",child:null},jo={type:"childremoved",child:null},Ee=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Cn,n=new Hn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new ue}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Lc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Cs,yr,this.up):qn.lookAt(yr,Cs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(qn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ou),jo.child=t,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new k(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new k,Yn=new k,Qo=new k,$n=new k,$i=new k,Zi=new k,Fc=new k,ta=new k,ea=new k,na=new k,ia=new ze,sa=new ze,ra=new ze,ui=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Yn.subVectors(n,e),Qo.subVectors(t,e);let o=An.dot(An),a=An.dot(Yn),l=An.dot(Qo),c=Yn.dot(Yn),h=Yn.dot(Qo),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let d=1/p,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ia,r.x),o.addScaledVector(sa,r.y),o.addScaledVector(ra,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Yn.subVectors(t,e),An.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,n),Zi.subVectors(r,n),ta.subVectors(t,n);let l=$i.dot(ta),c=Zi.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);let h=$i.dot(ea),p=Zi.dot(ea);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($i,o);na.subVectors(t,r);let f=$i.dot(na),g=Zi.dot(na);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zi,a);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return Fc.subVectors(r,s),a=(p-h)/(p-h+(f-g)),e.copy(s).addScaledVector(Fc,a);let u=1/(m+v+d);return o=v*u,a=d*u,e.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},_r={h:0,s:0,l:0};function oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Ql(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=oa(o,r,t+1/3),this.g=oa(o,r,t),this.b=oa(o,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ge.fromWorkingColorSpace(sn.copy(this),t),Math.round(Ke(sn.r*255,0,255))*65536+Math.round(Ke(sn.g*255,0,255))*256+Math.round(Ke(sn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(sn.copy(this),e);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Je){ge.fromWorkingColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,s=sn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(_r);let n=ks(ci.h,_r.h,e),s=ks(ci.s,_r.s,e),r=ks(ci.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new $t;$t.NAMES=Vh;var Bu=0,ni=class extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=kn(),this.name="",this.blending=as,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Sa,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vn=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new k,vr=new Ft,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}};var to=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var eo=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},ku=0,_n=new ye,aa=new Ee,Ji=new k,mn=new ei,Is=new ei,Ze=new k,we=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hh(t)?eo:to)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(mn.min,Is.min),mn.expandByPoint(Ze),Ze.addVectors(mn.max,Is.max),mn.expandByPoint(Ze)):(mn.expandByPoint(Is.min),mn.expandByPoint(Is.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(t,c),Ze.add(Ji)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new k,l[R]=new k;let c=new k,h=new k,p=new k,d=new Ft,f=new Ft,g=new Ft,v=new k,m=new k;function u(R,_,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,_),p.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,x),h.sub(c),p.sub(c),f.sub(d),g.sub(d);let b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(b),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[R].add(v),a[_].add(v),a[x].add(v),l[R].add(m),l[_].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,_=S.length;R<_;++R){let x=S[R],b=x.start,w=x.count;for(let T=b,z=b+w;T<z;T+=3)u(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let y=new k,M=new k,B=new k,I=new k;function E(R){B.fromBufferAttribute(s,R),I.copy(B);let _=a[R];y.copy(_),y.sub(B.multiplyScalar(B.dot(_))).normalize(),M.crossVectors(I,_);let b=M.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,b)}for(let R=0,_=S.length;R<_;++R){let x=S[R],b=x.start,w=x.count;for(let T=b,z=b+w;T<z;T+=3)E(t.getX(T+0)),E(t.getX(T+1)),E(t.getX(T+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,p=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let u=0;u<h;u++)d[g++]=c[f++]}return new Ie(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zc=new ye,Si=new jr,Mr=new xi,Oc=new k,br=new k,Sr=new k,Er=new k,la=new k,wr=new k,Bc=new k,Tr=new k,Te=class extends Ee{constructor(t=new we,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(la.fromBufferAttribute(p,t),o?wr.addScaledVector(la,h):wr.addScaledVector(la.sub(e),h))}e.add(wr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(Mr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Mr,Oc)===null||Si.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),Si.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,B=y;M<B;M+=3){let I=a.getX(M),E=a.getX(M+1),R=a.getX(M+2);s=Ar(this,u,t,n,c,h,p,I,E,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){let S=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=Ar(this,o,t,n,c,h,p,S,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,B=y;M<B;M+=3){let I=M,E=M+1,R=M+2;s=Ar(this,u,t,n,c,h,p,I,E,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){let S=m,y=m+1,M=m+2;s=Ar(this,o,t,n,c,h,p,S,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Hu(i,t,e,n,s,r,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===mi,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:i}}function Ar(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,br),i.getVertexPosition(l,Sr),i.getVertexPosition(c,Er);let h=Hu(i,t,e,n,br,Sr,Er,Bc);if(h){let p=new k;ui.getBarycoord(Bc,br,Sr,Er,p),s&&(h.uv=ui.getInterpolatedAttribute(s,a,l,c,p,new Ft)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,l,c,p,new Ft)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,l,c,p,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};ui.getNormal(br,Sr,Er,d.normal),h.face=d,h.barycoord=p}return h}var me=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(p,2));function g(v,m,u,S,y,M,B,I,E,R,_){let x=M/E,b=B/R,w=M/2,T=B/2,z=I/2,W=E+1,D=R+1,q=0,Z=0,it=new k;for(let xt=0;xt<D;xt++){let U=xt*b-T;for(let Lt=0;Lt<W;Lt++){let J=Lt*x-w;it[v]=J*S,it[m]=U*y,it[u]=z,c.push(it.x,it.y,it.z),it[v]=0,it[m]=0,it[u]=I>0?1:-1,h.push(it.x,it.y,it.z),p.push(Lt/E),p.push(1-xt/R),q+=1}}for(let xt=0;xt<R;xt++)for(let U=0;U<E;U++){let Lt=d+U+W*xt,J=d+U+W*(xt+1),G=d+(U+1)+W*(xt+1),j=d+(U+1)+W*xt;l.push(Lt,J,j),l.push(J,G,j),Z+=6}a.addGroup(f,Z,_),f+=Z,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function Vu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var tc={clone:gs,merge:on},Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},no=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new k,kc=new Ft,Hc=new Ft,an=class extends no{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Hc),e.subVectors(Hc,kc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ki=-90,ji=1,fl=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Ki,ji,t,e);s.layers=this.layers,this.add(s);let r=new an(Ki,ji,t,e);r.layers=this.layers,this.add(r);let o=new an(Ki,ji,t,e);o.layers=this.layers,this.add(o);let a=new an(Ki,ji,t,e);a.layers=this.layers,this.add(a);let l=new an(Ki,ji,t,e);l.layers=this.layers,this.add(l);let c=new an(Ki,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},io=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ul=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new me(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:di});r.uniforms.tEquirect.value=e;let o=new Te(s,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=zn),new fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ca=new k,Xu=new k,qu=new ue,Jn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ca.subVectors(n,e).cross(Xu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qu.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new xi,Rr=new k,qs=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],p=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],u=s[12],S=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-u).normalize(),n[1].setComponents(l+r,d+c,m+f,M+u).normalize(),n[2].setComponents(l+o,d+h,m+g,M+S).normalize(),n[3].setComponents(l-o,d-h,m-g,M-S).normalize(),n[4].setComponents(l-a,d-p,m-v,M-y).normalize(),e===Kn)n[5].setComponents(l+a,d+p,m+v,M+y).normalize();else if(e===$r)n[5].setComponents(a,p,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){let g=p[d],v=p[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,p[d]=v)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){let v=p[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qe=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let u=0;u<h;u++){let S=u*d-o;for(let y=0;y<c;y++){let M=y*p-r;g.push(M,-S,0),v.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<a;S++){let y=S+c*u,M=S+c*(u+1),B=S+1+c*(u+1),I=S+1+c*u;f.push(y,M,I),f.push(M,B,I)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
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
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xd=`#define PI 3.141592653589793
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
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_d=`vec3 transformedNormal = objectNormal;
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
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bd=`uniform bool receiveShadow;
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
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xd=`PhysicalMaterial material;
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
#endif`,qd=`struct PhysicalMaterial {
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
}`,Yd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,_m=`#define TOON
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
}`,vm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:$u,alphahash_pars_fragment:Zu,alphamap_fragment:Ju,alphamap_pars_fragment:Ku,alphatest_fragment:ju,alphatest_pars_fragment:Qu,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:sd,beginnormal_vertex:rd,bsdfs:od,iridescence_fragment:ad,bumpmap_pars_fragment:ld,clipping_planes_fragment:cd,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:ud,color_fragment:dd,color_pars_fragment:pd,color_pars_vertex:md,color_vertex:gd,common:xd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:_d,displacementmap_pars_vertex:vd,displacementmap_vertex:Md,emissivemap_fragment:bd,emissivemap_pars_fragment:Sd,colorspace_fragment:Ed,colorspace_pars_fragment:wd,envmap_fragment:Td,envmap_common_pars_fragment:Ad,envmap_pars_fragment:Rd,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:kd,envmap_vertex:Id,fog_vertex:Pd,fog_pars_vertex:Ld,fog_fragment:Dd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_pars_fragment:Fd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Od,lights_pars_begin:Bd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Gd,lights_phong_pars_fragment:Wd,lights_physical_fragment:Xd,lights_physical_pars_fragment:qd,lights_fragment_begin:Yd,lights_fragment_maps:$d,lights_fragment_end:Zd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Kd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:Qd,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:fp,normal_fragment_maps:up,normal_pars_fragment:dp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:vp,opaque_fragment:Mp,packing:bp,premultiplied_alpha_fragment:Sp,project_vertex:Ep,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Pp,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:zp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:kp,transmission_fragment:Hp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:$p,backgroundCube_vert:Zp,backgroundCube_frag:Jp,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:fm,meshmatcap_frag:um,meshnormal_vert:dm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:xm,meshphysical_frag:ym,meshtoon_vert:_m,meshtoon_frag:vm,points_vert:Mm,points_frag:bm,shadow_vert:Sm,shadow_frag:Em,sprite_vert:wm,sprite_frag:Tm},Ht={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Fn={basic:{uniforms:on([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:on([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new $t(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:on([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:on([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:on([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new $t(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:on([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:on([Ht.points,Ht.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:on([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:on([Ht.common,Ht.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:on([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:on([Ht.sprite,Ht.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:on([Ht.common,Ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:on([Ht.lights,Ht.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Fn.physical={uniforms:on([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var Cr={r:0,b:0,g:0},wi=new Cn,Am=new ye;function Rm(i,t,e,n,s,r,o){let a=new $t(0),l=r===!0?0:1,c,h,p=null,d=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function v(S){let y=!1,M=g(S);M===null?u(a,l):M&&M.isColor&&(u(M,1),y=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Io)?(h===void 0&&(h=new Te(new me(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:gs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,I,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(y.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(wi)),h.material.toneMapped=ge.getTransfer(M.colorSpace)!==Se,(p!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Te(new Qe(2,2),new cn({name:"BackgroundMaterial",uniforms:gs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ge.getTransfer(M.colorSpace)!==Se,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,p=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,y){S.getRGB(Cr,Gh(i)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(a,l)},render:v,addToRenderList:m}}function Cm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,b,w,T,z){let W=!1,D=p(T,w,b);r!==D&&(r=D,c(r.object)),W=f(x,T,w,z),W&&g(x,T,w,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(x,b,w,T),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function p(x,b,w){let T=w.wireframe===!0,z=n[x.id];z===void 0&&(z={},n[x.id]=z);let W=z[b.id];W===void 0&&(W={},z[b.id]=W);let D=W[T];return D===void 0&&(D=d(l()),W[T]=D),D}function d(x){let b=[],w=[],T=[];for(let z=0;z<e;z++)b[z]=0,w[z]=0,T[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:w,attributeDivisors:T,object:x,attributes:{},index:null}}function f(x,b,w,T){let z=r.attributes,W=b.attributes,D=0,q=w.getAttributes();for(let Z in q)if(q[Z].location>=0){let xt=z[Z],U=W[Z];if(U===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(U=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(U=x.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;D++}return r.attributesNum!==D||r.index!==T}function g(x,b,w,T){let z={},W=b.attributes,D=0,q=w.getAttributes();for(let Z in q)if(q[Z].location>=0){let xt=W[Z];xt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor));let U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),z[Z]=U,D++}r.attributes=z,r.attributesNum=D,r.index=T}function v(){let x=r.newAttributes;for(let b=0,w=x.length;b<w;b++)x[b]=0}function m(x){u(x,0)}function u(x,b){let w=r.newAttributes,T=r.enabledAttributes,z=r.attributeDivisors;w[x]=1,T[x]===0&&(i.enableVertexAttribArray(x),T[x]=1),z[x]!==b&&(i.vertexAttribDivisor(x,b),z[x]=b)}function S(){let x=r.newAttributes,b=r.enabledAttributes;for(let w=0,T=b.length;w<T;w++)b[w]!==x[w]&&(i.disableVertexAttribArray(w),b[w]=0)}function y(x,b,w,T,z,W,D){D===!0?i.vertexAttribIPointer(x,b,w,z,W):i.vertexAttribPointer(x,b,w,T,z,W)}function M(x,b,w,T){v();let z=T.attributes,W=w.getAttributes(),D=b.defaultAttributeValues;for(let q in W){let Z=W[q];if(Z.location>=0){let it=z[q];if(it===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){let xt=it.normalized,U=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;let J=Lt.buffer,G=Lt.type,j=Lt.bytesPerElement,ot=G===i.INT||G===i.UNSIGNED_INT||it.gpuType===ql;if(it.isInterleavedBufferAttribute){let st=it.data,pt=st.stride,et=it.offset;if(st.isInstancedInterleavedBuffer){for(let rt=0;rt<Z.locationSize;rt++)u(Z.location+rt,st.meshPerAttribute);x.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<Z.locationSize;rt++)m(Z.location+rt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let rt=0;rt<Z.locationSize;rt++)y(Z.location+rt,U/Z.locationSize,G,xt,pt*j,(et+U/Z.locationSize*rt)*j,ot)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<Z.locationSize;st++)u(Z.location+st,it.meshPerAttribute);x.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<Z.locationSize;st++)m(Z.location+st);i.bindBuffer(i.ARRAY_BUFFER,J);for(let st=0;st<Z.locationSize;st++)y(Z.location+st,U/Z.locationSize,G,xt,U*j,U/Z.locationSize*st*j,ot)}}else if(D!==void 0){let xt=D[q];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(Z.location,xt);break;case 3:i.vertexAttrib3fv(Z.location,xt);break;case 4:i.vertexAttrib4fv(Z.location,xt);break;default:i.vertexAttrib1fv(Z.location,xt)}}}}S()}function B(){R();for(let x in n){let b=n[x];for(let w in b){let T=b[w];for(let z in T)h(T[z].object),delete T[z];delete b[w]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;let b=n[x.id];for(let w in b){let T=b[w];for(let z in T)h(T[z].object),delete T[z];delete b[w]}delete n[x.id]}function E(x){for(let b in n){let w=n[b];if(w[x.id]===void 0)continue;let T=w[x.id];for(let z in T)h(T[z].object),delete T[z];delete w[x.id]}}function R(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:_,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Im(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),e.update(h,n,p))}function a(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let f=0;for(let g=0;g<p;g++)f+=h[g];e.update(f,n,1)}function l(c,h,p,d){if(p===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==gn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==On&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:B,maxSamples:I}}function Lm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Jn,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let f=p.length!==0||d||n!==0||s;return s=d,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,f){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,y=S*4,M=u.clippingState||null;l.value=M,M=h(g,d,y,f);for(let B=0;B!==y;++B)M[B]=e[B];u.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,f,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let u=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,M=f;y!==v;++y,M+=4)o.copy(p[y]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Dm(i){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=us:a===La&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pa||a===La)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ul(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var so=class extends no{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,Vc=[.125,.215,.35,.446,.526,.582],Ci=20,ha=new so,Gc=new $t,fa=null,ua=0,da=0,pa=!1,Ai=(1+Math.sqrt(5))/2,Qi=1/Ai,Wc=[new k(-Ai,Qi,0),new k(Ai,Qi,0),new k(-Qi,0,Ai),new k(Qi,0,Ai),new k(0,Ai,-Qi),new k(0,Ai,Qi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],ro=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fa=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,ua,da),this._renderer.xr.enabled=pa,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:sr,format:gn,colorSpace:vs,depthBuffer:!1},s=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Nm(r,t,e)}return s}_compileMaterial(t){let e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){let a=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=Bn,h.autoClear=!1;let f=new vn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new Te(new me,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Gc),v=!0);for(let u=0;u<6;u++){let S=u%3;S===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):S===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let y=this._cubeSize;Ir(s,S*y,u>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=p,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===us||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wc[(s-r-1)%Wc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new Te(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ci;m>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);let u=[],S=0;for(let E=0;E<Ci;++E){let R=E/v,_=Math.exp(-R*R/2);u.push(_),E===0?S+=_:E<m&&(S+=2*_)}for(let E=0;E<u.length;E++)u[E]=u[E]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let M=this._sizeLods[s],B=3*M*(s>y-rs?s-y+rs:0),I=4*(this._cubeSize-M);Ir(e,B,I,3*M,2*M),l.setRenderTarget(e),l.render(p,ha)}};function Um(i){let t=[],e=[],n=[],s=i,r=i-rs+1+Vc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-rs?l=Vc[o-i+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,g=6,v=3,m=2,u=1,S=new Float32Array(v*g*f),y=new Float32Array(m*g*f),M=new Float32Array(u*g*f);for(let I=0;I<f;I++){let E=I%3*2/3-1,R=I>2?0:-1,_=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];S.set(_,v*g*I),y.set(d,m*g*I);let x=[I,I,I,I,I,I];M.set(x,u*g*I)}let B=new we;B.setAttribute("position",new Ie(S,v)),B.setAttribute("uv",new Ie(y,m)),B.setAttribute("faceIndex",new Ie(M,u)),t.push(B),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xc(i,t,e){let n=new ti(i,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nm(i,t,e){let n=new Float32Array(Ci),s=new k(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function qc(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yc(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function Fm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pa||l===La,h=l===us||l===ds;if(c||h){let p=t.get(a),d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ro(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ro(i)),p=c?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,t,e,n){let s={},r=new WeakMap;function o(p){let d=p.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(p,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(p){let d=p.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=p.morphAttributes;for(let g in f){let v=f[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(p){let d=[],f=p.index,g=p.attributes.position,v=0;if(f!==null){let S=f.array;v=f.version;for(let y=0,M=S.length;y<M;y+=3){let B=S[y+0],I=S[y+1],E=S[y+2];d.push(B,I,I,E,E,B)}}else if(g!==void 0){let S=g.array;v=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){let B=y+0,I=y+1,E=y+2;d.push(B,I,I,E,E,B)}}else return;let m=new(Hh(d)?eo:to)(d,1);m.version=v;let u=r.get(p);u&&t.remove(u),r.set(p,m)}function h(p){let d=r.get(p);if(d){let f=p.index;f!==null&&d.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Bm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];e.update(m,n,1)}function p(d,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let u=0;for(let S=0;S<g;S++)u+=f[S]*v[S];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hm(i,t,e){let n=new WeakMap,s=new ze;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==p){let _=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let M=a.attributes.position.count*y,B=1;M>t.maxTextureSize&&(B=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let I=new Float32Array(M*B*4*p),E=new Kr(I,M,B,p);E.type=On,E.needsUpdate=!0;let R=y*4;for(let x=0;x<p;x++){let b=m[x],w=u[x],T=S[x],z=M*B*4*x;for(let W=0;W<b.count;W++){let D=W*R;f===!0&&(s.fromBufferAttribute(b,W),I[z+D+0]=s.x,I[z+D+1]=s.y,I[z+D+2]=s.z,I[z+D+3]=0),g===!0&&(s.fromBufferAttribute(w,W),I[z+D+4]=s.x,I[z+D+5]=s.y,I[z+D+6]=s.z,I[z+D+7]=0),v===!0&&(s.fromBufferAttribute(T,W),I[z+D+8]=s.x,I[z+D+9]=s.y,I[z+D+10]=s.z,I[z+D+11]=T.itemSize===4?s.w:1)}}d={count:p,texture:E,size:new Ft(M,B)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return p}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var oo=class extends fn{constructor(t,e,n,s,r,o,a,l,c,h=ls){if(h!==ls&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ls&&(n=Di),n===void 0&&h===ms&&(n=ps),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xh=new fn,$c=new oo(1,1),qh=new Kr,Yh=new hl,$h=new io,Zc=[],Jc=[],Kc=new Float32Array(16),jc=new Float32Array(9),Qc=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lo(i,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),Xe(e,n)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),Xe(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),Xe(e,n)}}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($c.compareFunction=Bh,r=$c):r=Xh,e.setTexture2D(t||r,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yh,s)}function o0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qh,s)}function l0(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return $m;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function c0(i,t){i.uniform1fv(this.addr,t)}function h0(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function f0(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function u0(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function d0(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p0(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m0(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g0(i,t){i.uniform1iv(this.addr,t)}function x0(i,t){i.uniform2iv(this.addr,t)}function y0(i,t){i.uniform3iv(this.addr,t)}function _0(i,t){i.uniform4iv(this.addr,t)}function v0(i,t){i.uniform1uiv(this.addr,t)}function M0(i,t){i.uniform2uiv(this.addr,t)}function b0(i,t){i.uniform3uiv(this.addr,t)}function S0(i,t){i.uniform4uiv(this.addr,t)}function E0(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xh,r[o])}function w0(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yh,r[o])}function T0(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$h,r[o])}function A0(i,t,e){let n=this.cache,s=t.length,r=Lo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qh,r[o])}function R0(i){switch(i){case 5126:return c0;case 35664:return h0;case 35665:return f0;case 35666:return u0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return M0;case 36295:return b0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return A0}}var dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l0(e.type)}},pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ma=/(\w+)(\])?(\[|\.)?/g;function th(i,t){i.seq.push(t),i.map[t.id]=t}function C0(i,t,e){let n=i.name,s=n.length;for(ma.lastIndex=0;;){let r=ma.exec(n),o=ma.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){th(e,c===void 0?new dl(a,i,t):new pl(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new ml(a),th(e,p)),e=p}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function eh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var I0=37297,P0=0;function L0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nh=new ue;function D0(i){ge._getMatrix(nh,ge.workingColorSpace,i);let t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Po:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ih(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L0(i.getShaderSource(t),o)}else return s}function U0(i,t){let e=D0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N0(i,t){let e;switch(t){case qf:e="Linear";break;case Yf:e="Reinhard";break;case $f:e="Cineon";break;case Zf:e="ACESFilmic";break;case Kf:e="AgX";break;case jf:e="Neutral";break;case Jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pr=new k;function F0(){ge.getLuminanceCoefficients(Pr);let i=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function O0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function sh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(k0,V0)}var H0=new Map;function V0(i,t){let e=ae[t];if(e===void 0){let n=H0.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gl(e)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(G0,W0)}function W0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function X0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:t="ENVMAP_TYPE_CUBE";break;case Io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function $0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ah:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function Z0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function J0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=X0(e),c=q0(e),h=Y0(e),p=$0(e),d=Z0(e),f=z0(e),g=O0(r),v=s.createProgram(),m,u,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),u.length>0&&(u+=`
`)):(m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),u=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Bn?N0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),F0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=gl(o),o=sh(o,e),o=rh(o,e),a=gl(a),a=sh(a,e),a=rh(a,e),o=oh(o),a=oh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=S+m+o,M=S+u+a,B=eh(s,s.VERTEX_SHADER,y),I=eh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,B),s.attachShader(v,I),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(b){if(i.debug.checkShaderErrors){let w=s.getProgramInfoLog(v).trim(),T=s.getShaderInfoLog(B).trim(),z=s.getShaderInfoLog(I).trim(),W=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,B,I);else{let q=ih(s,B,"vertex"),Z=ih(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+w+`
`+q+`
`+Z)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(T===""||z==="")&&(D=!1);D&&(b.diagnostics={runnable:W,programLog:w,vertexShader:{log:T,prefix:m},fragmentShader:{log:z,prefix:u}})}s.deleteShader(B),s.deleteShader(I),R=new hs(s,v),_=B0(s,v)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,I0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=I,this}var K0=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yl(t),e.set(t,n)),n}},yl=class{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}};function j0(i,t,e,n,s,r,o){let a=new Qr,l=new xl,c=new Set,h=[],p=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,x,b,w,T){let z=w.fog,W=T.geometry,D=_.isMeshStandardMaterial?w.environment:null,q=(_.isMeshStandardMaterial?e:t).get(_.envMap||D),Z=q&&q.mapping===Io?q.image.height:null,it=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let xt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,U=xt!==void 0?xt.length:0,Lt=0;W.morphAttributes.position!==void 0&&(Lt=1),W.morphAttributes.normal!==void 0&&(Lt=2),W.morphAttributes.color!==void 0&&(Lt=3);let J,G,j,ot;if(it){let V=Fn[it];J=V.vertexShader,G=V.fragmentShader}else J=_.vertexShader,G=_.fragmentShader,l.update(_),j=l.getVertexShaderID(_),ot=l.getFragmentShaderID(_);let st=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),et=T.isInstancedMesh===!0,rt=T.isBatchedMesh===!0,mt=!!_.map,Q=!!_.matcap,gt=!!q,H=!!_.aoMap,Ot=!!_.lightMap,Tt=!!_.bumpMap,vt=!!_.normalMap,Nt=!!_.displacementMap,nt=!!_.emissiveMap,zt=!!_.metalnessMap,N=!!_.roughnessMap,L=_.anisotropy>0,ut=_.clearcoat>0,Rt=_.dispersion>0,Dt=_.iridescence>0,tt=_.sheen>0,ct=_.transmission>0,lt=L&&!!_.anisotropyMap,_t=ut&&!!_.clearcoatMap,St=ut&&!!_.clearcoatNormalMap,At=ut&&!!_.clearcoatRoughnessMap,Ct=Dt&&!!_.iridescenceMap,kt=Dt&&!!_.iridescenceThicknessMap,Gt=tt&&!!_.sheenColorMap,Vt=tt&&!!_.sheenRoughnessMap,re=!!_.specularMap,Yt=!!_.specularColorMap,A=!!_.specularIntensityMap,P=ct&&!!_.transmissionMap,Y=ct&&!!_.thicknessMap,O=!!_.gradientMap,$=!!_.alphaMap,X=_.alphaTest>0,at=!!_.alphaHash,It=!!_.extensions,wt=Bn;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(wt=i.toneMapping);let C={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:G,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:rt,batchingColor:rt&&T._colorsTexture!==null,instancing:et,instancingColor:et&&T.instanceColor!==null,instancingMorph:et&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:vs,alphaToCoverage:!!_.alphaToCoverage,map:mt,matcap:Q,envMap:gt,envMapMode:gt&&q.mapping,envMapCubeUVHeight:Z,aoMap:H,lightMap:Ot,bumpMap:Tt,normalMap:vt,displacementMap:d&&Nt,emissiveMap:nt,normalMapObjectSpace:vt&&_.normalMapType===nu,normalMapTangentSpace:vt&&_.normalMapType===Oh,metalnessMap:zt,roughnessMap:N,anisotropy:L,anisotropyMap:lt,clearcoat:ut,clearcoatMap:_t,clearcoatNormalMap:St,clearcoatRoughnessMap:At,dispersion:Rt,iridescence:Dt,iridescenceMap:Ct,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:Gt,sheenRoughnessMap:Vt,specularMap:re,specularColorMap:Yt,specularIntensityMap:A,transmission:ct,transmissionMap:P,thicknessMap:Y,gradientMap:O,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:X,alphaHash:at,combine:_.combine,mapUv:mt&&v(_.map.channel),aoMapUv:H&&v(_.aoMap.channel),lightMapUv:Ot&&v(_.lightMap.channel),bumpMapUv:Tt&&v(_.bumpMap.channel),normalMapUv:vt&&v(_.normalMap.channel),displacementMapUv:Nt&&v(_.displacementMap.channel),emissiveMapUv:nt&&v(_.emissiveMap.channel),metalnessMapUv:zt&&v(_.metalnessMap.channel),roughnessMapUv:N&&v(_.roughnessMap.channel),anisotropyMapUv:lt&&v(_.anisotropyMap.channel),clearcoatMapUv:_t&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:St&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&v(_.sheenRoughnessMap.channel),specularMapUv:re&&v(_.specularMap.channel),specularColorMapUv:Yt&&v(_.specularColorMap.channel),specularIntensityMapUv:A&&v(_.specularIntensityMap.channel),transmissionMapUv:P&&v(_.transmissionMap.channel),thicknessMapUv:Y&&v(_.thicknessMap.channel),alphaMapUv:$&&v(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(vt||L),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!W.attributes.uv&&(mt||$),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:pt,skinning:T.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Lt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:mt&&_.map.isVideoTexture===!0&&ge.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:nt&&_.emissiveMap.isVideoTexture===!0&&ge.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:It&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&_.extensions.multiDraw===!0||rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return C.vertexUv1s=c.has(1),C.vertexUv2s=c.has(2),C.vertexUv3s=c.has(3),c.clear(),C}function u(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let b in _.defines)x.push(b),x.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(S(x,_),y(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function S(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function y(_,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){let x=g[_.type],b;if(x){let w=Fn[x];b=tc.clone(w.uniforms)}else b=_.uniforms;return b}function B(_,x){let b;for(let w=0,T=h.length;w<T;w++){let z=h[w];if(z.cacheKey===x){b=z,++b.usedTimes;break}}return b===void 0&&(b=new J0(i,x,_,r),h.push(b)),b}function I(_){if(--_.usedTimes===0){let x=h.indexOf(_);h[x]=h[h.length-1],h.pop(),_.destroy()}}function E(_){l.remove(_)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:B,releaseProgram:I,releaseShaderCache:E,programs:h,dispose:R}}function Q0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,d,f,g,v,m){let u=i[t];return u===void 0?(u={id:p.id,object:p,geometry:d,material:f,groupOrder:g,renderOrder:p.renderOrder,z:v,group:m},i[t]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=f,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=v,u.group=m),t++,u}function a(p,d,f,g,v,m){let u=o(p,d,f,g,v,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function l(p,d,f,g,v,m){let u=o(p,d,f,g,v,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function c(p,d){e.length>1&&e.sort(p||tg),n.length>1&&n.sort(d||lh),s.length>1&&s.sort(d||lh)}function h(){for(let p=t,d=i.length;p<d;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function eg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ch,i.set(n,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new $t};break;case"SpotLight":e={position:new k,direction:new k,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function og(i){let t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new ye,o=new ye;function a(c){let h=0,p=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,v=0,m=0,u=0,S=0,y=0,M=0,B=0,I=0,E=0;c.sort(rg);for(let _=0,x=c.length;_<x;_++){let b=c[_],w=b.color,T=b.intensity,z=b.distance,W=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=w.r*T,p+=w.g*T,d+=w.b*T;else if(b.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(b.sh.coefficients[D],T);E++}else if(b.isDirectionalLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let q=b.shadow,Z=e.get(b);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=b.shadow.matrix,S++}n.directional[f]=D,f++}else if(b.isSpotLight){let D=t.get(b);D.position.setFromMatrixPosition(b.matrixWorld),D.color.copy(w).multiplyScalar(T),D.distance=z,D.coneCos=Math.cos(b.angle),D.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),D.decay=b.decay,n.spot[v]=D;let q=b.shadow;if(b.map&&(n.spotLightMap[B]=b.map,B++,q.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[v]=q.matrix,b.castShadow){let Z=e.get(b);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=W,M++}v++}else if(b.isRectAreaLight){let D=t.get(b);D.color.copy(w).multiplyScalar(T),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=D,m++}else if(b.isPointLight){let D=t.get(b);if(D.color.copy(b.color).multiplyScalar(b.intensity),D.distance=b.distance,D.decay=b.decay,b.castShadow){let q=b.shadow,Z=e.get(b);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=D,g++}else if(b.isHemisphereLight){let D=t.get(b);D.skyColor.copy(b.color).multiplyScalar(T),D.groundColor.copy(b.groundColor).multiplyScalar(T),n.hemi[u]=D,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==S||R.numPointShadows!==y||R.numSpotShadows!==M||R.numSpotMaps!==B||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+B-I,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=S,R.numPointShadows=y,R.numSpotShadows=M,R.numSpotMaps=B,R.numLightProbes=E,n.version=sg++)}function l(c,h){let p=0,d=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){let y=c[u];if(y.isDirectionalLight){let M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function hh(i){let t=new og(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ag(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hh(i),t.set(s,[a])):r>=o.length?(a=new hh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var _l=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vl=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`;function hg(i,t,e){let n=new qs,s=new Ft,r=new Ft,o=new ze,a=new _l({depthPacking:eu}),l=new vl,c={},h=e.maxTextureSize,p={[mi]:je,[je]:mi,[Be]:Be},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let u=this.type;this.render=function(I,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;let _=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),w=i.state;w.setBlending(di),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let T=u!==Zn&&this.type===Zn,z=u===Zn&&this.type!==Zn;for(let W=0,D=I.length;W<D;W++){let q=I[W],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let it=Z.getFrameExtents();if(s.multiply(it),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,Z.mapSize.y=r.y)),Z.map===null||T===!0||z===!0){let U=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ti(s.x,s.y,U),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let xt=Z.getViewportCount();for(let U=0;U<xt;U++){let Lt=Z.getViewport(U);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),w.viewport(o),Z.updateMatrices(q,U),n=Z.getFrustum(),M(E,R,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===Zn&&S(Z,R),Z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(_,x,b)};function S(I,E){let R=t.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ti(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(E,null,R,d,v,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(E,null,R,f,v,null)}function y(I,E,R,_){let x=null,b=R.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)x=b;else if(x=R.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let w=x.uuid,T=E.uuid,z=c[w];z===void 0&&(z={},c[w]=z);let W=z[T];W===void 0&&(W=x.clone(),z[T]=W,E.addEventListener("dispose",B)),x=W}if(x.visible=E.visible,x.wireframe=E.wireframe,_===Zn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:p[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let w=i.properties.get(x);w.light=R}return x}function M(I,E,R,_,x){if(I.visible===!1)return;if(I.layers.test(E.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Zn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,I.matrixWorld);let T=t.update(I),z=I.material;if(Array.isArray(z)){let W=T.groups;for(let D=0,q=W.length;D<q;D++){let Z=W[D],it=z[Z.materialIndex];if(it&&it.visible){let xt=y(I,it,_,x);I.onBeforeShadow(i,I,E,R,T,xt,Z),i.renderBufferDirect(R,null,T,xt,I,Z),I.onAfterShadow(i,I,E,R,T,xt,Z)}}}else if(z.visible){let W=y(I,z,_,x);I.onBeforeShadow(i,I,E,R,T,W,null),i.renderBufferDirect(R,null,T,W,I,null),I.onAfterShadow(i,I,E,R,T,W,null)}}let w=I.children;for(let T=0,z=w.length;T<z;T++)M(w[T],E,R,_,x)}function B(I){I.target.removeEventListener("dispose",B);for(let R in c){let _=c[R],x=I.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}var fg={[Ea]:wa,[Ta]:Ca,[Aa]:Ia,[fs]:Ra,[wa]:Ea,[Ca]:Ta,[Ia]:Aa,[Ra]:fs};function ug(i,t){function e(){let P=!1,Y=new ze,O=null,$=new ze(0,0,0,0);return{setMask:function(X){O!==X&&!P&&(i.colorMask(X,X,X,X),O=X)},setLocked:function(X){P=X},setClear:function(X,at,It,wt,C){C===!0&&(X*=wt,at*=wt,It*=wt),Y.set(X,at,It,wt),$.equals(Y)===!1&&(i.clearColor(X,at,It,wt),$.copy(Y))},reset:function(){P=!1,O=null,$.set(-1,0,0,0)}}}function n(){let P=!1,Y=!1,O=null,$=null,X=null;return{setReversed:function(at){if(Y!==at){let It=t.get("EXT_clip_control");Y?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);let wt=X;X=null,this.setClear(wt)}Y=at},getReversed:function(){return Y},setTest:function(at){at?st(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(at){O!==at&&!P&&(i.depthMask(at),O=at)},setFunc:function(at){if(Y&&(at=fg[at]),$!==at){switch(at){case Ea:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ra:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){P=at},setClear:function(at){X!==at&&(Y&&(at=1-at),i.clearDepth(at),X=at)},reset:function(){P=!1,O=null,$=null,X=null,Y=!1}}}function s(){let P=!1,Y=null,O=null,$=null,X=null,at=null,It=null,wt=null,C=null;return{setTest:function(V){P||(V?st(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(V){Y!==V&&!P&&(i.stencilMask(V),Y=V)},setFunc:function(V,K,yt){(O!==V||$!==K||X!==yt)&&(i.stencilFunc(V,K,yt),O=V,$=K,X=yt)},setOp:function(V,K,yt){(at!==V||It!==K||wt!==yt)&&(i.stencilOp(V,K,yt),at=V,It=K,wt=yt)},setLocked:function(V){P=V},setClear:function(V){C!==V&&(i.clearStencil(V),C=V)},reset:function(){P=!1,Y=null,O=null,$=null,X=null,at=null,It=null,wt=null,C=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},p={},d=new WeakMap,f=[],g=null,v=!1,m=null,u=null,S=null,y=null,M=null,B=null,I=null,E=new $t(0,0,0),R=0,_=!1,x=null,b=null,w=null,T=null,z=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,q=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),D=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),D=q>=2);let it=null,xt={},U=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),J=new ze().fromArray(U),G=new ze().fromArray(Lt);function j(P,Y,O,$){let X=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<O;It++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(Y+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return at}let ot={};ot[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(fs),Tt(!1),vt(uc),st(i.CULL_FACE),H(di);function st(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function pt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function et(P,Y){return p[P]!==Y?(i.bindFramebuffer(P,Y),p[P]=Y,P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Y),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function rt(P,Y){let O=f,$=!1;if(P){O=d.get(Y),O===void 0&&(O=[],d.set(Y,O));let X=P.textures;if(O.length!==X.length||O[0]!==i.COLOR_ATTACHMENT0){for(let at=0,It=X.length;at<It;at++)O[at]=i.COLOR_ATTACHMENT0+at;O.length=X.length,$=!0}}else O[0]!==i.BACK&&(O[0]=i.BACK,$=!0);$&&i.drawBuffers(O)}function mt(P){return g!==P?(i.useProgram(P),g=P,!0):!1}let Q={[Ri]:i.FUNC_ADD,[Af]:i.FUNC_SUBTRACT,[Rf]:i.FUNC_REVERSE_SUBTRACT};Q[Cf]=i.MIN,Q[If]=i.MAX;let gt={[Pf]:i.ZERO,[Lf]:i.ONE,[Df]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[Bf]:i.SRC_ALPHA_SATURATE,[zf]:i.DST_COLOR,[Nf]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[Of]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Gf]:i.ONE_MINUS_CONSTANT_ALPHA};function H(P,Y,O,$,X,at,It,wt,C,V){if(P===di){v===!0&&(pt(i.BLEND),v=!1);return}if(v===!1&&(st(i.BLEND),v=!0),P!==Tf){if(P!==m||V!==_){if((u!==Ri||M!==Ri)&&(i.blendEquation(i.FUNC_ADD),u=Ri,M=Ri),V)switch(P){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,y=null,B=null,I=null,E.set(0,0,0),R=0,m=P,_=V}return}X=X||Y,at=at||O,It=It||$,(Y!==u||X!==M)&&(i.blendEquationSeparate(Q[Y],Q[X]),u=Y,M=X),(O!==S||$!==y||at!==B||It!==I)&&(i.blendFuncSeparate(gt[O],gt[$],gt[at],gt[It]),S=O,y=$,B=at,I=It),(wt.equals(E)===!1||C!==R)&&(i.blendColor(wt.r,wt.g,wt.b,C),E.copy(wt),R=C),m=P,_=!1}function Ot(P,Y){P.side===Be?pt(i.CULL_FACE):st(i.CULL_FACE);let O=P.side===je;Y&&(O=!O),Tt(O),P.blending===as&&P.transparent===!1?H(di):H(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let $=P.stencilWrite;a.setTest($),$&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),nt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function vt(P){P!==Ef?(st(i.CULL_FACE),P!==b&&(P===uc?i.cullFace(i.BACK):P===wf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),b=P}function Nt(P){P!==w&&(D&&i.lineWidth(P),w=P)}function nt(P,Y,O){P?(st(i.POLYGON_OFFSET_FILL),(T!==Y||z!==O)&&(i.polygonOffset(Y,O),T=Y,z=O)):pt(i.POLYGON_OFFSET_FILL)}function zt(P){P?st(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function N(P){P===void 0&&(P=i.TEXTURE0+W-1),it!==P&&(i.activeTexture(P),it=P)}function L(P,Y,O){O===void 0&&(it===null?O=i.TEXTURE0+W-1:O=it);let $=xt[O];$===void 0&&($={type:void 0,texture:void 0},xt[O]=$),($.type!==P||$.texture!==Y)&&(it!==O&&(i.activeTexture(O),it=O),i.bindTexture(P,Y||ot[P]),$.type=P,$.texture=Y)}function ut(){let P=xt[it];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(P){J.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function Vt(P){G.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),G.copy(P))}function re(P,Y){let O=c.get(Y);O===void 0&&(O=new WeakMap,c.set(Y,O));let $=O.get(P);$===void 0&&($=i.getUniformBlockIndex(Y,P.name),O.set(P,$))}function Yt(P,Y){let $=c.get(Y).get(P);l.get(Y)!==$&&(i.uniformBlockBinding(Y,$,P.__bindingPointIndex),l.set(Y,$))}function A(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,xt={},p={},d=new WeakMap,f=[],g=null,v=!1,m=null,u=null,S=null,y=null,M=null,B=null,I=null,E=new $t(0,0,0),R=0,_=!1,x=null,b=null,w=null,T=null,z=null,J.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:pt,bindFramebuffer:et,drawBuffers:rt,useProgram:mt,setBlending:H,setMaterial:Ot,setFlipSided:Tt,setCullFace:vt,setLineWidth:Nt,setPolygonOffset:nt,setScissorTest:zt,activeTexture:N,bindTexture:L,unbindTexture:ut,compressedTexImage2D:Rt,compressedTexImage3D:Dt,texImage2D:Ct,texImage3D:kt,updateUBOMapping:re,uniformBlockBinding:Yt,texStorage2D:St,texStorage3D:At,texSubImage2D:tt,texSubImage3D:ct,compressedTexSubImage2D:lt,compressedTexSubImage3D:_t,scissor:Gt,viewport:Vt,reset:A}}function fh(i,t,e,n){let s=dg(n);switch(e){case Lh:return i*t;case Uh:return i*t;case Nh:return i*t*2;case Zl:return i*t/s.components*s.byteLength;case Jl:return i*t/s.components*s.byteLength;case Fh:return i*t*2/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case Dh:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case Vr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case za:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zh:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Qn:case Ch:return{byteLength:1,components:1};case Ws:case Ih:case sr:return{byteLength:2,components:1};case Yl:case $l:return{byteLength:2,components:4};case Di:case ql:case On:return{byteLength:4,components:1};case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,p,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,L){return f?new OffscreenCanvas(N,L):Zr("canvas")}function v(N,L,ut){let Rt=1,Dt=zt(N);if((Dt.width>ut||Dt.height>ut)&&(Rt=ut/Math.max(Dt.width,Dt.height)),Rt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let tt=Math.floor(Rt*Dt.width),ct=Math.floor(Rt*Dt.height);p===void 0&&(p=g(tt,ct));let lt=L?g(tt,ct):p;return lt.width=tt,lt.height=ct,lt.getContext("2d").drawImage(N,0,0,tt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Dt.width+"x"+Dt.height+") to ("+tt+"x"+ct+")."),lt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Dt.width+"x"+Dt.height+")."),N;return N}function m(N){return N.generateMipmaps}function u(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(N,L,ut,Rt,Dt=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let tt=L;if(L===i.RED&&(ut===i.FLOAT&&(tt=i.R32F),ut===i.HALF_FLOAT&&(tt=i.R16F),ut===i.UNSIGNED_BYTE&&(tt=i.R8)),L===i.RED_INTEGER&&(ut===i.UNSIGNED_BYTE&&(tt=i.R8UI),ut===i.UNSIGNED_SHORT&&(tt=i.R16UI),ut===i.UNSIGNED_INT&&(tt=i.R32UI),ut===i.BYTE&&(tt=i.R8I),ut===i.SHORT&&(tt=i.R16I),ut===i.INT&&(tt=i.R32I)),L===i.RG&&(ut===i.FLOAT&&(tt=i.RG32F),ut===i.HALF_FLOAT&&(tt=i.RG16F),ut===i.UNSIGNED_BYTE&&(tt=i.RG8)),L===i.RG_INTEGER&&(ut===i.UNSIGNED_BYTE&&(tt=i.RG8UI),ut===i.UNSIGNED_SHORT&&(tt=i.RG16UI),ut===i.UNSIGNED_INT&&(tt=i.RG32UI),ut===i.BYTE&&(tt=i.RG8I),ut===i.SHORT&&(tt=i.RG16I),ut===i.INT&&(tt=i.RG32I)),L===i.RGB_INTEGER&&(ut===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),ut===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),ut===i.UNSIGNED_INT&&(tt=i.RGB32UI),ut===i.BYTE&&(tt=i.RGB8I),ut===i.SHORT&&(tt=i.RGB16I),ut===i.INT&&(tt=i.RGB32I)),L===i.RGBA_INTEGER&&(ut===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),ut===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),ut===i.UNSIGNED_INT&&(tt=i.RGBA32UI),ut===i.BYTE&&(tt=i.RGBA8I),ut===i.SHORT&&(tt=i.RGBA16I),ut===i.INT&&(tt=i.RGBA32I)),L===i.RGB&&ut===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),L===i.RGBA){let ct=Dt?Po:ge.getTransfer(Rt);ut===i.FLOAT&&(tt=i.RGBA32F),ut===i.HALF_FLOAT&&(tt=i.RGBA16F),ut===i.UNSIGNED_BYTE&&(tt=ct===Se?i.SRGB8_ALPHA8:i.RGBA8),ut===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),ut===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(N,L){let ut;return N?L===null||L===Di||L===ps?ut=i.DEPTH24_STENCIL8:L===On?ut=i.DEPTH32F_STENCIL8:L===Ws&&(ut=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Di||L===ps?ut=i.DEPTH_COMPONENT24:L===On?ut=i.DEPTH_COMPONENT32F:L===Ws&&(ut=i.DEPTH_COMPONENT16),ut}function B(N,L){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==ln&&N.minFilter!==zn?Math.log2(Math.max(L.width,L.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?L.mipmaps.length:1}function I(N){let L=N.target;L.removeEventListener("dispose",I),R(L),L.isVideoTexture&&h.delete(L)}function E(N){let L=N.target;L.removeEventListener("dispose",E),x(L)}function R(N){let L=n.get(N);if(L.__webglInit===void 0)return;let ut=N.source,Rt=d.get(ut);if(Rt){let Dt=Rt[L.__cacheKey];Dt.usedTimes--,Dt.usedTimes===0&&_(N),Object.keys(Rt).length===0&&d.delete(ut)}n.remove(N)}function _(N){let L=n.get(N);i.deleteTexture(L.__webglTexture);let ut=N.source,Rt=d.get(ut);delete Rt[L.__cacheKey],o.memory.textures--}function x(N){let L=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(L.__webglFramebuffer[Rt]))for(let Dt=0;Dt<L.__webglFramebuffer[Rt].length;Dt++)i.deleteFramebuffer(L.__webglFramebuffer[Rt][Dt]);else i.deleteFramebuffer(L.__webglFramebuffer[Rt]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[Rt])}else{if(Array.isArray(L.__webglFramebuffer))for(let Rt=0;Rt<L.__webglFramebuffer.length;Rt++)i.deleteFramebuffer(L.__webglFramebuffer[Rt]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let Rt=0;Rt<L.__webglColorRenderbuffer.length;Rt++)L.__webglColorRenderbuffer[Rt]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[Rt]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let ut=N.textures;for(let Rt=0,Dt=ut.length;Rt<Dt;Rt++){let tt=n.get(ut[Rt]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(ut[Rt])}n.remove(N)}let b=0;function w(){b=0}function T(){let N=b;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),b+=1,N}function z(N){let L=[];return L.push(N.wrapS),L.push(N.wrapT),L.push(N.wrapR||0),L.push(N.magFilter),L.push(N.minFilter),L.push(N.anisotropy),L.push(N.internalFormat),L.push(N.format),L.push(N.type),L.push(N.generateMipmaps),L.push(N.premultiplyAlpha),L.push(N.flipY),L.push(N.unpackAlignment),L.push(N.colorSpace),L.join()}function W(N,L){let ut=n.get(N);if(N.isVideoTexture&&Nt(N),N.isRenderTargetTexture===!1&&N.version>0&&ut.__version!==N.version){let Rt=N.image;if(Rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(ut,N,L);return}}e.bindTexture(i.TEXTURE_2D,ut.__webglTexture,i.TEXTURE0+L)}function D(N,L){let ut=n.get(N);if(N.version>0&&ut.__version!==N.version){G(ut,N,L);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ut.__webglTexture,i.TEXTURE0+L)}function q(N,L){let ut=n.get(N);if(N.version>0&&ut.__version!==N.version){G(ut,N,L);return}e.bindTexture(i.TEXTURE_3D,ut.__webglTexture,i.TEXTURE0+L)}function Z(N,L){let ut=n.get(N);if(N.version>0&&ut.__version!==N.version){j(ut,N,L);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture,i.TEXTURE0+L)}let it={[Li]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},xt={[ln]:i.NEAREST,[Qf]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},U={[iu]:i.NEVER,[cu]:i.ALWAYS,[su]:i.LESS,[Bh]:i.LEQUAL,[ru]:i.EQUAL,[lu]:i.GEQUAL,[ou]:i.GREATER,[au]:i.NOTEQUAL};function Lt(N,L){if(L.type===On&&t.has("OES_texture_float_linear")===!1&&(L.magFilter===zn||L.magFilter===Vo||L.magFilter===fr||L.magFilter===Pi||L.minFilter===zn||L.minFilter===Vo||L.minFilter===fr||L.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,it[L.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,it[L.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,it[L.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,xt[L.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,xt[L.minFilter]),L.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,U[L.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===ln||L.minFilter!==fr&&L.minFilter!==Pi||L.type===On&&t.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){let ut=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function J(N,L){let ut=!1;N.__webglInit===void 0&&(N.__webglInit=!0,L.addEventListener("dispose",I));let Rt=L.source,Dt=d.get(Rt);Dt===void 0&&(Dt={},d.set(Rt,Dt));let tt=z(L);if(tt!==N.__cacheKey){Dt[tt]===void 0&&(Dt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ut=!0),Dt[tt].usedTimes++;let ct=Dt[N.__cacheKey];ct!==void 0&&(Dt[N.__cacheKey].usedTimes--,ct.usedTimes===0&&_(L)),N.__cacheKey=tt,N.__webglTexture=Dt[tt].texture}return ut}function G(N,L,ut){let Rt=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(Rt=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(Rt=i.TEXTURE_3D);let Dt=J(N,L),tt=L.source;e.bindTexture(Rt,N.__webglTexture,i.TEXTURE0+ut);let ct=n.get(tt);if(tt.version!==ct.__version||Dt===!0){e.activeTexture(i.TEXTURE0+ut);let lt=ge.getPrimaries(ge.workingColorSpace),_t=L.colorSpace===fi?null:ge.getPrimaries(L.colorSpace),St=L.colorSpace===fi||lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let At=v(L.image,!1,s.maxTextureSize);At=nt(L,At);let Ct=r.convert(L.format,L.colorSpace),kt=r.convert(L.type),Gt=y(L.internalFormat,Ct,kt,L.colorSpace,L.isVideoTexture);Lt(Rt,L);let Vt,re=L.mipmaps,Yt=L.isVideoTexture!==!0,A=ct.__version===void 0||Dt===!0,P=tt.dataReady,Y=B(L,At);if(L.isDepthTexture)Gt=M(L.format===ms,L.type),A&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Gt,At.width,At.height):e.texImage2D(i.TEXTURE_2D,0,Gt,At.width,At.height,0,Ct,kt,null));else if(L.isDataTexture)if(re.length>0){Yt&&A&&e.texStorage2D(i.TEXTURE_2D,Y,Gt,re[0].width,re[0].height);for(let O=0,$=re.length;O<$;O++)Vt=re[O],Yt?P&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Vt.width,Vt.height,Ct,kt,Vt.data):e.texImage2D(i.TEXTURE_2D,O,Gt,Vt.width,Vt.height,0,Ct,kt,Vt.data);L.generateMipmaps=!1}else Yt?(A&&e.texStorage2D(i.TEXTURE_2D,Y,Gt,At.width,At.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At.width,At.height,Ct,kt,At.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,At.width,At.height,0,Ct,kt,At.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){Yt&&A&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Gt,re[0].width,re[0].height,At.depth);for(let O=0,$=re.length;O<$;O++)if(Vt=re[O],L.format!==gn)if(Ct!==null)if(Yt){if(P)if(L.layerUpdates.size>0){let X=fh(Vt.width,Vt.height,L.format,L.type);for(let at of L.layerUpdates){let It=Vt.data.subarray(at*X/Vt.data.BYTES_PER_ELEMENT,(at+1)*X/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,at,Vt.width,Vt.height,1,Ct,It)}L.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Vt.width,Vt.height,At.depth,Ct,Vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,Gt,Vt.width,Vt.height,At.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Vt.width,Vt.height,At.depth,Ct,kt,Vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,Gt,Vt.width,Vt.height,At.depth,0,Ct,kt,Vt.data)}else{Yt&&A&&e.texStorage2D(i.TEXTURE_2D,Y,Gt,re[0].width,re[0].height);for(let O=0,$=re.length;O<$;O++)Vt=re[O],L.format!==gn?Ct!==null?Yt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,Vt.width,Vt.height,Ct,Vt.data):e.compressedTexImage2D(i.TEXTURE_2D,O,Gt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?P&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Vt.width,Vt.height,Ct,kt,Vt.data):e.texImage2D(i.TEXTURE_2D,O,Gt,Vt.width,Vt.height,0,Ct,kt,Vt.data)}else if(L.isDataArrayTexture)if(Yt){if(A&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Gt,At.width,At.height,At.depth),P)if(L.layerUpdates.size>0){let O=fh(At.width,At.height,L.format,L.type);for(let $ of L.layerUpdates){let X=At.data.subarray($*O/At.data.BYTES_PER_ELEMENT,($+1)*O/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,At.width,At.height,1,Ct,kt,X)}L.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ct,kt,At.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,At.width,At.height,At.depth,0,Ct,kt,At.data);else if(L.isData3DTexture)Yt?(A&&e.texStorage3D(i.TEXTURE_3D,Y,Gt,At.width,At.height,At.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ct,kt,At.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,At.width,At.height,At.depth,0,Ct,kt,At.data);else if(L.isFramebufferTexture){if(A)if(Yt)e.texStorage2D(i.TEXTURE_2D,Y,Gt,At.width,At.height);else{let O=At.width,$=At.height;for(let X=0;X<Y;X++)e.texImage2D(i.TEXTURE_2D,X,Gt,O,$,0,Ct,kt,null),O>>=1,$>>=1}}else if(re.length>0){if(Yt&&A){let O=zt(re[0]);e.texStorage2D(i.TEXTURE_2D,Y,Gt,O.width,O.height)}for(let O=0,$=re.length;O<$;O++)Vt=re[O],Yt?P&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Ct,kt,Vt):e.texImage2D(i.TEXTURE_2D,O,Gt,Ct,kt,Vt);L.generateMipmaps=!1}else if(Yt){if(A){let O=zt(At);e.texStorage2D(i.TEXTURE_2D,Y,Gt,O.width,O.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,kt,At)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Ct,kt,At);m(L)&&u(Rt),ct.__version=tt.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function j(N,L,ut){if(L.image.length!==6)return;let Rt=J(N,L),Dt=L.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+ut);let tt=n.get(Dt);if(Dt.version!==tt.__version||Rt===!0){e.activeTexture(i.TEXTURE0+ut);let ct=ge.getPrimaries(ge.workingColorSpace),lt=L.colorSpace===fi?null:ge.getPrimaries(L.colorSpace),_t=L.colorSpace===fi||ct===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let St=L.isCompressedTexture||L.image[0].isCompressedTexture,At=L.image[0]&&L.image[0].isDataTexture,Ct=[];for(let $=0;$<6;$++)!St&&!At?Ct[$]=v(L.image[$],!0,s.maxCubemapSize):Ct[$]=At?L.image[$].image:L.image[$],Ct[$]=nt(L,Ct[$]);let kt=Ct[0],Gt=r.convert(L.format,L.colorSpace),Vt=r.convert(L.type),re=y(L.internalFormat,Gt,Vt,L.colorSpace),Yt=L.isVideoTexture!==!0,A=tt.__version===void 0||Rt===!0,P=Dt.dataReady,Y=B(L,kt);Lt(i.TEXTURE_CUBE_MAP,L);let O;if(St){Yt&&A&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Y,re,kt.width,kt.height);for(let $=0;$<6;$++){O=Ct[$].mipmaps;for(let X=0;X<O.length;X++){let at=O[X];L.format!==gn?Gt!==null?Yt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X,0,0,at.width,at.height,Gt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X,re,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X,0,0,at.width,at.height,Gt,Vt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X,re,at.width,at.height,0,Gt,Vt,at.data)}}}else{if(O=L.mipmaps,Yt&&A){O.length>0&&Y++;let $=zt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Y,re,$.width,$.height)}for(let $=0;$<6;$++)if(At){Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ct[$].width,Ct[$].height,Gt,Vt,Ct[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,re,Ct[$].width,Ct[$].height,0,Gt,Vt,Ct[$].data);for(let X=0;X<O.length;X++){let It=O[X].image[$].image;Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X+1,0,0,It.width,It.height,Gt,Vt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X+1,re,It.width,It.height,0,Gt,Vt,It.data)}}else{Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Gt,Vt,Ct[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,re,Gt,Vt,Ct[$]);for(let X=0;X<O.length;X++){let at=O[X];Yt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X+1,0,0,Gt,Vt,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,X+1,re,Gt,Vt,at.image[$])}}}m(L)&&u(i.TEXTURE_CUBE_MAP),tt.__version=Dt.version,L.onUpdate&&L.onUpdate(L)}N.__version=L.version}function ot(N,L,ut,Rt,Dt,tt){let ct=r.convert(ut.format,ut.colorSpace),lt=r.convert(ut.type),_t=y(ut.internalFormat,ct,lt,ut.colorSpace),St=n.get(L),At=n.get(ut);if(At.__renderTarget=L,!St.__hasExternalTextures){let Ct=Math.max(1,L.width>>tt),kt=Math.max(1,L.height>>tt);Dt===i.TEXTURE_3D||Dt===i.TEXTURE_2D_ARRAY?e.texImage3D(Dt,tt,_t,Ct,kt,L.depth,0,ct,lt,null):e.texImage2D(Dt,tt,_t,Ct,kt,0,ct,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),vt(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,Dt,At.__webglTexture,0,Tt(L)):(Dt===i.TEXTURE_2D||Dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Rt,Dt,At.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(N,L,ut){if(i.bindRenderbuffer(i.RENDERBUFFER,N),L.depthBuffer){let Rt=L.depthTexture,Dt=Rt&&Rt.isDepthTexture?Rt.type:null,tt=M(L.stencilBuffer,Dt),ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Tt(L);vt(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,tt,L.width,L.height):ut?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,tt,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,N)}else{let Rt=L.textures;for(let Dt=0;Dt<Rt.length;Dt++){let tt=Rt[Dt],ct=r.convert(tt.format,tt.colorSpace),lt=r.convert(tt.type),_t=y(tt.internalFormat,ct,lt,tt.colorSpace),St=Tt(L);ut&&vt(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,_t,L.width,L.height):vt(L)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,_t,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,_t,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(N,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Rt=n.get(L.depthTexture);Rt.__renderTarget=L,(!Rt.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),W(L.depthTexture,0);let Dt=Rt.__webglTexture,tt=Tt(L);if(L.depthTexture.format===ls)vt(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Dt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Dt,0);else if(L.depthTexture.format===ms)vt(L)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Dt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Dt,0);else throw new Error("Unknown depthTexture format")}function et(N){let L=n.get(N),ut=N.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==N.depthTexture){let Rt=N.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),Rt){let Dt=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,Rt.removeEventListener("dispose",Dt)};Rt.addEventListener("dispose",Dt),L.__depthDisposeCallback=Dt}L.__boundDepthTexture=Rt}if(N.depthTexture&&!L.__autoAllocateDepthBuffer){if(ut)throw new Error("target.depthTexture not supported in Cube render targets");pt(L.__webglFramebuffer,N)}else if(ut){L.__webglDepthbuffer=[];for(let Rt=0;Rt<6;Rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[Rt]),L.__webglDepthbuffer[Rt]===void 0)L.__webglDepthbuffer[Rt]=i.createRenderbuffer(),st(L.__webglDepthbuffer[Rt],N,!1);else{let Dt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=L.__webglDepthbuffer[Rt];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),st(L.__webglDepthbuffer,N,!1);else{let Rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,Dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(N,L,ut){let Rt=n.get(N);L!==void 0&&ot(Rt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ut!==void 0&&et(N)}function mt(N){let L=N.texture,ut=n.get(N),Rt=n.get(L);N.addEventListener("dispose",E);let Dt=N.textures,tt=N.isWebGLCubeRenderTarget===!0,ct=Dt.length>1;if(ct||(Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture()),Rt.__version=L.version,o.memory.textures++),tt){ut.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(L.mipmaps&&L.mipmaps.length>0){ut.__webglFramebuffer[lt]=[];for(let _t=0;_t<L.mipmaps.length;_t++)ut.__webglFramebuffer[lt][_t]=i.createFramebuffer()}else ut.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){ut.__webglFramebuffer=[];for(let lt=0;lt<L.mipmaps.length;lt++)ut.__webglFramebuffer[lt]=i.createFramebuffer()}else ut.__webglFramebuffer=i.createFramebuffer();if(ct)for(let lt=0,_t=Dt.length;lt<_t;lt++){let St=n.get(Dt[lt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&vt(N)===!1){ut.__webglMultisampledFramebuffer=i.createFramebuffer(),ut.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer);for(let lt=0;lt<Dt.length;lt++){let _t=Dt[lt];ut.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let St=r.convert(_t.format,_t.colorSpace),At=r.convert(_t.type),Ct=y(_t.internalFormat,St,At,_t.colorSpace,N.isXRRenderTarget===!0),kt=Tt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Ct,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(ut.__webglDepthRenderbuffer=i.createRenderbuffer(),st(ut.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Rt.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,L);for(let lt=0;lt<6;lt++)if(L.mipmaps&&L.mipmaps.length>0)for(let _t=0;_t<L.mipmaps.length;_t++)ot(ut.__webglFramebuffer[lt][_t],N,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t);else ot(ut.__webglFramebuffer[lt],N,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(L)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let lt=0,_t=Dt.length;lt<_t;lt++){let St=Dt[lt],At=n.get(St);e.bindTexture(i.TEXTURE_2D,At.__webglTexture),Lt(i.TEXTURE_2D,St),ot(ut.__webglFramebuffer,N,St,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(St)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(lt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Rt.__webglTexture),Lt(lt,L),L.mipmaps&&L.mipmaps.length>0)for(let _t=0;_t<L.mipmaps.length;_t++)ot(ut.__webglFramebuffer[_t],N,L,i.COLOR_ATTACHMENT0,lt,_t);else ot(ut.__webglFramebuffer,N,L,i.COLOR_ATTACHMENT0,lt,0);m(L)&&u(lt),e.unbindTexture()}N.depthBuffer&&et(N)}function Q(N){let L=N.textures;for(let ut=0,Rt=L.length;ut<Rt;ut++){let Dt=L[ut];if(m(Dt)){let tt=S(N),ct=n.get(Dt).__webglTexture;e.bindTexture(tt,ct),u(tt),e.unbindTexture()}}}let gt=[],H=[];function Ot(N){if(N.samples>0){if(vt(N)===!1){let L=N.textures,ut=N.width,Rt=N.height,Dt=i.COLOR_BUFFER_BIT,tt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(N),lt=L.length>1;if(lt)for(let _t=0;_t<L.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let _t=0;_t<L.length;_t++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Dt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Dt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[_t]);let St=n.get(L[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,ut,Rt,0,0,ut,Rt,Dt,i.NEAREST),l===!0&&(gt.length=0,H.length=0,gt.push(i.COLOR_ATTACHMENT0+_t),N.depthBuffer&&N.resolveDepthBuffer===!1&&(gt.push(tt),H.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let _t=0;_t<L.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,ct.__webglColorRenderbuffer[_t]);let St=n.get(L[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let L=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function Tt(N){return Math.min(s.maxSamples,N.samples)}function vt(N){let L=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Nt(N){let L=o.render.frame;h.get(N)!==L&&(h.set(N,L),N.update())}function nt(N,L){let ut=N.colorSpace,Rt=N.format,Dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ut!==vs&&ut!==fi&&(ge.getTransfer(ut)===Se?(Rt!==gn||Dt!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ut)),L}function zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=w,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=vt}function mg(i,t){function e(n,s=fi){let r,o=ge.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Ih)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===ql)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===sr)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Dh)return i.RGB;if(n===gn)return i.RGBA;if(n===Uh)return i.LUMINANCE;if(n===Nh)return i.LUMINANCE_ALPHA;if(n===ls)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===Jl)return i.RED_INTEGER;if(n===Fh)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Vr||n===Gr||n===Wr||n===Xr)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ml=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:xg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,f=null,g=null,v=new bl,m=e.getContextAttributes(),u=null,S=null,y=[],M=[],B=new Ft,I=null,E=new an;E.viewport=new ze;let R=new an;R.viewport=new ze;let _=[E,R],x=new Ml,b=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=y[G];return j===void 0&&(j=new Hs,y[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=y[G];return j===void 0&&(j=new Hs,y[G]=j),j.getGripSpace()},this.getHand=function(G){let j=y[G];return j===void 0&&(j=new Hs,y[G]=j),j.getHandSpace()};function T(G){let j=M.indexOf(G.inputSource);if(j===-1)return;let ot=y[j];ot!==void 0&&(ot.update(G.inputSource,G.frame,c||o),ot.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let G=0;G<y.length;G++){let j=M[G];j!==null&&(M[G]=null,y[G].disconnect(j))}b=null,w=null,v.reset(),t.setRenderTarget(u),f=null,d=null,p=null,s=null,S=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ti(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ot=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?ms:ls,ot=m.stencil?ps:Di);let pt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};p=new XRWebGLBinding(s,e),d=p.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new ti(d.textureWidth,d.textureHeight,{format:gn,type:Qn,depthTexture:new oo(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(G){for(let j=0;j<G.removed.length;j++){let ot=G.removed[j],st=M.indexOf(ot);st>=0&&(M[st]=null,y[st].disconnect(ot))}for(let j=0;j<G.added.length;j++){let ot=G.added[j],st=M.indexOf(ot);if(st===-1){for(let et=0;et<y.length;et++)if(et>=M.length){M.push(ot),st=et;break}else if(M[et]===null){M[et]=ot,st=et;break}if(st===-1)break}let pt=y[st];pt&&pt.connect(ot)}}let D=new k,q=new k;function Z(G,j,ot){D.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(ot.matrixWorld);let st=D.distanceTo(q),pt=j.projectionMatrix.elements,et=ot.projectionMatrix.elements,rt=pt[14]/(pt[10]-1),mt=pt[14]/(pt[10]+1),Q=(pt[9]+1)/pt[5],gt=(pt[9]-1)/pt[5],H=(pt[8]-1)/pt[0],Ot=(et[8]+1)/et[0],Tt=rt*H,vt=rt*Ot,Nt=st/(-H+Ot),nt=Nt*-H;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(nt),G.translateZ(Nt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),pt[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let zt=rt+Nt,N=mt+Nt,L=Tt-nt,ut=vt+(st-nt),Rt=Q*mt/N*zt,Dt=gt*mt/N*zt;G.projectionMatrix.makePerspective(L,ut,Rt,Dt,zt,N),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function it(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let j=G.near,ot=G.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(ot=v.depthFar)),x.near=R.near=E.near=j,x.far=R.far=E.far=ot,(b!==x.near||w!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,w=x.far),E.layers.mask=G.layers.mask|2,R.layers.mask=G.layers.mask|4,x.layers.mask=E.layers.mask|R.layers.mask;let st=G.parent,pt=x.cameras;it(x,st);for(let et=0;et<pt.length;et++)it(pt[et],st);pt.length===2?Z(x,E,R):x.projectionMatrix.copy(E.projectionMatrix),xt(G,x,st)};function xt(G,j,ot){ot===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(ot.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Xs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let U=null;function Lt(G,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let st=!1;ot.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let et=0;et<ot.length;et++){let rt=ot[et],mt=null;if(f!==null)mt=f.getViewport(rt);else{let gt=p.getViewSubImage(d,rt);mt=gt.viewport,et===0&&(t.setRenderTargetTextures(S,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(S))}let Q=_[et];Q===void 0&&(Q=new an,Q.layers.enable(et),Q.viewport=new ze,_[et]=Q),Q.matrix.fromArray(rt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(rt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(mt.x,mt.y,mt.width,mt.height),et===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(Q)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let et=p.getDepthInformation(ot[0]);et&&et.isValid&&et.texture&&v.init(t,et,s.renderState)}}for(let ot=0;ot<y.length;ot++){let st=M[ot],pt=y[ot];st!==null&&pt!==void 0&&pt.update(st,j,c||o)}U&&U(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let J=new Wh;J.setAnimationLoop(Lt),this.setAnimationLoop=function(G){U=G},this.dispose=function(){}}},Ti=new Cn,_g=new ye;function vg(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Gh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,S,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&f(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,S,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===je&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===je&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let S=t.get(u),y=S.envMap,M=S.envMapRotation;y&&(m.envMap.value=y,Ti.copy(M),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Ti)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,S,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=y*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===je&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let S=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let M=y.program;n.uniformBlockBinding(S,M)}function c(S,y){let M=s[S.id];M===void 0&&(g(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",m));let B=y.program;n.updateUBOMapping(S,B);let I=t.render.frame;r[S.id]!==I&&(d(S),r[S.id]=I)}function h(S){let y=p();S.__bindingPointIndex=y;let M=i.createBuffer(),B=S.__size,I=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,B,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function p(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=s[S.id],M=S.uniforms,B=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,E=M.length;I<E;I++){let R=Array.isArray(M[I])?M[I]:[M[I]];for(let _=0,x=R.length;_<x;_++){let b=R[_];if(f(b,I,_,B)===!0){let w=b.__offset,T=Array.isArray(b.value)?b.value:[b.value],z=0;for(let W=0;W<T.length;W++){let D=T[W],q=v(D);typeof D=="number"||typeof D=="boolean"?(b.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,w+z,b.__data)):D.isMatrix3?(b.__data[0]=D.elements[0],b.__data[1]=D.elements[1],b.__data[2]=D.elements[2],b.__data[3]=0,b.__data[4]=D.elements[3],b.__data[5]=D.elements[4],b.__data[6]=D.elements[5],b.__data[7]=0,b.__data[8]=D.elements[6],b.__data[9]=D.elements[7],b.__data[10]=D.elements[8],b.__data[11]=0):(D.toArray(b.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,M,B){let I=S.value,E=y+"_"+M;if(B[E]===void 0)return typeof I=="number"||typeof I=="boolean"?B[E]=I:B[E]=I.clone(),!0;{let R=B[E];if(typeof I=="number"||typeof I=="boolean"){if(R!==I)return B[E]=I,!0}else if(R.equals(I)===!1)return R.copy(I),!0}return!1}function g(S){let y=S.uniforms,M=0,B=16;for(let E=0,R=y.length;E<R;E++){let _=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,b=_.length;x<b;x++){let w=_[x],T=Array.isArray(w.value)?w.value:[w.value];for(let z=0,W=T.length;z<W;z++){let D=T[z],q=v(D),Z=M%B,it=Z%q.boundary,xt=Z+it;M+=it,xt!==0&&B-xt<q.storage&&(M+=B-xt),w.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,M+=q.storage}}}let I=M%B;return I>0&&(M+=B-I),S.__size=M,S.__cache={},this}function v(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ao=class{constructor(t={}){let{canvas:e=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,u=null,S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Bn,this.toneMappingExposure=1;let M=this,B=!1,I=0,E=0,R=null,_=-1,x=null,b=new ze,w=new ze,T=null,z=new $t(0),W=0,D=e.width,q=e.height,Z=1,it=null,xt=null,U=new ze(0,0,D,q),Lt=new ze(0,0,D,q),J=!1,G=new qs,j=!1,ot=!1,st=new ye,pt=new ye,et=new k,rt=new ze,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function gt(){return R===null?Z:1}let H=n;function Ot(F,ht){return e.getContext(F,ht)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",at,!1),H===null){let ht="webgl2";if(H=Ot(ht,F),H===null)throw Ot(ht)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let Tt,vt,Nt,nt,zt,N,L,ut,Rt,Dt,tt,ct,lt,_t,St,At,Ct,kt,Gt,Vt,re,Yt,A,P;function Y(){Tt=new zm(H),Tt.init(),Yt=new mg(H,Tt),vt=new Pm(H,Tt,t,Yt),Nt=new ug(H,Tt),vt.reverseDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),nt=new km(H),zt=new Q0,N=new pg(H,Tt,Nt,zt,vt,Yt,nt),L=new Dm(M),ut=new Fm(M),Rt=new Yu(H),A=new Cm(H,Rt),Dt=new Om(H,Rt,nt,A),tt=new Vm(H,Dt,Rt,nt),Gt=new Hm(H,vt,N),At=new Lm(zt),ct=new j0(M,L,ut,Tt,vt,A,At),lt=new vg(M,zt),_t=new eg,St=new ag(Tt),kt=new Rm(M,L,ut,Nt,tt,f,l),Ct=new hg(M,tt,vt),P=new Mg(H,nt,vt,Nt),Vt=new Im(H,Tt,nt),re=new Bm(H,Tt,nt),nt.programs=ct.programs,M.capabilities=vt,M.extensions=Tt,M.properties=zt,M.renderLists=_t,M.shadowMap=Ct,M.state=Nt,M.info=nt}Y();let O=new Sl(M,H);this.xr=O,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let F=Tt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=Tt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(F){F!==void 0&&(Z=F,this.setSize(D,q,!1))},this.getSize=function(F){return F.set(D,q)},this.setSize=function(F,ht,Mt=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=F,q=ht,e.width=Math.floor(F*Z),e.height=Math.floor(ht*Z),Mt===!0&&(e.style.width=F+"px",e.style.height=ht+"px"),this.setViewport(0,0,F,ht)},this.getDrawingBufferSize=function(F){return F.set(D*Z,q*Z).floor()},this.setDrawingBufferSize=function(F,ht,Mt){D=F,q=ht,Z=Mt,e.width=Math.floor(F*Mt),e.height=Math.floor(ht*Mt),this.setViewport(0,0,F,ht)},this.getCurrentViewport=function(F){return F.copy(b)},this.getViewport=function(F){return F.copy(U)},this.setViewport=function(F,ht,Mt,bt){F.isVector4?U.set(F.x,F.y,F.z,F.w):U.set(F,ht,Mt,bt),Nt.viewport(b.copy(U).multiplyScalar(Z).round())},this.getScissor=function(F){return F.copy(Lt)},this.setScissor=function(F,ht,Mt,bt){F.isVector4?Lt.set(F.x,F.y,F.z,F.w):Lt.set(F,ht,Mt,bt),Nt.scissor(w.copy(Lt).multiplyScalar(Z).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(F){Nt.setScissorTest(J=F)},this.setOpaqueSort=function(F){it=F},this.setTransparentSort=function(F){xt=F},this.getClearColor=function(F){return F.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(F=!0,ht=!0,Mt=!0){let bt=0;if(F){let ft=!1;if(R!==null){let Bt=R.texture.format;ft=Bt===jl||Bt===Kl||Bt===Jl}if(ft){let Bt=R.texture.type,Xt=Bt===Qn||Bt===Di||Bt===Ws||Bt===ps||Bt===Yl||Bt===$l,Jt=kt.getClearColor(),Kt=kt.getClearAlpha(),le=Jt.r,fe=Jt.g,jt=Jt.b;Xt?(g[0]=le,g[1]=fe,g[2]=jt,g[3]=Kt,H.clearBufferuiv(H.COLOR,0,g)):(v[0]=le,v[1]=fe,v[2]=jt,v[3]=Kt,H.clearBufferiv(H.COLOR,0,v))}else bt|=H.COLOR_BUFFER_BIT}ht&&(bt|=H.DEPTH_BUFFER_BIT),Mt&&(bt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(bt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",at,!1),_t.dispose(),St.dispose(),zt.dispose(),L.dispose(),ut.dispose(),tt.dispose(),A.dispose(),P.dispose(),ct.dispose(),O.dispose(),O.removeEventListener("sessionstart",Pt),O.removeEventListener("sessionend",Ut),Et.stop()};function $(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let F=nt.autoReset,ht=Ct.enabled,Mt=Ct.autoUpdate,bt=Ct.needsUpdate,ft=Ct.type;Y(),nt.autoReset=F,Ct.enabled=ht,Ct.autoUpdate=Mt,Ct.needsUpdate=bt,Ct.type=ft}function at(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function It(F){let ht=F.target;ht.removeEventListener("dispose",It),wt(ht)}function wt(F){C(F),zt.remove(F)}function C(F){let ht=zt.get(F).programs;ht!==void 0&&(ht.forEach(function(Mt){ct.releaseProgram(Mt)}),F.isShaderMaterial&&ct.releaseShaderCache(F))}this.renderBufferDirect=function(F,ht,Mt,bt,ft,Bt){ht===null&&(ht=mt);let Xt=ft.isMesh&&ft.matrixWorld.determinant()<0,Jt=vi(F,ht,Mt,bt,ft);Nt.setMaterial(bt,Xt);let Kt=Mt.index,le=1;if(bt.wireframe===!0){if(Kt=Dt.getWireframeAttribute(Mt),Kt===void 0)return;le=2}let fe=Mt.drawRange,jt=Mt.attributes.position,xe=fe.start*le,Ae=(fe.start+fe.count)*le;Bt!==null&&(xe=Math.max(xe,Bt.start*le),Ae=Math.min(Ae,(Bt.start+Bt.count)*le)),Kt!==null?(xe=Math.max(xe,0),Ae=Math.min(Ae,Kt.count)):jt!=null&&(xe=Math.max(xe,0),Ae=Math.min(Ae,jt.count));let Re=Ae-xe;if(Re<0||Re===1/0)return;A.setup(ft,bt,Jt,Mt,Kt);let hn,ve=Vt;if(Kt!==null&&(hn=Rt.get(Kt),ve=re,ve.setIndex(hn)),ft.isMesh)bt.wireframe===!0?(Nt.setLineWidth(bt.wireframeLinewidth*gt()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if(ft.isLine){let Qt=bt.linewidth;Qt===void 0&&(Qt=1),Nt.setLineWidth(Qt*gt()),ft.isLineSegments?ve.setMode(H.LINES):ft.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else ft.isPoints?ve.setMode(H.POINTS):ft.isSprite&&ve.setMode(H.TRIANGLES);if(ft.isBatchedMesh)if(ft._multiDrawInstances!==null)ve.renderMultiDrawInstances(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount,ft._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))ve.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{let Qt=ft._multiDrawStarts,Gn=ft._multiDrawCounts,Me=ft._multiDrawCount,En=Kt?Rt.get(Kt).bytesPerElement:1,Bi=zt.get(bt).currentProgram.getUniforms();for(let dn=0;dn<Me;dn++)Bi.setValue(H,"_gl_DrawID",dn),ve.render(Qt[dn]/En,Gn[dn])}else if(ft.isInstancedMesh)ve.renderInstances(xe,Re,ft.count);else if(Mt.isInstancedBufferGeometry){let Qt=Mt._maxInstanceCount!==void 0?Mt._maxInstanceCount:1/0,Gn=Math.min(Mt.instanceCount,Qt);ve.renderInstances(xe,Re,Gn)}else ve.render(xe,Re)};function V(F,ht,Mt){F.transparent===!0&&F.side===Be&&F.forceSinglePass===!1?(F.side=je,F.needsUpdate=!0,pe(F,ht,Mt),F.side=mi,F.needsUpdate=!0,pe(F,ht,Mt),F.side=Be):pe(F,ht,Mt)}this.compile=function(F,ht,Mt=null){Mt===null&&(Mt=F),u=St.get(Mt),u.init(ht),y.push(u),Mt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ht.layers)&&(u.pushLight(ft),ft.castShadow&&u.pushShadow(ft))}),F!==Mt&&F.traverseVisible(function(ft){ft.isLight&&ft.layers.test(ht.layers)&&(u.pushLight(ft),ft.castShadow&&u.pushShadow(ft))}),u.setupLights();let bt=new Set;return F.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;let Bt=ft.material;if(Bt)if(Array.isArray(Bt))for(let Xt=0;Xt<Bt.length;Xt++){let Jt=Bt[Xt];V(Jt,Mt,ft),bt.add(Jt)}else V(Bt,Mt,ft),bt.add(Bt)}),y.pop(),u=null,bt},this.compileAsync=function(F,ht,Mt=null){let bt=this.compile(F,ht,Mt);return new Promise(ft=>{function Bt(){if(bt.forEach(function(Xt){zt.get(Xt).currentProgram.isReady()&&bt.delete(Xt)}),bt.size===0){ft(F);return}setTimeout(Bt,10)}Tt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let K=null;function yt(F){K&&K(F)}function Pt(){Et.stop()}function Ut(){Et.start()}let Et=new Wh;Et.setAnimationLoop(yt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(F){K=F,O.setAnimationLoop(F),F===null?Et.stop():Et.start()},O.addEventListener("sessionstart",Pt),O.addEventListener("sessionend",Ut),this.render=function(F,ht){if(ht!==void 0&&ht.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(ht),ht=O.getCamera()),F.isScene===!0&&F.onBeforeRender(M,F,ht,R),u=St.get(F,y.length),u.init(ht),y.push(u),pt.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),G.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,j=At.init(this.clippingPlanes,ot),m=_t.get(F,S.length),m.init(),S.push(m),O.enabled===!0&&O.isPresenting===!0){let Bt=M.xr.getDepthSensingMesh();Bt!==null&&Zt(Bt,ht,-1/0,M.sortObjects)}Zt(F,ht,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(it,xt),Q=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Q&&kt.addToRenderList(m,F),this.info.render.frame++,j===!0&&At.beginShadows();let Mt=u.state.shadowsArray;Ct.render(Mt,F,ht),j===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();let bt=m.opaque,ft=m.transmissive;if(u.setupLights(),ht.isArrayCamera){let Bt=ht.cameras;if(ft.length>0)for(let Xt=0,Jt=Bt.length;Xt<Jt;Xt++){let Kt=Bt[Xt];ie(bt,ft,F,Kt)}Q&&kt.render(F);for(let Xt=0,Jt=Bt.length;Xt<Jt;Xt++){let Kt=Bt[Xt];ee(m,F,Kt,Kt.viewport)}}else ft.length>0&&ie(bt,ft,F,ht),Q&&kt.render(F),ee(m,F,ht);R!==null&&(N.updateMultisampleRenderTarget(R),N.updateRenderTargetMipmap(R)),F.isScene===!0&&F.onAfterRender(M,F,ht),A.resetDefaultState(),_=-1,x=null,y.pop(),y.length>0?(u=y[y.length-1],j===!0&&At.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Zt(F,ht,Mt,bt){if(F.visible===!1)return;if(F.layers.test(ht.layers)){if(F.isGroup)Mt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ht);else if(F.isLight)u.pushLight(F),F.castShadow&&u.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||G.intersectsSprite(F)){bt&&rt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(pt);let Xt=tt.update(F),Jt=F.material;Jt.visible&&m.push(F,Xt,Jt,Mt,rt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||G.intersectsObject(F))){let Xt=tt.update(F),Jt=F.material;if(bt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),rt.copy(F.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),rt.copy(Xt.boundingSphere.center)),rt.applyMatrix4(F.matrixWorld).applyMatrix4(pt)),Array.isArray(Jt)){let Kt=Xt.groups;for(let le=0,fe=Kt.length;le<fe;le++){let jt=Kt[le],xe=Jt[jt.materialIndex];xe&&xe.visible&&m.push(F,Xt,xe,Mt,rt.z,jt)}}else Jt.visible&&m.push(F,Xt,Jt,Mt,rt.z,null)}}let Bt=F.children;for(let Xt=0,Jt=Bt.length;Xt<Jt;Xt++)Zt(Bt[Xt],ht,Mt,bt)}function ee(F,ht,Mt,bt){let ft=F.opaque,Bt=F.transmissive,Xt=F.transparent;u.setupLightsView(Mt),j===!0&&At.setGlobalState(M.clippingPlanes,Mt),bt&&Nt.viewport(b.copy(bt)),ft.length>0&&se(ft,ht,Mt),Bt.length>0&&se(Bt,ht,Mt),Xt.length>0&&se(Xt,ht,Mt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ie(F,ht,Mt,bt){if((Mt.isScene===!0?Mt.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[bt.id]===void 0&&(u.state.transmissionRenderTarget[bt.id]=new ti(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?sr:Qn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));let Bt=u.state.transmissionRenderTarget[bt.id],Xt=bt.viewport||b;Bt.setSize(Xt.z,Xt.w);let Jt=M.getRenderTarget();M.setRenderTarget(Bt),M.getClearColor(z),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Q&&kt.render(Mt);let Kt=M.toneMapping;M.toneMapping=Bn;let le=bt.viewport;if(bt.viewport!==void 0&&(bt.viewport=void 0),u.setupLightsView(bt),j===!0&&At.setGlobalState(M.clippingPlanes,bt),se(F,Mt,bt),N.updateMultisampleRenderTarget(Bt),N.updateRenderTargetMipmap(Bt),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let jt=0,xe=ht.length;jt<xe;jt++){let Ae=ht[jt],Re=Ae.object,hn=Ae.geometry,ve=Ae.material,Qt=Ae.group;if(ve.side===Be&&Re.layers.test(bt.layers)){let Gn=ve.side;ve.side=je,ve.needsUpdate=!0,_e(Re,Mt,bt,hn,ve,Qt),ve.side=Gn,ve.needsUpdate=!0,fe=!0}}fe===!0&&(N.updateMultisampleRenderTarget(Bt),N.updateRenderTargetMipmap(Bt))}M.setRenderTarget(Jt),M.setClearColor(z,W),le!==void 0&&(bt.viewport=le),M.toneMapping=Kt}function se(F,ht,Mt){let bt=ht.isScene===!0?ht.overrideMaterial:null;for(let ft=0,Bt=F.length;ft<Bt;ft++){let Xt=F[ft],Jt=Xt.object,Kt=Xt.geometry,le=bt===null?Xt.material:bt,fe=Xt.group;Jt.layers.test(Mt.layers)&&_e(Jt,ht,Mt,Kt,le,fe)}}function _e(F,ht,Mt,bt,ft,Bt){F.onBeforeRender(M,ht,Mt,bt,ft,Bt),F.modelViewMatrix.multiplyMatrices(Mt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ft.onBeforeRender(M,ht,Mt,bt,F,Bt),ft.transparent===!0&&ft.side===Be&&ft.forceSinglePass===!1?(ft.side=je,ft.needsUpdate=!0,M.renderBufferDirect(Mt,ht,bt,ft,F,Bt),ft.side=mi,ft.needsUpdate=!0,M.renderBufferDirect(Mt,ht,bt,ft,F,Bt),ft.side=Be):M.renderBufferDirect(Mt,ht,bt,ft,F,Bt),F.onAfterRender(M,ht,Mt,bt,ft,Bt)}function pe(F,ht,Mt){ht.isScene!==!0&&(ht=mt);let bt=zt.get(F),ft=u.state.lights,Bt=u.state.shadowsArray,Xt=ft.state.version,Jt=ct.getParameters(F,ft.state,Bt,ht,Mt),Kt=ct.getProgramCacheKey(Jt),le=bt.programs;bt.environment=F.isMeshStandardMaterial?ht.environment:null,bt.fog=ht.fog,bt.envMap=(F.isMeshStandardMaterial?ut:L).get(F.envMap||bt.environment),bt.envMapRotation=bt.environment!==null&&F.envMap===null?ht.environmentRotation:F.envMapRotation,le===void 0&&(F.addEventListener("dispose",It),le=new Map,bt.programs=le);let fe=le.get(Kt);if(fe!==void 0){if(bt.currentProgram===fe&&bt.lightsStateVersion===Xt)return $e(F,Jt),fe}else Jt.uniforms=ct.getUniforms(F),F.onBeforeCompile(Jt,M),fe=ct.acquireProgram(Jt,Kt),le.set(Kt,fe),bt.uniforms=Jt.uniforms;let jt=bt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(jt.clippingPlanes=At.uniform),$e(F,Jt),bt.needsLights=Ho(F),bt.lightsStateVersion=Xt,bt.needsLights&&(jt.ambientLightColor.value=ft.state.ambient,jt.lightProbe.value=ft.state.probe,jt.directionalLights.value=ft.state.directional,jt.directionalLightShadows.value=ft.state.directionalShadow,jt.spotLights.value=ft.state.spot,jt.spotLightShadows.value=ft.state.spotShadow,jt.rectAreaLights.value=ft.state.rectArea,jt.ltc_1.value=ft.state.rectAreaLTC1,jt.ltc_2.value=ft.state.rectAreaLTC2,jt.pointLights.value=ft.state.point,jt.pointLightShadows.value=ft.state.pointShadow,jt.hemisphereLights.value=ft.state.hemi,jt.directionalShadowMap.value=ft.state.directionalShadowMap,jt.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,jt.spotShadowMap.value=ft.state.spotShadowMap,jt.spotLightMatrix.value=ft.state.spotLightMatrix,jt.spotLightMap.value=ft.state.spotLightMap,jt.pointShadowMap.value=ft.state.pointShadowMap,jt.pointShadowMatrix.value=ft.state.pointShadowMatrix),bt.currentProgram=fe,bt.uniformsList=null,fe}function tn(F){if(F.uniformsList===null){let ht=F.currentProgram.getUniforms();F.uniformsList=hs.seqWithValue(ht.seq,F.uniforms)}return F.uniformsList}function $e(F,ht){let Mt=zt.get(F);Mt.outputColorSpace=ht.outputColorSpace,Mt.batching=ht.batching,Mt.batchingColor=ht.batchingColor,Mt.instancing=ht.instancing,Mt.instancingColor=ht.instancingColor,Mt.instancingMorph=ht.instancingMorph,Mt.skinning=ht.skinning,Mt.morphTargets=ht.morphTargets,Mt.morphNormals=ht.morphNormals,Mt.morphColors=ht.morphColors,Mt.morphTargetsCount=ht.morphTargetsCount,Mt.numClippingPlanes=ht.numClippingPlanes,Mt.numIntersection=ht.numClipIntersection,Mt.vertexAlphas=ht.vertexAlphas,Mt.vertexTangents=ht.vertexTangents,Mt.toneMapping=ht.toneMapping}function vi(F,ht,Mt,bt,ft){ht.isScene!==!0&&(ht=mt),N.resetTextureUnits();let Bt=ht.fog,Xt=bt.isMeshStandardMaterial?ht.environment:null,Jt=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vs,Kt=(bt.isMeshStandardMaterial?ut:L).get(bt.envMap||Xt),le=bt.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,fe=!!Mt.attributes.tangent&&(!!bt.normalMap||bt.anisotropy>0),jt=!!Mt.morphAttributes.position,xe=!!Mt.morphAttributes.normal,Ae=!!Mt.morphAttributes.color,Re=Bn;bt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Re=M.toneMapping);let hn=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,ve=hn!==void 0?hn.length:0,Qt=zt.get(bt),Gn=u.state.lights;if(j===!0&&(ot===!0||F!==x)){let yn=F===x&&bt.id===_;At.setState(bt,F,yn)}let Me=!1;bt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Gn.state.version||Qt.outputColorSpace!==Jt||ft.isBatchedMesh&&Qt.batching===!1||!ft.isBatchedMesh&&Qt.batching===!0||ft.isBatchedMesh&&Qt.batchingColor===!0&&ft.colorTexture===null||ft.isBatchedMesh&&Qt.batchingColor===!1&&ft.colorTexture!==null||ft.isInstancedMesh&&Qt.instancing===!1||!ft.isInstancedMesh&&Qt.instancing===!0||ft.isSkinnedMesh&&Qt.skinning===!1||!ft.isSkinnedMesh&&Qt.skinning===!0||ft.isInstancedMesh&&Qt.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&Qt.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&Qt.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&Qt.instancingMorph===!1&&ft.morphTexture!==null||Qt.envMap!==Kt||bt.fog===!0&&Qt.fog!==Bt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==At.numPlanes||Qt.numIntersection!==At.numIntersection)||Qt.vertexAlphas!==le||Qt.vertexTangents!==fe||Qt.morphTargets!==jt||Qt.morphNormals!==xe||Qt.morphColors!==Ae||Qt.toneMapping!==Re||Qt.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,Qt.__version=bt.version);let En=Qt.currentProgram;Me===!0&&(En=pe(bt,ht,ft));let Bi=!1,dn=!1,ws=!1,Ce=En.getUniforms(),Nn=Qt.uniforms;if(Nt.useProgram(En.program)&&(Bi=!0,dn=!0,ws=!0),bt.id!==_&&(_=bt.id,dn=!0),Bi||x!==F){Nt.buffers.depth.getReversed()?(st.copy(F.projectionMatrix),Ru(st),Cu(st),Ce.setValue(H,"projectionMatrix",st)):Ce.setValue(H,"projectionMatrix",F.projectionMatrix),Ce.setValue(H,"viewMatrix",F.matrixWorldInverse);let ii=Ce.map.cameraPosition;ii!==void 0&&ii.setValue(H,et.setFromMatrixPosition(F.matrixWorld)),vt.logarithmicDepthBuffer&&Ce.setValue(H,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(bt.isMeshPhongMaterial||bt.isMeshToonMaterial||bt.isMeshLambertMaterial||bt.isMeshBasicMaterial||bt.isMeshStandardMaterial||bt.isShaderMaterial)&&Ce.setValue(H,"isOrthographic",F.isOrthographicCamera===!0),x!==F&&(x=F,dn=!0,ws=!0)}if(ft.isSkinnedMesh){Ce.setOptional(H,ft,"bindMatrix"),Ce.setOptional(H,ft,"bindMatrixInverse");let yn=ft.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ce.setValue(H,"boneTexture",yn.boneTexture,N))}ft.isBatchedMesh&&(Ce.setOptional(H,ft,"batchingTexture"),Ce.setValue(H,"batchingTexture",ft._matricesTexture,N),Ce.setOptional(H,ft,"batchingIdTexture"),Ce.setValue(H,"batchingIdTexture",ft._indirectTexture,N),Ce.setOptional(H,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Ce.setValue(H,"batchingColorTexture",ft._colorsTexture,N));let Ts=Mt.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Gt.update(ft,Mt,En),(dn||Qt.receiveShadow!==ft.receiveShadow)&&(Qt.receiveShadow=ft.receiveShadow,Ce.setValue(H,"receiveShadow",ft.receiveShadow)),bt.isMeshGouraudMaterial&&bt.envMap!==null&&(Nn.envMap.value=Kt,Nn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),bt.isMeshStandardMaterial&&bt.envMap===null&&ht.environment!==null&&(Nn.envMapIntensity.value=ht.environmentIntensity),dn&&(Ce.setValue(H,"toneMappingExposure",M.toneMappingExposure),Qt.needsLights&&xn(Nn,ws),Bt&&bt.fog===!0&&lt.refreshFogUniforms(Nn,Bt),lt.refreshMaterialUniforms(Nn,bt,Z,q,u.state.transmissionRenderTarget[F.id]),hs.upload(H,tn(Qt),Nn,N)),bt.isShaderMaterial&&bt.uniformsNeedUpdate===!0&&(hs.upload(H,tn(Qt),Nn,N),bt.uniformsNeedUpdate=!1),bt.isSpriteMaterial&&Ce.setValue(H,"center",ft.center),Ce.setValue(H,"modelViewMatrix",ft.modelViewMatrix),Ce.setValue(H,"normalMatrix",ft.normalMatrix),Ce.setValue(H,"modelMatrix",ft.matrixWorld),bt.isShaderMaterial||bt.isRawShaderMaterial){let yn=bt.uniformsGroups;for(let ii=0,si=yn.length;ii<si;ii++){let fc=yn[ii];P.update(fc,En),P.bind(fc,En)}}return En}function xn(F,ht){F.ambientLightColor.needsUpdate=ht,F.lightProbe.needsUpdate=ht,F.directionalLights.needsUpdate=ht,F.directionalLightShadows.needsUpdate=ht,F.pointLights.needsUpdate=ht,F.pointLightShadows.needsUpdate=ht,F.spotLights.needsUpdate=ht,F.spotLightShadows.needsUpdate=ht,F.rectAreaLights.needsUpdate=ht,F.hemisphereLights.needsUpdate=ht}function Ho(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(F,ht,Mt){zt.get(F.texture).__webglTexture=ht,zt.get(F.depthTexture).__webglTexture=Mt;let bt=zt.get(F);bt.__hasExternalTextures=!0,bt.__autoAllocateDepthBuffer=Mt===void 0,bt.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),bt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ht){let Mt=zt.get(F);Mt.__webglFramebuffer=ht,Mt.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(F,ht=0,Mt=0){R=F,I=ht,E=Mt;let bt=!0,ft=null,Bt=!1,Xt=!1;if(F){let Kt=zt.get(F);if(Kt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(H.FRAMEBUFFER,null),bt=!1;else if(Kt.__webglFramebuffer===void 0)N.setupRenderTarget(F);else if(Kt.__hasExternalTextures)N.rebindTextures(F,zt.get(F.texture).__webglTexture,zt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let jt=F.depthTexture;if(Kt.__boundDepthTexture!==jt){if(jt!==null&&zt.has(jt)&&(F.width!==jt.image.width||F.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(F)}}let le=F.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Xt=!0);let fe=zt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(fe[ht])?ft=fe[ht][Mt]:ft=fe[ht],Bt=!0):F.samples>0&&N.useMultisampledRTT(F)===!1?ft=zt.get(F).__webglMultisampledFramebuffer:Array.isArray(fe)?ft=fe[Mt]:ft=fe,b.copy(F.viewport),w.copy(F.scissor),T=F.scissorTest}else b.copy(U).multiplyScalar(Z).floor(),w.copy(Lt).multiplyScalar(Z).floor(),T=J;if(Nt.bindFramebuffer(H.FRAMEBUFFER,ft)&&bt&&Nt.drawBuffers(F,ft),Nt.viewport(b),Nt.scissor(w),Nt.setScissorTest(T),Bt){let Kt=zt.get(F.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Kt.__webglTexture,Mt)}else if(Xt){let Kt=zt.get(F.texture),le=ht||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.__webglTexture,Mt||0,le)}_=-1},this.readRenderTargetPixels=function(F,ht,Mt,bt,ft,Bt,Xt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=zt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xt!==void 0&&(Jt=Jt[Xt]),Jt){Nt.bindFramebuffer(H.FRAMEBUFFER,Jt);try{let Kt=F.texture,le=Kt.format,fe=Kt.type;if(!vt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=F.width-bt&&Mt>=0&&Mt<=F.height-ft&&H.readPixels(ht,Mt,bt,ft,Yt.convert(le),Yt.convert(fe),Bt)}finally{let Kt=R!==null?zt.get(R).__webglFramebuffer:null;Nt.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(F,ht,Mt,bt,ft,Bt,Xt){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=zt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Xt!==void 0&&(Jt=Jt[Xt]),Jt){let Kt=F.texture,le=Kt.format,fe=Kt.type;if(!vt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ht>=0&&ht<=F.width-bt&&Mt>=0&&Mt<=F.height-ft){Nt.bindFramebuffer(H.FRAMEBUFFER,Jt);let jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.bufferData(H.PIXEL_PACK_BUFFER,Bt.byteLength,H.STREAM_READ),H.readPixels(ht,Mt,bt,ft,Yt.convert(le),Yt.convert(fe),0);let xe=R!==null?zt.get(R).__webglFramebuffer:null;Nt.bindFramebuffer(H.FRAMEBUFFER,xe);let Ae=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Au(H,Ae,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Bt),H.deleteBuffer(jt),H.deleteSync(Ae),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ht=null,Mt=0){F.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ht=arguments[0]||null,F=arguments[1]);let bt=Math.pow(2,-Mt),ft=Math.floor(F.image.width*bt),Bt=Math.floor(F.image.height*bt),Xt=ht!==null?ht.x:0,Jt=ht!==null?ht.y:0;N.setTexture2D(F,0),H.copyTexSubImage2D(H.TEXTURE_2D,Mt,0,0,Xt,Jt,ft,Bt),Nt.unbindTexture()},this.copyTextureToTexture=function(F,ht,Mt=null,bt=null,ft=0){F.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),bt=arguments[0]||null,F=arguments[1],ht=arguments[2],ft=arguments[3]||0,Mt=null);let Bt,Xt,Jt,Kt,le,fe,jt,xe,Ae,Re=F.isCompressedTexture?F.mipmaps[ft]:F.image;Mt!==null?(Bt=Mt.max.x-Mt.min.x,Xt=Mt.max.y-Mt.min.y,Jt=Mt.isBox3?Mt.max.z-Mt.min.z:1,Kt=Mt.min.x,le=Mt.min.y,fe=Mt.isBox3?Mt.min.z:0):(Bt=Re.width,Xt=Re.height,Jt=Re.depth||1,Kt=0,le=0,fe=0),bt!==null?(jt=bt.x,xe=bt.y,Ae=bt.z):(jt=0,xe=0,Ae=0);let hn=Yt.convert(ht.format),ve=Yt.convert(ht.type),Qt;ht.isData3DTexture?(N.setTexture3D(ht,0),Qt=H.TEXTURE_3D):ht.isDataArrayTexture||ht.isCompressedArrayTexture?(N.setTexture2DArray(ht,0),Qt=H.TEXTURE_2D_ARRAY):(N.setTexture2D(ht,0),Qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ht.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ht.unpackAlignment);let Gn=H.getParameter(H.UNPACK_ROW_LENGTH),Me=H.getParameter(H.UNPACK_IMAGE_HEIGHT),En=H.getParameter(H.UNPACK_SKIP_PIXELS),Bi=H.getParameter(H.UNPACK_SKIP_ROWS),dn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Re.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),H.pixelStorei(H.UNPACK_SKIP_ROWS,le),H.pixelStorei(H.UNPACK_SKIP_IMAGES,fe);let ws=F.isDataArrayTexture||F.isData3DTexture,Ce=ht.isDataArrayTexture||ht.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let Nn=zt.get(F),Ts=zt.get(ht),yn=zt.get(Nn.__renderTarget),ii=zt.get(Ts.__renderTarget);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let si=0;si<Jt;si++)ws&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(F).__webglTexture,ft,fe+si),F.isDepthTexture?(Ce&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(ht).__webglTexture,ft,Ae+si),H.blitFramebuffer(Kt,le,Bt,Xt,jt,xe,Bt,Xt,H.DEPTH_BUFFER_BIT,H.NEAREST)):Ce?H.copyTexSubImage3D(Qt,ft,jt,xe,Ae+si,Kt,le,Bt,Xt):H.copyTexSubImage2D(Qt,ft,jt,xe,Ae+si,Kt,le,Bt,Xt);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ce?F.isDataTexture||F.isData3DTexture?H.texSubImage3D(Qt,ft,jt,xe,Ae,Bt,Xt,Jt,hn,ve,Re.data):ht.isCompressedArrayTexture?H.compressedTexSubImage3D(Qt,ft,jt,xe,Ae,Bt,Xt,Jt,hn,Re.data):H.texSubImage3D(Qt,ft,jt,xe,Ae,Bt,Xt,Jt,hn,ve,Re):F.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ft,jt,xe,Bt,Xt,hn,ve,Re.data):F.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ft,jt,xe,Re.width,Re.height,hn,Re.data):H.texSubImage2D(H.TEXTURE_2D,ft,jt,xe,Bt,Xt,hn,ve,Re);H.pixelStorei(H.UNPACK_ROW_LENGTH,Gn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Me),H.pixelStorei(H.UNPACK_SKIP_PIXELS,En),H.pixelStorei(H.UNPACK_SKIP_ROWS,Bi),H.pixelStorei(H.UNPACK_SKIP_IMAGES,dn),ft===0&&ht.generateMipmaps&&H.generateMipmap(Qt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(F,ht,Mt=null,bt=null,ft=0){return F.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Mt=arguments[0]||null,bt=arguments[1]||null,F=arguments[2],ht=arguments[3],ft=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ht,Mt,bt,ft)},this.initRenderTarget=function(F){zt.get(F).__webglFramebuffer===void 0&&N.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?N.setTextureCube(F,0):F.isData3DTexture?N.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?N.setTexture2DArray(F,0):N.setTexture2D(F,0),Nt.unbindTexture()},this.resetState=function(){I=0,E=0,R=null,Nt.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var lo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},co=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ho=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=al,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new k,Ys=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$s=class extends ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ts,Ps=new k,es=new k,ns=new k,is=new Ft,Ls=new Ft,Zh=new ye,Lr=new k,Ds=new k,Dr=new k,uh=new Ft,ga=new Ft,dh=new Ft,fo=class extends Ee{constructor(t=new $s){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ho(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new Ys(n,3,0,!1)),ts.setAttribute("uv",new Ys(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),Zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ur(Lr.set(-.5,-.5,0),ns,o,es,s,r),Ur(Ds.set(.5,-.5,0),ns,o,es,s,r),Ur(Dr.set(.5,.5,0),ns,o,es,s,r),uh.set(0,0),ga.set(1,0),dh.set(1,1);let a=t.ray.intersectTriangle(Lr,Ds,Dr,!1,Ps);if(a===null&&(Ur(Ds.set(-.5,.5,0),ns,o,es,s,r),ga.set(0,1),a=t.ray.intersectTriangle(Lr,Dr,Ds,!1,Ps),a===null))return;let l=t.ray.origin.distanceTo(Ps);l<t.near||l>t.far||e.push({distance:l,point:Ps.clone(),uv:ui.getInterpolation(Ps,Lr,Ds,Dr,uh,ga,dh,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ur(i,t,e,n,s,r){is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ls.x=r*is.x-s*is.y,Ls.y=s*is.x+r*is.y):Ls.copy(is),i.copy(t),i.x+=Ls.x,i.y+=Ls.y,i.applyMatrix4(Zh)}var Zs=class extends fn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ln,h=ln,p,d){super(null,o,a,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new ye,ph=new ye,Nr=[],mh=new ei,bg=new ye,Us=new Te,Ns=new xi,Ve=class extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),mh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(mh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Ns.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),ph.multiplyMatrices(n,ss),Us.matrixWorld=ph,Us.raycast(t,Nr);for(let o=0,a=Nr.length;o<a;o++){let l=Nr[o];l.instanceId=r,l.object=this,e.push(l)}Nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zs(new Float32Array(s*this.count),s,this.count,Zl,On));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ui=class extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uo=new k,po=new k,gh=new ye,Fs=new jr,Fr=new xi,xa=new k,xh=new k,El=class extends Ee{constructor(t=new we,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)uo.fromBufferAttribute(e,s-1),po.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=uo.distanceTo(po);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;gh.copy(s).invert(),Fs.copy(t.ray).applyMatrix4(gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let u=h.getX(v),S=h.getX(v+1),y=zr(this,t,Fs,l,u,S);y&&e.push(y)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),u=zr(this,t,Fs,l,v,m);u&&e.push(u)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let u=zr(this,t,Fs,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){let v=zr(this,t,Fs,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(uo.fromBufferAttribute(o,s),po.fromBufferAttribute(o,r),e.distanceSqToSegment(uo,po,xa,xh)>n)return;xa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xa);if(!(l<t.near||l>t.far))return{distance:l,point:xh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var yh=new k,_h=new k,xs=class extends El{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yh.fromBufferAttribute(e,s),_h.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yh.distanceTo(_h);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ys=class extends fn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ft:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new k,s=[],r=[],o=[],a=new k,l=new ye;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ke(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ks=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*p+this.aX,c=d*p+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wl=class extends Ks{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+p)+(l-a)/p;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Or=new k,ya=new nc,_a=new nc,va=new nc,js=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);let p=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ya.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,g,v,m),_a.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,g,v,m),va.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),_a.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),va.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set(ya.calc(l),_a.calc(l),va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Sg(i,t){let e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function wg(i,t){return i*i*t}function Vs(i,t,e,n){return Sg(i,t)+Eg(i,e)+wg(i,n)}function Tg(i,t){let e=1-i;return e*e*e*t}function Ag(i,t){let e=1-i;return 3*e*e*i*t}function Rg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function Gs(i,t,e,n,s){return Tg(i,t)+Ag(i,e)+Rg(i,n)+Cg(i,s)}var mo=class extends Mn{constructor(t=new Ft,e=new Ft,n=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tl=class extends Mn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,s.x,r.x,o.x,a.x),Gs(t,s.y,r.y,o.y,a.y),Gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},go=class extends Mn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Al=class extends Mn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Mn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Mn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vs(t,s.x,r.x,o.x),Vs(t,s.y,r.y,o.y),Vs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(vh(a,l.x,c.x,h.x,p.x),vh(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}},vo=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:js,CubicBezierCurve:mo,CubicBezierCurve3:Tl,EllipseCurve:Ks,LineCurve:go,LineCurve3:Al,QuadraticBezierCurve:xo,QuadraticBezierCurve3:yo,SplineCurve:_o}),Rl=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vo[s.type]().fromJSON(s))}return this}},Qs=class extends Rl{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new go(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new xo(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new mo(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s),new Ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _o(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ks(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},tr=class i extends we{constructor(t=[new Ft(0,-.5),new Ft(.5,0),new Ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new k,d=new Ft,f=new k,g=new k,v=new k,m=0,u=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,u=t[S+1].y-t[S].y,f.x=u*1,f.y=-m,f.z=u*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,u=t[S+1].y-t[S].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let S=0;S<=e;S++){let y=n+S*h*s,M=Math.sin(y),B=Math.cos(y);for(let I=0;I<=t.length-1;I++){p.x=t[I].x*M,p.y=t[I].y,p.z=t[I].x*B,o.push(p.x,p.y,p.z),d.x=S/e,d.y=I/(t.length-1),a.push(d.x,d.y);let E=l[3*I+0]*M,R=l[3*I+1],_=l[3*I+0]*B;c.push(E,R,_)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){let M=y+S*t.length,B=M,I=M+t.length,E=M+t.length+1,R=M+1;r.push(B,I,R),r.push(E,R,I)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},In=class i extends tr{constructor(t=1,e=1,n=4,s=8){let r=new Qs;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var te=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],f=[],g=0,v=[],m=n/2,u=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function S(){let M=new k,B=new k,I=0,E=(e-t)/n;for(let R=0;R<=r;R++){let _=[],x=R/r,b=x*(e-t)+t;for(let w=0;w<=s;w++){let T=w/s,z=T*l+a,W=Math.sin(z),D=Math.cos(z);B.x=b*W,B.y=-x*n+m,B.z=b*D,p.push(B.x,B.y,B.z),M.set(W,E,D).normalize(),d.push(M.x,M.y,M.z),f.push(T,1-x),_.push(g++)}v.push(_)}for(let R=0;R<s;R++)for(let _=0;_<r;_++){let x=v[_][R],b=v[_+1][R],w=v[_+1][R+1],T=v[_][R+1];(t>0||_!==0)&&(h.push(x,b,T),I+=3),(e>0||_!==r-1)&&(h.push(b,w,T),I+=3)}c.addGroup(u,I,0),u+=I}function y(M){let B=g,I=new Ft,E=new k,R=0,_=M===!0?t:e,x=M===!0?1:-1;for(let w=1;w<=s;w++)p.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;let b=g;for(let w=0;w<=s;w++){let z=w/s*l+a,W=Math.cos(z),D=Math.sin(z);E.x=_*D,E.y=m*x,E.z=_*W,p.push(E.x,E.y,E.z),d.push(0,x,0),I.x=W*.5+.5,I.y=D*.5*x+.5,f.push(I.x,I.y),g++}for(let w=0;w<s;w++){let T=B+w,z=b+w;M===!0?h.push(z,z+1,T):h.push(z+1,z,T),R+=3}c.addGroup(u,R,M===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ne=class i extends te{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cl=class i extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let y=new k,M=new k,B=new k;for(let I=0;I<e.length;I+=3)f(e[I+0],y),f(e[I+1],M),f(e[I+2],B),l(y,M,B,S)}function l(S,y,M,B){let I=B+1,E=[];for(let R=0;R<=I;R++){E[R]=[];let _=S.clone().lerp(M,R/I),x=y.clone().lerp(M,R/I),b=I-R;for(let w=0;w<=b;w++)w===0&&R===I?E[R][w]=_:E[R][w]=_.clone().lerp(x,w/b)}for(let R=0;R<I;R++)for(let _=0;_<2*(I-R)-1;_++){let x=Math.floor(_/2);_%2===0?(d(E[R][x+1]),d(E[R+1][x]),d(E[R][x])):(d(E[R][x+1]),d(E[R+1][x+1]),d(E[R+1][x]))}}function c(S){let y=new k;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(S),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let S=new k;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];let M=m(S)/2/Math.PI+.5,B=u(S)/Math.PI+.5;o.push(M,1-B)}g(),p()}function p(){for(let S=0;S<o.length;S+=6){let y=o[S+0],M=o[S+2],B=o[S+4],I=Math.max(y,M,B),E=Math.min(y,M,B);I>.9&&E<.1&&(y<.2&&(o[S+0]+=1),M<.2&&(o[S+2]+=1),B<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){let M=S*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){let S=new k,y=new k,M=new k,B=new k,I=new Ft,E=new Ft,R=new Ft;for(let _=0,x=0;_<r.length;_+=9,x+=6){S.set(r[_+0],r[_+1],r[_+2]),y.set(r[_+3],r[_+4],r[_+5]),M.set(r[_+6],r[_+7],r[_+8]),I.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),B.copy(S).add(y).add(M).divideScalar(3);let b=m(B);v(I,x+0,S,b),v(E,x+2,y,b),v(R,x+4,M,b)}}function v(S,y,M,B){B<0&&S.x===1&&(o[y]=S.x-1),M.x===0&&M.z===0&&(o[y]=B/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Ni=class extends Qs{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Qs().fromJSON(s))}return this}},Ig={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Jh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,p,d,f;if(n&&(r=Ng(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)p=i[g],d=i[g+1],p<a&&(a=p),d<l&&(l=d),p>c&&(c=p),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return er(r,o,e,a,l,f,0),o}};function Jh(i,t,e,n,s){let r,o;if(s===qg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Mh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Mh(r,i[r],i[r+1],o);return o&&Do(o,o.next)&&(ir(o),o=o.next),o}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Do(e,e.next)||Ue(e.prev,e,e.next)===0)){if(ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function er(i,t,e,n,s,r,o){if(!i)return;!o&&r&&kg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Lg(i,n,s,r):Pg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ir(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Dg(Fi(i),t,e),er(i,t,e,n,s,r,2)):o===2&&Ug(i,t,e,n,s,r):er(Fi(i),t,e,n,s,r,1);break}}}function Pg(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,p=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=f&&os(s,a,r,l,o,c,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ue(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<p?h<d?h:d:p<d?p:d,v=a>l?a>c?a:c:l>c?l:c,m=h>p?h>d?h:d:p>d?p:d,u=Il(f,g,t,e,n),S=Il(v,m,t,e,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=u&&M&&M.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&os(a,h,l,p,c,d,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&os(a,h,l,p,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=u;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&os(a,h,l,p,c,d,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&os(a,h,l,p,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Dg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Do(s,r)&&Kh(s,n,n.next,r)&&nr(s,r)&&nr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ir(n),ir(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function Ug(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gg(o,a)){let l=jh(o,a);o=Fi(o,o.next),l=Fi(l,l.next),er(o,t,e,n,s,r,0),er(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ng(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Jh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Vg(c));for(s.sort(Fg),r=0;r<s.length;r++)e=zg(s[r],e);return e}function Fg(i,t){return i.x-t.x}function zg(i,t){let e=Og(i,t);if(!e)return t;let n=jh(e,i);return Fi(n,n.next),Fi(e,e.next)}function Og(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&os(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(r-e.x),nr(e,i)&&(p<h||p===h&&(e.x>s.x||e.x===s.x&&Bg(s,e)))&&(s=e,h=p)),e=e.next;while(e!==a);return s}function Bg(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function kg(i,t,e,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hg(s)}function Hg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function os(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Gg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wg(i,t)&&(nr(i,t)&&nr(t,i)&&Xg(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Do(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Do(i,t){return i.x===t.x&&i.y===t.y}function Kh(i,t,e,n){let s=kr(Ue(i,t,e)),r=kr(Ue(i,t,n)),o=kr(Ue(e,n,i)),a=kr(Ue(e,n,t));return!!(s!==r&&o!==a||s===0&&Br(i,e,t)||r===0&&Br(i,n,t)||o===0&&Br(e,i,n)||a===0&&Br(e,t,n))}function Br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function kr(i){return i>0?1:i<0?-1:0}function Wg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nr(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Xg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jh(i,t){let e=new Pl(i.i,i.x,i.y),n=new Pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mh(i,t,e,n){let s=new Pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var pi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bh(t),Sh(n,t);let o=t.length;e.forEach(bh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sh(n,e[l]);let a=Ig.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Mo=class i extends we{constructor(t=new Ni([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Yg,y,M=!1,B,I,E,R;u&&(y=u.getSpacedPoints(h),M=!0,d=!1,B=u.computeFrenetFrames(h,!1),I=new k,E=new k,R=new k),d||(m=0,f=0,g=0,v=0);let _=a.extractPoints(c),x=_.shape,b=_.holes;if(!pi.isClockWise(x)){x=x.reverse();for(let Q=0,gt=b.length;Q<gt;Q++){let H=b[Q];pi.isClockWise(H)&&(b[Q]=H.reverse())}}let T=pi.triangulateShape(x,b),z=x;for(let Q=0,gt=b.length;Q<gt;Q++){let H=b[Q];x=x.concat(H)}function W(Q,gt,H){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(gt,H)}let D=x.length,q=T.length;function Z(Q,gt,H){let Ot,Tt,vt,Nt=Q.x-gt.x,nt=Q.y-gt.y,zt=H.x-Q.x,N=H.y-Q.y,L=Nt*Nt+nt*nt,ut=Nt*N-nt*zt;if(Math.abs(ut)>Number.EPSILON){let Rt=Math.sqrt(L),Dt=Math.sqrt(zt*zt+N*N),tt=gt.x-nt/Rt,ct=gt.y+Nt/Rt,lt=H.x-N/Dt,_t=H.y+zt/Dt,St=((lt-tt)*N-(_t-ct)*zt)/(Nt*N-nt*zt);Ot=tt+Nt*St-Q.x,Tt=ct+nt*St-Q.y;let At=Ot*Ot+Tt*Tt;if(At<=2)return new Ft(Ot,Tt);vt=Math.sqrt(At/2)}else{let Rt=!1;Nt>Number.EPSILON?zt>Number.EPSILON&&(Rt=!0):Nt<-Number.EPSILON?zt<-Number.EPSILON&&(Rt=!0):Math.sign(nt)===Math.sign(N)&&(Rt=!0),Rt?(Ot=-nt,Tt=Nt,vt=Math.sqrt(L)):(Ot=Nt,Tt=nt,vt=Math.sqrt(L/2))}return new Ft(Ot/vt,Tt/vt)}let it=[];for(let Q=0,gt=z.length,H=gt-1,Ot=Q+1;Q<gt;Q++,H++,Ot++)H===gt&&(H=0),Ot===gt&&(Ot=0),it[Q]=Z(z[Q],z[H],z[Ot]);let xt=[],U,Lt=it.concat();for(let Q=0,gt=b.length;Q<gt;Q++){let H=b[Q];U=[];for(let Ot=0,Tt=H.length,vt=Tt-1,Nt=Ot+1;Ot<Tt;Ot++,vt++,Nt++)vt===Tt&&(vt=0),Nt===Tt&&(Nt=0),U[Ot]=Z(H[Ot],H[vt],H[Nt]);xt.push(U),Lt=Lt.concat(U)}for(let Q=0;Q<m;Q++){let gt=Q/m,H=f*Math.cos(gt*Math.PI/2),Ot=g*Math.sin(gt*Math.PI/2)+v;for(let Tt=0,vt=z.length;Tt<vt;Tt++){let Nt=W(z[Tt],it[Tt],Ot);st(Nt.x,Nt.y,-H)}for(let Tt=0,vt=b.length;Tt<vt;Tt++){let Nt=b[Tt];U=xt[Tt];for(let nt=0,zt=Nt.length;nt<zt;nt++){let N=W(Nt[nt],U[nt],Ot);st(N.x,N.y,-H)}}}let J=g+v;for(let Q=0;Q<D;Q++){let gt=d?W(x[Q],Lt[Q],J):x[Q];M?(E.copy(B.normals[0]).multiplyScalar(gt.x),I.copy(B.binormals[0]).multiplyScalar(gt.y),R.copy(y[0]).add(E).add(I),st(R.x,R.y,R.z)):st(gt.x,gt.y,0)}for(let Q=1;Q<=h;Q++)for(let gt=0;gt<D;gt++){let H=d?W(x[gt],Lt[gt],J):x[gt];M?(E.copy(B.normals[Q]).multiplyScalar(H.x),I.copy(B.binormals[Q]).multiplyScalar(H.y),R.copy(y[Q]).add(E).add(I),st(R.x,R.y,R.z)):st(H.x,H.y,p/h*Q)}for(let Q=m-1;Q>=0;Q--){let gt=Q/m,H=f*Math.cos(gt*Math.PI/2),Ot=g*Math.sin(gt*Math.PI/2)+v;for(let Tt=0,vt=z.length;Tt<vt;Tt++){let Nt=W(z[Tt],it[Tt],Ot);st(Nt.x,Nt.y,p+H)}for(let Tt=0,vt=b.length;Tt<vt;Tt++){let Nt=b[Tt];U=xt[Tt];for(let nt=0,zt=Nt.length;nt<zt;nt++){let N=W(Nt[nt],U[nt],Ot);M?st(N.x,N.y+y[h-1].y,y[h-1].x+H):st(N.x,N.y,p+H)}}}G(),j();function G(){let Q=s.length/3;if(d){let gt=0,H=D*gt;for(let Ot=0;Ot<q;Ot++){let Tt=T[Ot];pt(Tt[2]+H,Tt[1]+H,Tt[0]+H)}gt=h+m*2,H=D*gt;for(let Ot=0;Ot<q;Ot++){let Tt=T[Ot];pt(Tt[0]+H,Tt[1]+H,Tt[2]+H)}}else{for(let gt=0;gt<q;gt++){let H=T[gt];pt(H[2],H[1],H[0])}for(let gt=0;gt<q;gt++){let H=T[gt];pt(H[0]+D*h,H[1]+D*h,H[2]+D*h)}}n.addGroup(Q,s.length/3-Q,0)}function j(){let Q=s.length/3,gt=0;ot(z,gt),gt+=z.length;for(let H=0,Ot=b.length;H<Ot;H++){let Tt=b[H];ot(Tt,gt),gt+=Tt.length}n.addGroup(Q,s.length/3-Q,1)}function ot(Q,gt){let H=Q.length;for(;--H>=0;){let Ot=H,Tt=H-1;Tt<0&&(Tt=Q.length-1);for(let vt=0,Nt=h+m*2;vt<Nt;vt++){let nt=D*vt,zt=D*(vt+1),N=gt+Ot+nt,L=gt+Tt+nt,ut=gt+Tt+zt,Rt=gt+Ot+zt;et(N,L,ut,Rt)}}}function st(Q,gt,H){l.push(Q),l.push(gt),l.push(H)}function pt(Q,gt,H){rt(Q),rt(gt),rt(H);let Ot=s.length/3,Tt=S.generateTopUV(n,s,Ot-3,Ot-2,Ot-1);mt(Tt[0]),mt(Tt[1]),mt(Tt[2])}function et(Q,gt,H,Ot){rt(Q),rt(gt),rt(Ot),rt(gt),rt(H),rt(Ot);let Tt=s.length/3,vt=S.generateSideWallUV(n,s,Tt-6,Tt-3,Tt-2,Tt-1);mt(vt[0]),mt(vt[1]),mt(vt[3]),mt(vt[1]),mt(vt[2]),mt(vt[3])}function rt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function mt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $g(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vo[s.type]().fromJSON(s)),new i(n,t.options)}},Yg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Ft(r,o),new Ft(a,l),new Ft(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ft(o,1-l),new Ft(c,1-p),new Ft(d,1-g),new Ft(v,1-u)]:[new Ft(a,1-l),new Ft(h,1-p),new Ft(f,1-g),new Ft(m,1-u)]}};function $g(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ge=class i extends Cl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var bo=class i extends we{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],p=t,d=(e-t)/s,f=new k,g=new Ft;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let u=r+m/n*o;f.x=p*Math.cos(u),f.y=p*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}p+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let u=0;u<n;u++){let S=u+m,y=S,M=S+n+1,B=S+n+2,I=S+1;a.push(y,M,I),a.push(M,B,I)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},So=class i extends we{constructor(t=new Ni([new Ft(0,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function c(h){let p=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;pi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){let S=g[m];pi.isClockWise(S)===!0&&(g[m]=S.reverse())}let v=pi.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){let S=g[m];f=f.concat(S)}for(let m=0,u=f.length;m<u;m++){let S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,u=v.length;m<u;m++){let S=v[m],y=S[0]+p,M=S[1]+p,B=S[2]+p;n.push(y,M,B),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Zg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Zg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ce=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new k,d=new k,f=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){let S=[],y=u/n,M=0;u===0&&o===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let B=0;B<=e;B++){let I=B/e;p.x=-t*Math.cos(s+I*r)*Math.sin(o+y*a),p.y=t*Math.cos(o+y*a),p.z=t*Math.sin(s+I*r)*Math.sin(o+y*a),g.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),m.push(I+M,1-y),S.push(c++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<e;S++){let y=h[u][S+1],M=h[u][S],B=h[u+1][S],I=h[u+1][S+1];(u!==0||o>0)&&f.push(y,M,I),(u!==n-1||l<Math.PI)&&f.push(M,B,I)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Oe=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new k,p=new k,d=new k;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),a.push(p.x,p.y,p.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(p,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(v,m,S),o.push(m,u,S)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Eo=class i extends we{constructor(t=new yo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new Ft,h=new k,p=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function v(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),u()}function m(y){h=t.getPointAt(y/e,h);let M=o.normals[y],B=o.binormals[y];for(let I=0;I<=s;I++){let E=I/s*Math.PI*2,R=Math.sin(E),_=-Math.cos(E);l.x=_*M.x+R*B.x,l.y=_*M.y+R*B.y,l.z=_*M.z+R*B.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=e;y++)for(let M=1;M<=s;M++){let B=(s+1)*(y-1)+(M-1),I=(s+1)*y+(M-1),E=(s+1)*y+M,R=(s+1)*(y-1)+M;g.push(B,I,R),g.push(I,E,R)}}function S(){for(let y=0;y<=e;y++)for(let M=0;M<=s;M++)c.x=y/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new vo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var wo=class extends ni{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new $t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Hr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var _s=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends _s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xc:r=t,a=2*e-n;break;case yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:o=t,l=2*n-e;break;case yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,u=-d*m+2*d*v-d*g,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let B=0;B!==a;++B)r[B]=u*o[h+B]+S*o[c+B]+y*o[l+B]+M*o[p+B];return r}},Dl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*p+o[l+d]*h;return r}},Ul=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hr(e,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hr(t.times,Array),values:Hr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case ol:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Jg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,d=p-n,f=p+n;for(let g=0;g!==n;++g){let v=e[p+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[p+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ol;var zi=class extends Pn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Yr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Pn{};Nl.prototype.ValueTypeName="color";var Fl=class extends Pn{};Fl.prototype.ValueTypeName="number";var zl=class extends _s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},To=class extends Pn{InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Yr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends Pn{};Ol.prototype.ValueTypeName="vector";var Bl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Kg=new Bl,kl=class{constructor(t){this.manager=t!==void 0?t:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ao=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ro=class extends Ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ma=new ye,Eh=new k,wh=new k,Hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vl=class extends Hl{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ic="\\[\\]\\.:\\/",jg=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",Qg="[^"+ic.replace("\\.","")+"]",tx=/((?:WC+[\/:])*)/.source.replace("WC",sc),ex=/(WCOD+)?/.source.replace("WCOD",Qg),nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),sx=new RegExp("^"+tx+ex+nx+ix+"$"),rx=["material","materials","bones","map"],Gl=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let e=sx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Gl;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);var ox=2.3,Pe=7.2,Uo=.16,yi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Qh(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=J=>{let G=Math.max(0,Math.min(s,J/r)),j=Math.min(s-1,Math.floor(G)),ot=G-j,st=n[Math.max(0,j-1)],pt=n[j],et=n[j+1],rt=n[Math.min(s,j+2)],mt=Q=>.5*(2*pt[Q]+(-st[Q]+et[Q])*ot+(2*st[Q]-5*pt[Q]+4*et[Q]-rt[Q])*ot*ot+(-st[Q]+3*pt[Q]-3*et[Q]+rt[Q])*ot*ot*ot);return[mt(0),mt(2),pt[1]+(et[1]-pt[1])*ot]},a=J=>{if(J<=i.lengthM)return o(J);let G=o(i.lengthM-20),j=o(i.lengthM),ot=(J-i.lengthM)/20;return[j[0]+(j[0]-G[0])*ot,j[1]+(j[1]-G[1])*ot,j[2]]},l=2700,c=2585,h=i.overlaps.filter(([J,G])=>G>J).sort((J,G)=>J[1]-G[1]),p=J=>{for(let ot=0;ot<h.length-1;ot++){let[st,pt]=h[ot],[et,rt]=h[ot+1];if(J<=rt)return st+(J-pt)*(et-st)/(rt-pt)}let[G,j]=h.at(-1);return G+(J-j)},d=[];for(let J=0;J<=l;J+=2)d.push([J,...o(J)]);let f=2600,g=4900,v=[];for(let J=f;J<=g;J+=10){let G=o(J),j=p(J),ot=j,st=1e9;for(let pt of d){if(Math.abs(pt[0]-j)>60)continue;let et=(pt[1]-G[0])**2+(pt[2]-G[1])**2;et<st&&(st=et,ot=pt[0])}v.push(ot)}let m=v.map((J,G)=>{let j=0,ot=0;for(let st=-3;st<=3;st++){let pt=G+st;pt>=0&&pt<v.length&&(j+=v[pt],ot++)}return j/ot});for(let J=1;J<m.length;J++)m[J]=Math.max(m[J],m[J-1]+.5);let u=J=>{let G=(J-f)/10,j=Math.max(0,Math.min(m.length-2,Math.floor(G))),ot=G-j;return m[j]+(m[j+1]-m[j])*ot},S={};for(let J of e?.runners||[])J.diversions&&(S[J.id]=J.diversions.map(G=>{let j=G.path,ot=[0];for(let st=1;st<j.length;st++)ot.push(ot[st-1]+Math.hypot(j[st][0]-j[st-1][0],j[st][1]-j[st-1][1]));return{...G,cum:ot,len:ot.at(-1)}}));let y=(J,G)=>{let j=Math.max(0,Math.min(1,(G-J.fromM)/(J.toM-J.fromM)))*J.len,ot=0;for(;ot<J.cum.length-2&&J.cum[ot+1]<j;)ot++;let st=(j-J.cum[ot])/Math.max(1e-6,J.cum[ot+1]-J.cum[ot]);return[J.path[ot][0]+(J.path[ot+1][0]-J.path[ot][0])*st,J.path[ot][1]+(J.path[ot+1][1]-J.path[ot][1])*st]};function M(J){if(J<f-60){let st=a(J);return[st[0],st[1]]}let G=a(J);if(J>=g+40)return[G[0],G[1]];let j=yi(f-60,f+60,J)*(1-yi(g-60,g,J));if(j<=0)return[G[0],G[1]];let ot=o(Math.min(l,u(Math.max(f,Math.min(g,J)))));return[G[0]+(ot[0]-G[0])*j,G[1]+(ot[1]-G[1])*j]}function B(J,G){let j=M(J),ot=G&&S[G];if(ot){for(let st of ot)if(J>st.fromM&&J<st.toM){let pt=yi(st.fromM,st.fromM+30,J)*(1-yi(st.toM-30,st.toM,J)),et=y(st,J);return j=[j[0]+(et[0]-j[0])*pt,j[1]+(et[1]-j[1])*pt],{x:j[0],z:j[1],div:pt,divInfo:st}}}return{x:j[0],z:j[1],div:0,divInfo:null}}let[I,E,R,_]=t.bounds,x={x0:I-60,z0:E-60,cell:5};x.nx=Math.ceil((R+60-x.x0)/x.cell)+1,x.nz=Math.ceil((_+60-x.z0)/x.cell)+1,x.h=new Float32Array(x.nx*x.nz);let b=[];for(let J=0;J<=s;J+=2)b.push(n[J]);let w=0;for(let J of b)w+=J[1];w/=b.length;let T=(J,G)=>Math.sin(J*.011+1.3)*Math.cos(G*.009-.4)*2.2+Math.sin(J*.027+G*.019)*.9;for(let J=0;J<x.nz;J++)for(let G=0;G<x.nx;G++){let j=x.x0+G*x.cell,ot=x.z0+J*x.cell,st=0,pt=0,et=1e9;for(let Q of b){let gt=(Q[0]-j)**2+(Q[2]-ot)**2;gt<et&&(et=gt);let H=1/(gt+400),Ot=H*H;st+=Ot,pt+=Ot*Q[1]}let rt=yi(30,160,Math.sqrt(et)),mt=pt/st*(1-rt*.4)+w*rt*.4+T(j,ot)*rt;x.h[J*x.nx+G]=mt*ox}let z=t.features.filter(J=>J.closed&&["water","track","tennis","pitch"].includes(J.kind)&&J.pts.length>3);for(let J of z){let G=bn(J.pts),j=[];for(let pt=Math.max(0,Math.floor((G[1]-12-x.z0)/x.cell));pt<=Math.min(x.nz-1,Math.ceil((G[3]+12-x.z0)/x.cell));pt++)for(let et=Math.max(0,Math.floor((G[0]-12-x.x0)/x.cell));et<=Math.min(x.nx-1,Math.ceil((G[2]+12-x.x0)/x.cell));et++){let rt=x.x0+et*x.cell,mt=x.z0+pt*x.cell,Q=rr(J.pts,rt,mt);Q<12&&j.push([pt*x.nx+et,Q])}let ot=0,st=0;for(let[pt,et]of j)et<0&&(ot+=x.h[pt],st++);if(st){ot/=st,J.kind==="water"&&(ot=Math.min(...j.filter(pt=>pt[1]<0).map(pt=>x.h[pt[0]]))-.2),J._level=ot;for(let[pt,et]of j){let rt=1-yi(0,12,et);x.h[pt]=x.h[pt]*(1-rt)+ot*rt-(J.kind==="water"?1.6*(1-yi(-6,0,et)):0)}}}{for(let mt=0;mt<3;mt++){let Q=new Float32Array(x.h);for(let gt=1;gt<x.nz-1;gt++)for(let H=1;H<x.nx-1;H++){let Ot=gt*x.nx+H;Q[Ot]=(x.h[Ot]*4+x.h[Ot-1]+x.h[Ot+1]+x.h[Ot-x.nx]+x.h[Ot+x.nx])/8}x.h.set(Q)}let J=new Float32Array(x.nx*x.nz).fill(1e9),G=new Float32Array(x.nx*x.nz),j=new Float32Array(x.nx*x.nz),ot=(mt,Q)=>x.h[Q*x.nx+mt],st=(mt,Q)=>{let gt=Math.round((mt-x.x0)/x.cell),H=Math.round((Q-x.z0)/x.cell);return ot(Math.max(0,Math.min(x.nx-1,gt)),Math.max(0,Math.min(x.nz-1,H)))},pt=[[0,c],[2540,2690],[g-80,i.lengthM+45]],et=[];for(let[mt,Q]of pt)for(let gt=mt;gt<=Q;gt+=2){let H=M(gt);et.push([H[0],H[1],st(H[0],H[1])])}for(let mt=0;mt<4;mt++)for(let Q=1;Q<et.length-1;Q++)et[Q][2]=(et[Q-1][2]+et[Q][2]*2+et[Q+1][2])/4;let rt=Pe/2+7;for(let[mt,Q,gt]of et){let H=Math.floor((mt-rt-x.x0)/x.cell),Ot=Math.ceil((mt+rt-x.x0)/x.cell),Tt=Math.floor((Q-rt-x.z0)/x.cell),vt=Math.ceil((Q+rt-x.z0)/x.cell);for(let Nt=Math.max(0,Tt);Nt<=Math.min(x.nz-1,vt);Nt++)for(let nt=Math.max(0,H);nt<=Math.min(x.nx-1,Ot);nt++){let zt=Math.hypot(x.x0+nt*x.cell-mt,x.z0+Nt*x.cell-Q);if(zt>rt)continue;let N=Nt*x.nx+nt,L=(1-zt/rt)**2;G[N]+=L,j[N]+=L*gt,zt<J[N]&&(J[N]=zt)}}for(let mt=0;mt<J.length;mt++)if(J[mt]<rt&&G[mt]>0){let Q=1-yi(Pe/2+.5,rt,J[mt]);x.h[mt]=x.h[mt]*(1-Q)+j[mt]/G[mt]*Q}x.pathSamples=et}let W=z.filter(J=>J.kind==="water").sort((J,G)=>G.pts.length-J.pts.length)[0];function D(J,G){let j=(J-x.x0)/x.cell,ot=(G-x.z0)/x.cell,st=Math.max(0,Math.min(x.nx-2,Math.floor(j))),pt=Math.max(0,Math.min(x.nz-2,Math.floor(ot))),et=Math.max(0,Math.min(1,j-st)),rt=Math.max(0,Math.min(1,ot-pt)),mt=x.h[pt*x.nx+st],Q=x.h[pt*x.nx+st+1],gt=x.h[(pt+1)*x.nx+st],H=x.h[(pt+1)*x.nx+st+1];return et+rt<=1?mt+(Q-mt)*et+(gt-mt)*rt:H+(gt-H)*(1-et)+(Q-H)*(1-rt)}let q=new k;function Z(J,G,j={}){let ot=B(J,G),st=Math.max(0,J-4),pt=st+8,et=B(st,G),rt=B(pt,G),mt=rt.x-et.x,Q=rt.z-et.z,gt=Math.hypot(mt,Q)||1;return mt/=gt,Q/=gt,j.x=ot.x,j.z=ot.z,j.y=D(ot.x,ot.z)+Uo,j.tx=mt,j.tz=Q,j.rx=-Q,j.rz=mt,j.slope=(D(rt.x,rt.z)-D(et.x,et.z))/Math.max(1,gt),j.div=ot.div,j.divInfo=ot.divInfo,j}function it(J,G=25){let j=Math.max(0,J-G),ot=M(j),st=M(j+2*G),pt=Math.hypot(st[0]-ot[0],st[1]-ot[1])||1;return q.set((st[0]-ot[0])/pt,0,(st[1]-ot[1])/pt).clone()}let xt=[{from:0,to:c,lift:0},{from:2540,to:2690,lift:.02},{from:g-80,to:i.lengthM+45,lift:.035}],U=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:M,LAP1_END_DRAW:c,xzAt:B,sample:Z,heading:it,heightAt:D,terrain:x,ribbons:xt,finishM:U,lake:W,flat:z,geoOf:J=>J>=f&&J<=g?u(J):J,diversions:S,LAP1_END:l,MAP_FROM:f,MAP_TO:g}}function bn(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function bs(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function rr(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,c]=i[s],h=l-o,p=c-a,d=h*h+p*p||1,f=Math.max(0,Math.min(1,((t-o)*h+(e-a)*p)/d));n=Math.min(n,Math.hypot(t-o-h*f,e-a-p*f))}return bs(i,t,e)?-n:n}function ke(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new we,c=0;for(let h=0;h<i.length;++h){let p=i[h],d=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(p.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(p.morphAttributes[f])}if(t){let f;if(e)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,p=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(p)}for(let h in r){let p=tf(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<p;++d){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);let g=tf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function tf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ie(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let v=h.getComponent(d,g);a.setComponent(d+p,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var or=new k;function Sn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;or.copy(t),or[n]=0,or.normalize();let c=.5*o/(o+a),h=1-or.angleTo(i)/l;return Math.sign(or[e])===1?h*c:a/(o+a)+c+c*(1-h)}var de=class extends me{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new k,l=new k,c=new k(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new k,v=.5/s;for(let m=0,u=0;m<h.length;m+=3,u+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,p[m+0]=l.x,p[m+1]=l.y,p[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[u+0]=Sn(g,l,"z","y",r,n),d[u+1]=1-Sn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[u+0]=1-Sn(g,l,"z","y",r,n),d[u+1]=1-Sn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[u+0]=1-Sn(g,l,"x","z",r,t),d[u+1]=Sn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[u+0]=1-Sn(g,l,"x","z",r,t),d[u+1]=1-Sn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[u+0]=1-Sn(g,l,"x","y",r,t),d[u+1]=1-Sn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[u+0]=Sn(g,l,"x","y",r,t),d[u+1]=1-Sn(g,l,"y","x",r,e);break}}};var _i=null;function ax(){if(_i)return _i;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),_i=new Zs(t,i.length,1,gn),_i.minFilter=_i.magFilter=ln,_i.generateMipmaps=!1,_i.needsUpdate=!0,_i}var ar=new Map;function dt(i,t={}){let e=typeof i=="number"||typeof i=="string"?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&ar.has(e))return ar.get(e);let n=new wo({color:new $t(i??16777215),gradientMap:ax(),...t});return e&&!t.map&&ar.set(e,n),n}function ef(){for(let i of ar.values())i.dispose();ar.clear(),lr.forEach(i=>i.dispose()),lr.clear()}var rc={uRes:{value:new Ft(1920,1080)}},lr=new Map;function lx(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(lr.has(n))return lr.get(n);let s=new cn({uniforms:{...tc.clone(Ht.fog),uRes:rc.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new $t(t)}},vertexShader:`
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
      }`,side:je,fog:!0});return lr.set(n,s),s}function oc(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),c=n.get(l);c||(c=[0,0,0],n.set(l,c)),c[0]+=e.getX(a),c[1]+=e.getY(a),c[2]+=e.getZ(a),r.push(c)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}return i.setAttribute("onormal",new Ie(o,3)),i}function Ln(i,t=3,e,n){oc(i.geometry);let s=lx(t,e,n),r;return i.isInstancedMesh?(r=new Ve(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new Te(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function he(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Te(i,t);return a.castShadow=e,a.receiveShadow=n,s&&Ln(a,s,r,o),a}function qe(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new ys(o);return s&&(l.colorSpace=Je),n&&(l.wrapS=l.wrapT=Li),l.anisotropy=r,l}var ac='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',qt=un(20240817);function un(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Dn(i,t,e,n){let s=qe(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function Ye(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${ac}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function nf(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new ne;i.add(a);let l=A=>(a.add(A),A),c=t.terrain,h=(c.nx-1)*c.cell,p=(c.nz-1)*c.cell,d=new Map,f=6,g=(A,P)=>`${Math.floor(A/f)},${Math.floor(P/f)}`,v=(A,P,Y)=>{let O=g(A,P),$=d.get(O);$||d.set(O,$=[]),$.push([A,P,Y])},m=(A,P,Y)=>{let O=Math.floor(A/f),$=Math.floor(P/f),X=Math.ceil((Y+30)/f);for(let at=-X;at<=X;at++)for(let It=-X;It<=X;It++){let wt=d.get(`${O+at},${$+It}`);if(wt){for(let[C,V,K]of wt)if((C-A)**2+(V-P)**2<(K+Y)**2)return!1}}return!0},u=[];for(let A of t.ribbons)for(let P=A.from;P<=A.to;P+=3){let Y=t.baseXZ(P);u.push(Y),v(Y[0],Y[1],Pe/2+1.5)}for(let A in t.diversions)for(let P of t.diversions[A])for(let Y of P.path)v(Y[0],Y[1],4);let S=s.features.filter(A=>A.kind==="park").sort((A,P)=>P.pts.length-A.pts.length)[0].pts,y=(A,P)=>bs(S,A,P),B=s.features.filter(A=>A.closed&&["water","track","tennis","pitch","playground","building"].includes(A.kind)).map(A=>[bn(A.pts),A]),I=(A,P,Y=2)=>B.some(([O,$])=>A>O[0]-Y&&A<O[2]+Y&&P>O[1]-Y&&P<O[3]+Y&&rr($.pts,A,P)<Y),E=1.7,R=qe(Math.round(h*E),Math.round(p*E),(A,P,Y)=>_(A,P,Y),{aniso:8});o.push(R);function _(A,P,Y){let O=C=>(C-c.x0)*E,$=C=>(C-c.z0)*E,X=(C,V=!0)=>{A.beginPath(),C.forEach((K,yt)=>yt?A.lineTo(O(K[0]),$(K[1])):A.moveTo(O(K[0]),$(K[1]))),V&&A.closePath()};A.fillStyle="#d8d2c2",A.fillRect(0,0,P,Y);for(let C=0;C<9e3;C++)A.fillStyle=qt()<.5?"#cfc8b6":"#e2dccd",A.fillRect(qt()*P,qt()*Y,3,3);X(S),A.fillStyle="#66cf45",A.fill(),A.save(),X(S),A.clip(),A.translate(P/2,Y/2),A.rotate(-.62);for(let C=-2e3;C<2e3;C+=2*14*E)A.fillStyle="rgba(255,255,140,0.10)",A.fillRect(C,-2500,14*E,5e3);A.setTransform(1,0,0,1,0,0);for(let C=0;C<26e3;C++){let V=qt()*P,K=qt()*Y;A.fillStyle=qt()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",A.fillRect(V,K,2+qt()*2,2+qt()*3)}A.restore();let at=(C,V,K)=>{for(let yt of s.features)yt.kind===C&&yt.closed&&(X(yt.pts),A.fillStyle=V,A.fill(),K&&(A.strokeStyle=K,A.lineWidth=2,A.stroke()))};at("grass","#72d64e"),at("garden","#86dc5c"),at("wood","#3f9e3a"),at("scrub","#5cb544");for(let C of s.features)if(C.kind==="pitch"&&C.closed){A.save(),X(C.pts),A.clip(),A.fillStyle="#5ccc3f",A.fill();let V=bn(C.pts);for(let K=V[0];K<V[2];K+=8)A.fillStyle="rgba(255,255,255,0.10)",A.fillRect(O(K),$(V[1]),4*E,(V[3]-V[1])*E);A.restore(),X(C.pts),A.strokeStyle="#ffffff",A.lineWidth=2.2,A.stroke()}for(let C of s.features)if(C.kind==="playground"&&C.closed){X(C.pts),A.fillStyle="#7fcfb4",A.fill(),A.save(),X(C.pts),A.clip();let V=bn(C.pts);for(let K=0;K<260;K++)A.fillStyle=qt()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",A.fillRect(O(V[0]+qt()*(V[2]-V[0])),$(V[1]+qt()*(V[3]-V[1])),3,3);for(let K=0;K<(V[2]-V[0])*(V[3]-V[1])/400;K++)A.beginPath(),A.arc(O(V[0]+qt()*(V[2]-V[0])),$(V[1]+qt()*(V[3]-V[1])),1.6*E,0,7),A.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][K%3],A.fill();A.restore(),X(C.pts),A.strokeStyle="#ffffff",A.lineWidth=.8*E,A.stroke()}let It=C=>{let V=0;for(let K=0,yt=C.pts.length-1;K<C.pts.length;yt=K++)V+=(C.pts[yt][0]+C.pts[K][0])*(C.pts[yt][1]-C.pts[K][1]);return Math.abs(V/2)};for(let C of s.features)if(C.kind==="track"&&C.closed&&It(C)>5e3){A.save(),X(C.pts),A.clip(),A.fillStyle="#e2523a",A.fill();let V=9*E,K=No(C.pts),yt=bn(C.pts),Pt=yt[2]-yt[0],Ut=yt[3]-yt[1],Et=ee=>C.pts.map(ie=>[K[0]+(ie[0]-K[0])*ee,K[1]+(ie[1]-K[1])*ee]),Zt=1-2*9/Math.min(Pt,Ut);for(let ee=1;ee<=5;ee++)X(Et(1-(1-Zt)*(ee/6))),A.strokeStyle="rgba(255,255,255,0.9)",A.lineWidth=1.6,A.stroke();X(Et(Zt)),A.fillStyle="#5ccc3f",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=3,A.stroke(),A.restore(),X(C.pts),A.strokeStyle="#ffffff",A.lineWidth=3,A.stroke()}for(let C of s.features)if(C.kind==="track"&&C.closed&&It(C)<=5e3){let V=C.tags?.surface==="sand";if(!C.tags?.surface)continue;X(C.pts),A.fillStyle=V?"#f2d58f":"#e2523a",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=1.5,A.stroke()}for(let C of s.features)if(C.kind==="tennis"&&C.closed){X(C.pts),A.fillStyle="#3f9fd1",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=2.5,A.stroke();let V=No(C.pts),K=bn(C.pts);A.save(),X(C.pts),A.clip(),A.strokeStyle="rgba(255,255,255,0.9)",A.lineWidth=1.5,A.beginPath(),A.moveTo(O(V[0]),$(K[1])),A.lineTo(O(V[0]),$(K[3])),A.stroke(),A.restore()}for(let C of s.features)C.kind==="water"&&C.closed&&(X(C.pts),A.strokeStyle="#f4efe0",A.lineWidth=3.4*E,A.lineJoin="round",A.stroke(),A.fillStyle="#2f8fe0",A.fill());for(let C of s.features)C.kind==="path"&&(X(C.pts,!1),A.lineCap="round",A.lineJoin="round",A.strokeStyle="#c9ad78",A.lineWidth=3.6*E,A.stroke());for(let C of s.features)C.kind==="path"&&(X(C.pts,!1),A.strokeStyle="#ecd8a6",A.lineWidth=2.6*E,A.stroke());let wt=C=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[C.tags?.highway]||7;for(let C of s.features)C.kind==="road"&&(X(C.pts,C.closed),A.lineCap="round",A.lineJoin="round",A.strokeStyle="#ece6d6",A.lineWidth=(wt(C)+4)*E,A.stroke());for(let C of s.features)C.kind==="road"&&(X(C.pts,C.closed),A.strokeStyle="#7f8597",A.lineWidth=wt(C)*E,A.stroke());for(let C of s.features)C.kind==="road"&&wt(C)>=11&&(X(C.pts,!1),A.setLineDash([5*E,5*E]),A.strokeStyle="#f4f1e6",A.lineWidth=.5*E,A.stroke(),A.setLineDash([]));for(let C of s.features)C.kind==="rail"&&(X(C.pts,!1),A.strokeStyle="#9b8f84",A.lineWidth=5*E,A.stroke());for(let C of s.features)C.kind==="rail"&&(X(C.pts,!1),A.setLineDash([1,2]),A.strokeStyle="#5b4f46",A.lineWidth=3*E,A.stroke(),A.setLineDash([]),X(C.pts,!1),A.strokeStyle="#c9ccd6",A.lineWidth=.8,A.stroke());for(let C of s.features)C.kind==="building"&&C.closed&&(X(C.pts),A.fillStyle="#9c968a",A.fill());for(let C in t.diversions)for(let V of t.diversions[C])A.beginPath(),V.path.forEach((K,yt)=>yt?A.lineTo(O(K[0]),$(K[1])):A.moveTo(O(K[0]),$(K[1]))),A.lineCap="round",A.lineJoin="round",A.strokeStyle="rgba(196,160,96,0.85)",A.lineWidth=4*E,A.stroke(),A.setLineDash([2*E,3*E]),A.strokeStyle="rgba(255,240,200,0.8)",A.lineWidth=.6*E,A.stroke(),A.setLineDash([])}{let A=c.nx*c.nz,P=new Float32Array(A*3),Y=new Float32Array(A*2);for(let K=0;K<c.nz;K++)for(let yt=0;yt<c.nx;yt++){let Pt=K*c.nx+yt;P[Pt*3]=c.x0+yt*c.cell,P[Pt*3+1]=c.h[Pt],P[Pt*3+2]=c.z0+K*c.cell,Y[Pt*2]=yt/(c.nx-1),Y[Pt*2+1]=1-K/(c.nz-1)}let O=new Uint32Array((c.nx-1)*(c.nz-1)*6),$=0;for(let K=0;K<c.nz-1;K++)for(let yt=0;yt<c.nx-1;yt++){let Pt=K*c.nx+yt,Ut=Pt+1,Et=Pt+c.nx,Zt=Et+1;O[$++]=Pt,O[$++]=Et,O[$++]=Ut,O[$++]=Ut,O[$++]=Et,O[$++]=Zt}let X=new we;X.setAttribute("position",new Ie(P,3)),X.setAttribute("uv",new Ie(Y,2)),X.setIndex(new Ie(O,1)),X.computeVertexNormals();let at=dt(16777215,{map:R}),It=qe(256,256,(K,yt,Pt)=>{K.fillStyle="#808080",K.fillRect(0,0,yt,Pt);for(let Ut=0;Ut<1800;Ut++){let Et=100+Math.floor(qt()*70);K.fillStyle=`rgb(${Et},${Et},${Et})`;let Zt=qt()*yt,ee=qt()*Pt;K.fillRect(Zt,ee,2,3+qt()*5)}for(let Ut=0;Ut<500;Ut++)K.fillStyle="rgba(255,255,255,0.18)",K.fillRect(qt()*yt,qt()*Pt,2,2)},{repeat:!0,srgb:!1});o.push(It),at.onBeforeCompile=K=>{K.uniforms.uDetail={value:It},K.vertexShader=K.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),K.fragmentShader=K.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},at.customProgramCacheKey=()=>"terrain-detail";let wt=he(X,at,{cast:!1});wt.name="terrain",l(wt);let C=new Te(new bo(700,5200,48,1),dt(13227680));C.rotation.x=-Math.PI/2,C.position.set(c.x0+h/2,-2,c.z0+p/2),C.receiveShadow=!1,l(C);let V=new Te(new Qe(h+1800,p+1800),dt(13686197));V.rotation.x=-Math.PI/2,V.position.set(c.x0+h/2,-3,c.z0+p/2),l(V)}let x=qe(256,256,(A,P,Y)=>{A.fillStyle="#7f8fb0",A.fillRect(0,0,P,Y);for(let O=0;O<1600;O++)A.fillStyle=qt()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",A.fillRect(qt()*P,qt()*Y,2,2);A.fillStyle="#6b7a9b",A.fillRect(0,0,P*.035,Y),A.fillRect(P*.965,0,P*.035,Y),A.fillStyle="#ffffff",A.fillRect(P*.06,0,P*.045,Y),A.fillRect(P*.895,0,P*.045,Y),A.fillStyle="rgba(255,255,255,0.35)",A.fillRect(P*.49,0,P*.02,Y*.5)},{repeat:!0});o.push(x);{let A=[];for(let X of t.ribbons)A.push(b(X));let P=ke(A),Y=he(P,dt(16777215,{map:x}),{cast:!1});Y.name="path",l(Y);let O=ke(t.ribbons.map(X=>b(X,!0))),$=he(O,dt(5924226),{cast:!1});l($)}function b(A,P=!1){let Y=[];for(let C=A.from;C<=A.to+.01;C+=2)Y.push(t.baseXZ(C));let O=[],$=[],X=[],at=0;for(let C=0;C<Y.length;C++){let V=Y[Math.max(0,C-1)],K=Y[Math.min(Y.length-1,C+1)],yt=K[0]-V[0],Pt=K[1]-V[1],Ut=Math.hypot(yt,Pt)||1;yt/=Ut,Pt/=Ut;let Et=-Pt,Zt=yt,ee=Pe/2,ie=[Y[C][0]-Et*ee,Y[C][1]-Zt*ee],se=[Y[C][0]+Et*ee,Y[C][1]+Zt*ee],_e=t.heightAt(Y[C][0],Y[C][1]),pe=Math.max(t.heightAt(ie[0],ie[1]),_e-.05)+Uo+A.lift,tn=Math.max(t.heightAt(se[0],se[1]),_e-.05)+Uo+A.lift;P?(O.push(ie[0]-Et*.15,pe-.45,ie[1]-Zt*.15,ie[0],pe,ie[1],se[0],tn,se[1],se[0]+Et*.15,tn-.45,se[1]+Zt*.15),$.push(0,0,0,1,0,1,0,0)):(O.push(ie[0],pe,ie[1],se[0],tn,se[1]),$.push(0,at/8,1,at/8)),C&&(at+=2)}let It=P?4:2;for(let C=0;C<Y.length-1;C++){let V=C*It,K=(C+1)*It;P?(X.push(V,K,V+1,V+1,K,K+1),X.push(V+2,K+2,V+3,V+3,K+2,K+3)):X.push(V,K,V+1,V+1,K,K+1)}let wt=new we;if(wt.setAttribute("position",new oe(O,3)),wt.setAttribute("uv",new oe($,2)),wt.setIndex(X),wt.computeVertexNormals(),wt.getAttribute("normal").getY(0)<0&&!P){let C=wt.index.array;for(let V=0;V<C.length;V+=3){let K=C[V+1];C[V+1]=C[V+2],C[V+2]=K}wt.computeVertexNormals()}return wt}let w={uTime:{value:0}},T=s.features.filter(A=>A.kind==="water"&&A.closed);for(let A of T){let P=(A._level??Math.min(...A.pts.map(at=>t.heightAt(at[0],at[1]))))+.05,Y=new Ni(A.pts.map(at=>new Ft(at[0],-at[1]))),O=new So(Y,4);O.rotateX(-Math.PI/2),O.translate(0,P,0);let $=new cn({uniforms:{...w,...Ht.fog},vertexShader:`varying vec3 vW;
${ae.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${ae.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${ae.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${ae.fog_fragment}
        }`,fog:!0}),X=new Te(O,$);X.name="water",l(X),o.push($),A._waterLevel=P}let z=[];if(t.lake){let A=t.lake,P=bn(A.pts),Y=[16767291,16735581,5752831,16777215,16748497,8257418],O=new de(2,.7,3.6,2,.32),$=new de(1.2,.5,.8,2,.2);for(let X=0,at=0;X<9&&at<300;at++){let It=P[0]+qt()*(P[2]-P[0]),wt=P[1]+qt()*(P[3]-P[1]);if(rr(A.pts,It,wt)>-7)continue;let C=new ne,V=he(O,dt(Y[X%Y.length]),{ol:2.5});C.add(V);let K=he($,dt(16777215),{ol:2});K.position.y=.45,C.add(K);let yt=he(new ce(.42,12,8),dt(Y[(X+2)%Y.length]),{ol:2});yt.position.set(0,.9,.7),C.add(yt),C.position.set(It,(A._waterLevel??0)+.1,wt),C.rotation.y=qt()*6.28,l(C),z.push({g:C,ph:qt()*6.28,x:It,z:wt,a:C.rotation.y}),X++}}{let A=qe(128,128,(X,at,It)=>{X.fillStyle="#ffffff",X.fillRect(0,0,at,It),X.fillStyle="#ffffff",X.fillRect(0,0,14,14),X.fillStyle="#3b4a6b",X.fillRect(34,30,60,58),X.fillStyle="#9ec9ff",X.fillRect(38,34,52,50),X.fillStyle="#ffffff",X.fillRect(62,34,4,50),X.fillRect(38,56,52,4),X.fillStyle="rgba(0,0,0,0.08)",X.fillRect(0,118,at,10)},{repeat:!0});o.push(A);let P={generateTopUV:(X,at,It,wt,C)=>[new Ft(.02,.98),new Ft(.02,.98),new Ft(.02,.98)],generateSideWallUV:(X,at,It,wt,C,V)=>{let K=at[It*3],yt=at[It*3+1],Pt=at[It*3+2],Ut=at[wt*3],Et=at[wt*3+1],Zt=at[wt*3+2],ee=at[C*3+2],ie=at[V*3+2],se=(Math.abs(yt-Et)<Math.abs(K-Ut)?K:yt)/4.2,_e=(Math.abs(yt-Et)<Math.abs(K-Ut)?Ut:Et)/4.2;return[new Ft(se,Pt/3.2),new Ft(_e,Zt/3.2),new Ft(_e,ee/3.2),new Ft(se,ie/3.2)]}},Y=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],O=["#5d6488","#7a5d6c","#4f6b78"],$=[];for(let X of s.features){if(X.kind!=="building"||!X.closed||X.pts.length<4)continue;let at=No(X.pts);if(y(at[0],at[1]))continue;let It=parseFloat(X.tags?.["building:levels"])||(qt()<.7?3:4),wt=Math.min(30,It*3.1),C=new Ni(X.pts.map(ee=>new Ft(ee[0],-ee[1]))),V;try{V=new Mo(C,{depth:wt,bevelEnabled:!1,UVGenerator:P})}catch{continue}V.rotateX(-Math.PI/2);let K=Math.min(...X.pts.map(ee=>t.heightAt(ee[0],ee[1])))-1.5;V.translate(0,K,0);let yt=V.getAttribute("normal"),Pt=yt.count,Ut=new Float32Array(Pt*3),Et=new $t(Y[Math.floor(qt()*Y.length)]).convertSRGBToLinear(),Zt=new $t(O[Math.floor(qt()*O.length)]).convertSRGBToLinear();for(let ee=0;ee<Pt;ee++){let ie=yt.getY(ee)>.5?Zt:Et;Ut[ee*3]=ie.r,Ut[ee*3+1]=ie.g,Ut[ee*3+2]=ie.b}V.setAttribute("color",new Ie(Ut,3)),$.push(V.index?V.toNonIndexed():V)}if($.length){let X=ke($),at=he(X,dt(16777215,{map:A,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});at.name="buildings",l(at)}}let W=t.sample(t.finishM),D=t.sample(0),q={start:D,finish:W},Z=new ne;l(Z);function it(A,P,Y,O){let $=new ne,X=Pe/2+1.4,at=.85,It=qe(256,32,(Pt,Ut,Et)=>{for(let Zt=0;Zt<16;Zt++)Pt.fillStyle=Zt%2?Y:O,Pt.fillRect(Zt*Ut/16,0,Ut/16+1,Et)},{repeat:!1});o.push(It);let wt=new Oe(X,at,14,40,Math.PI);wt.scale(1,1.25,1);let C=he(wt,dt(16777215,{map:It}),{ol:3.5});$.add(C);let V=new te(at*1.4,at*1.6,.8,16);for(let Pt of[-1,1]){let Ut=he(V,dt(O),{ol:3});Ut.position.set(Pt*X,.3,0),$.add(Ut)}let K=Dn(1024,256,(Pt,Ut,Et)=>{Pt.fillStyle="#1b1b3a",Fe(Pt,0,0,Ut,Et,60),Pt.fill(),Pt.fillStyle=Y,Fe(Pt,12,12,Ut-24,Et-24,50),Pt.fill(),Ye(Pt,"MARKRUN",Ut/2,Et*.42,150,"#ffffff","#1b1b3a",.18),Ye(Pt,P,Ut/2,Et*.83,56,"#ffe14d","#1b1b3a",.2)},o),yt=he(new de(X*1.55,X*.4,.7,3,.25),[dt(O),dt(O),dt(O),dt(O),dt(16777215,{map:K}),dt(16777215,{map:K})],{ol:3.5});return yt.position.y=X*1.25+at*1.25+X*.2-.15,$.add(yt),$.position.set(A.x,A.y-.1,A.z),$.rotation.y=Math.atan2(-A.rz,A.rx),Z.add($),$}q.finishArch=it(W,"FINISH","#ff3d8b","#ffd23f"),it(D,"START","#2e9bff","#ffd23f");let xt=qe(256,64,(A,P,Y)=>{let $=P/16;for(let X=0;X<16;X++)for(let at=0;at<4;at++)A.fillStyle=(X+at)%2?"#111":"#fff",A.fillRect(X*$,at*$,$,$)});o.push(xt);function U(A,P,Y,O=.03){let $=new Qe(Pe,Y);$.rotateX(-Math.PI/2);let X=new Te($,dt(16777215,{map:P,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return X.position.set(A.x,A.y+O,A.z),X.rotation.y=Math.atan2(-A.rz,A.rx),X.receiveShadow=!0,l(X),X}U(W,xt,2.2,.05);let Lt=Dn(512,128,(A,P,Y)=>{A.fillStyle="#ffffff",A.fillRect(0,0,P,22),Ye(A,"START",P/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let A=t.sample(2.5);U(A,Lt,3,.05).rotation.y+=Math.PI}let J=new Ee;function G(A,P,Y,{ol:O=0,olRef:$,cast:X=!0,colors:at,chunk:It=0}={}){if(!Y.length)return null;if(It){let C=new Map;Y.forEach((K,yt)=>{let Pt=`${Math.floor(K.x/It)},${Math.floor(K.z/It)}`,Ut=C.get(Pt);Ut||C.set(Pt,Ut={l:[],c:[]}),Ut.l.push(K),at&&Ut.c.push(at[yt])});let V=null;for(let{l:K,c:yt}of C.values()){let Pt=G(A,P,K,{ol:O,olRef:$,cast:X,colors:at?yt:null});V=V||Pt}return V}let wt=new Ve(A,P,Y.length);return Y.forEach((C,V)=>{J.position.set(C.x,C.y,C.z),J.rotation.set(C.rx||0,C.ry||0,C.rz||0),J.scale.set(C.sx??C.s??1,C.sy??C.s??1,C.sz??C.s??1),J.updateMatrix(),wt.setMatrixAt(V,J.matrix),at&&wt.setColorAt(V,new $t(at[V]))}),wt.castShadow=X,wt.receiveShadow=!0,wt.computeBoundingSphere(),O&&Ln(wt,O,void 0,$),l(wt),wt}let j=[];{let A=Y=>{let O=t.rawExt(Y-12),$=t.rawExt(Y),X=t.rawExt(Y+12),at=Math.atan2($[1]-O[1],$[0]-O[0]),wt=Math.atan2(X[1]-$[1],X[0]-$[0])-at;for(;wt>Math.PI;)wt-=2*Math.PI;for(;wt<-Math.PI;)wt+=2*Math.PI;return wt},P=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[Y,O]of P){let $=null;for(let X=Y;X<O;X+=4){let at=A(X);Math.abs(at)>.45?(!$||Math.abs(at)>Math.abs($.d))&&($={m:X,d:at}):$&&(j.some(It=>Math.abs(It.m-$.m)<50)||j.push($),$=null)}}}let ot=[],st=[],pt=[],et=[];for(let A of j){let P=A.d>0;for(let Y=-2;Y<=2;Y++){let O=t.sample(A.m+Y*5),$=P?-1:1,X=Pe/2+1.6,at=O.x+O.rx*X*$,It=O.z+O.rz*X*$;m(at,It,.3),(P?st:ot).push({x:at,y:t.heightAt(at,It),z:It,ry:Math.atan2(-O.tz,O.tx)+($>0?Math.PI:0)})}for(let Y=-3;Y<=3;Y++){let O=t.sample(A.m+Y*3.5),$=P?1:-1,X=Pe/2+.7;pt.push({x:O.x+O.rx*X*$,y:t.heightAt(O.x+O.rx*X*$,O.z+O.rz*X*$),z:O.z+O.rz*X*$,ry:qt()*6});for(let at=0;at<2;at++){let It=t.sample(A.m+Y*3.5+at*1.75),wt=Pe/2+.1;et.push({x:It.x+It.rx*wt*$,y:It.y-.05,z:It.z+It.rz*wt*$,ry:Math.atan2(It.tx,It.tz),red:(Y*2+at)%2===0})}}}q.corners=j;{let A=qe(256,96,(wt,C,V)=>{wt.fillStyle="#2f6fe0",wt.fillRect(0,0,C,V),wt.fillStyle="#ffffff";for(let K=0;K<4;K++){let yt=18+K*60;wt.beginPath(),wt.moveTo(yt,12),wt.lineTo(yt+26,12),wt.lineTo(yt+54,V/2),wt.lineTo(yt+26,V-12),wt.lineTo(yt,V-12),wt.lineTo(yt+28,V/2),wt.closePath(),wt.fill()}wt.strokeStyle="#1b3f8f",wt.lineWidth=8,wt.strokeRect(0,0,C,V)}),P=A.clone();P.repeat.x=-1,P.offset.x=1,P.wrapS=Li,P.needsUpdate=!0,o.push(A,P);let O=(wt=>{let C=new me(3.2,1.2,.12);C.rotateX(-.32),C.translate(0,.62,.22);let V=new me(3.2,1.2,.12);return V.rotateX(.32),V.translate(0,.62,-.22),V.rotateY(Math.PI),ke([C,V])})();oc(O),G(O,dt(16777215,{map:A}),st,{ol:2.5}),G(O,dt(16777215,{map:P}),ot,{ol:2.5});let $=qe(16,64,(wt,C,V)=>{for(let K=0;K<4;K++)wt.fillStyle=K%2?"#ffffff":"#ff6a2b",wt.fillRect(0,K*V/4,C,V/4)});o.push($);let X=new te(.06,.32,.9,12,1);X.translate(0,.5,0);let at=new me(.8,.08,.8);at.translate(0,.04,0),G(X,dt(16777215,{map:$}),pt,{ol:2}),G(at,dt(16738859),pt,{ol:1.5});let It=new me(.5,.22,1.75);It.translate(0,.11,0),G(It,dt(16777215),et.map(wt=>wt),{ol:1.5,colors:et.map(wt=>wt.red?15216959:16777215)})}let rt=new ne;l(rt);function mt(A,P,Y,O,$,{postH:X=1.6,face:at=0,scale:It=1}={}){let wt=Dn(512,Math.round(512*O/Y),$,o),C=new ne,V=he(new de(Y,O,.25,2,.08),[dt(5978660),dt(5978660),dt(5978660),dt(5978660),dt(16777215,{map:wt}),dt(16777215,{map:wt})],{ol:3});V.position.y=X+O/2,C.add(V);let K=new me(.25,X+O*.5,.25);for(let Et of[-1,1]){let Zt=he(K,dt(9067062),{ol:2});Zt.position.set(Et*Y*.35,(X+O*.5)/2,-.1),C.add(Zt)}let yt=Pe/2+2.2+Y*.15,Pt=A.x+A.rx*yt*P,Ut=A.z+A.rz*yt*P;return C.position.set(Pt,t.heightAt(Pt,Ut)-.1,Ut),C.rotation.y=Math.atan2(-A.tx,-A.tz)+P*.5+at,C.scale.setScalar(It),rt.add(C),C}let Q=1720,gt=t.sample(Q-10);q.hillSign=mt(gt,1,6,3.2,(A,P,Y)=>{A.fillStyle="#ffd23f",Fe(A,0,0,P,Y,40),A.fill(),A.lineWidth=16,A.strokeStyle="#1b1b3a",Fe(A,8,8,P-16,Y-16,34),A.stroke(),A.fillStyle="#3aa845",A.beginPath(),A.moveTo(40,Y-40),A.lineTo(150,70),A.lineTo(260,Y-40),A.closePath(),A.fill(),A.strokeStyle="#1b1b3a",A.lineWidth=8,A.stroke(),A.fillStyle="#fff",A.beginPath(),A.moveTo(118,118),A.lineTo(150,70),A.lineTo(182,118),A.closePath(),A.fill(),Ye(A,"THE",380,Y*.3,72,"#ffffff","#1b1b3a",.2),Ye(A,"HILL",370,Y*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),q.hillM=Q;for(let A of[1,2,3,4]){let P=A*1e3,Y=t.sample(t.geoOf(P));mt(Y,-1,1.6,1.3,(O,$,X)=>{O.fillStyle="#ffffff",Fe(O,0,0,$,X,50),O.fill(),O.fillStyle="#ff3d8b",Fe(O,20,20,$-40,X-40,36),O.fill(),Ye(O,`${A}K`,$/2,X/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let H=t.sample(2475);q.lapBoard=mt(H,1,4.4,2.6,(A,P,Y)=>{A.fillStyle="#1b1b3a",Fe(A,0,0,P,Y,40),A.fill(),A.fillStyle="#2e9bff",Fe(A,14,14,P-28,Y-28,30),A.fill(),Ye(A,"LAP",P/2,Y*.28,90,"#ffffff","#1b1b3a",.18),Ye(A,"2 OF 2",P/2,Y*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),q.lapM=2500;let Ot=[],Tt=[],vt=[],Nt=[];function nt(A,P,Y,O=3.2,$=12){let X=null;for(let at=A;at<=P;at+=$){let It=t.sample(at),wt=Pe/2+1,C=It.x+It.rx*wt*Y,V=It.z+It.rz*wt*Y,K=t.heightAt(C,V);Tt.push({x:C,y:K,z:V});let yt=new k(C,K+O,V);if(X){let Pt=[];for(let Ut=0;Ut<=12;Ut++){let Et=Ut/12,Zt=X.clone().lerp(yt,Et);Zt.y-=Math.sin(Et*Math.PI)*.6,Pt.push(Zt)}vt.push(Pt);for(let Ut=1;Ut<12;Ut++){let Et=Pt[Ut],Zt=Pt[Ut+1].clone().sub(Pt[Ut-1]);Ot.push({x:Et.x,y:Et.y,z:Et.z,ry:Math.atan2(-Zt.z,Zt.x)})}}X=yt}}function zt(A,P,Y,O=Pe/2+2.2){for(let $=A;$<=P;$+=2.4){let X=t.sample($),at=X.x+X.rx*O*Y,It=X.z+X.rz*O*Y;Nt.push({x:at,y:t.heightAt(at,It),z:It,ry:Math.atan2(X.tx,X.tz)})}}let N=t.finishM;nt(N-70,N+10,1),nt(N-70,N+10,-1),nt(-6,50,1),nt(-6,50,-1),zt(N-60,N+14,1),zt(N-60,N+14,-1),zt(-4,40,1),zt(-4,40,-1);{let A=new we;A.setAttribute("position",new oe([-.3,0,0,.3,0,0,0,-.62,0],3)),A.setAttribute("normal",new oe([0,0,1,0,0,1,0,0,1],3));let P=Ot.map((C,V)=>[16727435,16765503,3054591,4054148,16747069,16777215][V%6]);G(A,dt(16777215,{side:Be}),Ot,{colors:P,cast:!1});let Y=new te(.07,.09,3.3,6);Y.translate(0,1.65,0),G(Y,dt(16777215),Tt,{ol:1.5});let O=new we().setFromPoints(vt.flatMap(C=>C.slice(0,-1).flatMap((V,K)=>[V,C[K+1]]))),$=new xs(O,new Ui({color:3355443}));l($),o.push(O);let X=[];for(let C=0;C<4;C++){let V=new me(.16,1,.06);V.translate(-.9+C*.6,.5,0),X.push(V)}let at=new me(2.4,.12,.05);at.translate(0,.65,.05),X.push(at);let It=at.clone();It.translate(0,-.35,0),X.push(It);let wt=ke(X);wt.rotateY(Math.PI/2),G(wt,dt(16777215),Nt,{ol:1.8})}let L=[],ut=(A,P,Y,O,$,X=1.35)=>L.push({m0:A,m1:P,side:Y,off:Pe/2+3,depth:O,density:$,spacing:X});ut(N-58,N+12,1,6,1),ut(N-58,N+12,-1,6,1),ut(-2,38,1,5,.9),ut(-2,38,-1,5,.9),ut(1940,2010,1,4,.7),ut(1960,2010,-1,3,.6),ut(Q-10,Q+40,-1,3,.55),ut(2440,2490,-1,3,.7),ut(Q-70,Q+10,1,3,.5),ut(Q-70,Q-20,-1,3,.45),ut(2080,2160,1,4,.75),ut(2080,2160,-1,4,.75),ut(800,860,1,3,.6),ut(1250,1310,-1,3,.6),q.crowdZones=L;{let A=s.pois.filter(O=>O.kind==="bench"&&y(O.pos[0],O.pos[1])&&m(O.pos[0],O.pos[1],1)).map(O=>({x:O.pos[0],y:t.heightAt(O.pos[0],O.pos[1]),z:O.pos[1],ry:qt()*6})),P=ke([new me(1.8,.12,.5).translate(0,.5,0),new me(1.8,.4,.1).translate(0,.8,-.22),new me(.1,.5,.45).translate(-.8,.25,0),new me(.1,.5,.45).translate(.8,.25,0)]);G(P,dt(11892031),A,{ol:1.5});let Y=s.pois.filter(O=>O.kind==="cafe"&&y(O.pos[0],O.pos[1])&&m(O.pos[0],O.pos[1],4));for(let O of Y){let $=new ne;$.add(he(new de(5,3,4,2,.2),dt(16774108),{ol:2.5})).position.y=1.5;let X=qe(128,16,(wt,C,V)=>{for(let K=0;K<8;K++)wt.fillStyle=K%2?"#fff":"#ff4f6d",wt.fillRect(K*16,0,16,V)});o.push(X);let at=he(new me(5.6,.2,2),dt(16777215,{map:X}),{ol:2});at.position.set(0,2.9,2.3),at.rotation.x=.35,$.add(at);let It=he(new Ne(4,1.6,4),dt(3054591),{ol:2.5});It.position.y=3.8,It.rotation.y=Math.PI/4,$.add(It),$.position.set(O.pos[0],t.heightAt(O.pos[0],O.pos[1]),O.pos[1]),$.rotation.y=qt()*6,l($),v(O.pos[0],O.pos[1],5)}}for(let A of L)for(let P=A.m0-8;P<=A.m1+8;P+=4){let Y=t.sample(P),O=A.off+A.depth/2;v(Y.x+Y.rx*O*A.side,Y.z+Y.rz*O*A.side,A.depth/2+3)}for(let A of[D,W])v(A.x,A.z,14);if(r&&n.funfair){let A=Object.values(t.diversions)[0]?.[0];if(A)for(let P of A.path){let Y=Rt(P[0],P[1]),O=(P[0]+Y[0])/2,$=(P[1]+Y[1])/2;v(O,$,Math.max(6,Math.hypot(P[0]-Y[0],P[1]-Y[1])/2-3))}}function Rt(A,P){let Y=null,O=1e9;for(let $ of u){let X=($[0]-A)**2+($[1]-P)**2;X<O&&(O=X,Y=$)}return Y}q.nearestOnRibbon=Rt,q.ribbonSamples=u;let Dt=new Map;for(let A of u){let P=`${Math.floor(A[0]/10)},${Math.floor(A[1]/10)}`,Y=Dt.get(P);Y||Dt.set(P,Y=[]),Y.push(A)}let tt=(A,P,Y=1)=>{let O=Math.floor(A/10),$=Math.floor(P/10),X=(Pe/2+Y)**2;for(let at=-1;at<=1;at++)for(let It=-1;It<=1;It++)for(let wt of Dt.get(`${O+at},${$+It}`)||[])if((wt[0]-A)**2+(wt[1]-P)**2<X)return!0;return!1};q.reserve=v,q.clearOf=m;let ct=[],lt=(A,P,Y,O)=>!m(A,P,2.5*O)||I(A,P,1.5)?!1:(ct.push({x:A,z:P,kind:Y,s:O}),v(A,P,2.2*O),!0);for(let A of s.pois)A.kind==="tree"&&lt(A.pos[0],A.pos[1],0,.85+qt()*.35);for(let A of s.features)if(A.kind==="wood"&&A.closed){let P=bn(A.pts),Y=(P[2]-P[0])*(P[3]-P[1]);for(let O=0;O<Y/90;O++){let $=P[0]+qt()*(P[2]-P[0]),X=P[1]+qt()*(P[3]-P[1]);bs(A.pts,$,X)&&lt($,X,1,.9+qt()*.5)}}{let A=bn(S);for(let P=0;P<2600;P++){let Y=A[0]+qt()*(A[2]-A[0]),O=A[1]+qt()*(A[3]-A[1]);!y(Y,O)||-rr(S,Y,O)>45&&qt()<.75||lt(Y,O,qt()<.7?1:2,.8+qt()*.5)}for(let P of s.features)if(P.kind==="road"&&!P.closed)for(let Y=1;Y<P.pts.length;Y++){let O=P.pts[Y-1],$=P.pts[Y],X=Math.hypot($[0]-O[0],$[1]-O[1]);for(let at=0;at<X;at+=22){let It=at/X,wt=O[0]+($[0]-O[0])*It,C=O[1]+($[1]-O[1])*It,V=-($[1]-O[1])/X,K=($[0]-O[0])/X,yt=8+qt()*2;qt()<.5&&lt(wt+V*yt,C+K*yt,0,.6+qt()*.2)}}}{let A=[3978315,5031250,3121226,6539594,8376650,3450963],P=new te(.32,.5,4.2,7);P.translate(0,2.1,0);let Y=new Ge(3.2,1);Y.scale(1,1.08,1),Y.translate(0,6.6,0);let O=ke([new Ge(3,1).translate(0,6.2,0),new Ge(2.3,0).translate(1.9,5.3,.6),new Ge(2.2,0).translate(-1.7,5.5,-.8),new Ge(2,0).translate(.2,8.2,.3)].map(wt=>wt.toNonIndexed())),$=ke([new Ne(3,4.2,8).translate(0,5,0),new Ne(2.4,3.6,8).translate(0,7.2,0),new Ne(1.6,3,8).translate(0,9.2,0)].map(wt=>wt.index?wt.toNonIndexed():wt)),X=ct.map(wt=>({x:wt.x,y:t.heightAt(wt.x,wt.z)-.2,z:wt.z,ry:qt()*6.28,s:wt.s}));G(P,dt(9067062),X,{ol:2,olRef:40,chunk:160});let at=dt(16777215,{flatShading:!0});[Y,O,$].forEach((wt,C)=>{let V=X.filter((K,yt)=>ct[yt].kind===C);G(wt,at,V,{ol:2.2,olRef:40,colors:V.map(()=>A[Math.floor(qt()*A.length)]),chunk:160})}),q.treeCount=ct.length}{let A=ke([0,1,2,3].map(X=>{let at=new Ne(.09,.55,3);return at.translate(0,.27,0),at.rotateZ((X-1.5)*.25),at.rotateY(X*1.7),at.translate((X-1.5)*.08,0,X%2*.06),at.toNonIndexed()})),P=ke([new te(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new Ge(.13,0).translate(0,.38,0)]),Y=[],O=[],$=[];for(let X=0;X<9e3;X++){let at=u[Math.floor(qt()*u.length)],It=qt()*6.283,wt=Pe/2+1+qt()*22,C=at[0]+Math.cos(It)*wt,V=at[1]+Math.sin(It)*wt;if(!y(C,V)||I(C,V,.5)||!m(C,V,.2))continue;let K=t.heightAt(C,V)-.03;qt()<.62?Y.push({x:C,y:K,z:V,ry:qt()*6,s:.5+qt()*.6}):(O.push({x:C,y:K,z:V,ry:qt()*6,s:.35+qt()*.25}),$.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(qt()*6)]))}G(A,dt(5226296),Y,{cast:!1,chunk:120}),G(P,dt(16777215),O,{cast:!1,colors:$,chunk:120})}let _t=new cn({side:je,depthWrite:!1,fog:!1,uniforms:{top:{value:new $t(3116287)},mid:{value:new $t(9425919)},bot:{value:new $t(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),St=new Te(new ce(5e3,32,16),_t);St.renderOrder=-10,St.frustumCulled=!1,i.add(St),o.push(_t,St.geometry);let At=ke([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([A,P,Y,O])=>new Ge(O,2).translate(A,P,Y)));At.scale(1,.7,.8);let Ct=[c.x0+h/2,c.z0+p/2],kt=[];for(let A=0;A<26;A++){let P=qt()*6.28,Y=300+qt()*1300;kt.push({x:Ct[0]+Math.cos(P)*Y,y:170+qt()*120,z:Ct[1]+Math.sin(P)*Y,ry:qt()*6,s:.8+qt()*1.4})}let Gt=G(At,dt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),kt,{ol:1.5,olRef:300,cast:!1}),Vt=[];for(let A=0;A<18;A++){let P=A/18*6.28+qt()*.2,Y=1900+qt()*500;Vt.push({x:Ct[0]+Math.cos(P)*Y,y:-40,z:Ct[1]+Math.sin(P)*Y,sx:320+qt()*260,sy:80+qt()*90,sz:260+qt()*200,ry:qt()*6})}G(new ce(1,24,12),dt(7128954),Vt,{cast:!1,colors:Vt.map((A,P)=>[8047487,6273413,9425290][P%3])});function re(A){w.uTime.value=A;for(let P of z)P.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(A*1.7+P.ph)*.08,P.g.rotation.z=Math.sin(A*1.3+P.ph)*.06,P.g.rotation.y=P.a+Math.sin(A*.1+P.ph)*.4;Gt&&(Gt.position.x=Math.sin(A*.01)*40)}function Yt(){a.traverse(A=>{A.geometry&&A.geometry.dispose()});for(let A of o)A.dispose?.();i.remove(a),i.remove(St)}return{group:a,anchors:q,update:re,dispose:Yt,inPark:y,clearOf:m,reserve:v,blocked:I,groundTex:R,onPath:tt}}function No(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function Fe(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var sf=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],rf=[4054148,16727435,16765503,3054591,16777215];function cx(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new Ft(Math.max(.001,o),r))}i.unshift(new Ft(.001,0));let e=new tr(i,12);return e.computeVertexNormals(),e}function of(i,t){let e=un(99),n=t.length,s=new ne;if(i.add(s),!n)return{update(){},dispose(){i.remove(s)},group:s};let r=cx(),o=new ce(.15,8,5);o.scale(.8,1.15,.5);let a=new ce(.075,6,4);a.scale(.85,1.2,.5);let l=new ce(.13,6,5),c=new Ne(.14,.36,6);c.translate(0,.18,0);let h=new Ne(.26,.55,8);h.translate(0,.27,0);let p=new ce(.2,7,5),d=(D,q,Z,it)=>{let xt=new Ve(D,q,Z);return xt.castShadow=!0,xt.receiveShadow=!0,xt.userData.ol=it,s.add(xt),xt},f=d(r,dt(16777215),n,2.6),g=d(o,new vn({color:16777215}),n*2,0),v=d(a,new vn({color:1709088}),n*2,0),m=d(l,dt(16777215),n*2,2);g.castShadow=v.castShadow=!1;let u=[d(c,dt(16777215),n,2),d(h,dt(16777215),n,2),d(p,dt(16777215),n,2)],S=[0,0,0],y=new $t,M=t.map((D,q)=>{let Z=D.colour??sf[Math.floor(e()*sf.length)];f.setColorAt(q,y.set(Z)),m.setColorAt(q*2,y),m.setColorAt(q*2+1,y);let it=e()<.3?-1:Math.floor(e()*3),xt=-1;return it>=0&&(xt=S[it]++,u[it].setColorAt(xt,y.set(rf[Math.floor(e()*rf.length)]))),{...D,s:D.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:it,ti:xt,wave:e()<.5,ex:.3}});u.forEach((D,q)=>{D.count=S[q]});for(let D of[f,m,...u])D.instanceColor&&(D.instanceColor.needsUpdate=!0);let B=new ye,I=new Hn,E=new Cn,R=new k,_=new k,x=new ye,b=new ye;function w(D,q,Z){let it=M[D],xt=it.ex,U=q*it.sp*(.5+xt*.6)+it.ph,Lt=Math.max(0,Math.sin(U))*.32*xt,J=1-Math.cos(U*2)*.05*xt;E.set(0,it.yaw+Math.sin(q*.8+it.ph)*.25*(1-xt),Math.sin(U*.5)*.08*xt),I.setFromEuler(E),x.compose(R.set(it.x,it.y+Lt,it.z),I,_.set(it.s/Math.sqrt(J),it.s*J,it.s/Math.sqrt(J))),f.setMatrixAt(D,x);for(let G=0;G<2;G++){let j=G?.19:-.19;b.makeTranslation(j,.86,.5),B.multiplyMatrices(x,b),g.setMatrixAt(D*2+G,B),b.makeTranslation(j*1.02,.84+(xt>.6?.03:0),.565),B.multiplyMatrices(x,b),v.setMatrixAt(D*2+G,B);let ot=xt>.55?1:.15+.2*Math.max(0,Math.sin(U)),st=it.wave?Math.sin(U*1.5+G*3)*.25*xt:0,pt=(G?1:-1)*(.62+ot*.05+st*.3),et=.45+ot*.85+st;b.makeTranslation(pt,et,.12),B.multiplyMatrices(x,b),m.setMatrixAt(D*2+G,B)}it.tk>=0&&(b.makeTranslation(0,1.22,0),it.tk===0&&b.multiply(new ye().makeRotationZ(Math.sin(U)*.3)),B.multiplyMatrices(x,b),u[it.tk].setMatrixAt(it.ti,B))}for(let D=0;D<n;D++)w(D,0,!0);let T=()=>{for(let D of[f,g,v,m,...u])D.instanceMatrix.needsUpdate=!0};T();for(let D of[f,g,v,m,...u]){if(!D.count){D.visible=!1;continue}D.computeBoundingSphere(),D.boundingSphere.radius+=2,D.userData.ol&&Ln(D,D.userData.ol,void 0,18)}function z(D,q,Z=[],it=null){let xt=!1;for(let U=0;U<n;U++){let Lt=M[U];if(q&&(Lt.x-q.x)**2+(Lt.z-q.z)**2>260*260)continue;let J=.25;if(it!=null)J=it;else for(let G of Z){let j=(G.x-Lt.x)**2+(G.z-Lt.z)**2;j<45*45&&(J=Math.max(J,1-Math.sqrt(j)/70))}Lt.ex+=(J-Lt.ex)*.05,w(U,D),xt=!0}xt&&T()}function W(){for(let D of[r,o,a,l,c,h,p])D.dispose();for(let D of[f,g,v,m,...u])D.dispose();i.remove(s)}return{update:z,dispose:W,group:s,members:M}}function af(i,t,e=5,n=null,s=null){let r=un(e),o=[];for(let[a,l]of t.entries())for(let c=l.m0;c<=l.m1;c+=l.spacing??1.35){let h=i.sample(c),p=Math.max(1,Math.round(l.depth/1.25));for(let d=0;d<p;d++){if(r()>l.density)continue;let f=l.off+d*1.25+r()*.35,g=(r()-.5)*.6,v=h.x+h.rx*f*l.side+h.tx*g,m=h.z+h.rz*f*l.side+h.tz*g;n&&n(v,m,1.4)||s&&s(v,m,.6)||o.push({zone:a,x:v,y:i.heightAt(v,m),z:m,yaw:Math.atan2(-h.rx*l.side,-h.rz*l.side)+(r()-.5)*.5})}}return o}var lf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},cf=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],hx=3.2,cr=new Map,Wt=(i,t)=>(cr.has(i)||cr.set(i,t()),cr.get(i));function hf(){for(let i of cr.values())i.dispose();cr.clear()}function fx(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function ux(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,c=t*.058,h="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])i.beginPath(),i.ellipse(o+m*c*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let p=(m,u)=>{if(u==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=h,i.lineWidth=5,i.beginPath();let I=t*.03;i.moveTo(m,a+I*1.1),i.bezierCurveTo(m-I*2.2,a-I*.2,m-I*.9,a-I*1.9,m,a-I*.6),i.bezierCurveTo(m+I*.9,a-I*1.9,m+I*2.2,a-I*.2,m,a+I*1.1),i.fill(),i.stroke();return}if(u==="closed"||u==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),u==="happy"?i.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(m-t*.025,a),i.lineTo(m+t*.025,a)),i.stroke();return}if(u==="x"){i.strokeStyle=h,i.lineWidth=8,i.lineCap="round";let I=t*.02;i.beginPath(),i.moveTo(m-I,a-I),i.lineTo(m+I,a+I),i.moveTo(m+I,a-I),i.lineTo(m-I,a+I),i.stroke();return}if(u==="wink"&&m>o&&(u="happy"),u==="wink"&&(u="open"),u==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),i.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),i.stroke();return}let S=u==="wide"?1.3:1,y=t*.03*S,M=e*.085*S;i.fillStyle="#fff",i.strokeStyle=h,i.lineWidth=6,i.beginPath(),i.ellipse(m,a,y,M,0,0,7),i.fill(),i.stroke();let B=u==="wide"?.38:.55;i.fillStyle=h,i.beginPath(),i.ellipse(m+y*.15,a+M*.12,y*B,M*B*1.1,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(m+y*.35,a-M*.2,y*.22,0,7),i.fill(),u==="half"&&(i.fillStyle=n,i.fillRect(m-y-4,a-M-4,y*2+8,M*1.05),i.strokeStyle=h,i.lineWidth=7,i.beginPath(),i.moveTo(m-y-2,a-M*.1),i.lineTo(m+y+2,a-M*.1),i.stroke())},d={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(d="happy"),r==="love"&&(d="heart"),r==="dead"&&(d="x"),r==="effort"&&s!=="goofy"&&(d="open");for(let m of[-1,1])p(o+m*c,d);i.strokeStyle=h,i.lineWidth=10,i.lineCap="round";let f=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let m of[-1,1]){let u=o+m*c,S=a-e*.13,y=t*.026,M=u-m*y,B=u+m*y;i.beginPath(),i.moveTo(B,S-f*18),i.lineTo(M,S+f*18),i.stroke()}i.lineWidth=8,i.strokeStyle=h,i.fillStyle="#7a1e2e";let g=o,v=r||"normal";if(v==="happy"||v==="normal"&&s==="grin")i.beginPath(),i.moveTo(g-t*.04,l-e*.02),i.quadraticCurveTo(g,l+e*.12,g+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(v==="effort"){i.fillStyle="#fff",i.beginPath(),Fe(i,g-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.035,l),i.lineTo(g+t*.035,l);for(let m=-2;m<=2;m++)i.moveTo(g+m*t*.012,l-e*.03),i.lineTo(g+m*t*.012,l+e*.035);i.stroke()}else if(v==="sad"||v==="dead")i.beginPath(),i.moveTo(g-t*.03,l+e*.04),i.quadraticCurveTo(g,l-e*.04,g+t*.03,l+e*.04),i.stroke(),v==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(v==="love"||v==="pant")i.beginPath(),i.ellipse(g,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="gritted"){i.fillStyle="#fff",i.beginPath(),Fe(i,g-t*.04,l-e*.03,t*.08,e*.06,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.04,l),i.lineTo(g+t*.04,l);for(let m=-2;m<=2;m++)i.moveTo(g+m*t*.014,l-e*.03),i.lineTo(g+m*t*.014,l+e*.03);i.stroke()}else if(s==="tongue-out")i.beginPath(),i.moveTo(g-t*.035,l),i.quadraticCurveTo(g,l+e*.05,g+t*.035,l),i.stroke(),i.fillStyle="#ff6f8a",i.beginPath(),i.ellipse(g+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),i.fill(),i.stroke(),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3,i.beginPath(),i.moveTo(g+t*.008,l+e*.03),i.lineTo(g+t*.01,l+e*.08),i.stroke();else if(s==="wide-eyed")i.beginPath(),i.ellipse(g,l+e*.02,t*.016,e*.04,0,0,7),i.fill(),i.stroke();else if(s==="cheeky")i.beginPath(),i.moveTo(g-t*.04,l-e*.01),i.quadraticCurveTo(g,l+e*.08,g+t*.045,l-e*.035),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.quadraticCurveTo(g+t*.01,l+e*.05,g+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(g-t*.03,l+e*.02);for(let m=0;m<=6;m++)i.lineTo(g-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(g-t*.04,l),i.quadraticCurveTo(g,l+e*.09,g+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.lineTo(g+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(g-t*.035,l-e*.01),i.quadraticCurveTo(g,l+e*.07,g+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function dx(i,t){return qe(256,200,(e,n,s)=>{e.fillStyle="#ffffff",Fe(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${ac}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),Ye(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function px(i){return qe(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")Ye(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function ff(i,t={}){let e=i.look||{},n=lf[e.build]||lf.compact,s=fx(i.id+(i.nickname||"")),r=un(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",c=cf[s%cf.length],h=[],p=dt(o),d=dt(a),f=dt(l),g=dt(c),v=new $t(a).getHSL({}).l>.85?"#ffffff":a,m=dt(v),u=dt("#ffffff"),S=dt("#22202c"),y=(tt,ct,lt=hx)=>he(tt,ct,{ol:lt,olRef:9}),M=new ne;M.name=`runner-${i.id}`;let B=new ne;M.add(B);let I=new ne;B.add(I);let E=n.leg/2,R=n.leg+n.shoe[1]*.75;I.position.y=R;let _=y(Wt(`shorts${e.build}`,()=>new de(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),d);_.position.y=.02,I.add(_);let x=new ne;x.position.y=.12,I.add(x);let b=y(Wt(`torso${e.build}`,()=>new de(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),p);b.position.y=n.torso[1]/2,x.add(b);for(let tt of[-1,1]){let ct=he(Wt(`stripe${e.build}`,()=>new me(.06,n.torso[1]*.8,n.torso[2]*.7)),dt(a),{cast:!1});ct.position.set(tt*n.torso[0]*.5,n.torso[1]*.5,0),x.add(ct)}let w=dx(i.lane??0,o);h.push(w);let T=new Te(Wt("bib",()=>new Qe(1,.78)),dt(16777215,{map:w})),z=Math.min(.42,n.torso[0]*.6);T.scale.setScalar(z),T.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),x.add(T);let W=new ne;W.position.y=n.torso[1]+.02,x.add(W);let D=new ne;W.add(D);let q=document.createElement("canvas");q.width=1024,q.height=512;let Z=new ys(q);Z.colorSpace=Je,Z.anisotropy=4,h.push(Z);let it=null,xt=tt=>{tt!==it&&(it=tt,ux(q.getContext("2d"),1024,512,l,e.face||"grin",tt),Z.needsUpdate=!0)};xt("normal");let U=n.head,Lt=y(Wt(`head${U}`,()=>new ce(U,32,20).scale(1,.98,.96)),dt(16777215,{map:Z}));Lt.position.y=U*.92,D.add(Lt);for(let tt of[-1,1]){let ct=y(Wt(`ear${U}`,()=>new ce(U*.2,10,8).scale(.6,1,.8)),f,2.5);ct.position.set(tt*U*.97,U*.9,0),D.add(ct)}let J=y(Wt(`nose${U}`,()=>new ce(U*.14,10,8)),f,2);J.position.set(0,U*.84,U*.97),D.add(J),gt(e.hair,e.hat),H(e.hat);let G=[];for(let tt of[-1,1]){let ct=new ne;ct.position.set(tt*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),x.add(ct);let lt=y(Wt(`sleeve${e.build}`,()=>new ce(n.armR*1.65,14,10)),p);ct.add(lt);let _t=y(Wt(`uarm${e.build}`,()=>new In(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),f);ct.add(_t);let St=new ne;St.position.y=-n.arm/2+n.armR*.4,ct.add(St);let At=y(Wt(`farm${e.build}`,()=>new In(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),f);St.add(At);let Ct=y(Wt(`hand${e.build}`,()=>new ce(n.hand,14,10).scale(1,1.1,.9)),f);Ct.position.y=-n.arm/2-n.hand*.4,St.add(Ct),G.push({sh:ct,el:St,hand:Ct})}let j=[];for(let tt of[-1,1]){let ct=new ne;ct.position.set(tt*n.torso[0]*.24,0,0),I.add(ct);let lt=y(Wt(`thigh${e.build}`,()=>new In(n.legR*1.15,E-n.legR,4,10).translate(0,-E/2,0)),f);ct.add(lt);let _t=y(Wt(`sleg${e.build}`,()=>new te(n.legR*1.6,n.legR*1.5,E*.5,12).translate(0,-E*.2,0)),d);ct.add(_t);let St=new ne;St.position.y=-E,ct.add(St);let At=y(Wt(`shin${e.build}`,()=>new In(n.legR,E-n.legR,4,10).translate(0,-E/2,0)),f);St.add(At);let Ct=y(Wt(`sock${e.build}`,()=>new te(n.legR*1.12,n.legR*1.12,E*.25,10).translate(0,-E*.86,0)),dt(16777215),2.5);St.add(Ct);let kt=new ne;kt.position.y=-E,St.add(kt);let Gt=y(Wt(`shoe${e.build}`,()=>new de(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),m);kt.add(Gt);let Vt=he(Wt(`sole${e.build}`,()=>new de(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),u,{ol:2.5,olRef:9});kt.add(Vt);let re=he(Wt(`swoosh${e.build}`,()=>new me(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),dt(o),{cast:!1});kt.add(re),j.push({hp:ct,kn:St,an:kt})}Ot(e.accessory);let ot=new ne;ot.visible=!1;{let tt=he(Wt("flossStick",()=>new te(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),dt("#e8d0a0"),{cast:!1}),ct=he(Wt("flossFluff",()=>{let lt=un(5);return ke(Array.from({length:7},()=>new Ge(.16+lt()*.06,1).translate((lt()-.5)*.22,(lt()-.5)*.22,.72+(lt()-.5)*.2)))}),dt("#ff9bd2"),{ol:2.5,olRef:9});ot.add(tt,ct),ot.userData.fluff=ct,ot.position.y=-n.arm/2-n.hand*.4,G[0].el.add(ot)}function st(tt,ct){tt==="floss"&&(ot.visible=ct>0,ct>0&&ot.userData.fluff.scale.setScalar(Math.max(.15,ct)))}let pt={},et=new fo(new $s({transparent:!0,depthTest:!1}));et.scale.setScalar(.9),et.visible=!1,et.renderOrder=20,M.add(et);let rt=tt=>{if(!tt){et.visible=!1;return}pt[tt]||(pt[tt]=px(tt),h.push(pt[tt])),et.material.map=pt[tt],et.material.needsUpdate=!0,et.visible=!0},mt=R+.12+n.torso[1]+.02+U*2;et.position.y=mt+.45;let Q=new Set([b,_,Lt,...G.flatMap(tt=>[tt.hand]),...j.map(tt=>tt.an.children[0])]);for(let tt of G)tt.sh.children.forEach(ct=>ct.isMesh&&Q.add(ct));for(let tt of j)tt.hp.children.forEach(ct=>ct.isMesh&&Q.add(ct));M.traverse(tt=>{tt.isMesh&&!tt.userData.isOutline&&(tt.castShadow=Q.has(tt))});function gt(tt,ct){let lt=tt||"short";if(lt==="bald")return;let _t=(St=1.07,At=.48)=>{let Ct=y(Wt(`hcap${U}${St}${At}`,()=>new ce(U*St,24,14,0,Math.PI*2,0,Math.PI*At)),g);return Ct.position.y=U*.92,Ct.rotation.x=-.32,D.add(Ct),Ct};if(lt==="curly"||lt==="afro"){let St=Wt(`curly${U}`,()=>{let Ct=un(7),kt=[];for(let Gt=0;Gt<26;Gt++){let Vt=Ct()*Math.PI*.55,re=Ct()*Math.PI*2,Yt=new k(Math.sin(Vt)*Math.cos(re),Math.cos(Vt),Math.sin(Vt)*Math.sin(re)).multiplyScalar(U*1.02);Yt.z>U*.55&&Yt.y<U*.75||kt.push(new Ge(U*.33,1).translate(Yt.x,Yt.y,Yt.z-U*.08))}return ke(kt)}),At=y(St,g);At.position.y=U*.98,lt==="afro"&&(At.scale.setScalar(1.28),At.position.y=U*1.05),D.add(At);return}if(ct==="beanie"||ct==="bucket"||ct==="bobble"){if(_t(1.05,.5),lt==="mullet"||lt==="long"||lt==="ponytail"){let St=y(Wt(`mul${U}`,()=>new de(U*1.5,U*.9,U*.4,3,U*.15)),g);St.position.set(0,U*.35,-U*.78),D.add(St)}return}if(lt==="buzz"){let St=y(Wt(`buzz${U}`,()=>new ce(U*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),g,2);St.position.y=U*.92,St.rotation.x=-.32,D.add(St);return}if(_t(),lt==="quiff"||lt==="swept"){let St=y(Wt(`quiff${U}${lt}`,()=>new ce(U*.55,16,10).scale(lt==="quiff"?1.3:1.7,lt==="quiff"?.75:.45,1)),g);St.position.set(lt==="swept"?U*.25:0,U*1.82,U*.38),St.rotation.set(-.5,0,lt==="swept"?-.35:0),D.add(St)}if(lt==="mullet"){let St=y(Wt(`mul${U}`,()=>new de(U*1.5,U*.9,U*.4,3,U*.15)),g);St.position.set(0,U*.35,-U*.78),D.add(St)}if(lt==="long"){let St=y(Wt(`hlong${U}`,()=>new de(U*1.8,U*1.6,U*.5,3,U*.2)),g);St.position.set(0,U*.4,-U*.62),D.add(St)}if(lt==="ponytail"){let St=new ne;St.position.set(0,U*1.35,-U*.85),D.add(St);for(let At=0;At<3;At++){let Ct=y(Wt(`pt${U}${At}`,()=>new ce(U*(.32-At*.05),12,8)),g);Ct.position.set(0,-At*U*.32,-At*U*.18),St.add(Ct)}D.userData.pony=St}if(lt==="bun"){let St=y(Wt(`bun${U}`,()=>new ce(U*.38,14,10)),g);St.position.set(0,U*2,-U*.2),D.add(St)}if(lt==="mohawk"||lt==="spiky"){let St=lt==="mohawk"?5:9;for(let At=0;At<St;At++){let Ct=y(Wt(`spk${U}`,()=>new Ne(U*.2,U*.7,8)),g),kt=lt==="mohawk"?0:At/St*Math.PI*2,Gt=lt==="mohawk"?-.9+At/(St-1)*1.8:.6;Ct.position.set(Math.sin(kt)*Math.sin(Gt)*U,U*.92+Math.cos(Gt)*U*1.05,(lt==="mohawk"?Math.sin(Gt):Math.cos(kt)*Math.sin(Gt))*U),Ct.lookAt(Ct.position.clone().multiplyScalar(3)),Ct.rotateX(Math.PI/2),D.add(Ct)}}}function H(tt){if(!tt)return;let ct=dt(a==="#ffffff"||a==="#f8f8f8"?o:a),lt=dt(o);if(tt==="backwards-cap"){let _t=y(Wt(`capd${U}`,()=>new ce(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ct);_t.position.y=U*.98,_t.rotation.x=-.18,D.add(_t);let St=y(Wt(`brim${U}`,()=>new te(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),lt);St.position.set(0,U*1.42,-U*.62),St.rotation.set(-.12,Math.PI,0),D.add(St)}else if(tt==="bobble"){let _t=y(Wt(`bean${U}`,()=>new ce(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),lt);_t.position.y=U*.96,_t.rotation.x=-.12,D.add(_t);let St=y(Wt(`brim2${U}`,()=>new Oe(U*1.05,U*.17,8,24)),ct);St.rotation.x=Math.PI/2-.12,St.position.y=U*1.12,D.add(St);let At=y(Wt(`bigbob${U}`,()=>new Ge(U*.48,1)),ct);At.position.y=U*2.45,D.add(At),D.userData.bobble=At}else if(tt==="cap"||tt==="visor"){if(tt==="cap"){let St=y(Wt(`capd${U}`,()=>new ce(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ct);St.position.y=U*.98,St.rotation.x=-.18,D.add(St)}else{let St=y(Wt(`vband${U}`,()=>new Oe(U*1,U*.12,8,24)),ct);St.rotation.x=Math.PI/2-.25,St.position.y=U*1.35,D.add(St)}let _t=y(Wt(`brim${U}`,()=>new te(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),lt);_t.position.set(0,U*1.42,U*.62),_t.rotation.x=.12,D.add(_t)}else if(tt==="beanie"){let _t=y(Wt(`bean${U}`,()=>new ce(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ct);_t.position.y=U*.96,_t.rotation.x=-.12,D.add(_t);let St=y(Wt(`brim2${U}`,()=>new Oe(U*1.05,U*.17,8,24)),lt);St.rotation.x=Math.PI/2-.12,St.position.y=U*1.12,D.add(St);let At=y(Wt(`bob${U}`,()=>new Ge(U*.3,1)),lt);At.position.y=U*2.25,D.add(At)}else if(tt==="headband"||tt==="sweatband"){let _t=y(Wt(`hb${U}`,()=>new Oe(U*1,U*.13,8,28)),ct);_t.rotation.x=Math.PI/2-.2,_t.position.y=U*1.3,D.add(_t);let St=y(Wt(`hbt${U}`,()=>new de(U*.2,U*.5,U*.08,2,.02)),ct);St.position.set(.12,U*1.1,-U*1.05),St.rotation.z=.5,D.add(St),D.userData.tail=St}else if(tt==="bucket"){let _t=y(Wt(`buck${U}`,()=>new te(U*.8,U*1.02,U*.7,20)),ct);_t.position.y=U*1.75,D.add(_t);let St=y(Wt(`buckb${U}`,()=>new te(U*1.5,U*1.5,U*.06,24)),lt);St.position.y=U*1.42,St.rotation.x=.1,D.add(St)}else if(tt==="crown"||tt==="tiara"){let _t=y(Wt(`crown${U}`,()=>new te(U*.7,U*.62,U*.5,8,1,!0)),dt("#ffd23f",{side:Be}));_t.position.y=U*2,D.add(_t)}else if(tt==="wizard"||tt==="party"){let _t=y(Wt(`cone${U}`,()=>new Ne(U*.8,U*1.8,16)),ct);_t.position.y=U*2.3,_t.rotation.z=.15,D.add(_t);let St=y(Wt(`bob${U}`,()=>new Ge(U*.3,1)),lt);St.position.set(-U*.12,U*3.15,0),D.add(St)}else if(tt==="helmet"||tt==="bike_helmet"){let _t=y(Wt(`helm${U}`,()=>new ce(U*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),ct);_t.position.y=U*1,D.add(_t)}else if(tt==="santa"){let _t=y(Wt(`santa${U}`,()=>new Ne(U*.95,U*1.6,16)),dt("#e8313f"));_t.position.y=U*2.2,_t.rotation.z=.5,D.add(_t);let St=y(Wt(`santar${U}`,()=>new Oe(U*.95,U*.2,8,24)),dt("#ffffff"));St.rotation.x=Math.PI/2,St.position.y=U*1.45,D.add(St)}else{let _t=y(Wt(`cone${U}`,()=>new Ne(U*.8,U*1.8,16)),ct);_t.position.y=U*2.3,D.add(_t)}}function Ot(tt){if(tt){if(tt==="sunglasses"||tt==="glasses"){let ct=tt==="sunglasses";for(let _t of[-1,1]){let St=y(Wt(`lens${U}${ct}`,()=>new de(U*.5,U*.32,U*.08,2,U*.06)),ct?dt("#141420"):dt("#cfefff"),2);St.position.set(_t*U*.3,U*1.02,U*.98),St.rotation.y=_t*.28,D.add(St)}let lt=he(Wt(`bridge${U}`,()=>new me(U*.3,U*.06,U*.06)),dt("#141420"),{cast:!1});lt.position.set(0,U*1.06,U*1.04),D.add(lt)}else if(tt==="medal"){let ct=y(Wt("ribbon",()=>new Oe(.2,.03,6,20,Math.PI)),dt("#2e9bff"),2);ct.rotation.z=Math.PI,ct.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),ct.rotation.x=-.3,x.add(ct);let lt=y(Wt("medal",()=>new te(.11,.11,.04,16).rotateX(Math.PI/2)),dt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);lt.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),x.add(lt),T.position.y-=.1,T.position.x=.12,T.scale.multiplyScalar(.8)}else if(tt==="headphones"){let ct=y(Wt(`hp${U}`,()=>new Oe(U*1.08,U*.07,6,24,Math.PI)),dt("#22202c"),2);ct.position.y=U*.95,D.add(ct);for(let lt of[-1,1]){let _t=y(Wt(`hpc${U}`,()=>new te(U*.3,U*.3,U*.2,14).rotateZ(Math.PI/2)),dt(o),2.5);_t.position.set(lt*U*1.02,U*.92,0),D.add(_t)}}else if(tt==="sweatband"||tt==="wristbands"||tt==="watch")for(let ct of G){let lt=y(Wt(`wb${e.build}`,()=>new te(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),dt(tt==="watch"?"#22202c":a),2);if(ct.el.add(lt),tt==="watch")break}else if(tt==="scarf"){let ct=y(Wt("scarf",()=>new Oe(.22,.08,8,18)),dt(a));ct.rotation.x=Math.PI/2,ct.position.y=.02,W.add(ct);let lt=y(Wt("scarft",()=>new de(.14,.5,.06,2,.03)),dt(a));lt.position.set(.1,-.15,-.25),lt.rotation.x=.5,W.add(lt),D.userData.tail2=lt}else if(tt==="cape"){let ct=y(Wt(`cape${e.build}`,()=>new Qe(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),dt(a,{side:Be}),2),lt=new ne;lt.position.set(0,n.torso[1],-n.torso[2]/2-.03),lt.add(ct),x.add(lt),D.userData.cape=lt}else if(tt==="backpack"){let ct=y(Wt(`bp${e.build}`,()=>new de(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),dt(a));ct.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),x.add(ct)}else if(tt==="moustache"||tt==="mustache"){let ct=y(Wt(`mou${U}`,()=>new In(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),dt("#3a2616"),2);ct.position.set(0,U*.7,U*.98),D.add(ct)}else if(tt==="beard"){let ct=y(Wt(`beard${U}`,()=>new ce(U*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),g,2.5);ct.position.set(0,U*.78,U*.32),D.add(ct);let lt=y(Wt(`mou${U}`,()=>new In(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),g,2);lt.position.set(0,U*.7,U*.98),D.add(lt)}else if(tt==="bumbag"){let ct=y(Wt(`bum${e.build}`,()=>new de(n.torso[0]*.5,.2,.18,2,.07)),dt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));ct.position.set(n.torso[0]*.12,.08,n.torso[2]/2+.08),I.add(ct);let lt=he(Wt(`strap${e.build}`,()=>new Oe(n.torso[0]*.48,.025,6,24).scale(1,n.torso[2]/n.torso[0]*1.05,1).rotateX(Math.PI/2)),dt("#22202c"),{cast:!1});lt.position.y=.1,I.add(lt)}else if(tt==="bib"){let ct=new Te(Wt("bib",()=>new Qe(1,.78)),T.material);ct.scale.copy(T.scale),ct.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.012),ct.rotation.y=Math.PI,x.add(ct),T.scale.multiplyScalar(1.3)}else if(tt==="bowtie")for(let ct of[-1,1]){let lt=y(Wt("bow",()=>new Ne(.08,.16,4).rotateZ(Math.PI/2)),dt(a),2);lt.position.set(ct*.08,n.torso[1]-.06,n.torso[2]/2+.03),lt.rotation.z=ct>0?Math.PI:0,x.add(lt)}else if(tt==="tutu"){let ct=y(Wt(`tutu${e.build}`,()=>new te(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),dt("#ff9bd2",{side:Be}),2);ct.position.y=-.05,I.add(ct)}}}let Tt={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},vt=Tt.j,Nt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let tt of Nt)vt[tt]=0;let nt={},zt="idle",N=null,L=0;function ut(tt,ct=null){(tt!==zt||ct!==N)&&(zt=tt,N=ct,L=0)}function Rt(tt,ct={}){Tt.t+=tt,L+=tt;let lt=Tt.t;for(let Ct of Nt)nt[Ct]=0;let _t="normal",St=10;if(zt==="run"||zt==="jog"||zt==="trudge"||zt==="distracted"){let Ct=Math.max(.5,ct.speed??3.5),kt=Math.max(.2,ct.rate??1),Gt=zt==="trudge",Vt=Gt?1.7:(2.55+.14*(Ct-3.5))*Math.pow(kt,.3)*(zt==="jog"?.8:1);Tt.phase+=tt*Math.PI*Vt;let re=Tt.phase,Yt=Math.sin(re),A=Math.cos(re),P=Gt?.4:Math.max(.45,Math.min(1,.62+.13*(Ct-3.5)));nt.hipLx=-P*Yt,nt.hipRx=P*Yt,nt.kneeL=.2+(Gt?.5:1.35)*Math.max(0,A)*(.7+P*.3),nt.kneeR=.2+(Gt?.5:1.35)*Math.max(0,-A)*(.7+P*.3),nt.ankL=-.2*Yt,nt.ankR=.2*Yt;let Y=Gt?.3:.75*P+.15;nt.shLx=Y*Yt,nt.shRx=-Y*Yt,nt.shLz=-.18,nt.shRz=.18,nt.elL=Gt?-.5:-1.5,nt.elR=Gt?-.5:-1.5,nt.twist=.16*Yt,nt.roll=.05*Yt,nt.bob=(Gt?.03:.11)*(Math.abs(A)-.4),nt.lean=(Gt?.05:.16)+Math.max(-.25,Math.min(.45,(ct.slope??0)*1.6)),nt.headX=-nt.lean*.6,nt.headY=-.08*Yt,St=18,_t=ct.effort>.6?"effort":ct.effort>.3?"pant":"normal",Gt&&(nt.headX=.35,nt.lean=.25,_t="sad"),zt==="distracted"&&(nt.headY=ct.lookYaw??.9,nt.headX=-.15,nt.twist+=(ct.lookYaw??.9)*.3,_t="love")}else if(zt==="ready")nt.hipLx=-.5,nt.hipRx=.35,nt.kneeL=.6,nt.kneeR=.5,nt.lean=.35,nt.bob=-.12,nt.shLx=.5,nt.shRx=-.6,nt.elL=-1.3,nt.elR=-1.3,nt.headX=-.25,nt.bob+=Math.sin(lt*3)*.01,_t="effort";else if(zt==="wave")nt.shRz=2.7,nt.elR=.2*Math.sin(lt*9)-.25,nt.shRx=Math.sin(lt*9)*.25,nt.shLz=-.3,nt.elL=-.4,nt.bob=Math.abs(Math.sin(lt*4))*.05,nt.headY=.1*Math.sin(lt*2),_t="happy";else if(zt==="pose"){let Ct=N||"flex";if(Ct==="flex")nt.shLz=-1.5,nt.shRz=1.5,nt.elL=-1.9-Math.sin(lt*6)*.15,nt.elR=-1.9-Math.sin(lt*6+1)*.15,nt.shLx=-0,nt.bob=-.06+Math.abs(Math.sin(lt*3))*.03,nt.hipSpread=.25,nt.kneeL=.3,nt.kneeR=.3,_t="effort";else if(Ct==="point")nt.shRx=-1.5,nt.elR=0,nt.shLz=-.3,nt.elL=-1.6,nt.shLx=-.3,nt.headX=-.1,nt.lean=-.05,_t="happy",nt.bob=Math.sin(lt*5)*.02;else if(Ct==="stretch")nt.hipRx=-.2,nt.kneeR=2.3,nt.shRx=.8,nt.elR=-.6,nt.shLz=-2.6,nt.lean=.08+Math.sin(lt*2)*.04,_t="smug";else if(Ct==="spin"){let kt=Math.min(1,L/1.1);nt.bodyY=(1-(1-kt)**2)*Math.PI*4,nt.shLz=kt<1?-1.3:-2.6,nt.shRz=kt<1?1.3:2.6,nt.bob=kt<1?Math.abs(Math.sin(lt*7))*.2:Math.abs(Math.sin(lt*5))*.12,_t="happy"}else Ct==="bow"?(nt.lean=.75+Math.sin(lt*2)*.05,nt.shLx=.4,nt.shRx=-1.2,nt.elR=-1.6,nt.shRz=.4,nt.headX=-.2,_t="happy"):(nt.shLz=-2.5,nt.shRz=2.5,nt.bob=Math.abs(Math.sin(lt*6))*.25,_t="happy");_t==="smug"&&(_t="normal")}else if(zt==="celebrate"){let Ct=N||"jump";if(Ct==="jump"){let kt=Math.abs(Math.sin(lt*5.5));nt.bob=kt*.55,nt.shLz=-2.6-kt*.3,nt.shRz=2.6+kt*.3,nt.elL=-.2,nt.elR=-.2,nt.kneeL=nt.kneeR=(1-kt)*.8,nt.hipLx=nt.hipRx=-(1-kt)*.4,_t="happy",St=22}else if(Ct==="fist"){let kt=Math.sin(lt*7);nt.shRx=-2.6,nt.elR=-.4+kt*.4,nt.shLx=.4,nt.elL=-1.8,nt.bob=Math.abs(kt)*.08,nt.lean=-.1,_t="happy"}else Ct==="kneel"?(nt.lean=.85,nt.kneeL=nt.kneeR=.7,nt.hipLx=nt.hipRx=-.6,nt.bob=-.25+Math.sin(lt*7)*.025,nt.shLx=nt.shRx=-.55,nt.elL=nt.elR=-.1,nt.shLz=-.15,nt.shRz=.15,nt.headX=-.6,_t="pant"):Ct==="collapse"?(nt.bodyX=-Math.PI/2+.05,nt.shLz=-2.2,nt.shRz=2.2,nt.hipSpread=.4,nt.kneeL=.3+Math.max(0,Math.sin(lt*9))*.4*(Math.sin(lt*.7)>.6?1:0),nt.kneeR=.2,_t="dead",St=4):Ct==="shrug"&&(nt.shLz=-.9,nt.shRz=.9,nt.elL=-1.4,nt.elR=-1.4,nt.shLx=-.5,nt.shRx=-.5,nt.headX=.1,nt.headY=Math.sin(lt*1.5)*.3,_t="sad")}else nt.bob=Math.sin(lt*2)*.015,nt.shLz=-.18,nt.shRz=.18,nt.elL=-.25,nt.elR=-.25,nt.headY=Math.sin(lt*.7)*.25,nt.lean=.02,nt.kneeL=nt.kneeR=.05;ct.lookYaw!=null&&zt!=="distracted"&&(nt.headY+=ct.lookYaw);let At=1-Math.exp(-St*tt);for(let Ct of Nt){if(Ct==="bodyY"&&zt==="pose"&&N==="spin"){vt[Ct]=nt[Ct];continue}vt[Ct]+=(nt[Ct]-vt[Ct])*At}if(zt==="pose"&&N==="spin"||(vt.bodyY=vt.bodyY%(Math.PI*2),vt.bodyY>Math.PI&&(vt.bodyY-=Math.PI*2)),j[0].hp.rotation.set(vt.hipLx,0,-vt.hipSpread),j[1].hp.rotation.set(vt.hipRx,0,vt.hipSpread),j[0].kn.rotation.x=vt.kneeL,j[1].kn.rotation.x=vt.kneeR,j[0].an.rotation.x=vt.ankL-vt.kneeL*.35,j[1].an.rotation.x=vt.ankR-vt.kneeR*.35,G[0].sh.rotation.set(vt.shLx,0,vt.shLz-0),G[1].sh.rotation.set(vt.shRx,0,vt.shRz),G[0].el.rotation.x=vt.elL,G[1].el.rotation.x=vt.elR,x.rotation.set(vt.lean,vt.twist,0),I.rotation.set(0,-vt.twist*.5,vt.roll),I.position.y=R+vt.bob,D.rotation.set(vt.headX,vt.headY,0),B.rotation.set(vt.bodyX,vt.bodyY,vt.bodyZ),B.position.y+=((zt==="celebrate"&&N==="collapse"?n.torso[2]*.5+.08:0)-B.position.y)*At,D.userData.bobble&&(D.userData.bobble.position.y=U*2.45+Math.abs(Math.sin(Tt.phase))*.04),D.userData.pony&&(D.userData.pony.rotation.x=.4+Math.sin(Tt.phase*2)*.35),D.userData.tail&&(D.userData.tail.rotation.x=.6+Math.sin(Tt.phase*2)*.3),D.userData.cape&&(D.userData.cape.rotation.x=-.3-Math.min(1.1,(ct.speed??0)*.15)+Math.sin(lt*8)*.08),ct.expr&&(_t=ct.expr),xt(_t),et.visible){et.position.y=mt+.45+Math.sin(lt*6)*.08;let Ct=.9+Math.sin(lt*9)*.05;et.scale.set(Ct,Ct,Ct)}}function Dt(){for(let tt of h)tt.dispose?.();et.material.dispose()}return{id:i.id,info:i,root:M,update:Rt,set:ut,setPop:rt,setExpr:xt,setProp:st,dispose:Dt,height:mt,hipH:R,get state(){return zt},get variant(){return N}}}function Ss(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function uf(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function df(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function Fo(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}var mx=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function pf(i,t,e){let n=i.timeMap,s={};e.forEach((_,x)=>s[_.id]=_.lane??x+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Pe-1.6)/Math.max(1,r-1)),c=i.runners.map((_,x)=>{let b=df(n,_.officialS),w=((s[_.id]??x+1)-a)*l;return{..._,finishB:b,base:w,seed:x*1.7+.3}}),h=Object.fromEntries(c.map(_=>[_.id,_])),p=[...c].sort((_,x)=>_.officialS-x.officialS).map(_=>_.id),d=Object.fromEntries(p.map((_,x)=>[_,x+1])),f=h[p[0]],g=p.map(_=>h[_].officialS),v=h[p[0]].finishB,m=h[p.at(-1)].finishB,u=r>1&&g[1]-g[0]<=1.5,S=_=>Math.max(.05,(Fo(n,_+.05)-Fo(n,_-.05))/.1),y=new Map;function M(_){let x=Math.round(_*1e3);if(y.has(x))return y.get(x);let b=_<=0?0:Fo(n,_),w=_<=0?4:S(_),T={b:_,raceS:b,rate:w,byId:{},order:[]};for(let q of c){let Z=Ss(q.progress,b),it=b>=q.officialS&&_>=q.finishB-1e-6,xt=(Ss(q.progress,b+1)-Ss(q.progress,Math.max(0,b-1)))/(b>1?2:1);T.byId[q.id]={id:q.id,m:Z,finished:it,vRace:it?0:xt,place:d[q.id]}}for(let q of c){let Z=T.byId[q.id],it=Z.m,xt=q.base;xt+=.22*Math.sin(Z.m/85+q.seed);for(let J of c){if(J===q)continue;let G=T.byId[J.id],j=Z.m-G.m;if(Math.abs(j)<4&&!Z.finished&&!G.finished){let ot=(1-Math.abs(j)/4)*.32;xt+=Math.sign(q.base-J.base||q.seed-J.seed)*ot}}let U=0;if(Z.finished){let J=_-q.finishB,G=(Ss(q.progress,q.officialS)-Ss(q.progress,q.officialS-2))/2*S(q.finishB),j=Math.min(14,Math.max(4,G)),ot=1.6;it=5e3+(J<ot?j*(J-J*J/(2*ot)):j*ot/2+Math.min(10+d[q.id]*1.5,(J-ot)*.9));let pt=(d[q.id]-(r+1)/2)*1.6;xt=xt+(pt-xt)*mx(0,2.5,J),U=J}let Lt=t.sample(it,q.id);xt*=1-Lt.div,xt=Math.max(-Pe/2+.6,Math.min(Pe/2-.6,xt)),Object.assign(Z,{mVis:it,x:Lt.x+Lt.rx*xt,z:Lt.z+Lt.rz*xt,y:t.heightAt(Lt.x+Lt.rx*xt,Lt.z+Lt.rz*xt)+.16,tx:Lt.tx,tz:Lt.tz,slope:Lt.slope,div:Lt.div,divInfo:Lt.divInfo,lat:xt,post:U,distToFinish:Math.max(0,5e3-Z.m)})}let z=c.filter(q=>T.byId[q.id].finished).sort((q,Z)=>q.officialS-Z.officialS),W=c.filter(q=>!T.byId[q.id].finished).sort((q,Z)=>T.byId[Z.id].m-T.byId[q.id].m||q.officialS-Z.officialS);T.order=[...z,...W].map(q=>q.id),T.leader=T.byId[T.order[0]];let D=h[T.order[0]];for(let[q,Z]of T.order.entries()){let it=T.byId[Z];if(it.finished)it.gapText=q===0?zo(h[Z].officialS):`+${(h[Z].officialS-f.officialS).toFixed(0)}s`;else if(q===0)it.gapText="LEADER";else{let xt=T.byId[T.order[0]].finished?f:D;it.gapText=`+${Math.max(0,b-uf(xt.progress,it.m)).toFixed(1)}s`}}return y.size>400&&y.clear(),y.set(x,T),T}return{stateAt:M,orderAt:_=>M(_).order,gapM:(_,x,b)=>{let w=M(b);return Math.abs((w.byId[_]?.m??0)-(w.byId[x]?.m??0))},finishedAt:(_,x)=>M(x).byId[_]?.finished,allFinishedAt:_=>_>m,firstFinishB:v,lastFinishB:m,photoFinish:u,finishOrder:p,place:d,byId:h,R:c,rateAt:S,durationS:n.durationS}}function zo(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}function mf({plan:i,sim:t,backedIds:e=[],hasDiversion:n}){let s=i.events||[],r=t.lastFinishB+3.5,o=[],a=(E,R,_,x,b={})=>{_-R>=1.2&&o.push({type:E,a:R,b:_,prio:x,...b})},l=t.firstFinishB,c=t.finishOrder.map(E=>({who:E,broadcastS:t.byId[E].finishB})),h=l-5.5;c.forEach((E,R)=>{let _=c[R-1];_&&E.broadcastS-_.broadcastS>7.5&&(a("front",_.broadcastS+2.2,E.broadcastS-3.2,10,{ids:[E.who],tag:"chaser"}),h=E.broadcastS-3.2),a("finishcam",h,E.broadcastS+2.2,10,{ids:[E.who]}),h=E.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let p=s.find(E=>E.type==="final_stretch");if(p){let E=p.broadcastS,R=l-5.5,_=Math.max(1,Math.round((R-E)/6)),x=["final","track","battle","final","drone","front"];for(let b=0;b<_;b++){let w=E+(R-E)*b/_,T=E+(R-E)*(b+1)/_,z=(w+T)/2,W=t.orderAt(z),D=x[b%x.length],q=[W[0]];D==="battle"&&(q=[W[0],W[1]]);let Z=t.gapM(W[0],W[1],z)<12;b===0?(D="final",q=[W[0]]):Z&&D!=="final"&&(D="battle",q=[W[0],W[1]]),a(D,w,T,5,{ids:q})}}let d=s.filter(E=>E.type==="diversion").sort((E,R)=>E.broadcastS-R.broadcastS);d[0]&&a("distracted",d[0].broadcastS-.4,Math.max(d[0].broadcastS+6.5,Math.min((d[0].endBroadcastS??d[0].broadcastS+8)+1.2,d[0].broadcastS+9)),9,{ids:[d[0].who],banner:!0});for(let E of s.filter(R=>R.type==="hill")){let R=t.rateAt(E.broadcastS),_=Math.max(2.6,Math.min(6,140/Math.max(1,R*3.4)));a("hill",E.broadcastS-1.4,E.broadcastS+_,7,{lap:E.lap})}let f=s.find(E=>E.type==="lap");f&&a("lapboard",f.broadcastS-2.6,f.broadcastS+2,6);for(let E of s.filter(R=>R.type==="lead_change"))a("battle",E.broadcastS-1.6,E.broadcastS+2.8,6,{ids:[E.to,E.from],tag:"lead"});let g=-1e9,v=s.filter(E=>E.type==="lead_change").map(E=>E.broadcastS);for(let E of s.filter(R=>R.type==="overtake")){let R=e.includes(E.by)||e.includes(E.on),x=t.orderAt(E.broadcastS+.5).indexOf(E.by)<=1;!R&&!x||E.broadcastS-g<11||v.some(b=>Math.abs(b-E.broadcastS)<6)||(g=E.broadcastS,a("battle",E.broadcastS-1.4,E.broadcastS+2.6,R?4:3,{ids:[E.by,E.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((E,R)=>R.prio-E.prio||E.a-R.a);let m=[],u=(E,R)=>!m.some(_=>E<_.b&&R>_.a);for(let E of o){if(u(E.a,E.b)){m.push(E);continue}let R=E.a,_=E.b;for(let x of m)R<x.b&&_>x.a&&(x.a<=R?R=x.b:_=Math.min(_,x.a));_-R>=2.2&&u(R,_)&&m.push({...E,a:R,b:_})}m.sort((E,R)=>E.a-R.a);let S=[],y=-8.5,M=0,B=["track","drone","front","chase","track","blimp","front","side"],I=(E,R)=>{let _=R-E;if(_<=.05)return;if(_<2.2&&S.length){S.at(-1).b=R;return}let x=Math.max(1,Math.round(_/5.2));for(let b=0;b<x;b++){let w=E+_*b/x,T=E+_*(b+1)/x,z=(w+T)/2,W=t.orderAt(z),D=B[M++%B.length],q=[W[0]],Z=e.filter(it=>!t.finishedAt(it,z)&&t.gapM(W[0],it,z)>25);Z.length&&M%3===0?(D="chase",q=[Z[M%Z.length]]):D==="track"||D==="side"?q=W.filter(it=>t.gapM(W[0],it,z)<15).slice(0,3):(D==="drone"||D==="blimp")&&(q=W),t.allFinishedAt(z-2)&&(D="celebrate",q=t.finishOrder),S.push({type:D,a:w,b:T,prio:1,ids:q,filler:!0})}};for(let E of m)E.a>y&&I(y,E.a),S.push(E),y=Math.max(y,E.b);return y<r+30&&I(y,r+30),S}function gf({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new k,look:new k,fov:45},o={off:new k,lookOff:new k,fov:45,init:!1},a=null,l=new k,c=new k,h=new k(0,1,0),p={};function d(S,y){let M=e.stateAt(y),B=S.map(W=>M.byId[W]).filter(Boolean);if(!B.length)return{p:new k(M.leader.x,M.leader.y,M.leader.z),h:new k(M.leader.tx,0,M.leader.tz),m:M.leader.m,spread:0};let I=new k,E=0;for(let W of B)I.x+=W.x,I.y+=W.y,I.z+=W.z,E+=W.m;I.divideScalar(B.length),E/=B.length;let R=1e9,_=-1e9;for(let W of B)R=Math.min(R,W.m),_=Math.max(_,W.m);let x=B[0],b=Math.max(0,x.mVis-18),w=t.xzAt(b,x.id),T=t.xzAt(b+36,x.id),z=new k(T.x-w.x,0,T.z-w.z).normalize();return isFinite(z.x)||z.set(0,0,1),{p:I,h:z,m:E,spread:_-R,list:B}}let f=S=>new k(-S.z,0,S.x);function g(S,y,M){let B=(y-S.a)/Math.max(.01,S.b-S.a),I=n.anchors.finish,E=n.anchors.start,R,_,x=45,b=!0;switch(S.type){case"heli":{let w=new k(150,0,0),T=new k(E.x,E.y,E.z),z=lc(Math.min(1,B*1.05)),W=-1.2+z*1.6,D=420-z*360;R=new k(w.x+Math.cos(W)*D,170-z*140,w.z+Math.sin(W)*D).lerp(new k(T.x-E.tx*40+E.rx*25,T.y+22,T.z-E.tz*40+E.rz*25),z*z),_=w.clone().setY(10).lerp(T,Math.min(1,z*1.3)),x=50,b=!1;break}case"startgo":{let w=new k(E.x,E.y,E.z),T=new k(E.tx,0,E.tz),z=f(T);if(y<.6)R=w.clone().addScaledVector(T,9.5+(y+3.2)*.25).addScaledVector(z,2.6).add(h.clone().multiplyScalar(1.9)),_=w.clone().add(h.clone().multiplyScalar(1.3)).addScaledVector(T,-1),x=42;else{let W=d(e.orderAt(y).slice(0,3),y);R=W.p.clone().addScaledVector(W.h,11).addScaledVector(f(W.h),3.5).add(h.clone().multiplyScalar(2.2)),_=W.p.clone().add(h.clone().multiplyScalar(1.2)),x=44}b=!1;break}case"track":case"side":{let w=d(S.ids,y),T=f(w.h),z=S.type==="side"?-1:1,W=8+Math.min(14,w.spread*.6);R=w.p.clone().addScaledVector(T,z*(W+2)).addScaledVector(w.h,3+Math.sin(B*3)*.6).add(h.clone().multiplyScalar(2.6)),_=w.p.clone().addScaledVector(w.h,1.5).add(h.clone().multiplyScalar(1.1)),x=42;break}case"front":case"final":{let w=d(S.ids,y),T=f(w.h),z=S.type==="final"?7.5-B*1.5:7;R=w.p.clone().addScaledVector(w.h,z).addScaledVector(T,S.type==="final"?1.4:-2).add(h.clone().multiplyScalar(S.type==="final"?.9:1.8)),_=w.p.clone().add(h.clone().multiplyScalar(1.35)).addScaledVector(w.h,-2),x=S.type==="final"?38:42;break}case"chase":{let w=d(S.ids,y),T=f(w.h);R=w.p.clone().addScaledVector(w.h,-7.5).addScaledVector(T,2.2).add(h.clone().multiplyScalar(3)),_=w.p.clone().addScaledVector(w.h,5).add(h.clone().multiplyScalar(1.2)),x=46;break}case"battle":{let w=d(S.ids,y),T=f(w.h),z=Math.floor(S.a*7)%2?1:-1,W=11+Math.min(10,w.spread*.7);R=w.p.clone().addScaledVector(w.h,W*.7).addScaledVector(T,z*W*.75).add(h.clone().multiplyScalar(2.3)),_=w.p.clone().add(h.clone().multiplyScalar(1.1)),x=42;break}case"drone":case"blimp":{let w=e.stateAt(y),T=w.byId[w.order[0]],z=w.order.map(U=>w.byId[U]).filter(U=>!U.finished),W=new k;for(let U of z.length?z:[T])W.add(new k(U.x,U.y,U.z));W.divideScalar(Math.max(1,z.length));let D=z.length?z[0].m-z.at(-1).m:0,q=d([w.order[0]],y),Z=S.type==="blimp"?38+Math.min(50,D*.25):20+Math.min(40,D*.25),it=S.type==="blimp"?48:30+Math.min(40,D*.25),xt=W.clone().lerp(new k(T.x,T.y,T.z),.5);R=xt.clone().addScaledVector(q.h,-it).addScaledVector(f(q.h),it*.6).add(h.clone().multiplyScalar(Z)),_=xt,x=46;break}case"hill":{let w=n.anchors.hillM,T=t.sample(w+105),z=new k(T.tx,0,T.tz),W=f(z);R=new k(T.x,T.y,T.z).addScaledVector(W,6.5).add(h.clone().multiplyScalar(2.2));let D=e.stateAt(y),q=D.order.map(U=>D.byId[U]).filter(U=>t.geoOf(U.m)>w-120&&t.geoOf(U.m)<w+200&&!U.finished),Z=q.length?q[0]:null,it=Z?new k(Z.x,Z.y+1.1,Z.z):new k(T.x,T.y+1,T.z);_=it;let xt=R.distanceTo(it);x=kh.clamp(2*Math.atan(5.5/xt)*180/Math.PI,12,50),b=!0;break}case"lapboard":{let w=n.anchors.lapBoard,T=new k;w.getWorldPosition(T);let z=t.sample(2491),W=new k(z.tx,0,z.tz),D=f(W);R=new k(z.x,z.y,z.z).addScaledVector(D,-(4.6+3)).add(h.clone().multiplyScalar(2.4));let q=e.stateAt(y),Z=q.order.map(xt=>q.byId[xt]).filter(xt=>xt.m>2350&&xt.m<2600),it=Z.length?new k(Z[0].x,Z[0].y+1.2,Z[0].z):T.clone().add(h.clone().multiplyScalar(2));_=T.clone().add(h.clone().multiplyScalar(1.8)).lerp(it,.45),x=46;break}case"finishcam":{let w=new k(I.tx,0,I.tz),T=f(w),z=e.stateAt(y),W=S.ids?.[0]??z.order[0],D=z.byId[W];R=new k(I.x,I.y,I.z).addScaledVector(w,16).addScaledVector(T,-4).add(h.clone().multiplyScalar(2.6));let q=new k(I.x,I.y+2.5,I.z),Z=D&&!D.finished?new k(D.x,D.y+1.3,D.z):q;_=q.clone().lerp(Z,D&&!D.finished?Math.min(.85,15/Math.max(15,D.distToFinish)):.3),x=D&&!D.finished&&D.distToFinish>30?30:40;break}case"celebrate":{let w=e.stateAt(y),T=new k;for(let q of w.order)T.add(new k(w.byId[q].x,w.byId[q].y,w.byId[q].z));T.divideScalar(w.order.length);let z=new k(I.tx,0,I.tz),W=f(z),D=Math.sin(y*.15)*.5;R=T.clone().addScaledVector(z,-10*Math.cos(D)).addScaledVector(W,10*Math.sin(D)).add(h.clone().multiplyScalar(2.6)),_=T.clone().add(h.clone().multiplyScalar(1.2)),x=46,b=!1;break}case"photo":{let w=new k(I.tx,0,I.tz),T=f(w);R=new k(I.x,I.y,I.z).addScaledVector(T,8.5).add(h.clone().multiplyScalar(1.3)),_=new k(I.x,I.y+1.1,I.z),x=40,b=!1;break}case"distracted":{let w=d(S.ids,y),T=f(w.h),z=n.anchors.nearestOnRibbon(w.p.x,w.p.z),W=Math.sign((z[0]-w.p.x)*T.x+(z[1]-w.p.z)*T.z)||1,D=T.clone().multiplyScalar(W),q=y-S.a;if(q<2.6&&s){let Z=s.anchors.rides[0].pos,it=q/2.6,xt=new k(Z.x-w.p.x,0,Z.z-w.p.z).normalize();R=w.p.clone().addScaledVector(w.h,-18+it*2).addScaledVector(xt,-4).add(h.clone().multiplyScalar(13-it*2)),_=new k(Z.x,w.p.y+8,Z.z).lerp(w.p.clone().add(h),.45+it*.2),x=54,b=!1}else if(B<.62){let Z=w.h.clone().multiplyScalar(.55).addScaledVector(D,.85).normalize();R=w.p.clone().addScaledVector(Z,5.2).add(h.clone().multiplyScalar(2)),_=w.p.clone().add(h.clone().multiplyScalar(1.85)),x=46}else R=w.p.clone().addScaledVector(w.h,-12).addScaledVector(D,-9).add(h.clone().multiplyScalar(7.5)),_=w.p.clone().addScaledVector(D,10).add(h.clone().multiplyScalar(2.5)),x=52;break}default:{let w=d(S.ids||[],y);R=w.p.clone().addScaledVector(w.h,-10).add(h.clone().multiplyScalar(4)),_=w.p.clone()}}return{pos:R,look:_,fov:x,damp:b}}let v=0;function m(S,y,M){let B=M.find(x=>S>=x.a&&S<x.b)||M.at(-1),I=B.type==="distracted"?S-B.a<2.6?0:(S-B.a)/(B.b-B.a)<.62?1:2:0,E=B!==a||I!==v;v=I,a=B;let R=g(B,S,y);if(!R)return{shot:B,cut:E};let _=t.heightAt(R.pos.x,R.pos.z)+.8;if(R.pos.y<_&&(R.pos.y=_),E||!o.init||!R.damp)r.pos.copy(R.pos),r.look.copy(R.look),o.fov=R.fov,o.init=!0;else{let x=1-Math.exp(-4.5*y),b=r.pos.clone().sub(r.look),w=R.pos.clone().sub(R.look);b.lerp(w,x),r.look.copy(R.look),r.pos.copy(r.look).add(b),o.fov+=(R.fov-o.fov)*x}return i.position.copy(r.pos),i.lookAt(r.look),Math.abs(i.fov-o.fov)>.01&&(i.fov=o.fov,i.updateProjectionMatrix()),{shot:B,cut:E}}function u(){o.init=!1,a=null}return{update:m,reset:u,evaluate:g,get shot(){return a},cam:r}}function lc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var gx=`
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
.mr-row .mr-name{flex:1;min-width:0;font-size:calc(var(--u)*1.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:Nunito,"Arial Rounded MT Bold",sans-serif;font-weight:900;font-size:calc(var(--u)*1.2);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-flex;align-items:center;gap:.2em;background:var(--bc,#fff);color:var(--ink);border:calc(var(--u)*.18) solid var(--ink);border-radius:99px;font-size:calc(var(--u)*1.05);padding:.05em .55em;margin-left:calc(var(--u)*.35);line-height:1.2;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35);white-space:nowrap}
.mr-row .mr-badges{position:absolute;left:100%;top:50%;transform:translateY(-50%);display:flex;gap:calc(var(--u)*.25);margin-left:calc(var(--u)*.6)}
.mr-row .mr-badges .mr-badge{margin:0;font-size:calc(var(--u)*1.25)}
.mr-row.backed .mr-card{box-shadow:0 0 0 calc(var(--u)*.22) var(--bc,#ffd23f),0 0 calc(var(--u)*1.2) var(--bc,#ffd23f)}
.mr-tag .mr-tb{position:absolute;left:50%;bottom:100%;transform:translateX(-50%);display:flex;gap:calc(var(--u)*.2);margin-bottom:calc(var(--u)*.3)}
.mr-tag .mr-tb .mr-badge{margin:0;font-size:calc(var(--u)*1.15)}
.mr-title{position:absolute;left:50%;top:9%;width:max-content;max-width:92%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:all .6s cubic-bezier(.3,1.5,.5,1)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-title .mr-t1{display:block;white-space:nowrap;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*6);line-height:1;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-pcap{position:absolute;left:50%;bottom:19%;transform:translateX(-50%) skewX(-10deg);background:var(--ink);color:#fff;border:calc(var(--u)*.3) solid #fff;padding:calc(var(--u)*.4) calc(var(--u)*2);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity .5s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:50%;top:17%;transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:calc(var(--u)*.45) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.5) calc(var(--u)*3);font-size:calc(var(--u)*5.6);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.7) 0 rgba(0,0,0,.35);animation:mrpulse 1.6s ease-in-out infinite}
@keyframes mrpulse{50%{transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg) scale(1.04)}}
.mr-market .mr-m2{position:absolute;left:50%;top:27%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
.mr-market .mr-mt{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*25);font-size:calc(var(--u)*1.6);background:var(--ink);padding:.2em .8em;border-radius:calc(var(--u)*.6)}
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
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map,.mr-dimtop .mr-tower,.mr-dimtop .mr-top{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity .4s}
`,xf=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,xx=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,yx=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},hr=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),_x=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function vf(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let et=document.createElement("style");et.id="mr-hud-css",et.textContent=gx,document.head.appendChild(et)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-line"></div><div class="mr-pf">PHOTO FINISH!</div><div class="mr-pcap"></div></div>
    <div class="mr-market"><div class="mr-m1">MARKET OPEN</div><div class="mr-m2"></div></div>
    <div class="mr-title"><div class="mr-t0"></div><span class="mr-t1"></span><div class="mr-t2"></div></div>
    <div class="mr-results"></div>`,i.appendChild(o);let a=et=>o.querySelector(et),l={};o.querySelectorAll("[data-k]").forEach(et=>l[et.dataset.k]=et);let c=a(".mr-tower"),h={},p={};for(let et of t){let rt=document.createElement("div");rt.className="mr-row";let mt=e[et.id]||[],Q=mt.map(H=>`<span class="mr-badge" style="--bc:${_f(H)}">${vx(H)?"":"\u2605"}${hr(String(H)).slice(0,10)}</span>`).join("");mt.length&&(rt.classList.add("backed"),rt.style.setProperty("--bc",_f(mt[0]))),rt.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${et.colour.primary};border-right:4px solid ${et.colour.secondary}"></div><div class="mr-name">${hr(Es(et))}</div><div class="mr-gap"></div></div><span class="mr-badges">${Q}</span>`,c.appendChild(rt),h[et.id]={el:rt,pos:rt.querySelector(".mr-pos"),gap:rt.querySelector(".mr-gap"),last:""};let gt=document.createElement("div");gt.className="mr-tag",gt.innerHTML=`<span class="mr-tb">${Q}</span><span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${et.colour.primary};color:#fff">${hr(Es(et))}</span>`,gt.style.opacity="0",a(".mr-tags").appendChild(gt),p[et.id]={el:gt,pos:gt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}let d=a(".mr-map canvas"),f=d.getContext("2d"),g=null,v=340,m=420;d.width=v,d.height=m;let u=n.points,S=1e9,y=1e9,M=-1e9,B=-1e9;for(let et of u)S=Math.min(S,et[0]),M=Math.max(M,et[0]),y=Math.min(y,et[2]),B=Math.max(B,et[2]);for(let et in r.diversions)for(let rt of r.diversions[et])for(let mt of rt.path)S=Math.min(S,mt[0]),M=Math.max(M,mt[0]),y=Math.min(y,mt[1]),B=Math.max(B,mt[1]);let I=26,E=Math.min((v-I*2)/(M-S),(m-I*2)/(B-y)),R=(v-(M-S)*E)/2,_=(m-(B-y)*E)/2,x=et=>R+(et-S)*E,b=et=>_+(et-y)*E;function w(){let et=document.createElement("canvas");et.width=v,et.height=m;let rt=et.getContext("2d"),mt=(vt,Nt,nt,zt)=>{rt.beginPath(),vt.forEach((N,L)=>L?rt.lineTo(x(N[0]),b(N[1])):rt.moveTo(x(N[0]),b(N[1]))),rt.strokeStyle=Nt,rt.lineWidth=nt,rt.lineJoin=rt.lineCap="round",rt.setLineDash(zt||[]),rt.stroke(),rt.setLineDash([])},Q=(vt,Nt)=>{for(let nt of s.features)nt.kind===vt&&nt.closed&&(rt.beginPath(),nt.pts.forEach((zt,N)=>N?rt.lineTo(x(zt[0]),b(zt[1])):rt.moveTo(x(zt[0]),b(zt[1]))),rt.fillStyle=Nt,rt.fill())},gt=s.features.filter(vt=>vt.kind==="park").sort((vt,Nt)=>Nt.pts.length-vt.pts.length)[0];rt.save(),rt.beginPath(),gt.pts.forEach((vt,Nt)=>Nt?rt.lineTo(x(vt[0]),b(vt[1])):rt.moveTo(x(vt[0]),b(vt[1]))),rt.fillStyle="#9be27a",rt.fill(),rt.restore(),Q("water","#49a6ff"),Q("track","#ff7a5c");for(let vt in r.diversions)for(let Nt of r.diversions[vt])mt(Nt.path,"#c79a5a",4,[6,6]);let H=[];for(let vt=0;vt<=r.LAP1_END_DRAW;vt+=10)H.push(r.baseXZ(vt));mt(H,"#1a1420",11),mt(H,"#8fa0c4",6);let Ot=[];for(let vt=r.MAP_TO-80;vt<=r.finishM;vt+=10)Ot.push(r.baseXZ(vt));mt(Ot,"#1a1420",11),mt(Ot,"#8fa0c4",6);let Tt=r.rawExt(r.finishM);return rt.fillStyle="#fff",rt.strokeStyle="#1a1420",rt.lineWidth=3,rt.fillRect(x(Tt[0])-7,b(Tt[1])-7,14,14),rt.strokeRect(x(Tt[0])-7,b(Tt[1])-7,14,14),rt.fillStyle="#1a1420",rt.fillRect(x(Tt[0])-7,b(Tt[1])-7,7,7),rt.fillRect(x(Tt[0]),b(Tt[1]),7,7),et}g=w();let T=0,z=a(".mr-banner");function W(et,rt="",mt="#ff3d8b",Q=2.4){z.querySelector(".mr-b1 span").textContent=et,z.querySelector(".mr-b1").style.background=mt,z.querySelector(".mr-b2").textContent=rt,z.classList.remove("on"),z.offsetWidth,z.classList.add("on"),T=Q}let D="";function q(et,rt){if(T>0&&(T-=et,T<=0&&z.classList.remove("on")),!!rt){if(rt.raceS!=null&&(l.clock.textContent=yx(rt.raceS)),rt.leaderM!=null&&(l.lap.textContent=rt.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,rt.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,rt.leaderM/5e3*100)}%`),rt.order){let mt=c.clientHeight||0,Q=(c.querySelector(".mr-row")?.offsetHeight||40)+6;rt.order.forEach((gt,H)=>{let Ot=h[gt.id];if(!Ot)return;Ot.el.style.transform=`translateY(${H*Q}px)`;let Tt=`${H}|${gt.gapText}|${gt.finished}`;Tt!==Ot.last&&(Ot.last=Tt,Ot.pos.innerHTML=xf(H+1),Ot.gap.textContent=gt.gapText,Ot.el.classList.toggle("lead",H===0),Ot.el.classList.toggle("fin",!!gt.finished))})}if(rt.tags)for(let mt of rt.tags){let Q=p[mt.id];Q&&(mt.visible!==Q.vis&&(Q.vis=mt.visible,Q.el.style.opacity=mt.visible?"1":"0"),mt.visible&&(Q.el.style.transform=`translate(${mt.x}px, ${mt.y}px) translate(-50%,-100%) scale(${mt.scale??1})`,Q.p!==mt.pos&&(Q.p=mt.pos,Q.pos.textContent=mt.pos?xx(mt.pos):"",Q.pos.style.display=mt.pos?"":"none")))}if(rt.dots){f.clearRect(0,0,v,m),f.drawImage(g,0,0);for(let mt of[...rt.dots].reverse())f.beginPath(),f.arc(x(mt.x),b(mt.z),mt.lead?11:9,0,7),f.fillStyle=mt.colour,f.fill(),f.lineWidth=3.5,f.strokeStyle="#1a1420",f.stroke(),mt.focus&&(f.beginPath(),f.arc(x(mt.x),b(mt.z),15,0,7),f.strokeStyle="#fff",f.lineWidth=3,f.stroke());rt.camDot&&(f.save(),f.translate(x(rt.camDot.x),b(rt.camDot.z)),f.rotate(rt.camDot.a),f.fillStyle="rgba(26,20,32,.6)",f.beginPath(),f.moveTo(0,0),f.lineTo(-10,-22),f.lineTo(10,-22),f.fill(),f.restore())}}}function Z(et){o.classList.toggle("mr-dim",!!et)}function it(et){o.classList.toggle("mr-dimtop",!!et)}function xt(){T=0,z.classList.remove("on")}function U(et){let rt=a(".mr-card3");if(!et){rt.classList.remove("on");return}rt.querySelector(".mr-lane span").textContent=et.lane??"",rt.querySelector(".mr-lane").style.background=et.colour.primary,rt.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${et.colour.primary}, ${Mx(et.colour.primary,-.25)})`,rt.querySelector(".mr-nick").textContent=et.nickname,rt.querySelector(".mr-nick").style.color="#fff",rt.querySelector(".mr-tagl").textContent=et.tagline||"",rt.querySelector(".mr-tagl").style.color=_x(et.colour.primary)==="#ffffff"?"#fff":"#1a1420",rt.classList.remove("on"),rt.offsetWidth,rt.classList.add("on")}function Lt(et){let rt=a(".mr-count");rt.textContent=et,rt.classList.remove("pop"),rt.offsetWidth,rt.classList.add("pop")}function J(et,rt=""){a(".mr-photo").classList.toggle("on",!!et),a(".mr-pcap").textContent=rt,a(".mr-pcap").style.display=rt?"":"none"}function G(et,rt="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!et),a(".mr-market .mr-m2").textContent=rt}function j(et,{title:rt="",kicker:mt="",theme:Q=""}={}){let gt=a(".mr-title");if(et){gt.querySelector(".mr-t0").textContent=mt,gt.querySelector(".mr-t1").textContent=rt;let H=gt.querySelector(".mr-t2");H.textContent=Q,H.style.display=Q?"":"none",gt.querySelector(".mr-t0").style.display=mt?"":"none"}gt.classList.toggle("on",!!et)}function ot(et,rt){let mt=rt[0]-et[0],Q=rt[1]-et[1],gt=Math.hypot(mt,Q)||1,H=mt/gt,Ot=Q/gt,Tt=et[0]-H*gt*.6,vt=et[1]-Ot*gt*.6,Nt=a(".mr-photo .mr-line");Nt.style.width=`${gt*2.2}px`,Nt.style.transform=`translate(${Tt}px, ${vt}px) rotate(${Math.atan2(Ot,H)}rad)`}function st(et){let rt=a(".mr-results");if(!et){rt.classList.remove("on");return}rt.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+et.map(mt=>`<div class="mr-rr"><span class="mr-num">${xf(mt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${mt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${hr(mt.nickname)}</span><span class="mr-t">${hr(mt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>rt.classList.add("on"))}function pt(){o.remove()}return{root:o,update:q,showBanner:W,clearBanner:xt,setDim:Z,setDimTop:it,introCard:U,countdown:Lt,photo:J,photoLine:ot,results:st,market:G,titleCard:j,dispose:pt}}function Es(i){if(i.shortName)return i.shortName;let t=String(i.nickname||i.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),n=e.slice(-2).join(" ");return n.length<=14?n:e.at(-1).slice(0,14)}var yf=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Oo=new Map;function _f(i){return Oo.has(i)||Oo.set(i,Oo.size),yf[Oo.get(i)%yf.length]}var vx=i=>/\p{Extended_Pictographic}/u.test(String(i));function Mx(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var Bo=(i,t,e=12,n=!0)=>qe(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Mf(i,t,e,n){let s=un(42),r=new ne;i.add(r);let o=[],a=[],l=(b,w=3)=>(Ln(b,w,void 0,30),b),c=(b,w,T=3)=>he(b,w,{ol:T,olRef:30}),h=[];for(let b=0;b<n.path.length;b++){let w=n.path[b],T=e.anchors.nearestOnRibbon(w[0],w[1]),z=Math.hypot(w[0]-T[0],w[1]-T[1]);h.push({x:(w[0]+T[0])/2,z:(w[1]+T[1])/2,gap:z})}let p=0;h.forEach((b,w)=>{w&&(p+=Math.hypot(b.x-h[w-1].x,b.z-h[w-1].z)),b.s=p});let d=p,f=b=>{let w=0;for(;w<h.length-2&&h[w+1].s<b;)w++;let T=h[w],z=h[w+1],W=Math.max(0,Math.min(1,(b-T.s)/Math.max(1e-6,z.s-T.s))),D=T.x+(z.x-T.x)*W,q=T.z+(z.z-T.z)*W,Z=Math.hypot(z.x-T.x,z.z-T.z)||1;return{x:D,z:q,gap:T.gap+(z.gap-T.gap)*W,tx:(z.x-T.x)/Z,tz:(z.z-T.z)/Z,y:t.heightAt(D,q)}},g=h.filter(b=>b.gap>26),v=g.length?g[0].s:d*.25,m=g.length?g.at(-1).s:d*.75,u=b=>Array.from({length:b},(w,T)=>f(v+(T+.5)/b*(m-v))),S=(b,w,T=0)=>(b.position.set(w.x,w.y-.1,w.z),b.rotation.y=Math.atan2(w.tx,w.tz)+T,r.add(b),b),y={center:f((v+m)/2),rides:[]},M=u(7);{let b=M.slice(1,6).sort((ot,st)=>st.gap-ot.gap)[0],w=new ne,T=17,z=T+2.6,W=new te(.35,.5,z/Math.cos(.32)+1,8);for(let ot of[-1,1])for(let st of[-1,1]){let pt=c(W,dt("#ffffff"));pt.position.set(ot*1.8,z/2,st*Math.tan(.32)*z/2),pt.rotation.x=-st*.32,w.add(pt)}let D=c(new de(6,1,8,2,.3),dt("#2e9bff"));D.position.y=.5,w.add(D);let q=new ne;q.position.y=z,w.add(q);let Z=c(new Oe(T,.45,8,64),dt("#ff3d8b"));Z.rotation.y=Math.PI/2,Z.position.x=1.2,q.add(Z);let it=c(new Oe(T,.45,8,64),dt("#ff3d8b"));it.rotation.y=Math.PI/2,it.position.x=-1.2,q.add(it);let xt=c(new te(1.3,1.3,3.2,16).rotateZ(Math.PI/2),dt("#ffd23f"));q.add(xt);let U=16,Lt=[],J=[];for(let ot=0;ot<U;ot++){let st=ot/U*Math.PI*2,pt=c(new me(.18,T,.18).translate(0,T/2,0),dt("#ffffff"),2);pt.rotation.x=st,pt.position.x=1.2,q.add(pt);let et=pt.clone();et.position.x=-1.2,q.add(et);let rt=new ne;rt.position.set(0,Math.cos(st)*T,Math.sin(st)*T),q.add(rt);let mt=new ne;rt.add(mt);let Q=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][ot%5],gt=c(new de(1.7,1.3,1.5,2,.35),dt(Q));gt.position.y=-1.3,mt.add(gt);let H=c(new Ne(1.2,.7,4).rotateY(Math.PI/4),dt("#ffffff"),2);H.position.y=-.1,mt.add(H),Lt.push(rt);for(let Ot=0;Ot<3;Ot++){let Tt=st+Ot/3*(Math.PI*2/U);J.push([1.2,Math.cos(Tt)*T,Math.sin(Tt)*T],[-1.2,Math.cos(Tt)*T,Math.sin(Tt)*T])}}let G=new Ve(new ce(.32,8,6),new vn({color:16777215}),J.length),j=new Ee;J.forEach((ot,st)=>{j.position.set(...ot),j.updateMatrix(),G.setMatrixAt(st,j.matrix),G.setColorAt(st,new $t(["#fff27a","#ff7ac8","#7affff"][st%3]))}),q.add(G),S(w,b,0),a.push(ot=>{q.rotation.x=ot*.18;for(let st of Lt)st.rotation.x=-ot*.18}),y.rides.push({kind:"wheel",obj:w,pos:new k(b.x,b.y+z,b.z),r:T}),b.used=!0}{let b=M.filter(J=>!J.used).sort((J,G)=>G.gap-J.gap)[0];b.used=!0;let w=new ne,T=Math.min(6.5,b.gap*.28);w.scale.setScalar(1.45);let z=Bo("#ffffff","#ff4f6d",16);o.push(z);let W=c(new te(T,T+.3,.9,32),dt("#ffffff",{map:z}));W.position.y=.45,w.add(W);let D=new ne;w.add(D);let q=c(new te(.7,.7,5,16),dt("#ffd23f"));q.position.y=3,D.add(q);let Z=Bo("#ffd23f","#ff3d8b",16);o.push(Z);let it=c(new Ne(T+.8,2.8,16),dt("#ffffff",{map:Z}));it.position.y=6.6,D.add(it);let xt=c(new te(T+.8,T+.8,.7,16,1,!0),dt("#2e9bff",{side:Be}));xt.position.y=4.9,D.add(xt);let U=c(new ce(.5,12,8),dt("#ff3d8b"));U.position.y=8.2,D.add(U);let Lt=[];for(let J=0;J<8;J++){let G=J/8*Math.PI*2,j=T*.72,ot=new ne;ot.position.set(Math.cos(G)*j,0,Math.sin(G)*j),ot.rotation.y=-G,D.add(ot);let st=c(new te(.06,.06,4.2,6),dt("#ffd23f"),1.5);st.position.y=2.9,ot.add(st);let pt=new ne;ot.add(pt);let et=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][J%4],rt=c(new de(.7,.7,1.6,2,.3),dt(et));pt.add(rt);let mt=c(new de(.45,.9,.5,2,.2),dt(et));mt.position.set(0,.55,.7),mt.rotation.x=.4,pt.add(mt);let Q=c(new de(.45,.45,.8,2,.2),dt(et));Q.position.set(0,.95,1.05),pt.add(Q);let gt=c(new de(.15,.8,.3,1,.06),dt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][J%4]),2);gt.position.set(0,.75,.55),gt.rotation.x=.4,pt.add(gt);let H=c(new de(.75,.2,.6,1,.08),dt("#ff3d8b"),2);H.position.y=.4,pt.add(H);for(let[Ot,Tt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let vt=c(new me(.16,.7,.16),dt(et),1.5);vt.position.set(Ot,-.55,Tt),vt.rotation.x=Tt>0?-.5:.5,pt.add(vt)}pt.rotation.y=Math.PI/2,Lt.push({horse:pt,ph:J*.8})}S(w,b),a.push(J=>{D.rotation.y=J*.6;for(let G of Lt)G.horse.position.y=2+Math.sin(J*2.2+G.ph)*.35}),y.rides.push({kind:"carousel",obj:w,pos:new k(b.x,b.y+6,b.z),r:T*1.45})}{let b=M.filter(J=>!J.used).sort((J,G)=>G.gap-J.gap)[0];b.used=!0;let w=new ne,T=15;w.scale.setScalar(1.5);let z=Bo("#ff3d3d","#ffffff",10,!1);o.push(z);let W=c(new te(1.6,2.6,T,16),dt("#ffffff",{map:z}));W.position.y=T/2,w.add(W);let D=c(new Ne(2.6,3.4,16),dt("#2e9bff"));D.position.y=T+1.7,w.add(D);let q=c(new te(.06,.06,2,6),dt("#ffffff"),1.5);q.position.y=T+4.2,w.add(q);let Z=c(new Qe(1.2,.7).translate(.6,0,0),dt("#ffd23f",{side:Be}),1.5);Z.position.y=T+4.8,w.add(Z);let it=[],xt=3.2;for(let J=0;J<=160;J++){let G=J/160,j=G*xt*Math.PI*2,ot=2.6+(1-G)*-.8+1.6;it.push(new k(Math.cos(j)*ot,T-1-G*(T-2),Math.sin(j)*ot))}let U=c(new Eo(new js(it),220,.55,8,!1),dt("#ffd23f"));U.scale.y=1,w.add(U);let Lt=c(new de(3,.3,2,2,.1),dt("#3ddc84"),2);Lt.position.set(it.at(-1).x+1,.15,it.at(-1).z),w.add(Lt),S(w,b),a.push(J=>{Z.rotation.y=Math.sin(J*3)*.4}),y.rides.push({kind:"helter",obj:w,pos:new k(b.x,b.y+12,b.z),r:6})}let B=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],I=[];[...M.filter(b=>!b.used),...u(13).filter((b,w)=>w%2===1)].slice(0,7).forEach((b,w)=>{let[T,z]=B[w%B.length],W=new ne,D=w%2?1:-1,q=c(new de(4.2,2.4,3,2,.2),dt("#fff6e0"));q.position.y=1.2,W.add(q);let Z=c(new de(4.4,1.1,.8,2,.15),dt(z));Z.position.set(0,.55,1.7),W.add(Z);let it=Bo("#ffffff",z,10);o.push(it);let xt=c(new me(4.8,.18,2.4),dt("#ffffff",{map:it}));xt.position.set(0,2.9,1.4),xt.rotation.x=.32,W.add(xt);for(let st of[-1,1]){let pt=c(new te(.09,.09,2.6,6),dt("#ffffff"),1.5);pt.position.set(st*2.2,1.6,2.4),W.add(pt)}let U=Dn(512,128,(st,pt,et)=>{st.fillStyle="#1a1420",Fe(st,0,0,pt,et,30),st.fill(),st.fillStyle=z,Fe(st,8,8,pt-16,et-16,24),st.fill(),Ye(st,T,pt/2,et/2+4,T.length>11?52:64,"#ffffff","#1a1420",.2)},o),Lt=he(new de(4.2,1.05,.3,2,.1),[dt(z),dt(z),dt(z),dt(z),dt("#ffffff",{map:U}),dt("#ffffff",{map:U})],{ol:2.5,olRef:30});if(Lt.position.set(0,3.7,.4),W.add(Lt),T==="CANDYFLOSS")for(let st=0;st<4;st++){let pt=c(new Ge(.32,1),dt("#ff9bd2"),1.5);pt.position.set(-1.4+st*.9,1.45,1.75),W.add(pt)}if(T==="HOOK-A-DUCK"){let st=c(new te(1.6,1.6,.6,20),dt("#57c7ff"),2);st.position.set(0,.3,3.6),W.add(st);let pt=new ne;pt.position.set(0,.7,3.6),W.add(pt);for(let et=0;et<6;et++){let rt=et/6*Math.PI*2,mt=c(new ce(.22,10,8),dt("#ffd23f"),1.5);mt.position.set(Math.cos(rt)*1.1,0,Math.sin(rt)*1.1);let Q=c(new ce(.14,8,6),dt("#ffd23f"),1.2);Q.position.set(0,.22,.12),mt.add(Q),pt.add(mt)}I.push(pt)}let J=e.anchors.nearestOnRibbon(b.x,b.z),G=Math.atan2(J[0]-b.x,J[1]-b.z),j=Math.min(b.gap*.3,7)*D,ot=S(W,{...b,x:b.x+b.tz*j,z:b.z-b.tx*j,y:t.heightAt(b.x+b.tz*j,b.z-b.tx*j)});ot.rotation.y=G+(D>0?0:Math.PI)*0}),a.push(b=>{for(let w of I)w.rotation.y=b*.8});{let b=[],w=[],T=[],z=[],W=[];for(let U of[-1,1]){let Lt=null;for(let J=v-10;J<=m+10;J+=9){let G=f(J),j=(G.gap/2-6)*U,ot=G.x+G.tz*j,st=G.z-G.tx*j,pt=t.heightAt(ot,st),et=new k(ot,pt+4.2,st),rt=c(new te(.08,.1,4.3,6),dt("#ffffff"),1.5);if(rt.position.set(ot,pt+2.1,st),r.add(rt),Lt)for(let mt=0;mt<=10;mt++){let Q=mt/10,gt=Lt.clone().lerp(et,Q);gt.y-=Math.sin(Q*Math.PI)*.7,b.push(gt),mt<10&&(mt%2?(w.push(gt.clone()),T.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(mt+Math.round(J))%4])):(z.push({v:gt.clone(),a:Math.atan2(-(et.z-Lt.z),et.x-Lt.x)}),W.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(mt+Math.round(J/9))%5])))}Lt=et}}let D=new Ee,q=new Ve(new ce(.16,8,6),new vn({color:16777215}),w.length);w.forEach((U,Lt)=>{D.position.copy(U),D.updateMatrix(),q.setMatrixAt(Lt,D.matrix),q.setColorAt(Lt,new $t(T[Lt]))}),r.add(q);let Z=new we;Z.setAttribute("position",new oe([-.32,0,0,.32,0,0,0,-.65,0],3)),Z.setAttribute("normal",new oe([0,0,1,0,0,1,0,0,1],3));let it=new Ve(Z,dt("#ffffff",{side:Be}),z.length);z.forEach((U,Lt)=>{D.position.copy(U.v),D.rotation.set(0,U.a,0),D.updateMatrix(),it.setMatrixAt(Lt,D.matrix),it.setColorAt(Lt,new $t(W[Lt]))}),r.add(it);let xt=[];for(let U=0;U+1<b.length;U++)b[U].distanceTo(b[U+1])<3&&xt.push(b[U],b[U+1]);r.add(new xs(new we().setFromPoints(xt),new Ui({color:3355443}))),a.push(U=>{q.material.color.setScalar(.85+.15*Math.sin(U*6))})}{let b=f(v-4),w=Dn(1024,256,(z,W,D)=>{z.fillStyle="#1a1420",Fe(z,0,0,W,D,60),z.fill(),z.fillStyle="#ff3d8b",Fe(z,10,10,W-20,D-20,52),z.fill(),Ye(z,"\u2605 FUNFAIR \u2605",W/2,D/2+6,120,"#ffe14d","#1a1420",.18)},o),T=he(new de(10,2.4,.4,2,.15),[dt("#ff3d8b"),dt("#ff3d8b"),dt("#ff3d8b"),dt("#ff3d8b"),dt("#ffffff",{map:w}),dt("#ffffff",{map:w})],{ol:3,olRef:30});T.position.set(b.x,b.y+7.5,b.z),T.rotation.y=Math.atan2(b.tx,b.tz)+Math.PI/2,r.add(T);for(let z of[-1,1]){let W=c(new te(.25,.3,7.6,8),dt("#ffd23f"));W.position.set(b.x+b.tz*4.5*z,b.y+3.8,b.z-b.tx*4.5*z),r.add(W)}}let R=[];for(let b=0;b<60;b++){let w=v+s()*(m-v),T=f(w),z=(s()-.5)*(T.gap-16),W=T.x+T.tz*z,D=T.z-T.tx*z;R.push({x:W,y:t.heightAt(W,D),z:D,yaw:s()*6.28})}function _(b){for(let w of a)w(b)}function x(){r.traverse(b=>{b.geometry&&b.geometry.dispose()});for(let b of o)b.dispose?.();i.remove(r)}return{group:r,update:_,dispose:x,anchors:y,crowd:R,at:f,s0:v,s1:m}}function bf(i,t,e,n,s,{camera:r}){let o=new ne;i.add(o);let a=[],l=t.sample(t.finishM+28),c=new k(l.tx,0,l.tz),h=new k(l.rx,0,l.rz),p=new k(l.x,t.heightAt(l.x,l.z),l.z),d=Math.atan2(c.x,c.z);o.position.copy(p),o.rotation.y=d;let f=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let w of f){let T=Dn(256,256,(W,D,q)=>{W.fillStyle="#2e6fe0",W.fillRect(0,0,D,q),W.fillStyle=w.col,W.fillRect(0,0,D,26),Ye(W,String(w.place),D/2,q/2+14,170,w.col,"#1a1420",.16)},a),z=he(new de(2.25,w.hgt,2,3,.12),[dt("#2e6fe0"),dt("#2e6fe0"),dt(w.col),dt("#2e6fe0"),dt("#ffffff",{map:T}),dt("#2e6fe0")],{ol:3.5,olRef:12});z.position.set(w.x,w.hgt/2,0),o.add(z),w.top=w.hgt}let g=Dn(1024,256,(w,T,z)=>{w.fillStyle="#1a1420",Fe(w,0,0,T,z,50),w.fill(),w.fillStyle="#ff3d8b",Fe(w,10,10,T-20,z-20,42),w.fill(),Ye(w,"MARKRUN CHAMPIONS",T/2,z/2+6,100,"#ffffff","#1a1420",.16)},a),v=he(new de(9,2.2,.3,2,.1),[dt("#ff3d8b"),dt("#ff3d8b"),dt("#ff3d8b"),dt("#ff3d8b"),dt("#ffffff",{map:g}),dt("#ffffff",{map:g})],{ol:3,olRef:14});v.position.set(0,4.6,-2.4),o.add(v);for(let w of[-1,1]){let T=he(new te(.14,.16,4.6,8),dt("#ffffff"),{ol:2,olRef:14});T.position.set(w*4.3,2.3,-2.4),o.add(T)}let m=s.length,u=[];for(let w of s){let T=n[w.runnerId];if(!T)continue;let z=f.find(q=>q.place===w.place),W=z?new k(z.x,z.top,.1):null,D;if(w.place===1?D=["celebrate","jump"]:w.place===2?D=["pose","flex"]:w.place===3?D=["celebrate","fist"]:w.place===m&&m>3?D=["celebrate","collapse"]:D=["celebrate","shrug"],!W){u.push({rr:T,o:w,pose:D});continue}S(T,W,D)}u.forEach((w,T)=>{let z=T%2?1:-1,W=Math.floor(T/2),D=w.pose[1]==="collapse",q=new k(z*(D?4.6:4.2+W*1.6),0,D?1.6:.6+W*.8);S(w.rr,q,w.pose,D?-z*Math.PI/2:0)});function S(w,T,z,W=0){let D=T.clone().applyAxisAngle(new k(0,1,0),d).add(p);T.y===0&&(D.y=t.heightAt(D.x,D.z)+.05),w.root.position.copy(D),w.root.rotation.set(0,d+W,0),w.set(...z),w.setPop(null)}let y=un(3),M=420,B=new Ve(new Qe(.16,.26),new vn({side:Be}),M),I=[],E=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let w=0;w<M;w++)I.push({x:(y()-.5)*14,y:y()*12,z:(y()-.5)*8,vy:1+y()*1.6,sp:y()*6,ph:y()*6.28}),B.setColorAt(w,new $t(E[w%E.length]));B.frustumCulled=!1,o.add(B);let R=new Ee,_=0;function x(w,T){_+=w;for(let Z=0;Z<M;Z++){let it=I[Z];it.y-=it.vy*w,it.y<0&&(it.y+=12),R.position.set(it.x+Math.sin(_*1.3+it.ph)*.5,it.y,it.z+Math.cos(_+it.ph)*.4),R.rotation.set(_*it.sp+it.ph,_*it.sp*.7,it.ph),R.updateMatrix(),B.setMatrixAt(Z,R.matrix)}B.instanceMatrix.needsUpdate=!0;let z=Math.sin(_*.18)*.4,W=15-Math.min(2.5,_*.2),D=new k(Math.sin(z)*W,3+Math.sin(_*.3)*.3,Math.cos(z)*W).applyAxisAngle(new k(0,1,0),d);r.position.copy(p).add(D);let q=new k(3.2,2.2,0).applyAxisAngle(new k(0,1,0),d).add(p);r.lookAt(q),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function b(){o.traverse(w=>{w.geometry&&w.geometry.dispose()}),B.material.dispose();for(let w of a)w.dispose?.();i.remove(o)}return{update:x,dispose:b,center:p}}var Le=(i,t)=>{i=i.index?i.toNonIndexed():i;let e=new $t(t).convertSRGBToLinear(),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Ie(s,3)),i.getAttribute("uv")&&i.deleteAttribute("uv"),i},en=(i,t,e,n,s=0,r=1.6)=>(i.scale(r,r,r),i.rotateY(s),i.translate(t,e,n),i);function Sf(i,t,e,n){let s=un(777),r=new ne;i.add(r);let o=[],a=[],l=(g,v)=>`lawn:${Math.floor(g/140)},${Math.floor(v/140)}`,c=(g,v,m,u=.8,S)=>a.push({x:g,y:t.heightAt(g,v),z:v,yaw:m,scale:u,colour:S,zone:l(g,v)}),{ribbonSamples:h}=e.anchors;function p(g,v,m){for(let u=0;u<40;u++){let S=h[Math.floor(s()*h.length)],y=s()*Math.PI*2,M=g+s()*(v-g),B=S[0]+Math.cos(y)*M,I=S[1]+Math.sin(y)*M;if(!(!e.inPark(B,I)||e.blocked(B,I,m+1)||!e.clearOf(B,I,m)||e.onPath(B,I,m+2)))return e.reserve(B,I,m),{x:B,z:I,y:t.heightAt(B,I),toPath:Math.atan2(S[0]-B,S[1]-I)}}return null}{let g=[],v=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],m=(I,E,R,_,x,b)=>{g.push(en(Le(new me(1.6,.2,1.6).translate(0,2,0),x),I,E,R,_));for(let[z,W]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])g.push(en(Le(new te(.08,.08,2,6).translate(z,1,W),"#ffffff"),I,E,R,_));g.push(en(Le(new Ne(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),I,E,R,_));let w=new me(.9,.12,3.3);w.rotateX(-.62),w.translate(0,1.05,2.1),g.push(en(Le(w,b),I,E,R,_));let T=new me(.8,.08,2.4);T.rotateX(1),T.translate(0,1,-1.3),g.push(en(Le(T,"#ffffff"),I,E,R,_))},u=(I,E,R,_,x)=>{for(let b of[-1.8,1.8])for(let w of[-.6,.6]){let T=new te(.08,.08,2.8,6);T.rotateX(w>0?.22:-.22),T.translate(b,1.35,w*.5),g.push(en(Le(T,x),I,E,R,_))}g.push(en(Le(new te(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),x),I,E,R,_));for(let b of[-.8,.8]){g.push(en(Le(new me(.6,.08,.35).translate(b,.75,0),"#22202c"),I,E,R,_));for(let w of[-.25,.25])g.push(en(Le(new te(.02,.02,1.9,4).translate(b+w,1.7,0),"#888888"),I,E,R,_))}},S=(I,E,R,_)=>{let x=new ce(1.6,8,5,0,Math.PI*2,0,Math.PI/2);g.push(en(Le(x,_),I,E,R)),g.push(en(Le(new te(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),I,E,R))},y=(I,E,R,_,x)=>{g.push(en(Le(new te(1.5,1.5,.25,16).translate(0,.35,0),_),I,E,R)),g.push(en(Le(new te(.1,.1,1,6).translate(0,.9,0),x),I,E,R)),g.push(en(Le(new Oe(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),x),I,E,R))},M=(I,E,R,_,x)=>{g.push(en(Le(new ce(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),x),I,E,R,_)),g.push(en(Le(new ce(.3,8,6).translate(0,1.4,.55),x),I,E,R,_)),g.push(en(Le(new te(.12,.12,.6,6).translate(0,.3,0),"#888888"),I,E,R,_))},B=[m,u,S,y,M];for(let I of n.features){if(I.kind!=="playground"||!I.closed)continue;let E=bn(I.pts),R=(E[2]-E[0])*(E[3]-E[1]),_=Math.max(1,Math.min(9,Math.round(R/380))),x=[];for(let b=0,w=0;b<_&&w<80;w++){let T=E[0]+3+s()*(E[2]-E[0]-6),z=E[1]+3+s()*(E[3]-E[1]-6);if(!bs(I.pts,T,z)||x.some(xt=>Math.hypot(xt[0]-T,xt[1]-z)<8.5))continue;x.push([T,z]),b++;let W=t.heightAt(T,z)-.05,D=s()*6.28,q=v[Math.floor(s()*v.length)],Z=v[Math.floor(s()*v.length)],it=B[(b+x.length+Math.floor(s()*5))%B.length];it===m||it===u||it===M?it(T,W,z,D,q,Z):it(T,W,z,q,Z),s()<.6&&c(T+2.5,z+1.5,s()*6,.55)}}if(g.length){let I=he(ke(g),dt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(I)}}{let g=qe(64,64,(R,_,x)=>{for(let b=0;b<6;b++)for(let w=0;w<6;w++)R.fillStyle=(b+w)%2?"#ffffff":"#c8c8c8",R.fillRect(b*_/6,w*x/6,_/6+1,x/6+1)});o.push(g);let v=new Qe(2.8,2.2);v.rotateX(-Math.PI/2);let m=[],u=[],S=[],y=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let R=0;R<90;R++){let _=p(12,70,3);if(!_)continue;let x=s()*6.28;m.push({x:_.x,y:_.y+.06,z:_.z,ry:x}),u.push(y[R%y.length]),S.push({x:_.x+Math.cos(x)*.7,y:_.y+.05,z:_.z-Math.sin(x)*.7,ry:x});let b=1+Math.floor(s()*3);for(let w=0;w<b;w++){let T=x+w/b*Math.PI*2+.5,z=_.x+Math.cos(T)*.9,W=_.z-Math.sin(T)*.9;c(z,W,_.toPath+(s()-.5),.62+s()*.15)}}let M=new Ve(v,dt("#ffffff",{map:g,polygonOffset:!0,polygonOffsetFactor:-1}),m.length),B=new Ee;m.forEach((R,_)=>{B.position.set(R.x,R.y,R.z),B.rotation.set(0,R.ry,0),B.updateMatrix(),M.setMatrixAt(_,B.matrix),M.setColorAt(_,new $t(u[_]))}),M.receiveShadow=!0,M.computeBoundingSphere(),r.add(M);let I=ke([Le(new de(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Le(new Oe(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),E=new Ve(I,dt("#ffffff",{vertexColors:!0}),S.length);S.forEach((R,_)=>{B.position.set(R.x,R.y,R.z),B.rotation.set(0,R.ry,0),B.updateMatrix(),E.setMatrixAt(_,B.matrix)}),E.castShadow=!0,E.computeBoundingSphere(),Ln(E,1.6,void 0,20),r.add(E)}{let g=ke([new In(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new ce(.22,10,8).translate(0,.72,.42),new ce(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new ce(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new ce(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([R,_])=>new te(.06,.06,.32,6).translate(R,.16,_)),new te(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(R=>R.index?R.toNonIndexed():R).map(R=>(R.deleteAttribute("uv"),R))),v=ke([Le(new ce(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Le(new ce(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([R,_])=>Le(new Oe(.2,.06,6,12).rotateY(Math.PI/2).translate(R,.22,_),"#22202c")),Le(new te(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),m=[],u=[],S=[],y=[],M=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let R=0;R<64;R++){let _=p(8,60,1.6);if(!_)continue;let x=s()*6.28;c(_.x,_.z,x,.82);let b=Math.sin(x),w=Math.cos(x);R%4===3?(S.push({x:_.x+b*1.4,y:_.y,z:_.z+w*1.4,ry:x,s:1}),y.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][R%4])):(m.push({x:_.x+b*1.6+w*.8,y:_.y,z:_.z+w*1.6-b*.8,ry:x+(s()-.5)*.8,s:.8+s()*.6}),u.push(M[Math.floor(s()*M.length)]))}let B=new Ee,I=(R,_,x,b)=>{let w=new Ve(R,_,x.length);return x.forEach((T,z)=>{B.position.set(T.x,T.y,T.z),B.rotation.set(0,T.ry,0),B.scale.setScalar(T.s),B.updateMatrix(),w.setMatrixAt(z,B.matrix),b&&w.setColorAt(z,new $t(b[z]))}),w.castShadow=!0,w.receiveShadow=!0,w.computeBoundingSphere(),Ln(w,2,void 0,18),r.add(w),w},E=m.length?I(g,dt("#ffffff"),m,u):null;S.length&&I(v,dt("#ffffff",{vertexColors:!0}),S,y)}{let g=[],v=[],m=[],u=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let E=0;E<26;E++){let R=p(9,40,3.2);if(!R)continue;let _=2.2+s()*.8;g.push({x:R.x,y:R.y-.05,z:R.z,s:_});let x=[u[E%u.length],u[(E+2)%u.length]];for(let b=0;b<60;b++){let w=s()*6.28,T=Math.sqrt(s())*(_-.25);v.push({x:R.x+Math.cos(w)*T,y:R.y+.25,z:R.z+Math.sin(w)*T,s:.8+s()*.5}),m.push(x[b%2])}}let S=new Ee,y=ke([Le(new te(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Le(new Oe(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),M=new Ve(y,dt("#ffffff",{vertexColors:!0}),g.length);g.forEach((E,R)=>{S.position.set(E.x,E.y,E.z),S.scale.set(E.s,1,E.s),S.updateMatrix(),M.setMatrixAt(R,S.matrix)}),M.receiveShadow=!0,M.computeBoundingSphere(),Ln(M,1.6,void 0,20),r.add(M);let B=new Ge(.24,0),I=new Ve(B,dt("#ffffff",{flatShading:!0}),v.length);S.scale.setScalar(1),v.forEach((E,R)=>{S.position.set(E.x,E.y,E.z),S.scale.setScalar(E.s),S.updateMatrix(),I.setMatrixAt(R,S.matrix),I.setColorAt(R,new $t(m[R]))}),I.computeBoundingSphere(),r.add(I)}{let g=t.sample(55),v=-1,m=Pe/2+9,u=g.x+g.rx*m*v,S=g.z+g.rz*m*v;e.blocked(u,S,3)&&(u=g.x-g.rx*m*v,S=g.z-g.rz*m*v);let y=new ne,M=qe(128,16,(z,W,D)=>{for(let q=0;q<8;q++)z.fillStyle=q%2?"#fff":"#3a9d5d",z.fillRect(q*16,0,16,D)});o.push(M),y.add(he(new de(3.2,1.6,1.8,3,.25),dt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let B=he(new de(3.4,.15,2,2,.05),dt("#f4e3c0"),{ol:2,olRef:20});B.position.y=2,y.add(B);let I=he(new me(3.8,.15,2.4),dt("#ffffff",{map:M}),{ol:2.5,olRef:20});I.position.y=3.2,y.add(I);for(let z of[-1.6,1.6]){let W=he(new te(.06,.06,1.2,6),dt("#ffffff"),{ol:1.5});W.position.set(z,2.6,.9),y.add(W)}for(let z of[-1.1,1.1]){let W=he(new te(.4,.4,.2,14).rotateZ(Math.PI/2),dt("#22202c"),{ol:2});W.position.set(z,.4,.95),y.add(W);let D=W.clone();D.position.z=-.95,y.add(D)}let E=he(new te(.75,.55,1.3,16),dt("#ffffff"),{ol:3,olRef:20});E.position.y=4,y.add(E);let R=he(new te(.82,.82,.22,16),dt("#5a3a24"),{ol:2.5,olRef:20});R.position.y=4.75,y.add(R);let _=he(new te(.72,.62,.45,16),dt("#c98a4a"),{ol:2,olRef:20});_.position.y=3.95,y.add(_);let x=Dn(512,128,(z,W,D)=>{z.fillStyle="#1a1420",Fe(z,0,0,W,D,28),z.fill(),z.fillStyle="#ffd23f",Fe(z,6,6,W-12,D-12,22),z.fill(),Ye(z,"FLAT WHITES",W/2,D/2+4,62,"#ffffff","#1a1420",.2)},o),b=new Te(new Qe(2.8,.7),dt("#ffffff",{map:x}));b.position.set(0,1.4,.92),y.add(b);let w=b.clone();w.rotation.y=Math.PI,w.position.z=-.92,y.add(w);let T=Math.atan2(g.x-u,g.z-S);y.position.set(u,t.heightAt(u,S),S),y.rotation.y=T,r.add(y);for(let z=0;z<5;z++){let W=u+Math.sin(T)*(2.2+z*1.1)+Math.cos(T)*(z%2?.3:-.3),D=S+Math.cos(T)*(2.2+z*1.1);c(W,D,T+Math.PI,.8)}e.anchors.coffeeCart=y}function d(){}function f(){r.traverse(g=>{g.geometry&&g.geometry.dispose()});for(let g of o)g.dispose?.();i.remove(r)}return{group:r,crowd:a,update:d,dispose:f}}var ko=8.5;function cc(i,t={}){let{course:e,park:n,round:s,plan:r}=t,o=t.backedBy||{},a=Object.keys(o).filter(C=>(o[C]||[]).length),l=[...s?.runners||[]].sort((C,V)=>(C.lane??0)-(V.lane??0)),c=!!r?.runners?.some(C=>C.diversions&&C.diversions.length),h=new ao({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});h.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),h.outputColorSpace=Je,h.toneMapping=Bn,h.shadowMap.enabled=!0,h.shadowMap.type=Xl;let p=h.domElement;p.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(p);let d=new co;d.fog=new lo(13496063,700,3200);let f=new an(45,16/9,.3,9e3),g=new Ro(14676223,9420912,1.45);d.add(g);let v=new Co(16774109,2.3),m=new k(-.45,.82,.38).normalize();v.castShadow=!0,v.shadow.mapSize.set(2048,2048),v.shadow.bias=-4e-4,v.shadow.normalBias=.03,v.shadow.radius=3,d.add(v),d.add(v.target);let u=Qh(e,n,r),S=nf(d,u,{course:e,park:n,hasFunfair:c}),y=null;if(c){let C=r.runners.find(K=>K.diversions?.length).diversions[0],V=u.diversions[r.runners.find(K=>K.diversions?.length).id][0];y=Mf(d,u,S,V||C)}let M=af(u,S.anchors.crowdZones,5,S.onPath,S.blocked),B=Sf(d,u,S,n);M.push(...B.crowd),y&&M.push(...y.crowd.map(C=>({...C,zone:"fair"})));let I=new Map;for(let C of M){let V=C.zone??"x";I.has(V)||I.set(V,[]),I.get(V).push(C)}let E=[...I.values()].map(C=>of(d,C)),R={update:(...C)=>E.forEach(V=>V.update(...C)),dispose:()=>E.forEach(C=>C.dispose())},_=pf(r,u,l),x={};for(let C of l){let V=ff(C);x[C.id]=V,d.add(V.root)}let b=l.map(C=>C.id),w=Object.fromEntries(l.map(C=>[C.id,C])),T=vf(i,{runners:l,backedBy:o,course:e,park:n,C:u}),z=mf({plan:r,sim:_,backedIds:a,hasDiversion:c}),W=gf({camera:f,C:u,sim:_,world:S,funfair:y}),D=null,q=[];for(let C of r.events||[])q.push({at:C.broadcastS,evt:{...C,kind:"event"}});for(let C of r.commentary||[])q.push({at:C.broadcastS,evt:{...C,kind:"commentary"}});q.sort((C,V)=>C.at-V.at);let Z="idle",it=!1,xt=!1,U=-ko,Lt=0,J=null,G=null,j=0,ot=!1,st=!1,pt=0,et=0,rt=!1,mt=Math.max(.05,Number(t.speed)||1),Q=null,gt=0,H=new Set;function Ot(){let C=i.clientWidth||window.innerWidth,V=i.clientHeight||window.innerHeight;h.setSize(C,V,!1),f.aspect=C/V,f.updateProjectionMatrix(),rc.uRes.value.set(C*h.getPixelRatio(),V*h.getPixelRatio())}let Tt=typeof ResizeObserver<"u"?new ResizeObserver(Ot):null;Tt?.observe(i),window.addEventListener("resize",Ot),Ot();let vt={};{let C=b.length;b.forEach((V,K)=>{let yt=(K-(C-1)/2)*Math.min(1.25,(Pe-1.6)/Math.max(1,C-1)),Pt=u.sample(0);vt[V]={x:Pt.x+Pt.rx*yt-Pt.tx*1.2,z:Pt.z+Pt.rz*yt-Pt.tz*1.2,yaw:Math.atan2(Pt.tx,Pt.tz)},vt[V].y=u.heightAt(vt[V].x,vt[V].z)+.16})}function Nt(C="idle"){for(let V of b){let K=vt[V],yt=x[V];yt.root.position.set(K.x,K.y,K.z),yt.root.rotation.set(0,K.yaw,0),C&&yt.set(C),yt.setPop(null)}}Nt();let nt=(C,V)=>C===1?"jump":C===2||C===3?"fist":C===V?"collapse":"kneel";function zt(C,V){let K=_.stateAt(Math.max(0,C)),yt=b.length;for(let Pt of b){let Ut=K.byId[Pt],Et=x[Pt];if(C<0)continue;Et.root.position.set(Ut.x,Ut.y,Ut.z);let Zt=Math.atan2(Ut.tx,Ut.tz)+(Ut.finished&&Ut.post>2.4&&!(Ut.place>3&&Ut.post<4)?Math.PI*(Ut.place%2?1:-1)*.92:0),ee=Et.root.rotation.y,ie=Zt-ee;for(;ie>Math.PI;)ie-=2*Math.PI;for(;ie<-Math.PI;)ie+=2*Math.PI;Et.root.rotation.y=ee+ie*Math.min(1,V*10);let se={speed:Ut.vRace,rate:K.rate,slope:Ut.slope},_e=u.diversions[Pt]?.[0];if(_e&&Et.setProp("floss",Ut.m>_e.toM-20?Math.max(.25,1-(Ut.m-_e.toM)/3500):0),Ut.finished){let pe=Ut.place;Ut.post<1.6?(Et.set("run"),se.speed=3,se.rate=1.2):pe>3&&Ut.post<4?Et.set("trudge"):Et.set("celebrate",nt(pe,yt)),Et.setPop(null)}else if(Ut.div>.3){Et.set("distracted");let pe=y?.anchors.rides.reduce((tn,$e)=>!tn||$e.pos.distanceToSquared(Et.root.position)<tn.pos.distanceToSquared(Et.root.position)?$e:tn,null);if(pe){let $e=Math.atan2(pe.pos.x-Ut.x,pe.pos.z-Ut.z)-Et.root.rotation.y;for(;$e>Math.PI;)$e-=2*Math.PI;for(;$e<-Math.PI;)$e+=2*Math.PI;se.lookYaw=Math.max(-1.3,Math.min(1.3,$e))}Et.setPop(["!","heart","floss"][Math.floor((Ut.m-Ut.divInfo.fromM)/120)%3])}else{Et.set("run"),Et.setPop(null);let pe=u.geoOf(Ut.m);se.effort=Ut.m>4300?.4+(Ut.m-4300)/700*.5:pe>1700&&pe<2060?.7:.1}Et.update(V,se)}}let N=new k,L=null,ut=-1,Rt=()=>{if(ut!==Lt||!L){let C=p.getBoundingClientRect();L=[...T.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(V=>{let K=V.getBoundingClientRect();return{left:K.left-C.left,right:K.right-C.left,top:K.top-C.top,bottom:(V.classList.contains("mr-tower")?K.top+V.querySelectorAll(".mr-row").length*((V.querySelector(".mr-row")?.offsetHeight||40)+6):K.bottom)-C.top}}),ut=Lt}return L};function Dt(C,V=!0){let K=p.clientWidth,yt=p.clientHeight,Pt=[];for(let Et of b){let Zt=x[Et];N.set(Zt.root.position.x,Zt.root.position.y+Zt.height+.55,Zt.root.position.z);let ee=N.distanceTo(f.position);N.project(f);let ie=V&&N.z<1&&N.z>-1&&Math.abs(N.x)<.95&&N.y<.82&&N.y>-.62&&ee>9.5&&ee<150,se=(N.x*.5+.5)*K,_e=(-N.y*.5+.5)*yt;ie&&Rt().some(pe=>se>pe.left-40&&se<pe.right+40&&_e>pe.top-10&&_e<pe.bottom+40)&&(ie=!1),Pt.push({id:Et,x:(N.x*.5+.5)*K,y:(-N.y*.5+.5)*yt,visible:ie,pos:C?C.order.indexOf(Et)+1:0,scale:Math.max(.7,Math.min(1.15,30/ee)),dist:ee})}Pt.sort((Et,Zt)=>Et.dist-Zt.dist);let Ut=[];for(let Et of Pt){if(!Et.visible)continue;let Zt=(Es(w[Et.id]).length*12+60)*Et.scale;for(let ee=0;ee<8;ee++){let ie=Ut.find(se=>Math.abs(se.x-Et.x)<(se.tw+Zt)/2&&Math.abs(se.y-Et.y)<30*Math.max(se.scale,Et.scale));if(!ie)break;Et.y=ie.y-31*Math.max(ie.scale,Et.scale)}Et.tw=Zt,Ut.push(Et)}return C?{raceS:C.raceS,leaderM:C.leader.m,tags:Pt,order:C.order.map(Et=>({id:Et,gapText:C.byId[Et].gapText,finished:C.byId[Et].finished})),dots:C.order.map((Et,Zt)=>({x:C.byId[Et].x,z:C.byId[Et].z,colour:w[Et].colour.primary,lead:Zt===0,focus:W.shot?.ids?.includes(Et)}))}:Z!=="race"?{tags:Pt}:{tags:Pt,raceS:0,leaderM:0,order:b.map(Et=>({id:Et,gapText:"",finished:!1})),dots:b.map(Et=>({x:vt[Et].x,z:vt[Et].z,colour:w[Et].colour.primary}))}}function tt(C,V){let K=Math.max(30,Math.min(220,V)),yt=v.shadow.camera;yt.right!==K&&(yt.left=-K,yt.right=K,yt.top=K,yt.bottom=-K,yt.near=1,yt.far=900,yt.updateProjectionMatrix());let Pt=2*K/v.shadow.mapSize.x,Ut=Math.round(C.x/Pt)*Pt,Et=Math.round(C.z/Pt)*Pt;v.target.position.set(Ut,C.y,Et),v.position.set(Ut+m.x*400,C.y+m.y*400,Et+m.z*400)}let ct=["wave","flex","point","stretch","spin","bow"];function lt(C,V){let K=[...C.personality||C.id].reduce((yt,Pt)=>yt+Pt.charCodeAt(0),V);return ct[K%ct.length]}function _t(C,V={}){Z="intro",T.setDim(!0),T.clearBanner(),T.photo(!1),T.results(null),Yt(),T.market(!1),Q=null,it=!1,p.style.filter="",Nt("idle");let K=V.perRunnerS??t.introPerRunnerS??4.2,yt=V.flyoverS??7;return G={t:0,idx:-1,per:K,fly:yt,onDone:C,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:yt,perRunnerS:K,runners:b.slice()}}function St(C){let V=G;if(!V)return;V.t+=C;let K=vt;if(V.idx===-1){!V.title&&V.t>.8&&(V.title=!0,At(!0));let se=Math.min(1,V.t/V.fly),_e=lc(se),pe=u.sample(0),tn=new k(170,0,-40),$e=2.2-_e*2,vi=520-_e*470,xn=new k(tn.x+Math.cos($e)*vi,190-_e*170,tn.z+Math.sin($e)*vi),Ho=new k(pe.x+pe.tx*22+pe.rx*10,pe.y+9,pe.z+pe.tz*22+pe.rz*10);xn.lerp(Ho,_e*_e);let F=tn.clone().setY(15).lerp(new k(pe.x,pe.y+1,pe.z),Math.min(1,_e*1.2));f.position.copy(xn),f.lookAt(F),$(50),se>=1&&Ct();return}if(V.group){let se=u.sample(0),_e=(V.t-V.segStart)/3;if(f.position.set(se.x+se.tx*(9+_e*2)+se.rx*2,se.y+2.2+_e*.6,se.z+se.tz*(9+_e*2)+se.rz*2),f.lookAt(se.x,se.y+1.3,se.z),$(46),_e>=1&&!V.done){V.done=!0,T.introCard(null);let pe=V.onDone;G=null,Z="idle",pe?.()}return}let yt=b[V.idx],Pt=K[yt],Ut=V.t-V.segStart,Et=new k(Math.sin(Pt.yaw),0,Math.cos(Pt.yaw)),Zt=new k(-Et.z,0,Et.x),ee=x[yt].height,ie=3.2+ee*.6-Math.min(.6,Ut*.12);f.position.set(Pt.x+Et.x*ie+Zt.x*.9,Pt.y+ee*.62,Pt.z+Et.z*ie+Zt.z*.9),f.lookAt(Pt.x-Zt.x*1.25,Pt.y+ee*.55,Pt.z-Zt.z*1.25),$(40),!V.waiting&&Ut>=V.per&&Ct(),V.waiting==="released"&&Ut>=V.minSeg&&Ct()}function At(C){let V=s||{};T.titleCard(C,{title:V.title||"MARKRUN",kicker:V.number?`ROUND ${V.number}`:"LIVE FROM FINSBURY PARK",theme:V.theme?typeof V.theme=="string"?V.theme:V.theme.label||V.theme.name||"":""})}function Ct(){let C=G;C.idx===-1&&At(!1),C.idx++,C.segStart=C.t;for(let Pt of b)x[Pt].set("idle");if(C.idx>=b.length){C.group=!0;for(let Pt of b)x[Pt].set("pose","point");T.introCard(null),setTimeout(()=>{},0);for(let Pt of b)x[Pt].set("wave");return}let V=b[C.idx];x[V].set(lt(w[V],C.idx)==="wave"?"wave":"pose",lt(w[V],C.idx)),t.introCards!==!1&&T.introCard(w[V]),C.waiting=!1;let yt=t.onIntroRunner?.(V,C.idx);yt&&typeof yt.then=="function"&&(C.waiting=!0,yt.then(()=>{G===C&&(C.waiting="released")},()=>{G===C&&(C.waiting="released")}))}function kt(C,V){Z="race",T.setDim(!1),T.results(null),Yt(),G=null,T.introCard(null),T.titleCard(!1),T.market(!1),Q=null,it=!1,p.style.filter="",U=-ko,pt=0,et=0,j=0,ot=!1,st=!1,H.clear(),rt=!!t.skipRaceTitle,T.setDimTop(!1),J={onEvent:C,onDone:V},Nt("idle"),W.reset()}let Gt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function Vt(C){let V=K=>w[K]?.nickname||K;switch(C.type){case"lead_change":return["LEAD CHANGE!",`${V(C.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(C.by)&&!a.includes(C.on)&&_.stateAt(C.broadcastS).order.indexOf(C.by)>1?null:["OVERTAKE!",`${V(C.by)} passes ${V(C.on)}`,"#2e6fe0"];case"hill":return[C.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return H.has("div")?null:(H.add("div"),["DISTRACTED!",`${V(C.who)} has spotted the funfair`,"#b04bff"]);case"finish":return C.place===1&&!_.photoFinish?["WINNER!",V(C.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${V(C.who)} makes a break`,"#ff3d8b"];default:return null}}function re(C){if(j>0){if(j-=C,j<=0){T.photo(!1),p.style.filter="",S.anchors.finishArch.visible=!0,W.reset();let K=_.finishOrder[0];T.showBanner("WINNER!",w[K]?.nickname||K,"#ffb000",2.6)}return}let V=U;for(U+=C,U<-4.2&&!rt&&(rt=!0,At(!0),T.setDimTop(!0)),U>=-3.6&&rt===!0&&(rt="done",At(!1),T.setDimTop(!1));et<Gt.length&&U>=Gt[et][0];){let[K,yt]=Gt[et++];if(T.countdown(yt),J?.onEvent?.({kind:"countdown",n:yt==="GO!"?0:Number(yt),text:yt,broadcastS:K}),K===-3)for(let Pt of b)x[Pt].set("ready")}for(;pt<q.length&&U>=q[pt].at;){let K=q[pt++].evt;try{J?.onEvent?.(K)}catch(yt){console.error(yt)}if(K.kind==="event"){let yt=Vt(K);yt&&T.showBanner(...yt)}}if(_.photoFinish&&!ot&&U>=_.firstFinishB){ot=!0,U=_.firstFinishB,j=t.photoFreezeS??2.8;{let[K,yt]=_.finishOrder;T.photo(!0,`${Es(w[K])} or ${Es(w[yt])}? Checking the camera...`)}p.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",J?.onEvent?.({kind:"photo_finish",broadcastS:U,ids:_.finishOrder.slice(0,2)})}!st&&U>=_.lastFinishB+3.5&&(st=!0,J?.onDone?.())}function Yt(){D&&(D.dispose(),D=null)}function A(C){Z="podium",T.setDim(!0),T.clearBanner(),G=null,T.titleCard(!1),T.market(!1),Q=null,it=!1,p.style.filter="",T.photo(!1),Yt();let V=C?.finishOrder?.length?[...C.finishOrder].sort((K,yt)=>K.place-yt.place):_.finishOrder.map((K,yt)=>({runnerId:K,place:yt+1,officialS:_.byId[K].officialS,timeText:zo(_.byId[K].officialS)}));D=bf(d,u,S,x,V,{camera:f}),t.podiumCard!==!1&&T.results(V.map(K=>({place:K.place,nickname:w[K.runnerId]?.nickname||K.runnerId,colour:w[K.runnerId]?.colour.primary||"#888",timeText:K.timeText||zo(K.officialS)})))}let P=performance.now(),Y=0,O={frames:0,acc:0,fps:0};function $(C){Math.abs(f.fov-C)>.01&&(f.fov=C,f.updateProjectionMatrix())}function X(C,V=!1){Lt+=C;let K=null;it||(Z==="intro"&&St(C),Z==="race"&&re(C));let yt=it?0:C;if(Z==="race"){if(j>0){let Et=S.anchors.finish;S.anchors.finishArch.visible=!1,f.position.set(Et.x+Et.rx*9-Et.tx*.6,Et.y+6.4,Et.z+Et.rz*9-Et.tz*.6),f.lookAt(Et.x-Et.rx*.6-Et.tx*.6,Et.y+.8,Et.z-Et.rz*.6-Et.tz*.6),$(42),f.updateMatrixWorld();let Zt=new k(Et.x+Et.rx*3,Et.y+.05,Et.z+Et.rz*3).project(f),ee=new k(Et.x-Et.rx*3,Et.y+.05,Et.z-Et.rz*3).project(f);T.photoLine([(Zt.x*.5+.5)*p.clientWidth,(-Zt.y*.5+.5)*p.clientHeight],[(ee.x*.5+.5)*p.clientWidth,(-ee.y*.5+.5)*p.clientHeight])}else if(it&&Q!=null){Q+=C;let Et=_.stateAt(Math.max(0,U)),Zt=Et.byId[Et.order[0]],ee=Et.order.slice(0,3).map(xn=>Et.byId[xn]).filter(xn=>Math.abs(xn.m-Zt.m)<25),ie=new k;for(let xn of ee)ie.add(new k(xn.x,xn.y,xn.z));ie.divideScalar(Math.max(1,ee.length)),gt||(gt=Math.atan2(f.position.x-ie.x,f.position.z-ie.z));let se=gt+Q*.12,_e=10+Math.min(25,Zt.m-ee.at(-1).m)*.4,pe=Math.min(1,Q/1.2),tn=pe*pe*(3-2*pe),$e=ie.x+Math.sin(se)*_e,vi=ie.z+Math.cos(se)*_e;f.position.set($e,Math.max(ie.y+3+tn*2,u.heightAt($e,vi)+2.5),vi),f.lookAt(ie.x,ie.y+2.3,ie.z),$(44)}else W.update(U,yt,z);if(K=U>=0?_.stateAt(U):null,U<0)for(let Et of b)x[Et].update(yt,{});else zt(U,j>0?0:yt);let Ut=W.shot?.type;tt(W.cam.look,Ut==="drone"||Ut==="blimp"||Ut==="heli"?160:45)}else if(Z==="podium"&&D){D.update(yt,Lt);for(let Ut of b)x[Ut].update(yt,{});tt(D.center,40)}else{for(let Ut of b)x[Ut].update(yt,{});if(Z==="idle"){let Ut=u.sample(0),Et=Lt*.12;f.position.set(Ut.x+Math.sin(Et)*14,Ut.y+4.5,Ut.z+Math.cos(Et)*14),f.lookAt(Ut.x,Ut.y+1.2,Ut.z),$(45)}tt(new k(vt[b[0]]?.x??0,0,vt[b[0]]?.z??0),Z==="intro"&&G?.idx===-1?160:40)}S.update(Lt),y?.update(Lt);let Pt=b.map(Ut=>x[Ut].root.position);R.update(Lt,f.position,Pt,Z==="podium"?.9:null),T.update(C,Z==="race"?Dt(K,U>-1&&Q==null):Dt(null,!1)),V||h.render(d,f)}function at(C){if(xt)return;Y=requestAnimationFrame(at);let V=Math.min(mt>1?.25:.1,(C-P)/1e3);P=C,O.frames++,O.acc+=V,O.acc>1&&(O.fps=O.frames/O.acc,O.frames=0,O.acc=0);let K=V*mt;for(;K>1e-6;){let yt=Math.min(K,.1);X(yt,K-yt>1e-6),K-=yt}}t.manualLoop||(Y=requestAnimationFrame(at));function It(){xt=!0,cancelAnimationFrame(Y),Tt?.disconnect(),window.removeEventListener("resize",Ot),Yt();for(let C of b)d.remove(x[C].root),x[C].dispose();R.dispose(),y?.dispose(),B.dispose(),S.dispose(),T.dispose(),d.traverse(C=>{C.geometry&&C.geometry.dispose()}),hf(),ef(),h.dispose(),h.forceContextLoss?.(),p.remove()}let wt={seek(C,V=1.2){Z="race",T.setDim(!1),G=null,Yt(),J=J||{},T.introCard(null),T.results(null),T.photo(!1),p.style.filter="",W.reset();let K=Math.round(V*30);for(let yt=K;yt>=0;yt--){if(U=C-yt/30,pt=q.findIndex(Pt=>Pt.at>U),pt<0&&(pt=q.length),et=Gt.findIndex(Pt=>Pt[0]>U),et<0&&(et=Gt.length),ot=U>=_.firstFinishB,st=U>=_.lastFinishB+3.5,j=0,U<-3)for(let Pt of b)x[Pt].set("idle");else if(U<0)for(let Pt of b)x[Pt].set("ready");if(yt>0)if(W.update(U,1/30,z),U>=0)zt(U,1/30);else for(let Pt of b)x[Pt].update(1/30,{})}it=!0,X(0)},introAt(C,V=1.5){if(_t(()=>{},{}),it=!1,C<0){G.t=V,St(0),X(0),it=!0;return}for(G.t=G.fly,St(0);G&&G.idx<C;)G.t=G.segStart+G.per+.01,St(0);for(let K=0;K<V*30;K++){St(1/30);for(let yt of b)x[yt].update(1/30,{})}it=!0,X(0)},podiumAt(C=3){T.introCard(null),A(null);for(let V=0;V<C*30;V++){D.update(1/30,V/30);for(let K of b)x[K].update(1/30,{})}it=!0,X(0)},photoAt(){this.seek(_.firstFinishB-.05),it=!1,ot=!1;for(let C=0;C<3;C++)X(1/30);it=!0,X(0)},render(){X(0)},unpause(){it=!1},lookFrom(C,V,K,yt,Pt,Ut,Et=45){Z="debugcam",f.position.set(C,V,K),f.lookAt(yt,Pt,Ut),$(Et),T.setDim(!0),h.render(d,f)},step(C,V=!0){X(C,!V)},get mode(){return Z},get b(){return U},shots:z,sim:_,C:u,director:W,renderer:h,scene:d,camera:f,info:()=>h.info,fps:()=>O.fps};return{playIntro:_t,playRace:kt,showPodium:A,setPaused(C,{market:V=!0,marketText:K}={}){C=!!C,C!==it&&(it=C,Z==="race"&&j<=0&&t.marketOnPause!==!1&&V&&(C?(Q=0,gt=0,T.market(!0,K??t.marketText??"Place your halfway bets!"),p.style.filter="saturate(1.2) contrast(1.06)"):(Q=null,T.market(!1),p.style.filter="",W.reset())))},setSpeed(C){mt=Math.max(.05,Number(C)||1)},dispose:It,hudRoot:T.root,get broadcastTime(){return U},get durationS(){return ko+_.lastFinishB+3.5},preRollS:ko,_debug:wt}}var Un=new URLSearchParams(location.search);async function hc(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function bx(){let i=Un.get("fixture"),[t,e,n]=await Promise.all([hc("/data/course/course.json"),hc("/data/course/park.json"),hc(i?`/client/tv/race/fixtures/${i}.json`:"/data/fixtures/round.json")]);Un.get("shot")&&document.body.classList.add("shot");let s={};Un.get("backed")!=null?Un.get("backed").split(",").filter(Boolean).forEach((c,h)=>s[c]=[h%2?"Mrs M":"Mark"]):Object.assign(s,{r2:["Mark"],r4:["Mrs M"],r1:["Mark","Mrs M"]});let r=document.getElementById("sub"),o=cc(document.getElementById("stage"),{course:t,park:e,round:n.public,plan:n.racePlan,backedBy:s,speed:Number(Un.get("speed"))||1,preserveDrawingBuffer:!!Un.get("shot"),manualLoop:!!Un.get("shot"),onIntroRunner:c=>{let h=n.public.runners.find(p=>p.id===c);r.textContent=`${h.nickname} - ${h.tagline}`}});window.view=o,window.__create=cc,window.__data={course:t,park:e,round:n};let a=c=>{c.kind==="commentary"&&(r.textContent=c.text),c.kind==="countdown"&&(r.textContent=c.text)},l={intro:()=>o.playIntro(()=>{r.textContent="(betting would happen here)",Un.get("auto")!=="0"&&setTimeout(l.race,1500)}),race:()=>o.playRace(a,()=>{r.textContent="Race over",setTimeout(l.podium,2500)}),podium:()=>o.showPodium(null),pause:(()=>{let c=!1;return()=>o.setPaused(c=!c)})()};document.getElementById("ctl").addEventListener("click",c=>{let h=c.target.dataset?.a;h&&l[h]()}),Un.get("shot")||setInterval(()=>{document.getElementById("fps").textContent=`${o._debug.fps().toFixed(0)} fps`},1e3),Un.get("auto")!=="0"&&!Un.get("shot")&&l.intro(),window.__ready=!0}bx().catch(i=>{console.error(i),document.getElementById("sub").textContent=String(i),window.__error=String(i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
