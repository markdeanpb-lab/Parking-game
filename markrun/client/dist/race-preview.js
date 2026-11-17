var $l="170";var Cf=0,_c=1,If=2;var Dh=1,Zl=2,Kn=3,xi=0,nn=1,We=2,mi=0,hs=1,vc=2,Mc=3,bc=4,Pf=5,Pi=100,Lf=101,Df=102,Uf=103,Nf=104,Ff=200,zf=201,Of=202,Bf=203,Ta=204,Aa=205,kf=206,Hf=207,Vf=208,Gf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,Ra=0,Ca=1,Ia=2,ps=3,Pa=4,La=5,Da=6,Ua=7,Uh=0,Zf=1,Jf=2,Vn=0,Kf=1,jf=2,Qf=3,tu=4,eu=5,nu=6,iu=7;var Nh=300,ms=301,gs=302,Na=303,Fa=304,Fo=306,Ni=1e3,Di=1001,za=1002,fn=1003,su=1004;var yr=1005;var kn=1006,qo=1007;var Ui=1008;var ei=1009,Fh=1010,zh=1011,Zs=1012,Jl=1013,Fi=1014,Hn=1015,cr=1016,Kl=1017,jl=1018,xs=1020,Oh=35902,Bh=1021,kh=1022,vn=1023,Hh=1024,Vh=1025,fs=1026,ys=1027,Ql=1028,tc=1029,Gh=1030,ec=1031;var nc=1033,Zr=33776,Jr=33777,Kr=33778,jr=33779,Oa=35840,Ba=35841,ka=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,$a=37811,Za=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,Qr=36492,rl=36494,ol=36495,Wh=36283,al=36284,ll=36285,cl=36286;var to=2300,hl=2301,Yo=2302,Sc=2400,Ec=2401,wc=2402;var ru=3200,ou=3201;var Xh=0,au=1,di="",tn="srgb",Es="srgb-linear",zo="linear",Ie="srgb";var Gi=7680;var Tc=519,lu=512,cu=513,hu=514,qh=515,fu=516,uu=517,du=518,pu=519,fl=35044;var Ac="300 es",Qn=2e3,eo=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Ws=Math.PI/180,Js=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function xu(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function yu(i,t=1){return t-Math.abs(ic(i,t*2)-t)}function _u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bu(i,t){return i+Math.random()*(t-i)}function Su(i){return i*(.5-Math.random())}function Eu(i){i!==void 0&&(Rc=i);let t=Rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*Ws}function Tu(i){return i*Js}function Au(i){return(i&i-1)===0&&i!==0}function Ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),m=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*m,a*c);break;case"YZY":i.set(l*m,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*m,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vi={DEG2RAD:Ws,RAD2DEG:Js,generateUUID:Gn,clamp:en,euclideanModulo:ic,mapLinear:mu,inverseLerp:gu,lerp:Xs,damp:xu,pingpong:yu,smoothstep:_u,smootherstep:vu,randInt:Mu,randFloat:bu,randFloatSpread:Su,seededRandom:Eu,degToRad:wu,radToDeg:Tu,isPowerOfTwo:Au,ceilPowerOfTwo:Ru,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Iu,normalize:Re,denormalize:Pn},Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ve=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],m=n[2],u=n[5],g=n[8],_=s[0],p=s[3],f=s[6],w=s[1],x=s[4],y=s[7],B=s[2],T=s[5],I=s[8];return r[0]=o*_+a*w+l*B,r[3]=o*p+a*x+l*T,r[6]=o*f+a*y+l*I,r[1]=c*_+h*w+d*B,r[4]=c*p+h*x+d*T,r[7]=c*f+h*y+d*I,r[2]=m*_+u*w+g*B,r[5]=m*p+u*x+g*T,r[8]=m*f+u*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,m=a*l-h*r,u=c*r-o*l,g=e*d+n*m+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=m*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$o=new ve;function Yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){let i=no("canvas");return i.style.display="block",i}var Cc={};function Vs(i){i in Cc||(Cc[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Du(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var we={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ie&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ie&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ic=[.64,.33,.3,.6,.15,.06],Pc=[.2126,.7152,.0722],Lc=[.3127,.329],Dc=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[Es]:{primaries:Ic,whitePoint:Lc,transfer:zo,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Ic,whitePoint:Lc,transfer:Ie,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var Wi,ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=no("canvas")),Wi.width=t.width,Wi.height=t.height;let n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nu=0,io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fu=0,pn=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=kn,o=Ui,a=vn,l=ei,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Gn(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Nh;pn.DEFAULT_ANISOTROPY=1;var Ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],u=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(u+1)/2,B=(f+1)/2,T=(h+m)/4,I=(d+_)/4,D=(g+p)/4;return x>y&&x>B?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=I/n):y>B?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=D/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=I/r,s=D/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(m-h)*(m-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(m-h)/w,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],m=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==m||c!==u||h!==g){let p=1-a,f=l*m+c*u+h*g+d*_,w=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let B=Math.sqrt(x),T=Math.atan2(B,f*w);p=Math.sin(p*T)/B,a=Math.sin(a*T)/B}let y=a*w;if(l=l*p+m*y,c=c*p+u*y,h=h*p+g*y,d=d*p+_*y,p===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=B,c*=B,h*=B,d*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],m=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*m,t[e+1]=l*g+h*m+c*d-a*u,t[e+2]=c*g+h*u+a*m-l*d,t[e+3]=h*g-a*d-l*m-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),m=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*h*d+c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d-m*u*g;break;case"YXZ":this._x=m*h*d+c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d+m*u*g;break;case"ZXY":this._x=m*h*d-c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d-m*u*g;break;case"ZYX":this._x=m*h*d-c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d+m*u*g;break;case"YZX":this._x=m*h*d+c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d-m*u*g;break;case"XZY":this._x=m*h*d-c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d+m*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],m=n+a+d;if(m>0){let u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=s*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new V,Nc=new Mn,ii=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),vr.subVectors(this.max,Ls),Xi.subVectors(t.a,Ls),qi.subVectors(t.b,Ls),Yi.subVectors(t.c,Ls),ai.subVectors(qi,Xi),li.subVectors(Yi,qi),Ei.subVectors(Xi,Yi);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ei.z,Ei.y,ai.z,0,-ai.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!Ko(e,Xi,qi,Yi,vr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Xi,qi,Yi,vr))?!1:(Mr.crossVectors(ai,li),e=[Mr.x,Mr.y,Mr.z],Ko(e,Xi,qi,Yi,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new V,new V,new V,new V,new V,new V,new V,new V],Rn=new V,_r=new ii,Xi=new V,qi=new V,Yi=new V,ai=new V,li=new V,Ei=new V,Ls=new V,vr=new V,Mr=new V,wi=new V;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zu=new ii,Ds=new V,jo=new V,_i=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(jo)),this.expandByPoint(Ds.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new V,Qo=new V,br=new V,ci=new V,ta=new V,Sr=new V,ea=new V,ro=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qo.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Qo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(br),a=ci.dot(this.direction),l=-ci.dot(br),c=ci.lengthSq(),h=Math.abs(1-o*o),d,m,u,g;if(h>0)if(d=o*l-a,m=o*a-l,g=r*h,d>=0)if(m>=-g)if(m<=g){let _=1/h;d*=_,m*=_,u=d*(d+o*m+2*a)+m*(o*d+m+2*l)+c}else m=r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m=-r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m<=-g?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+m*(m+2*l)+c):m<=g?(d=0,m=Math.min(Math.max(-r,-l),r),u=m*(m+2*l)+c):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+m*(m+2*l)+c);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qo).addScaledVector(br,m),u}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),Sr.subVectors(n,t),ea.crossVectors(ta,Sr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let l=a*this.direction.dot(Sr.crossVectors(ci,Sr));if(l<0)return null;let c=a*this.direction.dot(ta.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=m,f[3]=u,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let m=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let m=l*h,u=l*d,g=c*h,_=c*d;e[0]=m+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){let m=l*h,u=l*d,g=c*h,_=c*d;e[0]=m-_*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let m=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=m*c+_,e[1]=l*d,e[5]=_*c+m,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-m*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=m-_*d}else if(t.order==="XZY"){let m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=m*d+_,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=_*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,Bu)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),hi.crossVectors(n,yn),hi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),hi.crossVectors(n,yn)),hi.normalize(),Er.crossVectors(yn,hi),s[0]=hi.x,s[4]=Er.x,s[8]=yn.x,s[1]=hi.y,s[5]=Er.y,s[9]=yn.y,s[2]=hi.z,s[6]=Er.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],m=n[9],u=n[13],g=n[2],_=n[6],p=n[10],f=n[14],w=n[3],x=n[7],y=n[11],B=n[15],T=s[0],I=s[4],D=s[8],M=s[12],v=s[1],b=s[5],L=s[9],E=s[13],S=s[2],O=s[6],N=s[10],H=s[14],k=s[3],dt=s[7],xt=s[11],U=s[15];return r[0]=o*T+a*v+l*S+c*k,r[4]=o*I+a*b+l*O+c*dt,r[8]=o*D+a*L+l*N+c*xt,r[12]=o*M+a*E+l*H+c*U,r[1]=h*T+d*v+m*S+u*k,r[5]=h*I+d*b+m*O+u*dt,r[9]=h*D+d*L+m*N+u*xt,r[13]=h*M+d*E+m*H+u*U,r[2]=g*T+_*v+p*S+f*k,r[6]=g*I+_*b+p*O+f*dt,r[10]=g*D+_*L+p*N+f*xt,r[14]=g*M+_*E+p*H+f*U,r[3]=w*T+x*v+y*S+B*k,r[7]=w*I+x*b+y*O+B*dt,r[11]=w*D+x*L+y*N+B*xt,r[15]=w*M+x*E+y*H+B*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],m=t[10],u=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*m+n*c*m+s*a*u-n*l*u)+_*(+e*l*u-e*c*m+r*o*m-s*o*u+s*c*h-r*l*h)+p*(+e*c*d-e*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*m+s*o*d-n*o*m+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],m=t[10],u=t[11],g=t[12],_=t[13],p=t[14],f=t[15],w=d*p*c-_*m*c+_*l*u-a*p*u-d*l*f+a*m*f,x=g*m*c-h*p*c-g*l*u+o*p*u+h*l*f-o*m*f,y=h*_*c-g*d*c+g*a*u-o*_*u-h*a*f+o*d*f,B=g*d*l-h*_*l-g*a*m+o*_*m+h*a*p-o*d*p,T=e*w+n*x+s*y+r*B;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=w*I,t[1]=(_*m*r-d*p*r-_*s*u+n*p*u+d*s*f-n*m*f)*I,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*f+n*l*f)*I,t[3]=(d*l*r-a*m*r-d*s*c+n*m*c+a*s*u-n*l*u)*I,t[4]=x*I,t[5]=(h*p*r-g*m*r+g*s*u-e*p*u-h*s*f+e*m*f)*I,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*I,t[7]=(o*m*r-h*l*r+h*s*c-e*m*c-o*s*u+e*l*u)*I,t[8]=y*I,t[9]=(g*d*r-h*_*r-g*n*u+e*_*u+h*n*f-e*d*f)*I,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*I,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*u-e*a*u)*I,t[12]=B*I,t[13]=(h*_*s-g*d*s+g*n*m-e*_*m-h*n*p+e*d*p)*I,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*I,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*m+e*a*m)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,m=r*c,u=r*h,g=r*d,_=o*h,p=o*d,f=a*d,w=l*c,x=l*h,y=l*d,B=n.x,T=n.y,I=n.z;return s[0]=(1-(_+f))*B,s[1]=(u+y)*B,s[2]=(g-x)*B,s[3]=0,s[4]=(u-y)*T,s[5]=(1-(m+f))*T,s[6]=(p+w)*T,s[7]=0,s[8]=(g+x)*I,s[9]=(p-w)*I,s[10]=(1-(m+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let c=1/r,h=1/o,d=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),u,g;if(a===Qn)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===eo)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),m=(e+t)*c,u=(n+s)*h,g,_;if(a===Qn)g=(o+r)*d,_=-2*d;else if(a===eo)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new V,Cn=new Se,Ou=new V(0,0,0),Bu=new V(1,1,1),hi=new V,Er=new V,yn=new V,Fc=new Se,zc=new Mn,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],m=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ku=0,Oc=new V,Zi=new Mn,$n=new Se,wr=new V,Us=new V,Hu=new V,Vu=new Mn,Bc=new V(1,0,0),kc=new V(0,1,0),Hc=new V(0,0,1),Vc={type:"added"},Gu={type:"removed"},Ji={type:"childadded",child:null},na={type:"childremoved",child:null},Pe=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Ln,n=new Mn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new ve}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Us,wr,this.up):$n.lookAt(wr,Us,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix($n),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),m=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new V(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new V,Zn=new V,ia=new V,Jn=new V,Ki=new V,ji=new V,Gc=new V,sa=new V,ra=new V,oa=new V,aa=new Ve,la=new Ve,ca=new Ve,pi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Zn.subVectors(n,e),ia.subVectors(t,e);let o=In.dot(In),a=In.dot(Zn),l=In.dot(ia),c=Zn.dot(Zn),h=Zn.dot(ia),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,u=(c*l-a*h)*m,g=(o*h-a*l)*m;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Zn.subVectors(t,e),In.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),ji.subVectors(r,n),sa.subVectors(t,n);let l=Ki.dot(sa),c=ji.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);let h=Ki.dot(ra),d=ji.dot(ra);if(h>=0&&d<=h)return e.copy(s);let m=l*d-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ki,o);oa.subVectors(t,r);let u=Ki.dot(oa),g=ji.dot(oa);if(g>=0&&u<=g)return e.copy(r);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ji,a);let p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return Gc.subVectors(r,s),a=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(Gc,a);let f=1/(p+_+m);return o=_*f,a=m*f,e.copy(n).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=ic(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return we.fromWorkingColorSpace(an.copy(this),t),Math.round(en(an.r*255,0,255))*65536+Math.round(en(an.g*255,0,255))*256+Math.round(en(an.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=tn){we.fromWorkingColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Tr);let n=Xs(fi.h,Tr.h,e),s=Xs(fi.s,Tr.s,e),r=Xs(fi.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new ae;ae.NAMES=$h;var Wu=0,si=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Gn(),this.name="",this.blending=hs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new V,Ar=new Bt,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}};var ao=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lo=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xu=0,Sn=new Se,fa=new Pe,Qi=new V,_n=new ii,Ns=new ii,Qe=new V,Le=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?lo:ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(_n.min,Ns.min),_n.expandByPoint(Qe),Qe.addVectors(_n.max,Ns.max),_n.expandByPoint(Qe)):(_n.expandByPoint(Ns.min),_n.expandByPoint(Ns.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),Qe.add(Qi)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new V,l[D]=new V;let c=new V,h=new V,d=new V,m=new Bt,u=new Bt,g=new Bt,_=new V,p=new V;function f(D,M,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),m.fromBufferAttribute(r,D),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),u.sub(m),g.sub(m);let b=1/(u.x*g.y-g.x*u.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(b),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(b),a[D].add(_),a[M].add(_),a[v].add(_),l[D].add(p),l[M].add(p),l[v].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let D=0,M=w.length;D<M;++D){let v=w[D],b=v.start,L=v.count;for(let E=b,S=b+L;E<S;E+=3)f(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let x=new V,y=new V,B=new V,T=new V;function I(D){B.fromBufferAttribute(s,D),T.copy(B);let M=a[D];x.copy(M),x.sub(B.multiplyScalar(B.dot(M))).normalize(),y.crossVectors(T,M);let b=y.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,b)}for(let D=0,M=w.length;D<M;++D){let v=w[D],b=v.start,L=v.count;for(let E=b,S=b+L;E<S;E+=3)I(t.getX(E+0)),I(t.getX(E+1)),I(t.getX(E+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let m=0,u=t.count;m<u;m+=3){let g=t.getX(m+0),_=t.getX(m+1),p=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,u=e.count;m<u;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,m=new c.constructor(l.length*h),u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let f=0;f<h;f++)m[g++]=c[u++]}return new Ne(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let m=c[h],u=t(m,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,m=c.length;d<m;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let m=0,u=d.length;m<u;m++)h.push(d[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=new Se,Ti=new ro,Rr=new _i,Xc=new V,Cr=new V,Ir=new V,Pr=new V,ua=new V,Lr=new V,qc=new V,Dr=new V,Ce=class extends Pe{constructor(t=new Le,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ua.fromBufferAttribute(d,t),o?Lr.addScaledVector(ua,h):Lr.addScaledVector(ua.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Rr,Xc)===null||Ti.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,m=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){let p=m[g],f=o[p.materialIndex],w=Math.max(p.start,u.start),x=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=w,B=x;y<B;y+=3){let T=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);s=Ur(this,f,t,n,c,h,d,T,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){let w=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=Ur(this,o,t,n,c,h,d,w,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){let p=m[g],f=o[p.materialIndex],w=Math.max(p.start,u.start),x=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=w,B=x;y<B;y+=3){let T=y,I=y+1,D=y+2;s=Ur(this,f,t,n,c,h,d,T,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){let w=p,x=p+1,y=p+2;s=Ur(this,o,t,n,c,h,d,w,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function qu(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Pr);let h=qu(i,t,e,n,Cr,Ir,Pr,qc);if(h){let d=new V;pi.getBarycoord(qc,Cr,Ir,Pr,d),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,d,new Bt)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,d,new Bt)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new V,materialIndex:0};pi.getNormal(Cr,Ir,Pr,m.normal),h.face=m,h.barycoord=d}return h}var Ee=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],m=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function g(_,p,f,w,x,y,B,T,I,D,M){let v=y/I,b=B/D,L=y/2,E=B/2,S=T/2,O=I+1,N=D+1,H=0,k=0,dt=new V;for(let xt=0;xt<N;xt++){let U=xt*b-E;for(let Mt=0;Mt<O;Mt++){let kt=Mt*v-L;dt[_]=kt*w,dt[p]=U*x,dt[f]=S,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[p]=0,dt[f]=T>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(Mt/I),d.push(1-xt/D),H+=1}}for(let xt=0;xt<D;xt++)for(let U=0;U<I;U++){let Mt=m+U+O*xt,kt=m+U+O*(xt+1),F=m+(U+1)+O*(xt+1),G=m+(U+1)+O*xt;l.push(Mt,kt,G),l.push(kt,F,G),k+=6}a.addGroup(u,k,M),u+=k,m+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function Yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}var sc={clone:_s,merge:cn},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},co=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new V,Yc=new Bt,$c=new Bt,hn=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,$c),e.subVectors($c,Yc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ts=-90,es=1,ml=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new hn(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new hn(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new hn(ts,es,t,e);a.layers=this.layers,this.add(a);let l=new hn(ts,es,t,e);l.layers=this.layers,this.add(l);let c=new hn(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,m,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ho=class extends pn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ho(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ee(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:mi});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=kn),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},da=new V,Ju=new V,Ku=new ve,jn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=da.subVectors(n,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new _i,Nr=new V,Ks=class{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],m=s[7],u=s[8],g=s[9],_=s[10],p=s[11],f=s[12],w=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,m-c,p-u,y-f).normalize(),n[1].setComponents(l+r,m+c,p+u,y+f).normalize(),n[2].setComponents(l+o,m+h,p+g,y+w).normalize(),n[3].setComponents(l-o,m-h,p-g,y-w).normalize(),n[4].setComponents(l-a,m-d,p-_,y-x).normalize(),e===Qn)n[5].setComponents(l+a,m+d,p+_,y+x).normalize();else if(e===eo)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let m=0;for(let u=1;u<d.length;u++){let g=d[m],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,d[m]=_)}d.length=m+1;for(let u=0,g=d.length;u<g;u++){let _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sn=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,m=e/l,u=[],g=[],_=[],p=[];for(let f=0;f<h;f++){let w=f*m-o;for(let x=0;x<c;x++){let y=x*d-r;g.push(y,-w,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let x=w+c*f,y=w+c*(f+1),B=w+1+c*(f+1),T=w+1+c*f;u.push(x,y,T),u.push(y,B,T)}this.setIndex(u),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bd=`#define PI 3.141592653589793
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
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ed=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,Kd=`struct PhysicalMaterial {
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
}`,jd=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mp=`#ifdef USE_NORMALMAP
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
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,fm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,xm=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,bm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,Em=`#define TOON
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
}`,wm=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Im=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Qu,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ad,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:fd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:xd,color_fragment:yd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:Md,common:bd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:wd,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:Xd,envmap_vertex:Nd,fog_vertex:Fd,fog_pars_vertex:zd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:fp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:xp,normal_pars_fragment:yp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:wp,opaque_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Ip,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:zp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:kp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:$p,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Kp,background_vert:jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:fm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:xm,meshnormal_vert:ym,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:bm,meshphysical_frag:Sm,meshtoon_vert:Em,meshtoon_frag:wm,points_vert:Tm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Im,sprite_frag:Pm},Kt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Bn={basic:{uniforms:cn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:cn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new ae(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:cn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:cn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:cn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new ae(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:cn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:cn([Kt.points,Kt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:cn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:cn([Kt.common,Kt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:cn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:cn([Kt.sprite,Kt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:cn([Kt.common,Kt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:cn([Kt.lights,Kt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Bn.physical={uniforms:cn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Fr={r:0,b:0,g:0},Ri=new Ln,Lm=new Se;function Dm(i,t,e,n,s,r,o){let a=new ae(0),l=r===!0?0:1,c,h,d=null,m=0,u=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function _(w){let x=!1,y=g(w);y===null?f(a,l):y&&y.isColor&&(f(y,1),x=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===Fo)?(h===void 0&&(h=new Ce(new Ee(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:_s(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(x.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Ri)),h.material.toneMapped=we.getTransfer(y.colorSpace)!==Ie,(d!==y||m!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,m=y.version,u=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ce(new sn(2,2),new un({name:"BackgroundMaterial",uniforms:_s(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=we.getTransfer(y.colorSpace)!==Ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,x){w.getRGB(Fr,Zh(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:_,addToRenderList:p}}function Um(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(v,b,L,E,S){let O=!1,N=d(E,L,b);r!==N&&(r=N,c(r.object)),O=u(v,E,L,S),O&&g(v,E,L,S),S!==null&&t.update(S,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(v,b,L,E),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(S).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,b,L){let E=L.wireframe===!0,S=n[v.id];S===void 0&&(S={},n[v.id]=S);let O=S[b.id];O===void 0&&(O={},S[b.id]=O);let N=O[E];return N===void 0&&(N=m(l()),O[E]=N),N}function m(v){let b=[],L=[],E=[];for(let S=0;S<e;S++)b[S]=0,L[S]=0,E[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:L,attributeDivisors:E,object:v,attributes:{},index:null}}function u(v,b,L,E){let S=r.attributes,O=b.attributes,N=0,H=L.getAttributes();for(let k in H)if(H[k].location>=0){let xt=S[k],U=O[k];if(U===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(U=v.instanceColor)),xt===void 0||xt.attribute!==U||U&&xt.data!==U.data)return!0;N++}return r.attributesNum!==N||r.index!==E}function g(v,b,L,E){let S={},O=b.attributes,N=0,H=L.getAttributes();for(let k in H)if(H[k].location>=0){let xt=O[k];xt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor));let U={};U.attribute=xt,xt&&xt.data&&(U.data=xt.data),S[k]=U,N++}r.attributes=S,r.attributesNum=N,r.index=E}function _(){let v=r.newAttributes;for(let b=0,L=v.length;b<L;b++)v[b]=0}function p(v){f(v,0)}function f(v,b){let L=r.newAttributes,E=r.enabledAttributes,S=r.attributeDivisors;L[v]=1,E[v]===0&&(i.enableVertexAttribArray(v),E[v]=1),S[v]!==b&&(i.vertexAttribDivisor(v,b),S[v]=b)}function w(){let v=r.newAttributes,b=r.enabledAttributes;for(let L=0,E=b.length;L<E;L++)b[L]!==v[L]&&(i.disableVertexAttribArray(L),b[L]=0)}function x(v,b,L,E,S,O,N){N===!0?i.vertexAttribIPointer(v,b,L,S,O):i.vertexAttribPointer(v,b,L,E,S,O)}function y(v,b,L,E){_();let S=E.attributes,O=L.getAttributes(),N=b.defaultAttributeValues;for(let H in O){let k=O[H];if(k.location>=0){let dt=S[H];if(dt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),dt!==void 0){let xt=dt.normalized,U=dt.itemSize,Mt=t.get(dt);if(Mt===void 0)continue;let kt=Mt.buffer,F=Mt.type,G=Mt.bytesPerElement,J=F===i.INT||F===i.UNSIGNED_INT||dt.gpuType===Jl;if(dt.isInterleavedBufferAttribute){let q=dt.data,ht=q.stride,pt=dt.offset;if(q.isInstancedInterleavedBuffer){for(let Rt=0;Rt<k.locationSize;Rt++)f(k.location+Rt,q.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Rt=0;Rt<k.locationSize;Rt++)p(k.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Rt=0;Rt<k.locationSize;Rt++)x(k.location+Rt,U/k.locationSize,F,xt,ht*G,(pt+U/k.locationSize*Rt)*G,J)}else{if(dt.isInstancedBufferAttribute){for(let q=0;q<k.locationSize;q++)f(k.location+q,dt.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let q=0;q<k.locationSize;q++)p(k.location+q);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let q=0;q<k.locationSize;q++)x(k.location+q,U/k.locationSize,F,xt,U*G,U/k.locationSize*q*G,J)}}else if(N!==void 0){let xt=N[H];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(k.location,xt);break;case 3:i.vertexAttrib3fv(k.location,xt);break;case 4:i.vertexAttrib4fv(k.location,xt);break;default:i.vertexAttrib1fv(k.location,xt)}}}}w()}function B(){D();for(let v in n){let b=n[v];for(let L in b){let E=b[L];for(let S in E)h(E[S].object),delete E[S];delete b[L]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let L in b){let E=b[L];for(let S in E)h(E[S].object),delete E[S];delete b[L]}delete n[v.id]}function I(v){for(let b in n){let L=n[b];if(L[v.id]===void 0)continue;let E=L[v.id];for(let S in E)h(E[S].object),delete E[S];delete L[v.id]}}function D(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function l(c,h,d,m){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],m[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*m[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==vn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ei&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Hn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:B,maxSamples:T}}function zm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new jn,a=new ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let u=d.length!==0||m||n!==0||s;return s=m,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){e=h(d,m,0)},this.setState=function(d,m,u){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let w=r?0:n,x=w*4,y=f.clippingState||null;l.value=y,y=h(g,m,x,u);for(let B=0;B!==x;++B)y[B]=e[B];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,m,u,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let f=u+_*4,w=m.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,y=u;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(w,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Om(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=ms:a===Fa&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Na||a===Fa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fo=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,Zc=[.125,.215,.35,.446,.526,.582],Li=20,pa=new fo,Jc=new ae,ma=null,ga=0,xa=0,ya=!1,Ii=(1+Math.sqrt(5))/2,ns=1/Ii,Kc=[new V(-Ii,ns,0),new V(Ii,ns,0),new V(-ns,0,Ii),new V(ns,0,Ii),new V(0,Ii,-ns),new V(0,Ii,ns),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,xa),this._renderer.xr.enabled=ya,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:cr,format:vn,colorSpace:Es,depthBuffer:!1},s=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bm(r)),this._blurMaterial=km(r,t,e)}return s}_compileMaterial(t){let e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){let a=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Vn,h.autoClear=!1;let u=new mn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Ce(new Ee,u),_=!1,p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,_=!0):(u.color.copy(Jc),_=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;zr(s,w*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(s-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ce(this._lodPlanes[s],c),m=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Li-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Li;p>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);let f=[],w=0;for(let I=0;I<Li;++I){let D=I/_,M=Math.exp(-D*D/2);f.push(M),I===0?w+=M:I<p&&(w+=2*M)}for(let I=0;I<f.length;I++)f[I]=f[I]/w;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:x}=this;m.dTheta.value=g,m.mipInt.value=x-n;let y=this._sizeLods[s],B=3*y*(s>x-ls?s-x+ls:0),T=4*(this._cubeSize-y);zr(e,B,T,3*y,2*y),l.setRenderTarget(e),l.render(d,pa)}};function Bm(i){let t=[],e=[],n=[],s=i,r=i-ls+1+Zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ls?l=Zc[o-i+ls-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,m=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,p=2,f=1,w=new Float32Array(_*g*u),x=new Float32Array(p*g*u),y=new Float32Array(f*g*u);for(let T=0;T<u;T++){let I=T%3*2/3-1,D=T>2?0:-1,M=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];w.set(M,_*g*T),x.set(m,p*g*T);let v=[T,T,T,T,T,T];y.set(v,f*g*T)}let B=new Le;B.setAttribute("position",new Ne(w,_)),B.setAttribute("uv",new Ne(x,p)),B.setAttribute("faceIndex",new Ne(y,f)),t.push(B),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){let n=new Float32Array(Li),s=new V(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Qc(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function th(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Hm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Na||l===Fa,h=l===ms||l===gs;if(c||h){let d=t.get(a),m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new uo(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new uo(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){let s={},r=new WeakMap;function o(d){let m=d.target;m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);for(let g in m.morphAttributes){let _=m.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}m.removeEventListener("dispose",o),delete s[m.id];let u=r.get(m);u&&(t.remove(u),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(d){let m=d.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let g in u){let _=u[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(d){let m=[],u=d.index,g=d.attributes.position,_=0;if(u!==null){let w=u.array;_=u.version;for(let x=0,y=w.length;x<y;x+=3){let B=w[x+0],T=w[x+1],I=w[x+2];m.push(B,T,T,I,I,B)}}else if(g!==void 0){let w=g.array;_=g.version;for(let x=0,y=w.length/3-1;x<y;x+=3){let B=x+0,T=x+1,I=x+2;m.push(B,T,T,I,I,B)}}else return;let p=new(Yh(m)?lo:ao)(m,1);p.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){let m=r.get(d);if(m){let u=d.index;u!==null&&m.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*o),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*o,g),e.update(u,n,g))}function h(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let p=0;for(let f=0;f<g;f++)p+=u[f];e.update(p,n,1)}function d(m,u,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<m.length;f++)c(m[f]/o,u[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,m,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=u[w]*_[w];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){let n=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==d){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};m!==void 0&&m.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;u===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,B=1;y>t.maxTextureSize&&(B=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*B*4*d),I=new so(T,y,B,d);I.type=Hn,I.needsUpdate=!0;let D=x*4;for(let v=0;v<d;v++){let b=p[v],L=f[v],E=w[v],S=y*B*4*v;for(let O=0;O<b.count;O++){let N=O*D;u===!0&&(s.fromBufferAttribute(b,O),T[S+N+0]=s.x,T[S+N+1]=s.y,T[S+N+2]=s.z,T[S+N+3]=0),g===!0&&(s.fromBufferAttribute(L,O),T[S+N+4]=s.x,T[S+N+5]=s.y,T[S+N+6]=s.z,T[S+N+7]=0),_===!0&&(s.fromBufferAttribute(E,O),T[S+N+8]=s.x,T[S+N+9]=s.y,T[S+N+10]=s.z,T[S+N+11]=E.itemSize===4?s.w:1)}}m={count:d,texture:I,size:new Bt(y,B)},n.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var po=class extends pn{constructor(t,e,n,s,r,o,a,l,c,h=fs){if(h!==fs&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Fi),n===void 0&&h===ys&&(n=xs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kh=new pn,eh=new po(1,1),jh=new so,Qh=new pl,tf=new ho,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Je(e,n)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Je(e,n)}}function t0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Je(e,n)}}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function r0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function c0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=qh,r=eh):r=Kh,e.setTexture2D(t||r,s)}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function f0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function d0(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return u0}}function p0(i,t){i.uniform1fv(this.addr,t)}function m0(i,t){let e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function g0(i,t){let e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){let e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){let e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _0(i,t){let e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v0(i,t){let e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function b0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function E0(i,t){i.uniform4iv(this.addr,t)}function w0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function A0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function C0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Kh,r[o])}function I0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qh,r[o])}function P0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tf,r[o])}function L0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jh,r[o])}function D0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return x0;case 35674:return y0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return M0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}},yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function ah(i,t){i.seq.push(t),i.map[t.id]=t}function U0(i,t,e){let n=i.name,s=n.length;for(_a.lastIndex=0;;){let r=_a.exec(n),o=_a.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ah(e,c===void 0?new xl(a,i,t):new yl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new _l(a),ah(e,d)),e=d}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);U0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var N0=37297,F0=0;function z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ch=new ve;function O0(i){we._getMatrix(ch,we.workingColorSpace,i);let t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+z0(i.getShaderSource(t),o)}else return s}function B0(i,t){let e=O0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function k0(i,t){let e;switch(t){case Kf:e="Linear";break;case jf:e="Reinhard";break;case Qf:e="Cineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Or=new V;function H0(){we.getLuminanceCoefficients(Or);let i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function G0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(X0,Y0)}var q0=new Map;function Y0(i,t){let e=ge[t];if(e===void 0){let n=q0.get(t);if(n!==void 0)e=ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace($0,Z0)}function Z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function tg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=J0(e),c=K0(e),h=j0(e),d=Q0(e),m=tg(e),u=V0(e),g=G0(r),_=s.createProgram(),p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),f.length>0&&(f+=`
`)):(p=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),f=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?ge.tonemapping_pars_fragment:"",e.toneMapping!==Vn?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=vl(o),o=fh(o,e),o=uh(o,e),a=vl(a),a=fh(a,e),a=uh(a,e),o=dh(o),a=dh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=w+p+o,y=w+f+a,B=lh(s,s.VERTEX_SHADER,x),T=lh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,B),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(b){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(B).trim(),S=s.getShaderInfoLog(T).trim(),O=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,T);else{let H=hh(s,B,"vertex"),k=hh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+L+`
`+H+`
`+k)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(E===""||S==="")&&(N=!1);N&&(b.diagnostics={runnable:O,programLog:L,vertexShader:{log:E,prefix:p},fragmentShader:{log:S,prefix:f}})}s.deleteShader(B),s.deleteShader(T),D=new ds(s,_),M=W0(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,N0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=T,this}var ng=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}};function ig(i,t,e,n,s,r,o){let a=new oo,l=new Ml,c=new Set,h=[],d=s.logarithmicDepthBuffer,m=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,v,b,L,E){let S=L.fog,O=E.geometry,N=M.isMeshStandardMaterial?L.environment:null,H=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),k=H&&H.mapping===Fo?H.image.height:null,dt=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let xt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,U=xt!==void 0?xt.length:0,Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let kt,F,G,J;if(dt){let K=Bn[dt];kt=K.vertexShader,F=K.fragmentShader}else kt=M.vertexShader,F=M.fragmentShader,l.update(M),G=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);let q=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),pt=E.isInstancedMesh===!0,Rt=E.isBatchedMesh===!0,Ht=!!M.map,j=!!M.matcap,gt=!!H,P=!!M.aoMap,rt=!!M.lightMap,tt=!!M.bumpMap,bt=!!M.normalMap,Lt=!!M.displacementMap,Y=!!M.emissiveMap,Nt=!!M.metalnessMap,z=!!M.roughnessMap,C=M.anisotropy>0,ft=M.clearcoat>0,At=M.dispersion>0,It=M.iridescence>0,$=M.sheen>0,ut=M.transmission>0,ct=C&&!!M.anisotropyMap,yt=ft&&!!M.clearcoatMap,wt=ft&&!!M.clearcoatNormalMap,St=ft&&!!M.clearcoatRoughnessMap,Pt=It&&!!M.iridescenceMap,$t=It&&!!M.iridescenceThicknessMap,te=$&&!!M.sheenColorMap,Zt=$&&!!M.sheenRoughnessMap,ue=!!M.specularMap,oe=!!M.specularColorMap,_e=!!M.specularIntensityMap,et=ut&&!!M.transmissionMap,qt=ut&&!!M.thicknessMap,Tt=!!M.gradientMap,Dt=!!M.alphaMap,jt=M.alphaTest>0,Qt=!!M.alphaHash,pe=!!M.extensions,A=Vn;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(A=i.toneMapping);let Q={shaderID:dt,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:F,defines:M.defines,customVertexShaderID:G,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&E._colorsTexture!==null,instancing:pt,instancingColor:pt&&E.instanceColor!==null,instancingMorph:pt&&E.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Es,alphaToCoverage:!!M.alphaToCoverage,map:Ht,matcap:j,envMap:gt,envMapMode:gt&&H.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:rt,bumpMap:tt,normalMap:bt,displacementMap:m&&Lt,emissiveMap:Y,normalMapObjectSpace:bt&&M.normalMapType===au,normalMapTangentSpace:bt&&M.normalMapType===Xh,metalnessMap:Nt,roughnessMap:z,anisotropy:C,anisotropyMap:ct,clearcoat:ft,clearcoatMap:yt,clearcoatNormalMap:wt,clearcoatRoughnessMap:St,dispersion:At,iridescence:It,iridescenceMap:Pt,iridescenceThicknessMap:$t,sheen:$,sheenColorMap:te,sheenRoughnessMap:Zt,specularMap:ue,specularColorMap:oe,specularIntensityMap:_e,transmission:ut,transmissionMap:et,thicknessMap:qt,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:Dt,alphaTest:jt,alphaHash:Qt,combine:M.combine,mapUv:Ht&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:rt&&_(M.lightMap.channel),bumpMapUv:tt&&_(M.bumpMap.channel),normalMapUv:bt&&_(M.normalMap.channel),displacementMapUv:Lt&&_(M.displacementMap.channel),emissiveMapUv:Y&&_(M.emissiveMap.channel),metalnessMapUv:Nt&&_(M.metalnessMap.channel),roughnessMapUv:z&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:yt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:te&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&_(M.sheenRoughnessMap.channel),specularMapUv:ue&&_(M.specularMap.channel),specularColorMapUv:oe&&_(M.specularColorMap.channel),specularIntensityMapUv:_e&&_(M.specularIntensityMap.channel),transmissionMapUv:et&&_(M.transmissionMap.channel),thicknessMapUv:qt&&_(M.thicknessMap.channel),alphaMapUv:Dt&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||C),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!O.attributes.uv&&(Ht||Dt),fog:!!S,useFog:M.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ht,skinning:E.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:A,decodeVideoTexture:Ht&&M.map.isVideoTexture===!0&&we.getTransfer(M.map.colorSpace)===Ie,decodeVideoTextureEmissive:Y&&M.emissiveMap.isVideoTexture===!0&&we.getTransfer(M.emissiveMap.colorSpace)===Ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===We,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&M.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Q.vertexUv1s=c.has(1),Q.vertexUv2s=c.has(2),Q.vertexUv3s=c.has(3),c.clear(),Q}function f(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let b in M.defines)v.push(b),v.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(w(v,M),x(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function w(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function x(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let v=g[M.type],b;if(v){let L=Bn[v];b=sc.clone(L.uniforms)}else b=M.uniforms;return b}function B(M,v){let b;for(let L=0,E=h.length;L<E;L++){let S=h[L];if(S.cacheKey===v){b=S,++b.usedTimes;break}}return b===void 0&&(b=new eg(i,v,M,r),h.push(b)),b}function T(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function I(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:B,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:D}}function sg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,m,u,g,_,p){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:m,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=f):(f.id=d.id,f.object=d,f.geometry=m,f.material=u,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),t++,f}function a(d,m,u,g,_,p){let f=o(d,m,u,g,_,p);u.transmission>0?n.push(f):u.transparent===!0?s.push(f):e.push(f)}function l(d,m,u,g,_,p){let f=o(d,m,u,g,_,p);u.transmission>0?n.unshift(f):u.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,m){e.length>1&&e.sort(d||rg),n.length>1&&n.sort(m||mh),s.length>1&&s.sort(m||mh)}function h(){for(let d=t,m=i.length;d<m;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function og(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ag(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new ae};break;case"SpotLight":e={position:new V,direction:new V,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function lg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cg=0;function hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fg(i){let t=new ag,e=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new Se,o=new Se;function a(c){let h=0,d=0,m=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,_=0,p=0,f=0,w=0,x=0,y=0,B=0,T=0,I=0;c.sort(hg);for(let M=0,v=c.length;M<v;M++){let b=c[M],L=b.color,E=b.intensity,S=b.distance,O=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=L.r*E,d+=L.g*E,m+=L.b*E;else if(b.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(b.sh.coefficients[N],E);I++}else if(b.isDirectionalLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let H=b.shadow,k=e.get(b);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[u]=k,n.directionalShadowMap[u]=O,n.directionalShadowMatrix[u]=b.shadow.matrix,w++}n.directional[u]=N,u++}else if(b.isSpotLight){let N=t.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(L).multiplyScalar(E),N.distance=S,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,n.spot[_]=N;let H=b.shadow;if(b.map&&(n.spotLightMap[B]=b.map,B++,H.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[_]=H.matrix,b.castShadow){let k=e.get(b);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=O,y++}_++}else if(b.isRectAreaLight){let N=t.get(b);N.color.copy(L).multiplyScalar(E),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=N,p++}else if(b.isPointLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){let H=b.shadow,k=e.get(b);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=N,g++}else if(b.isHemisphereLight){let N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(E),N.groundColor.copy(b.groundColor).multiplyScalar(E),n.hemi[f]=N,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Kt.LTC_FLOAT_1,n.rectAreaLTC2=Kt.LTC_FLOAT_2):(n.rectAreaLTC1=Kt.LTC_HALF_1,n.rectAreaLTC2=Kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;let D=n.hash;(D.directionalLength!==u||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==w||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==B||D.numLightProbes!==I)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+B-T,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,D.directionalLength=u,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=w,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=B,D.numLightProbes=I,n.version=cg++)}function l(c,h){let d=0,m=0,u=0,g=0,_=0,p=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let x=c[f];if(x.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(x.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),m++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function xh(i){let t=new fg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ug(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xh(i),t.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sl=class extends si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
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
}`;function mg(i,t,e){let n=new Ks,s=new Bt,r=new Bt,o=new Ve,a=new Sl({depthPacking:ou}),l=new El,c={},h=e.maxTextureSize,d={[xi]:nn,[nn]:xi,[We]:We},m=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:dg,fragmentShader:pg}),u=m.clone();u.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ce(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let f=this.type;this.render=function(T,I,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),L=i.state;L.setBlending(mi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let E=f!==Kn&&this.type===Kn,S=f===Kn&&this.type!==Kn;for(let O=0,N=T.length;O<N;O++){let H=T[O],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let dt=k.getFrameExtents();if(s.multiply(dt),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,k.mapSize.y=r.y)),k.map===null||E===!0||S===!0){let U=this.type!==Kn?{minFilter:fn,magFilter:fn}:{};k.map!==null&&k.map.dispose(),k.map=new ni(s.x,s.y,U),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let xt=k.getViewportCount();for(let U=0;U<xt;U++){let Mt=k.getViewport(U);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),L.viewport(o),k.updateMatrices(H,U),n=k.getFrustum(),y(I,D,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Kn&&w(k,D),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,v,b)};function w(T,I){let D=t.update(_);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(s.x,s.y)),m.uniforms.shadow_pass.value=T.map.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,D,m,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,D,u,_,null)}function x(T,I,D,M){let v=null,b=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)v=b;else if(v=D.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let L=v.uuid,E=I.uuid,S=c[L];S===void 0&&(S={},c[L]=S);let O=S[E];O===void 0&&(O=v.clone(),S[E]=O,I.addEventListener("dispose",B)),v=O}if(v.visible=I.visible,v.wireframe=I.wireframe,M===Kn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:d[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=i.properties.get(v);L.light=D}return v}function y(T,I,D,M,v){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let E=t.update(T),S=T.material;if(Array.isArray(S)){let O=E.groups;for(let N=0,H=O.length;N<H;N++){let k=O[N],dt=S[k.materialIndex];if(dt&&dt.visible){let xt=x(T,dt,M,v);T.onBeforeShadow(i,T,I,D,E,xt,k),i.renderBufferDirect(D,null,E,xt,T,k),T.onAfterShadow(i,T,I,D,E,xt,k)}}}else if(S.visible){let O=x(T,S,M,v);T.onBeforeShadow(i,T,I,D,E,O,null),i.renderBufferDirect(D,null,E,O,T,null),T.onAfterShadow(i,T,I,D,E,O,null)}}let L=T.children;for(let E=0,S=L.length;E<S;E++)y(L[E],I,D,M,v)}function B(T){T.target.removeEventListener("dispose",B);for(let D in c){let M=c[D],v=T.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var gg={[Ra]:Ca,[Ia]:Da,[Pa]:Ua,[ps]:La,[Ca]:Ra,[Da]:Ia,[Ua]:Pa,[La]:ps};function xg(i,t){function e(){let et=!1,qt=new Ve,Tt=null,Dt=new Ve(0,0,0,0);return{setMask:function(jt){Tt!==jt&&!et&&(i.colorMask(jt,jt,jt,jt),Tt=jt)},setLocked:function(jt){et=jt},setClear:function(jt,Qt,pe,A,Q){Q===!0&&(jt*=A,Qt*=A,pe*=A),qt.set(jt,Qt,pe,A),Dt.equals(qt)===!1&&(i.clearColor(jt,Qt,pe,A),Dt.copy(qt))},reset:function(){et=!1,Tt=null,Dt.set(-1,0,0,0)}}}function n(){let et=!1,qt=!1,Tt=null,Dt=null,jt=null;return{setReversed:function(Qt){if(qt!==Qt){let pe=t.get("EXT_clip_control");qt?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT);let A=jt;jt=null,this.setClear(A)}qt=Qt},getReversed:function(){return qt},setTest:function(Qt){Qt?q(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(Qt){Tt!==Qt&&!et&&(i.depthMask(Qt),Tt=Qt)},setFunc:function(Qt){if(qt&&(Qt=gg[Qt]),Dt!==Qt){switch(Qt){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=Qt}},setLocked:function(Qt){et=Qt},setClear:function(Qt){jt!==Qt&&(qt&&(Qt=1-Qt),i.clearDepth(Qt),jt=Qt)},reset:function(){et=!1,Tt=null,Dt=null,jt=null,qt=!1}}}function s(){let et=!1,qt=null,Tt=null,Dt=null,jt=null,Qt=null,pe=null,A=null,Q=null;return{setTest:function(K){et||(K?q(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(K){qt!==K&&!et&&(i.stencilMask(K),qt=K)},setFunc:function(K,it,_t){(Tt!==K||Dt!==it||jt!==_t)&&(i.stencilFunc(K,it,_t),Tt=K,Dt=it,jt=_t)},setOp:function(K,it,_t){(Qt!==K||pe!==it||A!==_t)&&(i.stencilOp(K,it,_t),Qt=K,pe=it,A=_t)},setLocked:function(K){et=K},setClear:function(K){Q!==K&&(i.clearStencil(K),Q=K)},reset:function(){et=!1,qt=null,Tt=null,Dt=null,jt=null,Qt=null,pe=null,A=null,Q=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},m=new WeakMap,u=[],g=null,_=!1,p=null,f=null,w=null,x=null,y=null,B=null,T=null,I=new ae(0,0,0),D=0,M=!1,v=null,b=null,L=null,E=null,S=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,H=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=H>=2);let dt=null,xt={},U=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),kt=new Ve().fromArray(U),F=new Ve().fromArray(Mt);function G(et,qt,Tt,Dt){let jt=new Uint8Array(4),Qt=i.createTexture();i.bindTexture(et,Qt),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<Tt;pe++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(qt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,jt):i.texImage2D(qt+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,jt);return Qt}let J={};J[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(ps),tt(!1),bt(_c),q(i.CULL_FACE),P(mi);function q(et){h[et]!==!0&&(i.enable(et),h[et]=!0)}function ht(et){h[et]!==!1&&(i.disable(et),h[et]=!1)}function pt(et,qt){return d[et]!==qt?(i.bindFramebuffer(et,qt),d[et]=qt,et===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=qt),et===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=qt),!0):!1}function Rt(et,qt){let Tt=u,Dt=!1;if(et){Tt=m.get(qt),Tt===void 0&&(Tt=[],m.set(qt,Tt));let jt=et.textures;if(Tt.length!==jt.length||Tt[0]!==i.COLOR_ATTACHMENT0){for(let Qt=0,pe=jt.length;Qt<pe;Qt++)Tt[Qt]=i.COLOR_ATTACHMENT0+Qt;Tt.length=jt.length,Dt=!0}}else Tt[0]!==i.BACK&&(Tt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(Tt)}function Ht(et){return g!==et?(i.useProgram(et),g=et,!0):!1}let j={[Pi]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Df]:i.FUNC_REVERSE_SUBTRACT};j[Uf]=i.MIN,j[Nf]=i.MAX;let gt={[Ff]:i.ZERO,[zf]:i.ONE,[Of]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Bf]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function P(et,qt,Tt,Dt,jt,Qt,pe,A,Q,K){if(et===mi){_===!0&&(ht(i.BLEND),_=!1);return}if(_===!1&&(q(i.BLEND),_=!0),et!==Pf){if(et!==p||K!==M){if((f!==Pi||y!==Pi)&&(i.blendEquation(i.FUNC_ADD),f=Pi,y=Pi),K)switch(et){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}w=null,x=null,B=null,T=null,I.set(0,0,0),D=0,p=et,M=K}return}jt=jt||qt,Qt=Qt||Tt,pe=pe||Dt,(qt!==f||jt!==y)&&(i.blendEquationSeparate(j[qt],j[jt]),f=qt,y=jt),(Tt!==w||Dt!==x||Qt!==B||pe!==T)&&(i.blendFuncSeparate(gt[Tt],gt[Dt],gt[Qt],gt[pe]),w=Tt,x=Dt,B=Qt,T=pe),(A.equals(I)===!1||Q!==D)&&(i.blendColor(A.r,A.g,A.b,Q),I.copy(A),D=Q),p=et,M=!1}function rt(et,qt){et.side===We?ht(i.CULL_FACE):q(i.CULL_FACE);let Tt=et.side===nn;qt&&(Tt=!Tt),tt(Tt),et.blending===hs&&et.transparent===!1?P(mi):P(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),o.setFunc(et.depthFunc),o.setTest(et.depthTest),o.setMask(et.depthWrite),r.setMask(et.colorWrite);let Dt=et.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(et.stencilWriteMask),a.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),a.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),Y(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(et){v!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),v=et)}function bt(et){et!==Cf?(q(i.CULL_FACE),et!==b&&(et===_c?i.cullFace(i.BACK):et===If?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),b=et}function Lt(et){et!==L&&(N&&i.lineWidth(et),L=et)}function Y(et,qt,Tt){et?(q(i.POLYGON_OFFSET_FILL),(E!==qt||S!==Tt)&&(i.polygonOffset(qt,Tt),E=qt,S=Tt)):ht(i.POLYGON_OFFSET_FILL)}function Nt(et){et?q(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function z(et){et===void 0&&(et=i.TEXTURE0+O-1),dt!==et&&(i.activeTexture(et),dt=et)}function C(et,qt,Tt){Tt===void 0&&(dt===null?Tt=i.TEXTURE0+O-1:Tt=dt);let Dt=xt[Tt];Dt===void 0&&(Dt={type:void 0,texture:void 0},xt[Tt]=Dt),(Dt.type!==et||Dt.texture!==qt)&&(dt!==Tt&&(i.activeTexture(Tt),dt=Tt),i.bindTexture(et,qt||J[et]),Dt.type=et,Dt.texture=qt)}function ft(){let et=xt[dt];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function At(){try{i.compressedTexImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function It(){try{i.compressedTexImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function wt(){try{i.texStorage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function te(et){kt.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),kt.copy(et))}function Zt(et){F.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),F.copy(et))}function ue(et,qt){let Tt=c.get(qt);Tt===void 0&&(Tt=new WeakMap,c.set(qt,Tt));let Dt=Tt.get(et);Dt===void 0&&(Dt=i.getUniformBlockIndex(qt,et.name),Tt.set(et,Dt))}function oe(et,qt){let Dt=c.get(qt).get(et);l.get(qt)!==Dt&&(i.uniformBlockBinding(qt,Dt,et.__bindingPointIndex),l.set(qt,Dt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,xt={},d={},m=new WeakMap,u=[],g=null,_=!1,p=null,f=null,w=null,x=null,y=null,B=null,T=null,I=new ae(0,0,0),D=0,M=!1,v=null,b=null,L=null,E=null,S=null,kt.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ht,bindFramebuffer:pt,drawBuffers:Rt,useProgram:Ht,setBlending:P,setMaterial:rt,setFlipSided:tt,setCullFace:bt,setLineWidth:Lt,setPolygonOffset:Y,setScissorTest:Nt,activeTexture:z,bindTexture:C,unbindTexture:ft,compressedTexImage2D:At,compressedTexImage3D:It,texImage2D:Pt,texImage3D:$t,updateUBOMapping:ue,uniformBlockBinding:oe,texStorage2D:wt,texStorage3D:St,texSubImage2D:$,texSubImage3D:ut,compressedTexSubImage2D:ct,compressedTexSubImage3D:yt,scissor:te,viewport:Zt,reset:_e}}function yh(i,t,e,n){let s=yg(n);switch(e){case Bh:return i*t;case Hh:return i*t;case Vh:return i*t*2;case Ql:return i*t/s.components*s.byteLength;case tc:return i*t/s.components*s.byteLength;case Gh:return i*t*2/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case kh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case nc:return i*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wh:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yg(i){switch(i){case ei:case Fh:return{byteLength:1,components:1};case Zs:case zh:case cr:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case Fi:case Jl:case Hn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _g(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,d,m=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,C){return u?new OffscreenCanvas(z,C):no("canvas")}function _(z,C,ft){let At=1,It=Nt(z);if((It.width>ft||It.height>ft)&&(At=ft/Math.max(It.width,It.height)),At<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let $=Math.floor(At*It.width),ut=Math.floor(At*It.height);d===void 0&&(d=g($,ut));let ct=C?g($,ut):d;return ct.width=$,ct.height=ut,ct.getContext("2d").drawImage(z,0,0,$,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+It.width+"x"+It.height+") to ("+$+"x"+ut+")."),ct}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+It.width+"x"+It.height+")."),z;return z}function p(z){return z.generateMipmaps}function f(z){i.generateMipmap(z)}function w(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(z,C,ft,At,It=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let $=C;if(C===i.RED&&(ft===i.FLOAT&&($=i.R32F),ft===i.HALF_FLOAT&&($=i.R16F),ft===i.UNSIGNED_BYTE&&($=i.R8)),C===i.RED_INTEGER&&(ft===i.UNSIGNED_BYTE&&($=i.R8UI),ft===i.UNSIGNED_SHORT&&($=i.R16UI),ft===i.UNSIGNED_INT&&($=i.R32UI),ft===i.BYTE&&($=i.R8I),ft===i.SHORT&&($=i.R16I),ft===i.INT&&($=i.R32I)),C===i.RG&&(ft===i.FLOAT&&($=i.RG32F),ft===i.HALF_FLOAT&&($=i.RG16F),ft===i.UNSIGNED_BYTE&&($=i.RG8)),C===i.RG_INTEGER&&(ft===i.UNSIGNED_BYTE&&($=i.RG8UI),ft===i.UNSIGNED_SHORT&&($=i.RG16UI),ft===i.UNSIGNED_INT&&($=i.RG32UI),ft===i.BYTE&&($=i.RG8I),ft===i.SHORT&&($=i.RG16I),ft===i.INT&&($=i.RG32I)),C===i.RGB_INTEGER&&(ft===i.UNSIGNED_BYTE&&($=i.RGB8UI),ft===i.UNSIGNED_SHORT&&($=i.RGB16UI),ft===i.UNSIGNED_INT&&($=i.RGB32UI),ft===i.BYTE&&($=i.RGB8I),ft===i.SHORT&&($=i.RGB16I),ft===i.INT&&($=i.RGB32I)),C===i.RGBA_INTEGER&&(ft===i.UNSIGNED_BYTE&&($=i.RGBA8UI),ft===i.UNSIGNED_SHORT&&($=i.RGBA16UI),ft===i.UNSIGNED_INT&&($=i.RGBA32UI),ft===i.BYTE&&($=i.RGBA8I),ft===i.SHORT&&($=i.RGBA16I),ft===i.INT&&($=i.RGBA32I)),C===i.RGB&&ft===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),C===i.RGBA){let ut=It?zo:we.getTransfer(At);ft===i.FLOAT&&($=i.RGBA32F),ft===i.HALF_FLOAT&&($=i.RGBA16F),ft===i.UNSIGNED_BYTE&&($=ut===Ie?i.SRGB8_ALPHA8:i.RGBA8),ft===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),ft===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(z,C){let ft;return z?C===null||C===Fi||C===xs?ft=i.DEPTH24_STENCIL8:C===Hn?ft=i.DEPTH32F_STENCIL8:C===Zs&&(ft=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Fi||C===xs?ft=i.DEPTH_COMPONENT24:C===Hn?ft=i.DEPTH_COMPONENT32F:C===Zs&&(ft=i.DEPTH_COMPONENT16),ft}function B(z,C){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==fn&&z.minFilter!==kn?Math.log2(Math.max(C.width,C.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?C.mipmaps.length:1}function T(z){let C=z.target;C.removeEventListener("dispose",T),D(C),C.isVideoTexture&&h.delete(C)}function I(z){let C=z.target;C.removeEventListener("dispose",I),v(C)}function D(z){let C=n.get(z);if(C.__webglInit===void 0)return;let ft=z.source,At=m.get(ft);if(At){let It=At[C.__cacheKey];It.usedTimes--,It.usedTimes===0&&M(z),Object.keys(At).length===0&&m.delete(ft)}n.remove(z)}function M(z){let C=n.get(z);i.deleteTexture(C.__webglTexture);let ft=z.source,At=m.get(ft);delete At[C.__cacheKey],o.memory.textures--}function v(z){let C=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let At=0;At<6;At++){if(Array.isArray(C.__webglFramebuffer[At]))for(let It=0;It<C.__webglFramebuffer[At].length;It++)i.deleteFramebuffer(C.__webglFramebuffer[At][It]);else i.deleteFramebuffer(C.__webglFramebuffer[At]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[At])}else{if(Array.isArray(C.__webglFramebuffer))for(let At=0;At<C.__webglFramebuffer.length;At++)i.deleteFramebuffer(C.__webglFramebuffer[At]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let At=0;At<C.__webglColorRenderbuffer.length;At++)C.__webglColorRenderbuffer[At]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[At]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let ft=z.textures;for(let At=0,It=ft.length;At<It;At++){let $=n.get(ft[At]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(ft[At])}n.remove(z)}let b=0;function L(){b=0}function E(){let z=b;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),b+=1,z}function S(z){let C=[];return C.push(z.wrapS),C.push(z.wrapT),C.push(z.wrapR||0),C.push(z.magFilter),C.push(z.minFilter),C.push(z.anisotropy),C.push(z.internalFormat),C.push(z.format),C.push(z.type),C.push(z.generateMipmaps),C.push(z.premultiplyAlpha),C.push(z.flipY),C.push(z.unpackAlignment),C.push(z.colorSpace),C.join()}function O(z,C){let ft=n.get(z);if(z.isVideoTexture&&Lt(z),z.isRenderTargetTexture===!1&&z.version>0&&ft.__version!==z.version){let At=z.image;if(At===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(At.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(ft,z,C);return}}e.bindTexture(i.TEXTURE_2D,ft.__webglTexture,i.TEXTURE0+C)}function N(z,C){let ft=n.get(z);if(z.version>0&&ft.__version!==z.version){F(ft,z,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ft.__webglTexture,i.TEXTURE0+C)}function H(z,C){let ft=n.get(z);if(z.version>0&&ft.__version!==z.version){F(ft,z,C);return}e.bindTexture(i.TEXTURE_3D,ft.__webglTexture,i.TEXTURE0+C)}function k(z,C){let ft=n.get(z);if(z.version>0&&ft.__version!==z.version){G(ft,z,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture,i.TEXTURE0+C)}let dt={[Ni]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},xt={[fn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},U={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[qh]:i.LEQUAL,[hu]:i.EQUAL,[du]:i.GEQUAL,[fu]:i.GREATER,[uu]:i.NOTEQUAL};function Mt(z,C){if(C.type===Hn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===kn||C.magFilter===qo||C.magFilter===yr||C.magFilter===Ui||C.minFilter===kn||C.minFilter===qo||C.minFilter===yr||C.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,dt[C.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,dt[C.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,dt[C.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,xt[C.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,xt[C.minFilter]),C.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,U[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===fn||C.minFilter!==yr&&C.minFilter!==Ui||C.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let ft=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function kt(z,C){let ft=!1;z.__webglInit===void 0&&(z.__webglInit=!0,C.addEventListener("dispose",T));let At=C.source,It=m.get(At);It===void 0&&(It={},m.set(At,It));let $=S(C);if($!==z.__cacheKey){It[$]===void 0&&(It[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ft=!0),It[$].usedTimes++;let ut=It[z.__cacheKey];ut!==void 0&&(It[z.__cacheKey].usedTimes--,ut.usedTimes===0&&M(C)),z.__cacheKey=$,z.__webglTexture=It[$].texture}return ft}function F(z,C,ft){let At=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(At=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(At=i.TEXTURE_3D);let It=kt(z,C),$=C.source;e.bindTexture(At,z.__webglTexture,i.TEXTURE0+ft);let ut=n.get($);if($.version!==ut.__version||It===!0){e.activeTexture(i.TEXTURE0+ft);let ct=we.getPrimaries(we.workingColorSpace),yt=C.colorSpace===di?null:we.getPrimaries(C.colorSpace),wt=C.colorSpace===di||ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let St=_(C.image,!1,s.maxTextureSize);St=Y(C,St);let Pt=r.convert(C.format,C.colorSpace),$t=r.convert(C.type),te=x(C.internalFormat,Pt,$t,C.colorSpace,C.isVideoTexture);Mt(At,C);let Zt,ue=C.mipmaps,oe=C.isVideoTexture!==!0,_e=ut.__version===void 0||It===!0,et=$.dataReady,qt=B(C,St);if(C.isDepthTexture)te=y(C.format===ys,C.type),_e&&(oe?e.texStorage2D(i.TEXTURE_2D,1,te,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,te,St.width,St.height,0,Pt,$t,null));else if(C.isDataTexture)if(ue.length>0){oe&&_e&&e.texStorage2D(i.TEXTURE_2D,qt,te,ue[0].width,ue[0].height);for(let Tt=0,Dt=ue.length;Tt<Dt;Tt++)Zt=ue[Tt],oe?et&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Zt.width,Zt.height,Pt,$t,Zt.data):e.texImage2D(i.TEXTURE_2D,Tt,te,Zt.width,Zt.height,0,Pt,$t,Zt.data);C.generateMipmaps=!1}else oe?(_e&&e.texStorage2D(i.TEXTURE_2D,qt,te,St.width,St.height),et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,Pt,$t,St.data)):e.texImage2D(i.TEXTURE_2D,0,te,St.width,St.height,0,Pt,$t,St.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){oe&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,te,ue[0].width,ue[0].height,St.depth);for(let Tt=0,Dt=ue.length;Tt<Dt;Tt++)if(Zt=ue[Tt],C.format!==vn)if(Pt!==null)if(oe){if(et)if(C.layerUpdates.size>0){let jt=yh(Zt.width,Zt.height,C.format,C.type);for(let Qt of C.layerUpdates){let pe=Zt.data.subarray(Qt*jt/Zt.data.BYTES_PER_ELEMENT,(Qt+1)*jt/Zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,Qt,Zt.width,Zt.height,1,Pt,pe)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Zt.width,Zt.height,St.depth,Pt,Zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Tt,te,Zt.width,Zt.height,St.depth,0,Zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Tt,0,0,0,Zt.width,Zt.height,St.depth,Pt,$t,Zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Tt,te,Zt.width,Zt.height,St.depth,0,Pt,$t,Zt.data)}else{oe&&_e&&e.texStorage2D(i.TEXTURE_2D,qt,te,ue[0].width,ue[0].height);for(let Tt=0,Dt=ue.length;Tt<Dt;Tt++)Zt=ue[Tt],C.format!==vn?Pt!==null?oe?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,Tt,0,0,Zt.width,Zt.height,Pt,Zt.data):e.compressedTexImage2D(i.TEXTURE_2D,Tt,te,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?et&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Zt.width,Zt.height,Pt,$t,Zt.data):e.texImage2D(i.TEXTURE_2D,Tt,te,Zt.width,Zt.height,0,Pt,$t,Zt.data)}else if(C.isDataArrayTexture)if(oe){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,te,St.width,St.height,St.depth),et)if(C.layerUpdates.size>0){let Tt=yh(St.width,St.height,C.format,C.type);for(let Dt of C.layerUpdates){let jt=St.data.subarray(Dt*Tt/St.data.BYTES_PER_ELEMENT,(Dt+1)*Tt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,St.width,St.height,1,Pt,$t,jt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Pt,$t,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,te,St.width,St.height,St.depth,0,Pt,$t,St.data);else if(C.isData3DTexture)oe?(_e&&e.texStorage3D(i.TEXTURE_3D,qt,te,St.width,St.height,St.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Pt,$t,St.data)):e.texImage3D(i.TEXTURE_3D,0,te,St.width,St.height,St.depth,0,Pt,$t,St.data);else if(C.isFramebufferTexture){if(_e)if(oe)e.texStorage2D(i.TEXTURE_2D,qt,te,St.width,St.height);else{let Tt=St.width,Dt=St.height;for(let jt=0;jt<qt;jt++)e.texImage2D(i.TEXTURE_2D,jt,te,Tt,Dt,0,Pt,$t,null),Tt>>=1,Dt>>=1}}else if(ue.length>0){if(oe&&_e){let Tt=Nt(ue[0]);e.texStorage2D(i.TEXTURE_2D,qt,te,Tt.width,Tt.height)}for(let Tt=0,Dt=ue.length;Tt<Dt;Tt++)Zt=ue[Tt],oe?et&&e.texSubImage2D(i.TEXTURE_2D,Tt,0,0,Pt,$t,Zt):e.texImage2D(i.TEXTURE_2D,Tt,te,Pt,$t,Zt);C.generateMipmaps=!1}else if(oe){if(_e){let Tt=Nt(St);e.texStorage2D(i.TEXTURE_2D,qt,te,Tt.width,Tt.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,$t,St)}else e.texImage2D(i.TEXTURE_2D,0,te,Pt,$t,St);p(C)&&f(At),ut.__version=$.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function G(z,C,ft){if(C.image.length!==6)return;let At=kt(z,C),It=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+ft);let $=n.get(It);if(It.version!==$.__version||At===!0){e.activeTexture(i.TEXTURE0+ft);let ut=we.getPrimaries(we.workingColorSpace),ct=C.colorSpace===di?null:we.getPrimaries(C.colorSpace),yt=C.colorSpace===di||ut===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let wt=C.isCompressedTexture||C.image[0].isCompressedTexture,St=C.image[0]&&C.image[0].isDataTexture,Pt=[];for(let Dt=0;Dt<6;Dt++)!wt&&!St?Pt[Dt]=_(C.image[Dt],!0,s.maxCubemapSize):Pt[Dt]=St?C.image[Dt].image:C.image[Dt],Pt[Dt]=Y(C,Pt[Dt]);let $t=Pt[0],te=r.convert(C.format,C.colorSpace),Zt=r.convert(C.type),ue=x(C.internalFormat,te,Zt,C.colorSpace),oe=C.isVideoTexture!==!0,_e=$.__version===void 0||At===!0,et=It.dataReady,qt=B(C,$t);Mt(i.TEXTURE_CUBE_MAP,C);let Tt;if(wt){oe&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,ue,$t.width,$t.height);for(let Dt=0;Dt<6;Dt++){Tt=Pt[Dt].mipmaps;for(let jt=0;jt<Tt.length;jt++){let Qt=Tt[jt];C.format!==vn?te!==null?oe?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,0,0,Qt.width,Qt.height,te,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,ue,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,0,0,Qt.width,Qt.height,te,Zt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,ue,Qt.width,Qt.height,0,te,Zt,Qt.data)}}}else{if(Tt=C.mipmaps,oe&&_e){Tt.length>0&&qt++;let Dt=Nt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,ue,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(St){oe?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Pt[Dt].width,Pt[Dt].height,te,Zt,Pt[Dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,ue,Pt[Dt].width,Pt[Dt].height,0,te,Zt,Pt[Dt].data);for(let jt=0;jt<Tt.length;jt++){let pe=Tt[jt].image[Dt].image;oe?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,0,0,pe.width,pe.height,te,Zt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,ue,pe.width,pe.height,0,te,Zt,pe.data)}}else{oe?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,te,Zt,Pt[Dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,ue,te,Zt,Pt[Dt]);for(let jt=0;jt<Tt.length;jt++){let Qt=Tt[jt];oe?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,0,0,te,Zt,Qt.image[Dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,ue,te,Zt,Qt.image[Dt])}}}p(C)&&f(i.TEXTURE_CUBE_MAP),$.__version=It.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function J(z,C,ft,At,It,$){let ut=r.convert(ft.format,ft.colorSpace),ct=r.convert(ft.type),yt=x(ft.internalFormat,ut,ct,ft.colorSpace),wt=n.get(C),St=n.get(ft);if(St.__renderTarget=C,!wt.__hasExternalTextures){let Pt=Math.max(1,C.width>>$),$t=Math.max(1,C.height>>$);It===i.TEXTURE_3D||It===i.TEXTURE_2D_ARRAY?e.texImage3D(It,$,yt,Pt,$t,C.depth,0,ut,ct,null):e.texImage2D(It,$,yt,Pt,$t,0,ut,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,It,St.__webglTexture,0,tt(C)):(It===i.TEXTURE_2D||It>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&It<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,At,It,St.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(z,C,ft){if(i.bindRenderbuffer(i.RENDERBUFFER,z),C.depthBuffer){let At=C.depthTexture,It=At&&At.isDepthTexture?At.type:null,$=y(C.stencilBuffer,It),ut=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=tt(C);bt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,$,C.width,C.height):ft?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,$,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,$,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,z)}else{let At=C.textures;for(let It=0;It<At.length;It++){let $=At[It],ut=r.convert($.format,$.colorSpace),ct=r.convert($.type),yt=x($.internalFormat,ut,ct,$.colorSpace),wt=tt(C);ft&&bt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,yt,C.width,C.height):bt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,yt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,yt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(z,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let At=n.get(C.depthTexture);At.__renderTarget=C,(!At.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);let It=At.__webglTexture,$=tt(C);if(C.depthTexture.format===fs)bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,It,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,It,0);else if(C.depthTexture.format===ys)bt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,It,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,It,0);else throw new Error("Unknown depthTexture format")}function pt(z){let C=n.get(z),ft=z.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==z.depthTexture){let At=z.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),At){let It=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,At.removeEventListener("dispose",It)};At.addEventListener("dispose",It),C.__depthDisposeCallback=It}C.__boundDepthTexture=At}if(z.depthTexture&&!C.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");ht(C.__webglFramebuffer,z)}else if(ft){C.__webglDepthbuffer=[];for(let At=0;At<6;At++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[At]),C.__webglDepthbuffer[At]===void 0)C.__webglDepthbuffer[At]=i.createRenderbuffer(),q(C.__webglDepthbuffer[At],z,!1);else{let It=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer[At];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),q(C.__webglDepthbuffer,z,!1);else{let At=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,It)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(z,C,ft){let At=n.get(z);C!==void 0&&J(At.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ft!==void 0&&pt(z)}function Ht(z){let C=z.texture,ft=n.get(z),At=n.get(C);z.addEventListener("dispose",I);let It=z.textures,$=z.isWebGLCubeRenderTarget===!0,ut=It.length>1;if(ut||(At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture()),At.__version=C.version,o.memory.textures++),$){ft.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(C.mipmaps&&C.mipmaps.length>0){ft.__webglFramebuffer[ct]=[];for(let yt=0;yt<C.mipmaps.length;yt++)ft.__webglFramebuffer[ct][yt]=i.createFramebuffer()}else ft.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ft.__webglFramebuffer=[];for(let ct=0;ct<C.mipmaps.length;ct++)ft.__webglFramebuffer[ct]=i.createFramebuffer()}else ft.__webglFramebuffer=i.createFramebuffer();if(ut)for(let ct=0,yt=It.length;ct<yt;ct++){let wt=n.get(It[ct]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&bt(z)===!1){ft.__webglMultisampledFramebuffer=i.createFramebuffer(),ft.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let ct=0;ct<It.length;ct++){let yt=It[ct];ft.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let wt=r.convert(yt.format,yt.colorSpace),St=r.convert(yt.type),Pt=x(yt.internalFormat,wt,St,yt.colorSpace,z.isXRRenderTarget===!0),$t=tt(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Pt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(ft.__webglDepthRenderbuffer=i.createRenderbuffer(),q(ft.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,At.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,C);for(let ct=0;ct<6;ct++)if(C.mipmaps&&C.mipmaps.length>0)for(let yt=0;yt<C.mipmaps.length;yt++)J(ft.__webglFramebuffer[ct][yt],z,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt);else J(ft.__webglFramebuffer[ct],z,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(C)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ct=0,yt=It.length;ct<yt;ct++){let wt=It[ct],St=n.get(wt);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),Mt(i.TEXTURE_2D,wt),J(ft.__webglFramebuffer,z,wt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),p(wt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ct=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,At.__webglTexture),Mt(ct,C),C.mipmaps&&C.mipmaps.length>0)for(let yt=0;yt<C.mipmaps.length;yt++)J(ft.__webglFramebuffer[yt],z,C,i.COLOR_ATTACHMENT0,ct,yt);else J(ft.__webglFramebuffer,z,C,i.COLOR_ATTACHMENT0,ct,0);p(C)&&f(ct),e.unbindTexture()}z.depthBuffer&&pt(z)}function j(z){let C=z.textures;for(let ft=0,At=C.length;ft<At;ft++){let It=C[ft];if(p(It)){let $=w(z),ut=n.get(It).__webglTexture;e.bindTexture($,ut),f($),e.unbindTexture()}}}let gt=[],P=[];function rt(z){if(z.samples>0){if(bt(z)===!1){let C=z.textures,ft=z.width,At=z.height,It=i.COLOR_BUFFER_BIT,$=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(z),ct=C.length>1;if(ct)for(let yt=0;yt<C.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let yt=0;yt<C.length;yt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(It|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(It|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[yt]);let wt=n.get(C[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,ft,At,0,0,ft,At,It,i.NEAREST),l===!0&&(gt.length=0,P.length=0,gt.push(i.COLOR_ATTACHMENT0+yt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(gt.push($),P.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let yt=0;yt<C.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[yt]);let wt=n.get(C[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let C=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function tt(z){return Math.min(s.maxSamples,z.samples)}function bt(z){let C=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Lt(z){let C=o.render.frame;h.get(z)!==C&&(h.set(z,C),z.update())}function Y(z,C){let ft=z.colorSpace,At=z.format,It=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ft!==Es&&ft!==di&&(we.getTransfer(ft)===Ie?(At!==vn||It!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),C}function Nt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=E,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=Rt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=bt}function vg(i,t){function e(n,s=di){let r,o=we.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===kh)return i.RGB;if(n===vn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Vh)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===Kr||n===jr)if(o===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return o===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wh||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wl=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mg={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&m>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,m=null,u=null,g=null,_=new Tl,p=e.getContextAttributes(),f=null,w=null,x=[],y=[],B=new Bt,T=null,I=new hn;I.viewport=new Ve;let D=new hn;D.viewport=new Ve;let M=[I,D],v=new wl,b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let G=x[F];return G===void 0&&(G=new qs,x[F]=G),G.getTargetRaySpace()},this.getControllerGrip=function(F){let G=x[F];return G===void 0&&(G=new qs,x[F]=G),G.getGripSpace()},this.getHand=function(F){let G=x[F];return G===void 0&&(G=new qs,x[F]=G),G.getHandSpace()};function E(F){let G=y.indexOf(F.inputSource);if(G===-1)return;let J=x[G];J!==void 0&&(J.update(F.inputSource,F.frame,c||o),J.dispatchEvent({type:F.type,data:F.inputSource}))}function S(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",S),s.removeEventListener("inputsourceschange",O);for(let F=0;F<x.length;F++){let G=y[F];G!==null&&(y[F]=null,x[F].disconnect(G))}b=null,L=null,_.reset(),t.setRenderTarget(f),u=null,m=null,d=null,s=null,w=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",S),s.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let G={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new ni(u.framebufferWidth,u.framebufferHeight,{format:vn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let G=null,J=null,q=null;p.depth&&(q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=p.stencil?ys:fs,J=p.stencil?xs:Fi);let ht={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:r};d=new XRWebGLBinding(s,e),m=d.createProjectionLayer(ht),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),w=new ni(m.textureWidth,m.textureHeight,{format:vn,type:ei,depthTexture:new po(m.textureWidth,m.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(F){for(let G=0;G<F.removed.length;G++){let J=F.removed[G],q=y.indexOf(J);q>=0&&(y[q]=null,x[q].disconnect(J))}for(let G=0;G<F.added.length;G++){let J=F.added[G],q=y.indexOf(J);if(q===-1){for(let pt=0;pt<x.length;pt++)if(pt>=y.length){y.push(J),q=pt;break}else if(y[pt]===null){y[pt]=J,q=pt;break}if(q===-1)break}let ht=x[q];ht&&ht.connect(J)}}let N=new V,H=new V;function k(F,G,J){N.setFromMatrixPosition(G.matrixWorld),H.setFromMatrixPosition(J.matrixWorld);let q=N.distanceTo(H),ht=G.projectionMatrix.elements,pt=J.projectionMatrix.elements,Rt=ht[14]/(ht[10]-1),Ht=ht[14]/(ht[10]+1),j=(ht[9]+1)/ht[5],gt=(ht[9]-1)/ht[5],P=(ht[8]-1)/ht[0],rt=(pt[8]+1)/pt[0],tt=Rt*P,bt=Rt*rt,Lt=q/(-P+rt),Y=Lt*-P;if(G.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Y),F.translateZ(Lt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ht[10]===-1)F.projectionMatrix.copy(G.projectionMatrix),F.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let Nt=Rt+Lt,z=Ht+Lt,C=tt-Y,ft=bt+(q-Y),At=j*Ht/z*Nt,It=gt*Ht/z*Nt;F.projectionMatrix.makePerspective(C,ft,At,It,Nt,z),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function dt(F,G){G===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(G.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let G=F.near,J=F.far;_.texture!==null&&(_.depthNear>0&&(G=_.depthNear),_.depthFar>0&&(J=_.depthFar)),v.near=D.near=I.near=G,v.far=D.far=I.far=J,(b!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,L=v.far),I.layers.mask=F.layers.mask|2,D.layers.mask=F.layers.mask|4,v.layers.mask=I.layers.mask|D.layers.mask;let q=F.parent,ht=v.cameras;dt(v,q);for(let pt=0;pt<ht.length;pt++)dt(ht[pt],q);ht.length===2?k(v,I,D):v.projectionMatrix.copy(I.projectionMatrix),xt(F,v,q)};function xt(F,G,J){J===null?F.matrix.copy(G.matrixWorld):(F.matrix.copy(J.matrixWorld),F.matrix.invert(),F.matrix.multiply(G.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(G.projectionMatrix),F.projectionMatrixInverse.copy(G.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Js*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(F){l=F,m!==null&&(m.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let U=null;function Mt(F,G){if(h=G.getViewerPose(c||o),g=G,h!==null){let J=h.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let q=!1;J.length!==v.cameras.length&&(v.cameras.length=0,q=!0);for(let pt=0;pt<J.length;pt++){let Rt=J[pt],Ht=null;if(u!==null)Ht=u.getViewport(Rt);else{let gt=d.getViewSubImage(m,Rt);Ht=gt.viewport,pt===0&&(t.setRenderTargetTextures(w,gt.colorTexture,m.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(w))}let j=M[pt];j===void 0&&(j=new hn,j.layers.enable(pt),j.viewport=new Ve,M[pt]=j),j.matrix.fromArray(Rt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Rt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),pt===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),q===!0&&v.cameras.push(j)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")){let pt=d.getDepthInformation(J[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,s.renderState)}}for(let J=0;J<x.length;J++){let q=y[J],ht=x[J];q!==null&&ht!==void 0&&ht.update(q,G,c||o)}U&&U(F,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let kt=new Jh;kt.setAnimationLoop(Mt),this.setAnimationLoop=function(F){U=F},this.dispose=function(){}}},Ci=new Ln,Eg=new Se;function wg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Zh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,w,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),m(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,w,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=t.get(f),x=w.envMap,y=w.envMapRotation;x&&(p.envMap.value=x,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),p.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Ci)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){let y=x.program;n.uniformBlockBinding(w,y)}function c(w,x){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",p));let B=x.program;n.updateUBOMapping(w,B);let T=t.render.frame;r[w.id]!==T&&(m(w),r[w.id]=T)}function h(w){let x=d();w.__bindingPointIndex=x;let y=i.createBuffer(),B=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){let x=s[w.id],y=w.uniforms,B=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,I=y.length;T<I;T++){let D=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,v=D.length;M<v;M++){let b=D[M];if(u(b,T,M,B)===!0){let L=b.__offset,E=Array.isArray(b.value)?b.value:[b.value],S=0;for(let O=0;O<E.length;O++){let N=E[O],H=_(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,L+S,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,S),S+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(w,x,y,B){let T=w.value,I=x+"_"+y;if(B[I]===void 0)return typeof T=="number"||typeof T=="boolean"?B[I]=T:B[I]=T.clone(),!0;{let D=B[I];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return B[I]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(w){let x=w.uniforms,y=0,B=16;for(let I=0,D=x.length;I<D;I++){let M=Array.isArray(x[I])?x[I]:[x[I]];for(let v=0,b=M.length;v<b;v++){let L=M[v],E=Array.isArray(L.value)?L.value:[L.value];for(let S=0,O=E.length;S<O;S++){let N=E[S],H=_(N),k=y%B,dt=k%H.boundary,xt=k+dt;y+=dt,xt!==0&&B-xt<H.storage&&(y+=B-xt),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=H.storage}}}let T=y%B;return T>0&&(y+=B-T),w.__size=y,w.__cache={},this}function _(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function p(w){let x=w.target;x.removeEventListener("dispose",p);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var mo=class{constructor(t={}){let{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,f=null,w=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Vn,this.toneMappingExposure=1;let y=this,B=!1,T=0,I=0,D=null,M=-1,v=null,b=new Ve,L=new Ve,E=null,S=new ae(0),O=0,N=e.width,H=e.height,k=1,dt=null,xt=null,U=new Ve(0,0,N,H),Mt=new Ve(0,0,N,H),kt=!1,F=new Ks,G=!1,J=!1,q=new Se,ht=new Se,pt=new V,Rt=new Ve,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function gt(){return D===null?k:1}let P=n;function rt(R,W){return e.getContext(R,W)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),P===null){let W="webgl2";if(P=rt(W,R),P===null)throw rt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let tt,bt,Lt,Y,Nt,z,C,ft,At,It,$,ut,ct,yt,wt,St,Pt,$t,te,Zt,ue,oe,_e,et;function qt(){tt=new Vm(P),tt.init(),oe=new vg(P,tt),bt=new Fm(P,tt,t,oe),Lt=new xg(P,tt),bt.reverseDepthBuffer&&m&&Lt.buffers.depth.setReversed(!0),Y=new Xm(P),Nt=new sg,z=new _g(P,tt,Lt,Nt,bt,oe,Y),C=new Om(y),ft=new Hm(y),At=new ju(P),_e=new Um(P,At),It=new Gm(P,At,Y,_e),$=new Ym(P,It,At,Y),te=new qm(P,bt,z),St=new zm(Nt),ut=new ig(y,C,ft,tt,bt,_e,St),ct=new wg(y,Nt),yt=new og,wt=new ug(tt),$t=new Dm(y,C,ft,Lt,$,u,l),Pt=new mg(y,$,bt),et=new Tg(P,Y,bt,Lt),Zt=new Nm(P,tt,Y),ue=new Wm(P,tt,Y),Y.programs=ut.programs,y.capabilities=bt,y.extensions=tt,y.properties=Nt,y.renderLists=yt,y.shadowMap=Pt,y.state=Lt,y.info=Y}qt();let Tt=new Al(y,P);this.xr=Tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let R=tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(N,H,!1))},this.getSize=function(R){return R.set(N,H)},this.setSize=function(R,W,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,H=W,e.width=Math.floor(R*k),e.height=Math.floor(W*k),at===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(N*k,H*k).floor()},this.setDrawingBufferSize=function(R,W,at){N=R,H=W,k=at,e.width=Math.floor(R*at),e.height=Math.floor(W*at),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,W,at,ot){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,W,at,ot),Lt.viewport(b.copy(U).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(Mt)},this.setScissor=function(R,W,at,ot){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,W,at,ot),Lt.scissor(L.copy(Mt).multiplyScalar(k).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(R){Lt.setScissorTest(kt=R)},this.setOpaqueSort=function(R){dt=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(R=!0,W=!0,at=!0){let ot=0;if(R){let st=!1;if(D!==null){let Vt=D.texture.format;st=Vt===nc||Vt===ec||Vt===tc}if(st){let Vt=D.texture.type,Gt=Vt===ei||Vt===Fi||Vt===Zs||Vt===xs||Vt===Kl||Vt===jl,Ot=$t.getClearColor(),Wt=$t.getClearAlpha(),ee=Ot.r,se=Ot.g,Jt=Ot.b;Gt?(g[0]=ee,g[1]=se,g[2]=Jt,g[3]=Wt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=ee,_[1]=se,_[2]=Jt,_[3]=Wt,P.clearBufferiv(P.COLOR,0,_))}else ot|=P.COLOR_BUFFER_BIT}W&&(ot|=P.DEPTH_BUFFER_BIT),at&&(ot|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),yt.dispose(),wt.dispose(),Nt.dispose(),C.dispose(),ft.dispose(),$.dispose(),_e.dispose(),et.dispose(),ut.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",lt),Tt.removeEventListener("sessionend",Ct),Xt.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let R=Y.autoReset,W=Pt.enabled,at=Pt.autoUpdate,ot=Pt.needsUpdate,st=Pt.type;qt(),Y.autoReset=R,Pt.enabled=W,Pt.autoUpdate=at,Pt.needsUpdate=ot,Pt.type=st}function Qt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){let W=R.target;W.removeEventListener("dispose",pe),A(W)}function A(R){Q(R),Nt.remove(R)}function Q(R){let W=Nt.get(R).programs;W!==void 0&&(W.forEach(function(at){ut.releaseProgram(at)}),R.isShaderMaterial&&ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,at,ot,st,Vt){W===null&&(W=Ht);let Gt=st.isMesh&&st.matrixWorld.determinant()<0,Ot=nt(R,W,at,ot,st);Lt.setMaterial(ot,Gt);let Wt=at.index,ee=1;if(ot.wireframe===!0){if(Wt=It.getWireframeAttribute(at),Wt===void 0)return;ee=2}let se=at.drawRange,Jt=at.attributes.position,de=se.start*ee,be=(se.start+se.count)*ee;Vt!==null&&(de=Math.max(de,Vt.start*ee),be=Math.min(be,(Vt.start+Vt.count)*ee)),Wt!==null?(de=Math.max(de,0),be=Math.min(be,Wt.count)):Jt!=null&&(de=Math.max(de,0),be=Math.min(be,Jt.count));let De=be-de;if(De<0||De===1/0)return;_e.setup(st,ot,Ot,at,Wt);let dn,Te=Zt;if(Wt!==null&&(dn=At.get(Wt),Te=ue,Te.setIndex(dn)),st.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*gt()),Te.setMode(P.LINES)):Te.setMode(P.TRIANGLES);else if(st.isLine){let ce=ot.linewidth;ce===void 0&&(ce=1),Lt.setLineWidth(ce*gt()),st.isLineSegments?Te.setMode(P.LINES):st.isLineLoop?Te.setMode(P.LINE_LOOP):Te.setMode(P.LINE_STRIP)}else st.isPoints?Te.setMode(P.POINTS):st.isSprite&&Te.setMode(P.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Te.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Te.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let ce=st._multiDrawStarts,Xn=st._multiDrawCounts,Ae=st._multiDrawCount,An=Wt?At.get(Wt).bytesPerElement:1,Vi=Nt.get(ot).currentProgram.getUniforms();for(let xn=0;xn<Ae;xn++)Vi.setValue(P,"_gl_DrawID",xn),Te.render(ce[xn]/An,Xn[xn])}else if(st.isInstancedMesh)Te.renderInstances(de,De,st.count);else if(at.isInstancedBufferGeometry){let ce=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xn=Math.min(at.instanceCount,ce);Te.renderInstances(de,De,Xn)}else Te.render(de,De)};function K(R,W,at){R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=nn,R.needsUpdate=!0,re(R,W,at),R.side=xi,R.needsUpdate=!0,re(R,W,at),R.side=We):re(R,W,at)}this.compile=function(R,W,at=null){at===null&&(at=R),f=wt.get(at),f.init(W),x.push(f),at.traverseVisible(function(st){st.isLight&&st.layers.test(W.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),R!==at&&R.traverseVisible(function(st){st.isLight&&st.layers.test(W.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),f.setupLights();let ot=new Set;return R.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Vt=st.material;if(Vt)if(Array.isArray(Vt))for(let Gt=0;Gt<Vt.length;Gt++){let Ot=Vt[Gt];K(Ot,at,st),ot.add(Ot)}else K(Vt,at,st),ot.add(Vt)}),x.pop(),f=null,ot},this.compileAsync=function(R,W,at=null){let ot=this.compile(R,W,at);return new Promise(st=>{function Vt(){if(ot.forEach(function(Gt){Nt.get(Gt).currentProgram.isReady()&&ot.delete(Gt)}),ot.size===0){st(R);return}setTimeout(Vt,10)}tt.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let it=null;function _t(R){it&&it(R)}function lt(){Xt.stop()}function Ct(){Xt.start()}let Xt=new Jh;Xt.setAnimationLoop(_t),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(R){it=R,Tt.setAnimationLoop(R),R===null?Xt.stop():Xt.start()},Tt.addEventListener("sessionstart",lt),Tt.addEventListener("sessionend",Ct),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(W),W=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,W,D),f=wt.get(R,x.length),f.init(W),x.push(f),ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(ht),J=this.localClippingEnabled,G=St.init(this.clippingPlanes,J),p=yt.get(R,w.length),p.init(),w.push(p),Tt.enabled===!0&&Tt.isPresenting===!0){let Vt=y.xr.getDepthSensingMesh();Vt!==null&&Ut(Vt,W,-1/0,y.sortObjects)}Ut(R,W,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(dt,xt),j=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,j&&$t.addToRenderList(p,R),this.info.render.frame++,G===!0&&St.beginShadows();let at=f.state.shadowsArray;Pt.render(at,R,W),G===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let ot=p.opaque,st=p.transmissive;if(f.setupLights(),W.isArrayCamera){let Vt=W.cameras;if(st.length>0)for(let Gt=0,Ot=Vt.length;Gt<Ot;Gt++){let Wt=Vt[Gt];vt(ot,st,R,Wt)}j&&$t.render(R);for(let Gt=0,Ot=Vt.length;Gt<Ot;Gt++){let Wt=Vt[Gt];Z(p,R,Wt,Wt.viewport)}}else st.length>0&&vt(ot,st,R,W),j&&$t.render(R),Z(p,R,W);D!==null&&(z.updateMultisampleRenderTarget(D),z.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(y,R,W),_e.resetDefaultState(),M=-1,v=null,x.pop(),x.length>0?(f=x[x.length-1],G===!0&&St.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Ut(R,W,at,ot){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){ot&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);let Gt=$.update(R),Ot=R.material;Ot.visible&&p.push(R,Gt,Ot,at,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){let Gt=$.update(R),Ot=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Rt.copy(Gt.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(Ot)){let Wt=Gt.groups;for(let ee=0,se=Wt.length;ee<se;ee++){let Jt=Wt[ee],de=Ot[Jt.materialIndex];de&&de.visible&&p.push(R,Gt,de,at,Rt.z,Jt)}}else Ot.visible&&p.push(R,Gt,Ot,at,Rt.z,null)}}let Vt=R.children;for(let Gt=0,Ot=Vt.length;Gt<Ot;Gt++)Ut(Vt[Gt],W,at,ot)}function Z(R,W,at,ot){let st=R.opaque,Vt=R.transmissive,Gt=R.transparent;f.setupLightsView(at),G===!0&&St.setGlobalState(y.clippingPlanes,at),ot&&Lt.viewport(b.copy(ot)),st.length>0&&Et(st,W,at),Vt.length>0&&Et(Vt,W,at),Gt.length>0&&Et(Gt,W,at),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function vt(R,W,at,ot){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ot.id]===void 0&&(f.state.transmissionRenderTarget[ot.id]=new ni(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?cr:ei,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));let Vt=f.state.transmissionRenderTarget[ot.id],Gt=ot.viewport||b;Vt.setSize(Gt.z,Gt.w);let Ot=y.getRenderTarget();y.setRenderTarget(Vt),y.getClearColor(S),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),j&&$t.render(at);let Wt=y.toneMapping;y.toneMapping=Vn;let ee=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),f.setupLightsView(ot),G===!0&&St.setGlobalState(y.clippingPlanes,ot),Et(R,at,ot),z.updateMultisampleRenderTarget(Vt),z.updateRenderTargetMipmap(Vt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Jt=0,de=W.length;Jt<de;Jt++){let be=W[Jt],De=be.object,dn=be.geometry,Te=be.material,ce=be.group;if(Te.side===We&&De.layers.test(ot.layers)){let Xn=Te.side;Te.side=nn,Te.needsUpdate=!0,Yt(De,at,ot,dn,Te,ce),Te.side=Xn,Te.needsUpdate=!0,se=!0}}se===!0&&(z.updateMultisampleRenderTarget(Vt),z.updateRenderTargetMipmap(Vt))}y.setRenderTarget(Ot),y.setClearColor(S,O),ee!==void 0&&(ot.viewport=ee),y.toneMapping=Wt}function Et(R,W,at){let ot=W.isScene===!0?W.overrideMaterial:null;for(let st=0,Vt=R.length;st<Vt;st++){let Gt=R[st],Ot=Gt.object,Wt=Gt.geometry,ee=ot===null?Gt.material:ot,se=Gt.group;Ot.layers.test(at.layers)&&Yt(Ot,W,at,Wt,ee,se)}}function Yt(R,W,at,ot,st,Vt){R.onBeforeRender(y,W,at,ot,st,Vt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),st.onBeforeRender(y,W,at,ot,R,Vt),st.transparent===!0&&st.side===We&&st.forceSinglePass===!1?(st.side=nn,st.needsUpdate=!0,y.renderBufferDirect(at,W,ot,st,R,Vt),st.side=xi,st.needsUpdate=!0,y.renderBufferDirect(at,W,ot,st,R,Vt),st.side=We):y.renderBufferDirect(at,W,ot,st,R,Vt),R.onAfterRender(y,W,at,ot,st,Vt)}function re(R,W,at){W.isScene!==!0&&(W=Ht);let ot=Nt.get(R),st=f.state.lights,Vt=f.state.shadowsArray,Gt=st.state.version,Ot=ut.getParameters(R,st.state,Vt,W,at),Wt=ut.getProgramCacheKey(Ot),ee=ot.programs;ot.environment=R.isMeshStandardMaterial?W.environment:null,ot.fog=W.fog,ot.envMap=(R.isMeshStandardMaterial?ft:C).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",pe),ee=new Map,ot.programs=ee);let se=ee.get(Wt);if(se!==void 0){if(ot.currentProgram===se&&ot.lightsStateVersion===Gt)return X(R,Ot),se}else Ot.uniforms=ut.getUniforms(R),R.onBeforeCompile(Ot,y),se=ut.acquireProgram(Ot,Wt),ee.set(Wt,se),ot.uniforms=Ot.uniforms;let Jt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=St.uniform),X(R,Ot),ot.needsLights=Ft(R),ot.lightsStateVersion=Gt,ot.needsLights&&(Jt.ambientLightColor.value=st.state.ambient,Jt.lightProbe.value=st.state.probe,Jt.directionalLights.value=st.state.directional,Jt.directionalLightShadows.value=st.state.directionalShadow,Jt.spotLights.value=st.state.spot,Jt.spotLightShadows.value=st.state.spotShadow,Jt.rectAreaLights.value=st.state.rectArea,Jt.ltc_1.value=st.state.rectAreaLTC1,Jt.ltc_2.value=st.state.rectAreaLTC2,Jt.pointLights.value=st.state.point,Jt.pointLightShadows.value=st.state.pointShadow,Jt.hemisphereLights.value=st.state.hemi,Jt.directionalShadowMap.value=st.state.directionalShadowMap,Jt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Jt.spotShadowMap.value=st.state.spotShadowMap,Jt.spotLightMatrix.value=st.state.spotLightMatrix,Jt.spotLightMap.value=st.state.spotLightMap,Jt.pointShadowMap.value=st.state.pointShadowMap,Jt.pointShadowMatrix.value=st.state.pointShadowMatrix),ot.currentProgram=se,ot.uniformsList=null,se}function le(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=ds.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function X(R,W){let at=Nt.get(R);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function nt(R,W,at,ot,st){W.isScene!==!0&&(W=Ht),z.resetTextureUnits();let Vt=W.fog,Gt=ot.isMeshStandardMaterial?W.environment:null,Ot=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Es,Wt=(ot.isMeshStandardMaterial?ft:C).get(ot.envMap||Gt),ee=ot.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,se=!!at.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!at.morphAttributes.position,de=!!at.morphAttributes.normal,be=!!at.morphAttributes.color,De=Vn;ot.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(De=y.toneMapping);let dn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Te=dn!==void 0?dn.length:0,ce=Nt.get(ot),Xn=f.state.lights;if(G===!0&&(J===!0||R!==v)){let bn=R===v&&ot.id===M;St.setState(ot,R,bn)}let Ae=!1;ot.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Xn.state.version||ce.outputColorSpace!==Ot||st.isBatchedMesh&&ce.batching===!1||!st.isBatchedMesh&&ce.batching===!0||st.isBatchedMesh&&ce.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&ce.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&ce.instancing===!1||!st.isInstancedMesh&&ce.instancing===!0||st.isSkinnedMesh&&ce.skinning===!1||!st.isSkinnedMesh&&ce.skinning===!0||st.isInstancedMesh&&ce.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&ce.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&ce.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&ce.instancingMorph===!1&&st.morphTexture!==null||ce.envMap!==Wt||ot.fog===!0&&ce.fog!==Vt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==St.numPlanes||ce.numIntersection!==St.numIntersection)||ce.vertexAlphas!==ee||ce.vertexTangents!==se||ce.morphTargets!==Jt||ce.morphNormals!==de||ce.morphColors!==be||ce.toneMapping!==De||ce.morphTargetsCount!==Te)&&(Ae=!0):(Ae=!0,ce.__version=ot.version);let An=ce.currentProgram;Ae===!0&&(An=re(ot,W,st));let Vi=!1,xn=!1,Is=!1,Ue=An.getUniforms(),On=ce.uniforms;if(Lt.useProgram(An.program)&&(Vi=!0,xn=!0,Is=!0),ot.id!==M&&(M=ot.id,xn=!0),Vi||v!==R){Lt.buffers.depth.getReversed()?(q.copy(R.projectionMatrix),Du(q),Uu(q),Ue.setValue(P,"projectionMatrix",q)):Ue.setValue(P,"projectionMatrix",R.projectionMatrix),Ue.setValue(P,"viewMatrix",R.matrixWorldInverse);let ri=Ue.map.cameraPosition;ri!==void 0&&ri.setValue(P,pt.setFromMatrixPosition(R.matrixWorld)),bt.logarithmicDepthBuffer&&Ue.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ue.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,xn=!0,Is=!0)}if(st.isSkinnedMesh){Ue.setOptional(P,st,"bindMatrix"),Ue.setOptional(P,st,"bindMatrixInverse");let bn=st.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ue.setValue(P,"boneTexture",bn.boneTexture,z))}st.isBatchedMesh&&(Ue.setOptional(P,st,"batchingTexture"),Ue.setValue(P,"batchingTexture",st._matricesTexture,z),Ue.setOptional(P,st,"batchingIdTexture"),Ue.setValue(P,"batchingIdTexture",st._indirectTexture,z),Ue.setOptional(P,st,"batchingColorTexture"),st._colorsTexture!==null&&Ue.setValue(P,"batchingColorTexture",st._colorsTexture,z));let Ps=at.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&te.update(st,at,An),(xn||ce.receiveShadow!==st.receiveShadow)&&(ce.receiveShadow=st.receiveShadow,Ue.setValue(P,"receiveShadow",st.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(On.envMap.value=Wt,On.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&W.environment!==null&&(On.envMapIntensity.value=W.environmentIntensity),xn&&(Ue.setValue(P,"toneMappingExposure",y.toneMappingExposure),ce.needsLights&&zt(On,Is),Vt&&ot.fog===!0&&ct.refreshFogUniforms(On,Vt),ct.refreshMaterialUniforms(On,ot,k,H,f.state.transmissionRenderTarget[R.id]),ds.upload(P,le(ce),On,z)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ds.upload(P,le(ce),On,z),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ue.setValue(P,"center",st.center),Ue.setValue(P,"modelViewMatrix",st.modelViewMatrix),Ue.setValue(P,"normalMatrix",st.normalMatrix),Ue.setValue(P,"modelMatrix",st.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let bn=ot.uniformsGroups;for(let ri=0,oi=bn.length;ri<oi;ri++){let yc=bn[ri];et.update(yc,An),et.bind(yc,An)}}return An}function zt(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Ft(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,W,at){Nt.get(R.texture).__webglTexture=W,Nt.get(R.depthTexture).__webglTexture=at;let ot=Nt.get(R);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=at===void 0,ot.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){let at=Nt.get(R);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,at=0){D=R,T=W,I=at;let ot=!0,st=null,Vt=!1,Gt=!1;if(R){let Wt=Nt.get(R);if(Wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(P.FRAMEBUFFER,null),ot=!1;else if(Wt.__webglFramebuffer===void 0)z.setupRenderTarget(R);else if(Wt.__hasExternalTextures)z.rebindTextures(R,Nt.get(R.texture).__webglTexture,Nt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Jt=R.depthTexture;if(Wt.__boundDepthTexture!==Jt){if(Jt!==null&&Nt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(R)}}let ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Gt=!0);let se=Nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[W])?st=se[W][at]:st=se[W],Vt=!0):R.samples>0&&z.useMultisampledRTT(R)===!1?st=Nt.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?st=se[at]:st=se,b.copy(R.viewport),L.copy(R.scissor),E=R.scissorTest}else b.copy(U).multiplyScalar(k).floor(),L.copy(Mt).multiplyScalar(k).floor(),E=kt;if(Lt.bindFramebuffer(P.FRAMEBUFFER,st)&&ot&&Lt.drawBuffers(R,st),Lt.viewport(b),Lt.scissor(L),Lt.setScissorTest(E),Vt){let Wt=Nt.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Wt.__webglTexture,at)}else if(Gt){let Wt=Nt.get(R.texture),ee=W||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,at||0,ee)}M=-1},this.readRenderTargetPixels=function(R,W,at,ot,st,Vt,Gt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ot=Ot[Gt]),Ot){Lt.bindFramebuffer(P.FRAMEBUFFER,Ot);try{let Wt=R.texture,ee=Wt.format,se=Wt.type;if(!bt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ot&&at>=0&&at<=R.height-st&&P.readPixels(W,at,ot,st,oe.convert(ee),oe.convert(se),Vt)}finally{let Wt=D!==null?Nt.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,W,at,ot,st,Vt,Gt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Gt!==void 0&&(Ot=Ot[Gt]),Ot){let Wt=R.texture,ee=Wt.format,se=Wt.type;if(!bt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-ot&&at>=0&&at<=R.height-st){Lt.bindFramebuffer(P.FRAMEBUFFER,Ot);let Jt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Jt),P.bufferData(P.PIXEL_PACK_BUFFER,Vt.byteLength,P.STREAM_READ),P.readPixels(W,at,ot,st,oe.convert(ee),oe.convert(se),0);let de=D!==null?Nt.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(P.FRAMEBUFFER,de);let be=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Lu(P,be,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Jt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Vt),P.deleteBuffer(Jt),P.deleteSync(be),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,at=0){R.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);let ot=Math.pow(2,-at),st=Math.floor(R.image.width*ot),Vt=Math.floor(R.image.height*ot),Gt=W!==null?W.x:0,Ot=W!==null?W.y:0;z.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,at,0,0,Gt,Ot,st,Vt),Lt.unbindTexture()},this.copyTextureToTexture=function(R,W,at=null,ot=null,st=0){R.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,R=arguments[1],W=arguments[2],st=arguments[3]||0,at=null);let Vt,Gt,Ot,Wt,ee,se,Jt,de,be,De=R.isCompressedTexture?R.mipmaps[st]:R.image;at!==null?(Vt=at.max.x-at.min.x,Gt=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Wt=at.min.x,ee=at.min.y,se=at.isBox3?at.min.z:0):(Vt=De.width,Gt=De.height,Ot=De.depth||1,Wt=0,ee=0,se=0),ot!==null?(Jt=ot.x,de=ot.y,be=ot.z):(Jt=0,de=0,be=0);let dn=oe.convert(W.format),Te=oe.convert(W.type),ce;W.isData3DTexture?(z.setTexture3D(W,0),ce=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(z.setTexture2DArray(W,0),ce=P.TEXTURE_2D_ARRAY):(z.setTexture2D(W,0),ce=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);let Xn=P.getParameter(P.UNPACK_ROW_LENGTH),Ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),An=P.getParameter(P.UNPACK_SKIP_PIXELS),Vi=P.getParameter(P.UNPACK_SKIP_ROWS),xn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ee),P.pixelStorei(P.UNPACK_SKIP_IMAGES,se);let Is=R.isDataArrayTexture||R.isData3DTexture,Ue=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let On=Nt.get(R),Ps=Nt.get(W),bn=Nt.get(On.__renderTarget),ri=Nt.get(Ps.__renderTarget);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,bn.__webglFramebuffer),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Ot;oi++)Is&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.get(R).__webglTexture,st,se+oi),R.isDepthTexture?(Ue&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.get(W).__webglTexture,st,be+oi),P.blitFramebuffer(Wt,ee,Vt,Gt,Jt,de,Vt,Gt,P.DEPTH_BUFFER_BIT,P.NEAREST)):Ue?P.copyTexSubImage3D(ce,st,Jt,de,be+oi,Wt,ee,Vt,Gt):P.copyTexSubImage2D(ce,st,Jt,de,be+oi,Wt,ee,Vt,Gt);Lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ue?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(ce,st,Jt,de,be,Vt,Gt,Ot,dn,Te,De.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(ce,st,Jt,de,be,Vt,Gt,Ot,dn,De.data):P.texSubImage3D(ce,st,Jt,de,be,Vt,Gt,Ot,dn,Te,De):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,st,Jt,de,Vt,Gt,dn,Te,De.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,st,Jt,de,De.width,De.height,dn,De.data):P.texSubImage2D(P.TEXTURE_2D,st,Jt,de,Vt,Gt,dn,Te,De);P.pixelStorei(P.UNPACK_ROW_LENGTH,Xn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,An),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,xn),st===0&&W.generateMipmaps&&P.generateMipmap(ce),Lt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,at=null,ot=null,st=0){return R.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,ot=arguments[1]||null,R=arguments[2],W=arguments[3],st=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,at,ot,st)},this.initRenderTarget=function(R){Nt.get(R).__webglFramebuffer===void 0&&z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?z.setTextureCube(R,0):R.isData3DTexture?z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?z.setTexture2DArray(R,0):z.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){T=0,I=0,D=null,Lt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}};var go=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ae(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xo=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new V,js=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends si{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,Fs=new V,ss=new V,rs=new V,os=new Bt,zs=new Bt,ef=new Se,Br=new V,Os=new V,kr=new V,_h=new Bt,va=new Bt,vh=new Bt,_o=class extends Pe{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yo(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new js(n,3,0,!1)),is.setAttribute("uv",new js(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Hr(Br.set(-.5,-.5,0),rs,o,ss,s,r),Hr(Os.set(.5,-.5,0),rs,o,ss,s,r),Hr(kr.set(.5,.5,0),rs,o,ss,s,r),_h.set(0,0),va.set(1,0),vh.set(1,1);let a=t.ray.intersectTriangle(Br,Os,kr,!1,Fs);if(a===null&&(Hr(Os.set(-.5,.5,0),rs,o,ss,s,r),va.set(0,1),a=t.ray.intersectTriangle(Br,kr,Os,!1,Fs),a===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:pi.getInterpolation(Fs,Br,Os,kr,_h,va,vh,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Hr(i,t,e,n,s,r){os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*os.x-s*os.y,zs.y=s*os.x+r*os.y):zs.copy(os),i.copy(t),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(ef)}var tr=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fn,h=fn,d,m){super(null,o,a,l,c,h,s,r,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new Se,Mh=new Se,Vr=[],bh=new ii,Ag=new Se,Bs=new Ce,ks=new _i,Ye=class extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),bh.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),ks.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Mh.multiplyMatrices(n,as),Bs.matrixWorld=Mh,Bs.raycast(t,Vr);for(let o=0,a=Vr.length;o<a;o++){let l=Vr[o];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(s*this.count),s,this.count,Ql,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zi=class extends si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},vo=new V,Mo=new V,Sh=new Se,Hs=new ro,Gr=new _i,Ma=new V,Eh=new V,Rl=class extends Pe{constructor(t=new Le,e=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vo.fromBufferAttribute(e,s-1),Mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vo.distanceTo(Mo);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Sh.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,p=g-1;_<p;_+=c){let f=h.getX(_),w=h.getX(_+1),x=Wr(this,t,Hs,l,f,w);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(u),f=Wr(this,t,Hs,l,_,p);f&&e.push(f)}}else{let u=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=u,p=g-1;_<p;_+=c){let f=Wr(this,t,Hs,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Wr(this,t,Hs,l,g-1,u);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(vo.fromBufferAttribute(o,s),Mo.fromBufferAttribute(o,r),e.distanceSqToSegment(vo,Mo,Ma,Eh)>n)return;Ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ma);if(!(l<t.near||l>t.far))return{distance:l,point:Eh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new V,Th=new V,vs=class extends Rl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Th);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ms=class extends pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,u=(o-h)/m;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Bt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new V,s=[],r=[],o=[],a=new V,l=new Se;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(en(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(en(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=l-this.aX,u=c-this.aY;l=m*h-u*d+this.aX,c=m*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;m*=h,u*=h,s(o,a,m,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Xr=new V,ba=new oc,Sa=new oc,Ea=new oc,ir=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),c=Xr);let d=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(m),u),p=Math.pow(m.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ba.initNonuniformCatmullRom(c.x,d.x,m.x,h.x,g,_,p),Sa.initNonuniformCatmullRom(c.y,d.y,m.y,h.y,g,_,p),Ea.initNonuniformCatmullRom(c.z,d.z,m.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,d.x,m.x,h.x,this.tension),Sa.initCatmullRom(c.y,d.y,m.y,h.y,this.tension),Ea.initCatmullRom(c.z,d.z,m.z,h.z,this.tension));return n.set(ba.calc(l),Sa.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rg(i,t){let e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Ys(i,t,e,n){return Rg(i,t)+Cg(i,e)+Ig(i,n)}function Pg(i,t){let e=1-i;return e*e*e*t}function Lg(i,t){let e=1-i;return 3*e*e*i*t}function Dg(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Pg(i,t)+Lg(i,e)+Dg(i,n)+Ug(i,s)}var bo=class extends En{constructor(t=new Bt,e=new Bt,n=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends En{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends En{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends En{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends En{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends En{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y),Ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ah(a,l.x,c.x,h.x,d.x),Ah(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},Ao=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:ir,CubicBezierCurve:bo,CubicBezierCurve3:Il,EllipseCurve:nr,LineCurve:So,LineCurve3:Pl,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:wo,SplineCurve:To}),Ll=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ao[s.type]().fromJSON(s))}return this}},sr=class extends Ll{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new So(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Eo(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new bo(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s),new Bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new To(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class i extends Le{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=en(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new V,m=new Bt,u=new V,g=new V,_=new V,p=0,f=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:p=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,u.x=f*1,u.y=-p,u.z=f*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[w+1].x-t[w].x,f=t[w+1].y-t[w].y,u.x=f*1,u.y=-p,u.z=f*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(g)}for(let w=0;w<=e;w++){let x=n+w*h*s,y=Math.sin(x),B=Math.cos(x);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*B,o.push(d.x,d.y,d.z),m.x=w/e,m.y=T/(t.length-1),a.push(m.x,m.y);let I=l[3*T+0]*y,D=l[3*T+1],M=l[3*T+0]*B;c.push(I,D,M)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){let y=x+w*t.length,B=y,T=y+t.length,I=y+t.length+1,D=y+1;r.push(B,T,D),r.push(I,D,T)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Dn=class i extends rr{constructor(t=1,e=1,n=4,s=8){let r=new sr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var he=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],m=[],u=[],g=0,_=[],p=n/2,f=0;w(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(m,3)),this.setAttribute("uv",new me(u,2));function w(){let y=new V,B=new V,T=0,I=(e-t)/n;for(let D=0;D<=r;D++){let M=[],v=D/r,b=v*(e-t)+t;for(let L=0;L<=s;L++){let E=L/s,S=E*l+a,O=Math.sin(S),N=Math.cos(S);B.x=b*O,B.y=-v*n+p,B.z=b*N,d.push(B.x,B.y,B.z),y.set(O,I,N).normalize(),m.push(y.x,y.y,y.z),u.push(E,1-v),M.push(g++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let v=_[M][D],b=_[M+1][D],L=_[M+1][D+1],E=_[M][D+1];(t>0||M!==0)&&(h.push(v,b,E),T+=3),(e>0||M!==r-1)&&(h.push(b,L,E),T+=3)}c.addGroup(f,T,0),f+=T}function x(y){let B=g,T=new Bt,I=new V,D=0,M=y===!0?t:e,v=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*v,0),m.push(0,v,0),u.push(.5,.5),g++;let b=g;for(let L=0;L<=s;L++){let S=L/s*l+a,O=Math.cos(S),N=Math.sin(S);I.x=M*N,I.y=p*v,I.z=M*O,d.push(I.x,I.y,I.z),m.push(0,v,0),T.x=O*.5+.5,T.y=N*.5*v+.5,u.push(T.x,T.y),g++}for(let L=0;L<s;L++){let E=B+L,S=b+L;y===!0?h.push(S,S+1,E):h.push(S+1,S,E),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ke=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dl=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let x=new V,y=new V,B=new V;for(let T=0;T<e.length;T+=3)u(e[T+0],x),u(e[T+1],y),u(e[T+2],B),l(x,y,B,w)}function l(w,x,y,B){let T=B+1,I=[];for(let D=0;D<=T;D++){I[D]=[];let M=w.clone().lerp(y,D/T),v=x.clone().lerp(y,D/T),b=T-D;for(let L=0;L<=b;L++)L===0&&D===T?I[D][L]=M:I[D][L]=M.clone().lerp(v,L/b)}for(let D=0;D<T;D++)for(let M=0;M<2*(T-D)-1;M++){let v=Math.floor(M/2);M%2===0?(m(I[D][v+1]),m(I[D+1][v]),m(I[D][v])):(m(I[D][v+1]),m(I[D+1][v+1]),m(I[D+1][v]))}}function c(w){let x=new V;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(w),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let w=new V;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];let y=p(w)/2/Math.PI+.5,B=f(w)/Math.PI+.5;o.push(y,1-B)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){let x=o[w+0],y=o[w+2],B=o[w+4],T=Math.max(x,y,B),I=Math.min(x,y,B);T>.9&&I<.1&&(x<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),B<.2&&(o[w+4]+=1))}}function m(w){r.push(w.x,w.y,w.z)}function u(w,x){let y=w*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){let w=new V,x=new V,y=new V,B=new V,T=new Bt,I=new Bt,D=new Bt;for(let M=0,v=0;M<r.length;M+=9,v+=6){w.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),D.set(o[v+4],o[v+5]),B.copy(w).add(x).add(y).divideScalar(3);let b=p(B);_(T,v+0,w,b),_(I,v+2,x,b),_(D,v+4,y,b)}}function _(w,x,y,B){B<0&&w.x===1&&(o[x]=w.x-1),y.x===0&&y.z===0&&(o[x]=B/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Oi=class extends sr{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new sr().fromJSON(s))}return this}},Ng={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,m,u;if(n&&(r=kg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],m=i[g+1],d<a&&(a=d),m<l&&(l=m),d>c&&(c=d),m>h&&(h=m);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return or(r,o,e,a,l,u,0),o}};function nf(i,t,e,n,s){let r,o;if(s===Kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Rh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Rh(r,i[r],i[r+1],o);return o&&Bo(o,o.next)&&(lr(o),o=o.next),o}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bo(e,e.next)||Be(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?zg(i,n,s,r):Fg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Og(Bi(i),t,e),or(i,t,e,n,s,r,2)):o===2&&Bg(i,t,e,n,s,r):or(Bi(i),t,e,n,s,r,1);break}}}function Fg(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,m=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=m&&g.y>=d&&g.y<=u&&cs(s,a,r,l,o,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,m=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<d?h<m?h:m:d<m?d:m,_=a>l?a>c?a:c:l>c?l:c,p=h>d?h>m?h:m:d>m?d:m,f=Ul(u,g,t,e,n),w=Ul(_,p,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=f&&y&&y.z<=w;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&cs(a,h,l,d,c,m,x.x,x.y)&&Be(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&cs(a,h,l,d,c,m,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=f;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&cs(a,h,l,d,c,m,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=w;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&cs(a,h,l,d,c,m,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Og(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Bo(s,r)&&sf(s,n,n.next,r)&&ar(s,r)&&ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lr(n),lr(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function Bg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$g(o,a)){let l=rf(o,a);o=Bi(o,o.next),l=Bi(l,l.next),or(o,t,e,n,s,r,0),or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function kg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=nf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Yg(c));for(s.sort(Hg),r=0;r<s.length;r++)e=Vg(s[r],e);return e}function Hg(i,t){return i.x-t.x}function Vg(i,t){let e=Gg(i,t);if(!e)return t;let n=rf(e,i);return Bi(n,n.next),Bi(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=r&&m>n&&(n=m,s=e.x<e.next.x?e:e.next,m===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&cs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),ar(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Wg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Wg(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function Xg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qg(s)}function qg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $g(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zg(i,t)&&(ar(i,t)&&ar(t,i)&&Jg(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||Bo(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bo(i,t){return i.x===t.x&&i.y===t.y}function sf(i,t,e,n){let s=Yr(Be(i,t,e)),r=Yr(Be(i,t,n)),o=Yr(Be(e,n,i)),a=Yr(Be(e,n,t));return!!(s!==r&&o!==a||s===0&&qr(i,e,t)||r===0&&qr(i,n,t)||o===0&&qr(e,i,n)||a===0&&qr(e,t,n))}function qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yr(i){return i>0?1:i<0?-1:0}function Zg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ar(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function Jg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rf(i,t){let e=new Nl(i.i,i.x,i.y),n=new Nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rh(i,t,e,n){let s=new Nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ch(t),Ih(n,t);let o=t.length;e.forEach(Ch);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ih(n,e[l]);let a=Ng.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ch(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ro=class i extends Le{constructor(t=new Oi([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:jg,x,y=!1,B,T,I,D;f&&(x=f.getSpacedPoints(h),y=!0,m=!1,B=f.computeFrenetFrames(h,!1),T=new V,I=new V,D=new V),m||(p=0,u=0,g=0,_=0);let M=a.extractPoints(c),v=M.shape,b=M.holes;if(!gi.isClockWise(v)){v=v.reverse();for(let j=0,gt=b.length;j<gt;j++){let P=b[j];gi.isClockWise(P)&&(b[j]=P.reverse())}}let E=gi.triangulateShape(v,b),S=v;for(let j=0,gt=b.length;j<gt;j++){let P=b[j];v=v.concat(P)}function O(j,gt,P){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(gt,P)}let N=v.length,H=E.length;function k(j,gt,P){let rt,tt,bt,Lt=j.x-gt.x,Y=j.y-gt.y,Nt=P.x-j.x,z=P.y-j.y,C=Lt*Lt+Y*Y,ft=Lt*z-Y*Nt;if(Math.abs(ft)>Number.EPSILON){let At=Math.sqrt(C),It=Math.sqrt(Nt*Nt+z*z),$=gt.x-Y/At,ut=gt.y+Lt/At,ct=P.x-z/It,yt=P.y+Nt/It,wt=((ct-$)*z-(yt-ut)*Nt)/(Lt*z-Y*Nt);rt=$+Lt*wt-j.x,tt=ut+Y*wt-j.y;let St=rt*rt+tt*tt;if(St<=2)return new Bt(rt,tt);bt=Math.sqrt(St/2)}else{let At=!1;Lt>Number.EPSILON?Nt>Number.EPSILON&&(At=!0):Lt<-Number.EPSILON?Nt<-Number.EPSILON&&(At=!0):Math.sign(Y)===Math.sign(z)&&(At=!0),At?(rt=-Y,tt=Lt,bt=Math.sqrt(C)):(rt=Lt,tt=Y,bt=Math.sqrt(C/2))}return new Bt(rt/bt,tt/bt)}let dt=[];for(let j=0,gt=S.length,P=gt-1,rt=j+1;j<gt;j++,P++,rt++)P===gt&&(P=0),rt===gt&&(rt=0),dt[j]=k(S[j],S[P],S[rt]);let xt=[],U,Mt=dt.concat();for(let j=0,gt=b.length;j<gt;j++){let P=b[j];U=[];for(let rt=0,tt=P.length,bt=tt-1,Lt=rt+1;rt<tt;rt++,bt++,Lt++)bt===tt&&(bt=0),Lt===tt&&(Lt=0),U[rt]=k(P[rt],P[bt],P[Lt]);xt.push(U),Mt=Mt.concat(U)}for(let j=0;j<p;j++){let gt=j/p,P=u*Math.cos(gt*Math.PI/2),rt=g*Math.sin(gt*Math.PI/2)+_;for(let tt=0,bt=S.length;tt<bt;tt++){let Lt=O(S[tt],dt[tt],rt);q(Lt.x,Lt.y,-P)}for(let tt=0,bt=b.length;tt<bt;tt++){let Lt=b[tt];U=xt[tt];for(let Y=0,Nt=Lt.length;Y<Nt;Y++){let z=O(Lt[Y],U[Y],rt);q(z.x,z.y,-P)}}}let kt=g+_;for(let j=0;j<N;j++){let gt=m?O(v[j],Mt[j],kt):v[j];y?(I.copy(B.normals[0]).multiplyScalar(gt.x),T.copy(B.binormals[0]).multiplyScalar(gt.y),D.copy(x[0]).add(I).add(T),q(D.x,D.y,D.z)):q(gt.x,gt.y,0)}for(let j=1;j<=h;j++)for(let gt=0;gt<N;gt++){let P=m?O(v[gt],Mt[gt],kt):v[gt];y?(I.copy(B.normals[j]).multiplyScalar(P.x),T.copy(B.binormals[j]).multiplyScalar(P.y),D.copy(x[j]).add(I).add(T),q(D.x,D.y,D.z)):q(P.x,P.y,d/h*j)}for(let j=p-1;j>=0;j--){let gt=j/p,P=u*Math.cos(gt*Math.PI/2),rt=g*Math.sin(gt*Math.PI/2)+_;for(let tt=0,bt=S.length;tt<bt;tt++){let Lt=O(S[tt],dt[tt],rt);q(Lt.x,Lt.y,d+P)}for(let tt=0,bt=b.length;tt<bt;tt++){let Lt=b[tt];U=xt[tt];for(let Y=0,Nt=Lt.length;Y<Nt;Y++){let z=O(Lt[Y],U[Y],rt);y?q(z.x,z.y+x[h-1].y,x[h-1].x+P):q(z.x,z.y,d+P)}}}F(),G();function F(){let j=s.length/3;if(m){let gt=0,P=N*gt;for(let rt=0;rt<H;rt++){let tt=E[rt];ht(tt[2]+P,tt[1]+P,tt[0]+P)}gt=h+p*2,P=N*gt;for(let rt=0;rt<H;rt++){let tt=E[rt];ht(tt[0]+P,tt[1]+P,tt[2]+P)}}else{for(let gt=0;gt<H;gt++){let P=E[gt];ht(P[2],P[1],P[0])}for(let gt=0;gt<H;gt++){let P=E[gt];ht(P[0]+N*h,P[1]+N*h,P[2]+N*h)}}n.addGroup(j,s.length/3-j,0)}function G(){let j=s.length/3,gt=0;J(S,gt),gt+=S.length;for(let P=0,rt=b.length;P<rt;P++){let tt=b[P];J(tt,gt),gt+=tt.length}n.addGroup(j,s.length/3-j,1)}function J(j,gt){let P=j.length;for(;--P>=0;){let rt=P,tt=P-1;tt<0&&(tt=j.length-1);for(let bt=0,Lt=h+p*2;bt<Lt;bt++){let Y=N*bt,Nt=N*(bt+1),z=gt+rt+Y,C=gt+tt+Y,ft=gt+tt+Nt,At=gt+rt+Nt;pt(z,C,ft,At)}}}function q(j,gt,P){l.push(j),l.push(gt),l.push(P)}function ht(j,gt,P){Rt(j),Rt(gt),Rt(P);let rt=s.length/3,tt=w.generateTopUV(n,s,rt-3,rt-2,rt-1);Ht(tt[0]),Ht(tt[1]),Ht(tt[2])}function pt(j,gt,P,rt){Rt(j),Rt(gt),Rt(rt),Rt(gt),Rt(P),Rt(rt);let tt=s.length/3,bt=w.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Ht(bt[0]),Ht(bt[1]),Ht(bt[3]),Ht(bt[1]),Ht(bt[2]),Ht(bt[3])}function Rt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Ht(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ao[s.type]().fromJSON(s)),new i(n,t.options)}},jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Bt(r,o),new Bt(a,l),new Bt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],m=t[s*3],u=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Bt(o,1-l),new Bt(c,1-d),new Bt(m,1-g),new Bt(_,1-f)]:[new Bt(a,1-l),new Bt(h,1-d),new Bt(u,1-g),new Bt(p,1-f)]}};function Qg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $e=class i extends Dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var bs=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,m=(e-t)/s,u=new V,g=new Bt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let f=r+p/n*o;u.x=d*Math.cos(f),u.y=d*Math.sin(f),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}d+=m}for(let _=0;_<s;_++){let p=_*(n+1);for(let f=0;f<n;f++){let w=f+p,x=w,y=w+n+1,B=w+n+2,T=w+1;a.push(x,y,T),a.push(y,B,T)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Co=class i extends Le{constructor(t=new Oi([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(r,3)),this.setAttribute("uv",new me(o,2));function c(h){let d=s.length/3,m=h.extractPoints(e),u=m.shape,g=m.holes;gi.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,f=g.length;p<f;p++){let w=g[p];gi.isClockWise(w)===!0&&(g[p]=w.reverse())}let _=gi.triangulateShape(u,g);for(let p=0,f=g.length;p<f;p++){let w=g[p];u=u.concat(w)}for(let p=0,f=u.length;p<f;p++){let w=u[p];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let p=0,f=_.length;p<f;p++){let w=_[p],x=w[0]+d,y=w[1]+d,B=w[2]+d;n.push(x,y,B),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var xe=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,m=new V,u=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){let w=[],x=f/n,y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){let T=B/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),m.copy(d).normalize(),_.push(m.x,m.y,m.z),p.push(T+y,1-x),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let x=h[f][w+1],y=h[f][w],B=h[f+1][w],T=h[f+1][w+1];(f!==0||o>0)&&u.push(x,y,T),(f!==n-1||l<Math.PI)&&u.push(y,B,T)}this.setIndex(u),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ge=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new V,d=new V,m=new V;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let _=g/s*r,p=u/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),m.subVectors(d,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let _=(s+1)*u+g-1,p=(s+1)*(u-1)+g-1,f=(s+1)*(u-1)+g,w=(s+1)*u+g;o.push(_,p,w),o.push(p,f,w)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Io=class i extends Le{constructor(t=new wo(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new V,l=new V,c=new Bt,h=new V,d=[],m=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(m,3)),this.setAttribute("uv",new me(u,2));function _(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),w(),f()}function p(x){h=t.getPointAt(x/e,h);let y=o.normals[x],B=o.binormals[x];for(let T=0;T<=s;T++){let I=T/s*Math.PI*2,D=Math.sin(I),M=-Math.cos(I);l.x=M*y.x+D*B.x,l.y=M*y.y+D*B.y,l.z=M*y.z+D*B.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let B=(s+1)*(x-1)+(y-1),T=(s+1)*x+(y-1),I=(s+1)*x+y,D=(s+1)*(x-1)+y;g.push(B,T,D),g.push(T,I,D)}}function w(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)c.x=x/e,c.y=y/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ao[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Po=class extends si{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function $r(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,f=-m*p+2*m*_-m*g,w=(1+m)*p+(-1.5-2*m)*_+(-.5+m)*g+1,x=(-1-u)*p+(1.5+u)*_+.5*g,y=u*p-u*_;for(let B=0;B!==a;++B)r[B]=f*o[h+B]+w*o[c+B]+x*o[l+B]+y*o[d+B];return r}},zl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let m=0;m!==a;++m)r[m]=o[c+m]*d+o[l+m]*h;return r}},Ol=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,m=d-n,u=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[m+g]||_!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,m=o*n;for(let u=0;u!==n;++u)e[m+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=hl;var ki=class extends Un{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=to;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Un{};Bl.prototype.ValueTypeName="color";var kl=class extends Un{};kl.prototype.ValueTypeName="number";var Hl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lo=class extends Un{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Un{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=to;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Un{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,m=c.length;d<m;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},nx=new Gl,Wl=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uo=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wa=new Se,Ph=new V,Lh=new V,Xl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ql=class extends Xl{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ac="\\[\\]\\.:\\/",ix=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",sx="[^"+ac.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",lc),ox=/(WCOD+)?/.source.replace("WCOD",sx),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),cx=new RegExp("^"+rx+ox+ax+lx+"$"),hx=["material","materials","bones","map"],Yl=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Yl;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);var fx=2.3,Fe=7.2,ko=.16,Mi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function of(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=F=>{let G=Math.max(0,Math.min(s,F/r)),J=Math.min(s-1,Math.floor(G)),q=G-J,ht=n[Math.max(0,J-1)],pt=n[J],Rt=n[J+1],Ht=n[Math.min(s,J+2)],j=gt=>.5*(2*pt[gt]+(-ht[gt]+Rt[gt])*q+(2*ht[gt]-5*pt[gt]+4*Rt[gt]-Ht[gt])*q*q+(-ht[gt]+3*pt[gt]-3*Rt[gt]+Ht[gt])*q*q*q);return[j(0),j(2),pt[1]+(Rt[1]-pt[1])*q]},a=F=>{if(F<=i.lengthM)return o(F);let G=o(i.lengthM-20),J=o(i.lengthM),q=(F-i.lengthM)/20;return[J[0]+(J[0]-G[0])*q,J[1]+(J[1]-G[1])*q,J[2]]},l=2700,c=2585,h=i.overlaps.filter(([F,G])=>G>F).sort((F,G)=>F[1]-G[1]),d=F=>{for(let q=0;q<h.length-1;q++){let[ht,pt]=h[q],[Rt,Ht]=h[q+1];if(F<=Ht)return ht+(F-pt)*(Rt-ht)/(Ht-pt)}let[G,J]=h.at(-1);return G+(F-J)},m=[];for(let F=0;F<=l;F+=2)m.push([F,...o(F)]);let u=2600,g=4900,_=[];for(let F=u;F<=g;F+=10){let G=o(F),J=d(F),q=J,ht=1e9;for(let pt of m){if(Math.abs(pt[0]-J)>60)continue;let Rt=(pt[1]-G[0])**2+(pt[2]-G[1])**2;Rt<ht&&(ht=Rt,q=pt[0])}_.push(q)}let p=_.map((F,G)=>{let J=0,q=0;for(let ht=-3;ht<=3;ht++){let pt=G+ht;pt>=0&&pt<_.length&&(J+=_[pt],q++)}return J/q});for(let F=1;F<p.length;F++)p[F]=Math.max(p[F],p[F-1]+.5);let f=F=>{let G=(F-u)/10,J=Math.max(0,Math.min(p.length-2,Math.floor(G))),q=G-J;return p[J]+(p[J+1]-p[J])*q},w={};function x(F){for(let G of Object.keys(w))delete w[G];for(let G of F?.runners||[])!G.diversions||!G.diversions.length||(w[G.id]=G.diversions.map(J=>{let q=J.path,ht=[0];for(let pt=1;pt<q.length;pt++)ht.push(ht[pt-1]+Math.hypot(q[pt][0]-q[pt-1][0],q[pt][1]-q[pt-1][1]));return{...J,cum:ht,len:ht.at(-1)}}))}x(e);let y=(F,G)=>{let J=Math.max(0,Math.min(1,(G-F.fromM)/(F.toM-F.fromM)))*F.len,q=0;for(;q<F.cum.length-2&&F.cum[q+1]<J;)q++;let ht=(J-F.cum[q])/Math.max(1e-6,F.cum[q+1]-F.cum[q]);return[F.path[q][0]+(F.path[q+1][0]-F.path[q][0])*ht,F.path[q][1]+(F.path[q+1][1]-F.path[q][1])*ht]};function B(F){if(F<u-60){let ht=a(F);return[ht[0],ht[1]]}let G=a(F);if(F>=g+40)return[G[0],G[1]];let J=Mi(u-60,u+60,F)*(1-Mi(g-60,g,F));if(J<=0)return[G[0],G[1]];let q=o(Math.min(l,f(Math.max(u,Math.min(g,F)))));return[G[0]+(q[0]-G[0])*J,G[1]+(q[1]-G[1])*J]}function T(F,G){let J=B(F),q=G&&w[G];if(q){for(let ht of q)if(F>ht.fromM&&F<ht.toM){let pt=Mi(ht.fromM,ht.fromM+30,F)*(1-Mi(ht.toM-30,ht.toM,F)),Rt=y(ht,F);return J=[J[0]+(Rt[0]-J[0])*pt,J[1]+(Rt[1]-J[1])*pt],{x:J[0],z:J[1],div:pt,divInfo:ht}}}return{x:J[0],z:J[1],div:0,divInfo:null}}let[I,D,M,v]=t.bounds,b={x0:I-60,z0:D-60,cell:5};b.nx=Math.ceil((M+60-b.x0)/b.cell)+1,b.nz=Math.ceil((v+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let L=[];for(let F=0;F<=s;F+=2)L.push(n[F]);let E=0;for(let F of L)E+=F[1];E/=L.length;let S=(F,G)=>Math.sin(F*.011+1.3)*Math.cos(G*.009-.4)*2.2+Math.sin(F*.027+G*.019)*.9;for(let F=0;F<b.nz;F++)for(let G=0;G<b.nx;G++){let J=b.x0+G*b.cell,q=b.z0+F*b.cell,ht=0,pt=0,Rt=1e9;for(let gt of L){let P=(gt[0]-J)**2+(gt[2]-q)**2;P<Rt&&(Rt=P);let rt=1/(P+400),tt=rt*rt;ht+=tt,pt+=tt*gt[1]}let Ht=Mi(30,160,Math.sqrt(Rt)),j=pt/ht*(1-Ht*.4)+E*Ht*.4+S(J,q)*Ht;b.h[F*b.nx+G]=j*fx}let O=t.features.filter(F=>F.closed&&["water","track","tennis","pitch"].includes(F.kind)&&F.pts.length>3);for(let F of O){let G=wn(F.pts),J=[];for(let pt=Math.max(0,Math.floor((G[1]-12-b.z0)/b.cell));pt<=Math.min(b.nz-1,Math.ceil((G[3]+12-b.z0)/b.cell));pt++)for(let Rt=Math.max(0,Math.floor((G[0]-12-b.x0)/b.cell));Rt<=Math.min(b.nx-1,Math.ceil((G[2]+12-b.x0)/b.cell));Rt++){let Ht=b.x0+Rt*b.cell,j=b.z0+pt*b.cell,gt=hr(F.pts,Ht,j);gt<12&&J.push([pt*b.nx+Rt,gt])}let q=0,ht=0;for(let[pt,Rt]of J)Rt<0&&(q+=b.h[pt],ht++);if(ht){q/=ht,F.kind==="water"&&(q=Math.min(...J.filter(pt=>pt[1]<0).map(pt=>b.h[pt[0]]))-.2),F._level=q;for(let[pt,Rt]of J){let Ht=1-Mi(0,12,Rt);b.h[pt]=b.h[pt]*(1-Ht)+q*Ht-(F.kind==="water"?1.6*(1-Mi(-6,0,Rt)):0)}}}{for(let j=0;j<3;j++){let gt=new Float32Array(b.h);for(let P=1;P<b.nz-1;P++)for(let rt=1;rt<b.nx-1;rt++){let tt=P*b.nx+rt;gt[tt]=(b.h[tt]*4+b.h[tt-1]+b.h[tt+1]+b.h[tt-b.nx]+b.h[tt+b.nx])/8}b.h.set(gt)}let F=new Float32Array(b.nx*b.nz).fill(1e9),G=new Float32Array(b.nx*b.nz),J=new Float32Array(b.nx*b.nz),q=(j,gt)=>b.h[gt*b.nx+j],ht=(j,gt)=>{let P=Math.round((j-b.x0)/b.cell),rt=Math.round((gt-b.z0)/b.cell);return q(Math.max(0,Math.min(b.nx-1,P)),Math.max(0,Math.min(b.nz-1,rt)))},pt=[[0,c],[2540,2690],[g-80,i.lengthM+45]],Rt=[];for(let[j,gt]of pt)for(let P=j;P<=gt;P+=2){let rt=B(P);Rt.push([rt[0],rt[1],ht(rt[0],rt[1])])}for(let j=0;j<4;j++)for(let gt=1;gt<Rt.length-1;gt++)Rt[gt][2]=(Rt[gt-1][2]+Rt[gt][2]*2+Rt[gt+1][2])/4;let Ht=Fe/2+7;for(let[j,gt,P]of Rt){let rt=Math.floor((j-Ht-b.x0)/b.cell),tt=Math.ceil((j+Ht-b.x0)/b.cell),bt=Math.floor((gt-Ht-b.z0)/b.cell),Lt=Math.ceil((gt+Ht-b.z0)/b.cell);for(let Y=Math.max(0,bt);Y<=Math.min(b.nz-1,Lt);Y++)for(let Nt=Math.max(0,rt);Nt<=Math.min(b.nx-1,tt);Nt++){let z=Math.hypot(b.x0+Nt*b.cell-j,b.z0+Y*b.cell-gt);if(z>Ht)continue;let C=Y*b.nx+Nt,ft=(1-z/Ht)**2;G[C]+=ft,J[C]+=ft*P,z<F[C]&&(F[C]=z)}}for(let j=0;j<F.length;j++)if(F[j]<Ht&&G[j]>0){let gt=1-Mi(Fe/2+.5,Ht,F[j]);b.h[j]=b.h[j]*(1-gt)+J[j]/G[j]*gt}b.pathSamples=Rt}let N=O.filter(F=>F.kind==="water").sort((F,G)=>G.pts.length-F.pts.length)[0];function H(F,G){let J=(F-b.x0)/b.cell,q=(G-b.z0)/b.cell,ht=Math.max(0,Math.min(b.nx-2,Math.floor(J))),pt=Math.max(0,Math.min(b.nz-2,Math.floor(q))),Rt=Math.max(0,Math.min(1,J-ht)),Ht=Math.max(0,Math.min(1,q-pt)),j=b.h[pt*b.nx+ht],gt=b.h[pt*b.nx+ht+1],P=b.h[(pt+1)*b.nx+ht],rt=b.h[(pt+1)*b.nx+ht+1];return Rt+Ht<=1?j+(gt-j)*Rt+(P-j)*Ht:rt+(P-rt)*(1-Rt)+(gt-rt)*(1-Ht)}let k=new V;function dt(F,G,J={}){let q=T(F,G),ht=Math.max(0,F-4),pt=ht+8,Rt=T(ht,G),Ht=T(pt,G),j=Ht.x-Rt.x,gt=Ht.z-Rt.z,P=Math.hypot(j,gt)||1;return j/=P,gt/=P,J.x=q.x,J.z=q.z,J.y=H(q.x,q.z)+ko,J.tx=j,J.tz=gt,J.rx=-gt,J.rz=j,J.slope=(H(Ht.x,Ht.z)-H(Rt.x,Rt.z))/Math.max(1,P),J.div=q.div,J.divInfo=q.divInfo,J}function xt(F,G=25){let J=Math.max(0,F-G),q=B(J),ht=B(J+2*G),pt=Math.hypot(ht[0]-q[0],ht[1]-q[1])||1;return k.set((ht[0]-q[0])/pt,0,(ht[1]-q[1])/pt).clone()}let U=[{from:0,to:c,lift:0},{from:2540,to:2690,lift:.02},{from:g-80,to:i.lengthM+45,lift:.035}],Mt=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:B,LAP1_END_DRAW:c,xzAt:T,sample:dt,heading:xt,heightAt:H,terrain:b,ribbons:U,finishM:Mt,lake:N,flat:O,geoOf:F=>F>=u&&F<=g?f(F):F,diversions:w,setPlan:x,LAP1_END:l,MAP_FROM:u,MAP_TO:g}}function wn(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function Ts(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function hr(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,c]=i[s],h=l-o,d=c-a,m=h*h+d*d||1,u=Math.max(0,Math.min(1,((t-o)*h+(e-a)*d)/m));n=Math.min(n,Math.hypot(t-o-h*u,e-a-d*u))}return Ts(i,t,e)?-n:n}function Xe(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Le,c=0;for(let h=0;h<i.length;++h){let d=i[h],m=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let m=0;m<i.length;++m){let u=i[m].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[m].attributes.position.count}l.setIndex(d)}for(let h in r){let d=af(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let m=0;m<d;++m){let u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][m]);let g=af(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function af(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ne(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let m=0,u=h.count;m<u;m++)for(let g=0;g<e;g++){let _=h.getComponent(m,g);a.setComponent(m+d,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var fr=new V;function Tn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;fr.copy(t),fr[n]=0,fr.normalize();let c=.5*o/(o+a),h=1-fr.angleTo(i)/l;return Math.sign(fr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Me=class extends Ee{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new V,l=new V,c=new V(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,m=this.attributes.uv.array,u=h.length/6,g=new V,_=.5/s;for(let p=0,f=0;p<h.length;p+=3,f+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/u)){case 0:g.set(1,0,0),m[f+0]=Tn(g,l,"z","y",r,n),m[f+1]=1-Tn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),m[f+0]=1-Tn(g,l,"z","y",r,n),m[f+1]=1-Tn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),m[f+0]=1-Tn(g,l,"x","z",r,t),m[f+1]=Tn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),m[f+0]=1-Tn(g,l,"x","z",r,t),m[f+1]=1-Tn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),m[f+0]=1-Tn(g,l,"x","y",r,t),m[f+1]=1-Tn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),m[f+0]=Tn(g,l,"x","y",r,t),m[f+1]=1-Tn(g,l,"y","x",r,e);break}}};var bi=null;function ux(){if(bi)return bi;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),bi=new tr(t,i.length,1,vn),bi.minFilter=bi.magFilter=fn,bi.generateMipmaps=!1,bi.needsUpdate=!0,bi}var ur=new Map;function mt(i,t={}){let e=!t.map&&(typeof i=="number"||typeof i=="string")?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&ur.has(e))return ur.get(e);let n=new Po({color:new ae(i??16777215),gradientMap:ux(),...t});return e&&!t.map&&ur.set(e,n),n}function lf(){for(let i of ur.values())i.dispose();ur.clear(),dr.forEach(i=>i.dispose()),dr.clear()}var cc={uRes:{value:new Bt(1920,1080)}},dr=new Map;function dx(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(dr.has(n))return dr.get(n);let s=new un({uniforms:{...sc.clone(Kt.fog),uRes:cc.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new ae(t)}},vertexShader:`
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
      }`,side:nn,fog:!0});return dr.set(n,s),s}function hc(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),c=n.get(l);c||(c=[0,0,0],n.set(l,c)),c[0]+=e.getX(a),c[1]+=e.getY(a),c[2]+=e.getZ(a),r.push(c)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}return i.setAttribute("onormal",new Ne(o,3)),i}function Nn(i,t=3,e,n){hc(i.geometry);let s=dx(t,e,n),r;return i.isInstancedMesh?(r=new Ye(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new Ce(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function ye(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ce(i,t);return a.castShadow=e,a.receiveShadow=n,s&&Nn(a,s,r,o),a}function Ke(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new Ms(o);return s&&(l.colorSpace=tn),n&&(l.wrapS=l.wrapT=Ni),l.anisotropy=r,l}var fc='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',ie=gn(20240817);function gn(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Fn(i,t,e,n){let s=Ke(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function je(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${fc}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function hf(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new fe;i.add(a);let l=A=>(a.add(A),A),c=t.terrain,h=(c.nx-1)*c.cell,d=(c.nz-1)*c.cell,m=new Map,u=6,g=(A,Q)=>`${Math.floor(A/u)},${Math.floor(Q/u)}`,_=(A,Q,K)=>{let it=g(A,Q),_t=m.get(it);_t||m.set(it,_t=[]),_t.push([A,Q,K])},p=(A,Q,K)=>{let it=Math.floor(A/u),_t=Math.floor(Q/u),lt=Math.ceil((K+30)/u);for(let Ct=-lt;Ct<=lt;Ct++)for(let Xt=-lt;Xt<=lt;Xt++){let Ut=m.get(`${it+Ct},${_t+Xt}`);if(Ut){for(let[Z,vt,Et]of Ut)if((Z-A)**2+(vt-Q)**2<(Et+K)**2)return!1}}return!0},f=[];for(let A of t.ribbons)for(let Q=A.from;Q<=A.to;Q+=3){let K=t.baseXZ(Q);f.push(K),_(K[0],K[1],Fe/2+1.5)}for(let A in t.diversions)for(let Q of t.diversions[A])for(let K of Q.path)_(K[0],K[1],4);let w=s.features.filter(A=>A.kind==="park").sort((A,Q)=>Q.pts.length-A.pts.length)[0].pts,x=(A,Q)=>Ts(w,A,Q),B=s.features.filter(A=>A.closed&&["water","track","tennis","pitch","playground","building"].includes(A.kind)).map(A=>[wn(A.pts),A]),T=(A,Q,K=2)=>B.some(([it,_t])=>A>it[0]-K&&A<it[2]+K&&Q>it[1]-K&&Q<it[3]+K&&hr(_t.pts,A,Q)<K),I=1.7,D=[];function M(A,Q,K=!1){D.push({im:A,list:Q,occluder:K})}let v=new Set,b=new Se;function L(A,Q,K=5){let it=new Set,_t=A?A.x:0,lt=A?A.z:0,Ct=Q?Q.x:0,Xt=Q?Q.z:0,Ut=Ct-_t,Z=Xt-lt,vt=Ut*Ut+Z*Z||1;for(let Et of D)Et.occluder&&Et.list.forEach((Yt,re)=>{let le=!1;if(A&&!Yt.cleared){let nt=((Yt.x-_t)*Ut+(Yt.z-lt)*Z)/vt;if(nt>.02&&nt<1){let zt=_t+Ut*nt-Yt.x,Ft=lt+Z*nt-Yt.z;le=!((1-nt)*Math.sqrt(vt)<6)&&zt*zt+Ft*Ft<(K*(Yt.s||1))**2}}let X=Et.im.id*1e5+re;le&&!v.has(X)?(v.add(X),Et.im.setMatrixAt(re,E),it.add(Et.im)):!le&&v.has(X)&&(v.delete(X),Et.im.setMatrixAt(re,Yt._m||b.identity()),it.add(Et.im))});for(let Et of it)Et.instanceMatrix.needsUpdate=!0}let E=new Se().makeScale(0,0,0);function S(A){for(let{im:Q,list:K}of D){let it=!1;K.forEach((_t,lt)=>{!_t.cleared&&A(_t.x,_t.z)&&(_t.cleared=!0,Q.setMatrixAt(lt,E),it=!0)}),it&&(Q.instanceMatrix.needsUpdate=!0)}}function O(){let A=N.image.getContext("2d");H(A,N.image.width,N.image.height),N.needsUpdate=!0}let N=Ke(Math.round(h*I),Math.round(d*I),(A,Q,K)=>H(A,Q,K),{aniso:8});o.push(N);function H(A,Q,K){let it=Z=>(Z-c.x0)*I,_t=Z=>(Z-c.z0)*I,lt=(Z,vt=!0)=>{A.beginPath(),Z.forEach((Et,Yt)=>Yt?A.lineTo(it(Et[0]),_t(Et[1])):A.moveTo(it(Et[0]),_t(Et[1]))),vt&&A.closePath()};A.fillStyle="#d8d2c2",A.fillRect(0,0,Q,K);for(let Z=0;Z<9e3;Z++)A.fillStyle=ie()<.5?"#cfc8b6":"#e2dccd",A.fillRect(ie()*Q,ie()*K,3,3);lt(w),A.fillStyle="#66cf45",A.fill(),A.save(),lt(w),A.clip(),A.translate(Q/2,K/2),A.rotate(-.62);for(let Z=-2e3;Z<2e3;Z+=2*14*I)A.fillStyle="rgba(255,255,140,0.10)",A.fillRect(Z,-2500,14*I,5e3);A.setTransform(1,0,0,1,0,0);for(let Z=0;Z<26e3;Z++){let vt=ie()*Q,Et=ie()*K;A.fillStyle=ie()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",A.fillRect(vt,Et,2+ie()*2,2+ie()*3)}A.restore();let Ct=(Z,vt,Et)=>{for(let Yt of s.features)Yt.kind===Z&&Yt.closed&&(lt(Yt.pts),A.fillStyle=vt,A.fill(),Et&&(A.strokeStyle=Et,A.lineWidth=2,A.stroke()))};Ct("grass","#72d64e"),Ct("garden","#86dc5c"),Ct("wood","#3f9e3a"),Ct("scrub","#5cb544");for(let Z of s.features)if(Z.kind==="pitch"&&Z.closed){A.save(),lt(Z.pts),A.clip(),A.fillStyle="#5ccc3f",A.fill();let vt=wn(Z.pts);for(let Et=vt[0];Et<vt[2];Et+=8)A.fillStyle="rgba(255,255,255,0.10)",A.fillRect(it(Et),_t(vt[1]),4*I,(vt[3]-vt[1])*I);A.restore(),lt(Z.pts),A.strokeStyle="#ffffff",A.lineWidth=2.2,A.stroke()}for(let Z of s.features)if(Z.kind==="playground"&&Z.closed){lt(Z.pts),A.fillStyle="#7fcfb4",A.fill(),A.save(),lt(Z.pts),A.clip();let vt=wn(Z.pts);for(let Et=0;Et<260;Et++)A.fillStyle=ie()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",A.fillRect(it(vt[0]+ie()*(vt[2]-vt[0])),_t(vt[1]+ie()*(vt[3]-vt[1])),3,3);for(let Et=0;Et<(vt[2]-vt[0])*(vt[3]-vt[1])/400;Et++)A.beginPath(),A.arc(it(vt[0]+ie()*(vt[2]-vt[0])),_t(vt[1]+ie()*(vt[3]-vt[1])),1.6*I,0,7),A.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][Et%3],A.fill();A.restore(),lt(Z.pts),A.strokeStyle="#ffffff",A.lineWidth=.8*I,A.stroke()}let Xt=Z=>{let vt=0;for(let Et=0,Yt=Z.pts.length-1;Et<Z.pts.length;Yt=Et++)vt+=(Z.pts[Yt][0]+Z.pts[Et][0])*(Z.pts[Yt][1]-Z.pts[Et][1]);return Math.abs(vt/2)};for(let Z of s.features)if(Z.kind==="track"&&Z.closed&&Xt(Z)>5e3){A.save(),lt(Z.pts),A.clip(),A.fillStyle="#e2523a",A.fill();let vt=9*I,Et=Ho(Z.pts),Yt=wn(Z.pts),re=Yt[2]-Yt[0],le=Yt[3]-Yt[1],X=zt=>Z.pts.map(Ft=>[Et[0]+(Ft[0]-Et[0])*zt,Et[1]+(Ft[1]-Et[1])*zt]),nt=1-2*9/Math.min(re,le);for(let zt=1;zt<=5;zt++)lt(X(1-(1-nt)*(zt/6))),A.strokeStyle="rgba(255,255,255,0.9)",A.lineWidth=1.6,A.stroke();lt(X(nt)),A.fillStyle="#5ccc3f",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=3,A.stroke(),A.restore(),lt(Z.pts),A.strokeStyle="#ffffff",A.lineWidth=3,A.stroke()}for(let Z of s.features)if(Z.kind==="track"&&Z.closed&&Xt(Z)<=5e3){let vt=Z.tags?.surface==="sand";if(!Z.tags?.surface)continue;lt(Z.pts),A.fillStyle=vt?"#f2d58f":"#e2523a",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=1.5,A.stroke()}for(let Z of s.features)if(Z.kind==="tennis"&&Z.closed){lt(Z.pts),A.fillStyle="#3f9fd1",A.fill(),A.strokeStyle="#ffffff",A.lineWidth=2.5,A.stroke();let vt=Ho(Z.pts),Et=wn(Z.pts);A.save(),lt(Z.pts),A.clip(),A.strokeStyle="rgba(255,255,255,0.9)",A.lineWidth=1.5,A.beginPath(),A.moveTo(it(vt[0]),_t(Et[1])),A.lineTo(it(vt[0]),_t(Et[3])),A.stroke(),A.restore()}for(let Z of s.features)Z.kind==="water"&&Z.closed&&(lt(Z.pts),A.strokeStyle="#f4efe0",A.lineWidth=3.4*I,A.lineJoin="round",A.stroke(),A.fillStyle="#2f8fe0",A.fill());for(let Z of s.features)Z.kind==="path"&&(lt(Z.pts,!1),A.lineCap="round",A.lineJoin="round",A.strokeStyle="#c9ad78",A.lineWidth=3.6*I,A.stroke());for(let Z of s.features)Z.kind==="path"&&(lt(Z.pts,!1),A.strokeStyle="#ecd8a6",A.lineWidth=2.6*I,A.stroke());let Ut=Z=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[Z.tags?.highway]||7;for(let Z of s.features)Z.kind==="road"&&(lt(Z.pts,Z.closed),A.lineCap="round",A.lineJoin="round",A.strokeStyle="#ece6d6",A.lineWidth=(Ut(Z)+4)*I,A.stroke());for(let Z of s.features)Z.kind==="road"&&(lt(Z.pts,Z.closed),A.strokeStyle="#7f8597",A.lineWidth=Ut(Z)*I,A.stroke());for(let Z of s.features)Z.kind==="road"&&Ut(Z)>=11&&(lt(Z.pts,!1),A.setLineDash([5*I,5*I]),A.strokeStyle="#f4f1e6",A.lineWidth=.5*I,A.stroke(),A.setLineDash([]));for(let Z of s.features)Z.kind==="rail"&&(lt(Z.pts,!1),A.strokeStyle="#9b8f84",A.lineWidth=5*I,A.stroke());for(let Z of s.features)Z.kind==="rail"&&(lt(Z.pts,!1),A.setLineDash([1,2]),A.strokeStyle="#5b4f46",A.lineWidth=3*I,A.stroke(),A.setLineDash([]),lt(Z.pts,!1),A.strokeStyle="#c9ccd6",A.lineWidth=.8,A.stroke());for(let Z of s.features)Z.kind==="building"&&Z.closed&&(lt(Z.pts),A.fillStyle="#9c968a",A.fill());for(let Z in t.diversions)for(let vt of t.diversions[Z])A.beginPath(),vt.path.forEach((Et,Yt)=>Yt?A.lineTo(it(Et[0]),_t(Et[1])):A.moveTo(it(Et[0]),_t(Et[1]))),A.lineCap="round",A.lineJoin="round",A.strokeStyle="rgba(196,160,96,0.85)",A.lineWidth=4*I,A.stroke(),A.setLineDash([2*I,3*I]),A.strokeStyle="rgba(255,240,200,0.8)",A.lineWidth=.6*I,A.stroke(),A.setLineDash([])}{let A=c.nx*c.nz,Q=new Float32Array(A*3),K=new Float32Array(A*2);for(let Et=0;Et<c.nz;Et++)for(let Yt=0;Yt<c.nx;Yt++){let re=Et*c.nx+Yt;Q[re*3]=c.x0+Yt*c.cell,Q[re*3+1]=c.h[re],Q[re*3+2]=c.z0+Et*c.cell,K[re*2]=Yt/(c.nx-1),K[re*2+1]=1-Et/(c.nz-1)}let it=new Uint32Array((c.nx-1)*(c.nz-1)*6),_t=0;for(let Et=0;Et<c.nz-1;Et++)for(let Yt=0;Yt<c.nx-1;Yt++){let re=Et*c.nx+Yt,le=re+1,X=re+c.nx,nt=X+1;it[_t++]=re,it[_t++]=X,it[_t++]=le,it[_t++]=le,it[_t++]=X,it[_t++]=nt}let lt=new Le;lt.setAttribute("position",new Ne(Q,3)),lt.setAttribute("uv",new Ne(K,2)),lt.setIndex(new Ne(it,1)),lt.computeVertexNormals();let Ct=mt(16777215,{map:N}),Xt=Ke(256,256,(Et,Yt,re)=>{Et.fillStyle="#808080",Et.fillRect(0,0,Yt,re);for(let le=0;le<1800;le++){let X=100+Math.floor(ie()*70);Et.fillStyle=`rgb(${X},${X},${X})`;let nt=ie()*Yt,zt=ie()*re;Et.fillRect(nt,zt,2,3+ie()*5)}for(let le=0;le<500;le++)Et.fillStyle="rgba(255,255,255,0.18)",Et.fillRect(ie()*Yt,ie()*re,2,2)},{repeat:!0,srgb:!1});o.push(Xt),Ct.onBeforeCompile=Et=>{Et.uniforms.uDetail={value:Xt},Et.vertexShader=Et.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Et.fragmentShader=Et.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},Ct.customProgramCacheKey=()=>"terrain-detail";let Ut=ye(lt,Ct,{cast:!1});Ut.name="terrain",l(Ut);let Z=new Ce(new bs(700,5200,48,1),mt(13227680));Z.rotation.x=-Math.PI/2,Z.position.set(c.x0+h/2,-2,c.z0+d/2),Z.receiveShadow=!1,l(Z);let vt=new Ce(new sn(h+1800,d+1800),mt(13686197));vt.rotation.x=-Math.PI/2,vt.position.set(c.x0+h/2,-3,c.z0+d/2),l(vt)}let k=Ke(256,256,(A,Q,K)=>{A.fillStyle="#7f8fb0",A.fillRect(0,0,Q,K);for(let it=0;it<1600;it++)A.fillStyle=ie()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",A.fillRect(ie()*Q,ie()*K,2,2);A.fillStyle="#6b7a9b",A.fillRect(0,0,Q*.035,K),A.fillRect(Q*.965,0,Q*.035,K),A.fillStyle="#ffffff",A.fillRect(Q*.06,0,Q*.045,K),A.fillRect(Q*.895,0,Q*.045,K),A.fillStyle="rgba(255,255,255,0.35)",A.fillRect(Q*.49,0,Q*.02,K*.5)},{repeat:!0});o.push(k);{let A=[];for(let lt of t.ribbons)A.push(dt(lt));let Q=Xe(A),K=ye(Q,mt(16777215,{map:k}),{cast:!1});K.name="path",l(K);let it=Xe(t.ribbons.map(lt=>dt(lt,!0))),_t=ye(it,mt(5924226),{cast:!1});l(_t)}function dt(A,Q=!1){let K=[];for(let Z=A.from;Z<=A.to+.01;Z+=2)K.push(t.baseXZ(Z));let it=[],_t=[],lt=[],Ct=0;for(let Z=0;Z<K.length;Z++){let vt=K[Math.max(0,Z-1)],Et=K[Math.min(K.length-1,Z+1)],Yt=Et[0]-vt[0],re=Et[1]-vt[1],le=Math.hypot(Yt,re)||1;Yt/=le,re/=le;let X=-re,nt=Yt,zt=Fe/2,Ft=[K[Z][0]-X*zt,K[Z][1]-nt*zt],R=[K[Z][0]+X*zt,K[Z][1]+nt*zt],W=t.heightAt(K[Z][0],K[Z][1]),at=Math.max(t.heightAt(Ft[0],Ft[1]),W-.05)+ko+A.lift,ot=Math.max(t.heightAt(R[0],R[1]),W-.05)+ko+A.lift;Q?(it.push(Ft[0]-X*.15,at-.45,Ft[1]-nt*.15,Ft[0],at,Ft[1],R[0],ot,R[1],R[0]+X*.15,ot-.45,R[1]+nt*.15),_t.push(0,0,0,1,0,1,0,0)):(it.push(Ft[0],at,Ft[1],R[0],ot,R[1]),_t.push(0,Ct/8,1,Ct/8)),Z&&(Ct+=2)}let Xt=Q?4:2;for(let Z=0;Z<K.length-1;Z++){let vt=Z*Xt,Et=(Z+1)*Xt;Q?(lt.push(vt,Et,vt+1,vt+1,Et,Et+1),lt.push(vt+2,Et+2,vt+3,vt+3,Et+2,Et+3)):lt.push(vt,Et,vt+1,vt+1,Et,Et+1)}let Ut=new Le;if(Ut.setAttribute("position",new me(it,3)),Ut.setAttribute("uv",new me(_t,2)),Ut.setIndex(lt),Ut.computeVertexNormals(),Ut.getAttribute("normal").getY(0)<0&&!Q){let Z=Ut.index.array;for(let vt=0;vt<Z.length;vt+=3){let Et=Z[vt+1];Z[vt+1]=Z[vt+2],Z[vt+2]=Et}Ut.computeVertexNormals()}return Ut}let xt={uTime:{value:0}},U=s.features.filter(A=>A.kind==="water"&&A.closed);for(let A of U){let Q=(A._level??Math.min(...A.pts.map(Ct=>t.heightAt(Ct[0],Ct[1]))))+.05,K=new Oi(A.pts.map(Ct=>new Bt(Ct[0],-Ct[1]))),it=new Co(K,4);it.rotateX(-Math.PI/2),it.translate(0,Q,0);let _t=new un({uniforms:{...xt,...Kt.fog},vertexShader:`varying vec3 vW;
${ge.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${ge.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${ge.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${ge.fog_fragment}
        }`,fog:!0}),lt=new Ce(it,_t);lt.name="water",l(lt),o.push(_t),A._waterLevel=Q}let Mt=[];if(t.lake){let A=t.lake,Q=wn(A.pts),K=[16767291,16735581,5752831,16777215,16748497,8257418],it=new Me(2,.7,3.6,2,.32),_t=new Me(1.2,.5,.8,2,.2);for(let lt=0,Ct=0;lt<9&&Ct<300;Ct++){let Xt=Q[0]+ie()*(Q[2]-Q[0]),Ut=Q[1]+ie()*(Q[3]-Q[1]);if(hr(A.pts,Xt,Ut)>-7)continue;let Z=new fe,vt=ye(it,mt(K[lt%K.length]),{ol:2.5});Z.add(vt);let Et=ye(_t,mt(16777215),{ol:2});Et.position.y=.45,Z.add(Et);let Yt=ye(new xe(.42,12,8),mt(K[(lt+2)%K.length]),{ol:2});Yt.position.set(0,.9,.7),Z.add(Yt),Z.position.set(Xt,(A._waterLevel??0)+.1,Ut),Z.rotation.y=ie()*6.28,l(Z),Mt.push({g:Z,ph:ie()*6.28,x:Xt,z:Ut,a:Z.rotation.y}),lt++}}{let A=Ke(128,128,(lt,Ct,Xt)=>{lt.fillStyle="#ffffff",lt.fillRect(0,0,Ct,Xt),lt.fillStyle="#ffffff",lt.fillRect(0,0,14,14),lt.fillStyle="#3b4a6b",lt.fillRect(34,30,60,58),lt.fillStyle="#9ec9ff",lt.fillRect(38,34,52,50),lt.fillStyle="#ffffff",lt.fillRect(62,34,4,50),lt.fillRect(38,56,52,4),lt.fillStyle="rgba(0,0,0,0.08)",lt.fillRect(0,118,Ct,10)},{repeat:!0});o.push(A);let Q={generateTopUV:(lt,Ct,Xt,Ut,Z)=>[new Bt(.02,.98),new Bt(.02,.98),new Bt(.02,.98)],generateSideWallUV:(lt,Ct,Xt,Ut,Z,vt)=>{let Et=Ct[Xt*3],Yt=Ct[Xt*3+1],re=Ct[Xt*3+2],le=Ct[Ut*3],X=Ct[Ut*3+1],nt=Ct[Ut*3+2],zt=Ct[Z*3+2],Ft=Ct[vt*3+2],R=(Math.abs(Yt-X)<Math.abs(Et-le)?Et:Yt)/4.2,W=(Math.abs(Yt-X)<Math.abs(Et-le)?le:X)/4.2;return[new Bt(R,re/3.2),new Bt(W,nt/3.2),new Bt(W,zt/3.2),new Bt(R,Ft/3.2)]}},K=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],it=["#5d6488","#7a5d6c","#4f6b78"],_t=[];for(let lt of s.features){if(lt.kind!=="building"||!lt.closed||lt.pts.length<4)continue;let Ct=Ho(lt.pts);if(x(Ct[0],Ct[1]))continue;let Xt=parseFloat(lt.tags?.["building:levels"])||(ie()<.7?3:4),Ut=Math.min(30,Xt*3.1),Z=new Oi(lt.pts.map(zt=>new Bt(zt[0],-zt[1]))),vt;try{vt=new Ro(Z,{depth:Ut,bevelEnabled:!1,UVGenerator:Q})}catch{continue}vt.rotateX(-Math.PI/2);let Et=Math.min(...lt.pts.map(zt=>t.heightAt(zt[0],zt[1])))-1.5;vt.translate(0,Et,0);let Yt=vt.getAttribute("normal"),re=Yt.count,le=new Float32Array(re*3),X=new ae(K[Math.floor(ie()*K.length)]).convertSRGBToLinear(),nt=new ae(it[Math.floor(ie()*it.length)]).convertSRGBToLinear();for(let zt=0;zt<re;zt++){let Ft=Yt.getY(zt)>.5?nt:X;le[zt*3]=Ft.r,le[zt*3+1]=Ft.g,le[zt*3+2]=Ft.b}vt.setAttribute("color",new Ne(le,3)),_t.push(vt.index?vt.toNonIndexed():vt)}if(_t.length){let lt=Xe(_t),Ct=ye(lt,mt(16777215,{map:A,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});Ct.name="buildings",l(Ct)}}let kt=t.sample(t.finishM),F=t.sample(0),G={start:F,finish:kt},J=new fe;l(J);function q(A,Q,K,it){let _t=new fe,lt=Fe/2+1.4,Ct=.85,Xt=Ke(256,32,(re,le,X)=>{for(let nt=0;nt<16;nt++)re.fillStyle=nt%2?K:it,re.fillRect(nt*le/16,0,le/16+1,X)},{repeat:!1});o.push(Xt);let Ut=new Ge(lt,Ct,14,40,Math.PI);Ut.scale(1,1.25,1);let Z=ye(Ut,mt(16777215,{map:Xt}),{ol:3.5});_t.add(Z);let vt=new he(Ct*1.4,Ct*1.6,.8,16);for(let re of[-1,1]){let le=ye(vt,mt(it),{ol:3});le.position.set(re*lt,.3,0),_t.add(le)}let Et=Fn(1024,256,(re,le,X)=>{re.fillStyle="#1b1b3a",He(re,0,0,le,X,60),re.fill(),re.fillStyle=K,He(re,12,12,le-24,X-24,50),re.fill(),je(re,"MARKRUN",le/2,X*.42,150,"#ffffff","#1b1b3a",.18),je(re,Q,le/2,X*.83,56,"#ffe14d","#1b1b3a",.2)},o),Yt=ye(new Me(lt*1.55,lt*.4,.7,3,.25),[mt(it),mt(it),mt(it),mt(it),mt(16777215,{map:Et}),mt(16777215,{map:Et})],{ol:3.5});return Yt.position.y=lt*1.25+Ct*1.25+lt*.2-.15,_t.add(Yt),_t.position.set(A.x,A.y-.1,A.z),_t.rotation.y=Math.atan2(-A.rz,A.rx),J.add(_t),_t}G.finishArch=q(kt,"FINISH","#ff3d8b","#ffd23f"),q(F,"START","#2e9bff","#ffd23f");let ht=Ke(256,64,(A,Q,K)=>{let _t=Q/16;for(let lt=0;lt<16;lt++)for(let Ct=0;Ct<4;Ct++)A.fillStyle=(lt+Ct)%2?"#111":"#fff",A.fillRect(lt*_t,Ct*_t,_t,_t)});o.push(ht);function pt(A,Q,K,it=.03){let _t=new sn(Fe,K);_t.rotateX(-Math.PI/2);let lt=new Ce(_t,mt(16777215,{map:Q,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return lt.position.set(A.x,A.y+it,A.z),lt.rotation.y=Math.atan2(-A.rz,A.rx),lt.receiveShadow=!0,l(lt),lt}pt(kt,ht,2.2,.05);let Rt=Fn(512,128,(A,Q,K)=>{A.fillStyle="#ffffff",A.fillRect(0,0,Q,22),je(A,"START",Q/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let A=t.sample(2.5);pt(A,Rt,3,.05).rotation.y+=Math.PI}let Ht=new Pe;function j(A,Q,K,{ol:it=0,olRef:_t,cast:lt=!0,colors:Ct,chunk:Xt=0,occluder:Ut=!1}={}){if(!K.length)return null;if(Xt){let vt=new Map;K.forEach((Yt,re)=>{let le=`${Math.floor(Yt.x/Xt)},${Math.floor(Yt.z/Xt)}`,X=vt.get(le);X||vt.set(le,X={l:[],c:[]}),X.l.push(Yt),Ct&&X.c.push(Ct[re])});let Et=null;for(let{l:Yt,c:re}of vt.values()){let le=j(A,Q,Yt,{ol:it,olRef:_t,cast:lt,colors:Ct?re:null,occluder:Ut});Et=Et||le}return Et}let Z=new Ye(A,Q,K.length);return K.forEach((vt,Et)=>{Ht.position.set(vt.x,vt.y,vt.z),Ht.rotation.set(vt.rx||0,vt.ry||0,vt.rz||0),Ht.scale.set(vt.sx??vt.s??1,vt.sy??vt.s??1,vt.sz??vt.s??1),Ht.updateMatrix(),Z.setMatrixAt(Et,Ht.matrix),Ut&&(vt._m=Ht.matrix.clone()),Ct&&Z.setColorAt(Et,new ae(Ct[Et]))}),Z.castShadow=lt,Z.receiveShadow=!0,Z.computeBoundingSphere(),it&&Nn(Z,it,void 0,_t),M(Z,K,Ut),l(Z),Z}let gt=[];{let A=K=>{let it=t.rawExt(K-12),_t=t.rawExt(K),lt=t.rawExt(K+12),Ct=Math.atan2(_t[1]-it[1],_t[0]-it[0]),Ut=Math.atan2(lt[1]-_t[1],lt[0]-_t[0])-Ct;for(;Ut>Math.PI;)Ut-=2*Math.PI;for(;Ut<-Math.PI;)Ut+=2*Math.PI;return Ut},Q=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[K,it]of Q){let _t=null;for(let lt=K;lt<it;lt+=4){let Ct=A(lt);Math.abs(Ct)>.45?(!_t||Math.abs(Ct)>Math.abs(_t.d))&&(_t={m:lt,d:Ct}):_t&&(gt.some(Xt=>Math.abs(Xt.m-_t.m)<50)||gt.push(_t),_t=null)}}}let P=[],rt=[],tt=[],bt=[];for(let A of gt){let Q=A.d>0;for(let K=-2;K<=2;K++){let it=t.sample(A.m+K*5),_t=Q?-1:1,lt=Fe/2+1.6,Ct=it.x+it.rx*lt*_t,Xt=it.z+it.rz*lt*_t;p(Ct,Xt,.3),(Q?rt:P).push({x:Ct,y:t.heightAt(Ct,Xt),z:Xt,ry:Math.atan2(-it.tz,it.tx)+(_t>0?Math.PI:0)})}for(let K=-3;K<=3;K++){let it=t.sample(A.m+K*3.5),_t=Q?1:-1,lt=Fe/2+.7;tt.push({x:it.x+it.rx*lt*_t,y:t.heightAt(it.x+it.rx*lt*_t,it.z+it.rz*lt*_t),z:it.z+it.rz*lt*_t,ry:ie()*6});for(let Ct=0;Ct<2;Ct++){let Xt=t.sample(A.m+K*3.5+Ct*1.75),Ut=Fe/2+.1;bt.push({x:Xt.x+Xt.rx*Ut*_t,y:Xt.y-.05,z:Xt.z+Xt.rz*Ut*_t,ry:Math.atan2(Xt.tx,Xt.tz),red:(K*2+Ct)%2===0})}}}G.corners=gt;{let A=Ke(256,96,(Ut,Z,vt)=>{Ut.fillStyle="#2f6fe0",Ut.fillRect(0,0,Z,vt),Ut.fillStyle="#ffffff";for(let Et=0;Et<4;Et++){let Yt=18+Et*60;Ut.beginPath(),Ut.moveTo(Yt,12),Ut.lineTo(Yt+26,12),Ut.lineTo(Yt+54,vt/2),Ut.lineTo(Yt+26,vt-12),Ut.lineTo(Yt,vt-12),Ut.lineTo(Yt+28,vt/2),Ut.closePath(),Ut.fill()}Ut.strokeStyle="#1b3f8f",Ut.lineWidth=8,Ut.strokeRect(0,0,Z,vt)}),Q=A.clone();Q.repeat.x=-1,Q.offset.x=1,Q.wrapS=Ni,Q.needsUpdate=!0,o.push(A,Q);let it=(Ut=>{let Z=new Ee(3.2,1.2,.12);Z.rotateX(-.32),Z.translate(0,.62,.22);let vt=new Ee(3.2,1.2,.12);return vt.rotateX(.32),vt.translate(0,.62,-.22),vt.rotateY(Math.PI),Xe([Z,vt])})();hc(it),j(it,mt(16777215,{map:A}),rt,{ol:2.5}),j(it,mt(16777215,{map:Q}),P,{ol:2.5});let _t=Ke(16,64,(Ut,Z,vt)=>{for(let Et=0;Et<4;Et++)Ut.fillStyle=Et%2?"#ffffff":"#ff6a2b",Ut.fillRect(0,Et*vt/4,Z,vt/4)});o.push(_t);let lt=new he(.06,.32,.9,12,1);lt.translate(0,.5,0);let Ct=new Ee(.8,.08,.8);Ct.translate(0,.04,0),j(lt,mt(16777215,{map:_t}),tt,{ol:2}),j(Ct,mt(16738859),tt,{ol:1.5});let Xt=new Ee(.5,.22,1.75);Xt.translate(0,.11,0),j(Xt,mt(16777215),bt.map(Ut=>Ut),{ol:1.5,colors:bt.map(Ut=>Ut.red?15216959:16777215)})}let Lt=new fe;l(Lt);function Y(A,Q,K,it,_t,{postH:lt=1.6,face:Ct=0,scale:Xt=1}={}){let Ut=Fn(512,Math.round(512*it/K),_t,o),Z=new fe,vt=ye(new Me(K,it,.25,2,.08),[mt(5978660),mt(5978660),mt(5978660),mt(5978660),mt(16777215,{map:Ut}),mt(16777215,{map:Ut})],{ol:3});vt.position.y=lt+it/2,Z.add(vt);let Et=new Ee(.25,lt+it*.5,.25);for(let X of[-1,1]){let nt=ye(Et,mt(9067062),{ol:2});nt.position.set(X*K*.35,(lt+it*.5)/2,-.1),Z.add(nt)}let Yt=Fe/2+2.2+K*.15,re=A.x+A.rx*Yt*Q,le=A.z+A.rz*Yt*Q;return Z.position.set(re,t.heightAt(re,le)-.1,le),Z.rotation.y=Math.atan2(-A.tx,-A.tz)+Q*.5+Ct,Z.scale.setScalar(Xt),Lt.add(Z),Z}let Nt=1720,z=t.sample(Nt-10);G.hillSign=Y(z,1,6,3.2,(A,Q,K)=>{A.fillStyle="#ffd23f",He(A,0,0,Q,K,40),A.fill(),A.lineWidth=16,A.strokeStyle="#1b1b3a",He(A,8,8,Q-16,K-16,34),A.stroke(),A.fillStyle="#3aa845",A.beginPath(),A.moveTo(40,K-40),A.lineTo(150,70),A.lineTo(260,K-40),A.closePath(),A.fill(),A.strokeStyle="#1b1b3a",A.lineWidth=8,A.stroke(),A.fillStyle="#fff",A.beginPath(),A.moveTo(118,118),A.lineTo(150,70),A.lineTo(182,118),A.closePath(),A.fill(),je(A,"THE",380,K*.3,72,"#ffffff","#1b1b3a",.2),je(A,"HILL",370,K*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),G.hillM=Nt;for(let A of[1,2,3,4]){let Q=A*1e3,K=t.sample(t.geoOf(Q));Y(K,-1,1.6,1.3,(it,_t,lt)=>{it.fillStyle="#ffffff",He(it,0,0,_t,lt,50),it.fill(),it.fillStyle="#ff3d8b",He(it,20,20,_t-40,lt-40,36),it.fill(),je(it,`${A}K`,_t/2,lt/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let C=t.sample(2475);G.lapBoard=Y(C,1,4.4,2.6,(A,Q,K)=>{A.fillStyle="#1b1b3a",He(A,0,0,Q,K,40),A.fill(),A.fillStyle="#2e9bff",He(A,14,14,Q-28,K-28,30),A.fill(),je(A,"LAP",Q/2,K*.28,90,"#ffffff","#1b1b3a",.18),je(A,"2 OF 2",Q/2,K*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),G.lapM=2500;let ft=[],At=[],It=[],$=[];function ut(A,Q,K,it=3.2,_t=12){let lt=null;for(let Ct=A;Ct<=Q;Ct+=_t){let Xt=t.sample(Ct),Ut=Fe/2+1,Z=Xt.x+Xt.rx*Ut*K,vt=Xt.z+Xt.rz*Ut*K,Et=t.heightAt(Z,vt);At.push({x:Z,y:Et,z:vt});let Yt=new V(Z,Et+it,vt);if(lt){let re=[];for(let le=0;le<=12;le++){let X=le/12,nt=lt.clone().lerp(Yt,X);nt.y-=Math.sin(X*Math.PI)*.6,re.push(nt)}It.push(re);for(let le=1;le<12;le++){let X=re[le],nt=re[le+1].clone().sub(re[le-1]);ft.push({x:X.x,y:X.y,z:X.z,ry:Math.atan2(-nt.z,nt.x)})}}lt=Yt}}function ct(A,Q,K,it=Fe/2+2.2){for(let _t=A;_t<=Q;_t+=2.4){let lt=t.sample(_t),Ct=lt.x+lt.rx*it*K,Xt=lt.z+lt.rz*it*K;$.push({x:Ct,y:t.heightAt(Ct,Xt),z:Xt,ry:Math.atan2(lt.tx,lt.tz)})}}let yt=t.finishM;ut(yt-70,yt+10,1),ut(yt-70,yt+10,-1),ut(-6,50,1),ut(-6,50,-1),ct(yt-60,yt+14,1),ct(yt-60,yt+14,-1),ct(-4,40,1),ct(-4,40,-1);{let A=new Le;A.setAttribute("position",new me([-.3,0,0,.3,0,0,0,-.62,0],3)),A.setAttribute("normal",new me([0,0,1,0,0,1,0,0,1],3));let Q=ft.map((Z,vt)=>[16727435,16765503,3054591,4054148,16747069,16777215][vt%6]);j(A,mt(16777215,{side:We}),ft,{colors:Q,cast:!1});let K=new he(.07,.09,3.3,6);K.translate(0,1.65,0),j(K,mt(16777215),At,{ol:1.5});let it=new Le().setFromPoints(It.flatMap(Z=>Z.slice(0,-1).flatMap((vt,Et)=>[vt,Z[Et+1]]))),_t=new vs(it,new zi({color:3355443}));l(_t),o.push(it);let lt=[];for(let Z=0;Z<4;Z++){let vt=new Ee(.16,1,.06);vt.translate(-.9+Z*.6,.5,0),lt.push(vt)}let Ct=new Ee(2.4,.12,.05);Ct.translate(0,.65,.05),lt.push(Ct);let Xt=Ct.clone();Xt.translate(0,-.35,0),lt.push(Xt);let Ut=Xe(lt);Ut.rotateY(Math.PI/2),j(Ut,mt(16777215),$,{ol:1.8})}let wt=[],St=(A,Q,K,it,_t,lt=1.35)=>wt.push({m0:A,m1:Q,side:K,off:Fe/2+3,depth:it,density:_t,spacing:lt});St(yt-58,yt+12,1,6,1),St(yt-58,yt+12,-1,6,1),St(-2,38,1,5,.9),St(-2,38,-1,5,.9),St(1940,2010,1,4,.7),St(1960,2010,-1,3,.6),St(Nt-10,Nt+40,-1,3,.55),St(2440,2490,-1,3,.7),St(Nt-70,Nt+10,1,3,.5),St(Nt-70,Nt-20,-1,3,.45),St(2080,2160,1,4,.75),St(2080,2160,-1,4,.75),St(800,860,1,3,.6),St(1250,1310,-1,3,.6),G.crowdZones=wt;{let A=s.pois.filter(it=>it.kind==="bench"&&x(it.pos[0],it.pos[1])&&p(it.pos[0],it.pos[1],1)).map(it=>({x:it.pos[0],y:t.heightAt(it.pos[0],it.pos[1]),z:it.pos[1],ry:ie()*6})),Q=Xe([new Ee(1.8,.12,.5).translate(0,.5,0),new Ee(1.8,.4,.1).translate(0,.8,-.22),new Ee(.1,.5,.45).translate(-.8,.25,0),new Ee(.1,.5,.45).translate(.8,.25,0)]);j(Q,mt(11892031),A,{ol:1.5});let K=s.pois.filter(it=>it.kind==="cafe"&&x(it.pos[0],it.pos[1])&&p(it.pos[0],it.pos[1],4));for(let it of K){let _t=new fe;_t.add(ye(new Me(5,3,4,2,.2),mt(16774108),{ol:2.5})).position.y=1.5;let lt=Ke(128,16,(Ut,Z,vt)=>{for(let Et=0;Et<8;Et++)Ut.fillStyle=Et%2?"#fff":"#ff4f6d",Ut.fillRect(Et*16,0,16,vt)});o.push(lt);let Ct=ye(new Ee(5.6,.2,2),mt(16777215,{map:lt}),{ol:2});Ct.position.set(0,2.9,2.3),Ct.rotation.x=.35,_t.add(Ct);let Xt=ye(new ke(4,1.6,4),mt(3054591),{ol:2.5});Xt.position.y=3.8,Xt.rotation.y=Math.PI/4,_t.add(Xt),_t.position.set(it.pos[0],t.heightAt(it.pos[0],it.pos[1]),it.pos[1]),_t.rotation.y=ie()*6,l(_t),_(it.pos[0],it.pos[1],5)}}for(let A of wt)for(let Q=A.m0-8;Q<=A.m1+8;Q+=4){let K=t.sample(Q),it=A.off+A.depth/2;_(K.x+K.rx*it*A.side,K.z+K.rz*it*A.side,A.depth/2+3)}for(let A of[F,kt])_(A.x,A.z,14);function Pt(A,Q){let K=null,it=1e9;for(let _t of f){let lt=(_t[0]-A)**2+(_t[1]-Q)**2;lt<it&&(it=lt,K=_t)}return K}G.nearestOnRibbon=Pt,G.ribbonSamples=f;let $t=new Map;for(let A of f){let Q=`${Math.floor(A[0]/10)},${Math.floor(A[1]/10)}`,K=$t.get(Q);K||$t.set(Q,K=[]),K.push(A)}let te=(A,Q,K=1)=>{let it=Math.floor(A/10),_t=Math.floor(Q/10),lt=(Fe/2+K)**2;for(let Ct=-1;Ct<=1;Ct++)for(let Xt=-1;Xt<=1;Xt++)for(let Ut of $t.get(`${it+Ct},${_t+Xt}`)||[])if((Ut[0]-A)**2+(Ut[1]-Q)**2<lt)return!0;return!1};G.reserve=_,G.clearOf=p;let Zt=[],ue=(A,Q,K,it)=>!p(A,Q,2.5*it)||T(A,Q,1.5)?!1:(Zt.push({x:A,z:Q,kind:K,s:it}),_(A,Q,2.2*it),!0);for(let A of s.pois)A.kind==="tree"&&ue(A.pos[0],A.pos[1],0,.85+ie()*.35);for(let A of s.features)if(A.kind==="wood"&&A.closed){let Q=wn(A.pts),K=(Q[2]-Q[0])*(Q[3]-Q[1]);for(let it=0;it<K/90;it++){let _t=Q[0]+ie()*(Q[2]-Q[0]),lt=Q[1]+ie()*(Q[3]-Q[1]);Ts(A.pts,_t,lt)&&ue(_t,lt,1,.9+ie()*.5)}}{let A=wn(w);for(let Q=0;Q<2600;Q++){let K=A[0]+ie()*(A[2]-A[0]),it=A[1]+ie()*(A[3]-A[1]);!x(K,it)||-hr(w,K,it)>45&&ie()<.75||ue(K,it,ie()<.7?1:2,.8+ie()*.5)}for(let Q of s.features)if(Q.kind==="road"&&!Q.closed)for(let K=1;K<Q.pts.length;K++){let it=Q.pts[K-1],_t=Q.pts[K],lt=Math.hypot(_t[0]-it[0],_t[1]-it[1]);for(let Ct=0;Ct<lt;Ct+=22){let Xt=Ct/lt,Ut=it[0]+(_t[0]-it[0])*Xt,Z=it[1]+(_t[1]-it[1])*Xt,vt=-(_t[1]-it[1])/lt,Et=(_t[0]-it[0])/lt,Yt=8+ie()*2;ie()<.5&&ue(Ut+vt*Yt,Z+Et*Yt,0,.6+ie()*.2)}}}{let A=[3978315,5031250,3121226,6539594,8376650,3450963],Q=new he(.32,.5,4.2,7);Q.translate(0,2.1,0);let K=new $e(3.2,1);K.scale(1,1.08,1),K.translate(0,6.6,0);let it=Xe([new $e(3,1).translate(0,6.2,0),new $e(2.3,0).translate(1.9,5.3,.6),new $e(2.2,0).translate(-1.7,5.5,-.8),new $e(2,0).translate(.2,8.2,.3)].map(cf)),_t=Xe([new ke(3,4.2,8).translate(0,5,0),new ke(2.4,3.6,8).translate(0,7.2,0),new ke(1.6,3,8).translate(0,9.2,0)].map(cf)),lt=Zt.map(Ut=>({x:Ut.x,y:t.heightAt(Ut.x,Ut.z)-.2,z:Ut.z,ry:ie()*6.28,s:Ut.s}));j(Q,mt(9067062),lt,{ol:2,olRef:40,chunk:160,occluder:!0});let Ct=mt(16777215);K.computeVertexNormals(),[K,it,_t].forEach((Ut,Z)=>{let vt=lt.filter((Et,Yt)=>Zt[Yt].kind===Z);j(Ut,Ct,vt,{ol:2.2,olRef:40,colors:vt.map(()=>A[Math.floor(ie()*A.length)]),chunk:160,occluder:!0})}),G.treeCount=Zt.length}{let A=Xe([0,1,2,3].map(lt=>{let Ct=new ke(.09,.55,3);return Ct.translate(0,.27,0),Ct.rotateZ((lt-1.5)*.25),Ct.rotateY(lt*1.7),Ct.translate((lt-1.5)*.08,0,lt%2*.06),Ct.index?Ct.toNonIndexed():Ct})),Q=Xe([new he(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new $e(.13,0).translate(0,.38,0)]),K=[],it=[],_t=[];for(let lt=0;lt<9e3;lt++){let Ct=f[Math.floor(ie()*f.length)],Xt=ie()*6.283,Ut=Fe/2+1+ie()*22,Z=Ct[0]+Math.cos(Xt)*Ut,vt=Ct[1]+Math.sin(Xt)*Ut;if(!x(Z,vt)||T(Z,vt,.5)||!p(Z,vt,.2))continue;let Et=t.heightAt(Z,vt)-.03;ie()<.62?K.push({x:Z,y:Et,z:vt,ry:ie()*6,s:.5+ie()*.6}):(it.push({x:Z,y:Et,z:vt,ry:ie()*6,s:.35+ie()*.25}),_t.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(ie()*6)]))}j(A,mt(5226296),K,{cast:!1,chunk:120}),j(Q,mt(16777215),it,{cast:!1,colors:_t,chunk:120})}let oe=new un({side:nn,depthWrite:!1,fog:!1,uniforms:{top:{value:new ae(3116287)},mid:{value:new ae(9425919)},bot:{value:new ae(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),_e=new Ce(new xe(5e3,32,16),oe);_e.renderOrder=-10,_e.frustumCulled=!1,i.add(_e),o.push(oe,_e.geometry);let et=Xe([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([A,Q,K,it])=>new $e(it,2).translate(A,Q,K)));et.scale(1,.7,.8);let qt=[c.x0+h/2,c.z0+d/2],Tt=[];for(let A=0;A<26;A++){let Q=ie()*6.28,K=300+ie()*1300;Tt.push({x:qt[0]+Math.cos(Q)*K,y:170+ie()*120,z:qt[1]+Math.sin(Q)*K,ry:ie()*6,s:.8+ie()*1.4})}let Dt=j(et,mt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Tt,{ol:1.5,olRef:300,cast:!1}),jt=[];for(let A=0;A<18;A++){let Q=A/18*6.28+ie()*.2,K=1900+ie()*500;jt.push({x:qt[0]+Math.cos(Q)*K,y:-40,z:qt[1]+Math.sin(Q)*K,sx:320+ie()*260,sy:80+ie()*90,sz:260+ie()*200,ry:ie()*6})}j(new xe(1,24,12),mt(7128954),jt,{cast:!1,colors:jt.map((A,Q)=>[8047487,6273413,9425290][Q%3])});function Qt(A){xt.uTime.value=A;for(let Q of Mt)Q.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(A*1.7+Q.ph)*.08,Q.g.rotation.z=Math.sin(A*1.3+Q.ph)*.06,Q.g.rotation.y=Q.a+Math.sin(A*.1+Q.ph)*.4;Dt&&(Dt.position.x=Math.sin(A*.01)*40)}function pe(){a.traverse(A=>{A.geometry&&A.geometry.dispose()});for(let A of o)A.dispose?.();i.remove(a),i.remove(_e)}return{group:a,anchors:G,update:Qt,dispose:pe,inPark:x,clearOf:p,reserve:_,blocked:T,groundTex:N,onPath:te,registerInstanced:M,clearArea:S,redrawGround:O,setOcclusionCorridor:L}}function cf(i){let t=i.index?i.toNonIndexed():i;return t.computeVertexNormals(),t}function Ho(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function He(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var ff=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],uf=[4054148,16727435,16765503,3054591,16777215];function px(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new Bt(Math.max(.001,o),r))}i.unshift(new Bt(.001,0));let e=new rr(i,12);return e.computeVertexNormals(),e}function uc(i,t){let e=gn(99),n=t.length,s=new fe;if(i.add(s),!n)return{update(){},hideWhere(){},dispose(){i.remove(s)},group:s};let r=px(),o=new xe(.15,8,5);o.scale(.8,1.15,.5);let a=new xe(.075,6,4);a.scale(.85,1.2,.5);let l=new xe(.13,6,5),c=new ke(.14,.36,6);c.translate(0,.18,0);let h=new ke(.26,.55,8);h.translate(0,.27,0);let d=new xe(.2,7,5),m=(k,dt,xt,U)=>{let Mt=new Ye(k,dt,xt);return Mt.castShadow=!0,Mt.receiveShadow=!0,Mt.userData.ol=U,s.add(Mt),Mt},u=m(r,mt(16777215),n,2.6),g=m(o,new mn({color:16777215}),n*2,0),_=m(a,new mn({color:1709088}),n*2,0),p=m(l,mt(16777215),n*2,2);g.castShadow=_.castShadow=!1;let f=[m(c,mt(16777215),n,2),m(h,mt(16777215),n,2),m(d,mt(16777215),n,2)],w=[0,0,0],x=new ae,y=t.map((k,dt)=>{let xt=k.colour??ff[Math.floor(e()*ff.length)];u.setColorAt(dt,x.set(xt)),p.setColorAt(dt*2,x),p.setColorAt(dt*2+1,x);let U=e()<.3?-1:Math.floor(e()*3),Mt=-1;return U>=0&&(Mt=w[U]++,f[U].setColorAt(Mt,x.set(uf[Math.floor(e()*uf.length)]))),{...k,s:k.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:U,ti:Mt,wave:e()<.5,ex:.3}});f.forEach((k,dt)=>{k.count=w[dt]});for(let k of[u,p,...f])k.instanceColor&&(k.instanceColor.needsUpdate=!0);let B=new Se().makeScale(0,0,0),T=new Se,I=new Mn,D=new Ln,M=new V,v=new V,b=new Se,L=new Se;function E(k,dt,xt){let U=y[k];if(U.hidden){for(let J of[u])J.setMatrixAt(k,B);for(let J=0;J<2;J++)g.setMatrixAt(k*2+J,B),_.setMatrixAt(k*2+J,B),p.setMatrixAt(k*2+J,B);U.tk>=0&&f[U.tk].setMatrixAt(U.ti,B);return}let Mt=U.ex,kt=dt*U.sp*(.5+Mt*.6)+U.ph,F=Math.max(0,Math.sin(kt))*.32*Mt,G=1-Math.cos(kt*2)*.05*Mt;D.set(0,U.yaw+Math.sin(dt*.8+U.ph)*.25*(1-Mt),Math.sin(kt*.5)*.08*Mt),I.setFromEuler(D),b.compose(M.set(U.x,U.y+F,U.z),I,v.set(U.s/Math.sqrt(G),U.s*G,U.s/Math.sqrt(G))),u.setMatrixAt(k,b);for(let J=0;J<2;J++){let q=J?.19:-.19;L.makeTranslation(q,.86,.5),T.multiplyMatrices(b,L),g.setMatrixAt(k*2+J,T),L.makeTranslation(q*1.02,.84+(Mt>.6?.03:0),.565),T.multiplyMatrices(b,L),_.setMatrixAt(k*2+J,T);let ht=Mt>.55?1:.15+.2*Math.max(0,Math.sin(kt)),pt=U.wave?Math.sin(kt*1.5+J*3)*.25*Mt:0,Rt=(J?1:-1)*(.62+ht*.05+pt*.3),Ht=.45+ht*.85+pt;L.makeTranslation(Rt,Ht,.12),T.multiplyMatrices(b,L),p.setMatrixAt(k*2+J,T)}U.tk>=0&&(L.makeTranslation(0,1.22,0),U.tk===0&&L.multiply(new Se().makeRotationZ(Math.sin(kt)*.3)),T.multiplyMatrices(b,L),f[U.tk].setMatrixAt(U.ti,T))}for(let k=0;k<n;k++)E(k,0,!0);let S=()=>{for(let k of[u,g,_,p,...f])k.instanceMatrix.needsUpdate=!0};S();for(let k of[u,g,_,p,...f]){if(!k.count){k.visible=!1;continue}k.computeBoundingSphere(),k.boundingSphere.radius+=2,k.userData.ol&&Nn(k,k.userData.ol,void 0,18)}function O(k,dt,xt=[],U=null){let Mt=!1;for(let kt=0;kt<n;kt++){let F=y[kt];if(dt&&(F.x-dt.x)**2+(F.z-dt.z)**2>260*260)continue;let G=.25;if(U!=null)G=U;else for(let J of xt){let q=(J.x-F.x)**2+(J.z-F.z)**2;q<45*45&&(G=Math.max(G,1-Math.sqrt(q)/70))}F.ex+=(G-F.ex)*.05,E(kt,k),Mt=!0}Mt&&S()}function N(){for(let k of[r,o,a,l,c,h,d])k.dispose();for(let k of[u,g,_,p,...f])k.dispose();i.remove(s)}function H(k){let dt=!1;for(let xt=0;xt<n;xt++)!y[xt].hidden&&k(y[xt].x,y[xt].z)&&(y[xt].hidden=!0,E(xt,0),dt=!0);dt&&S()}return{update:O,dispose:N,hideWhere:H,group:s,members:y}}function df(i,t,e=5,n=null,s=null){let r=gn(e),o=[];for(let[a,l]of t.entries())for(let c=l.m0;c<=l.m1;c+=l.spacing??1.35){let h=i.sample(c),d=Math.max(1,Math.round(l.depth/1.25));for(let m=0;m<d;m++){if(r()>l.density)continue;let u=l.off+m*1.25+r()*.35,g=(r()-.5)*.6,_=h.x+h.rx*u*l.side+h.tx*g,p=h.z+h.rz*u*l.side+h.tz*g;n&&n(_,p,1.4)||s&&s(_,p,.6)||o.push({zone:a,x:_,y:i.heightAt(_,p),z:p,yaw:Math.atan2(-h.rx*l.side,-h.rz*l.side)+(r()-.5)*.5})}}return o}var pf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},mf=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],mx=3.2,pr=new Map,ne=(i,t)=>(pr.has(i)||pr.set(i,t()),pr.get(i));function gf(){for(let i of pr.values())i.dispose();pr.clear()}function gx(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function xx(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,c=t*.058,h="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let p of[-1,1])i.beginPath(),i.ellipse(o+p*c*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let d=(p,f)=>{if(f==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=h,i.lineWidth=5,i.beginPath();let T=t*.03;i.moveTo(p,a+T*1.1),i.bezierCurveTo(p-T*2.2,a-T*.2,p-T*.9,a-T*1.9,p,a-T*.6),i.bezierCurveTo(p+T*.9,a-T*1.9,p+T*2.2,a-T*.2,p,a+T*1.1),i.fill(),i.stroke();return}if(f==="closed"||f==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),f==="happy"?i.arc(p,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(p-t*.025,a),i.lineTo(p+t*.025,a)),i.stroke();return}if(f==="x"){i.strokeStyle=h,i.lineWidth=8,i.lineCap="round";let T=t*.02;i.beginPath(),i.moveTo(p-T,a-T),i.lineTo(p+T,a+T),i.moveTo(p+T,a-T),i.lineTo(p-T,a+T),i.stroke();return}if(f==="wink"&&p>o&&(f="happy"),f==="wink"&&(f="open"),f==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),i.arc(p,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),i.stroke();return}let w=f==="wide"?1.3:1,x=t*.03*w,y=e*.085*w;i.fillStyle="#fff",i.strokeStyle=h,i.lineWidth=6,i.beginPath(),i.ellipse(p,a,x,y,0,0,7),i.fill(),i.stroke();let B=f==="wide"?.38:.55;i.fillStyle=h,i.beginPath(),i.ellipse(p+x*.15,a+y*.12,x*B,y*B*1.1,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(p+x*.35,a-y*.2,x*.22,0,7),i.fill(),f==="half"&&(i.fillStyle=n,i.fillRect(p-x-4,a-y-4,x*2+8,y*1.05),i.strokeStyle=h,i.lineWidth=7,i.beginPath(),i.moveTo(p-x-2,a-y*.1),i.lineTo(p+x+2,a-y*.1),i.stroke())},m={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(m="happy"),r==="love"&&(m="heart"),r==="dead"&&(m="x"),r==="effort"&&s!=="goofy"&&(m="open");for(let p of[-1,1])d(o+p*c,m);i.strokeStyle=h,i.lineWidth=10,i.lineCap="round";let u=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let p of[-1,1]){let f=o+p*c,w=a-e*.13,x=t*.026,y=f-p*x,B=f+p*x;i.beginPath(),i.moveTo(B,w-u*18),i.lineTo(y,w+u*18),i.stroke()}i.lineWidth=8,i.strokeStyle=h,i.fillStyle="#7a1e2e";let g=o,_=r||"normal";if(_==="happy"||_==="normal"&&s==="grin")i.beginPath(),i.moveTo(g-t*.04,l-e*.02),i.quadraticCurveTo(g,l+e*.12,g+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(_==="effort"){i.fillStyle="#fff",i.beginPath(),He(i,g-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.035,l),i.lineTo(g+t*.035,l);for(let p=-2;p<=2;p++)i.moveTo(g+p*t*.012,l-e*.03),i.lineTo(g+p*t*.012,l+e*.035);i.stroke()}else if(_==="sad"||_==="dead")i.beginPath(),i.moveTo(g-t*.03,l+e*.04),i.quadraticCurveTo(g,l-e*.04,g+t*.03,l+e*.04),i.stroke(),_==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(_==="love"||_==="pant")i.beginPath(),i.ellipse(g,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="gritted"){i.fillStyle="#fff",i.beginPath(),He(i,g-t*.04,l-e*.03,t*.08,e*.06,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.04,l),i.lineTo(g+t*.04,l);for(let p=-2;p<=2;p++)i.moveTo(g+p*t*.014,l-e*.03),i.lineTo(g+p*t*.014,l+e*.03);i.stroke()}else if(s==="tongue-out")i.beginPath(),i.moveTo(g-t*.035,l),i.quadraticCurveTo(g,l+e*.05,g+t*.035,l),i.stroke(),i.fillStyle="#ff6f8a",i.beginPath(),i.ellipse(g+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),i.fill(),i.stroke(),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3,i.beginPath(),i.moveTo(g+t*.008,l+e*.03),i.lineTo(g+t*.01,l+e*.08),i.stroke();else if(s==="wide-eyed")i.beginPath(),i.ellipse(g,l+e*.02,t*.016,e*.04,0,0,7),i.fill(),i.stroke();else if(s==="cheeky")i.beginPath(),i.moveTo(g-t*.04,l-e*.01),i.quadraticCurveTo(g,l+e*.08,g+t*.045,l-e*.035),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.quadraticCurveTo(g+t*.01,l+e*.05,g+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(g-t*.03,l+e*.02);for(let p=0;p<=6;p++)i.lineTo(g-t*.03+p*t*.01,l+e*.02+(p%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(g-t*.04,l),i.quadraticCurveTo(g,l+e*.09,g+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.lineTo(g+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(g-t*.035,l-e*.01),i.quadraticCurveTo(g,l+e*.07,g+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function yx(i,t){return Ke(256,200,(e,n,s)=>{e.fillStyle="#ffffff",He(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${fc}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),je(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function _x(i){return Ke(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")je(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function xf(i,t={}){let e=i.look||{},n=pf[e.build]||pf.compact,s=gx(i.id+(i.nickname||"")),r=gn(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",c=mf[s%mf.length],h=[],d=mt(o),m=mt(a),u=mt(l),g=mt(c),_=new ae(a).getHSL({}).l>.85?"#ffffff":a,p=mt(_),f=mt("#ffffff"),w=mt("#22202c"),x=($,ut,ct=mx)=>ye($,ut,{ol:ct,olRef:9}),y=new fe;y.name=`runner-${i.id}`;let B=new fe;y.add(B);let T=new fe;B.add(T);let I=n.leg/2,D=n.leg+n.shoe[1]*.75;T.position.y=D;let M=x(ne(`shorts${e.build}`,()=>new Me(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),m);M.position.y=.02,T.add(M);let v=new fe;v.position.y=.12,T.add(v);let b=x(ne(`torso${e.build}`,()=>new Me(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),d);b.position.y=n.torso[1]/2,v.add(b);for(let $ of[-1,1]){let ut=ye(ne(`stripe${e.build}`,()=>new Ee(.06,n.torso[1]*.8,n.torso[2]*.7)),mt(a),{cast:!1});ut.position.set($*n.torso[0]*.5,n.torso[1]*.5,0),v.add(ut)}let L=yx(i.lane??0,o);h.push(L);let E=new Ce(ne("bib",()=>new sn(1,.78)),mt(16777215,{map:L})),S=Math.min(.42,n.torso[0]*.6);E.scale.setScalar(S),E.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),v.add(E);let O=new fe;O.position.y=n.torso[1]+.02,v.add(O);let N=new fe;O.add(N);let H=document.createElement("canvas");H.width=1024,H.height=512;let k=new Ms(H);k.colorSpace=tn,k.anisotropy=4,h.push(k);let dt=null,xt=$=>{$!==dt&&(dt=$,xx(H.getContext("2d"),1024,512,l,e.face||"grin",$),k.needsUpdate=!0)};xt("normal");let U=n.head,Mt=x(ne(`head${U}`,()=>new xe(U,32,20).scale(1,.98,.96)),mt(16777215,{map:k}));Mt.position.y=U*.92,N.add(Mt);for(let $ of[-1,1]){let ut=x(ne(`ear${U}`,()=>new xe(U*.2,10,8).scale(.6,1,.8)),u,2.5);ut.position.set($*U*.97,U*.9,0),N.add(ut)}let kt=x(ne(`nose${U}`,()=>new xe(U*.14,10,8)),u,2);kt.position.set(0,U*.84,U*.97),N.add(kt),gt(e.hair,e.hat),P(e.hat);let F=[];for(let $ of[-1,1]){let ut=new fe;ut.position.set($*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),v.add(ut);let ct=x(ne(`sleeve${e.build}`,()=>new xe(n.armR*1.65,14,10)),d);ut.add(ct);let yt=x(ne(`uarm${e.build}`,()=>new Dn(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);ut.add(yt);let wt=new fe;wt.position.y=-n.arm/2+n.armR*.4,ut.add(wt);let St=x(ne(`farm${e.build}`,()=>new Dn(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);wt.add(St);let Pt=x(ne(`hand${e.build}`,()=>new xe(n.hand,14,10).scale(1,1.1,.9)),u);Pt.position.y=-n.arm/2-n.hand*.4,wt.add(Pt),F.push({sh:ut,el:wt,hand:Pt})}let G=[];for(let $ of[-1,1]){let ut=new fe;ut.position.set($*n.torso[0]*.24,0,0),T.add(ut);let ct=x(ne(`thigh${e.build}`,()=>new Dn(n.legR*1.15,I-n.legR,4,10).translate(0,-I/2,0)),u);ut.add(ct);let yt=x(ne(`sleg${e.build}`,()=>new he(n.legR*1.6,n.legR*1.5,I*.5,12).translate(0,-I*.2,0)),m);ut.add(yt);let wt=new fe;wt.position.y=-I,ut.add(wt);let St=x(ne(`shin${e.build}`,()=>new Dn(n.legR,I-n.legR,4,10).translate(0,-I/2,0)),u);wt.add(St);let Pt=x(ne(`sock${e.build}`,()=>new he(n.legR*1.12,n.legR*1.12,I*.25,10).translate(0,-I*.86,0)),mt(16777215),2.5);wt.add(Pt);let $t=new fe;$t.position.y=-I,wt.add($t);let te=x(ne(`shoe${e.build}`,()=>new Me(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),p);$t.add(te);let Zt=ye(ne(`sole${e.build}`,()=>new Me(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),f,{ol:2.5,olRef:9});$t.add(Zt);let ue=ye(ne(`swoosh${e.build}`,()=>new Ee(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),mt(o),{cast:!1});$t.add(ue),G.push({hp:ut,kn:wt,an:$t})}rt(e.accessory);let J=new fe;J.visible=!1;{let $=ye(ne("flossStick",()=>new he(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),mt("#e8d0a0"),{cast:!1}),ut=ye(ne("flossFluff",()=>{let ct=gn(5);return Xe(Array.from({length:7},()=>new $e(.16+ct()*.06,1).translate((ct()-.5)*.22,(ct()-.5)*.22,.72+(ct()-.5)*.2)))}),mt("#ff9bd2"),{ol:2.5,olRef:9});J.add($,ut),J.userData.fluff=ut,J.position.y=-n.arm/2-n.hand*.4,F[0].el.add(J)}function q($,ut){$==="floss"&&(J.visible=ut>0,ut>0&&J.userData.fluff.scale.setScalar(Math.max(.15,ut)))}let ht={},pt=new _o(new Qs({transparent:!0,depthTest:!1}));pt.scale.setScalar(.9),pt.visible=!1,pt.renderOrder=20,y.add(pt);let Rt=$=>{if(!$){pt.visible=!1;return}ht[$]||(ht[$]=_x($),h.push(ht[$])),pt.material.map=ht[$],pt.material.needsUpdate=!0,pt.visible=!0},Ht=D+.12+n.torso[1]+.02+U*2;pt.position.y=Ht+.45;let j=new Set([b,M,Mt,...F.flatMap($=>[$.hand]),...G.map($=>$.an.children[0])]);for(let $ of F)$.sh.children.forEach(ut=>ut.isMesh&&j.add(ut));for(let $ of G)$.hp.children.forEach(ut=>ut.isMesh&&j.add(ut));y.traverse($=>{$.isMesh&&!$.userData.isOutline&&($.castShadow=j.has($))});function gt($,ut){let ct=$||"short";if(ct==="bald")return;let yt=(wt=1.07,St=.48)=>{let Pt=x(ne(`hcap${U}${wt}${St}`,()=>new xe(U*wt,24,14,0,Math.PI*2,0,Math.PI*St)),g);return Pt.position.y=U*.92,Pt.rotation.x=-.32,N.add(Pt),Pt};if(ct==="curly"||ct==="afro"){let wt=ne(`curly${U}`,()=>{let Pt=gn(7),$t=[];for(let te=0;te<26;te++){let Zt=Pt()*Math.PI*.55,ue=Pt()*Math.PI*2,oe=new V(Math.sin(Zt)*Math.cos(ue),Math.cos(Zt),Math.sin(Zt)*Math.sin(ue)).multiplyScalar(U*1.02);oe.z>U*.55&&oe.y<U*.75||$t.push(new $e(U*.33,1).translate(oe.x,oe.y,oe.z-U*.08))}return Xe($t)}),St=x(wt,g);St.position.y=U*.98,ct==="afro"&&(St.scale.setScalar(1.28),St.position.y=U*1.05),N.add(St);return}if(ut==="beanie"||ut==="bucket"||ut==="bobble"){if(yt(1.05,.5),ct==="mullet"||ct==="long"||ct==="ponytail"){let wt=x(ne(`mul${U}`,()=>new Me(U*1.5,U*.9,U*.4,3,U*.15)),g);wt.position.set(0,U*.35,-U*.78),N.add(wt)}return}if(ct==="buzz"){let wt=x(ne(`buzz${U}`,()=>new xe(U*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),g,2);wt.position.y=U*.92,wt.rotation.x=-.32,N.add(wt);return}if(yt(),ct==="quiff"||ct==="swept"){let wt=x(ne(`quiff${U}${ct}`,()=>new xe(U*.55,16,10).scale(ct==="quiff"?1.3:1.7,ct==="quiff"?.75:.45,1)),g);wt.position.set(ct==="swept"?U*.25:0,U*1.82,U*.38),wt.rotation.set(-.5,0,ct==="swept"?-.35:0),N.add(wt)}if(ct==="mullet"){let wt=x(ne(`mul${U}`,()=>new Me(U*1.5,U*.9,U*.4,3,U*.15)),g);wt.position.set(0,U*.35,-U*.78),N.add(wt)}if(ct==="long"){let wt=x(ne(`hlong${U}`,()=>new Me(U*1.8,U*1.6,U*.5,3,U*.2)),g);wt.position.set(0,U*.4,-U*.62),N.add(wt)}if(ct==="ponytail"){let wt=new fe;wt.position.set(0,U*1.35,-U*.85),N.add(wt);for(let St=0;St<3;St++){let Pt=x(ne(`pt${U}${St}`,()=>new xe(U*(.32-St*.05),12,8)),g);Pt.position.set(0,-St*U*.32,-St*U*.18),wt.add(Pt)}N.userData.pony=wt}if(ct==="bun"){let wt=x(ne(`bun${U}`,()=>new xe(U*.38,14,10)),g);wt.position.set(0,U*2,-U*.2),N.add(wt)}if(ct==="mohawk"||ct==="spiky"){let wt=ct==="mohawk"?5:9;for(let St=0;St<wt;St++){let Pt=x(ne(`spk${U}`,()=>new ke(U*.2,U*.7,8)),g),$t=ct==="mohawk"?0:St/wt*Math.PI*2,te=ct==="mohawk"?-.9+St/(wt-1)*1.8:.6;Pt.position.set(Math.sin($t)*Math.sin(te)*U,U*.92+Math.cos(te)*U*1.05,(ct==="mohawk"?Math.sin(te):Math.cos($t)*Math.sin(te))*U),Pt.lookAt(Pt.position.clone().multiplyScalar(3)),Pt.rotateX(Math.PI/2),N.add(Pt)}}}function P($){if(!$)return;let ut=mt(a==="#ffffff"||a==="#f8f8f8"?o:a),ct=mt(o);if($==="backwards-cap"){let yt=x(ne(`capd${U}`,()=>new xe(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ut);yt.position.y=U*.98,yt.rotation.x=-.18,N.add(yt);let wt=x(ne(`brim${U}`,()=>new he(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);wt.position.set(0,U*1.42,-U*.62),wt.rotation.set(-.12,Math.PI,0),N.add(wt)}else if($==="bobble"){let yt=x(ne(`bean${U}`,()=>new xe(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ct);yt.position.y=U*.96,yt.rotation.x=-.12,N.add(yt);let wt=x(ne(`brim2${U}`,()=>new Ge(U*1.05,U*.17,8,24)),ut);wt.rotation.x=Math.PI/2-.12,wt.position.y=U*1.12,N.add(wt);let St=x(ne(`bigbob${U}`,()=>new $e(U*.48,1)),ut);St.position.y=U*2.45,N.add(St),N.userData.bobble=St}else if($==="cap"||$==="visor"){if($==="cap"){let wt=x(ne(`capd${U}`,()=>new xe(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ut);wt.position.y=U*.98,wt.rotation.x=-.18,N.add(wt)}else{let wt=x(ne(`vband${U}`,()=>new Ge(U*1,U*.12,8,24)),ut);wt.rotation.x=Math.PI/2-.25,wt.position.y=U*1.35,N.add(wt)}let yt=x(ne(`brim${U}`,()=>new he(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ct);yt.position.set(0,U*1.42,U*.62),yt.rotation.x=.12,N.add(yt)}else if($==="beanie"){let yt=x(ne(`bean${U}`,()=>new xe(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ut);yt.position.y=U*.96,yt.rotation.x=-.12,N.add(yt);let wt=x(ne(`brim2${U}`,()=>new Ge(U*1.05,U*.17,8,24)),ct);wt.rotation.x=Math.PI/2-.12,wt.position.y=U*1.12,N.add(wt);let St=x(ne(`bob${U}`,()=>new $e(U*.3,1)),ct);St.position.y=U*2.25,N.add(St)}else if($==="headband"||$==="sweatband"){let yt=x(ne(`hb${U}`,()=>new Ge(U*1,U*.13,8,28)),ut);yt.rotation.x=Math.PI/2-.2,yt.position.y=U*1.3,N.add(yt);let wt=x(ne(`hbt${U}`,()=>new Me(U*.2,U*.5,U*.08,2,.02)),ut);wt.position.set(.12,U*1.1,-U*1.05),wt.rotation.z=.5,N.add(wt),N.userData.tail=wt}else if($==="bucket"){let yt=x(ne(`buck${U}`,()=>new he(U*.8,U*1.02,U*.7,20)),ut);yt.position.y=U*1.75,N.add(yt);let wt=x(ne(`buckb${U}`,()=>new he(U*1.5,U*1.5,U*.06,24)),ct);wt.position.y=U*1.42,wt.rotation.x=.1,N.add(wt)}else if($==="crown"||$==="tiara"){let yt=x(ne(`crown${U}`,()=>new he(U*.7,U*.62,U*.5,8,1,!0)),mt("#ffd23f",{side:We}));yt.position.y=U*2,N.add(yt)}else if($==="wizard"||$==="party"){let yt=x(ne(`cone${U}`,()=>new ke(U*.8,U*1.8,16)),ut);yt.position.y=U*2.3,yt.rotation.z=.15,N.add(yt);let wt=x(ne(`bob${U}`,()=>new $e(U*.3,1)),ct);wt.position.set(-U*.12,U*3.15,0),N.add(wt)}else if($==="helmet"||$==="bike_helmet"){let yt=x(ne(`helm${U}`,()=>new xe(U*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),ut);yt.position.y=U*1,N.add(yt)}else if($==="santa"){let yt=x(ne(`santa${U}`,()=>new ke(U*.95,U*1.6,16)),mt("#e8313f"));yt.position.y=U*2.2,yt.rotation.z=.5,N.add(yt);let wt=x(ne(`santar${U}`,()=>new Ge(U*.95,U*.2,8,24)),mt("#ffffff"));wt.rotation.x=Math.PI/2,wt.position.y=U*1.45,N.add(wt)}else{let yt=x(ne(`cone${U}`,()=>new ke(U*.8,U*1.8,16)),ut);yt.position.y=U*2.3,N.add(yt)}}function rt($){if($){if($==="sunglasses"||$==="glasses"){let ut=$==="sunglasses";for(let yt of[-1,1]){let wt=x(ne(`lens${U}${ut}`,()=>new Me(U*.5,U*.32,U*.08,2,U*.06)),ut?mt("#141420"):mt("#cfefff"),2);wt.position.set(yt*U*.3,U*1.02,U*.98),wt.rotation.y=yt*.28,N.add(wt)}let ct=ye(ne(`bridge${U}`,()=>new Ee(U*.3,U*.06,U*.06)),mt("#141420"),{cast:!1});ct.position.set(0,U*1.06,U*1.04),N.add(ct)}else if($==="medal"){let ut=x(ne("ribbon",()=>new Ge(.2,.03,6,20,Math.PI)),mt("#2e9bff"),2);ut.rotation.z=Math.PI,ut.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),ut.rotation.x=-.3,v.add(ut);let ct=x(ne("medal",()=>new he(.11,.11,.04,16).rotateX(Math.PI/2)),mt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);ct.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),v.add(ct),E.position.y-=.1,E.position.x=.12,E.scale.multiplyScalar(.8)}else if($==="headphones"){let ut=x(ne(`hp${U}`,()=>new Ge(U*1.08,U*.07,6,24,Math.PI)),mt("#22202c"),2);ut.position.y=U*.95,N.add(ut);for(let ct of[-1,1]){let yt=x(ne(`hpc${U}`,()=>new he(U*.3,U*.3,U*.2,14).rotateZ(Math.PI/2)),mt(o),2.5);yt.position.set(ct*U*1.02,U*.92,0),N.add(yt)}}else if($==="sweatband"||$==="wristbands"||$==="watch")for(let ut of F){let ct=x(ne(`wb${e.build}`,()=>new he(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),mt($==="watch"?"#22202c":a),2);if(ut.el.add(ct),$==="watch")break}else if($==="scarf"){let ut=x(ne("scarf",()=>new Ge(.22,.08,8,18)),mt(a));ut.rotation.x=Math.PI/2,ut.position.y=.02,O.add(ut);let ct=x(ne("scarft",()=>new Me(.14,.5,.06,2,.03)),mt(a));ct.position.set(.1,-.15,-.25),ct.rotation.x=.5,O.add(ct),N.userData.tail2=ct}else if($==="cape"){let ut=x(ne(`cape${e.build}`,()=>new sn(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),mt(a,{side:We}),2),ct=new fe;ct.position.set(0,n.torso[1],-n.torso[2]/2-.03),ct.add(ut),v.add(ct),N.userData.cape=ct}else if($==="backpack"){let ut=x(ne(`bp${e.build}`,()=>new Me(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),mt(a));ut.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),v.add(ut)}else if($==="moustache"||$==="mustache"){let ut=x(ne(`mou${U}`,()=>new Dn(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),mt("#3a2616"),2);ut.position.set(0,U*.7,U*.98),N.add(ut)}else if($==="beard"){let ut=x(ne(`beard${U}`,()=>new xe(U*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),g,2.5);ut.position.set(0,U*.78,U*.32),N.add(ut);let ct=x(ne(`mou${U}`,()=>new Dn(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),g,2);ct.position.set(0,U*.7,U*.98),N.add(ct)}else if($==="bumbag"){let ut=x(ne(`bum${e.build}`,()=>new Me(n.torso[0]*.5,.2,.18,2,.07)),mt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));ut.position.set(n.torso[0]*.12,.08,n.torso[2]/2+.08),T.add(ut);let ct=ye(ne(`strap${e.build}`,()=>new Ge(n.torso[0]*.48,.025,6,24).scale(1,n.torso[2]/n.torso[0]*1.05,1).rotateX(Math.PI/2)),mt("#22202c"),{cast:!1});ct.position.y=.1,T.add(ct)}else if($==="bib"){let ut=new Ce(ne("bib",()=>new sn(1,.78)),E.material);ut.scale.copy(E.scale),ut.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.012),ut.rotation.y=Math.PI,v.add(ut),E.scale.multiplyScalar(1.3)}else if($==="bowtie")for(let ut of[-1,1]){let ct=x(ne("bow",()=>new ke(.08,.16,4).rotateZ(Math.PI/2)),mt(a),2);ct.position.set(ut*.08,n.torso[1]-.06,n.torso[2]/2+.03),ct.rotation.z=ut>0?Math.PI:0,v.add(ct)}else if($==="tutu"){let ut=x(ne(`tutu${e.build}`,()=>new he(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),mt("#ff9bd2",{side:We}),2);ut.position.y=-.05,T.add(ut)}}}let tt={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},bt=tt.j,Lt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let $ of Lt)bt[$]=0;let Y={},Nt="idle",z=null,C=0;function ft($,ut=null){($!==Nt||ut!==z)&&(Nt=$,z=ut,C=0)}function At($,ut={}){tt.t+=$,C+=$;let ct=tt.t;for(let Pt of Lt)Y[Pt]=0;let yt="normal",wt=10;if(Nt==="run"||Nt==="jog"||Nt==="trudge"||Nt==="distracted"){let Pt=Math.max(.5,ut.speed??3.5),$t=Math.max(.2,ut.rate??1),te=Nt==="trudge",Zt=te?1.7:(2.55+.14*(Pt-3.5))*Math.pow($t,.3)*(Nt==="jog"?.8:1);tt.phase+=$*Math.PI*Zt;let ue=tt.phase,oe=Math.sin(ue),_e=Math.cos(ue),et=te?.4:Math.max(.45,Math.min(1,.62+.13*(Pt-3.5)));Y.hipLx=-et*oe,Y.hipRx=et*oe,Y.kneeL=.2+(te?.5:1.35)*Math.max(0,_e)*(.7+et*.3),Y.kneeR=.2+(te?.5:1.35)*Math.max(0,-_e)*(.7+et*.3),Y.ankL=-.2*oe,Y.ankR=.2*oe;let qt=te?.3:.75*et+.15;Y.shLx=qt*oe,Y.shRx=-qt*oe,Y.shLz=-.18,Y.shRz=.18,Y.elL=te?-.5:-1.5,Y.elR=te?-.5:-1.5,Y.twist=.16*oe,Y.roll=.05*oe,Y.bob=(te?.03:.11)*(Math.abs(_e)-.4),Y.lean=(te?.05:.16)+Math.max(-.25,Math.min(.45,(ut.slope??0)*1.6)),Y.headX=-Y.lean*.6,Y.headY=-.08*oe,wt=18,yt=ut.effort>.6?"effort":ut.effort>.3?"pant":"normal",te&&(Y.headX=.35,Y.lean=.25,yt="sad"),Nt==="distracted"&&(Y.headY=ut.lookYaw??.9,Y.headX=-.15,Y.twist+=(ut.lookYaw??.9)*.3,yt="love")}else if(Nt==="ready")Y.hipLx=-.5,Y.hipRx=.35,Y.kneeL=.6,Y.kneeR=.5,Y.lean=.35,Y.bob=-.12,Y.shLx=.5,Y.shRx=-.6,Y.elL=-1.3,Y.elR=-1.3,Y.headX=-.25,Y.bob+=Math.sin(ct*3)*.01,yt="effort";else if(Nt==="wave")Y.shRz=2.7,Y.elR=.2*Math.sin(ct*9)-.25,Y.shRx=Math.sin(ct*9)*.25,Y.shLz=-.3,Y.elL=-.4,Y.bob=Math.abs(Math.sin(ct*4))*.05,Y.headY=.1*Math.sin(ct*2),yt="happy";else if(Nt==="pose"){let Pt=z||"flex";if(Pt==="flex")Y.shLz=-1.5,Y.shRz=1.5,Y.elL=-1.9-Math.sin(ct*6)*.15,Y.elR=-1.9-Math.sin(ct*6+1)*.15,Y.shLx=-0,Y.bob=-.06+Math.abs(Math.sin(ct*3))*.03,Y.hipSpread=.25,Y.kneeL=.3,Y.kneeR=.3,yt="effort";else if(Pt==="point")Y.shRx=-1.5,Y.elR=0,Y.shLz=-.3,Y.elL=-1.6,Y.shLx=-.3,Y.headX=-.1,Y.lean=-.05,yt="happy",Y.bob=Math.sin(ct*5)*.02;else if(Pt==="stretch")Y.hipRx=-.2,Y.kneeR=2.3,Y.shRx=.8,Y.elR=-.6,Y.shLz=-2.6,Y.lean=.08+Math.sin(ct*2)*.04,yt="smug";else if(Pt==="spin"){let $t=Math.min(1,C/1.1);Y.bodyY=(1-(1-$t)**2)*Math.PI*4,Y.shLz=$t<1?-1.3:-2.6,Y.shRz=$t<1?1.3:2.6,Y.bob=$t<1?Math.abs(Math.sin(ct*7))*.2:Math.abs(Math.sin(ct*5))*.12,yt="happy"}else Pt==="bow"?(Y.lean=.75+Math.sin(ct*2)*.05,Y.shLx=.4,Y.shRx=-1.2,Y.elR=-1.6,Y.shRz=.4,Y.headX=-.2,yt="happy"):(Y.shLz=-2.5,Y.shRz=2.5,Y.bob=Math.abs(Math.sin(ct*6))*.25,yt="happy");yt==="smug"&&(yt="normal")}else if(Nt==="celebrate"){let Pt=z||"jump";if(Pt==="jump"){let $t=Math.abs(Math.sin(ct*5.5));Y.bob=$t*.55,Y.shLz=-2.6-$t*.3,Y.shRz=2.6+$t*.3,Y.elL=-.2,Y.elR=-.2,Y.kneeL=Y.kneeR=(1-$t)*.8,Y.hipLx=Y.hipRx=-(1-$t)*.4,yt="happy",wt=22}else if(Pt==="fist"){let $t=Math.sin(ct*7);Y.shRx=-2.6,Y.elR=-.4+$t*.4,Y.shLx=.4,Y.elL=-1.8,Y.bob=Math.abs($t)*.08,Y.lean=-.1,yt="happy"}else Pt==="kneel"?(Y.lean=.85,Y.kneeL=Y.kneeR=.7,Y.hipLx=Y.hipRx=-.6,Y.bob=-.25+Math.sin(ct*7)*.025,Y.shLx=Y.shRx=-.55,Y.elL=Y.elR=-.1,Y.shLz=-.15,Y.shRz=.15,Y.headX=-.6,yt="pant"):Pt==="collapse"?(Y.bodyX=-Math.PI/2+.05,Y.shLz=-2.2,Y.shRz=2.2,Y.hipSpread=.4,Y.kneeL=.3+Math.max(0,Math.sin(ct*9))*.4*(Math.sin(ct*.7)>.6?1:0),Y.kneeR=.2,yt="dead",wt=4):Pt==="shrug"&&(Y.shLz=-.9,Y.shRz=.9,Y.elL=-1.4,Y.elR=-1.4,Y.shLx=-.5,Y.shRx=-.5,Y.headX=.1,Y.headY=Math.sin(ct*1.5)*.3,yt="sad")}else Y.bob=Math.sin(ct*2)*.015,Y.shLz=-.18,Y.shRz=.18,Y.elL=-.25,Y.elR=-.25,Y.headY=Math.sin(ct*.7)*.25,Y.lean=.02,Y.kneeL=Y.kneeR=.05;ut.lookYaw!=null&&Nt!=="distracted"&&(Y.headY+=ut.lookYaw);let St=1-Math.exp(-wt*$);for(let Pt of Lt){if(Pt==="bodyY"&&Nt==="pose"&&z==="spin"){bt[Pt]=Y[Pt];continue}bt[Pt]+=(Y[Pt]-bt[Pt])*St}if(Nt==="pose"&&z==="spin"||(bt.bodyY=bt.bodyY%(Math.PI*2),bt.bodyY>Math.PI&&(bt.bodyY-=Math.PI*2)),G[0].hp.rotation.set(bt.hipLx,0,-bt.hipSpread),G[1].hp.rotation.set(bt.hipRx,0,bt.hipSpread),G[0].kn.rotation.x=bt.kneeL,G[1].kn.rotation.x=bt.kneeR,G[0].an.rotation.x=bt.ankL-bt.kneeL*.35,G[1].an.rotation.x=bt.ankR-bt.kneeR*.35,F[0].sh.rotation.set(bt.shLx,0,bt.shLz-0),F[1].sh.rotation.set(bt.shRx,0,bt.shRz),F[0].el.rotation.x=bt.elL,F[1].el.rotation.x=bt.elR,v.rotation.set(bt.lean,bt.twist,0),T.rotation.set(0,-bt.twist*.5,bt.roll),T.position.y=D+bt.bob,N.rotation.set(bt.headX,bt.headY,0),B.rotation.set(bt.bodyX,bt.bodyY,bt.bodyZ),B.position.y+=((Nt==="celebrate"&&z==="collapse"?n.torso[2]*.5+.08:0)-B.position.y)*St,N.userData.bobble&&(N.userData.bobble.position.y=U*2.45+Math.abs(Math.sin(tt.phase))*.04),N.userData.pony&&(N.userData.pony.rotation.x=.4+Math.sin(tt.phase*2)*.35),N.userData.tail&&(N.userData.tail.rotation.x=.6+Math.sin(tt.phase*2)*.3),N.userData.cape&&(N.userData.cape.rotation.x=-.3-Math.min(1.1,(ut.speed??0)*.15)+Math.sin(ct*8)*.08),ut.expr&&(yt=ut.expr),xt(yt),pt.visible){pt.position.y=Ht+.45+Math.sin(ct*6)*.08;let Pt=.9+Math.sin(ct*9)*.05;pt.scale.set(Pt,Pt,Pt)}}function It(){for(let $ of h)$.dispose?.();pt.material.dispose()}return{id:i.id,info:i,root:y,update:At,set:ft,setPop:Rt,setExpr:xt,setProp:q,dispose:It,height:Ht,hipH:D,get state(){return Nt},get variant(){return z}}}var yf=[1720,4220];function As(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function Si(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function Rs(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function Vo(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}var vx=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function _f(i,t,e){let n=i.timeMap,s={};e.forEach((M,v)=>s[M.id]=M.lane??v+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Fe-1.6)/Math.max(1,r-1)),c=i.runners.map((M,v)=>{let b=Rs(n,M.officialS),L=((s[M.id]??v+1)-a)*l;return{...M,finishB:b,base:L,seed:v*1.7+.3}}),h=Object.fromEntries(c.map(M=>[M.id,M])),d=[...c].sort((M,v)=>M.officialS-v.officialS).map(M=>M.id),m=Object.fromEntries(d.map((M,v)=>[M,v+1])),u=h[d[0]],g=d.map(M=>h[M].officialS),_=h[d[0]].finishB,p=h[d.at(-1)].finishB,f=r>1&&g[1]-g[0]<=1.5,w=M=>Math.max(.05,(Vo(n,M+.05)-Vo(n,M-.05))/.1),x=new Map;function y(M){let v=Math.round(M*1e3);if(x.has(v))return x.get(v);let b=M<=0?0:Vo(n,M),L=M<=0?4:w(M),E={b:M,raceS:b,rate:L,byId:{},order:[]};for(let H of c){let k=As(H.progress,b),dt=b>=H.officialS&&M>=H.finishB-1e-6,xt=(As(H.progress,b+1)-As(H.progress,Math.max(0,b-1)))/(b>1?2:1);E.byId[H.id]={id:H.id,m:k,finished:dt,vRace:dt?0:xt,place:m[H.id]}}for(let H of c){let k=E.byId[H.id],dt=k.m,xt=H.base;xt+=.22*Math.sin(k.m/85+H.seed);for(let kt of c){if(kt===H)continue;let F=E.byId[kt.id],G=k.m-F.m;if(Math.abs(G)<4&&!k.finished&&!F.finished){let J=(1-Math.abs(G)/4)*.32;xt+=Math.sign(H.base-kt.base||H.seed-kt.seed)*J}}let U=0;if(k.finished){let kt=M-H.finishB,F=(As(H.progress,H.officialS)-As(H.progress,H.officialS-2))/2*w(H.finishB),G=Math.min(14,Math.max(4,F)),J=1.6;dt=5e3+(kt<J?G*(kt-kt*kt/(2*J)):G*J/2+Math.min(10+m[H.id]*1.5,(kt-J)*.9));let ht=(m[H.id]-(r+1)/2)*1.6;xt=xt+(ht-xt)*vx(0,2.5,kt),U=kt}let Mt=t.sample(dt,H.id);xt*=1-Mt.div,xt=Math.max(-Fe/2+.6,Math.min(Fe/2-.6,xt)),Object.assign(k,{mVis:dt,x:Mt.x+Mt.rx*xt,z:Mt.z+Mt.rz*xt,y:t.heightAt(Mt.x+Mt.rx*xt,Mt.z+Mt.rz*xt)+.16,tx:Mt.tx,tz:Mt.tz,slope:Mt.slope,div:Mt.div,divInfo:Mt.divInfo,lat:xt,post:U,distToFinish:Math.max(0,5e3-k.m)})}let S=c.filter(H=>E.byId[H.id].finished).sort((H,k)=>H.officialS-k.officialS),O=c.filter(H=>!E.byId[H.id].finished).sort((H,k)=>E.byId[k.id].m-E.byId[H.id].m||H.officialS-k.officialS);E.order=[...S,...O].map(H=>H.id),E.leader=E.byId[E.order[0]];let N=h[E.order[0]];for(let[H,k]of E.order.entries()){let dt=E.byId[k];if(dt.finished)dt.gapText=H===0?Go(h[k].officialS):`+${(h[k].officialS-u.officialS).toFixed(0)}s`;else if(H===0)dt.gapText="LEADER";else{let xt=E.byId[E.order[0]].finished?u:N;dt.gapText=`+${Math.max(0,b-Si(xt.progress,dt.m)).toFixed(1)}s`}}return x.size>400&&x.clear(),x.set(v,E),E}return{stateAt:y,orderAt:M=>y(M).order,gapM:(M,v,b)=>{let L=y(b);return Math.abs((L.byId[M]?.m??0)-(L.byId[v]?.m??0))},finishedAt:(M,v)=>y(v).byId[M]?.finished,allFinishedAt:M=>M>p,firstFinishB:_,lastFinishB:p,photoFinish:f,finishOrder:d,place:m,byId:h,R:c,rateAt:w,durationS:n.durationS}}function Go(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}var Mx=1.3,bx=2.4,Sx=.24,Ex=16/9,Mf=i=>i*180/Math.PI,vf=(i,t=Sx)=>Mf(2*Math.atan(bx/(2*t*i)));function dc({plan:i,sim:t,backedIds:e=[],C:n,world:s,funfair:r}){let o=[],a=i.timeMap,l=S=>Rs(a,Math.min(...i.runners.map(O=>Si(O.progress,S)))),c=S=>S<=0?4:t.rateAt(S),h=(S,O)=>{let N=0,H=0;for(let k=S;k<=O;k+=Math.max(.5,(O-S)/12))N+=c(k),H++;return N/Math.max(1,H)},d=t.firstFinishB,m=t.lastFinishB,u=S=>{let O=t.stateAt(Math.max(0,S)),N=O.order.filter(k=>!O.byId[k].finished),H=N[0]??O.order[0];return(N.length?N:O.order).filter(k=>Math.abs(O.byId[k].m-O.byId[H].m)<120)},g=S=>{let O=t.stateAt(Math.max(0,S)),N=O.order.filter(k=>!O.byId[k].finished),H=N[0]??O.order[0];return(N.length?N:O.order).filter(k=>Math.abs(O.byId[k].m-O.byId[H].m)<20)},_=(S,O)=>{let N=t.stateAt(Math.max(0,O));return N.order.filter(H=>!N.byId[H].finished&&Math.abs(N.byId[H].m-N.byId[S].m)<20)},p=.25+8;for(let S=.25;S<30;S+=.25)if(c(S)>7){p=Math.max(p,S);break}let f=d-6;for(let S=d-6;S>p;S-=.25)if(c(S)>6){f=S;break}let w=Math.max(f,Math.min(d-6,l(4700)));o.push({type:"heli",a:-8.5,b:-3.2,hard:!0}),o.push({type:"startgo",a:-3.2,b:.25}),o.push({type:"side",a:.25,b:p,hard:!0,ids:null});let x=[],y=i.runners.find(S=>S.diversions?.length);if(y&&r){let S=y.diversions[0],O=Rs(a,Si(y.progress,S.fromM))-.5,N=Rs(a,Si(y.progress,S.toM))+.8;x.push({type:"side",tag:"fair",a:O,b:Math.max(O+8,N),ids:[y.id],fair:!0,prio:3})}for(let S of yf){let O=l(S);x.push({type:"headon",tag:"hill",a:O-1.5,b:O+8,prio:2})}x.sort((S,O)=>O.prio-S.prio);let B=[];for(let S of x){let O=Math.min(f,S.b),N=Math.max(p,Math.min(S.a,O-8));O-N<6||B.some(H=>N<H.b&&O>H.a)||B.push({...S,a:N,b:O})}B.sort((S,O)=>S.a-O.a);let T=["side","drone","headon"],I=0,D=0,M=(S,O)=>{let N=O-S;if(N<=.01)return;if(N<8&&o.length>=3){o.at(-1).b=O;return}let H=Math.max(1,Math.round(N/11));for(let k=0;k<H;k++){let dt=S+N*k/H,xt=S+N*(k+1)/H,U=(dt+xt)/2,Mt=T[I++%T.length];Mt===o.at(-1)?.type&&(Mt=T[I++%T.length]);let kt=t.stateAt(U),F=kt.byId[kt.order[0]],G=e.filter(q=>kt.byId[q]&&!kt.byId[q].finished&&F.m-kt.byId[q].m>40),J=null;G.length&&D++%2===0&&(J=_(G[D%G.length],U),Mt=Mt==="drone"?"side":Mt),o.push({type:Mt,a:dt,b:xt,ids:J})}},v=p;for(let S of B)M(v,S.a),o.push(S),v=S.b;M(v,f);{let S=w-f;if(S>=8){let O=Math.max(1,Math.round(S/11));for(let N=0;N<O;N++)o.push({type:N%2?"headon":"side",a:f+S*N/O,b:f+S*(N+1)/O})}o.at(-1).type==="headon"&&o.at(-1).a>=f?o.at(-1).b=d-6:o.push({type:"headon",a:Math.max(f,o.at(-1).b),b:d-6})}if(o.at(-1).b-o.at(-1).a<6&&o.length>4){let S=o.pop();o.at(-1).b=S.b}o.push({type:"finishcam",a:d-6,b:m+2.5,hard:!0}),o.push({type:"celebrate",a:m+2.5,b:m+90});let b=(i.events||[]).filter(S=>(S.type==="lead_change"||S.type==="overtake"&&(e.includes(S.by)||e.includes(S.on)))&&S.broadcastS>p+2&&S.broadcastS<f-3),L=-1e9;for(let S of b){let O=S.type==="lead_change"?[S.to,S.from]:[S.by,S.on];if(S.broadcastS-L<12)continue;let N=o.findIndex(dt=>S.broadcastS>=dt.a&&S.broadcastS<dt.b);if(N<0)continue;let H=o[N];if(["heli","startgo","finishcam","celebrate","drone"].includes(H.type)||H.interrupt||H.tag||H.hard)continue;let k=H.ids||g((H.a+H.b)/2);if(!O.every(dt=>k.includes(dt))){if(S.broadcastS-H.a<8||H.b-S.broadcastS<8)Object.assign(H,{type:"side",ids:O,interrupt:S.type});else{let dt=S.broadcastS-1.8;o.splice(N,1,{...H,b:dt},{type:"side",a:dt,b:H.b,ids:O,interrupt:S.type})}L=S.broadcastS}}for(let S of o)if(S.rate=h(Math.max(0,S.a),Math.max(.5,S.b)),S.ids=S.ids||null,S.type==="side"||S.type==="headon"||S.type==="drone"){let O=S.ids||(S.type==="drone"?u((S.a+S.b)/2):g((S.a+S.b)/2));S.type==="drone"&&!S.ids&&(S.pack=!0);let N=0;for(let H=0;H<=6;H++){let k=t.stateAt(Math.max(0,S.a+(S.b-S.a)*H/6)),dt=O.map(xt=>k.byId[xt]).filter(xt=>xt&&!xt.finished).map(xt=>xt.m);dt.length&&(N=Math.max(N,Math.max(...dt)-Math.min(...dt)))}if(S.spread=N,S.type==="side"){S.dist=vi.clamp(14+1.7*S.rate,18,48);let H=vf(S.dist),k=N+7,dt=Mf(2*Math.atan(k/(2*Ex*S.dist)));S.fov=vi.clamp(Math.max(H,dt),10,34),S.side=E(S,O)}else S.type==="headon"?(S.dist=vi.clamp(16+1.9*S.rate,20,52)+N*.6,S.fov=vi.clamp(vf(S.dist-N*.3,.2),10,30)):(S.back=30+2.2*S.rate+N*.35,S.height=16+1.9*S.rate+N*.25,S.fov=40,S.side=E(S,O))}return o;function E(S,O){let N=q=>{let ht=t.stateAt(Math.max(0,q)),pt=O.map(j=>ht.byId[j]).filter(Boolean),Rt=pt.reduce((j,gt)=>j+gt.x,0)/pt.length,Ht=pt.reduce((j,gt)=>j+gt.z,0)/pt.length;return[Rt,Ht]},H=N(S.a),k=N((S.a+S.b)/2),dt=N(S.b),xt=(k[0]-H[0])*(dt[1]-k[1])-(k[1]-H[1])*(dt[0]-k[0]),U=S.fair?null:xt>0?1:-1;if(S.fair&&r){let q=r.anchors.center,ht=[dt[0]-H[0],dt[1]-H[1]],pt=[-ht[1],ht[0]];return U=(q.x-k[0])*pt[0]+(q.z-k[1])*pt[1]>0?-1:1,U}let Mt=[dt[0]-H[0],dt[1]-H[1]],kt=Math.hypot(...Mt)||1,F=[-Mt[1]/kt,Mt[0]/kt],G=S.dist||40,J=q=>s.inPark(k[0]+F[0]*G*q,k[1]+F[1]*G*q);return!J(U)&&J(-U)&&(U=-U),U}}function bf({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new V,look:new V},o=new V(0,1,0),a=null,l=null,c=!0,h=null,d=new Mn,m=new Se;function u(x,y){let B=e.stateAt(Math.max(0,y)),T=(x||B.order.slice(0,1)).map(M=>B.byId[M]).filter(Boolean),I=T.filter(M=>!M.finished);I.length&&(T=I);let D=new V;for(let M of T)D.add(new V(M.x,M.y,M.z));return D.divideScalar(Math.max(1,T.length))}function g(x,y,B){let T=u(x,y),I=u(x,y-B*1.5),D=u(x,y+B*1.5),M=new V(D.x-I.x,0,D.z-I.z);if(M.lengthSq()<1e-4){let v=x?.[0]??e.stateAt(Math.max(0,y)).order[0],b=e.stateAt(Math.max(0,y)).byId[v];M.set(b.tx,0,b.tz)}return M.normalize(),{c:T,h:M,r:new V(-M.z,0,M.x)}}let _=(x,y)=>{if(x.ids)return x.ids;if(!x._group){let B=(x.a+x.b)/2,T=e.stateAt(Math.max(0,B)),I=T.order.filter(M=>!T.byId[M].finished),D=I[0]??T.order[0];x._group=(I.length?I:T.order).filter(M=>Math.abs(T.byId[M].m-T.byId[D].m)<(x.pack?120:20)),x._group.length||(x._group=[D])}return x._group};function p(x,y){let B=n.anchors.finish,T=n.anchors.start,I,D,M=40,v=x.rate>8?2.2:1.2;switch(x.type){case"heli":{let b=(y-x.a)/Math.max(.01,x.b-x.a),L=new V(150,0,0),E=new V(T.x,T.y,T.z),S=pc(Math.min(1,b)),O=-1.2+S*1.6,N=420-S*360;I=new V(L.x+Math.cos(O)*N,170-S*140,L.z+Math.sin(O)*N).lerp(new V(E.x-T.tx*40+T.rx*25,E.y+22,E.z-T.tz*40+T.rz*25),S*S),D=L.clone().setY(10).lerp(E,Math.min(1,S*1.3)),M=50;break}case"startgo":{let b=new V(T.x,T.y,T.z),L=new V(T.tx,0,T.tz),E=new V(-L.z,0,L.x);I=b.clone().addScaledVector(L,10.5).addScaledVector(E,2.6).add(o.clone().multiplyScalar(1.9)),D=b.clone().add(o.clone().multiplyScalar(1.3)).addScaledVector(L,-1),M=42;break}case"side":{let{c:b,h:L,r:E}=g(_(x,y),y,v);I=b.clone().addScaledVector(E,x.side*x.dist).addScaledVector(L,x.dist*.18).add(o.clone().multiplyScalar(2.5+x.dist*.2)),D=b.clone().add(o.clone().multiplyScalar(1.1)),M=x.fov;break}case"headon":{let{c:b,h:L,r:E}=g(_(x,y),y,v);I=b.clone().addScaledVector(L,x.dist).addScaledVector(E,1.5).add(o.clone().multiplyScalar(2+x.dist*.16)),D=b.clone().add(o.clone().multiplyScalar(1.15)),M=x.fov;break}case"drone":{let{c:b,h:L,r:E}=g(_(x,y),y,v*1.3);I=b.clone().addScaledVector(L,-x.back).addScaledVector(E,x.side*x.back*.5).add(o.clone().multiplyScalar(x.height)),D=b.clone().addScaledVector(L,x.back*.15),M=x.fov;break}case"finishcam":{let b=new V(B.tx,0,B.tz),L=new V(-b.z,0,b.x);I=new V(B.x,B.y,B.z).addScaledVector(b,16).addScaledVector(L,-4).add(o.clone().multiplyScalar(2.6));let E=e.stateAt(Math.max(0,y)),S=E.order.map(N=>E.byId[N]).find(N=>!N.finished),O=new V(B.x,B.y+2.2,B.z);D=S?O.clone().lerp(new V(S.x,S.y+1.3,S.z),Math.min(.8,18/Math.max(18,S.distToFinish))):O,M=34,x.smoothLook=!0;break}case"celebrate":{let b=e.stateAt(Math.max(0,y)),L=new V;for(let N of b.order)L.add(new V(b.byId[N].x,b.byId[N].y,b.byId[N].z));L.divideScalar(b.order.length);let E=new V(B.tx,0,B.tz),S=new V(-E.z,0,E.x),O=Math.sin((y-x.a)*.08)*.5;I=L.clone().addScaledVector(E,-11*Math.cos(O)).addScaledVector(S,11*Math.sin(O)).add(o.clone().multiplyScalar(2.8)),D=L.clone().add(o.clone().multiplyScalar(1.2)),M=44;break}default:{let{c:b,h:L}=g(_(x,y),y,v);I=b.clone().addScaledVector(L,-12).add(o.clone().multiplyScalar(5)),D=b.clone()}}return{pos:I,look:D,fov:M}}function f(x,y,B){let T=B.find(E=>x>=E.a&&x<E.b)||B.at(-1),I=!1;if(T!==a){let E=c||!!T.hard;l=E?null:{from:{pos:i.position.clone(),look:r.look.clone(),fov:i.fov},t0:x},I=E,c=!1,a=T,h=null}let D=p(T,x),M=t.heightAt(D.pos.x,D.pos.z)+1.2;D.pos.y<M&&(D.pos.y=M),T.smoothLook&&((!h||y<=0)&&(h=h||D.look.clone()),h.lerp(D.look,1-Math.exp(-3*y)),D.look.copy(h)),m.lookAt(D.pos,D.look,o),d.setFromRotationMatrix(m);let v=D.pos,b=d,L=D.fov;if(l){let E=(x-l.t0)/Mx;if(E>=1||E<0)l=null;else{let S=E*E*E*(E*(E*6-15)+10),O=Math.sin(Math.PI*S)*Math.min(12,l.from.pos.distanceTo(D.pos)*.12);v=l.from.pos.clone().lerp(D.pos,S).add(o.clone().multiplyScalar(O));let N=l.from.look.clone().lerp(D.look,S);m.lookAt(v,N,o),b=new Mn().setFromRotationMatrix(m),L=l.from.fov+(D.fov-l.from.fov)*S}}return r.pos.copy(D.pos),r.look.copy(D.look),i.position.copy(v),i.quaternion.copy(b),Math.abs(i.fov-L)>.001&&(i.fov=L,i.updateProjectionMatrix()),{shot:T,cut:I}}function w(x=!0){a=null,l=null,c=!!x,h=null}return{update:f,reset:w,evaluate:p,get shot(){return a},get gliding(){return!!l},cam:r}}function pc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var mr=new Set(["drone","heli"]);var wx=`
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:"Lilita One","Arial Black",Impact,sans-serif;color:#fff;
  --ink:#1a1420;--blue:#2e6fe0;--blue2:#1d4fb8;--yellow:#ffd23f;--pink:#ff3d8b;--u:calc(min(1vw,1.78vh));letter-spacing:.02em}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(-10deg);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.35)}
.mr-panel>.mr-unskew{transform:skewX(10deg)}
.mr-top{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex}
.mr-pill{display:flex;align-items:center;gap:calc(var(--u)*.7);background:rgba(20,22,48,.78);border-radius:99px;padding:calc(var(--u)*.35) calc(var(--u)*1.1);font-size:calc(var(--u)*1.35);line-height:1.2}
.mr-pill b{font-weight:400;color:var(--yellow)}
.mr-pill .mr-dot{width:calc(var(--u)*.7);height:calc(var(--u)*.7);border-radius:50%;background:#ff3d5a;display:inline-block}
.mr-pill .mr-sep{width:1px;align-self:stretch;background:rgba(255,255,255,.3)}
.mr-pill .mr-clk{font-family:Nunito,sans-serif;font-weight:800;font-size:.8em;opacity:.65}
.mr-live{background:var(--pink);padding:calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*1.5);display:flex;align-items:center;gap:calc(var(--u)*.5)}
.mr-live i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff;display:inline-block;animation:mrblink 1s infinite}
@keyframes mrblink{50%{opacity:.25}}
.mr-clock{padding:calc(var(--u)*.2) calc(var(--u)*1.4);font-size:calc(var(--u)*2.9);line-height:1.1;min-width:calc(var(--u)*12);text-align:center}
.mr-lap{padding:calc(var(--u)*.2) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*1.4)}
.mr-lap b{font-size:calc(var(--u)*2.9);font-weight:400}
.mr-dist{padding:calc(var(--u)*.3) calc(var(--u)*1.2);font-size:calc(var(--u)*1.4);display:flex;flex-direction:column;justify-content:center;min-width:calc(var(--u)*11)}
.mr-bar{height:calc(var(--u)*.7);background:rgba(0,0,0,.35);border-radius:9px;margin-top:calc(var(--u)*.3);overflow:hidden;border:2px solid var(--ink)}
.mr-bar>i{display:block;height:100%;background:var(--yellow);width:0}
.mr-tower{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*5.2);width:calc(var(--u)*19)}
.mr-row{position:absolute;left:0;width:100%;height:calc(var(--u)*2.9);display:flex;align-items:center;transition:transform .55s cubic-bezier(.3,1.2,.5,1),opacity .35s}
.mr-row.off{opacity:0}
.mr-row .mr-pos{width:calc(var(--u)*3.8);font-size:calc(var(--u)*2.2);text-align:center;line-height:1}
.mr-row .mr-pos small{font-size:.42em;margin-right:2px;vertical-align:middle;color:#fff}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;min-width:0;height:calc(var(--u)*2.4);display:flex;align-items:center;padding:0 calc(var(--u)*.6) 0 0;background:rgba(20,22,48,.72);border-radius:calc(var(--u)*.45);transform:skewX(-10deg);overflow:hidden}
.mr-row .mr-card>*{transform:skewX(10deg)}
.mr-row .mr-chip{width:calc(var(--u)*.8);align-self:stretch;margin-right:calc(var(--u)*.6)}
.mr-row .mr-name{flex:1;min-width:0;font-size:calc(var(--u)*1.25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:Nunito,"Arial Rounded MT Bold",sans-serif;font-weight:900;font-size:calc(var(--u)*.95);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-flex;align-items:center;gap:.2em;background:var(--bc,#fff);color:var(--ink);border:calc(var(--u)*.18) solid var(--ink);border-radius:99px;font-size:calc(var(--u)*1.05);padding:.05em .55em;margin-left:calc(var(--u)*.35);line-height:1.2;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35);white-space:nowrap}
.mr-inis{display:inline-flex;gap:calc(var(--u)*.2);margin-left:calc(var(--u)*.4);flex-shrink:0}
.mr-ini{display:inline-flex;align-items:center;justify-content:center;width:calc(var(--u)*1.25);height:calc(var(--u)*1.25);border-radius:50%;background:var(--bc);color:var(--ink);font-family:Nunito,sans-serif;font-weight:900;font-size:calc(var(--u)*.8);line-height:1;border:1px solid rgba(26,20,32,.6)}

.mr-tag .mr-tb{display:inline-flex;gap:calc(var(--u)*.15)}
.mr-title{position:absolute;left:41%;top:9%;width:max-content;max-width:64%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:all .6s cubic-bezier(.3,1.5,.5,1)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-title .mr-t1{display:block;white-space:normal;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*5.2);line-height:1.02;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(-10deg)}
.mr-pcap{position:absolute;left:50%;bottom:19%;transform:translateX(-50%) skewX(-10deg);background:var(--ink);color:#fff;border:calc(var(--u)*.3) solid #fff;padding:calc(var(--u)*.4) calc(var(--u)*2);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity .5s;background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:60%;top:15%;transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:calc(var(--u)*.45) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.35) calc(var(--u)*1.8);font-size:calc(var(--u)*3.5);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.7) 0 rgba(0,0,0,.35);animation:mrpulse 1.6s ease-in-out infinite}
@keyframes mrpulse{50%{transform:translate(-50%,-50%) skewX(-10deg) rotate(-2deg) scale(1.04)}}
.mr-market .mr-m2{position:absolute;left:60%;top:22%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
.mr-market .mr-mt{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*25);font-size:calc(var(--u)*1.6);background:var(--ink);padding:.2em .8em;border-radius:calc(var(--u)*.6)}
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*11);height:calc(var(--u)*13.5);padding:calc(var(--u)*.4);transition:opacity .5s}
.mr-hud.mr-nomap .mr-map{opacity:0}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.72);border-radius:calc(var(--u)*1)}
.mr-banner{position:absolute;left:50%;top:13%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;padding:calc(var(--u)*.2) calc(var(--u)*1.6);font-size:calc(var(--u)*2.8);line-height:1.05;background:var(--pink);border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg) rotate(-3deg);box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(10deg)}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*1.8);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*.3);font-size:calc(var(--u)*1.05);will-change:transform;transition:opacity .25s}
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
`,Sf=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,Tx=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,Ax=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},gr=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Rx=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function wf(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let P=document.createElement("style");P.id="mr-hud-css",P.textContent=wx,document.head.appendChild(P)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
    <div class="mr-top"><div class="mr-pill"><i class="mr-dot"></i><span>LAP <b data-k="lap">1</b>/2</span><span class="mr-sep"></span><span data-k="dist">0.0 KM</span><span class="mr-clk" data-k="clock">0:00</span></div></div>
    <div class="mr-tower"></div>
    <div class="mr-map"><div class="mr-mapwrap"></div><canvas></canvas></div>
    <div class="mr-tags"></div>
    <div class="mr-banner"><div class="mr-b1"><span></span></div><span class="mr-b2"></span></div>
    <div class="mr-card3"><div class="mr-lane mr-num"><span></span></div><div class="mr-panel mr-info"><div class="mr-unskew"><div class="mr-nick"></div><div class="mr-tagl"></div></div></div></div>
    <div class="mr-count mr-num"></div>
    <div class="mr-photo"><div class="mr-flash"></div><div class="mr-line"></div><div class="mr-pf">PHOTO FINISH!</div><div class="mr-pcap"></div></div>
    <div class="mr-market"><div class="mr-m1">MARKET OPEN</div><div class="mr-m2"></div></div>
    <div class="mr-title"><div class="mr-t0"></div><span class="mr-t1"></span><div class="mr-t2"></div></div>
    <div class="mr-results"></div>`,i.appendChild(o);let a=P=>o.querySelector(P),l={};o.querySelectorAll("[data-k]").forEach(P=>l[P.dataset.k]=P);let c=a(".mr-tower"),h={},d={};for(let P of t){let rt=document.createElement("div");rt.className="mr-row",rt.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${P.colour.primary};border-right:4px solid ${P.colour.secondary}"></div><div class="mr-name">${gr(Cs(P))}</div><span class="mr-inis"></span><div class="mr-gap"></div></div>`,c.appendChild(rt),h[P.id]={el:rt,pos:rt.querySelector(".mr-pos"),gap:rt.querySelector(".mr-gap"),last:""};let tt=document.createElement("div");tt.className="mr-tag",tt.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tb"></span><span class="mr-tn" style="background:${P.colour.primary};color:#fff">${gr(Cs(P))}</span>`,tt.style.opacity="0",a(".mr-tags").appendChild(tt),d[P.id]={el:tt,pos:tt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function m(P={}){for(let rt of t){let tt=(P[rt.id]||[]).filter(Y=>Y!=null&&Y!==""),bt=tt.map(Y=>`<span class="mr-ini" style="--bc:${mc(Y)}">${gr(Ix(Y))}</span>`).join(""),Lt=h[rt.id].el;Lt.classList.toggle("backed",tt.length>0),Lt.querySelector(".mr-inis").innerHTML=bt,d[rt.id].el.querySelector(".mr-tb").innerHTML=bt}}m(e);let u=a(".mr-map canvas"),g=u.getContext("2d"),_=null,p=340,f=420;u.width=p,u.height=f;let w=n.points,x=1e9,y=1e9,B=-1e9,T=-1e9;for(let P of w)x=Math.min(x,P[0]),B=Math.max(B,P[0]),y=Math.min(y,P[2]),T=Math.max(T,P[2]);if(n.funfair){let[P,rt]=n.funfair.center,tt=n.funfair.radius*.6;x=Math.min(x,P-tt),B=Math.max(B,P+tt),y=Math.min(y,rt-tt),T=Math.max(T,rt+tt)}for(let P in r.diversions)for(let rt of r.diversions[P])for(let tt of rt.path)x=Math.min(x,tt[0]),B=Math.max(B,tt[0]),y=Math.min(y,tt[1]),T=Math.max(T,tt[1]);let I=26,D=Math.min((p-I*2)/(B-x),(f-I*2)/(T-y)),M=(p-(B-x)*D)/2,v=(f-(T-y)*D)/2,b=P=>M+(P-x)*D,L=P=>v+(P-y)*D;function E(){let P=document.createElement("canvas");P.width=p,P.height=f;let rt=P.getContext("2d"),tt=(C,ft,At,It)=>{rt.beginPath(),C.forEach(($,ut)=>ut?rt.lineTo(b($[0]),L($[1])):rt.moveTo(b($[0]),L($[1]))),rt.strokeStyle=ft,rt.lineWidth=At,rt.lineJoin=rt.lineCap="round",rt.setLineDash(It||[]),rt.stroke(),rt.setLineDash([])},bt=(C,ft)=>{for(let At of s.features)At.kind===C&&At.closed&&(rt.beginPath(),At.pts.forEach((It,$)=>$?rt.lineTo(b(It[0]),L(It[1])):rt.moveTo(b(It[0]),L(It[1]))),rt.fillStyle=ft,rt.fill())},Lt=s.features.filter(C=>C.kind==="park").sort((C,ft)=>ft.pts.length-C.pts.length)[0];rt.save(),rt.beginPath(),Lt.pts.forEach((C,ft)=>ft?rt.lineTo(b(C[0]),L(C[1])):rt.moveTo(b(C[0]),L(C[1]))),rt.fillStyle="#9be27a",rt.fill(),rt.restore(),bt("water","#49a6ff"),bt("track","#ff7a5c");for(let C in r.diversions)for(let ft of r.diversions[C])tt(ft.path,"#c79a5a",4,[6,6]);let Y=[];for(let C=0;C<=r.LAP1_END_DRAW;C+=10)Y.push(r.baseXZ(C));tt(Y,"#1a1420",11),tt(Y,"#8fa0c4",6);let Nt=[];for(let C=r.MAP_TO-80;C<=r.finishM;C+=10)Nt.push(r.baseXZ(C));tt(Nt,"#1a1420",11),tt(Nt,"#8fa0c4",6);let z=r.rawExt(r.finishM);return rt.fillStyle="#fff",rt.strokeStyle="#1a1420",rt.lineWidth=3,rt.fillRect(b(z[0])-7,L(z[1])-7,14,14),rt.strokeRect(b(z[0])-7,L(z[1])-7,14,14),rt.fillStyle="#1a1420",rt.fillRect(b(z[0])-7,L(z[1])-7,7,7),rt.fillRect(b(z[0]),L(z[1]),7,7),P}_=E();function S(){_=E()}let O=0,N=0,H=[],k=a(".mr-banner");function dt(){for(;H.length&&N-H[0].at>2;)H.shift();let P=H.shift();P&&(k.querySelector(".mr-b1 span").textContent=P.text,k.querySelector(".mr-b1").style.background=P.colour,k.querySelector(".mr-b2").textContent="",k.classList.remove("on"),k.offsetWidth,k.classList.add("on"),O=Math.min(1.5,P.secs))}function xt(P,rt="",tt="#ff3d8b",bt=1.4){H.length>=3&&H.shift(),H.push({text:P,colour:tt,secs:bt,at:N}),O<=0&&dt()}let U="";function Mt(P,rt){if(N+=P,O>0?(O-=P,O<=0&&(k.classList.remove("on"),O=-.25)):O<0&&(O=Math.min(0,O+P),O===0&&dt()),!!rt){if(rt.map!=null&&o.classList.toggle("mr-nomap",!rt.map),rt.raceS!=null&&(l.clock.textContent=Ax(rt.raceS)),rt.leaderM!=null&&(l.lap.textContent=rt.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,rt.leaderM)/1e3).toFixed(1)} KM`),rt.order){let tt=c.clientHeight||0,bt=(c.querySelector(".mr-row")?.offsetHeight||40)+6,Lt=0;rt.order.forEach((Y,Nt)=>{let z=h[Y.id];if(!z||(z.el.classList.toggle("off",!!Y.hidden),Y.hidden))return;Lt===3&&(Lt+=.35),z.el.style.transform=`translateY(${Lt*bt}px)`,Lt++;let ft=`${Nt}|${Y.gapText}|${Y.finished}`+(Y.posHtml||"");ft!==z.last&&(z.last=ft,z.pos.innerHTML=Y.posHtml??Sf(Nt+1),z.gap.textContent=Y.gapText,z.el.classList.toggle("lead",Nt===0&&!Y.posHtml),z.el.classList.toggle("fin",!!Y.finished))})}if(rt.tags)for(let tt of rt.tags){let bt=d[tt.id];bt&&(tt.visible!==bt.vis&&(bt.vis=tt.visible,bt.el.style.opacity=tt.visible?"1":"0"),tt.visible&&(bt.el.style.transform=`translate(${tt.x}px, ${tt.y}px) translate(-50%,-100%) scale(${tt.scale??1})`,bt.p!==tt.pos&&(bt.p=tt.pos,bt.pos.textContent=tt.pos?Tx(tt.pos):"",bt.pos.style.display=tt.pos?"":"none")))}if(rt.dots){g.clearRect(0,0,p,f),g.drawImage(_,0,0);for(let tt of[...rt.dots].reverse())g.beginPath(),g.arc(b(tt.x),L(tt.z),tt.lead?11:9,0,7),g.fillStyle=tt.colour,g.fill(),g.lineWidth=3.5,g.strokeStyle="#1a1420",g.stroke(),tt.focus&&(g.beginPath(),g.arc(b(tt.x),L(tt.z),15,0,7),g.strokeStyle="#fff",g.lineWidth=3,g.stroke());rt.camDot&&(g.save(),g.translate(b(rt.camDot.x),L(rt.camDot.z)),g.rotate(rt.camDot.a),g.fillStyle="rgba(26,20,32,.6)",g.beginPath(),g.moveTo(0,0),g.lineTo(-10,-22),g.lineTo(10,-22),g.fill(),g.restore())}}}function kt(P){o.classList.toggle("mr-dim",!!P)}function F(P){o.classList.toggle("mr-dimtop",!!P)}function G(){O=0,H.length=0,k.classList.remove("on")}function J(P){let rt=a(".mr-card3");if(!P){rt.classList.remove("on");return}rt.querySelector(".mr-lane span").textContent=P.lane??"",rt.querySelector(".mr-lane").style.background=P.colour.primary,rt.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${P.colour.primary}, ${Px(P.colour.primary,-.25)})`,rt.querySelector(".mr-nick").textContent=P.nickname,rt.querySelector(".mr-nick").style.color="#fff",rt.querySelector(".mr-tagl").textContent=P.tagline||"",rt.querySelector(".mr-tagl").style.color=Rx(P.colour.primary)==="#ffffff"?"#fff":"#1a1420",rt.classList.remove("on"),rt.offsetWidth,rt.classList.add("on")}function q(P){let rt=a(".mr-count");rt.textContent=P,rt.classList.remove("pop"),rt.offsetWidth,rt.classList.add("pop")}function ht(P,rt=""){a(".mr-photo").classList.toggle("on",!!P),a(".mr-pcap").textContent=rt,a(".mr-pcap").style.display=rt?"":"none"}function pt(P,rt="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!P),a(".mr-market .mr-m2").textContent=rt}function Rt(P,{title:rt="",kicker:tt="",theme:bt=""}={}){let Lt=a(".mr-title");if(P){Lt.querySelector(".mr-t0").textContent=tt,Lt.querySelector(".mr-t1").textContent=rt;let Y=Lt.querySelector(".mr-t2");Y.textContent=bt,Y.style.display=bt?"":"none",Lt.querySelector(".mr-t0").style.display=tt?"":"none"}Lt.classList.toggle("on",!!P)}function Ht(P,rt){let tt=rt[0]-P[0],bt=rt[1]-P[1],Lt=Math.hypot(tt,bt)||1,Y=tt/Lt,Nt=bt/Lt,z=P[0]-Y*Lt*.6,C=P[1]-Nt*Lt*.6,ft=a(".mr-photo .mr-line");ft.style.width=`${Lt*2.2}px`,ft.style.transform=`translate(${z}px, ${C}px) rotate(${Math.atan2(Nt,Y)}rad)`}function j(P){let rt=a(".mr-results");if(!P){rt.classList.remove("on");return}rt.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+P.map(tt=>`<div class="mr-rr"><span class="mr-num">${Sf(tt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${tt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${gr(tt.nickname)}</span><span class="mr-t">${gr(tt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>rt.classList.add("on"))}function gt(){o.remove()}return{root:o,update:Mt,setBackedBy:m,redrawMap:S,showBanner:xt,clearBanner:G,setDim:kt,setDimTop:F,introCard:J,countdown:q,photo:ht,photoLine:Ht,results:j,market:pt,titleCard:Rt,dispose:gt}}function Cs(i){if(i.shortName)return i.shortName;let t=String(i.nickname||i.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),n=e.slice(-2).join(" ");return n.length<=14?n:e.at(-1).slice(0,14)}var Ef=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Wo=new Map;function mc(i){return Wo.has(i)||Wo.set(i,Wo.size),Ef[Wo.get(i)%Ef.length]}var Cx=i=>/\p{Extended_Pictographic}/u.test(String(i));function Ix(i){let t=String(i).trim();if(Cx(t))return[...t][0];let e=t.split(/\s+/).filter(Boolean);return(e.length>1&&e[0].length<=3?e[0][0]+e[1][0]:t[0]||"?").toUpperCase()}function Px(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var Xo=(i,t,e=12,n=!0)=>Ke(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Tf(i,t,e,n){let s=gn(42),r=new fe;i.add(r);let o=[],a=[],l=(L,E=3)=>(Nn(L,E,void 0,30),L),c=(L,E,S=3)=>ye(L,E,{ol:S,olRef:30}),h=[];for(let L=0;L<n.path.length;L++){let E=n.path[L],S=e.anchors.nearestOnRibbon(E[0],E[1]),O=Math.hypot(E[0]-S[0],E[1]-S[1]);h.push({x:(E[0]+S[0])/2,z:(E[1]+S[1])/2,gap:O})}let d=0;h.forEach((L,E)=>{E&&(d+=Math.hypot(L.x-h[E-1].x,L.z-h[E-1].z)),L.s=d});let m=d,u=L=>{let E=0;for(;E<h.length-2&&h[E+1].s<L;)E++;let S=h[E],O=h[E+1],N=Math.max(0,Math.min(1,(L-S.s)/Math.max(1e-6,O.s-S.s))),H=S.x+(O.x-S.x)*N,k=S.z+(O.z-S.z)*N,dt=Math.hypot(O.x-S.x,O.z-S.z)||1;return{x:H,z:k,gap:S.gap+(O.gap-S.gap)*N,tx:(O.x-S.x)/dt,tz:(O.z-S.z)/dt,y:t.heightAt(H,k)}},g=h.filter(L=>L.gap>26),_=g.length?g[0].s:m*.25,p=g.length?g.at(-1).s:m*.75,f=L=>Array.from({length:L},(E,S)=>u(_+(S+.5)/L*(p-_))),w=(L,E,S=0)=>(L.position.set(E.x,E.y-.1,E.z),L.rotation.y=Math.atan2(E.tx,E.tz)+S,r.add(L),L),x={center:u((_+p)/2),rides:[]},y=f(7);{let L=y.slice(1,6).sort((q,ht)=>ht.gap-q.gap)[0],E=new fe,S=17,O=S+2.6,N=new he(.35,.5,O/Math.cos(.32)+1,8);for(let q of[-1,1])for(let ht of[-1,1]){let pt=c(N,mt("#ffffff"));pt.position.set(q*1.8,O/2,ht*Math.tan(.32)*O/2),pt.rotation.x=-ht*.32,E.add(pt)}let H=c(new Me(6,1,8,2,.3),mt("#2e9bff"));H.position.y=.5,E.add(H);let k=new fe;k.position.y=O,E.add(k);let dt=c(new Ge(S,.45,8,64),mt("#ff3d8b"));dt.rotation.y=Math.PI/2,dt.position.x=1.2,k.add(dt);let xt=c(new Ge(S,.45,8,64),mt("#ff3d8b"));xt.rotation.y=Math.PI/2,xt.position.x=-1.2,k.add(xt);let U=c(new he(1.3,1.3,3.2,16).rotateZ(Math.PI/2),mt("#ffd23f"));k.add(U);let Mt=16,kt=[],F=[];for(let q=0;q<Mt;q++){let ht=q/Mt*Math.PI*2,pt=c(new Ee(.18,S,.18).translate(0,S/2,0),mt("#ffffff"),2);pt.rotation.x=ht,pt.position.x=1.2,k.add(pt);let Rt=pt.clone();Rt.position.x=-1.2,k.add(Rt);let Ht=new fe;Ht.position.set(0,Math.cos(ht)*S,Math.sin(ht)*S),k.add(Ht);let j=new fe;Ht.add(j);let gt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][q%5],P=c(new Me(1.7,1.3,1.5,2,.35),mt(gt));P.position.y=-1.3,j.add(P);let rt=c(new ke(1.2,.7,4).rotateY(Math.PI/4),mt("#ffffff"),2);rt.position.y=-.1,j.add(rt),kt.push(Ht);for(let tt=0;tt<3;tt++){let bt=ht+tt/3*(Math.PI*2/Mt);F.push([1.2,Math.cos(bt)*S,Math.sin(bt)*S],[-1.2,Math.cos(bt)*S,Math.sin(bt)*S])}}let G=new Ye(new xe(.32,8,6),new mn({color:16777215}),F.length),J=new Pe;F.forEach((q,ht)=>{J.position.set(...q),J.updateMatrix(),G.setMatrixAt(ht,J.matrix),G.setColorAt(ht,new ae(["#fff27a","#ff7ac8","#7affff"][ht%3]))}),k.add(G),w(E,L,0),a.push(q=>{k.rotation.x=q*.18;for(let ht of kt)ht.rotation.x=-q*.18}),x.rides.push({kind:"wheel",obj:E,pos:new V(L.x,L.y+O,L.z),r:S}),L.used=!0}{let L=y.filter(F=>!F.used).sort((F,G)=>G.gap-F.gap)[0];L.used=!0;let E=new fe,S=Math.min(6.5,L.gap*.28);E.scale.setScalar(1.45);let O=Xo("#ffffff","#ff4f6d",16);o.push(O);let N=c(new he(S,S+.3,.9,32),mt("#ffffff",{map:O}));N.position.y=.45,E.add(N);let H=new fe;E.add(H);let k=c(new he(.7,.7,5,16),mt("#ffd23f"));k.position.y=3,H.add(k);let dt=Xo("#ffd23f","#ff3d8b",16);o.push(dt);let xt=c(new ke(S+.8,2.8,16),mt("#ffffff",{map:dt}));xt.position.y=6.6,H.add(xt);let U=c(new he(S+.8,S+.8,.7,16,1,!0),mt("#2e9bff",{side:We}));U.position.y=4.9,H.add(U);let Mt=c(new xe(.5,12,8),mt("#ff3d8b"));Mt.position.y=8.2,H.add(Mt);let kt=[];for(let F=0;F<8;F++){let G=F/8*Math.PI*2,J=S*.72,q=new fe;q.position.set(Math.cos(G)*J,0,Math.sin(G)*J),q.rotation.y=-G,H.add(q);let ht=c(new he(.06,.06,4.2,6),mt("#ffd23f"),1.5);ht.position.y=2.9,q.add(ht);let pt=new fe;q.add(pt);let Rt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][F%4],Ht=c(new Me(.7,.7,1.6,2,.3),mt(Rt));pt.add(Ht);let j=c(new Me(.45,.9,.5,2,.2),mt(Rt));j.position.set(0,.55,.7),j.rotation.x=.4,pt.add(j);let gt=c(new Me(.45,.45,.8,2,.2),mt(Rt));gt.position.set(0,.95,1.05),pt.add(gt);let P=c(new Me(.15,.8,.3,1,.06),mt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][F%4]),2);P.position.set(0,.75,.55),P.rotation.x=.4,pt.add(P);let rt=c(new Me(.75,.2,.6,1,.08),mt("#ff3d8b"),2);rt.position.y=.4,pt.add(rt);for(let[tt,bt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let Lt=c(new Ee(.16,.7,.16),mt(Rt),1.5);Lt.position.set(tt,-.55,bt),Lt.rotation.x=bt>0?-.5:.5,pt.add(Lt)}pt.rotation.y=Math.PI/2,kt.push({horse:pt,ph:F*.8})}w(E,L),a.push(F=>{H.rotation.y=F*.6;for(let G of kt)G.horse.position.y=2+Math.sin(F*2.2+G.ph)*.35}),x.rides.push({kind:"carousel",obj:E,pos:new V(L.x,L.y+6,L.z),r:S*1.45})}{let L=y.filter(F=>!F.used).sort((F,G)=>G.gap-F.gap)[0];L.used=!0;let E=new fe,S=15;E.scale.setScalar(1.5);let O=Xo("#ff3d3d","#ffffff",10,!1);o.push(O);let N=c(new he(1.6,2.6,S,16),mt("#ffffff",{map:O}));N.position.y=S/2,E.add(N);let H=c(new ke(2.6,3.4,16),mt("#2e9bff"));H.position.y=S+1.7,E.add(H);let k=c(new he(.06,.06,2,6),mt("#ffffff"),1.5);k.position.y=S+4.2,E.add(k);let dt=c(new sn(1.2,.7).translate(.6,0,0),mt("#ffd23f",{side:We}),1.5);dt.position.y=S+4.8,E.add(dt);let xt=[],U=3.2;for(let F=0;F<=160;F++){let G=F/160,J=G*U*Math.PI*2,q=2.6+(1-G)*-.8+1.6;xt.push(new V(Math.cos(J)*q,S-1-G*(S-2),Math.sin(J)*q))}let Mt=c(new Io(new ir(xt),220,.55,8,!1),mt("#ffd23f"));Mt.scale.y=1,E.add(Mt);let kt=c(new Me(3,.3,2,2,.1),mt("#3ddc84"),2);kt.position.set(xt.at(-1).x+1,.15,xt.at(-1).z),E.add(kt),w(E,L),a.push(F=>{dt.rotation.y=Math.sin(F*3)*.4}),x.rides.push({kind:"helter",obj:E,pos:new V(L.x,L.y+12,L.z),r:6})}let B=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],T=[];[...y.filter(L=>!L.used),...f(13).filter((L,E)=>E%2===1)].slice(0,7).forEach((L,E)=>{let[S,O]=B[E%B.length],N=new fe,H=E%2?1:-1,k=c(new Me(4.2,2.4,3,2,.2),mt("#fff6e0"));k.position.y=1.2,N.add(k);let dt=c(new Me(4.4,1.1,.8,2,.15),mt(O));dt.position.set(0,.55,1.7),N.add(dt);let xt=Xo("#ffffff",O,10);o.push(xt);let U=c(new Ee(4.8,.18,2.4),mt("#ffffff",{map:xt}));U.position.set(0,2.9,1.4),U.rotation.x=.32,N.add(U);for(let ht of[-1,1]){let pt=c(new he(.09,.09,2.6,6),mt("#ffffff"),1.5);pt.position.set(ht*2.2,1.6,2.4),N.add(pt)}let Mt=Fn(512,128,(ht,pt,Rt)=>{ht.fillStyle="#1a1420",He(ht,0,0,pt,Rt,30),ht.fill(),ht.fillStyle=O,He(ht,8,8,pt-16,Rt-16,24),ht.fill(),je(ht,S,pt/2,Rt/2+4,S.length>11?52:64,"#ffffff","#1a1420",.2)},o),kt=ye(new Me(4.2,1.05,.3,2,.1),[mt(O),mt(O),mt(O),mt(O),mt("#ffffff",{map:Mt}),mt("#ffffff",{map:Mt})],{ol:2.5,olRef:30});if(kt.position.set(0,3.7,.4),N.add(kt),S==="CANDYFLOSS")for(let ht=0;ht<4;ht++){let pt=c(new $e(.32,1),mt("#ff9bd2"),1.5);pt.position.set(-1.4+ht*.9,1.45,1.75),N.add(pt)}if(S==="HOOK-A-DUCK"){let ht=c(new he(1.6,1.6,.6,20),mt("#57c7ff"),2);ht.position.set(0,.3,3.6),N.add(ht);let pt=new fe;pt.position.set(0,.7,3.6),N.add(pt);for(let Rt=0;Rt<6;Rt++){let Ht=Rt/6*Math.PI*2,j=c(new xe(.22,10,8),mt("#ffd23f"),1.5);j.position.set(Math.cos(Ht)*1.1,0,Math.sin(Ht)*1.1);let gt=c(new xe(.14,8,6),mt("#ffd23f"),1.2);gt.position.set(0,.22,.12),j.add(gt),pt.add(j)}T.push(pt)}let F=e.anchors.nearestOnRibbon(L.x,L.z),G=Math.atan2(F[0]-L.x,F[1]-L.z),J=Math.min(L.gap*.3,7)*H,q=w(N,{...L,x:L.x+L.tz*J,z:L.z-L.tx*J,y:t.heightAt(L.x+L.tz*J,L.z-L.tx*J)});q.rotation.y=G+(H>0?0:Math.PI)*0}),a.push(L=>{for(let E of T)E.rotation.y=L*.8});{let L=[],E=[],S=[],O=[],N=[];for(let Mt of[-1,1]){let kt=null;for(let F=_-10;F<=p+10;F+=9){let G=u(F),J=(G.gap/2-6)*Mt,q=G.x+G.tz*J,ht=G.z-G.tx*J,pt=t.heightAt(q,ht),Rt=new V(q,pt+4.2,ht),Ht=c(new he(.08,.1,4.3,6),mt("#ffffff"),1.5);if(Ht.position.set(q,pt+2.1,ht),r.add(Ht),kt)for(let j=0;j<=10;j++){let gt=j/10,P=kt.clone().lerp(Rt,gt);P.y-=Math.sin(gt*Math.PI)*.7,L.push(P),j<10&&(j%2?(E.push(P.clone()),S.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(j+Math.round(F))%4])):(O.push({v:P.clone(),a:Math.atan2(-(Rt.z-kt.z),Rt.x-kt.x)}),N.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(j+Math.round(F/9))%5])))}kt=Rt}}let H=new Pe,k=new Ye(new xe(.16,8,6),new mn({color:16777215}),E.length);E.forEach((Mt,kt)=>{H.position.copy(Mt),H.updateMatrix(),k.setMatrixAt(kt,H.matrix),k.setColorAt(kt,new ae(S[kt]))}),r.add(k);let dt=new Le;dt.setAttribute("position",new me([-.32,0,0,.32,0,0,0,-.65,0],3)),dt.setAttribute("normal",new me([0,0,1,0,0,1,0,0,1],3));let xt=new Ye(dt,mt("#ffffff",{side:We}),O.length);O.forEach((Mt,kt)=>{H.position.copy(Mt.v),H.rotation.set(0,Mt.a,0),H.updateMatrix(),xt.setMatrixAt(kt,H.matrix),xt.setColorAt(kt,new ae(N[kt]))}),r.add(xt);let U=[];for(let Mt=0;Mt+1<L.length;Mt++)L[Mt].distanceTo(L[Mt+1])<3&&U.push(L[Mt],L[Mt+1]);r.add(new vs(new Le().setFromPoints(U),new zi({color:3355443}))),a.push(Mt=>{k.material.color.setScalar(.85+.15*Math.sin(Mt*6))})}{let L=u(_-4),E=Fn(1024,256,(O,N,H)=>{O.fillStyle="#1a1420",He(O,0,0,N,H,60),O.fill(),O.fillStyle="#ff3d8b",He(O,10,10,N-20,H-20,52),O.fill(),je(O,"\u2605 FUNFAIR \u2605",N/2,H/2+6,120,"#ffe14d","#1a1420",.18)},o),S=ye(new Me(10,2.4,.4,2,.15),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:E}),mt("#ffffff",{map:E})],{ol:3,olRef:30});S.position.set(L.x,L.y+7.5,L.z),S.rotation.y=Math.atan2(L.tx,L.tz)+Math.PI/2,r.add(S);for(let O of[-1,1]){let N=c(new he(.25,.3,7.6,8),mt("#ffd23f"));N.position.set(L.x+L.tz*4.5*O,L.y+3.8,L.z-L.tx*4.5*O),r.add(N)}}let D=[];for(let L=0;L<60;L++){let E=_+s()*(p-_),S=u(E),O=(s()-.5)*(S.gap-16),N=S.x+S.tz*O,H=S.z-S.tx*O;D.push({x:N,y:t.heightAt(N,H),z:H,yaw:s()*6.28})}function M(L,E){for(let S of h){if(S.s<_-20||S.s>p+20)continue;let O=Math.max(6,S.gap/2-4);if((L-S.x)**2+(E-S.z)**2<O*O)return!0}return!1}function v(L){for(let E of a)E(L)}function b(){r.traverse(L=>{L.geometry&&L.geometry.dispose()});for(let L of o)L.dispose?.();i.remove(r)}return{group:r,update:v,dispose:b,anchors:x,crowd:D,at:u,s0:_,s1:p,contains:M}}function Af(i,t,e,n,s,{camera:r,offsetX:o=3.2}){let a=new fe;i.add(a);let l=[],c=t.sample(t.finishM+28),h=new V(c.tx,0,c.tz),d=new V(c.rx,0,c.rz),m=new V(c.x,t.heightAt(c.x,c.z),c.z),u=Math.atan2(h.x,h.z);a.position.copy(m),a.rotation.y=u;let g=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let E of g){let S=Fn(256,256,(N,H,k)=>{N.fillStyle="#2e6fe0",N.fillRect(0,0,H,k),N.fillStyle=E.col,N.fillRect(0,0,H,26),je(N,String(E.place),H/2,k/2+14,170,E.col,"#1a1420",.16)},l),O=ye(new Me(2.25,E.hgt,2,3,.12),[mt("#2e6fe0"),mt("#2e6fe0"),mt(E.col),mt("#2e6fe0"),mt("#ffffff",{map:S}),mt("#2e6fe0")],{ol:3.5,olRef:12});O.position.set(E.x,E.hgt/2,0),a.add(O),E.top=E.hgt}let _=Fn(1024,256,(E,S,O)=>{E.fillStyle="#1a1420",He(E,0,0,S,O,50),E.fill(),E.fillStyle="#ff3d8b",He(E,10,10,S-20,O-20,42),E.fill(),je(E,"MARKRUN CHAMPIONS",S/2,O/2+6,80,"#ffffff","#1a1420",.16)},l),p=ye(new Me(9,2.2,.3,2,.1),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:_}),mt("#ffffff",{map:_})],{ol:3,olRef:14});p.position.set(0,5.6,-2.4),a.add(p);for(let E of[-1,1]){let S=ye(new he(.14,.16,5.6,8),mt("#ffffff"),{ol:2,olRef:14});S.position.set(E*4.3,2.8,-2.4),a.add(S)}let f=s.length,w=[];for(let E of s){let S=n[E.runnerId];if(!S)continue;let O=g.find(k=>k.place===E.place),N=O?new V(O.x,O.top,.1):null,H;if(E.place===1?H=["celebrate","jump"]:E.place===2?H=["pose","flex"]:E.place===3?H=["celebrate","fist"]:E.place===f&&f>3?H=["celebrate","collapse"]:H=["celebrate","shrug"],!N){w.push({rr:S,o:E,pose:H});continue}x(S,N,H)}w.forEach((E,S)=>{let O=S%2?1:-1,N=Math.floor(S/2),H=E.pose[1]==="collapse",k=new V(O*(H?4.6:4.2+N*1.6),0,H?1.6:.6+N*.8);x(E.rr,k,E.pose,H?-O*Math.PI/2:0)});function x(E,S,O,N=0){let H=S.clone().applyAxisAngle(new V(0,1,0),u).add(m);S.y===0&&(H.y=t.heightAt(H.x,H.z)+.05),E.root.position.copy(H),E.root.rotation.set(0,u+N,0),E.set(...O),E.setPop(null)}let y=gn(3),B=420,T=new Ye(new sn(.16,.26),new mn({side:We}),B),I=[],D=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let E=0;E<B;E++)I.push({x:(y()-.5)*14,y:y()*12,z:(y()-.5)*8,vy:1+y()*1.6,sp:y()*6,ph:y()*6.28}),T.setColorAt(E,new ae(D[E%D.length]));T.frustumCulled=!1,a.add(T);let M=new Pe,v=0;function b(E,S){v+=E;for(let dt=0;dt<B;dt++){let xt=I[dt];xt.y-=xt.vy*E,xt.y<0&&(xt.y+=12),M.position.set(xt.x+Math.sin(v*1.3+xt.ph)*.5,xt.y,xt.z+Math.cos(v+xt.ph)*.4),M.rotation.set(v*xt.sp+xt.ph,v*xt.sp*.7,xt.ph),M.updateMatrix(),T.setMatrixAt(dt,M.matrix)}T.instanceMatrix.needsUpdate=!0;let O=Math.sin(v*.18)*.4,N=15-Math.min(2.5,v*.2),H=new V(Math.sin(O)*N,3+Math.sin(v*.3)*.3,Math.cos(O)*N).applyAxisAngle(new V(0,1,0),u);r.position.copy(m).add(H);let k=new V(o,2.2,0).applyAxisAngle(new V(0,1,0),u).add(m);r.lookAt(k),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function L(){a.traverse(E=>{E.geometry&&E.geometry.dispose()}),T.material.dispose();for(let E of l)E.dispose?.();i.remove(a)}return{update:b,dispose:L,center:m}}var ze=(i,t)=>{i=i.index?i.toNonIndexed():i;let e=new ae(t).convertSRGBToLinear(),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Ne(s,3)),i.getAttribute("uv")&&i.deleteAttribute("uv"),i},rn=(i,t,e,n,s=0,r=1.6)=>(i.scale(r,r,r),i.rotateY(s),i.translate(t,e,n),i);function Rf(i,t,e,n){let s=gn(777),r=new fe;i.add(r);let o=[],a=[],l=(g,_)=>`lawn:${Math.floor(g/140)},${Math.floor(_/140)}`,c=(g,_,p,f=.8,w)=>a.push({x:g,y:t.heightAt(g,_),z:_,yaw:p,scale:f,colour:w,zone:l(g,_)}),{ribbonSamples:h}=e.anchors;function d(g,_,p){for(let f=0;f<40;f++){let w=h[Math.floor(s()*h.length)],x=s()*Math.PI*2,y=g+s()*(_-g),B=w[0]+Math.cos(x)*y,T=w[1]+Math.sin(x)*y;if(!(!e.inPark(B,T)||e.blocked(B,T,p+1)||!e.clearOf(B,T,p)||e.onPath(B,T,p+2)))return e.reserve(B,T,p),{x:B,z:T,y:t.heightAt(B,T),toPath:Math.atan2(w[0]-B,w[1]-T)}}return null}{let g=[],_=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],p=(T,I,D,M,v,b)=>{g.push(rn(ze(new Ee(1.6,.2,1.6).translate(0,2,0),v),T,I,D,M));for(let[S,O]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])g.push(rn(ze(new he(.08,.08,2,6).translate(S,1,O),"#ffffff"),T,I,D,M));g.push(rn(ze(new ke(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),T,I,D,M));let L=new Ee(.9,.12,3.3);L.rotateX(-.62),L.translate(0,1.05,2.1),g.push(rn(ze(L,b),T,I,D,M));let E=new Ee(.8,.08,2.4);E.rotateX(1),E.translate(0,1,-1.3),g.push(rn(ze(E,"#ffffff"),T,I,D,M))},f=(T,I,D,M,v)=>{for(let b of[-1.8,1.8])for(let L of[-.6,.6]){let E=new he(.08,.08,2.8,6);E.rotateX(L>0?.22:-.22),E.translate(b,1.35,L*.5),g.push(rn(ze(E,v),T,I,D,M))}g.push(rn(ze(new he(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),v),T,I,D,M));for(let b of[-.8,.8]){g.push(rn(ze(new Ee(.6,.08,.35).translate(b,.75,0),"#22202c"),T,I,D,M));for(let L of[-.25,.25])g.push(rn(ze(new he(.02,.02,1.9,4).translate(b+L,1.7,0),"#888888"),T,I,D,M))}},w=(T,I,D,M)=>{let v=new xe(1.6,8,5,0,Math.PI*2,0,Math.PI/2);g.push(rn(ze(v,M),T,I,D)),g.push(rn(ze(new he(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),T,I,D))},x=(T,I,D,M,v)=>{g.push(rn(ze(new he(1.5,1.5,.25,16).translate(0,.35,0),M),T,I,D)),g.push(rn(ze(new he(.1,.1,1,6).translate(0,.9,0),v),T,I,D)),g.push(rn(ze(new Ge(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),v),T,I,D))},y=(T,I,D,M,v)=>{g.push(rn(ze(new xe(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),v),T,I,D,M)),g.push(rn(ze(new xe(.3,8,6).translate(0,1.4,.55),v),T,I,D,M)),g.push(rn(ze(new he(.12,.12,.6,6).translate(0,.3,0),"#888888"),T,I,D,M))},B=[p,f,w,x,y];for(let T of n.features){if(T.kind!=="playground"||!T.closed)continue;let I=wn(T.pts),D=(I[2]-I[0])*(I[3]-I[1]),M=Math.max(1,Math.min(9,Math.round(D/380))),v=[];for(let b=0,L=0;b<M&&L<80;L++){let E=I[0]+3+s()*(I[2]-I[0]-6),S=I[1]+3+s()*(I[3]-I[1]-6);if(!Ts(T.pts,E,S)||v.some(xt=>Math.hypot(xt[0]-E,xt[1]-S)<8.5))continue;v.push([E,S]),b++;let O=t.heightAt(E,S)-.05,N=s()*6.28,H=_[Math.floor(s()*_.length)],k=_[Math.floor(s()*_.length)],dt=B[(b+v.length+Math.floor(s()*5))%B.length];dt===p||dt===f||dt===y?dt(E,O,S,N,H,k):dt(E,O,S,H,k),s()<.6&&c(E+2.5,S+1.5,s()*6,.55)}}if(g.length){let T=ye(Xe(g),mt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(T)}}{let g=Ke(64,64,(D,M,v)=>{for(let b=0;b<6;b++)for(let L=0;L<6;L++)D.fillStyle=(b+L)%2?"#ffffff":"#c8c8c8",D.fillRect(b*M/6,L*v/6,M/6+1,v/6+1)});o.push(g);let _=new sn(2.8,2.2);_.rotateX(-Math.PI/2);let p=[],f=[],w=[],x=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let D=0;D<90;D++){let M=d(12,70,3);if(!M)continue;let v=s()*6.28;p.push({x:M.x,y:M.y+.06,z:M.z,ry:v}),f.push(x[D%x.length]),w.push({x:M.x+Math.cos(v)*.7,y:M.y+.05,z:M.z-Math.sin(v)*.7,ry:v});let b=1+Math.floor(s()*3);for(let L=0;L<b;L++){let E=v+L/b*Math.PI*2+.5,S=M.x+Math.cos(E)*.9,O=M.z-Math.sin(E)*.9;c(S,O,M.toPath+(s()-.5),.62+s()*.15)}}let y=new Ye(_,mt("#ffffff",{map:g,polygonOffset:!0,polygonOffsetFactor:-1}),p.length),B=new Pe;p.forEach((D,M)=>{B.position.set(D.x,D.y,D.z),B.rotation.set(0,D.ry,0),B.updateMatrix(),y.setMatrixAt(M,B.matrix),y.setColorAt(M,new ae(f[M]))}),y.receiveShadow=!0,y.computeBoundingSphere(),r.add(y),e.registerInstanced(y,p);let T=Xe([ze(new Me(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),ze(new Ge(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),I=new Ye(T,mt("#ffffff",{vertexColors:!0}),w.length);w.forEach((D,M)=>{B.position.set(D.x,D.y,D.z),B.rotation.set(0,D.ry,0),B.updateMatrix(),I.setMatrixAt(M,B.matrix)}),I.castShadow=!0,I.computeBoundingSphere(),Nn(I,1.6,void 0,20),r.add(I),e.registerInstanced(I,w)}{let g=Xe([new Dn(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new xe(.22,10,8).translate(0,.72,.42),new xe(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new xe(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new xe(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([D,M])=>new he(.06,.06,.32,6).translate(D,.16,M)),new he(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(D=>D.index?D.toNonIndexed():D).map(D=>(D.deleteAttribute("uv"),D))),_=Xe([ze(new xe(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),ze(new xe(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([D,M])=>ze(new Ge(.2,.06,6,12).rotateY(Math.PI/2).translate(D,.22,M),"#22202c")),ze(new he(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),p=[],f=[],w=[],x=[],y=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let D=0;D<64;D++){let M=d(8,60,1.6);if(!M)continue;let v=s()*6.28;c(M.x,M.z,v,.82);let b=Math.sin(v),L=Math.cos(v);D%4===3?(w.push({x:M.x+b*1.4,y:M.y,z:M.z+L*1.4,ry:v,s:1}),x.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][D%4])):(p.push({x:M.x+b*1.6+L*.8,y:M.y,z:M.z+L*1.6-b*.8,ry:v+(s()-.5)*.8,s:.8+s()*.6}),f.push(y[Math.floor(s()*y.length)]))}let B=new Pe,T=(D,M,v,b)=>{let L=new Ye(D,M,v.length);return v.forEach((E,S)=>{B.position.set(E.x,E.y,E.z),B.rotation.set(0,E.ry,0),B.scale.setScalar(E.s),B.updateMatrix(),L.setMatrixAt(S,B.matrix),b&&L.setColorAt(S,new ae(b[S]))}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),Nn(L,2,void 0,18),r.add(L),e.registerInstanced(L,v),L},I=p.length?T(g,mt("#ffffff"),p,f):null;w.length&&T(_,mt("#ffffff",{vertexColors:!0}),w,x)}{let g=[],_=[],p=[],f=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let I=0;I<26;I++){let D=d(9,40,3.2);if(!D)continue;let M=2.2+s()*.8;g.push({x:D.x,y:D.y-.05,z:D.z,s:M});let v=[f[I%f.length],f[(I+2)%f.length]];for(let b=0;b<60;b++){let L=s()*6.28,E=Math.sqrt(s())*(M-.25);_.push({x:D.x+Math.cos(L)*E,y:D.y+.25,z:D.z+Math.sin(L)*E,s:.8+s()*.5}),p.push(v[b%2])}}let w=new Pe,x=Xe([ze(new he(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),ze(new Ge(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),y=new Ye(x,mt("#ffffff",{vertexColors:!0}),g.length);g.forEach((I,D)=>{w.position.set(I.x,I.y,I.z),w.scale.set(I.s,1,I.s),w.updateMatrix(),y.setMatrixAt(D,w.matrix)}),y.receiveShadow=!0,y.computeBoundingSphere(),Nn(y,1.6,void 0,20),r.add(y),e.registerInstanced(y,g);let B=new $e(.24,0);B.computeVertexNormals();let T=new Ye(B,mt("#ffffff"),_.length);w.scale.setScalar(1),_.forEach((I,D)=>{w.position.set(I.x,I.y,I.z),w.scale.setScalar(I.s),w.updateMatrix(),T.setMatrixAt(D,w.matrix),T.setColorAt(D,new ae(p[D]))}),T.computeBoundingSphere(),r.add(T),e.registerInstanced(T,_)}{let g=t.sample(55),_=-1,p=Fe/2+9,f=g.x+g.rx*p*_,w=g.z+g.rz*p*_;e.blocked(f,w,3)&&(f=g.x-g.rx*p*_,w=g.z-g.rz*p*_);let x=new fe,y=Ke(128,16,(S,O,N)=>{for(let H=0;H<8;H++)S.fillStyle=H%2?"#fff":"#3a9d5d",S.fillRect(H*16,0,16,N)});o.push(y),x.add(ye(new Me(3.2,1.6,1.8,3,.25),mt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let B=ye(new Me(3.4,.15,2,2,.05),mt("#f4e3c0"),{ol:2,olRef:20});B.position.y=2,x.add(B);let T=ye(new Ee(3.8,.15,2.4),mt("#ffffff",{map:y}),{ol:2.5,olRef:20});T.position.y=3.2,x.add(T);for(let S of[-1.6,1.6]){let O=ye(new he(.06,.06,1.2,6),mt("#ffffff"),{ol:1.5});O.position.set(S,2.6,.9),x.add(O)}for(let S of[-1.1,1.1]){let O=ye(new he(.4,.4,.2,14).rotateZ(Math.PI/2),mt("#22202c"),{ol:2});O.position.set(S,.4,.95),x.add(O);let N=O.clone();N.position.z=-.95,x.add(N)}let I=ye(new he(.75,.55,1.3,16),mt("#ffffff"),{ol:3,olRef:20});I.position.y=4,x.add(I);let D=ye(new he(.82,.82,.22,16),mt("#5a3a24"),{ol:2.5,olRef:20});D.position.y=4.75,x.add(D);let M=ye(new he(.72,.62,.45,16),mt("#c98a4a"),{ol:2,olRef:20});M.position.y=3.95,x.add(M);let v=Fn(512,128,(S,O,N)=>{S.fillStyle="#1a1420",He(S,0,0,O,N,28),S.fill(),S.fillStyle="#ffd23f",He(S,6,6,O-12,N-12,22),S.fill(),je(S,"FLAT WHITES",O/2,N/2+4,62,"#ffffff","#1a1420",.2)},o),b=new Ce(new sn(2.8,.7),mt("#ffffff",{map:v}));b.position.set(0,1.4,.92),x.add(b);let L=b.clone();L.rotation.y=Math.PI,L.position.z=-.92,x.add(L);let E=Math.atan2(g.x-f,g.z-w);x.position.set(f,t.heightAt(f,w),w),x.rotation.y=E,r.add(x);for(let S=0;S<5;S++){let O=f+Math.sin(E)*(2.2+S*1.1)+Math.cos(E)*(S%2?.3:-.3),N=w+Math.cos(E)*(2.2+S*1.1);c(O,N,E+Math.PI,.8)}e.anchors.coffeeCart=x}function m(){}function u(){r.traverse(g=>{g.geometry&&g.geometry.dispose()});for(let g of o)g.dispose?.();i.remove(r)}return{group:r,crowd:a,update:m,dispose:u}}var xr=8.5;function gc(i,t={}){let{course:e,park:n,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(X=>(o[X]||[]).length),l=[...s?.runners||[]].sort((X,nt)=>(X.lane??0)-(nt.lane??0)),c=!1,h=new mo({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});h.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),h.outputColorSpace=tn,h.toneMapping=Vn,h.shadowMap.enabled=!0,h.shadowMap.type=Zl;let d=h.domElement;d.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(d);let m=new xo;m.fog=new go(13496063,700,3200);let u=new hn(45,16/9,.3,9e3),g=new Uo(14676223,9420912,1.45);m.add(g);let _=new No(16774109,2.3),p=new V(-.45,.82,.38).normalize();_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.bias=-4e-4,_.shadow.normalBias=.03,_.shadow.radius=3,m.add(_),m.add(_.target);let f=of(e,n,r),w=hf(m,f,{course:e,park:n}),x=null,y=null,B=df(f,w.anchors.crowdZones,5,w.onPath,w.blocked),T=Rf(m,f,w,n);B.push(...T.crowd);let I=new Map;for(let X of B){let nt=X.zone??"x";I.has(nt)||I.set(nt,[]),I.get(nt).push(X)}let D=[...I.values()].map(X=>uc(m,X)),M={update:(...X)=>{D.forEach(nt=>nt.update(...X)),y?.update(...X)},dispose:()=>{D.forEach(X=>X.dispose()),y?.dispose()}},v={};for(let X of l){let nt=xf(X);v[X.id]=nt,m.add(nt.root)}let b=l.map(X=>X.id),L=Object.fromEntries(l.map(X=>[X.id,X])),E=wf(i,{runners:l,backedBy:o,course:e,park:n,C:f}),S=null,O=null,N=[],H=null,k=[],dt=!1;function xt(X){if(r=X||null,f.setPlan(r),c=!!r?.runners?.some(nt=>nt.diversions&&nt.diversions.length),x&&(x.dispose(),x=null),y&&(y.dispose(),y=null),c){let nt=r.runners.find(zt=>zt.diversions?.length).id;x=Tf(m,f,w,f.diversions[nt][0]),w.clearArea(x.contains),D.forEach(zt=>zt.hideWhere(x.contains)),y=uc(m,x.crowd)}if((c||dt)&&(w.redrawGround(),E.redrawMap()),dt=c,k=[],r){O=_f(r,f,l),N=dc({plan:r,sim:O,backedIds:a,hasDiversion:c,C:f,world:w,funfair:x}),H=bf({camera:u,C:f,sim:O,world:w,funfair:x});for(let nt of r.events||[])k.push({at:nt.broadcastS,evt:{...nt,kind:"event"}});for(let nt of r.commentary||[])k.push({at:nt.broadcastS,evt:{...nt,kind:"commentary"}});k.sort((nt,zt)=>nt.at-zt.at)}else O=null,N=[],H=null}let U="idle",Mt=!1,kt=!1,F=-xr,G=0,J=null,q=null,ht=0,pt=!1,Rt=!1,Ht=0,j=0,gt=!1,P=0,rt=Math.max(.05,Number(t.speed)||1),tt=null,bt=0,Lt=new Set;function Y(){let X=i.clientWidth||window.innerWidth,nt=i.clientHeight||window.innerHeight;h.setSize(X,nt,!1),u.aspect=X/nt,u.updateProjectionMatrix(),cc.uRes.value.set(X*h.getPixelRatio(),nt*h.getPixelRatio())}let Nt=typeof ResizeObserver<"u"?new ResizeObserver(Y):null;Nt?.observe(i),window.addEventListener("resize",Y),Y();let z={};{let X=b.length;b.forEach((nt,zt)=>{let Ft=(zt-(X-1)/2)*Math.min(1.25,(Fe-1.6)/Math.max(1,X-1)),R=f.sample(0);z[nt]={x:R.x+R.rx*Ft-R.tx*1.2,z:R.z+R.rz*Ft-R.tz*1.2,yaw:Math.atan2(R.tx,R.tz)},z[nt].y=f.heightAt(z[nt].x,z[nt].z)+.16})}function C(X="idle"){for(let nt of b){let zt=z[nt],Ft=v[nt];Ft.root.position.set(zt.x,zt.y,zt.z),Ft.root.rotation.set(0,zt.yaw,0),X&&Ft.set(X),Ft.setPop(null)}}C(),xt(r);let ft=(X,nt)=>X===1?"jump":X===2||X===3?"fist":X===nt?"collapse":"kneel";function At(X,nt){let zt=O.stateAt(Math.max(0,X)),Ft=b.length;for(let R of b){let W=zt.byId[R],at=v[R];if(X<0)continue;at.root.position.set(W.x,W.y,W.z);let ot=Math.atan2(W.tx,W.tz)+(W.finished&&W.post>2.4&&!(W.place>3&&W.post<4)?Math.PI*(W.place%2?1:-1)*.92:0),st=at.root.rotation.y,Vt=ot-st;for(;Vt>Math.PI;)Vt-=2*Math.PI;for(;Vt<-Math.PI;)Vt+=2*Math.PI;at.root.rotation.y=st+Vt*Math.min(1,nt*10);let Gt={speed:W.vRace,rate:zt.rate,slope:W.slope},Ot=f.diversions[R]?.[0];if(Ot&&at.setProp("floss",W.m>Ot.toM-20?Math.max(.25,1-(W.m-Ot.toM)/3500):0),W.finished){let Wt=W.place;W.post<1.6?(at.set("run"),Gt.speed=3,Gt.rate=1.2):Wt>3&&W.post<4?at.set("trudge"):at.set("celebrate",ft(Wt,Ft)),at.setPop(null)}else if(W.div>.3){at.set("distracted");let Wt=x?.anchors.rides.reduce((ee,se)=>!ee||se.pos.distanceToSquared(at.root.position)<ee.pos.distanceToSquared(at.root.position)?se:ee,null);if(Wt){let se=Math.atan2(Wt.pos.x-W.x,Wt.pos.z-W.z)-at.root.rotation.y;for(;se>Math.PI;)se-=2*Math.PI;for(;se<-Math.PI;)se+=2*Math.PI;Gt.lookYaw=Math.max(-1.3,Math.min(1.3,se))}at.setPop(["!","heart","floss"][Math.floor((W.m-W.divInfo.fromM)/120)%3])}else{at.set("run"),at.setPop(null);let Wt=f.geoOf(W.m);Gt.effort=W.m>4300?.4+(W.m-4300)/700*.5:Wt>1700&&Wt<2060?.7:.1}at.update(nt,Gt)}}let It=new V,$=null,ut=-1,ct=()=>{if(ut!==G||!$){let X=d.getBoundingClientRect();$=[...E.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].filter(nt=>!E.root.classList.contains("mr-dim")&&!(E.root.classList.contains("mr-dimtop")&&!nt.classList.contains("mr-map"))).map(nt=>{let zt=nt.getBoundingClientRect(),Ft=zt.right,R=zt.bottom;if(nt.classList.contains("mr-tower")){R=zt.top+nt.querySelectorAll(".mr-row").length*((nt.querySelector(".mr-row")?.offsetHeight||40)+6);for(let W of nt.querySelectorAll(".mr-badges")){let at=W.getBoundingClientRect();at.width&&(Ft=Math.max(Ft,at.right))}}return{left:zt.left-X.left,right:Ft-X.left,top:zt.top-X.top,bottom:R-X.top}}),ut=G}return $};function yt(X,nt=!0){u.updateMatrixWorld();let zt=d.clientWidth,Ft=d.clientHeight,R=[];for(let Ot of b){let Wt=v[Ot];It.set(Wt.root.position.x,Wt.root.position.y+Wt.height+.55,Wt.root.position.z);let ee=It.distanceTo(u.position);It.project(u);let se=nt&&It.z<1&&It.z>-1&&Math.abs(It.x)<.95&&It.y<.82&&It.y>-.62&&ee>9.5&&ee<(mr.has(H?.shot?.type)?450:150);Wt.height/Math.max(.1,ee)*(Ft/(2*Math.tan(vi.degToRad(u.fov)/2)))>Ft*.3&&(se=!1),R.push({id:Ot,x:(It.x*.5+.5)*zt,y:(-It.y*.5+.5)*Ft,visible:se,pos:X?X.order.indexOf(Ot)+1:0,scale:Math.max(.7,Math.min(1.15,30/ee)),dist:ee})}let W=U==="race"&&mr.has(H?.shot?.type)&&!H?.gliding,at=X?X.order:b,ot=new Set([...at.slice(0,3),...a]);R.sort((Ot,Wt)=>at.indexOf(Ot.id)-at.indexOf(Wt.id));let st=[];for(let Ot of R){if((!W||!ot.has(Ot.id))&&(Ot.visible=!1),!Ot.visible)continue;let Wt=(Cs(L[Ot.id]).length*10+50+(o[Ot.id]?.length||0)*18)*Ot.scale,ee=26*Ot.scale,se=10,Jt={l:Ot.x-Wt/2,r:Ot.x+Wt/2,t:Ot.y-ee,b:Ot.y+6};if(st.some(de=>Jt.l<de.r+4&&Jt.r>de.l-4&&Jt.t<de.b+2&&Jt.b>de.t-2)){Ot.visible=!1;continue}if(ct().some(de=>Jt.l<de.right+se&&Jt.r>de.left-se&&Jt.t<de.bottom+se&&Jt.b>de.top-se)){Ot.visible=!1;continue}st.push(Jt)}if(!X)return U!=="race"?{tags:R}:{tags:R,raceS:0,leaderM:0,map:!1,order:b.map(Ot=>({id:Ot,hidden:!0,gapText:""}))};let Vt=X.leader.m>=4e3,Gt=X.order.map((Ot,Wt)=>{let ee=X.byId[Ot],se=Wt<3||a.includes(Ot),Jt=Vt||ee.finished?ee.gapText:"";if(!Jt&&a.includes(Ot)&&Wt>0&&!ee.finished){let de=X.byId[X.order[Wt-1]],be=X.raceS-Si(O.byId[X.order[Wt-1]].progress,ee.m);!de.finished&&be>=0&&be<=5&&(Jt=`\u2191${be.toFixed(1)}s`)}return{id:Ot,gapText:Jt,finished:ee.finished,hidden:!se}});return{raceS:X.raceS,leaderM:X.leader.m,tags:R,order:Gt,map:mr.has(H?.shot?.type),dots:X.order.map((Ot,Wt)=>({x:X.byId[Ot].x,z:X.byId[Ot].z,colour:L[Ot].colour.primary,lead:Wt===0,focus:H?.shot?.ids?.includes(Ot)}))}}let wt=new bs(.78,1,48);wt.rotateX(-Math.PI/2);let St={};function Pt(){for(let X of b){let nt=St[X]||(St[X]=new fe);nt.parent||v[X].root.add(nt);for(let zt of[...nt.children])nt.remove(zt),zt.material.dispose();(o[X]||[]).forEach((zt,Ft)=>{let R=new Ce(wt,new mn({color:mc(zt),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));R.scale.setScalar(1+Ft*.32),R.position.y=.06+Ft*.01,R.renderOrder=2,nt.add(R)})}}function $t(){for(let X of b){let nt=St[X];if(!nt||!nt.children.length)continue;let zt=u.position.distanceTo(v[X].root.position);nt.scale.setScalar(vi.clamp(zt*.016,.9,3.2))}}Pt();function te(X,nt){let zt=Math.max(30,Math.min(220,nt)),Ft=_.shadow.camera;Ft.right!==zt&&(Ft.left=-zt,Ft.right=zt,Ft.top=zt,Ft.bottom=-zt,Ft.near=1,Ft.far=900,Ft.updateProjectionMatrix());let R=2*zt/_.shadow.mapSize.x,W=Math.round(X.x/R)*R,at=Math.round(X.z/R)*R;_.target.position.set(W,X.y,at),_.position.set(W+p.x*400,X.y+p.y*400,at+p.z*400)}let Zt=["wave","flex","point","stretch","spin","bow"];function ue(X,nt){let zt=[...X.personality||X.id].reduce((Ft,R)=>Ft+R.charCodeAt(0),nt);return Zt[zt%Zt.length]}function oe(X,nt={}){U="intro",E.setDim(!0),E.clearBanner(),E.photo(!1),E.results(null),it(),E.market(!1),tt=null,Mt=!1,d.style.filter="",C("idle");let zt=nt.perRunnerS??t.introPerRunnerS??4.2,Ft=nt.flyoverS??7;return q={t:0,idx:-1,per:zt,fly:Ft,onDone:X,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:Ft,perRunnerS:zt,runners:b.slice()}}function _e(X){let nt=q;if(!nt)return;nt.t+=X;let zt=z;if(nt.idx===-1){!nt.title&&nt.t>.8&&(nt.title=!0,et(!0));let Gt=Math.min(1,nt.t/nt.fly),Ot=pc(Gt),Wt=f.sample(0),ee=new V(170,0,-40),se=2.2-Ot*2,Jt=520-Ot*470,de=new V(ee.x+Math.cos(se)*Jt,190-Ot*170,ee.z+Math.sin(se)*Jt),be=new V(Wt.x+Wt.tx*22+Wt.rx*10,Wt.y+9,Wt.z+Wt.tz*22+Wt.rz*10);de.lerp(be,Ot*Ot);let De=ee.clone().setY(15).lerp(new V(Wt.x,Wt.y+1,Wt.z),Math.min(1,Ot*1.2));u.position.copy(de),u.lookAt(De),Ut(50),Gt>=1&&qt();return}if(nt.group){let Gt=f.sample(0),Ot=(nt.t-nt.segStart)/3;if(u.position.set(Gt.x+Gt.tx*(9+Ot*2)+Gt.rx*2,Gt.y+2.2+Ot*.6,Gt.z+Gt.tz*(9+Ot*2)+Gt.rz*2),u.lookAt(Gt.x,Gt.y+1.3,Gt.z),Ut(46),Ot>=1&&!nt.done){nt.done=!0,E.introCard(null);let Wt=nt.onDone;q=null,U="idle",Wt?.()}return}let Ft=b[nt.idx],R=zt[Ft],W=nt.t-nt.segStart,at=new V(Math.sin(R.yaw),0,Math.cos(R.yaw)),ot=new V(-at.z,0,at.x),st=v[Ft].height,Vt=3.2+st*.6-Math.min(.6,W*.12);u.position.set(R.x+at.x*Vt+ot.x*.9,R.y+st*.62,R.z+at.z*Vt+ot.z*.9),u.lookAt(R.x-ot.x*1.25,R.y+st*.55,R.z-ot.z*1.25),Ut(40),!nt.waiting&&W>=nt.per&&qt(),nt.waiting==="released"&&W>=nt.minSeg&&qt()}function et(X){let nt=s||{};E.titleCard(X,{title:nt.title||"MARKRUN",kicker:nt.number?`ROUND ${nt.number}`:"LIVE FROM FINSBURY PARK",theme:nt.theme?typeof nt.theme=="string"?nt.theme:nt.theme.label||nt.theme.name||"":""})}function qt(){let X=q;X.idx===-1&&et(!1),X.idx++,X.segStart=X.t;for(let R of b)v[R].set("idle");if(X.idx>=b.length){X.group=!0;for(let R of b)v[R].set("pose","point");E.introCard(null),setTimeout(()=>{},0);for(let R of b)v[R].set("wave");return}let nt=b[X.idx];v[nt].set(ue(L[nt],X.idx)==="wave"?"wave":"pose",ue(L[nt],X.idx)),t.introCards!==!1&&E.introCard(L[nt]),X.waiting=!1;let Ft=t.onIntroRunner?.(nt,X.idx);Ft&&typeof Ft.then=="function"&&(X.waiting=!0,Ft.then(()=>{q===X&&(X.waiting="released")},()=>{q===X&&(X.waiting="released")}))}function Tt(X,nt){if(!O)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");U="race",E.setDim(!1),E.results(null),it(),q=null,E.introCard(null),E.titleCard(!1),E.market(!1),tt=null,Mt=!1,d.style.filter="",F=-xr,Ht=0,j=0,ht=0,pt=!1,Rt=!1,Lt.clear(),gt=!!t.skipRaceTitle,E.setDimTop(!1),J={onEvent:X,onDone:nt},C("idle"),H.reset()}let Dt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function jt(X){switch(X.type){case"lead_change":return["LEAD CHANGE","","#ff3d8b"];case"overtake":return a.includes(X.by)||a.includes(X.on)?["OVERTAKE","","#2e6fe0"]:null;case"hill":return["THE HILL","","#3aa845"];case"lap":return["LAP 2","","#2e6fe0"];case"final_stretch":return["FINAL STRETCH","","#ff8a1f"];case"diversion":return Lt.has("div")?null:(Lt.add("div"),["DISTRACTED!","","#b04bff"]);case"finish":return X.place===1&&!O.photoFinish?["WINNER","","#ffb000"]:null;default:return null}}function Qt(X){if(ht>0){ht-=X,ht<=0&&(E.photo(!1),d.style.filter="",w.anchors.finishArch.visible=!0,H.reset(),E.showBanner("WINNER","","#ffb000"));return}let nt=F;for(F+=X,F<-4.2&&!gt&&(gt=!0,et(!0),E.setDimTop(!0)),F>=-3.6&&gt===!0&&(gt="done",et(!1),E.setDimTop(!1));j<Dt.length&&F>=Dt[j][0];){let[zt,Ft]=Dt[j++];if(E.countdown(Ft),J?.onEvent?.({kind:"countdown",n:Ft==="GO!"?0:Number(Ft),text:Ft,broadcastS:zt}),zt===-3)for(let R of b)v[R].set("ready")}for(;Ht<k.length&&F>=k[Ht].at;){let zt=k[Ht++].evt;try{J?.onEvent?.(zt)}catch(Ft){console.error(Ft)}if(zt.kind==="event"){let Ft=jt(zt);Ft&&E.showBanner(...Ft)}}if(O.photoFinish&&!pt&&F>=O.firstFinishB){pt=!0,F=O.firstFinishB,ht=t.photoFreezeS??2.8;{let[zt,Ft]=O.finishOrder;E.photo(!0,`${Cs(L[zt])} or ${Cs(L[Ft])}? Checking the camera...`)}d.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",J?.onEvent?.({kind:"photo_finish",broadcastS:F,ids:O.finishOrder.slice(0,2)})}!Rt&&F>=O.lastFinishB+3.5&&(Rt=!0,J?.onDone?.())}function pe(X){o=X||{},a=Object.keys(o).filter(nt=>(o[nt]||[]).length),E.setBackedBy(o),Pt()}function A(X,nt=1.2){if(!O)throw new Error("createRaceView: seek in a race needs a plan");X=Math.max(-xr,Math.min(O.lastFinishB+3.5,Number(X)||0)),U="race",q=null,it(),J=J||{},E.setDim(!1),E.introCard(null),E.results(null),E.photo(!1),E.market(!1),E.clearBanner(),E.titleCard(!1),E.setDimTop(!1),d.style.filter="",w.anchors.finishArch.visible=!0,tt=null,gt=X>=-3.6?"done":X<-4.2?!1:"done",H.reset();let zt=Math.round(nt*30);for(let Ft=zt;Ft>=0;Ft--){if(F=X-Ft/30,F<-3)for(let R of b)v[R].set("idle");else if(F<0)for(let R of b)v[R].set("ready");if(Ft>0)if(H.update(F,1/30,N),F>=0)At(F,1/30);else for(let R of b)v[R].update(1/30,{})}F=X,Ht=k.findIndex(Ft=>Ft.at>F),Ht<0&&(Ht=k.length),j=Dt.findIndex(Ft=>Ft[0]>F),j<0&&(j=Dt.length),pt=F>=O.firstFinishB,Rt=F>=O.lastFinishB+3.5,ht=0}function Q(X){let nt=q;if(!nt)return;X=Math.max(0,Number(X)||0);let zt=b.length;if(X<nt.fly){nt.t=X;return}et(!1),nt.title=!0;let Ft=Math.min(zt,Math.floor((X-nt.fly)/nt.per));nt.idx=Ft-1,nt.t=X,qt(),nt.segStart=nt.fly+Ft*nt.per}function K(X){return U==="intro"?Q(X):A(X)}function it(){S&&(S.dispose(),S=null)}function _t(X,{card:nt}={}){U="podium",E.setDim(!0),E.clearBanner(),q=null,E.titleCard(!1),E.market(!1),tt=null,Mt=!1,d.style.filter="",E.photo(!1),it();let zt=X?.finishOrder?.length?[...X.finishOrder].sort((Ft,R)=>Ft.place-R.place):(O?.finishOrder||b).map((Ft,R)=>({runnerId:Ft,place:R+1,officialS:O?.byId[Ft].officialS??0,timeText:O?Go(O.byId[Ft].officialS):""}));S=Af(m,f,w,v,zt,{camera:u,offsetX:(nt??t.podiumCard)!==!1?3.2:0}),(nt??t.podiumCard)!==!1&&E.results(zt.map(Ft=>({place:Ft.place,nickname:L[Ft.runnerId]?.nickname||Ft.runnerId,colour:L[Ft.runnerId]?.colour.primary||"#888",timeText:Ft.timeText||Go(Ft.officialS)})))}let lt=performance.now(),Ct=0,Xt={frames:0,acc:0,fps:0};function Ut(X){Math.abs(u.fov-X)>.01&&(u.fov=X,u.updateProjectionMatrix())}function Z(X,nt=!1){G+=X;let zt=null;Mt||(U==="intro"&&_e(X),U==="race"&&Qt(X));let Ft=Mt?0:X;if(U==="race"){if(ht>0){let ot=w.anchors.finish;w.anchors.finishArch.visible=!1,u.position.set(ot.x+ot.rx*9-ot.tx*.6,ot.y+6.4,ot.z+ot.rz*9-ot.tz*.6),u.lookAt(ot.x-ot.rx*.6-ot.tx*.6,ot.y+.8,ot.z-ot.rz*.6-ot.tz*.6),Ut(42),u.updateMatrixWorld();let st=new V(ot.x+ot.rx*3,ot.y+.05,ot.z+ot.rz*3).project(u),Vt=new V(ot.x-ot.rx*3,ot.y+.05,ot.z-ot.rz*3).project(u);E.photoLine([(st.x*.5+.5)*d.clientWidth,(-st.y*.5+.5)*d.clientHeight],[(Vt.x*.5+.5)*d.clientWidth,(-Vt.y*.5+.5)*d.clientHeight])}else if(Mt&&tt!=null){tt+=X;let ot=O.stateAt(Math.max(0,F)),st=ot.byId[ot.order[0]],Vt=ot.order.slice(0,3).map(be=>ot.byId[be]).filter(be=>Math.abs(be.m-st.m)<25),Gt=new V;for(let be of Vt)Gt.add(new V(be.x,be.y,be.z));Gt.divideScalar(Math.max(1,Vt.length)),bt||(bt=Math.atan2(u.position.x-Gt.x,u.position.z-Gt.z));let Ot=bt+tt*.12,Wt=10+Math.min(25,st.m-Vt.at(-1).m)*.4,ee=Math.min(1,tt/1.2),se=ee*ee*(3-2*ee),Jt=Gt.x+Math.sin(Ot)*Wt,de=Gt.z+Math.cos(Ot)*Wt;u.position.set(Jt,Math.max(Gt.y+3+se*2,f.heightAt(Jt,de)+2.5),de),u.lookAt(Gt.x,Gt.y+2.3,Gt.z),Ut(44)}else H.update(F,Ft,N);zt=F>=0?O.stateAt(F):null;let W=!ht&&tt==null&&["side","headon","finishcam"].includes(H.shot?.type);if(w.setOcclusionCorridor(W?u.position:null,W?H.cam.look:null),F<0)for(let ot of b)v[ot].update(Ft,{});else At(F,ht>0?0:Ft);let at=H.shot?.type;te(H.cam.look,mr.has(at)?160:70)}else if(U==="podium"&&S){w.setOcclusionCorridor(null),S.update(Ft,G);for(let W of b)v[W].update(Ft,{});te(S.center,40)}else{for(let W of b)v[W].update(Ft,{});if(U==="idle"){let W=f.sample(0),at=G*.12;u.position.set(W.x+Math.sin(at)*14,W.y+4.5,W.z+Math.cos(at)*14),u.lookAt(W.x,W.y+1.2,W.z),Ut(45)}te(new V(z[b[0]]?.x??0,0,z[b[0]]?.z??0),U==="intro"&&q?.idx===-1?160:40)}if(P+=X,nt)return;$t(),w.update(G),x?.update(G);let R=b.map(W=>v[W].root.position);M.update(G,u.position,R,U==="podium"?.9:null),E.update(P,U==="race"?yt(zt,F>-1&&tt==null):yt(null,!1)),P=0,h.render(m,u)}let vt=2;function Et(X){if(kt)return;Ct=requestAnimationFrame(Et);let nt=Math.max(0,(X-lt)/1e3);lt=X,Xt.frames++,Xt.acc+=nt,Xt.acc>1&&(Xt.fps=Xt.frames/Xt.acc,Xt.frames=0,Xt.acc=0),Yt(Math.min(vt,nt)*rt)}function Yt(X){let nt=X;if(nt<=1e-6){Z(0);return}for(;nt>1e-6;){let zt=Math.min(nt,.1);nt-=zt,Z(zt,nt>1e-6)}}t.manualLoop||(Ct=requestAnimationFrame(Et));function re(){kt=!0,cancelAnimationFrame(Ct),Nt?.disconnect(),window.removeEventListener("resize",Y);for(let X in St)for(let nt of St[X].children)nt.material.dispose();wt.dispose(),it();for(let X of b)m.remove(v[X].root),v[X].dispose();M.dispose(),x?.dispose(),T.dispose(),w.dispose(),E.dispose(),m.traverse(X=>{X.geometry&&X.geometry.dispose()}),gf(),lf(),h.dispose(),h.forceContextLoss?.(),d.remove()}let le={seek(X,nt=1.2){A(X,nt),Mt=!0,Z(0)},introAt(X,nt=1.5){if(oe(()=>{},{}),Mt=!1,X<0){q.t=nt,_e(0),Z(0),Mt=!0;return}for(q.t=q.fly,_e(0);q&&q.idx<X;)q.t=q.segStart+q.per+.01,_e(0);for(let zt=0;zt<nt*30;zt++){_e(1/30);for(let Ft of b)v[Ft].update(1/30,{})}Mt=!0,Z(0)},podiumAt(X=3){E.introCard(null),_t(null);for(let nt=0;nt<X*30;nt++){S.update(1/30,nt/30);for(let zt of b)v[zt].update(1/30,{})}Mt=!0,Z(0)},photoAt(){this.seek(O.firstFinishB-.05),Mt=!1,pt=!1;for(let X=0;X<3;X++)Z(1/30);Mt=!0,Z(0)},render(){Z(0)},unpause(){Mt=!1},lookFrom(X,nt,zt,Ft,R,W,at=45){U="debugcam",u.position.set(X,nt,zt),u.lookAt(Ft,R,W),Ut(at),E.setDim(!0),h.render(m,u)},step(X,nt=!0){Z(X,!nt)},get mode(){return U},get b(){return F},get shots(){return N},get sim(){return O},C:f,get director(){return H},renderer:h,scene:m,camera:u,info:()=>h.info,fps:()=>Xt.fps};return{playIntro:oe,playRace:Tt,showPodium:_t,setPaused(X,{market:nt=!0,marketText:zt}={}){X=!!X,X!==Mt&&(Mt=X,U==="race"&&ht<=0&&t.marketOnPause!==!1&&nt&&(X?(tt=0,bt=0,E.market(!0,zt??t.marketText??"Place your halfway bets!"),d.style.filter="saturate(1.2) contrast(1.06)"):(tt=null,E.market(!1),d.style.filter="",H.reset(!1))))},setSpeed(X){rt=Math.max(.05,Number(X)||1)},seek:K,loadPlan(X,{backedBy:nt}={}){if(U==="race")throw new Error("createRaceView: loadPlan during a race");nt&&pe(nt),xt(X)},setBackedBy(X){pe(X),O&&U!=="race"&&(N=dc({plan:r,sim:O,backedIds:a,hasDiversion:c,C:f,world:w,funfair:x}))},dispose:re,hudRoot:E.root,get broadcastTime(){return U==="intro"?q?.t??0:F},get durationS(){return O?xr+O.lastFinishB+3.5:0},preRollS:xr,_debug:le}}var zn=new URLSearchParams(location.search);async function xc(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function Lx(){let i=zn.get("fixture"),[t,e,n]=await Promise.all([xc("/data/course/course.json"),xc("/data/course/park.json"),xc(i?`/client/tv/race/fixtures/${i}.json`:"/data/fixtures/round.json")]);zn.get("shot")&&document.body.classList.add("shot");let s={};zn.get("backed")!=null?zn.get("backed").split(",").filter(Boolean).forEach((c,h)=>s[c]=[h%2?"Mrs M":"Mark"]):Object.assign(s,{r2:["Mark"],r4:["Mrs M"],r1:["Mark","Mrs M"]});let r=document.getElementById("sub"),o=gc(document.getElementById("stage"),{course:t,park:e,round:n.public,plan:n.racePlan,backedBy:s,speed:Number(zn.get("speed"))||1,preserveDrawingBuffer:!!zn.get("shot"),manualLoop:!!zn.get("shot"),onIntroRunner:c=>{let h=n.public.runners.find(d=>d.id===c);r.textContent=`${h.nickname} - ${h.tagline}`}});window.view=o,window.__create=gc,window.__data={course:t,park:e,round:n};let a=c=>{c.kind==="commentary"&&(r.textContent=c.text),c.kind==="countdown"&&(r.textContent=c.text)},l={intro:()=>o.playIntro(()=>{r.textContent="(betting would happen here)",zn.get("auto")!=="0"&&setTimeout(l.race,1500)}),race:()=>(r.textContent="",o.playRace(a,()=>{r.textContent="Race over",setTimeout(l.podium,2500)})),podium:()=>o.showPodium(null),pause:(()=>{let c=!1;return()=>o.setPaused(c=!c)})()};document.getElementById("ctl").addEventListener("click",c=>{let h=c.target.dataset?.a;h&&l[h]()}),zn.get("shot")||setInterval(()=>{document.getElementById("fps").textContent=`${o._debug.fps().toFixed(0)} fps`},1e3),zn.get("auto")!=="0"&&!zn.get("shot")&&l.intro(),window.__ready=!0}Lx().catch(i=>{console.error(i),document.getElementById("sub").textContent=String(i),window.__error=String(i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
