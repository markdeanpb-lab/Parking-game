var $l="170";var Cf=0,_c=1,If=2;var Dh=1,Zl=2,ti=3,Mi=0,hn=1,Je=2,_i=0,ds=1,vc=2,Mc=3,bc=4,Pf=5,Ni=100,Lf=101,Df=102,Uf=103,Nf=104,Ff=200,zf=201,Of=202,kf=203,Ta=204,Aa=205,Bf=206,Hf=207,Vf=208,Gf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,Ra=0,Ca=1,Ia=2,xs=3,Pa=4,La=5,Da=6,Ua=7,Uh=0,Zf=1,Jf=2,qn=0,Kf=1,jf=2,Qf=3,tu=4,eu=5,nu=6,iu=7;var Nh=300,ys=301,_s=302,Na=303,Fa=304,Fo=306,ki=1e3,zi=1001,za=1002,_n=1003,su=1004;var yr=1005;var Wn=1006,qo=1007;var Oi=1008;var si=1009,Fh=1010,zh=1011,Zs=1012,Jl=1013,Bi=1014,Xn=1015,cr=1016,Kl=1017,jl=1018,vs=1020,Oh=35902,kh=1021,Bh=1022,Tn=1023,Hh=1024,Vh=1025,ps=1026,Ms=1027,Ql=1028,tc=1029,Gh=1030,ec=1031;var nc=1033,Zr=33776,Jr=33777,Kr=33778,jr=33779,Oa=35840,ka=35841,Ba=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,$a=37811,Za=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,Qr=36492,rl=36494,ol=36495,Wh=36283,al=36284,ll=36285,cl=36286;var to=2300,hl=2301,Yo=2302,Sc=2400,Ec=2401,wc=2402;var ru=3200,ou=3201;var Xh=0,au=1,xi="",ln="srgb",As="srgb-linear",zo="linear",Ne="srgb";var qi=7680;var Tc=519,lu=512,cu=513,hu=514,qh=515,fu=516,uu=517,du=518,pu=519,fl=35044;var Ac="300 es",ni=2e3,eo=2001,bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Ws=Math.PI/180,Js=180/Math.PI;function Yn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function xu(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function yu(i,t=1){return t-Math.abs(ic(i,t*2)-t)}function _u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bu(i,t){return i+Math.random()*(t-i)}function Su(i){return i*(.5-Math.random())}function Eu(i){i!==void 0&&(Rc=i);let t=Rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*Ws}function Tu(i){return i*Js}function Au(i){return(i&i-1)===0&&i!==0}function Ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),p=r((t-n)/2),m=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*p,l*m,a*c);break;case"YZY":i.set(l*m,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*m,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ei={DEG2RAD:Ws,RAD2DEG:Js,generateUUID:Yn,clamp:cn,euclideanModulo:ic,mapLinear:mu,inverseLerp:gu,lerp:Xs,damp:xu,pingpong:yu,smoothstep:_u,smootherstep:vu,randInt:Mu,randFloat:bu,randFloatSpread:Su,seededRandom:Eu,degToRad:wu,radToDeg:Tu,isPowerOfTwo:Au,ceilPowerOfTwo:Ru,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Iu,normalize:De,denormalize:Fn},kt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Se=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],m=n[2],u=n[5],g=n[8],_=s[0],d=s[3],f=s[6],E=s[1],x=s[4],y=s[7],k=s[2],A=s[5],C=s[8];return r[0]=o*_+a*E+l*k,r[3]=o*d+a*x+l*A,r[6]=o*f+a*y+l*C,r[1]=c*_+h*E+p*k,r[4]=c*d+h*x+p*A,r[7]=c*f+h*y+p*C,r[2]=m*_+u*E+g*k,r[5]=m*d+u*x+g*A,r[8]=m*f+u*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,m=a*l-h*r,u=c*r-o*l,g=e*p+n*m+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=p*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=m*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$o=new Se;function Yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){let i=no("canvas");return i.style.display="block",i}var Cc={};function Vs(i){i in Cc||(Cc[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Du(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Pe={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ne&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ne&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ic=[.64,.33,.3,.6,.15,.06],Pc=[.2126,.7152,.0722],Lc=[.3127,.329],Dc=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Pe.define({[As]:{primaries:Ic,whitePoint:Lc,transfer:zo,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:Ic,whitePoint:Lc,transfer:Ne,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});var Yi,ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=no("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nu=0,io=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fu=0,Mn=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zi,s=zi,r=Wn,o=Oi,a=Tn,l=si,c=i.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Yn(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Nh;Mn.DEFAULT_ANISOTROPY=1;var $e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],u=l[5],g=l[9],_=l[2],d=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(p-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(u+1)/2,k=(f+1)/2,A=(h+m)/4,C=(p+_)/4,I=(g+d)/4;return x>y&&x>k?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=C/n):y>k?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=I/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=C/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((d-g)*(d-g)+(p-_)*(p-_)+(m-h)*(m-h));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(p-_)/E,this.z=(m-h)/E,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new io(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var An=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],m=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p;return}if(a===1){t[e+0]=m,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(p!==_||l!==m||c!==u||h!==g){let d=1-a,f=l*m+c*u+h*g+p*_,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let k=Math.sqrt(x),A=Math.atan2(k,f*E);d=Math.sin(d*A)/k,a=Math.sin(a*A)/k}let y=a*E;if(l=l*d+m*y,c=c*d+u*y,h=h*d+g*y,p=p*d+_*y,d===1-a){let k=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=k,c*=k,h*=k,p*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],m=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*u-c*m,t[e+1]=l*g+h*m+c*p-a*u,t[e+2]=c*g+h*u+a*m-l*p,t[e+3]=h*g-a*p-l*m-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),m=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*h*p+c*u*g,this._y=c*u*p-m*h*g,this._z=c*h*g+m*u*p,this._w=c*h*p-m*u*g;break;case"YXZ":this._x=m*h*p+c*u*g,this._y=c*u*p-m*h*g,this._z=c*h*g-m*u*p,this._w=c*h*p+m*u*g;break;case"ZXY":this._x=m*h*p-c*u*g,this._y=c*u*p+m*h*g,this._z=c*h*g+m*u*p,this._w=c*h*p-m*u*g;break;case"ZYX":this._x=m*h*p-c*u*g,this._y=c*u*p+m*h*g,this._z=c*h*g-m*u*p,this._w=c*h*p+m*u*g;break;case"YZX":this._x=m*h*p+c*u*g,this._y=c*u*p+m*h*g,this._z=c*h*g-m*u*p,this._w=c*h*p-m*u*g;break;case"XZY":this._x=m*h*p-c*u*g,this._y=c*u*p-m*h*g,this._z=c*h*g+m*u*p,this._w=c*h*p+m*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],m=n+a+p;if(m>0){let u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>p){let u=2*Math.sqrt(1+n-a-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>p){let u=2*Math.sqrt(1+a-n-p);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new H,Nc=new An,oi=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),vr.subVectors(this.max,Ls),$i.subVectors(t.a,Ls),Zi.subVectors(t.b,Ls),Ji.subVectors(t.c,Ls),fi.subVectors(Zi,$i),ui.subVectors(Ji,Zi),Ri.subVectors($i,Ji);let e=[0,-fi.z,fi.y,0,-ui.z,ui.y,0,-Ri.z,Ri.y,fi.z,0,-fi.x,ui.z,0,-ui.x,Ri.z,0,-Ri.x,-fi.y,fi.x,0,-ui.y,ui.x,0,-Ri.y,Ri.x,0];return!Ko(e,$i,Zi,Ji,vr)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,$i,Zi,Ji,vr))?!1:(Mr.crossVectors(fi,ui),e=[Mr.x,Mr.y,Mr.z],Ko(e,$i,Zi,Ji,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new H,new H,new H,new H,new H,new H,new H,new H],Dn=new H,_r=new oi,$i=new H,Zi=new H,Ji=new H,fi=new H,ui=new H,Ri=new H,Ls=new H,vr=new H,Mr=new H,Ci=new H;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);let a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zu=new oi,Ds=new H,jo=new H,Si=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(jo)),this.expandByPoint(Ds.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new H,Qo=new H,br=new H,di=new H,ta=new H,Sr=new H,ea=new H,ro=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qo.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Qo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(br),a=di.dot(this.direction),l=-di.dot(br),c=di.lengthSq(),h=Math.abs(1-o*o),p,m,u,g;if(h>0)if(p=o*l-a,m=o*a-l,g=r*h,p>=0)if(m>=-g)if(m<=g){let _=1/h;p*=_,m*=_,u=p*(p+o*m+2*a)+m*(o*p+m+2*l)+c}else m=r,p=Math.max(0,-(o*m+a)),u=-p*p+m*(m+2*l)+c;else m=-r,p=Math.max(0,-(o*m+a)),u=-p*p+m*(m+2*l)+c;else m<=-g?(p=Math.max(0,-(-o*r+a)),m=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+m*(m+2*l)+c):m<=g?(p=0,m=Math.min(Math.max(-r,-l),r),u=m*(m+2*l)+c):(p=Math.max(0,-(o*r+a)),m=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+m*(m+2*l)+c);else m=o>0?-r:r,p=Math.max(0,-(o*m+a)),u=-p*p+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Qo).addScaledVector(br,m),u}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-m.z)*p,l=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,l=(t.min.z-m.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),Sr.subVectors(n,t),ea.crossVectors(ta,Sr);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let l=a*this.direction.dot(Sr.crossVectors(di,Sr));if(l<0)return null;let c=a*this.direction.dot(ta.cross(di));if(c<0||l+c>o)return null;let h=-a*di.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class i{constructor(t,e,n,s,r,o,a,l,c,h,p,m,u,g,_,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,m,u,g,_,d)}set(t,e,n,s,r,o,a,l,c,h,p,m,u,g,_,d){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=m,f[3]=u,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let m=o*h,u=o*p,g=a*h,_=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let m=l*h,u=l*p,g=c*h,_=c*p;e[0]=m+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){let m=l*h,u=l*p,g=c*h,_=c*p;e[0]=m-_*a,e[4]=-o*p,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let m=o*h,u=o*p,g=a*h,_=a*p;e[0]=l*h,e[4]=g*c-u,e[8]=m*c+_,e[1]=l*p,e[5]=_*c+m,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-m*p,e[8]=g*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*p+g,e[10]=m-_*p}else if(t.order==="XZY"){let m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=m*p+_,e[5]=o*h,e[9]=u*p-g,e[2]=g*p-u,e[6]=a*h,e[10]=_*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,ku)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),pi.crossVectors(n,En),pi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),pi.crossVectors(n,En)),pi.normalize(),Er.crossVectors(En,pi),s[0]=pi.x,s[4]=Er.x,s[8]=En.x,s[1]=pi.y,s[5]=Er.y,s[9]=En.y,s[2]=pi.z,s[6]=Er.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],m=n[9],u=n[13],g=n[2],_=n[6],d=n[10],f=n[14],E=n[3],x=n[7],y=n[11],k=n[15],A=s[0],C=s[4],I=s[8],M=s[12],v=s[1],b=s[5],P=s[9],S=s[13],z=s[2],w=s[6],U=s[10],O=s[14],V=s[3],pt=s[7],Q=s[11],N=s[15];return r[0]=o*A+a*v+l*z+c*V,r[4]=o*C+a*b+l*w+c*pt,r[8]=o*I+a*P+l*U+c*Q,r[12]=o*M+a*S+l*O+c*N,r[1]=h*A+p*v+m*z+u*V,r[5]=h*C+p*b+m*w+u*pt,r[9]=h*I+p*P+m*U+u*Q,r[13]=h*M+p*S+m*O+u*N,r[2]=g*A+_*v+d*z+f*V,r[6]=g*C+_*b+d*w+f*pt,r[10]=g*I+_*P+d*U+f*Q,r[14]=g*M+_*S+d*O+f*N,r[3]=E*A+x*v+y*z+k*V,r[7]=E*C+x*b+y*w+k*pt,r[11]=E*I+x*P+y*U+k*Q,r[15]=E*M+x*S+y*O+k*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],m=t[10],u=t[14],g=t[3],_=t[7],d=t[11],f=t[15];return g*(+r*l*p-s*c*p-r*a*m+n*c*m+s*a*u-n*l*u)+_*(+e*l*u-e*c*m+r*o*m-s*o*u+s*c*h-r*l*h)+d*(+e*c*p-e*a*u-r*o*p+n*o*u+r*a*h-n*c*h)+f*(-s*a*h-e*l*p+e*a*m+s*o*p-n*o*m+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],m=t[10],u=t[11],g=t[12],_=t[13],d=t[14],f=t[15],E=p*d*c-_*m*c+_*l*u-a*d*u-p*l*f+a*m*f,x=g*m*c-h*d*c-g*l*u+o*d*u+h*l*f-o*m*f,y=h*_*c-g*p*c+g*a*u-o*_*u-h*a*f+o*p*f,k=g*p*l-h*_*l-g*a*m+o*_*m+h*a*d-o*p*d,A=e*E+n*x+s*y+r*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=E*C,t[1]=(_*m*r-p*d*r-_*s*u+n*d*u+p*s*f-n*m*f)*C,t[2]=(a*d*r-_*l*r+_*s*c-n*d*c-a*s*f+n*l*f)*C,t[3]=(p*l*r-a*m*r-p*s*c+n*m*c+a*s*u-n*l*u)*C,t[4]=x*C,t[5]=(h*d*r-g*m*r+g*s*u-e*d*u-h*s*f+e*m*f)*C,t[6]=(g*l*r-o*d*r-g*s*c+e*d*c+o*s*f-e*l*f)*C,t[7]=(o*m*r-h*l*r+h*s*c-e*m*c-o*s*u+e*l*u)*C,t[8]=y*C,t[9]=(g*p*r-h*_*r-g*n*u+e*_*u+h*n*f-e*p*f)*C,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*p*r-h*n*c+e*p*c+o*n*u-e*a*u)*C,t[12]=k*C,t[13]=(h*_*s-g*p*s+g*n*m-e*_*m-h*n*d+e*p*d)*C,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*d-e*a*d)*C,t[15]=(o*p*s-h*a*s+h*n*l-e*p*l-o*n*m+e*a*m)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,m=r*c,u=r*h,g=r*p,_=o*h,d=o*p,f=a*p,E=l*c,x=l*h,y=l*p,k=n.x,A=n.y,C=n.z;return s[0]=(1-(_+f))*k,s[1]=(u+y)*k,s[2]=(g-x)*k,s[3]=0,s[4]=(u-y)*A,s[5]=(1-(m+f))*A,s[6]=(d+E)*A,s[7]=0,s[8]=(g+x)*C,s[9]=(d-E)*C,s[10]=(1-(m+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);let c=1/r,h=1/o,p=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=p,Un.elements[9]*=p,Un.elements[10]*=p,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ni){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s),u,g;if(a===ni)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===eo)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ni){let l=this.elements,c=1/(e-t),h=1/(n-s),p=1/(o-r),m=(e+t)*c,u=(n+s)*h,g,_;if(a===ni)g=(o+r)*p,_=-2*p;else if(a===eo)g=r*p,_=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new H,Un=new Re,Ou=new H(0,0,0),ku=new H(1,1,1),pi=new H,Er=new H,En=new H,Fc=new Re,zc=new An,zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],m=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bu=0,Oc=new H,ji=new An,Kn=new Re,wr=new H,Us=new H,Hu=new H,Vu=new An,kc=new H(1,0,0),Bc=new H(0,1,0),Hc=new H(0,0,1),Vc={type:"added"},Gu={type:"removed"},Qi={type:"childadded",child:null},na={type:"childremoved",child:null},Fe=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new zn,n=new An,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new Se}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Us,wr,this.up):Kn.lookAt(wr,Us,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Kn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),m=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new H(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new H,jn=new H,ia=new H,Qn=new H,ts=new H,es=new H,Gc=new H,sa=new H,ra=new H,oa=new H,aa=new $e,la=new $e,ca=new $e,yi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),jn.subVectors(n,e),ia.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(jn),l=Nn.dot(ia),c=jn.dot(jn),h=jn.dot(ia),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let m=1/p,u=(c*l-a*h)*m,g=(o*h-a*l)*m;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),jn.subVectors(t,e),Nn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Nn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,n),es.subVectors(r,n),sa.subVectors(t,n);let l=ts.dot(sa),c=es.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);let h=ts.dot(ra),p=es.dot(ra);if(h>=0&&p<=h)return e.copy(s);let m=l*p-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ts,o);oa.subVectors(t,r);let u=ts.dot(oa),g=es.dot(oa);if(g>=0&&u<=g)return e.copy(r);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(es,a);let d=h*g-u*p;if(d<=0&&p-h>=0&&u-g>=0)return Gc.subVectors(r,s),a=(p-h)/(p-h+(u-g)),e.copy(s).addScaledVector(Gc,a);let f=1/(d+_+m);return o=_*f,a=m*f,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=ic(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Pe.fromWorkingColorSpace(pn.copy(this),t),Math.round(cn(pn.r*255,0,255))*65536+Math.round(cn(pn.g*255,0,255))*256+Math.round(cn(pn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=ln){Pe.fromWorkingColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Tr);let n=Xs(mi.h,Tr.h,e),s=Xs(mi.s,Tr.s,e),r=Xs(mi.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new le;le.NAMES=$h;var Wu=0,ai=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Yn(),this.name="",this.blending=ds,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bn=class extends ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var je=new H,Ar=new kt,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}};var ao=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lo=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xu=0,Cn=new Re,fa=new Fe,ns=new H,wn=new oi,Ns=new oi,an=new H,ze=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?lo:ao)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(wn.min,Ns.min),wn.expandByPoint(an),an.addVectors(wn.max,Ns.max),wn.expandByPoint(an)):(wn.expandByPoint(Ns.min),wn.expandByPoint(Ns.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(t,c),an.add(ns)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new H,l[I]=new H;let c=new H,h=new H,p=new H,m=new kt,u=new kt,g=new kt,_=new H,d=new H;function f(I,M,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),p.fromBufferAttribute(n,v),m.fromBufferAttribute(r,I),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),p.sub(c),u.sub(m),g.sub(m);let b=1/(u.x*g.y-g.x*u.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(p,-u.y).multiplyScalar(b),d.copy(p).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(b),a[I].add(_),a[M].add(_),a[v].add(_),l[I].add(d),l[M].add(d),l[v].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,M=E.length;I<M;++I){let v=E[I],b=v.start,P=v.count;for(let S=b,z=b+P;S<z;S+=3)f(t.getX(S+0),t.getX(S+1),t.getX(S+2))}let x=new H,y=new H,k=new H,A=new H;function C(I){k.fromBufferAttribute(s,I),A.copy(k);let M=a[I];x.copy(M),x.sub(k.multiplyScalar(k.dot(M))).normalize(),y.crossVectors(A,M);let b=y.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,b)}for(let I=0,M=E.length;I<M;++I){let v=E[I],b=v.start,P=v.count;for(let S=b,z=b+P;S<z;S+=3)C(t.getX(S+0)),C(t.getX(S+1)),C(t.getX(S+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,p=new H;if(t)for(let m=0,u=t.count;m<u;m+=3){let g=t.getX(m+0),_=t.getX(m+1),d=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let m=0,u=e.count;m<u;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,m=new c.constructor(l.length*h),u=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let f=0;f<h;f++)m[g++]=c[u++]}return new He(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let m=c[h],u=t(m,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,m=c.length;p<m;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let m=0,u=p.length;m<u;m++)h.push(p[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=new Re,Ii=new ro,Rr=new Si,Xc=new H,Cr=new H,Ir=new H,Pr=new H,ua=new H,Lr=new H,qc=new H,Dr=new H,Ue=class extends Fe{constructor(t=new ze,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(ua.fromBufferAttribute(p,t),o?Lr.addScaledVector(ua,h):Lr.addScaledVector(ua.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Rr,Xc)===null||Ii.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,m=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){let d=m[g],f=o[d.materialIndex],E=Math.max(d.start,u.start),x=Math.min(a.count,Math.min(d.start+d.count,u.start+u.count));for(let y=E,k=x;y<k;y+=3){let A=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);s=Ur(this,f,t,n,c,h,p,A,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let d=g,f=_;d<f;d+=3){let E=a.getX(d),x=a.getX(d+1),y=a.getX(d+2);s=Ur(this,o,t,n,c,h,p,E,x,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){let d=m[g],f=o[d.materialIndex],E=Math.max(d.start,u.start),x=Math.min(l.count,Math.min(d.start+d.count,u.start+u.count));for(let y=E,k=x;y<k;y+=3){let A=y,C=y+1,I=y+2;s=Ur(this,f,t,n,c,h,p,A,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let d=g,f=_;d<f;d+=3){let E=d,x=d+1,y=d+2;s=Ur(this,o,t,n,c,h,p,E,x,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function qu(i,t,e,n,s,r,o,a){let l;if(t.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:i}}function Ur(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Pr);let h=qu(i,t,e,n,Cr,Ir,Pr,qc);if(h){let p=new H;yi.getBarycoord(qc,Cr,Ir,Pr,p),s&&(h.uv=yi.getInterpolatedAttribute(s,a,l,c,p,new kt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,p,new kt)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,p,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new H,materialIndex:0};yi.getNormal(Cr,Ir,Pr,m.normal),h.face=m,h.barycoord=p}return h}var Ie=class i extends ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],m=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(p,2));function g(_,d,f,E,x,y,k,A,C,I,M){let v=y/C,b=k/I,P=y/2,S=k/2,z=A/2,w=C+1,U=I+1,O=0,V=0,pt=new H;for(let Q=0;Q<U;Q++){let N=Q*b-S;for(let Tt=0;Tt<w;Tt++){let It=Tt*v-P;pt[_]=It*E,pt[d]=N*x,pt[f]=z,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[d]=0,pt[f]=A>0?1:-1,h.push(pt.x,pt.y,pt.z),p.push(Tt/C),p.push(1-Q/I),O+=1}}for(let Q=0;Q<I;Q++)for(let N=0;N<C;N++){let Tt=m+N+w*Q,It=m+N+w*(Q+1),L=m+(N+1)+w*(Q+1),W=m+(N+1)+w*Q;l.push(Tt,It,W),l.push(It,L,W),V+=6}a.addGroup(u,V,M),u+=V,m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function Yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}var sc={clone:bs,merge:xn},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},co=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new H,Yc=new kt,$c=new kt,yn=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,$c),e.subVectors($c,Yc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,ml=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new yn(is,ss,t,e);r.layers=this.layers,this.add(r);let o=new yn(is,ss,t,e);o.layers=this.layers,this.add(o);let a=new yn(is,ss,t,e);a.layers=this.layers,this.add(a);let l=new yn(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new yn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(p,m,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ho=class extends Mn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ho(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ie(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:_i});r.uniforms.tEquirect.value=e;let o=new Ue(s,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Wn),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},da=new H,Ju=new H,Ku=new Se,ei=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=da.subVectors(n,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new Si,Nr=new H,Ks=class{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],p=s[6],m=s[7],u=s[8],g=s[9],_=s[10],d=s[11],f=s[12],E=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,m-c,d-u,y-f).normalize(),n[1].setComponents(l+r,m+c,d+u,y+f).normalize(),n[2].setComponents(l+o,m+h,d+g,y+E).normalize(),n[3].setComponents(l-o,m-h,d-g,y-E).normalize(),n[4].setComponents(l-a,m-p,d-_,y-x).normalize(),e===ni)n[5].setComponents(l+a,m+p,d+_,y+x).normalize();else if(e===eo)n[5].setComponents(a,p,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((u,g)=>u.start-g.start);let m=0;for(let u=1;u<p.length;u++){let g=p[m],_=p[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,p[m]=_)}p.length=m+1;for(let u=0,g=p.length;u<g;u++){let _=p[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fn=class i extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,m=e/l,u=[],g=[],_=[],d=[];for(let f=0;f<h;f++){let E=f*m-o;for(let x=0;x<c;x++){let y=x*p-r;g.push(y,-E,0),_.push(0,0,1),d.push(x/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let x=E+c*f,y=E+c*(f+1),k=E+1+c*(f+1),A=E+1+c*f;u.push(x,y,A),u.push(y,k,A)}this.setIndex(u),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qu=`#ifdef USE_ALPHAHASH
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
}`,_e={alphahash_fragment:Qu,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ad,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:fd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:xd,color_fragment:yd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:Md,common:bd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:wd,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:Xd,envmap_vertex:Nd,fog_vertex:Fd,fog_pars_vertex:zd,fog_fragment:Od,fog_pars_fragment:kd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:fp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:xp,normal_pars_fragment:yp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:wp,opaque_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Ip,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:zp,skinbase_vertex:Op,skinning_pars_vertex:kp,skinning_vertex:Bp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:$p,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Kp,background_vert:jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:fm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:xm,meshnormal_vert:ym,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:bm,meshphysical_frag:Sm,meshtoon_vert:Em,meshtoon_frag:wm,points_vert:Tm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Im,sprite_frag:Pm},Kt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Gn={basic:{uniforms:xn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:xn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new le(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:xn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:xn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:xn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new le(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:xn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:xn([Kt.points,Kt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:xn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:xn([Kt.common,Kt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:xn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:xn([Kt.sprite,Kt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:xn([Kt.common,Kt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:xn([Kt.lights,Kt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Gn.physical={uniforms:xn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var Fr={r:0,b:0,g:0},Li=new zn,Lm=new Re;function Dm(i,t,e,n,s,r,o){let a=new le(0),l=r===!0?0:1,c,h,p=null,m=0,u=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1,y=g(E);y===null?f(a,l):y&&y.isColor&&(f(y,1),x=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===Fo)?(h===void 0&&(h=new Ue(new Ie(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:bs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Li)),h.material.toneMapped=Pe.getTransfer(y.colorSpace)!==Ne,(p!==y||m!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,p=y,m=y.version,u=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ue(new fn(2,2),new vn({name:"BackgroundMaterial",uniforms:bs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(y.colorSpace)!==Ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||m!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,p=y,m=y.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,x){E.getRGB(Fr,Zh(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:d}}function Um(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(v,b,P,S,z){let w=!1,U=p(S,P,b);r!==U&&(r=U,c(r.object)),w=u(v,S,P,z),w&&g(v,S,P,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(w||o)&&(o=!1,y(v,b,P,S),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function p(v,b,P){let S=P.wireframe===!0,z=n[v.id];z===void 0&&(z={},n[v.id]=z);let w=z[b.id];w===void 0&&(w={},z[b.id]=w);let U=w[S];return U===void 0&&(U=m(l()),w[S]=U),U}function m(v){let b=[],P=[],S=[];for(let z=0;z<e;z++)b[z]=0,P[z]=0,S[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:P,attributeDivisors:S,object:v,attributes:{},index:null}}function u(v,b,P,S){let z=r.attributes,w=b.attributes,U=0,O=P.getAttributes();for(let V in O)if(O[V].location>=0){let Q=z[V],N=w[V];if(N===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(N=v.instanceColor)),Q===void 0||Q.attribute!==N||N&&Q.data!==N.data)return!0;U++}return r.attributesNum!==U||r.index!==S}function g(v,b,P,S){let z={},w=b.attributes,U=0,O=P.getAttributes();for(let V in O)if(O[V].location>=0){let Q=w[V];Q===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));let N={};N.attribute=Q,Q&&Q.data&&(N.data=Q.data),z[V]=N,U++}r.attributes=z,r.attributesNum=U,r.index=S}function _(){let v=r.newAttributes;for(let b=0,P=v.length;b<P;b++)v[b]=0}function d(v){f(v,0)}function f(v,b){let P=r.newAttributes,S=r.enabledAttributes,z=r.attributeDivisors;P[v]=1,S[v]===0&&(i.enableVertexAttribArray(v),S[v]=1),z[v]!==b&&(i.vertexAttribDivisor(v,b),z[v]=b)}function E(){let v=r.newAttributes,b=r.enabledAttributes;for(let P=0,S=b.length;P<S;P++)b[P]!==v[P]&&(i.disableVertexAttribArray(P),b[P]=0)}function x(v,b,P,S,z,w,U){U===!0?i.vertexAttribIPointer(v,b,P,z,w):i.vertexAttribPointer(v,b,P,S,z,w)}function y(v,b,P,S){_();let z=S.attributes,w=P.getAttributes(),U=b.defaultAttributeValues;for(let O in w){let V=w[O];if(V.location>=0){let pt=z[O];if(pt===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor)),pt!==void 0){let Q=pt.normalized,N=pt.itemSize,Tt=t.get(pt);if(Tt===void 0)continue;let It=Tt.buffer,L=Tt.type,W=Tt.bytesPerElement,it=L===i.INT||L===i.UNSIGNED_INT||pt.gpuType===Jl;if(pt.isInterleavedBufferAttribute){let X=pt.data,tt=X.stride,ut=pt.offset;if(X.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)f(V.location+Rt,X.meshPerAttribute);v.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)d(V.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Rt=0;Rt<V.locationSize;Rt++)x(V.location+Rt,N/V.locationSize,L,Q,tt*W,(ut+N/V.locationSize*Rt)*W,it)}else{if(pt.isInstancedBufferAttribute){for(let X=0;X<V.locationSize;X++)f(V.location+X,pt.meshPerAttribute);v.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let X=0;X<V.locationSize;X++)d(V.location+X);i.bindBuffer(i.ARRAY_BUFFER,It);for(let X=0;X<V.locationSize;X++)x(V.location+X,N/V.locationSize,L,Q,N*W,N/V.locationSize*X*W,it)}}else if(U!==void 0){let Q=U[O];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}E()}function k(){I();for(let v in n){let b=n[v];for(let P in b){let S=b[P];for(let z in S)h(S[z].object),delete S[z];delete b[P]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let P in b){let S=b[P];for(let z in S)h(S[z].object),delete S[z];delete b[P]}delete n[v.id]}function C(v){for(let b in n){let P=n[b];if(P[v.id]===void 0)continue;let S=P[v.id];for(let z in S)h(S[z].object),delete S[z];delete P[v.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:d,disableUnusedAttributes:E}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),e.update(h,n,p))}function a(c,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let u=0;for(let g=0;g<p;g++)u+=h[g];e.update(u,n,1)}function l(c,h,p,m){if(p===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],m[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_]*m[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==si&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:k,maxSamples:A}}function zm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ei,a=new Se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let u=p.length!==0||m||n!==0||s;return s=m,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){e=h(p,m,0)},this.setState=function(p,m,u){let g=p.clippingPlanes,_=p.clipIntersection,d=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let E=r?0:n,x=E*4,y=f.clippingState||null;l.value=y,y=h(g,m,x,u);for(let k=0;k!==x;++k)y[k]=e[k];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,m,u,g){let _=p!==null?p.length:0,d=null;if(_!==0){if(d=l.value,g!==!0||d===null){let f=u+_*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<f)&&(d=new Float32Array(f));for(let x=0,y=u;x!==_;++x,y+=4)o.copy(p[x]).applyMatrix4(E,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Om(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=ys:a===Fa&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Na||a===Fa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fo=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fs=4,Zc=[.125,.215,.35,.446,.526,.582],Fi=20,pa=new fo,Jc=new le,ma=null,ga=0,xa=0,ya=!1,Ui=(1+Math.sqrt(5))/2,rs=1/Ui,Kc=[new H(-Ui,rs,0),new H(Ui,rs,0),new H(-rs,0,Ui),new H(rs,0,Ui),new H(0,Ui,-rs),new H(0,Ui,rs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,xa),this._renderer.xr.enabled=ya,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:cr,format:Tn,colorSpace:As,depthBuffer:!1},s=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(r)),this._blurMaterial=Bm(r,t,e)}return s}_compileMaterial(t){let e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){let a=new yn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(Jc),h.toneMapping=qn,h.autoClear=!1;let u=new bn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Ue(new Ie,u),_=!1,d=t.background;d?d.isColor&&(u.color.copy(d),t.background=null,_=!0):(u.color.copy(Jc),_=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;zr(s,E*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=p,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(s-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new Ue(this._lodPlanes[s],c),m=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Fi-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):Fi;d>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Fi}`);let f=[],E=0;for(let C=0;C<Fi;++C){let I=C/_,M=Math.exp(-I*I/2);f.push(M),C===0?E+=M:C<d&&(E+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;m.envMap.value=t.texture,m.samples.value=d,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:x}=this;m.dTheta.value=g,m.mipInt.value=x-n;let y=this._sizeLods[s],k=3*y*(s>x-fs?s-x+fs:0),A=4*(this._cubeSize-y);zr(e,k,A,3*y,2*y),l.setRenderTarget(e),l.render(p,pa)}};function km(i){let t=[],e=[],n=[],s=i,r=i-fs+1+Zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-fs?l=Zc[o-i+fs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,p=1+c,m=[h,h,p,h,p,p,h,h,p,p,h,p],u=6,g=6,_=3,d=2,f=1,E=new Float32Array(_*g*u),x=new Float32Array(d*g*u),y=new Float32Array(f*g*u);for(let A=0;A<u;A++){let C=A%3*2/3-1,I=A>2?0:-1,M=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];E.set(M,_*g*A),x.set(m,d*g*A);let v=[A,A,A,A,A,A];y.set(v,f*g*A)}let k=new ze;k.setAttribute("position",new He(E,_)),k.setAttribute("uv",new He(x,d)),k.setAttribute("faceIndex",new He(y,f)),t.push(k),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(i,t,e){let n=new ri(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bm(i,t,e){let n=new Float32Array(Fi),s=new H(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Qc(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function th(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Hm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Na||l===Fa,h=l===ys||l===_s;if(c||h){let p=t.get(a),m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new uo(i)),p=c?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new uo(i)),p=c?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){let s={},r=new WeakMap;function o(p){let m=p.target;m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);for(let g in m.morphAttributes){let _=m.morphAttributes[g];for(let d=0,f=_.length;d<f;d++)t.remove(_[d])}m.removeEventListener("dispose",o),delete s[m.id];let u=r.get(m);u&&(t.remove(u),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(p){let m=p.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER);let u=p.morphAttributes;for(let g in u){let _=u[g];for(let d=0,f=_.length;d<f;d++)t.update(_[d],i.ARRAY_BUFFER)}}function c(p){let m=[],u=p.index,g=p.attributes.position,_=0;if(u!==null){let E=u.array;_=u.version;for(let x=0,y=E.length;x<y;x+=3){let k=E[x+0],A=E[x+1],C=E[x+2];m.push(k,A,A,C,C,k)}}else if(g!==void 0){let E=g.array;_=g.version;for(let x=0,y=E.length/3-1;x<y;x+=3){let k=x+0,A=x+1,C=x+2;m.push(k,A,A,C,C,k)}}else return;let d=new(Yh(m)?lo:ao)(m,1);d.version=_;let f=r.get(p);f&&t.remove(f),r.set(p,d)}function h(p){let m=r.get(p);if(m){let u=p.index;u!==null&&m.version<u.version&&c(p)}else c(p);return r.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*o),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*o,g),e.update(u,n,g))}function h(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let d=0;for(let f=0;f<g;f++)d+=u[f];e.update(d,n,1)}function p(m,u,g,_){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<m.length;f++)c(m[f]/o,u[f],_[f]);else{d.multiDrawElementsInstancedWEBGL(n,u,0,r,m,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=u[E]*_[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Xm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){let n=new WeakMap,s=new $e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==p){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};m!==void 0&&m.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],x=0;u===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,k=1;y>t.maxTextureSize&&(k=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*k*4*p),C=new so(A,y,k,p);C.type=Xn,C.needsUpdate=!0;let I=x*4;for(let v=0;v<p;v++){let b=d[v],P=f[v],S=E[v],z=y*k*4*v;for(let w=0;w<b.count;w++){let U=w*I;u===!0&&(s.fromBufferAttribute(b,w),A[z+U+0]=s.x,A[z+U+1]=s.y,A[z+U+2]=s.z,A[z+U+3]=0),g===!0&&(s.fromBufferAttribute(P,w),A[z+U+4]=s.x,A[z+U+5]=s.y,A[z+U+6]=s.z,A[z+U+7]=0),_===!0&&(s.fromBufferAttribute(S,w),A[z+U+8]=s.x,A[z+U+9]=s.y,A[z+U+10]=s.z,A[z+U+11]=S.itemSize===4?s.w:1)}}m={count:p,texture:C,size:new kt(y,k)},n.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,p=t.get(l,h);if(s.get(p)!==c&&(t.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return p}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var po=class extends Mn{constructor(t,e,n,s,r,o,a,l,c,h=ps){if(h!==ps&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Bi),n===void 0&&h===Ms&&(n=vs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kh=new Mn,eh=new po(1,1),jh=new so,Qh=new pl,tf=new ho,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),sn(e,n)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),sn(e,n)}}function t0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),sn(e,n)}}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function r0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function c0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=qh,r=eh):r=Kh,e.setTexture2D(t||r,s)}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function f0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function d0(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return u0}}function p0(i,t){i.uniform1fv(this.addr,t)}function m0(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function g0(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _0(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v0(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function b0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function E0(i,t){i.uniform4iv(this.addr,t)}function w0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function A0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function C0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Kh,r[o])}function I0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qh,r[o])}function P0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tf,r[o])}function L0(i,t,e){let n=this.cache,s=t.length,r=Oo(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jh,r[o])}function D0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return x0;case 35674:return y0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return M0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}},yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function ah(i,t){i.seq.push(t),i.map[t.id]=t}function U0(i,t,e){let n=i.name,s=n.length;for(_a.lastIndex=0;;){let r=_a.exec(n),o=_a.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ah(e,c===void 0?new xl(a,i,t):new yl(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new _l(a),ah(e,p)),e=p}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);U0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var N0=37297,F0=0;function z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ch=new Se;function O0(i){Pe._getMatrix(ch,Pe.workingColorSpace,i);let t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+z0(i.getShaderSource(t),o)}else return s}function k0(i,t){let e=O0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function B0(i,t){let e;switch(t){case Kf:e="Linear";break;case jf:e="Reinhard";break;case Qf:e="Cineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Or=new H;function H0(){Pe.getLuminanceCoefficients(Or);let i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function G0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(X0,Y0)}var q0=new Map;function Y0(i,t){let e=_e[t];if(e===void 0){let n=q0.get(t);if(n!==void 0)e=_e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace($0,Z0)}function Z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case _s:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function tg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=J0(e),c=K0(e),h=j0(e),p=Q0(e),m=tg(e),u=V0(e),g=G0(r),_=s.createProgram(),d,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),f.length>0&&(f+=`
`)):(d=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),f=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?_e.tonemapping_pars_fragment:"",e.toneMapping!==qn?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,k0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=vl(o),o=fh(o,e),o=uh(o,e),a=vl(a),a=fh(a,e),a=uh(a,e),o=dh(o),a=dh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=E+d+o,y=E+f+a,k=lh(s,s.VERTEX_SHADER,x),A=lh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,k),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(b){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_).trim(),S=s.getShaderInfoLog(k).trim(),z=s.getShaderInfoLog(A).trim(),w=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(w=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,k,A);else{let O=hh(s,k,"vertex"),V=hh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+O+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(S===""||z==="")&&(U=!1);U&&(b.diagnostics={runnable:w,programLog:P,vertexShader:{log:S,prefix:d},fragmentShader:{log:z,prefix:f}})}s.deleteShader(k),s.deleteShader(A),I=new gs(s,_),M=W0(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,N0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=A,this}var ng=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}};function ig(i,t,e,n,s,r,o){let a=new oo,l=new Ml,c=new Set,h=[],p=s.logarithmicDepthBuffer,m=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,v,b,P,S){let z=P.fog,w=S.geometry,U=M.isMeshStandardMaterial?P.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),V=O&&O.mapping===Fo?O.image.height:null,pt=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let Q=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,N=Q!==void 0?Q.length:0,Tt=0;w.morphAttributes.position!==void 0&&(Tt=1),w.morphAttributes.normal!==void 0&&(Tt=2),w.morphAttributes.color!==void 0&&(Tt=3);let It,L,W,it;if(pt){let j=Gn[pt];It=j.vertexShader,L=j.fragmentShader}else It=M.vertexShader,L=M.fragmentShader,l.update(M),W=l.getVertexShaderID(M),it=l.getFragmentShaderID(M);let X=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ut=S.isInstancedMesh===!0,Rt=S.isBatchedMesh===!0,Ft=!!M.map,nt=!!M.matcap,dt=!!O,B=!!M.aoMap,Vt=!!M.lightMap,Z=!!M.bumpMap,Y=!!M.normalMap,gt=!!M.displacementMap,q=!!M.emissiveMap,Lt=!!M.metalnessMap,F=!!M.roughnessMap,R=M.anisotropy>0,lt=M.clearcoat>0,_t=M.dispersion>0,Pt=M.iridescence>0,$=M.sheen>0,ot=M.transmission>0,at=R&&!!M.anisotropyMap,xt=lt&&!!M.clearcoatMap,At=lt&&!!M.clearcoatNormalMap,bt=lt&&!!M.clearcoatRoughnessMap,Nt=Pt&&!!M.iridescenceMap,Yt=Pt&&!!M.iridescenceThicknessMap,ie=$&&!!M.sheenColorMap,Jt=$&&!!M.sheenRoughnessMap,pe=!!M.specularMap,oe=!!M.specularColorMap,Te=!!M.specularIntensityMap,st=ot&&!!M.transmissionMap,$t=ot&&!!M.thicknessMap,Ct=!!M.gradientMap,zt=!!M.alphaMap,te=M.alphaTest>0,jt=!!M.alphaHash,ge=!!M.extensions,T=qn;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(T=i.toneMapping);let et={shaderID:pt,shaderType:M.type,shaderName:M.name,vertexShader:It,fragmentShader:L,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:it,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&S._colorsTexture!==null,instancing:ut,instancingColor:ut&&S.instanceColor!==null,instancingMorph:ut&&S.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:As,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:nt,envMap:dt,envMapMode:dt&&O.mapping,envMapCubeUVHeight:V,aoMap:B,lightMap:Vt,bumpMap:Z,normalMap:Y,displacementMap:m&&gt,emissiveMap:q,normalMapObjectSpace:Y&&M.normalMapType===au,normalMapTangentSpace:Y&&M.normalMapType===Xh,metalnessMap:Lt,roughnessMap:F,anisotropy:R,anisotropyMap:at,clearcoat:lt,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:bt,dispersion:_t,iridescence:Pt,iridescenceMap:Nt,iridescenceThicknessMap:Yt,sheen:$,sheenColorMap:ie,sheenRoughnessMap:Jt,specularMap:pe,specularColorMap:oe,specularIntensityMap:Te,transmission:ot,transmissionMap:st,thicknessMap:$t,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:zt,alphaTest:te,alphaHash:jt,combine:M.combine,mapUv:Ft&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:Vt&&_(M.lightMap.channel),bumpMapUv:Z&&_(M.bumpMap.channel),normalMapUv:Y&&_(M.normalMap.channel),displacementMapUv:gt&&_(M.displacementMap.channel),emissiveMapUv:q&&_(M.emissiveMap.channel),metalnessMapUv:Lt&&_(M.metalnessMap.channel),roughnessMapUv:F&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:xt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&_(M.sheenRoughnessMap.channel),specularMapUv:pe&&_(M.specularMap.channel),specularColorMapUv:oe&&_(M.specularColorMap.channel),specularIntensityMapUv:Te&&_(M.specularIntensityMap.channel),transmissionMapUv:st&&_(M.transmissionMap.channel),thicknessMapUv:$t&&_(M.thicknessMap.channel),alphaMapUv:zt&&_(M.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(Y||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!w.attributes.uv&&(Ft||zt),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:tt,skinning:S.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Tt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:T,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&Pe.getTransfer(M.map.colorSpace)===Ne,decodeVideoTextureEmissive:q&&M.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(M.emissiveMap.colorSpace)===Ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ge&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&M.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function f(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let b in M.defines)v.push(b),v.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(E(v,M),x(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function E(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function x(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let v=g[M.type],b;if(v){let P=Gn[v];b=sc.clone(P.uniforms)}else b=M.uniforms;return b}function k(M,v){let b;for(let P=0,S=h.length;P<S;P++){let z=h[P];if(z.cacheKey===v){b=z,++b.usedTimes;break}}return b===void 0&&(b=new eg(i,v,M,r),h.push(b)),b}function A(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:y,acquireProgram:k,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function sg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p,m,u,g,_,d){let f=i[t];return f===void 0?(f={id:p.id,object:p,geometry:m,material:u,groupOrder:g,renderOrder:p.renderOrder,z:_,group:d},i[t]=f):(f.id=p.id,f.object=p,f.geometry=m,f.material=u,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=_,f.group=d),t++,f}function a(p,m,u,g,_,d){let f=o(p,m,u,g,_,d);u.transmission>0?n.push(f):u.transparent===!0?s.push(f):e.push(f)}function l(p,m,u,g,_,d){let f=o(p,m,u,g,_,d);u.transmission>0?n.unshift(f):u.transparent===!0?s.unshift(f):e.unshift(f)}function c(p,m){e.length>1&&e.sort(p||rg),n.length>1&&n.sort(m||mh),s.length>1&&s.sort(m||mh)}function h(){for(let p=t,m=i.length;p<m;p++){let u=i[p];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function og(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ag(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new le};break;case"SpotLight":e={position:new H,direction:new H,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function lg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cg=0;function hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fg(i){let t=new ag,e=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new Re,o=new Re;function a(c){let h=0,p=0,m=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,_=0,d=0,f=0,E=0,x=0,y=0,k=0,A=0,C=0;c.sort(hg);for(let M=0,v=c.length;M<v;M++){let b=c[M],P=b.color,S=b.intensity,z=b.distance,w=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=P.r*S,p+=P.g*S,m+=P.b*S;else if(b.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(b.sh.coefficients[U],S);C++}else if(b.isDirectionalLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let O=b.shadow,V=e.get(b);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=w,n.directionalShadowMatrix[u]=b.shadow.matrix,E++}n.directional[u]=U,u++}else if(b.isSpotLight){let U=t.get(b);U.position.setFromMatrixPosition(b.matrixWorld),U.color.copy(P).multiplyScalar(S),U.distance=z,U.coneCos=Math.cos(b.angle),U.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),U.decay=b.decay,n.spot[_]=U;let O=b.shadow;if(b.map&&(n.spotLightMap[k]=b.map,k++,O.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[_]=O.matrix,b.castShadow){let V=e.get(b);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=w,y++}_++}else if(b.isRectAreaLight){let U=t.get(b);U.color.copy(P).multiplyScalar(S),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),n.rectArea[d]=U,d++}else if(b.isPointLight){let U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity),U.distance=b.distance,U.decay=b.decay,b.castShadow){let O=b.shadow,V=e.get(b);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,V.shadowCameraNear=O.camera.near,V.shadowCameraFar=O.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=w,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=U,g++}else if(b.isHemisphereLight){let U=t.get(b);U.skyColor.copy(b.color).multiplyScalar(S),U.groundColor.copy(b.groundColor).multiplyScalar(S),n.hemi[f]=U,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Kt.LTC_FLOAT_1,n.rectAreaLTC2=Kt.LTC_FLOAT_2):(n.rectAreaLTC1=Kt.LTC_HALF_1,n.rectAreaLTC2=Kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=m;let I=n.hash;(I.directionalLength!==u||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==d||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==k||I.numLightProbes!==C)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+k-A,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=u,I.pointLength=g,I.spotLength=_,I.rectAreaLength=d,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=k,I.numLightProbes=C,n.version=cg++)}function l(c,h){let p=0,m=0,u=0,g=0,_=0,d=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){let x=c[f];if(x.isDirectionalLight){let y=n.directional[p];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),p++}else if(x.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),u++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),m++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),_++}}}return{setup:a,setupView:l,state:n}}function xh(i){let t=new fg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ug(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xh(i),t.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sl=class extends ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dg=`void main() {
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
}`;function mg(i,t,e){let n=new Ks,s=new kt,r=new kt,o=new $e,a=new Sl({depthPacking:ou}),l=new El,c={},h=e.maxTextureSize,p={[Mi]:hn,[hn]:Mi,[Je]:Je},m=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:dg,fragmentShader:pg}),u=m.clone();u.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ue(g,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let f=this.type;this.render=function(A,C,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),P=i.state;P.setBlending(_i),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let S=f!==ti&&this.type===ti,z=f===ti&&this.type!==ti;for(let w=0,U=A.length;w<U;w++){let O=A[w],V=O.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let pt=V.getFrameExtents();if(s.multiply(pt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,V.mapSize.y=r.y)),V.map===null||S===!0||z===!0){let N=this.type!==ti?{minFilter:_n,magFilter:_n}:{};V.map!==null&&V.map.dispose(),V.map=new ri(s.x,s.y,N),V.map.texture.name=O.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let Q=V.getViewportCount();for(let N=0;N<Q;N++){let Tt=V.getViewport(N);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),P.viewport(o),V.updateMatrices(O,N),n=V.getFrustum(),y(C,I,V.camera,O,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&E(V,I),V.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(M,v,b)};function E(A,C){let I=t.update(_);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ri(s.x,s.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,I,m,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,I,u,_,null)}function x(A,C,I,M){let v=null,b=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)v=b;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let P=v.uuid,S=C.uuid,z=c[P];z===void 0&&(z={},c[P]=z);let w=z[S];w===void 0&&(w=v.clone(),z[S]=w,C.addEventListener("dispose",k)),v=w}if(v.visible=C.visible,v.wireframe=C.wireframe,M===ti?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:p[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let P=i.properties.get(v);P.light=I}return v}function y(A,C,I,M,v){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ti)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let S=t.update(A),z=A.material;if(Array.isArray(z)){let w=S.groups;for(let U=0,O=w.length;U<O;U++){let V=w[U],pt=z[V.materialIndex];if(pt&&pt.visible){let Q=x(A,pt,M,v);A.onBeforeShadow(i,A,C,I,S,Q,V),i.renderBufferDirect(I,null,S,Q,A,V),A.onAfterShadow(i,A,C,I,S,Q,V)}}}else if(z.visible){let w=x(A,z,M,v);A.onBeforeShadow(i,A,C,I,S,w,null),i.renderBufferDirect(I,null,S,w,A,null),A.onAfterShadow(i,A,C,I,S,w,null)}}let P=A.children;for(let S=0,z=P.length;S<z;S++)y(P[S],C,I,M,v)}function k(A){A.target.removeEventListener("dispose",k);for(let I in c){let M=c[I],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var gg={[Ra]:Ca,[Ia]:Da,[Pa]:Ua,[xs]:La,[Ca]:Ra,[Da]:Ia,[Ua]:Pa,[La]:xs};function xg(i,t){function e(){let st=!1,$t=new $e,Ct=null,zt=new $e(0,0,0,0);return{setMask:function(te){Ct!==te&&!st&&(i.colorMask(te,te,te,te),Ct=te)},setLocked:function(te){st=te},setClear:function(te,jt,ge,T,et){et===!0&&(te*=T,jt*=T,ge*=T),$t.set(te,jt,ge,T),zt.equals($t)===!1&&(i.clearColor(te,jt,ge,T),zt.copy($t))},reset:function(){st=!1,Ct=null,zt.set(-1,0,0,0)}}}function n(){let st=!1,$t=!1,Ct=null,zt=null,te=null;return{setReversed:function(jt){if($t!==jt){let ge=t.get("EXT_clip_control");$t?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT);let T=te;te=null,this.setClear(T)}$t=jt},getReversed:function(){return $t},setTest:function(jt){jt?X(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(jt){Ct!==jt&&!st&&(i.depthMask(jt),Ct=jt)},setFunc:function(jt){if($t&&(jt=gg[jt]),zt!==jt){switch(jt){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=jt}},setLocked:function(jt){st=jt},setClear:function(jt){te!==jt&&($t&&(jt=1-jt),i.clearDepth(jt),te=jt)},reset:function(){st=!1,Ct=null,zt=null,te=null,$t=!1}}}function s(){let st=!1,$t=null,Ct=null,zt=null,te=null,jt=null,ge=null,T=null,et=null;return{setTest:function(j){st||(j?X(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(j){$t!==j&&!st&&(i.stencilMask(j),$t=j)},setFunc:function(j,ct,vt){(Ct!==j||zt!==ct||te!==vt)&&(i.stencilFunc(j,ct,vt),Ct=j,zt=ct,te=vt)},setOp:function(j,ct,vt){(jt!==j||ge!==ct||T!==vt)&&(i.stencilOp(j,ct,vt),jt=j,ge=ct,T=vt)},setLocked:function(j){st=j},setClear:function(j){et!==j&&(i.clearStencil(j),et=j)},reset:function(){st=!1,$t=null,Ct=null,zt=null,te=null,jt=null,ge=null,T=null,et=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},p={},m=new WeakMap,u=[],g=null,_=!1,d=null,f=null,E=null,x=null,y=null,k=null,A=null,C=new le(0,0,0),I=0,M=!1,v=null,b=null,P=null,S=null,z=null,w=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,O=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=O>=2);let pt=null,Q={},N=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),It=new $e().fromArray(N),L=new $e().fromArray(Tt);function W(st,$t,Ct,zt){let te=new Uint8Array(4),jt=i.createTexture();i.bindTexture(st,jt),i.texParameteri(st,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(st,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<Ct;ge++)st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?i.texImage3D($t,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D($t+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return jt}let it={};it[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(xs),Z(!1),Y(_c),X(i.CULL_FACE),B(_i);function X(st){h[st]!==!0&&(i.enable(st),h[st]=!0)}function tt(st){h[st]!==!1&&(i.disable(st),h[st]=!1)}function ut(st,$t){return p[st]!==$t?(i.bindFramebuffer(st,$t),p[st]=$t,st===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=$t),st===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=$t),!0):!1}function Rt(st,$t){let Ct=u,zt=!1;if(st){Ct=m.get($t),Ct===void 0&&(Ct=[],m.set($t,Ct));let te=st.textures;if(Ct.length!==te.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,ge=te.length;jt<ge;jt++)Ct[jt]=i.COLOR_ATTACHMENT0+jt;Ct.length=te.length,zt=!0}}else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,zt=!0);zt&&i.drawBuffers(Ct)}function Ft(st){return g!==st?(i.useProgram(st),g=st,!0):!1}let nt={[Ni]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Df]:i.FUNC_REVERSE_SUBTRACT};nt[Uf]=i.MIN,nt[Nf]=i.MAX;let dt={[Ff]:i.ZERO,[zf]:i.ONE,[Of]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function B(st,$t,Ct,zt,te,jt,ge,T,et,j){if(st===_i){_===!0&&(tt(i.BLEND),_=!1);return}if(_===!1&&(X(i.BLEND),_=!0),st!==Pf){if(st!==d||j!==M){if((f!==Ni||y!==Ni)&&(i.blendEquation(i.FUNC_ADD),f=Ni,y=Ni),j)switch(st){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",st);break}else switch(st){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",st);break}E=null,x=null,k=null,A=null,C.set(0,0,0),I=0,d=st,M=j}return}te=te||$t,jt=jt||Ct,ge=ge||zt,($t!==f||te!==y)&&(i.blendEquationSeparate(nt[$t],nt[te]),f=$t,y=te),(Ct!==E||zt!==x||jt!==k||ge!==A)&&(i.blendFuncSeparate(dt[Ct],dt[zt],dt[jt],dt[ge]),E=Ct,x=zt,k=jt,A=ge),(T.equals(C)===!1||et!==I)&&(i.blendColor(T.r,T.g,T.b,et),C.copy(T),I=et),d=st,M=!1}function Vt(st,$t){st.side===Je?tt(i.CULL_FACE):X(i.CULL_FACE);let Ct=st.side===hn;$t&&(Ct=!Ct),Z(Ct),st.blending===ds&&st.transparent===!1?B(_i):B(st.blending,st.blendEquation,st.blendSrc,st.blendDst,st.blendEquationAlpha,st.blendSrcAlpha,st.blendDstAlpha,st.blendColor,st.blendAlpha,st.premultipliedAlpha),o.setFunc(st.depthFunc),o.setTest(st.depthTest),o.setMask(st.depthWrite),r.setMask(st.colorWrite);let zt=st.stencilWrite;a.setTest(zt),zt&&(a.setMask(st.stencilWriteMask),a.setFunc(st.stencilFunc,st.stencilRef,st.stencilFuncMask),a.setOp(st.stencilFail,st.stencilZFail,st.stencilZPass)),q(st.polygonOffset,st.polygonOffsetFactor,st.polygonOffsetUnits),st.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(st){v!==st&&(st?i.frontFace(i.CW):i.frontFace(i.CCW),v=st)}function Y(st){st!==Cf?(X(i.CULL_FACE),st!==b&&(st===_c?i.cullFace(i.BACK):st===If?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),b=st}function gt(st){st!==P&&(U&&i.lineWidth(st),P=st)}function q(st,$t,Ct){st?(X(i.POLYGON_OFFSET_FILL),(S!==$t||z!==Ct)&&(i.polygonOffset($t,Ct),S=$t,z=Ct)):tt(i.POLYGON_OFFSET_FILL)}function Lt(st){st?X(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function F(st){st===void 0&&(st=i.TEXTURE0+w-1),pt!==st&&(i.activeTexture(st),pt=st)}function R(st,$t,Ct){Ct===void 0&&(pt===null?Ct=i.TEXTURE0+w-1:Ct=pt);let zt=Q[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},Q[Ct]=zt),(zt.type!==st||zt.texture!==$t)&&(pt!==Ct&&(i.activeTexture(Ct),pt=Ct),i.bindTexture(st,$t||it[st]),zt.type=st,zt.texture=$t)}function lt(){let st=Q[pt];st!==void 0&&st.type!==void 0&&(i.bindTexture(st.type,null),st.type=void 0,st.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function ot(){try{i.texSubImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Nt(){try{i.texImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function ie(st){It.equals(st)===!1&&(i.scissor(st.x,st.y,st.z,st.w),It.copy(st))}function Jt(st){L.equals(st)===!1&&(i.viewport(st.x,st.y,st.z,st.w),L.copy(st))}function pe(st,$t){let Ct=c.get($t);Ct===void 0&&(Ct=new WeakMap,c.set($t,Ct));let zt=Ct.get(st);zt===void 0&&(zt=i.getUniformBlockIndex($t,st.name),Ct.set(st,zt))}function oe(st,$t){let zt=c.get($t).get(st);l.get($t)!==zt&&(i.uniformBlockBinding($t,zt,st.__bindingPointIndex),l.set($t,zt))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,Q={},p={},m=new WeakMap,u=[],g=null,_=!1,d=null,f=null,E=null,x=null,y=null,k=null,A=null,C=new le(0,0,0),I=0,M=!1,v=null,b=null,P=null,S=null,z=null,It.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:tt,bindFramebuffer:ut,drawBuffers:Rt,useProgram:Ft,setBlending:B,setMaterial:Vt,setFlipSided:Z,setCullFace:Y,setLineWidth:gt,setPolygonOffset:q,setScissorTest:Lt,activeTexture:F,bindTexture:R,unbindTexture:lt,compressedTexImage2D:_t,compressedTexImage3D:Pt,texImage2D:Nt,texImage3D:Yt,updateUBOMapping:pe,uniformBlockBinding:oe,texStorage2D:At,texStorage3D:bt,texSubImage2D:$,texSubImage3D:ot,compressedTexSubImage2D:at,compressedTexSubImage3D:xt,scissor:ie,viewport:Jt,reset:Te}}function yh(i,t,e,n){let s=yg(n);switch(e){case kh:return i*t;case Hh:return i*t;case Vh:return i*t*2;case Ql:return i*t/s.components*s.byteLength;case tc:return i*t/s.components*s.byteLength;case Gh:return i*t*2/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case nc:return i*t*4/s.components*s.byteLength;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wh:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yg(i){switch(i){case si:case Fh:return{byteLength:1,components:1};case Zs:case zh:case cr:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case Bi:case Jl:case Xn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _g(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap,p,m=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,R){return u?new OffscreenCanvas(F,R):no("canvas")}function _(F,R,lt){let _t=1,Pt=Lt(F);if((Pt.width>lt||Pt.height>lt)&&(_t=lt/Math.max(Pt.width,Pt.height)),_t<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let $=Math.floor(_t*Pt.width),ot=Math.floor(_t*Pt.height);p===void 0&&(p=g($,ot));let at=R?g($,ot):p;return at.width=$,at.height=ot,at.getContext("2d").drawImage(F,0,0,$,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pt.width+"x"+Pt.height+") to ("+$+"x"+ot+")."),at}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pt.width+"x"+Pt.height+")."),F;return F}function d(F){return F.generateMipmaps}function f(F){i.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(F,R,lt,_t,Pt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let $=R;if(R===i.RED&&(lt===i.FLOAT&&($=i.R32F),lt===i.HALF_FLOAT&&($=i.R16F),lt===i.UNSIGNED_BYTE&&($=i.R8)),R===i.RED_INTEGER&&(lt===i.UNSIGNED_BYTE&&($=i.R8UI),lt===i.UNSIGNED_SHORT&&($=i.R16UI),lt===i.UNSIGNED_INT&&($=i.R32UI),lt===i.BYTE&&($=i.R8I),lt===i.SHORT&&($=i.R16I),lt===i.INT&&($=i.R32I)),R===i.RG&&(lt===i.FLOAT&&($=i.RG32F),lt===i.HALF_FLOAT&&($=i.RG16F),lt===i.UNSIGNED_BYTE&&($=i.RG8)),R===i.RG_INTEGER&&(lt===i.UNSIGNED_BYTE&&($=i.RG8UI),lt===i.UNSIGNED_SHORT&&($=i.RG16UI),lt===i.UNSIGNED_INT&&($=i.RG32UI),lt===i.BYTE&&($=i.RG8I),lt===i.SHORT&&($=i.RG16I),lt===i.INT&&($=i.RG32I)),R===i.RGB_INTEGER&&(lt===i.UNSIGNED_BYTE&&($=i.RGB8UI),lt===i.UNSIGNED_SHORT&&($=i.RGB16UI),lt===i.UNSIGNED_INT&&($=i.RGB32UI),lt===i.BYTE&&($=i.RGB8I),lt===i.SHORT&&($=i.RGB16I),lt===i.INT&&($=i.RGB32I)),R===i.RGBA_INTEGER&&(lt===i.UNSIGNED_BYTE&&($=i.RGBA8UI),lt===i.UNSIGNED_SHORT&&($=i.RGBA16UI),lt===i.UNSIGNED_INT&&($=i.RGBA32UI),lt===i.BYTE&&($=i.RGBA8I),lt===i.SHORT&&($=i.RGBA16I),lt===i.INT&&($=i.RGBA32I)),R===i.RGB&&lt===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),R===i.RGBA){let ot=Pt?zo:Pe.getTransfer(_t);lt===i.FLOAT&&($=i.RGBA32F),lt===i.HALF_FLOAT&&($=i.RGBA16F),lt===i.UNSIGNED_BYTE&&($=ot===Ne?i.SRGB8_ALPHA8:i.RGBA8),lt===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),lt===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(F,R){let lt;return F?R===null||R===Bi||R===vs?lt=i.DEPTH24_STENCIL8:R===Xn?lt=i.DEPTH32F_STENCIL8:R===Zs&&(lt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Bi||R===vs?lt=i.DEPTH_COMPONENT24:R===Xn?lt=i.DEPTH_COMPONENT32F:R===Zs&&(lt=i.DEPTH_COMPONENT16),lt}function k(F,R){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==_n&&F.minFilter!==Wn?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function A(F){let R=F.target;R.removeEventListener("dispose",A),I(R),R.isVideoTexture&&h.delete(R)}function C(F){let R=F.target;R.removeEventListener("dispose",C),v(R)}function I(F){let R=n.get(F);if(R.__webglInit===void 0)return;let lt=F.source,_t=m.get(lt);if(_t){let Pt=_t[R.__cacheKey];Pt.usedTimes--,Pt.usedTimes===0&&M(F),Object.keys(_t).length===0&&m.delete(lt)}n.remove(F)}function M(F){let R=n.get(F);i.deleteTexture(R.__webglTexture);let lt=F.source,_t=m.get(lt);delete _t[R.__cacheKey],o.memory.textures--}function v(F){let R=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(R.__webglFramebuffer[_t]))for(let Pt=0;Pt<R.__webglFramebuffer[_t].length;Pt++)i.deleteFramebuffer(R.__webglFramebuffer[_t][Pt]);else i.deleteFramebuffer(R.__webglFramebuffer[_t]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[_t])}else{if(Array.isArray(R.__webglFramebuffer))for(let _t=0;_t<R.__webglFramebuffer.length;_t++)i.deleteFramebuffer(R.__webglFramebuffer[_t]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _t=0;_t<R.__webglColorRenderbuffer.length;_t++)R.__webglColorRenderbuffer[_t]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[_t]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let lt=F.textures;for(let _t=0,Pt=lt.length;_t<Pt;_t++){let $=n.get(lt[_t]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(lt[_t])}n.remove(F)}let b=0;function P(){b=0}function S(){let F=b;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),b+=1,F}function z(F){let R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function w(F,R){let lt=n.get(F);if(F.isVideoTexture&&gt(F),F.isRenderTargetTexture===!1&&F.version>0&&lt.__version!==F.version){let _t=F.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(lt,F,R);return}}e.bindTexture(i.TEXTURE_2D,lt.__webglTexture,i.TEXTURE0+R)}function U(F,R){let lt=n.get(F);if(F.version>0&&lt.__version!==F.version){L(lt,F,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,lt.__webglTexture,i.TEXTURE0+R)}function O(F,R){let lt=n.get(F);if(F.version>0&&lt.__version!==F.version){L(lt,F,R);return}e.bindTexture(i.TEXTURE_3D,lt.__webglTexture,i.TEXTURE0+R)}function V(F,R){let lt=n.get(F);if(F.version>0&&lt.__version!==F.version){W(lt,F,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture,i.TEXTURE0+R)}let pt={[ki]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},Q={[_n]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},N={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[qh]:i.LEQUAL,[hu]:i.EQUAL,[du]:i.GEQUAL,[fu]:i.GREATER,[uu]:i.NOTEQUAL};function Tt(F,R){if(R.type===Xn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Wn||R.magFilter===qo||R.magFilter===yr||R.magFilter===Oi||R.minFilter===Wn||R.minFilter===qo||R.minFilter===yr||R.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,pt[R.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,pt[R.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,pt[R.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Q[R.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Q[R.minFilter]),R.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,N[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_n||R.minFilter!==yr&&R.minFilter!==Oi||R.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let lt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function It(F,R){let lt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",A));let _t=R.source,Pt=m.get(_t);Pt===void 0&&(Pt={},m.set(_t,Pt));let $=z(R);if($!==F.__cacheKey){Pt[$]===void 0&&(Pt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,lt=!0),Pt[$].usedTimes++;let ot=Pt[F.__cacheKey];ot!==void 0&&(Pt[F.__cacheKey].usedTimes--,ot.usedTimes===0&&M(R)),F.__cacheKey=$,F.__webglTexture=Pt[$].texture}return lt}function L(F,R,lt){let _t=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_t=i.TEXTURE_3D);let Pt=It(F,R),$=R.source;e.bindTexture(_t,F.__webglTexture,i.TEXTURE0+lt);let ot=n.get($);if($.version!==ot.__version||Pt===!0){e.activeTexture(i.TEXTURE0+lt);let at=Pe.getPrimaries(Pe.workingColorSpace),xt=R.colorSpace===xi?null:Pe.getPrimaries(R.colorSpace),At=R.colorSpace===xi||at===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let bt=_(R.image,!1,s.maxTextureSize);bt=q(R,bt);let Nt=r.convert(R.format,R.colorSpace),Yt=r.convert(R.type),ie=x(R.internalFormat,Nt,Yt,R.colorSpace,R.isVideoTexture);Tt(_t,R);let Jt,pe=R.mipmaps,oe=R.isVideoTexture!==!0,Te=ot.__version===void 0||Pt===!0,st=$.dataReady,$t=k(R,bt);if(R.isDepthTexture)ie=y(R.format===Ms,R.type),Te&&(oe?e.texStorage2D(i.TEXTURE_2D,1,ie,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,ie,bt.width,bt.height,0,Nt,Yt,null));else if(R.isDataTexture)if(pe.length>0){oe&&Te&&e.texStorage2D(i.TEXTURE_2D,$t,ie,pe[0].width,pe[0].height);for(let Ct=0,zt=pe.length;Ct<zt;Ct++)Jt=pe[Ct],oe?st&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,Jt.width,Jt.height,Nt,Yt,Jt.data):e.texImage2D(i.TEXTURE_2D,Ct,ie,Jt.width,Jt.height,0,Nt,Yt,Jt.data);R.generateMipmaps=!1}else oe?(Te&&e.texStorage2D(i.TEXTURE_2D,$t,ie,bt.width,bt.height),st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Nt,Yt,bt.data)):e.texImage2D(i.TEXTURE_2D,0,ie,bt.width,bt.height,0,Nt,Yt,bt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){oe&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,ie,pe[0].width,pe[0].height,bt.depth);for(let Ct=0,zt=pe.length;Ct<zt;Ct++)if(Jt=pe[Ct],R.format!==Tn)if(Nt!==null)if(oe){if(st)if(R.layerUpdates.size>0){let te=yh(Jt.width,Jt.height,R.format,R.type);for(let jt of R.layerUpdates){let ge=Jt.data.subarray(jt*te/Jt.data.BYTES_PER_ELEMENT,(jt+1)*te/Jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,jt,Jt.width,Jt.height,1,Nt,ge)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,Jt.width,Jt.height,bt.depth,Nt,Jt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ct,ie,Jt.width,Jt.height,bt.depth,0,Jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,Jt.width,Jt.height,bt.depth,Nt,Yt,Jt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Ct,ie,Jt.width,Jt.height,bt.depth,0,Nt,Yt,Jt.data)}else{oe&&Te&&e.texStorage2D(i.TEXTURE_2D,$t,ie,pe[0].width,pe[0].height);for(let Ct=0,zt=pe.length;Ct<zt;Ct++)Jt=pe[Ct],R.format!==Tn?Nt!==null?oe?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,Ct,0,0,Jt.width,Jt.height,Nt,Jt.data):e.compressedTexImage2D(i.TEXTURE_2D,Ct,ie,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?st&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,Jt.width,Jt.height,Nt,Yt,Jt.data):e.texImage2D(i.TEXTURE_2D,Ct,ie,Jt.width,Jt.height,0,Nt,Yt,Jt.data)}else if(R.isDataArrayTexture)if(oe){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,ie,bt.width,bt.height,bt.depth),st)if(R.layerUpdates.size>0){let Ct=yh(bt.width,bt.height,R.format,R.type);for(let zt of R.layerUpdates){let te=bt.data.subarray(zt*Ct/bt.data.BYTES_PER_ELEMENT,(zt+1)*Ct/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,bt.width,bt.height,1,Nt,Yt,te)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Nt,Yt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,bt.width,bt.height,bt.depth,0,Nt,Yt,bt.data);else if(R.isData3DTexture)oe?(Te&&e.texStorage3D(i.TEXTURE_3D,$t,ie,bt.width,bt.height,bt.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Nt,Yt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,ie,bt.width,bt.height,bt.depth,0,Nt,Yt,bt.data);else if(R.isFramebufferTexture){if(Te)if(oe)e.texStorage2D(i.TEXTURE_2D,$t,ie,bt.width,bt.height);else{let Ct=bt.width,zt=bt.height;for(let te=0;te<$t;te++)e.texImage2D(i.TEXTURE_2D,te,ie,Ct,zt,0,Nt,Yt,null),Ct>>=1,zt>>=1}}else if(pe.length>0){if(oe&&Te){let Ct=Lt(pe[0]);e.texStorage2D(i.TEXTURE_2D,$t,ie,Ct.width,Ct.height)}for(let Ct=0,zt=pe.length;Ct<zt;Ct++)Jt=pe[Ct],oe?st&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,Nt,Yt,Jt):e.texImage2D(i.TEXTURE_2D,Ct,ie,Nt,Yt,Jt);R.generateMipmaps=!1}else if(oe){if(Te){let Ct=Lt(bt);e.texStorage2D(i.TEXTURE_2D,$t,ie,Ct.width,Ct.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Nt,Yt,bt)}else e.texImage2D(i.TEXTURE_2D,0,ie,Nt,Yt,bt);d(R)&&f(_t),ot.__version=$.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function W(F,R,lt){if(R.image.length!==6)return;let _t=It(F,R),Pt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+lt);let $=n.get(Pt);if(Pt.version!==$.__version||_t===!0){e.activeTexture(i.TEXTURE0+lt);let ot=Pe.getPrimaries(Pe.workingColorSpace),at=R.colorSpace===xi?null:Pe.getPrimaries(R.colorSpace),xt=R.colorSpace===xi||ot===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let At=R.isCompressedTexture||R.image[0].isCompressedTexture,bt=R.image[0]&&R.image[0].isDataTexture,Nt=[];for(let zt=0;zt<6;zt++)!At&&!bt?Nt[zt]=_(R.image[zt],!0,s.maxCubemapSize):Nt[zt]=bt?R.image[zt].image:R.image[zt],Nt[zt]=q(R,Nt[zt]);let Yt=Nt[0],ie=r.convert(R.format,R.colorSpace),Jt=r.convert(R.type),pe=x(R.internalFormat,ie,Jt,R.colorSpace),oe=R.isVideoTexture!==!0,Te=$.__version===void 0||_t===!0,st=Pt.dataReady,$t=k(R,Yt);Tt(i.TEXTURE_CUBE_MAP,R);let Ct;if(At){oe&&Te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,pe,Yt.width,Yt.height);for(let zt=0;zt<6;zt++){Ct=Nt[zt].mipmaps;for(let te=0;te<Ct.length;te++){let jt=Ct[te];R.format!==Tn?ie!==null?oe?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te,0,0,jt.width,jt.height,ie,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te,pe,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te,0,0,jt.width,jt.height,ie,Jt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te,pe,jt.width,jt.height,0,ie,Jt,jt.data)}}}else{if(Ct=R.mipmaps,oe&&Te){Ct.length>0&&$t++;let zt=Lt(Nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,pe,zt.width,zt.height)}for(let zt=0;zt<6;zt++)if(bt){oe?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,0,0,Nt[zt].width,Nt[zt].height,ie,Jt,Nt[zt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,pe,Nt[zt].width,Nt[zt].height,0,ie,Jt,Nt[zt].data);for(let te=0;te<Ct.length;te++){let ge=Ct[te].image[zt].image;oe?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te+1,0,0,ge.width,ge.height,ie,Jt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te+1,pe,ge.width,ge.height,0,ie,Jt,ge.data)}}else{oe?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,0,0,ie,Jt,Nt[zt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,pe,ie,Jt,Nt[zt]);for(let te=0;te<Ct.length;te++){let jt=Ct[te];oe?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te+1,0,0,ie,Jt,jt.image[zt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+zt,te+1,pe,ie,Jt,jt.image[zt])}}}d(R)&&f(i.TEXTURE_CUBE_MAP),$.__version=Pt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function it(F,R,lt,_t,Pt,$){let ot=r.convert(lt.format,lt.colorSpace),at=r.convert(lt.type),xt=x(lt.internalFormat,ot,at,lt.colorSpace),At=n.get(R),bt=n.get(lt);if(bt.__renderTarget=R,!At.__hasExternalTextures){let Nt=Math.max(1,R.width>>$),Yt=Math.max(1,R.height>>$);Pt===i.TEXTURE_3D||Pt===i.TEXTURE_2D_ARRAY?e.texImage3D(Pt,$,xt,Nt,Yt,R.depth,0,ot,at,null):e.texImage2D(Pt,$,xt,Nt,Yt,0,ot,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Y(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,Pt,bt.__webglTexture,0,Z(R)):(Pt===i.TEXTURE_2D||Pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,Pt,bt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(F,R,lt){if(i.bindRenderbuffer(i.RENDERBUFFER,F),R.depthBuffer){let _t=R.depthTexture,Pt=_t&&_t.isDepthTexture?_t.type:null,$=y(R.stencilBuffer,Pt),ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Z(R);Y(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,$,R.width,R.height):lt?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,$,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,$,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,F)}else{let _t=R.textures;for(let Pt=0;Pt<_t.length;Pt++){let $=_t[Pt],ot=r.convert($.format,$.colorSpace),at=r.convert($.type),xt=x($.internalFormat,ot,at,$.colorSpace),At=Z(R);lt&&Y(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,xt,R.width,R.height):Y(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,xt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,xt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let _t=n.get(R.depthTexture);_t.__renderTarget=R,(!_t.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),w(R.depthTexture,0);let Pt=_t.__webglTexture,$=Z(R);if(R.depthTexture.format===ps)Y(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Pt,0);else if(R.depthTexture.format===Ms)Y(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Pt,0);else throw new Error("Unknown depthTexture format")}function ut(F){let R=n.get(F),lt=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){let _t=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_t){let Pt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_t.removeEventListener("dispose",Pt)};_t.addEventListener("dispose",Pt),R.__depthDisposeCallback=Pt}R.__boundDepthTexture=_t}if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");tt(R.__webglFramebuffer,F)}else if(lt){R.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[_t]),R.__webglDepthbuffer[_t]===void 0)R.__webglDepthbuffer[_t]=i.createRenderbuffer(),X(R.__webglDepthbuffer[_t],F,!1);else{let Pt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=R.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),X(R.__webglDepthbuffer,F,!1);else{let _t=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,Pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(F,R,lt){let _t=n.get(F);R!==void 0&&it(_t.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),lt!==void 0&&ut(F)}function Ft(F){let R=F.texture,lt=n.get(F),_t=n.get(R);F.addEventListener("dispose",C);let Pt=F.textures,$=F.isWebGLCubeRenderTarget===!0,ot=Pt.length>1;if(ot||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=R.version,o.memory.textures++),$){lt.__webglFramebuffer=[];for(let at=0;at<6;at++)if(R.mipmaps&&R.mipmaps.length>0){lt.__webglFramebuffer[at]=[];for(let xt=0;xt<R.mipmaps.length;xt++)lt.__webglFramebuffer[at][xt]=i.createFramebuffer()}else lt.__webglFramebuffer[at]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){lt.__webglFramebuffer=[];for(let at=0;at<R.mipmaps.length;at++)lt.__webglFramebuffer[at]=i.createFramebuffer()}else lt.__webglFramebuffer=i.createFramebuffer();if(ot)for(let at=0,xt=Pt.length;at<xt;at++){let At=n.get(Pt[at]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Y(F)===!1){lt.__webglMultisampledFramebuffer=i.createFramebuffer(),lt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let at=0;at<Pt.length;at++){let xt=Pt[at];lt.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,lt.__webglColorRenderbuffer[at]);let At=r.convert(xt.format,xt.colorSpace),bt=r.convert(xt.type),Nt=x(xt.internalFormat,At,bt,xt.colorSpace,F.isXRRenderTarget===!0),Yt=Z(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Nt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,lt.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(lt.__webglDepthRenderbuffer=i.createRenderbuffer(),X(lt.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,R);for(let at=0;at<6;at++)if(R.mipmaps&&R.mipmaps.length>0)for(let xt=0;xt<R.mipmaps.length;xt++)it(lt.__webglFramebuffer[at][xt],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt);else it(lt.__webglFramebuffer[at],F,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);d(R)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let at=0,xt=Pt.length;at<xt;at++){let At=Pt[at],bt=n.get(At);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),Tt(i.TEXTURE_2D,At),it(lt.__webglFramebuffer,F,At,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),d(At)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(at=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,_t.__webglTexture),Tt(at,R),R.mipmaps&&R.mipmaps.length>0)for(let xt=0;xt<R.mipmaps.length;xt++)it(lt.__webglFramebuffer[xt],F,R,i.COLOR_ATTACHMENT0,at,xt);else it(lt.__webglFramebuffer,F,R,i.COLOR_ATTACHMENT0,at,0);d(R)&&f(at),e.unbindTexture()}F.depthBuffer&&ut(F)}function nt(F){let R=F.textures;for(let lt=0,_t=R.length;lt<_t;lt++){let Pt=R[lt];if(d(Pt)){let $=E(F),ot=n.get(Pt).__webglTexture;e.bindTexture($,ot),f($),e.unbindTexture()}}}let dt=[],B=[];function Vt(F){if(F.samples>0){if(Y(F)===!1){let R=F.textures,lt=F.width,_t=F.height,Pt=i.COLOR_BUFFER_BIT,$=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(F),at=R.length>1;if(at)for(let xt=0;xt<R.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let xt=0;xt<R.length;xt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Pt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Pt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[xt]);let At=n.get(R[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,lt,_t,0,0,lt,_t,Pt,i.NEAREST),l===!0&&(dt.length=0,B.length=0,dt.push(i.COLOR_ATTACHMENT0+xt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(dt.push($),B.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let xt=0;xt<R.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[xt]);let At=n.get(R[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let R=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Z(F){return Math.min(s.maxSamples,F.samples)}function Y(F){let R=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function gt(F){let R=o.render.frame;h.get(F)!==R&&(h.set(F,R),F.update())}function q(F,R){let lt=F.colorSpace,_t=F.format,Pt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||lt!==As&&lt!==xi&&(Pe.getTransfer(lt)===Ne?(_t!==Tn||Pt!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),R}function Lt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=S,this.resetTextureUnits=P,this.setTexture2D=w,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Y}function vg(i,t){function e(n,s=xi){let r,o=Pe.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===Tn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Vh)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Zr||n===Jr||n===Kr||n===jr)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===ka||n===Ba||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wh||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wl=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},me=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mg={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let d=e.getJointPose(_,n),f=this._getHandJoint(c,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],m=h.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&m>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bg=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new vn({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,m=null,u=null,g=null,_=new Tl,d=e.getContextAttributes(),f=null,E=null,x=[],y=[],k=new kt,A=null,C=new yn;C.viewport=new $e;let I=new yn;I.viewport=new $e;let M=[C,I],v=new wl,b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let W=x[L];return W===void 0&&(W=new qs,x[L]=W),W.getTargetRaySpace()},this.getControllerGrip=function(L){let W=x[L];return W===void 0&&(W=new qs,x[L]=W),W.getGripSpace()},this.getHand=function(L){let W=x[L];return W===void 0&&(W=new qs,x[L]=W),W.getHandSpace()};function S(L){let W=y.indexOf(L.inputSource);if(W===-1)return;let it=x[W];it!==void 0&&(it.update(L.inputSource,L.frame,c||o),it.dispatchEvent({type:L.type,data:L.inputSource}))}function z(){s.removeEventListener("select",S),s.removeEventListener("selectstart",S),s.removeEventListener("selectend",S),s.removeEventListener("squeeze",S),s.removeEventListener("squeezestart",S),s.removeEventListener("squeezeend",S),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",w);for(let L=0;L<x.length;L++){let W=y[L];W!==null&&(y[L]=null,x[L].disconnect(W))}b=null,P=null,_.reset(),t.setRenderTarget(f),u=null,m=null,p=null,s=null,E=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",S),s.addEventListener("selectstart",S),s.addEventListener("selectend",S),s.addEventListener("squeeze",S),s.addEventListener("squeezestart",S),s.addEventListener("squeezeend",S),s.addEventListener("end",z),s.addEventListener("inputsourceschange",w),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let W={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new ri(u.framebufferWidth,u.framebufferHeight,{format:Tn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let W=null,it=null,X=null;d.depth&&(X=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=d.stencil?Ms:ps,it=d.stencil?vs:Bi);let tt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};p=new XRWebGLBinding(s,e),m=p.createProjectionLayer(tt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),E=new ri(m.textureWidth,m.textureHeight,{format:Tn,type:si,depthTexture:new po(m.textureWidth,m.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function w(L){for(let W=0;W<L.removed.length;W++){let it=L.removed[W],X=y.indexOf(it);X>=0&&(y[X]=null,x[X].disconnect(it))}for(let W=0;W<L.added.length;W++){let it=L.added[W],X=y.indexOf(it);if(X===-1){for(let ut=0;ut<x.length;ut++)if(ut>=y.length){y.push(it),X=ut;break}else if(y[ut]===null){y[ut]=it,X=ut;break}if(X===-1)break}let tt=x[X];tt&&tt.connect(it)}}let U=new H,O=new H;function V(L,W,it){U.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(it.matrixWorld);let X=U.distanceTo(O),tt=W.projectionMatrix.elements,ut=it.projectionMatrix.elements,Rt=tt[14]/(tt[10]-1),Ft=tt[14]/(tt[10]+1),nt=(tt[9]+1)/tt[5],dt=(tt[9]-1)/tt[5],B=(tt[8]-1)/tt[0],Vt=(ut[8]+1)/ut[0],Z=Rt*B,Y=Rt*Vt,gt=X/(-B+Vt),q=gt*-B;if(W.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(q),L.translateZ(gt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),tt[10]===-1)L.projectionMatrix.copy(W.projectionMatrix),L.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let Lt=Rt+gt,F=Ft+gt,R=Z-q,lt=Y+(X-q),_t=nt*Ft/F*Lt,Pt=dt*Ft/F*Lt;L.projectionMatrix.makePerspective(R,lt,_t,Pt,Lt,F),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function pt(L,W){W===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(W.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let W=L.near,it=L.far;_.texture!==null&&(_.depthNear>0&&(W=_.depthNear),_.depthFar>0&&(it=_.depthFar)),v.near=I.near=C.near=W,v.far=I.far=C.far=it,(b!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,P=v.far),C.layers.mask=L.layers.mask|2,I.layers.mask=L.layers.mask|4,v.layers.mask=C.layers.mask|I.layers.mask;let X=L.parent,tt=v.cameras;pt(v,X);for(let ut=0;ut<tt.length;ut++)pt(tt[ut],X);tt.length===2?V(v,C,I):v.projectionMatrix.copy(C.projectionMatrix),Q(L,v,X)};function Q(L,W,it){it===null?L.matrix.copy(W.matrixWorld):(L.matrix.copy(it.matrixWorld),L.matrix.invert(),L.matrix.multiply(W.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(W.projectionMatrix),L.projectionMatrixInverse.copy(W.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Js*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(L){l=L,m!==null&&(m.fixedFoveation=L),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let N=null;function Tt(L,W){if(h=W.getViewerPose(c||o),g=W,h!==null){let it=h.views;u!==null&&(t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E));let X=!1;it.length!==v.cameras.length&&(v.cameras.length=0,X=!0);for(let ut=0;ut<it.length;ut++){let Rt=it[ut],Ft=null;if(u!==null)Ft=u.getViewport(Rt);else{let dt=p.getViewSubImage(m,Rt);Ft=dt.viewport,ut===0&&(t.setRenderTargetTextures(E,dt.colorTexture,m.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(E))}let nt=M[ut];nt===void 0&&(nt=new yn,nt.layers.enable(ut),nt.viewport=new $e,M[ut]=nt),nt.matrix.fromArray(Rt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Rt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),ut===0&&(v.matrix.copy(nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),X===!0&&v.cameras.push(nt)}let tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){let ut=p.getDepthInformation(it[0]);ut&&ut.isValid&&ut.texture&&_.init(t,ut,s.renderState)}}for(let it=0;it<x.length;it++){let X=y[it],tt=x[it];X!==null&&tt!==void 0&&tt.update(X,W,c||o)}N&&N(L,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let It=new Jh;It.setAnimationLoop(Tt),this.setAnimationLoop=function(L){N=L},this.dispose=function(){}}},Di=new zn,Eg=new Re;function wg(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Zh(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,E,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),p(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),m(d,f),f.isMeshPhysicalMaterial&&u(d,f,y)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),_(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,E,x):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===hn&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===hn&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let E=t.get(f),x=E.envMap,y=E.envMapRotation;x&&(d.envMap.value=x,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),d.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Di)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,E,x){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*E,d.scale.value=x*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function p(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function m(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function u(d,f,E){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){let E=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){let y=x.program;n.uniformBlockBinding(E,y)}function c(E,x){let y=s[E.id];y===void 0&&(g(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",d));let k=x.program;n.updateUBOMapping(E,k);let A=t.render.frame;r[E.id]!==A&&(m(E),r[E.id]=A)}function h(E){let x=p();E.__bindingPointIndex=x;let y=i.createBuffer(),k=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,k,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){let x=s[E.id],y=E.uniforms,k=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,C=y.length;A<C;A++){let I=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,v=I.length;M<v;M++){let b=I[M];if(u(b,A,M,k)===!0){let P=b.__offset,S=Array.isArray(b.value)?b.value:[b.value],z=0;for(let w=0;w<S.length;w++){let U=S[w],O=_(U);typeof U=="number"||typeof U=="boolean"?(b.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,P+z,b.__data)):U.isMatrix3?(b.__data[0]=U.elements[0],b.__data[1]=U.elements[1],b.__data[2]=U.elements[2],b.__data[3]=0,b.__data[4]=U.elements[3],b.__data[5]=U.elements[4],b.__data[6]=U.elements[5],b.__data[7]=0,b.__data[8]=U.elements[6],b.__data[9]=U.elements[7],b.__data[10]=U.elements[8],b.__data[11]=0):(U.toArray(b.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,x,y,k){let A=E.value,C=x+"_"+y;if(k[C]===void 0)return typeof A=="number"||typeof A=="boolean"?k[C]=A:k[C]=A.clone(),!0;{let I=k[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return k[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(E){let x=E.uniforms,y=0,k=16;for(let C=0,I=x.length;C<I;C++){let M=Array.isArray(x[C])?x[C]:[x[C]];for(let v=0,b=M.length;v<b;v++){let P=M[v],S=Array.isArray(P.value)?P.value:[P.value];for(let z=0,w=S.length;z<w;z++){let U=S[z],O=_(U),V=y%k,pt=V%O.boundary,Q=V+pt;y+=pt,Q!==0&&k-Q<O.storage&&(y+=k-Q),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=O.storage}}}let A=y%k;return A>0&&(y+=k-A),E.__size=y,E.__cache={},this}function _(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function d(E){let x=E.target;x.removeEventListener("dispose",d);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var mo=class{constructor(t={}){let{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),d=null,f=null,E=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=qn,this.toneMappingExposure=1;let y=this,k=!1,A=0,C=0,I=null,M=-1,v=null,b=new $e,P=new $e,S=null,z=new le(0),w=0,U=e.width,O=e.height,V=1,pt=null,Q=null,N=new $e(0,0,U,O),Tt=new $e(0,0,U,O),It=!1,L=new Ks,W=!1,it=!1,X=new Re,tt=new Re,ut=new H,Rt=new $e,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function dt(){return I===null?V:1}let B=n;function Vt(D,rt){return e.getContext(D,rt)}try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",jt,!1),B===null){let rt="webgl2";if(B=Vt(rt,D),B===null)throw Vt(rt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Z,Y,gt,q,Lt,F,R,lt,_t,Pt,$,ot,at,xt,At,bt,Nt,Yt,ie,Jt,pe,oe,Te,st;function $t(){Z=new Vm(B),Z.init(),oe=new vg(B,Z),Y=new Fm(B,Z,t,oe),gt=new xg(B,Z),Y.reverseDepthBuffer&&m&&gt.buffers.depth.setReversed(!0),q=new Xm(B),Lt=new sg,F=new _g(B,Z,gt,Lt,Y,oe,q),R=new Om(y),lt=new Hm(y),_t=new ju(B),Te=new Um(B,_t),Pt=new Gm(B,_t,q,Te),$=new Ym(B,Pt,_t,q),ie=new qm(B,Y,F),bt=new zm(Lt),ot=new ig(y,R,lt,Z,Y,Te,bt),at=new wg(y,Lt),xt=new og,At=new ug(Z),Yt=new Dm(y,R,lt,gt,$,u,l),Nt=new mg(y,$,Y),st=new Tg(B,q,Y,gt),Jt=new Nm(B,Z,q),pe=new Wm(B,Z,q),q.programs=ot.programs,y.capabilities=Y,y.extensions=Z,y.properties=Lt,y.renderLists=xt,y.shadowMap=Nt,y.state=gt,y.info=q}$t();let Ct=new Al(y,B);this.xr=Ct,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let D=Z.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Z.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(D){D!==void 0&&(V=D,this.setSize(U,O,!1))},this.getSize=function(D){return D.set(U,O)},this.setSize=function(D,rt,yt=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=D,O=rt,e.width=Math.floor(D*V),e.height=Math.floor(rt*V),yt===!0&&(e.style.width=D+"px",e.style.height=rt+"px"),this.setViewport(0,0,D,rt)},this.getDrawingBufferSize=function(D){return D.set(U*V,O*V).floor()},this.setDrawingBufferSize=function(D,rt,yt){U=D,O=rt,V=yt,e.width=Math.floor(D*yt),e.height=Math.floor(rt*yt),this.setViewport(0,0,D,rt)},this.getCurrentViewport=function(D){return D.copy(b)},this.getViewport=function(D){return D.copy(N)},this.setViewport=function(D,rt,yt,Et){D.isVector4?N.set(D.x,D.y,D.z,D.w):N.set(D,rt,yt,Et),gt.viewport(b.copy(N).multiplyScalar(V).round())},this.getScissor=function(D){return D.copy(Tt)},this.setScissor=function(D,rt,yt,Et){D.isVector4?Tt.set(D.x,D.y,D.z,D.w):Tt.set(D,rt,yt,Et),gt.scissor(P.copy(Tt).multiplyScalar(V).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(D){gt.setScissorTest(It=D)},this.setOpaqueSort=function(D){pt=D},this.setTransparentSort=function(D){Q=D},this.getClearColor=function(D){return D.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(D=!0,rt=!0,yt=!0){let Et=0;if(D){let ft=!1;if(I!==null){let Xt=I.texture.format;ft=Xt===nc||Xt===ec||Xt===tc}if(ft){let Xt=I.texture.type,ee=Xt===si||Xt===Bi||Xt===Zs||Xt===vs||Xt===Kl||Xt===jl,he=Yt.getClearColor(),G=Yt.getClearAlpha(),K=he.r,Dt=he.g,St=he.b;ee?(g[0]=K,g[1]=Dt,g[2]=St,g[3]=G,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=K,_[1]=Dt,_[2]=St,_[3]=G,B.clearBufferiv(B.COLOR,0,_))}else Et|=B.COLOR_BUFFER_BIT}rt&&(Et|=B.DEPTH_BUFFER_BIT),yt&&(Et|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),xt.dispose(),At.dispose(),Lt.dispose(),R.dispose(),lt.dispose(),$.dispose(),Te.dispose(),st.dispose(),ot.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ht),Ct.removeEventListener("sessionend",Ut),Gt.stop()};function zt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let D=q.autoReset,rt=Nt.enabled,yt=Nt.autoUpdate,Et=Nt.needsUpdate,ft=Nt.type;$t(),q.autoReset=D,Nt.enabled=rt,Nt.autoUpdate=yt,Nt.needsUpdate=Et,Nt.type=ft}function jt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ge(D){let rt=D.target;rt.removeEventListener("dispose",ge),T(rt)}function T(D){et(D),Lt.remove(D)}function et(D){let rt=Lt.get(D).programs;rt!==void 0&&(rt.forEach(function(yt){ot.releaseProgram(yt)}),D.isShaderMaterial&&ot.releaseShaderCache(D))}this.renderBufferDirect=function(D,rt,yt,Et,ft,Xt){rt===null&&(rt=Ft);let ee=ft.isMesh&&ft.matrixWorld.determinant()<0,he=we(D,rt,yt,Et,ft);gt.setMaterial(Et,ee);let G=yt.index,K=1;if(Et.wireframe===!0){if(G=Pt.getWireframeAttribute(yt),G===void 0)return;K=2}let Dt=yt.drawRange,St=yt.attributes.position,Bt=Dt.start*K,Zt=(Dt.start+Dt.count)*K;Xt!==null&&(Bt=Math.max(Bt,Xt.start*K),Zt=Math.min(Zt,(Xt.start+Xt.count)*K)),G!==null?(Bt=Math.max(Bt,0),Zt=Math.min(Zt,G.count)):St!=null&&(Bt=Math.max(Bt,0),Zt=Math.min(Zt,St.count));let se=Zt-Bt;if(se<0||se===1/0)return;Te.setup(ft,Et,he,yt,G);let ke,Wt=Jt;if(G!==null&&(ke=_t.get(G),Wt=pe,Wt.setIndex(ke)),ft.isMesh)Et.wireframe===!0?(gt.setLineWidth(Et.wireframeLinewidth*dt()),Wt.setMode(B.LINES)):Wt.setMode(B.TRIANGLES);else if(ft.isLine){let Qt=Et.linewidth;Qt===void 0&&(Qt=1),gt.setLineWidth(Qt*dt()),ft.isLineSegments?Wt.setMode(B.LINES):ft.isLineLoop?Wt.setMode(B.LINE_LOOP):Wt.setMode(B.LINE_STRIP)}else ft.isPoints?Wt.setMode(B.POINTS):ft.isSprite&&Wt.setMode(B.TRIANGLES);if(ft.isBatchedMesh)if(ft._multiDrawInstances!==null)Wt.renderMultiDrawInstances(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount,ft._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{let Qt=ft._multiDrawStarts,ye=ft._multiDrawCounts,Ht=ft._multiDrawCount,fe=G?_t.get(G).bytesPerElement:1,Le=Lt.get(Et).currentProgram.getUniforms();for(let Ae=0;Ae<Ht;Ae++)Le.setValue(B,"_gl_DrawID",Ae),Wt.render(Qt[Ae]/fe,ye[Ae])}else if(ft.isInstancedMesh)Wt.renderInstances(Bt,se,ft.count);else if(yt.isInstancedBufferGeometry){let Qt=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,ye=Math.min(yt.instanceCount,Qt);Wt.renderInstances(Bt,se,ye)}else Wt.render(Bt,se)};function j(D,rt,yt){D.transparent===!0&&D.side===Je&&D.forceSinglePass===!1?(D.side=hn,D.needsUpdate=!0,ae(D,rt,yt),D.side=Mi,D.needsUpdate=!0,ae(D,rt,yt),D.side=Je):ae(D,rt,yt)}this.compile=function(D,rt,yt=null){yt===null&&(yt=D),f=At.get(yt),f.init(rt),x.push(f),yt.traverseVisible(function(ft){ft.isLight&&ft.layers.test(rt.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),D!==yt&&D.traverseVisible(function(ft){ft.isLight&&ft.layers.test(rt.layers)&&(f.pushLight(ft),ft.castShadow&&f.pushShadow(ft))}),f.setupLights();let Et=new Set;return D.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;let Xt=ft.material;if(Xt)if(Array.isArray(Xt))for(let ee=0;ee<Xt.length;ee++){let he=Xt[ee];j(he,yt,ft),Et.add(he)}else j(Xt,yt,ft),Et.add(Xt)}),x.pop(),f=null,Et},this.compileAsync=function(D,rt,yt=null){let Et=this.compile(D,rt,yt);return new Promise(ft=>{function Xt(){if(Et.forEach(function(ee){Lt.get(ee).currentProgram.isReady()&&Et.delete(ee)}),Et.size===0){ft(D);return}setTimeout(Xt,10)}Z.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let ct=null;function vt(D){ct&&ct(D)}function ht(){Gt.stop()}function Ut(){Gt.start()}let Gt=new Jh;Gt.setAnimationLoop(vt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(D){ct=D,Ct.setAnimationLoop(D),D===null?Gt.stop():Gt.start()},Ct.addEventListener("sessionstart",ht),Ct.addEventListener("sessionend",Ut),this.render=function(D,rt){if(rt!==void 0&&rt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),rt.parent===null&&rt.matrixWorldAutoUpdate===!0&&rt.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(rt),rt=Ct.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,rt,I),f=At.get(D,x.length),f.init(rt),x.push(f),tt.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),L.setFromProjectionMatrix(tt),it=this.localClippingEnabled,W=bt.init(this.clippingPlanes,it),d=xt.get(D,E.length),d.init(),E.push(d),Ct.enabled===!0&&Ct.isPresenting===!0){let Xt=y.xr.getDepthSensingMesh();Xt!==null&&Ot(Xt,rt,-1/0,y.sortObjects)}Ot(D,rt,0,y.sortObjects),d.finish(),y.sortObjects===!0&&d.sort(pt,Q),nt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,nt&&Yt.addToRenderList(d,D),this.info.render.frame++,W===!0&&bt.beginShadows();let yt=f.state.shadowsArray;Nt.render(yt,D,rt),W===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Et=d.opaque,ft=d.transmissive;if(f.setupLights(),rt.isArrayCamera){let Xt=rt.cameras;if(ft.length>0)for(let ee=0,he=Xt.length;ee<he;ee++){let G=Xt[ee];Mt(Et,ft,D,G)}nt&&Yt.render(D);for(let ee=0,he=Xt.length;ee<he;ee++){let G=Xt[ee];J(d,D,G,G.viewport)}}else ft.length>0&&Mt(Et,ft,D,rt),nt&&Yt.render(D),J(d,D,rt);I!==null&&(F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(y,D,rt),Te.resetDefaultState(),M=-1,v=null,x.pop(),x.length>0?(f=x[x.length-1],W===!0&&bt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?d=E[E.length-1]:d=null};function Ot(D,rt,yt,Et){if(D.visible===!1)return;if(D.layers.test(rt.layers)){if(D.isGroup)yt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(rt);else if(D.isLight)f.pushLight(D),D.castShadow&&f.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||L.intersectsSprite(D)){Et&&Rt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(tt);let ee=$.update(D),he=D.material;he.visible&&d.push(D,ee,he,yt,Rt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||L.intersectsObject(D))){let ee=$.update(D),he=D.material;if(Et&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Rt.copy(D.boundingSphere.center)):(ee.boundingSphere===null&&ee.computeBoundingSphere(),Rt.copy(ee.boundingSphere.center)),Rt.applyMatrix4(D.matrixWorld).applyMatrix4(tt)),Array.isArray(he)){let G=ee.groups;for(let K=0,Dt=G.length;K<Dt;K++){let St=G[K],Bt=he[St.materialIndex];Bt&&Bt.visible&&d.push(D,ee,Bt,yt,Rt.z,St)}}else he.visible&&d.push(D,ee,he,yt,Rt.z,null)}}let Xt=D.children;for(let ee=0,he=Xt.length;ee<he;ee++)Ot(Xt[ee],rt,yt,Et)}function J(D,rt,yt,Et){let ft=D.opaque,Xt=D.transmissive,ee=D.transparent;f.setupLightsView(yt),W===!0&&bt.setGlobalState(y.clippingPlanes,yt),Et&&gt.viewport(b.copy(Et)),ft.length>0&&wt(ft,rt,yt),Xt.length>0&&wt(Xt,rt,yt),ee.length>0&&wt(ee,rt,yt),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Mt(D,rt,yt,Et){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Et.id]===void 0&&(f.state.transmissionRenderTarget[Et.id]=new ri(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?cr:si,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));let Xt=f.state.transmissionRenderTarget[Et.id],ee=Et.viewport||b;Xt.setSize(ee.z,ee.w);let he=y.getRenderTarget();y.setRenderTarget(Xt),y.getClearColor(z),w=y.getClearAlpha(),w<1&&y.setClearColor(16777215,.5),y.clear(),nt&&Yt.render(yt);let G=y.toneMapping;y.toneMapping=qn;let K=Et.viewport;if(Et.viewport!==void 0&&(Et.viewport=void 0),f.setupLightsView(Et),W===!0&&bt.setGlobalState(y.clippingPlanes,Et),wt(D,yt,Et),F.updateMultisampleRenderTarget(Xt),F.updateRenderTargetMipmap(Xt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let St=0,Bt=rt.length;St<Bt;St++){let Zt=rt[St],se=Zt.object,ke=Zt.geometry,Wt=Zt.material,Qt=Zt.group;if(Wt.side===Je&&se.layers.test(Et.layers)){let ye=Wt.side;Wt.side=hn,Wt.needsUpdate=!0,qt(se,yt,Et,ke,Wt,Qt),Wt.side=ye,Wt.needsUpdate=!0,Dt=!0}}Dt===!0&&(F.updateMultisampleRenderTarget(Xt),F.updateRenderTargetMipmap(Xt))}y.setRenderTarget(he),y.setClearColor(z,w),K!==void 0&&(Et.viewport=K),y.toneMapping=G}function wt(D,rt,yt){let Et=rt.isScene===!0?rt.overrideMaterial:null;for(let ft=0,Xt=D.length;ft<Xt;ft++){let ee=D[ft],he=ee.object,G=ee.geometry,K=Et===null?ee.material:Et,Dt=ee.group;he.layers.test(yt.layers)&&qt(he,rt,yt,G,K,Dt)}}function qt(D,rt,yt,Et,ft,Xt){D.onBeforeRender(y,rt,yt,Et,ft,Xt),D.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ft.onBeforeRender(y,rt,yt,Et,D,Xt),ft.transparent===!0&&ft.side===Je&&ft.forceSinglePass===!1?(ft.side=hn,ft.needsUpdate=!0,y.renderBufferDirect(yt,rt,Et,ft,D,Xt),ft.side=Mi,ft.needsUpdate=!0,y.renderBufferDirect(yt,rt,Et,ft,D,Xt),ft.side=Je):y.renderBufferDirect(yt,rt,Et,ft,D,Xt),D.onAfterRender(y,rt,yt,Et,ft,Xt)}function ae(D,rt,yt){rt.isScene!==!0&&(rt=Ft);let Et=Lt.get(D),ft=f.state.lights,Xt=f.state.shadowsArray,ee=ft.state.version,he=ot.getParameters(D,ft.state,Xt,rt,yt),G=ot.getProgramCacheKey(he),K=Et.programs;Et.environment=D.isMeshStandardMaterial?rt.environment:null,Et.fog=rt.fog,Et.envMap=(D.isMeshStandardMaterial?lt:R).get(D.envMap||Et.environment),Et.envMapRotation=Et.environment!==null&&D.envMap===null?rt.environmentRotation:D.envMapRotation,K===void 0&&(D.addEventListener("dispose",ge),K=new Map,Et.programs=K);let Dt=K.get(G);if(Dt!==void 0){if(Et.currentProgram===Dt&&Et.lightsStateVersion===ee)return ue(D,he),Dt}else he.uniforms=ot.getUniforms(D),D.onBeforeCompile(he,y),Dt=ot.acquireProgram(he,G),K.set(G,Dt),Et.uniforms=he.uniforms;let St=Et.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(St.clippingPlanes=bt.uniform),ue(D,he),Et.needsLights=Oe(D),Et.lightsStateVersion=ee,Et.needsLights&&(St.ambientLightColor.value=ft.state.ambient,St.lightProbe.value=ft.state.probe,St.directionalLights.value=ft.state.directional,St.directionalLightShadows.value=ft.state.directionalShadow,St.spotLights.value=ft.state.spot,St.spotLightShadows.value=ft.state.spotShadow,St.rectAreaLights.value=ft.state.rectArea,St.ltc_1.value=ft.state.rectAreaLTC1,St.ltc_2.value=ft.state.rectAreaLTC2,St.pointLights.value=ft.state.point,St.pointLightShadows.value=ft.state.pointShadow,St.hemisphereLights.value=ft.state.hemi,St.directionalShadowMap.value=ft.state.directionalShadowMap,St.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,St.spotShadowMap.value=ft.state.spotShadowMap,St.spotLightMatrix.value=ft.state.spotLightMatrix,St.spotLightMap.value=ft.state.spotLightMap,St.pointShadowMap.value=ft.state.pointShadowMap,St.pointShadowMatrix.value=ft.state.pointShadowMatrix),Et.currentProgram=Dt,Et.uniformsList=null,Dt}function ce(D){if(D.uniformsList===null){let rt=D.currentProgram.getUniforms();D.uniformsList=gs.seqWithValue(rt.seq,D.uniforms)}return D.uniformsList}function ue(D,rt){let yt=Lt.get(D);yt.outputColorSpace=rt.outputColorSpace,yt.batching=rt.batching,yt.batchingColor=rt.batchingColor,yt.instancing=rt.instancing,yt.instancingColor=rt.instancingColor,yt.instancingMorph=rt.instancingMorph,yt.skinning=rt.skinning,yt.morphTargets=rt.morphTargets,yt.morphNormals=rt.morphNormals,yt.morphColors=rt.morphColors,yt.morphTargetsCount=rt.morphTargetsCount,yt.numClippingPlanes=rt.numClippingPlanes,yt.numIntersection=rt.numClipIntersection,yt.vertexAlphas=rt.vertexAlphas,yt.vertexTangents=rt.vertexTangents,yt.toneMapping=rt.toneMapping}function we(D,rt,yt,Et,ft){rt.isScene!==!0&&(rt=Ft),F.resetTextureUnits();let Xt=rt.fog,ee=Et.isMeshStandardMaterial?rt.environment:null,he=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:As,G=(Et.isMeshStandardMaterial?lt:R).get(Et.envMap||ee),K=Et.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,Dt=!!yt.attributes.tangent&&(!!Et.normalMap||Et.anisotropy>0),St=!!yt.morphAttributes.position,Bt=!!yt.morphAttributes.normal,Zt=!!yt.morphAttributes.color,se=qn;Et.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(se=y.toneMapping);let ke=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,Wt=ke!==void 0?ke.length:0,Qt=Lt.get(Et),ye=f.state.lights;if(W===!0&&(it===!0||D!==v)){let Rn=D===v&&Et.id===M;bt.setState(Et,D,Rn)}let Ht=!1;Et.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ye.state.version||Qt.outputColorSpace!==he||ft.isBatchedMesh&&Qt.batching===!1||!ft.isBatchedMesh&&Qt.batching===!0||ft.isBatchedMesh&&Qt.batchingColor===!0&&ft.colorTexture===null||ft.isBatchedMesh&&Qt.batchingColor===!1&&ft.colorTexture!==null||ft.isInstancedMesh&&Qt.instancing===!1||!ft.isInstancedMesh&&Qt.instancing===!0||ft.isSkinnedMesh&&Qt.skinning===!1||!ft.isSkinnedMesh&&Qt.skinning===!0||ft.isInstancedMesh&&Qt.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&Qt.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&Qt.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&Qt.instancingMorph===!1&&ft.morphTexture!==null||Qt.envMap!==G||Et.fog===!0&&Qt.fog!==Xt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==bt.numPlanes||Qt.numIntersection!==bt.numIntersection)||Qt.vertexAlphas!==K||Qt.vertexTangents!==Dt||Qt.morphTargets!==St||Qt.morphNormals!==Bt||Qt.morphColors!==Zt||Qt.toneMapping!==se||Qt.morphTargetsCount!==Wt)&&(Ht=!0):(Ht=!0,Qt.__version=Et.version);let fe=Qt.currentProgram;Ht===!0&&(fe=ae(Et,rt,ft));let Le=!1,Ae=!1,Be=!1,Me=fe.getUniforms(),en=Qt.uniforms;if(gt.useProgram(fe.program)&&(Le=!0,Ae=!0,Be=!0),Et.id!==M&&(M=Et.id,Ae=!0),Le||v!==D){gt.buffers.depth.getReversed()?(X.copy(D.projectionMatrix),Du(X),Uu(X),Me.setValue(B,"projectionMatrix",X)):Me.setValue(B,"projectionMatrix",D.projectionMatrix),Me.setValue(B,"viewMatrix",D.matrixWorldInverse);let ci=Me.map.cameraPosition;ci!==void 0&&ci.setValue(B,ut.setFromMatrixPosition(D.matrixWorld)),Y.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Et.isMeshPhongMaterial||Et.isMeshToonMaterial||Et.isMeshLambertMaterial||Et.isMeshBasicMaterial||Et.isMeshStandardMaterial||Et.isShaderMaterial)&&Me.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),v!==D&&(v=D,Ae=!0,Be=!0)}if(ft.isSkinnedMesh){Me.setOptional(B,ft,"bindMatrix"),Me.setOptional(B,ft,"bindMatrixInverse");let Rn=ft.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Me.setValue(B,"boneTexture",Rn.boneTexture,F))}ft.isBatchedMesh&&(Me.setOptional(B,ft,"batchingTexture"),Me.setValue(B,"batchingTexture",ft._matricesTexture,F),Me.setOptional(B,ft,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",ft._indirectTexture,F),Me.setOptional(B,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",ft._colorsTexture,F));let mn=yt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ie.update(ft,yt,fe),(Ae||Qt.receiveShadow!==ft.receiveShadow)&&(Qt.receiveShadow=ft.receiveShadow,Me.setValue(B,"receiveShadow",ft.receiveShadow)),Et.isMeshGouraudMaterial&&Et.envMap!==null&&(en.envMap.value=G,en.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),Et.isMeshStandardMaterial&&Et.envMap===null&&rt.environment!==null&&(en.envMapIntensity.value=rt.environmentIntensity),Ae&&(Me.setValue(B,"toneMappingExposure",y.toneMappingExposure),Qt.needsLights&&Ce(en,Be),Xt&&Et.fog===!0&&at.refreshFogUniforms(en,Xt),at.refreshMaterialUniforms(en,Et,V,O,f.state.transmissionRenderTarget[D.id]),gs.upload(B,ce(Qt),en,F)),Et.isShaderMaterial&&Et.uniformsNeedUpdate===!0&&(gs.upload(B,ce(Qt),en,F),Et.uniformsNeedUpdate=!1),Et.isSpriteMaterial&&Me.setValue(B,"center",ft.center),Me.setValue(B,"modelViewMatrix",ft.modelViewMatrix),Me.setValue(B,"normalMatrix",ft.normalMatrix),Me.setValue(B,"modelMatrix",ft.matrixWorld),Et.isShaderMaterial||Et.isRawShaderMaterial){let Rn=Et.uniformsGroups;for(let ci=0,hi=Rn.length;ci<hi;ci++){let yc=Rn[ci];st.update(yc,fe),st.bind(yc,fe)}}return fe}function Ce(D,rt){D.ambientLightColor.needsUpdate=rt,D.lightProbe.needsUpdate=rt,D.directionalLights.needsUpdate=rt,D.directionalLightShadows.needsUpdate=rt,D.pointLights.needsUpdate=rt,D.pointLightShadows.needsUpdate=rt,D.spotLights.needsUpdate=rt,D.spotLightShadows.needsUpdate=rt,D.rectAreaLights.needsUpdate=rt,D.hemisphereLights.needsUpdate=rt}function Oe(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,rt,yt){Lt.get(D.texture).__webglTexture=rt,Lt.get(D.depthTexture).__webglTexture=yt;let Et=Lt.get(D);Et.__hasExternalTextures=!0,Et.__autoAllocateDepthBuffer=yt===void 0,Et.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,rt){let yt=Lt.get(D);yt.__webglFramebuffer=rt,yt.__useDefaultFramebuffer=rt===void 0},this.setRenderTarget=function(D,rt=0,yt=0){I=D,A=rt,C=yt;let Et=!0,ft=null,Xt=!1,ee=!1;if(D){let G=Lt.get(D);if(G.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(B.FRAMEBUFFER,null),Et=!1;else if(G.__webglFramebuffer===void 0)F.setupRenderTarget(D);else if(G.__hasExternalTextures)F.rebindTextures(D,Lt.get(D.texture).__webglTexture,Lt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let St=D.depthTexture;if(G.__boundDepthTexture!==St){if(St!==null&&Lt.has(St)&&(D.width!==St.image.width||D.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(D)}}let K=D.texture;(K.isData3DTexture||K.isDataArrayTexture||K.isCompressedArrayTexture)&&(ee=!0);let Dt=Lt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Dt[rt])?ft=Dt[rt][yt]:ft=Dt[rt],Xt=!0):D.samples>0&&F.useMultisampledRTT(D)===!1?ft=Lt.get(D).__webglMultisampledFramebuffer:Array.isArray(Dt)?ft=Dt[yt]:ft=Dt,b.copy(D.viewport),P.copy(D.scissor),S=D.scissorTest}else b.copy(N).multiplyScalar(V).floor(),P.copy(Tt).multiplyScalar(V).floor(),S=It;if(gt.bindFramebuffer(B.FRAMEBUFFER,ft)&&Et&&gt.drawBuffers(D,ft),gt.viewport(b),gt.scissor(P),gt.setScissorTest(S),Xt){let G=Lt.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+rt,G.__webglTexture,yt)}else if(ee){let G=Lt.get(D.texture),K=rt||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,G.__webglTexture,yt||0,K)}M=-1},this.readRenderTargetPixels=function(D,rt,yt,Et,ft,Xt,ee){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ee!==void 0&&(he=he[ee]),he){gt.bindFramebuffer(B.FRAMEBUFFER,he);try{let G=D.texture,K=G.format,Dt=G.type;if(!Y.textureFormatReadable(K)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}rt>=0&&rt<=D.width-Et&&yt>=0&&yt<=D.height-ft&&B.readPixels(rt,yt,Et,ft,oe.convert(K),oe.convert(Dt),Xt)}finally{let G=I!==null?Lt.get(I).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,G)}}},this.readRenderTargetPixelsAsync=async function(D,rt,yt,Et,ft,Xt,ee){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Lt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ee!==void 0&&(he=he[ee]),he){let G=D.texture,K=G.format,Dt=G.type;if(!Y.textureFormatReadable(K))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(rt>=0&&rt<=D.width-Et&&yt>=0&&yt<=D.height-ft){gt.bindFramebuffer(B.FRAMEBUFFER,he);let St=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.bufferData(B.PIXEL_PACK_BUFFER,Xt.byteLength,B.STREAM_READ),B.readPixels(rt,yt,Et,ft,oe.convert(K),oe.convert(Dt),0);let Bt=I!==null?Lt.get(I).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,Bt);let Zt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Lu(B,Zt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,St),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Xt),B.deleteBuffer(St),B.deleteSync(Zt),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,rt=null,yt=0){D.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),rt=arguments[0]||null,D=arguments[1]);let Et=Math.pow(2,-yt),ft=Math.floor(D.image.width*Et),Xt=Math.floor(D.image.height*Et),ee=rt!==null?rt.x:0,he=rt!==null?rt.y:0;F.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,yt,0,0,ee,he,ft,Xt),gt.unbindTexture()},this.copyTextureToTexture=function(D,rt,yt=null,Et=null,ft=0){D.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),Et=arguments[0]||null,D=arguments[1],rt=arguments[2],ft=arguments[3]||0,yt=null);let Xt,ee,he,G,K,Dt,St,Bt,Zt,se=D.isCompressedTexture?D.mipmaps[ft]:D.image;yt!==null?(Xt=yt.max.x-yt.min.x,ee=yt.max.y-yt.min.y,he=yt.isBox3?yt.max.z-yt.min.z:1,G=yt.min.x,K=yt.min.y,Dt=yt.isBox3?yt.min.z:0):(Xt=se.width,ee=se.height,he=se.depth||1,G=0,K=0,Dt=0),Et!==null?(St=Et.x,Bt=Et.y,Zt=Et.z):(St=0,Bt=0,Zt=0);let ke=oe.convert(rt.format),Wt=oe.convert(rt.type),Qt;rt.isData3DTexture?(F.setTexture3D(rt,0),Qt=B.TEXTURE_3D):rt.isDataArrayTexture||rt.isCompressedArrayTexture?(F.setTexture2DArray(rt,0),Qt=B.TEXTURE_2D_ARRAY):(F.setTexture2D(rt,0),Qt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,rt.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,rt.unpackAlignment);let ye=B.getParameter(B.UNPACK_ROW_LENGTH),Ht=B.getParameter(B.UNPACK_IMAGE_HEIGHT),fe=B.getParameter(B.UNPACK_SKIP_PIXELS),Le=B.getParameter(B.UNPACK_SKIP_ROWS),Ae=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,se.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,se.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,G),B.pixelStorei(B.UNPACK_SKIP_ROWS,K),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Dt);let Be=D.isDataArrayTexture||D.isData3DTexture,Me=rt.isDataArrayTexture||rt.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){let en=Lt.get(D),mn=Lt.get(rt),Rn=Lt.get(en.__renderTarget),ci=Lt.get(mn.__renderTarget);gt.bindFramebuffer(B.READ_FRAMEBUFFER,Rn.__webglFramebuffer),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let hi=0;hi<he;hi++)Be&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.get(D).__webglTexture,ft,Dt+hi),D.isDepthTexture?(Me&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.get(rt).__webglTexture,ft,Zt+hi),B.blitFramebuffer(G,K,Xt,ee,St,Bt,Xt,ee,B.DEPTH_BUFFER_BIT,B.NEAREST)):Me?B.copyTexSubImage3D(Qt,ft,St,Bt,Zt+hi,G,K,Xt,ee):B.copyTexSubImage2D(Qt,ft,St,Bt,Zt+hi,G,K,Xt,ee);gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Me?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(Qt,ft,St,Bt,Zt,Xt,ee,he,ke,Wt,se.data):rt.isCompressedArrayTexture?B.compressedTexSubImage3D(Qt,ft,St,Bt,Zt,Xt,ee,he,ke,se.data):B.texSubImage3D(Qt,ft,St,Bt,Zt,Xt,ee,he,ke,Wt,se):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ft,St,Bt,Xt,ee,ke,Wt,se.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ft,St,Bt,se.width,se.height,ke,se.data):B.texSubImage2D(B.TEXTURE_2D,ft,St,Bt,Xt,ee,ke,Wt,se);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht),B.pixelStorei(B.UNPACK_SKIP_PIXELS,fe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Le),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ae),ft===0&&rt.generateMipmaps&&B.generateMipmap(Qt),gt.unbindTexture()},this.copyTextureToTexture3D=function(D,rt,yt=null,Et=null,ft=0){return D.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),yt=arguments[0]||null,Et=arguments[1]||null,D=arguments[2],rt=arguments[3],ft=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,rt,yt,Et,ft)},this.initRenderTarget=function(D){Lt.get(D).__webglFramebuffer===void 0&&F.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?F.setTextureCube(D,0):D.isData3DTexture?F.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?F.setTexture2DArray(D,0):F.setTexture2D(D,0),gt.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,gt.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}};var go=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xo=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new H,js=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Fs=new H,as=new H,ls=new H,cs=new kt,zs=new kt,ef=new Re,kr=new H,Os=new H,Br=new H,_h=new kt,va=new kt,vh=new kt,_o=class extends Fe{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yo(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new js(n,3,0,!1)),os.setAttribute("uv",new js(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Hr(kr.set(-.5,-.5,0),ls,o,as,s,r),Hr(Os.set(.5,-.5,0),ls,o,as,s,r),Hr(Br.set(.5,.5,0),ls,o,as,s,r),_h.set(0,0),va.set(1,0),vh.set(1,1);let a=t.ray.intersectTriangle(kr,Os,Br,!1,Fs);if(a===null&&(Hr(Os.set(-.5,.5,0),ls,o,as,s,r),va.set(0,1),a=t.ray.intersectTriangle(kr,Br,Os,!1,Fs),a===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:yi.getInterpolation(Fs,kr,Os,Br,_h,va,vh,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Hr(i,t,e,n,s,r){cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*cs.x-s*cs.y,zs.y=s*cs.x+r*cs.y):zs.copy(cs),i.copy(t),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(ef)}var tr=class extends Mn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=_n,h=_n,p,m){super(null,o,a,l,c,h,s,r,p,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends He{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new Re,Mh=new Re,Vr=[],bh=new oi,Ag=new Re,ks=new Ue,Bs=new Si,Qe=class extends Ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),bh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Bs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),Mh.multiplyMatrices(n,hs),ks.matrixWorld=Mh,ks.raycast(t,Vr);for(let o=0,a=Vr.length;o<a;o++){let l=Vr[o];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(s*this.count),s,this.count,Ql,Xn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Hi=class extends ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},vo=new H,Mo=new H,Sh=new Re,Hs=new ro,Gr=new Si,Ma=new H,Eh=new H,Rl=class extends Fe{constructor(t=new ze,e=new Hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vo.fromBufferAttribute(e,s-1),Mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vo.distanceTo(Mo);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Sh.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,d=g-1;_<d;_+=c){let f=h.getX(_),E=h.getX(_+1),x=Wr(this,t,Hs,l,f,E);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),d=h.getX(u),f=Wr(this,t,Hs,l,_,d);f&&e.push(f)}}else{let u=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=u,d=g-1;_<d;_+=c){let f=Wr(this,t,Hs,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Wr(this,t,Hs,l,g-1,u);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(vo.fromBufferAttribute(o,s),Mo.fromBufferAttribute(o,r),e.distanceSqToSegment(vo,Mo,Ma,Eh)>n)return;Ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ma);if(!(l<t.near||l>t.far))return{distance:l,point:Eh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new H,Th=new H,Ss=class extends Rl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Th);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Es=class extends Mn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,u=(o-h)/m;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new kt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,s=[],r=[],o=[],a=new H,l=new Re;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(cn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(cn(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new kt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=l-this.aX,u=c-this.aY;l=m*h-u*p+this.aX,c=m*p+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+p)+(l-a)/p;m*=h,u*=h,s(o,a,m,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Xr=new H,ba=new oc,Sa=new oc,Ea=new oc,ir=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),c=Xr);let p=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),u),_=Math.pow(p.distanceToSquared(m),u),d=Math.pow(m.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),ba.initNonuniformCatmullRom(c.x,p.x,m.x,h.x,g,_,d),Sa.initNonuniformCatmullRom(c.y,p.y,m.y,h.y,g,_,d),Ea.initNonuniformCatmullRom(c.z,p.z,m.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,p.x,m.x,h.x,this.tension),Sa.initCatmullRom(c.y,p.y,m.y,h.y,this.tension),Ea.initCatmullRom(c.z,p.z,m.z,h.z,this.tension));return n.set(ba.calc(l),Sa.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rg(i,t){let e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Ys(i,t,e,n){return Rg(i,t)+Cg(i,e)+Ig(i,n)}function Pg(i,t){let e=1-i;return e*e*e*t}function Lg(i,t){let e=1-i;return 3*e*e*i*t}function Dg(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Pg(i,t)+Lg(i,e)+Dg(i,n)+Ug(i,s)}var bo=class extends In{constructor(t=new kt,e=new kt,n=new kt,s=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new kt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends In{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends In{constructor(t=new kt,e=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new kt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new kt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends In{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends In{constructor(t=new kt,e=new kt,n=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new kt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends In{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y),Ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new kt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Ah(a,l.x,c.x,h.x,p.x),Ah(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new kt().fromArray(s))}return this}},Ao=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:ir,CubicBezierCurve:bo,CubicBezierCurve3:Il,EllipseCurve:nr,LineCurve:So,LineCurve3:Pl,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:wo,SplineCurve:To}),Ll=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ao[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ao[s.type]().fromJSON(s))}return this}},sr=class extends Ll{constructor(t){super(),this.type="Path",this.currentPoint=new kt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new So(this.currentPoint.clone(),new kt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Eo(this.currentPoint.clone(),new kt(t,e),new kt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new bo(this.currentPoint.clone(),new kt(t,e),new kt(n,s),new kt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new To(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class i extends ze{constructor(t=[new kt(0,-.5),new kt(.5,0),new kt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=cn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new H,m=new kt,u=new H,g=new H,_=new H,d=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:d=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,u.x=f*1,u.y=-d,u.z=f*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:d=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,u.x=f*1,u.y=-d,u.z=f*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(g)}for(let E=0;E<=e;E++){let x=n+E*h*s,y=Math.sin(x),k=Math.cos(x);for(let A=0;A<=t.length-1;A++){p.x=t[A].x*y,p.y=t[A].y,p.z=t[A].x*k,o.push(p.x,p.y,p.z),m.x=E/e,m.y=A/(t.length-1),a.push(m.x,m.y);let C=l[3*A+0]*y,I=l[3*A+1],M=l[3*A+0]*k;c.push(C,I,M)}}for(let E=0;E<e;E++)for(let x=0;x<t.length-1;x++){let y=x+E*t.length,k=y,A=y+t.length,C=y+t.length+1,I=y+1;r.push(k,A,I),r.push(C,I,A)}this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("uv",new xe(a,2)),this.setAttribute("normal",new xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},On=class i extends rr{constructor(t=1,e=1,n=4,s=8){let r=new sr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var de=class i extends ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],m=[],u=[],g=0,_=[],d=n/2,f=0;E(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(m,3)),this.setAttribute("uv",new xe(u,2));function E(){let y=new H,k=new H,A=0,C=(e-t)/n;for(let I=0;I<=r;I++){let M=[],v=I/r,b=v*(e-t)+t;for(let P=0;P<=s;P++){let S=P/s,z=S*l+a,w=Math.sin(z),U=Math.cos(z);k.x=b*w,k.y=-v*n+d,k.z=b*U,p.push(k.x,k.y,k.z),y.set(w,C,U).normalize(),m.push(y.x,y.y,y.z),u.push(S,1-v),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let v=_[M][I],b=_[M+1][I],P=_[M+1][I+1],S=_[M][I+1];(t>0||M!==0)&&(h.push(v,b,S),A+=3),(e>0||M!==r-1)&&(h.push(b,P,S),A+=3)}c.addGroup(f,A,0),f+=A}function x(y){let k=g,A=new kt,C=new H,I=0,M=y===!0?t:e,v=y===!0?1:-1;for(let P=1;P<=s;P++)p.push(0,d*v,0),m.push(0,v,0),u.push(.5,.5),g++;let b=g;for(let P=0;P<=s;P++){let z=P/s*l+a,w=Math.cos(z),U=Math.sin(z);C.x=M*U,C.y=d*v,C.z=M*w,p.push(C.x,C.y,C.z),m.push(0,v,0),A.x=w*.5+.5,A.y=U*.5*v+.5,u.push(A.x,A.y),g++}for(let P=0;P<s;P++){let S=k+P,z=b+P;y===!0?h.push(z,z+1,S):h.push(z+1,z,S),I+=3}c.addGroup(f,I,y===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qe=class i extends de{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dl=class i extends ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let x=new H,y=new H,k=new H;for(let A=0;A<e.length;A+=3)u(e[A+0],x),u(e[A+1],y),u(e[A+2],k),l(x,y,k,E)}function l(E,x,y,k){let A=k+1,C=[];for(let I=0;I<=A;I++){C[I]=[];let M=E.clone().lerp(y,I/A),v=x.clone().lerp(y,I/A),b=A-I;for(let P=0;P<=b;P++)P===0&&I===A?C[I][P]=M:C[I][P]=M.clone().lerp(v,P/b)}for(let I=0;I<A;I++)for(let M=0;M<2*(A-I)-1;M++){let v=Math.floor(M/2);M%2===0?(m(C[I][v+1]),m(C[I+1][v]),m(C[I][v])):(m(C[I][v+1]),m(C[I+1][v+1]),m(C[I+1][v]))}}function c(E){let x=new H;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(E),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let E=new H;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];let y=d(E)/2/Math.PI+.5,k=f(E)/Math.PI+.5;o.push(y,1-k)}g(),p()}function p(){for(let E=0;E<o.length;E+=6){let x=o[E+0],y=o[E+2],k=o[E+4],A=Math.max(x,y,k),C=Math.min(x,y,k);A>.9&&C<.1&&(x<.2&&(o[E+0]+=1),y<.2&&(o[E+2]+=1),k<.2&&(o[E+4]+=1))}}function m(E){r.push(E.x,E.y,E.z)}function u(E,x){let y=E*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){let E=new H,x=new H,y=new H,k=new H,A=new kt,C=new kt,I=new kt;for(let M=0,v=0;M<r.length;M+=9,v+=6){E.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),A.set(o[v+0],o[v+1]),C.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),k.copy(E).add(x).add(y).divideScalar(3);let b=d(k);_(A,v+0,E,b),_(C,v+2,x,b),_(I,v+4,y,b)}}function _(E,x,y,k){k<0&&E.x===1&&(o[x]=E.x-1),y.x===0&&y.z===0&&(o[x]=k/2/Math.PI+.5)}function d(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Vi=class extends sr{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new sr().fromJSON(s))}return this}},Ng={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,p,m,u;if(n&&(r=Bg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)p=i[g],m=i[g+1],p<a&&(a=p),m<l&&(l=m),p>c&&(c=p),m>h&&(h=m);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return or(r,o,e,a,l,u,0),o}};function nf(i,t,e,n,s){let r,o;if(s===Kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Rh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Rh(r,i[r],i[r+1],o);return o&&ko(o,o.next)&&(lr(o),o=o.next),o}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ko(e,e.next)||Xe(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?zg(i,n,s,r):Fg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Og(Gi(i),t,e),or(i,t,e,n,s,r,2)):o===2&&kg(i,t,e,n,s,r):or(Gi(i),t,e,n,s,r,1);break}}}function Fg(i){let t=i.prev,e=i,n=i.next;if(Xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,p=a<l?a<c?a:c:l<c?l:c,m=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=m&&g.y>=p&&g.y<=u&&us(s,a,r,l,o,c,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,m=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<p?h<m?h:m:p<m?p:m,_=a>l?a>c?a:c:l>c?l:c,d=h>p?h>m?h:m:p>m?p:m,f=Ul(u,g,t,e,n),E=Ul(_,d,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=f&&y&&y.z<=E;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&us(a,h,l,p,c,m,x.x,x.y)&&Xe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=u&&y.x<=_&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&us(a,h,l,p,c,m,y.x,y.y)&&Xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=f;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==o&&us(a,h,l,p,c,m,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=E;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&us(a,h,l,p,c,m,y.x,y.y)&&Xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Og(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ko(s,r)&&sf(s,n,n.next,r)&&ar(s,r)&&ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lr(n),lr(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function kg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$g(o,a)){let l=rf(o,a);o=Gi(o,o.next),l=Gi(l,l.next),or(o,t,e,n,s,r,0),or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=nf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Yg(c));for(s.sort(Hg),r=0;r<s.length;r++)e=Vg(s[r],e);return e}function Hg(i,t){return i.x-t.x}function Vg(i,t){let e=Gg(i,t);if(!e)return t;let n=rf(e,i);return Gi(n,n.next),Gi(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=r&&m>n&&(n=m,s=e.x<e.next.x?e:e.next,m===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,p;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&us(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(p=Math.abs(o-e.y)/(r-e.x),ar(e,i)&&(p<h||p===h&&(e.x>s.x||e.x===s.x&&Wg(s,e)))&&(s=e,h=p)),e=e.next;while(e!==a);return s}function Wg(i,t){return Xe(i.prev,i,t.prev)<0&&Xe(t.next,i,i.next)<0}function Xg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qg(s)}function qg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function us(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $g(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zg(i,t)&&(ar(i,t)&&ar(t,i)&&Jg(i,t)&&(Xe(i.prev,i,t.prev)||Xe(i,t.prev,t))||ko(i,t)&&Xe(i.prev,i,i.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ko(i,t){return i.x===t.x&&i.y===t.y}function sf(i,t,e,n){let s=Yr(Xe(i,t,e)),r=Yr(Xe(i,t,n)),o=Yr(Xe(e,n,i)),a=Yr(Xe(e,n,t));return!!(s!==r&&o!==a||s===0&&qr(i,e,t)||r===0&&qr(i,n,t)||o===0&&qr(e,i,n)||a===0&&qr(e,t,n))}function qr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yr(i){return i>0?1:i<0?-1:0}function Zg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ar(i,t){return Xe(i.prev,i,i.next)<0?Xe(i,t,i.next)>=0&&Xe(i,i.prev,t)>=0:Xe(i,t,i.prev)<0||Xe(i,i.next,t)<0}function Jg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rf(i,t){let e=new Nl(i.i,i.x,i.y),n=new Nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rh(i,t,e,n){let s=new Nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ch(t),Ih(n,t);let o=t.length;e.forEach(Ch);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ih(n,e[l]);let a=Ng.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ch(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ro=class i extends ze{constructor(t=new Vi([new kt(.5,.5),new kt(-.5,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:jg,x,y=!1,k,A,C,I;f&&(x=f.getSpacedPoints(h),y=!0,m=!1,k=f.computeFrenetFrames(h,!1),A=new H,C=new H,I=new H),m||(d=0,u=0,g=0,_=0);let M=a.extractPoints(c),v=M.shape,b=M.holes;if(!vi.isClockWise(v)){v=v.reverse();for(let nt=0,dt=b.length;nt<dt;nt++){let B=b[nt];vi.isClockWise(B)&&(b[nt]=B.reverse())}}let S=vi.triangulateShape(v,b),z=v;for(let nt=0,dt=b.length;nt<dt;nt++){let B=b[nt];v=v.concat(B)}function w(nt,dt,B){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(dt,B)}let U=v.length,O=S.length;function V(nt,dt,B){let Vt,Z,Y,gt=nt.x-dt.x,q=nt.y-dt.y,Lt=B.x-nt.x,F=B.y-nt.y,R=gt*gt+q*q,lt=gt*F-q*Lt;if(Math.abs(lt)>Number.EPSILON){let _t=Math.sqrt(R),Pt=Math.sqrt(Lt*Lt+F*F),$=dt.x-q/_t,ot=dt.y+gt/_t,at=B.x-F/Pt,xt=B.y+Lt/Pt,At=((at-$)*F-(xt-ot)*Lt)/(gt*F-q*Lt);Vt=$+gt*At-nt.x,Z=ot+q*At-nt.y;let bt=Vt*Vt+Z*Z;if(bt<=2)return new kt(Vt,Z);Y=Math.sqrt(bt/2)}else{let _t=!1;gt>Number.EPSILON?Lt>Number.EPSILON&&(_t=!0):gt<-Number.EPSILON?Lt<-Number.EPSILON&&(_t=!0):Math.sign(q)===Math.sign(F)&&(_t=!0),_t?(Vt=-q,Z=gt,Y=Math.sqrt(R)):(Vt=gt,Z=q,Y=Math.sqrt(R/2))}return new kt(Vt/Y,Z/Y)}let pt=[];for(let nt=0,dt=z.length,B=dt-1,Vt=nt+1;nt<dt;nt++,B++,Vt++)B===dt&&(B=0),Vt===dt&&(Vt=0),pt[nt]=V(z[nt],z[B],z[Vt]);let Q=[],N,Tt=pt.concat();for(let nt=0,dt=b.length;nt<dt;nt++){let B=b[nt];N=[];for(let Vt=0,Z=B.length,Y=Z-1,gt=Vt+1;Vt<Z;Vt++,Y++,gt++)Y===Z&&(Y=0),gt===Z&&(gt=0),N[Vt]=V(B[Vt],B[Y],B[gt]);Q.push(N),Tt=Tt.concat(N)}for(let nt=0;nt<d;nt++){let dt=nt/d,B=u*Math.cos(dt*Math.PI/2),Vt=g*Math.sin(dt*Math.PI/2)+_;for(let Z=0,Y=z.length;Z<Y;Z++){let gt=w(z[Z],pt[Z],Vt);X(gt.x,gt.y,-B)}for(let Z=0,Y=b.length;Z<Y;Z++){let gt=b[Z];N=Q[Z];for(let q=0,Lt=gt.length;q<Lt;q++){let F=w(gt[q],N[q],Vt);X(F.x,F.y,-B)}}}let It=g+_;for(let nt=0;nt<U;nt++){let dt=m?w(v[nt],Tt[nt],It):v[nt];y?(C.copy(k.normals[0]).multiplyScalar(dt.x),A.copy(k.binormals[0]).multiplyScalar(dt.y),I.copy(x[0]).add(C).add(A),X(I.x,I.y,I.z)):X(dt.x,dt.y,0)}for(let nt=1;nt<=h;nt++)for(let dt=0;dt<U;dt++){let B=m?w(v[dt],Tt[dt],It):v[dt];y?(C.copy(k.normals[nt]).multiplyScalar(B.x),A.copy(k.binormals[nt]).multiplyScalar(B.y),I.copy(x[nt]).add(C).add(A),X(I.x,I.y,I.z)):X(B.x,B.y,p/h*nt)}for(let nt=d-1;nt>=0;nt--){let dt=nt/d,B=u*Math.cos(dt*Math.PI/2),Vt=g*Math.sin(dt*Math.PI/2)+_;for(let Z=0,Y=z.length;Z<Y;Z++){let gt=w(z[Z],pt[Z],Vt);X(gt.x,gt.y,p+B)}for(let Z=0,Y=b.length;Z<Y;Z++){let gt=b[Z];N=Q[Z];for(let q=0,Lt=gt.length;q<Lt;q++){let F=w(gt[q],N[q],Vt);y?X(F.x,F.y+x[h-1].y,x[h-1].x+B):X(F.x,F.y,p+B)}}}L(),W();function L(){let nt=s.length/3;if(m){let dt=0,B=U*dt;for(let Vt=0;Vt<O;Vt++){let Z=S[Vt];tt(Z[2]+B,Z[1]+B,Z[0]+B)}dt=h+d*2,B=U*dt;for(let Vt=0;Vt<O;Vt++){let Z=S[Vt];tt(Z[0]+B,Z[1]+B,Z[2]+B)}}else{for(let dt=0;dt<O;dt++){let B=S[dt];tt(B[2],B[1],B[0])}for(let dt=0;dt<O;dt++){let B=S[dt];tt(B[0]+U*h,B[1]+U*h,B[2]+U*h)}}n.addGroup(nt,s.length/3-nt,0)}function W(){let nt=s.length/3,dt=0;it(z,dt),dt+=z.length;for(let B=0,Vt=b.length;B<Vt;B++){let Z=b[B];it(Z,dt),dt+=Z.length}n.addGroup(nt,s.length/3-nt,1)}function it(nt,dt){let B=nt.length;for(;--B>=0;){let Vt=B,Z=B-1;Z<0&&(Z=nt.length-1);for(let Y=0,gt=h+d*2;Y<gt;Y++){let q=U*Y,Lt=U*(Y+1),F=dt+Vt+q,R=dt+Z+q,lt=dt+Z+Lt,_t=dt+Vt+Lt;ut(F,R,lt,_t)}}}function X(nt,dt,B){l.push(nt),l.push(dt),l.push(B)}function tt(nt,dt,B){Rt(nt),Rt(dt),Rt(B);let Vt=s.length/3,Z=E.generateTopUV(n,s,Vt-3,Vt-2,Vt-1);Ft(Z[0]),Ft(Z[1]),Ft(Z[2])}function ut(nt,dt,B,Vt){Rt(nt),Rt(dt),Rt(Vt),Rt(dt),Rt(B),Rt(Vt);let Z=s.length/3,Y=E.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);Ft(Y[0]),Ft(Y[1]),Ft(Y[3]),Ft(Y[1]),Ft(Y[2]),Ft(Y[3])}function Rt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Ft(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ao[s.type]().fromJSON(s)),new i(n,t.options)}},jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new kt(r,o),new kt(a,l),new kt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],m=t[s*3],u=t[s*3+1],g=t[s*3+2],_=t[r*3],d=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new kt(o,1-l),new kt(c,1-p),new kt(m,1-g),new kt(_,1-f)]:[new kt(a,1-l),new kt(h,1-p),new kt(u,1-g),new kt(d,1-f)]}};function Qg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var tn=class i extends Dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ws=class i extends ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],p=t,m=(e-t)/s,u=new H,g=new kt;for(let _=0;_<=s;_++){for(let d=0;d<=n;d++){let f=r+d/n*o;u.x=p*Math.cos(f),u.y=p*Math.sin(f),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}p+=m}for(let _=0;_<s;_++){let d=_*(n+1);for(let f=0;f<n;f++){let E=f+d,x=E,y=E+n+1,k=E+n+2,A=E+1;a.push(x,y,A),a.push(y,k,A)}}this.setIndex(a),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Co=class i extends ze{constructor(t=new Vi([new kt(0,.5),new kt(-.5,-.5),new kt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(r,3)),this.setAttribute("uv",new xe(o,2));function c(h){let p=s.length/3,m=h.extractPoints(e),u=m.shape,g=m.holes;vi.isClockWise(u)===!1&&(u=u.reverse());for(let d=0,f=g.length;d<f;d++){let E=g[d];vi.isClockWise(E)===!0&&(g[d]=E.reverse())}let _=vi.triangulateShape(u,g);for(let d=0,f=g.length;d<f;d++){let E=g[d];u=u.concat(E)}for(let d=0,f=u.length;d<f;d++){let E=u[d];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let d=0,f=_.length;d<f;d++){let E=_[d],x=E[0]+p,y=E[1]+p,k=E[2]+p;n.push(x,y,k),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ve=class i extends ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new H,m=new H,u=[],g=[],_=[],d=[];for(let f=0;f<=n;f++){let E=[],x=f/n,y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let k=0;k<=e;k++){let A=k/e;p.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),p.y=t*Math.cos(o+x*a),p.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(p.x,p.y,p.z),m.copy(p).normalize(),_.push(m.x,m.y,m.z),d.push(A+y,1-x),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){let x=h[f][E+1],y=h[f][E],k=h[f+1][E],A=h[f+1][E+1];(f!==0||o>0)&&u.push(x,y,A),(f!==n-1||l<Math.PI)&&u.push(y,k,A)}this.setIndex(u),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(_,3)),this.setAttribute("uv",new xe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ze=class i extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new H,p=new H,m=new H;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let _=g/s*r,d=u/n*Math.PI*2;p.x=(t+e*Math.cos(d))*Math.cos(_),p.y=(t+e*Math.cos(d))*Math.sin(_),p.z=e*Math.sin(d),a.push(p.x,p.y,p.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),m.subVectors(p,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let _=(s+1)*u+g-1,d=(s+1)*(u-1)+g-1,f=(s+1)*(u-1)+g,E=(s+1)*u+g;o.push(_,d,E),o.push(d,f,E)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Io=class i extends ze{constructor(t=new wo(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new kt,h=new H,p=[],m=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new xe(p,3)),this.setAttribute("normal",new xe(m,3)),this.setAttribute("uv",new xe(u,2));function _(){for(let x=0;x<e;x++)d(x);d(r===!1?e:0),E(),f()}function d(x){h=t.getPointAt(x/e,h);let y=o.normals[x],k=o.binormals[x];for(let A=0;A<=s;A++){let C=A/s*Math.PI*2,I=Math.sin(C),M=-Math.cos(C);l.x=M*y.x+I*k.x,l.y=M*y.y+I*k.y,l.z=M*y.z+I*k.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let k=(s+1)*(x-1)+(y-1),A=(s+1)*x+(y-1),C=(s+1)*x+y,I=(s+1)*(x-1)+y;g.push(k,A,I),g.push(A,C,I)}}function E(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)c.x=x/e,c.y=y/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ao[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Po=class extends ai{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new le(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function $r(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends Ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),_=g*g,d=_*g,f=-m*d+2*m*_-m*g,E=(1+m)*d+(-1.5-2*m)*_+(-.5+m)*g+1,x=(-1-u)*d+(1.5+u)*_+.5*g,y=u*d-u*_;for(let k=0;k!==a;++k)r[k]=f*o[h+k]+E*o[c+k]+x*o[l+k]+y*o[p+k];return r}},zl=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let m=0;m!==a;++m)r[m]=o[c+m]*p+o[l+m]*h;return r}},Ol=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,m=p-n,u=p+n;for(let g=0;g!==n;++g){let _=e[p+g];if(_!==e[m+g]||_!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,m=o*n;for(let u=0;u!==n;++u)e[m+u]=e[p+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=hl;var Wi=class extends kn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=to;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends kn{};kl.prototype.ValueTypeName="color";var Bl=class extends kn{};Bl.prototype.ValueTypeName="number";var Hl=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)An.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lo=class extends kn{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends kn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=to;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends kn{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=c.length;p<m;p+=2){let u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},nx=new Gl,Wl=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Uo=class extends Do{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wa=new Re,Ph=new H,Lh=new H,Xl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ql=class extends Xl{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends Do{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ac="\\[\\]\\.:\\/",ix=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",sx="[^"+ac.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",lc),ox=/(WCOD+)?/.source.replace("WCOD",sx),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),cx=new RegExp("^"+rx+ox+ax+lx+"$"),hx=["material","materials","bones","map"],Yl=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Yl;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);var fx=2.3,Ve=7.2,Bo=.16,wi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function of(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=L=>{let W=Math.max(0,Math.min(s,L/r)),it=Math.min(s-1,Math.floor(W)),X=W-it,tt=n[Math.max(0,it-1)],ut=n[it],Rt=n[it+1],Ft=n[Math.min(s,it+2)],nt=dt=>.5*(2*ut[dt]+(-tt[dt]+Rt[dt])*X+(2*tt[dt]-5*ut[dt]+4*Rt[dt]-Ft[dt])*X*X+(-tt[dt]+3*ut[dt]-3*Rt[dt]+Ft[dt])*X*X*X);return[nt(0),nt(2),ut[1]+(Rt[1]-ut[1])*X]},a=L=>{if(L<=i.lengthM)return o(L);let W=o(i.lengthM-20),it=o(i.lengthM),X=(L-i.lengthM)/20;return[it[0]+(it[0]-W[0])*X,it[1]+(it[1]-W[1])*X,it[2]]},l=2700,c=2585,h=i.overlaps.filter(([L,W])=>W>L).sort((L,W)=>L[1]-W[1]),p=L=>{for(let X=0;X<h.length-1;X++){let[tt,ut]=h[X],[Rt,Ft]=h[X+1];if(L<=Ft)return tt+(L-ut)*(Rt-tt)/(Ft-ut)}let[W,it]=h.at(-1);return W+(L-it)},m=[];for(let L=0;L<=l;L+=2)m.push([L,...o(L)]);let u=2600,g=4900,_=[];for(let L=u;L<=g;L+=10){let W=o(L),it=p(L),X=it,tt=1e9;for(let ut of m){if(Math.abs(ut[0]-it)>60)continue;let Rt=(ut[1]-W[0])**2+(ut[2]-W[1])**2;Rt<tt&&(tt=Rt,X=ut[0])}_.push(X)}let d=_.map((L,W)=>{let it=0,X=0;for(let tt=-3;tt<=3;tt++){let ut=W+tt;ut>=0&&ut<_.length&&(it+=_[ut],X++)}return it/X});for(let L=1;L<d.length;L++)d[L]=Math.max(d[L],d[L-1]+.5);let f=L=>{let W=(L-u)/10,it=Math.max(0,Math.min(d.length-2,Math.floor(W))),X=W-it;return d[it]+(d[it+1]-d[it])*X},E={};function x(L){for(let W of Object.keys(E))delete E[W];for(let W of L?.runners||[])!W.diversions||!W.diversions.length||(E[W.id]=W.diversions.map(it=>{let X=it.path,tt=[0];for(let ut=1;ut<X.length;ut++)tt.push(tt[ut-1]+Math.hypot(X[ut][0]-X[ut-1][0],X[ut][1]-X[ut-1][1]));return{...it,cum:tt,len:tt.at(-1)}}))}x(e);let y=(L,W)=>{let it=Math.max(0,Math.min(1,(W-L.fromM)/(L.toM-L.fromM)))*L.len,X=0;for(;X<L.cum.length-2&&L.cum[X+1]<it;)X++;let tt=(it-L.cum[X])/Math.max(1e-6,L.cum[X+1]-L.cum[X]);return[L.path[X][0]+(L.path[X+1][0]-L.path[X][0])*tt,L.path[X][1]+(L.path[X+1][1]-L.path[X][1])*tt]};function k(L){if(L<u-60){let tt=a(L);return[tt[0],tt[1]]}let W=a(L);if(L>=g+40)return[W[0],W[1]];let it=wi(u-60,u+60,L)*(1-wi(g-60,g,L));if(it<=0)return[W[0],W[1]];let X=o(Math.min(l,f(Math.max(u,Math.min(g,L)))));return[W[0]+(X[0]-W[0])*it,W[1]+(X[1]-W[1])*it]}function A(L,W){let it=k(L),X=W&&E[W];if(X){for(let tt of X)if(L>tt.fromM&&L<tt.toM){let ut=wi(tt.fromM,tt.fromM+30,L)*(1-wi(tt.toM-30,tt.toM,L)),Rt=y(tt,L);return it=[it[0]+(Rt[0]-it[0])*ut,it[1]+(Rt[1]-it[1])*ut],{x:it[0],z:it[1],div:ut,divInfo:tt}}}return{x:it[0],z:it[1],div:0,divInfo:null}}let[C,I,M,v]=t.bounds,b={x0:C-60,z0:I-60,cell:5};b.nx=Math.ceil((M+60-b.x0)/b.cell)+1,b.nz=Math.ceil((v+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let P=[];for(let L=0;L<=s;L+=2)P.push(n[L]);let S=0;for(let L of P)S+=L[1];S/=P.length;let z=(L,W)=>Math.sin(L*.011+1.3)*Math.cos(W*.009-.4)*2.2+Math.sin(L*.027+W*.019)*.9;for(let L=0;L<b.nz;L++)for(let W=0;W<b.nx;W++){let it=b.x0+W*b.cell,X=b.z0+L*b.cell,tt=0,ut=0,Rt=1e9;for(let dt of P){let B=(dt[0]-it)**2+(dt[2]-X)**2;B<Rt&&(Rt=B);let Vt=1/(B+400),Z=Vt*Vt;tt+=Z,ut+=Z*dt[1]}let Ft=wi(30,160,Math.sqrt(Rt)),nt=ut/tt*(1-Ft*.4)+S*Ft*.4+z(it,X)*Ft;b.h[L*b.nx+W]=nt*fx}let w=t.features.filter(L=>L.closed&&["water","track","tennis","pitch"].includes(L.kind)&&L.pts.length>3);for(let L of w){let W=Pn(L.pts),it=[];for(let ut=Math.max(0,Math.floor((W[1]-12-b.z0)/b.cell));ut<=Math.min(b.nz-1,Math.ceil((W[3]+12-b.z0)/b.cell));ut++)for(let Rt=Math.max(0,Math.floor((W[0]-12-b.x0)/b.cell));Rt<=Math.min(b.nx-1,Math.ceil((W[2]+12-b.x0)/b.cell));Rt++){let Ft=b.x0+Rt*b.cell,nt=b.z0+ut*b.cell,dt=hr(L.pts,Ft,nt);dt<12&&it.push([ut*b.nx+Rt,dt])}let X=0,tt=0;for(let[ut,Rt]of it)Rt<0&&(X+=b.h[ut],tt++);if(tt){X/=tt,L.kind==="water"&&(X=Math.min(...it.filter(ut=>ut[1]<0).map(ut=>b.h[ut[0]]))-.2),L._level=X;for(let[ut,Rt]of it){let Ft=1-wi(0,12,Rt);b.h[ut]=b.h[ut]*(1-Ft)+X*Ft-(L.kind==="water"?1.6*(1-wi(-6,0,Rt)):0)}}}{for(let nt=0;nt<3;nt++){let dt=new Float32Array(b.h);for(let B=1;B<b.nz-1;B++)for(let Vt=1;Vt<b.nx-1;Vt++){let Z=B*b.nx+Vt;dt[Z]=(b.h[Z]*4+b.h[Z-1]+b.h[Z+1]+b.h[Z-b.nx]+b.h[Z+b.nx])/8}b.h.set(dt)}let L=new Float32Array(b.nx*b.nz).fill(1e9),W=new Float32Array(b.nx*b.nz),it=new Float32Array(b.nx*b.nz),X=(nt,dt)=>b.h[dt*b.nx+nt],tt=(nt,dt)=>{let B=Math.round((nt-b.x0)/b.cell),Vt=Math.round((dt-b.z0)/b.cell);return X(Math.max(0,Math.min(b.nx-1,B)),Math.max(0,Math.min(b.nz-1,Vt)))},ut=[[0,c],[2540,2690],[g-80,i.lengthM+45]],Rt=[];for(let[nt,dt]of ut)for(let B=nt;B<=dt;B+=2){let Vt=k(B);Rt.push([Vt[0],Vt[1],tt(Vt[0],Vt[1])])}for(let nt=0;nt<4;nt++)for(let dt=1;dt<Rt.length-1;dt++)Rt[dt][2]=(Rt[dt-1][2]+Rt[dt][2]*2+Rt[dt+1][2])/4;let Ft=Ve/2+7;for(let[nt,dt,B]of Rt){let Vt=Math.floor((nt-Ft-b.x0)/b.cell),Z=Math.ceil((nt+Ft-b.x0)/b.cell),Y=Math.floor((dt-Ft-b.z0)/b.cell),gt=Math.ceil((dt+Ft-b.z0)/b.cell);for(let q=Math.max(0,Y);q<=Math.min(b.nz-1,gt);q++)for(let Lt=Math.max(0,Vt);Lt<=Math.min(b.nx-1,Z);Lt++){let F=Math.hypot(b.x0+Lt*b.cell-nt,b.z0+q*b.cell-dt);if(F>Ft)continue;let R=q*b.nx+Lt,lt=(1-F/Ft)**2;W[R]+=lt,it[R]+=lt*B,F<L[R]&&(L[R]=F)}}for(let nt=0;nt<L.length;nt++)if(L[nt]<Ft&&W[nt]>0){let dt=1-wi(Ve/2+.5,Ft,L[nt]);b.h[nt]=b.h[nt]*(1-dt)+it[nt]/W[nt]*dt}b.pathSamples=Rt}let U=w.filter(L=>L.kind==="water").sort((L,W)=>W.pts.length-L.pts.length)[0];function O(L,W){let it=(L-b.x0)/b.cell,X=(W-b.z0)/b.cell,tt=Math.max(0,Math.min(b.nx-2,Math.floor(it))),ut=Math.max(0,Math.min(b.nz-2,Math.floor(X))),Rt=Math.max(0,Math.min(1,it-tt)),Ft=Math.max(0,Math.min(1,X-ut)),nt=b.h[ut*b.nx+tt],dt=b.h[ut*b.nx+tt+1],B=b.h[(ut+1)*b.nx+tt],Vt=b.h[(ut+1)*b.nx+tt+1];return Rt+Ft<=1?nt+(dt-nt)*Rt+(B-nt)*Ft:Vt+(B-Vt)*(1-Rt)+(dt-Vt)*(1-Ft)}let V=new H;function pt(L,W,it={}){let X=A(L,W),tt=Math.max(0,L-4),ut=tt+8,Rt=A(tt,W),Ft=A(ut,W),nt=Ft.x-Rt.x,dt=Ft.z-Rt.z,B=Math.hypot(nt,dt)||1;return nt/=B,dt/=B,it.x=X.x,it.z=X.z,it.y=O(X.x,X.z)+Bo,it.tx=nt,it.tz=dt,it.rx=-dt,it.rz=nt,it.slope=(O(Ft.x,Ft.z)-O(Rt.x,Rt.z))/Math.max(1,B),it.div=X.div,it.divInfo=X.divInfo,it}function Q(L,W=25){let it=Math.max(0,L-W),X=k(it),tt=k(it+2*W),ut=Math.hypot(tt[0]-X[0],tt[1]-X[1])||1;return V.set((tt[0]-X[0])/ut,0,(tt[1]-X[1])/ut).clone()}let N=[{from:0,to:c,lift:0},{from:2540,to:2690,lift:.02},{from:g-80,to:i.lengthM+45,lift:.035}],Tt=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:k,LAP1_END_DRAW:c,xzAt:A,sample:pt,heading:Q,heightAt:O,terrain:b,ribbons:N,finishM:Tt,lake:U,flat:w,geoOf:L=>L>=u&&L<=g?f(L):L,diversions:E,setPlan:x,LAP1_END:l,MAP_FROM:u,MAP_TO:g}}function Pn(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function Cs(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function hr(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,c]=i[s],h=l-o,p=c-a,m=h*h+p*p||1,u=Math.max(0,Math.min(1,((t-o)*h+(e-a)*p)/m));n=Math.min(n,Math.hypot(t-o-h*u,e-a-p*u))}return Cs(i,t,e)?-n:n}function Ke(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ze,c=0;for(let h=0;h<i.length;++h){let p=i[h],m=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,p=[];for(let m=0;m<i.length;++m){let u=i[m].index;for(let g=0;g<u.count;++g)p.push(u.getX(g)+h);h+=i[m].attributes.position.count}l.setIndex(p)}for(let h in r){let p=af(r[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let m=0;m<p;++m){let u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][m]);let g=af(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function af(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new He(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/e;for(let m=0,u=h.count;m<u;m++)for(let g=0;g<e;g++){let _=h.getComponent(m,g);a.setComponent(m+p,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var fr=new H;function Ln(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;fr.copy(t),fr[n]=0,fr.normalize();let c=.5*o/(o+a),h=1-fr.angleTo(i)/l;return Math.sign(fr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ee=class extends Ie{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new H,l=new H,c=new H(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,u=h.length/6,g=new H,_=.5/s;for(let d=0,f=0;d<h.length;d+=3,f+=2)switch(a.fromArray(h,d),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[d+0]=c.x*Math.sign(a.x)+l.x*r,h[d+1]=c.y*Math.sign(a.y)+l.y*r,h[d+2]=c.z*Math.sign(a.z)+l.z*r,p[d+0]=l.x,p[d+1]=l.y,p[d+2]=l.z,Math.floor(d/u)){case 0:g.set(1,0,0),m[f+0]=Ln(g,l,"z","y",r,n),m[f+1]=1-Ln(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),m[f+0]=1-Ln(g,l,"z","y",r,n),m[f+1]=1-Ln(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),m[f+0]=1-Ln(g,l,"x","z",r,t),m[f+1]=Ln(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),m[f+0]=1-Ln(g,l,"x","z",r,t),m[f+1]=1-Ln(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),m[f+0]=1-Ln(g,l,"x","y",r,t),m[f+1]=1-Ln(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),m[f+0]=Ln(g,l,"x","y",r,t),m[f+1]=1-Ln(g,l,"y","x",r,e);break}}};var Ti=null;function ux(){if(Ti)return Ti;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),Ti=new tr(t,i.length,1,Tn),Ti.minFilter=Ti.magFilter=_n,Ti.generateMipmaps=!1,Ti.needsUpdate=!0,Ti}var ur=new Map;function mt(i,t={}){let e=!t.map&&(typeof i=="number"||typeof i=="string")?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&ur.has(e))return ur.get(e);let n=new Po({color:new le(i??16777215),gradientMap:ux(),...t});return e&&!t.map&&ur.set(e,n),n}function lf(){for(let i of ur.values())i.dispose();ur.clear(),dr.forEach(i=>i.dispose()),dr.clear()}var cc={uRes:{value:new kt(1920,1080)}},dr=new Map;function dx(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(dr.has(n))return dr.get(n);let s=new vn({uniforms:{...sc.clone(Kt.fog),uRes:cc.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new le(t)}},vertexShader:`
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
      }`,side:hn,fog:!0});return dr.set(n,s),s}function hc(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),c=n.get(l);c||(c=[0,0,0],n.set(l,c)),c[0]+=e.getX(a),c[1]+=e.getY(a),c[2]+=e.getZ(a),r.push(c)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}return i.setAttribute("onormal",new He(o,3)),i}function Bn(i,t=3,e,n){hc(i.geometry);let s=dx(t,e,n),r;return i.isInstancedMesh?(r=new Qe(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new Ue(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function be(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ue(i,t);return a.castShadow=e,a.receiveShadow=n,s&&Bn(a,s,r,o),a}function rn(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new Es(o);return s&&(l.colorSpace=ln),n&&(l.wrapS=l.wrapT=ki),l.anisotropy=r,l}var fc='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',re=Sn(20240817);function Sn(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Hn(i,t,e,n){let s=rn(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function on(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${fc}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function hf(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new me;i.add(a);let l=T=>(a.add(T),T),c=t.terrain,h=(c.nx-1)*c.cell,p=(c.nz-1)*c.cell,m=new Map,u=6,g=(T,et)=>`${Math.floor(T/u)},${Math.floor(et/u)}`,_=(T,et,j)=>{let ct=g(T,et),vt=m.get(ct);vt||m.set(ct,vt=[]),vt.push([T,et,j])},d=(T,et,j)=>{let ct=Math.floor(T/u),vt=Math.floor(et/u),ht=Math.ceil((j+30)/u);for(let Ut=-ht;Ut<=ht;Ut++)for(let Gt=-ht;Gt<=ht;Gt++){let Ot=m.get(`${ct+Ut},${vt+Gt}`);if(Ot){for(let[J,Mt,wt]of Ot)if((J-T)**2+(Mt-et)**2<(wt+j)**2)return!1}}return!0},f=[];for(let T of t.ribbons)for(let et=T.from;et<=T.to;et+=3){let j=t.baseXZ(et);f.push(j),_(j[0],j[1],Ve/2+1.5)}for(let T in t.diversions)for(let et of t.diversions[T])for(let j of et.path)_(j[0],j[1],4);let E=s.features.filter(T=>T.kind==="park").sort((T,et)=>et.pts.length-T.pts.length)[0].pts,x=(T,et)=>Cs(E,T,et),k=s.features.filter(T=>T.closed&&["water","track","tennis","pitch","playground","building"].includes(T.kind)).map(T=>[Pn(T.pts),T]),A=(T,et,j=2)=>k.some(([ct,vt])=>T>ct[0]-j&&T<ct[2]+j&&et>ct[1]-j&&et<ct[3]+j&&hr(vt.pts,T,et)<j),C=1.7,I=[];function M(T,et,j=!1){I.push({im:T,list:et,occluder:j})}let v=new Set,b=new Re;function P(T,et,j=5){let ct=new Set,vt=T?T.x:0,ht=T?T.z:0,Ut=et?et.x:0,Gt=et?et.z:0,Ot=Ut-vt,J=Gt-ht,Mt=Ot*Ot+J*J||1;for(let wt of I)wt.occluder&&wt.list.forEach((qt,ae)=>{let ce=!1;if(T&&!qt.cleared){let we=((qt.x-vt)*Ot+(qt.z-ht)*J)/Mt;if(we>.02&&we<1){let Ce=vt+Ot*we-qt.x,Oe=ht+J*we-qt.z;ce=!((1-we)*Math.sqrt(Mt)<6)&&Ce*Ce+Oe*Oe<(j*(qt.s||1))**2}}let ue=wt.im.id*1e5+ae;ce&&!v.has(ue)?(v.add(ue),wt.im.setMatrixAt(ae,S),ct.add(wt.im)):!ce&&v.has(ue)&&(v.delete(ue),wt.im.setMatrixAt(ae,qt._m||b.identity()),ct.add(wt.im))});for(let wt of ct)wt.instanceMatrix.needsUpdate=!0}let S=new Re().makeScale(0,0,0);function z(T){for(let{im:et,list:j}of I){let ct=!1;j.forEach((vt,ht)=>{!vt.cleared&&T(vt.x,vt.z)&&(vt.cleared=!0,et.setMatrixAt(ht,S),ct=!0)}),ct&&(et.instanceMatrix.needsUpdate=!0)}}function w(){let T=U.image.getContext("2d");O(T,U.image.width,U.image.height),U.needsUpdate=!0}let U=rn(Math.round(h*C),Math.round(p*C),(T,et,j)=>O(T,et,j),{aniso:8});o.push(U);function O(T,et,j){let ct=J=>(J-c.x0)*C,vt=J=>(J-c.z0)*C,ht=(J,Mt=!0)=>{T.beginPath(),J.forEach((wt,qt)=>qt?T.lineTo(ct(wt[0]),vt(wt[1])):T.moveTo(ct(wt[0]),vt(wt[1]))),Mt&&T.closePath()};T.fillStyle="#d8d2c2",T.fillRect(0,0,et,j);for(let J=0;J<9e3;J++)T.fillStyle=re()<.5?"#cfc8b6":"#e2dccd",T.fillRect(re()*et,re()*j,3,3);ht(E),T.fillStyle="#66cf45",T.fill(),T.save(),ht(E),T.clip(),T.translate(et/2,j/2),T.rotate(-.62);for(let J=-2e3;J<2e3;J+=2*14*C)T.fillStyle="rgba(255,255,140,0.10)",T.fillRect(J,-2500,14*C,5e3);T.setTransform(1,0,0,1,0,0);for(let J=0;J<26e3;J++){let Mt=re()*et,wt=re()*j;T.fillStyle=re()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",T.fillRect(Mt,wt,2+re()*2,2+re()*3)}T.restore();let Ut=(J,Mt,wt)=>{for(let qt of s.features)qt.kind===J&&qt.closed&&(ht(qt.pts),T.fillStyle=Mt,T.fill(),wt&&(T.strokeStyle=wt,T.lineWidth=2,T.stroke()))};Ut("grass","#72d64e"),Ut("garden","#86dc5c"),Ut("wood","#3f9e3a"),Ut("scrub","#5cb544");for(let J of s.features)if(J.kind==="pitch"&&J.closed){T.save(),ht(J.pts),T.clip(),T.fillStyle="#5ccc3f",T.fill();let Mt=Pn(J.pts);for(let wt=Mt[0];wt<Mt[2];wt+=8)T.fillStyle="rgba(255,255,255,0.10)",T.fillRect(ct(wt),vt(Mt[1]),4*C,(Mt[3]-Mt[1])*C);T.restore(),ht(J.pts),T.strokeStyle="#ffffff",T.lineWidth=2.2,T.stroke()}for(let J of s.features)if(J.kind==="playground"&&J.closed){ht(J.pts),T.fillStyle="#7fcfb4",T.fill(),T.save(),ht(J.pts),T.clip();let Mt=Pn(J.pts);for(let wt=0;wt<260;wt++)T.fillStyle=re()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",T.fillRect(ct(Mt[0]+re()*(Mt[2]-Mt[0])),vt(Mt[1]+re()*(Mt[3]-Mt[1])),3,3);for(let wt=0;wt<(Mt[2]-Mt[0])*(Mt[3]-Mt[1])/400;wt++)T.beginPath(),T.arc(ct(Mt[0]+re()*(Mt[2]-Mt[0])),vt(Mt[1]+re()*(Mt[3]-Mt[1])),1.6*C,0,7),T.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][wt%3],T.fill();T.restore(),ht(J.pts),T.strokeStyle="#ffffff",T.lineWidth=.8*C,T.stroke()}let Gt=J=>{let Mt=0;for(let wt=0,qt=J.pts.length-1;wt<J.pts.length;qt=wt++)Mt+=(J.pts[qt][0]+J.pts[wt][0])*(J.pts[qt][1]-J.pts[wt][1]);return Math.abs(Mt/2)};for(let J of s.features)if(J.kind==="track"&&J.closed&&Gt(J)>5e3){T.save(),ht(J.pts),T.clip(),T.fillStyle="#e2523a",T.fill();let Mt=9*C,wt=Ho(J.pts),qt=Pn(J.pts),ae=qt[2]-qt[0],ce=qt[3]-qt[1],ue=Ce=>J.pts.map(Oe=>[wt[0]+(Oe[0]-wt[0])*Ce,wt[1]+(Oe[1]-wt[1])*Ce]),we=1-2*9/Math.min(ae,ce);for(let Ce=1;Ce<=5;Ce++)ht(ue(1-(1-we)*(Ce/6))),T.strokeStyle="rgba(255,255,255,0.9)",T.lineWidth=1.6,T.stroke();ht(ue(we)),T.fillStyle="#5ccc3f",T.fill(),T.strokeStyle="#ffffff",T.lineWidth=3,T.stroke(),T.restore(),ht(J.pts),T.strokeStyle="#ffffff",T.lineWidth=3,T.stroke()}for(let J of s.features)if(J.kind==="track"&&J.closed&&Gt(J)<=5e3){let Mt=J.tags?.surface==="sand";if(!J.tags?.surface)continue;ht(J.pts),T.fillStyle=Mt?"#f2d58f":"#e2523a",T.fill(),T.strokeStyle="#ffffff",T.lineWidth=1.5,T.stroke()}for(let J of s.features)if(J.kind==="tennis"&&J.closed){ht(J.pts),T.fillStyle="#3f9fd1",T.fill(),T.strokeStyle="#ffffff",T.lineWidth=2.5,T.stroke();let Mt=Ho(J.pts),wt=Pn(J.pts);T.save(),ht(J.pts),T.clip(),T.strokeStyle="rgba(255,255,255,0.9)",T.lineWidth=1.5,T.beginPath(),T.moveTo(ct(Mt[0]),vt(wt[1])),T.lineTo(ct(Mt[0]),vt(wt[3])),T.stroke(),T.restore()}for(let J of s.features)J.kind==="water"&&J.closed&&(ht(J.pts),T.strokeStyle="#f4efe0",T.lineWidth=3.4*C,T.lineJoin="round",T.stroke(),T.fillStyle="#2f8fe0",T.fill());for(let J of s.features)J.kind==="path"&&(ht(J.pts,!1),T.lineCap="round",T.lineJoin="round",T.strokeStyle="#c9ad78",T.lineWidth=3.6*C,T.stroke());for(let J of s.features)J.kind==="path"&&(ht(J.pts,!1),T.strokeStyle="#ecd8a6",T.lineWidth=2.6*C,T.stroke());let Ot=J=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[J.tags?.highway]||7;for(let J of s.features)J.kind==="road"&&(ht(J.pts,J.closed),T.lineCap="round",T.lineJoin="round",T.strokeStyle="#ece6d6",T.lineWidth=(Ot(J)+4)*C,T.stroke());for(let J of s.features)J.kind==="road"&&(ht(J.pts,J.closed),T.strokeStyle="#7f8597",T.lineWidth=Ot(J)*C,T.stroke());for(let J of s.features)J.kind==="road"&&Ot(J)>=11&&(ht(J.pts,!1),T.setLineDash([5*C,5*C]),T.strokeStyle="#f4f1e6",T.lineWidth=.5*C,T.stroke(),T.setLineDash([]));for(let J of s.features)J.kind==="rail"&&(ht(J.pts,!1),T.strokeStyle="#9b8f84",T.lineWidth=5*C,T.stroke());for(let J of s.features)J.kind==="rail"&&(ht(J.pts,!1),T.setLineDash([1,2]),T.strokeStyle="#5b4f46",T.lineWidth=3*C,T.stroke(),T.setLineDash([]),ht(J.pts,!1),T.strokeStyle="#c9ccd6",T.lineWidth=.8,T.stroke());for(let J of s.features)J.kind==="building"&&J.closed&&(ht(J.pts),T.fillStyle="#9c968a",T.fill());for(let J in t.diversions)for(let Mt of t.diversions[J])T.beginPath(),Mt.path.forEach((wt,qt)=>qt?T.lineTo(ct(wt[0]),vt(wt[1])):T.moveTo(ct(wt[0]),vt(wt[1]))),T.lineCap="round",T.lineJoin="round",T.strokeStyle="rgba(196,160,96,0.85)",T.lineWidth=4*C,T.stroke(),T.setLineDash([2*C,3*C]),T.strokeStyle="rgba(255,240,200,0.8)",T.lineWidth=.6*C,T.stroke(),T.setLineDash([])}{let T=c.nx*c.nz,et=new Float32Array(T*3),j=new Float32Array(T*2);for(let wt=0;wt<c.nz;wt++)for(let qt=0;qt<c.nx;qt++){let ae=wt*c.nx+qt;et[ae*3]=c.x0+qt*c.cell,et[ae*3+1]=c.h[ae],et[ae*3+2]=c.z0+wt*c.cell,j[ae*2]=qt/(c.nx-1),j[ae*2+1]=1-wt/(c.nz-1)}let ct=new Uint32Array((c.nx-1)*(c.nz-1)*6),vt=0;for(let wt=0;wt<c.nz-1;wt++)for(let qt=0;qt<c.nx-1;qt++){let ae=wt*c.nx+qt,ce=ae+1,ue=ae+c.nx,we=ue+1;ct[vt++]=ae,ct[vt++]=ue,ct[vt++]=ce,ct[vt++]=ce,ct[vt++]=ue,ct[vt++]=we}let ht=new ze;ht.setAttribute("position",new He(et,3)),ht.setAttribute("uv",new He(j,2)),ht.setIndex(new He(ct,1)),ht.computeVertexNormals();let Ut=mt(16777215,{map:U}),Gt=rn(256,256,(wt,qt,ae)=>{wt.fillStyle="#808080",wt.fillRect(0,0,qt,ae);for(let ce=0;ce<1800;ce++){let ue=100+Math.floor(re()*70);wt.fillStyle=`rgb(${ue},${ue},${ue})`;let we=re()*qt,Ce=re()*ae;wt.fillRect(we,Ce,2,3+re()*5)}for(let ce=0;ce<500;ce++)wt.fillStyle="rgba(255,255,255,0.18)",wt.fillRect(re()*qt,re()*ae,2,2)},{repeat:!0,srgb:!1});o.push(Gt),Ut.onBeforeCompile=wt=>{wt.uniforms.uDetail={value:Gt},wt.vertexShader=wt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),wt.fragmentShader=wt.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},Ut.customProgramCacheKey=()=>"terrain-detail";let Ot=be(ht,Ut,{cast:!1});Ot.name="terrain",l(Ot);let J=new Ue(new ws(700,5200,48,1),mt(13227680));J.rotation.x=-Math.PI/2,J.position.set(c.x0+h/2,-2,c.z0+p/2),J.receiveShadow=!1,l(J);let Mt=new Ue(new fn(h+1800,p+1800),mt(13686197));Mt.rotation.x=-Math.PI/2,Mt.position.set(c.x0+h/2,-3,c.z0+p/2),l(Mt)}let V=rn(256,256,(T,et,j)=>{T.fillStyle="#7f8fb0",T.fillRect(0,0,et,j);for(let ct=0;ct<1600;ct++)T.fillStyle=re()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",T.fillRect(re()*et,re()*j,2,2);T.fillStyle="#6b7a9b",T.fillRect(0,0,et*.035,j),T.fillRect(et*.965,0,et*.035,j),T.fillStyle="#ffffff",T.fillRect(et*.06,0,et*.045,j),T.fillRect(et*.895,0,et*.045,j),T.fillStyle="rgba(255,255,255,0.35)",T.fillRect(et*.49,0,et*.02,j*.5)},{repeat:!0});o.push(V);{let T=[];for(let ht of t.ribbons)T.push(pt(ht));let et=Ke(T),j=be(et,mt(16777215,{map:V}),{cast:!1});j.name="path",l(j);let ct=Ke(t.ribbons.map(ht=>pt(ht,!0))),vt=be(ct,mt(5924226),{cast:!1});l(vt)}function pt(T,et=!1){let j=[];for(let J=T.from;J<=T.to+.01;J+=2)j.push(t.baseXZ(J));let ct=[],vt=[],ht=[],Ut=0;for(let J=0;J<j.length;J++){let Mt=j[Math.max(0,J-1)],wt=j[Math.min(j.length-1,J+1)],qt=wt[0]-Mt[0],ae=wt[1]-Mt[1],ce=Math.hypot(qt,ae)||1;qt/=ce,ae/=ce;let ue=-ae,we=qt,Ce=Ve/2,Oe=[j[J][0]-ue*Ce,j[J][1]-we*Ce],D=[j[J][0]+ue*Ce,j[J][1]+we*Ce],rt=t.heightAt(j[J][0],j[J][1]),yt=Math.max(t.heightAt(Oe[0],Oe[1]),rt-.05)+Bo+T.lift,Et=Math.max(t.heightAt(D[0],D[1]),rt-.05)+Bo+T.lift;et?(ct.push(Oe[0]-ue*.15,yt-.45,Oe[1]-we*.15,Oe[0],yt,Oe[1],D[0],Et,D[1],D[0]+ue*.15,Et-.45,D[1]+we*.15),vt.push(0,0,0,1,0,1,0,0)):(ct.push(Oe[0],yt,Oe[1],D[0],Et,D[1]),vt.push(0,Ut/8,1,Ut/8)),J&&(Ut+=2)}let Gt=et?4:2;for(let J=0;J<j.length-1;J++){let Mt=J*Gt,wt=(J+1)*Gt;et?(ht.push(Mt,wt,Mt+1,Mt+1,wt,wt+1),ht.push(Mt+2,wt+2,Mt+3,Mt+3,wt+2,wt+3)):ht.push(Mt,wt,Mt+1,Mt+1,wt,wt+1)}let Ot=new ze;if(Ot.setAttribute("position",new xe(ct,3)),Ot.setAttribute("uv",new xe(vt,2)),Ot.setIndex(ht),Ot.computeVertexNormals(),Ot.getAttribute("normal").getY(0)<0&&!et){let J=Ot.index.array;for(let Mt=0;Mt<J.length;Mt+=3){let wt=J[Mt+1];J[Mt+1]=J[Mt+2],J[Mt+2]=wt}Ot.computeVertexNormals()}return Ot}let Q={uTime:{value:0}},N=s.features.filter(T=>T.kind==="water"&&T.closed);for(let T of N){let et=(T._level??Math.min(...T.pts.map(Ut=>t.heightAt(Ut[0],Ut[1]))))+.05,j=new Vi(T.pts.map(Ut=>new kt(Ut[0],-Ut[1]))),ct=new Co(j,4);ct.rotateX(-Math.PI/2),ct.translate(0,et,0);let vt=new vn({uniforms:{...Q,...Kt.fog},vertexShader:`varying vec3 vW;
${_e.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${_e.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${_e.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${_e.fog_fragment}
        }`,fog:!0}),ht=new Ue(ct,vt);ht.name="water",l(ht),o.push(vt),T._waterLevel=et}let Tt=[];if(t.lake){let T=t.lake,et=Pn(T.pts),j=[16767291,16735581,5752831,16777215,16748497,8257418],ct=new Ee(2,.7,3.6,2,.32),vt=new Ee(1.2,.5,.8,2,.2);for(let ht=0,Ut=0;ht<9&&Ut<300;Ut++){let Gt=et[0]+re()*(et[2]-et[0]),Ot=et[1]+re()*(et[3]-et[1]);if(hr(T.pts,Gt,Ot)>-7)continue;let J=new me,Mt=be(ct,mt(j[ht%j.length]),{ol:2.5});J.add(Mt);let wt=be(vt,mt(16777215),{ol:2});wt.position.y=.45,J.add(wt);let qt=be(new ve(.42,12,8),mt(j[(ht+2)%j.length]),{ol:2});qt.position.set(0,.9,.7),J.add(qt),J.position.set(Gt,(T._waterLevel??0)+.1,Ot),J.rotation.y=re()*6.28,l(J),Tt.push({g:J,ph:re()*6.28,x:Gt,z:Ot,a:J.rotation.y}),ht++}}{let T=rn(128,128,(ht,Ut,Gt)=>{ht.fillStyle="#ffffff",ht.fillRect(0,0,Ut,Gt),ht.fillStyle="#ffffff",ht.fillRect(0,0,14,14),ht.fillStyle="#3b4a6b",ht.fillRect(34,30,60,58),ht.fillStyle="#9ec9ff",ht.fillRect(38,34,52,50),ht.fillStyle="#ffffff",ht.fillRect(62,34,4,50),ht.fillRect(38,56,52,4),ht.fillStyle="rgba(0,0,0,0.08)",ht.fillRect(0,118,Ut,10)},{repeat:!0});o.push(T);let et={generateTopUV:(ht,Ut,Gt,Ot,J)=>[new kt(.02,.98),new kt(.02,.98),new kt(.02,.98)],generateSideWallUV:(ht,Ut,Gt,Ot,J,Mt)=>{let wt=Ut[Gt*3],qt=Ut[Gt*3+1],ae=Ut[Gt*3+2],ce=Ut[Ot*3],ue=Ut[Ot*3+1],we=Ut[Ot*3+2],Ce=Ut[J*3+2],Oe=Ut[Mt*3+2],D=(Math.abs(qt-ue)<Math.abs(wt-ce)?wt:qt)/4.2,rt=(Math.abs(qt-ue)<Math.abs(wt-ce)?ce:ue)/4.2;return[new kt(D,ae/3.2),new kt(rt,we/3.2),new kt(rt,Ce/3.2),new kt(D,Oe/3.2)]}},j=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],ct=["#5d6488","#7a5d6c","#4f6b78"],vt=[];for(let ht of s.features){if(ht.kind!=="building"||!ht.closed||ht.pts.length<4)continue;let Ut=Ho(ht.pts);if(x(Ut[0],Ut[1]))continue;let Gt=parseFloat(ht.tags?.["building:levels"])||(re()<.7?3:4),Ot=Math.min(30,Gt*3.1),J=new Vi(ht.pts.map(Ce=>new kt(Ce[0],-Ce[1]))),Mt;try{Mt=new Ro(J,{depth:Ot,bevelEnabled:!1,UVGenerator:et})}catch{continue}Mt.rotateX(-Math.PI/2);let wt=Math.min(...ht.pts.map(Ce=>t.heightAt(Ce[0],Ce[1])))-1.5;Mt.translate(0,wt,0);let qt=Mt.getAttribute("normal"),ae=qt.count,ce=new Float32Array(ae*3),ue=new le(j[Math.floor(re()*j.length)]).convertSRGBToLinear(),we=new le(ct[Math.floor(re()*ct.length)]).convertSRGBToLinear();for(let Ce=0;Ce<ae;Ce++){let Oe=qt.getY(Ce)>.5?we:ue;ce[Ce*3]=Oe.r,ce[Ce*3+1]=Oe.g,ce[Ce*3+2]=Oe.b}Mt.setAttribute("color",new He(ce,3)),vt.push(Mt.index?Mt.toNonIndexed():Mt)}if(vt.length){let ht=Ke(vt),Ut=be(ht,mt(16777215,{map:T,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});Ut.name="buildings",l(Ut)}}let It=t.sample(t.finishM),L=t.sample(0),W={start:L,finish:It},it=new me;l(it);function X(T,et,j,ct){let vt=new me,ht=Ve/2+1.4,Ut=.85,Gt=rn(256,32,(ae,ce,ue)=>{for(let we=0;we<16;we++)ae.fillStyle=we%2?j:ct,ae.fillRect(we*ce/16,0,ce/16+1,ue)},{repeat:!1});o.push(Gt);let Ot=new Ze(ht,Ut,14,40,Math.PI);Ot.scale(1,1.25,1);let J=be(Ot,mt(16777215,{map:Gt}),{ol:3.5});vt.add(J);let Mt=new de(Ut*1.4,Ut*1.6,.8,16);for(let ae of[-1,1]){let ce=be(Mt,mt(ct),{ol:3});ce.position.set(ae*ht,.3,0),vt.add(ce)}let wt=Hn(1024,256,(ae,ce,ue)=>{ae.fillStyle="#1b1b3a",Ye(ae,0,0,ce,ue,60),ae.fill(),ae.fillStyle=j,Ye(ae,12,12,ce-24,ue-24,50),ae.fill(),on(ae,"MARKRUN",ce/2,ue*.42,150,"#ffffff","#1b1b3a",.18),on(ae,et,ce/2,ue*.83,56,"#ffe14d","#1b1b3a",.2)},o),qt=be(new Ee(ht*1.55,ht*.4,.7,3,.25),[mt(ct),mt(ct),mt(ct),mt(ct),mt(16777215,{map:wt}),mt(16777215,{map:wt})],{ol:3.5});return qt.position.y=ht*1.25+Ut*1.25+ht*.2-.15,vt.add(qt),vt.position.set(T.x,T.y-.1,T.z),vt.rotation.y=Math.atan2(-T.rz,T.rx),it.add(vt),vt}W.finishArch=X(It,"FINISH","#ff3d8b","#ffd23f"),X(L,"START","#2e9bff","#ffd23f");let tt=rn(256,64,(T,et,j)=>{let vt=et/16;for(let ht=0;ht<16;ht++)for(let Ut=0;Ut<4;Ut++)T.fillStyle=(ht+Ut)%2?"#111":"#fff",T.fillRect(ht*vt,Ut*vt,vt,vt)});o.push(tt);function ut(T,et,j,ct=.03){let vt=new fn(Ve,j);vt.rotateX(-Math.PI/2);let ht=new Ue(vt,mt(16777215,{map:et,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return ht.position.set(T.x,T.y+ct,T.z),ht.rotation.y=Math.atan2(-T.rz,T.rx),ht.receiveShadow=!0,l(ht),ht}ut(It,tt,2.2,.05);let Rt=Hn(512,128,(T,et,j)=>{T.fillStyle="#ffffff",T.fillRect(0,0,et,22),on(T,"START",et/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let T=t.sample(2.5);ut(T,Rt,3,.05).rotation.y+=Math.PI}let Ft=new Fe;function nt(T,et,j,{ol:ct=0,olRef:vt,cast:ht=!0,colors:Ut,chunk:Gt=0,occluder:Ot=!1}={}){if(!j.length)return null;if(Gt){let Mt=new Map;j.forEach((qt,ae)=>{let ce=`${Math.floor(qt.x/Gt)},${Math.floor(qt.z/Gt)}`,ue=Mt.get(ce);ue||Mt.set(ce,ue={l:[],c:[]}),ue.l.push(qt),Ut&&ue.c.push(Ut[ae])});let wt=null;for(let{l:qt,c:ae}of Mt.values()){let ce=nt(T,et,qt,{ol:ct,olRef:vt,cast:ht,colors:Ut?ae:null,occluder:Ot});wt=wt||ce}return wt}let J=new Qe(T,et,j.length);return j.forEach((Mt,wt)=>{Ft.position.set(Mt.x,Mt.y,Mt.z),Ft.rotation.set(Mt.rx||0,Mt.ry||0,Mt.rz||0),Ft.scale.set(Mt.sx??Mt.s??1,Mt.sy??Mt.s??1,Mt.sz??Mt.s??1),Ft.updateMatrix(),J.setMatrixAt(wt,Ft.matrix),Ot&&(Mt._m=Ft.matrix.clone()),Ut&&J.setColorAt(wt,new le(Ut[wt]))}),J.castShadow=ht,J.receiveShadow=!0,J.computeBoundingSphere(),ct&&Bn(J,ct,void 0,vt),M(J,j,Ot),l(J),J}let dt=[];{let T=j=>{let ct=t.rawExt(j-12),vt=t.rawExt(j),ht=t.rawExt(j+12),Ut=Math.atan2(vt[1]-ct[1],vt[0]-ct[0]),Ot=Math.atan2(ht[1]-vt[1],ht[0]-vt[0])-Ut;for(;Ot>Math.PI;)Ot-=2*Math.PI;for(;Ot<-Math.PI;)Ot+=2*Math.PI;return Ot},et=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[j,ct]of et){let vt=null;for(let ht=j;ht<ct;ht+=4){let Ut=T(ht);Math.abs(Ut)>.45?(!vt||Math.abs(Ut)>Math.abs(vt.d))&&(vt={m:ht,d:Ut}):vt&&(dt.some(Gt=>Math.abs(Gt.m-vt.m)<50)||dt.push(vt),vt=null)}}}let B=[],Vt=[],Z=[],Y=[];for(let T of dt){let et=T.d>0;for(let j=-2;j<=2;j++){let ct=t.sample(T.m+j*5),vt=et?-1:1,ht=Ve/2+1.6,Ut=ct.x+ct.rx*ht*vt,Gt=ct.z+ct.rz*ht*vt;d(Ut,Gt,.3),(et?Vt:B).push({x:Ut,y:t.heightAt(Ut,Gt),z:Gt,ry:Math.atan2(-ct.tz,ct.tx)+(vt>0?Math.PI:0)})}for(let j=-3;j<=3;j++){let ct=t.sample(T.m+j*3.5),vt=et?1:-1,ht=Ve/2+.7;Z.push({x:ct.x+ct.rx*ht*vt,y:t.heightAt(ct.x+ct.rx*ht*vt,ct.z+ct.rz*ht*vt),z:ct.z+ct.rz*ht*vt,ry:re()*6});for(let Ut=0;Ut<2;Ut++){let Gt=t.sample(T.m+j*3.5+Ut*1.75),Ot=Ve/2+.1;Y.push({x:Gt.x+Gt.rx*Ot*vt,y:Gt.y-.05,z:Gt.z+Gt.rz*Ot*vt,ry:Math.atan2(Gt.tx,Gt.tz),red:(j*2+Ut)%2===0})}}}W.corners=dt;{let T=rn(256,96,(Ot,J,Mt)=>{Ot.fillStyle="#2f6fe0",Ot.fillRect(0,0,J,Mt),Ot.fillStyle="#ffffff";for(let wt=0;wt<4;wt++){let qt=18+wt*60;Ot.beginPath(),Ot.moveTo(qt,12),Ot.lineTo(qt+26,12),Ot.lineTo(qt+54,Mt/2),Ot.lineTo(qt+26,Mt-12),Ot.lineTo(qt,Mt-12),Ot.lineTo(qt+28,Mt/2),Ot.closePath(),Ot.fill()}Ot.strokeStyle="#1b3f8f",Ot.lineWidth=8,Ot.strokeRect(0,0,J,Mt)}),et=T.clone();et.repeat.x=-1,et.offset.x=1,et.wrapS=ki,et.needsUpdate=!0,o.push(T,et);let ct=(Ot=>{let J=new Ie(3.2,1.2,.12);J.rotateX(-.32),J.translate(0,.62,.22);let Mt=new Ie(3.2,1.2,.12);return Mt.rotateX(.32),Mt.translate(0,.62,-.22),Mt.rotateY(Math.PI),Ke([J,Mt])})();hc(ct),nt(ct,mt(16777215,{map:T}),Vt,{ol:2.5}),nt(ct,mt(16777215,{map:et}),B,{ol:2.5});let vt=rn(16,64,(Ot,J,Mt)=>{for(let wt=0;wt<4;wt++)Ot.fillStyle=wt%2?"#ffffff":"#ff6a2b",Ot.fillRect(0,wt*Mt/4,J,Mt/4)});o.push(vt);let ht=new de(.06,.32,.9,12,1);ht.translate(0,.5,0);let Ut=new Ie(.8,.08,.8);Ut.translate(0,.04,0),nt(ht,mt(16777215,{map:vt}),Z,{ol:2}),nt(Ut,mt(16738859),Z,{ol:1.5});let Gt=new Ie(.5,.22,1.75);Gt.translate(0,.11,0),nt(Gt,mt(16777215),Y.map(Ot=>Ot),{ol:1.5,colors:Y.map(Ot=>Ot.red?15216959:16777215)})}let gt=new me;l(gt);function q(T,et,j,ct,vt,{postH:ht=1.6,face:Ut=0,scale:Gt=1}={}){let Ot=Hn(512,Math.round(512*ct/j),vt,o),J=new me,Mt=be(new Ee(j,ct,.25,2,.08),[mt(5978660),mt(5978660),mt(5978660),mt(5978660),mt(16777215,{map:Ot}),mt(16777215,{map:Ot})],{ol:3});Mt.position.y=ht+ct/2,J.add(Mt);let wt=new Ie(.25,ht+ct*.5,.25);for(let ue of[-1,1]){let we=be(wt,mt(9067062),{ol:2});we.position.set(ue*j*.35,(ht+ct*.5)/2,-.1),J.add(we)}let qt=Ve/2+2.2+j*.15,ae=T.x+T.rx*qt*et,ce=T.z+T.rz*qt*et;return J.position.set(ae,t.heightAt(ae,ce)-.1,ce),J.rotation.y=Math.atan2(-T.tx,-T.tz)+et*.5+Ut,J.scale.setScalar(Gt),gt.add(J),J}let Lt=1720,F=t.sample(Lt-10);W.hillSign=q(F,1,6,3.2,(T,et,j)=>{T.fillStyle="#ffd23f",Ye(T,0,0,et,j,40),T.fill(),T.lineWidth=16,T.strokeStyle="#1b1b3a",Ye(T,8,8,et-16,j-16,34),T.stroke(),T.fillStyle="#3aa845",T.beginPath(),T.moveTo(40,j-40),T.lineTo(150,70),T.lineTo(260,j-40),T.closePath(),T.fill(),T.strokeStyle="#1b1b3a",T.lineWidth=8,T.stroke(),T.fillStyle="#fff",T.beginPath(),T.moveTo(118,118),T.lineTo(150,70),T.lineTo(182,118),T.closePath(),T.fill(),on(T,"THE",380,j*.3,72,"#ffffff","#1b1b3a",.2),on(T,"HILL",370,j*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),W.hillM=Lt;for(let T of[1,2,3,4]){let et=T*1e3,j=t.sample(t.geoOf(et));q(j,-1,1.6,1.3,(ct,vt,ht)=>{ct.fillStyle="#ffffff",Ye(ct,0,0,vt,ht,50),ct.fill(),ct.fillStyle="#ff3d8b",Ye(ct,20,20,vt-40,ht-40,36),ct.fill(),on(ct,`${T}K`,vt/2,ht/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let R=t.sample(2475);W.lapBoard=q(R,1,4.4,2.6,(T,et,j)=>{T.fillStyle="#1b1b3a",Ye(T,0,0,et,j,40),T.fill(),T.fillStyle="#2e9bff",Ye(T,14,14,et-28,j-28,30),T.fill(),on(T,"LAP",et/2,j*.28,90,"#ffffff","#1b1b3a",.18),on(T,"2 OF 2",et/2,j*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),W.lapM=2500;let lt=[],_t=[],Pt=[],$=[];function ot(T,et,j,ct=3.2,vt=12){let ht=null;for(let Ut=T;Ut<=et;Ut+=vt){let Gt=t.sample(Ut),Ot=Ve/2+1,J=Gt.x+Gt.rx*Ot*j,Mt=Gt.z+Gt.rz*Ot*j,wt=t.heightAt(J,Mt);_t.push({x:J,y:wt,z:Mt});let qt=new H(J,wt+ct,Mt);if(ht){let ae=[];for(let ce=0;ce<=12;ce++){let ue=ce/12,we=ht.clone().lerp(qt,ue);we.y-=Math.sin(ue*Math.PI)*.6,ae.push(we)}Pt.push(ae);for(let ce=1;ce<12;ce++){let ue=ae[ce],we=ae[ce+1].clone().sub(ae[ce-1]);lt.push({x:ue.x,y:ue.y,z:ue.z,ry:Math.atan2(-we.z,we.x)})}}ht=qt}}function at(T,et,j,ct=Ve/2+2.2){for(let vt=T;vt<=et;vt+=2.4){let ht=t.sample(vt),Ut=ht.x+ht.rx*ct*j,Gt=ht.z+ht.rz*ct*j;$.push({x:Ut,y:t.heightAt(Ut,Gt),z:Gt,ry:Math.atan2(ht.tx,ht.tz)})}}let xt=t.finishM;ot(xt-70,xt+10,1),ot(xt-70,xt+10,-1),ot(-6,50,1),ot(-6,50,-1),at(xt-60,xt+14,1),at(xt-60,xt+14,-1),at(-4,40,1),at(-4,40,-1);{let T=new ze;T.setAttribute("position",new xe([-.3,0,0,.3,0,0,0,-.62,0],3)),T.setAttribute("normal",new xe([0,0,1,0,0,1,0,0,1],3));let et=lt.map((J,Mt)=>[16727435,16765503,3054591,4054148,16747069,16777215][Mt%6]);nt(T,mt(16777215,{side:Je}),lt,{colors:et,cast:!1});let j=new de(.07,.09,3.3,6);j.translate(0,1.65,0),nt(j,mt(16777215),_t,{ol:1.5});let ct=new ze().setFromPoints(Pt.flatMap(J=>J.slice(0,-1).flatMap((Mt,wt)=>[Mt,J[wt+1]]))),vt=new Ss(ct,new Hi({color:3355443}));l(vt),o.push(ct);let ht=[];for(let J=0;J<4;J++){let Mt=new Ie(.16,1,.06);Mt.translate(-.9+J*.6,.5,0),ht.push(Mt)}let Ut=new Ie(2.4,.12,.05);Ut.translate(0,.65,.05),ht.push(Ut);let Gt=Ut.clone();Gt.translate(0,-.35,0),ht.push(Gt);let Ot=Ke(ht);Ot.rotateY(Math.PI/2),nt(Ot,mt(16777215),$,{ol:1.8})}let At=[],bt=(T,et,j,ct,vt,ht=1.35)=>At.push({m0:T,m1:et,side:j,off:Ve/2+3,depth:ct,density:vt,spacing:ht});bt(xt-58,xt+12,1,6,1),bt(xt-58,xt+12,-1,6,1),bt(-2,38,1,5,.9),bt(-2,38,-1,5,.9),bt(1940,2010,1,4,.7),bt(1960,2010,-1,3,.6),bt(Lt-10,Lt+40,-1,3,.55),bt(2440,2490,-1,3,.7),bt(Lt-70,Lt+10,1,3,.5),bt(Lt-70,Lt-20,-1,3,.45),bt(2080,2160,1,4,.75),bt(2080,2160,-1,4,.75),bt(800,860,1,3,.6),bt(1250,1310,-1,3,.6),W.crowdZones=At;{let T=s.pois.filter(ct=>ct.kind==="bench"&&x(ct.pos[0],ct.pos[1])&&d(ct.pos[0],ct.pos[1],1)).map(ct=>({x:ct.pos[0],y:t.heightAt(ct.pos[0],ct.pos[1]),z:ct.pos[1],ry:re()*6})),et=Ke([new Ie(1.8,.12,.5).translate(0,.5,0),new Ie(1.8,.4,.1).translate(0,.8,-.22),new Ie(.1,.5,.45).translate(-.8,.25,0),new Ie(.1,.5,.45).translate(.8,.25,0)]);nt(et,mt(11892031),T,{ol:1.5});let j=s.pois.filter(ct=>ct.kind==="cafe"&&x(ct.pos[0],ct.pos[1])&&d(ct.pos[0],ct.pos[1],4));for(let ct of j){let vt=new me;vt.add(be(new Ee(5,3,4,2,.2),mt(16774108),{ol:2.5})).position.y=1.5;let ht=rn(128,16,(Ot,J,Mt)=>{for(let wt=0;wt<8;wt++)Ot.fillStyle=wt%2?"#fff":"#ff4f6d",Ot.fillRect(wt*16,0,16,Mt)});o.push(ht);let Ut=be(new Ie(5.6,.2,2),mt(16777215,{map:ht}),{ol:2});Ut.position.set(0,2.9,2.3),Ut.rotation.x=.35,vt.add(Ut);let Gt=be(new qe(4,1.6,4),mt(3054591),{ol:2.5});Gt.position.y=3.8,Gt.rotation.y=Math.PI/4,vt.add(Gt),vt.position.set(ct.pos[0],t.heightAt(ct.pos[0],ct.pos[1]),ct.pos[1]),vt.rotation.y=re()*6,l(vt),_(ct.pos[0],ct.pos[1],5)}}for(let T of At)for(let et=T.m0-8;et<=T.m1+8;et+=4){let j=t.sample(et),ct=T.off+T.depth/2;_(j.x+j.rx*ct*T.side,j.z+j.rz*ct*T.side,T.depth/2+3)}for(let T of[L,It])_(T.x,T.z,14);function Nt(T,et){let j=null,ct=1e9;for(let vt of f){let ht=(vt[0]-T)**2+(vt[1]-et)**2;ht<ct&&(ct=ht,j=vt)}return j}W.nearestOnRibbon=Nt,W.ribbonSamples=f;let Yt=new Map;for(let T of f){let et=`${Math.floor(T[0]/10)},${Math.floor(T[1]/10)}`,j=Yt.get(et);j||Yt.set(et,j=[]),j.push(T)}let ie=(T,et,j=1)=>{let ct=Math.floor(T/10),vt=Math.floor(et/10),ht=(Ve/2+j)**2;for(let Ut=-1;Ut<=1;Ut++)for(let Gt=-1;Gt<=1;Gt++)for(let Ot of Yt.get(`${ct+Ut},${vt+Gt}`)||[])if((Ot[0]-T)**2+(Ot[1]-et)**2<ht)return!0;return!1};W.reserve=_,W.clearOf=d;let Jt=[],pe=(T,et,j,ct)=>!d(T,et,2.5*ct)||A(T,et,1.5)?!1:(Jt.push({x:T,z:et,kind:j,s:ct}),_(T,et,2.2*ct),!0);for(let T of s.pois)T.kind==="tree"&&pe(T.pos[0],T.pos[1],0,.85+re()*.35);for(let T of s.features)if(T.kind==="wood"&&T.closed){let et=Pn(T.pts),j=(et[2]-et[0])*(et[3]-et[1]);for(let ct=0;ct<j/90;ct++){let vt=et[0]+re()*(et[2]-et[0]),ht=et[1]+re()*(et[3]-et[1]);Cs(T.pts,vt,ht)&&pe(vt,ht,1,.9+re()*.5)}}{let T=Pn(E);for(let et=0;et<2600;et++){let j=T[0]+re()*(T[2]-T[0]),ct=T[1]+re()*(T[3]-T[1]);!x(j,ct)||-hr(E,j,ct)>45&&re()<.75||pe(j,ct,re()<.7?1:2,.8+re()*.5)}for(let et of s.features)if(et.kind==="road"&&!et.closed)for(let j=1;j<et.pts.length;j++){let ct=et.pts[j-1],vt=et.pts[j],ht=Math.hypot(vt[0]-ct[0],vt[1]-ct[1]);for(let Ut=0;Ut<ht;Ut+=22){let Gt=Ut/ht,Ot=ct[0]+(vt[0]-ct[0])*Gt,J=ct[1]+(vt[1]-ct[1])*Gt,Mt=-(vt[1]-ct[1])/ht,wt=(vt[0]-ct[0])/ht,qt=8+re()*2;re()<.5&&pe(Ot+Mt*qt,J+wt*qt,0,.6+re()*.2)}}}{let T=[3978315,5031250,3121226,6539594,8376650,3450963],et=new de(.32,.5,4.2,7);et.translate(0,2.1,0);let j=new tn(3.2,1);j.scale(1,1.08,1),j.translate(0,6.6,0);let ct=Ke([new tn(3,1).translate(0,6.2,0),new tn(2.3,0).translate(1.9,5.3,.6),new tn(2.2,0).translate(-1.7,5.5,-.8),new tn(2,0).translate(.2,8.2,.3)].map(cf)),vt=Ke([new qe(3,4.2,8).translate(0,5,0),new qe(2.4,3.6,8).translate(0,7.2,0),new qe(1.6,3,8).translate(0,9.2,0)].map(cf)),ht=Jt.map(Ot=>({x:Ot.x,y:t.heightAt(Ot.x,Ot.z)-.2,z:Ot.z,ry:re()*6.28,s:Ot.s}));nt(et,mt(9067062),ht,{ol:2,olRef:40,chunk:160,occluder:!0});let Ut=mt(16777215);j.computeVertexNormals(),[j,ct,vt].forEach((Ot,J)=>{let Mt=ht.filter((wt,qt)=>Jt[qt].kind===J);nt(Ot,Ut,Mt,{ol:2.2,olRef:40,colors:Mt.map(()=>T[Math.floor(re()*T.length)]),chunk:160,occluder:!0})}),W.treeCount=Jt.length}{let T=Ke([0,1,2,3].map(ht=>{let Ut=new qe(.09,.55,3);return Ut.translate(0,.27,0),Ut.rotateZ((ht-1.5)*.25),Ut.rotateY(ht*1.7),Ut.translate((ht-1.5)*.08,0,ht%2*.06),Ut.index?Ut.toNonIndexed():Ut})),et=Ke([new de(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new tn(.13,0).translate(0,.38,0)]),j=[],ct=[],vt=[];for(let ht=0;ht<9e3;ht++){let Ut=f[Math.floor(re()*f.length)],Gt=re()*6.283,Ot=Ve/2+1+re()*22,J=Ut[0]+Math.cos(Gt)*Ot,Mt=Ut[1]+Math.sin(Gt)*Ot;if(!x(J,Mt)||A(J,Mt,.5)||!d(J,Mt,.2))continue;let wt=t.heightAt(J,Mt)-.03;re()<.62?j.push({x:J,y:wt,z:Mt,ry:re()*6,s:.5+re()*.6}):(ct.push({x:J,y:wt,z:Mt,ry:re()*6,s:.35+re()*.25}),vt.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(re()*6)]))}nt(T,mt(5226296),j,{cast:!1,chunk:120}),nt(et,mt(16777215),ct,{cast:!1,colors:vt,chunk:120})}let oe=new vn({side:hn,depthWrite:!1,fog:!1,uniforms:{top:{value:new le(3116287)},mid:{value:new le(9425919)},bot:{value:new le(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Te=new Ue(new ve(5e3,32,16),oe);Te.renderOrder=-10,Te.frustumCulled=!1,i.add(Te),o.push(oe,Te.geometry);let st=Ke([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([T,et,j,ct])=>new tn(ct,2).translate(T,et,j)));st.scale(1,.7,.8);let $t=[c.x0+h/2,c.z0+p/2],Ct=[];for(let T=0;T<26;T++){let et=re()*6.28,j=300+re()*1300;Ct.push({x:$t[0]+Math.cos(et)*j,y:170+re()*120,z:$t[1]+Math.sin(et)*j,ry:re()*6,s:.8+re()*1.4})}let zt=nt(st,mt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),Ct,{ol:1.5,olRef:300,cast:!1}),te=[];for(let T=0;T<18;T++){let et=T/18*6.28+re()*.2,j=1900+re()*500;te.push({x:$t[0]+Math.cos(et)*j,y:-40,z:$t[1]+Math.sin(et)*j,sx:320+re()*260,sy:80+re()*90,sz:260+re()*200,ry:re()*6})}nt(new ve(1,24,12),mt(7128954),te,{cast:!1,colors:te.map((T,et)=>[8047487,6273413,9425290][et%3])});function jt(T){Q.uTime.value=T;for(let et of Tt)et.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(T*1.7+et.ph)*.08,et.g.rotation.z=Math.sin(T*1.3+et.ph)*.06,et.g.rotation.y=et.a+Math.sin(T*.1+et.ph)*.4;zt&&(zt.position.x=Math.sin(T*.01)*40)}function ge(){a.traverse(T=>{T.geometry&&T.geometry.dispose()});for(let T of o)T.dispose?.();i.remove(a),i.remove(Te)}return{group:a,anchors:W,update:jt,dispose:ge,inPark:x,clearOf:d,reserve:_,blocked:A,groundTex:U,onPath:ie,registerInstanced:M,clearArea:z,redrawGround:w,setOcclusionCorridor:P}}function cf(i){let t=i.index?i.toNonIndexed():i;return t.computeVertexNormals(),t}function Ho(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function Ye(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var ff=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],uf=[4054148,16727435,16765503,3054591,16777215];function px(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new kt(Math.max(.001,o),r))}i.unshift(new kt(.001,0));let e=new rr(i,12);return e.computeVertexNormals(),e}function uc(i,t){let e=Sn(99),n=t.length,s=new me;if(i.add(s),!n)return{update(){},hideWhere(){},setMask(){},dispose(){i.remove(s)},group:s};let r=px(),o=new ve(.15,8,5);o.scale(.8,1.15,.5);let a=new ve(.075,6,4);a.scale(.85,1.2,.5);let l=new ve(.13,6,5),c=new qe(.14,.36,6);c.translate(0,.18,0);let h=new qe(.26,.55,8);h.translate(0,.27,0);let p=new ve(.2,7,5),m=(Q,N,Tt,It)=>{let L=new Qe(Q,N,Tt);return L.castShadow=!0,L.receiveShadow=!0,L.userData.ol=It,s.add(L),L},u=m(r,mt(16777215),n,2.6),g=m(o,new bn({color:16777215}),n*2,0),_=m(a,new bn({color:1709088}),n*2,0),d=m(l,mt(16777215),n*2,2);g.castShadow=_.castShadow=!1;let f=[m(c,mt(16777215),n,2),m(h,mt(16777215),n,2),m(p,mt(16777215),n,2)],E=[0,0,0],x=new le,y=t.map((Q,N)=>{let Tt=Q.colour??ff[Math.floor(e()*ff.length)];u.setColorAt(N,x.set(Tt)),d.setColorAt(N*2,x),d.setColorAt(N*2+1,x);let It=e()<.3?-1:Math.floor(e()*3),L=-1;return It>=0&&(L=E[It]++,f[It].setColorAt(L,x.set(uf[Math.floor(e()*uf.length)]))),{...Q,s:Q.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:It,ti:L,wave:e()<.5,ex:.3}});f.forEach((Q,N)=>{Q.count=E[N]});for(let Q of[u,d,...f])Q.instanceColor&&(Q.instanceColor.needsUpdate=!0);let k=new Re().makeScale(0,0,0),A=null,C=new Re,I=new An,M=new zn,v=new H,b=new H,P=new Re,S=new Re;function z(Q,N,Tt){let It=y[Q];if(It.hidden||A&&A(It.x,It.z)){for(let tt of[u])tt.setMatrixAt(Q,k);for(let tt=0;tt<2;tt++)g.setMatrixAt(Q*2+tt,k),_.setMatrixAt(Q*2+tt,k),d.setMatrixAt(Q*2+tt,k);It.tk>=0&&f[It.tk].setMatrixAt(It.ti,k);return}let L=It.ex,W=N*It.sp*(.5+L*.6)+It.ph,it=Math.max(0,Math.sin(W))*.32*L,X=1-Math.cos(W*2)*.05*L;M.set(0,It.yaw+Math.sin(N*.8+It.ph)*.25*(1-L),Math.sin(W*.5)*.08*L),I.setFromEuler(M),P.compose(v.set(It.x,It.y+it,It.z),I,b.set(It.s/Math.sqrt(X),It.s*X,It.s/Math.sqrt(X))),u.setMatrixAt(Q,P);for(let tt=0;tt<2;tt++){let ut=tt?.19:-.19;S.makeTranslation(ut,.86,.5),C.multiplyMatrices(P,S),g.setMatrixAt(Q*2+tt,C),S.makeTranslation(ut*1.02,.84+(L>.6?.03:0),.565),C.multiplyMatrices(P,S),_.setMatrixAt(Q*2+tt,C);let Rt=L>.55?1:.15+.2*Math.max(0,Math.sin(W)),Ft=It.wave?Math.sin(W*1.5+tt*3)*.25*L:0,nt=(tt?1:-1)*(.62+Rt*.05+Ft*.3),dt=.45+Rt*.85+Ft;S.makeTranslation(nt,dt,.12),C.multiplyMatrices(P,S),d.setMatrixAt(Q*2+tt,C)}It.tk>=0&&(S.makeTranslation(0,1.22,0),It.tk===0&&S.multiply(new Re().makeRotationZ(Math.sin(W)*.3)),C.multiplyMatrices(P,S),f[It.tk].setMatrixAt(It.ti,C))}for(let Q=0;Q<n;Q++)z(Q,0,!0);let w=()=>{for(let Q of[u,g,_,d,...f])Q.instanceMatrix.needsUpdate=!0};w();for(let Q of[u,g,_,d,...f]){if(!Q.count){Q.visible=!1;continue}Q.computeBoundingSphere(),Q.boundingSphere.radius+=2,Q.userData.ol&&Bn(Q,Q.userData.ol,void 0,18)}function U(Q,N,Tt=[],It=null){let L=!1;for(let W=0;W<n;W++){let it=y[W];if(N&&(it.x-N.x)**2+(it.z-N.z)**2>260*260)continue;let X=.25;if(It!=null)X=It;else for(let tt of Tt){let ut=(tt.x-it.x)**2+(tt.z-it.z)**2;ut<45*45&&(X=Math.max(X,1-Math.sqrt(ut)/70))}it.ex+=(X-it.ex)*.05,z(W,Q),L=!0}L&&w()}function O(){for(let Q of[r,o,a,l,c,h,p])Q.dispose();for(let Q of[u,g,_,d,...f])Q.dispose();i.remove(s)}function V(Q){let N=!1;for(let Tt=0;Tt<n;Tt++)!y[Tt].hidden&&Q(y[Tt].x,y[Tt].z)&&(y[Tt].hidden=!0,z(Tt,0),N=!0);N&&w()}function pt(Q){if(Q!==A){A=Q;for(let N=0;N<n;N++)z(N,0);w()}}return{update:U,dispose:O,hideWhere:V,setMask:pt,group:s,members:y}}function df(i,t,e=5,n=null,s=null){let r=Sn(e),o=[];for(let[a,l]of t.entries())for(let c=l.m0;c<=l.m1;c+=l.spacing??1.35){let h=i.sample(c),p=Math.max(1,Math.round(l.depth/1.25));for(let m=0;m<p;m++){if(r()>l.density)continue;let u=l.off+m*1.25+r()*.35,g=(r()-.5)*.6,_=h.x+h.rx*u*l.side+h.tx*g,d=h.z+h.rz*u*l.side+h.tz*g;n&&n(_,d,1.4)||s&&s(_,d,.6)||o.push({zone:a,x:_,y:i.heightAt(_,d),z:d,yaw:Math.atan2(-h.rx*l.side,-h.rz*l.side)+(r()-.5)*.5})}}return o}var pf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},mf=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],mx=3.2,pr=new Map,ne=(i,t)=>(pr.has(i)||pr.set(i,t()),pr.get(i));function gf(){for(let i of pr.values())i.dispose();pr.clear()}function gx(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function xx(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,c=t*.058,h="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let d of[-1,1])i.beginPath(),i.ellipse(o+d*c*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let p=(d,f)=>{if(f==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=h,i.lineWidth=5,i.beginPath();let A=t*.03;i.moveTo(d,a+A*1.1),i.bezierCurveTo(d-A*2.2,a-A*.2,d-A*.9,a-A*1.9,d,a-A*.6),i.bezierCurveTo(d+A*.9,a-A*1.9,d+A*2.2,a-A*.2,d,a+A*1.1),i.fill(),i.stroke();return}if(f==="closed"||f==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),f==="happy"?i.arc(d,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(d-t*.025,a),i.lineTo(d+t*.025,a)),i.stroke();return}if(f==="x"){i.strokeStyle=h,i.lineWidth=8,i.lineCap="round";let A=t*.02;i.beginPath(),i.moveTo(d-A,a-A),i.lineTo(d+A,a+A),i.moveTo(d+A,a-A),i.lineTo(d-A,a+A),i.stroke();return}if(f==="wink"&&d>o&&(f="happy"),f==="wink"&&(f="open"),f==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),i.arc(d,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),i.stroke();return}let E=f==="wide"?1.3:1,x=t*.03*E,y=e*.085*E;i.fillStyle="#fff",i.strokeStyle=h,i.lineWidth=6,i.beginPath(),i.ellipse(d,a,x,y,0,0,7),i.fill(),i.stroke();let k=f==="wide"?.38:.55;i.fillStyle=h,i.beginPath(),i.ellipse(d+x*.15,a+y*.12,x*k,y*k*1.1,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(d+x*.35,a-y*.2,x*.22,0,7),i.fill(),f==="half"&&(i.fillStyle=n,i.fillRect(d-x-4,a-y-4,x*2+8,y*1.05),i.strokeStyle=h,i.lineWidth=7,i.beginPath(),i.moveTo(d-x-2,a-y*.1),i.lineTo(d+x+2,a-y*.1),i.stroke())},m={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(m="happy"),r==="love"&&(m="heart"),r==="dead"&&(m="x"),r==="effort"&&s!=="goofy"&&(m="open");for(let d of[-1,1])p(o+d*c,m);i.strokeStyle=h,i.lineWidth=10,i.lineCap="round";let u=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let d of[-1,1]){let f=o+d*c,E=a-e*.13,x=t*.026,y=f-d*x,k=f+d*x;i.beginPath(),i.moveTo(k,E-u*18),i.lineTo(y,E+u*18),i.stroke()}i.lineWidth=8,i.strokeStyle=h,i.fillStyle="#7a1e2e";let g=o,_=r||"normal";if(_==="happy"||_==="normal"&&s==="grin")i.beginPath(),i.moveTo(g-t*.04,l-e*.02),i.quadraticCurveTo(g,l+e*.12,g+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(_==="effort"){i.fillStyle="#fff",i.beginPath(),Ye(i,g-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.035,l),i.lineTo(g+t*.035,l);for(let d=-2;d<=2;d++)i.moveTo(g+d*t*.012,l-e*.03),i.lineTo(g+d*t*.012,l+e*.035);i.stroke()}else if(_==="sad"||_==="dead")i.beginPath(),i.moveTo(g-t*.03,l+e*.04),i.quadraticCurveTo(g,l-e*.04,g+t*.03,l+e*.04),i.stroke(),_==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(_==="love"||_==="pant")i.beginPath(),i.ellipse(g,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="gritted"){i.fillStyle="#fff",i.beginPath(),Ye(i,g-t*.04,l-e*.03,t*.08,e*.06,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.04,l),i.lineTo(g+t*.04,l);for(let d=-2;d<=2;d++)i.moveTo(g+d*t*.014,l-e*.03),i.lineTo(g+d*t*.014,l+e*.03);i.stroke()}else if(s==="tongue-out")i.beginPath(),i.moveTo(g-t*.035,l),i.quadraticCurveTo(g,l+e*.05,g+t*.035,l),i.stroke(),i.fillStyle="#ff6f8a",i.beginPath(),i.ellipse(g+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),i.fill(),i.stroke(),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3,i.beginPath(),i.moveTo(g+t*.008,l+e*.03),i.lineTo(g+t*.01,l+e*.08),i.stroke();else if(s==="wide-eyed")i.beginPath(),i.ellipse(g,l+e*.02,t*.016,e*.04,0,0,7),i.fill(),i.stroke();else if(s==="cheeky")i.beginPath(),i.moveTo(g-t*.04,l-e*.01),i.quadraticCurveTo(g,l+e*.08,g+t*.045,l-e*.035),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.quadraticCurveTo(g+t*.01,l+e*.05,g+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(g-t*.03,l+e*.02);for(let d=0;d<=6;d++)i.lineTo(g-t*.03+d*t*.01,l+e*.02+(d%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(g-t*.04,l),i.quadraticCurveTo(g,l+e*.09,g+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.lineTo(g+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(g-t*.035,l-e*.01),i.quadraticCurveTo(g,l+e*.07,g+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function yx(i,t){return rn(256,200,(e,n,s)=>{e.fillStyle="#ffffff",Ye(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${fc}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),on(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function _x(i){return rn(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")on(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function xf(i,t={}){let e=i.look||{},n=pf[e.build]||pf.compact,s=gx(i.id+(i.nickname||"")),r=Sn(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",c=mf[s%mf.length],h=[],p=mt(o),m=mt(a),u=mt(l),g=mt(c),_=new le(a).getHSL({}).l>.85?"#ffffff":a,d=mt(_),f=mt("#ffffff"),E=mt("#22202c"),x=($,ot,at=mx)=>be($,ot,{ol:at,olRef:9}),y=new me;y.name=`runner-${i.id}`;let k=new me;y.add(k);let A=new me;k.add(A);let C=n.leg/2,I=n.leg+n.shoe[1]*.75;A.position.y=I;let M=x(ne(`shorts${e.build}`,()=>new Ee(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),m);M.position.y=.02,A.add(M);let v=new me;v.position.y=.12,A.add(v);let b=x(ne(`torso${e.build}`,()=>new Ee(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),p);b.position.y=n.torso[1]/2,v.add(b);for(let $ of[-1,1]){let ot=be(ne(`stripe${e.build}`,()=>new Ie(.06,n.torso[1]*.8,n.torso[2]*.7)),mt(a),{cast:!1});ot.position.set($*n.torso[0]*.5,n.torso[1]*.5,0),v.add(ot)}let P=yx(i.lane??0,o);h.push(P);let S=new Ue(ne("bib",()=>new fn(1,.78)),mt(16777215,{map:P})),z=Math.min(.42,n.torso[0]*.6);S.scale.setScalar(z),S.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),v.add(S);let w=new me;w.position.y=n.torso[1]+.02,v.add(w);let U=new me;w.add(U);let O=document.createElement("canvas");O.width=1024,O.height=512;let V=new Es(O);V.colorSpace=ln,V.anisotropy=4,h.push(V);let pt=null,Q=$=>{$!==pt&&(pt=$,xx(O.getContext("2d"),1024,512,l,e.face||"grin",$),V.needsUpdate=!0)};Q("normal");let N=n.head,Tt=x(ne(`head${N}`,()=>new ve(N,32,20).scale(1,.98,.96)),mt(16777215,{map:V}));Tt.position.y=N*.92,U.add(Tt);for(let $ of[-1,1]){let ot=x(ne(`ear${N}`,()=>new ve(N*.2,10,8).scale(.6,1,.8)),u,2.5);ot.position.set($*N*.97,N*.9,0),U.add(ot)}let It=x(ne(`nose${N}`,()=>new ve(N*.14,10,8)),u,2);It.position.set(0,N*.84,N*.97),U.add(It),dt(e.hair,e.hat),B(e.hat);let L=[];for(let $ of[-1,1]){let ot=new me;ot.position.set($*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),v.add(ot);let at=x(ne(`sleeve${e.build}`,()=>new ve(n.armR*1.65,14,10)),p);ot.add(at);let xt=x(ne(`uarm${e.build}`,()=>new On(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);ot.add(xt);let At=new me;At.position.y=-n.arm/2+n.armR*.4,ot.add(At);let bt=x(ne(`farm${e.build}`,()=>new On(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);At.add(bt);let Nt=x(ne(`hand${e.build}`,()=>new ve(n.hand,14,10).scale(1,1.1,.9)),u);Nt.position.y=-n.arm/2-n.hand*.4,At.add(Nt),L.push({sh:ot,el:At,hand:Nt})}let W=[];for(let $ of[-1,1]){let ot=new me;ot.position.set($*n.torso[0]*.24,0,0),A.add(ot);let at=x(ne(`thigh${e.build}`,()=>new On(n.legR*1.15,C-n.legR,4,10).translate(0,-C/2,0)),u);ot.add(at);let xt=x(ne(`sleg${e.build}`,()=>new de(n.legR*1.6,n.legR*1.5,C*.5,12).translate(0,-C*.2,0)),m);ot.add(xt);let At=new me;At.position.y=-C,ot.add(At);let bt=x(ne(`shin${e.build}`,()=>new On(n.legR,C-n.legR,4,10).translate(0,-C/2,0)),u);At.add(bt);let Nt=x(ne(`sock${e.build}`,()=>new de(n.legR*1.12,n.legR*1.12,C*.25,10).translate(0,-C*.86,0)),mt(16777215),2.5);At.add(Nt);let Yt=new me;Yt.position.y=-C,At.add(Yt);let ie=x(ne(`shoe${e.build}`,()=>new Ee(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),d);Yt.add(ie);let Jt=be(ne(`sole${e.build}`,()=>new Ee(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),f,{ol:2.5,olRef:9});Yt.add(Jt);let pe=be(ne(`swoosh${e.build}`,()=>new Ie(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),mt(o),{cast:!1});Yt.add(pe),W.push({hp:ot,kn:At,an:Yt})}Vt(e.accessory);let it=new me;it.visible=!1;{let $=be(ne("flossStick",()=>new de(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),mt("#e8d0a0"),{cast:!1}),ot=be(ne("flossFluff",()=>{let at=Sn(5);return Ke(Array.from({length:7},()=>new tn(.16+at()*.06,1).translate((at()-.5)*.22,(at()-.5)*.22,.72+(at()-.5)*.2)))}),mt("#ff9bd2"),{ol:2.5,olRef:9});it.add($,ot),it.userData.fluff=ot,it.position.y=-n.arm/2-n.hand*.4,L[0].el.add(it)}function X($,ot){$==="floss"&&(it.visible=ot>0,ot>0&&it.userData.fluff.scale.setScalar(Math.max(.15,ot)))}let tt={},ut=new _o(new Qs({transparent:!0,depthTest:!1}));ut.scale.setScalar(.9),ut.visible=!1,ut.renderOrder=20,y.add(ut);let Rt=$=>{if(!$){ut.visible=!1;return}tt[$]||(tt[$]=_x($),h.push(tt[$])),ut.material.map=tt[$],ut.material.needsUpdate=!0,ut.visible=!0},Ft=I+.12+n.torso[1]+.02+N*2;ut.position.y=Ft+.45;let nt=new Set([b,M,Tt,...L.flatMap($=>[$.hand]),...W.map($=>$.an.children[0])]);for(let $ of L)$.sh.children.forEach(ot=>ot.isMesh&&nt.add(ot));for(let $ of W)$.hp.children.forEach(ot=>ot.isMesh&&nt.add(ot));y.traverse($=>{$.isMesh&&!$.userData.isOutline&&($.castShadow=nt.has($))});function dt($,ot){let at=$||"short";if(at==="bald")return;let xt=(At=1.07,bt=.48)=>{let Nt=x(ne(`hcap${N}${At}${bt}`,()=>new ve(N*At,24,14,0,Math.PI*2,0,Math.PI*bt)),g);return Nt.position.y=N*.92,Nt.rotation.x=-.32,U.add(Nt),Nt};if(at==="curly"||at==="afro"){let At=ne(`curly${N}`,()=>{let Nt=Sn(7),Yt=[];for(let ie=0;ie<26;ie++){let Jt=Nt()*Math.PI*.55,pe=Nt()*Math.PI*2,oe=new H(Math.sin(Jt)*Math.cos(pe),Math.cos(Jt),Math.sin(Jt)*Math.sin(pe)).multiplyScalar(N*1.02);oe.z>N*.55&&oe.y<N*.75||Yt.push(new tn(N*.33,1).translate(oe.x,oe.y,oe.z-N*.08))}return Ke(Yt)}),bt=x(At,g);bt.position.y=N*.98,at==="afro"&&(bt.scale.setScalar(1.28),bt.position.y=N*1.05),U.add(bt);return}if(ot==="beanie"||ot==="bucket"||ot==="bobble"){if(xt(1.05,.5),at==="mullet"||at==="long"||at==="ponytail"){let At=x(ne(`mul${N}`,()=>new Ee(N*1.5,N*.9,N*.4,3,N*.15)),g);At.position.set(0,N*.35,-N*.78),U.add(At)}return}if(at==="buzz"){let At=x(ne(`buzz${N}`,()=>new ve(N*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),g,2);At.position.y=N*.92,At.rotation.x=-.32,U.add(At);return}if(xt(),at==="quiff"||at==="swept"){let At=x(ne(`quiff${N}${at}`,()=>new ve(N*.55,16,10).scale(at==="quiff"?1.3:1.7,at==="quiff"?.75:.45,1)),g);At.position.set(at==="swept"?N*.25:0,N*1.82,N*.38),At.rotation.set(-.5,0,at==="swept"?-.35:0),U.add(At)}if(at==="mullet"){let At=x(ne(`mul${N}`,()=>new Ee(N*1.5,N*.9,N*.4,3,N*.15)),g);At.position.set(0,N*.35,-N*.78),U.add(At)}if(at==="long"){let At=x(ne(`hlong${N}`,()=>new Ee(N*1.8,N*1.6,N*.5,3,N*.2)),g);At.position.set(0,N*.4,-N*.62),U.add(At)}if(at==="ponytail"){let At=new me;At.position.set(0,N*1.35,-N*.85),U.add(At);for(let bt=0;bt<3;bt++){let Nt=x(ne(`pt${N}${bt}`,()=>new ve(N*(.32-bt*.05),12,8)),g);Nt.position.set(0,-bt*N*.32,-bt*N*.18),At.add(Nt)}U.userData.pony=At}if(at==="bun"){let At=x(ne(`bun${N}`,()=>new ve(N*.38,14,10)),g);At.position.set(0,N*2,-N*.2),U.add(At)}if(at==="mohawk"||at==="spiky"){let At=at==="mohawk"?5:9;for(let bt=0;bt<At;bt++){let Nt=x(ne(`spk${N}`,()=>new qe(N*.2,N*.7,8)),g),Yt=at==="mohawk"?0:bt/At*Math.PI*2,ie=at==="mohawk"?-.9+bt/(At-1)*1.8:.6;Nt.position.set(Math.sin(Yt)*Math.sin(ie)*N,N*.92+Math.cos(ie)*N*1.05,(at==="mohawk"?Math.sin(ie):Math.cos(Yt)*Math.sin(ie))*N),Nt.lookAt(Nt.position.clone().multiplyScalar(3)),Nt.rotateX(Math.PI/2),U.add(Nt)}}}function B($){if(!$)return;let ot=mt(a==="#ffffff"||a==="#f8f8f8"?o:a),at=mt(o);if($==="backwards-cap"){let xt=x(ne(`capd${N}`,()=>new ve(N*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ot);xt.position.y=N*.98,xt.rotation.x=-.18,U.add(xt);let At=x(ne(`brim${N}`,()=>new de(N*.75,N*.75,N*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),at);At.position.set(0,N*1.42,-N*.62),At.rotation.set(-.12,Math.PI,0),U.add(At)}else if($==="bobble"){let xt=x(ne(`bean${N}`,()=>new ve(N*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),at);xt.position.y=N*.96,xt.rotation.x=-.12,U.add(xt);let At=x(ne(`brim2${N}`,()=>new Ze(N*1.05,N*.17,8,24)),ot);At.rotation.x=Math.PI/2-.12,At.position.y=N*1.12,U.add(At);let bt=x(ne(`bigbob${N}`,()=>new tn(N*.48,1)),ot);bt.position.y=N*2.45,U.add(bt),U.userData.bobble=bt}else if($==="cap"||$==="visor"){if($==="cap"){let At=x(ne(`capd${N}`,()=>new ve(N*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ot);At.position.y=N*.98,At.rotation.x=-.18,U.add(At)}else{let At=x(ne(`vband${N}`,()=>new Ze(N*1,N*.12,8,24)),ot);At.rotation.x=Math.PI/2-.25,At.position.y=N*1.35,U.add(At)}let xt=x(ne(`brim${N}`,()=>new de(N*.75,N*.75,N*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),at);xt.position.set(0,N*1.42,N*.62),xt.rotation.x=.12,U.add(xt)}else if($==="beanie"){let xt=x(ne(`bean${N}`,()=>new ve(N*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ot);xt.position.y=N*.96,xt.rotation.x=-.12,U.add(xt);let At=x(ne(`brim2${N}`,()=>new Ze(N*1.05,N*.17,8,24)),at);At.rotation.x=Math.PI/2-.12,At.position.y=N*1.12,U.add(At);let bt=x(ne(`bob${N}`,()=>new tn(N*.3,1)),at);bt.position.y=N*2.25,U.add(bt)}else if($==="headband"||$==="sweatband"){let xt=x(ne(`hb${N}`,()=>new Ze(N*1,N*.13,8,28)),ot);xt.rotation.x=Math.PI/2-.2,xt.position.y=N*1.3,U.add(xt);let At=x(ne(`hbt${N}`,()=>new Ee(N*.2,N*.5,N*.08,2,.02)),ot);At.position.set(.12,N*1.1,-N*1.05),At.rotation.z=.5,U.add(At),U.userData.tail=At}else if($==="bucket"){let xt=x(ne(`buck${N}`,()=>new de(N*.8,N*1.02,N*.7,20)),ot);xt.position.y=N*1.75,U.add(xt);let At=x(ne(`buckb${N}`,()=>new de(N*1.5,N*1.5,N*.06,24)),at);At.position.y=N*1.42,At.rotation.x=.1,U.add(At)}else if($==="crown"||$==="tiara"){let xt=x(ne(`crown${N}`,()=>new de(N*.7,N*.62,N*.5,8,1,!0)),mt("#ffd23f",{side:Je}));xt.position.y=N*2,U.add(xt)}else if($==="wizard"||$==="party"){let xt=x(ne(`cone${N}`,()=>new qe(N*.8,N*1.8,16)),ot);xt.position.y=N*2.3,xt.rotation.z=.15,U.add(xt);let At=x(ne(`bob${N}`,()=>new tn(N*.3,1)),at);At.position.set(-N*.12,N*3.15,0),U.add(At)}else if($==="helmet"||$==="bike_helmet"){let xt=x(ne(`helm${N}`,()=>new ve(N*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),ot);xt.position.y=N*1,U.add(xt)}else if($==="santa"){let xt=x(ne(`santa${N}`,()=>new qe(N*.95,N*1.6,16)),mt("#e8313f"));xt.position.y=N*2.2,xt.rotation.z=.5,U.add(xt);let At=x(ne(`santar${N}`,()=>new Ze(N*.95,N*.2,8,24)),mt("#ffffff"));At.rotation.x=Math.PI/2,At.position.y=N*1.45,U.add(At)}else{let xt=x(ne(`cone${N}`,()=>new qe(N*.8,N*1.8,16)),ot);xt.position.y=N*2.3,U.add(xt)}}function Vt($){if($){if($==="sunglasses"||$==="glasses"){let ot=$==="sunglasses";for(let xt of[-1,1]){let At=x(ne(`lens${N}${ot}`,()=>new Ee(N*.5,N*.32,N*.08,2,N*.06)),ot?mt("#141420"):mt("#cfefff"),2);At.position.set(xt*N*.3,N*1.02,N*.98),At.rotation.y=xt*.28,U.add(At)}let at=be(ne(`bridge${N}`,()=>new Ie(N*.3,N*.06,N*.06)),mt("#141420"),{cast:!1});at.position.set(0,N*1.06,N*1.04),U.add(at)}else if($==="medal"){let ot=x(ne("ribbon",()=>new Ze(.2,.03,6,20,Math.PI)),mt("#2e9bff"),2);ot.rotation.z=Math.PI,ot.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),ot.rotation.x=-.3,v.add(ot);let at=x(ne("medal",()=>new de(.11,.11,.04,16).rotateX(Math.PI/2)),mt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);at.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),v.add(at),S.position.y-=.1,S.position.x=.12,S.scale.multiplyScalar(.8)}else if($==="headphones"){let ot=x(ne(`hp${N}`,()=>new Ze(N*1.08,N*.07,6,24,Math.PI)),mt("#22202c"),2);ot.position.y=N*.95,U.add(ot);for(let at of[-1,1]){let xt=x(ne(`hpc${N}`,()=>new de(N*.3,N*.3,N*.2,14).rotateZ(Math.PI/2)),mt(o),2.5);xt.position.set(at*N*1.02,N*.92,0),U.add(xt)}}else if($==="sweatband"||$==="wristbands"||$==="watch")for(let ot of L){let at=x(ne(`wb${e.build}`,()=>new de(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),mt($==="watch"?"#22202c":a),2);if(ot.el.add(at),$==="watch")break}else if($==="scarf"){let ot=x(ne("scarf",()=>new Ze(.22,.08,8,18)),mt(a));ot.rotation.x=Math.PI/2,ot.position.y=.02,w.add(ot);let at=x(ne("scarft",()=>new Ee(.14,.5,.06,2,.03)),mt(a));at.position.set(.1,-.15,-.25),at.rotation.x=.5,w.add(at),U.userData.tail2=at}else if($==="cape"){let ot=x(ne(`cape${e.build}`,()=>new fn(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),mt(a,{side:Je}),2),at=new me;at.position.set(0,n.torso[1],-n.torso[2]/2-.03),at.add(ot),v.add(at),U.userData.cape=at}else if($==="backpack"){let ot=x(ne(`bp${e.build}`,()=>new Ee(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),mt(a));ot.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),v.add(ot)}else if($==="moustache"||$==="mustache"){let ot=x(ne(`mou${N}`,()=>new On(N*.09,N*.5,4,8).rotateZ(Math.PI/2)),mt("#3a2616"),2);ot.position.set(0,N*.7,N*.98),U.add(ot)}else if($==="beard"){let ot=x(ne(`beard${N}`,()=>new ve(N*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),g,2.5);ot.position.set(0,N*.78,N*.32),U.add(ot);let at=x(ne(`mou${N}`,()=>new On(N*.09,N*.5,4,8).rotateZ(Math.PI/2)),g,2);at.position.set(0,N*.7,N*.98),U.add(at)}else if($==="bumbag"){let ot=x(ne(`bum${e.build}`,()=>new Ee(n.torso[0]*.5,.2,.18,2,.07)),mt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));ot.position.set(n.torso[0]*.12,.08,n.torso[2]/2+.08),A.add(ot);let at=be(ne(`strap${e.build}`,()=>new Ze(n.torso[0]*.48,.025,6,24).scale(1,n.torso[2]/n.torso[0]*1.05,1).rotateX(Math.PI/2)),mt("#22202c"),{cast:!1});at.position.y=.1,A.add(at)}else if($==="bib"){let ot=new Ue(ne("bib",()=>new fn(1,.78)),S.material);ot.scale.copy(S.scale),ot.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.012),ot.rotation.y=Math.PI,v.add(ot),S.scale.multiplyScalar(1.3)}else if($==="bowtie")for(let ot of[-1,1]){let at=x(ne("bow",()=>new qe(.08,.16,4).rotateZ(Math.PI/2)),mt(a),2);at.position.set(ot*.08,n.torso[1]-.06,n.torso[2]/2+.03),at.rotation.z=ot>0?Math.PI:0,v.add(at)}else if($==="tutu"){let ot=x(ne(`tutu${e.build}`,()=>new de(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),mt("#ff9bd2",{side:Je}),2);ot.position.y=-.05,A.add(ot)}}}let Z={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},Y=Z.j,gt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let $ of gt)Y[$]=0;let q={},Lt="idle",F=null,R=0;function lt($,ot=null){($!==Lt||ot!==F)&&(Lt=$,F=ot,R=0)}function _t($,ot={}){Z.t+=$,R+=$;let at=Z.t;for(let Nt of gt)q[Nt]=0;let xt="normal",At=10;if(Lt==="run"||Lt==="jog"||Lt==="trudge"||Lt==="distracted"){let Nt=Math.max(.5,ot.speed??3.5),Yt=Math.max(.2,ot.rate??1),ie=Lt==="trudge",Jt=ie?1.7:(2.55+.14*(Nt-3.5))*Math.pow(Yt,.3)*(Lt==="jog"?.8:1);Z.phase+=$*Math.PI*Jt;let pe=Z.phase,oe=Math.sin(pe),Te=Math.cos(pe),st=ie?.4:Math.max(.45,Math.min(1,.62+.13*(Nt-3.5)));q.hipLx=-st*oe,q.hipRx=st*oe,q.kneeL=.2+(ie?.5:1.35)*Math.max(0,Te)*(.7+st*.3),q.kneeR=.2+(ie?.5:1.35)*Math.max(0,-Te)*(.7+st*.3),q.ankL=-.2*oe,q.ankR=.2*oe;let $t=ie?.3:.75*st+.15;q.shLx=$t*oe,q.shRx=-$t*oe,q.shLz=-.18,q.shRz=.18,q.elL=ie?-.5:-1.5,q.elR=ie?-.5:-1.5,q.twist=.16*oe,q.roll=.05*oe,q.bob=(ie?.03:.11)*(Math.abs(Te)-.4),q.lean=(ie?.05:.16)+Math.max(-.25,Math.min(.45,(ot.slope??0)*1.6)),q.headX=-q.lean*.6,q.headY=-.08*oe,At=18,xt=ot.effort>.6?"effort":ot.effort>.3?"pant":"normal",ie&&(q.headX=.35,q.lean=.25,xt="sad"),Lt==="distracted"&&(q.headY=ot.lookYaw??.9,q.headX=-.15,q.twist+=(ot.lookYaw??.9)*.3,xt="love")}else if(Lt==="ready")q.hipLx=-.5,q.hipRx=.35,q.kneeL=.6,q.kneeR=.5,q.lean=.35,q.bob=-.12,q.shLx=.5,q.shRx=-.6,q.elL=-1.3,q.elR=-1.3,q.headX=-.25,q.bob+=Math.sin(at*3)*.01,xt="effort";else if(Lt==="wave")q.shRz=2.7,q.elR=.2*Math.sin(at*9)-.25,q.shRx=Math.sin(at*9)*.25,q.shLz=-.3,q.elL=-.4,q.bob=Math.abs(Math.sin(at*4))*.05,q.headY=.1*Math.sin(at*2),xt="happy";else if(Lt==="pose"){let Nt=F||"flex";if(Nt==="flex")q.shLz=-1.5,q.shRz=1.5,q.elL=-1.9-Math.sin(at*6)*.15,q.elR=-1.9-Math.sin(at*6+1)*.15,q.shLx=-0,q.bob=-.06+Math.abs(Math.sin(at*3))*.03,q.hipSpread=.25,q.kneeL=.3,q.kneeR=.3,xt="effort";else if(Nt==="point")q.shRx=-1.5,q.elR=0,q.shLz=-.3,q.elL=-1.6,q.shLx=-.3,q.headX=-.1,q.lean=-.05,xt="happy",q.bob=Math.sin(at*5)*.02;else if(Nt==="stretch")q.hipRx=-.2,q.kneeR=2.3,q.shRx=.8,q.elR=-.6,q.shLz=-2.6,q.lean=.08+Math.sin(at*2)*.04,xt="smug";else if(Nt==="spin"){let Yt=Math.min(1,R/1.1);q.bodyY=(1-(1-Yt)**2)*Math.PI*4,q.shLz=Yt<1?-1.3:-2.6,q.shRz=Yt<1?1.3:2.6,q.bob=Yt<1?Math.abs(Math.sin(at*7))*.2:Math.abs(Math.sin(at*5))*.12,xt="happy"}else Nt==="bow"?(q.lean=.75+Math.sin(at*2)*.05,q.shLx=.4,q.shRx=-1.2,q.elR=-1.6,q.shRz=.4,q.headX=-.2,xt="happy"):(q.shLz=-2.5,q.shRz=2.5,q.bob=Math.abs(Math.sin(at*6))*.25,xt="happy");xt==="smug"&&(xt="normal")}else if(Lt==="celebrate"){let Nt=F||"jump";if(Nt==="jump"){let Yt=Math.abs(Math.sin(at*5.5));q.bob=Yt*.55,q.shLz=-2.6-Yt*.3,q.shRz=2.6+Yt*.3,q.elL=-.2,q.elR=-.2,q.kneeL=q.kneeR=(1-Yt)*.8,q.hipLx=q.hipRx=-(1-Yt)*.4,xt="happy",At=22}else if(Nt==="fist"){let Yt=Math.sin(at*7);q.shRx=-2.6,q.elR=-.4+Yt*.4,q.shLx=.4,q.elL=-1.8,q.bob=Math.abs(Yt)*.08,q.lean=-.1,xt="happy"}else Nt==="kneel"?(q.lean=.85,q.kneeL=q.kneeR=.7,q.hipLx=q.hipRx=-.6,q.bob=-.25+Math.sin(at*7)*.025,q.shLx=q.shRx=-.55,q.elL=q.elR=-.1,q.shLz=-.15,q.shRz=.15,q.headX=-.6,xt="pant"):Nt==="collapse"?(q.bodyX=-Math.PI/2+.05,q.shLz=-2.2,q.shRz=2.2,q.hipSpread=.4,q.kneeL=.3+Math.max(0,Math.sin(at*9))*.4*(Math.sin(at*.7)>.6?1:0),q.kneeR=.2,xt="dead",At=4):Nt==="shrug"&&(q.shLz=-.9,q.shRz=.9,q.elL=-1.4,q.elR=-1.4,q.shLx=-.5,q.shRx=-.5,q.headX=.1,q.headY=Math.sin(at*1.5)*.3,xt="sad")}else q.bob=Math.sin(at*2)*.015,q.shLz=-.18,q.shRz=.18,q.elL=-.25,q.elR=-.25,q.headY=Math.sin(at*.7)*.25,q.lean=.02,q.kneeL=q.kneeR=.05;ot.lookYaw!=null&&Lt!=="distracted"&&(q.headY+=ot.lookYaw);let bt=1-Math.exp(-At*$);for(let Nt of gt){if(Nt==="bodyY"&&Lt==="pose"&&F==="spin"){Y[Nt]=q[Nt];continue}Y[Nt]+=(q[Nt]-Y[Nt])*bt}if(Lt==="pose"&&F==="spin"||(Y.bodyY=Y.bodyY%(Math.PI*2),Y.bodyY>Math.PI&&(Y.bodyY-=Math.PI*2)),W[0].hp.rotation.set(Y.hipLx,0,-Y.hipSpread),W[1].hp.rotation.set(Y.hipRx,0,Y.hipSpread),W[0].kn.rotation.x=Y.kneeL,W[1].kn.rotation.x=Y.kneeR,W[0].an.rotation.x=Y.ankL-Y.kneeL*.35,W[1].an.rotation.x=Y.ankR-Y.kneeR*.35,L[0].sh.rotation.set(Y.shLx,0,Y.shLz-0),L[1].sh.rotation.set(Y.shRx,0,Y.shRz),L[0].el.rotation.x=Y.elL,L[1].el.rotation.x=Y.elR,v.rotation.set(Y.lean,Y.twist,0),A.rotation.set(0,-Y.twist*.5,Y.roll),A.position.y=I+Y.bob,U.rotation.set(Y.headX,Y.headY,0),k.rotation.set(Y.bodyX,Y.bodyY,Y.bodyZ),k.position.y+=((Lt==="celebrate"&&F==="collapse"?n.torso[2]*.5+.08:0)-k.position.y)*bt,U.userData.bobble&&(U.userData.bobble.position.y=N*2.45+Math.abs(Math.sin(Z.phase))*.04),U.userData.pony&&(U.userData.pony.rotation.x=.4+Math.sin(Z.phase*2)*.35),U.userData.tail&&(U.userData.tail.rotation.x=.6+Math.sin(Z.phase*2)*.3),U.userData.cape&&(U.userData.cape.rotation.x=-.3-Math.min(1.1,(ot.speed??0)*.15)+Math.sin(at*8)*.08),ot.expr&&(xt=ot.expr),Q(xt),ut.visible){ut.position.y=Ft+.45+Math.sin(at*6)*.08;let Nt=.9+Math.sin(at*9)*.05;ut.scale.set(Nt,Nt,Nt)}}function Pt(){for(let $ of h)$.dispose?.();ut.material.dispose()}return{id:i.id,info:i,root:y,update:_t,set:lt,setPop:Rt,setExpr:Q,setProp:X,dispose:Pt,height:Ft,hipH:I,get state(){return Lt},get variant(){return F}}}var yf=[1720,4220];function Is(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function li(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function Ai(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function Vo(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}var vx=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function _f(i,t,e){let n=i.timeMap,s={};e.forEach((M,v)=>s[M.id]=M.lane??v+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Ve-1.6)/Math.max(1,r-1)),c=i.runners.map((M,v)=>{let b=Ai(n,M.officialS),P=((s[M.id]??v+1)-a)*l;return{...M,finishB:b,base:P,seed:v*1.7+.3}}),h=Object.fromEntries(c.map(M=>[M.id,M])),p=[...c].sort((M,v)=>M.officialS-v.officialS).map(M=>M.id),m=Object.fromEntries(p.map((M,v)=>[M,v+1])),u=h[p[0]],g=p.map(M=>h[M].officialS),_=h[p[0]].finishB,d=h[p.at(-1)].finishB,f=r>1&&g[1]-g[0]<=1.5,E=M=>Math.max(.05,(Vo(n,M+.05)-Vo(n,M-.05))/.1),x=new Map;function y(M){let v=Math.round(M*1e3);if(x.has(v))return x.get(v);let b=M<=0?0:Vo(n,M),P=M<=0?4:E(M),S={b:M,raceS:b,rate:P,byId:{},order:[]};for(let O of c){let V=Is(O.progress,b),pt=b>=O.officialS&&M>=O.finishB-1e-6,Q=(Is(O.progress,b+1)-Is(O.progress,Math.max(0,b-1)))/(b>1?2:1);S.byId[O.id]={id:O.id,m:V,finished:pt,vRace:pt?0:Q,place:m[O.id]}}for(let O of c){let V=S.byId[O.id],pt=V.m,Q=O.base;Q+=.22*Math.sin(V.m/85+O.seed);for(let It of c){if(It===O)continue;let L=S.byId[It.id],W=V.m-L.m;if(Math.abs(W)<4&&!V.finished&&!L.finished){let it=(1-Math.abs(W)/4)*.32;Q+=Math.sign(O.base-It.base||O.seed-It.seed)*it}}let N=0;if(V.finished){let It=M-O.finishB,L=(Is(O.progress,O.officialS)-Is(O.progress,O.officialS-2))/2*E(O.finishB),W=Math.min(14,Math.max(4,L)),it=1.6;pt=5e3+(It<it?W*(It-It*It/(2*it)):W*it/2+Math.min(10+m[O.id]*1.5,(It-it)*.9));let tt=(m[O.id]-(r+1)/2)*1.6;Q=Q+(tt-Q)*vx(0,2.5,It),N=It}let Tt=t.sample(pt,O.id);Q*=1-Tt.div,Q=Math.max(-Ve/2+.6,Math.min(Ve/2-.6,Q)),Object.assign(V,{mVis:pt,x:Tt.x+Tt.rx*Q,z:Tt.z+Tt.rz*Q,y:t.heightAt(Tt.x+Tt.rx*Q,Tt.z+Tt.rz*Q)+.16,tx:Tt.tx,tz:Tt.tz,slope:Tt.slope,div:Tt.div,divInfo:Tt.divInfo,lat:Q,post:N,distToFinish:Math.max(0,5e3-V.m)})}let z=c.filter(O=>S.byId[O.id].finished).sort((O,V)=>O.officialS-V.officialS),w=c.filter(O=>!S.byId[O.id].finished).sort((O,V)=>S.byId[V.id].m-S.byId[O.id].m||O.officialS-V.officialS);S.order=[...z,...w].map(O=>O.id),S.leader=S.byId[S.order[0]];let U=h[S.order[0]];for(let[O,V]of S.order.entries()){let pt=S.byId[V];if(pt.finished)pt.gapText=O===0?Go(h[V].officialS):`+${(h[V].officialS-u.officialS).toFixed(0)}s`;else if(O===0)pt.gapText="LEADER";else{let Q=S.byId[S.order[0]].finished?u:U;pt.gapText=`+${Math.max(0,b-li(Q.progress,pt.m)).toFixed(1)}s`}}return x.size>400&&x.clear(),x.set(v,S),S}return{stateAt:y,orderAt:M=>y(M).order,gapM:(M,v,b)=>{let P=y(b);return Math.abs((P.byId[M]?.m??0)-(P.byId[v]?.m??0))},finishedAt:(M,v)=>y(v).byId[M]?.finished,allFinishedAt:M=>M>d,firstFinishB:_,lastFinishB:d,photoFinish:f,finishOrder:p,place:m,byId:h,R:c,rateAt:E,durationS:n.durationS}}function Go(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}var Mx=1.3,bx=2.4,Sx=.24,Ex=16/9,Mf=i=>i*180/Math.PI,vf=(i,t=Sx)=>Mf(2*Math.atan(bx/(2*t*i)));function dc({plan:i,sim:t,backedIds:e=[],C:n,world:s,funfair:r}){let o=[],a=i.timeMap,l=w=>Ai(a,Math.min(...i.runners.map(U=>li(U.progress,w)))),c=w=>w<=0?4:t.rateAt(w),h=(w,U)=>{let O=0,V=0;for(let pt=w;pt<=U;pt+=Math.max(.5,(U-w)/12))O+=c(pt),V++;return O/Math.max(1,V)},p=t.firstFinishB,m=t.lastFinishB,u=w=>{let U=t.stateAt(Math.max(0,w)),O=U.order.filter(pt=>!U.byId[pt].finished),V=O[0]??U.order[0];return(O.length?O:U.order).filter(pt=>Math.abs(U.byId[pt].m-U.byId[V].m)<120)},g=w=>{let U=t.stateAt(Math.max(0,w)),O=U.order.filter(pt=>!U.byId[pt].finished),V=O[0]??U.order[0];return(O.length?O:U.order).filter(pt=>Math.abs(U.byId[pt].m-U.byId[V].m)<20)},_=(w,U)=>{let O=t.stateAt(Math.max(0,U));return O.order.filter(V=>!O.byId[V].finished&&Math.abs(O.byId[V].m-O.byId[w].m)<20)},d=.25+8;for(let w=.25;w<30;w+=.25)if(c(w)>7){d=Math.max(d,w);break}let f=p-6;for(let w=p-12;w>d;w-=.25)if(c(w)>6){f=w;break}let E=Math.max(f+4,Math.min(p-3,l(4850))),x=Math.max(f,Math.min(E,l(4700)));o.push({type:"heli",a:-8.5,b:-3.2,hard:!0}),o.push({type:"startgo",a:-3.2,b:.25}),o.push({type:"side",a:.25,b:d,hard:!0,ids:null});let y=[],k=i.runners.find(w=>w.diversions?.length);if(k&&r){let w=k.diversions[0],U=Ai(a,li(k.progress,w.fromM))-.5,O=Ai(a,li(k.progress,w.toM))+.8;y.push({type:"side",tag:"fair",a:U,b:Math.max(U+8,O),ids:[k.id],fair:!0,prio:3})}for(let w of yf){let U=l(w);y.push({type:"headon",tag:"hill",a:U-1.5,b:U+8,prio:2})}y.sort((w,U)=>U.prio-w.prio);let A=[];for(let w of y){let U=Math.min(f,w.b),O=Math.max(d,Math.min(w.a,U-8));U-O<6||A.some(V=>O<V.b&&U>V.a)||A.push({...w,a:O,b:U})}A.sort((w,U)=>w.a-U.a);let C=["side","drone","headon"],I=0,M=0,v=(w,U)=>{let O=U-w;if(O<=.01)return;if(O<8&&o.length>=3){o.at(-1).b=U;return}let V=Math.max(1,Math.round(O/11));for(let pt=0;pt<V;pt++){let Q=w+O*pt/V,N=w+O*(pt+1)/V,Tt=(Q+N)/2,It=C[I++%C.length];It===o.at(-1)?.type&&(It=C[I++%C.length]);let L=t.stateAt(Tt),W=L.byId[L.order[0]],it=e.filter(tt=>L.byId[tt]&&!L.byId[tt].finished&&W.m-L.byId[tt].m>40),X=null;it.length&&M++%2===0&&(X=_(it[M%it.length],Tt),It=It==="drone"?"side":It),o.push({type:It,a:Q,b:N,ids:X})}},b=d;for(let w of A)v(b,w.a),o.push(w),b=w.b;v(b,f);{let w=x-f;if(w>=8){let U=Math.max(1,Math.round(w/11));for(let O=0;O<U;O++)o.push({type:O%2?"headon":"side",a:f+w*O/U,b:f+w*(O+1)/U})}o.at(-1).type==="headon"&&o.at(-1).a>=f?o.at(-1).b=E:o.push({type:"headon",a:Math.max(f,o.at(-1).b),b:E})}if(o.at(-1).b-o.at(-1).a<6&&o.length>4){let w=o.pop();o.at(-1).b=w.b}o.push({type:"finishcam",a:E,b:m+2.5,hard:!0}),o.push({type:"celebrate",a:m+2.5,b:m+90});let P=(i.events||[]).filter(w=>(w.type==="lead_change"||w.type==="overtake"&&(e.includes(w.by)||e.includes(w.on)))&&w.broadcastS>d+2&&w.broadcastS<f-3),S=-1e9;for(let w of P){let U=w.type==="lead_change"?[w.to,w.from]:[w.by,w.on];if(w.broadcastS-S<12)continue;let O=o.findIndex(Q=>w.broadcastS>=Q.a&&w.broadcastS<Q.b);if(O<0)continue;let V=o[O];if(["heli","startgo","finishcam","celebrate","drone"].includes(V.type)||V.interrupt||V.tag||V.hard)continue;let pt=V.ids||g((V.a+V.b)/2);if(!U.every(Q=>pt.includes(Q))){if(w.broadcastS-V.a<8||V.b-w.broadcastS<8)Object.assign(V,{type:"side",ids:U,interrupt:w.type});else{let Q=w.broadcastS-1.8;o.splice(O,1,{...V,b:Q},{type:"side",a:Q,b:V.b,ids:U,interrupt:w.type})}S=w.broadcastS}}for(let w of o)if(w.rate=h(Math.max(0,w.a),Math.max(.5,w.b)),w.ids=w.ids||null,w.type==="side"||w.type==="headon"||w.type==="drone"){let U=w.ids||(w.type==="drone"?u((w.a+w.b)/2):g((w.a+w.b)/2));w.type==="drone"&&!w.ids&&(w.pack=!0);let O=0;for(let V=0;V<=6;V++){let pt=t.stateAt(Math.max(0,w.a+(w.b-w.a)*V/6)),Q=U.map(N=>pt.byId[N]).filter(N=>N&&!N.finished).map(N=>N.m);Q.length&&(O=Math.max(O,Math.max(...Q)-Math.min(...Q)))}if(w.spread=O,w.type==="side"){w.dist=Ei.clamp(14+1.7*w.rate,18,48);let V=vf(w.dist),pt=O+7,Q=Mf(2*Math.atan(pt/(2*Ex*w.dist)));w.fov=Ei.clamp(Math.max(V,Q),10,34),w.side=z(w,U)}else w.type==="headon"?(w.dist=Ei.clamp(16+1.9*w.rate,20,52)+O*.6,w.fov=Ei.clamp(vf(w.dist-O*.3,.2),10,30)):(w.back=30+2.2*w.rate+O*.35,w.height=16+1.9*w.rate+O*.25,w.fov=40,w.side=z(w,U))}return o;function z(w,U){let O=tt=>{let ut=t.stateAt(Math.max(0,tt)),Rt=U.map(dt=>ut.byId[dt]).filter(Boolean),Ft=Rt.reduce((dt,B)=>dt+B.x,0)/Rt.length,nt=Rt.reduce((dt,B)=>dt+B.z,0)/Rt.length;return[Ft,nt]},V=O(w.a),pt=O((w.a+w.b)/2),Q=O(w.b),N=(pt[0]-V[0])*(Q[1]-pt[1])-(pt[1]-V[1])*(Q[0]-pt[0]),Tt=w.fair?null:N>0?1:-1;if(w.fair&&r){let tt=r.anchors.center,ut=[Q[0]-V[0],Q[1]-V[1]],Rt=[-ut[1],ut[0]];return Tt=(tt.x-pt[0])*Rt[0]+(tt.z-pt[1])*Rt[1]>0?-1:1,Tt}let It=[Q[0]-V[0],Q[1]-V[1]],L=Math.hypot(...It)||1,W=[-It[1]/L,It[0]/L],it=w.dist||40,X=tt=>s.inPark(pt[0]+W[0]*it*tt,pt[1]+W[1]*it*tt);return!X(Tt)&&X(-Tt)&&(Tt=-Tt),Tt}}function bf({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new H,look:new H},o=new H(0,1,0),a=null,l=null,c=!0,h=null,p=new An,m=new Re;function u(x,y){let k=e.stateAt(Math.max(0,y)),A=(x||k.order.slice(0,1)).map(M=>k.byId[M]).filter(Boolean),C=A.filter(M=>!M.finished);C.length&&(A=C);let I=new H;for(let M of A)I.add(new H(M.x,M.y,M.z));return I.divideScalar(Math.max(1,A.length))}function g(x,y,k){let A=u(x,y),C=u(x,y-k*1.5),I=u(x,y+k*1.5),M=new H(I.x-C.x,0,I.z-C.z);if(M.lengthSq()<1e-4){let v=x?.[0]??e.stateAt(Math.max(0,y)).order[0],b=e.stateAt(Math.max(0,y)).byId[v];M.set(b.tx,0,b.tz)}return M.normalize(),{c:A,h:M,r:new H(-M.z,0,M.x)}}let _=(x,y)=>{if(x.ids)return x.ids;if(!x._group){let k=(x.a+x.b)/2,A=e.stateAt(Math.max(0,k)),C=A.order.filter(M=>!A.byId[M].finished),I=C[0]??A.order[0];x._group=(C.length?C:A.order).filter(M=>Math.abs(A.byId[M].m-A.byId[I].m)<(x.pack?120:20)),x._group.length||(x._group=[I])}return x._group};function d(x,y){let k=n.anchors.finish,A=n.anchors.start,C,I,M=40,v=x.rate>8?2.2:1.2;switch(x.type){case"heli":{let b=(y-x.a)/Math.max(.01,x.b-x.a),P=new H(150,0,0),S=new H(A.x,A.y,A.z),z=pc(Math.min(1,b)),w=-1.2+z*1.6,U=420-z*360;C=new H(P.x+Math.cos(w)*U,170-z*140,P.z+Math.sin(w)*U).lerp(new H(S.x-A.tx*40+A.rx*25,S.y+22,S.z-A.tz*40+A.rz*25),z*z),I=P.clone().setY(10).lerp(S,Math.min(1,z*1.3)),M=50;break}case"startgo":{let b=new H(A.x,A.y,A.z),P=new H(A.tx,0,A.tz),S=new H(-P.z,0,P.x);C=b.clone().addScaledVector(P,10.5).addScaledVector(S,2.6).add(o.clone().multiplyScalar(1.9)),I=b.clone().add(o.clone().multiplyScalar(1.3)).addScaledVector(P,-1),M=42;break}case"side":{let{c:b,h:P,r:S}=g(_(x,y),y,v);C=b.clone().addScaledVector(S,x.side*x.dist).addScaledVector(P,x.dist*.18).add(o.clone().multiplyScalar(2.5+x.dist*.2)),I=b.clone().add(o.clone().multiplyScalar(1.1)),M=x.fov;break}case"headon":{let{c:b,h:P,r:S}=g(_(x,y),y,v);C=b.clone().addScaledVector(P,x.dist).addScaledVector(S,1.5).add(o.clone().multiplyScalar(2+x.dist*.16)),I=b.clone().add(o.clone().multiplyScalar(1.15)),M=x.fov;break}case"drone":{let{c:b,h:P,r:S}=g(_(x,y),y,v*1.3);C=b.clone().addScaledVector(P,-x.back).addScaledVector(S,x.side*x.back*.5).add(o.clone().multiplyScalar(x.height)),I=b.clone().addScaledVector(P,x.back*.15),M=x.fov;break}case"finishcam":{let b=new H(k.tx,0,k.tz),P=new H(-b.z,0,b.x);x.fside||(x.fside=n.inPark(k.x+P.x*16,k.z+P.z*16)?1:-1);let S=new H(k.x,k.y+1,k.z);C=S.clone().addScaledVector(P,x.fside*15).addScaledVector(b,11).add(o.clone().multiplyScalar(1.9));let z=e.stateAt(Math.max(0,y)),w=z.order.map(V=>z.byId[V]).find(V=>!V.finished),O=z.order.map(V=>z.byId[V]).filter(V=>V.finished).sort((V,pt)=>V.post-pt.post)[0];if(O&&O.post<6&&(!w||w.distToFinish>45))I=new H(O.x,O.y+1.1,O.z);else{let V=w?Math.min(1,Math.max(0,w.distToFinish/150)):0;I=w?S.clone().lerp(new H(w.x,w.y+1,w.z),Math.min(1,.25+V)):S}M=22,x.smoothLook=!0;break}case"celebrate":{let b=e.stateAt(Math.max(0,y)),P=new H;for(let U of b.order)P.add(new H(b.byId[U].x,b.byId[U].y,b.byId[U].z));P.divideScalar(b.order.length);let S=new H(k.tx,0,k.tz),z=new H(-S.z,0,S.x),w=Math.sin((y-x.a)*.08)*.5;C=P.clone().addScaledVector(S,-11*Math.cos(w)).addScaledVector(z,11*Math.sin(w)).add(o.clone().multiplyScalar(2.8)),I=P.clone().add(o.clone().multiplyScalar(1.2)),M=44;break}default:{let{c:b,h:P}=g(_(x,y),y,v);C=b.clone().addScaledVector(P,-12).add(o.clone().multiplyScalar(5)),I=b.clone()}}return{pos:C,look:I,fov:M}}function f(x,y,k){let A=k.find(S=>x>=S.a&&x<S.b)||k.at(-1),C=!1;if(A!==a){let S=c||!!A.hard;l=S?null:{from:{pos:i.position.clone(),look:r.look.clone(),fov:i.fov},t0:x},C=S,c=!1,a=A,h=null}let I=d(A,x),M=t.heightAt(I.pos.x,I.pos.z)+1.2;I.pos.y<M&&(I.pos.y=M),A.smoothLook&&(h||(h=I.look.clone()),h.lerp(I.look,1-Math.exp(-2.5*y)),I.look.copy(h)),m.lookAt(I.pos,I.look,o),p.setFromRotationMatrix(m);let v=I.pos,b=p,P=I.fov;if(l){let S=(x-l.t0)/Mx;if(S>=1||S<0)l=null;else{let z=S*S*S*(S*(S*6-15)+10),w=Math.sin(Math.PI*z)*Math.min(12,l.from.pos.distanceTo(I.pos)*.12);v=l.from.pos.clone().lerp(I.pos,z).add(o.clone().multiplyScalar(w));let U=l.from.look.clone().lerp(I.look,z);m.lookAt(v,U,o),b=new An().setFromRotationMatrix(m),P=l.from.fov+(I.fov-l.from.fov)*z}}return r.pos.copy(I.pos),r.look.copy(I.look),i.position.copy(v),i.quaternion.copy(b),Math.abs(i.fov-P)>.001&&(i.fov=P,i.updateProjectionMatrix()),{shot:A,cut:C}}function E(x=!0){a=null,l=null,c=!!x,h=null}return{update:f,reset:E,evaluate:d,get shot(){return a},get gliding(){return!!l},cam:r}}function pc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var mr=new Set(["drone","heli"]);var wx=`
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
`,Sf=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,Tx=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,Ax=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},gr=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Rx=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function wf(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let Z=document.createElement("style");Z.id="mr-hud-css",Z.textContent=wx,document.head.appendChild(Z)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-replayframe"></div><div class="mr-replay"><i></i><span>REPLAY</span></div><div class="mr-wipe"></div>`,i.appendChild(o);let a=Z=>o.querySelector(Z),l={};o.querySelectorAll("[data-k]").forEach(Z=>l[Z.dataset.k]=Z);let c=a(".mr-tower"),h={},p={};for(let Z of t){let Y=document.createElement("div");Y.className="mr-row",Y.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${Z.colour.primary};border-right:4px solid ${Z.colour.secondary}"></div><div class="mr-name">${gr(Ps(Z))}</div><span class="mr-inis"></span><div class="mr-gap"></div></div>`,c.appendChild(Y),h[Z.id]={el:Y,pos:Y.querySelector(".mr-pos"),gap:Y.querySelector(".mr-gap"),last:""};let gt=document.createElement("div");gt.className="mr-tag",gt.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tb"></span><span class="mr-tn" style="background:${Z.colour.primary};color:#fff">${gr(Ps(Z))}</span>`,gt.style.opacity="0",a(".mr-tags").appendChild(gt),p[Z.id]={el:gt,pos:gt.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function m(Z={}){for(let Y of t){let gt=(Z[Y.id]||[]).filter(F=>F!=null&&F!==""),q=gt.map(F=>`<span class="mr-ini" style="--bc:${mc(F)}">${gr(Ix(F))}</span>`).join(""),Lt=h[Y.id].el;Lt.classList.toggle("backed",gt.length>0),Lt.querySelector(".mr-inis").innerHTML=q,p[Y.id].el.querySelector(".mr-tb").innerHTML=q}}m(e);let u=a(".mr-map canvas"),g=u.getContext("2d"),_=null,d=340,f=420;u.width=d,u.height=f;let E=n.points,x=1e9,y=1e9,k=-1e9,A=-1e9;for(let Z of E)x=Math.min(x,Z[0]),k=Math.max(k,Z[0]),y=Math.min(y,Z[2]),A=Math.max(A,Z[2]);if(n.funfair){let[Z,Y]=n.funfair.center,gt=n.funfair.radius*.6;x=Math.min(x,Z-gt),k=Math.max(k,Z+gt),y=Math.min(y,Y-gt),A=Math.max(A,Y+gt)}for(let Z in r.diversions)for(let Y of r.diversions[Z])for(let gt of Y.path)x=Math.min(x,gt[0]),k=Math.max(k,gt[0]),y=Math.min(y,gt[1]),A=Math.max(A,gt[1]);let C=26,I=Math.min((d-C*2)/(k-x),(f-C*2)/(A-y)),M=(d-(k-x)*I)/2,v=(f-(A-y)*I)/2,b=Z=>M+(Z-x)*I,P=Z=>v+(Z-y)*I;function S(){let Z=document.createElement("canvas");Z.width=d,Z.height=f;let Y=Z.getContext("2d"),gt=(_t,Pt,$,ot)=>{Y.beginPath(),_t.forEach((at,xt)=>xt?Y.lineTo(b(at[0]),P(at[1])):Y.moveTo(b(at[0]),P(at[1]))),Y.strokeStyle=Pt,Y.lineWidth=$,Y.lineJoin=Y.lineCap="round",Y.setLineDash(ot||[]),Y.stroke(),Y.setLineDash([])},q=(_t,Pt)=>{for(let $ of s.features)$.kind===_t&&$.closed&&(Y.beginPath(),$.pts.forEach((ot,at)=>at?Y.lineTo(b(ot[0]),P(ot[1])):Y.moveTo(b(ot[0]),P(ot[1]))),Y.fillStyle=Pt,Y.fill())},Lt=s.features.filter(_t=>_t.kind==="park").sort((_t,Pt)=>Pt.pts.length-_t.pts.length)[0];Y.save(),Y.beginPath(),Lt.pts.forEach((_t,Pt)=>Pt?Y.lineTo(b(_t[0]),P(_t[1])):Y.moveTo(b(_t[0]),P(_t[1]))),Y.fillStyle="#9be27a",Y.fill(),Y.restore(),q("water","#49a6ff"),q("track","#ff7a5c");for(let _t in r.diversions)for(let Pt of r.diversions[_t])gt(Pt.path,"#c79a5a",4,[6,6]);let F=[];for(let _t=0;_t<=r.LAP1_END_DRAW;_t+=10)F.push(r.baseXZ(_t));gt(F,"#1a1420",11),gt(F,"#8fa0c4",6);let R=[];for(let _t=r.MAP_TO-80;_t<=r.finishM;_t+=10)R.push(r.baseXZ(_t));gt(R,"#1a1420",11),gt(R,"#8fa0c4",6);let lt=r.rawExt(r.finishM);return Y.fillStyle="#fff",Y.strokeStyle="#1a1420",Y.lineWidth=3,Y.fillRect(b(lt[0])-7,P(lt[1])-7,14,14),Y.strokeRect(b(lt[0])-7,P(lt[1])-7,14,14),Y.fillStyle="#1a1420",Y.fillRect(b(lt[0])-7,P(lt[1])-7,7,7),Y.fillRect(b(lt[0]),P(lt[1]),7,7),Z}_=S();function z(){_=S()}let w=0,U=0,O=[],V=a(".mr-banner");function pt(){for(;O.length&&U-O[0].at>2;)O.shift();let Z=O.shift();Z&&(V.querySelector(".mr-b1 span").textContent=Z.text,V.querySelector(".mr-b1").style.background=Z.colour,V.querySelector(".mr-b2").textContent="",V.classList.remove("on"),V.offsetWidth,V.classList.add("on"),w=Math.min(1.5,Z.secs))}function Q(Z,Y="",gt="#ff3d8b",q=1.4){O.length>=3&&O.shift(),O.push({text:Z,colour:gt,secs:q,at:U}),w<=0&&pt()}let N="";function Tt(Z,Y){if(U+=Z,w>0?(w-=Z,w<=0&&(V.classList.remove("on"),w=-.25)):w<0&&(w=Math.min(0,w+Z),w===0&&pt()),!!Y){if(Y.map!=null&&o.classList.toggle("mr-nomap",!Y.map),Y.raceS!=null&&(l.clock.textContent=Ax(Y.raceS)),Y.leaderM!=null&&(l.lap.textContent=Y.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,Y.leaderM)/1e3).toFixed(1)} KM`),Y.order){let gt=c.clientHeight||0,q=(c.querySelector(".mr-row")?.offsetHeight||40)+6,Lt=0;Y.order.forEach((F,R)=>{let lt=h[F.id];if(!lt||(lt.el.classList.toggle("off",!!F.hidden),F.hidden))return;Lt===3&&(Lt+=.35),lt.el.style.transform=`translateY(${Lt*q}px)`,Lt++;let Pt=`${R}|${F.gapText}|${F.finished}`+(F.posHtml||"");Pt!==lt.last&&(lt.last=Pt,lt.pos.innerHTML=F.posHtml??Sf(R+1),lt.gap.textContent=F.gapText,lt.el.classList.toggle("lead",R===0&&!F.posHtml),lt.el.classList.toggle("fin",!!F.finished))})}if(Y.tags)for(let gt of Y.tags){let q=p[gt.id];q&&(gt.visible!==q.vis&&(q.vis=gt.visible,q.el.style.opacity=gt.visible?"1":"0"),gt.visible&&(q.el.style.transform=`translate(${gt.x}px, ${gt.y}px) translate(-50%,-100%) scale(${gt.scale??1})`,q.p!==gt.pos&&(q.p=gt.pos,q.pos.textContent=gt.pos?Tx(gt.pos):"",q.pos.style.display=gt.pos?"":"none")))}if(Y.dots){g.clearRect(0,0,d,f),g.drawImage(_,0,0);for(let gt of[...Y.dots].reverse())g.beginPath(),g.arc(b(gt.x),P(gt.z),gt.lead?11:9,0,7),g.fillStyle=gt.colour,g.fill(),g.lineWidth=3.5,g.strokeStyle="#1a1420",g.stroke(),gt.focus&&(g.beginPath(),g.arc(b(gt.x),P(gt.z),15,0,7),g.strokeStyle="#fff",g.lineWidth=3,g.stroke());Y.camDot&&(g.save(),g.translate(b(Y.camDot.x),P(Y.camDot.z)),g.rotate(Y.camDot.a),g.fillStyle="rgba(26,20,32,.6)",g.beginPath(),g.moveTo(0,0),g.lineTo(-10,-22),g.lineTo(10,-22),g.fill(),g.restore())}}}function It(Z){o.classList.toggle("mr-dim",!!Z)}function L(Z){o.classList.toggle("mr-dimtop",!!Z)}function W(){w=0,O.length=0,V.classList.remove("on")}function it(Z){let Y=a(".mr-card3");if(!Z){Y.classList.remove("on");return}Y.querySelector(".mr-lane span").textContent=Z.lane??"",Y.querySelector(".mr-lane").style.background=Z.colour.primary,Y.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${Z.colour.primary}, ${Px(Z.colour.primary,-.25)})`,Y.querySelector(".mr-nick").textContent=Z.nickname,Y.querySelector(".mr-nick").style.color="#fff",Y.querySelector(".mr-tagl").textContent=Z.tagline||"",Y.querySelector(".mr-tagl").style.color=Rx(Z.colour.primary)==="#ffffff"?"#fff":"#1a1420",Y.classList.remove("on"),Y.offsetWidth,Y.classList.add("on")}function X(Z){let Y=a(".mr-count");Y.textContent=Z,Y.classList.remove("pop"),Y.offsetWidth,Y.classList.add("pop")}function tt(){let Z=a(".mr-wipe");Z.classList.remove("go"),Z.offsetWidth,Z.classList.add("go")}function ut(Z){let Y=o.classList.contains("mr-inreplay");o.classList.toggle("mr-inreplay",!!Z),!!Z!==Y&&tt()}function Rt(Z,Y=""){a(".mr-photo").classList.toggle("on",!!Z),a(".mr-pcap").textContent=Y,a(".mr-pcap").style.display=Y?"":"none"}function Ft(Z,Y="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!Z),a(".mr-market .mr-m2").textContent=Y}function nt(Z,{title:Y="",kicker:gt="",theme:q=""}={}){let Lt=a(".mr-title");if(Z){Lt.querySelector(".mr-t0").textContent=gt,Lt.querySelector(".mr-t1").textContent=Y;let F=Lt.querySelector(".mr-t2");F.textContent=q,F.style.display=q?"":"none",Lt.querySelector(".mr-t0").style.display=gt?"":"none"}Lt.classList.toggle("on",!!Z)}function dt(Z,Y){let gt=Y[0]-Z[0],q=Y[1]-Z[1],Lt=Math.hypot(gt,q)||1,F=gt/Lt,R=q/Lt,lt=Z[0]-F*Lt*.6,_t=Z[1]-R*Lt*.6,Pt=a(".mr-photo .mr-line");Pt.style.width=`${Lt*2.2}px`,Pt.style.transform=`translate(${lt}px, ${_t}px) rotate(${Math.atan2(R,F)}rad)`}function B(Z){let Y=a(".mr-results");if(!Z){Y.classList.remove("on");return}Y.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+Z.map(gt=>`<div class="mr-rr"><span class="mr-num">${Sf(gt.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${gt.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${gr(gt.nickname)}</span><span class="mr-t">${gr(gt.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>Y.classList.add("on"))}function Vt(){o.remove()}return{root:o,update:Tt,setBackedBy:m,replay:ut,wipe:tt,redrawMap:z,showBanner:Q,clearBanner:W,setDim:It,setDimTop:L,introCard:it,countdown:X,photo:Rt,photoLine:dt,results:B,market:Ft,titleCard:nt,dispose:Vt}}function Ps(i){if(i.shortName)return i.shortName;let t=String(i.nickname||i.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),n=e.slice(-2).join(" ");return n.length<=14?n:e.at(-1).slice(0,14)}var Ef=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Wo=new Map;function mc(i){return Wo.has(i)||Wo.set(i,Wo.size),Ef[Wo.get(i)%Ef.length]}var Cx=i=>/\p{Extended_Pictographic}/u.test(String(i));function Ix(i){let t=String(i).trim();if(Cx(t))return[...t][0];let e=t.split(/\s+/).filter(Boolean);return(e.length>1&&e[0].length<=3?e[0][0]+e[1][0]:t[0]||"?").toUpperCase()}function Px(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var Xo=(i,t,e=12,n=!0)=>rn(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Tf(i,t,e,n){let s=Sn(42),r=new me;i.add(r);let o=[],a=[],l=(P,S=3)=>(Bn(P,S,void 0,30),P),c=(P,S,z=3)=>be(P,S,{ol:z,olRef:30}),h=[];for(let P=0;P<n.path.length;P++){let S=n.path[P],z=e.anchors.nearestOnRibbon(S[0],S[1]),w=Math.hypot(S[0]-z[0],S[1]-z[1]);h.push({x:(S[0]+z[0])/2,z:(S[1]+z[1])/2,gap:w})}let p=0;h.forEach((P,S)=>{S&&(p+=Math.hypot(P.x-h[S-1].x,P.z-h[S-1].z)),P.s=p});let m=p,u=P=>{let S=0;for(;S<h.length-2&&h[S+1].s<P;)S++;let z=h[S],w=h[S+1],U=Math.max(0,Math.min(1,(P-z.s)/Math.max(1e-6,w.s-z.s))),O=z.x+(w.x-z.x)*U,V=z.z+(w.z-z.z)*U,pt=Math.hypot(w.x-z.x,w.z-z.z)||1;return{x:O,z:V,gap:z.gap+(w.gap-z.gap)*U,tx:(w.x-z.x)/pt,tz:(w.z-z.z)/pt,y:t.heightAt(O,V)}},g=h.filter(P=>P.gap>26),_=g.length?g[0].s:m*.25,d=g.length?g.at(-1).s:m*.75,f=P=>Array.from({length:P},(S,z)=>u(_+(z+.5)/P*(d-_))),E=(P,S,z=0)=>(P.position.set(S.x,S.y-.1,S.z),P.rotation.y=Math.atan2(S.tx,S.tz)+z,r.add(P),P),x={center:u((_+d)/2),rides:[]},y=f(7);{let P=y.slice(1,6).sort((X,tt)=>tt.gap-X.gap)[0],S=new me,z=17,w=z+2.6,U=new de(.35,.5,w/Math.cos(.32)+1,8);for(let X of[-1,1])for(let tt of[-1,1]){let ut=c(U,mt("#ffffff"));ut.position.set(X*1.8,w/2,tt*Math.tan(.32)*w/2),ut.rotation.x=-tt*.32,S.add(ut)}let O=c(new Ee(6,1,8,2,.3),mt("#2e9bff"));O.position.y=.5,S.add(O);let V=new me;V.position.y=w,S.add(V);let pt=c(new Ze(z,.45,8,64),mt("#ff3d8b"));pt.rotation.y=Math.PI/2,pt.position.x=1.2,V.add(pt);let Q=c(new Ze(z,.45,8,64),mt("#ff3d8b"));Q.rotation.y=Math.PI/2,Q.position.x=-1.2,V.add(Q);let N=c(new de(1.3,1.3,3.2,16).rotateZ(Math.PI/2),mt("#ffd23f"));V.add(N);let Tt=16,It=[],L=[];for(let X=0;X<Tt;X++){let tt=X/Tt*Math.PI*2,ut=c(new Ie(.18,z,.18).translate(0,z/2,0),mt("#ffffff"),2);ut.rotation.x=tt,ut.position.x=1.2,V.add(ut);let Rt=ut.clone();Rt.position.x=-1.2,V.add(Rt);let Ft=new me;Ft.position.set(0,Math.cos(tt)*z,Math.sin(tt)*z),V.add(Ft);let nt=new me;Ft.add(nt);let dt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][X%5],B=c(new Ee(1.7,1.3,1.5,2,.35),mt(dt));B.position.y=-1.3,nt.add(B);let Vt=c(new qe(1.2,.7,4).rotateY(Math.PI/4),mt("#ffffff"),2);Vt.position.y=-.1,nt.add(Vt),It.push(Ft);for(let Z=0;Z<3;Z++){let Y=tt+Z/3*(Math.PI*2/Tt);L.push([1.2,Math.cos(Y)*z,Math.sin(Y)*z],[-1.2,Math.cos(Y)*z,Math.sin(Y)*z])}}let W=new Qe(new ve(.32,8,6),new bn({color:16777215}),L.length),it=new Fe;L.forEach((X,tt)=>{it.position.set(...X),it.updateMatrix(),W.setMatrixAt(tt,it.matrix),W.setColorAt(tt,new le(["#fff27a","#ff7ac8","#7affff"][tt%3]))}),V.add(W),E(S,P,0),a.push(X=>{V.rotation.x=X*.18;for(let tt of It)tt.rotation.x=-X*.18}),x.rides.push({kind:"wheel",obj:S,pos:new H(P.x,P.y+w,P.z),r:z}),P.used=!0}{let P=y.filter(L=>!L.used).sort((L,W)=>W.gap-L.gap)[0];P.used=!0;let S=new me,z=Math.min(6.5,P.gap*.28);S.scale.setScalar(1.45);let w=Xo("#ffffff","#ff4f6d",16);o.push(w);let U=c(new de(z,z+.3,.9,32),mt("#ffffff",{map:w}));U.position.y=.45,S.add(U);let O=new me;S.add(O);let V=c(new de(.7,.7,5,16),mt("#ffd23f"));V.position.y=3,O.add(V);let pt=Xo("#ffd23f","#ff3d8b",16);o.push(pt);let Q=c(new qe(z+.8,2.8,16),mt("#ffffff",{map:pt}));Q.position.y=6.6,O.add(Q);let N=c(new de(z+.8,z+.8,.7,16,1,!0),mt("#2e9bff",{side:Je}));N.position.y=4.9,O.add(N);let Tt=c(new ve(.5,12,8),mt("#ff3d8b"));Tt.position.y=8.2,O.add(Tt);let It=[];for(let L=0;L<8;L++){let W=L/8*Math.PI*2,it=z*.72,X=new me;X.position.set(Math.cos(W)*it,0,Math.sin(W)*it),X.rotation.y=-W,O.add(X);let tt=c(new de(.06,.06,4.2,6),mt("#ffd23f"),1.5);tt.position.y=2.9,X.add(tt);let ut=new me;X.add(ut);let Rt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][L%4],Ft=c(new Ee(.7,.7,1.6,2,.3),mt(Rt));ut.add(Ft);let nt=c(new Ee(.45,.9,.5,2,.2),mt(Rt));nt.position.set(0,.55,.7),nt.rotation.x=.4,ut.add(nt);let dt=c(new Ee(.45,.45,.8,2,.2),mt(Rt));dt.position.set(0,.95,1.05),ut.add(dt);let B=c(new Ee(.15,.8,.3,1,.06),mt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][L%4]),2);B.position.set(0,.75,.55),B.rotation.x=.4,ut.add(B);let Vt=c(new Ee(.75,.2,.6,1,.08),mt("#ff3d8b"),2);Vt.position.y=.4,ut.add(Vt);for(let[Z,Y]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let gt=c(new Ie(.16,.7,.16),mt(Rt),1.5);gt.position.set(Z,-.55,Y),gt.rotation.x=Y>0?-.5:.5,ut.add(gt)}ut.rotation.y=Math.PI/2,It.push({horse:ut,ph:L*.8})}E(S,P),a.push(L=>{O.rotation.y=L*.6;for(let W of It)W.horse.position.y=2+Math.sin(L*2.2+W.ph)*.35}),x.rides.push({kind:"carousel",obj:S,pos:new H(P.x,P.y+6,P.z),r:z*1.45})}{let P=y.filter(L=>!L.used).sort((L,W)=>W.gap-L.gap)[0];P.used=!0;let S=new me,z=15;S.scale.setScalar(1.5);let w=Xo("#ff3d3d","#ffffff",10,!1);o.push(w);let U=c(new de(1.6,2.6,z,16),mt("#ffffff",{map:w}));U.position.y=z/2,S.add(U);let O=c(new qe(2.6,3.4,16),mt("#2e9bff"));O.position.y=z+1.7,S.add(O);let V=c(new de(.06,.06,2,6),mt("#ffffff"),1.5);V.position.y=z+4.2,S.add(V);let pt=c(new fn(1.2,.7).translate(.6,0,0),mt("#ffd23f",{side:Je}),1.5);pt.position.y=z+4.8,S.add(pt);let Q=[],N=3.2;for(let L=0;L<=160;L++){let W=L/160,it=W*N*Math.PI*2,X=2.6+(1-W)*-.8+1.6;Q.push(new H(Math.cos(it)*X,z-1-W*(z-2),Math.sin(it)*X))}let Tt=c(new Io(new ir(Q),220,.55,8,!1),mt("#ffd23f"));Tt.scale.y=1,S.add(Tt);let It=c(new Ee(3,.3,2,2,.1),mt("#3ddc84"),2);It.position.set(Q.at(-1).x+1,.15,Q.at(-1).z),S.add(It),E(S,P),a.push(L=>{pt.rotation.y=Math.sin(L*3)*.4}),x.rides.push({kind:"helter",obj:S,pos:new H(P.x,P.y+12,P.z),r:6})}let k=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],A=[];[...y.filter(P=>!P.used),...f(13).filter((P,S)=>S%2===1)].slice(0,7).forEach((P,S)=>{let[z,w]=k[S%k.length],U=new me,O=S%2?1:-1,V=c(new Ee(4.2,2.4,3,2,.2),mt("#fff6e0"));V.position.y=1.2,U.add(V);let pt=c(new Ee(4.4,1.1,.8,2,.15),mt(w));pt.position.set(0,.55,1.7),U.add(pt);let Q=Xo("#ffffff",w,10);o.push(Q);let N=c(new Ie(4.8,.18,2.4),mt("#ffffff",{map:Q}));N.position.set(0,2.9,1.4),N.rotation.x=.32,U.add(N);for(let tt of[-1,1]){let ut=c(new de(.09,.09,2.6,6),mt("#ffffff"),1.5);ut.position.set(tt*2.2,1.6,2.4),U.add(ut)}let Tt=Hn(512,128,(tt,ut,Rt)=>{tt.fillStyle="#1a1420",Ye(tt,0,0,ut,Rt,30),tt.fill(),tt.fillStyle=w,Ye(tt,8,8,ut-16,Rt-16,24),tt.fill(),on(tt,z,ut/2,Rt/2+4,z.length>11?52:64,"#ffffff","#1a1420",.2)},o),It=be(new Ee(4.2,1.05,.3,2,.1),[mt(w),mt(w),mt(w),mt(w),mt("#ffffff",{map:Tt}),mt("#ffffff",{map:Tt})],{ol:2.5,olRef:30});if(It.position.set(0,3.7,.4),U.add(It),z==="CANDYFLOSS")for(let tt=0;tt<4;tt++){let ut=c(new tn(.32,1),mt("#ff9bd2"),1.5);ut.position.set(-1.4+tt*.9,1.45,1.75),U.add(ut)}if(z==="HOOK-A-DUCK"){let tt=c(new de(1.6,1.6,.6,20),mt("#57c7ff"),2);tt.position.set(0,.3,3.6),U.add(tt);let ut=new me;ut.position.set(0,.7,3.6),U.add(ut);for(let Rt=0;Rt<6;Rt++){let Ft=Rt/6*Math.PI*2,nt=c(new ve(.22,10,8),mt("#ffd23f"),1.5);nt.position.set(Math.cos(Ft)*1.1,0,Math.sin(Ft)*1.1);let dt=c(new ve(.14,8,6),mt("#ffd23f"),1.2);dt.position.set(0,.22,.12),nt.add(dt),ut.add(nt)}A.push(ut)}let L=e.anchors.nearestOnRibbon(P.x,P.z),W=Math.atan2(L[0]-P.x,L[1]-P.z),it=Math.min(P.gap*.3,7)*O,X=E(U,{...P,x:P.x+P.tz*it,z:P.z-P.tx*it,y:t.heightAt(P.x+P.tz*it,P.z-P.tx*it)});X.rotation.y=W+(O>0?0:Math.PI)*0}),a.push(P=>{for(let S of A)S.rotation.y=P*.8});{let P=[],S=[],z=[],w=[],U=[];for(let Tt of[-1,1]){let It=null;for(let L=_-10;L<=d+10;L+=9){let W=u(L),it=(W.gap/2-6)*Tt,X=W.x+W.tz*it,tt=W.z-W.tx*it,ut=t.heightAt(X,tt),Rt=new H(X,ut+4.2,tt),Ft=c(new de(.08,.1,4.3,6),mt("#ffffff"),1.5);if(Ft.position.set(X,ut+2.1,tt),r.add(Ft),It)for(let nt=0;nt<=10;nt++){let dt=nt/10,B=It.clone().lerp(Rt,dt);B.y-=Math.sin(dt*Math.PI)*.7,P.push(B),nt<10&&(nt%2?(S.push(B.clone()),z.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(nt+Math.round(L))%4])):(w.push({v:B.clone(),a:Math.atan2(-(Rt.z-It.z),Rt.x-It.x)}),U.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(nt+Math.round(L/9))%5])))}It=Rt}}let O=new Fe,V=new Qe(new ve(.16,8,6),new bn({color:16777215}),S.length);S.forEach((Tt,It)=>{O.position.copy(Tt),O.updateMatrix(),V.setMatrixAt(It,O.matrix),V.setColorAt(It,new le(z[It]))}),r.add(V);let pt=new ze;pt.setAttribute("position",new xe([-.32,0,0,.32,0,0,0,-.65,0],3)),pt.setAttribute("normal",new xe([0,0,1,0,0,1,0,0,1],3));let Q=new Qe(pt,mt("#ffffff",{side:Je}),w.length);w.forEach((Tt,It)=>{O.position.copy(Tt.v),O.rotation.set(0,Tt.a,0),O.updateMatrix(),Q.setMatrixAt(It,O.matrix),Q.setColorAt(It,new le(U[It]))}),r.add(Q);let N=[];for(let Tt=0;Tt+1<P.length;Tt++)P[Tt].distanceTo(P[Tt+1])<3&&N.push(P[Tt],P[Tt+1]);r.add(new Ss(new ze().setFromPoints(N),new Hi({color:3355443}))),a.push(Tt=>{V.material.color.setScalar(.85+.15*Math.sin(Tt*6))})}{let P=u(_-4),S=Hn(1024,256,(w,U,O)=>{w.fillStyle="#1a1420",Ye(w,0,0,U,O,60),w.fill(),w.fillStyle="#ff3d8b",Ye(w,10,10,U-20,O-20,52),w.fill(),on(w,"\u2605 FUNFAIR \u2605",U/2,O/2+6,120,"#ffe14d","#1a1420",.18)},o),z=be(new Ee(10,2.4,.4,2,.15),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:S}),mt("#ffffff",{map:S})],{ol:3,olRef:30});z.position.set(P.x,P.y+7.5,P.z),z.rotation.y=Math.atan2(P.tx,P.tz)+Math.PI/2,r.add(z);for(let w of[-1,1]){let U=c(new de(.25,.3,7.6,8),mt("#ffd23f"));U.position.set(P.x+P.tz*4.5*w,P.y+3.8,P.z-P.tx*4.5*w),r.add(U)}}let I=[];for(let P=0;P<60;P++){let S=_+s()*(d-_),z=u(S),w=(s()-.5)*(z.gap-16),U=z.x+z.tz*w,O=z.z-z.tx*w;I.push({x:U,y:t.heightAt(U,O),z:O,yaw:s()*6.28})}function M(P,S){for(let z of h){if(z.s<_-20||z.s>d+20)continue;let w=Math.max(6,z.gap/2-4);if((P-z.x)**2+(S-z.z)**2<w*w)return!0}return!1}function v(P){for(let S of a)S(P)}function b(){r.traverse(P=>{P.geometry&&P.geometry.dispose()});for(let P of o)P.dispose?.();i.remove(r)}return{group:r,update:v,dispose:b,anchors:x,crowd:I,at:u,s0:_,s1:d,contains:M}}function Af(i,t,e,n,s,{camera:r,offsetX:o=3.2}){let a=new me;i.add(a);let l=[],c=t.sample(t.finishM+28),h=new H(c.tx,0,c.tz),p=new H(c.rx,0,c.rz),m=new H(c.x,t.heightAt(c.x,c.z),c.z),u=Math.atan2(h.x,h.z);a.position.copy(m),a.rotation.y=u;let g=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let S of g){let z=Hn(256,256,(U,O,V)=>{U.fillStyle="#2e6fe0",U.fillRect(0,0,O,V),U.fillStyle=S.col,U.fillRect(0,0,O,26),on(U,String(S.place),O/2,V/2+14,170,S.col,"#1a1420",.16)},l),w=be(new Ee(2.25,S.hgt,2,3,.12),[mt("#2e6fe0"),mt("#2e6fe0"),mt(S.col),mt("#2e6fe0"),mt("#ffffff",{map:z}),mt("#2e6fe0")],{ol:3.5,olRef:12});w.position.set(S.x,S.hgt/2,0),a.add(w),S.top=S.hgt}let _=Hn(1024,256,(S,z,w)=>{S.fillStyle="#1a1420",Ye(S,0,0,z,w,50),S.fill(),S.fillStyle="#ff3d8b",Ye(S,10,10,z-20,w-20,42),S.fill(),on(S,"MARKRUN CHAMPIONS",z/2,w/2+6,80,"#ffffff","#1a1420",.16)},l),d=be(new Ee(9,2.2,.3,2,.1),[mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ff3d8b"),mt("#ffffff",{map:_}),mt("#ffffff",{map:_})],{ol:3,olRef:14});d.position.set(0,5.6,-2.4),a.add(d);for(let S of[-1,1]){let z=be(new de(.14,.16,5.6,8),mt("#ffffff"),{ol:2,olRef:14});z.position.set(S*4.3,2.8,-2.4),a.add(z)}let f=s.length,E=[];for(let S of s){let z=n[S.runnerId];if(!z)continue;let w=g.find(V=>V.place===S.place),U=w?new H(w.x,w.top,.1):null,O;if(S.place===1?O=["celebrate","jump"]:S.place===2?O=["pose","flex"]:S.place===3?O=["celebrate","fist"]:S.place===f&&f>3?O=["celebrate","collapse"]:O=["celebrate","shrug"],!U){E.push({rr:z,o:S,pose:O});continue}x(z,U,O)}E.forEach((S,z)=>{let w=z%2?1:-1,U=Math.floor(z/2),O=S.pose[1]==="collapse",V=new H(w*(O?4.6:4.2+U*1.6),0,O?1.6:.6+U*.8);x(S.rr,V,S.pose,O?-w*Math.PI/2:0)});function x(S,z,w,U=0){let O=z.clone().applyAxisAngle(new H(0,1,0),u).add(m);z.y===0&&(O.y=t.heightAt(O.x,O.z)+.05),S.root.position.copy(O),S.root.rotation.set(0,u+U,0),S.set(...w),S.setPop(null)}let y=Sn(3),k=420,A=new Qe(new fn(.16,.26),new bn({side:Je}),k),C=[],I=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let S=0;S<k;S++)C.push({x:(y()-.5)*14,y:y()*12,z:(y()-.5)*8,vy:1+y()*1.6,sp:y()*6,ph:y()*6.28}),A.setColorAt(S,new le(I[S%I.length]));A.frustumCulled=!1,a.add(A);let M=new Fe,v=0;function b(S,z){v+=S;for(let pt=0;pt<k;pt++){let Q=C[pt];Q.y-=Q.vy*S,Q.y<0&&(Q.y+=12),M.position.set(Q.x+Math.sin(v*1.3+Q.ph)*.5,Q.y,Q.z+Math.cos(v+Q.ph)*.4),M.rotation.set(v*Q.sp+Q.ph,v*Q.sp*.7,Q.ph),M.updateMatrix(),A.setMatrixAt(pt,M.matrix)}A.instanceMatrix.needsUpdate=!0;let w=Math.sin(v*.18)*.4,U=15-Math.min(2.5,v*.2),O=new H(Math.sin(w)*U,3+Math.sin(v*.3)*.3,Math.cos(w)*U).applyAxisAngle(new H(0,1,0),u);r.position.copy(m).add(O);let V=new H(o,2.2,0).applyAxisAngle(new H(0,1,0),u).add(m);r.lookAt(V),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function P(){a.traverse(S=>{S.geometry&&S.geometry.dispose()}),A.material.dispose();for(let S of l)S.dispose?.();i.remove(a)}return{update:b,dispose:P,center:m}}var Ge=(i,t)=>{i=i.index?i.toNonIndexed():i;let e=new le(t).convertSRGBToLinear(),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new He(s,3)),i.getAttribute("uv")&&i.deleteAttribute("uv"),i},un=(i,t,e,n,s=0,r=1.6)=>(i.scale(r,r,r),i.rotateY(s),i.translate(t,e,n),i);function Rf(i,t,e,n){let s=Sn(777),r=new me;i.add(r);let o=[],a=[],l=(g,_)=>`lawn:${Math.floor(g/140)},${Math.floor(_/140)}`,c=(g,_,d,f=.8,E)=>a.push({x:g,y:t.heightAt(g,_),z:_,yaw:d,scale:f,colour:E,zone:l(g,_)}),{ribbonSamples:h}=e.anchors;function p(g,_,d){for(let f=0;f<40;f++){let E=h[Math.floor(s()*h.length)],x=s()*Math.PI*2,y=g+s()*(_-g),k=E[0]+Math.cos(x)*y,A=E[1]+Math.sin(x)*y;if(!(!e.inPark(k,A)||e.blocked(k,A,d+1)||!e.clearOf(k,A,d)||e.onPath(k,A,d+2)))return e.reserve(k,A,d),{x:k,z:A,y:t.heightAt(k,A),toPath:Math.atan2(E[0]-k,E[1]-A)}}return null}{let g=[],_=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],d=(A,C,I,M,v,b)=>{g.push(un(Ge(new Ie(1.6,.2,1.6).translate(0,2,0),v),A,C,I,M));for(let[z,w]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])g.push(un(Ge(new de(.08,.08,2,6).translate(z,1,w),"#ffffff"),A,C,I,M));g.push(un(Ge(new qe(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),A,C,I,M));let P=new Ie(.9,.12,3.3);P.rotateX(-.62),P.translate(0,1.05,2.1),g.push(un(Ge(P,b),A,C,I,M));let S=new Ie(.8,.08,2.4);S.rotateX(1),S.translate(0,1,-1.3),g.push(un(Ge(S,"#ffffff"),A,C,I,M))},f=(A,C,I,M,v)=>{for(let b of[-1.8,1.8])for(let P of[-.6,.6]){let S=new de(.08,.08,2.8,6);S.rotateX(P>0?.22:-.22),S.translate(b,1.35,P*.5),g.push(un(Ge(S,v),A,C,I,M))}g.push(un(Ge(new de(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),v),A,C,I,M));for(let b of[-.8,.8]){g.push(un(Ge(new Ie(.6,.08,.35).translate(b,.75,0),"#22202c"),A,C,I,M));for(let P of[-.25,.25])g.push(un(Ge(new de(.02,.02,1.9,4).translate(b+P,1.7,0),"#888888"),A,C,I,M))}},E=(A,C,I,M)=>{let v=new ve(1.6,8,5,0,Math.PI*2,0,Math.PI/2);g.push(un(Ge(v,M),A,C,I)),g.push(un(Ge(new de(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),A,C,I))},x=(A,C,I,M,v)=>{g.push(un(Ge(new de(1.5,1.5,.25,16).translate(0,.35,0),M),A,C,I)),g.push(un(Ge(new de(.1,.1,1,6).translate(0,.9,0),v),A,C,I)),g.push(un(Ge(new Ze(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),v),A,C,I))},y=(A,C,I,M,v)=>{g.push(un(Ge(new ve(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),v),A,C,I,M)),g.push(un(Ge(new ve(.3,8,6).translate(0,1.4,.55),v),A,C,I,M)),g.push(un(Ge(new de(.12,.12,.6,6).translate(0,.3,0),"#888888"),A,C,I,M))},k=[d,f,E,x,y];for(let A of n.features){if(A.kind!=="playground"||!A.closed)continue;let C=Pn(A.pts),I=(C[2]-C[0])*(C[3]-C[1]),M=Math.max(1,Math.min(9,Math.round(I/380))),v=[];for(let b=0,P=0;b<M&&P<80;P++){let S=C[0]+3+s()*(C[2]-C[0]-6),z=C[1]+3+s()*(C[3]-C[1]-6);if(!Cs(A.pts,S,z)||v.some(Q=>Math.hypot(Q[0]-S,Q[1]-z)<8.5))continue;v.push([S,z]),b++;let w=t.heightAt(S,z)-.05,U=s()*6.28,O=_[Math.floor(s()*_.length)],V=_[Math.floor(s()*_.length)],pt=k[(b+v.length+Math.floor(s()*5))%k.length];pt===d||pt===f||pt===y?pt(S,w,z,U,O,V):pt(S,w,z,O,V),s()<.6&&c(S+2.5,z+1.5,s()*6,.55)}}if(g.length){let A=be(Ke(g),mt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(A)}}{let g=rn(64,64,(I,M,v)=>{for(let b=0;b<6;b++)for(let P=0;P<6;P++)I.fillStyle=(b+P)%2?"#ffffff":"#c8c8c8",I.fillRect(b*M/6,P*v/6,M/6+1,v/6+1)});o.push(g);let _=new fn(2.8,2.2);_.rotateX(-Math.PI/2);let d=[],f=[],E=[],x=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let I=0;I<90;I++){let M=p(12,70,3);if(!M)continue;let v=s()*6.28;d.push({x:M.x,y:M.y+.06,z:M.z,ry:v}),f.push(x[I%x.length]),E.push({x:M.x+Math.cos(v)*.7,y:M.y+.05,z:M.z-Math.sin(v)*.7,ry:v});let b=1+Math.floor(s()*3);for(let P=0;P<b;P++){let S=v+P/b*Math.PI*2+.5,z=M.x+Math.cos(S)*.9,w=M.z-Math.sin(S)*.9;c(z,w,M.toPath+(s()-.5),.62+s()*.15)}}let y=new Qe(_,mt("#ffffff",{map:g,polygonOffset:!0,polygonOffsetFactor:-1}),d.length),k=new Fe;d.forEach((I,M)=>{k.position.set(I.x,I.y,I.z),k.rotation.set(0,I.ry,0),k.updateMatrix(),y.setMatrixAt(M,k.matrix),y.setColorAt(M,new le(f[M]))}),y.receiveShadow=!0,y.computeBoundingSphere(),r.add(y),e.registerInstanced(y,d);let A=Ke([Ge(new Ee(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),Ge(new Ze(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),C=new Qe(A,mt("#ffffff",{vertexColors:!0}),E.length);E.forEach((I,M)=>{k.position.set(I.x,I.y,I.z),k.rotation.set(0,I.ry,0),k.updateMatrix(),C.setMatrixAt(M,k.matrix)}),C.castShadow=!0,C.computeBoundingSphere(),Bn(C,1.6,void 0,20),r.add(C),e.registerInstanced(C,E)}{let g=Ke([new On(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new ve(.22,10,8).translate(0,.72,.42),new ve(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new ve(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new ve(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([I,M])=>new de(.06,.06,.32,6).translate(I,.16,M)),new de(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(I=>I.index?I.toNonIndexed():I).map(I=>(I.deleteAttribute("uv"),I))),_=Ke([Ge(new ve(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),Ge(new ve(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([I,M])=>Ge(new Ze(.2,.06,6,12).rotateY(Math.PI/2).translate(I,.22,M),"#22202c")),Ge(new de(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),d=[],f=[],E=[],x=[],y=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let I=0;I<64;I++){let M=p(8,60,1.6);if(!M)continue;let v=s()*6.28;c(M.x,M.z,v,.82);let b=Math.sin(v),P=Math.cos(v);I%4===3?(E.push({x:M.x+b*1.4,y:M.y,z:M.z+P*1.4,ry:v,s:1}),x.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][I%4])):(d.push({x:M.x+b*1.6+P*.8,y:M.y,z:M.z+P*1.6-b*.8,ry:v+(s()-.5)*.8,s:.8+s()*.6}),f.push(y[Math.floor(s()*y.length)]))}let k=new Fe,A=(I,M,v,b)=>{let P=new Qe(I,M,v.length);return v.forEach((S,z)=>{k.position.set(S.x,S.y,S.z),k.rotation.set(0,S.ry,0),k.scale.setScalar(S.s),k.updateMatrix(),P.setMatrixAt(z,k.matrix),b&&P.setColorAt(z,new le(b[z]))}),P.castShadow=!0,P.receiveShadow=!0,P.computeBoundingSphere(),Bn(P,2,void 0,18),r.add(P),e.registerInstanced(P,v),P},C=d.length?A(g,mt("#ffffff"),d,f):null;E.length&&A(_,mt("#ffffff",{vertexColors:!0}),E,x)}{let g=[],_=[],d=[],f=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let C=0;C<26;C++){let I=p(9,40,3.2);if(!I)continue;let M=2.2+s()*.8;g.push({x:I.x,y:I.y-.05,z:I.z,s:M});let v=[f[C%f.length],f[(C+2)%f.length]];for(let b=0;b<60;b++){let P=s()*6.28,S=Math.sqrt(s())*(M-.25);_.push({x:I.x+Math.cos(P)*S,y:I.y+.25,z:I.z+Math.sin(P)*S,s:.8+s()*.5}),d.push(v[b%2])}}let E=new Fe,x=Ke([Ge(new de(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),Ge(new Ze(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),y=new Qe(x,mt("#ffffff",{vertexColors:!0}),g.length);g.forEach((C,I)=>{E.position.set(C.x,C.y,C.z),E.scale.set(C.s,1,C.s),E.updateMatrix(),y.setMatrixAt(I,E.matrix)}),y.receiveShadow=!0,y.computeBoundingSphere(),Bn(y,1.6,void 0,20),r.add(y),e.registerInstanced(y,g);let k=new tn(.24,0);k.computeVertexNormals();let A=new Qe(k,mt("#ffffff"),_.length);E.scale.setScalar(1),_.forEach((C,I)=>{E.position.set(C.x,C.y,C.z),E.scale.setScalar(C.s),E.updateMatrix(),A.setMatrixAt(I,E.matrix),A.setColorAt(I,new le(d[I]))}),A.computeBoundingSphere(),r.add(A),e.registerInstanced(A,_)}{let g=t.sample(55),_=-1,d=Ve/2+9,f=g.x+g.rx*d*_,E=g.z+g.rz*d*_;e.blocked(f,E,3)&&(f=g.x-g.rx*d*_,E=g.z-g.rz*d*_);let x=new me,y=rn(128,16,(z,w,U)=>{for(let O=0;O<8;O++)z.fillStyle=O%2?"#fff":"#3a9d5d",z.fillRect(O*16,0,16,U)});o.push(y),x.add(be(new Ee(3.2,1.6,1.8,3,.25),mt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let k=be(new Ee(3.4,.15,2,2,.05),mt("#f4e3c0"),{ol:2,olRef:20});k.position.y=2,x.add(k);let A=be(new Ie(3.8,.15,2.4),mt("#ffffff",{map:y}),{ol:2.5,olRef:20});A.position.y=3.2,x.add(A);for(let z of[-1.6,1.6]){let w=be(new de(.06,.06,1.2,6),mt("#ffffff"),{ol:1.5});w.position.set(z,2.6,.9),x.add(w)}for(let z of[-1.1,1.1]){let w=be(new de(.4,.4,.2,14).rotateZ(Math.PI/2),mt("#22202c"),{ol:2});w.position.set(z,.4,.95),x.add(w);let U=w.clone();U.position.z=-.95,x.add(U)}let C=be(new de(.75,.55,1.3,16),mt("#ffffff"),{ol:3,olRef:20});C.position.y=4,x.add(C);let I=be(new de(.82,.82,.22,16),mt("#5a3a24"),{ol:2.5,olRef:20});I.position.y=4.75,x.add(I);let M=be(new de(.72,.62,.45,16),mt("#c98a4a"),{ol:2,olRef:20});M.position.y=3.95,x.add(M);let v=Hn(512,128,(z,w,U)=>{z.fillStyle="#1a1420",Ye(z,0,0,w,U,28),z.fill(),z.fillStyle="#ffd23f",Ye(z,6,6,w-12,U-12,22),z.fill(),on(z,"FLAT WHITES",w/2,U/2+4,62,"#ffffff","#1a1420",.2)},o),b=new Ue(new fn(2.8,.7),mt("#ffffff",{map:v}));b.position.set(0,1.4,.92),x.add(b);let P=b.clone();P.rotation.y=Math.PI,P.position.z=-.92,x.add(P);let S=Math.atan2(g.x-f,g.z-E);x.position.set(f,t.heightAt(f,E),E),x.rotation.y=S,r.add(x);for(let z=0;z<5;z++){let w=f+Math.sin(S)*(2.2+z*1.1)+Math.cos(S)*(z%2?.3:-.3),U=E+Math.cos(S)*(2.2+z*1.1);c(w,U,S+Math.PI,.8)}e.anchors.coffeeCart=x}function m(){}function u(){r.traverse(g=>{g.geometry&&g.geometry.dispose()});for(let g of o)g.dispose?.();i.remove(r)}return{group:r,crowd:a,update:m,dispose:u}}var xr=8.5;function gc(i,t={}){let{course:e,park:n,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(G=>(o[G]||[]).length),l=[...s?.runners||[]].sort((G,K)=>(G.lane??0)-(K.lane??0)),c=!1,h=new mo({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});h.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),h.outputColorSpace=ln,h.toneMapping=qn,h.shadowMap.enabled=!0,h.shadowMap.type=Zl;let p=h.domElement;p.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(p);let m=new xo;m.fog=new go(13496063,700,3200);let u=new yn(45,16/9,.3,9e3),g=new Uo(14676223,9420912,1.45);m.add(g);let _=new No(16774109,2.3),d=new H(-.45,.82,.38).normalize();_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.bias=-4e-4,_.shadow.normalBias=.03,_.shadow.radius=3,m.add(_),m.add(_.target);let f=of(e,n,r),E=hf(m,f,{course:e,park:n}),x=null,y=null,k=df(f,E.anchors.crowdZones,5,E.onPath,E.blocked),A=Rf(m,f,E,n);k.push(...A.crowd);let C=new Map;for(let G of k){let K=G.zone??"x";C.has(K)||C.set(K,[]),C.get(K).push(G)}let I=[...C.values()].map(G=>uc(m,G)),M={update:(...G)=>{I.forEach(K=>K.update(...G)),y?.update(...G)},setMask:G=>I.forEach(K=>K.setMask(G)),dispose:()=>{I.forEach(G=>G.dispose()),y?.dispose()}},v={};for(let G of l){let K=xf(G);v[G.id]=K,m.add(K.root)}let b=l.map(G=>G.id),P=Object.fromEntries(l.map(G=>[G.id,G])),S=wf(i,{runners:l,backedBy:o,course:e,park:n,C:f}),z=null,w=null,U=[],O=null,V=[],pt=!1;function Q(G){if(r=G||null,f.setPlan(r),c=!!r?.runners?.some(K=>K.diversions&&K.diversions.length),x&&(x.dispose(),x=null),y&&(y.dispose(),y=null),c){let K=r.runners.find(Dt=>Dt.diversions?.length).id;x=Tf(m,f,E,f.diversions[K][0]),E.clearArea(x.contains),I.forEach(Dt=>Dt.hideWhere(x.contains)),y=uc(m,x.crowd)}if((c||pt)&&(E.redrawGround(),S.redrawMap()),pt=c,V=[],r){w=_f(r,f,l),U=dc({plan:r,sim:w,backedIds:a,hasDiversion:c,C:f,world:E,funfair:x}),O=bf({camera:u,C:f,sim:w,world:E,funfair:x});for(let K of r.events||[])V.push({at:K.broadcastS,evt:{...K,kind:"event"}});for(let K of r.commentary||[])V.push({at:K.broadcastS,evt:{...K,kind:"commentary"}});V.sort((K,Dt)=>K.at-Dt.at)}else w=null,U=[],O=null}let N="idle",Tt=!1,It=!1,L=-xr,W=0,it=null,X=null,tt=0,ut=!1,Rt=!1,Ft=null,nt=!1,dt=1,B=0,Vt=.35,Z=3.2,Y=0,gt=0,q=!1,Lt=0,F=Math.max(.05,Number(t.speed)||1),R=null,lt=0,_t=new Set;function Pt(){let G=i.clientWidth||window.innerWidth,K=i.clientHeight||window.innerHeight;h.setSize(G,K,!1),u.aspect=G/K,u.updateProjectionMatrix(),cc.uRes.value.set(G*h.getPixelRatio(),K*h.getPixelRatio())}let $=typeof ResizeObserver<"u"?new ResizeObserver(Pt):null;$?.observe(i),window.addEventListener("resize",Pt),Pt();let ot={};{let G=b.length;b.forEach((K,Dt)=>{let St=(Dt-(G-1)/2)*Math.min(1.25,(Ve-1.6)/Math.max(1,G-1)),Bt=f.sample(0);ot[K]={x:Bt.x+Bt.rx*St-Bt.tx*1.2,z:Bt.z+Bt.rz*St-Bt.tz*1.2,yaw:Math.atan2(Bt.tx,Bt.tz)},ot[K].y=f.heightAt(ot[K].x,ot[K].z)+.16})}function at(G="idle"){for(let K of b){let Dt=ot[K],St=v[K];St.root.position.set(Dt.x,Dt.y,Dt.z),St.root.rotation.set(0,Dt.yaw,0),G&&St.set(G),St.setPop(null)}}at(),Q(r);let xt=(G,K)=>G===1?"jump":G===2||G===3?"fist":G===K?"collapse":"kneel";function At(G,K){let Dt=w.stateAt(Math.max(0,G)),St=b.length;for(let Bt of b){let Zt=Dt.byId[Bt],se=v[Bt];if(G<0)continue;se.root.position.set(Zt.x,Zt.y,Zt.z);let ke=Math.atan2(Zt.tx,Zt.tz)+(Zt.finished&&Zt.post>2.4&&!(Zt.place>3&&Zt.post<4)?Math.PI*(Zt.place%2?1:-1)*.92:0),Wt=se.root.rotation.y,Qt=ke-Wt;for(;Qt>Math.PI;)Qt-=2*Math.PI;for(;Qt<-Math.PI;)Qt+=2*Math.PI;se.root.rotation.y=Wt+Qt*Math.min(1,K*10);let ye={speed:Zt.vRace,rate:Dt.rate*dt,slope:Zt.slope},Ht=f.diversions[Bt]?.[0];if(Ht&&se.setProp("floss",Zt.m>Ht.toM-20?Math.max(.25,1-(Zt.m-Ht.toM)/3500):0),Zt.finished){let fe=Zt.place;Zt.post<1.6?(se.set("run"),ye.speed=3,ye.rate=1.2):fe>3&&Zt.post<4?se.set("trudge"):se.set("celebrate",xt(fe,St)),se.setPop(null)}else if(Zt.div>.3){se.set("distracted");let fe=x?.anchors.rides.reduce((Le,Ae)=>!Le||Ae.pos.distanceToSquared(se.root.position)<Le.pos.distanceToSquared(se.root.position)?Ae:Le,null);if(fe){let Ae=Math.atan2(fe.pos.x-Zt.x,fe.pos.z-Zt.z)-se.root.rotation.y;for(;Ae>Math.PI;)Ae-=2*Math.PI;for(;Ae<-Math.PI;)Ae+=2*Math.PI;ye.lookYaw=Math.max(-1.3,Math.min(1.3,Ae))}se.setPop(["!","heart","floss"][Math.floor((Zt.m-Zt.divInfo.fromM)/120)%3])}else{se.set("run"),se.setPop(null);let fe=f.geoOf(Zt.m);ye.effort=Zt.m>4300?.4+(Zt.m-4300)/700*.5:fe>1700&&fe<2060?.7:.1}se.update(K*dt,ye)}}let bt=new H,Nt=null,Yt=-1,ie=()=>{if(Yt!==W||!Nt){let G=p.getBoundingClientRect();Nt=[...S.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].filter(K=>!S.root.classList.contains("mr-dim")&&!(S.root.classList.contains("mr-dimtop")&&!K.classList.contains("mr-map"))).map(K=>{let Dt=K.getBoundingClientRect(),St=Dt.right,Bt=Dt.bottom;if(K.classList.contains("mr-tower")){Bt=Dt.top+K.querySelectorAll(".mr-row").length*((K.querySelector(".mr-row")?.offsetHeight||40)+6);for(let Zt of K.querySelectorAll(".mr-badges")){let se=Zt.getBoundingClientRect();se.width&&(St=Math.max(St,se.right))}}return{left:Dt.left-G.left,right:St-G.left,top:Dt.top-G.top,bottom:Bt-G.top}}),Yt=W}return Nt};function Jt(G,K=!0){u.updateMatrixWorld();let Dt=p.clientWidth,St=p.clientHeight,Bt=[];for(let Ht of b){let fe=v[Ht];bt.set(fe.root.position.x,fe.root.position.y+fe.height+.55,fe.root.position.z);let Le=bt.distanceTo(u.position);bt.project(u);let Ae=K&&bt.z<1&&bt.z>-1&&Math.abs(bt.x)<.95&&bt.y<.82&&bt.y>-.62&&Le>9.5&&Le<(mr.has(O?.shot?.type)?450:150);fe.height/Math.max(.1,Le)*(St/(2*Math.tan(Ei.degToRad(u.fov)/2)))>St*.3&&(Ae=!1),Bt.push({id:Ht,x:(bt.x*.5+.5)*Dt,y:(-bt.y*.5+.5)*St,visible:Ae,pos:G?G.order.indexOf(Ht)+1:0,scale:Math.max(.7,Math.min(1.15,30/Le)),dist:Le})}let Zt=N==="race"&&mr.has(O?.shot?.type)&&!O?.gliding,se=G?G.order:b,ke=new Set([...se.slice(0,3),...a]);Bt.sort((Ht,fe)=>se.indexOf(Ht.id)-se.indexOf(fe.id));let Wt=[];for(let Ht of Bt){if((!Zt||!ke.has(Ht.id))&&(Ht.visible=!1),!Ht.visible)continue;let fe=(Ps(P[Ht.id]).length*10+50+(o[Ht.id]?.length||0)*18)*Ht.scale,Le=26*Ht.scale,Ae=10,Be={l:Ht.x-fe/2,r:Ht.x+fe/2,t:Ht.y-Le,b:Ht.y+6};if(Wt.some(Me=>Be.l<Me.r+4&&Be.r>Me.l-4&&Be.t<Me.b+2&&Be.b>Me.t-2)){Ht.visible=!1;continue}if(ie().some(Me=>Be.l<Me.right+Ae&&Be.r>Me.left-Ae&&Be.t<Me.bottom+Ae&&Be.b>Me.top-Ae)){Ht.visible=!1;continue}Wt.push(Be)}if(!G)return N!=="race"?{tags:Bt}:{tags:Bt,raceS:0,leaderM:0,map:!1,order:b.map(Ht=>({id:Ht,hidden:!0,gapText:""}))};let Qt=G.leader.m>=4e3,ye=G.order.map((Ht,fe)=>{let Le=G.byId[Ht],Ae=fe<3||a.includes(Ht),Be=Qt||Le.finished?Le.gapText:"";if(!Be&&a.includes(Ht)&&fe>0&&!Le.finished){let Me=G.byId[G.order[fe-1]],en=G.raceS-li(w.byId[G.order[fe-1]].progress,Le.m);!Me.finished&&en>=0&&en<=5&&(Be=`\u2191${en.toFixed(1)}s`)}return{id:Ht,gapText:Be,finished:Le.finished,hidden:!Ae}});return{raceS:G.raceS,leaderM:G.leader.m,tags:Bt,order:ye,map:mr.has(O?.shot?.type),dots:G.order.map((Ht,fe)=>({x:G.byId[Ht].x,z:G.byId[Ht].z,colour:P[Ht].colour.primary,lead:fe===0,focus:O?.shot?.ids?.includes(Ht)}))}}let pe=new ws(.78,1,48);pe.rotateX(-Math.PI/2);let oe={};function Te(){for(let G of b){let K=oe[G]||(oe[G]=new me);K.parent||v[G].root.add(K);for(let Dt of[...K.children])K.remove(Dt),Dt.material.dispose();(o[G]||[]).forEach((Dt,St)=>{let Bt=new Ue(pe,new bn({color:mc(Dt),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));Bt.scale.setScalar(1+St*.32),Bt.position.y=.06+St*.01,Bt.renderOrder=2,K.add(Bt)})}}function st(){for(let G of b){let K=oe[G];if(!K||!K.children.length)continue;let Dt=u.position.distanceTo(v[G].root.position);K.scale.setScalar(Ei.clamp(Dt*.016,.9,3.2))}}Te();function $t(G,K){let Dt=Math.max(30,Math.min(220,K)),St=_.shadow.camera;St.right!==Dt&&(St.left=-Dt,St.right=Dt,St.top=Dt,St.bottom=-Dt,St.near=1,St.far=900,St.updateProjectionMatrix());let Bt=2*Dt/_.shadow.mapSize.x,Zt=Math.round(G.x/Bt)*Bt,se=Math.round(G.z/Bt)*Bt;_.target.position.set(Zt,G.y,se),_.position.set(Zt+d.x*400,G.y+d.y*400,se+d.z*400)}let Ct=["wave","flex","point","stretch","spin","bow"];function zt(G,K){let Dt=[...G.personality||G.id].reduce((St,Bt)=>St+Bt.charCodeAt(0),K);return Ct[Dt%Ct.length]}function te(G,K={}){N="intro",S.setDim(!0),S.clearBanner(),S.photo(!1),S.results(null),ue(),S.market(!1),R=null,Tt=!1,p.style.filter="",at("idle");let Dt=K.perRunnerS??t.introPerRunnerS??4.2,St=K.flyoverS??7;return X={t:0,idx:-1,per:Dt,fly:St,onDone:G,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:St,perRunnerS:Dt,runners:b.slice()}}function jt(G){let K=X;if(!K)return;K.t+=G;let Dt=ot;if(K.idx===-1){!K.title&&K.t>.8&&(K.title=!0,ge(!0));let ye=Math.min(1,K.t/K.fly),Ht=pc(ye),fe=f.sample(0),Le=new H(170,0,-40),Ae=2.2-Ht*2,Be=520-Ht*470,Me=new H(Le.x+Math.cos(Ae)*Be,190-Ht*170,Le.z+Math.sin(Ae)*Be),en=new H(fe.x+fe.tx*22+fe.rx*10,fe.y+9,fe.z+fe.tz*22+fe.rz*10);Me.lerp(en,Ht*Ht);let mn=Le.clone().setY(15).lerp(new H(fe.x,fe.y+1,fe.z),Math.min(1,Ht*1.2));u.position.copy(Me),u.lookAt(mn),rt(50),ye>=1&&T();return}if(K.group){let ye=f.sample(0),Ht=(K.t-K.segStart)/3;if(u.position.set(ye.x+ye.tx*(9+Ht*2)+ye.rx*2,ye.y+2.2+Ht*.6,ye.z+ye.tz*(9+Ht*2)+ye.rz*2),u.lookAt(ye.x,ye.y+1.3,ye.z),rt(46),Ht>=1&&!K.done){K.done=!0,S.introCard(null);let fe=K.onDone;X=null,N="idle",fe?.()}return}let St=b[K.idx],Bt=Dt[St],Zt=K.t-K.segStart,se=new H(Math.sin(Bt.yaw),0,Math.cos(Bt.yaw)),ke=new H(-se.z,0,se.x),Wt=v[St].height,Qt=3.2+Wt*.6-Math.min(.6,Zt*.12);u.position.set(Bt.x+se.x*Qt+ke.x*.9,Bt.y+Wt*.62,Bt.z+se.z*Qt+ke.z*.9),u.lookAt(Bt.x-ke.x*1.25,Bt.y+Wt*.55,Bt.z-ke.z*1.25),rt(40),!K.waiting&&Zt>=K.per&&T(),K.waiting==="released"&&Zt>=K.minSeg&&T()}function ge(G){let K=s||{};S.titleCard(G,{title:K.title||"MARKRUN",kicker:K.number?`ROUND ${K.number}`:"LIVE FROM FINSBURY PARK",theme:K.theme?typeof K.theme=="string"?K.theme:K.theme.label||K.theme.name||"":""})}function T(){let G=X;G.idx===-1&&ge(!1),G.idx++,G.segStart=G.t;for(let Bt of b)v[Bt].set("idle");if(G.idx>=b.length){G.group=!0;for(let Bt of b)v[Bt].set("pose","point");S.introCard(null),setTimeout(()=>{},0);for(let Bt of b)v[Bt].set("wave");return}let K=b[G.idx];v[K].set(zt(P[K],G.idx)==="wave"?"wave":"pose",zt(P[K],G.idx)),t.introCards!==!1&&S.introCard(P[K]),G.waiting=!1;let St=t.onIntroRunner?.(K,G.idx);St&&typeof St.then=="function"&&(G.waiting=!0,St.then(()=>{X===G&&(G.waiting="released")},()=>{X===G&&(G.waiting="released")}))}function et(G,K){if(!w)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");N="race",S.setDim(!1),S.results(null),ue(),X=null,S.introCard(null),S.titleCard(!1),S.market(!1),R=null,Tt=!1,p.style.filter="",L=-xr,Y=0,gt=0,tt=0,ut=!1,Rt=!1,Ft=null,nt=!1,dt=1,S.replay(!1),_t.clear(),q=!!t.skipRaceTitle,S.setDimTop(!1),it={onEvent:G,onDone:K},at("idle"),O.reset()}let j=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function ct(G){switch(G.type){case"lead_change":return["LEAD CHANGE","","#ff3d8b"];case"overtake":return a.includes(G.by)||a.includes(G.on)?["OVERTAKE","","#2e6fe0"]:null;case"hill":return["THE HILL","","#3aa845"];case"lap":return["LAP 2","","#2e6fe0"];case"final_stretch":return["FINAL STRETCH","","#ff8a1f"];case"diversion":return _t.has("div")?null:(_t.add("div"),["DISTRACTED!","","#b04bff"]);case"finish":return G.place===1&&!w.photoFinish?["WINNER","","#ffb000"]:null;default:return null}}function vt(G){if(tt>0){tt-=G,tt<=0&&(S.photo(!1),p.style.filter="",E.anchors.finishArch.visible=!0,Gt());return}if(Ft){Ot(G);return}let K=L;for(dt=ht(L),L+=G*dt,L<-4.2&&!q&&(q=!0,ge(!0),S.setDimTop(!0)),L>=-3.6&&q===!0&&(q="done",ge(!1),S.setDimTop(!1));gt<j.length&&L>=j[gt][0];){let[Dt,St]=j[gt++];if(S.countdown(St),it?.onEvent?.({kind:"countdown",n:St==="GO!"?0:Number(St),text:St,broadcastS:Dt}),Dt===-3)for(let Bt of b)v[Bt].set("ready")}for(;Y<V.length&&L>=V[Y].at;){let Dt=V[Y++].evt;try{it?.onEvent?.(Dt)}catch(St){console.error(St)}if(Dt.kind==="event"){let St=ct(Dt);St&&S.showBanner(...St)}}if(w.photoFinish&&!ut&&L>=w.firstFinishB){ut=!0,L=w.firstFinishB,tt=t.photoFreezeS??1.4;{let[Dt,St]=w.finishOrder;S.photo(!0,`${Ps(P[Dt])} or ${Ps(P[St])}? Checking the camera...`)}p.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",it?.onEvent?.({kind:"photo_finish",broadcastS:L,ids:w.finishOrder.slice(0,2)})}!nt&&!Ft&&L>=w.firstFinishB+1.1&&Gt(),!Rt&&L>=w.lastFinishB+3.5&&(Rt=!0,it?.onDone?.())}function ht(G){if(!w||t.finishSlowMo===!1)return 1;let K=Math.abs(G-w.firstFinishB),Dt=K<1?1:K<1.6?1-Ut((K-1)/.6):0;return 1-(1-Vt)*Dt}function Ut(G){return G=Math.max(0,Math.min(1,G)),G*G*(3-2*G)}function Gt(){if(nt||t.finishReplay===!1){nt=!0,Mt();return}let G=w.byId[w.finishOrder[0]];Ft={t:0,b0:Math.max(0,Ai(r.timeMap,li(G.progress,4940))),b1:w.firstFinishB+.6,resume:L},S.replay(!0)}function Ot(G){Ft.t+=G,Ft.t>=Z&&(Ft=null,nt=!0,S.replay(!1),O.reset(!0),Mt())}function J(){let G=Math.min(1,Ft.t/Z);return Ft.b0+(Ft.b1-Ft.b0)*(1-Math.pow(1-G,1.7))}function Mt(){let G=w.finishOrder[0],K={kind:"winner_replay_done",winnerId:G,photoFinish:!!w.photoFinish,broadcastS:L};try{it?.onEvent?.(K)}catch(Dt){console.error(Dt)}if(t.onWinnerStamp)try{t.onWinnerStamp({winnerId:G,photoFinish:!!w.photoFinish})}catch(Dt){console.error(Dt)}else S.showBanner("WINNER","","#ffb000")}function wt(G){o=G||{},a=Object.keys(o).filter(K=>(o[K]||[]).length),S.setBackedBy(o),Te()}function qt(G,K=1.2){if(!w)throw new Error("createRaceView: seek in a race needs a plan");G=Math.max(-xr,Math.min(w.lastFinishB+3.5,Number(G)||0)),N="race",X=null,ue(),it=it||{},S.setDim(!1),S.introCard(null),S.results(null),S.photo(!1),S.market(!1),S.clearBanner(),S.titleCard(!1),S.setDimTop(!1),p.style.filter="",E.anchors.finishArch.visible=!0,R=null,q=G>=-3.6?"done":G<-4.2?!1:"done",O.reset();let Dt=Math.round(K*30);for(let St=Dt;St>=0;St--){if(L=G-St/30,L<-3)for(let Bt of b)v[Bt].set("idle");else if(L<0)for(let Bt of b)v[Bt].set("ready");if(St>0)if(O.update(L,1/30,U),L>=0)At(L,1/30);else for(let Bt of b)v[Bt].update(1/30,{})}L=G,Y=V.findIndex(St=>St.at>L),Y<0&&(Y=V.length),gt=j.findIndex(St=>St[0]>L),gt<0&&(gt=j.length),ut=L>=w.firstFinishB,Rt=L>=w.lastFinishB+3.5,tt=0,Ft=null,nt=L>=w.firstFinishB+1.1,dt=1,S.replay(!1)}function ae(G){let K=X;if(!K)return;G=Math.max(0,Number(G)||0);let Dt=b.length;if(G<K.fly){K.t=G;return}ge(!1),K.title=!0;let St=Math.min(Dt,Math.floor((G-K.fly)/K.per));K.idx=St-1,K.t=G,T(),K.segStart=K.fly+St*K.per}function ce(G){return N==="intro"?ae(G):qt(G)}function ue(){z&&(z.dispose(),z=null)}function we(G,{card:K}={}){N="podium",S.setDim(!0),S.clearBanner(),X=null,S.titleCard(!1),S.market(!1),R=null,Tt=!1,p.style.filter="",S.photo(!1),ue();let Dt=G?.finishOrder?.length?[...G.finishOrder].sort((St,Bt)=>St.place-Bt.place):(w?.finishOrder||b).map((St,Bt)=>({runnerId:St,place:Bt+1,officialS:w?.byId[St].officialS??0,timeText:w?Go(w.byId[St].officialS):""}));z=Af(m,f,E,v,Dt,{camera:u,offsetX:(K??t.podiumCard)!==!1?3.2:0}),(K??t.podiumCard)!==!1&&S.results(Dt.map(St=>({place:St.place,nickname:P[St.runnerId]?.nickname||St.runnerId,colour:P[St.runnerId]?.colour.primary||"#888",timeText:St.timeText||Go(St.officialS)})))}let Ce=performance.now(),Oe=0,D={frames:0,acc:0,fps:0};function rt(G){Math.abs(u.fov-G)>.01&&(u.fov=G,u.updateProjectionMatrix())}function yt(G,K=!1){W+=G;let Dt=null;Tt||(N==="intro"&&jt(G),N==="race"&&vt(G));let St=Tt?0:G;if(N==="race"){if(tt>0){let Wt=E.anchors.finish;E.anchors.finishArch.visible=!1,u.position.set(Wt.x+Wt.rx*9-Wt.tx*.6,Wt.y+6.4,Wt.z+Wt.rz*9-Wt.tz*.6),u.lookAt(Wt.x-Wt.rx*.6-Wt.tx*.6,Wt.y+.8,Wt.z-Wt.rz*.6-Wt.tz*.6),rt(42),u.updateMatrixWorld();let Qt=new H(Wt.x+Wt.rx*3,Wt.y+.05,Wt.z+Wt.rz*3).project(u),ye=new H(Wt.x-Wt.rx*3,Wt.y+.05,Wt.z-Wt.rz*3).project(u);S.photoLine([(Qt.x*.5+.5)*p.clientWidth,(-Qt.y*.5+.5)*p.clientHeight],[(ye.x*.5+.5)*p.clientWidth,(-ye.y*.5+.5)*p.clientHeight])}else if(Ft){let Wt=E.anchors.finish,Qt=J(),ye=w.stateAt(Qt).byId[w.finishOrder[0]];u.position.set(Wt.x+Wt.tx*30+Wt.rx*2.2,Wt.y+1.1,Wt.z+Wt.tz*30+Wt.rz*2.2),u.lookAt(ye.x,ye.y+1,ye.z),rt(13)}else if(Tt&&R!=null){R+=G;let Wt=w.stateAt(Math.max(0,L)),Qt=Wt.byId[Wt.order[0]],ye=Wt.order.slice(0,3).map(mn=>Wt.byId[mn]).filter(mn=>Math.abs(mn.m-Qt.m)<25),Ht=new H;for(let mn of ye)Ht.add(new H(mn.x,mn.y,mn.z));Ht.divideScalar(Math.max(1,ye.length)),lt||(lt=Math.atan2(u.position.x-Ht.x,u.position.z-Ht.z));let fe=lt+R*.12,Le=10+Math.min(25,Qt.m-ye.at(-1).m)*.4,Ae=Math.min(1,R/1.2),Be=Ae*Ae*(3-2*Ae),Me=Ht.x+Math.sin(fe)*Le,en=Ht.z+Math.cos(fe)*Le;u.position.set(Me,Math.max(Ht.y+3+Be*2,f.heightAt(Me,en)+2.5),en),u.lookAt(Ht.x,Ht.y+2.3,Ht.z),rt(44)}else O.update(L,St,U);Dt=L>=0?w.stateAt(L):null,Ft&&(Dt=w.stateAt(J()));let Zt=!tt&&R==null&&["side","headon","finishcam"].includes(O.shot?.type);E.setOcclusionCorridor(Zt?u.position:null,Zt?O.cam.look:null);let se=!tt&&!Ft&&O.shot?.type==="finishcam"?O.shot.fside:0;if(se!==B){B=se;let Wt=E.anchors.finish;M.setMask(se?(Qt,ye)=>{let Ht=((Qt-Wt.x)*Wt.rx+(ye-Wt.z)*Wt.rz)*se,fe=(Qt-Wt.x)*Wt.tx+(ye-Wt.z)*Wt.tz;return Ht>0&&Ht<16&&fe>-75&&fe<14&&Ht<15*(fe+150)/161+2.5}:null)}if(L<0)for(let Wt of b)v[Wt].update(St,{});else if(Ft){let Wt=Math.min(1,Ft.t/Z);dt=Math.max(.2,(Ft.b1-Ft.b0)/Z*1.7*Math.pow(1-Wt,.7)),At(J(),St)}else At(L,tt>0?0:St);let ke=O.shot?.type;$t(O.cam.look,mr.has(ke)?160:70)}else if(N==="podium"&&z){E.setOcclusionCorridor(null),z.update(St,W);for(let Zt of b)v[Zt].update(St,{});$t(z.center,40)}else{for(let Zt of b)v[Zt].update(St,{});if(N==="idle"){let Zt=f.sample(0),se=W*.12;u.position.set(Zt.x+Math.sin(se)*14,Zt.y+4.5,Zt.z+Math.cos(se)*14),u.lookAt(Zt.x,Zt.y+1.2,Zt.z),rt(45)}$t(new H(ot[b[0]]?.x??0,0,ot[b[0]]?.z??0),N==="intro"&&X?.idx===-1?160:40)}if(Lt+=G,K)return;st(),E.update(W),x?.update(W);let Bt=b.map(Zt=>v[Zt].root.position);M.update(W,u.position,Bt,N==="podium"?.9:null),S.update(Lt,N==="race"?Jt(Dt,L>-1&&R==null&&!Ft):Jt(null,!1)),Lt=0,h.render(m,u)}let Et=2;function ft(G){if(It)return;Oe=requestAnimationFrame(ft);let K=Math.max(0,(G-Ce)/1e3);Ce=G,D.frames++,D.acc+=K,D.acc>1&&(D.fps=D.frames/D.acc,D.frames=0,D.acc=0),Xt(Math.min(Et,K)*F)}function Xt(G){let K=G;if(K<=1e-6){yt(0);return}for(;K>1e-6;){let Dt=Math.min(K,.1);K-=Dt,yt(Dt,K>1e-6)}}t.manualLoop||(Oe=requestAnimationFrame(ft));function ee(){It=!0,cancelAnimationFrame(Oe),$?.disconnect(),window.removeEventListener("resize",Pt);for(let G in oe)for(let K of oe[G].children)K.material.dispose();pe.dispose(),ue();for(let G of b)m.remove(v[G].root),v[G].dispose();M.dispose(),x?.dispose(),A.dispose(),E.dispose(),S.dispose(),m.traverse(G=>{G.geometry&&G.geometry.dispose()}),gf(),lf(),h.dispose(),h.forceContextLoss?.(),p.remove()}let he={seek(G,K=1.2){qt(G,K),Tt=!0,yt(0)},introAt(G,K=1.5){if(te(()=>{},{}),Tt=!1,G<0){X.t=K,jt(0),yt(0),Tt=!0;return}for(X.t=X.fly,jt(0);X&&X.idx<G;)X.t=X.segStart+X.per+.01,jt(0);for(let Dt=0;Dt<K*30;Dt++){jt(1/30);for(let St of b)v[St].update(1/30,{})}Tt=!0,yt(0)},podiumAt(G=3){S.introCard(null),we(null);for(let K=0;K<G*30;K++){z.update(1/30,K/30);for(let Dt of b)v[Dt].update(1/30,{})}Tt=!0,yt(0)},photoAt(){this.seek(w.firstFinishB-.05),Tt=!1,ut=!1;for(let G=0;G<3;G++)yt(1/30);Tt=!0,yt(0)},render(){yt(0)},unpause(){Tt=!1},lookFrom(G,K,Dt,St,Bt,Zt,se=45){N="debugcam",u.position.set(G,K,Dt),u.lookAt(St,Bt,Zt),rt(se),S.setDim(!0),h.render(m,u)},step(G,K=!0){yt(G,!K)},get mode(){return N},get b(){return L},get shots(){return U},get sim(){return w},C:f,get director(){return O},renderer:h,scene:m,camera:u,info:()=>h.info,fps:()=>D.fps};return{playIntro:te,playRace:et,showPodium:we,setPaused(G,{market:K=!0,marketText:Dt}={}){G=!!G,G!==Tt&&(Tt=G,N==="race"&&tt<=0&&t.marketOnPause!==!1&&K&&(G?(R=0,lt=0,S.market(!0,Dt??t.marketText??"Place your halfway bets!"),p.style.filter="saturate(1.2) contrast(1.06)"):(R=null,S.market(!1),p.style.filter="",O.reset(!1))))},setSpeed(G){F=Math.max(.05,Number(G)||1)},seek:ce,loadPlan(G,{backedBy:K}={}){if(N==="race")throw new Error("createRaceView: loadPlan during a race");K&&wt(K),Q(G)},setBackedBy(G){wt(G),w&&N!=="race"&&(U=dc({plan:r,sim:w,backedIds:a,hasDiversion:c,C:f,world:E,funfair:x}))},dispose:ee,hudRoot:S.root,get broadcastTime(){return N==="intro"?X?.t??0:L},get durationS(){return w?xr+w.lastFinishB+3.5:0},preRollS:xr,_debug:he}}var Vn=new URLSearchParams(location.search);async function xc(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function Lx(){let i=Vn.get("fixture"),[t,e,n]=await Promise.all([xc("/data/course/course.json"),xc("/data/course/park.json"),xc(i?`/client/tv/race/fixtures/${i}.json`:"/data/fixtures/round.json")]);Vn.get("shot")&&document.body.classList.add("shot");let s={};Vn.get("backed")!=null?Vn.get("backed").split(",").filter(Boolean).forEach((c,h)=>s[c]=[h%2?"Mrs M":"Mark"]):Object.assign(s,{r2:["Mark"],r4:["Mrs M"],r1:["Mark","Mrs M"]});let r=document.getElementById("sub"),o=gc(document.getElementById("stage"),{course:t,park:e,round:n.public,plan:n.racePlan,backedBy:s,speed:Number(Vn.get("speed"))||1,preserveDrawingBuffer:!!Vn.get("shot"),manualLoop:!!Vn.get("shot"),onIntroRunner:c=>{let h=n.public.runners.find(p=>p.id===c);r.textContent=`${h.nickname} - ${h.tagline}`}});window.view=o,window.__create=gc,window.__data={course:t,park:e,round:n};let a=c=>{c.kind==="commentary"&&(r.textContent=c.text),c.kind==="countdown"&&(r.textContent=c.text)},l={intro:()=>o.playIntro(()=>{r.textContent="(betting would happen here)",Vn.get("auto")!=="0"&&setTimeout(l.race,1500)}),race:()=>(r.textContent="",o.playRace(a,()=>{r.textContent="Race over",setTimeout(l.podium,2500)})),podium:()=>o.showPodium(null),pause:(()=>{let c=!1;return()=>o.setPaused(c=!c)})()};document.getElementById("ctl").addEventListener("click",c=>{let h=c.target.dataset?.a;h&&l[h]()}),Vn.get("shot")||setInterval(()=>{document.getElementById("fps").textContent=`${o._debug.fps().toFixed(0)} fps`},1e3),Vn.get("auto")!=="0"&&!Vn.get("shot")&&l.intro(),window.__ready=!0}Lx().catch(i=>{console.error(i),document.getElementById("sub").textContent=String(i),window.__error=String(i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
