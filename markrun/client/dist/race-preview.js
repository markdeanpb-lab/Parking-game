var $l="170";var Cf=0,vc=1,If=2;var Dh=1,Zl=2,ni=3,Mi=0,dn=1,Qe=2,vi=0,ps=1,_c=2,Mc=3,bc=4,Pf=5,Ni=100,Lf=101,Df=102,Uf=103,Nf=104,Ff=200,zf=201,Of=202,kf=203,Ta=204,Aa=205,Bf=206,Hf=207,Vf=208,Gf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,Ra=0,Ca=1,Ia=2,ys=3,Pa=4,La=5,Da=6,Ua=7,Uh=0,Zf=1,Jf=2,Yn=0,Kf=1,jf=2,Qf=3,tu=4,eu=5,nu=6,iu=7;var Nh=300,vs=301,_s=302,Na=303,Fa=304,Fo=306,ki=1e3,zi=1001,za=1002,Mn=1003,su=1004;var yr=1005;var Xn=1006,qo=1007;var Oi=1008;var oi=1009,Fh=1010,zh=1011,Zs=1012,Jl=1013,Bi=1014,qn=1015,cr=1016,Kl=1017,jl=1018,Ms=1020,Oh=35902,kh=1021,Bh=1022,Rn=1023,Hh=1024,Vh=1025,ms=1026,bs=1027,Ql=1028,tc=1029,Gh=1030,ec=1031;var nc=1033,Zr=33776,Jr=33777,Kr=33778,jr=33779,Oa=35840,ka=35841,Ba=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,$a=37811,Za=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,Qr=36492,rl=36494,ol=36495,Wh=36283,al=36284,ll=36285,cl=36286;var to=2300,hl=2301,Yo=2302,Sc=2400,Ec=2401,wc=2402;var ru=3200,ou=3201;var Xh=0,au=1,xi="",fn="srgb",Rs="srgb-linear",zo="linear",Oe="srgb";var Yi=7680;var Tc=519,lu=512,cu=513,hu=514,qh=515,fu=516,uu=517,du=518,pu=519,fl=35044;var Ac="300 es",si=2e3,eo=2001,bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Ws=Math.PI/180,Js=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function un(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function xu(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function yu(i,t=1){return t-Math.abs(ic(i,t*2)-t)}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bu(i,t){return i+Math.random()*(t-i)}function Su(i){return i*(.5-Math.random())}function Eu(i){i!==void 0&&(Rc=i);let t=Rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*Ws}function Tu(i){return i*Js}function Au(i){return(i&i-1)===0&&i!==0}function Ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ei={DEG2RAD:Ws,RAD2DEG:Js,generateUUID:$n,clamp:un,euclideanModulo:ic,mapLinear:mu,inverseLerp:gu,lerp:Xs,damp:xu,pingpong:yu,smoothstep:vu,smootherstep:_u,randInt:Mu,randFloat:bu,randFloatSpread:Su,seededRandom:Eu,degToRad:wu,radToDeg:Tu,isPowerOfTwo:Au,ceilPowerOfTwo:Ru,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Iu,normalize:Fe,denormalize:zn},kt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Te=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],v=s[0],m=s[3],u=s[6],w=s[1],x=s[4],y=s[7],k=s[2],A=s[5],I=s[8];return r[0]=o*v+a*w+l*k,r[3]=o*m+a*x+l*A,r[6]=o*u+a*y+l*I,r[1]=c*v+h*w+d*k,r[4]=c*m+h*x+d*A,r[7]=c*u+h*y+d*I,r[2]=p*v+f*w+g*k,r[5]=p*m+f*x+g*A,r[8]=p*u+f*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,p=a*l-h*r,f=c*r-o*l,g=e*d+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=p*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$o=new Te;function Yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){let i=no("canvas");return i.style.display="block",i}var Cc={};function Vs(i){i in Cc||(Cc[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Du(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ue={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Oe&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Oe&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ic=[.64,.33,.3,.6,.15,.06],Pc=[.2126,.7152,.0722],Lc=[.3127,.329],Dc=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ue.define({[Rs]:{primaries:Ic,whitePoint:Lc,transfer:zo,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:Ic,whitePoint:Lc,transfer:Oe,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}});var $i,ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=no("canvas")),$i.width=t.width,$i.height=t.height;let n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nu=0,io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fu=0,Sn=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zi,s=zi,r=Xn,o=Oi,a=Rn,l=oi,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=$n(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Nh;Sn.DEFAULT_ANISOTROPY=1;var Je=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],f=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,k=(u+1)/2,A=(h+p)/4,I=(d+v)/4,P=(g+m)/4;return x>y&&x>k?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=I/n):y>k?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=P/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=I/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(p-h)/w,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],p=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==p||c!==f||h!==g){let m=1-a,u=l*p+c*f+h*g+d*v,w=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let k=Math.sqrt(x),A=Math.atan2(k,u*w);m=Math.sin(m*A)/k,a=Math.sin(a*A)/k}let y=a*w;if(l=l*m+p*y,c=c*m+f*y,h=h*m+g*y,d=d*m+v*y,m===1-a){let k=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=k,c*=k,h*=k,d*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*p,t[e+1]=l*g+h*p+c*d-a*f,t[e+2]=c*g+h*f+a*p-l*d,t[e+3]=h*g-a*d-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),p=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d+p*f*g;break;case"YZX":this._x=p*h*d+c*f*g,this._y=c*f*d+p*h*g,this._z=c*h*g-p*f*d,this._w=c*h*d-p*f*g;break;case"XZY":this._x=p*h*d-c*f*g,this._y=c*f*d-p*h*g,this._z=c*h*g+p*f*d,this._w=c*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(un(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new H,Nc=new Cn,li=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),_r.subVectors(this.max,Ls),Zi.subVectors(t.a,Ls),Ji.subVectors(t.b,Ls),Ki.subVectors(t.c,Ls),fi.subVectors(Ji,Zi),ui.subVectors(Ki,Ji),Ri.subVectors(Zi,Ki);let e=[0,-fi.z,fi.y,0,-ui.z,ui.y,0,-Ri.z,Ri.y,fi.z,0,-fi.x,ui.z,0,-ui.x,Ri.z,0,-Ri.x,-fi.y,fi.x,0,-ui.y,ui.x,0,-Ri.y,Ri.x,0];return!Ko(e,Zi,Ji,Ki,_r)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Zi,Ji,Ki,_r))?!1:(Mr.crossVectors(fi,ui),e=[Mr.x,Mr.y,Mr.z],Ko(e,Zi,Ji,Ki,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Kn=[new H,new H,new H,new H,new H,new H,new H,new H],Un=new H,vr=new li,Zi=new H,Ji=new H,Ki=new H,fi=new H,ui=new H,Ri=new H,Ls=new H,_r=new H,Mr=new H,Ci=new H;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);let a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zu=new li,Ds=new H,jo=new H,Si=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(jo)),this.expandByPoint(Ds.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new H,Qo=new H,br=new H,di=new H,ta=new H,Sr=new H,ea=new H,ro=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qo.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Qo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(br),a=di.dot(this.direction),l=-di.dot(br),c=di.lengthSq(),h=Math.abs(1-o*o),d,p,f,g;if(h>0)if(d=o*l-a,p=o*a-l,g=r*h,d>=0)if(p>=-g)if(p<=g){let v=1/h;d*=v,p*=v,f=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),f=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qo).addScaledVector(br,p),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),Sr.subVectors(n,t),ea.crossVectors(ta,Sr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let l=a*this.direction.dot(Sr.crossVectors(di,Sr));if(l<0)return null;let c=a*this.direction.dot(ta.cross(di));if(c<0||l+c>o)return null;let h=-a*di.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,p,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,p,f,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,d,p,f,g,v,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=p-v*c,e[9]=-a*l,e[2]=v-p*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,f=l*d,g=c*h,v=c*d;e[0]=p+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,f=l*d,g=c*h,v=c*d;e[0]=p-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=p*c+v,e[1]=l*d,e[5]=v*c+p,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-p*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=p-v*d}else if(t.order==="XZY"){let p=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,ku)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),pi.crossVectors(n,Tn),pi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),pi.crossVectors(n,Tn)),pi.normalize(),Er.crossVectors(Tn,pi),s[0]=pi.x,s[4]=Er.x,s[8]=Tn.x,s[1]=pi.y,s[5]=Er.y,s[9]=Tn.y,s[2]=pi.z,s[6]=Er.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],v=n[6],m=n[10],u=n[14],w=n[3],x=n[7],y=n[11],k=n[15],A=s[0],I=s[4],P=s[8],M=s[12],_=s[1],b=s[5],L=s[9],E=s[13],S=s[2],D=s[6],U=s[10],O=s[14],V=s[3],dt=s[7],it=s[11],N=s[15];return r[0]=o*A+a*_+l*S+c*V,r[4]=o*I+a*b+l*D+c*dt,r[8]=o*P+a*L+l*U+c*it,r[12]=o*M+a*E+l*O+c*N,r[1]=h*A+d*_+p*S+f*V,r[5]=h*I+d*b+p*D+f*dt,r[9]=h*P+d*L+p*U+f*it,r[13]=h*M+d*E+p*O+f*N,r[2]=g*A+v*_+m*S+u*V,r[6]=g*I+v*b+m*D+u*dt,r[10]=g*P+v*L+m*U+u*it,r[14]=g*M+v*E+m*O+u*N,r[3]=w*A+x*_+y*S+k*V,r[7]=w*I+x*b+y*D+k*dt,r[11]=w*P+x*L+y*U+k*it,r[15]=w*M+x*E+y*O+k*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*a*p+n*c*p+s*a*f-n*l*f)+v*(+e*l*f-e*c*p+r*o*p-s*o*f+s*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*p+s*o*d-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],v=t[13],m=t[14],u=t[15],w=d*m*c-v*p*c+v*l*f-a*m*f-d*l*u+a*p*u,x=g*p*c-h*m*c-g*l*f+o*m*f+h*l*u-o*p*u,y=h*v*c-g*d*c+g*a*f-o*v*f-h*a*u+o*d*u,k=g*d*l-h*v*l-g*a*p+o*v*p+h*a*m-o*d*m,A=e*w+n*x+s*y+r*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=w*I,t[1]=(v*p*r-d*m*r-v*s*f+n*m*f+d*s*u-n*p*u)*I,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*u+n*l*u)*I,t[3]=(d*l*r-a*p*r-d*s*c+n*p*c+a*s*f-n*l*f)*I,t[4]=x*I,t[5]=(h*m*r-g*p*r+g*s*f-e*m*f-h*s*u+e*p*u)*I,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*u-e*l*u)*I,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*f+e*l*f)*I,t[8]=y*I,t[9]=(g*d*r-h*v*r-g*n*f+e*v*f+h*n*u-e*d*u)*I,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*u+e*a*u)*I,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*I,t[12]=k*I,t[13]=(h*v*s-g*d*s+g*n*p-e*v*p-h*n*m+e*d*m)*I,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*I,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*p+e*a*p)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,p=r*c,f=r*h,g=r*d,v=o*h,m=o*d,u=a*d,w=l*c,x=l*h,y=l*d,k=n.x,A=n.y,I=n.z;return s[0]=(1-(v+u))*k,s[1]=(f+y)*k,s[2]=(g-x)*k,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(p+u))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+x)*I,s[9]=(m-w)*I,s[10]=(1-(p+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);let c=1/r,h=1/o,d=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=si){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),f,g;if(a===si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===eo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),p=(e+t)*c,f=(n+s)*h,g,v;if(a===si)g=(o+r)*d,v=-2*d;else if(a===eo)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new H,Nn=new Le,Ou=new H(0,0,0),ku=new H(1,1,1),pi=new H,Er=new H,Tn=new H,Fc=new Le,zc=new Cn,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bu=0,Oc=new H,Qi=new Cn,Qn=new Le,wr=new H,Us=new H,Hu=new H,Vu=new Cn,kc=new H(1,0,0),Bc=new H(0,1,0),Hc=new H(0,0,1),Vc={type:"added"},Gu={type:"removed"},ts={type:"childadded",child:null},na={type:"childremoved",child:null},ke=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new On,n=new Cn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Te}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Us,wr,this.up):Qn.lookAt(wr,Us,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Qn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new H(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new H,ti=new H,ia=new H,ei=new H,es=new H,ns=new H,Gc=new H,sa=new H,ra=new H,oa=new H,aa=new Je,la=new Je,ca=new Je,yi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),ti.subVectors(n,e),ia.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ti),l=Fn.dot(ia),c=ti.dot(ti),h=ti.dot(ia),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,f=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),ti.subVectors(t,e),Fn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Fn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;es.subVectors(s,n),ns.subVectors(r,n),sa.subVectors(t,n);let l=es.dot(sa),c=ns.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);let h=es.dot(ra),d=ns.dot(ra);if(h>=0&&d<=h)return e.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(es,o);oa.subVectors(t,r);let f=es.dot(oa),g=ns.dot(oa);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ns,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Gc.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Gc,a);let u=1/(m+v+p);return o=v*u,a=p*u,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ue.workingColorSpace){if(t=ic(t,1),e=un(e,0,1),n=un(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return Ue.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Ue.fromWorkingColorSpace(xn.copy(this),t),Math.round(un(xn.r*255,0,255))*65536+Math.round(un(xn.g*255,0,255))*256+Math.round(un(xn.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.fromWorkingColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=fn){Ue.fromWorkingColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Tr);let n=Xs(mi.h,Tr.h,e),s=Xs(mi.s,Tr.s,e),r=Xs(mi.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new le;le.NAMES=$h;var Wu=0,ci=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=$n(),this.name="",this.blending=ps,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},En=class extends ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new H,Ar=new kt,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}};var ao=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lo=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xu=0,In=new Le,fa=new ke,is=new H,An=new li,Ns=new li,hn=new H,Be=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?lo:ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(An.min,Ns.min),An.expandByPoint(hn),hn.addVectors(An.max,Ns.max),An.expandByPoint(hn)):(An.expandByPoint(Ns.min),An.expandByPoint(Ns.max))}An.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),hn.add(is)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new H,l[P]=new H;let c=new H,h=new H,d=new H,p=new kt,f=new kt,g=new kt,v=new H,m=new H;function u(P,M,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,_),p.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),h.sub(c),d.sub(c),f.sub(p),g.sub(p);let b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(b),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[P].add(v),a[M].add(v),a[_].add(v),l[P].add(m),l[M].add(m),l[_].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,M=w.length;P<M;++P){let _=w[P],b=_.start,L=_.count;for(let E=b,S=b+L;E<S;E+=3)u(t.getX(E+0),t.getX(E+1),t.getX(E+2))}let x=new H,y=new H,k=new H,A=new H;function I(P){k.fromBufferAttribute(s,P),A.copy(k);let M=a[P];x.copy(M),x.sub(k.multiplyScalar(k.dot(M))).normalize(),y.crossVectors(A,M);let b=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,b)}for(let P=0,M=w.length;P<M;++P){let _=w[P],b=_.start,L=_.count;for(let E=b,S=b+L;E<S;E+=3)I(t.getX(E+0)),I(t.getX(E+1)),I(t.getX(E+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let p=0,f=t.count;p<f;p+=3){let g=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let u=0;u<h;u++)p[g++]=c[f++]}return new Ge(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=new Le,Ii=new ro,Rr=new Si,Xc=new H,Cr=new H,Ir=new H,Pr=new H,ua=new H,Lr=new H,qc=new H,Dr=new H,ze=class extends ke{constructor(t=new Be,e=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ua.fromBufferAttribute(d,t),o?Lr.addScaledVector(ua,h):Lr.addScaledVector(ua.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Rr,Xc)===null||Ii.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){let m=p[g],u=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,k=x;y<k;y+=3){let A=a.getX(y),I=a.getX(y+1),P=a.getX(y+2);s=Ur(this,u,t,n,c,h,d,A,I,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){let w=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=Ur(this,o,t,n,c,h,d,w,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=p.length;g<v;g++){let m=p[g],u=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,k=x;y<k;y+=3){let A=y,I=y+1,P=y+2;s=Ur(this,u,t,n,c,h,d,A,I,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){let w=m,x=m+1,y=m+2;s=Ur(this,o,t,n,c,h,d,w,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function qu(i,t,e,n,s,r,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Pr);let h=qu(i,t,e,n,Cr,Ir,Pr,qc);if(h){let d=new H;yi.getBarycoord(qc,Cr,Ir,Pr,d),s&&(h.uv=yi.getInterpolatedAttribute(s,a,l,c,d,new kt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,d,new kt)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new H,materialIndex:0};yi.getNormal(Cr,Ir,Pr,p.normal),h.face=p,h.barycoord=d}return h}var De=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function g(v,m,u,w,x,y,k,A,I,P,M){let _=y/I,b=k/P,L=y/2,E=k/2,S=A/2,D=I+1,U=P+1,O=0,V=0,dt=new H;for(let it=0;it<U;it++){let N=it*b-E;for(let Et=0;Et<D;Et++){let Lt=Et*_-L;dt[v]=Lt*w,dt[m]=N*x,dt[u]=S,c.push(dt.x,dt.y,dt.z),dt[v]=0,dt[m]=0,dt[u]=A>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(Et/I),d.push(1-it/P),O+=1}}for(let it=0;it<P;it++)for(let N=0;N<I;N++){let Et=p+N+D*it,Lt=p+N+D*(it+1),C=p+(N+1)+D*(it+1),W=p+(N+1)+D*it;l.push(Et,Lt,W),l.push(Lt,C,W),V+=6}a.addGroup(f,V,M),f+=V,p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var sc={clone:Ss,merge:vn},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},co=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new H,Yc=new kt,$c=new kt,_n=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,$c),e.subVectors($c,Yc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ss=-90,rs=1,ml=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(ss,rs,t,e);s.layers=this.layers,this.add(s);let r=new _n(ss,rs,t,e);r.layers=this.layers,this.add(r);let o=new _n(ss,rs,t,e);o.layers=this.layers,this.add(o);let a=new _n(ss,rs,t,e);a.layers=this.layers,this.add(a);let l=new _n(ss,rs,t,e);l.layers=this.layers,this.add(l);let c=new _n(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ho=class extends Sn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ho(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new De(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:vi});r.uniforms.tEquirect.value=e;let o=new ze(s,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Xn),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},da=new H,Ju=new H,Ku=new Te,ii=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=da.subVectors(n,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new Si,Nr=new H,Ks=class{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],f=s[8],g=s[9],v=s[10],m=s[11],u=s[12],w=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,p-c,m-f,y-u).normalize(),n[1].setComponents(l+r,p+c,m+f,y+u).normalize(),n[2].setComponents(l+o,p+h,m+g,y+w).normalize(),n[3].setComponents(l-o,p-h,m-g,y-w).normalize(),n[4].setComponents(l-a,p-d,m-v,y-x).normalize(),e===si)n[5].setComponents(l+a,p+d,m+v,y+x).normalize();else if(e===eo)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){let g=d[p],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pn=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,p=e/l,f=[],g=[],v=[],m=[];for(let u=0;u<h;u++){let w=u*p-o;for(let x=0;x<c;x++){let y=x*d-r;g.push(y,-w,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){let x=w+c*u,y=w+c*(u+1),k=w+1+c*(u+1),A=w+1+c*u;f.push(x,y,A),f.push(y,k,A)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qu=`#ifdef USE_ALPHAHASH
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
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
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
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
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
}`,vm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,Se={alphahash_fragment:Qu,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ad,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:fd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:xd,color_fragment:yd,color_pars_fragment:vd,color_pars_vertex:_d,color_vertex:Md,common:bd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:wd,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:Xd,envmap_vertex:Nd,fog_vertex:Fd,fog_pars_vertex:zd,fog_fragment:Od,fog_pars_fragment:kd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:fp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:xp,normal_pars_fragment:yp,normal_pars_vertex:vp,normal_vertex:_p,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:wp,opaque_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Ip,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:zp,skinbase_vertex:Op,skinning_pars_vertex:kp,skinning_vertex:Bp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:$p,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Kp,background_vert:jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:fm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:xm,meshnormal_vert:ym,meshnormal_frag:vm,meshphong_vert:_m,meshphong_frag:Mm,meshphysical_vert:bm,meshphysical_frag:Sm,meshtoon_vert:Em,meshtoon_frag:wm,points_vert:Tm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Im,sprite_frag:Pm},Zt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Wn={basic:{uniforms:vn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:vn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new le(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:vn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:vn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:vn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new le(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:vn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:vn([Zt.points,Zt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:vn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:vn([Zt.common,Zt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:vn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:vn([Zt.sprite,Zt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:vn([Zt.common,Zt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:vn([Zt.lights,Zt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Wn.physical={uniforms:vn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};var Fr={r:0,b:0,g:0},Li=new On,Lm=new Le;function Dm(i,t,e,n,s,r,o){let a=new le(0),l=r===!0?0:1,c,h,d=null,p=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function v(w){let x=!1,y=g(w);y===null?u(a,l):y&&y.isColor&&(u(y,1),x=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===Fo)?(h===void 0&&(h=new ze(new De(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ss(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Li)),h.material.toneMapped=Ue.getTransfer(y.colorSpace)!==Oe,(d!==y||p!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ze(new pn(2,2),new bn({name:"BackgroundMaterial",uniforms:Ss(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ue.getTransfer(y.colorSpace)!==Oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,x){w.getRGB(Fr,Zh(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(a,l)},render:v,addToRenderList:m}}function Um(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(_,b,L,E,S){let D=!1,U=d(E,L,b);r!==U&&(r=U,c(r.object)),D=f(_,E,L,S),D&&g(_,E,L,S),S!==null&&t.update(S,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,y(_,b,L,E),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(S).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function d(_,b,L){let E=L.wireframe===!0,S=n[_.id];S===void 0&&(S={},n[_.id]=S);let D=S[b.id];D===void 0&&(D={},S[b.id]=D);let U=D[E];return U===void 0&&(U=p(l()),D[E]=U),U}function p(_){let b=[],L=[],E=[];for(let S=0;S<e;S++)b[S]=0,L[S]=0,E[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:L,attributeDivisors:E,object:_,attributes:{},index:null}}function f(_,b,L,E){let S=r.attributes,D=b.attributes,U=0,O=L.getAttributes();for(let V in O)if(O[V].location>=0){let it=S[V],N=D[V];if(N===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(N=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(N=_.instanceColor)),it===void 0||it.attribute!==N||N&&it.data!==N.data)return!0;U++}return r.attributesNum!==U||r.index!==E}function g(_,b,L,E){let S={},D=b.attributes,U=0,O=L.getAttributes();for(let V in O)if(O[V].location>=0){let it=D[V];it===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(it=_.instanceColor));let N={};N.attribute=it,it&&it.data&&(N.data=it.data),S[V]=N,U++}r.attributes=S,r.attributesNum=U,r.index=E}function v(){let _=r.newAttributes;for(let b=0,L=_.length;b<L;b++)_[b]=0}function m(_){u(_,0)}function u(_,b){let L=r.newAttributes,E=r.enabledAttributes,S=r.attributeDivisors;L[_]=1,E[_]===0&&(i.enableVertexAttribArray(_),E[_]=1),S[_]!==b&&(i.vertexAttribDivisor(_,b),S[_]=b)}function w(){let _=r.newAttributes,b=r.enabledAttributes;for(let L=0,E=b.length;L<E;L++)b[L]!==_[L]&&(i.disableVertexAttribArray(L),b[L]=0)}function x(_,b,L,E,S,D,U){U===!0?i.vertexAttribIPointer(_,b,L,S,D):i.vertexAttribPointer(_,b,L,E,S,D)}function y(_,b,L,E){v();let S=E.attributes,D=L.getAttributes(),U=b.defaultAttributeValues;for(let O in D){let V=D[O];if(V.location>=0){let dt=S[O];if(dt===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(dt=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(dt=_.instanceColor)),dt!==void 0){let it=dt.normalized,N=dt.itemSize,Et=t.get(dt);if(Et===void 0)continue;let Lt=Et.buffer,C=Et.type,W=Et.bytesPerElement,j=C===i.INT||C===i.UNSIGNED_INT||dt.gpuType===Jl;if(dt.isInterleavedBufferAttribute){let X=dt.data,tt=X.stride,ut=dt.offset;if(X.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)u(V.location+Rt,X.meshPerAttribute);_.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)m(V.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Rt=0;Rt<V.locationSize;Rt++)x(V.location+Rt,N/V.locationSize,C,it,tt*W,(ut+N/V.locationSize*Rt)*W,j)}else{if(dt.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)u(V.location+X,dt.meshPerAttribute);_.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let X=0;X<V.locationSize;X++)m(V.location+X);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let X=0;X<V.locationSize;X++)x(V.location+X,N/V.locationSize,C,it,N*W,N/V.locationSize*X*W,j)}}else if(U!==void 0){let it=U[O];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(V.location,it);break;case 3:i.vertexAttrib3fv(V.location,it);break;case 4:i.vertexAttrib4fv(V.location,it);break;default:i.vertexAttrib1fv(V.location,it)}}}}w()}function k(){P();for(let _ in n){let b=n[_];for(let L in b){let E=b[L];for(let S in E)h(E[S].object),delete E[S];delete b[L]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let b=n[_.id];for(let L in b){let E=b[L];for(let S in E)h(E[S].object),delete E[S];delete b[L]}delete n[_.id]}function I(_){for(let b in n){let L=n[b];if(L[_.id]===void 0)continue;let E=L[_.id];for(let S in E)h(E[S].object),delete E[S];delete L[_.id]}}function P(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,p){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*p[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Rn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let P=I===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==oi&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qn&&!P)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:k,maxSamples:A}}function zm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ii,a=new Te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,x=w*4,y=u.clippingState||null;l.value=y,y=h(g,p,x,f);for(let k=0;k!==x;++k)y[k]=e[k];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let u=f+v*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(d[x]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Om(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=vs:a===Fa&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Na||a===Fa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fo=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,Zc=[.125,.215,.35,.446,.526,.582],Fi=20,pa=new fo,Jc=new le,ma=null,ga=0,xa=0,ya=!1,Ui=(1+Math.sqrt(5))/2,os=1/Ui,Kc=[new H(-Ui,os,0),new H(Ui,os,0),new H(-os,0,Ui),new H(os,0,Ui),new H(0,Ui,-os),new H(0,Ui,os),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,xa),this._renderer.xr.enabled=ya,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:cr,format:Rn,colorSpace:Rs,depthBuffer:!1},s=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(r)),this._blurMaterial=Bm(r,t,e)}return s}_compileMaterial(t){let e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){let a=new _n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Yn,h.autoClear=!1;let f=new En({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new ze(new De,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Jc),v=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):w===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let x=this._cubeSize;zr(s,w*x,u>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===vs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(s-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ze(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let u=[],w=0;for(let I=0;I<Fi;++I){let P=I/v,M=Math.exp(-P*P/2);u.push(M),I===0?w+=M:I<m&&(w+=2*M)}for(let I=0;I<u.length;I++)u[I]=u[I]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;let y=this._sizeLods[s],k=3*y*(s>x-us?s-x+us:0),A=4*(this._cubeSize-y);zr(e,k,A,3*y,2*y),l.setRenderTarget(e),l.render(d,pa)}};function km(i){let t=[],e=[],n=[],s=i,r=i-us+1+Zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-us?l=Zc[o-i+us-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,u=1,w=new Float32Array(v*g*f),x=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,P=A>2?0:-1,M=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];w.set(M,v*g*A),x.set(p,m*g*A);let _=[A,A,A,A,A,A];y.set(_,u*g*A)}let k=new Be;k.setAttribute("position",new Ge(w,v)),k.setAttribute("uv",new Ge(x,m)),k.setAttribute("faceIndex",new Ge(y,u)),t.push(k),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(i,t,e){let n=new ai(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bm(i,t,e){let n=new Float32Array(Fi),s=new H(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Qc(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function th(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Hm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Na||l===Fa,h=l===vs||l===_s;if(c||h){let d=t.get(a),p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new uo(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new uo(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let v=p.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}p.removeEventListener("dispose",o),delete s[p.id];let f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(d){let p=d.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){let p=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let w=f.array;v=f.version;for(let x=0,y=w.length;x<y;x+=3){let k=w[x+0],A=w[x+1],I=w[x+2];p.push(k,A,A,I,I,k)}}else if(g!==void 0){let w=g.array;v=g.version;for(let x=0,y=w.length/3-1;x<y;x+=3){let k=x+0,A=x+1,I=x+2;p.push(k,A,A,I,I,k)}}else return;let m=new(Yh(p)?lo:ao)(p,1);m.version=v;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let p=r.get(d);if(p){let f=d.index;f!==null&&p.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];e.update(m,n,1)}function d(p,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/o,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,v,0,g);let u=0;for(let w=0;w<g;w++)u+=f[w]*v[w];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){let n=new WeakMap,s=new Je;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==d){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,k=1;y>t.maxTextureSize&&(k=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*k*4*d),I=new so(A,y,k,d);I.type=qn,I.needsUpdate=!0;let P=x*4;for(let _=0;_<d;_++){let b=m[_],L=u[_],E=w[_],S=y*k*4*_;for(let D=0;D<b.count;D++){let U=D*P;f===!0&&(s.fromBufferAttribute(b,D),A[S+U+0]=s.x,A[S+U+1]=s.y,A[S+U+2]=s.z,A[S+U+3]=0),g===!0&&(s.fromBufferAttribute(L,D),A[S+U+4]=s.x,A[S+U+5]=s.y,A[S+U+6]=s.z,A[S+U+7]=0),v===!0&&(s.fromBufferAttribute(E,D),A[S+U+8]=s.x,A[S+U+9]=s.y,A[S+U+10]=s.z,A[S+U+11]=E.itemSize===4?s.w:1)}}p={count:d,texture:I,size:new kt(y,k)},n.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var po=class extends Sn{constructor(t,e,n,s,r,o,a,l,c,h=ms){if(h!==ms&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=Bi),n===void 0&&h===bs&&(n=Ms),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kh=new Sn,eh=new po(1,1),jh=new so,Qh=new pl,tf=new ho,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),on(e,n)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),on(e,n)}}function t0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(rn(e,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),on(e,n)}}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function r0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function c0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=qh,r=eh):r=Kh,e.setTexture2D(t||r,s)}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function f0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function d0(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return u0}}function p0(i,t){i.uniform1fv(this.addr,t)}function m0(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function g0(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function v0(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _0(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function b0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function E0(i,t){i.uniform4iv(this.addr,t)}function w0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function A0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function C0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Kh,r[o])}function I0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qh,r[o])}function P0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tf,r[o])}function L0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jh,r[o])}function D0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return x0;case 35674:return y0;case 35675:return v0;case 35676:return _0;case 5124:case 35670:return M0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}},yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},va=/(\w+)(\])?(\[|\.)?/g;function ah(i,t){i.seq.push(t),i.map[t.id]=t}function U0(i,t,e){let n=i.name,s=n.length;for(va.lastIndex=0;;){let r=va.exec(n),o=va.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ah(e,c===void 0?new xl(a,i,t):new yl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new vl(a),ah(e,d)),e=d}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);U0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var N0=37297,F0=0;function z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ch=new Te;function O0(i){Ue._getMatrix(ch,Ue.workingColorSpace,i);let t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(Ue.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+z0(i.getShaderSource(t),o)}else return s}function k0(i,t){let e=O0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B0(i,t){let e;switch(t){case Kf:e="Linear";break;case jf:e="Reinhard";break;case Qf:e="Cineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Or=new H;function H0(){Ue.getLuminanceCoefficients(Or);let i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function G0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(X0,Y0)}var q0=new Map;function Y0(i,t){let e=Se[t];if(e===void 0){let n=q0.get(t);if(n!==void 0)e=Se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace($0,Z0)}function Z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case _s:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function tg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=J0(e),c=K0(e),h=j0(e),d=Q0(e),p=tg(e),f=V0(e),g=G0(r),v=s.createProgram(),m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),u.length>0&&(u+=`
`)):(m=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),u=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Se.tonemapping_pars_fragment:"",e.toneMapping!==Yn?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,k0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=_l(o),o=fh(o,e),o=uh(o,e),a=_l(a),a=fh(a,e),a=uh(a,e),o=dh(o),a=dh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=w+m+o,y=w+u+a,k=lh(s,s.VERTEX_SHADER,x),A=lh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,k),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(b){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v).trim(),E=s.getShaderInfoLog(k).trim(),S=s.getShaderInfoLog(A).trim(),D=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,k,A);else{let O=hh(s,k,"vertex"),V=hh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+L+`
`+O+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(E===""||S==="")&&(U=!1);U&&(b.diagnostics={runnable:D,programLog:L,vertexShader:{log:E,prefix:m},fragmentShader:{log:S,prefix:u}})}s.deleteShader(k),s.deleteShader(A),P=new xs(s,v),M=W0(s,v)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,N0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=A,this}var ng=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}};function ig(i,t,e,n,s,r,o){let a=new oo,l=new Ml,c=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,b,L,E){let S=L.fog,D=E.geometry,U=M.isMeshStandardMaterial?L.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),V=O&&O.mapping===Fo?O.image.height:null,dt=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let it=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,N=it!==void 0?it.length:0,Et=0;D.morphAttributes.position!==void 0&&(Et=1),D.morphAttributes.normal!==void 0&&(Et=2),D.morphAttributes.color!==void 0&&(Et=3);let Lt,C,W,j;if(dt){let Q=Wn[dt];Lt=Q.vertexShader,C=Q.fragmentShader}else Lt=M.vertexShader,C=M.fragmentShader,l.update(M),W=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let X=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ut=E.isInstancedMesh===!0,Rt=E.isBatchedMesh===!0,Ft=!!M.map,nt=!!M.matcap,pt=!!O,B=!!M.aoMap,Ht=!!M.lightMap,J=!!M.bumpMap,$=!!M.normalMap,mt=!!M.displacementMap,q=!!M.emissiveMap,Pt=!!M.metalnessMap,z=!!M.roughnessMap,R=M.anisotropy>0,at=M.clearcoat>0,Mt=M.dispersion>0,It=M.iridescence>0,Z=M.sheen>0,rt=M.transmission>0,ot=R&&!!M.anisotropyMap,xt=at&&!!M.clearcoatMap,Tt=at&&!!M.clearcoatNormalMap,St=at&&!!M.clearcoatRoughnessMap,Ut=It&&!!M.iridescenceMap,qt=It&&!!M.iridescenceThicknessMap,se=Z&&!!M.sheenColorMap,$t=Z&&!!M.sheenRoughnessMap,de=!!M.specularMap,ce=!!M.specularColorMap,Re=!!M.specularIntensityMap,st=rt&&!!M.transmissionMap,Yt=rt&&!!M.thicknessMap,Ct=!!M.gradientMap,zt=!!M.alphaMap,Kt=M.alphaTest>0,jt=!!M.alphaHash,_e=!!M.extensions,T=Yn;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(T=i.toneMapping);let et={shaderID:dt,shaderType:M.type,shaderName:M.name,vertexShader:Lt,fragmentShader:C,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&E._colorsTexture!==null,instancing:ut,instancingColor:ut&&E.instanceColor!==null,instancingMorph:ut&&E.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rs,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:nt,envMap:pt,envMapMode:pt&&O.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:Ht,bumpMap:J,normalMap:$,displacementMap:p&&mt,emissiveMap:q,normalMapObjectSpace:$&&M.normalMapType===au,normalMapTangentSpace:$&&M.normalMapType===Xh,metalnessMap:Pt,roughnessMap:z,anisotropy:R,anisotropyMap:ot,clearcoat:at,clearcoatMap:xt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:St,dispersion:Mt,iridescence:It,iridescenceMap:Ut,iridescenceThicknessMap:qt,sheen:Z,sheenColorMap:se,sheenRoughnessMap:$t,specularMap:de,specularColorMap:ce,specularIntensityMap:Re,transmission:rt,transmissionMap:st,thicknessMap:Yt,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===ps&&M.alphaToCoverage===!1,alphaMap:zt,alphaTest:Kt,alphaHash:jt,combine:M.combine,mapUv:Ft&&v(M.map.channel),aoMapUv:B&&v(M.aoMap.channel),lightMapUv:Ht&&v(M.lightMap.channel),bumpMapUv:J&&v(M.bumpMap.channel),normalMapUv:$&&v(M.normalMap.channel),displacementMapUv:mt&&v(M.displacementMap.channel),emissiveMapUv:q&&v(M.emissiveMap.channel),metalnessMapUv:Pt&&v(M.metalnessMap.channel),roughnessMapUv:z&&v(M.roughnessMap.channel),anisotropyMapUv:ot&&v(M.anisotropyMap.channel),clearcoatMapUv:xt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:$t&&v(M.sheenRoughnessMap.channel),specularMapUv:de&&v(M.specularMap.channel),specularColorMapUv:ce&&v(M.specularColorMap.channel),specularIntensityMapUv:Re&&v(M.specularIntensityMap.channel),transmissionMapUv:st&&v(M.transmissionMap.channel),thicknessMapUv:Yt&&v(M.thicknessMap.channel),alphaMapUv:zt&&v(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&($||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!D.attributes.uv&&(Ft||zt),fog:!!S,useFog:M.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:tt,skinning:E.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Et,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:T,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&Ue.getTransfer(M.map.colorSpace)===Oe,decodeVideoTextureEmissive:q&&M.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(M.emissiveMap.colorSpace)===Oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Qe,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&M.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function u(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let b in M.defines)_.push(b),_.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(w(_,M),x(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function w(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function x(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let _=g[M.type],b;if(_){let L=Wn[_];b=sc.clone(L.uniforms)}else b=M.uniforms;return b}function k(M,_){let b;for(let L=0,E=h.length;L<E;L++){let S=h[L];if(S.cacheKey===_){b=S,++b.usedTimes;break}}return b===void 0&&(b=new eg(i,_,M,r),h.push(b)),b}function A(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function I(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:k,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:P}}function sg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,p,f,g,v,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function a(d,p,f,g,v,m){let u=o(d,p,f,g,v,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function l(d,p,f,g,v,m){let u=o(d,p,f,g,v,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,p){e.length>1&&e.sort(d||rg),n.length>1&&n.sort(p||mh),s.length>1&&s.sort(p||mh)}function h(){for(let d=t,p=i.length;d<p;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function og(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ag(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new le};break;case"SpotLight":e={position:new H,direction:new H,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function lg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cg=0;function hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fg(i){let t=new ag,e=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Le,o=new Le;function a(c){let h=0,d=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,u=0,w=0,x=0,y=0,k=0,A=0,I=0;c.sort(hg);for(let M=0,_=c.length;M<_;M++){let b=c[M],L=b.color,E=b.intensity,S=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=L.r*E,d+=L.g*E,p+=L.b*E;else if(b.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(b.sh.coefficients[U],E);I++}else if(b.isDirectionalLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let O=b.shadow,V=e.get(b);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=b.shadow.matrix,w++}n.directional[f]=U,f++}else if(b.isSpotLight){let U=t.get(b);U.position.setFromMatrixPosition(b.matrixWorld),U.color.copy(L).multiplyScalar(E),U.distance=S,U.coneCos=Math.cos(b.angle),U.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),U.decay=b.decay,n.spot[v]=U;let O=b.shadow;if(b.map&&(n.spotLightMap[k]=b.map,k++,O.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[v]=O.matrix,b.castShadow){let V=e.get(b);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=D,y++}v++}else if(b.isRectAreaLight){let U=t.get(b);U.color.copy(L).multiplyScalar(E),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=U,m++}else if(b.isPointLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),U.distance=b.distance,U.decay=b.decay,b.castShadow){let O=b.shadow,V=e.get(b);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,V.shadowCameraNear=O.camera.near,V.shadowCameraFar=O.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=U,g++}else if(b.isHemisphereLight){let U=t.get(b);U.skyColor.copy(b.color).multiplyScalar(E),U.groundColor.copy(b.groundColor).multiplyScalar(E),n.hemi[u]=U,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==w||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==k||P.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+k-A,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=w,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=k,P.numLightProbes=I,n.version=cg++)}function l(c,h){let d=0,p=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let x=c[u];if(x.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function xh(i){let t=new fg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ug(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xh(i),t.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sl=class extends ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dg=`void main() {
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
}`;function mg(i,t,e){let n=new Ks,s=new kt,r=new kt,o=new Je,a=new Sl({depthPacking:ou}),l=new El,c={},h=e.maxTextureSize,d={[Mi]:dn,[dn]:Mi,[Qe]:Qe},p=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:dg,fragmentShader:pg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ze(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let u=this.type;this.render=function(A,I,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),L=i.state;L.setBlending(vi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let E=u!==ni&&this.type===ni,S=u===ni&&this.type!==ni;for(let D=0,U=A.length;D<U;D++){let O=A[D],V=O.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let dt=V.getFrameExtents();if(s.multiply(dt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,V.mapSize.y=r.y)),V.map===null||E===!0||S===!0){let N=this.type!==ni?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new ai(s.x,s.y,N),V.map.texture.name=O.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let it=V.getViewportCount();for(let N=0;N<it;N++){let Et=V.getViewport(N);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),L.viewport(o),V.updateMatrices(O,N),n=V.getFrustum(),y(I,P,V.camera,O,this.type)}V.isPointLightShadow!==!0&&this.type===ni&&w(V,P),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,b)};function w(A,I){let P=t.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,P,p,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,P,f,v,null)}function x(A,I,P,M){let _=null,b=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)_=b;else if(_=P.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let L=_.uuid,E=I.uuid,S=c[L];S===void 0&&(S={},c[L]=S);let D=S[E];D===void 0&&(D=_.clone(),S[E]=D,I.addEventListener("dispose",k)),_=D}if(_.visible=I.visible,_.wireframe=I.wireframe,M===ni?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:d[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let L=i.properties.get(_);L.light=P}return _}function y(A,I,P,M,_){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===ni)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let E=t.update(A),S=A.material;if(Array.isArray(S)){let D=E.groups;for(let U=0,O=D.length;U<O;U++){let V=D[U],dt=S[V.materialIndex];if(dt&&dt.visible){let it=x(A,dt,M,_);A.onBeforeShadow(i,A,I,P,E,it,V),i.renderBufferDirect(P,null,E,it,A,V),A.onAfterShadow(i,A,I,P,E,it,V)}}}else if(S.visible){let D=x(A,S,M,_);A.onBeforeShadow(i,A,I,P,E,D,null),i.renderBufferDirect(P,null,E,D,A,null),A.onAfterShadow(i,A,I,P,E,D,null)}}let L=A.children;for(let E=0,S=L.length;E<S;E++)y(L[E],I,P,M,_)}function k(A){A.target.removeEventListener("dispose",k);for(let P in c){let M=c[P],_=A.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var gg={[Ra]:Ca,[Ia]:Da,[Pa]:Ua,[ys]:La,[Ca]:Ra,[Da]:Ia,[Ua]:Pa,[La]:ys};function xg(i,t){function e(){let st=!1,Yt=new Je,Ct=null,zt=new Je(0,0,0,0);return{setMask:function(Kt){Ct!==Kt&&!st&&(i.colorMask(Kt,Kt,Kt,Kt),Ct=Kt)},setLocked:function(Kt){st=Kt},setClear:function(Kt,jt,_e,T,et){et===!0&&(Kt*=T,jt*=T,_e*=T),Yt.set(Kt,jt,_e,T),zt.equals(Yt)===!1&&(i.clearColor(Kt,jt,_e,T),zt.copy(Yt))},reset:function(){st=!1,Ct=null,zt.set(-1,0,0,0)}}}function n(){let st=!1,Yt=!1,Ct=null,zt=null,Kt=null;return{setReversed:function(jt){if(Yt!==jt){let _e=t.get("EXT_clip_control");Yt?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT);let T=Kt;Kt=null,this.setClear(T)}Yt=jt},getReversed:function(){return Yt},setTest:function(jt){jt?X(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(jt){Ct!==jt&&!st&&(i.depthMask(jt),Ct=jt)},setFunc:function(jt){if(Yt&&(jt=gg[jt]),zt!==jt){switch(jt){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=jt}},setLocked:function(jt){st=jt},setClear:function(jt){Kt!==jt&&(Yt&&(jt=1-jt),i.clearDepth(jt),Kt=jt)},reset:function(){st=!1,Ct=null,zt=null,Kt=null,Yt=!1}}}function s(){let st=!1,Yt=null,Ct=null,zt=null,Kt=null,jt=null,_e=null,T=null,et=null;return{setTest:function(Q){st||(Q?X(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(Q){Yt!==Q&&!st&&(i.stencilMask(Q),Yt=Q)},setFunc:function(Q,lt,vt){(Ct!==Q||zt!==lt||Kt!==vt)&&(i.stencilFunc(Q,lt,vt),Ct=Q,zt=lt,Kt=vt)},setOp:function(Q,lt,vt){(jt!==Q||_e!==lt||T!==vt)&&(i.stencilOp(Q,lt,vt),jt=Q,_e=lt,T=vt)},setLocked:function(Q){st=Q},setClear:function(Q){et!==Q&&(i.clearStencil(Q),et=Q)},reset:function(){st=!1,Yt=null,Ct=null,zt=null,Kt=null,jt=null,_e=null,T=null,et=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,w=null,x=null,y=null,k=null,A=null,I=new le(0,0,0),P=0,M=!1,_=null,b=null,L=null,E=null,S=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,O=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=O>=2);let dt=null,it={},N=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Lt=new Je().fromArray(N),C=new Je().fromArray(Et);function W(st,Yt,Ct,zt){let Kt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(st,jt),i.texParameteri(st,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(st,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<Ct;_e++)st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?i.texImage3D(Yt,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(Yt+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return jt}let j={};j[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(ys),J(!1),$(vc),X(i.CULL_FACE),B(vi);function X(st){h[st]!==!0&&(i.enable(st),h[st]=!0)}function tt(st){h[st]!==!1&&(i.disable(st),h[st]=!1)}function ut(st,Yt){return d[st]!==Yt?(i.bindFramebuffer(st,Yt),d[st]=Yt,st===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Yt),st===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Yt),!0):!1}function Rt(st,Yt){let Ct=f,zt=!1;if(st){Ct=p.get(Yt),Ct===void 0&&(Ct=[],p.set(Yt,Ct));let Kt=st.textures;if(Ct.length!==Kt.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,_e=Kt.length;jt<_e;jt++)Ct[jt]=i.COLOR_ATTACHMENT0+jt;Ct.length=Kt.length,zt=!0}}else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,zt=!0);zt&&i.drawBuffers(Ct)}function Ft(st){return g!==st?(i.useProgram(st),g=st,!0):!1}let nt={[Ni]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Df]:i.FUNC_REVERSE_SUBTRACT};nt[Uf]=i.MIN,nt[Nf]=i.MAX;let pt={[Ff]:i.ZERO,[zf]:i.ONE,[Of]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function B(st,Yt,Ct,zt,Kt,jt,_e,T,et,Q){if(st===vi){v===!0&&(tt(i.BLEND),v=!1);return}if(v===!1&&(X(i.BLEND),v=!0),st!==Pf){if(st!==m||Q!==M){if((u!==Ni||y!==Ni)&&(i.blendEquation(i.FUNC_ADD),u=Ni,y=Ni),Q)switch(st){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",st);break}else switch(st){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",st);break}w=null,x=null,k=null,A=null,I.set(0,0,0),P=0,m=st,M=Q}return}Kt=Kt||Yt,jt=jt||Ct,_e=_e||zt,(Yt!==u||Kt!==y)&&(i.blendEquationSeparate(nt[Yt],nt[Kt]),u=Yt,y=Kt),(Ct!==w||zt!==x||jt!==k||_e!==A)&&(i.blendFuncSeparate(pt[Ct],pt[zt],pt[jt],pt[_e]),w=Ct,x=zt,k=jt,A=_e),(T.equals(I)===!1||et!==P)&&(i.blendColor(T.r,T.g,T.b,et),I.copy(T),P=et),m=st,M=!1}function Ht(st,Yt){st.side===Qe?tt(i.CULL_FACE):X(i.CULL_FACE);let Ct=st.side===dn;Yt&&(Ct=!Ct),J(Ct),st.blending===ps&&st.transparent===!1?B(vi):B(st.blending,st.blendEquation,st.blendSrc,st.blendDst,st.blendEquationAlpha,st.blendSrcAlpha,st.blendDstAlpha,st.blendColor,st.blendAlpha,st.premultipliedAlpha),o.setFunc(st.depthFunc),o.setTest(st.depthTest),o.setMask(st.depthWrite),r.setMask(st.colorWrite);let zt=st.stencilWrite;a.setTest(zt),zt&&(a.setMask(st.stencilWriteMask),a.setFunc(st.stencilFunc,st.stencilRef,st.stencilFuncMask),a.setOp(st.stencilFail,st.stencilZFail,st.stencilZPass)),q(st.polygonOffset,st.polygonOffsetFactor,st.polygonOffsetUnits),st.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(st){_!==st&&(st?i.frontFace(i.CW):i.frontFace(i.CCW),_=st)}function $(st){st!==Cf?(X(i.CULL_FACE),st!==b&&(st===vc?i.cullFace(i.BACK):st===If?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),b=st}function mt(st){st!==L&&(U&&i.lineWidth(st),L=st)}function q(st,Yt,Ct){st?(X(i.POLYGON_OFFSET_FILL),(E!==Yt||S!==Ct)&&(i.polygonOffset(Yt,Ct),E=Yt,S=Ct)):tt(i.POLYGON_OFFSET_FILL)}function Pt(st){st?X(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function z(st){st===void 0&&(st=i.TEXTURE0+D-1),dt!==st&&(i.activeTexture(st),dt=st)}function R(st,Yt,Ct){Ct===void 0&&(dt===null?Ct=i.TEXTURE0+D-1:Ct=dt);let zt=it[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},it[Ct]=zt),(zt.type!==st||zt.texture!==Yt)&&(dt!==Ct&&(i.activeTexture(Ct),dt=Ct),i.bindTexture(st,Yt||j[st]),zt.type=st,zt.texture=Yt)}function at(){let st=it[dt];st!==void 0&&st.type!==void 0&&(i.bindTexture(st.type,null),st.type=void 0,st.texture=void 0)}function Mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function It(){try{i.compressedTexImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function rt(){try{i.texSubImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function se(st){Lt.equals(st)===!1&&(i.scissor(st.x,st.y,st.z,st.w),Lt.copy(st))}function $t(st){C.equals(st)===!1&&(i.viewport(st.x,st.y,st.z,st.w),C.copy(st))}function de(st,Yt){let Ct=c.get(Yt);Ct===void 0&&(Ct=new WeakMap,c.set(Yt,Ct));let zt=Ct.get(st);zt===void 0&&(zt=i.getUniformBlockIndex(Yt,st.name),Ct.set(st,zt))}function ce(st,Yt){let zt=c.get(Yt).get(st);l.get(Yt)!==zt&&(i.uniformBlockBinding(Yt,zt,st.__bindingPointIndex),l.set(Yt,zt))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,it={},d={},p=new WeakMap,f=[],g=null,v=!1,m=null,u=null,w=null,x=null,y=null,k=null,A=null,I=new le(0,0,0),P=0,M=!1,_=null,b=null,L=null,E=null,S=null,Lt.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:tt,bindFramebuffer:ut,drawBuffers:Rt,useProgram:Ft,setBlending:B,setMaterial:Ht,setFlipSided:J,setCullFace:$,setLineWidth:mt,setPolygonOffset:q,setScissorTest:Pt,activeTexture:z,bindTexture:R,unbindTexture:at,compressedTexImage2D:Mt,compressedTexImage3D:It,texImage2D:Ut,texImage3D:qt,updateUBOMapping:de,uniformBlockBinding:ce,texStorage2D:Tt,texStorage3D:St,texSubImage2D:Z,texSubImage3D:rt,compressedTexSubImage2D:ot,compressedTexSubImage3D:xt,scissor:se,viewport:$t,reset:Re}}function yh(i,t,e,n){let s=yg(n);switch(e){case kh:return i*t;case Hh:return i*t;case Vh:return i*t*2;case Ql:return i*t/s.components*s.byteLength;case tc:return i*t/s.components*s.byteLength;case Gh:return i*t*2/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case nc:return i*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wh:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yg(i){switch(i){case oi:case Fh:return{byteLength:1,components:1};case Zs:case zh:case cr:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case Bi:case Jl:case qn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap,d,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,R){return f?new OffscreenCanvas(z,R):no("canvas")}function v(z,R,at){let Mt=1,It=Pt(z);if((It.width>at||It.height>at)&&(Mt=at/Math.max(It.width,It.height)),Mt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let Z=Math.floor(Mt*It.width),rt=Math.floor(Mt*It.height);d===void 0&&(d=g(Z,rt));let ot=R?g(Z,rt):d;return ot.width=Z,ot.height=rt,ot.getContext("2d").drawImage(z,0,0,Z,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+It.width+"x"+It.height+") to ("+Z+"x"+rt+")."),ot}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+It.width+"x"+It.height+")."),z;return z}function m(z){return z.generateMipmaps}function u(z){i.generateMipmap(z)}function w(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(z,R,at,Mt,It=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Z=R;if(R===i.RED&&(at===i.FLOAT&&(Z=i.R32F),at===i.HALF_FLOAT&&(Z=i.R16F),at===i.UNSIGNED_BYTE&&(Z=i.R8)),R===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(Z=i.R8UI),at===i.UNSIGNED_SHORT&&(Z=i.R16UI),at===i.UNSIGNED_INT&&(Z=i.R32UI),at===i.BYTE&&(Z=i.R8I),at===i.SHORT&&(Z=i.R16I),at===i.INT&&(Z=i.R32I)),R===i.RG&&(at===i.FLOAT&&(Z=i.RG32F),at===i.HALF_FLOAT&&(Z=i.RG16F),at===i.UNSIGNED_BYTE&&(Z=i.RG8)),R===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(Z=i.RG8UI),at===i.UNSIGNED_SHORT&&(Z=i.RG16UI),at===i.UNSIGNED_INT&&(Z=i.RG32UI),at===i.BYTE&&(Z=i.RG8I),at===i.SHORT&&(Z=i.RG16I),at===i.INT&&(Z=i.RG32I)),R===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),at===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),at===i.UNSIGNED_INT&&(Z=i.RGB32UI),at===i.BYTE&&(Z=i.RGB8I),at===i.SHORT&&(Z=i.RGB16I),at===i.INT&&(Z=i.RGB32I)),R===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),at===i.UNSIGNED_INT&&(Z=i.RGBA32UI),at===i.BYTE&&(Z=i.RGBA8I),at===i.SHORT&&(Z=i.RGBA16I),at===i.INT&&(Z=i.RGBA32I)),R===i.RGB&&at===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),R===i.RGBA){let rt=It?zo:Ue.getTransfer(Mt);at===i.FLOAT&&(Z=i.RGBA32F),at===i.HALF_FLOAT&&(Z=i.RGBA16F),at===i.UNSIGNED_BYTE&&(Z=rt===Oe?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(z,R){let at;return z?R===null||R===Bi||R===Ms?at=i.DEPTH24_STENCIL8:R===qn?at=i.DEPTH32F_STENCIL8:R===Zs&&(at=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Bi||R===Ms?at=i.DEPTH_COMPONENT24:R===qn?at=i.DEPTH_COMPONENT32F:R===Zs&&(at=i.DEPTH_COMPONENT16),at}function k(z,R){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==Mn&&z.minFilter!==Xn?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function A(z){let R=z.target;R.removeEventListener("dispose",A),P(R),R.isVideoTexture&&h.delete(R)}function I(z){let R=z.target;R.removeEventListener("dispose",I),_(R)}function P(z){let R=n.get(z);if(R.__webglInit===void 0)return;let at=z.source,Mt=p.get(at);if(Mt){let It=Mt[R.__cacheKey];It.usedTimes--,It.usedTimes===0&&M(z),Object.keys(Mt).length===0&&p.delete(at)}n.remove(z)}function M(z){let R=n.get(z);i.deleteTexture(R.__webglTexture);let at=z.source,Mt=p.get(at);delete Mt[R.__cacheKey],o.memory.textures--}function _(z){let R=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Mt=0;Mt<6;Mt++){if(Array.isArray(R.__webglFramebuffer[Mt]))for(let It=0;It<R.__webglFramebuffer[Mt].length;It++)i.deleteFramebuffer(R.__webglFramebuffer[Mt][It]);else i.deleteFramebuffer(R.__webglFramebuffer[Mt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Mt])}else{if(Array.isArray(R.__webglFramebuffer))for(let Mt=0;Mt<R.__webglFramebuffer.length;Mt++)i.deleteFramebuffer(R.__webglFramebuffer[Mt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Mt=0;Mt<R.__webglColorRenderbuffer.length;Mt++)R.__webglColorRenderbuffer[Mt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Mt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let at=z.textures;for(let Mt=0,It=at.length;Mt<It;Mt++){let Z=n.get(at[Mt]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(at[Mt])}n.remove(z)}let b=0;function L(){b=0}function E(){let z=b;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),b+=1,z}function S(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function D(z,R){let at=n.get(z);if(z.isVideoTexture&&mt(z),z.isRenderTargetTexture===!1&&z.version>0&&at.__version!==z.version){let Mt=z.image;if(Mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(at,z,R);return}}e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+R)}function U(z,R){let at=n.get(z);if(z.version>0&&at.__version!==z.version){C(at,z,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+R)}function O(z,R){let at=n.get(z);if(z.version>0&&at.__version!==z.version){C(at,z,R);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+R)}function V(z,R){let at=n.get(z);if(z.version>0&&at.__version!==z.version){W(at,z,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+R)}let dt={[ki]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},it={[Mn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},N={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[qh]:i.LEQUAL,[hu]:i.EQUAL,[du]:i.GEQUAL,[fu]:i.GREATER,[uu]:i.NOTEQUAL};function Et(z,R){if(R.type===qn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Xn||R.magFilter===qo||R.magFilter===yr||R.magFilter===Oi||R.minFilter===Xn||R.minFilter===qo||R.minFilter===yr||R.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,dt[R.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,dt[R.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,dt[R.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,it[R.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,it[R.minFilter]),R.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,N[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Mn||R.minFilter!==yr&&R.minFilter!==Oi||R.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Lt(z,R){let at=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",A));let Mt=R.source,It=p.get(Mt);It===void 0&&(It={},p.set(Mt,It));let Z=S(R);if(Z!==z.__cacheKey){It[Z]===void 0&&(It[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,at=!0),It[Z].usedTimes++;let rt=It[z.__cacheKey];rt!==void 0&&(It[z.__cacheKey].usedTimes--,rt.usedTimes===0&&M(R)),z.__cacheKey=Z,z.__webglTexture=It[Z].texture}return at}function C(z,R,at){let Mt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Mt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Mt=i.TEXTURE_3D);let It=Lt(z,R),Z=R.source;e.bindTexture(Mt,z.__webglTexture,i.TEXTURE0+at);let rt=n.get(Z);if(Z.version!==rt.__version||It===!0){e.activeTexture(i.TEXTURE0+at);let ot=Ue.getPrimaries(Ue.workingColorSpace),xt=R.colorSpace===xi?null:Ue.getPrimaries(R.colorSpace),Tt=R.colorSpace===xi||ot===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let St=v(R.image,!1,s.maxTextureSize);St=q(R,St);let Ut=r.convert(R.format,R.colorSpace),qt=r.convert(R.type),se=x(R.internalFormat,Ut,qt,R.colorSpace,R.isVideoTexture);Et(Mt,R);let $t,de=R.mipmaps,ce=R.isVideoTexture!==!0,Re=rt.__version===void 0||It===!0,st=Z.dataReady,Yt=k(R,St);if(R.isDepthTexture)se=y(R.format===bs,R.type),Re&&(ce?e.texStorage2D(i.TEXTURE_2D,1,se,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,se,St.width,St.height,0,Ut,qt,null));else if(R.isDataTexture)if(de.length>0){ce&&Re&&e.texStorage2D(i.TEXTURE_2D,Yt,se,de[0].width,de[0].height);for(let Ct=0,zt=de.length;Ct<zt;Ct++)$t=de[Ct],ce?st&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,$t.width,$t.height,Ut,qt,$t.data):e.texImage2D(i.TEXTURE_2D,Ct,se,$t.width,$t.height,0,Ut,qt,$t.data);R.generateMipmaps=!1}else ce?(Re&&e.texStorage2D(i.TEXTURE_2D,Yt,se,St.width,St.height),st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,Ut,qt,St.data)):e.texImage2D(i.TEXTURE_2D,0,se,St.width,St.height,0,Ut,qt,St.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ce&&Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,se,de[0].width,de[0].height,St.depth);for(let Ct=0,zt=de.length;Ct<zt;Ct++)if($t=de[Ct],R.format!==Rn)if(Ut!==null)if(ce){if(st)if(R.layerUpdates.size>0){let Kt=yh($t.width,$t.height,R.format,R.type);for(let jt of R.layerUpdates){let _e=$t.data.subarray(jt*Kt/$t.data.BYTES_PER_ELEMENT,(jt+1)*Kt/$t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,jt,$t.width,$t.height,1,Ut,_e)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,$t.width,$t.height,St.depth,Ut,$t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ct,se,$t.width,$t.height,St.depth,0,$t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,$t.width,$t.height,St.depth,Ut,qt,$t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Ct,se,$t.width,$t.height,St.depth,0,Ut,qt,$t.data)}else{ce&&Re&&e.texStorage2D(i.TEXTURE_2D,Yt,se,de[0].width,de[0].height);for(let Ct=0,zt=de.length;Ct<zt;Ct++)$t=de[Ct],R.format!==Rn?Ut!==null?ce?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,Ct,0,0,$t.width,$t.height,Ut,$t.data):e.compressedTexImage2D(i.TEXTURE_2D,Ct,se,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?st&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,$t.width,$t.height,Ut,qt,$t.data):e.texImage2D(i.TEXTURE_2D,Ct,se,$t.width,$t.height,0,Ut,qt,$t.data)}else if(R.isDataArrayTexture)if(ce){if(Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,se,St.width,St.height,St.depth),st)if(R.layerUpdates.size>0){let Ct=yh(St.width,St.height,R.format,R.type);for(let zt of R.layerUpdates){let Kt=St.data.subarray(zt*Ct/St.data.BYTES_PER_ELEMENT,(zt+1)*Ct/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,St.width,St.height,1,Ut,qt,Kt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Ut,qt,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,se,St.width,St.height,St.depth,0,Ut,qt,St.data);else if(R.isData3DTexture)ce?(Re&&e.texStorage3D(i.TEXTURE_3D,Yt,se,St.width,St.height,St.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Ut,qt,St.data)):e.texImage3D(i.TEXTURE_3D,0,se,St.width,St.height,St.depth,0,Ut,qt,St.data);else if(R.isFramebufferTexture){if(Re)if(ce)e.texStorage2D(i.TEXTURE_2D,Yt,se,St.width,St.height);else{let Ct=St.width,zt=St.height;for(let Kt=0;Kt<Yt;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,se,Ct,zt,0,Ut,qt,null),Ct>>=1,zt>>=1}}else if(de.length>0){if(ce&&Re){let Ct=Pt(de[0]);e.texStorage2D(i.TEXTURE_2D,Yt,se,Ct.width,Ct.height)}for(let Ct=0,zt=de.length;Ct<zt;Ct++)$t=de[Ct],ce?st&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,Ut,qt,$t):e.texImage2D(i.TEXTURE_2D,Ct,se,Ut,qt,$t);R.generateMipmaps=!1}else if(ce){if(Re){let Ct=Pt(St);e.texStorage2D(i.TEXTURE_2D,Yt,se,Ct.width,Ct.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,qt,St)}else e.texImage2D(i.TEXTURE_2D,0,se,Ut,qt,St);m(R)&&u(Mt),rt.__version=Z.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function W(z,R,at){if(R.image.length!==6)return;let Mt=Lt(z,R),It=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+at);let Z=n.get(It);if(It.version!==Z.__version||Mt===!0){e.activeTexture(i.TEXTURE0+at);let rt=Ue.getPrimaries(Ue.workingColorSpace),ot=R.colorSpace===xi?null:Ue.getPrimaries(R.colorSpace),xt=R.colorSpace===xi||rt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Tt=R.isCompressedTexture||R.image[0].isCompressedTexture,St=R.image[0]&&R.image[0].isDataTexture,Ut=[];for(let zt=0;zt<6;zt++)!Tt&&!St?Ut[zt]=v(R.image[zt],!0,s.maxCubemapSize):Ut[zt]=St?R.image[zt].image:R.image[zt],Ut[zt]=q(R,Ut[zt]);let qt=Ut[0],se=r.convert(R.format,R.colorSpace),$t=r.convert(R.type),de=x(R.internalFormat,se,$t,R.colorSpace),ce=R.isVideoTexture!==!0,Re=Z.__version===void 0||Mt===!0,st=It.dataReady,Yt=k(R,qt);Et(i.TEXTURE_CUBE_MAP,R);let Ct;if(Tt){ce&&Re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,de,qt.width,qt.height);for(let zt=0;zt<6;zt++){Ct=Ut[zt].mipmaps;for(let Kt=0;Kt<Ct.length;Kt++){let jt=Ct[Kt];R.format!==Rn?se!==null?ce?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt,0,0,jt.width,jt.height,se,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt,de,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt,0,0,jt.width,jt.height,se,$t,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt,de,jt.width,jt.height,0,se,$t,jt.data)}}}else{if(Ct=R.mipmaps,ce&&Re){Ct.length>0&&Yt++;let zt=Pt(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,de,zt.width,zt.height)}for(let zt=0;zt<6;zt++)if(St){ce?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,0,0,Ut[zt].width,Ut[zt].height,se,$t,Ut[zt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,de,Ut[zt].width,Ut[zt].height,0,se,$t,Ut[zt].data);for(let Kt=0;Kt<Ct.length;Kt++){let _e=Ct[Kt].image[zt].image;ce?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt+1,0,0,_e.width,_e.height,se,$t,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt+1,de,_e.width,_e.height,0,se,$t,_e.data)}}else{ce?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,0,0,se,$t,Ut[zt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,de,se,$t,Ut[zt]);for(let Kt=0;Kt<Ct.length;Kt++){let jt=Ct[Kt];ce?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt+1,0,0,se,$t,jt.image[zt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Kt+1,de,se,$t,jt.image[zt])}}}m(R)&&u(i.TEXTURE_CUBE_MAP),Z.__version=It.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function j(z,R,at,Mt,It,Z){let rt=r.convert(at.format,at.colorSpace),ot=r.convert(at.type),xt=x(at.internalFormat,rt,ot,at.colorSpace),Tt=n.get(R),St=n.get(at);if(St.__renderTarget=R,!Tt.__hasExternalTextures){let Ut=Math.max(1,R.width>>Z),qt=Math.max(1,R.height>>Z);It===i.TEXTURE_3D||It===i.TEXTURE_2D_ARRAY?e.texImage3D(It,Z,xt,Ut,qt,R.depth,0,rt,ot,null):e.texImage2D(It,Z,xt,Ut,qt,0,rt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),$(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,It,St.__webglTexture,0,J(R)):(It===i.TEXTURE_2D||It>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&It<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Mt,It,St.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(z,R,at){if(i.bindRenderbuffer(i.RENDERBUFFER,z),R.depthBuffer){let Mt=R.depthTexture,It=Mt&&Mt.isDepthTexture?Mt.type:null,Z=y(R.stencilBuffer,It),rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=J(R);$(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Z,R.width,R.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Z,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Z,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,z)}else{let Mt=R.textures;for(let It=0;It<Mt.length;It++){let Z=Mt[It],rt=r.convert(Z.format,Z.colorSpace),ot=r.convert(Z.type),xt=x(Z.internalFormat,rt,ot,Z.colorSpace),Tt=J(R);at&&$(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,xt,R.width,R.height):$(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,xt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,xt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Mt=n.get(R.depthTexture);Mt.__renderTarget=R,(!Mt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),D(R.depthTexture,0);let It=Mt.__webglTexture,Z=J(R);if(R.depthTexture.format===ms)$(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,It,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,It,0);else if(R.depthTexture.format===bs)$(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,It,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,It,0);else throw new Error("Unknown depthTexture format")}function ut(z){let R=n.get(z),at=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let Mt=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Mt){let It=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Mt.removeEventListener("dispose",It)};Mt.addEventListener("dispose",It),R.__depthDisposeCallback=It}R.__boundDepthTexture=Mt}if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");tt(R.__webglFramebuffer,z)}else if(at){R.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Mt]),R.__webglDepthbuffer[Mt]===void 0)R.__webglDepthbuffer[Mt]=i.createRenderbuffer(),X(R.__webglDepthbuffer[Mt],z,!1);else{let It=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=R.__webglDepthbuffer[Mt];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),X(R.__webglDepthbuffer,z,!1);else{let Mt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,It)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(z,R,at){let Mt=n.get(z);R!==void 0&&j(Mt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&ut(z)}function Ft(z){let R=z.texture,at=n.get(z),Mt=n.get(R);z.addEventListener("dispose",I);let It=z.textures,Z=z.isWebGLCubeRenderTarget===!0,rt=It.length>1;if(rt||(Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture()),Mt.__version=R.version,o.memory.textures++),Z){at.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer[ot]=[];for(let xt=0;xt<R.mipmaps.length;xt++)at.__webglFramebuffer[ot][xt]=i.createFramebuffer()}else at.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){at.__webglFramebuffer=[];for(let ot=0;ot<R.mipmaps.length;ot++)at.__webglFramebuffer[ot]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(rt)for(let ot=0,xt=It.length;ot<xt;ot++){let Tt=n.get(It[ot]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&$(z)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let ot=0;ot<It.length;ot++){let xt=It[ot];at.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let Tt=r.convert(xt.format,xt.colorSpace),St=r.convert(xt.type),Ut=x(xt.internalFormat,Tt,St,xt.colorSpace,z.isXRRenderTarget===!0),qt=J(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Ut,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),X(at.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Mt.__webglTexture),Et(i.TEXTURE_CUBE_MAP,R);for(let ot=0;ot<6;ot++)if(R.mipmaps&&R.mipmaps.length>0)for(let xt=0;xt<R.mipmaps.length;xt++)j(at.__webglFramebuffer[ot][xt],z,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt);else j(at.__webglFramebuffer[ot],z,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(R)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let ot=0,xt=It.length;ot<xt;ot++){let Tt=It[ot],St=n.get(Tt);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),Et(i.TEXTURE_2D,Tt),j(at.__webglFramebuffer,z,Tt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Tt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ot=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Mt.__webglTexture),Et(ot,R),R.mipmaps&&R.mipmaps.length>0)for(let xt=0;xt<R.mipmaps.length;xt++)j(at.__webglFramebuffer[xt],z,R,i.COLOR_ATTACHMENT0,ot,xt);else j(at.__webglFramebuffer,z,R,i.COLOR_ATTACHMENT0,ot,0);m(R)&&u(ot),e.unbindTexture()}z.depthBuffer&&ut(z)}function nt(z){let R=z.textures;for(let at=0,Mt=R.length;at<Mt;at++){let It=R[at];if(m(It)){let Z=w(z),rt=n.get(It).__webglTexture;e.bindTexture(Z,rt),u(Z),e.unbindTexture()}}}let pt=[],B=[];function Ht(z){if(z.samples>0){if($(z)===!1){let R=z.textures,at=z.width,Mt=z.height,It=i.COLOR_BUFFER_BIT,Z=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(z),ot=R.length>1;if(ot)for(let xt=0;xt<R.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let xt=0;xt<R.length;xt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(It|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(It|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]);let Tt=n.get(R[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,at,Mt,0,0,at,Mt,It,i.NEAREST),l===!0&&(pt.length=0,B.length=0,pt.push(i.COLOR_ATTACHMENT0+xt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(pt.push(Z),B.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let xt=0;xt<R.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]);let Tt=n.get(R[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let R=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function J(z){return Math.min(s.maxSamples,z.samples)}function $(z){let R=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function mt(z){let R=o.render.frame;h.get(z)!==R&&(h.set(z,R),z.update())}function q(z,R){let at=z.colorSpace,Mt=z.format,It=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||at!==Rs&&at!==xi&&(Ue.getTransfer(at)===Oe?(Mt!==Rn||It!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),R}function Pt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=E,this.resetTextureUnits=L,this.setTexture2D=D,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=j,this.useMultisampledRTT=$}function _g(i,t){function e(n,s=xi){let r,o=Ue.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===Rn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Vh)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===Kr||n===jr)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===ka||n===Ba||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wh||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wl=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ye=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mg={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bg=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bn({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,f=null,g=null,v=new Tl,m=e.getContextAttributes(),u=null,w=null,x=[],y=[],k=new kt,A=null,I=new _n;I.viewport=new Je;let P=new _n;P.viewport=new Je;let M=[I,P],_=new wl,b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let W=x[C];return W===void 0&&(W=new qs,x[C]=W),W.getTargetRaySpace()},this.getControllerGrip=function(C){let W=x[C];return W===void 0&&(W=new qs,x[C]=W),W.getGripSpace()},this.getHand=function(C){let W=x[C];return W===void 0&&(W=new qs,x[C]=W),W.getHandSpace()};function E(C){let W=y.indexOf(C.inputSource);if(W===-1)return;let j=x[W];j!==void 0&&(j.update(C.inputSource,C.frame,c||o),j.dispatchEvent({type:C.type,data:C.inputSource}))}function S(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",S),s.removeEventListener("inputsourceschange",D);for(let C=0;C<x.length;C++){let W=y[C];W!==null&&(y[C]=null,x[C].disconnect(W))}b=null,L=null,v.reset(),t.setRenderTarget(u),f=null,p=null,d=null,s=null,w=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",S),s.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ai(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,j=null,X=null;m.depth&&(X=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=m.stencil?bs:ms,j=m.stencil?Ms:Bi);let tt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(tt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new ai(p.textureWidth,p.textureHeight,{format:Rn,type:oi,depthTexture:new po(p.textureWidth,p.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function D(C){for(let W=0;W<C.removed.length;W++){let j=C.removed[W],X=y.indexOf(j);X>=0&&(y[X]=null,x[X].disconnect(j))}for(let W=0;W<C.added.length;W++){let j=C.added[W],X=y.indexOf(j);if(X===-1){for(let ut=0;ut<x.length;ut++)if(ut>=y.length){y.push(j),X=ut;break}else if(y[ut]===null){y[ut]=j,X=ut;break}if(X===-1)break}let tt=x[X];tt&&tt.connect(j)}}let U=new H,O=new H;function V(C,W,j){U.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(j.matrixWorld);let X=U.distanceTo(O),tt=W.projectionMatrix.elements,ut=j.projectionMatrix.elements,Rt=tt[14]/(tt[10]-1),Ft=tt[14]/(tt[10]+1),nt=(tt[9]+1)/tt[5],pt=(tt[9]-1)/tt[5],B=(tt[8]-1)/tt[0],Ht=(ut[8]+1)/ut[0],J=Rt*B,$=Rt*Ht,mt=X/(-B+Ht),q=mt*-B;if(W.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(q),C.translateZ(mt),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),tt[10]===-1)C.projectionMatrix.copy(W.projectionMatrix),C.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Pt=Rt+mt,z=Ft+mt,R=J-q,at=$+(X-q),Mt=nt*Ft/z*Pt,It=pt*Ft/z*Pt;C.projectionMatrix.makePerspective(R,at,Mt,It,Pt,z),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function dt(C,W){W===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(W.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let W=C.near,j=C.far;v.texture!==null&&(v.depthNear>0&&(W=v.depthNear),v.depthFar>0&&(j=v.depthFar)),_.near=P.near=I.near=W,_.far=P.far=I.far=j,(b!==_.near||L!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,L=_.far),I.layers.mask=C.layers.mask|2,P.layers.mask=C.layers.mask|4,_.layers.mask=I.layers.mask|P.layers.mask;let X=C.parent,tt=_.cameras;dt(_,X);for(let ut=0;ut<tt.length;ut++)dt(tt[ut],X);tt.length===2?V(_,I,P):_.projectionMatrix.copy(I.projectionMatrix),it(C,_,X)};function it(C,W,j){j===null?C.matrix.copy(W.matrixWorld):(C.matrix.copy(j.matrixWorld),C.matrix.invert(),C.matrix.multiply(W.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(W.projectionMatrix),C.projectionMatrixInverse.copy(W.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=Js*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(C){l=C,p!==null&&(p.fixedFoveation=C),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=C)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let N=null;function Et(C,W){if(h=W.getViewerPose(c||o),g=W,h!==null){let j=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let X=!1;j.length!==_.cameras.length&&(_.cameras.length=0,X=!0);for(let ut=0;ut<j.length;ut++){let Rt=j[ut],Ft=null;if(f!==null)Ft=f.getViewport(Rt);else{let pt=d.getViewSubImage(p,Rt);Ft=pt.viewport,ut===0&&(t.setRenderTargetTextures(w,pt.colorTexture,p.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(w))}let nt=M[ut];nt===void 0&&(nt=new _n,nt.layers.enable(ut),nt.viewport=new Je,M[ut]=nt),nt.matrix.fromArray(Rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ut===0&&(_.matrix.copy(nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),X===!0&&_.cameras.push(nt)}let tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){let ut=d.getDepthInformation(j[0]);ut&&ut.isValid&&ut.texture&&v.init(t,ut,s.renderState)}}for(let j=0;j<x.length;j++){let X=y[j],tt=x[j];X!==null&&tt!==void 0&&tt.update(X,W,c||o)}N&&N(C,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let Lt=new Jh;Lt.setAnimationLoop(Et),this.setAnimationLoop=function(C){N=C},this.dispose=function(){}}},Di=new On,Eg=new Le;function wg(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Zh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,w,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,w,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===dn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===dn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let w=t.get(u),x=w.envMap,y=w.envMapRotation;x&&(m.envMap.value=x,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){let y=x.program;n.uniformBlockBinding(w,y)}function c(w,x){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));let k=x.program;n.updateUBOMapping(w,k);let A=t.render.frame;r[w.id]!==A&&(p(w),r[w.id]=A)}function h(w){let x=d();w.__bindingPointIndex=x;let y=i.createBuffer(),k=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,k,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let x=s[w.id],y=w.uniforms,k=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,I=y.length;A<I;A++){let P=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,_=P.length;M<_;M++){let b=P[M];if(f(b,A,M,k)===!0){let L=b.__offset,E=Array.isArray(b.value)?b.value:[b.value],S=0;for(let D=0;D<E.length;D++){let U=E[D],O=v(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,L+S,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,S),S+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,x,y,k){let A=w.value,I=x+"_"+y;if(k[I]===void 0)return typeof A=="number"||typeof A=="boolean"?k[I]=A:k[I]=A.clone(),!0;{let P=k[I];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return k[I]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(w){let x=w.uniforms,y=0,k=16;for(let I=0,P=x.length;I<P;I++){let M=Array.isArray(x[I])?x[I]:[x[I]];for(let _=0,b=M.length;_<b;_++){let L=M[_],E=Array.isArray(L.value)?L.value:[L.value];for(let S=0,D=E.length;S<D;S++){let U=E[S],O=v(U),V=y%k,dt=V%O.boundary,it=V+dt;y+=dt,it!==0&&k-it<O.storage&&(y+=k-it),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=O.storage}}}let A=y%k;return A>0&&(y+=k-A),w.__size=y,w.__cache={},this}function v(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){let x=w.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var mo=class{constructor(t={}){let{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,u=null,w=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Yn,this.toneMappingExposure=1;let y=this,k=!1,A=0,I=0,P=null,M=-1,_=null,b=new Je,L=new Je,E=null,S=new le(0),D=0,U=e.width,O=e.height,V=1,dt=null,it=null,N=new Je(0,0,U,O),Et=new Je(0,0,U,O),Lt=!1,C=new Ks,W=!1,j=!1,X=new Le,tt=new Le,ut=new H,Rt=new Je,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function pt(){return P===null?V:1}let B=n;function Ht(F,ht){return e.getContext(F,ht)}try{let F={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",jt,!1),B===null){let ht="webgl2";if(B=Ht(ht,F),B===null)throw Ht(ht)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let J,$,mt,q,Pt,z,R,at,Mt,It,Z,rt,ot,xt,Tt,St,Ut,qt,se,$t,de,ce,Re,st;function Yt(){J=new Vm(B),J.init(),ce=new _g(B,J),$=new Fm(B,J,t,ce),mt=new xg(B,J),$.reverseDepthBuffer&&p&&mt.buffers.depth.setReversed(!0),q=new Xm(B),Pt=new sg,z=new vg(B,J,mt,Pt,$,ce,q),R=new Om(y),at=new Hm(y),Mt=new ju(B),Re=new Um(B,Mt),It=new Gm(B,Mt,q,Re),Z=new Ym(B,It,Mt,q),se=new qm(B,$,z),St=new zm(Pt),rt=new ig(y,R,at,J,$,Re,St),ot=new wg(y,Pt),xt=new og,Tt=new ug(J),qt=new Dm(y,R,at,mt,Z,f,l),Ut=new mg(y,Z,$),st=new Tg(B,q,$,mt),$t=new Nm(B,J,q),de=new Wm(B,J,q),q.programs=rt.programs,y.capabilities=$,y.extensions=J,y.properties=Pt,y.renderLists=xt,y.shadowMap=Ut,y.state=mt,y.info=q}Yt();let Ct=new Al(y,B);this.xr=Ct,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let F=J.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=J.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(F){F!==void 0&&(V=F,this.setSize(U,O,!1))},this.getSize=function(F){return F.set(U,O)},this.setSize=function(F,ht,yt=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=F,O=ht,e.width=Math.floor(F*V),e.height=Math.floor(ht*V),yt===!0&&(e.style.width=F+"px",e.style.height=ht+"px"),this.setViewport(0,0,F,ht)},this.getDrawingBufferSize=function(F){return F.set(U*V,O*V).floor()},this.setDrawingBufferSize=function(F,ht,yt){U=F,O=ht,V=yt,e.width=Math.floor(F*yt),e.height=Math.floor(ht*yt),this.setViewport(0,0,F,ht)},this.getCurrentViewport=function(F){return F.copy(b)},this.getViewport=function(F){return F.copy(N)},this.setViewport=function(F,ht,yt,_t){F.isVector4?N.set(F.x,F.y,F.z,F.w):N.set(F,ht,yt,_t),mt.viewport(b.copy(N).multiplyScalar(V).round())},this.getScissor=function(F){return F.copy(Et)},this.setScissor=function(F,ht,yt,_t){F.isVector4?Et.set(F.x,F.y,F.z,F.w):Et.set(F,ht,yt,_t),mt.scissor(L.copy(Et).multiplyScalar(V).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(F){mt.setScissorTest(Lt=F)},this.setOpaqueSort=function(F){dt=F},this.setTransparentSort=function(F){it=F},this.getClearColor=function(F){return F.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(F=!0,ht=!0,yt=!0){let _t=0;if(F){let ct=!1;if(P!==null){let Gt=P.texture.format;ct=Gt===nc||Gt===ec||Gt===tc}if(ct){let Gt=P.texture.type,Qt=Gt===oi||Gt===Bi||Gt===Zs||Gt===Ms||Gt===Kl||Gt===jl,fe=qt.getClearColor(),ue=qt.getClearAlpha(),Me=fe.r,G=fe.g,Y=fe.b;Qt?(g[0]=Me,g[1]=G,g[2]=Y,g[3]=ue,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Me,v[1]=G,v[2]=Y,v[3]=ue,B.clearBufferiv(B.COLOR,0,v))}else _t|=B.COLOR_BUFFER_BIT}ht&&(_t|=B.DEPTH_BUFFER_BIT),yt&&(_t|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),xt.dispose(),Tt.dispose(),Pt.dispose(),R.dispose(),at.dispose(),Z.dispose(),Re.dispose(),st.dispose(),rt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ft),Ct.removeEventListener("sessionend",Dt),Vt.stop()};function zt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Kt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let F=q.autoReset,ht=Ut.enabled,yt=Ut.autoUpdate,_t=Ut.needsUpdate,ct=Ut.type;Yt(),q.autoReset=F,Ut.enabled=ht,Ut.autoUpdate=yt,Ut.needsUpdate=_t,Ut.type=ct}function jt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function _e(F){let ht=F.target;ht.removeEventListener("dispose",_e),T(ht)}function T(F){et(F),Pt.remove(F)}function et(F){let ht=Pt.get(F).programs;ht!==void 0&&(ht.forEach(function(yt){rt.releaseProgram(yt)}),F.isShaderMaterial&&rt.releaseShaderCache(F))}this.renderBufferDirect=function(F,ht,yt,_t,ct,Gt){ht===null&&(ht=Ft);let Qt=ct.isMesh&&ct.matrixWorld.determinant()<0,fe=Ie(F,ht,yt,_t,ct);mt.setMaterial(_t,Qt);let ue=yt.index,Me=1;if(_t.wireframe===!0){if(ue=It.getWireframeAttribute(yt),ue===void 0)return;Me=2}let G=yt.drawRange,Y=yt.attributes.position,Nt=G.start*Me,At=(G.start+G.count)*Me;Gt!==null&&(Nt=Math.max(Nt,Gt.start*Me),At=Math.min(At,(Gt.start+Gt.count)*Me)),ue!==null?(Nt=Math.max(Nt,0),At=Math.min(At,ue.count)):Y!=null&&(Nt=Math.max(Nt,0),At=Math.min(At,Y.count));let Bt=At-Nt;if(Bt<0||Bt===1/0)return;Re.setup(ct,_t,fe,yt,ue);let te,Jt=$t;if(ue!==null&&(te=Mt.get(ue),Jt=de,Jt.setIndex(te)),ct.isMesh)_t.wireframe===!0?(mt.setLineWidth(_t.wireframeLinewidth*pt()),Jt.setMode(B.LINES)):Jt.setMode(B.TRIANGLES);else if(ct.isLine){let re=_t.linewidth;re===void 0&&(re=1),mt.setLineWidth(re*pt()),ct.isLineSegments?Jt.setMode(B.LINES):ct.isLineLoop?Jt.setMode(B.LINE_LOOP):Jt.setMode(B.LINE_STRIP)}else ct.isPoints?Jt.setMode(B.POINTS):ct.isSprite&&Jt.setMode(B.TRIANGLES);if(ct.isBatchedMesh)if(ct._multiDrawInstances!==null)Jt.renderMultiDrawInstances(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount,ct._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Jt.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{let re=ct._multiDrawStarts,ee=ct._multiDrawCounts,pe=ct._multiDrawCount,ve=ue?Mt.get(ue).bytesPerElement:1,Xt=Pt.get(_t).currentProgram.getUniforms();for(let ne=0;ne<pe;ne++)Xt.setValue(B,"_gl_DrawID",ne),Jt.render(re[ne]/ve,ee[ne])}else if(ct.isInstancedMesh)Jt.renderInstances(Nt,Bt,ct.count);else if(yt.isInstancedBufferGeometry){let re=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,ee=Math.min(yt.instanceCount,re);Jt.renderInstances(Nt,Bt,ee)}else Jt.render(Nt,Bt)};function Q(F,ht,yt){F.transparent===!0&&F.side===Qe&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,ae(F,ht,yt),F.side=Mi,F.needsUpdate=!0,ae(F,ht,yt),F.side=Qe):ae(F,ht,yt)}this.compile=function(F,ht,yt=null){yt===null&&(yt=F),u=Tt.get(yt),u.init(ht),x.push(u),yt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(ht.layers)&&(u.pushLight(ct),ct.castShadow&&u.pushShadow(ct))}),F!==yt&&F.traverseVisible(function(ct){ct.isLight&&ct.layers.test(ht.layers)&&(u.pushLight(ct),ct.castShadow&&u.pushShadow(ct))}),u.setupLights();let _t=new Set;return F.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;let Gt=ct.material;if(Gt)if(Array.isArray(Gt))for(let Qt=0;Qt<Gt.length;Qt++){let fe=Gt[Qt];Q(fe,yt,ct),_t.add(fe)}else Q(Gt,yt,ct),_t.add(Gt)}),x.pop(),u=null,_t},this.compileAsync=function(F,ht,yt=null){let _t=this.compile(F,ht,yt);return new Promise(ct=>{function Gt(){if(_t.forEach(function(Qt){Pt.get(Qt).currentProgram.isReady()&&_t.delete(Qt)}),_t.size===0){ct(F);return}setTimeout(Gt,10)}J.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let lt=null;function vt(F){lt&&lt(F)}function ft(){Vt.stop()}function Dt(){Vt.start()}let Vt=new Jh;Vt.setAnimationLoop(vt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(F){lt=F,Ct.setAnimationLoop(F),F===null?Vt.stop():Vt.start()},Ct.addEventListener("sessionstart",ft),Ct.addEventListener("sessionend",Dt),this.render=function(F,ht){if(ht!==void 0&&ht.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.parent===null&&ht.matrixWorldAutoUpdate===!0&&ht.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(ht),ht=Ct.getCamera()),F.isScene===!0&&F.onBeforeRender(y,F,ht,P),u=Tt.get(F,x.length),u.init(ht),x.push(u),tt.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),C.setFromProjectionMatrix(tt),j=this.localClippingEnabled,W=St.init(this.clippingPlanes,j),m=xt.get(F,w.length),m.init(),w.push(m),Ct.enabled===!0&&Ct.isPresenting===!0){let Gt=y.xr.getDepthSensingMesh();Gt!==null&&Ot(Gt,ht,-1/0,y.sortObjects)}Ot(F,ht,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(dt,it),nt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,nt&&qt.addToRenderList(m,F),this.info.render.frame++,W===!0&&St.beginShadows();let yt=u.state.shadowsArray;Ut.render(yt,F,ht),W===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();let _t=m.opaque,ct=m.transmissive;if(u.setupLights(),ht.isArrayCamera){let Gt=ht.cameras;if(ct.length>0)for(let Qt=0,fe=Gt.length;Qt<fe;Qt++){let ue=Gt[Qt];bt(_t,ct,F,ue)}nt&&qt.render(F);for(let Qt=0,fe=Gt.length;Qt<fe;Qt++){let ue=Gt[Qt];K(m,F,ue,ue.viewport)}}else ct.length>0&&bt(_t,ct,F,ht),nt&&qt.render(F),K(m,F,ht);P!==null&&(z.updateMultisampleRenderTarget(P),z.updateRenderTargetMipmap(P)),F.isScene===!0&&F.onAfterRender(y,F,ht),Re.resetDefaultState(),M=-1,_=null,x.pop(),x.length>0?(u=x[x.length-1],W===!0&&St.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ot(F,ht,yt,_t){if(F.visible===!1)return;if(F.layers.test(ht.layers)){if(F.isGroup)yt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ht);else if(F.isLight)u.pushLight(F),F.castShadow&&u.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||C.intersectsSprite(F)){_t&&Rt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(tt);let Qt=Z.update(F),fe=F.material;fe.visible&&m.push(F,Qt,fe,yt,Rt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||C.intersectsObject(F))){let Qt=Z.update(F),fe=F.material;if(_t&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Rt.copy(F.boundingSphere.center)):(Qt.boundingSphere===null&&Qt.computeBoundingSphere(),Rt.copy(Qt.boundingSphere.center)),Rt.applyMatrix4(F.matrixWorld).applyMatrix4(tt)),Array.isArray(fe)){let ue=Qt.groups;for(let Me=0,G=ue.length;Me<G;Me++){let Y=ue[Me],Nt=fe[Y.materialIndex];Nt&&Nt.visible&&m.push(F,Qt,Nt,yt,Rt.z,Y)}}else fe.visible&&m.push(F,Qt,fe,yt,Rt.z,null)}}let Gt=F.children;for(let Qt=0,fe=Gt.length;Qt<fe;Qt++)Ot(Gt[Qt],ht,yt,_t)}function K(F,ht,yt,_t){let ct=F.opaque,Gt=F.transmissive,Qt=F.transparent;u.setupLightsView(yt),W===!0&&St.setGlobalState(y.clippingPlanes,yt),_t&&mt.viewport(b.copy(_t)),ct.length>0&&wt(ct,ht,yt),Gt.length>0&&wt(Gt,ht,yt),Qt.length>0&&wt(Qt,ht,yt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function bt(F,ht,yt,_t){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[_t.id]===void 0&&(u.state.transmissionRenderTarget[_t.id]=new ai(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?cr:oi,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));let Gt=u.state.transmissionRenderTarget[_t.id],Qt=_t.viewport||b;Gt.setSize(Qt.z,Qt.w);let fe=y.getRenderTarget();y.setRenderTarget(Gt),y.getClearColor(S),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear(),nt&&qt.render(yt);let ue=y.toneMapping;y.toneMapping=Yn;let Me=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),u.setupLightsView(_t),W===!0&&St.setGlobalState(y.clippingPlanes,_t),wt(F,yt,_t),z.updateMultisampleRenderTarget(Gt),z.updateRenderTargetMipmap(Gt),J.has("WEBGL_multisampled_render_to_texture")===!1){let G=!1;for(let Y=0,Nt=ht.length;Y<Nt;Y++){let At=ht[Y],Bt=At.object,te=At.geometry,Jt=At.material,re=At.group;if(Jt.side===Qe&&Bt.layers.test(_t.layers)){let ee=Jt.side;Jt.side=dn,Jt.needsUpdate=!0,Wt(Bt,yt,_t,te,Jt,re),Jt.side=ee,Jt.needsUpdate=!0,G=!0}}G===!0&&(z.updateMultisampleRenderTarget(Gt),z.updateRenderTargetMipmap(Gt))}y.setRenderTarget(fe),y.setClearColor(S,D),Me!==void 0&&(_t.viewport=Me),y.toneMapping=ue}function wt(F,ht,yt){let _t=ht.isScene===!0?ht.overrideMaterial:null;for(let ct=0,Gt=F.length;ct<Gt;ct++){let Qt=F[ct],fe=Qt.object,ue=Qt.geometry,Me=_t===null?Qt.material:_t,G=Qt.group;fe.layers.test(yt.layers)&&Wt(fe,ht,yt,ue,Me,G)}}function Wt(F,ht,yt,_t,ct,Gt){F.onBeforeRender(y,ht,yt,_t,ct,Gt),F.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ct.onBeforeRender(y,ht,yt,_t,F,Gt),ct.transparent===!0&&ct.side===Qe&&ct.forceSinglePass===!1?(ct.side=dn,ct.needsUpdate=!0,y.renderBufferDirect(yt,ht,_t,ct,F,Gt),ct.side=Mi,ct.needsUpdate=!0,y.renderBufferDirect(yt,ht,_t,ct,F,Gt),ct.side=Qe):y.renderBufferDirect(yt,ht,_t,ct,F,Gt),F.onAfterRender(y,ht,yt,_t,ct,Gt)}function ae(F,ht,yt){ht.isScene!==!0&&(ht=Ft);let _t=Pt.get(F),ct=u.state.lights,Gt=u.state.shadowsArray,Qt=ct.state.version,fe=rt.getParameters(F,ct.state,Gt,ht,yt),ue=rt.getProgramCacheKey(fe),Me=_t.programs;_t.environment=F.isMeshStandardMaterial?ht.environment:null,_t.fog=ht.fog,_t.envMap=(F.isMeshStandardMaterial?at:R).get(F.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&F.envMap===null?ht.environmentRotation:F.envMapRotation,Me===void 0&&(F.addEventListener("dispose",_e),Me=new Map,_t.programs=Me);let G=Me.get(ue);if(G!==void 0){if(_t.currentProgram===G&&_t.lightsStateVersion===Qt)return xe(F,fe),G}else fe.uniforms=rt.getUniforms(F),F.onBeforeCompile(fe,y),G=rt.acquireProgram(fe,ue),Me.set(ue,G),_t.uniforms=fe.uniforms;let Y=_t.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Y.clippingPlanes=St.uniform),xe(F,fe),_t.needsLights=Ve(F),_t.lightsStateVersion=Qt,_t.needsLights&&(Y.ambientLightColor.value=ct.state.ambient,Y.lightProbe.value=ct.state.probe,Y.directionalLights.value=ct.state.directional,Y.directionalLightShadows.value=ct.state.directionalShadow,Y.spotLights.value=ct.state.spot,Y.spotLightShadows.value=ct.state.spotShadow,Y.rectAreaLights.value=ct.state.rectArea,Y.ltc_1.value=ct.state.rectAreaLTC1,Y.ltc_2.value=ct.state.rectAreaLTC2,Y.pointLights.value=ct.state.point,Y.pointLightShadows.value=ct.state.pointShadow,Y.hemisphereLights.value=ct.state.hemi,Y.directionalShadowMap.value=ct.state.directionalShadowMap,Y.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Y.spotShadowMap.value=ct.state.spotShadowMap,Y.spotLightMatrix.value=ct.state.spotLightMatrix,Y.spotLightMap.value=ct.state.spotLightMap,Y.pointShadowMap.value=ct.state.pointShadowMap,Y.pointShadowMatrix.value=ct.state.pointShadowMatrix),_t.currentProgram=G,_t.uniformsList=null,G}function he(F){if(F.uniformsList===null){let ht=F.currentProgram.getUniforms();F.uniformsList=xs.seqWithValue(ht.seq,F.uniforms)}return F.uniformsList}function xe(F,ht){let yt=Pt.get(F);yt.outputColorSpace=ht.outputColorSpace,yt.batching=ht.batching,yt.batchingColor=ht.batchingColor,yt.instancing=ht.instancing,yt.instancingColor=ht.instancingColor,yt.instancingMorph=ht.instancingMorph,yt.skinning=ht.skinning,yt.morphTargets=ht.morphTargets,yt.morphNormals=ht.morphNormals,yt.morphColors=ht.morphColors,yt.morphTargetsCount=ht.morphTargetsCount,yt.numClippingPlanes=ht.numClippingPlanes,yt.numIntersection=ht.numClipIntersection,yt.vertexAlphas=ht.vertexAlphas,yt.vertexTangents=ht.vertexTangents,yt.toneMapping=ht.toneMapping}function Ie(F,ht,yt,_t,ct){ht.isScene!==!0&&(ht=Ft),z.resetTextureUnits();let Gt=ht.fog,Qt=_t.isMeshStandardMaterial?ht.environment:null,fe=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rs,ue=(_t.isMeshStandardMaterial?at:R).get(_t.envMap||Qt),Me=_t.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,G=!!yt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),Y=!!yt.morphAttributes.position,Nt=!!yt.morphAttributes.normal,At=!!yt.morphAttributes.color,Bt=Yn;_t.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Bt=y.toneMapping);let te=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,Jt=te!==void 0?te.length:0,re=Pt.get(_t),ee=u.state.lights;if(W===!0&&(j===!0||F!==_)){let je=F===_&&_t.id===M;St.setState(_t,F,je)}let pe=!1;_t.version===re.__version?(re.needsLights&&re.lightsStateVersion!==ee.state.version||re.outputColorSpace!==fe||ct.isBatchedMesh&&re.batching===!1||!ct.isBatchedMesh&&re.batching===!0||ct.isBatchedMesh&&re.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&re.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&re.instancing===!1||!ct.isInstancedMesh&&re.instancing===!0||ct.isSkinnedMesh&&re.skinning===!1||!ct.isSkinnedMesh&&re.skinning===!0||ct.isInstancedMesh&&re.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&re.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&re.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&re.instancingMorph===!1&&ct.morphTexture!==null||re.envMap!==ue||_t.fog===!0&&re.fog!==Gt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==St.numPlanes||re.numIntersection!==St.numIntersection)||re.vertexAlphas!==Me||re.vertexTangents!==G||re.morphTargets!==Y||re.morphNormals!==Nt||re.morphColors!==At||re.toneMapping!==Bt||re.morphTargetsCount!==Jt)&&(pe=!0):(pe=!0,re.__version=_t.version);let ve=re.currentProgram;pe===!0&&(ve=ae(_t,ht,ct));let Xt=!1,ne=!1,Ce=!1,me=ve.getUniforms(),Ne=re.uniforms;if(mt.useProgram(ve.program)&&(Xt=!0,ne=!0,Ce=!0),_t.id!==M&&(M=_t.id,ne=!0),Xt||_!==F){mt.buffers.depth.getReversed()?(X.copy(F.projectionMatrix),Du(X),Uu(X),me.setValue(B,"projectionMatrix",X)):me.setValue(B,"projectionMatrix",F.projectionMatrix),me.setValue(B,"viewMatrix",F.matrixWorldInverse);let cn=me.map.cameraPosition;cn!==void 0&&cn.setValue(B,ut.setFromMatrixPosition(F.matrixWorld)),$.logarithmicDepthBuffer&&me.setValue(B,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&me.setValue(B,"isOrthographic",F.isOrthographicCamera===!0),_!==F&&(_=F,ne=!0,Ce=!0)}if(ct.isSkinnedMesh){me.setOptional(B,ct,"bindMatrix"),me.setOptional(B,ct,"bindMatrixInverse");let je=ct.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),me.setValue(B,"boneTexture",je.boneTexture,z))}ct.isBatchedMesh&&(me.setOptional(B,ct,"batchingTexture"),me.setValue(B,"batchingTexture",ct._matricesTexture,z),me.setOptional(B,ct,"batchingIdTexture"),me.setValue(B,"batchingIdTexture",ct._indirectTexture,z),me.setOptional(B,ct,"batchingColorTexture"),ct._colorsTexture!==null&&me.setValue(B,"batchingColorTexture",ct._colorsTexture,z));let He=yt.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&se.update(ct,yt,ve),(ne||re.receiveShadow!==ct.receiveShadow)&&(re.receiveShadow=ct.receiveShadow,me.setValue(B,"receiveShadow",ct.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(Ne.envMap.value=ue,Ne.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&ht.environment!==null&&(Ne.envMapIntensity.value=ht.environmentIntensity),ne&&(me.setValue(B,"toneMappingExposure",y.toneMappingExposure),re.needsLights&&Pe(Ne,Ce),Gt&&_t.fog===!0&&ot.refreshFogUniforms(Ne,Gt),ot.refreshMaterialUniforms(Ne,_t,V,O,u.state.transmissionRenderTarget[F.id]),xs.upload(B,he(re),Ne,z)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(xs.upload(B,he(re),Ne,z),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&me.setValue(B,"center",ct.center),me.setValue(B,"modelViewMatrix",ct.modelViewMatrix),me.setValue(B,"normalMatrix",ct.normalMatrix),me.setValue(B,"modelMatrix",ct.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){let je=_t.uniformsGroups;for(let cn=0,hi=je.length;cn<hi;cn++){let yc=je[cn];st.update(yc,ve),st.bind(yc,ve)}}return ve}function Pe(F,ht){F.ambientLightColor.needsUpdate=ht,F.lightProbe.needsUpdate=ht,F.directionalLights.needsUpdate=ht,F.directionalLightShadows.needsUpdate=ht,F.pointLights.needsUpdate=ht,F.pointLightShadows.needsUpdate=ht,F.spotLights.needsUpdate=ht,F.spotLightShadows.needsUpdate=ht,F.rectAreaLights.needsUpdate=ht,F.hemisphereLights.needsUpdate=ht}function Ve(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(F,ht,yt){Pt.get(F.texture).__webglTexture=ht,Pt.get(F.depthTexture).__webglTexture=yt;let _t=Pt.get(F);_t.__hasExternalTextures=!0,_t.__autoAllocateDepthBuffer=yt===void 0,_t.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_t.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ht){let yt=Pt.get(F);yt.__webglFramebuffer=ht,yt.__useDefaultFramebuffer=ht===void 0},this.setRenderTarget=function(F,ht=0,yt=0){P=F,A=ht,I=yt;let _t=!0,ct=null,Gt=!1,Qt=!1;if(F){let ue=Pt.get(F);if(ue.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(B.FRAMEBUFFER,null),_t=!1;else if(ue.__webglFramebuffer===void 0)z.setupRenderTarget(F);else if(ue.__hasExternalTextures)z.rebindTextures(F,Pt.get(F.texture).__webglTexture,Pt.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Y=F.depthTexture;if(ue.__boundDepthTexture!==Y){if(Y!==null&&Pt.has(Y)&&(F.width!==Y.image.width||F.height!==Y.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(F)}}let Me=F.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(Qt=!0);let G=Pt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(G[ht])?ct=G[ht][yt]:ct=G[ht],Gt=!0):F.samples>0&&z.useMultisampledRTT(F)===!1?ct=Pt.get(F).__webglMultisampledFramebuffer:Array.isArray(G)?ct=G[yt]:ct=G,b.copy(F.viewport),L.copy(F.scissor),E=F.scissorTest}else b.copy(N).multiplyScalar(V).floor(),L.copy(Et).multiplyScalar(V).floor(),E=Lt;if(mt.bindFramebuffer(B.FRAMEBUFFER,ct)&&_t&&mt.drawBuffers(F,ct),mt.viewport(b),mt.scissor(L),mt.setScissorTest(E),Gt){let ue=Pt.get(F.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ue.__webglTexture,yt)}else if(Qt){let ue=Pt.get(F.texture),Me=ht||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ue.__webglTexture,yt||0,Me)}M=-1},this.readRenderTargetPixels=function(F,ht,yt,_t,ct,Gt,Qt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Qt!==void 0&&(fe=fe[Qt]),fe){mt.bindFramebuffer(B.FRAMEBUFFER,fe);try{let ue=F.texture,Me=ue.format,G=ue.type;if(!$.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(G)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ht>=0&&ht<=F.width-_t&&yt>=0&&yt<=F.height-ct&&B.readPixels(ht,yt,_t,ct,ce.convert(Me),ce.convert(G),Gt)}finally{let ue=P!==null?Pt.get(P).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(F,ht,yt,_t,ct,Gt,Qt){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Qt!==void 0&&(fe=fe[Qt]),fe){let ue=F.texture,Me=ue.format,G=ue.type;if(!$.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(G))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ht>=0&&ht<=F.width-_t&&yt>=0&&yt<=F.height-ct){mt.bindFramebuffer(B.FRAMEBUFFER,fe);let Y=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Y),B.bufferData(B.PIXEL_PACK_BUFFER,Gt.byteLength,B.STREAM_READ),B.readPixels(ht,yt,_t,ct,ce.convert(Me),ce.convert(G),0);let Nt=P!==null?Pt.get(P).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,Nt);let At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Lu(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Y),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Gt),B.deleteBuffer(Y),B.deleteSync(At),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ht=null,yt=0){F.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ht=arguments[0]||null,F=arguments[1]);let _t=Math.pow(2,-yt),ct=Math.floor(F.image.width*_t),Gt=Math.floor(F.image.height*_t),Qt=ht!==null?ht.x:0,fe=ht!==null?ht.y:0;z.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,yt,0,0,Qt,fe,ct,Gt),mt.unbindTexture()},this.copyTextureToTexture=function(F,ht,yt=null,_t=null,ct=0){F.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),_t=arguments[0]||null,F=arguments[1],ht=arguments[2],ct=arguments[3]||0,yt=null);let Gt,Qt,fe,ue,Me,G,Y,Nt,At,Bt=F.isCompressedTexture?F.mipmaps[ct]:F.image;yt!==null?(Gt=yt.max.x-yt.min.x,Qt=yt.max.y-yt.min.y,fe=yt.isBox3?yt.max.z-yt.min.z:1,ue=yt.min.x,Me=yt.min.y,G=yt.isBox3?yt.min.z:0):(Gt=Bt.width,Qt=Bt.height,fe=Bt.depth||1,ue=0,Me=0,G=0),_t!==null?(Y=_t.x,Nt=_t.y,At=_t.z):(Y=0,Nt=0,At=0);let te=ce.convert(ht.format),Jt=ce.convert(ht.type),re;ht.isData3DTexture?(z.setTexture3D(ht,0),re=B.TEXTURE_3D):ht.isDataArrayTexture||ht.isCompressedArrayTexture?(z.setTexture2DArray(ht,0),re=B.TEXTURE_2D_ARRAY):(z.setTexture2D(ht,0),re=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ht.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ht.unpackAlignment);let ee=B.getParameter(B.UNPACK_ROW_LENGTH),pe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ve=B.getParameter(B.UNPACK_SKIP_PIXELS),Xt=B.getParameter(B.UNPACK_SKIP_ROWS),ne=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,Me),B.pixelStorei(B.UNPACK_SKIP_IMAGES,G);let Ce=F.isDataArrayTexture||F.isData3DTexture,me=ht.isDataArrayTexture||ht.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){let Ne=Pt.get(F),He=Pt.get(ht),je=Pt.get(Ne.__renderTarget),cn=Pt.get(He.__renderTarget);mt.bindFramebuffer(B.READ_FRAMEBUFFER,je.__webglFramebuffer),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let hi=0;hi<fe;hi++)Ce&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,ct,G+hi),F.isDepthTexture?(me&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.get(ht).__webglTexture,ct,At+hi),B.blitFramebuffer(ue,Me,Gt,Qt,Y,Nt,Gt,Qt,B.DEPTH_BUFFER_BIT,B.NEAREST)):me?B.copyTexSubImage3D(re,ct,Y,Nt,At+hi,ue,Me,Gt,Qt):B.copyTexSubImage2D(re,ct,Y,Nt,At+hi,ue,Me,Gt,Qt);mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else me?F.isDataTexture||F.isData3DTexture?B.texSubImage3D(re,ct,Y,Nt,At,Gt,Qt,fe,te,Jt,Bt.data):ht.isCompressedArrayTexture?B.compressedTexSubImage3D(re,ct,Y,Nt,At,Gt,Qt,fe,te,Bt.data):B.texSubImage3D(re,ct,Y,Nt,At,Gt,Qt,fe,te,Jt,Bt):F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ct,Y,Nt,Gt,Qt,te,Jt,Bt.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ct,Y,Nt,Bt.width,Bt.height,te,Bt.data):B.texSubImage2D(B.TEXTURE_2D,ct,Y,Nt,Gt,Qt,te,Jt,Bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ve),B.pixelStorei(B.UNPACK_SKIP_ROWS,Xt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ne),ct===0&&ht.generateMipmaps&&B.generateMipmap(re),mt.unbindTexture()},this.copyTextureToTexture3D=function(F,ht,yt=null,_t=null,ct=0){return F.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),yt=arguments[0]||null,_t=arguments[1]||null,F=arguments[2],ht=arguments[3],ct=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ht,yt,_t,ct)},this.initRenderTarget=function(F){Pt.get(F).__webglFramebuffer===void 0&&z.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?z.setTextureCube(F,0):F.isData3DTexture?z.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?z.setTexture2DArray(F,0):z.setTexture2D(F,0),mt.unbindTexture()},this.resetState=function(){A=0,I=0,P=null,mt.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ue._getUnpackColorSpace()}};var go=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xo=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new H,js=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends ci{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},as,Fs=new H,ls=new H,cs=new H,hs=new kt,zs=new kt,ef=new Le,kr=new H,Os=new H,Br=new H,vh=new kt,_a=new kt,_h=new kt,vo=class extends ke{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yo(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new js(n,3,0,!1)),as.setAttribute("uv",new js(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Hr(kr.set(-.5,-.5,0),cs,o,ls,s,r),Hr(Os.set(.5,-.5,0),cs,o,ls,s,r),Hr(Br.set(.5,.5,0),cs,o,ls,s,r),vh.set(0,0),_a.set(1,0),_h.set(1,1);let a=t.ray.intersectTriangle(kr,Os,Br,!1,Fs);if(a===null&&(Hr(Os.set(-.5,.5,0),cs,o,ls,s,r),_a.set(0,1),a=t.ray.intersectTriangle(kr,Br,Os,!1,Fs),a===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:yi.getInterpolation(Fs,kr,Os,Br,vh,_a,_h,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Hr(i,t,e,n,s,r){hs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*hs.x-s*hs.y,zs.y=s*hs.x+r*hs.y):zs.copy(hs),i.copy(t),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(ef)}var tr=class extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Mn,h=Mn,d,p){super(null,o,a,l,c,h,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new Le,Mh=new Le,Vr=[],bh=new li,Ag=new Le,ks=new ze,Bs=new Si,nn=class extends ze{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),bh.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),Bs.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),Mh.multiplyMatrices(n,fs),ks.matrixWorld=Mh,ks.raycast(t,Vr);for(let o=0,a=Vr.length;o<a;o++){let l=Vr[o];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(s*this.count),s,this.count,Ql,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Hi=class extends ci{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_o=new H,Mo=new H,Sh=new Le,Hs=new ro,Gr=new Si,Ma=new H,Eh=new H,Rl=class extends ke{constructor(t=new Be,e=new Hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_o.fromBufferAttribute(e,s-1),Mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_o.distanceTo(Mo);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Sh.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let u=h.getX(v),w=h.getX(v+1),x=Wr(this,t,Hs,l,u,w);x&&e.push(x)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),u=Wr(this,t,Hs,l,v,m);u&&e.push(u)}}else{let f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let u=Wr(this,t,Hs,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){let v=Wr(this,t,Hs,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(_o.fromBufferAttribute(o,s),Mo.fromBufferAttribute(o,r),e.distanceSqToSegment(_o,Mo,Ma,Eh)>n)return;Ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ma);if(!(l<t.near||l>t.far))return{distance:l,point:Eh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new H,Th=new H,Es=class extends Rl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Th);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ws=class extends Sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(o-h)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new kt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,s=[],r=[],o=[],a=new H,l=new Le;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(un(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(un(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new kt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*d+this.aX,c=p*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,f*=h,s(o,a,p,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Xr=new H,ba=new oc,Sa=new oc,Ea=new oc,ir=class extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),c=Xr);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ba.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,g,v,m),Sa.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,g,v,m),Ea.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Sa.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),Ea.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(ba.calc(l),Sa.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rg(i,t){let e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Ys(i,t,e,n){return Rg(i,t)+Cg(i,e)+Ig(i,n)}function Pg(i,t){let e=1-i;return e*e*e*t}function Lg(i,t){let e=1-i;return 3*e*e*i*t}function Dg(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Pg(i,t)+Lg(i,e)+Dg(i,n)+Ug(i,s)}var bo=class extends Pn{constructor(t=new kt,e=new kt,n=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new kt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends Pn{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends Pn{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends Pn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Pn{constructor(t=new kt,e=new kt,n=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new kt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Pn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y),Ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ah(a,l.x,c.x,h.x,d.x),Ah(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new kt().fromArray(s))}return this}},Ao=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:ir,CubicBezierCurve:bo,CubicBezierCurve3:Il,EllipseCurve:nr,LineCurve:So,LineCurve3:Pl,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:wo,SplineCurve:To}),Ll=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ao[s.type]().fromJSON(s))}return this}},sr=class extends Ll{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new So(this.currentPoint.clone(),new kt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Eo(this.currentPoint.clone(),new kt(t,e),new kt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new bo(this.currentPoint.clone(),new kt(t,e),new kt(n,s),new kt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new To(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class i extends Be{constructor(t=[new kt(0,-.5),new kt(.5,0),new kt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=un(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new H,p=new kt,f=new H,g=new H,v=new H,m=0,u=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,u=t[w+1].y-t[w].y,f.x=u*1,f.y=-m,f.z=u*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[w+1].x-t[w].x,u=t[w+1].y-t[w].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let w=0;w<=e;w++){let x=n+w*h*s,y=Math.sin(x),k=Math.cos(x);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*y,d.y=t[A].y,d.z=t[A].x*k,o.push(d.x,d.y,d.z),p.x=w/e,p.y=A/(t.length-1),a.push(p.x,p.y);let I=l[3*A+0]*y,P=l[3*A+1],M=l[3*A+0]*k;c.push(I,P,M)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){let y=x+w*t.length,k=y,A=y+t.length,I=y+t.length+1,P=y+1;r.push(k,A,P),r.push(I,P,A)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},kn=class i extends rr{constructor(t=1,e=1,n=4,s=8){let r=new sr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var ge=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],f=[],g=0,v=[],m=n/2,u=0;w(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(p,3)),this.setAttribute("uv",new be(f,2));function w(){let y=new H,k=new H,A=0,I=(e-t)/n;for(let P=0;P<=r;P++){let M=[],_=P/r,b=_*(e-t)+t;for(let L=0;L<=s;L++){let E=L/s,S=E*l+a,D=Math.sin(S),U=Math.cos(S);k.x=b*D,k.y=-_*n+m,k.z=b*U,d.push(k.x,k.y,k.z),y.set(D,I,U).normalize(),p.push(y.x,y.y,y.z),f.push(E,1-_),M.push(g++)}v.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let _=v[M][P],b=v[M+1][P],L=v[M+1][P+1],E=v[M][P+1];(t>0||M!==0)&&(h.push(_,b,E),A+=3),(e>0||M!==r-1)&&(h.push(b,L,E),A+=3)}c.addGroup(u,A,0),u+=A}function x(y){let k=g,A=new kt,I=new H,P=0,M=y===!0?t:e,_=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*_,0),p.push(0,_,0),f.push(.5,.5),g++;let b=g;for(let L=0;L<=s;L++){let S=L/s*l+a,D=Math.cos(S),U=Math.sin(S);I.x=M*U,I.y=m*_,I.z=M*D,d.push(I.x,I.y,I.z),p.push(0,_,0),A.x=D*.5+.5,A.y=U*.5*_+.5,f.push(A.x,A.y),g++}for(let L=0;L<s;L++){let E=k+L,S=b+L;y===!0?h.push(S,S+1,E):h.push(S+1,S,E),P+=3}c.addGroup(u,P,y===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$e=class i extends ge{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dl=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let x=new H,y=new H,k=new H;for(let A=0;A<e.length;A+=3)f(e[A+0],x),f(e[A+1],y),f(e[A+2],k),l(x,y,k,w)}function l(w,x,y,k){let A=k+1,I=[];for(let P=0;P<=A;P++){I[P]=[];let M=w.clone().lerp(y,P/A),_=x.clone().lerp(y,P/A),b=A-P;for(let L=0;L<=b;L++)L===0&&P===A?I[P][L]=M:I[P][L]=M.clone().lerp(_,L/b)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){let _=Math.floor(M/2);M%2===0?(p(I[P][_+1]),p(I[P+1][_]),p(I[P][_])):(p(I[P][_+1]),p(I[P+1][_+1]),p(I[P+1][_]))}}function c(w){let x=new H;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(w),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let w=new H;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];let y=m(w)/2/Math.PI+.5,k=u(w)/Math.PI+.5;o.push(y,1-k)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){let x=o[w+0],y=o[w+2],k=o[w+4],A=Math.max(x,y,k),I=Math.min(x,y,k);A>.9&&I<.1&&(x<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),k<.2&&(o[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function f(w,x){let y=w*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){let w=new H,x=new H,y=new H,k=new H,A=new kt,I=new kt,P=new kt;for(let M=0,_=0;M<r.length;M+=9,_+=6){w.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),A.set(o[_+0],o[_+1]),I.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),k.copy(w).add(x).add(y).divideScalar(3);let b=m(k);v(A,_+0,w,b),v(I,_+2,x,b),v(P,_+4,y,b)}}function v(w,x,y,k){k<0&&w.x===1&&(o[x]=w.x-1),y.x===0&&y.z===0&&(o[x]=k/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Vi=class extends sr{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new sr().fromJSON(s))}return this}},Ng={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,p,f;if(n&&(r=Bg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],p=i[g+1],d<a&&(a=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return or(r,o,e,a,l,f,0),o}};function nf(i,t,e,n,s){let r,o;if(s===Kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Rh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Rh(r,i[r],i[r+1],o);return o&&ko(o,o.next)&&(lr(o),o=o.next),o}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ko(e,e.next)||Ye(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?zg(i,n,s,r):Fg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Og(Gi(i),t,e),or(i,t,e,n,s,r,2)):o===2&&kg(i,t,e,n,s,r):or(Gi(i),t,e,n,s,r,1);break}}}function Fg(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&ds(s,a,r,l,o,c,g.x,g.y)&&Ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ye(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,p=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<p?h:p:d<p?d:p,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>p?h:p:d>p?d:p,u=Ul(f,g,t,e,n),w=Ul(v,m,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=u&&y&&y.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ds(a,h,l,d,c,p,x.x,x.y)&&Ye(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ds(a,h,l,d,c,p,y.x,y.y)&&Ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=u;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ds(a,h,l,d,c,p,x.x,x.y)&&Ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ds(a,h,l,d,c,p,y.x,y.y)&&Ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Og(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ko(s,r)&&sf(s,n,n.next,r)&&ar(s,r)&&ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lr(n),lr(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function kg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$g(o,a)){let l=rf(o,a);o=Gi(o,o.next),l=Gi(l,l.next),or(o,t,e,n,s,r,0),or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=nf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Yg(c));for(s.sort(Hg),r=0;r<s.length;r++)e=Vg(s[r],e);return e}function Hg(i,t){return i.x-t.x}function Vg(i,t){let e=Gg(i,t);if(!e)return t;let n=rf(e,i);return Gi(n,n.next),Gi(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ds(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),ar(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Wg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Wg(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function Xg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qg(s)}function qg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ds(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $g(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zg(i,t)&&(ar(i,t)&&ar(t,i)&&Jg(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||ko(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ko(i,t){return i.x===t.x&&i.y===t.y}function sf(i,t,e,n){let s=Yr(Ye(i,t,e)),r=Yr(Ye(i,t,n)),o=Yr(Ye(e,n,i)),a=Yr(Ye(e,n,t));return!!(s!==r&&o!==a||s===0&&qr(i,e,t)||r===0&&qr(i,n,t)||o===0&&qr(e,i,n)||a===0&&qr(e,t,n))}function qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yr(i){return i>0?1:i<0?-1:0}function Zg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ar(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function Jg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rf(i,t){let e=new Nl(i.i,i.x,i.y),n=new Nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rh(i,t,e,n){let s=new Nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var _i=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ch(t),Ih(n,t);let o=t.length;e.forEach(Ch);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ih(n,e[l]);let a=Ng.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ch(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ro=class i extends Be{constructor(t=new Vi([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new be(s,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:jg,x,y=!1,k,A,I,P;u&&(x=u.getSpacedPoints(h),y=!0,p=!1,k=u.computeFrenetFrames(h,!1),A=new H,I=new H,P=new H),p||(m=0,f=0,g=0,v=0);let M=a.extractPoints(c),_=M.shape,b=M.holes;if(!_i.isClockWise(_)){_=_.reverse();for(let nt=0,pt=b.length;nt<pt;nt++){let B=b[nt];_i.isClockWise(B)&&(b[nt]=B.reverse())}}let E=_i.triangulateShape(_,b),S=_;for(let nt=0,pt=b.length;nt<pt;nt++){let B=b[nt];_=_.concat(B)}function D(nt,pt,B){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(pt,B)}let U=_.length,O=E.length;function V(nt,pt,B){let Ht,J,$,mt=nt.x-pt.x,q=nt.y-pt.y,Pt=B.x-nt.x,z=B.y-nt.y,R=mt*mt+q*q,at=mt*z-q*Pt;if(Math.abs(at)>Number.EPSILON){let Mt=Math.sqrt(R),It=Math.sqrt(Pt*Pt+z*z),Z=pt.x-q/Mt,rt=pt.y+mt/Mt,ot=B.x-z/It,xt=B.y+Pt/It,Tt=((ot-Z)*z-(xt-rt)*Pt)/(mt*z-q*Pt);Ht=Z+mt*Tt-nt.x,J=rt+q*Tt-nt.y;let St=Ht*Ht+J*J;if(St<=2)return new kt(Ht,J);$=Math.sqrt(St/2)}else{let Mt=!1;mt>Number.EPSILON?Pt>Number.EPSILON&&(Mt=!0):mt<-Number.EPSILON?Pt<-Number.EPSILON&&(Mt=!0):Math.sign(q)===Math.sign(z)&&(Mt=!0),Mt?(Ht=-q,J=mt,$=Math.sqrt(R)):(Ht=mt,J=q,$=Math.sqrt(R/2))}return new kt(Ht/$,J/$)}let dt=[];for(let nt=0,pt=S.length,B=pt-1,Ht=nt+1;nt<pt;nt++,B++,Ht++)B===pt&&(B=0),Ht===pt&&(Ht=0),dt[nt]=V(S[nt],S[B],S[Ht]);let it=[],N,Et=dt.concat();for(let nt=0,pt=b.length;nt<pt;nt++){let B=b[nt];N=[];for(let Ht=0,J=B.length,$=J-1,mt=Ht+1;Ht<J;Ht++,$++,mt++)$===J&&($=0),mt===J&&(mt=0),N[Ht]=V(B[Ht],B[$],B[mt]);it.push(N),Et=Et.concat(N)}for(let nt=0;nt<m;nt++){let pt=nt/m,B=f*Math.cos(pt*Math.PI/2),Ht=g*Math.sin(pt*Math.PI/2)+v;for(let J=0,$=S.length;J<$;J++){let mt=D(S[J],dt[J],Ht);X(mt.x,mt.y,-B)}for(let J=0,$=b.length;J<$;J++){let mt=b[J];N=it[J];for(let q=0,Pt=mt.length;q<Pt;q++){let z=D(mt[q],N[q],Ht);X(z.x,z.y,-B)}}}let Lt=g+v;for(let nt=0;nt<U;nt++){let pt=p?D(_[nt],Et[nt],Lt):_[nt];y?(I.copy(k.normals[0]).multiplyScalar(pt.x),A.copy(k.binormals[0]).multiplyScalar(pt.y),P.copy(x[0]).add(I).add(A),X(P.x,P.y,P.z)):X(pt.x,pt.y,0)}for(let nt=1;nt<=h;nt++)for(let pt=0;pt<U;pt++){let B=p?D(_[pt],Et[pt],Lt):_[pt];y?(I.copy(k.normals[nt]).multiplyScalar(B.x),A.copy(k.binormals[nt]).multiplyScalar(B.y),P.copy(x[nt]).add(I).add(A),X(P.x,P.y,P.z)):X(B.x,B.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){let pt=nt/m,B=f*Math.cos(pt*Math.PI/2),Ht=g*Math.sin(pt*Math.PI/2)+v;for(let J=0,$=S.length;J<$;J++){let mt=D(S[J],dt[J],Ht);X(mt.x,mt.y,d+B)}for(let J=0,$=b.length;J<$;J++){let mt=b[J];N=it[J];for(let q=0,Pt=mt.length;q<Pt;q++){let z=D(mt[q],N[q],Ht);y?X(z.x,z.y+x[h-1].y,x[h-1].x+B):X(z.x,z.y,d+B)}}}C(),W();function C(){let nt=s.length/3;if(p){let pt=0,B=U*pt;for(let Ht=0;Ht<O;Ht++){let J=E[Ht];tt(J[2]+B,J[1]+B,J[0]+B)}pt=h+m*2,B=U*pt;for(let Ht=0;Ht<O;Ht++){let J=E[Ht];tt(J[0]+B,J[1]+B,J[2]+B)}}else{for(let pt=0;pt<O;pt++){let B=E[pt];tt(B[2],B[1],B[0])}for(let pt=0;pt<O;pt++){let B=E[pt];tt(B[0]+U*h,B[1]+U*h,B[2]+U*h)}}n.addGroup(nt,s.length/3-nt,0)}function W(){let nt=s.length/3,pt=0;j(S,pt),pt+=S.length;for(let B=0,Ht=b.length;B<Ht;B++){let J=b[B];j(J,pt),pt+=J.length}n.addGroup(nt,s.length/3-nt,1)}function j(nt,pt){let B=nt.length;for(;--B>=0;){let Ht=B,J=B-1;J<0&&(J=nt.length-1);for(let $=0,mt=h+m*2;$<mt;$++){let q=U*$,Pt=U*($+1),z=pt+Ht+q,R=pt+J+q,at=pt+J+Pt,Mt=pt+Ht+Pt;ut(z,R,at,Mt)}}}function X(nt,pt,B){l.push(nt),l.push(pt),l.push(B)}function tt(nt,pt,B){Rt(nt),Rt(pt),Rt(B);let Ht=s.length/3,J=w.generateTopUV(n,s,Ht-3,Ht-2,Ht-1);Ft(J[0]),Ft(J[1]),Ft(J[2])}function ut(nt,pt,B,Ht){Rt(nt),Rt(pt),Rt(Ht),Rt(pt),Rt(B),Rt(Ht);let J=s.length/3,$=w.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);Ft($[0]),Ft($[1]),Ft($[3]),Ft($[1]),Ft($[2]),Ft($[3])}function Rt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Ft(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ao[s.type]().fromJSON(s)),new i(n,t.options)}},jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new kt(r,o),new kt(a,l),new kt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new kt(o,1-l),new kt(c,1-d),new kt(p,1-g),new kt(v,1-u)]:[new kt(a,1-l),new kt(h,1-d),new kt(f,1-g),new kt(m,1-u)]}};function Qg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var sn=class i extends Dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ts=class i extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,p=(e-t)/s,f=new H,g=new kt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let u=r+m/n*o;f.x=d*Math.cos(u),f.y=d*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let v=0;v<s;v++){let m=v*(n+1);for(let u=0;u<n;u++){let w=u+m,x=w,y=w+n+1,k=w+n+2,A=w+1;a.push(x,y,A),a.push(y,k,A)}}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Co=class i extends Be{constructor(t=new Vi([new kt(0,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(r,3)),this.setAttribute("uv",new be(o,2));function c(h){let d=s.length/3,p=h.extractPoints(e),f=p.shape,g=p.holes;_i.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){let w=g[m];_i.isClockWise(w)===!0&&(g[m]=w.reverse())}let v=_i.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){let w=g[m];f=f.concat(w)}for(let m=0,u=f.length;m<u;m++){let w=f[m];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let m=0,u=v.length;m<u;m++){let w=v[m],x=w[0]+d,y=w[1]+d,k=w[2]+d;n.push(x,y,k),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ee=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new H,p=new H,f=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){let w=[],x=u/n,y=0;u===0&&o===0?y=.5/e:u===n&&l===Math.PI&&(y=-.5/e);for(let k=0;k<=e;k++){let A=k/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),m.push(A+y,1-x),w.push(c++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){let x=h[u][w+1],y=h[u][w],k=h[u+1][w],A=h[u+1][w+1];(u!==0||o>0)&&f.push(x,y,A),(u!==n-1||l<Math.PI)&&f.push(y,k,A)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ke=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new H,d=new H,p=new H;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(v,m,w),o.push(m,u,w)}this.setIndex(o),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Io=class i extends Be{constructor(t=new wo(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new kt,h=new H,d=[],p=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(p,3)),this.setAttribute("uv",new be(f,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),w(),u()}function m(x){h=t.getPointAt(x/e,h);let y=o.normals[x],k=o.binormals[x];for(let A=0;A<=s;A++){let I=A/s*Math.PI*2,P=Math.sin(I),M=-Math.cos(I);l.x=M*y.x+P*k.x,l.y=M*y.y+P*k.y,l.z=M*y.z+P*k.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let k=(s+1)*(x-1)+(y-1),A=(s+1)*x+(y-1),I=(s+1)*x+y,P=(s+1)*(x-1)+y;g.push(k,A,P),g.push(A,I,P)}}function w(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)c.x=x/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ao[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Po=class extends ci{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function $r(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends As{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,u=-p*m+2*p*v-p*g,w=(1+p)*m+(-1.5-2*p)*v+(-.5+p)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let k=0;k!==a;++k)r[k]=u*o[h+k]+w*o[c+k]+x*o[l+k]+y*o[d+k];return r}},zl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*h;return r}},Ol=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,p=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[p+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=hl;var Wi=class extends Bn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=to;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Bn{};kl.prototype.ValueTypeName="color";var Bl=class extends Bn{};Bl.prototype.ValueTypeName="number";var Hl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lo=class extends Bn{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Bn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=to;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Bn{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},nx=new Gl,Wl=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uo=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wa=new Le,Ph=new H,Lh=new H,Xl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ql=class extends Xl{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ac="\\[\\]\\.:\\/",ix=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",sx="[^"+ac.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",lc),ox=/(WCOD+)?/.source.replace("WCOD",sx),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),cx=new RegExp("^"+rx+ox+ax+lx+"$"),hx=["material","materials","bones","map"],Yl=class{constructor(t,e,n){let s=n||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Yl;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);var fx=2.3,We=7.2,Bo=.16,wi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function of(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=C=>{let W=Math.max(0,Math.min(s,C/r)),j=Math.min(s-1,Math.floor(W)),X=W-j,tt=n[Math.max(0,j-1)],ut=n[j],Rt=n[j+1],Ft=n[Math.min(s,j+2)],nt=pt=>.5*(2*ut[pt]+(-tt[pt]+Rt[pt])*X+(2*tt[pt]-5*ut[pt]+4*Rt[pt]-Ft[pt])*X*X+(-tt[pt]+3*ut[pt]-3*Rt[pt]+Ft[pt])*X*X*X);return[nt(0),nt(2),ut[1]+(Rt[1]-ut[1])*X]},a=C=>{if(C<=i.lengthM)return o(C);let W=o(i.lengthM-20),j=o(i.lengthM),X=(C-i.lengthM)/20;return[j[0]+(j[0]-W[0])*X,j[1]+(j[1]-W[1])*X,j[2]]},l=2700,c=2585,h=i.overlaps.filter(([C,W])=>W>C).sort((C,W)=>C[1]-W[1]),d=C=>{for(let X=0;X<h.length-1;X++){let[tt,ut]=h[X],[Rt,Ft]=h[X+1];if(C<=Ft)return tt+(C-ut)*(Rt-tt)/(Ft-ut)}let[W,j]=h.at(-1);return W+(C-j)},p=[];for(let C=0;C<=l;C+=2)p.push([C,...o(C)]);let f=2600,g=4900,v=[];for(let C=f;C<=g;C+=10){let W=o(C),j=d(C),X=j,tt=1e9;for(let ut of p){if(Math.abs(ut[0]-j)>60)continue;let Rt=(ut[1]-W[0])**2+(ut[2]-W[1])**2;Rt<tt&&(tt=Rt,X=ut[0])}v.push(X)}let m=v.map((C,W)=>{let j=0,X=0;for(let tt=-3;tt<=3;tt++){let ut=W+tt;ut>=0&&ut<v.length&&(j+=v[ut],X++)}return j/X});for(let C=1;C<m.length;C++)m[C]=Math.max(m[C],m[C-1]+.5);let u=C=>{let W=(C-f)/10,j=Math.max(0,Math.min(m.length-2,Math.floor(W))),X=W-j;return m[j]+(m[j+1]-m[j])*X},w={};function x(C){for(let W of Object.keys(w))delete w[W];for(let W of C?.runners||[])!W.diversions||!W.diversions.length||(w[W.id]=W.diversions.map(j=>{let X=j.path,tt=[0];for(let ut=1;ut<X.length;ut++)tt.push(tt[ut-1]+Math.hypot(X[ut][0]-X[ut-1][0],X[ut][1]-X[ut-1][1]));return{...j,cum:tt,len:tt.at(-1)}}))}x(e);let y=(C,W)=>{let j=Math.max(0,Math.min(1,(W-C.fromM)/(C.toM-C.fromM)))*C.len,X=0;for(;X<C.cum.length-2&&C.cum[X+1]<j;)X++;let tt=(j-C.cum[X])/Math.max(1e-6,C.cum[X+1]-C.cum[X]);return[C.path[X][0]+(C.path[X+1][0]-C.path[X][0])*tt,C.path[X][1]+(C.path[X+1][1]-C.path[X][1])*tt]};function k(C){if(C<f-60){let tt=a(C);return[tt[0],tt[1]]}let W=a(C);if(C>=g+40)return[W[0],W[1]];let j=wi(f-60,f+60,C)*(1-wi(g-60,g,C));if(j<=0)return[W[0],W[1]];let X=o(Math.min(l,u(Math.max(f,Math.min(g,C)))));return[W[0]+(X[0]-W[0])*j,W[1]+(X[1]-W[1])*j]}function A(C,W){let j=k(C),X=W&&w[W];if(X){for(let tt of X)if(C>tt.fromM&&C<tt.toM){let ut=wi(tt.fromM,tt.fromM+30,C)*(1-wi(tt.toM-30,tt.toM,C)),Rt=y(tt,C);return j=[j[0]+(Rt[0]-j[0])*ut,j[1]+(Rt[1]-j[1])*ut],{x:j[0],z:j[1],div:ut,divInfo:tt}}}return{x:j[0],z:j[1],div:0,divInfo:null}}let[I,P,M,_]=t.bounds,b={x0:I-60,z0:P-60,cell:5};b.nx=Math.ceil((M+60-b.x0)/b.cell)+1,b.nz=Math.ceil((_+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let L=[];for(let C=0;C<=s;C+=2)L.push(n[C]);let E=0;for(let C of L)E+=C[1];E/=L.length;let S=(C,W)=>Math.sin(C*.011+1.3)*Math.cos(W*.009-.4)*2.2+Math.sin(C*.027+W*.019)*.9;for(let C=0;C<b.nz;C++)for(let W=0;W<b.nx;W++){let j=b.x0+W*b.cell,X=b.z0+C*b.cell,tt=0,ut=0,Rt=1e9;for(let pt of L){let B=(pt[0]-j)**2+(pt[2]-X)**2;B<Rt&&(Rt=B);let Ht=1/(B+400),J=Ht*Ht;tt+=J,ut+=J*pt[1]}let Ft=wi(30,160,Math.sqrt(Rt)),nt=ut/tt*(1-Ft*.4)+E*Ft*.4+S(j,X)*Ft;b.h[C*b.nx+W]=nt*fx}let D=t.features.filter(C=>C.closed&&["water","track","tennis","pitch"].includes(C.kind)&&C.pts.length>3);for(let C of D){let W=Ln(C.pts),j=[];for(let ut=Math.max(0,Math.floor((W[1]-12-b.z0)/b.cell));ut<=Math.min(b.nz-1,Math.ceil((W[3]+12-b.z0)/b.cell));ut++)for(let Rt=Math.max(0,Math.floor((W[0]-12-b.x0)/b.cell));Rt<=Math.min(b.nx-1,Math.ceil((W[2]+12-b.x0)/b.cell));Rt++){let Ft=b.x0+Rt*b.cell,nt=b.z0+ut*b.cell,pt=hr(C.pts,Ft,nt);pt<12&&j.push([ut*b.nx+Rt,pt])}let X=0,tt=0;for(let[ut,Rt]of j)Rt<0&&(X+=b.h[ut],tt++);if(tt){X/=tt,C.kind==="water"&&(X=Math.min(...j.filter(ut=>ut[1]<0).map(ut=>b.h[ut[0]]))-.2),C._level=X;for(let[ut,Rt]of j){let Ft=1-wi(0,12,Rt);b.h[ut]=b.h[ut]*(1-Ft)+X*Ft-(C.kind==="water"?1.6*(1-wi(-6,0,Rt)):0)}}}{for(let nt=0;nt<3;nt++){let pt=new Float32Array(b.h);for(let B=1;B<b.nz-1;B++)for(let Ht=1;Ht<b.nx-1;Ht++){let J=B*b.nx+Ht;pt[J]=(b.h[J]*4+b.h[J-1]+b.h[J+1]+b.h[J-b.nx]+b.h[J+b.nx])/8}b.h.set(pt)}let C=new Float32Array(b.nx*b.nz).fill(1e9),W=new Float32Array(b.nx*b.nz),j=new Float32Array(b.nx*b.nz),X=(nt,pt)=>b.h[pt*b.nx+nt],tt=(nt,pt)=>{let B=Math.round((nt-b.x0)/b.cell),Ht=Math.round((pt-b.z0)/b.cell);return X(Math.max(0,Math.min(b.nx-1,B)),Math.max(0,Math.min(b.nz-1,Ht)))},ut=[[0,c],[2540,2690],[g-80,i.lengthM+45]],Rt=[];for(let[nt,pt]of ut)for(let B=nt;B<=pt;B+=2){let Ht=k(B);Rt.push([Ht[0],Ht[1],tt(Ht[0],Ht[1])])}for(let nt=0;nt<4;nt++)for(let pt=1;pt<Rt.length-1;pt++)Rt[pt][2]=(Rt[pt-1][2]+Rt[pt][2]*2+Rt[pt+1][2])/4;let Ft=We/2+7;for(let[nt,pt,B]of Rt){let Ht=Math.floor((nt-Ft-b.x0)/b.cell),J=Math.ceil((nt+Ft-b.x0)/b.cell),$=Math.floor((pt-Ft-b.z0)/b.cell),mt=Math.ceil((pt+Ft-b.z0)/b.cell);for(let q=Math.max(0,$);q<=Math.min(b.nz-1,mt);q++)for(let Pt=Math.max(0,Ht);Pt<=Math.min(b.nx-1,J);Pt++){let z=Math.hypot(b.x0+Pt*b.cell-nt,b.z0+q*b.cell-pt);if(z>Ft)continue;let R=q*b.nx+Pt,at=(1-z/Ft)**2;W[R]+=at,j[R]+=at*B,z<C[R]&&(C[R]=z)}}for(let nt=0;nt<C.length;nt++)if(C[nt]<Ft&&W[nt]>0){let pt=1-wi(We/2+.5,Ft,C[nt]);b.h[nt]=b.h[nt]*(1-pt)+j[nt]/W[nt]*pt}b.pathSamples=Rt}let U=D.filter(C=>C.kind==="water").sort((C,W)=>W.pts.length-C.pts.length)[0];function O(C,W){let j=(C-b.x0)/b.cell,X=(W-b.z0)/b.cell,tt=Math.max(0,Math.min(b.nx-2,Math.floor(j))),ut=Math.max(0,Math.min(b.nz-2,Math.floor(X))),Rt=Math.max(0,Math.min(1,j-tt)),Ft=Math.max(0,Math.min(1,X-ut)),nt=b.h[ut*b.nx+tt],pt=b.h[ut*b.nx+tt+1],B=b.h[(ut+1)*b.nx+tt],Ht=b.h[(ut+1)*b.nx+tt+1];return Rt+Ft<=1?nt+(pt-nt)*Rt+(B-nt)*Ft:Ht+(B-Ht)*(1-Rt)+(pt-Ht)*(1-Ft)}let V=new H;function dt(C,W,j={}){let X=A(C,W),tt=Math.max(0,C-4),ut=tt+8,Rt=A(tt,W),Ft=A(ut,W),nt=Ft.x-Rt.x,pt=Ft.z-Rt.z,B=Math.hypot(nt,pt)||1;return nt/=B,pt/=B,j.x=X.x,j.z=X.z,j.y=O(X.x,X.z)+Bo,j.tx=nt,j.tz=pt,j.rx=-pt,j.rz=nt,j.slope=(O(Ft.x,Ft.z)-O(Rt.x,Rt.z))/Math.max(1,B),j.div=X.div,j.divInfo=X.divInfo,j}function it(C,W=25){let j=Math.max(0,C-W),X=k(j),tt=k(j+2*W),ut=Math.hypot(tt[0]-X[0],tt[1]-X[1])||1;return V.set((tt[0]-X[0])/ut,0,(tt[1]-X[1])/ut).clone()}let N=[{from:0,to:c,lift:0},{from:2540,to:2690,lift:.02},{from:g-80,to:i.lengthM+45,lift:.035}],Et=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:k,LAP1_END_DRAW:c,xzAt:A,sample:dt,heading:it,heightAt:O,terrain:b,ribbons:N,finishM:Et,lake:U,flat:D,geoOf:C=>C>=f&&C<=g?u(C):C,diversions:w,setPlan:x,LAP1_END:l,MAP_FROM:f,MAP_TO:g}}function Ln(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function Is(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function hr(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,c]=i[s],h=l-o,d=c-a,p=h*h+d*d||1,f=Math.max(0,Math.min(1,((t-o)*h+(e-a)*d)/p));n=Math.min(n,Math.hypot(t-o-h*f,e-a-d*f))}return Is(i,t,e)?-n:n}function tn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Be,c=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let p=0;p<i.length;++p){let f=i[p].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(d)}for(let h in r){let d=af(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<d;++p){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][p]);let g=af(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function af(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ge(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<e;g++){let v=h.getComponent(p,g);a.setComponent(p+d,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var fr=new H;function Dn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;fr.copy(t),fr[n]=0,fr.normalize();let c=.5*o/(o+a),h=1-fr.angleTo(i)/l;return Math.sign(fr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ae=class extends De{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new H,l=new H,c=new H(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,f=h.length/6,g=new H,v=.5/s;for(let m=0,u=0;m<h.length;m+=3,u+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),p[u+0]=Dn(g,l,"z","y",r,n),p[u+1]=1-Dn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),p[u+0]=1-Dn(g,l,"z","y",r,n),p[u+1]=1-Dn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),p[u+0]=1-Dn(g,l,"x","z",r,t),p[u+1]=Dn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),p[u+0]=1-Dn(g,l,"x","z",r,t),p[u+1]=1-Dn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),p[u+0]=1-Dn(g,l,"x","y",r,t),p[u+1]=1-Dn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),p[u+0]=Dn(g,l,"x","y",r,t),p[u+1]=1-Dn(g,l,"y","x",r,e);break}}};var Ti=null;function ux(){if(Ti)return Ti;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),Ti=new tr(t,i.length,1,Rn),Ti.minFilter=Ti.magFilter=Mn,Ti.generateMipmaps=!1,Ti.needsUpdate=!0,Ti}var ur=new Map;function gt(i,t={}){let e=!t.map&&(typeof i=="number"||typeof i=="string")?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&ur.has(e))return ur.get(e);let n=new Po({color:new le(i??16777215),gradientMap:ux(),...t});return e&&!t.map&&ur.set(e,n),n}function lf(){for(let i of ur.values())i.dispose();ur.clear(),dr.forEach(i=>i.dispose()),dr.clear()}var cc={uRes:{value:new kt(1920,1080)}},dr=new Map;function dx(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(dr.has(n))return dr.get(n);let s=new bn({uniforms:{...sc.clone(Zt.fog),uRes:cc.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new le(t)}},vertexShader:`
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
      }`,side:dn,fog:!0});return dr.set(n,s),s}function hc(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),c=n.get(l);c||(c=[0,0,0],n.set(l,c)),c[0]+=e.getX(a),c[1]+=e.getY(a),c[2]+=e.getZ(a),r.push(c)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}return i.setAttribute("onormal",new Ge(o,3)),i}function Hn(i,t=3,e,n){hc(i.geometry);let s=dx(t,e,n),r;return i.isInstancedMesh?(r=new nn(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new ze(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function we(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new ze(i,t);return a.castShadow=e,a.receiveShadow=n,s&&Hn(a,s,r,o),a}function an(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new ws(o);return s&&(l.colorSpace=fn),n&&(l.wrapS=l.wrapT=ki),l.anisotropy=r,l}var fc='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',oe=wn(20240817);function wn(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Vn(i,t,e,n){let s=an(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function ln(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${fc}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function hf(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new ye;i.add(a);let l=T=>(a.add(T),T),c=t.terrain,h=(c.nx-1)*c.cell,d=(c.nz-1)*c.cell,p=new Map,f=6,g=(T,et)=>`${Math.floor(T/f)},${Math.floor(et/f)}`,v=(T,et,Q)=>{let lt=g(T,et),vt=p.get(lt);vt||p.set(lt,vt=[]),vt.push([T,et,Q])},m=(T,et,Q)=>{let lt=Math.floor(T/f),vt=Math.floor(et/f),ft=Math.ceil((Q+30)/f);for(let Dt=-ft;Dt<=ft;Dt++)for(let Vt=-ft;Vt<=ft;Vt++){let Ot=p.get(`${lt+Dt},${vt+Vt}`);if(Ot){for(let[K,bt,wt]of Ot)if((K-T)**2+(bt-et)**2<(wt+Q)**2)return!1}}return!0},u=[];for(let T of t.ribbons)for(let et=T.from;et<=T.to;et+=3){let Q=t.baseXZ(et);u.push(Q),v(Q[0],Q[1],We/2+1.5)}for(let T in t.diversions)for(let et of t.diversions[T])for(let Q of et.path)v(Q[0],Q[1],4);let w=s.features.filter(T=>T.kind==="park").sort((T,et)=>et.pts.length-T.pts.length)[0].pts,x=(T,et)=>Is(w,T,et),k=s.features.filter(T=>T.closed&&["water","track","tennis","pitch","playground","building"].includes(T.kind)).map(T=>[Ln(T.pts),T]),A=(T,et,Q=2)=>k.some(([lt,vt])=>T>lt[0]-Q&&T<lt[2]+Q&&et>lt[1]-Q&&et<lt[3]+Q&&hr(vt.pts,T,et)<Q),I=1.7,P=[];function M(T,et,Q=!1){P.push({im:T,list:et,occluder:Q})}let _=new Set,b=new Le;function L(T,et,Q=5){let lt=new Set,vt=T?T.x:0,ft=T?T.z:0,Dt=et?et.x:0,Vt=et?et.z:0,Ot=Dt-vt,K=Vt-ft,bt=Ot*Ot+K*K||1;for(let wt of P)wt.occluder&&wt.list.forEach((Wt,ae)=>{let he=!1;if(T&&!Wt.cleared){let Ie=((Wt.x-vt)*Ot+(Wt.z-ft)*K)/bt;if(Ie>.02&&Ie<1){let Pe=vt+Ot*Ie-Wt.x,Ve=ft+K*Ie-Wt.z;he=!((1-Ie)*Math.sqrt(bt)<6)&&Pe*Pe+Ve*Ve<(Q*(Wt.s||1))**2}}let xe=wt.im.id*1e5+ae;he&&!_.has(xe)?(_.add(xe),wt.im.setMatrixAt(ae,E),lt.add(wt.im)):!he&&_.has(xe)&&(_.delete(xe),wt.im.setMatrixAt(ae,Wt._m||b.identity()),lt.add(wt.im))});for(let wt of lt)wt.instanceMatrix.needsUpdate=!0}let E=new Le().makeScale(0,0,0);function S(T){for(let{im:et,list:Q}of P){let lt=!1;Q.forEach((vt,ft)=>{!vt.cleared&&T(vt.x,vt.z)&&(vt.cleared=!0,et.setMatrixAt(ft,E),lt=!0)}),lt&&(et.instanceMatrix.needsUpdate=!0)}}function D(){let T=U.image.getContext("2d");O(T,U.image.width,U.image.height),U.needsUpdate=!0}let U=an(Math.round(h*I),Math.round(d*I),(T,et,Q)=>O(T,et,Q),{aniso:8});o.push(U);function O(T,et,Q){let lt=K=>(K-c.x0)*I,vt=K=>(K-c.z0)*I,ft=(K,bt=!0)=>{T.beginPath(),K.forEach((wt,Wt)=>Wt?T.lineTo(lt(wt[0]),vt(wt[1])):T.moveTo(lt(wt[0]),vt(wt[1]))),bt&&T.closePath()};T.fillStyle="#d8d2c2",T.fillRect(0,0,et,Q);for(let K=0;K<9e3;K++)T.fillStyle=oe()<.5?"#cfc8b6":"#e2dccd",T.fillRect(oe()*et,oe()*Q,3,3);ft(w),T.fillStyle="#66cf45",T.fill(),T.save(),ft(w),T.clip(),T.translate(et/2,Q/2),T.rotate(-.62);for(let K=-2e3;K<2e3;K+=2*14*I)T.fillStyle="rgba(255,255,140,0.10)",T.fillRect(K,-2500,14*I,5e3);T.setTransform(1,0,0,1,0,0);for(let K=0;K<26e3;K++){let bt=oe()*et,wt=oe()*Q;T.fillStyle=oe()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",T.fillRect(bt,wt,2+oe()*2,2+oe()*3)}T.restore();let Dt=(K,bt,wt)=>{for(let Wt of s.features)Wt.kind===K&&Wt.closed&&(ft(Wt.pts),T.fillStyle=bt,T.fill(),wt&&(T.strokeStyle=wt,T.lineWidth=2,T.stroke()))};Dt("grass","#72d64e"),Dt("garden","#86dc5c"),Dt("wood","#3f9e3a"),Dt("scrub","#5cb544");for(let K of s.features)if(K.kind==="pitch"&&K.closed){T.save(),ft(K.pts),T.clip(),T.fillStyle="#5ccc3f",T.fill();let bt=Ln(K.pts);for(let wt=bt[0];wt<bt[2];wt+=8)T.fillStyle="rgba(255,255,255,0.10)",T.fillRect(lt(wt),vt(bt[1]),4*I,(bt[3]-bt[1])*I);T.restore(),ft(K.pts),T.strokeStyle="#ffffff",T.lineWidth=2.2,T.stroke()}for(let K of s.features)if(K.kind==="playground"&&K.closed){ft(K.pts),T.fillStyle="#7fcfb4",T.fill(),T.save(),ft(K.pts),T.clip();let bt=Ln(K.pts);for(let wt=0;wt<260;wt++)T.fillStyle=oe()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",T.fillRect(lt(bt[0]+oe()*(bt[2]-bt[0])),vt(bt[1]+oe()*(bt[3]-bt[1])),3,3);for(let wt=0;wt<(bt[2]-bt[0])*(bt[3]-bt[1])/400;wt++)T.beginPath(),T.arc(lt(bt[0]+oe()*(bt[2]-bt[0])),vt(bt[1]+oe()*(bt[3]-bt[1])),1.6*I,0,7),T.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][wt%3],T.fill();T.restore(),ft(K.pts),T.strokeStyle="#ffffff",T.lineWidth=.8*I,T.stroke()}let Vt=K=>{let bt=0;for(let wt=0,Wt=K.pts.length-1;wt<K.pts.length;Wt=wt++)bt+=(K.pts[Wt][0]+K.pts[wt][0])*(K.pts[Wt][1]-K.pts[wt][1]);return Math.abs(bt/2)};for(let K of s.features)if(K.kind==="track"&&K.closed&&Vt(K)>5e3){T.save(),ft(K.pts),T.clip(),T.fillStyle="#e2523a",T.fill();let bt=9*I,wt=Ho(K.pts),Wt=Ln(K.pts),ae=Wt[2]-Wt[0],he=Wt[3]-Wt[1],xe=Pe=>K.pts.map(Ve=>[wt[0]+(Ve[0]-wt[0])*Pe,wt[1]+(Ve[1]-wt[1])*Pe]),Ie=1-2*9/Math.min(ae,he);for(let Pe=1;Pe<=5;Pe++)ft(xe(1-(1-Ie)*(Pe/6))),T.strokeStyle="rgba(255,255,255,0.9)",T.lineWidth=1.6,T.stroke();ft(xe(Ie)),T.fillStyle="#5ccc3f",T.fill(),T.strokeStyle="#ffffff",T.lineWidth=3,T.stroke(),T.restore(),ft(K.pts),T.strokeStyle="#ffffff",T.lineWidth=3,T.stroke()}for(let K of s.features)if(K.kind==="track"&&K.closed&&Vt(K)<=5e3){let bt=K.tags?.surface==="sand";if(!K.tags?.surface)continue;ft(K.pts),T.fillStyle=bt?"#f2d58f":"#e2523a",T.fill(),T.strokeStyle="#ffffff",T.lineWidth=1.5,T.stroke()}for(let K of s.features)if(K.kind==="tennis"&&K.closed){ft(K.pts),T.fillStyle="#3f9fd1",T.fill(),T.strokeStyle="#ffffff",T.lineWidth=2.5,T.stroke();let bt=Ho(K.pts),wt=Ln(K.pts);T.save(),ft(K.pts),T.clip(),T.strokeStyle="rgba(255,255,255,0.9)",T.lineWidth=1.5,T.beginPath(),T.moveTo(lt(bt[0]),vt(wt[1])),T.lineTo(lt(bt[0]),vt(wt[3])),T.stroke(),T.restore()}for(let K of s.features)K.kind==="water"&&K.closed&&(ft(K.pts),T.strokeStyle="#f4efe0",T.lineWidth=3.4*I,T.lineJoin="round",T.stroke(),T.fillStyle="#2f8fe0",T.fill());for(let K of s.features)K.kind==="path"&&(ft(K.pts,!1),T.lineCap="round",T.lineJoin="round",T.strokeStyle="#c9ad78",T.lineWidth=3.6*I,T.stroke());for(let K of s.features)K.kind==="path"&&(ft(K.pts,!1),T.strokeStyle="#ecd8a6",T.lineWidth=2.6*I,T.stroke());let Ot=K=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[K.tags?.highway]||7;for(let K of s.features)K.kind==="road"&&(ft(K.pts,K.closed),T.lineCap="round",T.lineJoin="round",T.strokeStyle="#ece6d6",T.lineWidth=(Ot(K)+4)*I,T.stroke());for(let K of s.features)K.kind==="road"&&(ft(K.pts,K.closed),T.strokeStyle="#7f8597",T.lineWidth=Ot(K)*I,T.stroke());for(let K of s.features)K.kind==="road"&&Ot(K)>=11&&(ft(K.pts,!1),T.setLineDash([5*I,5*I]),T.strokeStyle="#f4f1e6",T.lineWidth=.5*I,T.stroke(),T.setLineDash([]));for(let K of s.features)K.kind==="rail"&&(ft(K.pts,!1),T.strokeStyle="#9b8f84",T.lineWidth=5*I,T.stroke());for(let K of s.features)K.kind==="rail"&&(ft(K.pts,!1),T.setLineDash([1,2]),T.strokeStyle="#5b4f46",T.lineWidth=3*I,T.stroke(),T.setLineDash([]),ft(K.pts,!1),T.strokeStyle="#c9ccd6",T.lineWidth=.8,T.stroke());for(let K of s.features)K.kind==="building"&&K.closed&&(ft(K.pts),T.fillStyle="#9c968a",T.fill());for(let K in t.diversions)for(let bt of t.diversions[K])T.beginPath(),bt.path.forEach((wt,Wt)=>Wt?T.lineTo(lt(wt[0]),vt(wt[1])):T.moveTo(lt(wt[0]),vt(wt[1]))),T.lineCap="round",T.lineJoin="round",T.strokeStyle="rgba(196,160,96,0.85)",T.lineWidth=4*I,T.stroke(),T.setLineDash([2*I,3*I]),T.strokeStyle="rgba(255,240,200,0.8)",T.lineWidth=.6*I,T.stroke(),T.setLineDash([])}{let T=c.nx*c.nz,et=new Float32Array(T*3),Q=new Float32Array(T*2);for(let wt=0;wt<c.nz;wt++)for(let Wt=0;Wt<c.nx;Wt++){let ae=wt*c.nx+Wt;et[ae*3]=c.x0+Wt*c.cell,et[ae*3+1]=c.h[ae],et[ae*3+2]=c.z0+wt*c.cell,Q[ae*2]=Wt/(c.nx-1),Q[ae*2+1]=1-wt/(c.nz-1)}let lt=new Uint32Array((c.nx-1)*(c.nz-1)*6),vt=0;for(let wt=0;wt<c.nz-1;wt++)for(let Wt=0;Wt<c.nx-1;Wt++){let ae=wt*c.nx+Wt,he=ae+1,xe=ae+c.nx,Ie=xe+1;lt[vt++]=ae,lt[vt++]=xe,lt[vt++]=he,lt[vt++]=he,lt[vt++]=xe,lt[vt++]=Ie}let ft=new Be;ft.setAttribute("position",new Ge(et,3)),ft.setAttribute("uv",new Ge(Q,2)),ft.setIndex(new Ge(lt,1)),ft.computeVertexNormals();let Dt=gt(16777215,{map:U}),Vt=an(256,256,(wt,Wt,ae)=>{wt.fillStyle="#808080",wt.fillRect(0,0,Wt,ae);for(let he=0;he<1800;he++){let xe=100+Math.floor(oe()*70);wt.fillStyle=`rgb(${xe},${xe},${xe})`;let Ie=oe()*Wt,Pe=oe()*ae;wt.fillRect(Ie,Pe,2,3+oe()*5)}for(let he=0;he<500;he++)wt.fillStyle="rgba(255,255,255,0.18)",wt.fillRect(oe()*Wt,oe()*ae,2,2)},{repeat:!0,srgb:!1});o.push(Vt),Dt.onBeforeCompile=wt=>{wt.uniforms.uDetail={value:Vt},wt.vertexShader=wt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),wt.fragmentShader=wt.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},Dt.customProgramCacheKey=()=>"terrain-detail";let Ot=we(ft,Dt,{cast:!1});Ot.name="terrain",l(Ot);let K=new ze(new Ts(700,5200,48,1),gt(13227680));K.rotation.x=-Math.PI/2,K.position.set(c.x0+h/2,-2,c.z0+d/2),K.receiveShadow=!1,l(K);let bt=new ze(new pn(h+1800,d+1800),gt(13686197));bt.rotation.x=-Math.PI/2,bt.position.set(c.x0+h/2,-3,c.z0+d/2),l(bt)}let V=an(256,256,(T,et,Q)=>{T.fillStyle="#7f8fb0",T.fillRect(0,0,et,Q);for(let lt=0;lt<1600;lt++)T.fillStyle=oe()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",T.fillRect(oe()*et,oe()*Q,2,2);T.fillStyle="#6b7a9b",T.fillRect(0,0,et*.035,Q),T.fillRect(et*.965,0,et*.035,Q),T.fillStyle="#ffffff",T.fillRect(et*.06,0,et*.045,Q),T.fillRect(et*.895,0,et*.045,Q),T.fillStyle="rgba(255,255,255,0.35)",T.fillRect(et*.49,0,et*.02,Q*.5)},{repeat:!0});o.push(V);{let T=[];for(let ft of t.ribbons)T.push(dt(ft));let et=tn(T),Q=we(et,gt(16777215,{map:V}),{cast:!1});Q.name="path",l(Q);let lt=tn(t.ribbons.map(ft=>dt(ft,!0))),vt=we(lt,gt(5924226),{cast:!1});l(vt)}function dt(T,et=!1){let Q=[];for(let K=T.from;K<=T.to+.01;K+=2)Q.push(t.baseXZ(K));let lt=[],vt=[],ft=[],Dt=0;for(let K=0;K<Q.length;K++){let bt=Q[Math.max(0,K-1)],wt=Q[Math.min(Q.length-1,K+1)],Wt=wt[0]-bt[0],ae=wt[1]-bt[1],he=Math.hypot(Wt,ae)||1;Wt/=he,ae/=he;let xe=-ae,Ie=Wt,Pe=We/2,Ve=[Q[K][0]-xe*Pe,Q[K][1]-Ie*Pe],F=[Q[K][0]+xe*Pe,Q[K][1]+Ie*Pe],ht=t.heightAt(Q[K][0],Q[K][1]),yt=Math.max(t.heightAt(Ve[0],Ve[1]),ht-.05)+Bo+T.lift,_t=Math.max(t.heightAt(F[0],F[1]),ht-.05)+Bo+T.lift;et?(lt.push(Ve[0]-xe*.15,yt-.45,Ve[1]-Ie*.15,Ve[0],yt,Ve[1],F[0],_t,F[1],F[0]+xe*.15,_t-.45,F[1]+Ie*.15),vt.push(0,0,0,1,0,1,0,0)):(lt.push(Ve[0],yt,Ve[1],F[0],_t,F[1]),vt.push(0,Dt/8,1,Dt/8)),K&&(Dt+=2)}let Vt=et?4:2;for(let K=0;K<Q.length-1;K++){let bt=K*Vt,wt=(K+1)*Vt;et?(ft.push(bt,wt,bt+1,bt+1,wt,wt+1),ft.push(bt+2,wt+2,bt+3,bt+3,wt+2,wt+3)):ft.push(bt,wt,bt+1,bt+1,wt,wt+1)}let Ot=new Be;if(Ot.setAttribute("position",new be(lt,3)),Ot.setAttribute("uv",new be(vt,2)),Ot.setIndex(ft),Ot.computeVertexNormals(),Ot.getAttribute("normal").getY(0)<0&&!et){let K=Ot.index.array;for(let bt=0;bt<K.length;bt+=3){let wt=K[bt+1];K[bt+1]=K[bt+2],K[bt+2]=wt}Ot.computeVertexNormals()}return Ot}let it={uTime:{value:0}},N=s.features.filter(T=>T.kind==="water"&&T.closed);for(let T of N){let et=(T._level??Math.min(...T.pts.map(Dt=>t.heightAt(Dt[0],Dt[1]))))+.05,Q=new Vi(T.pts.map(Dt=>new kt(Dt[0],-Dt[1]))),lt=new Co(Q,4);lt.rotateX(-Math.PI/2),lt.translate(0,et,0);let vt=new bn({uniforms:{...it,...Zt.fog},vertexShader:`varying vec3 vW;
${Se.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${Se.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${Se.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${Se.fog_fragment}
        }`,fog:!0}),ft=new ze(lt,vt);ft.name="water",l(ft),o.push(vt),T._waterLevel=et}let Et=[];if(t.lake){let T=t.lake,et=Ln(T.pts),Q=[16767291,16735581,5752831,16777215,16748497,8257418],lt=new Ae(2,.7,3.6,2,.32),vt=new Ae(1.2,.5,.8,2,.2);for(let ft=0,Dt=0;ft<9&&Dt<300;Dt++){let Vt=et[0]+oe()*(et[2]-et[0]),Ot=et[1]+oe()*(et[3]-et[1]);if(hr(T.pts,Vt,Ot)>-7)continue;let K=new ye,bt=we(lt,gt(Q[ft%Q.length]),{ol:2.5});K.add(bt);let wt=we(vt,gt(16777215),{ol:2});wt.position.y=.45,K.add(wt);let Wt=we(new Ee(.42,12,8),gt(Q[(ft+2)%Q.length]),{ol:2});Wt.position.set(0,.9,.7),K.add(Wt),K.position.set(Vt,(T._waterLevel??0)+.1,Ot),K.rotation.y=oe()*6.28,l(K),Et.push({g:K,ph:oe()*6.28,x:Vt,z:Ot,a:K.rotation.y}),ft++}}{let T=an(128,128,(ft,Dt,Vt)=>{ft.fillStyle="#ffffff",ft.fillRect(0,0,Dt,Vt),ft.fillStyle="#ffffff",ft.fillRect(0,0,14,14),ft.fillStyle="#3b4a6b",ft.fillRect(34,30,60,58),ft.fillStyle="#9ec9ff",ft.fillRect(38,34,52,50),ft.fillStyle="#ffffff",ft.fillRect(62,34,4,50),ft.fillRect(38,56,52,4),ft.fillStyle="rgba(0,0,0,0.08)",ft.fillRect(0,118,Dt,10)},{repeat:!0});o.push(T);let et={generateTopUV:(ft,Dt,Vt,Ot,K)=>[new kt(.02,.98),new kt(.02,.98),new kt(.02,.98)],generateSideWallUV:(ft,Dt,Vt,Ot,K,bt)=>{let wt=Dt[Vt*3],Wt=Dt[Vt*3+1],ae=Dt[Vt*3+2],he=Dt[Ot*3],xe=Dt[Ot*3+1],Ie=Dt[Ot*3+2],Pe=Dt[K*3+2],Ve=Dt[bt*3+2],F=(Math.abs(Wt-xe)<Math.abs(wt-he)?wt:Wt)/4.2,ht=(Math.abs(Wt-xe)<Math.abs(wt-he)?he:xe)/4.2;return[new kt(F,ae/3.2),new kt(ht,Ie/3.2),new kt(ht,Pe/3.2),new kt(F,Ve/3.2)]}},Q=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],lt=["#5d6488","#7a5d6c","#4f6b78"],vt=[];for(let ft of s.features){if(ft.kind!=="building"||!ft.closed||ft.pts.length<4)continue;let Dt=Ho(ft.pts);if(x(Dt[0],Dt[1]))continue;let Vt=parseFloat(ft.tags?.["building:levels"])||(oe()<.7?3:4),Ot=Math.min(30,Vt*3.1),K=new Vi(ft.pts.map(Pe=>new kt(Pe[0],-Pe[1]))),bt;try{bt=new Ro(K,{depth:Ot,bevelEnabled:!1,UVGenerator:et})}catch{continue}bt.rotateX(-Math.PI/2);let wt=Math.min(...ft.pts.map(Pe=>t.heightAt(Pe[0],Pe[1])))-1.5;bt.translate(0,wt,0);let Wt=bt.getAttribute("normal"),ae=Wt.count,he=new Float32Array(ae*3),xe=new le(Q[Math.floor(oe()*Q.length)]).convertSRGBToLinear(),Ie=new le(lt[Math.floor(oe()*lt.length)]).convertSRGBToLinear();for(let Pe=0;Pe<ae;Pe++){let Ve=Wt.getY(Pe)>.5?Ie:xe;he[Pe*3]=Ve.r,he[Pe*3+1]=Ve.g,he[Pe*3+2]=Ve.b}bt.setAttribute("color",new Ge(he,3)),vt.push(bt.index?bt.toNonIndexed():bt)}if(vt.length){let ft=tn(vt),Dt=we(ft,gt(16777215,{map:T,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});Dt.name="buildings",l(Dt)}}let Lt=t.sample(t.finishM),C=t.sample(0),W={start:C,finish:Lt},j=new ye;l(j);function X(T,et,Q,lt){let vt=new ye,ft=We/2+1.4,Dt=.85,Vt=an(256,32,(ae,he,xe)=>{for(let Ie=0;Ie<16;Ie++)ae.fillStyle=Ie%2?Q:lt,ae.fillRect(Ie*he/16,0,he/16+1,xe)},{repeat:!1});o.push(Vt);let Ot=new Ke(ft,Dt,14,40,Math.PI);Ot.scale(1,1.25,1);let K=we(Ot,gt(16777215,{map:Vt}),{ol:3.5});vt.add(K);let bt=new ge(Dt*1.4,Dt*1.6,.8,16);for(let ae of[-1,1]){let he=we(bt,gt(lt),{ol:3});he.position.set(ae*ft,.3,0),vt.add(he)}let wt=Vn(1024,256,(ae,he,xe)=>{ae.fillStyle="#1b1b3a",Ze(ae,0,0,he,xe,60),ae.fill(),ae.fillStyle=Q,Ze(ae,12,12,he-24,xe-24,50),ae.fill(),ln(ae,"MARKRUN",he/2,xe*.42,150,"#ffffff","#1b1b3a",.18),ln(ae,et,he/2,xe*.83,56,"#ffe14d","#1b1b3a",.2)},o),Wt=we(new Ae(ft*1.55,ft*.4,.7,3,.25),[gt(lt),gt(lt),gt(lt),gt(lt),gt(16777215,{map:wt}),gt(16777215,{map:wt})],{ol:3.5});return Wt.position.y=ft*1.25+Dt*1.25+ft*.2-.15,vt.add(Wt),vt.position.set(T.x,T.y-.1,T.z),vt.rotation.y=Math.atan2(-T.rz,T.rx),j.add(vt),vt}W.finishArch=X(Lt,"FINISH","#ff3d8b","#ffd23f"),X(C,"START","#2e9bff","#ffd23f");let tt=an(256,64,(T,et,Q)=>{let vt=et/16;for(let ft=0;ft<16;ft++)for(let Dt=0;Dt<4;Dt++)T.fillStyle=(ft+Dt)%2?"#111":"#fff",T.fillRect(ft*vt,Dt*vt,vt,vt)});o.push(tt);function ut(T,et,Q,lt=.03){let vt=new pn(We,Q);vt.rotateX(-Math.PI/2);let ft=new ze(vt,gt(16777215,{map:et,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return ft.position.set(T.x,T.y+lt,T.z),ft.rotation.y=Math.atan2(-T.rz,T.rx),ft.receiveShadow=!0,l(ft),ft}ut(Lt,tt,2.2,.05);let Rt=Vn(512,128,(T,et,Q)=>{T.fillStyle="#ffffff",T.fillRect(0,0,et,22),ln(T,"START",et/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let T=t.sample(2.5);ut(T,Rt,3,.05).rotation.y+=Math.PI}let Ft=new ke;function nt(T,et,Q,{ol:lt=0,olRef:vt,cast:ft=!0,colors:Dt,chunk:Vt=0,occluder:Ot=!1}={}){if(!Q.length)return null;if(Vt){let bt=new Map;Q.forEach((Wt,ae)=>{let he=`${Math.floor(Wt.x/Vt)},${Math.floor(Wt.z/Vt)}`,xe=bt.get(he);xe||bt.set(he,xe={l:[],c:[]}),xe.l.push(Wt),Dt&&xe.c.push(Dt[ae])});let wt=null;for(let{l:Wt,c:ae}of bt.values()){let he=nt(T,et,Wt,{ol:lt,olRef:vt,cast:ft,colors:Dt?ae:null,occluder:Ot});wt=wt||he}return wt}let K=new nn(T,et,Q.length);return Q.forEach((bt,wt)=>{Ft.position.set(bt.x,bt.y,bt.z),Ft.rotation.set(bt.rx||0,bt.ry||0,bt.rz||0),Ft.scale.set(bt.sx??bt.s??1,bt.sy??bt.s??1,bt.sz??bt.s??1),Ft.updateMatrix(),K.setMatrixAt(wt,Ft.matrix),Ot&&(bt._m=Ft.matrix.clone()),Dt&&K.setColorAt(wt,new le(Dt[wt]))}),K.castShadow=ft,K.receiveShadow=!0,K.computeBoundingSphere(),lt&&Hn(K,lt,void 0,vt),M(K,Q,Ot),l(K),K}let pt=[];{let T=Q=>{let lt=t.rawExt(Q-12),vt=t.rawExt(Q),ft=t.rawExt(Q+12),Dt=Math.atan2(vt[1]-lt[1],vt[0]-lt[0]),Ot=Math.atan2(ft[1]-vt[1],ft[0]-vt[0])-Dt;for(;Ot>Math.PI;)Ot-=2*Math.PI;for(;Ot<-Math.PI;)Ot+=2*Math.PI;return Ot},et=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[Q,lt]of et){let vt=null;for(let ft=Q;ft<lt;ft+=4){let Dt=T(ft);Math.abs(Dt)>.45?(!vt||Math.abs(Dt)>Math.abs(vt.d))&&(vt={m:ft,d:Dt}):vt&&(pt.some(Vt=>Math.abs(Vt.m-vt.m)<50)||pt.push(vt),vt=null)}}}let B=[],Ht=[],J=[],$=[];for(let T of pt){let et=T.d>0;for(let Q=-2;Q<=2;Q++){let lt=t.sample(T.m+Q*5),vt=et?-1:1,ft=We/2+1.6,Dt=lt.x+lt.rx*ft*vt,Vt=lt.z+lt.rz*ft*vt;m(Dt,Vt,.3),(et?Ht:B).push({x:Dt,y:t.heightAt(Dt,Vt),z:Vt,ry:Math.atan2(-lt.tz,lt.tx)+(vt>0?Math.PI:0)})}for(let Q=-3;Q<=3;Q++){let lt=t.sample(T.m+Q*3.5),vt=et?1:-1,ft=We/2+.7;J.push({x:lt.x+lt.rx*ft*vt,y:t.heightAt(lt.x+lt.rx*ft*vt,lt.z+lt.rz*ft*vt),z:lt.z+lt.rz*ft*vt,ry:oe()*6});for(let Dt=0;Dt<2;Dt++){let Vt=t.sample(T.m+Q*3.5+Dt*1.75),Ot=We/2+.1;$.push({x:Vt.x+Vt.rx*Ot*vt,y:Vt.y-.05,z:Vt.z+Vt.rz*Ot*vt,ry:Math.atan2(Vt.tx,Vt.tz),red:(Q*2+Dt)%2===0})}}}W.corners=pt;{let T=an(256,96,(Ot,K,bt)=>{Ot.fillStyle="#2f6fe0",Ot.fillRect(0,0,K,bt),Ot.fillStyle="#ffffff";for(let wt=0;wt<4;wt++){let Wt=18+wt*60;Ot.beginPath(),Ot.moveTo(Wt,12),Ot.lineTo(Wt+26,12),Ot.lineTo(Wt+54,bt/2),Ot.lineTo(Wt+26,bt-12),Ot.lineTo(Wt,bt-12),Ot.lineTo(Wt+28,bt/2),Ot.closePath(),Ot.fill()}Ot.strokeStyle="#1b3f8f",Ot.lineWidth=8,Ot.strokeRect(0,0,K,bt)}),et=T.clone();et.repeat.x=-1,et.offset.x=1,et.wrapS=ki,et.needsUpdate=!0,o.push(T,et);let lt=(Ot=>{let K=new De(3.2,1.2,.12);K.rotateX(-.32),K.translate(0,.62,.22);let bt=new De(3.2,1.2,.12);return bt.rotateX(.32),bt.translate(0,.62,-.22),bt.rotateY(Math.PI),tn([K,bt])})();hc(lt),nt(lt,gt(16777215,{map:T}),Ht,{ol:2.5}),nt(lt,gt(16777215,{map:et}),B,{ol:2.5});let vt=an(16,64,(Ot,K,bt)=>{for(let wt=0;wt<4;wt++)Ot.fillStyle=wt%2?"#ffffff":"#ff6a2b",Ot.fillRect(0,wt*bt/4,K,bt/4)});o.push(vt);let ft=new ge(.06,.32,.9,12,1);ft.translate(0,.5,0);let Dt=new De(.8,.08,.8);Dt.translate(0,.04,0),nt(ft,gt(16777215,{map:vt}),J,{ol:2}),nt(Dt,gt(16738859),J,{ol:1.5});let Vt=new De(.5,.22,1.75);Vt.translate(0,.11,0),nt(Vt,gt(16777215),$.map(Ot=>Ot),{ol:1.5,colors:$.map(Ot=>Ot.red?15216959:16777215)})}let mt=new ye;l(mt);function q(T,et,Q,lt,vt,{postH:ft=1.6,face:Dt=0,scale:Vt=1}={}){let Ot=Vn(512,Math.round(512*lt/Q),vt,o),K=new ye,bt=we(new Ae(Q,lt,.25,2,.08),[gt(5978660),gt(5978660),gt(5978660),gt(5978660),gt(16777215,{map:Ot}),gt(16777215,{map:Ot})],{ol:3});bt.position.y=ft+lt/2,K.add(bt);let wt=new De(.25,ft+lt*.5,.25);for(let xe of[-1,1]){let Ie=we(wt,gt(9067062),{ol:2});Ie.position.set(xe*Q*.35,(ft+lt*.5)/2,-.1),K.add(Ie)}let Wt=We/2+2.2+Q*.15,ae=T.x+T.rx*Wt*et,he=T.z+T.rz*Wt*et;return K.position.set(ae,t.heightAt(ae,he)-.1,he),K.rotation.y=Math.atan2(-T.tx,-T.tz)+et*.5+Dt,K.scale.setScalar(Vt),mt.add(K),K}let Pt=1720,z=t.sample(Pt-10);W.hillSign=q(z,1,6,3.2,(T,et,Q)=>{T.fillStyle="#ffd23f",Ze(T,0,0,et,Q,40),T.fill(),T.lineWidth=16,T.strokeStyle="#1b1b3a",Ze(T,8,8,et-16,Q-16,34),T.stroke(),T.fillStyle="#3aa845",T.beginPath(),T.moveTo(40,Q-40),T.lineTo(150,70),T.lineTo(260,Q-40),T.closePath(),T.fill(),T.strokeStyle="#1b1b3a",T.lineWidth=8,T.stroke(),T.fillStyle="#fff",T.beginPath(),T.moveTo(118,118),T.lineTo(150,70),T.lineTo(182,118),T.closePath(),T.fill(),ln(T,"THE",380,Q*.3,72,"#ffffff","#1b1b3a",.2),ln(T,"HILL",370,Q*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),W.hillM=Pt;for(let T of[1,2,3,4]){let et=T*1e3,Q=t.sample(t.geoOf(et));q(Q,-1,1.6,1.3,(lt,vt,ft)=>{lt.fillStyle="#ffffff",Ze(lt,0,0,vt,ft,50),lt.fill(),lt.fillStyle="#ff3d8b",Ze(lt,20,20,vt-40,ft-40,36),lt.fill(),ln(lt,`${T}K`,vt/2,ft/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let R=t.sample(2475);W.lapBoard=q(R,1,4.4,2.6,(T,et,Q)=>{T.fillStyle="#1b1b3a",Ze(T,0,0,et,Q,40),T.fill(),T.fillStyle="#2e9bff",Ze(T,14,14,et-28,Q-28,30),T.fill(),ln(T,"LAP",et/2,Q*.28,90,"#ffffff","#1b1b3a",.18),ln(T,"2 OF 2",et/2,Q*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),W.lapM=2500;let at=[],Mt=[],It=[],Z=[];function rt(T,et,Q,lt=3.2,vt=12){let ft=null;for(let Dt=T;Dt<=et;Dt+=vt){let Vt=t.sample(Dt),Ot=We/2+1,K=Vt.x+Vt.rx*Ot*Q,bt=Vt.z+Vt.rz*Ot*Q,wt=t.heightAt(K,bt);Mt.push({x:K,y:wt,z:bt});let Wt=new H(K,wt+lt,bt);if(ft){let ae=[];for(let he=0;he<=12;he++){let xe=he/12,Ie=ft.clone().lerp(Wt,xe);Ie.y-=Math.sin(xe*Math.PI)*.6,ae.push(Ie)}It.push(ae);for(let he=1;he<12;he++){let xe=ae[he],Ie=ae[he+1].clone().sub(ae[he-1]);at.push({x:xe.x,y:xe.y,z:xe.z,ry:Math.atan2(-Ie.z,Ie.x)})}}ft=Wt}}function ot(T,et,Q,lt=We/2+2.2){for(let vt=T;vt<=et;vt+=2.4){let ft=t.sample(vt),Dt=ft.x+ft.rx*lt*Q,Vt=ft.z+ft.rz*lt*Q;Z.push({x:Dt,y:t.heightAt(Dt,Vt),z:Vt,ry:Math.atan2(ft.tx,ft.tz)})}}let xt=t.finishM;rt(xt-70,xt+10,1),rt(xt-70,xt+10,-1),rt(-6,50,1),rt(-6,50,-1),ot(xt-60,xt+14,1),ot(xt-60,xt+14,-1),ot(-4,40,1),ot(-4,40,-1);{let T=new Be;T.setAttribute("position",new be([-.3,0,0,.3,0,0,0,-.62,0],3)),T.setAttribute("normal",new be([0,0,1,0,0,1,0,0,1],3));let et=at.map((K,bt)=>[16727435,16765503,3054591,4054148,16747069,16777215][bt%6]);nt(T,gt(16777215,{side:Qe}),at,{colors:et,cast:!1});let Q=new ge(.07,.09,3.3,6);Q.translate(0,1.65,0),nt(Q,gt(16777215),Mt,{ol:1.5});let lt=new Be().setFromPoints(It.flatMap(K=>K.slice(0,-1).flatMap((bt,wt)=>[bt,K[wt+1]]))),vt=new Es(lt,new Hi({color:3355443}));l(vt),o.push(lt);let ft=[];for(let K=0;K<4;K++){let bt=new De(.16,1,.06);bt.translate(-.9+K*.6,.5,0),ft.push(bt)}let Dt=new De(2.4,.12,.05);Dt.translate(0,.65,.05),ft.push(Dt);let Vt=Dt.clone();Vt.translate(0,-.35,0),ft.push(Vt);let Ot=tn(ft);Ot.rotateY(Math.PI/2),nt(Ot,gt(16777215),Z,{ol:1.8})}let Tt=[],St=(T,et,Q,lt,vt,ft=1.35)=>Tt.push({m0:T,m1:et,side:Q,off:We/2+3,depth:lt,density:vt,spacing:ft});St(xt-58,xt+12,1,6,1),St(xt-58,xt+12,-1,6,1),St(-2,38,1,5,.9),St(-2,38,-1,5,.9),St(1940,2010,1,4,.7),St(1960,2010,-1,3,.6),St(Pt-10,Pt+40,-1,3,.55),St(2440,2490,-1,3,.7),St(Pt-70,Pt+10,1,3,.5),St(Pt-70,Pt-20,-1,3,.45),St(2080,2160,1,4,.75),St(2080,2160,-1,4,.75),St(800,860,1,3,.6),St(1250,1310,-1,3,.6),W.crowdZones=Tt;{let T=s.pois.filter(lt=>lt.kind==="bench"&&x(lt.pos[0],lt.pos[1])&&m(lt.pos[0],lt.pos[1],1)).map(lt=>({x:lt.pos[0],y:t.heightAt(lt.pos[0],lt.pos[1]),z:lt.pos[1],ry:oe()*6})),et=tn([new De(1.8,.12,.5).translate(0,.5,0),new De(1.8,.4,.1).translate(0,.8,-.22),new De(.1,.5,.45).translate(-.8,.25,0),new De(.1,.5,.45).translate(.8,.25,0)]);nt(et,gt(11892031),T,{ol:1.5});let Q=s.pois.filter(lt=>lt.kind==="cafe"&&x(lt.pos[0],lt.pos[1])&&m(lt.pos[0],lt.pos[1],4));for(let lt of Q){let vt=new ye;vt.add(we(new Ae(5,3,4,2,.2),gt(16774108),{ol:2.5})).position.y=1.5;let ft=an(128,16,(Ot,K,bt)=>{for(let wt=0;wt<8;wt++)Ot.fillStyle=wt%2?"#fff":"#ff4f6d",Ot.fillRect(wt*16,0,16,bt)});o.push(ft);let Dt=we(new De(5.6,.2,2),gt(16777215,{map:ft}),{ol:2});Dt.position.set(0,2.9,2.3),Dt.rotation.x=.35,vt.add(Dt);let Vt=we(new $e(4,1.6,4),gt(3054591),{ol:2.5});Vt.position.y=3.8,Vt.rotation.y=Math.PI/4,vt.add(Vt),vt.position.set(lt.pos[0],t.heightAt(lt.pos[0],lt.pos[1]),lt.pos[1]),vt.rotation.y=oe()*6,l(vt),v(lt.pos[0],lt.pos[1],5)}}for(let T of Tt)for(let et=T.m0-8;et<=T.m1+8;et+=4){let Q=t.sample(et),lt=T.off+T.depth/2;v(Q.x+Q.rx*lt*T.side,Q.z+Q.rz*lt*T.side,T.depth/2+3)}for(let T of[C,Lt])v(T.x,T.z,14);function Ut(T,et){let Q=null,lt=1e9;for(let vt of u){let ft=(vt[0]-T)**2+(vt[1]-et)**2;ft<lt&&(lt=ft,Q=vt)}return Q}W.nearestOnRibbon=Ut,W.ribbonSamples=u;let qt=new Map;for(let T of u){let et=`${Math.floor(T[0]/10)},${Math.floor(T[1]/10)}`,Q=qt.get(et);Q||qt.set(et,Q=[]),Q.push(T)}let se=(T,et,Q=1)=>{let lt=Math.floor(T/10),vt=Math.floor(et/10),ft=(We/2+Q)**2;for(let Dt=-1;Dt<=1;Dt++)for(let Vt=-1;Vt<=1;Vt++)for(let Ot of qt.get(`${lt+Dt},${vt+Vt}`)||[])if((Ot[0]-T)**2+(Ot[1]-et)**2<ft)return!0;return!1};W.reserve=v,W.clearOf=m;let $t=[],de=(T,et,Q,lt)=>!m(T,et,2.5*lt)||A(T,et,1.5)?!1:($t.push({x:T,z:et,kind:Q,s:lt}),v(T,et,2.2*lt),!0);for(let T of s.pois)T.kind==="tree"&&de(T.pos[0],T.pos[1],0,.85+oe()*.35);for(let T of s.features)if(T.kind==="wood"&&T.closed){let et=Ln(T.pts),Q=(et[2]-et[0])*(et[3]-et[1]);for(let lt=0;lt<Q/90;lt++){let vt=et[0]+oe()*(et[2]-et[0]),ft=et[1]+oe()*(et[3]-et[1]);Is(T.pts,vt,ft)&&de(vt,ft,1,.9+oe()*.5)}}{let T=Ln(w);for(let et=0;et<2600;et++){let Q=T[0]+oe()*(T[2]-T[0]),lt=T[1]+oe()*(T[3]-T[1]);!x(Q,lt)||-hr(w,Q,lt)>45&&oe()<.75||de(Q,lt,oe()<.7?1:2,.8+oe()*.5)}for(let et of s.features)if(et.kind==="road"&&!et.closed)for(let Q=1;Q<et.pts.length;Q++){let lt=et.pts[Q-1],vt=et.pts[Q],ft=Math.hypot(vt[0]-lt[0],vt[1]-lt[1]);for(let Dt=0;Dt<ft;Dt+=22){let Vt=Dt/ft,Ot=lt[0]+(vt[0]-lt[0])*Vt,K=lt[1]+(vt[1]-lt[1])*Vt,bt=-(vt[1]-lt[1])/ft,wt=(vt[0]-lt[0])/ft,Wt=8+oe()*2;oe()<.5&&de(Ot+bt*Wt,K+wt*Wt,0,.6+oe()*.2)}}}{let T=[3978315,5031250,3121226,6539594,8376650,3450963],et=new ge(.32,.5,4.2,7);et.translate(0,2.1,0);let Q=new sn(3.2,1);Q.scale(1,1.08,1),Q.translate(0,6.6,0);let lt=tn([new sn(3,1).translate(0,6.2,0),new sn(2.3,0).translate(1.9,5.3,.6),new sn(2.2,0).translate(-1.7,5.5,-.8),new sn(2,0).translate(.2,8.2,.3)].map(cf)),vt=tn([new $e(3,4.2,8).translate(0,5,0),new $e(2.4,3.6,8).translate(0,7.2,0),new $e(1.6,3,8).translate(0,9.2,0)].map(cf)),ft=$t.map(Ot=>({x:Ot.x,y:t.heightAt(Ot.x,Ot.z)-.2,z:Ot.z,ry:oe()*6.28,s:Ot.s}));nt(et,gt(9067062),ft,{ol:2,olRef:40,chunk:160,occluder:!0});let Dt=gt(16777215);Q.computeVertexNormals(),[Q,lt,vt].forEach((Ot,K)=>{let bt=ft.filter((wt,Wt)=>$t[Wt].kind===K);nt(Ot,Dt,bt,{ol:2.2,olRef:40,colors:bt.map(()=>T[Math.floor(oe()*T.length)]),chunk:160,occluder:!0})}),W.treeCount=$t.length}{let T=tn([0,1,2,3].map(ft=>{let Dt=new $e(.09,.55,3);return Dt.translate(0,.27,0),Dt.rotateZ((ft-1.5)*.25),Dt.rotateY(ft*1.7),Dt.translate((ft-1.5)*.08,0,ft%2*.06),Dt.index?Dt.toNonIndexed():Dt})),et=tn([new ge(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new sn(.13,0).translate(0,.38,0)]),Q=[],lt=[],vt=[];for(let ft=0;ft<9e3;ft++){let Dt=u[Math.floor(oe()*u.length)],Vt=oe()*6.283,Ot=We/2+1+oe()*22,K=Dt[0]+Math.cos(Vt)*Ot,bt=Dt[1]+Math.sin(Vt)*Ot;if(!x(K,bt)||A(K,bt,.5)||!m(K,bt,.2))continue;let wt=t.heightAt(K,bt)-.03;oe()<.62?Q.push({x:K,y:wt,z:bt,ry:oe()*6,s:.5+oe()*.6}):(lt.push({x:K,y:wt,z:bt,ry:oe()*6,s:.35+oe()*.25}),vt.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(oe()*6)]))}nt(T,gt(5226296),Q,{cast:!1,chunk:120}),nt(et,gt(16777215),lt,{cast:!1,colors:vt,chunk:120})}let ce=new bn({side:dn,depthWrite:!1,fog:!1,uniforms:{top:{value:new le(3116287)},mid:{value:new le(9425919)},bot:{value:new le(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Re=new ze(new Ee(5e3,32,16),ce);Re.renderOrder=-10,Re.frustumCulled=!1,i.add(Re),o.push(ce,Re.geometry);let st=tn([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([T,et,Q,lt])=>new sn(lt,2).translate(T,et,Q)));st.scale(1,.7,.8);let Yt=[c.x0+h/2,c.z0+d/2],Ct=[];for(let T=0;T<26;T++){let et=oe()*6.28,Q=300+oe()*1300;Ct.push({x:Yt[0]+Math.cos(et)*Q,y:170+oe()*120,z:Yt[1]+Math.sin(et)*Q,ry:oe()*6,s:.8+oe()*1.4})}let zt=nt(st,gt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Ct,{ol:1.5,olRef:300,cast:!1}),Kt=[];for(let T=0;T<18;T++){let et=T/18*6.28+oe()*.2,Q=1900+oe()*500;Kt.push({x:Yt[0]+Math.cos(et)*Q,y:-40,z:Yt[1]+Math.sin(et)*Q,sx:320+oe()*260,sy:80+oe()*90,sz:260+oe()*200,ry:oe()*6})}nt(new Ee(1,24,12),gt(7128954),Kt,{cast:!1,colors:Kt.map((T,et)=>[8047487,6273413,9425290][et%3])});function jt(T){it.uTime.value=T;for(let et of Et)et.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(T*1.7+et.ph)*.08,et.g.rotation.z=Math.sin(T*1.3+et.ph)*.06,et.g.rotation.y=et.a+Math.sin(T*.1+et.ph)*.4;zt&&(zt.position.x=Math.sin(T*.01)*40)}function _e(){a.traverse(T=>{T.geometry&&T.geometry.dispose()});for(let T of o)T.dispose?.();i.remove(a),i.remove(Re)}return{group:a,anchors:W,update:jt,dispose:_e,inPark:x,clearOf:m,reserve:v,blocked:A,groundTex:U,onPath:se,registerInstanced:M,clearArea:S,redrawGround:D,setOcclusionCorridor:L}}function cf(i){let t=i.index?i.toNonIndexed():i;return t.computeVertexNormals(),t}function Ho(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function Ze(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var ff=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],uf=[4054148,16727435,16765503,3054591,16777215];function px(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new kt(Math.max(.001,o),r))}i.unshift(new kt(.001,0));let e=new rr(i,12);return e.computeVertexNormals(),e}function uc(i,t){let e=wn(99),n=t.length,s=new ye;if(i.add(s),!n)return{update(){},hideWhere(){},setMask(){},dispose(){i.remove(s)},group:s};let r=px(),o=new Ee(.15,8,5);o.scale(.8,1.15,.5);let a=new Ee(.075,6,4);a.scale(.85,1.2,.5);let l=new Ee(.13,6,5),c=new $e(.14,.36,6);c.translate(0,.18,0);let h=new $e(.26,.55,8);h.translate(0,.27,0);let d=new Ee(.2,7,5),p=(it,N,Et,Lt)=>{let C=new nn(it,N,Et);return C.castShadow=!0,C.receiveShadow=!0,C.userData.ol=Lt,s.add(C),C},f=p(r,gt(16777215),n,2.6),g=p(o,new En({color:16777215}),n*2,0),v=p(a,new En({color:1709088}),n*2,0),m=p(l,gt(16777215),n*2,2);g.castShadow=v.castShadow=!1;let u=[p(c,gt(16777215),n,2),p(h,gt(16777215),n,2),p(d,gt(16777215),n,2)],w=[0,0,0],x=new le,y=t.map((it,N)=>{let Et=it.colour??ff[Math.floor(e()*ff.length)];f.setColorAt(N,x.set(Et)),m.setColorAt(N*2,x),m.setColorAt(N*2+1,x);let Lt=e()<.3?-1:Math.floor(e()*3),C=-1;return Lt>=0&&(C=w[Lt]++,u[Lt].setColorAt(C,x.set(uf[Math.floor(e()*uf.length)]))),{...it,s:it.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:Lt,ti:C,wave:e()<.5,ex:.3}});u.forEach((it,N)=>{it.count=w[N]});for(let it of[f,m,...u])it.instanceColor&&(it.instanceColor.needsUpdate=!0);let k=new Le().makeScale(0,0,0),A=null,I=new Le,P=new Cn,M=new On,_=new H,b=new H,L=new Le,E=new Le;function S(it,N,Et){let Lt=y[it];if(Lt.hidden||A&&A(Lt.x,Lt.z)){for(let tt of[f])tt.setMatrixAt(it,k);for(let tt=0;tt<2;tt++)g.setMatrixAt(it*2+tt,k),v.setMatrixAt(it*2+tt,k),m.setMatrixAt(it*2+tt,k);Lt.tk>=0&&u[Lt.tk].setMatrixAt(Lt.ti,k);return}let C=Lt.ex,W=N*Lt.sp*(.5+C*.6)+Lt.ph,j=Math.max(0,Math.sin(W))*.32*C,X=1-Math.cos(W*2)*.05*C;M.set(0,Lt.yaw+Math.sin(N*.8+Lt.ph)*.25*(1-C),Math.sin(W*.5)*.08*C),P.setFromEuler(M),L.compose(_.set(Lt.x,Lt.y+j,Lt.z),P,b.set(Lt.s/Math.sqrt(X),Lt.s*X,Lt.s/Math.sqrt(X))),f.setMatrixAt(it,L);for(let tt=0;tt<2;tt++){let ut=tt?.19:-.19;E.makeTranslation(ut,.86,.5),I.multiplyMatrices(L,E),g.setMatrixAt(it*2+tt,I),E.makeTranslation(ut*1.02,.84+(C>.6?.03:0),.565),I.multiplyMatrices(L,E),v.setMatrixAt(it*2+tt,I);let Rt=C>.55?1:.15+.2*Math.max(0,Math.sin(W)),Ft=Lt.wave?Math.sin(W*1.5+tt*3)*.25*C:0,nt=(tt?1:-1)*(.62+Rt*.05+Ft*.3),pt=.45+Rt*.85+Ft;E.makeTranslation(nt,pt,.12),I.multiplyMatrices(L,E),m.setMatrixAt(it*2+tt,I)}Lt.tk>=0&&(E.makeTranslation(0,1.22,0),Lt.tk===0&&E.multiply(new Le().makeRotationZ(Math.sin(W)*.3)),I.multiplyMatrices(L,E),u[Lt.tk].setMatrixAt(Lt.ti,I))}for(let it=0;it<n;it++)S(it,0,!0);let D=()=>{for(let it of[f,g,v,m,...u])it.instanceMatrix.needsUpdate=!0};D();for(let it of[f,g,v,m,...u]){if(!it.count){it.visible=!1;continue}it.computeBoundingSphere(),it.boundingSphere.radius+=2,it.userData.ol&&Hn(it,it.userData.ol,void 0,18)}function U(it,N,Et=[],Lt=null){let C=!1;for(let W=0;W<n;W++){let j=y[W];if(N&&(j.x-N.x)**2+(j.z-N.z)**2>260*260)continue;let X=.25;if(Lt!=null)X=Lt;else for(let tt of Et){let ut=(tt.x-j.x)**2+(tt.z-j.z)**2;ut<45*45&&(X=Math.max(X,1-Math.sqrt(ut)/70))}j.ex+=(X-j.ex)*.05,S(W,it),C=!0}C&&D()}function O(){for(let it of[r,o,a,l,c,h,d])it.dispose();for(let it of[f,g,v,m,...u])it.dispose();i.remove(s)}function V(it){let N=!1;for(let Et=0;Et<n;Et++)!y[Et].hidden&&it(y[Et].x,y[Et].z)&&(y[Et].hidden=!0,S(Et,0),N=!0);N&&D()}function dt(it){if(it!==A){A=it;for(let N=0;N<n;N++)S(N,0);D()}}return{update:U,dispose:O,hideWhere:V,setMask:dt,group:s,members:y}}function df(i,t,e=5,n=null,s=null){let r=wn(e),o=[];for(let[a,l]of t.entries())for(let c=l.m0;c<=l.m1;c+=l.spacing??1.35){let h=i.sample(c),d=Math.max(1,Math.round(l.depth/1.25));for(let p=0;p<d;p++){if(r()>l.density)continue;let f=l.off+p*1.25+r()*.35,g=(r()-.5)*.6,v=h.x+h.rx*f*l.side+h.tx*g,m=h.z+h.rz*f*l.side+h.tz*g;n&&n(v,m,1.4)||s&&s(v,m,.6)||o.push({zone:a,x:v,y:i.heightAt(v,m),z:m,yaw:Math.atan2(-h.rx*l.side,-h.rz*l.side)+(r()-.5)*.5})}}return o}var pf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},mf=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],mx=3.2,pr=new Map,ie=(i,t)=>(pr.has(i)||pr.set(i,t()),pr.get(i));function gf(){for(let i of pr.values())i.dispose();pr.clear()}function gx(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function xx(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,c=t*.058,h="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let m of[-1,1])i.beginPath(),i.ellipse(o+m*c*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let d=(m,u)=>{if(u==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=h,i.lineWidth=5,i.beginPath();let A=t*.03;i.moveTo(m,a+A*1.1),i.bezierCurveTo(m-A*2.2,a-A*.2,m-A*.9,a-A*1.9,m,a-A*.6),i.bezierCurveTo(m+A*.9,a-A*1.9,m+A*2.2,a-A*.2,m,a+A*1.1),i.fill(),i.stroke();return}if(u==="closed"||u==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),u==="happy"?i.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(m-t*.025,a),i.lineTo(m+t*.025,a)),i.stroke();return}if(u==="x"){i.strokeStyle=h,i.lineWidth=8,i.lineCap="round";let A=t*.02;i.beginPath(),i.moveTo(m-A,a-A),i.lineTo(m+A,a+A),i.moveTo(m+A,a-A),i.lineTo(m-A,a+A),i.stroke();return}if(u==="wink"&&m>o&&(u="happy"),u==="wink"&&(u="open"),u==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),i.arc(m,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),i.stroke();return}let w=u==="wide"?1.3:1,x=t*.03*w,y=e*.085*w;i.fillStyle="#fff",i.strokeStyle=h,i.lineWidth=6,i.beginPath(),i.ellipse(m,a,x,y,0,0,7),i.fill(),i.stroke();let k=u==="wide"?.38:.55;i.fillStyle=h,i.beginPath(),i.ellipse(m+x*.15,a+y*.12,x*k,y*k*1.1,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(m+x*.35,a-y*.2,x*.22,0,7),i.fill(),u==="half"&&(i.fillStyle=n,i.fillRect(m-x-4,a-y-4,x*2+8,y*1.05),i.strokeStyle=h,i.lineWidth=7,i.beginPath(),i.moveTo(m-x-2,a-y*.1),i.lineTo(m+x+2,a-y*.1),i.stroke())},p={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(p="happy"),r==="love"&&(p="heart"),r==="dead"&&(p="x"),r==="effort"&&s!=="goofy"&&(p="open");for(let m of[-1,1])d(o+m*c,p);i.strokeStyle=h,i.lineWidth=10,i.lineCap="round";let f=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let m of[-1,1]){let u=o+m*c,w=a-e*.13,x=t*.026,y=u-m*x,k=u+m*x;i.beginPath(),i.moveTo(k,w-f*18),i.lineTo(y,w+f*18),i.stroke()}i.lineWidth=8,i.strokeStyle=h,i.fillStyle="#7a1e2e";let g=o,v=r||"normal";if(v==="happy"||v==="normal"&&s==="grin")i.beginPath(),i.moveTo(g-t*.04,l-e*.02),i.quadraticCurveTo(g,l+e*.12,g+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(v==="effort"){i.fillStyle="#fff",i.beginPath(),Ze(i,g-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.035,l),i.lineTo(g+t*.035,l);for(let m=-2;m<=2;m++)i.moveTo(g+m*t*.012,l-e*.03),i.lineTo(g+m*t*.012,l+e*.035);i.stroke()}else if(v==="sad"||v==="dead")i.beginPath(),i.moveTo(g-t*.03,l+e*.04),i.quadraticCurveTo(g,l-e*.04,g+t*.03,l+e*.04),i.stroke(),v==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(v==="love"||v==="pant")i.beginPath(),i.ellipse(g,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="gritted"){i.fillStyle="#fff",i.beginPath(),Ze(i,g-t*.04,l-e*.03,t*.08,e*.06,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.04,l),i.lineTo(g+t*.04,l);for(let m=-2;m<=2;m++)i.moveTo(g+m*t*.014,l-e*.03),i.lineTo(g+m*t*.014,l+e*.03);i.stroke()}else if(s==="tongue-out")i.beginPath(),i.moveTo(g-t*.035,l),i.quadraticCurveTo(g,l+e*.05,g+t*.035,l),i.stroke(),i.fillStyle="#ff6f8a",i.beginPath(),i.ellipse(g+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),i.fill(),i.stroke(),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3,i.beginPath(),i.moveTo(g+t*.008,l+e*.03),i.lineTo(g+t*.01,l+e*.08),i.stroke();else if(s==="wide-eyed")i.beginPath(),i.ellipse(g,l+e*.02,t*.016,e*.04,0,0,7),i.fill(),i.stroke();else if(s==="cheeky")i.beginPath(),i.moveTo(g-t*.04,l-e*.01),i.quadraticCurveTo(g,l+e*.08,g+t*.045,l-e*.035),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.quadraticCurveTo(g+t*.01,l+e*.05,g+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(g-t*.03,l+e*.02);for(let m=0;m<=6;m++)i.lineTo(g-t*.03+m*t*.01,l+e*.02+(m%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(g-t*.04,l),i.quadraticCurveTo(g,l+e*.09,g+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.lineTo(g+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(g-t*.035,l-e*.01),i.quadraticCurveTo(g,l+e*.07,g+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function yx(i,t){return an(256,200,(e,n,s)=>{e.fillStyle="#ffffff",Ze(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${fc}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),ln(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function vx(i){return an(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")ln(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function xf(i,t={}){let e=i.look||{},n=pf[e.build]||pf.compact,s=gx(i.id+(i.nickname||"")),r=wn(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",c=mf[s%mf.length],h=[],d=gt(o),p=gt(a),f=gt(l),g=gt(c),v=new le(a).getHSL({}).l>.85?"#ffffff":a,m=gt(v),u=gt("#ffffff"),w=gt("#22202c"),x=(Z,rt,ot=mx)=>we(Z,rt,{ol:ot,olRef:9}),y=new ye;y.name=`runner-${i.id}`;let k=new ye;y.add(k);let A=new ye;k.add(A);let I=n.leg/2,P=n.leg+n.shoe[1]*.75;A.position.y=P;let M=x(ie(`shorts${e.build}`,()=>new Ae(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),p);M.position.y=.02,A.add(M);let _=new ye;_.position.y=.12,A.add(_);let b=x(ie(`torso${e.build}`,()=>new Ae(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),d);b.position.y=n.torso[1]/2,_.add(b);for(let Z of[-1,1]){let rt=we(ie(`stripe${e.build}`,()=>new De(.06,n.torso[1]*.8,n.torso[2]*.7)),gt(a),{cast:!1});rt.position.set(Z*n.torso[0]*.5,n.torso[1]*.5,0),_.add(rt)}let L=yx(i.lane??0,o);h.push(L);let E=new ze(ie("bib",()=>new pn(1,.78)),gt(16777215,{map:L})),S=Math.min(.42,n.torso[0]*.6);E.scale.setScalar(S),E.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),_.add(E);let D=new ye;D.position.y=n.torso[1]+.02,_.add(D);let U=new ye;D.add(U);let O=document.createElement("canvas");O.width=1024,O.height=512;let V=new ws(O);V.colorSpace=fn,V.anisotropy=4,h.push(V);let dt=null,it=Z=>{Z!==dt&&(dt=Z,xx(O.getContext("2d"),1024,512,l,e.face||"grin",Z),V.needsUpdate=!0)};it("normal");let N=n.head,Et=x(ie(`head${N}`,()=>new Ee(N,32,20).scale(1,.98,.96)),gt(16777215,{map:V}));Et.position.y=N*.92,U.add(Et);for(let Z of[-1,1]){let rt=x(ie(`ear${N}`,()=>new Ee(N*.2,10,8).scale(.6,1,.8)),f,2.5);rt.position.set(Z*N*.97,N*.9,0),U.add(rt)}let Lt=x(ie(`nose${N}`,()=>new Ee(N*.14,10,8)),f,2);Lt.position.set(0,N*.84,N*.97),U.add(Lt),pt(e.hair,e.hat),B(e.hat);let C=[];for(let Z of[-1,1]){let rt=new ye;rt.position.set(Z*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),_.add(rt);let ot=x(ie(`sleeve${e.build}`,()=>new Ee(n.armR*1.65,14,10)),d);rt.add(ot);let xt=x(ie(`uarm${e.build}`,()=>new kn(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),f);rt.add(xt);let Tt=new ye;Tt.position.y=-n.arm/2+n.armR*.4,rt.add(Tt);let St=x(ie(`farm${e.build}`,()=>new kn(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),f);Tt.add(St);let Ut=x(ie(`hand${e.build}`,()=>new Ee(n.hand,14,10).scale(1,1.1,.9)),f);Ut.position.y=-n.arm/2-n.hand*.4,Tt.add(Ut),C.push({sh:rt,el:Tt,hand:Ut})}let W=[];for(let Z of[-1,1]){let rt=new ye;rt.position.set(Z*n.torso[0]*.24,0,0),A.add(rt);let ot=x(ie(`thigh${e.build}`,()=>new kn(n.legR*1.15,I-n.legR,4,10).translate(0,-I/2,0)),f);rt.add(ot);let xt=x(ie(`sleg${e.build}`,()=>new ge(n.legR*1.6,n.legR*1.5,I*.5,12).translate(0,-I*.2,0)),p);rt.add(xt);let Tt=new ye;Tt.position.y=-I,rt.add(Tt);let St=x(ie(`shin${e.build}`,()=>new kn(n.legR,I-n.legR,4,10).translate(0,-I/2,0)),f);Tt.add(St);let Ut=x(ie(`sock${e.build}`,()=>new ge(n.legR*1.12,n.legR*1.12,I*.25,10).translate(0,-I*.86,0)),gt(16777215),2.5);Tt.add(Ut);let qt=new ye;qt.position.y=-I,Tt.add(qt);let se=x(ie(`shoe${e.build}`,()=>new Ae(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),m);qt.add(se);let $t=we(ie(`sole${e.build}`,()=>new Ae(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),u,{ol:2.5,olRef:9});qt.add($t);let de=we(ie(`swoosh${e.build}`,()=>new De(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),gt(o),{cast:!1});qt.add(de),W.push({hp:rt,kn:Tt,an:qt})}Ht(e.accessory);let j=new ye;j.visible=!1;{let Z=we(ie("flossStick",()=>new ge(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),gt("#e8d0a0"),{cast:!1}),rt=we(ie("flossFluff",()=>{let ot=wn(5);return tn(Array.from({length:7},()=>new sn(.16+ot()*.06,1).translate((ot()-.5)*.22,(ot()-.5)*.22,.72+(ot()-.5)*.2)))}),gt("#ff9bd2"),{ol:2.5,olRef:9});j.add(Z,rt),j.userData.fluff=rt,j.position.y=-n.arm/2-n.hand*.4,C[0].el.add(j)}function X(Z,rt){Z==="floss"&&(j.visible=rt>0,rt>0&&j.userData.fluff.scale.setScalar(Math.max(.15,rt)))}let tt={},ut=new vo(new Qs({transparent:!0,depthTest:!1}));ut.scale.setScalar(.9),ut.visible=!1,ut.renderOrder=20,y.add(ut);let Rt=Z=>{if(!Z){ut.visible=!1;return}tt[Z]||(tt[Z]=vx(Z),h.push(tt[Z])),ut.material.map=tt[Z],ut.material.needsUpdate=!0,ut.visible=!0},Ft=P+.12+n.torso[1]+.02+N*2;ut.position.y=Ft+.45;let nt=new Set([b,M,Et,...C.flatMap(Z=>[Z.hand]),...W.map(Z=>Z.an.children[0])]);for(let Z of C)Z.sh.children.forEach(rt=>rt.isMesh&&nt.add(rt));for(let Z of W)Z.hp.children.forEach(rt=>rt.isMesh&&nt.add(rt));y.traverse(Z=>{Z.isMesh&&!Z.userData.isOutline&&(Z.castShadow=nt.has(Z))});function pt(Z,rt){let ot=Z||"short";if(ot==="bald")return;let xt=(Tt=1.07,St=.48)=>{let Ut=x(ie(`hcap${N}${Tt}${St}`,()=>new Ee(N*Tt,24,14,0,Math.PI*2,0,Math.PI*St)),g);return Ut.position.y=N*.92,Ut.rotation.x=-.32,U.add(Ut),Ut};if(ot==="curly"||ot==="afro"){let Tt=ie(`curly${N}`,()=>{let Ut=wn(7),qt=[];for(let se=0;se<26;se++){let $t=Ut()*Math.PI*.55,de=Ut()*Math.PI*2,ce=new H(Math.sin($t)*Math.cos(de),Math.cos($t),Math.sin($t)*Math.sin(de)).multiplyScalar(N*1.02);ce.z>N*.55&&ce.y<N*.75||qt.push(new sn(N*.33,1).translate(ce.x,ce.y,ce.z-N*.08))}return tn(qt)}),St=x(Tt,g);St.position.y=N*.98,ot==="afro"&&(St.scale.setScalar(1.28),St.position.y=N*1.05),U.add(St);return}if(rt==="beanie"||rt==="bucket"||rt==="bobble"){if(xt(1.05,.5),ot==="mullet"||ot==="long"||ot==="ponytail"){let Tt=x(ie(`mul${N}`,()=>new Ae(N*1.5,N*.9,N*.4,3,N*.15)),g);Tt.position.set(0,N*.35,-N*.78),U.add(Tt)}return}if(ot==="buzz"){let Tt=x(ie(`buzz${N}`,()=>new Ee(N*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),g,2);Tt.position.y=N*.92,Tt.rotation.x=-.32,U.add(Tt);return}if(xt(),ot==="quiff"||ot==="swept"){let Tt=x(ie(`quiff${N}${ot}`,()=>new Ee(N*.55,16,10).scale(ot==="quiff"?1.3:1.7,ot==="quiff"?.75:.45,1)),g);Tt.position.set(ot==="swept"?N*.25:0,N*1.82,N*.38),Tt.rotation.set(-.5,0,ot==="swept"?-.35:0),U.add(Tt)}if(ot==="mullet"){let Tt=x(ie(`mul${N}`,()=>new Ae(N*1.5,N*.9,N*.4,3,N*.15)),g);Tt.position.set(0,N*.35,-N*.78),U.add(Tt)}if(ot==="long"){let Tt=x(ie(`hlong${N}`,()=>new Ae(N*1.8,N*1.6,N*.5,3,N*.2)),g);Tt.position.set(0,N*.4,-N*.62),U.add(Tt)}if(ot==="ponytail"){let Tt=new ye;Tt.position.set(0,N*1.35,-N*.85),U.add(Tt);for(let St=0;St<3;St++){let Ut=x(ie(`pt${N}${St}`,()=>new Ee(N*(.32-St*.05),12,8)),g);Ut.position.set(0,-St*N*.32,-St*N*.18),Tt.add(Ut)}U.userData.pony=Tt}if(ot==="bun"){let Tt=x(ie(`bun${N}`,()=>new Ee(N*.38,14,10)),g);Tt.position.set(0,N*2,-N*.2),U.add(Tt)}if(ot==="mohawk"||ot==="spiky"){let Tt=ot==="mohawk"?5:9;for(let St=0;St<Tt;St++){let Ut=x(ie(`spk${N}`,()=>new $e(N*.2,N*.7,8)),g),qt=ot==="mohawk"?0:St/Tt*Math.PI*2,se=ot==="mohawk"?-.9+St/(Tt-1)*1.8:.6;Ut.position.set(Math.sin(qt)*Math.sin(se)*N,N*.92+Math.cos(se)*N*1.05,(ot==="mohawk"?Math.sin(se):Math.cos(qt)*Math.sin(se))*N),Ut.lookAt(Ut.position.clone().multiplyScalar(3)),Ut.rotateX(Math.PI/2),U.add(Ut)}}}function B(Z){if(!Z)return;let rt=gt(a==="#ffffff"||a==="#f8f8f8"?o:a),ot=gt(o);if(Z==="backwards-cap"){let xt=x(ie(`capd${N}`,()=>new Ee(N*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),rt);xt.position.y=N*.98,xt.rotation.x=-.18,U.add(xt);let Tt=x(ie(`brim${N}`,()=>new ge(N*.75,N*.75,N*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ot);Tt.position.set(0,N*1.42,-N*.62),Tt.rotation.set(-.12,Math.PI,0),U.add(Tt)}else if(Z==="bobble"){let xt=x(ie(`bean${N}`,()=>new Ee(N*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ot);xt.position.y=N*.96,xt.rotation.x=-.12,U.add(xt);let Tt=x(ie(`brim2${N}`,()=>new Ke(N*1.05,N*.17,8,24)),rt);Tt.rotation.x=Math.PI/2-.12,Tt.position.y=N*1.12,U.add(Tt);let St=x(ie(`bigbob${N}`,()=>new sn(N*.48,1)),rt);St.position.y=N*2.45,U.add(St),U.userData.bobble=St}else if(Z==="cap"||Z==="visor"){if(Z==="cap"){let Tt=x(ie(`capd${N}`,()=>new Ee(N*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),rt);Tt.position.y=N*.98,Tt.rotation.x=-.18,U.add(Tt)}else{let Tt=x(ie(`vband${N}`,()=>new Ke(N*1,N*.12,8,24)),rt);Tt.rotation.x=Math.PI/2-.25,Tt.position.y=N*1.35,U.add(Tt)}let xt=x(ie(`brim${N}`,()=>new ge(N*.75,N*.75,N*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ot);xt.position.set(0,N*1.42,N*.62),xt.rotation.x=.12,U.add(xt)}else if(Z==="beanie"){let xt=x(ie(`bean${N}`,()=>new Ee(N*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),rt);xt.position.y=N*.96,xt.rotation.x=-.12,U.add(xt);let Tt=x(ie(`brim2${N}`,()=>new Ke(N*1.05,N*.17,8,24)),ot);Tt.rotation.x=Math.PI/2-.12,Tt.position.y=N*1.12,U.add(Tt);let St=x(ie(`bob${N}`,()=>new sn(N*.3,1)),ot);St.position.y=N*2.25,U.add(St)}else if(Z==="headband"||Z==="sweatband"){let xt=x(ie(`hb${N}`,()=>new Ke(N*1,N*.13,8,28)),rt);xt.rotation.x=Math.PI/2-.2,xt.position.y=N*1.3,U.add(xt);let Tt=x(ie(`hbt${N}`,()=>new Ae(N*.2,N*.5,N*.08,2,.02)),rt);Tt.position.set(.12,N*1.1,-N*1.05),Tt.rotation.z=.5,U.add(Tt),U.userData.tail=Tt}else if(Z==="bucket"){let xt=x(ie(`buck${N}`,()=>new ge(N*.8,N*1.02,N*.7,20)),rt);xt.position.y=N*1.75,U.add(xt);let Tt=x(ie(`buckb${N}`,()=>new ge(N*1.5,N*1.5,N*.06,24)),ot);Tt.position.y=N*1.42,Tt.rotation.x=.1,U.add(Tt)}else if(Z==="crown"||Z==="tiara"){let xt=x(ie(`crown${N}`,()=>new ge(N*.7,N*.62,N*.5,8,1,!0)),gt("#ffd23f",{side:Qe}));xt.position.y=N*2,U.add(xt)}else if(Z==="wizard"||Z==="party"){let xt=x(ie(`cone${N}`,()=>new $e(N*.8,N*1.8,16)),rt);xt.position.y=N*2.3,xt.rotation.z=.15,U.add(xt);let Tt=x(ie(`bob${N}`,()=>new sn(N*.3,1)),ot);Tt.position.set(-N*.12,N*3.15,0),U.add(Tt)}else if(Z==="helmet"||Z==="bike_helmet"){let xt=x(ie(`helm${N}`,()=>new Ee(N*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),rt);xt.position.y=N*1,U.add(xt)}else if(Z==="santa"){let xt=x(ie(`santa${N}`,()=>new $e(N*.95,N*1.6,16)),gt("#e8313f"));xt.position.y=N*2.2,xt.rotation.z=.5,U.add(xt);let Tt=x(ie(`santar${N}`,()=>new Ke(N*.95,N*.2,8,24)),gt("#ffffff"));Tt.rotation.x=Math.PI/2,Tt.position.y=N*1.45,U.add(Tt)}else{let xt=x(ie(`cone${N}`,()=>new $e(N*.8,N*1.8,16)),rt);xt.position.y=N*2.3,U.add(xt)}}function Ht(Z){if(Z){if(Z==="sunglasses"||Z==="glasses"){let rt=Z==="sunglasses";for(let xt of[-1,1]){let Tt=x(ie(`lens${N}${rt}`,()=>new Ae(N*.5,N*.32,N*.08,2,N*.06)),rt?gt("#141420"):gt("#cfefff"),2);Tt.position.set(xt*N*.3,N*1.02,N*.98),Tt.rotation.y=xt*.28,U.add(Tt)}let ot=we(ie(`bridge${N}`,()=>new De(N*.3,N*.06,N*.06)),gt("#141420"),{cast:!1});ot.position.set(0,N*1.06,N*1.04),U.add(ot)}else if(Z==="medal"){let rt=x(ie("ribbon",()=>new Ke(.2,.03,6,20,Math.PI)),gt("#2e9bff"),2);rt.rotation.z=Math.PI,rt.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),rt.rotation.x=-.3,_.add(rt);let ot=x(ie("medal",()=>new ge(.11,.11,.04,16).rotateX(Math.PI/2)),gt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);ot.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),_.add(ot),E.position.y-=.1,E.position.x=.12,E.scale.multiplyScalar(.8)}else if(Z==="headphones"){let rt=x(ie(`hp${N}`,()=>new Ke(N*1.08,N*.07,6,24,Math.PI)),gt("#22202c"),2);rt.position.y=N*.95,U.add(rt);for(let ot of[-1,1]){let xt=x(ie(`hpc${N}`,()=>new ge(N*.3,N*.3,N*.2,14).rotateZ(Math.PI/2)),gt(o),2.5);xt.position.set(ot*N*1.02,N*.92,0),U.add(xt)}}else if(Z==="sweatband"||Z==="wristbands"||Z==="watch")for(let rt of C){let ot=x(ie(`wb${e.build}`,()=>new ge(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),gt(Z==="watch"?"#22202c":a),2);if(rt.el.add(ot),Z==="watch")break}else if(Z==="scarf"){let rt=x(ie("scarf",()=>new Ke(.22,.08,8,18)),gt(a));rt.rotation.x=Math.PI/2,rt.position.y=.02,D.add(rt);let ot=x(ie("scarft",()=>new Ae(.14,.5,.06,2,.03)),gt(a));ot.position.set(.1,-.15,-.25),ot.rotation.x=.5,D.add(ot),U.userData.tail2=ot}else if(Z==="cape"){let rt=x(ie(`cape${e.build}`,()=>new pn(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),gt(a,{side:Qe}),2),ot=new ye;ot.position.set(0,n.torso[1],-n.torso[2]/2-.03),ot.add(rt),_.add(ot),U.userData.cape=ot}else if(Z==="backpack"){let rt=x(ie(`bp${e.build}`,()=>new Ae(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),gt(a));rt.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),_.add(rt)}else if(Z==="moustache"||Z==="mustache"){let rt=x(ie(`mou${N}`,()=>new kn(N*.09,N*.5,4,8).rotateZ(Math.PI/2)),gt("#3a2616"),2);rt.position.set(0,N*.7,N*.98),U.add(rt)}else if(Z==="beard"){let rt=x(ie(`beard${N}`,()=>new Ee(N*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),g,2.5);rt.position.set(0,N*.78,N*.32),U.add(rt);let ot=x(ie(`mou${N}`,()=>new kn(N*.09,N*.5,4,8).rotateZ(Math.PI/2)),g,2);ot.position.set(0,N*.7,N*.98),U.add(ot)}else if(Z==="bumbag"){let rt=x(ie(`bum${e.build}`,()=>new Ae(n.torso[0]*.5,.2,.18,2,.07)),gt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));rt.position.set(n.torso[0]*.12,.08,n.torso[2]/2+.08),A.add(rt);let ot=we(ie(`strap${e.build}`,()=>new Ke(n.torso[0]*.48,.025,6,24).scale(1,n.torso[2]/n.torso[0]*1.05,1).rotateX(Math.PI/2)),gt("#22202c"),{cast:!1});ot.position.y=.1,A.add(ot)}else if(Z==="bib"){let rt=new ze(ie("bib",()=>new pn(1,.78)),E.material);rt.scale.copy(E.scale),rt.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.012),rt.rotation.y=Math.PI,_.add(rt),E.scale.multiplyScalar(1.3)}else if(Z==="bowtie")for(let rt of[-1,1]){let ot=x(ie("bow",()=>new $e(.08,.16,4).rotateZ(Math.PI/2)),gt(a),2);ot.position.set(rt*.08,n.torso[1]-.06,n.torso[2]/2+.03),ot.rotation.z=rt>0?Math.PI:0,_.add(ot)}else if(Z==="tutu"){let rt=x(ie(`tutu${e.build}`,()=>new ge(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),gt("#ff9bd2",{side:Qe}),2);rt.position.y=-.05,A.add(rt)}}}let J={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},$=J.j,mt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let Z of mt)$[Z]=0;let q={},Pt="idle",z=null,R=0;function at(Z,rt=null){(Z!==Pt||rt!==z)&&(Pt=Z,z=rt,R=0)}function Mt(Z,rt={}){J.t+=Z,R+=Z;let ot=J.t;for(let Ut of mt)q[Ut]=0;let xt="normal",Tt=10;if(Pt==="run"||Pt==="jog"||Pt==="trudge"||Pt==="distracted"){let Ut=Math.max(.5,rt.speed??3.5),qt=Math.max(.2,rt.rate??1),se=Pt==="trudge",$t=se?1.7:(2.55+.14*(Ut-3.5))*Math.pow(qt,.3)*(Pt==="jog"?.8:1);J.phase+=Z*Math.PI*$t;let de=J.phase,ce=Math.sin(de),Re=Math.cos(de),st=se?.4:Math.max(.45,Math.min(1,.62+.13*(Ut-3.5)));q.hipLx=-st*ce,q.hipRx=st*ce,q.kneeL=.2+(se?.5:1.35)*Math.max(0,Re)*(.7+st*.3),q.kneeR=.2+(se?.5:1.35)*Math.max(0,-Re)*(.7+st*.3),q.ankL=-.2*ce,q.ankR=.2*ce;let Yt=se?.3:.75*st+.15;q.shLx=Yt*ce,q.shRx=-Yt*ce,q.shLz=-.18,q.shRz=.18,q.elL=se?-.5:-1.5,q.elR=se?-.5:-1.5,q.twist=.16*ce,q.roll=.05*ce,q.bob=(se?.03:.11)*(Math.abs(Re)-.4),q.lean=(se?.05:.16)+Math.max(-.25,Math.min(.45,(rt.slope??0)*1.6)),q.headX=-q.lean*.6,q.headY=-.08*ce,Tt=18,xt=rt.effort>.6?"effort":rt.effort>.3?"pant":"normal",se&&(q.headX=.35,q.lean=.25,xt="sad"),Pt==="distracted"&&(q.headY=rt.lookYaw??.9,q.headX=-.15,q.twist+=(rt.lookYaw??.9)*.3,xt="love")}else if(Pt==="ready")q.hipLx=-.5,q.hipRx=.35,q.kneeL=.6,q.kneeR=.5,q.lean=.35,q.bob=-.12,q.shLx=.5,q.shRx=-.6,q.elL=-1.3,q.elR=-1.3,q.headX=-.25,q.bob+=Math.sin(ot*3)*.01,xt="effort";else if(Pt==="wave")q.shRz=2.7,q.elR=.2*Math.sin(ot*9)-.25,q.shRx=Math.sin(ot*9)*.25,q.shLz=-.3,q.elL=-.4,q.bob=Math.abs(Math.sin(ot*4))*.05,q.headY=.1*Math.sin(ot*2),xt="happy";else if(Pt==="pose"){let Ut=z||"flex";if(Ut==="flex")q.shLz=-1.5,q.shRz=1.5,q.elL=-1.9-Math.sin(ot*6)*.15,q.elR=-1.9-Math.sin(ot*6+1)*.15,q.shLx=-0,q.bob=-.06+Math.abs(Math.sin(ot*3))*.03,q.hipSpread=.25,q.kneeL=.3,q.kneeR=.3,xt="effort";else if(Ut==="point")q.shRx=-1.5,q.elR=0,q.shLz=-.3,q.elL=-1.6,q.shLx=-.3,q.headX=-.1,q.lean=-.05,xt="happy",q.bob=Math.sin(ot*5)*.02;else if(Ut==="stretch")q.hipRx=-.2,q.kneeR=2.3,q.shRx=.8,q.elR=-.6,q.shLz=-2.6,q.lean=.08+Math.sin(ot*2)*.04,xt="smug";else if(Ut==="spin"){let qt=Math.min(1,R/1.1);q.bodyY=(1-(1-qt)**2)*Math.PI*4,q.shLz=qt<1?-1.3:-2.6,q.shRz=qt<1?1.3:2.6,q.bob=qt<1?Math.abs(Math.sin(ot*7))*.2:Math.abs(Math.sin(ot*5))*.12,xt="happy"}else Ut==="bow"?(q.lean=.75+Math.sin(ot*2)*.05,q.shLx=.4,q.shRx=-1.2,q.elR=-1.6,q.shRz=.4,q.headX=-.2,xt="happy"):(q.shLz=-2.5,q.shRz=2.5,q.bob=Math.abs(Math.sin(ot*6))*.25,xt="happy");xt==="smug"&&(xt="normal")}else if(Pt==="celebrate"){let Ut=z||"jump";if(Ut==="jump"){let qt=Math.abs(Math.sin(ot*5.5));q.bob=qt*.55,q.shLz=-2.6-qt*.3,q.shRz=2.6+qt*.3,q.elL=-.2,q.elR=-.2,q.kneeL=q.kneeR=(1-qt)*.8,q.hipLx=q.hipRx=-(1-qt)*.4,xt="happy",Tt=22}else if(Ut==="fist"){let qt=Math.sin(ot*7);q.shRx=-2.6,q.elR=-.4+qt*.4,q.shLx=.4,q.elL=-1.8,q.bob=Math.abs(qt)*.08,q.lean=-.1,xt="happy"}else Ut==="kneel"?(q.lean=.85,q.kneeL=q.kneeR=.7,q.hipLx=q.hipRx=-.6,q.bob=-.25+Math.sin(ot*7)*.025,q.shLx=q.shRx=-.55,q.elL=q.elR=-.1,q.shLz=-.15,q.shRz=.15,q.headX=-.6,xt="pant"):Ut==="collapse"?(q.bodyX=-Math.PI/2+.05,q.shLz=-2.2,q.shRz=2.2,q.hipSpread=.4,q.kneeL=.3+Math.max(0,Math.sin(ot*9))*.4*(Math.sin(ot*.7)>.6?1:0),q.kneeR=.2,xt="dead",Tt=4):Ut==="shrug"&&(q.shLz=-.9,q.shRz=.9,q.elL=-1.4,q.elR=-1.4,q.shLx=-.5,q.shRx=-.5,q.headX=.1,q.headY=Math.sin(ot*1.5)*.3,xt="sad")}else q.bob=Math.sin(ot*2)*.015,q.shLz=-.18,q.shRz=.18,q.elL=-.25,q.elR=-.25,q.headY=Math.sin(ot*.7)*.25,q.lean=.02,q.kneeL=q.kneeR=.05;rt.lookYaw!=null&&Pt!=="distracted"&&(q.headY+=rt.lookYaw);let St=1-Math.exp(-Tt*Z);for(let Ut of mt){if(Ut==="bodyY"&&Pt==="pose"&&z==="spin"){$[Ut]=q[Ut];continue}$[Ut]+=(q[Ut]-$[Ut])*St}if(Pt==="pose"&&z==="spin"||($.bodyY=$.bodyY%(Math.PI*2),$.bodyY>Math.PI&&($.bodyY-=Math.PI*2)),W[0].hp.rotation.set($.hipLx,0,-$.hipSpread),W[1].hp.rotation.set($.hipRx,0,$.hipSpread),W[0].kn.rotation.x=$.kneeL,W[1].kn.rotation.x=$.kneeR,W[0].an.rotation.x=$.ankL-$.kneeL*.35,W[1].an.rotation.x=$.ankR-$.kneeR*.35,C[0].sh.rotation.set($.shLx,0,$.shLz-0),C[1].sh.rotation.set($.shRx,0,$.shRz),C[0].el.rotation.x=$.elL,C[1].el.rotation.x=$.elR,_.rotation.set($.lean,$.twist,0),A.rotation.set(0,-$.twist*.5,$.roll),A.position.y=P+$.bob,U.rotation.set($.headX,$.headY,0),k.rotation.set($.bodyX,$.bodyY,$.bodyZ),k.position.y+=((Pt==="celebrate"&&z==="collapse"?n.torso[2]*.5+.08:0)-k.position.y)*St,U.userData.bobble&&(U.userData.bobble.position.y=N*2.45+Math.abs(Math.sin(J.phase))*.04),U.userData.pony&&(U.userData.pony.rotation.x=.4+Math.sin(J.phase*2)*.35),U.userData.tail&&(U.userData.tail.rotation.x=.6+Math.sin(J.phase*2)*.3),U.userData.cape&&(U.userData.cape.rotation.x=-.3-Math.min(1.1,(rt.speed??0)*.15)+Math.sin(ot*8)*.08),rt.expr&&(xt=rt.expr),it(xt),ut.visible){ut.position.y=Ft+.45+Math.sin(ot*6)*.08;let Ut=.9+Math.sin(ot*9)*.05;ut.scale.set(Ut,Ut,Ut)}}function It(){for(let Z of h)Z.dispose?.();ut.material.dispose()}return{id:i.id,info:i,root:y,update:Mt,set:at,setPop:Rt,setExpr:it,setProp:X,dispose:It,height:Ft,hipH:P,get state(){return Pt},get variant(){return z}}}var yf=[1720,4220];function Ps(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function Jn(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function Ai(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function Vo(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}var _x=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function vf(i,t,e){let n=i.timeMap,s={};e.forEach((M,_)=>s[M.id]=M.lane??_+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(We-1.6)/Math.max(1,r-1)),c=i.runners.map((M,_)=>{let b=Ai(n,M.officialS),L=((s[M.id]??_+1)-a)*l;return{...M,finishB:b,base:L,seed:_*1.7+.3}}),h=Object.fromEntries(c.map(M=>[M.id,M])),d=[...c].sort((M,_)=>M.officialS-_.officialS).map(M=>M.id),p=Object.fromEntries(d.map((M,_)=>[M,_+1])),f=h[d[0]],g=d.map(M=>h[M].officialS),v=h[d[0]].finishB,m=h[d.at(-1)].finishB,u=r>1&&g[1]-g[0]<=1.5,w=M=>Math.max(.05,(Vo(n,M+.05)-Vo(n,M-.05))/.1),x=new Map;function y(M){let _=Math.round(M*1e3);if(x.has(_))return x.get(_);let b=M<=0?0:Vo(n,M),L=M<=0?4:w(M),E={b:M,raceS:b,rate:L,byId:{},order:[]};for(let O of c){let V=Ps(O.progress,b),dt=b>=O.officialS&&M>=O.finishB-1e-6,it=(Ps(O.progress,b+1)-Ps(O.progress,Math.max(0,b-1)))/(b>1?2:1);E.byId[O.id]={id:O.id,m:V,finished:dt,vRace:dt?0:it,place:p[O.id]}}for(let O of c){let V=E.byId[O.id],dt=V.m,it=O.base;it+=.22*Math.sin(V.m/85+O.seed);for(let Lt of c){if(Lt===O)continue;let C=E.byId[Lt.id],W=V.m-C.m;if(Math.abs(W)<4&&!V.finished&&!C.finished){let j=(1-Math.abs(W)/4)*.32;it+=Math.sign(O.base-Lt.base||O.seed-Lt.seed)*j}}let N=0;if(V.finished){let Lt=M-O.finishB,C=(Ps(O.progress,O.officialS)-Ps(O.progress,O.officialS-2))/2*w(O.finishB),W=Math.min(14,Math.max(4,C)),j=1.6;dt=5e3+(Lt<j?W*(Lt-Lt*Lt/(2*j)):W*j/2+Math.min(10+p[O.id]*1.5,(Lt-j)*.9));let tt=(p[O.id]-(r+1)/2)*1.6;it=it+(tt-it)*_x(0,2.5,Lt),N=Lt}let Et=t.sample(dt,O.id);it*=1-Et.div,it=Math.max(-We/2+.6,Math.min(We/2-.6,it)),Object.assign(V,{mVis:dt,x:Et.x+Et.rx*it,z:Et.z+Et.rz*it,y:t.heightAt(Et.x+Et.rx*it,Et.z+Et.rz*it)+.16,tx:Et.tx,tz:Et.tz,slope:Et.slope,div:Et.div,divInfo:Et.divInfo,lat:it,post:N,distToFinish:Math.max(0,5e3-V.m)})}let S=c.filter(O=>E.byId[O.id].finished).sort((O,V)=>O.officialS-V.officialS),D=c.filter(O=>!E.byId[O.id].finished).sort((O,V)=>E.byId[V.id].m-E.byId[O.id].m||O.officialS-V.officialS);E.order=[...S,...D].map(O=>O.id),E.leader=E.byId[E.order[0]];let U=h[E.order[0]];for(let[O,V]of E.order.entries()){let dt=E.byId[V];if(dt.finished)dt.gapText=O===0?Go(h[V].officialS):`+${(h[V].officialS-f.officialS).toFixed(0)}s`;else if(O===0)dt.gapText="LEADER";else{let it=E.byId[E.order[0]].finished?f:U;dt.gapText=`+${Math.max(0,b-Jn(it.progress,dt.m)).toFixed(1)}s`}}return x.size>400&&x.clear(),x.set(_,E),E}return{stateAt:y,orderAt:M=>y(M).order,gapM:(M,_,b)=>{let L=y(b);return Math.abs((L.byId[M]?.m??0)-(L.byId[_]?.m??0))},finishedAt:(M,_)=>y(_).byId[M]?.finished,allFinishedAt:M=>M>m,firstFinishB:v,lastFinishB:m,photoFinish:u,finishOrder:d,place:p,byId:h,R:c,rateAt:w,durationS:n.durationS}}function Go(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}var Mx=1.3,bx=2.4,Sx=.24,Ex=16/9,Mf=i=>i*180/Math.PI,_f=(i,t=Sx)=>Mf(2*Math.atan(bx/(2*t*i)));function dc({plan:i,sim:t,backedIds:e=[],C:n,world:s,funfair:r}){let o=[],a=i.timeMap,l=S=>Ai(a,Math.min(...i.runners.map(D=>Jn(D.progress,S)))),c=S=>S<=0?4:t.rateAt(S),h=(S,D)=>{let U=0,O=0;for(let V=S;V<=D;V+=Math.max(.5,(D-S)/12))U+=c(V),O++;return U/Math.max(1,O)},d=t.firstFinishB,p=t.lastFinishB,f=S=>{let D=t.stateAt(Math.max(0,S)),U=D.order.filter(V=>!D.byId[V].finished),O=U[0]??D.order[0];return(U.length?U:D.order).filter(V=>Math.abs(D.byId[V].m-D.byId[O].m)<120)},g=S=>{let D=t.stateAt(Math.max(0,S)),U=D.order.filter(V=>!D.byId[V].finished),O=U[0]??D.order[0];return(U.length?U:D.order).filter(V=>Math.abs(D.byId[V].m-D.byId[O].m)<20)},v=(S,D)=>{let U=t.stateAt(Math.max(0,D));return U.order.filter(O=>!U.byId[O].finished&&Math.abs(U.byId[O].m-U.byId[S].m)<20)},m=(S,D)=>{let U=[];for(let C=0;C<=6;C++)U.push(t.stateAt(Math.max(0,S+(D-S)*C/6)));let O=U[0].order.filter(C=>!U[0].byId[C].finished&&!U.at(-1).byId[C].finished),V=[];for(let C=0;C<O.length;C++)for(let W=C+1;W<O.length;W++){let j=O[C],X=O[W],tt=0;for(let Rt of U)tt=Math.max(tt,Math.abs(Rt.byId[j].m-Rt.byId[X].m));let ut=U[3].order.indexOf(j)+U[3].order.indexOf(X);V.push({ids:[j,X],gap:tt,backed:e.includes(j)||e.includes(X),pos:ut})}let dt=C=>C.sort((W,j)=>W.gap+W.pos*2-(j.gap+j.pos*2))[0],it=dt(V.filter(C=>C.backed&&C.gap<=30))||dt(V.filter(C=>C.gap<=40));if(it){let C=[...it.ids];for(let W of O)!C.includes(W)&&U.every(j=>{let X=it.ids.map(tt=>j.byId[tt].m);return j.byId[W].m>Math.min(...X)-6&&j.byId[W].m<Math.max(...X)+6})&&C.push(W);return{ids:C,kind:it.backed?"backedPair":"pair",gap:it.gap}}let N=U[3],Et=N.order.filter(C=>O.includes(C)),Lt=[Et[0]];for(let C=0;C<Et.length;C++){let W=Et.filter(j=>N.byId[Et[C]].m-N.byId[j].m>=0&&N.byId[Et[C]].m-N.byId[j].m<150);W.length>Lt.length&&(Lt=W)}return{ids:Lt.length?Lt:null,kind:"pack"}},u=(S,D)=>S.kind==="pack"?"drone":S.gap>24||D==="side"?"headon":"side",w=.25+8;for(let S=.25;S<30;S+=.25)if(c(S)>7){w=Math.max(w,S);break}let x=d-6;for(let S=d-12;S>w;S-=.25)if(c(S)>6){x=S;break}let y=Math.max(x+4,Math.min(d-3,l(4850))),k=Math.max(x,Math.min(y,l(4700)));o.push({type:"heli",a:-8.5,b:-3.2,hard:!0}),o.push({type:"startgo",a:-3.2,b:.25}),o.push({type:"side",a:.25,b:w,hard:!0,ids:null});let A=[],I=i.runners.find(S=>S.diversions?.length);if(I&&r){let S=I.diversions[0],D=Ai(a,Jn(I.progress,S.fromM))-.5,U=Ai(a,Jn(I.progress,S.toM))+.8;A.push({type:"side",tag:"fair",a:D,b:Math.max(D+8,U),ids:[I.id],fair:!0,prio:3})}for(let S of yf){let D=l(S);A.push({type:"headon",tag:"hill",a:D-1.5,b:D+8,prio:2})}A.sort((S,D)=>D.prio-S.prio);let P=[];for(let S of A){let D=Math.min(x,S.b),U=Math.max(w,Math.min(S.a,D-8));D-U<6||P.some(O=>U<O.b&&D>O.a)||P.push({...S,a:U,b:D})}P.sort((S,D)=>S.a-D.a);let M=(S,D)=>{let U=D-S;if(U<=.01)return;if(U<8&&o.length>=3){o.at(-1).b=D;return}let O=Math.max(1,Math.round(U/11));for(let V=0;V<O;V++){let dt=S+U*V/O,it=S+U*(V+1)/O,N=m(dt,it);o.push({type:u(N,o.at(-1)?.type),a:dt,b:it,ids:N.ids,subject:N.kind,pack:N.kind==="pack"})}},_=w;for(let S of P){if(M(_,S.a),S.tag==="hill"){let D=m(S.a,S.b);D.kind!=="pack"&&(S.ids=D.ids,S.subject=D.kind)}o.push(S),_=S.b}M(_,x);{let S=k-x;if(S>=8){let V=Math.max(1,Math.round(S/11));for(let dt=0;dt<V;dt++){let it=x+S*dt/V,N=x+S*(dt+1)/V,Et=m(it,N);o.push({type:u(Et,o.at(-1)?.type),a:it,b:N,ids:Et.ids,subject:Et.kind,pack:Et.kind==="pack"})}}let D=Math.max(x,o.at(-1).b),U=m(D,y),O={type:(U.kind==="pack","headon"),a:D,b:y,ids:U.kind==="pack"?null:U.ids,subject:U.kind};o.at(-1).type==="headon"&&o.at(-1).a>=x&&String(o.at(-1).ids)===String(O.ids)?o.at(-1).b=y:o.push(O)}if(o.at(-1).b-o.at(-1).a<6&&o.length>4){let S=o.pop();o.at(-1).b=S.b}o.push({type:"finishcam",a:y,b:p+2.5,hard:!0}),o.push({type:"celebrate",a:p+2.5,b:p+90});let b=(i.events||[]).filter(S=>(S.type==="lead_change"||S.type==="overtake"&&(e.includes(S.by)||e.includes(S.on)))&&S.broadcastS>w+2&&S.broadcastS<x-3),L=-1e9;for(let S of b){let D=S.type==="lead_change"?[S.to,S.from]:[S.by,S.on];if(S.broadcastS-L<12)continue;let U=o.findIndex(dt=>S.broadcastS>=dt.a&&S.broadcastS<dt.b);if(U<0)continue;let O=o[U];if(["heli","startgo","finishcam","celebrate","drone"].includes(O.type)||O.interrupt||O.tag||O.hard||O.subject==="backedPair")continue;let V=O.ids||g((O.a+O.b)/2);if(!D.every(dt=>V.includes(dt))){if(S.broadcastS-O.a<8||O.b-S.broadcastS<8)Object.assign(O,{type:"side",ids:D,interrupt:S.type,pack:!1,subject:"pair"});else{let dt=S.broadcastS-1.8;o.splice(U,1,{...O,b:dt},{type:"side",a:dt,b:O.b,ids:D,interrupt:S.type,subject:"pair"})}L=S.broadcastS}}for(let S of o)if(S.rate=h(Math.max(0,S.a),Math.max(.5,S.b)),S.ids=S.ids||null,S.type==="side"||S.type==="headon"||S.type==="drone"){let D=S.ids||(S.type==="drone"?f((S.a+S.b)/2):g((S.a+S.b)/2));S.type==="drone"&&!S.ids&&(S.pack=!0);let U=0;for(let O=0;O<=6;O++){let V=t.stateAt(Math.max(0,S.a+(S.b-S.a)*O/6)),dt=D.map(it=>V.byId[it]).filter(it=>it&&!it.finished).map(it=>it.m);dt.length&&(U=Math.max(U,Math.max(...dt)-Math.min(...dt)))}if(S.spread=U,S.type==="side"){S.dist=Ei.clamp(14+1.7*S.rate,18,48);let O=_f(S.dist),V=U+7,dt=Mf(2*Math.atan(V/(2*Ex*S.dist)));S.fov=Ei.clamp(Math.max(O,dt),10,34),S.side=E(S,D)}else S.type==="headon"?(S.dist=Ei.clamp(16+1.9*S.rate,20,52)+U*.6,S.fov=Ei.clamp(_f(S.dist-U*.3,.2),10,30)):(S.back=30+2.2*S.rate+U*.35,S.height=16+1.9*S.rate+U*.25,S.fov=40,S.side=E(S,D))}return o;function E(S,D){let U=X=>{let tt=t.stateAt(Math.max(0,X)),ut=D.map(nt=>tt.byId[nt]).filter(Boolean),Rt=ut.reduce((nt,pt)=>nt+pt.x,0)/ut.length,Ft=ut.reduce((nt,pt)=>nt+pt.z,0)/ut.length;return[Rt,Ft]},O=U(S.a),V=U((S.a+S.b)/2),dt=U(S.b),it=(V[0]-O[0])*(dt[1]-V[1])-(V[1]-O[1])*(dt[0]-V[0]),N=S.fair?null:it>0?1:-1;if(S.fair&&r){let X=r.anchors.center,tt=[dt[0]-O[0],dt[1]-O[1]],ut=[-tt[1],tt[0]];return N=(X.x-V[0])*ut[0]+(X.z-V[1])*ut[1]>0?-1:1,N}let Et=[dt[0]-O[0],dt[1]-O[1]],Lt=Math.hypot(...Et)||1,C=[-Et[1]/Lt,Et[0]/Lt],W=S.dist||40,j=X=>s.inPark(V[0]+C[0]*W*X,V[1]+C[1]*W*X);return!j(N)&&j(-N)&&(N=-N),N}}function bf({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new H,look:new H},o=new H(0,1,0),a=null,l=null,c=!0,h=null,d=new Cn,p=new Le;function f(x,y){let k=e.stateAt(Math.max(0,y)),A=(x||k.order.slice(0,1)).map(M=>k.byId[M]).filter(Boolean),I=A.filter(M=>!M.finished);I.length&&(A=I);let P=new H;for(let M of A)P.add(new H(M.x,M.y,M.z));return P.divideScalar(Math.max(1,A.length))}function g(x,y,k){let A=f(x,y),I=f(x,y-k*1.5),P=f(x,y+k*1.5),M=new H(P.x-I.x,0,P.z-I.z);if(M.lengthSq()<1e-4){let _=x?.[0]??e.stateAt(Math.max(0,y)).order[0],b=e.stateAt(Math.max(0,y)).byId[_];M.set(b.tx,0,b.tz)}return M.normalize(),{c:A,h:M,r:new H(-M.z,0,M.x)}}let v=(x,y)=>{if(x.ids)return x.ids;if(!x._group){let k=(x.a+x.b)/2,A=e.stateAt(Math.max(0,k)),I=A.order.filter(M=>!A.byId[M].finished),P=I[0]??A.order[0];x._group=(I.length?I:A.order).filter(M=>Math.abs(A.byId[M].m-A.byId[P].m)<(x.pack?120:20)),x._group.length||(x._group=[P])}return x._group};function m(x,y){let k=n.anchors.finish,A=n.anchors.start,I,P,M=40,_=x.rate>8?2.2:1.2;switch(x.type){case"heli":{let b=(y-x.a)/Math.max(.01,x.b-x.a),L=new H(150,0,0),E=new H(A.x,A.y,A.z),S=pc(Math.min(1,b)),D=-1.2+S*1.6,U=420-S*360;I=new H(L.x+Math.cos(D)*U,170-S*140,L.z+Math.sin(D)*U).lerp(new H(E.x-A.tx*40+A.rx*25,E.y+22,E.z-A.tz*40+A.rz*25),S*S),P=L.clone().setY(10).lerp(E,Math.min(1,S*1.3)),M=50;break}case"startgo":{let b=new H(A.x,A.y,A.z),L=new H(A.tx,0,A.tz),E=new H(-L.z,0,L.x);I=b.clone().addScaledVector(L,10.5).addScaledVector(E,2.6).add(o.clone().multiplyScalar(1.9)),P=b.clone().add(o.clone().multiplyScalar(1.3)).addScaledVector(L,-1),M=42;break}case"side":{let{c:b,h:L,r:E}=g(v(x,y),y,_);I=b.clone().addScaledVector(E,x.side*x.dist).addScaledVector(L,x.dist*.18).add(o.clone().multiplyScalar(2.5+x.dist*.2)),P=b.clone().add(o.clone().multiplyScalar(1.1)),M=x.fov;break}case"headon":{let{c:b,h:L,r:E}=g(v(x,y),y,_);I=b.clone().addScaledVector(L,x.dist).addScaledVector(E,1.5).add(o.clone().multiplyScalar(2+x.dist*.16)),P=b.clone().add(o.clone().multiplyScalar(1.15)),M=x.fov;break}case"drone":{let{c:b,h:L,r:E}=g(v(x,y),y,_*1.3);I=b.clone().addScaledVector(L,-x.back).addScaledVector(E,x.side*x.back*.5).add(o.clone().multiplyScalar(x.height)),P=b.clone().addScaledVector(L,x.back*.15),M=x.fov;break}case"finishcam":{let b=new H(k.tx,0,k.tz),L=new H(-b.z,0,b.x);x.fside||(x.fside=n.inPark(k.x+L.x*16,k.z+L.z*16)?1:-1);let E=new H(k.x,k.y+1,k.z);I=E.clone().addScaledVector(L,x.fside*15).addScaledVector(b,11).add(o.clone().multiplyScalar(1.9));let S=e.stateAt(Math.max(0,y)),D=S.order.map(V=>S.byId[V]).find(V=>!V.finished),O=S.order.map(V=>S.byId[V]).filter(V=>V.finished).sort((V,dt)=>V.post-dt.post)[0];if(O&&O.post<6&&(!D||D.distToFinish>45))P=new H(O.x,O.y+1.1,O.z);else{let V=D?Math.min(1,Math.max(0,D.distToFinish/150)):0;P=D?E.clone().lerp(new H(D.x,D.y+1,D.z),Math.min(1,.25+V)):E}M=22,x.smoothLook=!0;break}case"celebrate":{let b=e.stateAt(Math.max(0,y)),L=new H;for(let U of b.order)L.add(new H(b.byId[U].x,b.byId[U].y,b.byId[U].z));L.divideScalar(b.order.length);let E=new H(k.tx,0,k.tz),S=new H(-E.z,0,E.x),D=Math.sin((y-x.a)*.08)*.5;I=L.clone().addScaledVector(E,-11*Math.cos(D)).addScaledVector(S,11*Math.sin(D)).add(o.clone().multiplyScalar(2.8)),P=L.clone().add(o.clone().multiplyScalar(1.2)),M=44;break}default:{let{c:b,h:L}=g(v(x,y),y,_);I=b.clone().addScaledVector(L,-12).add(o.clone().multiplyScalar(5)),P=b.clone()}}return{pos:I,look:P,fov:M}}function u(x,y,k){let A=k.find(E=>x>=E.a&&x<E.b)||k.at(-1),I=!1;if(A!==a){let E=c||!!A.hard;l=E?null:{from:{pos:i.position.clone(),look:r.look.clone(),fov:i.fov},t0:x},I=E,c=!1,a=A,h=null}let P=m(A,x),M=t.heightAt(P.pos.x,P.pos.z)+1.2;P.pos.y<M&&(P.pos.y=M),A.smoothLook&&(h||(h=P.look.clone()),h.lerp(P.look,1-Math.exp(-2.5*y)),P.look.copy(h)),p.lookAt(P.pos,P.look,o),d.setFromRotationMatrix(p);let _=P.pos,b=d,L=P.fov;if(l){let E=(x-l.t0)/Mx;if(E>=1||E<0)l=null;else{let S=E*E*E*(E*(E*6-15)+10),D=Math.sin(Math.PI*S)*Math.min(12,l.from.pos.distanceTo(P.pos)*.12);_=l.from.pos.clone().lerp(P.pos,S).add(o.clone().multiplyScalar(D));let U=Math.min(1,E*2.2),O=l.from.look.clone().lerp(P.look,U*U*(3-2*U));p.lookAt(_,O,o),b=new Cn().setFromRotationMatrix(p),L=l.from.fov+(P.fov-l.from.fov)*S}}return r.pos.copy(P.pos),r.look.copy(P.look),i.position.copy(_),i.quaternion.copy(b),Math.abs(i.fov-L)>.001&&(i.fov=L,i.updateProjectionMatrix()),{shot:A,cut:I}}function w(x=!0){a=null,l=null,c=!!x,h=null}return{update:u,reset:w,evaluate:m,get shot(){return a},get gliding(){return!!l},cam:r}}function pc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var mr=new Set(["drone","heli"]);var wx=`
.mr-hud{position:absolute;inset:0;pointer-events:none;overflow:hidden;font-family:var(--font-display,"Lilita One","Arial Black",Impact,sans-serif);color:#fff;
  --ink:#14183c;--blue:#2a62e0;--blue2:#173c9c;--yellow:#ffd23f;--pink:#ff6fb5;--tomato:#ff4d5a;--grass:#2ec27e;--u:calc(min(1vw,1.78vh));letter-spacing:.02em;
  --ease:cubic-bezier(.2,.8,.2,1);--fast:150ms;--slow:400ms;--sk:-8deg;--usk:8deg;--ol:calc(var(--u)*.37);--drop:0 calc(var(--u)*.65) 0 var(--ink);--body:var(--font-body,Nunito,"Arial Rounded MT Bold",sans-serif)}
.mr-hud *{box-sizing:border-box}
.mr-num{color:var(--yellow);-webkit-text-stroke:calc(var(--u)*.38) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.3) 0 rgba(0,0,0,.35)}
.mr-panel{background:linear-gradient(180deg,#3d86ff,#2457c8);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*.9);transform:skewX(var(--sk));box-shadow:var(--drop)}
.mr-panel>.mr-unskew{transform:skewX(var(--usk))}
.mr-top{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex}
.mr-pill{display:flex;align-items:center;gap:calc(var(--u)*.7);background:rgba(20,24,60,.85);border-radius:calc(var(--u)*.9);transform:skewX(var(--sk));padding:calc(var(--u)*.35) calc(var(--u)*1.1);font-size:calc(var(--u)*1.35);line-height:1.2}
.mr-pill b{font-weight:400;color:var(--yellow)}
.mr-pill .mr-dot{width:calc(var(--u)*.7);height:calc(var(--u)*.7);border-radius:50%;background:#ff3d5a;display:inline-block}
.mr-pill .mr-sep{width:1px;align-self:stretch;background:rgba(255,255,255,.3)}
.mr-pill .mr-clk{font-family:var(--body);font-weight:800;font-size:.8em;opacity:.65}
.mr-live{background:var(--pink);padding:calc(var(--u)*.5) calc(var(--u)*1.2);font-size:calc(var(--u)*1.5);display:flex;align-items:center;gap:calc(var(--u)*.5)}
.mr-live i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff;display:inline-block;}
@keyframes mrblink{50%{opacity:.25}}
.mr-clock{padding:calc(var(--u)*.2) calc(var(--u)*1.4);font-size:calc(var(--u)*2.9);line-height:1.1;min-width:calc(var(--u)*12);text-align:center}
.mr-lap{padding:calc(var(--u)*.2) calc(var(--u)*1.2);display:flex;align-items:center;gap:calc(var(--u)*.6);font-size:calc(var(--u)*1.4)}
.mr-lap b{font-size:calc(var(--u)*2.9);font-weight:400}
.mr-dist{padding:calc(var(--u)*.3) calc(var(--u)*1.2);font-size:calc(var(--u)*1.4);display:flex;flex-direction:column;justify-content:center;min-width:calc(var(--u)*11)}
.mr-bar{height:calc(var(--u)*.7);background:rgba(0,0,0,.35);border-radius:9px;margin-top:calc(var(--u)*.3);overflow:hidden;border:2px solid var(--ink)}
.mr-bar>i{display:block;height:100%;background:var(--yellow);width:0}
.mr-tower{position:absolute;left:calc(var(--u)*2.2);top:calc(var(--u)*5.2);width:calc(var(--u)*21)}
.mr-row{position:absolute;left:0;width:100%;height:calc(var(--u)*2.9);display:flex;align-items:center;transition:transform var(--slow) var(--ease),opacity var(--slow) var(--ease)}
.mr-row.off{opacity:0}
.mr-row .mr-pos{width:calc(var(--u)*3.8);font-size:calc(var(--u)*2.2);text-align:center;line-height:1}
.mr-row .mr-pos small{font-size:.42em;margin-right:2px;vertical-align:middle;color:#fff}
.mr-row .mr-pos sup{font-size:.45em;vertical-align:top;margin-left:1px}
.mr-row .mr-card{flex:1;min-width:0;height:calc(var(--u)*2.4);display:flex;align-items:center;padding:0 calc(var(--u)*.6) 0 0;background:rgba(20,24,60,.82);border-radius:calc(var(--u)*.45);transform:skewX(var(--sk));overflow:hidden}
.mr-row .mr-card>*{transform:skewX(var(--usk))}
.mr-row .mr-chip{width:calc(var(--u)*.8);align-self:stretch;margin-right:calc(var(--u)*.6)}
.mr-row .mr-name{flex:1;min-width:0;font-size:calc(var(--u)*1.25);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mr-row .mr-gap{font-family:var(--body);font-weight:900;font-size:calc(var(--u)*.95);color:#cfe0ff;margin-left:calc(var(--u)*.5)}
.mr-row.lead .mr-card{background:linear-gradient(90deg,rgba(255,210,63,.95),rgba(255,160,40,.92));color:var(--ink)}
.mr-row.lead .mr-gap{color:var(--ink)}
.mr-row.fin .mr-gap{color:#7dff9a}
.mr-row.lead.fin .mr-gap{color:var(--ink)}
.mr-badge{display:inline-flex;align-items:center;gap:.2em;background:var(--bc,#fff);color:var(--ink);border:calc(var(--u)*.18) solid var(--ink);border-radius:99px;font-size:calc(var(--u)*1.05);padding:.05em .55em;margin-left:calc(var(--u)*.35);line-height:1.2;box-shadow:0 calc(var(--u)*.15) 0 rgba(0,0,0,.35);white-space:nowrap}
.mr-inis{display:inline-flex;gap:calc(var(--u)*.2);margin-left:calc(var(--u)*.4);flex-shrink:0}
.mr-ini{display:inline-flex;align-items:center;justify-content:center;width:calc(var(--u)*1.25);height:calc(var(--u)*1.25);border-radius:50%;background:var(--bc);color:var(--ink);font-family:var(--body);font-weight:900;font-size:calc(var(--u)*.8);line-height:1;border:1px solid rgba(26,20,32,.6)}

.mr-tag .mr-tb{display:inline-flex;gap:calc(var(--u)*.15)}
.mr-title{position:absolute;left:41%;top:9%;width:max-content;max-width:64%;transform:translate(-50%,-30%) scale(.8);opacity:0;text-align:center;transition:opacity var(--slow) var(--ease),transform var(--slow) var(--ease)}
.mr-title.on{opacity:1;transform:translate(-50%,0) scale(1)}
.mr-title .mr-t0{display:inline-block;font-size:calc(var(--u)*1.7);background:var(--pink);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk))}
.mr-title .mr-t1{display:block;white-space:normal;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*5.2);line-height:1.02;color:#fff;-webkit-text-stroke:calc(var(--u)*.45) var(--ink);paint-order:stroke fill;text-shadow:0 calc(var(--u)*.5) 0 rgba(0,0,0,.35)}
.mr-title .mr-t2{display:inline-block;margin-top:calc(var(--u)*.8);font-size:calc(var(--u)*2.1);color:var(--ink);background:var(--yellow);padding:.1em .9em;border:calc(var(--u)*.3) solid var(--ink);border-radius:calc(var(--u)*.8);transform:skewX(var(--sk))}
.mr-pcap{position:absolute;left:50%;bottom:19%;transform:translateX(-50%) skewX(var(--sk));background:var(--ink);color:#fff;border:calc(var(--u)*.3) solid #fff;padding:calc(var(--u)*.4) calc(var(--u)*2);font-size:calc(var(--u)*2.2);white-space:nowrap}
.mr-market{position:absolute;inset:0;opacity:0;transition:opacity var(--slow) var(--ease);background:radial-gradient(ellipse at center,rgba(0,0,0,0) 45%,rgba(20,10,40,.55) 100%)}
.mr-market.on{opacity:1}
.mr-market .mr-m1{position:absolute;left:60%;top:15%;transform:translate(-50%,-50%) skewX(var(--sk)) rotate(-2deg);background:linear-gradient(180deg,#3ddc84,#1f9d5a);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);padding:calc(var(--u)*.35) calc(var(--u)*1.8);font-size:calc(var(--u)*3.5);white-space:nowrap;color:#fff;-webkit-text-stroke:calc(var(--u)*.35) var(--ink);paint-order:stroke fill;box-shadow:var(--drop);}
@keyframes mrpulse{50%{transform:translate(-50%,-50%) skewX(var(--sk)) rotate(-2deg) scale(1.04)}}
.mr-market .mr-m2{position:absolute;left:60%;top:22%;transform:translateX(-50%);font-size:calc(var(--u)*2.3);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill;white-space:nowrap}
.mr-market .mr-mt{position:absolute;right:calc(var(--u)*3);top:calc(var(--u)*25);font-size:calc(var(--u)*1.6);background:var(--ink);padding:.2em .8em;border-radius:calc(var(--u)*.6)}
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*11);height:calc(var(--u)*13.5);padding:calc(var(--u)*.4);transition:opacity var(--slow) var(--ease)}
.mr-hud.mr-nomap .mr-map{opacity:0}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.72);border-radius:calc(var(--u)*1)}
.mr-banner{position:absolute;left:50%;top:13%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform var(--fast) var(--ease)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;box-shadow:var(--drop);padding:calc(var(--u)*.2) calc(var(--u)*1.6);font-size:calc(var(--u)*2.8);line-height:1.05;background:var(--pink);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(var(--sk)) rotate(-3deg);box-shadow:var(--drop)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(var(--usk))}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*1.8);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-tags{position:absolute;inset:0}
.mr-tag{position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;display:flex;align-items:center;gap:calc(var(--u)*.3);font-size:calc(var(--u)*1.05);will-change:transform;transition:opacity var(--fast) var(--ease)}
.mr-tag .mr-tp{background:var(--ink);color:var(--yellow);border-radius:calc(var(--u)*.5);padding:0 calc(var(--u)*.45);font-size:calc(var(--u)*1.35)}
.mr-tag .mr-tn{padding:calc(var(--u)*.05) calc(var(--u)*.6);border:calc(var(--u)*.22) solid var(--ink);border-radius:calc(var(--u)*.6);-webkit-text-stroke:calc(var(--u)*.22) var(--ink);paint-order:stroke fill;box-shadow:0 calc(var(--u)*.25) 0 rgba(0,0,0,.3)}
.mr-tag:after{content:"";position:absolute;left:50%;bottom:calc(var(--u)*-.75);border:calc(var(--u)*.45) solid transparent;border-top-color:var(--ink);transform:translateX(-50%)}
.mr-card3{position:absolute;left:calc(var(--u)*5);bottom:19%;display:flex;align-items:stretch;opacity:0;transform:translateX(-30%);transition:opacity var(--slow) var(--ease),transform var(--slow) var(--ease)}
.mr-card3.on{opacity:1;transform:none}
.mr-card3 .mr-lane{width:calc(var(--u)*8);font-size:calc(var(--u)*6.5);display:flex;align-items:center;justify-content:center;border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(var(--sk));margin-right:calc(var(--u)*-.6);z-index:1}
.mr-card3 .mr-lane span{transform:skewX(var(--usk))}
.mr-card3 .mr-info{padding:calc(var(--u)*.8) calc(var(--u)*3) calc(var(--u)*.8) calc(var(--u)*2.4)}
.mr-card3 .mr-nick{font-size:calc(var(--u)*4.4);line-height:1;-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
.mr-card3 .mr-tagl{font-family:var(--body);font-weight:900;font-size:calc(var(--u)*1.55);opacity:.95;margin-top:calc(var(--u)*.4)}
.mr-count{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%) scale(1);font-size:calc(var(--u)*16);opacity:0}
.mr-count.pop{animation:mrpop .8s var(--ease)}
@keyframes mrpop{0%{transform:translate(-50%,-50%) scale(2.2);opacity:0}20%{transform:translate(-50%,-50%) scale(1);opacity:1}80%{opacity:1}100%{transform:translate(-50%,-50%) scale(.8);opacity:0}}
.mr-photo{position:absolute;inset:0;opacity:0;transition:opacity var(--fast) var(--ease);background:radial-gradient(ellipse at center,rgba(0,0,0,0) 50%,rgba(0,0,0,.55) 100%)}
.mr-photo.on{opacity:1}
.mr-photo .mr-flash{position:absolute;inset:0;background:#fff;opacity:0}
.mr-photo.on .mr-flash{animation:mrflash var(--slow) var(--ease)}
@keyframes mrflash{0%{opacity:.95}100%{opacity:0}}
.mr-photo .mr-pf{position:absolute;left:50%;top:14%;transform:translateX(-50%) skewX(var(--sk));background:#fff;color:var(--ink);border:var(--ol) solid var(--ink);padding:calc(var(--u)*.4) calc(var(--u)*2.5);font-size:calc(var(--u)*4)}
.mr-photo .mr-line{position:absolute;left:0;top:0;height:calc(var(--u)*.35);background:rgba(255,40,80,.9);transform-origin:0 50%;box-shadow:0 0 6px rgba(255,40,80,.8)}
.mr-results{position:absolute;right:calc(var(--u)*3);top:50%;transform:translate(120%,-50%);transition:transform var(--slow) var(--ease);width:calc(var(--u)*30)}
.mr-results.on{transform:translate(0,-50%)}
.mr-results .mr-rh{font-size:calc(var(--u)*3);margin-bottom:calc(var(--u)*.8);padding:calc(var(--u)*.3) calc(var(--u)*1.5);display:inline-block}
.mr-results .mr-rr{display:flex;align-items:center;gap:calc(var(--u)*.8);margin:calc(var(--u)*.5) 0;font-size:calc(var(--u)*1.8);background:rgba(20,24,60,.88);border:calc(var(--u)*.25) solid var(--ink);border-radius:calc(var(--u)*.6);padding:calc(var(--u)*.3) calc(var(--u)*1);transform:skewX(var(--sk))}
.mr-results .mr-rr>*{transform:skewX(var(--usk))}
.mr-results .mr-rr .mr-num{font-size:calc(var(--u)*2.6);width:calc(var(--u)*4.2)}
.mr-results .mr-rr .mr-t{margin-left:auto;font-family:var(--body);font-weight:900}
.mr-dim .mr-tower,.mr-dim .mr-top,.mr-dim .mr-map,.mr-dimtop .mr-tower,.mr-dimtop .mr-top{opacity:0}
.mr-tower,.mr-top,.mr-map{transition:opacity var(--slow) var(--ease)}

.mr-replay{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;align-items:center;gap:calc(var(--u)*.6);padding:calc(var(--u)*.35) calc(var(--u)*1.2);background:var(--tomato);border:var(--ol) solid var(--ink);border-radius:calc(var(--u)*.9);box-shadow:var(--drop);transform:skewX(var(--sk)) translateX(140%);font-size:calc(var(--u)*2);transition:transform var(--slow) var(--ease)}
.mr-replay>*{transform:skewX(var(--usk))}
.mr-replay i{width:calc(var(--u)*.9);height:calc(var(--u)*.9);border-radius:50%;background:#fff}
.mr-hud.mr-inreplay .mr-replay{transform:skewX(var(--sk)) translateX(0)}
.mr-hud.mr-inreplay .mr-map,.mr-hud.mr-inreplay .mr-tags{opacity:0}
.mr-replayframe{position:absolute;inset:0;border:calc(var(--u)*.5) solid rgba(255,77,90,.0);transition:border-color var(--slow) var(--ease);pointer-events:none}
.mr-hud.mr-inreplay .mr-replayframe{border-color:rgba(255,77,90,.55)}
.mr-wipe{position:absolute;top:-10%;bottom:-10%;left:-60%;width:45%;background:linear-gradient(90deg,var(--blue),var(--blue2));border-left:var(--ol) solid var(--ink);border-right:var(--ol) solid var(--ink);transform:skewX(var(--sk)) translateX(0);opacity:0}
.mr-wipe.go{animation:mrwipe var(--slow) var(--ease)}
@keyframes mrwipe{0%{opacity:1;transform:skewX(var(--sk)) translateX(0)}100%{opacity:1;transform:skewX(var(--sk)) translateX(420%)}}

.mr-close{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);display:flex;align-items:center;gap:calc(var(--u)*.6);padding:calc(var(--u)*.35) calc(var(--u)*1.1) calc(var(--u)*.35) calc(var(--u)*.5);background:rgba(20,24,60,.85);border-radius:calc(var(--u)*.9);transform:skewX(var(--sk));font-family:var(--body);font-weight:800;font-size:calc(var(--u)*1.25);opacity:0;transition:opacity var(--slow) var(--ease),top var(--slow) var(--ease),background var(--fast) var(--ease);white-space:nowrap}
.mr-close>*{transform:skewX(var(--usk))}
.mr-close.on{opacity:1}
.mr-hud:not(.mr-nomap) .mr-close{top:calc(var(--u)*16.2)}
.mr-close .mr-cc{width:calc(var(--u)*.7);align-self:stretch;border-radius:calc(var(--u)*.3)}
.mr-close b{font-family:var(--font-display,"Lilita One",sans-serif);font-weight:400;color:var(--yellow)}
.mr-close.hot{background:rgba(255,77,90,.92)}
.mr-close.hot b{color:#fff}
`,Sf=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,Tx=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,Ax=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},gr=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Rx=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function wf(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let J=document.createElement("style");J.id="mr-hud-css",J.textContent=wx,document.head.appendChild(J)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-results"></div>
    <div class="mr-close"><i class="mr-cc"></i><span><b class="mr-cn"></b> <span class="mr-ct"></span></span></div><div class="mr-replayframe"></div><div class="mr-replay"><i></i><span>REPLAY</span></div><div class="mr-wipe"></div>`,i.appendChild(o);let a=J=>o.querySelector(J),l={};o.querySelectorAll("[data-k]").forEach(J=>l[J.dataset.k]=J);let c=a(".mr-tower"),h={},d={};for(let J of t){let $=document.createElement("div");$.className="mr-row",$.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${J.colour.primary};border-right:4px solid ${J.colour.secondary}"></div><div class="mr-name">${gr(qi(J))}</div><span class="mr-inis"></span><div class="mr-gap"></div></div>`,c.appendChild($),h[J.id]={el:$,pos:$.querySelector(".mr-pos"),gap:$.querySelector(".mr-gap"),last:""};let mt=document.createElement("div");mt.className="mr-tag",mt.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tb"></span><span class="mr-tn" style="background:${J.colour.primary};color:#fff">${gr(qi(J))}</span>`,mt.style.opacity="0",a(".mr-tags").appendChild(mt),d[J.id]={el:mt,pos:mt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function p(J={}){for(let $ of t){let mt=(J[$.id]||[]).filter(z=>z!=null&&z!==""),q=mt.map(z=>`<span class="mr-ini" style="--bc:${mc(z)}">${gr(Ix(z))}</span>`).join(""),Pt=h[$.id].el;Pt.classList.toggle("backed",mt.length>0),Pt.querySelector(".mr-inis").innerHTML=q,d[$.id].el.querySelector(".mr-tb").innerHTML=q}}p(e);let f=a(".mr-map canvas"),g=f.getContext("2d"),v=null,m=340,u=420;f.width=m,f.height=u;let w=n.points,x=1e9,y=1e9,k=-1e9,A=-1e9;for(let J of w)x=Math.min(x,J[0]),k=Math.max(k,J[0]),y=Math.min(y,J[2]),A=Math.max(A,J[2]);if(n.funfair){let[J,$]=n.funfair.center,mt=n.funfair.radius*.6;x=Math.min(x,J-mt),k=Math.max(k,J+mt),y=Math.min(y,$-mt),A=Math.max(A,$+mt)}for(let J in r.diversions)for(let $ of r.diversions[J])for(let mt of $.path)x=Math.min(x,mt[0]),k=Math.max(k,mt[0]),y=Math.min(y,mt[1]),A=Math.max(A,mt[1]);let I=26,P=Math.min((m-I*2)/(k-x),(u-I*2)/(A-y)),M=(m-(k-x)*P)/2,_=(u-(A-y)*P)/2,b=J=>M+(J-x)*P,L=J=>_+(J-y)*P;function E(){let J=document.createElement("canvas");J.width=m,J.height=u;let $=J.getContext("2d"),mt=(Mt,It,Z,rt)=>{$.beginPath(),Mt.forEach((ot,xt)=>xt?$.lineTo(b(ot[0]),L(ot[1])):$.moveTo(b(ot[0]),L(ot[1]))),$.strokeStyle=It,$.lineWidth=Z,$.lineJoin=$.lineCap="round",$.setLineDash(rt||[]),$.stroke(),$.setLineDash([])},q=(Mt,It)=>{for(let Z of s.features)Z.kind===Mt&&Z.closed&&($.beginPath(),Z.pts.forEach((rt,ot)=>ot?$.lineTo(b(rt[0]),L(rt[1])):$.moveTo(b(rt[0]),L(rt[1]))),$.fillStyle=It,$.fill())},Pt=s.features.filter(Mt=>Mt.kind==="park").sort((Mt,It)=>It.pts.length-Mt.pts.length)[0];$.save(),$.beginPath(),Pt.pts.forEach((Mt,It)=>It?$.lineTo(b(Mt[0]),L(Mt[1])):$.moveTo(b(Mt[0]),L(Mt[1]))),$.fillStyle="#9be27a",$.fill(),$.restore(),q("water","#49a6ff"),q("track","#ff7a5c");for(let Mt in r.diversions)for(let It of r.diversions[Mt])mt(It.path,"#c79a5a",4,[6,6]);let z=[];for(let Mt=0;Mt<=r.LAP1_END_DRAW;Mt+=10)z.push(r.baseXZ(Mt));mt(z,"#1a1420",11),mt(z,"#8fa0c4",6);let R=[];for(let Mt=r.MAP_TO-80;Mt<=r.finishM;Mt+=10)R.push(r.baseXZ(Mt));mt(R,"#1a1420",11),mt(R,"#8fa0c4",6);let at=r.rawExt(r.finishM);return $.fillStyle="#fff",$.strokeStyle="#1a1420",$.lineWidth=3,$.fillRect(b(at[0])-7,L(at[1])-7,14,14),$.strokeRect(b(at[0])-7,L(at[1])-7,14,14),$.fillStyle="#1a1420",$.fillRect(b(at[0])-7,L(at[1])-7,7,7),$.fillRect(b(at[0]),L(at[1]),7,7),J}v=E();function S(){v=E()}let D=0,U=0,O=[],V=a(".mr-banner");function dt(){for(;O.length&&U-O[0].at>2;)O.shift();let J=O.shift();J&&(V.querySelector(".mr-b1 span").textContent=J.text,V.querySelector(".mr-b1").style.background=J.colour,V.querySelector(".mr-b2").textContent="",V.classList.remove("on"),V.offsetWidth,V.classList.add("on"),D=Math.min(1.5,J.secs))}function it(J,$="",mt="#ff3d8b",q=1.4){O.length>=3&&O.shift(),O.push({text:J,colour:mt,secs:q,at:U}),D<=0&&dt()}let N="";function Et(J,$){if(U+=J,D>0?(D-=J,D<=0&&(V.classList.remove("on"),D=-.25)):D<0&&(D=Math.min(0,D+J),D===0&&dt()),!!$){if($.map!=null&&o.classList.toggle("mr-nomap",!$.map),"closing"in $){let mt=$.closing,q=a(".mr-close");q.classList.toggle("on",!!mt),mt&&(q.classList.toggle("hot",!!mt.hot),q.querySelector(".mr-cc").style.background=mt.colour,q.querySelector(".mr-cn").textContent=mt.name,q.querySelector(".mr-ct").textContent=mt.text==="ALONGSIDE!"?"ALONGSIDE!":mt.text)}if($.raceS!=null&&(l.clock.textContent=Ax($.raceS)),$.leaderM!=null&&(l.lap.textContent=$.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,$.leaderM)/1e3).toFixed(1)} KM`),$.order){let mt=c.clientHeight||0,q=(c.querySelector(".mr-row")?.offsetHeight||40)+6,Pt=0;$.order.forEach((z,R)=>{let at=h[z.id];if(!at||(at.el.classList.toggle("off",!!z.hidden),z.hidden))return;Pt===3&&(Pt+=.35),at.el.style.transform=`translateY(${Pt*q}px)`,Pt++;let It=`${R}|${z.gapText}|${z.finished}`+(z.posHtml||"");It!==at.last&&(at.last=It,at.pos.innerHTML=z.posHtml??Sf(R+1),at.gap.textContent=z.gapText,at.el.classList.toggle("lead",R===0&&!z.posHtml),at.el.classList.toggle("fin",!!z.finished))})}if($.tags)for(let mt of $.tags){let q=d[mt.id];q&&(mt.visible!==q.vis&&(q.vis=mt.visible,q.el.style.opacity=mt.visible?"1":"0"),mt.visible&&(q.el.style.transform=`translate(${mt.x}px, ${mt.y}px) translate(-50%,-100%) scale(${mt.scale??1})`,q.p!==mt.pos&&(q.p=mt.pos,q.pos.textContent=mt.pos?Tx(mt.pos):"",q.pos.style.display=mt.pos?"":"none")))}if($.dots){g.clearRect(0,0,m,u),g.drawImage(v,0,0);for(let mt of[...$.dots].reverse())g.beginPath(),g.arc(b(mt.x),L(mt.z),mt.lead?11:9,0,7),g.fillStyle=mt.colour,g.fill(),g.lineWidth=3.5,g.strokeStyle="#1a1420",g.stroke(),mt.focus&&(g.beginPath(),g.arc(b(mt.x),L(mt.z),15,0,7),g.strokeStyle="#fff",g.lineWidth=3,g.stroke());$.camDot&&(g.save(),g.translate(b($.camDot.x),L($.camDot.z)),g.rotate($.camDot.a),g.fillStyle="rgba(26,20,32,.6)",g.beginPath(),g.moveTo(0,0),g.lineTo(-10,-22),g.lineTo(10,-22),g.fill(),g.restore())}}}function Lt(J){o.classList.toggle("mr-dim",!!J)}function C(J){o.classList.toggle("mr-dimtop",!!J)}function W(){D=0,O.length=0,V.classList.remove("on")}function j(J){let $=a(".mr-card3");if(!J){$.classList.remove("on");return}$.querySelector(".mr-lane span").textContent=J.lane??"",$.querySelector(".mr-lane").style.background=J.colour.primary,$.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${J.colour.primary}, ${Px(J.colour.primary,-.25)})`,$.querySelector(".mr-nick").textContent=J.nickname,$.querySelector(".mr-nick").style.color="#fff",$.querySelector(".mr-tagl").textContent=J.tagline||"",$.querySelector(".mr-tagl").style.color=Rx(J.colour.primary)==="#ffffff"?"#fff":"#1a1420",$.classList.remove("on"),$.offsetWidth,$.classList.add("on")}function X(J){let $=a(".mr-count");$.textContent=J,$.classList.remove("pop"),$.offsetWidth,$.classList.add("pop")}function tt(){let J=a(".mr-wipe");J.classList.remove("go"),J.offsetWidth,J.classList.add("go")}function ut(J){let $=o.classList.contains("mr-inreplay");o.classList.toggle("mr-inreplay",!!J),!!J!==$&&tt()}function Rt(J,$=""){a(".mr-photo").classList.toggle("on",!!J),a(".mr-pcap").textContent=$,a(".mr-pcap").style.display=$?"":"none"}function Ft(J,$="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!J),a(".mr-market .mr-m2").textContent=$}function nt(J,{title:$="",kicker:mt="",theme:q=""}={}){let Pt=a(".mr-title");if(J){Pt.querySelector(".mr-t0").textContent=mt,Pt.querySelector(".mr-t1").textContent=$;let z=Pt.querySelector(".mr-t2");z.textContent=q,z.style.display=q?"":"none",Pt.querySelector(".mr-t0").style.display=mt?"":"none"}Pt.classList.toggle("on",!!J)}function pt(J,$){let mt=$[0]-J[0],q=$[1]-J[1],Pt=Math.hypot(mt,q)||1,z=mt/Pt,R=q/Pt,at=J[0]-z*Pt*.6,Mt=J[1]-R*Pt*.6,It=a(".mr-photo .mr-line");It.style.width=`${Pt*2.2}px`,It.style.transform=`translate(${at}px, ${Mt}px) rotate(${Math.atan2(R,z)}rad)`}function B(J){let $=a(".mr-results");if(!J){$.classList.remove("on");return}$.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+J.map(mt=>`<div class="mr-rr"><span class="mr-num">${Sf(mt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${mt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${gr(mt.nickname)}</span><span class="mr-t">${gr(mt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>$.classList.add("on"))}function Ht(){o.remove()}return{root:o,update:Et,setBackedBy:p,replay:ut,wipe:tt,redrawMap:S,showBanner:it,clearBanner:W,setDim:Lt,setDimTop:C,introCard:j,countdown:X,photo:Rt,photoLine:pt,results:B,market:Ft,titleCard:nt,dispose:Ht}}function qi(i){if(i.shortName)return i.shortName;let t=String(i.nickname||i.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),n=e.slice(-2).join(" ");return n.length<=14?n:e.at(-1).slice(0,14)}var Ef=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Wo=new Map;function mc(i){return Wo.has(i)||Wo.set(i,Wo.size),Ef[Wo.get(i)%Ef.length]}var Cx=i=>/\p{Extended_Pictographic}/u.test(String(i));function Ix(i){let t=String(i).trim();if(Cx(t))return[...t][0];let e=t.split(/\s+/).filter(Boolean);return(e.length>1&&e[0].length<=3?e[0][0]+e[1][0]:t[0]||"?").toUpperCase()}function Px(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var Xo=(i,t,e=12,n=!0)=>an(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Tf(i,t,e,n){let s=wn(42),r=new ye;i.add(r);let o=[],a=[],l=(L,E=3)=>(Hn(L,E,void 0,30),L),c=(L,E,S=3)=>we(L,E,{ol:S,olRef:30}),h=[];for(let L=0;L<n.path.length;L++){let E=n.path[L],S=e.anchors.nearestOnRibbon(E[0],E[1]),D=Math.hypot(E[0]-S[0],E[1]-S[1]);h.push({x:(E[0]+S[0])/2,z:(E[1]+S[1])/2,gap:D})}let d=0;h.forEach((L,E)=>{E&&(d+=Math.hypot(L.x-h[E-1].x,L.z-h[E-1].z)),L.s=d});let p=d,f=L=>{let E=0;for(;E<h.length-2&&h[E+1].s<L;)E++;let S=h[E],D=h[E+1],U=Math.max(0,Math.min(1,(L-S.s)/Math.max(1e-6,D.s-S.s))),O=S.x+(D.x-S.x)*U,V=S.z+(D.z-S.z)*U,dt=Math.hypot(D.x-S.x,D.z-S.z)||1;return{x:O,z:V,gap:S.gap+(D.gap-S.gap)*U,tx:(D.x-S.x)/dt,tz:(D.z-S.z)/dt,y:t.heightAt(O,V)}},g=h.filter(L=>L.gap>26),v=g.length?g[0].s:p*.25,m=g.length?g.at(-1).s:p*.75,u=L=>Array.from({length:L},(E,S)=>f(v+(S+.5)/L*(m-v))),w=(L,E,S=0)=>(L.position.set(E.x,E.y-.1,E.z),L.rotation.y=Math.atan2(E.tx,E.tz)+S,r.add(L),L),x={center:f((v+m)/2),rides:[]},y=u(7);{let L=y.slice(1,6).sort((X,tt)=>tt.gap-X.gap)[0],E=new ye,S=17,D=S+2.6,U=new ge(.35,.5,D/Math.cos(.32)+1,8);for(let X of[-1,1])for(let tt of[-1,1]){let ut=c(U,gt("#ffffff"));ut.position.set(X*1.8,D/2,tt*Math.tan(.32)*D/2),ut.rotation.x=-tt*.32,E.add(ut)}let O=c(new Ae(6,1,8,2,.3),gt("#2e9bff"));O.position.y=.5,E.add(O);let V=new ye;V.position.y=D,E.add(V);let dt=c(new Ke(S,.45,8,64),gt("#ff3d8b"));dt.rotation.y=Math.PI/2,dt.position.x=1.2,V.add(dt);let it=c(new Ke(S,.45,8,64),gt("#ff3d8b"));it.rotation.y=Math.PI/2,it.position.x=-1.2,V.add(it);let N=c(new ge(1.3,1.3,3.2,16).rotateZ(Math.PI/2),gt("#ffd23f"));V.add(N);let Et=16,Lt=[],C=[];for(let X=0;X<Et;X++){let tt=X/Et*Math.PI*2,ut=c(new De(.18,S,.18).translate(0,S/2,0),gt("#ffffff"),2);ut.rotation.x=tt,ut.position.x=1.2,V.add(ut);let Rt=ut.clone();Rt.position.x=-1.2,V.add(Rt);let Ft=new ye;Ft.position.set(0,Math.cos(tt)*S,Math.sin(tt)*S),V.add(Ft);let nt=new ye;Ft.add(nt);let pt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][X%5],B=c(new Ae(1.7,1.3,1.5,2,.35),gt(pt));B.position.y=-1.3,nt.add(B);let Ht=c(new $e(1.2,.7,4).rotateY(Math.PI/4),gt("#ffffff"),2);Ht.position.y=-.1,nt.add(Ht),Lt.push(Ft);for(let J=0;J<3;J++){let $=tt+J/3*(Math.PI*2/Et);C.push([1.2,Math.cos($)*S,Math.sin($)*S],[-1.2,Math.cos($)*S,Math.sin($)*S])}}let W=new nn(new Ee(.32,8,6),new En({color:16777215}),C.length),j=new ke;C.forEach((X,tt)=>{j.position.set(...X),j.updateMatrix(),W.setMatrixAt(tt,j.matrix),W.setColorAt(tt,new le(["#fff27a","#ff7ac8","#7affff"][tt%3]))}),V.add(W),w(E,L,0),a.push(X=>{V.rotation.x=X*.18;for(let tt of Lt)tt.rotation.x=-X*.18}),x.rides.push({kind:"wheel",obj:E,pos:new H(L.x,L.y+D,L.z),r:S}),L.used=!0}{let L=y.filter(C=>!C.used).sort((C,W)=>W.gap-C.gap)[0];L.used=!0;let E=new ye,S=Math.min(6.5,L.gap*.28);E.scale.setScalar(1.45);let D=Xo("#ffffff","#ff4f6d",16);o.push(D);let U=c(new ge(S,S+.3,.9,32),gt("#ffffff",{map:D}));U.position.y=.45,E.add(U);let O=new ye;E.add(O);let V=c(new ge(.7,.7,5,16),gt("#ffd23f"));V.position.y=3,O.add(V);let dt=Xo("#ffd23f","#ff3d8b",16);o.push(dt);let it=c(new $e(S+.8,2.8,16),gt("#ffffff",{map:dt}));it.position.y=6.6,O.add(it);let N=c(new ge(S+.8,S+.8,.7,16,1,!0),gt("#2e9bff",{side:Qe}));N.position.y=4.9,O.add(N);let Et=c(new Ee(.5,12,8),gt("#ff3d8b"));Et.position.y=8.2,O.add(Et);let Lt=[];for(let C=0;C<8;C++){let W=C/8*Math.PI*2,j=S*.72,X=new ye;X.position.set(Math.cos(W)*j,0,Math.sin(W)*j),X.rotation.y=-W,O.add(X);let tt=c(new ge(.06,.06,4.2,6),gt("#ffd23f"),1.5);tt.position.y=2.9,X.add(tt);let ut=new ye;X.add(ut);let Rt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][C%4],Ft=c(new Ae(.7,.7,1.6,2,.3),gt(Rt));ut.add(Ft);let nt=c(new Ae(.45,.9,.5,2,.2),gt(Rt));nt.position.set(0,.55,.7),nt.rotation.x=.4,ut.add(nt);let pt=c(new Ae(.45,.45,.8,2,.2),gt(Rt));pt.position.set(0,.95,1.05),ut.add(pt);let B=c(new Ae(.15,.8,.3,1,.06),gt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][C%4]),2);B.position.set(0,.75,.55),B.rotation.x=.4,ut.add(B);let Ht=c(new Ae(.75,.2,.6,1,.08),gt("#ff3d8b"),2);Ht.position.y=.4,ut.add(Ht);for(let[J,$]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let mt=c(new De(.16,.7,.16),gt(Rt),1.5);mt.position.set(J,-.55,$),mt.rotation.x=$>0?-.5:.5,ut.add(mt)}ut.rotation.y=Math.PI/2,Lt.push({horse:ut,ph:C*.8})}w(E,L),a.push(C=>{O.rotation.y=C*.6;for(let W of Lt)W.horse.position.y=2+Math.sin(C*2.2+W.ph)*.35}),x.rides.push({kind:"carousel",obj:E,pos:new H(L.x,L.y+6,L.z),r:S*1.45})}{let L=y.filter(C=>!C.used).sort((C,W)=>W.gap-C.gap)[0];L.used=!0;let E=new ye,S=15;E.scale.setScalar(1.5);let D=Xo("#ff3d3d","#ffffff",10,!1);o.push(D);let U=c(new ge(1.6,2.6,S,16),gt("#ffffff",{map:D}));U.position.y=S/2,E.add(U);let O=c(new $e(2.6,3.4,16),gt("#2e9bff"));O.position.y=S+1.7,E.add(O);let V=c(new ge(.06,.06,2,6),gt("#ffffff"),1.5);V.position.y=S+4.2,E.add(V);let dt=c(new pn(1.2,.7).translate(.6,0,0),gt("#ffd23f",{side:Qe}),1.5);dt.position.y=S+4.8,E.add(dt);let it=[],N=3.2;for(let C=0;C<=160;C++){let W=C/160,j=W*N*Math.PI*2,X=2.6+(1-W)*-.8+1.6;it.push(new H(Math.cos(j)*X,S-1-W*(S-2),Math.sin(j)*X))}let Et=c(new Io(new ir(it),220,.55,8,!1),gt("#ffd23f"));Et.scale.y=1,E.add(Et);let Lt=c(new Ae(3,.3,2,2,.1),gt("#3ddc84"),2);Lt.position.set(it.at(-1).x+1,.15,it.at(-1).z),E.add(Lt),w(E,L),a.push(C=>{dt.rotation.y=Math.sin(C*3)*.4}),x.rides.push({kind:"helter",obj:E,pos:new H(L.x,L.y+12,L.z),r:6})}let k=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],A=[];[...y.filter(L=>!L.used),...u(13).filter((L,E)=>E%2===1)].slice(0,7).forEach((L,E)=>{let[S,D]=k[E%k.length],U=new ye,O=E%2?1:-1,V=c(new Ae(4.2,2.4,3,2,.2),gt("#fff6e0"));V.position.y=1.2,U.add(V);let dt=c(new Ae(4.4,1.1,.8,2,.15),gt(D));dt.position.set(0,.55,1.7),U.add(dt);let it=Xo("#ffffff",D,10);o.push(it);let N=c(new De(4.8,.18,2.4),gt("#ffffff",{map:it}));N.position.set(0,2.9,1.4),N.rotation.x=.32,U.add(N);for(let tt of[-1,1]){let ut=c(new ge(.09,.09,2.6,6),gt("#ffffff"),1.5);ut.position.set(tt*2.2,1.6,2.4),U.add(ut)}let Et=Vn(512,128,(tt,ut,Rt)=>{tt.fillStyle="#1a1420",Ze(tt,0,0,ut,Rt,30),tt.fill(),tt.fillStyle=D,Ze(tt,8,8,ut-16,Rt-16,24),tt.fill(),ln(tt,S,ut/2,Rt/2+4,S.length>11?52:64,"#ffffff","#1a1420",.2)},o),Lt=we(new Ae(4.2,1.05,.3,2,.1),[gt(D),gt(D),gt(D),gt(D),gt("#ffffff",{map:Et}),gt("#ffffff",{map:Et})],{ol:2.5,olRef:30});if(Lt.position.set(0,3.7,.4),U.add(Lt),S==="CANDYFLOSS")for(let tt=0;tt<4;tt++){let ut=c(new sn(.32,1),gt("#ff9bd2"),1.5);ut.position.set(-1.4+tt*.9,1.45,1.75),U.add(ut)}if(S==="HOOK-A-DUCK"){let tt=c(new ge(1.6,1.6,.6,20),gt("#57c7ff"),2);tt.position.set(0,.3,3.6),U.add(tt);let ut=new ye;ut.position.set(0,.7,3.6),U.add(ut);for(let Rt=0;Rt<6;Rt++){let Ft=Rt/6*Math.PI*2,nt=c(new Ee(.22,10,8),gt("#ffd23f"),1.5);nt.position.set(Math.cos(Ft)*1.1,0,Math.sin(Ft)*1.1);let pt=c(new Ee(.14,8,6),gt("#ffd23f"),1.2);pt.position.set(0,.22,.12),nt.add(pt),ut.add(nt)}A.push(ut)}let C=e.anchors.nearestOnRibbon(L.x,L.z),W=Math.atan2(C[0]-L.x,C[1]-L.z),j=Math.min(L.gap*.3,7)*O,X=w(U,{...L,x:L.x+L.tz*j,z:L.z-L.tx*j,y:t.heightAt(L.x+L.tz*j,L.z-L.tx*j)});X.rotation.y=W+(O>0?0:Math.PI)*0}),a.push(L=>{for(let E of A)E.rotation.y=L*.8});{let L=[],E=[],S=[],D=[],U=[];for(let Et of[-1,1]){let Lt=null;for(let C=v-10;C<=m+10;C+=9){let W=f(C),j=(W.gap/2-6)*Et,X=W.x+W.tz*j,tt=W.z-W.tx*j,ut=t.heightAt(X,tt),Rt=new H(X,ut+4.2,tt),Ft=c(new ge(.08,.1,4.3,6),gt("#ffffff"),1.5);if(Ft.position.set(X,ut+2.1,tt),r.add(Ft),Lt)for(let nt=0;nt<=10;nt++){let pt=nt/10,B=Lt.clone().lerp(Rt,pt);B.y-=Math.sin(pt*Math.PI)*.7,L.push(B),nt<10&&(nt%2?(E.push(B.clone()),S.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(nt+Math.round(C))%4])):(D.push({v:B.clone(),a:Math.atan2(-(Rt.z-Lt.z),Rt.x-Lt.x)}),U.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(nt+Math.round(C/9))%5])))}Lt=Rt}}let O=new ke,V=new nn(new Ee(.16,8,6),new En({color:16777215}),E.length);E.forEach((Et,Lt)=>{O.position.copy(Et),O.updateMatrix(),V.setMatrixAt(Lt,O.matrix),V.setColorAt(Lt,new le(S[Lt]))}),r.add(V);let dt=new Be;dt.setAttribute("position",new be([-.32,0,0,.32,0,0,0,-.65,0],3)),dt.setAttribute("normal",new be([0,0,1,0,0,1,0,0,1],3));let it=new nn(dt,gt("#ffffff",{side:Qe}),D.length);D.forEach((Et,Lt)=>{O.position.copy(Et.v),O.rotation.set(0,Et.a,0),O.updateMatrix(),it.setMatrixAt(Lt,O.matrix),it.setColorAt(Lt,new le(U[Lt]))}),r.add(it);let N=[];for(let Et=0;Et+1<L.length;Et++)L[Et].distanceTo(L[Et+1])<3&&N.push(L[Et],L[Et+1]);r.add(new Es(new Be().setFromPoints(N),new Hi({color:3355443}))),a.push(Et=>{V.material.color.setScalar(.85+.15*Math.sin(Et*6))})}{let L=f(v-4),E=Vn(1024,256,(D,U,O)=>{D.fillStyle="#1a1420",Ze(D,0,0,U,O,60),D.fill(),D.fillStyle="#ff3d8b",Ze(D,10,10,U-20,O-20,52),D.fill(),ln(D,"\u2605 FUNFAIR \u2605",U/2,O/2+6,120,"#ffe14d","#1a1420",.18)},o),S=we(new Ae(10,2.4,.4,2,.15),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:E}),gt("#ffffff",{map:E})],{ol:3,olRef:30});S.position.set(L.x,L.y+7.5,L.z),S.rotation.y=Math.atan2(L.tx,L.tz)+Math.PI/2,r.add(S);for(let D of[-1,1]){let U=c(new ge(.25,.3,7.6,8),gt("#ffd23f"));U.position.set(L.x+L.tz*4.5*D,L.y+3.8,L.z-L.tx*4.5*D),r.add(U)}}let P=[];for(let L=0;L<60;L++){let E=v+s()*(m-v),S=f(E),D=(s()-.5)*(S.gap-16),U=S.x+S.tz*D,O=S.z-S.tx*D;P.push({x:U,y:t.heightAt(U,O),z:O,yaw:s()*6.28})}function M(L,E){for(let S of h){if(S.s<v-20||S.s>m+20)continue;let D=Math.max(6,S.gap/2-4);if((L-S.x)**2+(E-S.z)**2<D*D)return!0}return!1}function _(L){for(let E of a)E(L)}function b(){r.traverse(L=>{L.geometry&&L.geometry.dispose()});for(let L of o)L.dispose?.();i.remove(r)}return{group:r,update:_,dispose:b,anchors:x,crowd:P,at:f,s0:v,s1:m,contains:M}}function Af(i,t,e,n,s,{camera:r,offsetX:o=3.2}){let a=new ye;i.add(a);let l=[],c=t.sample(t.finishM+28),h=new H(c.tx,0,c.tz),d=new H(c.rx,0,c.rz),p=new H(c.x,t.heightAt(c.x,c.z),c.z),f=Math.atan2(h.x,h.z);a.position.copy(p),a.rotation.y=f;let g=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let E of g){let S=Vn(256,256,(U,O,V)=>{U.fillStyle="#2e6fe0",U.fillRect(0,0,O,V),U.fillStyle=E.col,U.fillRect(0,0,O,26),ln(U,String(E.place),O/2,V/2+14,170,E.col,"#1a1420",.16)},l),D=we(new Ae(2.25,E.hgt,2,3,.12),[gt("#2e6fe0"),gt("#2e6fe0"),gt(E.col),gt("#2e6fe0"),gt("#ffffff",{map:S}),gt("#2e6fe0")],{ol:3.5,olRef:12});D.position.set(E.x,E.hgt/2,0),a.add(D),E.top=E.hgt}let v=Vn(1024,256,(E,S,D)=>{E.fillStyle="#1a1420",Ze(E,0,0,S,D,50),E.fill(),E.fillStyle="#ff3d8b",Ze(E,10,10,S-20,D-20,42),E.fill(),ln(E,"MARKRUN CHAMPIONS",S/2,D/2+6,80,"#ffffff","#1a1420",.16)},l),m=we(new Ae(9,2.2,.3,2,.1),[gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ff3d8b"),gt("#ffffff",{map:v}),gt("#ffffff",{map:v})],{ol:3,olRef:14});m.position.set(0,5.6,-2.4),a.add(m);for(let E of[-1,1]){let S=we(new ge(.14,.16,5.6,8),gt("#ffffff"),{ol:2,olRef:14});S.position.set(E*4.3,2.8,-2.4),a.add(S)}let u=s.length,w=[];for(let E of s){let S=n[E.runnerId];if(!S)continue;let D=g.find(V=>V.place===E.place),U=D?new H(D.x,D.top,.1):null,O;if(E.place===1?O=["celebrate","jump"]:E.place===2?O=["pose","flex"]:E.place===3?O=["celebrate","fist"]:E.place===u&&u>3?O=["celebrate","collapse"]:O=["celebrate","shrug"],!U){w.push({rr:S,o:E,pose:O});continue}x(S,U,O)}w.forEach((E,S)=>{let D=S%2?1:-1,U=Math.floor(S/2),O=E.pose[1]==="collapse",V=new H(D*(O?4.6:4.2+U*1.6),0,O?1.6:.6+U*.8);x(E.rr,V,E.pose,O?-D*Math.PI/2:0)});function x(E,S,D,U=0){let O=S.clone().applyAxisAngle(new H(0,1,0),f).add(p);S.y===0&&(O.y=t.heightAt(O.x,O.z)+.05),E.root.position.copy(O),E.root.rotation.set(0,f+U,0),E.set(...D),E.setPop(null)}let y=wn(3),k=420,A=new nn(new pn(.16,.26),new En({side:Qe}),k),I=[],P=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let E=0;E<k;E++)I.push({x:(y()-.5)*14,y:y()*12,z:(y()-.5)*8,vy:1+y()*1.6,sp:y()*6,ph:y()*6.28}),A.setColorAt(E,new le(P[E%P.length]));A.frustumCulled=!1,a.add(A);let M=new ke,_=0;function b(E,S){_+=E;for(let dt=0;dt<k;dt++){let it=I[dt];it.y-=it.vy*E,it.y<0&&(it.y+=12),M.position.set(it.x+Math.sin(_*1.3+it.ph)*.5,it.y,it.z+Math.cos(_+it.ph)*.4),M.rotation.set(_*it.sp+it.ph,_*it.sp*.7,it.ph),M.updateMatrix(),A.setMatrixAt(dt,M.matrix)}A.instanceMatrix.needsUpdate=!0;let D=Math.sin(_*.18)*.4,U=15-Math.min(2.5,_*.2),O=new H(Math.sin(D)*U,3+Math.sin(_*.3)*.3,Math.cos(D)*U).applyAxisAngle(new H(0,1,0),f);r.position.copy(p).add(O);let V=new H(o,2.2,0).applyAxisAngle(new H(0,1,0),f).add(p);r.lookAt(V),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function L(){a.traverse(E=>{E.geometry&&E.geometry.dispose()}),A.material.dispose();for(let E of l)E.dispose?.();i.remove(a)}return{update:b,dispose:L,center:p}}var Xe=(i,t)=>{i=i.index?i.toNonIndexed():i;let e=new le(t).convertSRGBToLinear(),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Ge(s,3)),i.getAttribute("uv")&&i.deleteAttribute("uv"),i},mn=(i,t,e,n,s=0,r=1.6)=>(i.scale(r,r,r),i.rotateY(s),i.translate(t,e,n),i);function Rf(i,t,e,n){let s=wn(777),r=new ye;i.add(r);let o=[],a=[],l=(g,v)=>`lawn:${Math.floor(g/140)},${Math.floor(v/140)}`,c=(g,v,m,u=.8,w)=>a.push({x:g,y:t.heightAt(g,v),z:v,yaw:m,scale:u,colour:w,zone:l(g,v)}),{ribbonSamples:h}=e.anchors;function d(g,v,m){for(let u=0;u<40;u++){let w=h[Math.floor(s()*h.length)],x=s()*Math.PI*2,y=g+s()*(v-g),k=w[0]+Math.cos(x)*y,A=w[1]+Math.sin(x)*y;if(!(!e.inPark(k,A)||e.blocked(k,A,m+1)||!e.clearOf(k,A,m)||e.onPath(k,A,m+2)))return e.reserve(k,A,m),{x:k,z:A,y:t.heightAt(k,A),toPath:Math.atan2(w[0]-k,w[1]-A)}}return null}{let g=[],v=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],m=(A,I,P,M,_,b)=>{g.push(mn(Xe(new De(1.6,.2,1.6).translate(0,2,0),_),A,I,P,M));for(let[S,D]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])g.push(mn(Xe(new ge(.08,.08,2,6).translate(S,1,D),"#ffffff"),A,I,P,M));g.push(mn(Xe(new $e(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),A,I,P,M));let L=new De(.9,.12,3.3);L.rotateX(-.62),L.translate(0,1.05,2.1),g.push(mn(Xe(L,b),A,I,P,M));let E=new De(.8,.08,2.4);E.rotateX(1),E.translate(0,1,-1.3),g.push(mn(Xe(E,"#ffffff"),A,I,P,M))},u=(A,I,P,M,_)=>{for(let b of[-1.8,1.8])for(let L of[-.6,.6]){let E=new ge(.08,.08,2.8,6);E.rotateX(L>0?.22:-.22),E.translate(b,1.35,L*.5),g.push(mn(Xe(E,_),A,I,P,M))}g.push(mn(Xe(new ge(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),_),A,I,P,M));for(let b of[-.8,.8]){g.push(mn(Xe(new De(.6,.08,.35).translate(b,.75,0),"#22202c"),A,I,P,M));for(let L of[-.25,.25])g.push(mn(Xe(new ge(.02,.02,1.9,4).translate(b+L,1.7,0),"#888888"),A,I,P,M))}},w=(A,I,P,M)=>{let _=new Ee(1.6,8,5,0,Math.PI*2,0,Math.PI/2);g.push(mn(Xe(_,M),A,I,P)),g.push(mn(Xe(new ge(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),A,I,P))},x=(A,I,P,M,_)=>{g.push(mn(Xe(new ge(1.5,1.5,.25,16).translate(0,.35,0),M),A,I,P)),g.push(mn(Xe(new ge(.1,.1,1,6).translate(0,.9,0),_),A,I,P)),g.push(mn(Xe(new Ke(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),_),A,I,P))},y=(A,I,P,M,_)=>{g.push(mn(Xe(new Ee(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),_),A,I,P,M)),g.push(mn(Xe(new Ee(.3,8,6).translate(0,1.4,.55),_),A,I,P,M)),g.push(mn(Xe(new ge(.12,.12,.6,6).translate(0,.3,0),"#888888"),A,I,P,M))},k=[m,u,w,x,y];for(let A of n.features){if(A.kind!=="playground"||!A.closed)continue;let I=Ln(A.pts),P=(I[2]-I[0])*(I[3]-I[1]),M=Math.max(1,Math.min(9,Math.round(P/380))),_=[];for(let b=0,L=0;b<M&&L<80;L++){let E=I[0]+3+s()*(I[2]-I[0]-6),S=I[1]+3+s()*(I[3]-I[1]-6);if(!Is(A.pts,E,S)||_.some(it=>Math.hypot(it[0]-E,it[1]-S)<8.5))continue;_.push([E,S]),b++;let D=t.heightAt(E,S)-.05,U=s()*6.28,O=v[Math.floor(s()*v.length)],V=v[Math.floor(s()*v.length)],dt=k[(b+_.length+Math.floor(s()*5))%k.length];dt===m||dt===u||dt===y?dt(E,D,S,U,O,V):dt(E,D,S,O,V),s()<.6&&c(E+2.5,S+1.5,s()*6,.55)}}if(g.length){let A=we(tn(g),gt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(A)}}{let g=an(64,64,(P,M,_)=>{for(let b=0;b<6;b++)for(let L=0;L<6;L++)P.fillStyle=(b+L)%2?"#ffffff":"#c8c8c8",P.fillRect(b*M/6,L*_/6,M/6+1,_/6+1)});o.push(g);let v=new pn(2.8,2.2);v.rotateX(-Math.PI/2);let m=[],u=[],w=[],x=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let P=0;P<90;P++){let M=d(12,70,3);if(!M)continue;let _=s()*6.28;m.push({x:M.x,y:M.y+.06,z:M.z,ry:_}),u.push(x[P%x.length]),w.push({x:M.x+Math.cos(_)*.7,y:M.y+.05,z:M.z-Math.sin(_)*.7,ry:_});let b=1+Math.floor(s()*3);for(let L=0;L<b;L++){let E=_+L/b*Math.PI*2+.5,S=M.x+Math.cos(E)*.9,D=M.z-Math.sin(E)*.9;c(S,D,M.toPath+(s()-.5),.62+s()*.15)}}let y=new nn(v,gt("#ffffff",{map:g,polygonOffset:!0,polygonOffsetFactor:-1}),m.length),k=new ke;m.forEach((P,M)=>{k.position.set(P.x,P.y,P.z),k.rotation.set(0,P.ry,0),k.updateMatrix(),y.setMatrixAt(M,k.matrix),y.setColorAt(M,new le(u[M]))}),y.receiveShadow=!0,y.computeBoundingSphere(),r.add(y),e.registerInstanced(y,m);let A=tn([Xe(new Ae(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Xe(new Ke(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),I=new nn(A,gt("#ffffff",{vertexColors:!0}),w.length);w.forEach((P,M)=>{k.position.set(P.x,P.y,P.z),k.rotation.set(0,P.ry,0),k.updateMatrix(),I.setMatrixAt(M,k.matrix)}),I.castShadow=!0,I.computeBoundingSphere(),Hn(I,1.6,void 0,20),r.add(I),e.registerInstanced(I,w)}{let g=tn([new kn(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new Ee(.22,10,8).translate(0,.72,.42),new Ee(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new Ee(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new Ee(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([P,M])=>new ge(.06,.06,.32,6).translate(P,.16,M)),new ge(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(P=>P.index?P.toNonIndexed():P).map(P=>(P.deleteAttribute("uv"),P))),v=tn([Xe(new Ee(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Xe(new Ee(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([P,M])=>Xe(new Ke(.2,.06,6,12).rotateY(Math.PI/2).translate(P,.22,M),"#22202c")),Xe(new ge(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),m=[],u=[],w=[],x=[],y=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let P=0;P<64;P++){let M=d(8,60,1.6);if(!M)continue;let _=s()*6.28;c(M.x,M.z,_,.82);let b=Math.sin(_),L=Math.cos(_);P%4===3?(w.push({x:M.x+b*1.4,y:M.y,z:M.z+L*1.4,ry:_,s:1}),x.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][P%4])):(m.push({x:M.x+b*1.6+L*.8,y:M.y,z:M.z+L*1.6-b*.8,ry:_+(s()-.5)*.8,s:.8+s()*.6}),u.push(y[Math.floor(s()*y.length)]))}let k=new ke,A=(P,M,_,b)=>{let L=new nn(P,M,_.length);return _.forEach((E,S)=>{k.position.set(E.x,E.y,E.z),k.rotation.set(0,E.ry,0),k.scale.setScalar(E.s),k.updateMatrix(),L.setMatrixAt(S,k.matrix),b&&L.setColorAt(S,new le(b[S]))}),L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),Hn(L,2,void 0,18),r.add(L),e.registerInstanced(L,_),L},I=m.length?A(g,gt("#ffffff"),m,u):null;w.length&&A(v,gt("#ffffff",{vertexColors:!0}),w,x)}{let g=[],v=[],m=[],u=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let I=0;I<26;I++){let P=d(9,40,3.2);if(!P)continue;let M=2.2+s()*.8;g.push({x:P.x,y:P.y-.05,z:P.z,s:M});let _=[u[I%u.length],u[(I+2)%u.length]];for(let b=0;b<60;b++){let L=s()*6.28,E=Math.sqrt(s())*(M-.25);v.push({x:P.x+Math.cos(L)*E,y:P.y+.25,z:P.z+Math.sin(L)*E,s:.8+s()*.5}),m.push(_[b%2])}}let w=new ke,x=tn([Xe(new ge(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Xe(new Ke(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),y=new nn(x,gt("#ffffff",{vertexColors:!0}),g.length);g.forEach((I,P)=>{w.position.set(I.x,I.y,I.z),w.scale.set(I.s,1,I.s),w.updateMatrix(),y.setMatrixAt(P,w.matrix)}),y.receiveShadow=!0,y.computeBoundingSphere(),Hn(y,1.6,void 0,20),r.add(y),e.registerInstanced(y,g);let k=new sn(.24,0);k.computeVertexNormals();let A=new nn(k,gt("#ffffff"),v.length);w.scale.setScalar(1),v.forEach((I,P)=>{w.position.set(I.x,I.y,I.z),w.scale.setScalar(I.s),w.updateMatrix(),A.setMatrixAt(P,w.matrix),A.setColorAt(P,new le(m[P]))}),A.computeBoundingSphere(),r.add(A),e.registerInstanced(A,v)}{let g=t.sample(55),v=-1,m=We/2+9,u=g.x+g.rx*m*v,w=g.z+g.rz*m*v;e.blocked(u,w,3)&&(u=g.x-g.rx*m*v,w=g.z-g.rz*m*v);let x=new ye,y=an(128,16,(S,D,U)=>{for(let O=0;O<8;O++)S.fillStyle=O%2?"#fff":"#3a9d5d",S.fillRect(O*16,0,16,U)});o.push(y),x.add(we(new Ae(3.2,1.6,1.8,3,.25),gt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let k=we(new Ae(3.4,.15,2,2,.05),gt("#f4e3c0"),{ol:2,olRef:20});k.position.y=2,x.add(k);let A=we(new De(3.8,.15,2.4),gt("#ffffff",{map:y}),{ol:2.5,olRef:20});A.position.y=3.2,x.add(A);for(let S of[-1.6,1.6]){let D=we(new ge(.06,.06,1.2,6),gt("#ffffff"),{ol:1.5});D.position.set(S,2.6,.9),x.add(D)}for(let S of[-1.1,1.1]){let D=we(new ge(.4,.4,.2,14).rotateZ(Math.PI/2),gt("#22202c"),{ol:2});D.position.set(S,.4,.95),x.add(D);let U=D.clone();U.position.z=-.95,x.add(U)}let I=we(new ge(.75,.55,1.3,16),gt("#ffffff"),{ol:3,olRef:20});I.position.y=4,x.add(I);let P=we(new ge(.82,.82,.22,16),gt("#5a3a24"),{ol:2.5,olRef:20});P.position.y=4.75,x.add(P);let M=we(new ge(.72,.62,.45,16),gt("#c98a4a"),{ol:2,olRef:20});M.position.y=3.95,x.add(M);let _=Vn(512,128,(S,D,U)=>{S.fillStyle="#1a1420",Ze(S,0,0,D,U,28),S.fill(),S.fillStyle="#ffd23f",Ze(S,6,6,D-12,U-12,22),S.fill(),ln(S,"FLAT WHITES",D/2,U/2+4,62,"#ffffff","#1a1420",.2)},o),b=new ze(new pn(2.8,.7),gt("#ffffff",{map:_}));b.position.set(0,1.4,.92),x.add(b);let L=b.clone();L.rotation.y=Math.PI,L.position.z=-.92,x.add(L);let E=Math.atan2(g.x-u,g.z-w);x.position.set(u,t.heightAt(u,w),w),x.rotation.y=E,r.add(x);for(let S=0;S<5;S++){let D=u+Math.sin(E)*(2.2+S*1.1)+Math.cos(E)*(S%2?.3:-.3),U=w+Math.cos(E)*(2.2+S*1.1);c(D,U,E+Math.PI,.8)}e.anchors.coffeeCart=x}function p(){}function f(){r.traverse(g=>{g.geometry&&g.geometry.dispose()});for(let g of o)g.dispose?.();i.remove(r)}return{group:r,crowd:a,update:p,dispose:f}}var xr=8.5;function gc(i,t={}){let{course:e,park:n,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(G=>(o[G]||[]).length),l=[...s?.runners||[]].sort((G,Y)=>(G.lane??0)-(Y.lane??0)),c=!1,h=new mo({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});h.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),h.outputColorSpace=fn,h.toneMapping=Yn,h.shadowMap.enabled=!0,h.shadowMap.type=Zl;let d=h.domElement;d.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(d);let p=new xo;p.fog=new go(13496063,700,3200);let f=new _n(45,16/9,.3,9e3),g=new Uo(14676223,9420912,1.45);p.add(g);let v=new No(16774109,2.3),m=new H(-.45,.82,.38).normalize();v.castShadow=!0,v.shadow.mapSize.set(2048,2048),v.shadow.bias=-4e-4,v.shadow.normalBias=.03,v.shadow.radius=3,p.add(v),p.add(v.target);let u=of(e,n,r),w=hf(p,u,{course:e,park:n}),x=null,y=null,k=df(u,w.anchors.crowdZones,5,w.onPath,w.blocked),A=Rf(p,u,w,n);k.push(...A.crowd);let I=new Map;for(let G of k){let Y=G.zone??"x";I.has(Y)||I.set(Y,[]),I.get(Y).push(G)}let P=[...I.values()].map(G=>uc(p,G)),M={update:(...G)=>{P.forEach(Y=>Y.update(...G)),y?.update(...G)},setMask:G=>P.forEach(Y=>Y.setMask(G)),dispose:()=>{P.forEach(G=>G.dispose()),y?.dispose()}},_={};for(let G of l){let Y=xf(G);_[G.id]=Y,p.add(Y.root)}let b=l.map(G=>G.id),L=Object.fromEntries(l.map(G=>[G.id,G])),E=wf(i,{runners:l,backedBy:o,course:e,park:n,C:u}),S=null,D=null,U=[],O=null,V=[],dt=!1;function it(G){if(r=G||null,u.setPlan(r),c=!!r?.runners?.some(Y=>Y.diversions&&Y.diversions.length),x&&(x.dispose(),x=null),y&&(y.dispose(),y=null),c){let Y=r.runners.find(Nt=>Nt.diversions?.length).id;x=Tf(p,u,w,u.diversions[Y][0]),w.clearArea(x.contains),P.forEach(Nt=>Nt.hideWhere(x.contains)),y=uc(p,x.crowd)}if((c||dt)&&(w.redrawGround(),E.redrawMap()),dt=c,V=[],r){D=vf(r,u,l),U=dc({plan:r,sim:D,backedIds:a,hasDiversion:c,C:u,world:w,funfair:x}),O=bf({camera:f,C:u,sim:D,world:w,funfair:x});for(let Y of r.events||[])V.push({at:Y.broadcastS,evt:{...Y,kind:"event"}});for(let Y of r.commentary||[])V.push({at:Y.broadcastS,evt:{...Y,kind:"commentary"}});V.sort((Y,Nt)=>Y.at-Nt.at)}else D=null,U=[],O=null}let N="idle",Et=!1,Lt=!1,C=-xr,W=0,j=null,X=null,tt=0,ut=!1,Rt=!1,Ft=null,nt=!1,pt=1,B=0,Ht=.35,J=3.2,$=0,mt=0,q=!1,Pt=0,z=Math.max(.05,Number(t.speed)||1),R=null,at=0,Mt=new Set;function It(){let G=i.clientWidth||window.innerWidth,Y=i.clientHeight||window.innerHeight;h.setSize(G,Y,!1),f.aspect=G/Y,f.updateProjectionMatrix(),cc.uRes.value.set(G*h.getPixelRatio(),Y*h.getPixelRatio())}let Z=typeof ResizeObserver<"u"?new ResizeObserver(It):null;Z?.observe(i),window.addEventListener("resize",It),It();let rt={};{let G=b.length;b.forEach((Y,Nt)=>{let At=(Nt-(G-1)/2)*Math.min(1.25,(We-1.6)/Math.max(1,G-1)),Bt=u.sample(0);rt[Y]={x:Bt.x+Bt.rx*At-Bt.tx*1.2,z:Bt.z+Bt.rz*At-Bt.tz*1.2,yaw:Math.atan2(Bt.tx,Bt.tz)},rt[Y].y=u.heightAt(rt[Y].x,rt[Y].z)+.16})}function ot(G="idle"){for(let Y of b){let Nt=rt[Y],At=_[Y];At.root.position.set(Nt.x,Nt.y,Nt.z),At.root.rotation.set(0,Nt.yaw,0),G&&At.set(G),At.setPop(null)}}ot(),it(r);let xt=(G,Y)=>G===1?"jump":G===2||G===3?"fist":G===Y?"collapse":"kneel";function Tt(G,Y){let Nt=D.stateAt(Math.max(0,G)),At=b.length;for(let Bt of b){let te=Nt.byId[Bt],Jt=_[Bt];if(G<0)continue;Jt.root.position.set(te.x,te.y,te.z);let re=Math.atan2(te.tx,te.tz)+(te.finished&&te.post>2.4&&!(te.place>3&&te.post<4)?Math.PI*(te.place%2?1:-1)*.92:0),ee=Jt.root.rotation.y,pe=re-ee;for(;pe>Math.PI;)pe-=2*Math.PI;for(;pe<-Math.PI;)pe+=2*Math.PI;Jt.root.rotation.y=ee+pe*Math.min(1,Y*10);let ve={speed:te.vRace,rate:Nt.rate*pt,slope:te.slope},Xt=u.diversions[Bt]?.[0];if(Xt&&Jt.setProp("floss",te.m>Xt.toM-20?Math.max(.25,1-(te.m-Xt.toM)/3500):0),te.finished){let ne=te.place;te.post<1.6?(Jt.set("run"),ve.speed=3,ve.rate=1.2):ne>3&&te.post<4?Jt.set("trudge"):Jt.set("celebrate",xt(ne,At)),Jt.setPop(null)}else if(te.div>.3){Jt.set("distracted");let ne=x?.anchors.rides.reduce((Ce,me)=>!Ce||me.pos.distanceToSquared(Jt.root.position)<Ce.pos.distanceToSquared(Jt.root.position)?me:Ce,null);if(ne){let me=Math.atan2(ne.pos.x-te.x,ne.pos.z-te.z)-Jt.root.rotation.y;for(;me>Math.PI;)me-=2*Math.PI;for(;me<-Math.PI;)me+=2*Math.PI;ve.lookYaw=Math.max(-1.3,Math.min(1.3,me))}Jt.setPop(["!","heart","floss"][Math.floor((te.m-te.divInfo.fromM)/120)%3])}else{Jt.set("run"),Jt.setPop(null);let ne=u.geoOf(te.m);ve.effort=te.m>4300?.4+(te.m-4300)/700*.5:ne>1700&&ne<2060?.7:.1}Jt.update(Y*pt,ve)}}let St=new H,Ut=null,qt=-1,se=()=>{if(qt!==W||!Ut){let G=d.getBoundingClientRect();Ut=[...E.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].filter(Y=>!E.root.classList.contains("mr-dim")&&!(E.root.classList.contains("mr-dimtop")&&!Y.classList.contains("mr-map"))).map(Y=>{let Nt=Y.getBoundingClientRect(),At=Nt.right,Bt=Nt.bottom;if(Y.classList.contains("mr-tower")){Bt=Nt.top+Y.querySelectorAll(".mr-row").length*((Y.querySelector(".mr-row")?.offsetHeight||40)+6);for(let te of Y.querySelectorAll(".mr-badges")){let Jt=te.getBoundingClientRect();Jt.width&&(At=Math.max(At,Jt.right))}}return{left:Nt.left-G.left,right:At-G.left,top:Nt.top-G.top,bottom:Bt-G.top}}),qt=W}return Ut};function $t(G,Y=!0){f.updateMatrixWorld();let Nt=d.clientWidth,At=d.clientHeight,Bt=[];for(let Xt of b){let ne=_[Xt];St.set(ne.root.position.x,ne.root.position.y+ne.height+.55,ne.root.position.z);let Ce=St.distanceTo(f.position);St.project(f);let me=Y&&St.z<1&&St.z>-1&&Math.abs(St.x)<.95&&St.y<.82&&St.y>-.62&&Ce>9.5&&Ce<(mr.has(O?.shot?.type)?450:150);ne.height/Math.max(.1,Ce)*(At/(2*Math.tan(Ei.degToRad(f.fov)/2)))>At*.3&&(me=!1),Bt.push({id:Xt,x:(St.x*.5+.5)*Nt,y:(-St.y*.5+.5)*At,visible:me,pos:G?G.order.indexOf(Xt)+1:0,scale:Math.max(.7,Math.min(1.15,30/Ce)),dist:Ce})}let te=N==="race"&&mr.has(O?.shot?.type)&&!O?.gliding,Jt=G?G.order:b,re=new Set([...Jt.slice(0,3),...a]);Bt.sort((Xt,ne)=>Jt.indexOf(Xt.id)-Jt.indexOf(ne.id));let ee=[];for(let Xt of Bt){if((!te||!re.has(Xt.id))&&(Xt.visible=!1),!Xt.visible)continue;let ne=(qi(L[Xt.id]).length*10+50+(o[Xt.id]?.length||0)*18)*Xt.scale,Ce=26*Xt.scale,me=10,Ne={l:Xt.x-ne/2,r:Xt.x+ne/2,t:Xt.y-Ce,b:Xt.y+6};if(ee.some(He=>Ne.l<He.r+4&&Ne.r>He.l-4&&Ne.t<He.b+2&&Ne.b>He.t-2)){Xt.visible=!1;continue}if(se().some(He=>Ne.l<He.right+me&&Ne.r>He.left-me&&Ne.t<He.bottom+me&&Ne.b>He.top-me)){Xt.visible=!1;continue}ee.push(Ne)}if(!G)return N!=="race"?{tags:Bt,closing:null}:{tags:Bt,raceS:0,leaderM:0,map:!1,closing:null,order:b.map(Xt=>({id:Xt,hidden:!0,gapText:""}))};let pe=G.leader.m>=4e3,ve=G.order.map((Xt,ne)=>{let Ce=G.byId[Xt],me=ne<3||a.includes(Xt),Ne=pe||Ce.finished?Ce.gapText:"";if(!Ne&&a.includes(Xt)&&ne>0&&!Ce.finished){let He=G.byId[G.order[ne-1]],je=G.raceS-Jn(D.byId[G.order[ne-1]].progress,Ce.m);!He.finished&&je>=0&&je<=5&&(Ne=`\u2191${je.toFixed(1)}s`)}return{id:Xt,gapText:Ne,finished:Ce.finished,hidden:!me}});return{raceS:G.raceS,leaderM:G.leader.m,tags:Bt,order:ve,map:mr.has(O?.shot?.type),closing:ce(G),dots:G.order.map((Xt,ne)=>({x:G.byId[Xt].x,z:G.byId[Xt].z,colour:L[Xt].colour.primary,lead:ne===0,focus:O?.shot?.ids?.includes(Xt)}))}}let de=null;function ce(G){if(!a.length||Ft||tt>0||R!=null)return de=null,null;let Y=(Xt,ne)=>G.raceS-Jn(D.byId[Xt].progress,G.byId[ne].m),Nt=[];G.order.forEach((Xt,ne)=>{if(ne===0||G.byId[Xt].finished||G.byId[G.order[ne-1]].finished)return;let Ce=G.order[ne-1],me=a.includes(Xt),Ne=a.includes(Ce);if(!me&&!Ne)return;let He=Y(Ce,Xt);He>=0&&He<=5&&Nt.push({key:`${Ce}>${Xt}`,ahead:Ce,behind:Xt,g:He,who:me?Xt:Ce,role:me?"chase":"hunted"})});let At=de&&Nt.find(Xt=>Xt.key===de.key);if(!At&&de){let[Xt,ne]=de.key.split(">"),Ce=!G.byId[ne].finished&&G.order.indexOf(ne)===G.order.indexOf(Xt)+1?Y(Xt,ne):99;Ce<=5.5&&(At={...de,g:Ce})}let Bt=Nt.sort((Xt,ne)=>Xt.g-ne.g)[0];if((!At||Bt&&Bt.key!==At.key&&Bt.g<At.g*.6)&&(At=Bt?{...Bt,g0:Bt.g}:null),!At)return de=null,null;(!de||de.key!==At.key)&&(de={...At,g0:At.g0??At.g});let te=de.g0,Jt=At.g,re=qi(L[At.who]),ee=L[At.who].colour.primary;if(Jt<.5)return{text:"ALONGSIDE!",name:re,colour:ee,hot:!0};let pe=Jt<te-.15,ve=At.role==="chase"?pe?"closing":"chasing":pe?"under pressure":"holding on";return{name:re,colour:ee,text:pe?`${ve}: ${te.toFixed(1)} s \u2192 ${Jt.toFixed(1)} s`:`${ve}: ${Jt.toFixed(1)} s`,hot:Jt<1.5}}let Re=new Ts(.78,1,48);Re.rotateX(-Math.PI/2);let st={};function Yt(){for(let G of b){let Y=st[G]||(st[G]=new ye);Y.parent||_[G].root.add(Y);for(let Nt of[...Y.children])Y.remove(Nt),Nt.material.dispose();(o[G]||[]).forEach((Nt,At)=>{let Bt=new ze(Re,new En({color:mc(Nt),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));Bt.scale.setScalar(1+At*.32),Bt.position.y=.06+At*.01,Bt.renderOrder=2,Y.add(Bt)})}}function Ct(){for(let G of b){let Y=st[G];if(!Y||!Y.children.length)continue;let Nt=f.position.distanceTo(_[G].root.position);Y.scale.setScalar(Ei.clamp(Nt*.016,.9,3.2))}}Yt();function zt(G,Y){let Nt=Math.max(30,Math.min(220,Y)),At=v.shadow.camera;At.right!==Nt&&(At.left=-Nt,At.right=Nt,At.top=Nt,At.bottom=-Nt,At.near=1,At.far=900,At.updateProjectionMatrix());let Bt=2*Nt/v.shadow.mapSize.x,te=Math.round(G.x/Bt)*Bt,Jt=Math.round(G.z/Bt)*Bt;v.target.position.set(te,G.y,Jt),v.position.set(te+m.x*400,G.y+m.y*400,Jt+m.z*400)}let Kt=["wave","flex","point","stretch","spin","bow"];function jt(G,Y){let Nt=[...G.personality||G.id].reduce((At,Bt)=>At+Bt.charCodeAt(0),Y);return Kt[Nt%Kt.length]}function _e(G,Y={}){N="intro",E.setDim(!0),E.clearBanner(),E.photo(!1),E.results(null),Pe(),E.market(!1),R=null,Et=!1,d.style.filter="",ot("idle");let Nt=Y.perRunnerS??t.introPerRunnerS??4.2,At=Y.flyoverS??7;return X={t:0,idx:-1,per:Nt,fly:At,onDone:G,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:At,perRunnerS:Nt,runners:b.slice()}}function T(G){let Y=X;if(!Y)return;Y.t+=G;let Nt=rt;if(Y.idx===-1){!Y.title&&Y.t>.8&&(Y.title=!0,et(!0));let ve=Math.min(1,Y.t/Y.fly),Xt=pc(ve),ne=u.sample(0),Ce=new H(170,0,-40),me=2.2-Xt*2,Ne=520-Xt*470,He=new H(Ce.x+Math.cos(me)*Ne,190-Xt*170,Ce.z+Math.sin(me)*Ne),je=new H(ne.x+ne.tx*22+ne.rx*10,ne.y+9,ne.z+ne.tz*22+ne.rz*10);He.lerp(je,Xt*Xt);let cn=Ce.clone().setY(15).lerp(new H(ne.x,ne.y+1,ne.z),Math.min(1,Xt*1.2));f.position.copy(He),f.lookAt(cn),_t(50),ve>=1&&Q();return}if(Y.group){let ve=u.sample(0),Xt=(Y.t-Y.segStart)/3;if(f.position.set(ve.x+ve.tx*(9+Xt*2)+ve.rx*2,ve.y+2.2+Xt*.6,ve.z+ve.tz*(9+Xt*2)+ve.rz*2),f.lookAt(ve.x,ve.y+1.3,ve.z),_t(46),Xt>=1&&!Y.done){Y.done=!0,E.introCard(null);let ne=Y.onDone;X=null,N="idle",ne?.()}return}let At=b[Y.idx],Bt=Nt[At],te=Y.t-Y.segStart,Jt=new H(Math.sin(Bt.yaw),0,Math.cos(Bt.yaw)),re=new H(-Jt.z,0,Jt.x),ee=_[At].height,pe=3.2+ee*.6-Math.min(.6,te*.12);f.position.set(Bt.x+Jt.x*pe+re.x*.9,Bt.y+ee*.62,Bt.z+Jt.z*pe+re.z*.9),f.lookAt(Bt.x-re.x*1.25,Bt.y+ee*.55,Bt.z-re.z*1.25),_t(40),!Y.waiting&&te>=Y.per&&Q(),Y.waiting==="released"&&te>=Y.minSeg&&Q()}function et(G){let Y=s||{};E.titleCard(G,{title:Y.title||"MARKRUN",kicker:Y.number?`ROUND ${Y.number}`:"LIVE FROM FINSBURY PARK",theme:Y.theme?typeof Y.theme=="string"?Y.theme:Y.theme.label||Y.theme.name||"":""})}function Q(){let G=X;G.idx===-1&&et(!1),G.idx++,G.segStart=G.t;for(let Bt of b)_[Bt].set("idle");if(G.idx>=b.length){G.group=!0;for(let Bt of b)_[Bt].set("pose","point");E.introCard(null),setTimeout(()=>{},0);for(let Bt of b)_[Bt].set("wave");return}let Y=b[G.idx];_[Y].set(jt(L[Y],G.idx)==="wave"?"wave":"pose",jt(L[Y],G.idx)),t.introCards!==!1&&E.introCard(L[Y]),G.waiting=!1;let At=t.onIntroRunner?.(Y,G.idx);At&&typeof At.then=="function"&&(G.waiting=!0,At.then(()=>{X===G&&(G.waiting="released")},()=>{X===G&&(G.waiting="released")}))}function lt(G,Y){if(!D)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");N="race",E.setDim(!1),E.results(null),Pe(),X=null,E.introCard(null),E.titleCard(!1),E.market(!1),R=null,Et=!1,d.style.filter="",C=-xr,$=0,mt=0,tt=0,ut=!1,Rt=!1,Ft=null,nt=!1,pt=1,E.replay(!1),Mt.clear(),q=!!t.skipRaceTitle,E.setDimTop(!1),j={onEvent:G,onDone:Y},ot("idle"),O.reset()}let vt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function ft(G){switch(G.type){case"lead_change":return["LEAD CHANGE","","#ff3d8b"];case"overtake":return a.includes(G.by)||a.includes(G.on)?["OVERTAKE","","#2e6fe0"]:null;case"hill":return["THE HILL","","#3aa845"];case"lap":return["LAP 2","","#2e6fe0"];case"final_stretch":return["FINAL STRETCH","","#ff8a1f"];case"diversion":return Mt.has("div")?null:(Mt.add("div"),["DISTRACTED!","","#b04bff"]);case"finish":return G.place===1&&!D.photoFinish?["WINNER","","#ffb000"]:null;default:return null}}function Dt(G){if(tt>0){tt-=G,tt<=0&&(E.photo(!1),d.style.filter="",w.anchors.finishArch.visible=!0,K());return}if(Ft){bt(G);return}let Y=C;for(pt=Vt(C),C+=G*pt,C<-4.2&&!q&&(q=!0,et(!0),E.setDimTop(!0)),C>=-3.6&&q===!0&&(q="done",et(!1),E.setDimTop(!1));mt<vt.length&&C>=vt[mt][0];){let[Nt,At]=vt[mt++];if(E.countdown(At),j?.onEvent?.({kind:"countdown",n:At==="GO!"?0:Number(At),text:At,broadcastS:Nt}),Nt===-3)for(let Bt of b)_[Bt].set("ready")}for(;$<V.length&&C>=V[$].at;){let Nt=V[$++].evt;try{j?.onEvent?.(Nt)}catch(At){console.error(At)}if(Nt.kind==="event"){let At=ft(Nt);At&&E.showBanner(...At)}}if(D.photoFinish&&!ut&&C>=D.firstFinishB){ut=!0,C=D.firstFinishB,tt=t.photoFreezeS??1.4;{let[Nt,At]=D.finishOrder;E.photo(!0,`${qi(L[Nt])} or ${qi(L[At])}? Checking the camera...`)}d.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",j?.onEvent?.({kind:"photo_finish",broadcastS:C,ids:D.finishOrder.slice(0,2)})}!nt&&!Ft&&C>=D.firstFinishB+1.1&&K(),!Rt&&C>=D.lastFinishB+3.5&&(Rt=!0,j?.onDone?.())}function Vt(G){if(!D||t.finishSlowMo===!1)return 1;let Y=Math.abs(G-D.firstFinishB),Nt=Y<1?1:Y<1.6?1-Ot((Y-1)/.6):0;return 1-(1-Ht)*Nt}function Ot(G){return G=Math.max(0,Math.min(1,G)),G*G*(3-2*G)}function K(){if(nt||t.finishReplay===!1){nt=!0,Wt();return}let G=D.byId[D.finishOrder[0]];Ft={t:0,b0:Math.max(0,Ai(r.timeMap,Jn(G.progress,4940))),b1:D.firstFinishB+.6,resume:C},E.replay(!0)}function bt(G){Ft.t+=G,Ft.t>=J&&(Ft=null,nt=!0,E.replay(!1),O.reset(!0),Wt())}function wt(){let G=Math.min(1,Ft.t/J);return Ft.b0+(Ft.b1-Ft.b0)*(1-Math.pow(1-G,1.7))}function Wt(){let G=D.finishOrder[0],Y={kind:"winner_replay_done",winnerId:G,photoFinish:!!D.photoFinish,broadcastS:C};try{j?.onEvent?.(Y)}catch(Nt){console.error(Nt)}if(t.onWinnerStamp)try{t.onWinnerStamp({winnerId:G,photoFinish:!!D.photoFinish})}catch(Nt){console.error(Nt)}else E.showBanner("WINNER","","#ffb000")}function ae(G){o=G||{},a=Object.keys(o).filter(Y=>(o[Y]||[]).length),E.setBackedBy(o),Yt()}function he(G,Y=1.2){if(!D)throw new Error("createRaceView: seek in a race needs a plan");G=Math.max(-xr,Math.min(D.lastFinishB+3.5,Number(G)||0)),N="race",X=null,Pe(),j=j||{},E.setDim(!1),E.introCard(null),E.results(null),E.photo(!1),E.market(!1),E.clearBanner(),E.titleCard(!1),E.setDimTop(!1),d.style.filter="",w.anchors.finishArch.visible=!0,R=null,q=G>=-3.6?"done":G<-4.2?!1:"done",O.reset();let Nt=Math.round(Y*30);for(let At=Nt;At>=0;At--){if(C=G-At/30,C<-3)for(let Bt of b)_[Bt].set("idle");else if(C<0)for(let Bt of b)_[Bt].set("ready");if(At>0)if(O.update(C,1/30,U),C>=0)Tt(C,1/30);else for(let Bt of b)_[Bt].update(1/30,{})}C=G,$=V.findIndex(At=>At.at>C),$<0&&($=V.length),mt=vt.findIndex(At=>At[0]>C),mt<0&&(mt=vt.length),ut=C>=D.firstFinishB,Rt=C>=D.lastFinishB+3.5,tt=0,Ft=null,nt=C>=D.firstFinishB+1.1,pt=1,E.replay(!1)}function xe(G){let Y=X;if(!Y)return;G=Math.max(0,Number(G)||0);let Nt=b.length;if(G<Y.fly){Y.t=G;return}et(!1),Y.title=!0;let At=Math.min(Nt,Math.floor((G-Y.fly)/Y.per));Y.idx=At-1,Y.t=G,Q(),Y.segStart=Y.fly+At*Y.per}function Ie(G){return N==="intro"?xe(G):he(G)}function Pe(){S&&(S.dispose(),S=null)}function Ve(G,{card:Y}={}){N="podium",E.setDim(!0),E.clearBanner(),X=null,E.titleCard(!1),E.market(!1),R=null,Et=!1,d.style.filter="",E.photo(!1),Pe();let Nt=G?.finishOrder?.length?[...G.finishOrder].sort((At,Bt)=>At.place-Bt.place):(D?.finishOrder||b).map((At,Bt)=>({runnerId:At,place:Bt+1,officialS:D?.byId[At].officialS??0,timeText:D?Go(D.byId[At].officialS):""}));S=Af(p,u,w,_,Nt,{camera:f,offsetX:(Y??t.podiumCard)!==!1?3.2:0}),(Y??t.podiumCard)!==!1&&E.results(Nt.map(At=>({place:At.place,nickname:L[At.runnerId]?.nickname||At.runnerId,colour:L[At.runnerId]?.colour.primary||"#888",timeText:At.timeText||Go(At.officialS)})))}let F=performance.now(),ht=0,yt={frames:0,acc:0,fps:0};function _t(G){Math.abs(f.fov-G)>.01&&(f.fov=G,f.updateProjectionMatrix())}function ct(G,Y=!1){W+=G;let Nt=null;Et||(N==="intro"&&T(G),N==="race"&&Dt(G));let At=Et?0:G;if(N==="race"){if(tt>0){let ee=w.anchors.finish;w.anchors.finishArch.visible=!1,f.position.set(ee.x+ee.rx*9-ee.tx*.6,ee.y+6.4,ee.z+ee.rz*9-ee.tz*.6),f.lookAt(ee.x-ee.rx*.6-ee.tx*.6,ee.y+.8,ee.z-ee.rz*.6-ee.tz*.6),_t(42),f.updateMatrixWorld();let pe=new H(ee.x+ee.rx*3,ee.y+.05,ee.z+ee.rz*3).project(f),ve=new H(ee.x-ee.rx*3,ee.y+.05,ee.z-ee.rz*3).project(f);E.photoLine([(pe.x*.5+.5)*d.clientWidth,(-pe.y*.5+.5)*d.clientHeight],[(ve.x*.5+.5)*d.clientWidth,(-ve.y*.5+.5)*d.clientHeight])}else if(Ft){let ee=w.anchors.finish,pe=wt(),ve=D.stateAt(pe).byId[D.finishOrder[0]];f.position.set(ee.x+ee.tx*30+ee.rx*2.2,ee.y+1.1,ee.z+ee.tz*30+ee.rz*2.2),f.lookAt(ve.x,ve.y+1,ve.z),_t(13)}else if(Et&&R!=null){R+=G;let ee=D.stateAt(Math.max(0,C)),pe=ee.byId[ee.order[0]],ve=ee.order.slice(0,3).map(cn=>ee.byId[cn]).filter(cn=>Math.abs(cn.m-pe.m)<25),Xt=new H;for(let cn of ve)Xt.add(new H(cn.x,cn.y,cn.z));Xt.divideScalar(Math.max(1,ve.length)),at||(at=Math.atan2(f.position.x-Xt.x,f.position.z-Xt.z));let ne=at+R*.12,Ce=10+Math.min(25,pe.m-ve.at(-1).m)*.4,me=Math.min(1,R/1.2),Ne=me*me*(3-2*me),He=Xt.x+Math.sin(ne)*Ce,je=Xt.z+Math.cos(ne)*Ce;f.position.set(He,Math.max(Xt.y+3+Ne*2,u.heightAt(He,je)+2.5),je),f.lookAt(Xt.x,Xt.y+2.3,Xt.z),_t(44)}else O.update(C,At,U);Nt=C>=0?D.stateAt(C):null,Ft&&(Nt=D.stateAt(wt()));let te=!tt&&R==null&&["side","headon","finishcam"].includes(O.shot?.type);w.setOcclusionCorridor(te?f.position:null,te?O.cam.look:null);let Jt=!tt&&!Ft&&O.shot?.type==="finishcam"?O.shot.fside:0;if(Jt!==B){B=Jt;let ee=w.anchors.finish;M.setMask(Jt?(pe,ve)=>{let Xt=((pe-ee.x)*ee.rx+(ve-ee.z)*ee.rz)*Jt,ne=(pe-ee.x)*ee.tx+(ve-ee.z)*ee.tz;return Xt>0&&Xt<16&&ne>-75&&ne<14&&Xt<15*(ne+150)/161+2.5}:null)}if(C<0)for(let ee of b)_[ee].update(At,{});else if(Ft){let ee=Math.min(1,Ft.t/J);pt=Math.max(.2,(Ft.b1-Ft.b0)/J*1.7*Math.pow(1-ee,.7)),Tt(wt(),At)}else Tt(C,tt>0?0:At);let re=O.shot?.type;zt(O.cam.look,mr.has(re)?160:70)}else if(N==="podium"&&S){w.setOcclusionCorridor(null),S.update(At,W);for(let te of b)_[te].update(At,{});zt(S.center,40)}else{for(let te of b)_[te].update(At,{});if(N==="idle"){let te=u.sample(0),Jt=W*.12;f.position.set(te.x+Math.sin(Jt)*14,te.y+4.5,te.z+Math.cos(Jt)*14),f.lookAt(te.x,te.y+1.2,te.z),_t(45)}zt(new H(rt[b[0]]?.x??0,0,rt[b[0]]?.z??0),N==="intro"&&X?.idx===-1?160:40)}if(Pt+=G,Y)return;Ct(),w.update(W),x?.update(W);let Bt=b.map(te=>_[te].root.position);M.update(W,f.position,Bt,N==="podium"?.9:null),E.update(Pt,N==="race"?$t(Nt,C>-1&&R==null&&!Ft):$t(null,!1)),Pt=0,h.render(p,f)}let Gt=2;function Qt(G){if(Lt)return;ht=requestAnimationFrame(Qt);let Y=Math.max(0,(G-F)/1e3);F=G,yt.frames++,yt.acc+=Y,yt.acc>1&&(yt.fps=yt.frames/yt.acc,yt.frames=0,yt.acc=0),fe(Math.min(Gt,Y)*z)}function fe(G){let Y=G;if(Y<=1e-6){ct(0);return}for(;Y>1e-6;){let Nt=Math.min(Y,.1);Y-=Nt,ct(Nt,Y>1e-6)}}t.manualLoop||(ht=requestAnimationFrame(Qt));function ue(){Lt=!0,cancelAnimationFrame(ht),Z?.disconnect(),window.removeEventListener("resize",It);for(let G in st)for(let Y of st[G].children)Y.material.dispose();Re.dispose(),Pe();for(let G of b)p.remove(_[G].root),_[G].dispose();M.dispose(),x?.dispose(),A.dispose(),w.dispose(),E.dispose(),p.traverse(G=>{G.geometry&&G.geometry.dispose()}),gf(),lf(),h.dispose(),h.forceContextLoss?.(),d.remove()}let Me={seek(G,Y=1.2){he(G,Y),Et=!0,ct(0)},introAt(G,Y=1.5){if(_e(()=>{},{}),Et=!1,G<0){X.t=Y,T(0),ct(0),Et=!0;return}for(X.t=X.fly,T(0);X&&X.idx<G;)X.t=X.segStart+X.per+.01,T(0);for(let Nt=0;Nt<Y*30;Nt++){T(1/30);for(let At of b)_[At].update(1/30,{})}Et=!0,ct(0)},podiumAt(G=3){E.introCard(null),Ve(null);for(let Y=0;Y<G*30;Y++){S.update(1/30,Y/30);for(let Nt of b)_[Nt].update(1/30,{})}Et=!0,ct(0)},photoAt(){this.seek(D.firstFinishB-.05),Et=!1,ut=!1;for(let G=0;G<3;G++)ct(1/30);Et=!0,ct(0)},render(){ct(0)},unpause(){Et=!1},lookFrom(G,Y,Nt,At,Bt,te,Jt=45){N="debugcam",f.position.set(G,Y,Nt),f.lookAt(At,Bt,te),_t(Jt),E.setDim(!0),h.render(p,f)},step(G,Y=!0){ct(G,!Y)},get mode(){return N},get b(){return C},get shots(){return U},get sim(){return D},C:u,get director(){return O},renderer:h,scene:p,camera:f,info:()=>h.info,fps:()=>yt.fps};return{playIntro:_e,playRace:lt,showPodium:Ve,setPaused(G,{market:Y=!0,marketText:Nt}={}){G=!!G,G!==Et&&(Et=G,N==="race"&&tt<=0&&t.marketOnPause!==!1&&Y&&(G?(R=0,at=0,E.market(!0,Nt??t.marketText??"Place your halfway bets!"),d.style.filter="saturate(1.2) contrast(1.06)"):(R=null,E.market(!1),d.style.filter="",O.reset(!1))))},setSpeed(G){z=Math.max(.05,Number(G)||1)},seek:Ie,loadPlan(G,{backedBy:Y}={}){if(N==="race")throw new Error("createRaceView: loadPlan during a race");Y&&ae(Y),it(G)},setBackedBy(G){ae(G),D&&N!=="race"&&(U=dc({plan:r,sim:D,backedIds:a,hasDiversion:c,C:u,world:w,funfair:x}))},dispose:ue,hudRoot:E.root,get broadcastTime(){return N==="intro"?X?.t??0:C},get durationS(){return D?xr+D.lastFinishB+3.5:0},preRollS:xr,_debug:Me}}var Gn=new URLSearchParams(location.search);async function xc(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function Lx(){let i=Gn.get("fixture"),[t,e,n]=await Promise.all([xc("/data/course/course.json"),xc("/data/course/park.json"),xc(i?`/client/tv/race/fixtures/${i}.json`:"/data/fixtures/round.json")]);Gn.get("shot")&&document.body.classList.add("shot");let s={};Gn.get("backed")!=null?Gn.get("backed").split(",").filter(Boolean).forEach((c,h)=>s[c]=[h%2?"Mrs M":"Mark"]):Object.assign(s,{r2:["Mark"],r4:["Mrs M"],r1:["Mark","Mrs M"]});let r=document.getElementById("sub"),o=gc(document.getElementById("stage"),{course:t,park:e,round:n.public,plan:n.racePlan,backedBy:s,speed:Number(Gn.get("speed"))||1,preserveDrawingBuffer:!!Gn.get("shot"),manualLoop:!!Gn.get("shot"),onIntroRunner:c=>{let h=n.public.runners.find(d=>d.id===c);r.textContent=`${h.nickname} - ${h.tagline}`}});window.view=o,window.__create=gc,window.__data={course:t,park:e,round:n};let a=c=>{c.kind==="commentary"&&(r.textContent=c.text),c.kind==="countdown"&&(r.textContent=c.text)},l={intro:()=>o.playIntro(()=>{r.textContent="(betting would happen here)",Gn.get("auto")!=="0"&&setTimeout(l.race,1500)}),race:()=>(r.textContent="",o.playRace(a,()=>{r.textContent="Race over",setTimeout(l.podium,2500)})),podium:()=>o.showPodium(null),pause:(()=>{let c=!1;return()=>o.setPaused(c=!c)})()};document.getElementById("ctl").addEventListener("click",c=>{let h=c.target.dataset?.a;h&&l[h]()}),Gn.get("shot")||setInterval(()=>{document.getElementById("fps").textContent=`${o._debug.fps().toFixed(0)} fps`},1e3),Gn.get("auto")!=="0"&&!Gn.get("shot")&&l.intro(),window.__ready=!0}Lx().catch(i=>{console.error(i),document.getElementById("sub").textContent=String(i),window.__error=String(i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
