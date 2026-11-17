var $l="170";var Cf=0,_c=1,If=2;var Dh=1,Zl=2,Kn=3,xi=0,nn=1,We=2,mi=0,hs=1,vc=2,Mc=3,bc=4,Pf=5,Pi=100,Lf=101,Df=102,Uf=103,Nf=104,Ff=200,zf=201,Of=202,Bf=203,Ta=204,Aa=205,kf=206,Hf=207,Vf=208,Gf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,Ra=0,Ca=1,Ia=2,ps=3,Pa=4,La=5,Da=6,Ua=7,Uh=0,Zf=1,Jf=2,Vn=0,Kf=1,jf=2,Qf=3,tu=4,eu=5,nu=6,iu=7;var Nh=300,ms=301,gs=302,Na=303,Fa=304,No=306,Ni=1e3,Di=1001,za=1002,fn=1003,su=1004;var xr=1005;var kn=1006,qo=1007;var Ui=1008;var ei=1009,Fh=1010,zh=1011,Zs=1012,Jl=1013,Fi=1014,Hn=1015,cr=1016,Kl=1017,jl=1018,xs=1020,Oh=35902,Bh=1021,kh=1022,vn=1023,Hh=1024,Vh=1025,fs=1026,ys=1027,Ql=1028,tc=1029,Gh=1030,ec=1031;var nc=1033,$r=33776,Zr=33777,Jr=33778,Kr=33779,Oa=35840,Ba=35841,ka=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,$a=37811,Za=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,jr=36492,rl=36494,ol=36495,Wh=36283,al=36284,ll=36285,cl=36286;var Qr=2300,hl=2301,Yo=2302,Sc=2400,Ec=2401,wc=2402;var ru=3200,ou=3201;var Xh=0,au=1,di="",tn="srgb",Es="srgb-linear",Fo="linear",Ie="srgb";var Gi=7680;var Tc=519,lu=512,cu=513,hu=514,qh=515,fu=516,uu=517,du=518,pu=519,fl=35044;var Ac="300 es",Qn=2e3,to=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Ws=Math.PI/180,Js=180/Math.PI;function Gn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function mu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gu(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function xu(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function yu(i,t=1){return t-Math.abs(ic(i,t*2)-t)}function _u(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bu(i,t){return i+Math.random()*(t-i)}function Su(i){return i*(.5-Math.random())}function Eu(i){i!==void 0&&(Rc=i);let t=Rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*Ws}function Tu(i){return i*Js}function Au(i){return(i&i-1)===0&&i!==0}function Ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),m=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*m,a*c);break;case"YZY":i.set(l*m,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*m,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*u,a*c);break;case"YXY":i.set(l*u,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vi={DEG2RAD:Ws,RAD2DEG:Js,generateUUID:Gn,clamp:en,euclideanModulo:ic,mapLinear:mu,inverseLerp:gu,lerp:Xs,damp:xu,pingpong:yu,smoothstep:_u,smootherstep:vu,randInt:Mu,randFloat:bu,randFloatSpread:Su,seededRandom:Eu,degToRad:wu,radToDeg:Tu,isPowerOfTwo:Au,ceilPowerOfTwo:Ru,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:Iu,normalize:Re,denormalize:Pn},Ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xe=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],m=n[2],u=n[5],g=n[8],_=s[0],p=s[3],f=s[6],A=s[1],x=s[4],y=s[7],B=s[2],T=s[5],I=s[8];return r[0]=o*_+a*A+l*B,r[3]=o*p+a*x+l*T,r[6]=o*f+a*y+l*I,r[1]=c*_+h*A+d*B,r[4]=c*p+h*x+d*T,r[7]=c*f+h*y+d*I,r[2]=m*_+u*A+g*B,r[5]=m*p+u*x+g*T,r[8]=m*f+u*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,m=a*l-h*r,u=c*r-o*l,g=e*d+n*m+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=m*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$o=new xe;function Yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){let i=eo("canvas");return i.style.display="block",i}var Cc={};function Vs(i){i in Cc||(Cc[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Du(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ee={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ie&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ie&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ic=[.64,.33,.3,.6,.15,.06],Pc=[.2126,.7152,.0722],Lc=[.3127,.329],Dc=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[Es]:{primaries:Ic,whitePoint:Lc,transfer:Fo,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Ic,whitePoint:Lc,transfer:Ie,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:Pc,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var Wi,ul=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=eo("canvas")),Wi.width=t.width,Wi.height=t.height;let n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nu=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fu=0,pn=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=kn,o=Ui,a=vn,l=ei,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Gn(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ni:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ni:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Nh;pn.DEFAULT_ANISOTROPY=1;var Ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],u=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-m)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(u+1)/2,B=(f+1)/2,T=(h+m)/4,I=(d+_)/4,D=(g+p)/4;return x>y&&x>B?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=I/n):y>B?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=D/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=I/r,s=D/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(m-h)*(m-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(d-_)/A,this.z=(m-h)/A,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],m=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==m||c!==u||h!==g){let p=1-a,f=l*m+c*u+h*g+d*_,A=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let B=Math.sqrt(x),T=Math.atan2(B,f*A);p=Math.sin(p*T)/B,a=Math.sin(a*T)/B}let y=a*A;if(l=l*p+m*y,c=c*p+u*y,h=h*p+g*y,d=d*p+_*y,p===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=B,c*=B,h*=B,d*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],m=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*m,t[e+1]=l*g+h*m+c*d-a*u,t[e+2]=c*g+h*u+a*m-l*d,t[e+3]=h*g-a*d-l*m-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),m=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*h*d+c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d-m*u*g;break;case"YXZ":this._x=m*h*d+c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d+m*u*g;break;case"ZXY":this._x=m*h*d-c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d-m*u*g;break;case"ZYX":this._x=m*h*d-c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d+m*u*g;break;case"YZX":this._x=m*h*d+c*u*g,this._y=c*u*d+m*h*g,this._z=c*h*g-m*u*d,this._w=c*h*d-m*u*g;break;case"XZY":this._x=m*h*d-c*u*g,this._y=c*u*d-m*h*g,this._z=c*h*g+m*u*d,this._w=c*h*d+m*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],m=n+a+d;if(m>0){let u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=s*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new H,Nc=new Sn,ii=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),_r.subVectors(this.max,Ls),Xi.subVectors(t.a,Ls),qi.subVectors(t.b,Ls),Yi.subVectors(t.c,Ls),ai.subVectors(qi,Xi),li.subVectors(Yi,qi),Ei.subVectors(Xi,Yi);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ei.z,Ei.y,ai.z,0,-ai.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!Ko(e,Xi,qi,Yi,_r)||(e=[1,0,0,0,1,0,0,0,1],!Ko(e,Xi,qi,Yi,_r))?!1:(vr.crossVectors(ai,li),e=[vr.x,vr.y,vr.z],Ko(e,Xi,qi,Yi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new H,new H,new H,new H,new H,new H,new H,new H],Rn=new H,yr=new ii,Xi=new H,qi=new H,Yi=new H,ai=new H,li=new H,Ei=new H,Ls=new H,_r=new H,vr=new H,wi=new H;function Ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zu=new ii,Ds=new H,jo=new H,_i=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(jo)),this.expandByPoint(Ds.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new H,Qo=new H,Mr=new H,ci=new H,ta=new H,br=new H,ea=new H,so=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qo.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Qo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mr),a=ci.dot(this.direction),l=-ci.dot(Mr),c=ci.lengthSq(),h=Math.abs(1-o*o),d,m,u,g;if(h>0)if(d=o*l-a,m=o*a-l,g=r*h,d>=0)if(m>=-g)if(m<=g){let _=1/h;d*=_,m*=_,u=d*(d+o*m+2*a)+m*(o*d+m+2*l)+c}else m=r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m=-r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m<=-g?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+m*(m+2*l)+c):m<=g?(d=0,m=Math.min(Math.max(-r,-l),r),u=m*(m+2*l)+c):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+m*(m+2*l)+c);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Qo).addScaledVector(Mr,m),u}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){ta.subVectors(e,t),br.subVectors(n,t),ea.crossVectors(ta,br);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let l=a*this.direction.dot(br.crossVectors(ci,br));if(l<0)return null;let c=a*this.direction.dot(ta.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,d,m,u,g,_,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=m,f[3]=u,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let m=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let m=l*h,u=l*d,g=c*h,_=c*d;e[0]=m+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){let m=l*h,u=l*d,g=c*h,_=c*d;e[0]=m-_*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let m=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=m*c+_,e[1]=l*d,e[5]=_*c+m,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-m*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=m-_*d}else if(t.order==="XZY"){let m=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=m*d+_,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=_*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,Bu)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),hi.crossVectors(n,yn),hi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),hi.crossVectors(n,yn)),hi.normalize(),Sr.crossVectors(yn,hi),s[0]=hi.x,s[4]=Sr.x,s[8]=yn.x,s[1]=hi.y,s[5]=Sr.y,s[9]=yn.y,s[2]=hi.z,s[6]=Sr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],m=n[9],u=n[13],g=n[2],_=n[6],p=n[10],f=n[14],A=n[3],x=n[7],y=n[11],B=n[15],T=s[0],I=s[4],D=s[8],M=s[12],v=s[1],b=s[5],P=s[9],w=s[13],E=s[2],O=s[6],N=s[10],V=s[14],k=s[3],ut=s[7],gt=s[11],U=s[15];return r[0]=o*T+a*v+l*E+c*k,r[4]=o*I+a*b+l*O+c*ut,r[8]=o*D+a*P+l*N+c*gt,r[12]=o*M+a*w+l*V+c*U,r[1]=h*T+d*v+m*E+u*k,r[5]=h*I+d*b+m*O+u*ut,r[9]=h*D+d*P+m*N+u*gt,r[13]=h*M+d*w+m*V+u*U,r[2]=g*T+_*v+p*E+f*k,r[6]=g*I+_*b+p*O+f*ut,r[10]=g*D+_*P+p*N+f*gt,r[14]=g*M+_*w+p*V+f*U,r[3]=A*T+x*v+y*E+B*k,r[7]=A*I+x*b+y*O+B*ut,r[11]=A*D+x*P+y*N+B*gt,r[15]=A*M+x*w+y*V+B*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],m=t[10],u=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*d-s*c*d-r*a*m+n*c*m+s*a*u-n*l*u)+_*(+e*l*u-e*c*m+r*o*m-s*o*u+s*c*h-r*l*h)+p*(+e*c*d-e*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+f*(-s*a*h-e*l*d+e*a*m+s*o*d-n*o*m+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],m=t[10],u=t[11],g=t[12],_=t[13],p=t[14],f=t[15],A=d*p*c-_*m*c+_*l*u-a*p*u-d*l*f+a*m*f,x=g*m*c-h*p*c-g*l*u+o*p*u+h*l*f-o*m*f,y=h*_*c-g*d*c+g*a*u-o*_*u-h*a*f+o*d*f,B=g*d*l-h*_*l-g*a*m+o*_*m+h*a*p-o*d*p,T=e*A+n*x+s*y+r*B;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=A*I,t[1]=(_*m*r-d*p*r-_*s*u+n*p*u+d*s*f-n*m*f)*I,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*f+n*l*f)*I,t[3]=(d*l*r-a*m*r-d*s*c+n*m*c+a*s*u-n*l*u)*I,t[4]=x*I,t[5]=(h*p*r-g*m*r+g*s*u-e*p*u-h*s*f+e*m*f)*I,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*I,t[7]=(o*m*r-h*l*r+h*s*c-e*m*c-o*s*u+e*l*u)*I,t[8]=y*I,t[9]=(g*d*r-h*_*r-g*n*u+e*_*u+h*n*f-e*d*f)*I,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*I,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*u-e*a*u)*I,t[12]=B*I,t[13]=(h*_*s-g*d*s+g*n*m-e*_*m-h*n*p+e*d*p)*I,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*I,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*m+e*a*m)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,m=r*c,u=r*h,g=r*d,_=o*h,p=o*d,f=a*d,A=l*c,x=l*h,y=l*d,B=n.x,T=n.y,I=n.z;return s[0]=(1-(_+f))*B,s[1]=(u+y)*B,s[2]=(g-x)*B,s[3]=0,s[4]=(u-y)*T,s[5]=(1-(m+f))*T,s[6]=(p+A)*T,s[7]=0,s[8]=(g+x)*I,s[9]=(p-A)*I,s[10]=(1-(m+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let c=1/r,h=1/o,d=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),u,g;if(a===Qn)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===to)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),m=(e+t)*c,u=(n+s)*h,g,_;if(a===Qn)g=(o+r)*d,_=-2*d;else if(a===to)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$i=new H,Cn=new ve,Ou=new H(0,0,0),Bu=new H(1,1,1),hi=new H,Sr=new H,yn=new H,Fc=new ve,zc=new Sn,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],m=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ku=0,Oc=new H,Zi=new Sn,$n=new ve,Er=new H,Us=new H,Hu=new H,Vu=new Sn,Bc=new H(1,0,0),kc=new H(0,1,0),Hc=new H(0,0,1),Vc={type:"added"},Gu={type:"removed"},Ji={type:"childadded",child:null},na={type:"childremoved",child:null},Pe=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Ln,n=new Sn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new xe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Us,Er,this.up):$n.lookAt(Er,Us,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix($n),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),m=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new H(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new H,Zn=new H,ia=new H,Jn=new H,Ki=new H,ji=new H,Gc=new H,sa=new H,ra=new H,oa=new H,aa=new Ve,la=new Ve,ca=new Ve,pi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Zn.subVectors(n,e),ia.subVectors(t,e);let o=In.dot(In),a=In.dot(Zn),l=In.dot(ia),c=Zn.dot(Zn),h=Zn.dot(ia),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,u=(c*l-a*h)*m,g=(o*h-a*l)*m;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return aa.setScalar(0),la.setScalar(0),ca.setScalar(0),aa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(aa,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ca,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Zn.subVectors(t,e),In.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),ji.subVectors(r,n),sa.subVectors(t,n);let l=Ki.dot(sa),c=ji.dot(sa);if(l<=0&&c<=0)return e.copy(n);ra.subVectors(t,s);let h=Ki.dot(ra),d=ji.dot(ra);if(h>=0&&d<=h)return e.copy(s);let m=l*d-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ki,o);oa.subVectors(t,r);let u=Ki.dot(oa),g=ji.dot(oa);if(g>=0&&u<=g)return e.copy(r);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ji,a);let p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return Gc.subVectors(r,s),a=(d-h)/(d-h+(u-g)),e.copy(s).addScaledVector(Gc,a);let f=1/(p+_+m);return o=_*f,a=m*f,e.copy(n).addScaledVector(Ki,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},wr={h:0,s:0,l:0};function ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=ic(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Ee.fromWorkingColorSpace(an.copy(this),t),Math.round(en(an.r*255,0,255))*65536+Math.round(en(an.g*255,0,255))*256+Math.round(en(an.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=tn){Ee.fromWorkingColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(wr);let n=Xs(fi.h,wr.h,e),s=Xs(fi.s,wr.s,e),r=Xs(fi.l,wr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new se;se.NAMES=$h;var Wu=0,si=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Gn(),this.name="",this.blending=hs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mn=class extends si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new H,Tr=new Ot,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}};var oo=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ao=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xu=0,bn=new ve,fa=new Pe,Qi=new H,_n=new ii,Ns=new ii,Qe=new H,Le=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(_n.min,Ns.min),_n.expandByPoint(Qe),Qe.addVectors(_n.max,Ns.max),_n.expandByPoint(Qe)):(_n.expandByPoint(Ns.min),_n.expandByPoint(Ns.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),Qe.add(Qi)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new H,l[D]=new H;let c=new H,h=new H,d=new H,m=new Ot,u=new Ot,g=new Ot,_=new H,p=new H;function f(D,M,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,v),m.fromBufferAttribute(r,D),u.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),u.sub(m),g.sub(m);let b=1/(u.x*g.y-g.x*u.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(b),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(b),a[D].add(_),a[M].add(_),a[v].add(_),l[D].add(p),l[M].add(p),l[v].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let D=0,M=A.length;D<M;++D){let v=A[D],b=v.start,P=v.count;for(let w=b,E=b+P;w<E;w+=3)f(t.getX(w+0),t.getX(w+1),t.getX(w+2))}let x=new H,y=new H,B=new H,T=new H;function I(D){B.fromBufferAttribute(s,D),T.copy(B);let M=a[D];x.copy(M),x.sub(B.multiplyScalar(B.dot(M))).normalize(),y.crossVectors(T,M);let b=y.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,b)}for(let D=0,M=A.length;D<M;++D){let v=A[D],b=v.start,P=v.count;for(let w=b,E=b+P;w<E;w+=3)I(t.getX(w+0)),I(t.getX(w+1)),I(t.getX(w+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let m=0,u=t.count;m<u;m+=3){let g=t.getX(m+0),_=t.getX(m+1),p=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,u=e.count;m<u;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,m=new c.constructor(l.length*h),u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let f=0;f<h;f++)m[g++]=c[u++]}return new Ne(m,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let m=c[h],u=t(m,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,m=c.length;d<m;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let m=0,u=d.length;m<u;m++)h.push(d[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=new ve,Ti=new so,Ar=new _i,Xc=new H,Rr=new H,Cr=new H,Ir=new H,ua=new H,Pr=new H,qc=new H,Lr=new H,Ce=class extends Pe{constructor(t=new Le,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ua.fromBufferAttribute(d,t),o?Pr.addScaledVector(ua,h):Pr.addScaledVector(ua.sub(e),h))}e.add(Pr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(Ar.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ar,Xc)===null||Ti.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,m=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){let p=m[g],f=o[p.materialIndex],A=Math.max(p.start,u.start),x=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=A,B=x;y<B;y+=3){let T=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);s=Dr(this,f,t,n,c,h,d,T,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){let A=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=Dr(this,o,t,n,c,h,d,A,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=m.length;g<_;g++){let p=m[g],f=o[p.materialIndex],A=Math.max(p.start,u.start),x=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=A,B=x;y<B;y+=3){let T=y,I=y+1,D=y+2;s=Dr(this,f,t,n,c,h,d,T,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,f=_;p<f;p+=3){let A=p,x=p+1,y=p+2;s=Dr(this,o,t,n,c,h,d,A,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function qu(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;Lr.copy(a),Lr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lr);return c<e.near||c>e.far?null:{distance:c,point:Lr.clone(),object:i}}function Dr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Rr),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Ir);let h=qu(i,t,e,n,Rr,Cr,Ir,qc);if(h){let d=new H;pi.getBarycoord(qc,Rr,Cr,Ir,d),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,d,new Ot)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,d,new Ot)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,d,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new H,materialIndex:0};pi.getNormal(Rr,Cr,Ir,m.normal),h.face=m,h.barycoord=d}return h}var be=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],m=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function g(_,p,f,A,x,y,B,T,I,D,M){let v=y/I,b=B/D,P=y/2,w=B/2,E=T/2,O=I+1,N=D+1,V=0,k=0,ut=new H;for(let gt=0;gt<N;gt++){let U=gt*b-w;for(let xt=0;xt<O;xt++){let kt=xt*v-P;ut[_]=kt*A,ut[p]=U*x,ut[f]=E,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[p]=0,ut[f]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),d.push(xt/I),d.push(1-gt/D),V+=1}}for(let gt=0;gt<D;gt++)for(let U=0;U<I;U++){let xt=m+U+O*gt,kt=m+U+O*(gt+1),F=m+(U+1)+O*(gt+1),Y=m+(U+1)+O*gt;l.push(xt,kt,Y),l.push(kt,F,Y),k+=6}a.addGroup(u,k,M),u+=k,m+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function Yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var sc={clone:_s,merge:cn},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},lo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new H,Yc=new Ot,$c=new Ot,hn=class extends lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,$c),e.subVectors($c,Yc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ts=-90,es=1,ml=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new hn(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new hn(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new hn(ts,es,t,e);a.layers=this.layers,this.add(a);let l=new hn(ts,es,t,e);l.layers=this.layers,this.add(l);let c=new hn(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,m,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},co=class extends pn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:mi});r.uniforms.tEquirect.value=e;let o=new Ce(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=kn),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},da=new H,Ju=new H,Ku=new xe,jn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=da.subVectors(n,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(da).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new _i,Ur=new H,Ks=class{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],m=s[7],u=s[8],g=s[9],_=s[10],p=s[11],f=s[12],A=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,m-c,p-u,y-f).normalize(),n[1].setComponents(l+r,m+c,p+u,y+f).normalize(),n[2].setComponents(l+o,m+h,p+g,y+A).normalize(),n[3].setComponents(l-o,m-h,p-g,y-A).normalize(),n[4].setComponents(l-a,m-d,p-_,y-x).normalize(),e===Qn)n[5].setComponents(l+a,m+d,p+_,y+x).normalize();else if(e===to)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let m=0;for(let u=1;u<d.length;u++){let g=d[m],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++m,d[m]=_)}d.length=m+1;for(let u=0,g=d.length;u<g;u++){let _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sn=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,m=e/l,u=[],g=[],_=[],p=[];for(let f=0;f<h;f++){let A=f*m-o;for(let x=0;x<c;x++){let y=x*d-r;g.push(y,-A,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){let x=A+c*f,y=A+c*(f+1),B=A+1+c*(f+1),T=A+1+c*f;u.push(x,y,T),u.push(y,B,T)}this.setIndex(u),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Qu=`#ifdef USE_ALPHAHASH
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
}`,de={alphahash_fragment:Qu,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ad,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:fd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:xd,color_fragment:yd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:Md,common:bd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:wd,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Id,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:Xd,envmap_vertex:Nd,fog_vertex:Fd,fog_pars_vertex:zd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:$d,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:Qd,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:fp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:xp,normal_pars_fragment:yp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:Mp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:wp,opaque_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Ip,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:zp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:kp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:$p,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Kp,background_vert:jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:fm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:xm,meshnormal_vert:ym,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:bm,meshphysical_frag:Sm,meshtoon_vert:Em,meshtoon_frag:wm,points_vert:Tm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Im,sprite_frag:Pm},Kt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Bn={basic:{uniforms:cn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:cn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new se(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:cn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:cn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:cn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new se(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:cn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:cn([Kt.points,Kt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:cn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:cn([Kt.common,Kt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:cn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:cn([Kt.sprite,Kt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:cn([Kt.common,Kt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:cn([Kt.lights,Kt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Bn.physical={uniforms:cn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var Nr={r:0,b:0,g:0},Ri=new Ln,Lm=new ve;function Dm(i,t,e,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,h,d=null,m=0,u=null;function g(A){let x=A.isScene===!0?A.background:null;return x&&x.isTexture&&(x=(A.backgroundBlurriness>0?e:t).get(x)),x}function _(A){let x=!1,y=g(A);y===null?f(a,l):y&&y.isColor&&(f(y,1),x=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===No)?(h===void 0&&(h=new Ce(new be(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:_s(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(x.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Ri)),h.material.toneMapped=Ee.getTransfer(y.colorSpace)!==Ie,(d!==y||m!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,m=y.version,u=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ce(new sn(2,2),new un({name:"BackgroundMaterial",uniforms:_s(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ee.getTransfer(y.colorSpace)!==Ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,u=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,x){A.getRGB(Nr,Zh(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(A,x=1){a.set(A),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:_,addToRenderList:p}}function Um(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(v,b,P,w,E){let O=!1,N=d(w,P,b);r!==N&&(r=N,c(r.object)),O=u(v,w,P,E),O&&g(v,w,P,E),E!==null&&t.update(E,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,y(v,b,P,w),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(E).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,b,P){let w=P.wireframe===!0,E=n[v.id];E===void 0&&(E={},n[v.id]=E);let O=E[b.id];O===void 0&&(O={},E[b.id]=O);let N=O[w];return N===void 0&&(N=m(l()),O[w]=N),N}function m(v){let b=[],P=[],w=[];for(let E=0;E<e;E++)b[E]=0,P[E]=0,w[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:P,attributeDivisors:w,object:v,attributes:{},index:null}}function u(v,b,P,w){let E=r.attributes,O=b.attributes,N=0,V=P.getAttributes();for(let k in V)if(V[k].location>=0){let gt=E[k],U=O[k];if(U===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(U=v.instanceColor)),gt===void 0||gt.attribute!==U||U&&gt.data!==U.data)return!0;N++}return r.attributesNum!==N||r.index!==w}function g(v,b,P,w){let E={},O=b.attributes,N=0,V=P.getAttributes();for(let k in V)if(V[k].location>=0){let gt=O[k];gt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor));let U={};U.attribute=gt,gt&&gt.data&&(U.data=gt.data),E[k]=U,N++}r.attributes=E,r.attributesNum=N,r.index=w}function _(){let v=r.newAttributes;for(let b=0,P=v.length;b<P;b++)v[b]=0}function p(v){f(v,0)}function f(v,b){let P=r.newAttributes,w=r.enabledAttributes,E=r.attributeDivisors;P[v]=1,w[v]===0&&(i.enableVertexAttribArray(v),w[v]=1),E[v]!==b&&(i.vertexAttribDivisor(v,b),E[v]=b)}function A(){let v=r.newAttributes,b=r.enabledAttributes;for(let P=0,w=b.length;P<w;P++)b[P]!==v[P]&&(i.disableVertexAttribArray(P),b[P]=0)}function x(v,b,P,w,E,O,N){N===!0?i.vertexAttribIPointer(v,b,P,E,O):i.vertexAttribPointer(v,b,P,w,E,O)}function y(v,b,P,w){_();let E=w.attributes,O=P.getAttributes(),N=b.defaultAttributeValues;for(let V in O){let k=O[V];if(k.location>=0){let ut=E[V];if(ut===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){let gt=ut.normalized,U=ut.itemSize,xt=t.get(ut);if(xt===void 0)continue;let kt=xt.buffer,F=xt.type,Y=xt.bytesPerElement,j=F===i.INT||F===i.UNSIGNED_INT||ut.gpuType===Jl;if(ut.isInterleavedBufferAttribute){let X=ut.data,ct=X.stride,rt=ut.offset;if(X.isInstancedInterleavedBuffer){for(let At=0;At<k.locationSize;At++)f(k.location+At,X.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let At=0;At<k.locationSize;At++)p(k.location+At);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let At=0;At<k.locationSize;At++)x(k.location+At,U/k.locationSize,F,gt,ct*Y,(rt+U/k.locationSize*At)*Y,j)}else{if(ut.isInstancedBufferAttribute){for(let X=0;X<k.locationSize;X++)f(k.location+X,ut.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let X=0;X<k.locationSize;X++)p(k.location+X);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let X=0;X<k.locationSize;X++)x(k.location+X,U/k.locationSize,F,gt,U*Y,U/k.locationSize*X*Y,j)}}else if(N!==void 0){let gt=N[V];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(k.location,gt);break;case 3:i.vertexAttrib3fv(k.location,gt);break;case 4:i.vertexAttrib4fv(k.location,gt);break;default:i.vertexAttrib1fv(k.location,gt)}}}}A()}function B(){D();for(let v in n){let b=n[v];for(let P in b){let w=b[P];for(let E in w)h(w[E].object),delete w[E];delete b[P]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let P in b){let w=b[P];for(let E in w)h(w[E].object),delete w[E];delete b[P]}delete n[v.id]}function I(v){for(let b in n){let P=n[b];if(P[v.id]===void 0)continue;let w=P[v.id];for(let E in w)h(w[E].object),delete w[E];delete P[v.id]}}function D(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:p,disableUnusedAttributes:A}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function l(c,h,d,m){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],m[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*m[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==vn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ei&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Hn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:A,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:B,maxSamples:T}}function zm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new jn,a=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let u=d.length!==0||m||n!==0||s;return s=m,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){e=h(d,m,0)},this.setState=function(d,m,u){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let A=r?0:n,x=A*4,y=f.clippingState||null;l.value=y,y=h(g,m,x,u);for(let B=0;B!==x;++B)y[B]=e[B];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,m,u,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let f=u+_*4,A=m.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,y=u;x!==_;++x,y+=4)o.copy(d[x]).applyMatrix4(A,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Om(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=ms:a===Fa&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Na||a===Fa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ho=class extends lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,Zc=[.125,.215,.35,.446,.526,.582],Li=20,pa=new ho,Jc=new se,ma=null,ga=0,xa=0,ya=!1,Ii=(1+Math.sqrt(5))/2,ns=1/Ii,Kc=[new H(-Ii,ns,0),new H(Ii,ns,0),new H(-ns,0,Ii),new H(ns,0,Ii),new H(0,Ii,-ns),new H(0,Ii,ns),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],fo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,xa),this._renderer.xr.enabled=ya,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:cr,format:vn,colorSpace:Es,depthBuffer:!1},s=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bm(r)),this._blurMaterial=km(r,t,e)}return s}_compileMaterial(t){let e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s){let a=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Jc),h.toneMapping=Vn,h.autoClear=!1;let u=new mn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Ce(new be,u),_=!1,p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,_=!0):(u.color.copy(Jc),_=!0);for(let f=0;f<6;f++){let A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;Fr(s,A*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(s-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ce(this._lodPlanes[s],c),m=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Li-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Li;p>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);let f=[],A=0;for(let I=0;I<Li;++I){let D=I/_,M=Math.exp(-D*D/2);f.push(M),I===0?A+=M:I<p&&(A+=2*M)}for(let I=0;I<f.length;I++)f[I]=f[I]/A;m.envMap.value=t.texture,m.samples.value=p,m.weights.value=f,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:x}=this;m.dTheta.value=g,m.mipInt.value=x-n;let y=this._sizeLods[s],B=3*y*(s>x-ls?s-x+ls:0),T=4*(this._cubeSize-y);Fr(e,B,T,3*y,2*y),l.setRenderTarget(e),l.render(d,pa)}};function Bm(i){let t=[],e=[],n=[],s=i,r=i-ls+1+Zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ls?l=Zc[o-i+ls-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,m=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,p=2,f=1,A=new Float32Array(_*g*u),x=new Float32Array(p*g*u),y=new Float32Array(f*g*u);for(let T=0;T<u;T++){let I=T%3*2/3-1,D=T>2?0:-1,M=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];A.set(M,_*g*T),x.set(m,p*g*T);let v=[T,T,T,T,T,T];y.set(v,f*g*T)}let B=new Le;B.setAttribute("position",new Ne(A,_)),B.setAttribute("uv",new Ne(x,p)),B.setAttribute("faceIndex",new Ne(y,f)),t.push(B),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){let n=new Float32Array(Li),s=new H(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

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
	`}function Hm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Na||l===Fa,h=l===ms||l===gs;if(c||h){let d=t.get(a),m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new fo(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(e===null&&(e=new fo(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){let s={},r=new WeakMap;function o(d){let m=d.target;m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);for(let g in m.morphAttributes){let _=m.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}m.removeEventListener("dispose",o),delete s[m.id];let u=r.get(m);u&&(t.remove(u),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(d){let m=d.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let g in u){let _=u[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(d){let m=[],u=d.index,g=d.attributes.position,_=0;if(u!==null){let A=u.array;_=u.version;for(let x=0,y=A.length;x<y;x+=3){let B=A[x+0],T=A[x+1],I=A[x+2];m.push(B,T,T,I,I,B)}}else if(g!==void 0){let A=g.array;_=g.version;for(let x=0,y=A.length/3-1;x<y;x+=3){let B=x+0,T=x+1,I=x+2;m.push(B,T,T,I,I,B)}}else return;let p=new(Yh(m)?ao:oo)(m,1);p.version=_;let f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){let m=r.get(d);if(m){let u=d.index;u!==null&&m.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*o),e.update(u,n,1)}function c(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*o,g),e.update(u,n,g))}function h(m,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let p=0;for(let f=0;f<g;f++)p+=u[f];e.update(p,n,1)}function d(m,u,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<m.length;f++)c(m[f]/o,u[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,m,0,_,0,g);let f=0;for(let A=0;A<g;A++)f+=u[A]*_[A];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Xm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){let n=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==d){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};m!==void 0&&m.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],x=0;u===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,B=1;y>t.maxTextureSize&&(B=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*B*4*d),I=new io(T,y,B,d);I.type=Hn,I.needsUpdate=!0;let D=x*4;for(let v=0;v<d;v++){let b=p[v],P=f[v],w=A[v],E=y*B*4*v;for(let O=0;O<b.count;O++){let N=O*D;u===!0&&(s.fromBufferAttribute(b,O),T[E+N+0]=s.x,T[E+N+1]=s.y,T[E+N+2]=s.z,T[E+N+3]=0),g===!0&&(s.fromBufferAttribute(P,O),T[E+N+4]=s.x,T[E+N+5]=s.y,T[E+N+6]=s.z,T[E+N+7]=0),_===!0&&(s.fromBufferAttribute(w,O),T[E+N+8]=s.x,T[E+N+9]=s.y,T[E+N+10]=s.z,T[E+N+11]=w.itemSize===4?s.w:1)}}m={count:d,texture:I,size:new Ot(y,B)},n.set(a,m),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Ym(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var uo=class extends pn{constructor(t,e,n,s,r,o,a,l,c,h=fs){if(h!==fs&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Fi),n===void 0&&h===ys&&(n=xs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kh=new pn,eh=new uo(1,1),jh=new io,Qh=new pl,tf=new co,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=ih[t];e===void 0&&(e=new Int32Array(t),ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Je(e,n)}}function Qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Je(e,n)}}function t0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Je(e,n)}}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function r0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function c0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=qh,r=eh):r=Kh,e.setTexture2D(t||r,s)}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function f0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function d0(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Km;case 35674:return jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return u0}}function p0(i,t){i.uniform1fv(this.addr,t)}function m0(i,t){let e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function g0(i,t){let e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){let e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){let e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _0(i,t){let e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v0(i,t){let e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M0(i,t){i.uniform1iv(this.addr,t)}function b0(i,t){i.uniform2iv(this.addr,t)}function S0(i,t){i.uniform3iv(this.addr,t)}function E0(i,t){i.uniform4iv(this.addr,t)}function w0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function A0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function C0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Kh,r[o])}function I0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qh,r[o])}function P0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tf,r[o])}function L0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jh,r[o])}function D0(i){switch(i){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return x0;case 35674:return y0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return M0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}},yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},_a=/(\w+)(\])?(\[|\.)?/g;function ah(i,t){i.seq.push(t),i.map[t.id]=t}function U0(i,t,e){let n=i.name,s=n.length;for(_a.lastIndex=0;;){let r=_a.exec(n),o=_a.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ah(e,c===void 0?new xl(a,i,t):new yl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new _l(a),ah(e,d)),e=d}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);U0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var N0=37297,F0=0;function z0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ch=new xe;function O0(i){Ee._getMatrix(ch,Ee.workingColorSpace,i);let t=`mat3( ${ch.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+z0(i.getShaderSource(t),o)}else return s}function B0(i,t){let e=O0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function k0(i,t){let e;switch(t){case Kf:e="Linear";break;case jf:e="Reinhard";break;case Qf:e="Cineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case iu:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zr=new H;function H0(){Ee.getLuminanceCoefficients(zr);let i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function G0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function fh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(X0,Y0)}var q0=new Map;function Y0(i,t){let e=de[t];if(e===void 0){let n=q0.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace($0,Z0)}function Z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function J0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Zf:t="ENVMAP_BLENDING_MIX";break;case Jf:t="ENVMAP_BLENDING_ADD";break}return t}function tg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=J0(e),c=K0(e),h=j0(e),d=Q0(e),m=tg(e),u=V0(e),g=G0(r),_=s.createProgram(),p,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),f.length>0&&(f+=`
`)):(p=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),f=[ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?de.tonemapping_pars_fragment:"",e.toneMapping!==Vn?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),H0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=vl(o),o=fh(o,e),o=uh(o,e),a=vl(a),a=fh(a,e),a=uh(a,e),o=dh(o),a=dh(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=A+p+o,y=A+f+a,B=lh(s,s.VERTEX_SHADER,x),T=lh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,B),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(b){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_).trim(),w=s.getShaderInfoLog(B).trim(),E=s.getShaderInfoLog(T).trim(),O=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,T);else{let V=hh(s,B,"vertex"),k=hh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+V+`
`+k)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(w===""||E==="")&&(N=!1);N&&(b.diagnostics={runnable:O,programLog:P,vertexShader:{log:w,prefix:p},fragmentShader:{log:E,prefix:f}})}s.deleteShader(B),s.deleteShader(T),D=new ds(s,_),M=W0(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,N0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=T,this}var ng=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}};function ig(i,t,e,n,s,r,o){let a=new ro,l=new Ml,c=new Set,h=[],d=s.logarithmicDepthBuffer,m=s.vertexTextures,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,v,b,P,w){let E=P.fog,O=w.geometry,N=M.isMeshStandardMaterial?P.environment:null,V=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),k=V&&V.mapping===No?V.image.height:null,ut=g[M.type];M.precision!==null&&(u=s.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,U=gt!==void 0?gt.length:0,xt=0;O.morphAttributes.position!==void 0&&(xt=1),O.morphAttributes.normal!==void 0&&(xt=2),O.morphAttributes.color!==void 0&&(xt=3);let kt,F,Y,j;if(ut){let Q=Bn[ut];kt=Q.vertexShader,F=Q.fragmentShader}else kt=M.vertexShader,F=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let X=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),rt=w.isInstancedMesh===!0,At=w.isBatchedMesh===!0,Ht=!!M.map,at=!!M.matcap,mt=!!V,L=!!M.aoMap,lt=!!M.lightMap,et=!!M.bumpMap,vt=!!M.normalMap,Lt=!!M.displacementMap,$=!!M.emissiveMap,Ft=!!M.metalnessMap,z=!!M.roughnessMap,R=M.anisotropy>0,ht=M.clearcoat>0,Tt=M.dispersion>0,It=M.iridescence>0,q=M.sheen>0,ft=M.transmission>0,ot=R&&!!M.anisotropyMap,bt=ht&&!!M.clearcoatMap,St=ht&&!!M.clearcoatNormalMap,Rt=ht&&!!M.clearcoatRoughnessMap,Pt=It&&!!M.iridescenceMap,Xt=It&&!!M.iridescenceThicknessMap,jt=q&&!!M.sheenColorMap,Zt=q&&!!M.sheenRoughnessMap,fe=!!M.specularMap,ie=!!M.specularColorMap,_e=!!M.specularIntensityMap,nt=ft&&!!M.transmissionMap,qt=ft&&!!M.thicknessMap,Ct=!!M.gradientMap,Dt=!!M.alphaMap,S=M.alphaTest>0,G=!!M.alphaHash,Z=!!M.extensions,it=Vn;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(it=i.toneMapping);let _t={shaderID:ut,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:F,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:At,batchingColor:At&&w._colorsTexture!==null,instancing:rt,instancingColor:rt&&w.instanceColor!==null,instancingMorph:rt&&w.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Es,alphaToCoverage:!!M.alphaToCoverage,map:Ht,matcap:at,envMap:mt,envMapMode:mt&&V.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:lt,bumpMap:et,normalMap:vt,displacementMap:m&&Lt,emissiveMap:$,normalMapObjectSpace:vt&&M.normalMapType===au,normalMapTangentSpace:vt&&M.normalMapType===Xh,metalnessMap:Ft,roughnessMap:z,anisotropy:R,anisotropyMap:ot,clearcoat:ht,clearcoatMap:bt,clearcoatNormalMap:St,clearcoatRoughnessMap:Rt,dispersion:Tt,iridescence:It,iridescenceMap:Pt,iridescenceThicknessMap:Xt,sheen:q,sheenColorMap:jt,sheenRoughnessMap:Zt,specularMap:fe,specularColorMap:ie,specularIntensityMap:_e,transmission:ft,transmissionMap:nt,thicknessMap:qt,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===hs&&M.alphaToCoverage===!1,alphaMap:Dt,alphaTest:S,alphaHash:G,combine:M.combine,mapUv:Ht&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:lt&&_(M.lightMap.channel),bumpMapUv:et&&_(M.bumpMap.channel),normalMapUv:vt&&_(M.normalMap.channel),displacementMapUv:Lt&&_(M.displacementMap.channel),emissiveMapUv:$&&_(M.emissiveMap.channel),metalnessMapUv:Ft&&_(M.metalnessMap.channel),roughnessMapUv:z&&_(M.roughnessMap.channel),anisotropyMapUv:ot&&_(M.anisotropyMap.channel),clearcoatMapUv:bt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:St&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&_(M.sheenRoughnessMap.channel),specularMapUv:fe&&_(M.specularMap.channel),specularColorMapUv:ie&&_(M.specularColorMap.channel),specularIntensityMapUv:_e&&_(M.specularIntensityMap.channel),transmissionMapUv:nt&&_(M.transmissionMap.channel),thicknessMapUv:qt&&_(M.thicknessMap.channel),alphaMapUv:Dt&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(vt||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!O.attributes.uv&&(Ht||Dt),fog:!!E,useFog:M.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ct,skinning:w.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:xt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Ht&&M.map.isVideoTexture===!0&&Ee.getTransfer(M.map.colorSpace)===Ie,decodeVideoTextureEmissive:$&&M.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(M.emissiveMap.colorSpace)===Ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===We,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Z&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&M.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function f(M){let v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(let b in M.defines)v.push(b),v.push(M.defines[b]);return M.isRawShaderMaterial===!1&&(A(v,M),x(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function A(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function x(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let v=g[M.type],b;if(v){let P=Bn[v];b=sc.clone(P.uniforms)}else b=M.uniforms;return b}function B(M,v){let b;for(let P=0,w=h.length;P<w;P++){let E=h[P];if(E.cacheKey===v){b=E,++b.usedTimes;break}}return b===void 0&&(b=new eg(i,v,M,r),h.push(b)),b}function T(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function I(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:B,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:D}}function sg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,m,u,g,_,p){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:m,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=f):(f.id=d.id,f.object=d,f.geometry=m,f.material=u,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),t++,f}function a(d,m,u,g,_,p){let f=o(d,m,u,g,_,p);u.transmission>0?n.push(f):u.transparent===!0?s.push(f):e.push(f)}function l(d,m,u,g,_,p){let f=o(d,m,u,g,_,p);u.transmission>0?n.unshift(f):u.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,m){e.length>1&&e.sort(d||rg),n.length>1&&n.sort(m||mh),s.length>1&&s.sort(m||mh)}function h(){for(let d=t,m=i.length;d<m;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function og(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ag(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new se};break;case"SpotLight":e={position:new H,direction:new H,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function lg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cg=0;function hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fg(i){let t=new ag,e=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new ve,o=new ve;function a(c){let h=0,d=0,m=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,_=0,p=0,f=0,A=0,x=0,y=0,B=0,T=0,I=0;c.sort(hg);for(let M=0,v=c.length;M<v;M++){let b=c[M],P=b.color,w=b.intensity,E=b.distance,O=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=P.r*w,d+=P.g*w,m+=P.b*w;else if(b.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(b.sh.coefficients[N],w);I++}else if(b.isDirectionalLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let V=b.shadow,k=e.get(b);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[u]=k,n.directionalShadowMap[u]=O,n.directionalShadowMatrix[u]=b.shadow.matrix,A++}n.directional[u]=N,u++}else if(b.isSpotLight){let N=t.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(P).multiplyScalar(w),N.distance=E,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,n.spot[_]=N;let V=b.shadow;if(b.map&&(n.spotLightMap[B]=b.map,B++,V.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[_]=V.matrix,b.castShadow){let k=e.get(b);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=O,y++}_++}else if(b.isRectAreaLight){let N=t.get(b);N.color.copy(P).multiplyScalar(w),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=N,p++}else if(b.isPointLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){let V=b.shadow,k=e.get(b);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=b.shadow.matrix,x++}n.point[g]=N,g++}else if(b.isHemisphereLight){let N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(w),N.groundColor.copy(b.groundColor).multiplyScalar(w),n.hemi[f]=N,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Kt.LTC_FLOAT_1,n.rectAreaLTC2=Kt.LTC_FLOAT_2):(n.rectAreaLTC1=Kt.LTC_HALF_1,n.rectAreaLTC2=Kt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;let D=n.hash;(D.directionalLength!==u||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==A||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==B||D.numLightProbes!==I)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+B-T,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,D.directionalLength=u,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=A,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=B,D.numLightProbes=I,n.version=cg++)}function l(c,h){let d=0,m=0,u=0,g=0,_=0,p=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){let x=c[f];if(x.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(x.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),m++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function xh(i){let t=new fg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ug(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xh(i),t.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sl=class extends si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dg=`void main() {
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
}`;function mg(i,t,e){let n=new Ks,s=new Ot,r=new Ot,o=new Ve,a=new Sl({depthPacking:ou}),l=new El,c={},h=e.maxTextureSize,d={[xi]:nn,[nn]:xi,[We]:We},m=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:dg,fragmentShader:pg}),u=m.clone();u.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ce(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let f=this.type;this.render=function(T,I,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),P=i.state;P.setBlending(mi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let w=f!==Kn&&this.type===Kn,E=f===Kn&&this.type!==Kn;for(let O=0,N=T.length;O<N;O++){let V=T[O],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ut=k.getFrameExtents();if(s.multiply(ut),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,k.mapSize.y=r.y)),k.map===null||w===!0||E===!0){let U=this.type!==Kn?{minFilter:fn,magFilter:fn}:{};k.map!==null&&k.map.dispose(),k.map=new ni(s.x,s.y,U),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let gt=k.getViewportCount();for(let U=0;U<gt;U++){let xt=k.getViewport(U);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),P.viewport(o),k.updateMatrices(V,U),n=k.getFrustum(),y(I,D,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Kn&&A(k,D),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,v,b)};function A(T,I){let D=t.update(_);m.defines.VSM_SAMPLES!==T.blurSamples&&(m.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ni(s.x,s.y)),m.uniforms.shadow_pass.value=T.map.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,D,m,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,D,u,_,null)}function x(T,I,D,M){let v=null,b=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)v=b;else if(v=D.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let P=v.uuid,w=I.uuid,E=c[P];E===void 0&&(E={},c[P]=E);let O=E[w];O===void 0&&(O=v.clone(),E[w]=O,I.addEventListener("dispose",B)),v=O}if(v.visible=I.visible,v.wireframe=I.wireframe,M===Kn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:d[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let P=i.properties.get(v);P.light=D}return v}function y(T,I,D,M,v){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let w=t.update(T),E=T.material;if(Array.isArray(E)){let O=w.groups;for(let N=0,V=O.length;N<V;N++){let k=O[N],ut=E[k.materialIndex];if(ut&&ut.visible){let gt=x(T,ut,M,v);T.onBeforeShadow(i,T,I,D,w,gt,k),i.renderBufferDirect(D,null,w,gt,T,k),T.onAfterShadow(i,T,I,D,w,gt,k)}}}else if(E.visible){let O=x(T,E,M,v);T.onBeforeShadow(i,T,I,D,w,O,null),i.renderBufferDirect(D,null,w,O,T,null),T.onAfterShadow(i,T,I,D,w,O,null)}}let P=T.children;for(let w=0,E=P.length;w<E;w++)y(P[w],I,D,M,v)}function B(T){T.target.removeEventListener("dispose",B);for(let D in c){let M=c[D],v=T.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}var gg={[Ra]:Ca,[Ia]:Da,[Pa]:Ua,[ps]:La,[Ca]:Ra,[Da]:Ia,[Ua]:Pa,[La]:ps};function xg(i,t){function e(){let nt=!1,qt=new Ve,Ct=null,Dt=new Ve(0,0,0,0);return{setMask:function(S){Ct!==S&&!nt&&(i.colorMask(S,S,S,S),Ct=S)},setLocked:function(S){nt=S},setClear:function(S,G,Z,it,_t){_t===!0&&(S*=it,G*=it,Z*=it),qt.set(S,G,Z,it),Dt.equals(qt)===!1&&(i.clearColor(S,G,Z,it),Dt.copy(qt))},reset:function(){nt=!1,Ct=null,Dt.set(-1,0,0,0)}}}function n(){let nt=!1,qt=!1,Ct=null,Dt=null,S=null;return{setReversed:function(G){if(qt!==G){let Z=t.get("EXT_clip_control");qt?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);let it=S;S=null,this.setClear(it)}qt=G},getReversed:function(){return qt},setTest:function(G){G?X(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(G){Ct!==G&&!nt&&(i.depthMask(G),Ct=G)},setFunc:function(G){if(qt&&(G=gg[G]),Dt!==G){switch(G){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=G}},setLocked:function(G){nt=G},setClear:function(G){S!==G&&(qt&&(G=1-G),i.clearDepth(G),S=G)},reset:function(){nt=!1,Ct=null,Dt=null,S=null,qt=!1}}}function s(){let nt=!1,qt=null,Ct=null,Dt=null,S=null,G=null,Z=null,it=null,_t=null;return{setTest:function(Q){nt||(Q?X(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Q){qt!==Q&&!nt&&(i.stencilMask(Q),qt=Q)},setFunc:function(Q,wt,Wt){(Ct!==Q||Dt!==wt||S!==Wt)&&(i.stencilFunc(Q,wt,Wt),Ct=Q,Dt=wt,S=Wt)},setOp:function(Q,wt,Wt){(G!==Q||Z!==wt||it!==Wt)&&(i.stencilOp(Q,wt,Wt),G=Q,Z=wt,it=Wt)},setLocked:function(Q){nt=Q},setClear:function(Q){_t!==Q&&(i.clearStencil(Q),_t=Q)},reset:function(){nt=!1,qt=null,Ct=null,Dt=null,S=null,G=null,Z=null,it=null,_t=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},m=new WeakMap,u=[],g=null,_=!1,p=null,f=null,A=null,x=null,y=null,B=null,T=null,I=new se(0,0,0),D=0,M=!1,v=null,b=null,P=null,w=null,E=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,V=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=V>=2);let ut=null,gt={},U=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),kt=new Ve().fromArray(U),F=new Ve().fromArray(xt);function Y(nt,qt,Ct,Dt){let S=new Uint8Array(4),G=i.createTexture();i.bindTexture(nt,G),i.texParameteri(nt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(nt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Z=0;Z<Ct;Z++)nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?i.texImage3D(qt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,S):i.texImage2D(qt+Z,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,S);return G}let j={};j[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(ps),et(!1),vt(_c),X(i.CULL_FACE),L(mi);function X(nt){h[nt]!==!0&&(i.enable(nt),h[nt]=!0)}function ct(nt){h[nt]!==!1&&(i.disable(nt),h[nt]=!1)}function rt(nt,qt){return d[nt]!==qt?(i.bindFramebuffer(nt,qt),d[nt]=qt,nt===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=qt),nt===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=qt),!0):!1}function At(nt,qt){let Ct=u,Dt=!1;if(nt){Ct=m.get(qt),Ct===void 0&&(Ct=[],m.set(qt,Ct));let S=nt.textures;if(Ct.length!==S.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let G=0,Z=S.length;G<Z;G++)Ct[G]=i.COLOR_ATTACHMENT0+G;Ct.length=S.length,Dt=!0}}else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(Ct)}function Ht(nt){return g!==nt?(i.useProgram(nt),g=nt,!0):!1}let at={[Pi]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Df]:i.FUNC_REVERSE_SUBTRACT};at[Uf]=i.MIN,at[Nf]=i.MAX;let mt={[Ff]:i.ZERO,[zf]:i.ONE,[Of]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Vf]:i.DST_COLOR,[kf]:i.DST_ALPHA,[Bf]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Gf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[$f]:i.ONE_MINUS_CONSTANT_ALPHA};function L(nt,qt,Ct,Dt,S,G,Z,it,_t,Q){if(nt===mi){_===!0&&(ct(i.BLEND),_=!1);return}if(_===!1&&(X(i.BLEND),_=!0),nt!==Pf){if(nt!==p||Q!==M){if((f!==Pi||y!==Pi)&&(i.blendEquation(i.FUNC_ADD),f=Pi,y=Pi),Q)switch(nt){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}else switch(nt){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",nt);break}A=null,x=null,B=null,T=null,I.set(0,0,0),D=0,p=nt,M=Q}return}S=S||qt,G=G||Ct,Z=Z||Dt,(qt!==f||S!==y)&&(i.blendEquationSeparate(at[qt],at[S]),f=qt,y=S),(Ct!==A||Dt!==x||G!==B||Z!==T)&&(i.blendFuncSeparate(mt[Ct],mt[Dt],mt[G],mt[Z]),A=Ct,x=Dt,B=G,T=Z),(it.equals(I)===!1||_t!==D)&&(i.blendColor(it.r,it.g,it.b,_t),I.copy(it),D=_t),p=nt,M=!1}function lt(nt,qt){nt.side===We?ct(i.CULL_FACE):X(i.CULL_FACE);let Ct=nt.side===nn;qt&&(Ct=!Ct),et(Ct),nt.blending===hs&&nt.transparent===!1?L(mi):L(nt.blending,nt.blendEquation,nt.blendSrc,nt.blendDst,nt.blendEquationAlpha,nt.blendSrcAlpha,nt.blendDstAlpha,nt.blendColor,nt.blendAlpha,nt.premultipliedAlpha),o.setFunc(nt.depthFunc),o.setTest(nt.depthTest),o.setMask(nt.depthWrite),r.setMask(nt.colorWrite);let Dt=nt.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(nt.stencilWriteMask),a.setFunc(nt.stencilFunc,nt.stencilRef,nt.stencilFuncMask),a.setOp(nt.stencilFail,nt.stencilZFail,nt.stencilZPass)),$(nt.polygonOffset,nt.polygonOffsetFactor,nt.polygonOffsetUnits),nt.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(nt){v!==nt&&(nt?i.frontFace(i.CW):i.frontFace(i.CCW),v=nt)}function vt(nt){nt!==Cf?(X(i.CULL_FACE),nt!==b&&(nt===_c?i.cullFace(i.BACK):nt===If?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),b=nt}function Lt(nt){nt!==P&&(N&&i.lineWidth(nt),P=nt)}function $(nt,qt,Ct){nt?(X(i.POLYGON_OFFSET_FILL),(w!==qt||E!==Ct)&&(i.polygonOffset(qt,Ct),w=qt,E=Ct)):ct(i.POLYGON_OFFSET_FILL)}function Ft(nt){nt?X(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function z(nt){nt===void 0&&(nt=i.TEXTURE0+O-1),ut!==nt&&(i.activeTexture(nt),ut=nt)}function R(nt,qt,Ct){Ct===void 0&&(ut===null?Ct=i.TEXTURE0+O-1:Ct=ut);let Dt=gt[Ct];Dt===void 0&&(Dt={type:void 0,texture:void 0},gt[Ct]=Dt),(Dt.type!==nt||Dt.texture!==qt)&&(ut!==Ct&&(i.activeTexture(Ct),ut=Ct),i.bindTexture(nt,qt||j[nt]),Dt.type=nt,Dt.texture=qt)}function ht(){let nt=gt[ut];nt!==void 0&&nt.type!==void 0&&(i.bindTexture(nt.type,null),nt.type=void 0,nt.texture=void 0)}function Tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function It(){try{i.compressedTexImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function St(){try{i.texStorage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Rt(){try{i.texStorage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(nt){console.error("THREE.WebGLState:",nt)}}function jt(nt){kt.equals(nt)===!1&&(i.scissor(nt.x,nt.y,nt.z,nt.w),kt.copy(nt))}function Zt(nt){F.equals(nt)===!1&&(i.viewport(nt.x,nt.y,nt.z,nt.w),F.copy(nt))}function fe(nt,qt){let Ct=c.get(qt);Ct===void 0&&(Ct=new WeakMap,c.set(qt,Ct));let Dt=Ct.get(nt);Dt===void 0&&(Dt=i.getUniformBlockIndex(qt,nt.name),Ct.set(nt,Dt))}function ie(nt,qt){let Dt=c.get(qt).get(nt);l.get(qt)!==Dt&&(i.uniformBlockBinding(qt,Dt,nt.__bindingPointIndex),l.set(qt,Dt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,gt={},d={},m=new WeakMap,u=[],g=null,_=!1,p=null,f=null,A=null,x=null,y=null,B=null,T=null,I=new se(0,0,0),D=0,M=!1,v=null,b=null,P=null,w=null,E=null,kt.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:ct,bindFramebuffer:rt,drawBuffers:At,useProgram:Ht,setBlending:L,setMaterial:lt,setFlipSided:et,setCullFace:vt,setLineWidth:Lt,setPolygonOffset:$,setScissorTest:Ft,activeTexture:z,bindTexture:R,unbindTexture:ht,compressedTexImage2D:Tt,compressedTexImage3D:It,texImage2D:Pt,texImage3D:Xt,updateUBOMapping:fe,uniformBlockBinding:ie,texStorage2D:St,texStorage3D:Rt,texSubImage2D:q,texSubImage3D:ft,compressedTexSubImage2D:ot,compressedTexSubImage3D:bt,scissor:jt,viewport:Zt,reset:_e}}function yh(i,t,e,n){let s=yg(n);switch(e){case Bh:return i*t;case Hh:return i*t;case Vh:return i*t*2;case Ql:return i*t/s.components*s.byteLength;case tc:return i*t/s.components*s.byteLength;case Gh:return i*t*2/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case kh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case nc:return i*t*4/s.components*s.byteLength;case $r:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case jr:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wh:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yg(i){switch(i){case ei:case Fh:return{byteLength:1,components:1};case Zs:case zh:case cr:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case Fi:case Jl:case Hn:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _g(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,d,m=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,R){return u?new OffscreenCanvas(z,R):eo("canvas")}function _(z,R,ht){let Tt=1,It=Ft(z);if((It.width>ht||It.height>ht)&&(Tt=ht/Math.max(It.width,It.height)),Tt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let q=Math.floor(Tt*It.width),ft=Math.floor(Tt*It.height);d===void 0&&(d=g(q,ft));let ot=R?g(q,ft):d;return ot.width=q,ot.height=ft,ot.getContext("2d").drawImage(z,0,0,q,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+It.width+"x"+It.height+") to ("+q+"x"+ft+")."),ot}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+It.width+"x"+It.height+")."),z;return z}function p(z){return z.generateMipmaps}function f(z){i.generateMipmap(z)}function A(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(z,R,ht,Tt,It=!1){if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let q=R;if(R===i.RED&&(ht===i.FLOAT&&(q=i.R32F),ht===i.HALF_FLOAT&&(q=i.R16F),ht===i.UNSIGNED_BYTE&&(q=i.R8)),R===i.RED_INTEGER&&(ht===i.UNSIGNED_BYTE&&(q=i.R8UI),ht===i.UNSIGNED_SHORT&&(q=i.R16UI),ht===i.UNSIGNED_INT&&(q=i.R32UI),ht===i.BYTE&&(q=i.R8I),ht===i.SHORT&&(q=i.R16I),ht===i.INT&&(q=i.R32I)),R===i.RG&&(ht===i.FLOAT&&(q=i.RG32F),ht===i.HALF_FLOAT&&(q=i.RG16F),ht===i.UNSIGNED_BYTE&&(q=i.RG8)),R===i.RG_INTEGER&&(ht===i.UNSIGNED_BYTE&&(q=i.RG8UI),ht===i.UNSIGNED_SHORT&&(q=i.RG16UI),ht===i.UNSIGNED_INT&&(q=i.RG32UI),ht===i.BYTE&&(q=i.RG8I),ht===i.SHORT&&(q=i.RG16I),ht===i.INT&&(q=i.RG32I)),R===i.RGB_INTEGER&&(ht===i.UNSIGNED_BYTE&&(q=i.RGB8UI),ht===i.UNSIGNED_SHORT&&(q=i.RGB16UI),ht===i.UNSIGNED_INT&&(q=i.RGB32UI),ht===i.BYTE&&(q=i.RGB8I),ht===i.SHORT&&(q=i.RGB16I),ht===i.INT&&(q=i.RGB32I)),R===i.RGBA_INTEGER&&(ht===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),ht===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),ht===i.UNSIGNED_INT&&(q=i.RGBA32UI),ht===i.BYTE&&(q=i.RGBA8I),ht===i.SHORT&&(q=i.RGBA16I),ht===i.INT&&(q=i.RGBA32I)),R===i.RGB&&ht===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),R===i.RGBA){let ft=It?Fo:Ee.getTransfer(Tt);ht===i.FLOAT&&(q=i.RGBA32F),ht===i.HALF_FLOAT&&(q=i.RGBA16F),ht===i.UNSIGNED_BYTE&&(q=ft===Ie?i.SRGB8_ALPHA8:i.RGBA8),ht===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),ht===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(z,R){let ht;return z?R===null||R===Fi||R===xs?ht=i.DEPTH24_STENCIL8:R===Hn?ht=i.DEPTH32F_STENCIL8:R===Zs&&(ht=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Fi||R===xs?ht=i.DEPTH_COMPONENT24:R===Hn?ht=i.DEPTH_COMPONENT32F:R===Zs&&(ht=i.DEPTH_COMPONENT16),ht}function B(z,R){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==fn&&z.minFilter!==kn?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function T(z){let R=z.target;R.removeEventListener("dispose",T),D(R),R.isVideoTexture&&h.delete(R)}function I(z){let R=z.target;R.removeEventListener("dispose",I),v(R)}function D(z){let R=n.get(z);if(R.__webglInit===void 0)return;let ht=z.source,Tt=m.get(ht);if(Tt){let It=Tt[R.__cacheKey];It.usedTimes--,It.usedTimes===0&&M(z),Object.keys(Tt).length===0&&m.delete(ht)}n.remove(z)}function M(z){let R=n.get(z);i.deleteTexture(R.__webglTexture);let ht=z.source,Tt=m.get(ht);delete Tt[R.__cacheKey],o.memory.textures--}function v(z){let R=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Tt=0;Tt<6;Tt++){if(Array.isArray(R.__webglFramebuffer[Tt]))for(let It=0;It<R.__webglFramebuffer[Tt].length;It++)i.deleteFramebuffer(R.__webglFramebuffer[Tt][It]);else i.deleteFramebuffer(R.__webglFramebuffer[Tt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Tt])}else{if(Array.isArray(R.__webglFramebuffer))for(let Tt=0;Tt<R.__webglFramebuffer.length;Tt++)i.deleteFramebuffer(R.__webglFramebuffer[Tt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Tt=0;Tt<R.__webglColorRenderbuffer.length;Tt++)R.__webglColorRenderbuffer[Tt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Tt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let ht=z.textures;for(let Tt=0,It=ht.length;Tt<It;Tt++){let q=n.get(ht[Tt]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(ht[Tt])}n.remove(z)}let b=0;function P(){b=0}function w(){let z=b;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),b+=1,z}function E(z){let R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function O(z,R){let ht=n.get(z);if(z.isVideoTexture&&Lt(z),z.isRenderTargetTexture===!1&&z.version>0&&ht.__version!==z.version){let Tt=z.image;if(Tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(ht,z,R);return}}e.bindTexture(i.TEXTURE_2D,ht.__webglTexture,i.TEXTURE0+R)}function N(z,R){let ht=n.get(z);if(z.version>0&&ht.__version!==z.version){F(ht,z,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ht.__webglTexture,i.TEXTURE0+R)}function V(z,R){let ht=n.get(z);if(z.version>0&&ht.__version!==z.version){F(ht,z,R);return}e.bindTexture(i.TEXTURE_3D,ht.__webglTexture,i.TEXTURE0+R)}function k(z,R){let ht=n.get(z);if(z.version>0&&ht.__version!==z.version){Y(ht,z,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture,i.TEXTURE0+R)}let ut={[Ni]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},gt={[fn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},U={[lu]:i.NEVER,[pu]:i.ALWAYS,[cu]:i.LESS,[qh]:i.LEQUAL,[hu]:i.EQUAL,[du]:i.GEQUAL,[fu]:i.GREATER,[uu]:i.NOTEQUAL};function xt(z,R){if(R.type===Hn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===kn||R.magFilter===qo||R.magFilter===xr||R.magFilter===Ui||R.minFilter===kn||R.minFilter===qo||R.minFilter===xr||R.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,ut[R.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,ut[R.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,ut[R.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,gt[R.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,gt[R.minFilter]),R.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,U[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===fn||R.minFilter!==xr&&R.minFilter!==Ui||R.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let ht=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function kt(z,R){let ht=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",T));let Tt=R.source,It=m.get(Tt);It===void 0&&(It={},m.set(Tt,It));let q=E(R);if(q!==z.__cacheKey){It[q]===void 0&&(It[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ht=!0),It[q].usedTimes++;let ft=It[z.__cacheKey];ft!==void 0&&(It[z.__cacheKey].usedTimes--,ft.usedTimes===0&&M(R)),z.__cacheKey=q,z.__webglTexture=It[q].texture}return ht}function F(z,R,ht){let Tt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Tt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Tt=i.TEXTURE_3D);let It=kt(z,R),q=R.source;e.bindTexture(Tt,z.__webglTexture,i.TEXTURE0+ht);let ft=n.get(q);if(q.version!==ft.__version||It===!0){e.activeTexture(i.TEXTURE0+ht);let ot=Ee.getPrimaries(Ee.workingColorSpace),bt=R.colorSpace===di?null:Ee.getPrimaries(R.colorSpace),St=R.colorSpace===di||ot===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Rt=_(R.image,!1,s.maxTextureSize);Rt=$(R,Rt);let Pt=r.convert(R.format,R.colorSpace),Xt=r.convert(R.type),jt=x(R.internalFormat,Pt,Xt,R.colorSpace,R.isVideoTexture);xt(Tt,R);let Zt,fe=R.mipmaps,ie=R.isVideoTexture!==!0,_e=ft.__version===void 0||It===!0,nt=q.dataReady,qt=B(R,Rt);if(R.isDepthTexture)jt=y(R.format===ys,R.type),_e&&(ie?e.texStorage2D(i.TEXTURE_2D,1,jt,Rt.width,Rt.height):e.texImage2D(i.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,Xt,null));else if(R.isDataTexture)if(fe.length>0){ie&&_e&&e.texStorage2D(i.TEXTURE_2D,qt,jt,fe[0].width,fe[0].height);for(let Ct=0,Dt=fe.length;Ct<Dt;Ct++)Zt=fe[Ct],ie?nt&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,Zt.width,Zt.height,Pt,Xt,Zt.data):e.texImage2D(i.TEXTURE_2D,Ct,jt,Zt.width,Zt.height,0,Pt,Xt,Zt.data);R.generateMipmaps=!1}else ie?(_e&&e.texStorage2D(i.TEXTURE_2D,qt,jt,Rt.width,Rt.height),nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Pt,Xt,Rt.data)):e.texImage2D(i.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,Xt,Rt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ie&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,jt,fe[0].width,fe[0].height,Rt.depth);for(let Ct=0,Dt=fe.length;Ct<Dt;Ct++)if(Zt=fe[Ct],R.format!==vn)if(Pt!==null)if(ie){if(nt)if(R.layerUpdates.size>0){let S=yh(Zt.width,Zt.height,R.format,R.type);for(let G of R.layerUpdates){let Z=Zt.data.subarray(G*S/Zt.data.BYTES_PER_ELEMENT,(G+1)*S/Zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,G,Zt.width,Zt.height,1,Pt,Z)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,Zt.width,Zt.height,Rt.depth,Pt,Zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ct,jt,Zt.width,Zt.height,Rt.depth,0,Zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Ct,0,0,0,Zt.width,Zt.height,Rt.depth,Pt,Xt,Zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Ct,jt,Zt.width,Zt.height,Rt.depth,0,Pt,Xt,Zt.data)}else{ie&&_e&&e.texStorage2D(i.TEXTURE_2D,qt,jt,fe[0].width,fe[0].height);for(let Ct=0,Dt=fe.length;Ct<Dt;Ct++)Zt=fe[Ct],R.format!==vn?Pt!==null?ie?nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Ct,0,0,Zt.width,Zt.height,Pt,Zt.data):e.compressedTexImage2D(i.TEXTURE_2D,Ct,jt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?nt&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,Zt.width,Zt.height,Pt,Xt,Zt.data):e.texImage2D(i.TEXTURE_2D,Ct,jt,Zt.width,Zt.height,0,Pt,Xt,Zt.data)}else if(R.isDataArrayTexture)if(ie){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,jt,Rt.width,Rt.height,Rt.depth),nt)if(R.layerUpdates.size>0){let Ct=yh(Rt.width,Rt.height,R.format,R.type);for(let Dt of R.layerUpdates){let S=Rt.data.subarray(Dt*Ct/Rt.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,Rt.width,Rt.height,1,Pt,Xt,S)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,Xt,Rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,Xt,Rt.data);else if(R.isData3DTexture)ie?(_e&&e.texStorage3D(i.TEXTURE_3D,qt,jt,Rt.width,Rt.height,Rt.depth),nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,Xt,Rt.data)):e.texImage3D(i.TEXTURE_3D,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,Xt,Rt.data);else if(R.isFramebufferTexture){if(_e)if(ie)e.texStorage2D(i.TEXTURE_2D,qt,jt,Rt.width,Rt.height);else{let Ct=Rt.width,Dt=Rt.height;for(let S=0;S<qt;S++)e.texImage2D(i.TEXTURE_2D,S,jt,Ct,Dt,0,Pt,Xt,null),Ct>>=1,Dt>>=1}}else if(fe.length>0){if(ie&&_e){let Ct=Ft(fe[0]);e.texStorage2D(i.TEXTURE_2D,qt,jt,Ct.width,Ct.height)}for(let Ct=0,Dt=fe.length;Ct<Dt;Ct++)Zt=fe[Ct],ie?nt&&e.texSubImage2D(i.TEXTURE_2D,Ct,0,0,Pt,Xt,Zt):e.texImage2D(i.TEXTURE_2D,Ct,jt,Pt,Xt,Zt);R.generateMipmaps=!1}else if(ie){if(_e){let Ct=Ft(Rt);e.texStorage2D(i.TEXTURE_2D,qt,jt,Ct.width,Ct.height)}nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Xt,Rt)}else e.texImage2D(i.TEXTURE_2D,0,jt,Pt,Xt,Rt);p(R)&&f(Tt),ft.__version=q.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Y(z,R,ht){if(R.image.length!==6)return;let Tt=kt(z,R),It=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+ht);let q=n.get(It);if(It.version!==q.__version||Tt===!0){e.activeTexture(i.TEXTURE0+ht);let ft=Ee.getPrimaries(Ee.workingColorSpace),ot=R.colorSpace===di?null:Ee.getPrimaries(R.colorSpace),bt=R.colorSpace===di||ft===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let St=R.isCompressedTexture||R.image[0].isCompressedTexture,Rt=R.image[0]&&R.image[0].isDataTexture,Pt=[];for(let Dt=0;Dt<6;Dt++)!St&&!Rt?Pt[Dt]=_(R.image[Dt],!0,s.maxCubemapSize):Pt[Dt]=Rt?R.image[Dt].image:R.image[Dt],Pt[Dt]=$(R,Pt[Dt]);let Xt=Pt[0],jt=r.convert(R.format,R.colorSpace),Zt=r.convert(R.type),fe=x(R.internalFormat,jt,Zt,R.colorSpace),ie=R.isVideoTexture!==!0,_e=q.__version===void 0||Tt===!0,nt=It.dataReady,qt=B(R,Xt);xt(i.TEXTURE_CUBE_MAP,R);let Ct;if(St){ie&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,fe,Xt.width,Xt.height);for(let Dt=0;Dt<6;Dt++){Ct=Pt[Dt].mipmaps;for(let S=0;S<Ct.length;S++){let G=Ct[S];R.format!==vn?jt!==null?ie?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S,0,0,G.width,G.height,jt,G.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S,fe,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S,0,0,G.width,G.height,jt,Zt,G.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S,fe,G.width,G.height,0,jt,Zt,G.data)}}}else{if(Ct=R.mipmaps,ie&&_e){Ct.length>0&&qt++;let Dt=Ft(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,fe,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(Rt){ie?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Pt[Dt].width,Pt[Dt].height,jt,Zt,Pt[Dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,fe,Pt[Dt].width,Pt[Dt].height,0,jt,Zt,Pt[Dt].data);for(let S=0;S<Ct.length;S++){let Z=Ct[S].image[Dt].image;ie?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S+1,0,0,Z.width,Z.height,jt,Zt,Z.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S+1,fe,Z.width,Z.height,0,jt,Zt,Z.data)}}else{ie?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,jt,Zt,Pt[Dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,fe,jt,Zt,Pt[Dt]);for(let S=0;S<Ct.length;S++){let G=Ct[S];ie?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S+1,0,0,jt,Zt,G.image[Dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,S+1,fe,jt,Zt,G.image[Dt])}}}p(R)&&f(i.TEXTURE_CUBE_MAP),q.__version=It.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function j(z,R,ht,Tt,It,q){let ft=r.convert(ht.format,ht.colorSpace),ot=r.convert(ht.type),bt=x(ht.internalFormat,ft,ot,ht.colorSpace),St=n.get(R),Rt=n.get(ht);if(Rt.__renderTarget=R,!St.__hasExternalTextures){let Pt=Math.max(1,R.width>>q),Xt=Math.max(1,R.height>>q);It===i.TEXTURE_3D||It===i.TEXTURE_2D_ARRAY?e.texImage3D(It,q,bt,Pt,Xt,R.depth,0,ft,ot,null):e.texImage2D(It,q,bt,Pt,Xt,0,ft,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),vt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,It,Rt.__webglTexture,0,et(R)):(It===i.TEXTURE_2D||It>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&It<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Tt,It,Rt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(z,R,ht){if(i.bindRenderbuffer(i.RENDERBUFFER,z),R.depthBuffer){let Tt=R.depthTexture,It=Tt&&Tt.isDepthTexture?Tt.type:null,q=y(R.stencilBuffer,It),ft=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=et(R);vt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,q,R.width,R.height):ht?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,q,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,z)}else{let Tt=R.textures;for(let It=0;It<Tt.length;It++){let q=Tt[It],ft=r.convert(q.format,q.colorSpace),ot=r.convert(q.type),bt=x(q.internalFormat,ft,ot,q.colorSpace),St=et(R);ht&&vt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,bt,R.width,R.height):vt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,bt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,bt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Tt=n.get(R.depthTexture);Tt.__renderTarget=R,(!Tt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),O(R.depthTexture,0);let It=Tt.__webglTexture,q=et(R);if(R.depthTexture.format===fs)vt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,It,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,It,0);else if(R.depthTexture.format===ys)vt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,It,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,It,0);else throw new Error("Unknown depthTexture format")}function rt(z){let R=n.get(z),ht=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){let Tt=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Tt){let It=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Tt.removeEventListener("dispose",It)};Tt.addEventListener("dispose",It),R.__depthDisposeCallback=It}R.__boundDepthTexture=Tt}if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(ht)throw new Error("target.depthTexture not supported in Cube render targets");ct(R.__webglFramebuffer,z)}else if(ht){R.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Tt]),R.__webglDepthbuffer[Tt]===void 0)R.__webglDepthbuffer[Tt]=i.createRenderbuffer(),X(R.__webglDepthbuffer[Tt],z,!1);else{let It=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=R.__webglDepthbuffer[Tt];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),X(R.__webglDepthbuffer,z,!1);else{let Tt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,It),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,It)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(z,R,ht){let Tt=n.get(z);R!==void 0&&j(Tt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ht!==void 0&&rt(z)}function Ht(z){let R=z.texture,ht=n.get(z),Tt=n.get(R);z.addEventListener("dispose",I);let It=z.textures,q=z.isWebGLCubeRenderTarget===!0,ft=It.length>1;if(ft||(Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture()),Tt.__version=R.version,o.memory.textures++),q){ht.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(R.mipmaps&&R.mipmaps.length>0){ht.__webglFramebuffer[ot]=[];for(let bt=0;bt<R.mipmaps.length;bt++)ht.__webglFramebuffer[ot][bt]=i.createFramebuffer()}else ht.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ht.__webglFramebuffer=[];for(let ot=0;ot<R.mipmaps.length;ot++)ht.__webglFramebuffer[ot]=i.createFramebuffer()}else ht.__webglFramebuffer=i.createFramebuffer();if(ft)for(let ot=0,bt=It.length;ot<bt;ot++){let St=n.get(It[ot]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&vt(z)===!1){ht.__webglMultisampledFramebuffer=i.createFramebuffer(),ht.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer);for(let ot=0;ot<It.length;ot++){let bt=It[ot];ht.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let St=r.convert(bt.format,bt.colorSpace),Rt=r.convert(bt.type),Pt=x(bt.internalFormat,St,Rt,bt.colorSpace,z.isXRRenderTarget===!0),Xt=et(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Pt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(ht.__webglDepthRenderbuffer=i.createRenderbuffer(),X(ht.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Tt.__webglTexture),xt(i.TEXTURE_CUBE_MAP,R);for(let ot=0;ot<6;ot++)if(R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)j(ht.__webglFramebuffer[ot][bt],z,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt);else j(ht.__webglFramebuffer[ot],z,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(R)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ot=0,bt=It.length;ot<bt;ot++){let St=It[ot],Rt=n.get(St);e.bindTexture(i.TEXTURE_2D,Rt.__webglTexture),xt(i.TEXTURE_2D,St),j(ht.__webglFramebuffer,z,St,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(St)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ot=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Tt.__webglTexture),xt(ot,R),R.mipmaps&&R.mipmaps.length>0)for(let bt=0;bt<R.mipmaps.length;bt++)j(ht.__webglFramebuffer[bt],z,R,i.COLOR_ATTACHMENT0,ot,bt);else j(ht.__webglFramebuffer,z,R,i.COLOR_ATTACHMENT0,ot,0);p(R)&&f(ot),e.unbindTexture()}z.depthBuffer&&rt(z)}function at(z){let R=z.textures;for(let ht=0,Tt=R.length;ht<Tt;ht++){let It=R[ht];if(p(It)){let q=A(z),ft=n.get(It).__webglTexture;e.bindTexture(q,ft),f(q),e.unbindTexture()}}}let mt=[],L=[];function lt(z){if(z.samples>0){if(vt(z)===!1){let R=z.textures,ht=z.width,Tt=z.height,It=i.COLOR_BUFFER_BIT,q=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(z),ot=R.length>1;if(ot)for(let bt=0;bt<R.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let bt=0;bt<R.length;bt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(It|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(It|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);let St=n.get(R[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,ht,Tt,0,0,ht,Tt,It,i.NEAREST),l===!0&&(mt.length=0,L.length=0,mt.push(i.COLOR_ATTACHMENT0+bt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(mt.push(q),L.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<R.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);let St=n.get(R[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let R=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function et(z){return Math.min(s.maxSamples,z.samples)}function vt(z){let R=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Lt(z){let R=o.render.frame;h.get(z)!==R&&(h.set(z,R),z.update())}function $(z,R){let ht=z.colorSpace,Tt=z.format,It=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ht!==Es&&ht!==di&&(Ee.getTransfer(ht)===Ie?(Tt!==vn||It!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ht)),R}function Ft(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=w,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=At,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=vt}function vg(i,t){function e(n,s=di){let r,o=Ee.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===kh)return i.RGB;if(n===vn)return i.RGBA;if(n===Hh)return i.LUMINANCE;if(n===Vh)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===$r||n===Zr||n===Jr||n===Kr)if(o===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return o===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jr||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jr)return o===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wh||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var wl=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mg={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&m>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bg=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,m=null,u=null,g=null,_=new Tl,p=e.getContextAttributes(),f=null,A=null,x=[],y=[],B=new Ot,T=null,I=new hn;I.viewport=new Ve;let D=new hn;D.viewport=new Ve;let M=[I,D],v=new wl,b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Y=x[F];return Y===void 0&&(Y=new qs,x[F]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(F){let Y=x[F];return Y===void 0&&(Y=new qs,x[F]=Y),Y.getGripSpace()},this.getHand=function(F){let Y=x[F];return Y===void 0&&(Y=new qs,x[F]=Y),Y.getHandSpace()};function w(F){let Y=y.indexOf(F.inputSource);if(Y===-1)return;let j=x[Y];j!==void 0&&(j.update(F.inputSource,F.frame,c||o),j.dispatchEvent({type:F.type,data:F.inputSource}))}function E(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",E),s.removeEventListener("inputsourceschange",O);for(let F=0;F<x.length;F++){let Y=y[F];Y!==null&&(y[F]=null,x[F].disconnect(Y))}b=null,P=null,_.reset(),t.setRenderTarget(f),u=null,m=null,d=null,s=null,A=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",E),s.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new ni(u.framebufferWidth,u.framebufferHeight,{format:vn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,j=null,X=null;p.depth&&(X=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=p.stencil?ys:fs,j=p.stencil?xs:Fi);let ct={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};d=new XRWebGLBinding(s,e),m=d.createProjectionLayer(ct),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),A=new ni(m.textureWidth,m.textureHeight,{format:vn,type:ei,depthTexture:new uo(m.textureWidth,m.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(F){for(let Y=0;Y<F.removed.length;Y++){let j=F.removed[Y],X=y.indexOf(j);X>=0&&(y[X]=null,x[X].disconnect(j))}for(let Y=0;Y<F.added.length;Y++){let j=F.added[Y],X=y.indexOf(j);if(X===-1){for(let rt=0;rt<x.length;rt++)if(rt>=y.length){y.push(j),X=rt;break}else if(y[rt]===null){y[rt]=j,X=rt;break}if(X===-1)break}let ct=x[X];ct&&ct.connect(j)}}let N=new H,V=new H;function k(F,Y,j){N.setFromMatrixPosition(Y.matrixWorld),V.setFromMatrixPosition(j.matrixWorld);let X=N.distanceTo(V),ct=Y.projectionMatrix.elements,rt=j.projectionMatrix.elements,At=ct[14]/(ct[10]-1),Ht=ct[14]/(ct[10]+1),at=(ct[9]+1)/ct[5],mt=(ct[9]-1)/ct[5],L=(ct[8]-1)/ct[0],lt=(rt[8]+1)/rt[0],et=At*L,vt=At*lt,Lt=X/(-L+lt),$=Lt*-L;if(Y.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX($),F.translateZ(Lt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ct[10]===-1)F.projectionMatrix.copy(Y.projectionMatrix),F.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Ft=At+Lt,z=Ht+Lt,R=et-$,ht=vt+(X-$),Tt=at*Ht/z*Ft,It=mt*Ht/z*Ft;F.projectionMatrix.makePerspective(R,ht,Tt,It,Ft,z),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ut(F,Y){Y===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Y.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let Y=F.near,j=F.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(j=_.depthFar)),v.near=D.near=I.near=Y,v.far=D.far=I.far=j,(b!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,P=v.far),I.layers.mask=F.layers.mask|2,D.layers.mask=F.layers.mask|4,v.layers.mask=I.layers.mask|D.layers.mask;let X=F.parent,ct=v.cameras;ut(v,X);for(let rt=0;rt<ct.length;rt++)ut(ct[rt],X);ct.length===2?k(v,I,D):v.projectionMatrix.copy(I.projectionMatrix),gt(F,v,X)};function gt(F,Y,j){j===null?F.matrix.copy(Y.matrixWorld):(F.matrix.copy(j.matrixWorld),F.matrix.invert(),F.matrix.multiply(Y.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Y.projectionMatrix),F.projectionMatrixInverse.copy(Y.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Js*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(F){l=F,m!==null&&(m.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let U=null;function xt(F,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){let j=h.views;u!==null&&(t.setRenderTargetFramebuffer(A,u.framebuffer),t.setRenderTarget(A));let X=!1;j.length!==v.cameras.length&&(v.cameras.length=0,X=!0);for(let rt=0;rt<j.length;rt++){let At=j[rt],Ht=null;if(u!==null)Ht=u.getViewport(At);else{let mt=d.getViewSubImage(m,At);Ht=mt.viewport,rt===0&&(t.setRenderTargetTextures(A,mt.colorTexture,m.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(A))}let at=M[rt];at===void 0&&(at=new hn,at.layers.enable(rt),at.viewport=new Ve,M[rt]=at),at.matrix.fromArray(At.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(At.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),rt===0&&(v.matrix.copy(at.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),X===!0&&v.cameras.push(at)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){let rt=d.getDepthInformation(j[0]);rt&&rt.isValid&&rt.texture&&_.init(t,rt,s.renderState)}}for(let j=0;j<x.length;j++){let X=y[j],ct=x[j];X!==null&&ct!==void 0&&ct.update(X,Y,c||o)}U&&U(F,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let kt=new Jh;kt.setAnimationLoop(xt),this.setAnimationLoop=function(F){U=F},this.dispose=function(){}}},Ci=new Ln,Eg=new ve;function wg(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Zh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,A,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),m(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,A,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let A=t.get(f),x=A.envMap,y=A.envMapRotation;x&&(p.envMap.value=x,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),p.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Ci)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,A,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let A=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,x){let y=x.program;n.uniformBlockBinding(A,y)}function c(A,x){let y=s[A.id];y===void 0&&(g(A),y=h(A),s[A.id]=y,A.addEventListener("dispose",p));let B=x.program;n.updateUBOMapping(A,B);let T=t.render.frame;r[A.id]!==T&&(m(A),r[A.id]=T)}function h(A){let x=d();A.__bindingPointIndex=x;let y=i.createBuffer(),B=A.__size,T=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){let x=s[A.id],y=A.uniforms,B=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,I=y.length;T<I;T++){let D=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,v=D.length;M<v;M++){let b=D[M];if(u(b,T,M,B)===!0){let P=b.__offset,w=Array.isArray(b.value)?b.value:[b.value],E=0;for(let O=0;O<w.length;O++){let N=w[O],V=_(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,P+E,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,E),E+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(A,x,y,B){let T=A.value,I=x+"_"+y;if(B[I]===void 0)return typeof T=="number"||typeof T=="boolean"?B[I]=T:B[I]=T.clone(),!0;{let D=B[I];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return B[I]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(A){let x=A.uniforms,y=0,B=16;for(let I=0,D=x.length;I<D;I++){let M=Array.isArray(x[I])?x[I]:[x[I]];for(let v=0,b=M.length;v<b;v++){let P=M[v],w=Array.isArray(P.value)?P.value:[P.value];for(let E=0,O=w.length;E<O;E++){let N=w[E],V=_(N),k=y%B,ut=k%V.boundary,gt=k+ut;y+=ut,gt!==0&&B-gt<V.storage&&(y+=B-gt),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=V.storage}}}let T=y%B;return T>0&&(y+=B-T),A.__size=y,A.__cache={},this}function _(A){let x={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(x.boundary=4,x.storage=4):A.isVector2?(x.boundary=8,x.storage=8):A.isVector3||A.isColor?(x.boundary=16,x.storage=12):A.isVector4?(x.boundary=16,x.storage=16):A.isMatrix3?(x.boundary=48,x.storage=48):A.isMatrix4?(x.boundary=64,x.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),x}function p(A){let x=A.target;x.removeEventListener("dispose",p);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var po=class{constructor(t={}){let{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,f=null,A=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Vn,this.toneMappingExposure=1;let y=this,B=!1,T=0,I=0,D=null,M=-1,v=null,b=new Ve,P=new Ve,w=null,E=new se(0),O=0,N=e.width,V=e.height,k=1,ut=null,gt=null,U=new Ve(0,0,N,V),xt=new Ve(0,0,N,V),kt=!1,F=new Ks,Y=!1,j=!1,X=new ve,ct=new ve,rt=new H,At=new Ve,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function mt(){return D===null?k:1}let L=n;function lt(C,W){return e.getContext(C,W)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$l}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",S,!1),e.addEventListener("webglcontextcreationerror",G,!1),L===null){let W="webgl2";if(L=lt(W,C),L===null)throw lt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,vt,Lt,$,Ft,z,R,ht,Tt,It,q,ft,ot,bt,St,Rt,Pt,Xt,jt,Zt,fe,ie,_e,nt;function qt(){et=new Vm(L),et.init(),ie=new vg(L,et),vt=new Fm(L,et,t,ie),Lt=new xg(L,et),vt.reverseDepthBuffer&&m&&Lt.buffers.depth.setReversed(!0),$=new Xm(L),Ft=new sg,z=new _g(L,et,Lt,Ft,vt,ie,$),R=new Om(y),ht=new Hm(y),Tt=new ju(L),_e=new Um(L,Tt),It=new Gm(L,Tt,$,_e),q=new Ym(L,It,Tt,$),jt=new qm(L,vt,z),Rt=new zm(Ft),ft=new ig(y,R,ht,et,vt,_e,Rt),ot=new wg(y,Ft),bt=new og,St=new ug(et),Xt=new Dm(y,R,ht,Lt,q,u,l),Pt=new mg(y,q,vt),nt=new Tg(L,$,vt,Lt),Zt=new Nm(L,et,$),fe=new Wm(L,et,$),$.programs=ft.programs,y.capabilities=vt,y.extensions=et,y.properties=Ft,y.renderLists=bt,y.shadowMap=Pt,y.state=Lt,y.info=$}qt();let Ct=new Al(y,L);this.xr=Ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(N,V,!1))},this.getSize=function(C){return C.set(N,V)},this.setSize=function(C,W,K=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,V=W,e.width=Math.floor(C*k),e.height=Math.floor(W*k),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(N*k,V*k).floor()},this.setDrawingBufferSize=function(C,W,K){N=C,V=W,k=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,W,K,yt){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,W,K,yt),Lt.viewport(b.copy(U).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(xt)},this.setScissor=function(C,W,K,yt){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,W,K,yt),Lt.scissor(P.copy(xt).multiplyScalar(k).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(C){Lt.setScissorTest(kt=C)},this.setOpaqueSort=function(C){ut=C},this.setTransparentSort=function(C){gt=C},this.getClearColor=function(C){return C.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(C=!0,W=!0,K=!0){let yt=0;if(C){let st=!1;if(D!==null){let zt=D.texture.format;st=zt===nc||zt===ec||zt===tc}if(st){let zt=D.texture.type,Gt=zt===ei||zt===Fi||zt===Zs||zt===xs||zt===Kl||zt===jl,Nt=Xt.getClearColor(),Bt=Xt.getClearAlpha(),te=Nt.r,ee=Nt.g,Jt=Nt.b;Gt?(g[0]=te,g[1]=ee,g[2]=Jt,g[3]=Bt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=te,_[1]=ee,_[2]=Jt,_[3]=Bt,L.clearBufferiv(L.COLOR,0,_))}else yt|=L.COLOR_BUFFER_BIT}W&&(yt|=L.DEPTH_BUFFER_BIT),K&&(yt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(yt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",S,!1),e.removeEventListener("webglcontextcreationerror",G,!1),bt.dispose(),St.dispose(),Ft.dispose(),R.dispose(),ht.dispose(),q.dispose(),_e.dispose(),nt.dispose(),ft.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Ut),Ct.removeEventListener("sessionend",J),Mt.stop()};function Dt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let C=$.autoReset,W=Pt.enabled,K=Pt.autoUpdate,yt=Pt.needsUpdate,st=Pt.type;qt(),$.autoReset=C,Pt.enabled=W,Pt.autoUpdate=K,Pt.needsUpdate=yt,Pt.type=st}function G(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){let W=C.target;W.removeEventListener("dispose",Z),it(W)}function it(C){_t(C),Ft.remove(C)}function _t(C){let W=Ft.get(C).programs;W!==void 0&&(W.forEach(function(K){ft.releaseProgram(K)}),C.isShaderMaterial&&ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,yt,st,zt){W===null&&(W=Ht);let Gt=st.isMesh&&st.matrixWorld.determinant()<0,Nt=dt(C,W,K,yt,st);Lt.setMaterial(yt,Gt);let Bt=K.index,te=1;if(yt.wireframe===!0){if(Bt=It.getWireframeAttribute(K),Bt===void 0)return;te=2}let ee=K.drawRange,Jt=K.attributes.position,le=ee.start*te,we=(ee.start+ee.count)*te;zt!==null&&(le=Math.max(le,zt.start*te),we=Math.min(we,(zt.start+zt.count)*te)),Bt!==null?(le=Math.max(le,0),we=Math.min(we,Bt.count)):Jt!=null&&(le=Math.max(le,0),we=Math.min(we,Jt.count));let De=we-le;if(De<0||De===1/0)return;_e.setup(st,yt,Nt,K,Bt);let dn,Te=Zt;if(Bt!==null&&(dn=Tt.get(Bt),Te=fe,Te.setIndex(dn)),st.isMesh)yt.wireframe===!0?(Lt.setLineWidth(yt.wireframeLinewidth*mt()),Te.setMode(L.LINES)):Te.setMode(L.TRIANGLES);else if(st.isLine){let ae=yt.linewidth;ae===void 0&&(ae=1),Lt.setLineWidth(ae*mt()),st.isLineSegments?Te.setMode(L.LINES):st.isLineLoop?Te.setMode(L.LINE_LOOP):Te.setMode(L.LINE_STRIP)}else st.isPoints?Te.setMode(L.POINTS):st.isSprite&&Te.setMode(L.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Te.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Te.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let ae=st._multiDrawStarts,Xn=st._multiDrawCounts,Ae=st._multiDrawCount,An=Bt?Tt.get(Bt).bytesPerElement:1,Vi=Ft.get(yt).currentProgram.getUniforms();for(let xn=0;xn<Ae;xn++)Vi.setValue(L,"_gl_DrawID",xn),Te.render(ae[xn]/An,Xn[xn])}else if(st.isInstancedMesh)Te.renderInstances(le,De,st.count);else if(K.isInstancedBufferGeometry){let ae=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Xn=Math.min(K.instanceCount,ae);Te.renderInstances(le,De,Xn)}else Te.render(le,De)};function Q(C,W,K){C.transparent===!0&&C.side===We&&C.forceSinglePass===!1?(C.side=nn,C.needsUpdate=!0,Me(C,W,K),C.side=xi,C.needsUpdate=!0,Me(C,W,K),C.side=We):Me(C,W,K)}this.compile=function(C,W,K=null){K===null&&(K=C),f=St.get(K),f.init(W),x.push(f),K.traverseVisible(function(st){st.isLight&&st.layers.test(W.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),C!==K&&C.traverseVisible(function(st){st.isLight&&st.layers.test(W.layers)&&(f.pushLight(st),st.castShadow&&f.pushShadow(st))}),f.setupLights();let yt=new Set;return C.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let zt=st.material;if(zt)if(Array.isArray(zt))for(let Gt=0;Gt<zt.length;Gt++){let Nt=zt[Gt];Q(Nt,K,st),yt.add(Nt)}else Q(zt,K,st),yt.add(zt)}),x.pop(),f=null,yt},this.compileAsync=function(C,W,K=null){let yt=this.compile(C,W,K);return new Promise(st=>{function zt(){if(yt.forEach(function(Gt){Ft.get(Gt).currentProgram.isReady()&&yt.delete(Gt)}),yt.size===0){st(C);return}setTimeout(zt,10)}et.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let wt=null;function Wt(C){wt&&wt(C)}function Ut(){Mt.stop()}function J(){Mt.start()}let Mt=new Jh;Mt.setAnimationLoop(Wt),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(C){wt=C,Ct.setAnimationLoop(C),C===null?Mt.stop():Mt.start()},Ct.addEventListener("sessionstart",Ut),Ct.addEventListener("sessionend",J),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(W),W=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,W,D),f=St.get(C,x.length),f.init(W),x.push(f),ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(ct),j=this.localClippingEnabled,Y=Rt.init(this.clippingPlanes,j),p=bt.get(C,A.length),p.init(),A.push(p),Ct.enabled===!0&&Ct.isPresenting===!0){let zt=y.xr.getDepthSensingMesh();zt!==null&&Et(zt,W,-1/0,y.sortObjects)}Et(C,W,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ut,gt),at=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,at&&Xt.addToRenderList(p,C),this.info.render.frame++,Y===!0&&Rt.beginShadows();let K=f.state.shadowsArray;Pt.render(K,C,W),Y===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let yt=p.opaque,st=p.transmissive;if(f.setupLights(),W.isArrayCamera){let zt=W.cameras;if(st.length>0)for(let Gt=0,Nt=zt.length;Gt<Nt;Gt++){let Bt=zt[Gt];oe(yt,st,C,Bt)}at&&Xt.render(C);for(let Gt=0,Nt=zt.length;Gt<Nt;Gt++){let Bt=zt[Gt];$t(p,C,Bt,Bt.viewport)}}else st.length>0&&oe(yt,st,C,W),at&&Xt.render(C),$t(p,C,W);D!==null&&(z.updateMultisampleRenderTarget(D),z.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(y,C,W),_e.resetDefaultState(),M=-1,v=null,x.pop(),x.length>0?(f=x[x.length-1],Y===!0&&Rt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Et(C,W,K,yt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){yt&&At.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);let Gt=q.update(C),Nt=C.material;Nt.visible&&p.push(C,Gt,Nt,K,At.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){let Gt=q.update(C),Nt=C.material;if(yt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),At.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),At.copy(Gt.boundingSphere.center)),At.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Nt)){let Bt=Gt.groups;for(let te=0,ee=Bt.length;te<ee;te++){let Jt=Bt[te],le=Nt[Jt.materialIndex];le&&le.visible&&p.push(C,Gt,le,K,At.z,Jt)}}else Nt.visible&&p.push(C,Gt,Nt,K,At.z,null)}}let zt=C.children;for(let Gt=0,Nt=zt.length;Gt<Nt;Gt++)Et(zt[Gt],W,K,yt)}function $t(C,W,K,yt){let st=C.opaque,zt=C.transmissive,Gt=C.transparent;f.setupLightsView(K),Y===!0&&Rt.setGlobalState(y.clippingPlanes,K),yt&&Lt.viewport(b.copy(yt)),st.length>0&&re(st,W,K),zt.length>0&&re(zt,W,K),Gt.length>0&&re(Gt,W,K),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function oe(C,W,K,yt){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[yt.id]===void 0&&(f.state.transmissionRenderTarget[yt.id]=new ni(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?cr:ei,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));let zt=f.state.transmissionRenderTarget[yt.id],Gt=yt.viewport||b;zt.setSize(Gt.z,Gt.w);let Nt=y.getRenderTarget();y.setRenderTarget(zt),y.getClearColor(E),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),at&&Xt.render(K);let Bt=y.toneMapping;y.toneMapping=Vn;let te=yt.viewport;if(yt.viewport!==void 0&&(yt.viewport=void 0),f.setupLightsView(yt),Y===!0&&Rt.setGlobalState(y.clippingPlanes,yt),re(C,K,yt),z.updateMultisampleRenderTarget(zt),z.updateRenderTargetMipmap(zt),et.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Jt=0,le=W.length;Jt<le;Jt++){let we=W[Jt],De=we.object,dn=we.geometry,Te=we.material,ae=we.group;if(Te.side===We&&De.layers.test(yt.layers)){let Xn=Te.side;Te.side=nn,Te.needsUpdate=!0,ge(De,K,yt,dn,Te,ae),Te.side=Xn,Te.needsUpdate=!0,ee=!0}}ee===!0&&(z.updateMultisampleRenderTarget(zt),z.updateRenderTargetMipmap(zt))}y.setRenderTarget(Nt),y.setClearColor(E,O),te!==void 0&&(yt.viewport=te),y.toneMapping=Bt}function re(C,W,K){let yt=W.isScene===!0?W.overrideMaterial:null;for(let st=0,zt=C.length;st<zt;st++){let Gt=C[st],Nt=Gt.object,Bt=Gt.geometry,te=yt===null?Gt.material:yt,ee=Gt.group;Nt.layers.test(K.layers)&&ge(Nt,W,K,Bt,te,ee)}}function ge(C,W,K,yt,st,zt){C.onBeforeRender(y,W,K,yt,st,zt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),st.onBeforeRender(y,W,K,yt,C,zt),st.transparent===!0&&st.side===We&&st.forceSinglePass===!1?(st.side=nn,st.needsUpdate=!0,y.renderBufferDirect(K,W,yt,st,C,zt),st.side=xi,st.needsUpdate=!0,y.renderBufferDirect(K,W,yt,st,C,zt),st.side=We):y.renderBufferDirect(K,W,yt,st,C,zt),C.onAfterRender(y,W,K,yt,st,zt)}function Me(C,W,K){W.isScene!==!0&&(W=Ht);let yt=Ft.get(C),st=f.state.lights,zt=f.state.shadowsArray,Gt=st.state.version,Nt=ft.getParameters(C,st.state,zt,W,K),Bt=ft.getProgramCacheKey(Nt),te=yt.programs;yt.environment=C.isMeshStandardMaterial?W.environment:null,yt.fog=W.fog,yt.envMap=(C.isMeshStandardMaterial?ht:R).get(C.envMap||yt.environment),yt.envMapRotation=yt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,te===void 0&&(C.addEventListener("dispose",Z),te=new Map,yt.programs=te);let ee=te.get(Bt);if(ee!==void 0){if(yt.currentProgram===ee&&yt.lightsStateVersion===Gt)return tt(C,Nt),ee}else Nt.uniforms=ft.getUniforms(C),C.onBeforeCompile(Nt,y),ee=ft.acquireProgram(Nt,Bt),te.set(Bt,ee),yt.uniforms=Nt.uniforms;let Jt=yt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=Rt.uniform),tt(C,Nt),yt.needsLights=Vt(C),yt.lightsStateVersion=Gt,yt.needsLights&&(Jt.ambientLightColor.value=st.state.ambient,Jt.lightProbe.value=st.state.probe,Jt.directionalLights.value=st.state.directional,Jt.directionalLightShadows.value=st.state.directionalShadow,Jt.spotLights.value=st.state.spot,Jt.spotLightShadows.value=st.state.spotShadow,Jt.rectAreaLights.value=st.state.rectArea,Jt.ltc_1.value=st.state.rectAreaLTC1,Jt.ltc_2.value=st.state.rectAreaLTC2,Jt.pointLights.value=st.state.point,Jt.pointLightShadows.value=st.state.pointShadow,Jt.hemisphereLights.value=st.state.hemi,Jt.directionalShadowMap.value=st.state.directionalShadowMap,Jt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Jt.spotShadowMap.value=st.state.spotShadowMap,Jt.spotLightMatrix.value=st.state.spotLightMatrix,Jt.spotLightMap.value=st.state.spotLightMap,Jt.pointShadowMap.value=st.state.pointShadowMap,Jt.pointShadowMatrix.value=st.state.pointShadowMatrix),yt.currentProgram=ee,yt.uniformsList=null,ee}function Se(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=ds.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function tt(C,W){let K=Ft.get(C);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function dt(C,W,K,yt,st){W.isScene!==!0&&(W=Ht),z.resetTextureUnits();let zt=W.fog,Gt=yt.isMeshStandardMaterial?W.environment:null,Nt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Es,Bt=(yt.isMeshStandardMaterial?ht:R).get(yt.envMap||Gt),te=yt.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ee=!!K.attributes.tangent&&(!!yt.normalMap||yt.anisotropy>0),Jt=!!K.morphAttributes.position,le=!!K.morphAttributes.normal,we=!!K.morphAttributes.color,De=Vn;yt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(De=y.toneMapping);let dn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=dn!==void 0?dn.length:0,ae=Ft.get(yt),Xn=f.state.lights;if(Y===!0&&(j===!0||C!==v)){let Mn=C===v&&yt.id===M;Rt.setState(yt,C,Mn)}let Ae=!1;yt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Xn.state.version||ae.outputColorSpace!==Nt||st.isBatchedMesh&&ae.batching===!1||!st.isBatchedMesh&&ae.batching===!0||st.isBatchedMesh&&ae.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&ae.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&ae.instancing===!1||!st.isInstancedMesh&&ae.instancing===!0||st.isSkinnedMesh&&ae.skinning===!1||!st.isSkinnedMesh&&ae.skinning===!0||st.isInstancedMesh&&ae.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&ae.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&ae.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&ae.instancingMorph===!1&&st.morphTexture!==null||ae.envMap!==Bt||yt.fog===!0&&ae.fog!==zt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Rt.numPlanes||ae.numIntersection!==Rt.numIntersection)||ae.vertexAlphas!==te||ae.vertexTangents!==ee||ae.morphTargets!==Jt||ae.morphNormals!==le||ae.morphColors!==we||ae.toneMapping!==De||ae.morphTargetsCount!==Te)&&(Ae=!0):(Ae=!0,ae.__version=yt.version);let An=ae.currentProgram;Ae===!0&&(An=Me(yt,W,st));let Vi=!1,xn=!1,Is=!1,Ue=An.getUniforms(),On=ae.uniforms;if(Lt.useProgram(An.program)&&(Vi=!0,xn=!0,Is=!0),yt.id!==M&&(M=yt.id,xn=!0),Vi||v!==C){Lt.buffers.depth.getReversed()?(X.copy(C.projectionMatrix),Du(X),Uu(X),Ue.setValue(L,"projectionMatrix",X)):Ue.setValue(L,"projectionMatrix",C.projectionMatrix),Ue.setValue(L,"viewMatrix",C.matrixWorldInverse);let ri=Ue.map.cameraPosition;ri!==void 0&&ri.setValue(L,rt.setFromMatrixPosition(C.matrixWorld)),vt.logarithmicDepthBuffer&&Ue.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(yt.isMeshPhongMaterial||yt.isMeshToonMaterial||yt.isMeshLambertMaterial||yt.isMeshBasicMaterial||yt.isMeshStandardMaterial||yt.isShaderMaterial)&&Ue.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,xn=!0,Is=!0)}if(st.isSkinnedMesh){Ue.setOptional(L,st,"bindMatrix"),Ue.setOptional(L,st,"bindMatrixInverse");let Mn=st.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ue.setValue(L,"boneTexture",Mn.boneTexture,z))}st.isBatchedMesh&&(Ue.setOptional(L,st,"batchingTexture"),Ue.setValue(L,"batchingTexture",st._matricesTexture,z),Ue.setOptional(L,st,"batchingIdTexture"),Ue.setValue(L,"batchingIdTexture",st._indirectTexture,z),Ue.setOptional(L,st,"batchingColorTexture"),st._colorsTexture!==null&&Ue.setValue(L,"batchingColorTexture",st._colorsTexture,z));let Ps=K.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&jt.update(st,K,An),(xn||ae.receiveShadow!==st.receiveShadow)&&(ae.receiveShadow=st.receiveShadow,Ue.setValue(L,"receiveShadow",st.receiveShadow)),yt.isMeshGouraudMaterial&&yt.envMap!==null&&(On.envMap.value=Bt,On.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),yt.isMeshStandardMaterial&&yt.envMap===null&&W.environment!==null&&(On.envMapIntensity.value=W.environmentIntensity),xn&&(Ue.setValue(L,"toneMappingExposure",y.toneMappingExposure),ae.needsLights&&Yt(On,Is),zt&&yt.fog===!0&&ot.refreshFogUniforms(On,zt),ot.refreshMaterialUniforms(On,yt,k,V,f.state.transmissionRenderTarget[C.id]),ds.upload(L,Se(ae),On,z)),yt.isShaderMaterial&&yt.uniformsNeedUpdate===!0&&(ds.upload(L,Se(ae),On,z),yt.uniformsNeedUpdate=!1),yt.isSpriteMaterial&&Ue.setValue(L,"center",st.center),Ue.setValue(L,"modelViewMatrix",st.modelViewMatrix),Ue.setValue(L,"normalMatrix",st.normalMatrix),Ue.setValue(L,"modelMatrix",st.matrixWorld),yt.isShaderMaterial||yt.isRawShaderMaterial){let Mn=yt.uniformsGroups;for(let ri=0,oi=Mn.length;ri<oi;ri++){let yc=Mn[ri];nt.update(yc,An),nt.bind(yc,An)}}return An}function Yt(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Vt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,W,K){Ft.get(C.texture).__webglTexture=W,Ft.get(C.depthTexture).__webglTexture=K;let yt=Ft.get(C);yt.__hasExternalTextures=!0,yt.__autoAllocateDepthBuffer=K===void 0,yt.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),yt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){let K=Ft.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){D=C,T=W,I=K;let yt=!0,st=null,zt=!1,Gt=!1;if(C){let Bt=Ft.get(C);if(Bt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(L.FRAMEBUFFER,null),yt=!1;else if(Bt.__webglFramebuffer===void 0)z.setupRenderTarget(C);else if(Bt.__hasExternalTextures)z.rebindTextures(C,Ft.get(C.texture).__webglTexture,Ft.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Jt=C.depthTexture;if(Bt.__boundDepthTexture!==Jt){if(Jt!==null&&Ft.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(C)}}let te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Gt=!0);let ee=Ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?st=ee[W][K]:st=ee[W],zt=!0):C.samples>0&&z.useMultisampledRTT(C)===!1?st=Ft.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?st=ee[K]:st=ee,b.copy(C.viewport),P.copy(C.scissor),w=C.scissorTest}else b.copy(U).multiplyScalar(k).floor(),P.copy(xt).multiplyScalar(k).floor(),w=kt;if(Lt.bindFramebuffer(L.FRAMEBUFFER,st)&&yt&&Lt.drawBuffers(C,st),Lt.viewport(b),Lt.scissor(P),Lt.setScissorTest(w),zt){let Bt=Ft.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,K)}else if(Gt){let Bt=Ft.get(C.texture),te=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.__webglTexture,K||0,te)}M=-1},this.readRenderTargetPixels=function(C,W,K,yt,st,zt,Gt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Nt=Nt[Gt]),Nt){Lt.bindFramebuffer(L.FRAMEBUFFER,Nt);try{let Bt=C.texture,te=Bt.format,ee=Bt.type;if(!vt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-yt&&K>=0&&K<=C.height-st&&L.readPixels(W,K,yt,st,ie.convert(te),ie.convert(ee),zt)}finally{let Bt=D!==null?Ft.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(C,W,K,yt,st,zt,Gt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Nt=Nt[Gt]),Nt){let Bt=C.texture,te=Bt.format,ee=Bt.type;if(!vt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-yt&&K>=0&&K<=C.height-st){Lt.bindFramebuffer(L.FRAMEBUFFER,Nt);let Jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.bufferData(L.PIXEL_PACK_BUFFER,zt.byteLength,L.STREAM_READ),L.readPixels(W,K,yt,st,ie.convert(te),ie.convert(ee),0);let le=D!==null?Ft.get(D).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,le);let we=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Lu(L,we,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,zt),L.deleteBuffer(Jt),L.deleteSync(we),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,K=0){C.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);let yt=Math.pow(2,-K),st=Math.floor(C.image.width*yt),zt=Math.floor(C.image.height*yt),Gt=W!==null?W.x:0,Nt=W!==null?W.y:0;z.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,K,0,0,Gt,Nt,st,zt),Lt.unbindTexture()},this.copyTextureToTexture=function(C,W,K=null,yt=null,st=0){C.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),yt=arguments[0]||null,C=arguments[1],W=arguments[2],st=arguments[3]||0,K=null);let zt,Gt,Nt,Bt,te,ee,Jt,le,we,De=C.isCompressedTexture?C.mipmaps[st]:C.image;K!==null?(zt=K.max.x-K.min.x,Gt=K.max.y-K.min.y,Nt=K.isBox3?K.max.z-K.min.z:1,Bt=K.min.x,te=K.min.y,ee=K.isBox3?K.min.z:0):(zt=De.width,Gt=De.height,Nt=De.depth||1,Bt=0,te=0,ee=0),yt!==null?(Jt=yt.x,le=yt.y,we=yt.z):(Jt=0,le=0,we=0);let dn=ie.convert(W.format),Te=ie.convert(W.type),ae;W.isData3DTexture?(z.setTexture3D(W,0),ae=L.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(z.setTexture2DArray(W,0),ae=L.TEXTURE_2D_ARRAY):(z.setTexture2D(W,0),ae=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);let Xn=L.getParameter(L.UNPACK_ROW_LENGTH),Ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),An=L.getParameter(L.UNPACK_SKIP_PIXELS),Vi=L.getParameter(L.UNPACK_SKIP_ROWS),xn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ee);let Is=C.isDataArrayTexture||C.isData3DTexture,Ue=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let On=Ft.get(C),Ps=Ft.get(W),Mn=Ft.get(On.__renderTarget),ri=Ft.get(Ps.__renderTarget);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<Nt;oi++)Is&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(C).__webglTexture,st,ee+oi),C.isDepthTexture?(Ue&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(W).__webglTexture,st,we+oi),L.blitFramebuffer(Bt,te,zt,Gt,Jt,le,zt,Gt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Ue?L.copyTexSubImage3D(ae,st,Jt,le,we+oi,Bt,te,zt,Gt):L.copyTexSubImage2D(ae,st,Jt,le,we+oi,Bt,te,zt,Gt);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ue?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(ae,st,Jt,le,we,zt,Gt,Nt,dn,Te,De.data):W.isCompressedArrayTexture?L.compressedTexSubImage3D(ae,st,Jt,le,we,zt,Gt,Nt,dn,De.data):L.texSubImage3D(ae,st,Jt,le,we,zt,Gt,Nt,dn,Te,De):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,Jt,le,zt,Gt,dn,Te,De.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,Jt,le,De.width,De.height,dn,De.data):L.texSubImage2D(L.TEXTURE_2D,st,Jt,le,zt,Gt,dn,Te,De);L.pixelStorei(L.UNPACK_ROW_LENGTH,Xn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,An),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xn),st===0&&W.generateMipmaps&&L.generateMipmap(ae),Lt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K=null,yt=null,st=0){return C.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,yt=arguments[1]||null,C=arguments[2],W=arguments[3],st=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,K,yt,st)},this.initRenderTarget=function(C){Ft.get(C).__webglFramebuffer===void 0&&z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?z.setTextureCube(C,0):C.isData3DTexture?z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?z.setTexture2DArray(C,0):z.setTexture2D(C,0),Lt.unbindTexture()},this.resetState=function(){T=0,I=0,D=null,Lt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var mo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},go=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new H,js=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qs=class extends si{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,Fs=new H,ss=new H,rs=new H,os=new Ot,zs=new Ot,ef=new ve,Or=new H,Os=new H,Br=new H,_h=new Ot,va=new Ot,vh=new Ot,yo=class extends Pe{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xo(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new js(n,3,0,!1)),is.setAttribute("uv",new js(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),ef.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;kr(Or.set(-.5,-.5,0),rs,o,ss,s,r),kr(Os.set(.5,-.5,0),rs,o,ss,s,r),kr(Br.set(.5,.5,0),rs,o,ss,s,r),_h.set(0,0),va.set(1,0),vh.set(1,1);let a=t.ray.intersectTriangle(Or,Os,Br,!1,Fs);if(a===null&&(kr(Os.set(-.5,.5,0),rs,o,ss,s,r),va.set(0,1),a=t.ray.intersectTriangle(Or,Br,Os,!1,Fs),a===null))return;let l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:pi.getInterpolation(Fs,Or,Os,Br,_h,va,vh,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function kr(i,t,e,n,s,r){os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*os.x-s*os.y,zs.y=s*os.x+r*os.y):zs.copy(os),i.copy(t),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(ef)}var tr=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fn,h=fn,d,m){super(null,o,a,l,c,h,s,r,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},as=new ve,Mh=new ve,Hr=[],bh=new ii,Ag=new ve,Bs=new Ce,ks=new _i,Ye=class extends Ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),bh.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),ks.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Mh.multiplyMatrices(n,as),Bs.matrixWorld=Mh,Bs.raycast(t,Hr);for(let o=0,a=Hr.length;o<a;o++){let l=Hr[o];l.instanceId=r,l.object=this,e.push(l)}Hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tr(new Float32Array(s*this.count),s,this.count,Ql,Hn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zi=class extends si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_o=new H,vo=new H,Sh=new ve,Hs=new so,Vr=new _i,Ma=new H,Eh=new H,Rl=class extends Pe{constructor(t=new Le,e=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_o.fromBufferAttribute(e,s-1),vo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_o.distanceTo(vo);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Sh.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,p=g-1;_<p;_+=c){let f=h.getX(_),A=h.getX(_+1),x=Gr(this,t,Hs,l,f,A);x&&e.push(x)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(u),f=Gr(this,t,Hs,l,_,p);f&&e.push(f)}}else{let u=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let _=u,p=g-1;_<p;_+=c){let f=Gr(this,t,Hs,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){let _=Gr(this,t,Hs,l,g-1,u);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Gr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(_o.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),e.distanceSqToSegment(_o,vo,Ma,Eh)>n)return;Ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ma);if(!(l<t.near||l>t.far))return{distance:l,point:Eh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new H,Th=new H,vs=class extends Rl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Th);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ms=class extends pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,u=(o-h)/m;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ot:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new H,s=[],r=[],o=[],a=new H,l=new ve;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(en(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(en(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=l-this.aX,u=c-this.aY;l=m*h-u*d+this.aX,c=m*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;m*=h,u*=h,s(o,a,m,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Wr=new H,ba=new oc,Sa=new oc,Ea=new oc,ir=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Wr.subVectors(s[0],s[1]).add(s[0]),c=Wr);let d=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(m),u),p=Math.pow(m.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ba.initNonuniformCatmullRom(c.x,d.x,m.x,h.x,g,_,p),Sa.initNonuniformCatmullRom(c.y,d.y,m.y,h.y,g,_,p),Ea.initNonuniformCatmullRom(c.z,d.z,m.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,d.x,m.x,h.x,this.tension),Sa.initCatmullRom(c.y,d.y,m.y,h.y,this.tension),Ea.initCatmullRom(c.z,d.z,m.z,h.z,this.tension));return n.set(ba.calc(l),Sa.calc(l),Ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rg(i,t){let e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Ys(i,t,e,n){return Rg(i,t)+Cg(i,e)+Ig(i,n)}function Pg(i,t){let e=1-i;return e*e*e*t}function Lg(i,t){let e=1-i;return 3*e*e*i*t}function Dg(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Pg(i,t)+Lg(i,e)+Dg(i,n)+Ug(i,s)}var Mo=class extends En{constructor(t=new Ot,e=new Ot,n=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ot){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends En{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends En{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends En{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends En{constructor(t=new Ot,e=new Ot,n=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ot){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends En{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y),Ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ah(a,l.x,c.x,h.x,d.x),Ah(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}},To=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:ir,CubicBezierCurve:Mo,CubicBezierCurve3:Il,EllipseCurve:nr,LineCurve:bo,LineCurve3:Pl,QuadraticBezierCurve:So,QuadraticBezierCurve3:Eo,SplineCurve:wo}),Ll=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new To[s.type]().fromJSON(s))}return this}},sr=class extends Ll{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new bo(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new So(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Mo(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s),new Ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class i extends Le{constructor(t=[new Ot(0,-.5),new Ot(.5,0),new Ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=en(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new H,m=new Ot,u=new H,g=new H,_=new H,p=0,f=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:p=t[A+1].x-t[A].x,f=t[A+1].y-t[A].y,u.x=f*1,u.y=-p,u.z=f*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[A+1].x-t[A].x,f=t[A+1].y-t[A].y,u.x=f*1,u.y=-p,u.z=f*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(g)}for(let A=0;A<=e;A++){let x=n+A*h*s,y=Math.sin(x),B=Math.cos(x);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*B,o.push(d.x,d.y,d.z),m.x=A/e,m.y=T/(t.length-1),a.push(m.x,m.y);let I=l[3*T+0]*y,D=l[3*T+1],M=l[3*T+0]*B;c.push(I,D,M)}}for(let A=0;A<e;A++)for(let x=0;x<t.length-1;x++){let y=x+A*t.length,B=y,T=y+t.length,I=y+t.length+1,D=y+1;r.push(B,T,D),r.push(I,D,T)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Dn=class i extends rr{constructor(t=1,e=1,n=4,s=8){let r=new sr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var ce=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],m=[],u=[],g=0,_=[],p=n/2,f=0;A(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(m,3)),this.setAttribute("uv",new ue(u,2));function A(){let y=new H,B=new H,T=0,I=(e-t)/n;for(let D=0;D<=r;D++){let M=[],v=D/r,b=v*(e-t)+t;for(let P=0;P<=s;P++){let w=P/s,E=w*l+a,O=Math.sin(E),N=Math.cos(E);B.x=b*O,B.y=-v*n+p,B.z=b*N,d.push(B.x,B.y,B.z),y.set(O,I,N).normalize(),m.push(y.x,y.y,y.z),u.push(w,1-v),M.push(g++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){let v=_[M][D],b=_[M+1][D],P=_[M+1][D+1],w=_[M][D+1];(t>0||M!==0)&&(h.push(v,b,w),T+=3),(e>0||M!==r-1)&&(h.push(b,P,w),T+=3)}c.addGroup(f,T,0),f+=T}function x(y){let B=g,T=new Ot,I=new H,D=0,M=y===!0?t:e,v=y===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,p*v,0),m.push(0,v,0),u.push(.5,.5),g++;let b=g;for(let P=0;P<=s;P++){let E=P/s*l+a,O=Math.cos(E),N=Math.sin(E);I.x=M*N,I.y=p*v,I.z=M*O,d.push(I.x,I.y,I.z),m.push(0,v,0),T.x=O*.5+.5,T.y=N*.5*v+.5,u.push(T.x,T.y),g++}for(let P=0;P<s;P++){let w=B+P,E=b+P;y===!0?h.push(E,E+1,w):h.push(E+1,E,w),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ke=class i extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dl=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let x=new H,y=new H,B=new H;for(let T=0;T<e.length;T+=3)u(e[T+0],x),u(e[T+1],y),u(e[T+2],B),l(x,y,B,A)}function l(A,x,y,B){let T=B+1,I=[];for(let D=0;D<=T;D++){I[D]=[];let M=A.clone().lerp(y,D/T),v=x.clone().lerp(y,D/T),b=T-D;for(let P=0;P<=b;P++)P===0&&D===T?I[D][P]=M:I[D][P]=M.clone().lerp(v,P/b)}for(let D=0;D<T;D++)for(let M=0;M<2*(T-D)-1;M++){let v=Math.floor(M/2);M%2===0?(m(I[D][v+1]),m(I[D+1][v]),m(I[D][v])):(m(I[D][v+1]),m(I[D+1][v+1]),m(I[D+1][v]))}}function c(A){let x=new H;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(A),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let A=new H;for(let x=0;x<r.length;x+=3){A.x=r[x+0],A.y=r[x+1],A.z=r[x+2];let y=p(A)/2/Math.PI+.5,B=f(A)/Math.PI+.5;o.push(y,1-B)}g(),d()}function d(){for(let A=0;A<o.length;A+=6){let x=o[A+0],y=o[A+2],B=o[A+4],T=Math.max(x,y,B),I=Math.min(x,y,B);T>.9&&I<.1&&(x<.2&&(o[A+0]+=1),y<.2&&(o[A+2]+=1),B<.2&&(o[A+4]+=1))}}function m(A){r.push(A.x,A.y,A.z)}function u(A,x){let y=A*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){let A=new H,x=new H,y=new H,B=new H,T=new Ot,I=new Ot,D=new Ot;for(let M=0,v=0;M<r.length;M+=9,v+=6){A.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(o[v+0],o[v+1]),I.set(o[v+2],o[v+3]),D.set(o[v+4],o[v+5]),B.copy(A).add(x).add(y).divideScalar(3);let b=p(B);_(T,v+0,A,b),_(I,v+2,x,b),_(D,v+4,y,b)}}function _(A,x,y,B){B<0&&A.x===1&&(o[x]=A.x-1),y.x===0&&y.z===0&&(o[x]=B/2/Math.PI+.5)}function p(A){return Math.atan2(A.z,-A.x)}function f(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Oi=class extends sr{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new sr().fromJSON(s))}return this}},Ng={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=nf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,m,u;if(n&&(r=kg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],m=i[g+1],d<a&&(a=d),m<l&&(l=m),d>c&&(c=d),m>h&&(h=m);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return or(r,o,e,a,l,u,0),o}};function nf(i,t,e,n,s){let r,o;if(s===Kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Rh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Rh(r,i[r],i[r+1],o);return o&&Oo(o,o.next)&&(lr(o),o=o.next),o}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Oo(e,e.next)||Be(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?zg(i,n,s,r):Fg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Og(Bi(i),t,e),or(i,t,e,n,s,r,2)):o===2&&Bg(i,t,e,n,s,r):or(Bi(i),t,e,n,s,r,1);break}}}function Fg(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,m=s>r?s>o?s:o:r>o?r:o,u=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=m&&g.y>=d&&g.y<=u&&cs(s,a,r,l,o,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,m=o.y,u=a<l?a<c?a:c:l<c?l:c,g=h<d?h<m?h:m:d<m?d:m,_=a>l?a>c?a:c:l>c?l:c,p=h>d?h>m?h:m:d>m?d:m,f=Ul(u,g,t,e,n),A=Ul(_,p,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=f&&y&&y.z<=A;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&cs(a,h,l,d,c,m,x.x,x.y)&&Be(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&cs(a,h,l,d,c,m,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=f;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&cs(a,h,l,d,c,m,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=A;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&cs(a,h,l,d,c,m,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Og(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Oo(s,r)&&sf(s,n,n.next,r)&&ar(s,r)&&ar(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lr(n),lr(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function Bg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$g(o,a)){let l=rf(o,a);o=Bi(o,o.next),l=Bi(l,l.next),or(o,t,e,n,s,r,0),or(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function kg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=nf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Yg(c));for(s.sort(Hg),r=0;r<s.length;r++)e=Vg(s[r],e);return e}function Hg(i,t){return i.x-t.x}function Vg(i,t){let e=Gg(i,t);if(!e)return t;let n=rf(e,i);return Bi(n,n.next),Bi(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let m=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=r&&m>n&&(n=m,s=e.x<e.next.x?e:e.next,m===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&cs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),ar(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Wg(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Wg(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function Xg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qg(s)}function qg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $g(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zg(i,t)&&(ar(i,t)&&ar(t,i)&&Jg(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||Oo(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Oo(i,t){return i.x===t.x&&i.y===t.y}function sf(i,t,e,n){let s=qr(Be(i,t,e)),r=qr(Be(i,t,n)),o=qr(Be(e,n,i)),a=qr(Be(e,n,t));return!!(s!==r&&o!==a||s===0&&Xr(i,e,t)||r===0&&Xr(i,n,t)||o===0&&Xr(e,i,n)||a===0&&Xr(e,t,n))}function Xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function Zg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ar(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function Jg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rf(i,t){let e=new Nl(i.i,i.x,i.y),n=new Nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rh(i,t,e,n){let s=new Nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ch(t),Ih(n,t);let o=t.length;e.forEach(Ch);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ih(n,e[l]);let a=Ng.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ch(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ao=class i extends Le{constructor(t=new Oi([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:jg,x,y=!1,B,T,I,D;f&&(x=f.getSpacedPoints(h),y=!0,m=!1,B=f.computeFrenetFrames(h,!1),T=new H,I=new H,D=new H),m||(p=0,u=0,g=0,_=0);let M=a.extractPoints(c),v=M.shape,b=M.holes;if(!gi.isClockWise(v)){v=v.reverse();for(let at=0,mt=b.length;at<mt;at++){let L=b[at];gi.isClockWise(L)&&(b[at]=L.reverse())}}let w=gi.triangulateShape(v,b),E=v;for(let at=0,mt=b.length;at<mt;at++){let L=b[at];v=v.concat(L)}function O(at,mt,L){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(mt,L)}let N=v.length,V=w.length;function k(at,mt,L){let lt,et,vt,Lt=at.x-mt.x,$=at.y-mt.y,Ft=L.x-at.x,z=L.y-at.y,R=Lt*Lt+$*$,ht=Lt*z-$*Ft;if(Math.abs(ht)>Number.EPSILON){let Tt=Math.sqrt(R),It=Math.sqrt(Ft*Ft+z*z),q=mt.x-$/Tt,ft=mt.y+Lt/Tt,ot=L.x-z/It,bt=L.y+Ft/It,St=((ot-q)*z-(bt-ft)*Ft)/(Lt*z-$*Ft);lt=q+Lt*St-at.x,et=ft+$*St-at.y;let Rt=lt*lt+et*et;if(Rt<=2)return new Ot(lt,et);vt=Math.sqrt(Rt/2)}else{let Tt=!1;Lt>Number.EPSILON?Ft>Number.EPSILON&&(Tt=!0):Lt<-Number.EPSILON?Ft<-Number.EPSILON&&(Tt=!0):Math.sign($)===Math.sign(z)&&(Tt=!0),Tt?(lt=-$,et=Lt,vt=Math.sqrt(R)):(lt=Lt,et=$,vt=Math.sqrt(R/2))}return new Ot(lt/vt,et/vt)}let ut=[];for(let at=0,mt=E.length,L=mt-1,lt=at+1;at<mt;at++,L++,lt++)L===mt&&(L=0),lt===mt&&(lt=0),ut[at]=k(E[at],E[L],E[lt]);let gt=[],U,xt=ut.concat();for(let at=0,mt=b.length;at<mt;at++){let L=b[at];U=[];for(let lt=0,et=L.length,vt=et-1,Lt=lt+1;lt<et;lt++,vt++,Lt++)vt===et&&(vt=0),Lt===et&&(Lt=0),U[lt]=k(L[lt],L[vt],L[Lt]);gt.push(U),xt=xt.concat(U)}for(let at=0;at<p;at++){let mt=at/p,L=u*Math.cos(mt*Math.PI/2),lt=g*Math.sin(mt*Math.PI/2)+_;for(let et=0,vt=E.length;et<vt;et++){let Lt=O(E[et],ut[et],lt);X(Lt.x,Lt.y,-L)}for(let et=0,vt=b.length;et<vt;et++){let Lt=b[et];U=gt[et];for(let $=0,Ft=Lt.length;$<Ft;$++){let z=O(Lt[$],U[$],lt);X(z.x,z.y,-L)}}}let kt=g+_;for(let at=0;at<N;at++){let mt=m?O(v[at],xt[at],kt):v[at];y?(I.copy(B.normals[0]).multiplyScalar(mt.x),T.copy(B.binormals[0]).multiplyScalar(mt.y),D.copy(x[0]).add(I).add(T),X(D.x,D.y,D.z)):X(mt.x,mt.y,0)}for(let at=1;at<=h;at++)for(let mt=0;mt<N;mt++){let L=m?O(v[mt],xt[mt],kt):v[mt];y?(I.copy(B.normals[at]).multiplyScalar(L.x),T.copy(B.binormals[at]).multiplyScalar(L.y),D.copy(x[at]).add(I).add(T),X(D.x,D.y,D.z)):X(L.x,L.y,d/h*at)}for(let at=p-1;at>=0;at--){let mt=at/p,L=u*Math.cos(mt*Math.PI/2),lt=g*Math.sin(mt*Math.PI/2)+_;for(let et=0,vt=E.length;et<vt;et++){let Lt=O(E[et],ut[et],lt);X(Lt.x,Lt.y,d+L)}for(let et=0,vt=b.length;et<vt;et++){let Lt=b[et];U=gt[et];for(let $=0,Ft=Lt.length;$<Ft;$++){let z=O(Lt[$],U[$],lt);y?X(z.x,z.y+x[h-1].y,x[h-1].x+L):X(z.x,z.y,d+L)}}}F(),Y();function F(){let at=s.length/3;if(m){let mt=0,L=N*mt;for(let lt=0;lt<V;lt++){let et=w[lt];ct(et[2]+L,et[1]+L,et[0]+L)}mt=h+p*2,L=N*mt;for(let lt=0;lt<V;lt++){let et=w[lt];ct(et[0]+L,et[1]+L,et[2]+L)}}else{for(let mt=0;mt<V;mt++){let L=w[mt];ct(L[2],L[1],L[0])}for(let mt=0;mt<V;mt++){let L=w[mt];ct(L[0]+N*h,L[1]+N*h,L[2]+N*h)}}n.addGroup(at,s.length/3-at,0)}function Y(){let at=s.length/3,mt=0;j(E,mt),mt+=E.length;for(let L=0,lt=b.length;L<lt;L++){let et=b[L];j(et,mt),mt+=et.length}n.addGroup(at,s.length/3-at,1)}function j(at,mt){let L=at.length;for(;--L>=0;){let lt=L,et=L-1;et<0&&(et=at.length-1);for(let vt=0,Lt=h+p*2;vt<Lt;vt++){let $=N*vt,Ft=N*(vt+1),z=mt+lt+$,R=mt+et+$,ht=mt+et+Ft,Tt=mt+lt+Ft;rt(z,R,ht,Tt)}}}function X(at,mt,L){l.push(at),l.push(mt),l.push(L)}function ct(at,mt,L){At(at),At(mt),At(L);let lt=s.length/3,et=A.generateTopUV(n,s,lt-3,lt-2,lt-1);Ht(et[0]),Ht(et[1]),Ht(et[2])}function rt(at,mt,L,lt){At(at),At(mt),At(lt),At(mt),At(L),At(lt);let et=s.length/3,vt=A.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Ht(vt[0]),Ht(vt[1]),Ht(vt[3]),Ht(vt[1]),Ht(vt[2]),Ht(vt[3])}function At(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function Ht(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new To[s.type]().fromJSON(s)),new i(n,t.options)}},jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Ot(r,o),new Ot(a,l),new Ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],m=t[s*3],u=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ot(o,1-l),new Ot(c,1-d),new Ot(m,1-g),new Ot(_,1-f)]:[new Ot(a,1-l),new Ot(h,1-d),new Ot(u,1-g),new Ot(p,1-f)]}};function Qg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $e=class i extends Dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var bs=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,m=(e-t)/s,u=new H,g=new Ot;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let f=r+p/n*o;u.x=d*Math.cos(f),u.y=d*Math.sin(f),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}d+=m}for(let _=0;_<s;_++){let p=_*(n+1);for(let f=0;f<n;f++){let A=f+p,x=A,y=A+n+1,B=A+n+2,T=A+1;a.push(x,y,T),a.push(y,B,T)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ro=class i extends Le{constructor(t=new Oi([new Ot(0,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(o,2));function c(h){let d=s.length/3,m=h.extractPoints(e),u=m.shape,g=m.holes;gi.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,f=g.length;p<f;p++){let A=g[p];gi.isClockWise(A)===!0&&(g[p]=A.reverse())}let _=gi.triangulateShape(u,g);for(let p=0,f=g.length;p<f;p++){let A=g[p];u=u.concat(A)}for(let p=0,f=u.length;p<f;p++){let A=u[p];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let p=0,f=_.length;p<f;p++){let A=_[p],x=A[0]+d,y=A[1]+d,B=A[2]+d;n.push(x,y,B),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pe=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new H,m=new H,u=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){let A=[],x=f/n,y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){let T=B/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),m.copy(d).normalize(),_.push(m.x,m.y,m.z),p.push(T+y,1-x),A.push(c++)}h.push(A)}for(let f=0;f<n;f++)for(let A=0;A<e;A++){let x=h[f][A+1],y=h[f][A],B=h[f+1][A],T=h[f+1][A+1];(f!==0||o>0)&&u.push(x,y,T),(f!==n-1||l<Math.PI)&&u.push(y,B,T)}this.setIndex(u),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ge=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new H,d=new H,m=new H;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let _=g/s*r,p=u/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),m.subVectors(d,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let _=(s+1)*u+g-1,p=(s+1)*(u-1)+g-1,f=(s+1)*(u-1)+g,A=(s+1)*u+g;o.push(_,p,A),o.push(p,f,A)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Co=class i extends Le{constructor(t=new Eo(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new Ot,h=new H,d=[],m=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(m,3)),this.setAttribute("uv",new ue(u,2));function _(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),A(),f()}function p(x){h=t.getPointAt(x/e,h);let y=o.normals[x],B=o.binormals[x];for(let T=0;T<=s;T++){let I=T/s*Math.PI*2,D=Math.sin(I),M=-Math.cos(I);l.x=M*y.x+D*B.x,l.y=M*y.y+D*B.y,l.z=M*y.z+D*B.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let B=(s+1)*(x-1)+(y-1),T=(s+1)*x+(y-1),I=(s+1)*x+y,D=(s+1)*(x-1)+y;g.push(B,T,D),g.push(T,I,D)}}function A(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)c.x=x/e,c.y=y/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new To[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Io=class extends si{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Yr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,f=-m*p+2*m*_-m*g,A=(1+m)*p+(-1.5-2*m)*_+(-.5+m)*g+1,x=(-1-u)*p+(1.5+u)*_+.5*g,y=u*p-u*_;for(let B=0;B!==a;++B)r[B]=f*o[h+B]+A*o[c+B]+x*o[l+B]+y*o[d+B];return r}},zl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let m=0;m!==a;++m)r[m]=o[c+m]*d+o[l+m]*h;return r}},Ol=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case hl:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,m=d-n,u=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[m+g]||_!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,m=o*n;for(let u=0;u!==n;++u)e[m+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=hl;var ki=class extends Un{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Qr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Un{};Bl.prototype.ValueTypeName="color";var kl=class extends Un{};kl.prototype.ValueTypeName="number";var Hl=class extends Ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Po=class extends Un{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Un{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Qr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Un{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,m=c.length;d<m;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},nx=new Gl,Wl=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lo=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Do=class extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wa=new ve,Ph=new H,Lh=new H,Xl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ql=class extends Xl{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ac="\\[\\]\\.:\\/",ix=new RegExp("["+ac+"]","g"),lc="[^"+ac+"]",sx="[^"+ac.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",lc),ox=/(WCOD+)?/.source.replace("WCOD",sx),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),cx=new RegExp("^"+rx+ox+ax+lx+"$"),hx=["material","materials","bones","map"],Yl=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ix,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Yl;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$l);var fx=2.3,Fe=7.2,Bo=.16,Mi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function of(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=F=>{let Y=Math.max(0,Math.min(s,F/r)),j=Math.min(s-1,Math.floor(Y)),X=Y-j,ct=n[Math.max(0,j-1)],rt=n[j],At=n[j+1],Ht=n[Math.min(s,j+2)],at=mt=>.5*(2*rt[mt]+(-ct[mt]+At[mt])*X+(2*ct[mt]-5*rt[mt]+4*At[mt]-Ht[mt])*X*X+(-ct[mt]+3*rt[mt]-3*At[mt]+Ht[mt])*X*X*X);return[at(0),at(2),rt[1]+(At[1]-rt[1])*X]},a=F=>{if(F<=i.lengthM)return o(F);let Y=o(i.lengthM-20),j=o(i.lengthM),X=(F-i.lengthM)/20;return[j[0]+(j[0]-Y[0])*X,j[1]+(j[1]-Y[1])*X,j[2]]},l=2700,c=2585,h=i.overlaps.filter(([F,Y])=>Y>F).sort((F,Y)=>F[1]-Y[1]),d=F=>{for(let X=0;X<h.length-1;X++){let[ct,rt]=h[X],[At,Ht]=h[X+1];if(F<=Ht)return ct+(F-rt)*(At-ct)/(Ht-rt)}let[Y,j]=h.at(-1);return Y+(F-j)},m=[];for(let F=0;F<=l;F+=2)m.push([F,...o(F)]);let u=2600,g=4900,_=[];for(let F=u;F<=g;F+=10){let Y=o(F),j=d(F),X=j,ct=1e9;for(let rt of m){if(Math.abs(rt[0]-j)>60)continue;let At=(rt[1]-Y[0])**2+(rt[2]-Y[1])**2;At<ct&&(ct=At,X=rt[0])}_.push(X)}let p=_.map((F,Y)=>{let j=0,X=0;for(let ct=-3;ct<=3;ct++){let rt=Y+ct;rt>=0&&rt<_.length&&(j+=_[rt],X++)}return j/X});for(let F=1;F<p.length;F++)p[F]=Math.max(p[F],p[F-1]+.5);let f=F=>{let Y=(F-u)/10,j=Math.max(0,Math.min(p.length-2,Math.floor(Y))),X=Y-j;return p[j]+(p[j+1]-p[j])*X},A={};function x(F){for(let Y of Object.keys(A))delete A[Y];for(let Y of F?.runners||[])!Y.diversions||!Y.diversions.length||(A[Y.id]=Y.diversions.map(j=>{let X=j.path,ct=[0];for(let rt=1;rt<X.length;rt++)ct.push(ct[rt-1]+Math.hypot(X[rt][0]-X[rt-1][0],X[rt][1]-X[rt-1][1]));return{...j,cum:ct,len:ct.at(-1)}}))}x(e);let y=(F,Y)=>{let j=Math.max(0,Math.min(1,(Y-F.fromM)/(F.toM-F.fromM)))*F.len,X=0;for(;X<F.cum.length-2&&F.cum[X+1]<j;)X++;let ct=(j-F.cum[X])/Math.max(1e-6,F.cum[X+1]-F.cum[X]);return[F.path[X][0]+(F.path[X+1][0]-F.path[X][0])*ct,F.path[X][1]+(F.path[X+1][1]-F.path[X][1])*ct]};function B(F){if(F<u-60){let ct=a(F);return[ct[0],ct[1]]}let Y=a(F);if(F>=g+40)return[Y[0],Y[1]];let j=Mi(u-60,u+60,F)*(1-Mi(g-60,g,F));if(j<=0)return[Y[0],Y[1]];let X=o(Math.min(l,f(Math.max(u,Math.min(g,F)))));return[Y[0]+(X[0]-Y[0])*j,Y[1]+(X[1]-Y[1])*j]}function T(F,Y){let j=B(F),X=Y&&A[Y];if(X){for(let ct of X)if(F>ct.fromM&&F<ct.toM){let rt=Mi(ct.fromM,ct.fromM+30,F)*(1-Mi(ct.toM-30,ct.toM,F)),At=y(ct,F);return j=[j[0]+(At[0]-j[0])*rt,j[1]+(At[1]-j[1])*rt],{x:j[0],z:j[1],div:rt,divInfo:ct}}}return{x:j[0],z:j[1],div:0,divInfo:null}}let[I,D,M,v]=t.bounds,b={x0:I-60,z0:D-60,cell:5};b.nx=Math.ceil((M+60-b.x0)/b.cell)+1,b.nz=Math.ceil((v+60-b.z0)/b.cell)+1,b.h=new Float32Array(b.nx*b.nz);let P=[];for(let F=0;F<=s;F+=2)P.push(n[F]);let w=0;for(let F of P)w+=F[1];w/=P.length;let E=(F,Y)=>Math.sin(F*.011+1.3)*Math.cos(Y*.009-.4)*2.2+Math.sin(F*.027+Y*.019)*.9;for(let F=0;F<b.nz;F++)for(let Y=0;Y<b.nx;Y++){let j=b.x0+Y*b.cell,X=b.z0+F*b.cell,ct=0,rt=0,At=1e9;for(let mt of P){let L=(mt[0]-j)**2+(mt[2]-X)**2;L<At&&(At=L);let lt=1/(L+400),et=lt*lt;ct+=et,rt+=et*mt[1]}let Ht=Mi(30,160,Math.sqrt(At)),at=rt/ct*(1-Ht*.4)+w*Ht*.4+E(j,X)*Ht;b.h[F*b.nx+Y]=at*fx}let O=t.features.filter(F=>F.closed&&["water","track","tennis","pitch"].includes(F.kind)&&F.pts.length>3);for(let F of O){let Y=wn(F.pts),j=[];for(let rt=Math.max(0,Math.floor((Y[1]-12-b.z0)/b.cell));rt<=Math.min(b.nz-1,Math.ceil((Y[3]+12-b.z0)/b.cell));rt++)for(let At=Math.max(0,Math.floor((Y[0]-12-b.x0)/b.cell));At<=Math.min(b.nx-1,Math.ceil((Y[2]+12-b.x0)/b.cell));At++){let Ht=b.x0+At*b.cell,at=b.z0+rt*b.cell,mt=hr(F.pts,Ht,at);mt<12&&j.push([rt*b.nx+At,mt])}let X=0,ct=0;for(let[rt,At]of j)At<0&&(X+=b.h[rt],ct++);if(ct){X/=ct,F.kind==="water"&&(X=Math.min(...j.filter(rt=>rt[1]<0).map(rt=>b.h[rt[0]]))-.2),F._level=X;for(let[rt,At]of j){let Ht=1-Mi(0,12,At);b.h[rt]=b.h[rt]*(1-Ht)+X*Ht-(F.kind==="water"?1.6*(1-Mi(-6,0,At)):0)}}}{for(let at=0;at<3;at++){let mt=new Float32Array(b.h);for(let L=1;L<b.nz-1;L++)for(let lt=1;lt<b.nx-1;lt++){let et=L*b.nx+lt;mt[et]=(b.h[et]*4+b.h[et-1]+b.h[et+1]+b.h[et-b.nx]+b.h[et+b.nx])/8}b.h.set(mt)}let F=new Float32Array(b.nx*b.nz).fill(1e9),Y=new Float32Array(b.nx*b.nz),j=new Float32Array(b.nx*b.nz),X=(at,mt)=>b.h[mt*b.nx+at],ct=(at,mt)=>{let L=Math.round((at-b.x0)/b.cell),lt=Math.round((mt-b.z0)/b.cell);return X(Math.max(0,Math.min(b.nx-1,L)),Math.max(0,Math.min(b.nz-1,lt)))},rt=[[0,c],[2540,2690],[g-80,i.lengthM+45]],At=[];for(let[at,mt]of rt)for(let L=at;L<=mt;L+=2){let lt=B(L);At.push([lt[0],lt[1],ct(lt[0],lt[1])])}for(let at=0;at<4;at++)for(let mt=1;mt<At.length-1;mt++)At[mt][2]=(At[mt-1][2]+At[mt][2]*2+At[mt+1][2])/4;let Ht=Fe/2+7;for(let[at,mt,L]of At){let lt=Math.floor((at-Ht-b.x0)/b.cell),et=Math.ceil((at+Ht-b.x0)/b.cell),vt=Math.floor((mt-Ht-b.z0)/b.cell),Lt=Math.ceil((mt+Ht-b.z0)/b.cell);for(let $=Math.max(0,vt);$<=Math.min(b.nz-1,Lt);$++)for(let Ft=Math.max(0,lt);Ft<=Math.min(b.nx-1,et);Ft++){let z=Math.hypot(b.x0+Ft*b.cell-at,b.z0+$*b.cell-mt);if(z>Ht)continue;let R=$*b.nx+Ft,ht=(1-z/Ht)**2;Y[R]+=ht,j[R]+=ht*L,z<F[R]&&(F[R]=z)}}for(let at=0;at<F.length;at++)if(F[at]<Ht&&Y[at]>0){let mt=1-Mi(Fe/2+.5,Ht,F[at]);b.h[at]=b.h[at]*(1-mt)+j[at]/Y[at]*mt}b.pathSamples=At}let N=O.filter(F=>F.kind==="water").sort((F,Y)=>Y.pts.length-F.pts.length)[0];function V(F,Y){let j=(F-b.x0)/b.cell,X=(Y-b.z0)/b.cell,ct=Math.max(0,Math.min(b.nx-2,Math.floor(j))),rt=Math.max(0,Math.min(b.nz-2,Math.floor(X))),At=Math.max(0,Math.min(1,j-ct)),Ht=Math.max(0,Math.min(1,X-rt)),at=b.h[rt*b.nx+ct],mt=b.h[rt*b.nx+ct+1],L=b.h[(rt+1)*b.nx+ct],lt=b.h[(rt+1)*b.nx+ct+1];return At+Ht<=1?at+(mt-at)*At+(L-at)*Ht:lt+(L-lt)*(1-At)+(mt-lt)*(1-Ht)}let k=new H;function ut(F,Y,j={}){let X=T(F,Y),ct=Math.max(0,F-4),rt=ct+8,At=T(ct,Y),Ht=T(rt,Y),at=Ht.x-At.x,mt=Ht.z-At.z,L=Math.hypot(at,mt)||1;return at/=L,mt/=L,j.x=X.x,j.z=X.z,j.y=V(X.x,X.z)+Bo,j.tx=at,j.tz=mt,j.rx=-mt,j.rz=at,j.slope=(V(Ht.x,Ht.z)-V(At.x,At.z))/Math.max(1,L),j.div=X.div,j.divInfo=X.divInfo,j}function gt(F,Y=25){let j=Math.max(0,F-Y),X=B(j),ct=B(j+2*Y),rt=Math.hypot(ct[0]-X[0],ct[1]-X[1])||1;return k.set((ct[0]-X[0])/rt,0,(ct[1]-X[1])/rt).clone()}let U=[{from:0,to:c,lift:0},{from:2540,to:2690,lift:.02},{from:g-80,to:i.lengthM+45,lift:.035}],xt=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:B,LAP1_END_DRAW:c,xzAt:T,sample:ut,heading:gt,heightAt:V,terrain:b,ribbons:U,finishM:xt,lake:N,flat:O,geoOf:F=>F>=u&&F<=g?f(F):F,diversions:A,setPlan:x,LAP1_END:l,MAP_FROM:u,MAP_TO:g}}function wn(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function Ts(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function hr(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,c]=i[s],h=l-o,d=c-a,m=h*h+d*d||1,u=Math.max(0,Math.min(1,((t-o)*h+(e-a)*d)/m));n=Math.min(n,Math.hypot(t-o-h*u,e-a-d*u))}return Ts(i,t,e)?-n:n}function Xe(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Le,c=0;for(let h=0;h<i.length;++h){let d=i[h],m=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let m=0;m<i.length;++m){let u=i[m].index;for(let g=0;g<u.count;++g)d.push(u.getX(g)+h);h+=i[m].attributes.position.count}l.setIndex(d)}for(let h in r){let d=af(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let m=0;m<d;++m){let u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][m]);let g=af(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function af(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ne(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let m=0,u=h.count;m<u;m++)for(let g=0;g<e;g++){let _=h.getComponent(m,g);a.setComponent(m+d,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var fr=new H;function Tn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;fr.copy(t),fr[n]=0,fr.normalize();let c=.5*o/(o+a),h=1-fr.angleTo(i)/l;return Math.sign(fr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ye=class extends be{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new H,l=new H,c=new H(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,m=this.attributes.uv.array,u=h.length/6,g=new H,_=.5/s;for(let p=0,f=0;p<h.length;p+=3,f+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/u)){case 0:g.set(1,0,0),m[f+0]=Tn(g,l,"z","y",r,n),m[f+1]=1-Tn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),m[f+0]=1-Tn(g,l,"z","y",r,n),m[f+1]=1-Tn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),m[f+0]=1-Tn(g,l,"x","z",r,t),m[f+1]=Tn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),m[f+0]=1-Tn(g,l,"x","z",r,t),m[f+1]=1-Tn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),m[f+0]=1-Tn(g,l,"x","y",r,t),m[f+1]=1-Tn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),m[f+0]=Tn(g,l,"x","y",r,t),m[f+1]=1-Tn(g,l,"y","x",r,e);break}}};var bi=null;function ux(){if(bi)return bi;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),bi=new tr(t,i.length,1,vn),bi.minFilter=bi.magFilter=fn,bi.generateMipmaps=!1,bi.needsUpdate=!0,bi}var ur=new Map;function pt(i,t={}){let e=!t.map&&(typeof i=="number"||typeof i=="string")?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&ur.has(e))return ur.get(e);let n=new Io({color:new se(i??16777215),gradientMap:ux(),...t});return e&&!t.map&&ur.set(e,n),n}function lf(){for(let i of ur.values())i.dispose();ur.clear(),dr.forEach(i=>i.dispose()),dr.clear()}var cc={uRes:{value:new Ot(1920,1080)}},dr=new Map;function dx(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(dr.has(n))return dr.get(n);let s=new un({uniforms:{...sc.clone(Kt.fog),uRes:cc.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new se(t)}},vertexShader:`
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
      }`,side:nn,fog:!0});return dr.set(n,s),s}function hc(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),c=n.get(l);c||(c=[0,0,0],n.set(l,c)),c[0]+=e.getX(a),c[1]+=e.getY(a),c[2]+=e.getZ(a),r.push(c)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}return i.setAttribute("onormal",new Ne(o,3)),i}function Nn(i,t=3,e,n){hc(i.geometry);let s=dx(t,e,n),r;return i.isInstancedMesh?(r=new Ye(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new Ce(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function me(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Ce(i,t);return a.castShadow=e,a.receiveShadow=n,s&&Nn(a,s,r,o),a}function Ke(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new Ms(o);return s&&(l.colorSpace=tn),n&&(l.wrapS=l.wrapT=Ni),l.anisotropy=r,l}var fc='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',ne=gn(20240817);function gn(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Fn(i,t,e,n){let s=Ke(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function je(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${fc}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function hf(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new he;i.add(a);let l=S=>(a.add(S),S),c=t.terrain,h=(c.nx-1)*c.cell,d=(c.nz-1)*c.cell,m=new Map,u=6,g=(S,G)=>`${Math.floor(S/u)},${Math.floor(G/u)}`,_=(S,G,Z)=>{let it=g(S,G),_t=m.get(it);_t||m.set(it,_t=[]),_t.push([S,G,Z])},p=(S,G,Z)=>{let it=Math.floor(S/u),_t=Math.floor(G/u),Q=Math.ceil((Z+30)/u);for(let wt=-Q;wt<=Q;wt++)for(let Wt=-Q;Wt<=Q;Wt++){let Ut=m.get(`${it+wt},${_t+Wt}`);if(Ut){for(let[J,Mt,Et]of Ut)if((J-S)**2+(Mt-G)**2<(Et+Z)**2)return!1}}return!0},f=[];for(let S of t.ribbons)for(let G=S.from;G<=S.to;G+=3){let Z=t.baseXZ(G);f.push(Z),_(Z[0],Z[1],Fe/2+1.5)}for(let S in t.diversions)for(let G of t.diversions[S])for(let Z of G.path)_(Z[0],Z[1],4);let A=s.features.filter(S=>S.kind==="park").sort((S,G)=>G.pts.length-S.pts.length)[0].pts,x=(S,G)=>Ts(A,S,G),B=s.features.filter(S=>S.closed&&["water","track","tennis","pitch","playground","building"].includes(S.kind)).map(S=>[wn(S.pts),S]),T=(S,G,Z=2)=>B.some(([it,_t])=>S>it[0]-Z&&S<it[2]+Z&&G>it[1]-Z&&G<it[3]+Z&&hr(_t.pts,S,G)<Z),I=1.7,D=[];function M(S,G){D.push({im:S,list:G})}let v=new ve().makeScale(0,0,0);function b(S){for(let{im:G,list:Z}of D){let it=!1;Z.forEach((_t,Q)=>{!_t.cleared&&S(_t.x,_t.z)&&(_t.cleared=!0,G.setMatrixAt(Q,v),it=!0)}),it&&(G.instanceMatrix.needsUpdate=!0)}}function P(){let S=w.image.getContext("2d");E(S,w.image.width,w.image.height),w.needsUpdate=!0}let w=Ke(Math.round(h*I),Math.round(d*I),(S,G,Z)=>E(S,G,Z),{aniso:8});o.push(w);function E(S,G,Z){let it=J=>(J-c.x0)*I,_t=J=>(J-c.z0)*I,Q=(J,Mt=!0)=>{S.beginPath(),J.forEach((Et,$t)=>$t?S.lineTo(it(Et[0]),_t(Et[1])):S.moveTo(it(Et[0]),_t(Et[1]))),Mt&&S.closePath()};S.fillStyle="#d8d2c2",S.fillRect(0,0,G,Z);for(let J=0;J<9e3;J++)S.fillStyle=ne()<.5?"#cfc8b6":"#e2dccd",S.fillRect(ne()*G,ne()*Z,3,3);Q(A),S.fillStyle="#66cf45",S.fill(),S.save(),Q(A),S.clip(),S.translate(G/2,Z/2),S.rotate(-.62);for(let J=-2e3;J<2e3;J+=2*14*I)S.fillStyle="rgba(255,255,140,0.10)",S.fillRect(J,-2500,14*I,5e3);S.setTransform(1,0,0,1,0,0);for(let J=0;J<26e3;J++){let Mt=ne()*G,Et=ne()*Z;S.fillStyle=ne()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",S.fillRect(Mt,Et,2+ne()*2,2+ne()*3)}S.restore();let wt=(J,Mt,Et)=>{for(let $t of s.features)$t.kind===J&&$t.closed&&(Q($t.pts),S.fillStyle=Mt,S.fill(),Et&&(S.strokeStyle=Et,S.lineWidth=2,S.stroke()))};wt("grass","#72d64e"),wt("garden","#86dc5c"),wt("wood","#3f9e3a"),wt("scrub","#5cb544");for(let J of s.features)if(J.kind==="pitch"&&J.closed){S.save(),Q(J.pts),S.clip(),S.fillStyle="#5ccc3f",S.fill();let Mt=wn(J.pts);for(let Et=Mt[0];Et<Mt[2];Et+=8)S.fillStyle="rgba(255,255,255,0.10)",S.fillRect(it(Et),_t(Mt[1]),4*I,(Mt[3]-Mt[1])*I);S.restore(),Q(J.pts),S.strokeStyle="#ffffff",S.lineWidth=2.2,S.stroke()}for(let J of s.features)if(J.kind==="playground"&&J.closed){Q(J.pts),S.fillStyle="#7fcfb4",S.fill(),S.save(),Q(J.pts),S.clip();let Mt=wn(J.pts);for(let Et=0;Et<260;Et++)S.fillStyle=ne()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",S.fillRect(it(Mt[0]+ne()*(Mt[2]-Mt[0])),_t(Mt[1]+ne()*(Mt[3]-Mt[1])),3,3);for(let Et=0;Et<(Mt[2]-Mt[0])*(Mt[3]-Mt[1])/400;Et++)S.beginPath(),S.arc(it(Mt[0]+ne()*(Mt[2]-Mt[0])),_t(Mt[1]+ne()*(Mt[3]-Mt[1])),1.6*I,0,7),S.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][Et%3],S.fill();S.restore(),Q(J.pts),S.strokeStyle="#ffffff",S.lineWidth=.8*I,S.stroke()}let Wt=J=>{let Mt=0;for(let Et=0,$t=J.pts.length-1;Et<J.pts.length;$t=Et++)Mt+=(J.pts[$t][0]+J.pts[Et][0])*(J.pts[$t][1]-J.pts[Et][1]);return Math.abs(Mt/2)};for(let J of s.features)if(J.kind==="track"&&J.closed&&Wt(J)>5e3){S.save(),Q(J.pts),S.clip(),S.fillStyle="#e2523a",S.fill();let Mt=9*I,Et=ko(J.pts),$t=wn(J.pts),oe=$t[2]-$t[0],re=$t[3]-$t[1],ge=Se=>J.pts.map(tt=>[Et[0]+(tt[0]-Et[0])*Se,Et[1]+(tt[1]-Et[1])*Se]),Me=1-2*9/Math.min(oe,re);for(let Se=1;Se<=5;Se++)Q(ge(1-(1-Me)*(Se/6))),S.strokeStyle="rgba(255,255,255,0.9)",S.lineWidth=1.6,S.stroke();Q(ge(Me)),S.fillStyle="#5ccc3f",S.fill(),S.strokeStyle="#ffffff",S.lineWidth=3,S.stroke(),S.restore(),Q(J.pts),S.strokeStyle="#ffffff",S.lineWidth=3,S.stroke()}for(let J of s.features)if(J.kind==="track"&&J.closed&&Wt(J)<=5e3){let Mt=J.tags?.surface==="sand";if(!J.tags?.surface)continue;Q(J.pts),S.fillStyle=Mt?"#f2d58f":"#e2523a",S.fill(),S.strokeStyle="#ffffff",S.lineWidth=1.5,S.stroke()}for(let J of s.features)if(J.kind==="tennis"&&J.closed){Q(J.pts),S.fillStyle="#3f9fd1",S.fill(),S.strokeStyle="#ffffff",S.lineWidth=2.5,S.stroke();let Mt=ko(J.pts),Et=wn(J.pts);S.save(),Q(J.pts),S.clip(),S.strokeStyle="rgba(255,255,255,0.9)",S.lineWidth=1.5,S.beginPath(),S.moveTo(it(Mt[0]),_t(Et[1])),S.lineTo(it(Mt[0]),_t(Et[3])),S.stroke(),S.restore()}for(let J of s.features)J.kind==="water"&&J.closed&&(Q(J.pts),S.strokeStyle="#f4efe0",S.lineWidth=3.4*I,S.lineJoin="round",S.stroke(),S.fillStyle="#2f8fe0",S.fill());for(let J of s.features)J.kind==="path"&&(Q(J.pts,!1),S.lineCap="round",S.lineJoin="round",S.strokeStyle="#c9ad78",S.lineWidth=3.6*I,S.stroke());for(let J of s.features)J.kind==="path"&&(Q(J.pts,!1),S.strokeStyle="#ecd8a6",S.lineWidth=2.6*I,S.stroke());let Ut=J=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[J.tags?.highway]||7;for(let J of s.features)J.kind==="road"&&(Q(J.pts,J.closed),S.lineCap="round",S.lineJoin="round",S.strokeStyle="#ece6d6",S.lineWidth=(Ut(J)+4)*I,S.stroke());for(let J of s.features)J.kind==="road"&&(Q(J.pts,J.closed),S.strokeStyle="#7f8597",S.lineWidth=Ut(J)*I,S.stroke());for(let J of s.features)J.kind==="road"&&Ut(J)>=11&&(Q(J.pts,!1),S.setLineDash([5*I,5*I]),S.strokeStyle="#f4f1e6",S.lineWidth=.5*I,S.stroke(),S.setLineDash([]));for(let J of s.features)J.kind==="rail"&&(Q(J.pts,!1),S.strokeStyle="#9b8f84",S.lineWidth=5*I,S.stroke());for(let J of s.features)J.kind==="rail"&&(Q(J.pts,!1),S.setLineDash([1,2]),S.strokeStyle="#5b4f46",S.lineWidth=3*I,S.stroke(),S.setLineDash([]),Q(J.pts,!1),S.strokeStyle="#c9ccd6",S.lineWidth=.8,S.stroke());for(let J of s.features)J.kind==="building"&&J.closed&&(Q(J.pts),S.fillStyle="#9c968a",S.fill());for(let J in t.diversions)for(let Mt of t.diversions[J])S.beginPath(),Mt.path.forEach((Et,$t)=>$t?S.lineTo(it(Et[0]),_t(Et[1])):S.moveTo(it(Et[0]),_t(Et[1]))),S.lineCap="round",S.lineJoin="round",S.strokeStyle="rgba(196,160,96,0.85)",S.lineWidth=4*I,S.stroke(),S.setLineDash([2*I,3*I]),S.strokeStyle="rgba(255,240,200,0.8)",S.lineWidth=.6*I,S.stroke(),S.setLineDash([])}{let S=c.nx*c.nz,G=new Float32Array(S*3),Z=new Float32Array(S*2);for(let Et=0;Et<c.nz;Et++)for(let $t=0;$t<c.nx;$t++){let oe=Et*c.nx+$t;G[oe*3]=c.x0+$t*c.cell,G[oe*3+1]=c.h[oe],G[oe*3+2]=c.z0+Et*c.cell,Z[oe*2]=$t/(c.nx-1),Z[oe*2+1]=1-Et/(c.nz-1)}let it=new Uint32Array((c.nx-1)*(c.nz-1)*6),_t=0;for(let Et=0;Et<c.nz-1;Et++)for(let $t=0;$t<c.nx-1;$t++){let oe=Et*c.nx+$t,re=oe+1,ge=oe+c.nx,Me=ge+1;it[_t++]=oe,it[_t++]=ge,it[_t++]=re,it[_t++]=re,it[_t++]=ge,it[_t++]=Me}let Q=new Le;Q.setAttribute("position",new Ne(G,3)),Q.setAttribute("uv",new Ne(Z,2)),Q.setIndex(new Ne(it,1)),Q.computeVertexNormals();let wt=pt(16777215,{map:w}),Wt=Ke(256,256,(Et,$t,oe)=>{Et.fillStyle="#808080",Et.fillRect(0,0,$t,oe);for(let re=0;re<1800;re++){let ge=100+Math.floor(ne()*70);Et.fillStyle=`rgb(${ge},${ge},${ge})`;let Me=ne()*$t,Se=ne()*oe;Et.fillRect(Me,Se,2,3+ne()*5)}for(let re=0;re<500;re++)Et.fillStyle="rgba(255,255,255,0.18)",Et.fillRect(ne()*$t,ne()*oe,2,2)},{repeat:!0,srgb:!1});o.push(Wt),wt.onBeforeCompile=Et=>{Et.uniforms.uDetail={value:Wt},Et.vertexShader=Et.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Et.fragmentShader=Et.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},wt.customProgramCacheKey=()=>"terrain-detail";let Ut=me(Q,wt,{cast:!1});Ut.name="terrain",l(Ut);let J=new Ce(new bs(700,5200,48,1),pt(13227680));J.rotation.x=-Math.PI/2,J.position.set(c.x0+h/2,-2,c.z0+d/2),J.receiveShadow=!1,l(J);let Mt=new Ce(new sn(h+1800,d+1800),pt(13686197));Mt.rotation.x=-Math.PI/2,Mt.position.set(c.x0+h/2,-3,c.z0+d/2),l(Mt)}let O=Ke(256,256,(S,G,Z)=>{S.fillStyle="#7f8fb0",S.fillRect(0,0,G,Z);for(let it=0;it<1600;it++)S.fillStyle=ne()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",S.fillRect(ne()*G,ne()*Z,2,2);S.fillStyle="#6b7a9b",S.fillRect(0,0,G*.035,Z),S.fillRect(G*.965,0,G*.035,Z),S.fillStyle="#ffffff",S.fillRect(G*.06,0,G*.045,Z),S.fillRect(G*.895,0,G*.045,Z),S.fillStyle="rgba(255,255,255,0.35)",S.fillRect(G*.49,0,G*.02,Z*.5)},{repeat:!0});o.push(O);{let S=[];for(let Q of t.ribbons)S.push(N(Q));let G=Xe(S),Z=me(G,pt(16777215,{map:O}),{cast:!1});Z.name="path",l(Z);let it=Xe(t.ribbons.map(Q=>N(Q,!0))),_t=me(it,pt(5924226),{cast:!1});l(_t)}function N(S,G=!1){let Z=[];for(let J=S.from;J<=S.to+.01;J+=2)Z.push(t.baseXZ(J));let it=[],_t=[],Q=[],wt=0;for(let J=0;J<Z.length;J++){let Mt=Z[Math.max(0,J-1)],Et=Z[Math.min(Z.length-1,J+1)],$t=Et[0]-Mt[0],oe=Et[1]-Mt[1],re=Math.hypot($t,oe)||1;$t/=re,oe/=re;let ge=-oe,Me=$t,Se=Fe/2,tt=[Z[J][0]-ge*Se,Z[J][1]-Me*Se],dt=[Z[J][0]+ge*Se,Z[J][1]+Me*Se],Yt=t.heightAt(Z[J][0],Z[J][1]),Vt=Math.max(t.heightAt(tt[0],tt[1]),Yt-.05)+Bo+S.lift,C=Math.max(t.heightAt(dt[0],dt[1]),Yt-.05)+Bo+S.lift;G?(it.push(tt[0]-ge*.15,Vt-.45,tt[1]-Me*.15,tt[0],Vt,tt[1],dt[0],C,dt[1],dt[0]+ge*.15,C-.45,dt[1]+Me*.15),_t.push(0,0,0,1,0,1,0,0)):(it.push(tt[0],Vt,tt[1],dt[0],C,dt[1]),_t.push(0,wt/8,1,wt/8)),J&&(wt+=2)}let Wt=G?4:2;for(let J=0;J<Z.length-1;J++){let Mt=J*Wt,Et=(J+1)*Wt;G?(Q.push(Mt,Et,Mt+1,Mt+1,Et,Et+1),Q.push(Mt+2,Et+2,Mt+3,Mt+3,Et+2,Et+3)):Q.push(Mt,Et,Mt+1,Mt+1,Et,Et+1)}let Ut=new Le;if(Ut.setAttribute("position",new ue(it,3)),Ut.setAttribute("uv",new ue(_t,2)),Ut.setIndex(Q),Ut.computeVertexNormals(),Ut.getAttribute("normal").getY(0)<0&&!G){let J=Ut.index.array;for(let Mt=0;Mt<J.length;Mt+=3){let Et=J[Mt+1];J[Mt+1]=J[Mt+2],J[Mt+2]=Et}Ut.computeVertexNormals()}return Ut}let V={uTime:{value:0}},k=s.features.filter(S=>S.kind==="water"&&S.closed);for(let S of k){let G=(S._level??Math.min(...S.pts.map(wt=>t.heightAt(wt[0],wt[1]))))+.05,Z=new Oi(S.pts.map(wt=>new Ot(wt[0],-wt[1]))),it=new Ro(Z,4);it.rotateX(-Math.PI/2),it.translate(0,G,0);let _t=new un({uniforms:{...V,...Kt.fog},vertexShader:`varying vec3 vW;
${de.fog_pars_vertex}
        void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; vec4 mvPosition = viewMatrix*w; gl_Position=projectionMatrix*mvPosition;
${de.fog_vertex}
}`,fragmentShader:`uniform float uTime; varying vec3 vW;
${de.fog_pars_fragment}
        void main(){
          vec2 p = vW.xz*0.09;
          float w1 = sin(p.x*3.1 + uTime*1.3 + sin(p.y*2.3+uTime*0.7)*1.7);
          float w2 = sin(p.y*2.7 - uTime*1.1 + sin(p.x*1.9-uTime*0.5)*1.9);
          float r = smoothstep(0.86,0.9, w1*w2);
          vec3 c = mix(vec3(0.16,0.55,0.93), vec3(0.24,0.70,1.0), smoothstep(-0.6,0.8,w1*0.5+w2*0.5));
          c = mix(c, vec3(0.92,0.98,1.0), r);
          gl_FragColor = vec4(c,1.);
          #include <colorspace_fragment>

${de.fog_fragment}
        }`,fog:!0}),Q=new Ce(it,_t);Q.name="water",l(Q),o.push(_t),S._waterLevel=G}let ut=[];if(t.lake){let S=t.lake,G=wn(S.pts),Z=[16767291,16735581,5752831,16777215,16748497,8257418],it=new ye(2,.7,3.6,2,.32),_t=new ye(1.2,.5,.8,2,.2);for(let Q=0,wt=0;Q<9&&wt<300;wt++){let Wt=G[0]+ne()*(G[2]-G[0]),Ut=G[1]+ne()*(G[3]-G[1]);if(hr(S.pts,Wt,Ut)>-7)continue;let J=new he,Mt=me(it,pt(Z[Q%Z.length]),{ol:2.5});J.add(Mt);let Et=me(_t,pt(16777215),{ol:2});Et.position.y=.45,J.add(Et);let $t=me(new pe(.42,12,8),pt(Z[(Q+2)%Z.length]),{ol:2});$t.position.set(0,.9,.7),J.add($t),J.position.set(Wt,(S._waterLevel??0)+.1,Ut),J.rotation.y=ne()*6.28,l(J),ut.push({g:J,ph:ne()*6.28,x:Wt,z:Ut,a:J.rotation.y}),Q++}}{let S=Ke(128,128,(Q,wt,Wt)=>{Q.fillStyle="#ffffff",Q.fillRect(0,0,wt,Wt),Q.fillStyle="#ffffff",Q.fillRect(0,0,14,14),Q.fillStyle="#3b4a6b",Q.fillRect(34,30,60,58),Q.fillStyle="#9ec9ff",Q.fillRect(38,34,52,50),Q.fillStyle="#ffffff",Q.fillRect(62,34,4,50),Q.fillRect(38,56,52,4),Q.fillStyle="rgba(0,0,0,0.08)",Q.fillRect(0,118,wt,10)},{repeat:!0});o.push(S);let G={generateTopUV:(Q,wt,Wt,Ut,J)=>[new Ot(.02,.98),new Ot(.02,.98),new Ot(.02,.98)],generateSideWallUV:(Q,wt,Wt,Ut,J,Mt)=>{let Et=wt[Wt*3],$t=wt[Wt*3+1],oe=wt[Wt*3+2],re=wt[Ut*3],ge=wt[Ut*3+1],Me=wt[Ut*3+2],Se=wt[J*3+2],tt=wt[Mt*3+2],dt=(Math.abs($t-ge)<Math.abs(Et-re)?Et:$t)/4.2,Yt=(Math.abs($t-ge)<Math.abs(Et-re)?re:ge)/4.2;return[new Ot(dt,oe/3.2),new Ot(Yt,Me/3.2),new Ot(Yt,Se/3.2),new Ot(dt,tt/3.2)]}},Z=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],it=["#5d6488","#7a5d6c","#4f6b78"],_t=[];for(let Q of s.features){if(Q.kind!=="building"||!Q.closed||Q.pts.length<4)continue;let wt=ko(Q.pts);if(x(wt[0],wt[1]))continue;let Wt=parseFloat(Q.tags?.["building:levels"])||(ne()<.7?3:4),Ut=Math.min(30,Wt*3.1),J=new Oi(Q.pts.map(Se=>new Ot(Se[0],-Se[1]))),Mt;try{Mt=new Ao(J,{depth:Ut,bevelEnabled:!1,UVGenerator:G})}catch{continue}Mt.rotateX(-Math.PI/2);let Et=Math.min(...Q.pts.map(Se=>t.heightAt(Se[0],Se[1])))-1.5;Mt.translate(0,Et,0);let $t=Mt.getAttribute("normal"),oe=$t.count,re=new Float32Array(oe*3),ge=new se(Z[Math.floor(ne()*Z.length)]).convertSRGBToLinear(),Me=new se(it[Math.floor(ne()*it.length)]).convertSRGBToLinear();for(let Se=0;Se<oe;Se++){let tt=$t.getY(Se)>.5?Me:ge;re[Se*3]=tt.r,re[Se*3+1]=tt.g,re[Se*3+2]=tt.b}Mt.setAttribute("color",new Ne(re,3)),_t.push(Mt.index?Mt.toNonIndexed():Mt)}if(_t.length){let Q=Xe(_t),wt=me(Q,pt(16777215,{map:S,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});wt.name="buildings",l(wt)}}let gt=t.sample(t.finishM),U=t.sample(0),xt={start:U,finish:gt},kt=new he;l(kt);function F(S,G,Z,it){let _t=new he,Q=Fe/2+1.4,wt=.85,Wt=Ke(256,32,(oe,re,ge)=>{for(let Me=0;Me<16;Me++)oe.fillStyle=Me%2?Z:it,oe.fillRect(Me*re/16,0,re/16+1,ge)},{repeat:!1});o.push(Wt);let Ut=new Ge(Q,wt,14,40,Math.PI);Ut.scale(1,1.25,1);let J=me(Ut,pt(16777215,{map:Wt}),{ol:3.5});_t.add(J);let Mt=new ce(wt*1.4,wt*1.6,.8,16);for(let oe of[-1,1]){let re=me(Mt,pt(it),{ol:3});re.position.set(oe*Q,.3,0),_t.add(re)}let Et=Fn(1024,256,(oe,re,ge)=>{oe.fillStyle="#1b1b3a",He(oe,0,0,re,ge,60),oe.fill(),oe.fillStyle=Z,He(oe,12,12,re-24,ge-24,50),oe.fill(),je(oe,"MARKRUN",re/2,ge*.42,150,"#ffffff","#1b1b3a",.18),je(oe,G,re/2,ge*.83,56,"#ffe14d","#1b1b3a",.2)},o),$t=me(new ye(Q*1.55,Q*.4,.7,3,.25),[pt(it),pt(it),pt(it),pt(it),pt(16777215,{map:Et}),pt(16777215,{map:Et})],{ol:3.5});return $t.position.y=Q*1.25+wt*1.25+Q*.2-.15,_t.add($t),_t.position.set(S.x,S.y-.1,S.z),_t.rotation.y=Math.atan2(-S.rz,S.rx),kt.add(_t),_t}xt.finishArch=F(gt,"FINISH","#ff3d8b","#ffd23f"),F(U,"START","#2e9bff","#ffd23f");let Y=Ke(256,64,(S,G,Z)=>{let _t=G/16;for(let Q=0;Q<16;Q++)for(let wt=0;wt<4;wt++)S.fillStyle=(Q+wt)%2?"#111":"#fff",S.fillRect(Q*_t,wt*_t,_t,_t)});o.push(Y);function j(S,G,Z,it=.03){let _t=new sn(Fe,Z);_t.rotateX(-Math.PI/2);let Q=new Ce(_t,pt(16777215,{map:G,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return Q.position.set(S.x,S.y+it,S.z),Q.rotation.y=Math.atan2(-S.rz,S.rx),Q.receiveShadow=!0,l(Q),Q}j(gt,Y,2.2,.05);let X=Fn(512,128,(S,G,Z)=>{S.fillStyle="#ffffff",S.fillRect(0,0,G,22),je(S,"START",G/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let S=t.sample(2.5);j(S,X,3,.05).rotation.y+=Math.PI}let ct=new Pe;function rt(S,G,Z,{ol:it=0,olRef:_t,cast:Q=!0,colors:wt,chunk:Wt=0}={}){if(!Z.length)return null;if(Wt){let J=new Map;Z.forEach((Et,$t)=>{let oe=`${Math.floor(Et.x/Wt)},${Math.floor(Et.z/Wt)}`,re=J.get(oe);re||J.set(oe,re={l:[],c:[]}),re.l.push(Et),wt&&re.c.push(wt[$t])});let Mt=null;for(let{l:Et,c:$t}of J.values()){let oe=rt(S,G,Et,{ol:it,olRef:_t,cast:Q,colors:wt?$t:null});Mt=Mt||oe}return Mt}let Ut=new Ye(S,G,Z.length);return Z.forEach((J,Mt)=>{ct.position.set(J.x,J.y,J.z),ct.rotation.set(J.rx||0,J.ry||0,J.rz||0),ct.scale.set(J.sx??J.s??1,J.sy??J.s??1,J.sz??J.s??1),ct.updateMatrix(),Ut.setMatrixAt(Mt,ct.matrix),wt&&Ut.setColorAt(Mt,new se(wt[Mt]))}),Ut.castShadow=Q,Ut.receiveShadow=!0,Ut.computeBoundingSphere(),it&&Nn(Ut,it,void 0,_t),M(Ut,Z),l(Ut),Ut}let At=[];{let S=Z=>{let it=t.rawExt(Z-12),_t=t.rawExt(Z),Q=t.rawExt(Z+12),wt=Math.atan2(_t[1]-it[1],_t[0]-it[0]),Ut=Math.atan2(Q[1]-_t[1],Q[0]-_t[0])-wt;for(;Ut>Math.PI;)Ut-=2*Math.PI;for(;Ut<-Math.PI;)Ut+=2*Math.PI;return Ut},G=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[Z,it]of G){let _t=null;for(let Q=Z;Q<it;Q+=4){let wt=S(Q);Math.abs(wt)>.45?(!_t||Math.abs(wt)>Math.abs(_t.d))&&(_t={m:Q,d:wt}):_t&&(At.some(Wt=>Math.abs(Wt.m-_t.m)<50)||At.push(_t),_t=null)}}}let Ht=[],at=[],mt=[],L=[];for(let S of At){let G=S.d>0;for(let Z=-2;Z<=2;Z++){let it=t.sample(S.m+Z*5),_t=G?-1:1,Q=Fe/2+1.6,wt=it.x+it.rx*Q*_t,Wt=it.z+it.rz*Q*_t;p(wt,Wt,.3),(G?at:Ht).push({x:wt,y:t.heightAt(wt,Wt),z:Wt,ry:Math.atan2(-it.tz,it.tx)+(_t>0?Math.PI:0)})}for(let Z=-3;Z<=3;Z++){let it=t.sample(S.m+Z*3.5),_t=G?1:-1,Q=Fe/2+.7;mt.push({x:it.x+it.rx*Q*_t,y:t.heightAt(it.x+it.rx*Q*_t,it.z+it.rz*Q*_t),z:it.z+it.rz*Q*_t,ry:ne()*6});for(let wt=0;wt<2;wt++){let Wt=t.sample(S.m+Z*3.5+wt*1.75),Ut=Fe/2+.1;L.push({x:Wt.x+Wt.rx*Ut*_t,y:Wt.y-.05,z:Wt.z+Wt.rz*Ut*_t,ry:Math.atan2(Wt.tx,Wt.tz),red:(Z*2+wt)%2===0})}}}xt.corners=At;{let S=Ke(256,96,(Ut,J,Mt)=>{Ut.fillStyle="#2f6fe0",Ut.fillRect(0,0,J,Mt),Ut.fillStyle="#ffffff";for(let Et=0;Et<4;Et++){let $t=18+Et*60;Ut.beginPath(),Ut.moveTo($t,12),Ut.lineTo($t+26,12),Ut.lineTo($t+54,Mt/2),Ut.lineTo($t+26,Mt-12),Ut.lineTo($t,Mt-12),Ut.lineTo($t+28,Mt/2),Ut.closePath(),Ut.fill()}Ut.strokeStyle="#1b3f8f",Ut.lineWidth=8,Ut.strokeRect(0,0,J,Mt)}),G=S.clone();G.repeat.x=-1,G.offset.x=1,G.wrapS=Ni,G.needsUpdate=!0,o.push(S,G);let it=(Ut=>{let J=new be(3.2,1.2,.12);J.rotateX(-.32),J.translate(0,.62,.22);let Mt=new be(3.2,1.2,.12);return Mt.rotateX(.32),Mt.translate(0,.62,-.22),Mt.rotateY(Math.PI),Xe([J,Mt])})();hc(it),rt(it,pt(16777215,{map:S}),at,{ol:2.5}),rt(it,pt(16777215,{map:G}),Ht,{ol:2.5});let _t=Ke(16,64,(Ut,J,Mt)=>{for(let Et=0;Et<4;Et++)Ut.fillStyle=Et%2?"#ffffff":"#ff6a2b",Ut.fillRect(0,Et*Mt/4,J,Mt/4)});o.push(_t);let Q=new ce(.06,.32,.9,12,1);Q.translate(0,.5,0);let wt=new be(.8,.08,.8);wt.translate(0,.04,0),rt(Q,pt(16777215,{map:_t}),mt,{ol:2}),rt(wt,pt(16738859),mt,{ol:1.5});let Wt=new be(.5,.22,1.75);Wt.translate(0,.11,0),rt(Wt,pt(16777215),L.map(Ut=>Ut),{ol:1.5,colors:L.map(Ut=>Ut.red?15216959:16777215)})}let lt=new he;l(lt);function et(S,G,Z,it,_t,{postH:Q=1.6,face:wt=0,scale:Wt=1}={}){let Ut=Fn(512,Math.round(512*it/Z),_t,o),J=new he,Mt=me(new ye(Z,it,.25,2,.08),[pt(5978660),pt(5978660),pt(5978660),pt(5978660),pt(16777215,{map:Ut}),pt(16777215,{map:Ut})],{ol:3});Mt.position.y=Q+it/2,J.add(Mt);let Et=new be(.25,Q+it*.5,.25);for(let ge of[-1,1]){let Me=me(Et,pt(9067062),{ol:2});Me.position.set(ge*Z*.35,(Q+it*.5)/2,-.1),J.add(Me)}let $t=Fe/2+2.2+Z*.15,oe=S.x+S.rx*$t*G,re=S.z+S.rz*$t*G;return J.position.set(oe,t.heightAt(oe,re)-.1,re),J.rotation.y=Math.atan2(-S.tx,-S.tz)+G*.5+wt,J.scale.setScalar(Wt),lt.add(J),J}let vt=1720,Lt=t.sample(vt-10);xt.hillSign=et(Lt,1,6,3.2,(S,G,Z)=>{S.fillStyle="#ffd23f",He(S,0,0,G,Z,40),S.fill(),S.lineWidth=16,S.strokeStyle="#1b1b3a",He(S,8,8,G-16,Z-16,34),S.stroke(),S.fillStyle="#3aa845",S.beginPath(),S.moveTo(40,Z-40),S.lineTo(150,70),S.lineTo(260,Z-40),S.closePath(),S.fill(),S.strokeStyle="#1b1b3a",S.lineWidth=8,S.stroke(),S.fillStyle="#fff",S.beginPath(),S.moveTo(118,118),S.lineTo(150,70),S.lineTo(182,118),S.closePath(),S.fill(),je(S,"THE",380,Z*.3,72,"#ffffff","#1b1b3a",.2),je(S,"HILL",370,Z*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),xt.hillM=vt;for(let S of[1,2,3,4]){let G=S*1e3,Z=t.sample(t.geoOf(G));et(Z,-1,1.6,1.3,(it,_t,Q)=>{it.fillStyle="#ffffff",He(it,0,0,_t,Q,50),it.fill(),it.fillStyle="#ff3d8b",He(it,20,20,_t-40,Q-40,36),it.fill(),je(it,`${S}K`,_t/2,Q/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let $=t.sample(2475);xt.lapBoard=et($,1,4.4,2.6,(S,G,Z)=>{S.fillStyle="#1b1b3a",He(S,0,0,G,Z,40),S.fill(),S.fillStyle="#2e9bff",He(S,14,14,G-28,Z-28,30),S.fill(),je(S,"LAP",G/2,Z*.28,90,"#ffffff","#1b1b3a",.18),je(S,"2 OF 2",G/2,Z*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),xt.lapM=2500;let Ft=[],z=[],R=[],ht=[];function Tt(S,G,Z,it=3.2,_t=12){let Q=null;for(let wt=S;wt<=G;wt+=_t){let Wt=t.sample(wt),Ut=Fe/2+1,J=Wt.x+Wt.rx*Ut*Z,Mt=Wt.z+Wt.rz*Ut*Z,Et=t.heightAt(J,Mt);z.push({x:J,y:Et,z:Mt});let $t=new H(J,Et+it,Mt);if(Q){let oe=[];for(let re=0;re<=12;re++){let ge=re/12,Me=Q.clone().lerp($t,ge);Me.y-=Math.sin(ge*Math.PI)*.6,oe.push(Me)}R.push(oe);for(let re=1;re<12;re++){let ge=oe[re],Me=oe[re+1].clone().sub(oe[re-1]);Ft.push({x:ge.x,y:ge.y,z:ge.z,ry:Math.atan2(-Me.z,Me.x)})}}Q=$t}}function It(S,G,Z,it=Fe/2+2.2){for(let _t=S;_t<=G;_t+=2.4){let Q=t.sample(_t),wt=Q.x+Q.rx*it*Z,Wt=Q.z+Q.rz*it*Z;ht.push({x:wt,y:t.heightAt(wt,Wt),z:Wt,ry:Math.atan2(Q.tx,Q.tz)})}}let q=t.finishM;Tt(q-70,q+10,1),Tt(q-70,q+10,-1),Tt(-6,50,1),Tt(-6,50,-1),It(q-60,q+14,1),It(q-60,q+14,-1),It(-4,40,1),It(-4,40,-1);{let S=new Le;S.setAttribute("position",new ue([-.3,0,0,.3,0,0,0,-.62,0],3)),S.setAttribute("normal",new ue([0,0,1,0,0,1,0,0,1],3));let G=Ft.map((J,Mt)=>[16727435,16765503,3054591,4054148,16747069,16777215][Mt%6]);rt(S,pt(16777215,{side:We}),Ft,{colors:G,cast:!1});let Z=new ce(.07,.09,3.3,6);Z.translate(0,1.65,0),rt(Z,pt(16777215),z,{ol:1.5});let it=new Le().setFromPoints(R.flatMap(J=>J.slice(0,-1).flatMap((Mt,Et)=>[Mt,J[Et+1]]))),_t=new vs(it,new zi({color:3355443}));l(_t),o.push(it);let Q=[];for(let J=0;J<4;J++){let Mt=new be(.16,1,.06);Mt.translate(-.9+J*.6,.5,0),Q.push(Mt)}let wt=new be(2.4,.12,.05);wt.translate(0,.65,.05),Q.push(wt);let Wt=wt.clone();Wt.translate(0,-.35,0),Q.push(Wt);let Ut=Xe(Q);Ut.rotateY(Math.PI/2),rt(Ut,pt(16777215),ht,{ol:1.8})}let ft=[],ot=(S,G,Z,it,_t,Q=1.35)=>ft.push({m0:S,m1:G,side:Z,off:Fe/2+3,depth:it,density:_t,spacing:Q});ot(q-58,q+12,1,6,1),ot(q-58,q+12,-1,6,1),ot(-2,38,1,5,.9),ot(-2,38,-1,5,.9),ot(1940,2010,1,4,.7),ot(1960,2010,-1,3,.6),ot(vt-10,vt+40,-1,3,.55),ot(2440,2490,-1,3,.7),ot(vt-70,vt+10,1,3,.5),ot(vt-70,vt-20,-1,3,.45),ot(2080,2160,1,4,.75),ot(2080,2160,-1,4,.75),ot(800,860,1,3,.6),ot(1250,1310,-1,3,.6),xt.crowdZones=ft;{let S=s.pois.filter(it=>it.kind==="bench"&&x(it.pos[0],it.pos[1])&&p(it.pos[0],it.pos[1],1)).map(it=>({x:it.pos[0],y:t.heightAt(it.pos[0],it.pos[1]),z:it.pos[1],ry:ne()*6})),G=Xe([new be(1.8,.12,.5).translate(0,.5,0),new be(1.8,.4,.1).translate(0,.8,-.22),new be(.1,.5,.45).translate(-.8,.25,0),new be(.1,.5,.45).translate(.8,.25,0)]);rt(G,pt(11892031),S,{ol:1.5});let Z=s.pois.filter(it=>it.kind==="cafe"&&x(it.pos[0],it.pos[1])&&p(it.pos[0],it.pos[1],4));for(let it of Z){let _t=new he;_t.add(me(new ye(5,3,4,2,.2),pt(16774108),{ol:2.5})).position.y=1.5;let Q=Ke(128,16,(Ut,J,Mt)=>{for(let Et=0;Et<8;Et++)Ut.fillStyle=Et%2?"#fff":"#ff4f6d",Ut.fillRect(Et*16,0,16,Mt)});o.push(Q);let wt=me(new be(5.6,.2,2),pt(16777215,{map:Q}),{ol:2});wt.position.set(0,2.9,2.3),wt.rotation.x=.35,_t.add(wt);let Wt=me(new ke(4,1.6,4),pt(3054591),{ol:2.5});Wt.position.y=3.8,Wt.rotation.y=Math.PI/4,_t.add(Wt),_t.position.set(it.pos[0],t.heightAt(it.pos[0],it.pos[1]),it.pos[1]),_t.rotation.y=ne()*6,l(_t),_(it.pos[0],it.pos[1],5)}}for(let S of ft)for(let G=S.m0-8;G<=S.m1+8;G+=4){let Z=t.sample(G),it=S.off+S.depth/2;_(Z.x+Z.rx*it*S.side,Z.z+Z.rz*it*S.side,S.depth/2+3)}for(let S of[U,gt])_(S.x,S.z,14);function bt(S,G){let Z=null,it=1e9;for(let _t of f){let Q=(_t[0]-S)**2+(_t[1]-G)**2;Q<it&&(it=Q,Z=_t)}return Z}xt.nearestOnRibbon=bt,xt.ribbonSamples=f;let St=new Map;for(let S of f){let G=`${Math.floor(S[0]/10)},${Math.floor(S[1]/10)}`,Z=St.get(G);Z||St.set(G,Z=[]),Z.push(S)}let Rt=(S,G,Z=1)=>{let it=Math.floor(S/10),_t=Math.floor(G/10),Q=(Fe/2+Z)**2;for(let wt=-1;wt<=1;wt++)for(let Wt=-1;Wt<=1;Wt++)for(let Ut of St.get(`${it+wt},${_t+Wt}`)||[])if((Ut[0]-S)**2+(Ut[1]-G)**2<Q)return!0;return!1};xt.reserve=_,xt.clearOf=p;let Pt=[],Xt=(S,G,Z,it)=>!p(S,G,2.5*it)||T(S,G,1.5)?!1:(Pt.push({x:S,z:G,kind:Z,s:it}),_(S,G,2.2*it),!0);for(let S of s.pois)S.kind==="tree"&&Xt(S.pos[0],S.pos[1],0,.85+ne()*.35);for(let S of s.features)if(S.kind==="wood"&&S.closed){let G=wn(S.pts),Z=(G[2]-G[0])*(G[3]-G[1]);for(let it=0;it<Z/90;it++){let _t=G[0]+ne()*(G[2]-G[0]),Q=G[1]+ne()*(G[3]-G[1]);Ts(S.pts,_t,Q)&&Xt(_t,Q,1,.9+ne()*.5)}}{let S=wn(A);for(let G=0;G<2600;G++){let Z=S[0]+ne()*(S[2]-S[0]),it=S[1]+ne()*(S[3]-S[1]);!x(Z,it)||-hr(A,Z,it)>45&&ne()<.75||Xt(Z,it,ne()<.7?1:2,.8+ne()*.5)}for(let G of s.features)if(G.kind==="road"&&!G.closed)for(let Z=1;Z<G.pts.length;Z++){let it=G.pts[Z-1],_t=G.pts[Z],Q=Math.hypot(_t[0]-it[0],_t[1]-it[1]);for(let wt=0;wt<Q;wt+=22){let Wt=wt/Q,Ut=it[0]+(_t[0]-it[0])*Wt,J=it[1]+(_t[1]-it[1])*Wt,Mt=-(_t[1]-it[1])/Q,Et=(_t[0]-it[0])/Q,$t=8+ne()*2;ne()<.5&&Xt(Ut+Mt*$t,J+Et*$t,0,.6+ne()*.2)}}}{let S=[3978315,5031250,3121226,6539594,8376650,3450963],G=new ce(.32,.5,4.2,7);G.translate(0,2.1,0);let Z=new $e(3.2,1);Z.scale(1,1.08,1),Z.translate(0,6.6,0);let it=Xe([new $e(3,1).translate(0,6.2,0),new $e(2.3,0).translate(1.9,5.3,.6),new $e(2.2,0).translate(-1.7,5.5,-.8),new $e(2,0).translate(.2,8.2,.3)].map(cf)),_t=Xe([new ke(3,4.2,8).translate(0,5,0),new ke(2.4,3.6,8).translate(0,7.2,0),new ke(1.6,3,8).translate(0,9.2,0)].map(cf)),Q=Pt.map(Ut=>({x:Ut.x,y:t.heightAt(Ut.x,Ut.z)-.2,z:Ut.z,ry:ne()*6.28,s:Ut.s}));rt(G,pt(9067062),Q,{ol:2,olRef:40,chunk:160});let wt=pt(16777215);Z.computeVertexNormals(),[Z,it,_t].forEach((Ut,J)=>{let Mt=Q.filter((Et,$t)=>Pt[$t].kind===J);rt(Ut,wt,Mt,{ol:2.2,olRef:40,colors:Mt.map(()=>S[Math.floor(ne()*S.length)]),chunk:160})}),xt.treeCount=Pt.length}{let S=Xe([0,1,2,3].map(Q=>{let wt=new ke(.09,.55,3);return wt.translate(0,.27,0),wt.rotateZ((Q-1.5)*.25),wt.rotateY(Q*1.7),wt.translate((Q-1.5)*.08,0,Q%2*.06),wt.index?wt.toNonIndexed():wt})),G=Xe([new ce(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new $e(.13,0).translate(0,.38,0)]),Z=[],it=[],_t=[];for(let Q=0;Q<9e3;Q++){let wt=f[Math.floor(ne()*f.length)],Wt=ne()*6.283,Ut=Fe/2+1+ne()*22,J=wt[0]+Math.cos(Wt)*Ut,Mt=wt[1]+Math.sin(Wt)*Ut;if(!x(J,Mt)||T(J,Mt,.5)||!p(J,Mt,.2))continue;let Et=t.heightAt(J,Mt)-.03;ne()<.62?Z.push({x:J,y:Et,z:Mt,ry:ne()*6,s:.5+ne()*.6}):(it.push({x:J,y:Et,z:Mt,ry:ne()*6,s:.35+ne()*.25}),_t.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(ne()*6)]))}rt(S,pt(5226296),Z,{cast:!1,chunk:120}),rt(G,pt(16777215),it,{cast:!1,colors:_t,chunk:120})}let jt=new un({side:nn,depthWrite:!1,fog:!1,uniforms:{top:{value:new se(3116287)},mid:{value:new se(9425919)},bot:{value:new se(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),Zt=new Ce(new pe(5e3,32,16),jt);Zt.renderOrder=-10,Zt.frustumCulled=!1,i.add(Zt),o.push(jt,Zt.geometry);let fe=Xe([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([S,G,Z,it])=>new $e(it,2).translate(S,G,Z)));fe.scale(1,.7,.8);let ie=[c.x0+h/2,c.z0+d/2],_e=[];for(let S=0;S<26;S++){let G=ne()*6.28,Z=300+ne()*1300;_e.push({x:ie[0]+Math.cos(G)*Z,y:170+ne()*120,z:ie[1]+Math.sin(G)*Z,ry:ne()*6,s:.8+ne()*1.4})}let nt=rt(fe,pt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),_e,{ol:1.5,olRef:300,cast:!1}),qt=[];for(let S=0;S<18;S++){let G=S/18*6.28+ne()*.2,Z=1900+ne()*500;qt.push({x:ie[0]+Math.cos(G)*Z,y:-40,z:ie[1]+Math.sin(G)*Z,sx:320+ne()*260,sy:80+ne()*90,sz:260+ne()*200,ry:ne()*6})}rt(new pe(1,24,12),pt(7128954),qt,{cast:!1,colors:qt.map((S,G)=>[8047487,6273413,9425290][G%3])});function Ct(S){V.uTime.value=S;for(let G of ut)G.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(S*1.7+G.ph)*.08,G.g.rotation.z=Math.sin(S*1.3+G.ph)*.06,G.g.rotation.y=G.a+Math.sin(S*.1+G.ph)*.4;nt&&(nt.position.x=Math.sin(S*.01)*40)}function Dt(){a.traverse(S=>{S.geometry&&S.geometry.dispose()});for(let S of o)S.dispose?.();i.remove(a),i.remove(Zt)}return{group:a,anchors:xt,update:Ct,dispose:Dt,inPark:x,clearOf:p,reserve:_,blocked:T,groundTex:w,onPath:Rt,registerInstanced:M,clearArea:b,redrawGround:P}}function cf(i){let t=i.index?i.toNonIndexed():i;return t.computeVertexNormals(),t}function ko(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function He(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var ff=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],uf=[4054148,16727435,16765503,3054591,16777215];function px(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new Ot(Math.max(.001,o),r))}i.unshift(new Ot(.001,0));let e=new rr(i,12);return e.computeVertexNormals(),e}function uc(i,t){let e=gn(99),n=t.length,s=new he;if(i.add(s),!n)return{update(){},hideWhere(){},dispose(){i.remove(s)},group:s};let r=px(),o=new pe(.15,8,5);o.scale(.8,1.15,.5);let a=new pe(.075,6,4);a.scale(.85,1.2,.5);let l=new pe(.13,6,5),c=new ke(.14,.36,6);c.translate(0,.18,0);let h=new ke(.26,.55,8);h.translate(0,.27,0);let d=new pe(.2,7,5),m=(k,ut,gt,U)=>{let xt=new Ye(k,ut,gt);return xt.castShadow=!0,xt.receiveShadow=!0,xt.userData.ol=U,s.add(xt),xt},u=m(r,pt(16777215),n,2.6),g=m(o,new mn({color:16777215}),n*2,0),_=m(a,new mn({color:1709088}),n*2,0),p=m(l,pt(16777215),n*2,2);g.castShadow=_.castShadow=!1;let f=[m(c,pt(16777215),n,2),m(h,pt(16777215),n,2),m(d,pt(16777215),n,2)],A=[0,0,0],x=new se,y=t.map((k,ut)=>{let gt=k.colour??ff[Math.floor(e()*ff.length)];u.setColorAt(ut,x.set(gt)),p.setColorAt(ut*2,x),p.setColorAt(ut*2+1,x);let U=e()<.3?-1:Math.floor(e()*3),xt=-1;return U>=0&&(xt=A[U]++,f[U].setColorAt(xt,x.set(uf[Math.floor(e()*uf.length)]))),{...k,s:k.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:U,ti:xt,wave:e()<.5,ex:.3}});f.forEach((k,ut)=>{k.count=A[ut]});for(let k of[u,p,...f])k.instanceColor&&(k.instanceColor.needsUpdate=!0);let B=new ve().makeScale(0,0,0),T=new ve,I=new Sn,D=new Ln,M=new H,v=new H,b=new ve,P=new ve;function w(k,ut,gt){let U=y[k];if(U.hidden){for(let j of[u])j.setMatrixAt(k,B);for(let j=0;j<2;j++)g.setMatrixAt(k*2+j,B),_.setMatrixAt(k*2+j,B),p.setMatrixAt(k*2+j,B);U.tk>=0&&f[U.tk].setMatrixAt(U.ti,B);return}let xt=U.ex,kt=ut*U.sp*(.5+xt*.6)+U.ph,F=Math.max(0,Math.sin(kt))*.32*xt,Y=1-Math.cos(kt*2)*.05*xt;D.set(0,U.yaw+Math.sin(ut*.8+U.ph)*.25*(1-xt),Math.sin(kt*.5)*.08*xt),I.setFromEuler(D),b.compose(M.set(U.x,U.y+F,U.z),I,v.set(U.s/Math.sqrt(Y),U.s*Y,U.s/Math.sqrt(Y))),u.setMatrixAt(k,b);for(let j=0;j<2;j++){let X=j?.19:-.19;P.makeTranslation(X,.86,.5),T.multiplyMatrices(b,P),g.setMatrixAt(k*2+j,T),P.makeTranslation(X*1.02,.84+(xt>.6?.03:0),.565),T.multiplyMatrices(b,P),_.setMatrixAt(k*2+j,T);let ct=xt>.55?1:.15+.2*Math.max(0,Math.sin(kt)),rt=U.wave?Math.sin(kt*1.5+j*3)*.25*xt:0,At=(j?1:-1)*(.62+ct*.05+rt*.3),Ht=.45+ct*.85+rt;P.makeTranslation(At,Ht,.12),T.multiplyMatrices(b,P),p.setMatrixAt(k*2+j,T)}U.tk>=0&&(P.makeTranslation(0,1.22,0),U.tk===0&&P.multiply(new ve().makeRotationZ(Math.sin(kt)*.3)),T.multiplyMatrices(b,P),f[U.tk].setMatrixAt(U.ti,T))}for(let k=0;k<n;k++)w(k,0,!0);let E=()=>{for(let k of[u,g,_,p,...f])k.instanceMatrix.needsUpdate=!0};E();for(let k of[u,g,_,p,...f]){if(!k.count){k.visible=!1;continue}k.computeBoundingSphere(),k.boundingSphere.radius+=2,k.userData.ol&&Nn(k,k.userData.ol,void 0,18)}function O(k,ut,gt=[],U=null){let xt=!1;for(let kt=0;kt<n;kt++){let F=y[kt];if(ut&&(F.x-ut.x)**2+(F.z-ut.z)**2>260*260)continue;let Y=.25;if(U!=null)Y=U;else for(let j of gt){let X=(j.x-F.x)**2+(j.z-F.z)**2;X<45*45&&(Y=Math.max(Y,1-Math.sqrt(X)/70))}F.ex+=(Y-F.ex)*.05,w(kt,k),xt=!0}xt&&E()}function N(){for(let k of[r,o,a,l,c,h,d])k.dispose();for(let k of[u,g,_,p,...f])k.dispose();i.remove(s)}function V(k){let ut=!1;for(let gt=0;gt<n;gt++)!y[gt].hidden&&k(y[gt].x,y[gt].z)&&(y[gt].hidden=!0,w(gt,0),ut=!0);ut&&E()}return{update:O,dispose:N,hideWhere:V,group:s,members:y}}function df(i,t,e=5,n=null,s=null){let r=gn(e),o=[];for(let[a,l]of t.entries())for(let c=l.m0;c<=l.m1;c+=l.spacing??1.35){let h=i.sample(c),d=Math.max(1,Math.round(l.depth/1.25));for(let m=0;m<d;m++){if(r()>l.density)continue;let u=l.off+m*1.25+r()*.35,g=(r()-.5)*.6,_=h.x+h.rx*u*l.side+h.tx*g,p=h.z+h.rz*u*l.side+h.tz*g;n&&n(_,p,1.4)||s&&s(_,p,.6)||o.push({zone:a,x:_,y:i.heightAt(_,p),z:p,yaw:Math.atan2(-h.rx*l.side,-h.rz*l.side)+(r()-.5)*.5})}}return o}var pf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},mf=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],mx=3.2,pr=new Map,Qt=(i,t)=>(pr.has(i)||pr.set(i,t()),pr.get(i));function gf(){for(let i of pr.values())i.dispose();pr.clear()}function gx(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function xx(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,c=t*.058,h="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let p of[-1,1])i.beginPath(),i.ellipse(o+p*c*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let d=(p,f)=>{if(f==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=h,i.lineWidth=5,i.beginPath();let T=t*.03;i.moveTo(p,a+T*1.1),i.bezierCurveTo(p-T*2.2,a-T*.2,p-T*.9,a-T*1.9,p,a-T*.6),i.bezierCurveTo(p+T*.9,a-T*1.9,p+T*2.2,a-T*.2,p,a+T*1.1),i.fill(),i.stroke();return}if(f==="closed"||f==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),f==="happy"?i.arc(p,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(p-t*.025,a),i.lineTo(p+t*.025,a)),i.stroke();return}if(f==="x"){i.strokeStyle=h,i.lineWidth=8,i.lineCap="round";let T=t*.02;i.beginPath(),i.moveTo(p-T,a-T),i.lineTo(p+T,a+T),i.moveTo(p+T,a-T),i.lineTo(p-T,a+T),i.stroke();return}if(f==="wink"&&p>o&&(f="happy"),f==="wink"&&(f="open"),f==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),i.arc(p,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),i.stroke();return}let A=f==="wide"?1.3:1,x=t*.03*A,y=e*.085*A;i.fillStyle="#fff",i.strokeStyle=h,i.lineWidth=6,i.beginPath(),i.ellipse(p,a,x,y,0,0,7),i.fill(),i.stroke();let B=f==="wide"?.38:.55;i.fillStyle=h,i.beginPath(),i.ellipse(p+x*.15,a+y*.12,x*B,y*B*1.1,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(p+x*.35,a-y*.2,x*.22,0,7),i.fill(),f==="half"&&(i.fillStyle=n,i.fillRect(p-x-4,a-y-4,x*2+8,y*1.05),i.strokeStyle=h,i.lineWidth=7,i.beginPath(),i.moveTo(p-x-2,a-y*.1),i.lineTo(p+x+2,a-y*.1),i.stroke())},m={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(m="happy"),r==="love"&&(m="heart"),r==="dead"&&(m="x"),r==="effort"&&s!=="goofy"&&(m="open");for(let p of[-1,1])d(o+p*c,m);i.strokeStyle=h,i.lineWidth=10,i.lineCap="round";let u=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let p of[-1,1]){let f=o+p*c,A=a-e*.13,x=t*.026,y=f-p*x,B=f+p*x;i.beginPath(),i.moveTo(B,A-u*18),i.lineTo(y,A+u*18),i.stroke()}i.lineWidth=8,i.strokeStyle=h,i.fillStyle="#7a1e2e";let g=o,_=r||"normal";if(_==="happy"||_==="normal"&&s==="grin")i.beginPath(),i.moveTo(g-t*.04,l-e*.02),i.quadraticCurveTo(g,l+e*.12,g+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(_==="effort"){i.fillStyle="#fff",i.beginPath(),He(i,g-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.035,l),i.lineTo(g+t*.035,l);for(let p=-2;p<=2;p++)i.moveTo(g+p*t*.012,l-e*.03),i.lineTo(g+p*t*.012,l+e*.035);i.stroke()}else if(_==="sad"||_==="dead")i.beginPath(),i.moveTo(g-t*.03,l+e*.04),i.quadraticCurveTo(g,l-e*.04,g+t*.03,l+e*.04),i.stroke(),_==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(_==="love"||_==="pant")i.beginPath(),i.ellipse(g,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="gritted"){i.fillStyle="#fff",i.beginPath(),He(i,g-t*.04,l-e*.03,t*.08,e*.06,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.04,l),i.lineTo(g+t*.04,l);for(let p=-2;p<=2;p++)i.moveTo(g+p*t*.014,l-e*.03),i.lineTo(g+p*t*.014,l+e*.03);i.stroke()}else if(s==="tongue-out")i.beginPath(),i.moveTo(g-t*.035,l),i.quadraticCurveTo(g,l+e*.05,g+t*.035,l),i.stroke(),i.fillStyle="#ff6f8a",i.beginPath(),i.ellipse(g+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),i.fill(),i.stroke(),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3,i.beginPath(),i.moveTo(g+t*.008,l+e*.03),i.lineTo(g+t*.01,l+e*.08),i.stroke();else if(s==="wide-eyed")i.beginPath(),i.ellipse(g,l+e*.02,t*.016,e*.04,0,0,7),i.fill(),i.stroke();else if(s==="cheeky")i.beginPath(),i.moveTo(g-t*.04,l-e*.01),i.quadraticCurveTo(g,l+e*.08,g+t*.045,l-e*.035),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.quadraticCurveTo(g+t*.01,l+e*.05,g+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(g-t*.03,l+e*.02);for(let p=0;p<=6;p++)i.lineTo(g-t*.03+p*t*.01,l+e*.02+(p%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(g-t*.04,l),i.quadraticCurveTo(g,l+e*.09,g+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.lineTo(g+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(g-t*.035,l-e*.01),i.quadraticCurveTo(g,l+e*.07,g+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function yx(i,t){return Ke(256,200,(e,n,s)=>{e.fillStyle="#ffffff",He(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${fc}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),je(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function _x(i){return Ke(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")je(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function xf(i,t={}){let e=i.look||{},n=pf[e.build]||pf.compact,s=gx(i.id+(i.nickname||"")),r=gn(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",c=mf[s%mf.length],h=[],d=pt(o),m=pt(a),u=pt(l),g=pt(c),_=new se(a).getHSL({}).l>.85?"#ffffff":a,p=pt(_),f=pt("#ffffff"),A=pt("#22202c"),x=(q,ft,ot=mx)=>me(q,ft,{ol:ot,olRef:9}),y=new he;y.name=`runner-${i.id}`;let B=new he;y.add(B);let T=new he;B.add(T);let I=n.leg/2,D=n.leg+n.shoe[1]*.75;T.position.y=D;let M=x(Qt(`shorts${e.build}`,()=>new ye(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),m);M.position.y=.02,T.add(M);let v=new he;v.position.y=.12,T.add(v);let b=x(Qt(`torso${e.build}`,()=>new ye(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),d);b.position.y=n.torso[1]/2,v.add(b);for(let q of[-1,1]){let ft=me(Qt(`stripe${e.build}`,()=>new be(.06,n.torso[1]*.8,n.torso[2]*.7)),pt(a),{cast:!1});ft.position.set(q*n.torso[0]*.5,n.torso[1]*.5,0),v.add(ft)}let P=yx(i.lane??0,o);h.push(P);let w=new Ce(Qt("bib",()=>new sn(1,.78)),pt(16777215,{map:P})),E=Math.min(.42,n.torso[0]*.6);w.scale.setScalar(E),w.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),v.add(w);let O=new he;O.position.y=n.torso[1]+.02,v.add(O);let N=new he;O.add(N);let V=document.createElement("canvas");V.width=1024,V.height=512;let k=new Ms(V);k.colorSpace=tn,k.anisotropy=4,h.push(k);let ut=null,gt=q=>{q!==ut&&(ut=q,xx(V.getContext("2d"),1024,512,l,e.face||"grin",q),k.needsUpdate=!0)};gt("normal");let U=n.head,xt=x(Qt(`head${U}`,()=>new pe(U,32,20).scale(1,.98,.96)),pt(16777215,{map:k}));xt.position.y=U*.92,N.add(xt);for(let q of[-1,1]){let ft=x(Qt(`ear${U}`,()=>new pe(U*.2,10,8).scale(.6,1,.8)),u,2.5);ft.position.set(q*U*.97,U*.9,0),N.add(ft)}let kt=x(Qt(`nose${U}`,()=>new pe(U*.14,10,8)),u,2);kt.position.set(0,U*.84,U*.97),N.add(kt),mt(e.hair,e.hat),L(e.hat);let F=[];for(let q of[-1,1]){let ft=new he;ft.position.set(q*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),v.add(ft);let ot=x(Qt(`sleeve${e.build}`,()=>new pe(n.armR*1.65,14,10)),d);ft.add(ot);let bt=x(Qt(`uarm${e.build}`,()=>new Dn(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);ft.add(bt);let St=new he;St.position.y=-n.arm/2+n.armR*.4,ft.add(St);let Rt=x(Qt(`farm${e.build}`,()=>new Dn(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),u);St.add(Rt);let Pt=x(Qt(`hand${e.build}`,()=>new pe(n.hand,14,10).scale(1,1.1,.9)),u);Pt.position.y=-n.arm/2-n.hand*.4,St.add(Pt),F.push({sh:ft,el:St,hand:Pt})}let Y=[];for(let q of[-1,1]){let ft=new he;ft.position.set(q*n.torso[0]*.24,0,0),T.add(ft);let ot=x(Qt(`thigh${e.build}`,()=>new Dn(n.legR*1.15,I-n.legR,4,10).translate(0,-I/2,0)),u);ft.add(ot);let bt=x(Qt(`sleg${e.build}`,()=>new ce(n.legR*1.6,n.legR*1.5,I*.5,12).translate(0,-I*.2,0)),m);ft.add(bt);let St=new he;St.position.y=-I,ft.add(St);let Rt=x(Qt(`shin${e.build}`,()=>new Dn(n.legR,I-n.legR,4,10).translate(0,-I/2,0)),u);St.add(Rt);let Pt=x(Qt(`sock${e.build}`,()=>new ce(n.legR*1.12,n.legR*1.12,I*.25,10).translate(0,-I*.86,0)),pt(16777215),2.5);St.add(Pt);let Xt=new he;Xt.position.y=-I,St.add(Xt);let jt=x(Qt(`shoe${e.build}`,()=>new ye(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),p);Xt.add(jt);let Zt=me(Qt(`sole${e.build}`,()=>new ye(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),f,{ol:2.5,olRef:9});Xt.add(Zt);let fe=me(Qt(`swoosh${e.build}`,()=>new be(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),pt(o),{cast:!1});Xt.add(fe),Y.push({hp:ft,kn:St,an:Xt})}lt(e.accessory);let j=new he;j.visible=!1;{let q=me(Qt("flossStick",()=>new ce(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),pt("#e8d0a0"),{cast:!1}),ft=me(Qt("flossFluff",()=>{let ot=gn(5);return Xe(Array.from({length:7},()=>new $e(.16+ot()*.06,1).translate((ot()-.5)*.22,(ot()-.5)*.22,.72+(ot()-.5)*.2)))}),pt("#ff9bd2"),{ol:2.5,olRef:9});j.add(q,ft),j.userData.fluff=ft,j.position.y=-n.arm/2-n.hand*.4,F[0].el.add(j)}function X(q,ft){q==="floss"&&(j.visible=ft>0,ft>0&&j.userData.fluff.scale.setScalar(Math.max(.15,ft)))}let ct={},rt=new yo(new Qs({transparent:!0,depthTest:!1}));rt.scale.setScalar(.9),rt.visible=!1,rt.renderOrder=20,y.add(rt);let At=q=>{if(!q){rt.visible=!1;return}ct[q]||(ct[q]=_x(q),h.push(ct[q])),rt.material.map=ct[q],rt.material.needsUpdate=!0,rt.visible=!0},Ht=D+.12+n.torso[1]+.02+U*2;rt.position.y=Ht+.45;let at=new Set([b,M,xt,...F.flatMap(q=>[q.hand]),...Y.map(q=>q.an.children[0])]);for(let q of F)q.sh.children.forEach(ft=>ft.isMesh&&at.add(ft));for(let q of Y)q.hp.children.forEach(ft=>ft.isMesh&&at.add(ft));y.traverse(q=>{q.isMesh&&!q.userData.isOutline&&(q.castShadow=at.has(q))});function mt(q,ft){let ot=q||"short";if(ot==="bald")return;let bt=(St=1.07,Rt=.48)=>{let Pt=x(Qt(`hcap${U}${St}${Rt}`,()=>new pe(U*St,24,14,0,Math.PI*2,0,Math.PI*Rt)),g);return Pt.position.y=U*.92,Pt.rotation.x=-.32,N.add(Pt),Pt};if(ot==="curly"||ot==="afro"){let St=Qt(`curly${U}`,()=>{let Pt=gn(7),Xt=[];for(let jt=0;jt<26;jt++){let Zt=Pt()*Math.PI*.55,fe=Pt()*Math.PI*2,ie=new H(Math.sin(Zt)*Math.cos(fe),Math.cos(Zt),Math.sin(Zt)*Math.sin(fe)).multiplyScalar(U*1.02);ie.z>U*.55&&ie.y<U*.75||Xt.push(new $e(U*.33,1).translate(ie.x,ie.y,ie.z-U*.08))}return Xe(Xt)}),Rt=x(St,g);Rt.position.y=U*.98,ot==="afro"&&(Rt.scale.setScalar(1.28),Rt.position.y=U*1.05),N.add(Rt);return}if(ft==="beanie"||ft==="bucket"||ft==="bobble"){if(bt(1.05,.5),ot==="mullet"||ot==="long"||ot==="ponytail"){let St=x(Qt(`mul${U}`,()=>new ye(U*1.5,U*.9,U*.4,3,U*.15)),g);St.position.set(0,U*.35,-U*.78),N.add(St)}return}if(ot==="buzz"){let St=x(Qt(`buzz${U}`,()=>new pe(U*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),g,2);St.position.y=U*.92,St.rotation.x=-.32,N.add(St);return}if(bt(),ot==="quiff"||ot==="swept"){let St=x(Qt(`quiff${U}${ot}`,()=>new pe(U*.55,16,10).scale(ot==="quiff"?1.3:1.7,ot==="quiff"?.75:.45,1)),g);St.position.set(ot==="swept"?U*.25:0,U*1.82,U*.38),St.rotation.set(-.5,0,ot==="swept"?-.35:0),N.add(St)}if(ot==="mullet"){let St=x(Qt(`mul${U}`,()=>new ye(U*1.5,U*.9,U*.4,3,U*.15)),g);St.position.set(0,U*.35,-U*.78),N.add(St)}if(ot==="long"){let St=x(Qt(`hlong${U}`,()=>new ye(U*1.8,U*1.6,U*.5,3,U*.2)),g);St.position.set(0,U*.4,-U*.62),N.add(St)}if(ot==="ponytail"){let St=new he;St.position.set(0,U*1.35,-U*.85),N.add(St);for(let Rt=0;Rt<3;Rt++){let Pt=x(Qt(`pt${U}${Rt}`,()=>new pe(U*(.32-Rt*.05),12,8)),g);Pt.position.set(0,-Rt*U*.32,-Rt*U*.18),St.add(Pt)}N.userData.pony=St}if(ot==="bun"){let St=x(Qt(`bun${U}`,()=>new pe(U*.38,14,10)),g);St.position.set(0,U*2,-U*.2),N.add(St)}if(ot==="mohawk"||ot==="spiky"){let St=ot==="mohawk"?5:9;for(let Rt=0;Rt<St;Rt++){let Pt=x(Qt(`spk${U}`,()=>new ke(U*.2,U*.7,8)),g),Xt=ot==="mohawk"?0:Rt/St*Math.PI*2,jt=ot==="mohawk"?-.9+Rt/(St-1)*1.8:.6;Pt.position.set(Math.sin(Xt)*Math.sin(jt)*U,U*.92+Math.cos(jt)*U*1.05,(ot==="mohawk"?Math.sin(jt):Math.cos(Xt)*Math.sin(jt))*U),Pt.lookAt(Pt.position.clone().multiplyScalar(3)),Pt.rotateX(Math.PI/2),N.add(Pt)}}}function L(q){if(!q)return;let ft=pt(a==="#ffffff"||a==="#f8f8f8"?o:a),ot=pt(o);if(q==="backwards-cap"){let bt=x(Qt(`capd${U}`,()=>new pe(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ft);bt.position.y=U*.98,bt.rotation.x=-.18,N.add(bt);let St=x(Qt(`brim${U}`,()=>new ce(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ot);St.position.set(0,U*1.42,-U*.62),St.rotation.set(-.12,Math.PI,0),N.add(St)}else if(q==="bobble"){let bt=x(Qt(`bean${U}`,()=>new pe(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ot);bt.position.y=U*.96,bt.rotation.x=-.12,N.add(bt);let St=x(Qt(`brim2${U}`,()=>new Ge(U*1.05,U*.17,8,24)),ft);St.rotation.x=Math.PI/2-.12,St.position.y=U*1.12,N.add(St);let Rt=x(Qt(`bigbob${U}`,()=>new $e(U*.48,1)),ft);Rt.position.y=U*2.45,N.add(Rt),N.userData.bobble=Rt}else if(q==="cap"||q==="visor"){if(q==="cap"){let St=x(Qt(`capd${U}`,()=>new pe(U*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ft);St.position.y=U*.98,St.rotation.x=-.18,N.add(St)}else{let St=x(Qt(`vband${U}`,()=>new Ge(U*1,U*.12,8,24)),ft);St.rotation.x=Math.PI/2-.25,St.position.y=U*1.35,N.add(St)}let bt=x(Qt(`brim${U}`,()=>new ce(U*.75,U*.75,U*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),ot);bt.position.set(0,U*1.42,U*.62),bt.rotation.x=.12,N.add(bt)}else if(q==="beanie"){let bt=x(Qt(`bean${U}`,()=>new pe(U*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ft);bt.position.y=U*.96,bt.rotation.x=-.12,N.add(bt);let St=x(Qt(`brim2${U}`,()=>new Ge(U*1.05,U*.17,8,24)),ot);St.rotation.x=Math.PI/2-.12,St.position.y=U*1.12,N.add(St);let Rt=x(Qt(`bob${U}`,()=>new $e(U*.3,1)),ot);Rt.position.y=U*2.25,N.add(Rt)}else if(q==="headband"||q==="sweatband"){let bt=x(Qt(`hb${U}`,()=>new Ge(U*1,U*.13,8,28)),ft);bt.rotation.x=Math.PI/2-.2,bt.position.y=U*1.3,N.add(bt);let St=x(Qt(`hbt${U}`,()=>new ye(U*.2,U*.5,U*.08,2,.02)),ft);St.position.set(.12,U*1.1,-U*1.05),St.rotation.z=.5,N.add(St),N.userData.tail=St}else if(q==="bucket"){let bt=x(Qt(`buck${U}`,()=>new ce(U*.8,U*1.02,U*.7,20)),ft);bt.position.y=U*1.75,N.add(bt);let St=x(Qt(`buckb${U}`,()=>new ce(U*1.5,U*1.5,U*.06,24)),ot);St.position.y=U*1.42,St.rotation.x=.1,N.add(St)}else if(q==="crown"||q==="tiara"){let bt=x(Qt(`crown${U}`,()=>new ce(U*.7,U*.62,U*.5,8,1,!0)),pt("#ffd23f",{side:We}));bt.position.y=U*2,N.add(bt)}else if(q==="wizard"||q==="party"){let bt=x(Qt(`cone${U}`,()=>new ke(U*.8,U*1.8,16)),ft);bt.position.y=U*2.3,bt.rotation.z=.15,N.add(bt);let St=x(Qt(`bob${U}`,()=>new $e(U*.3,1)),ot);St.position.set(-U*.12,U*3.15,0),N.add(St)}else if(q==="helmet"||q==="bike_helmet"){let bt=x(Qt(`helm${U}`,()=>new pe(U*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),ft);bt.position.y=U*1,N.add(bt)}else if(q==="santa"){let bt=x(Qt(`santa${U}`,()=>new ke(U*.95,U*1.6,16)),pt("#e8313f"));bt.position.y=U*2.2,bt.rotation.z=.5,N.add(bt);let St=x(Qt(`santar${U}`,()=>new Ge(U*.95,U*.2,8,24)),pt("#ffffff"));St.rotation.x=Math.PI/2,St.position.y=U*1.45,N.add(St)}else{let bt=x(Qt(`cone${U}`,()=>new ke(U*.8,U*1.8,16)),ft);bt.position.y=U*2.3,N.add(bt)}}function lt(q){if(q){if(q==="sunglasses"||q==="glasses"){let ft=q==="sunglasses";for(let bt of[-1,1]){let St=x(Qt(`lens${U}${ft}`,()=>new ye(U*.5,U*.32,U*.08,2,U*.06)),ft?pt("#141420"):pt("#cfefff"),2);St.position.set(bt*U*.3,U*1.02,U*.98),St.rotation.y=bt*.28,N.add(St)}let ot=me(Qt(`bridge${U}`,()=>new be(U*.3,U*.06,U*.06)),pt("#141420"),{cast:!1});ot.position.set(0,U*1.06,U*1.04),N.add(ot)}else if(q==="medal"){let ft=x(Qt("ribbon",()=>new Ge(.2,.03,6,20,Math.PI)),pt("#2e9bff"),2);ft.rotation.z=Math.PI,ft.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),ft.rotation.x=-.3,v.add(ft);let ot=x(Qt("medal",()=>new ce(.11,.11,.04,16).rotateX(Math.PI/2)),pt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);ot.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),v.add(ot),w.position.y-=.1,w.position.x=.12,w.scale.multiplyScalar(.8)}else if(q==="headphones"){let ft=x(Qt(`hp${U}`,()=>new Ge(U*1.08,U*.07,6,24,Math.PI)),pt("#22202c"),2);ft.position.y=U*.95,N.add(ft);for(let ot of[-1,1]){let bt=x(Qt(`hpc${U}`,()=>new ce(U*.3,U*.3,U*.2,14).rotateZ(Math.PI/2)),pt(o),2.5);bt.position.set(ot*U*1.02,U*.92,0),N.add(bt)}}else if(q==="sweatband"||q==="wristbands"||q==="watch")for(let ft of F){let ot=x(Qt(`wb${e.build}`,()=>new ce(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),pt(q==="watch"?"#22202c":a),2);if(ft.el.add(ot),q==="watch")break}else if(q==="scarf"){let ft=x(Qt("scarf",()=>new Ge(.22,.08,8,18)),pt(a));ft.rotation.x=Math.PI/2,ft.position.y=.02,O.add(ft);let ot=x(Qt("scarft",()=>new ye(.14,.5,.06,2,.03)),pt(a));ot.position.set(.1,-.15,-.25),ot.rotation.x=.5,O.add(ot),N.userData.tail2=ot}else if(q==="cape"){let ft=x(Qt(`cape${e.build}`,()=>new sn(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),pt(a,{side:We}),2),ot=new he;ot.position.set(0,n.torso[1],-n.torso[2]/2-.03),ot.add(ft),v.add(ot),N.userData.cape=ot}else if(q==="backpack"){let ft=x(Qt(`bp${e.build}`,()=>new ye(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),pt(a));ft.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),v.add(ft)}else if(q==="moustache"||q==="mustache"){let ft=x(Qt(`mou${U}`,()=>new Dn(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),pt("#3a2616"),2);ft.position.set(0,U*.7,U*.98),N.add(ft)}else if(q==="beard"){let ft=x(Qt(`beard${U}`,()=>new pe(U*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),g,2.5);ft.position.set(0,U*.78,U*.32),N.add(ft);let ot=x(Qt(`mou${U}`,()=>new Dn(U*.09,U*.5,4,8).rotateZ(Math.PI/2)),g,2);ot.position.set(0,U*.7,U*.98),N.add(ot)}else if(q==="bumbag"){let ft=x(Qt(`bum${e.build}`,()=>new ye(n.torso[0]*.5,.2,.18,2,.07)),pt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));ft.position.set(n.torso[0]*.12,.08,n.torso[2]/2+.08),T.add(ft);let ot=me(Qt(`strap${e.build}`,()=>new Ge(n.torso[0]*.48,.025,6,24).scale(1,n.torso[2]/n.torso[0]*1.05,1).rotateX(Math.PI/2)),pt("#22202c"),{cast:!1});ot.position.y=.1,T.add(ot)}else if(q==="bib"){let ft=new Ce(Qt("bib",()=>new sn(1,.78)),w.material);ft.scale.copy(w.scale),ft.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.012),ft.rotation.y=Math.PI,v.add(ft),w.scale.multiplyScalar(1.3)}else if(q==="bowtie")for(let ft of[-1,1]){let ot=x(Qt("bow",()=>new ke(.08,.16,4).rotateZ(Math.PI/2)),pt(a),2);ot.position.set(ft*.08,n.torso[1]-.06,n.torso[2]/2+.03),ot.rotation.z=ft>0?Math.PI:0,v.add(ot)}else if(q==="tutu"){let ft=x(Qt(`tutu${e.build}`,()=>new ce(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),pt("#ff9bd2",{side:We}),2);ft.position.y=-.05,T.add(ft)}}}let et={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},vt=et.j,Lt=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let q of Lt)vt[q]=0;let $={},Ft="idle",z=null,R=0;function ht(q,ft=null){(q!==Ft||ft!==z)&&(Ft=q,z=ft,R=0)}function Tt(q,ft={}){et.t+=q,R+=q;let ot=et.t;for(let Pt of Lt)$[Pt]=0;let bt="normal",St=10;if(Ft==="run"||Ft==="jog"||Ft==="trudge"||Ft==="distracted"){let Pt=Math.max(.5,ft.speed??3.5),Xt=Math.max(.2,ft.rate??1),jt=Ft==="trudge",Zt=jt?1.7:(2.55+.14*(Pt-3.5))*Math.pow(Xt,.3)*(Ft==="jog"?.8:1);et.phase+=q*Math.PI*Zt;let fe=et.phase,ie=Math.sin(fe),_e=Math.cos(fe),nt=jt?.4:Math.max(.45,Math.min(1,.62+.13*(Pt-3.5)));$.hipLx=-nt*ie,$.hipRx=nt*ie,$.kneeL=.2+(jt?.5:1.35)*Math.max(0,_e)*(.7+nt*.3),$.kneeR=.2+(jt?.5:1.35)*Math.max(0,-_e)*(.7+nt*.3),$.ankL=-.2*ie,$.ankR=.2*ie;let qt=jt?.3:.75*nt+.15;$.shLx=qt*ie,$.shRx=-qt*ie,$.shLz=-.18,$.shRz=.18,$.elL=jt?-.5:-1.5,$.elR=jt?-.5:-1.5,$.twist=.16*ie,$.roll=.05*ie,$.bob=(jt?.03:.11)*(Math.abs(_e)-.4),$.lean=(jt?.05:.16)+Math.max(-.25,Math.min(.45,(ft.slope??0)*1.6)),$.headX=-$.lean*.6,$.headY=-.08*ie,St=18,bt=ft.effort>.6?"effort":ft.effort>.3?"pant":"normal",jt&&($.headX=.35,$.lean=.25,bt="sad"),Ft==="distracted"&&($.headY=ft.lookYaw??.9,$.headX=-.15,$.twist+=(ft.lookYaw??.9)*.3,bt="love")}else if(Ft==="ready")$.hipLx=-.5,$.hipRx=.35,$.kneeL=.6,$.kneeR=.5,$.lean=.35,$.bob=-.12,$.shLx=.5,$.shRx=-.6,$.elL=-1.3,$.elR=-1.3,$.headX=-.25,$.bob+=Math.sin(ot*3)*.01,bt="effort";else if(Ft==="wave")$.shRz=2.7,$.elR=.2*Math.sin(ot*9)-.25,$.shRx=Math.sin(ot*9)*.25,$.shLz=-.3,$.elL=-.4,$.bob=Math.abs(Math.sin(ot*4))*.05,$.headY=.1*Math.sin(ot*2),bt="happy";else if(Ft==="pose"){let Pt=z||"flex";if(Pt==="flex")$.shLz=-1.5,$.shRz=1.5,$.elL=-1.9-Math.sin(ot*6)*.15,$.elR=-1.9-Math.sin(ot*6+1)*.15,$.shLx=-0,$.bob=-.06+Math.abs(Math.sin(ot*3))*.03,$.hipSpread=.25,$.kneeL=.3,$.kneeR=.3,bt="effort";else if(Pt==="point")$.shRx=-1.5,$.elR=0,$.shLz=-.3,$.elL=-1.6,$.shLx=-.3,$.headX=-.1,$.lean=-.05,bt="happy",$.bob=Math.sin(ot*5)*.02;else if(Pt==="stretch")$.hipRx=-.2,$.kneeR=2.3,$.shRx=.8,$.elR=-.6,$.shLz=-2.6,$.lean=.08+Math.sin(ot*2)*.04,bt="smug";else if(Pt==="spin"){let Xt=Math.min(1,R/1.1);$.bodyY=(1-(1-Xt)**2)*Math.PI*4,$.shLz=Xt<1?-1.3:-2.6,$.shRz=Xt<1?1.3:2.6,$.bob=Xt<1?Math.abs(Math.sin(ot*7))*.2:Math.abs(Math.sin(ot*5))*.12,bt="happy"}else Pt==="bow"?($.lean=.75+Math.sin(ot*2)*.05,$.shLx=.4,$.shRx=-1.2,$.elR=-1.6,$.shRz=.4,$.headX=-.2,bt="happy"):($.shLz=-2.5,$.shRz=2.5,$.bob=Math.abs(Math.sin(ot*6))*.25,bt="happy");bt==="smug"&&(bt="normal")}else if(Ft==="celebrate"){let Pt=z||"jump";if(Pt==="jump"){let Xt=Math.abs(Math.sin(ot*5.5));$.bob=Xt*.55,$.shLz=-2.6-Xt*.3,$.shRz=2.6+Xt*.3,$.elL=-.2,$.elR=-.2,$.kneeL=$.kneeR=(1-Xt)*.8,$.hipLx=$.hipRx=-(1-Xt)*.4,bt="happy",St=22}else if(Pt==="fist"){let Xt=Math.sin(ot*7);$.shRx=-2.6,$.elR=-.4+Xt*.4,$.shLx=.4,$.elL=-1.8,$.bob=Math.abs(Xt)*.08,$.lean=-.1,bt="happy"}else Pt==="kneel"?($.lean=.85,$.kneeL=$.kneeR=.7,$.hipLx=$.hipRx=-.6,$.bob=-.25+Math.sin(ot*7)*.025,$.shLx=$.shRx=-.55,$.elL=$.elR=-.1,$.shLz=-.15,$.shRz=.15,$.headX=-.6,bt="pant"):Pt==="collapse"?($.bodyX=-Math.PI/2+.05,$.shLz=-2.2,$.shRz=2.2,$.hipSpread=.4,$.kneeL=.3+Math.max(0,Math.sin(ot*9))*.4*(Math.sin(ot*.7)>.6?1:0),$.kneeR=.2,bt="dead",St=4):Pt==="shrug"&&($.shLz=-.9,$.shRz=.9,$.elL=-1.4,$.elR=-1.4,$.shLx=-.5,$.shRx=-.5,$.headX=.1,$.headY=Math.sin(ot*1.5)*.3,bt="sad")}else $.bob=Math.sin(ot*2)*.015,$.shLz=-.18,$.shRz=.18,$.elL=-.25,$.elR=-.25,$.headY=Math.sin(ot*.7)*.25,$.lean=.02,$.kneeL=$.kneeR=.05;ft.lookYaw!=null&&Ft!=="distracted"&&($.headY+=ft.lookYaw);let Rt=1-Math.exp(-St*q);for(let Pt of Lt){if(Pt==="bodyY"&&Ft==="pose"&&z==="spin"){vt[Pt]=$[Pt];continue}vt[Pt]+=($[Pt]-vt[Pt])*Rt}if(Ft==="pose"&&z==="spin"||(vt.bodyY=vt.bodyY%(Math.PI*2),vt.bodyY>Math.PI&&(vt.bodyY-=Math.PI*2)),Y[0].hp.rotation.set(vt.hipLx,0,-vt.hipSpread),Y[1].hp.rotation.set(vt.hipRx,0,vt.hipSpread),Y[0].kn.rotation.x=vt.kneeL,Y[1].kn.rotation.x=vt.kneeR,Y[0].an.rotation.x=vt.ankL-vt.kneeL*.35,Y[1].an.rotation.x=vt.ankR-vt.kneeR*.35,F[0].sh.rotation.set(vt.shLx,0,vt.shLz-0),F[1].sh.rotation.set(vt.shRx,0,vt.shRz),F[0].el.rotation.x=vt.elL,F[1].el.rotation.x=vt.elR,v.rotation.set(vt.lean,vt.twist,0),T.rotation.set(0,-vt.twist*.5,vt.roll),T.position.y=D+vt.bob,N.rotation.set(vt.headX,vt.headY,0),B.rotation.set(vt.bodyX,vt.bodyY,vt.bodyZ),B.position.y+=((Ft==="celebrate"&&z==="collapse"?n.torso[2]*.5+.08:0)-B.position.y)*Rt,N.userData.bobble&&(N.userData.bobble.position.y=U*2.45+Math.abs(Math.sin(et.phase))*.04),N.userData.pony&&(N.userData.pony.rotation.x=.4+Math.sin(et.phase*2)*.35),N.userData.tail&&(N.userData.tail.rotation.x=.6+Math.sin(et.phase*2)*.3),N.userData.cape&&(N.userData.cape.rotation.x=-.3-Math.min(1.1,(ft.speed??0)*.15)+Math.sin(ot*8)*.08),ft.expr&&(bt=ft.expr),gt(bt),rt.visible){rt.position.y=Ht+.45+Math.sin(ot*6)*.08;let Pt=.9+Math.sin(ot*9)*.05;rt.scale.set(Pt,Pt,Pt)}}function It(){for(let q of h)q.dispose?.();rt.material.dispose()}return{id:i.id,info:i,root:y,update:Tt,set:ht,setPop:At,setExpr:gt,setProp:X,dispose:It,height:Ht,hipH:D,get state(){return Ft},get variant(){return z}}}var yf=[1720,4220];function As(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function Si(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function Rs(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function Ho(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}var vx=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function _f(i,t,e){let n=i.timeMap,s={};e.forEach((M,v)=>s[M.id]=M.lane??v+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Fe-1.6)/Math.max(1,r-1)),c=i.runners.map((M,v)=>{let b=Rs(n,M.officialS),P=((s[M.id]??v+1)-a)*l;return{...M,finishB:b,base:P,seed:v*1.7+.3}}),h=Object.fromEntries(c.map(M=>[M.id,M])),d=[...c].sort((M,v)=>M.officialS-v.officialS).map(M=>M.id),m=Object.fromEntries(d.map((M,v)=>[M,v+1])),u=h[d[0]],g=d.map(M=>h[M].officialS),_=h[d[0]].finishB,p=h[d.at(-1)].finishB,f=r>1&&g[1]-g[0]<=1.5,A=M=>Math.max(.05,(Ho(n,M+.05)-Ho(n,M-.05))/.1),x=new Map;function y(M){let v=Math.round(M*1e3);if(x.has(v))return x.get(v);let b=M<=0?0:Ho(n,M),P=M<=0?4:A(M),w={b:M,raceS:b,rate:P,byId:{},order:[]};for(let V of c){let k=As(V.progress,b),ut=b>=V.officialS&&M>=V.finishB-1e-6,gt=(As(V.progress,b+1)-As(V.progress,Math.max(0,b-1)))/(b>1?2:1);w.byId[V.id]={id:V.id,m:k,finished:ut,vRace:ut?0:gt,place:m[V.id]}}for(let V of c){let k=w.byId[V.id],ut=k.m,gt=V.base;gt+=.22*Math.sin(k.m/85+V.seed);for(let kt of c){if(kt===V)continue;let F=w.byId[kt.id],Y=k.m-F.m;if(Math.abs(Y)<4&&!k.finished&&!F.finished){let j=(1-Math.abs(Y)/4)*.32;gt+=Math.sign(V.base-kt.base||V.seed-kt.seed)*j}}let U=0;if(k.finished){let kt=M-V.finishB,F=(As(V.progress,V.officialS)-As(V.progress,V.officialS-2))/2*A(V.finishB),Y=Math.min(14,Math.max(4,F)),j=1.6;ut=5e3+(kt<j?Y*(kt-kt*kt/(2*j)):Y*j/2+Math.min(10+m[V.id]*1.5,(kt-j)*.9));let ct=(m[V.id]-(r+1)/2)*1.6;gt=gt+(ct-gt)*vx(0,2.5,kt),U=kt}let xt=t.sample(ut,V.id);gt*=1-xt.div,gt=Math.max(-Fe/2+.6,Math.min(Fe/2-.6,gt)),Object.assign(k,{mVis:ut,x:xt.x+xt.rx*gt,z:xt.z+xt.rz*gt,y:t.heightAt(xt.x+xt.rx*gt,xt.z+xt.rz*gt)+.16,tx:xt.tx,tz:xt.tz,slope:xt.slope,div:xt.div,divInfo:xt.divInfo,lat:gt,post:U,distToFinish:Math.max(0,5e3-k.m)})}let E=c.filter(V=>w.byId[V.id].finished).sort((V,k)=>V.officialS-k.officialS),O=c.filter(V=>!w.byId[V.id].finished).sort((V,k)=>w.byId[k.id].m-w.byId[V.id].m||V.officialS-k.officialS);w.order=[...E,...O].map(V=>V.id),w.leader=w.byId[w.order[0]];let N=h[w.order[0]];for(let[V,k]of w.order.entries()){let ut=w.byId[k];if(ut.finished)ut.gapText=V===0?Vo(h[k].officialS):`+${(h[k].officialS-u.officialS).toFixed(0)}s`;else if(V===0)ut.gapText="LEADER";else{let gt=w.byId[w.order[0]].finished?u:N;ut.gapText=`+${Math.max(0,b-Si(gt.progress,ut.m)).toFixed(1)}s`}}return x.size>400&&x.clear(),x.set(v,w),w}return{stateAt:y,orderAt:M=>y(M).order,gapM:(M,v,b)=>{let P=y(b);return Math.abs((P.byId[M]?.m??0)-(P.byId[v]?.m??0))},finishedAt:(M,v)=>y(v).byId[M]?.finished,allFinishedAt:M=>M>p,firstFinishB:_,lastFinishB:p,photoFinish:f,finishOrder:d,place:m,byId:h,R:c,rateAt:A,durationS:n.durationS}}function Vo(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}var Mx=1.3,bx=2.4,Sx=.2,Ex=16/9,Mf=i=>i*180/Math.PI,vf=(i,t=Sx)=>Mf(2*Math.atan(bx/(2*t*i)));function dc({plan:i,sim:t,backedIds:e=[],C:n,world:s,funfair:r}){let o=[],a=i.timeMap,l=E=>Rs(a,Math.min(...i.runners.map(O=>Si(O.progress,E)))),c=E=>E<=0?4:t.rateAt(E),h=(E,O)=>{let N=0,V=0;for(let k=E;k<=O;k+=Math.max(.5,(O-E)/12))N+=c(k),V++;return N/Math.max(1,V)},d=t.firstFinishB,m=t.lastFinishB,u=E=>{let O=t.stateAt(Math.max(0,E)),N=O.order.filter(k=>!O.byId[k].finished),V=N[0]??O.order[0];return(N.length?N:O.order).filter(k=>Math.abs(O.byId[k].m-O.byId[V].m)<120)},g=E=>{let O=t.stateAt(Math.max(0,E)),N=O.order.filter(k=>!O.byId[k].finished),V=N[0]??O.order[0];return(N.length?N:O.order).filter(k=>Math.abs(O.byId[k].m-O.byId[V].m)<20)},_=(E,O)=>{let N=t.stateAt(Math.max(0,O));return N.order.filter(V=>!N.byId[V].finished&&Math.abs(N.byId[V].m-N.byId[E].m)<20)},p=.25+8;for(let E=.25;E<30;E+=.25)if(c(E)>7){p=Math.max(p,E);break}let f=d-6;for(let E=d-6;E>p;E-=.25)if(c(E)>6){f=E;break}let A=Math.max(f,Math.min(d-6,l(4700)));o.push({type:"heli",a:-8.5,b:-3.2,hard:!0}),o.push({type:"startgo",a:-3.2,b:.25}),o.push({type:"side",a:.25,b:p,hard:!0,ids:null});let x=[],y=i.runners.find(E=>E.diversions?.length);if(y&&r){let E=y.diversions[0],O=Rs(a,Si(y.progress,E.fromM))-.5,N=Rs(a,Si(y.progress,E.toM))+.8;x.push({type:"side",tag:"fair",a:O,b:Math.max(O+8,N),ids:[y.id],fair:!0,prio:3})}for(let E of yf){let O=l(E);x.push({type:"headon",tag:"hill",a:O-1.5,b:O+8,prio:2})}x.sort((E,O)=>O.prio-E.prio);let B=[];for(let E of x){let O=Math.min(f,E.b),N=Math.max(p,Math.min(E.a,O-8));O-N<6||B.some(V=>N<V.b&&O>V.a)||B.push({...E,a:N,b:O})}B.sort((E,O)=>E.a-O.a);let T=["side","drone","headon"],I=0,D=0,M=(E,O)=>{let N=O-E;if(N<=.01)return;if(N<8&&o.length>=3){o.at(-1).b=O;return}let V=Math.max(1,Math.round(N/11));for(let k=0;k<V;k++){let ut=E+N*k/V,gt=E+N*(k+1)/V,U=(ut+gt)/2,xt=T[I++%T.length];xt===o.at(-1)?.type&&(xt=T[I++%T.length]);let kt=t.stateAt(U),F=kt.byId[kt.order[0]],Y=e.filter(X=>kt.byId[X]&&!kt.byId[X].finished&&F.m-kt.byId[X].m>40),j=null;Y.length&&D++%2===0&&(j=_(Y[D%Y.length],U),xt=xt==="drone"?"side":xt),o.push({type:xt,a:ut,b:gt,ids:j})}},v=p;for(let E of B)M(v,E.a),o.push(E),v=E.b;M(v,f);{let E=A-f;if(E>=8){let O=Math.max(1,Math.round(E/11));for(let N=0;N<O;N++)o.push({type:N%2?"headon":"side",a:f+E*N/O,b:f+E*(N+1)/O})}o.at(-1).type==="headon"&&o.at(-1).a>=f?o.at(-1).b=d-6:o.push({type:"headon",a:Math.max(f,o.at(-1).b),b:d-6})}if(o.at(-1).b-o.at(-1).a<6&&o.length>4){let E=o.pop();o.at(-1).b=E.b}o.push({type:"finishcam",a:d-6,b:m+2.5,hard:!0}),o.push({type:"celebrate",a:m+2.5,b:m+90});let b=(i.events||[]).filter(E=>(E.type==="lead_change"||E.type==="overtake"&&(e.includes(E.by)||e.includes(E.on)))&&E.broadcastS>p+2&&E.broadcastS<f-3),P=-1e9;for(let E of b){let O=E.type==="lead_change"?[E.to,E.from]:[E.by,E.on];if(E.broadcastS-P<12)continue;let N=o.findIndex(ut=>E.broadcastS>=ut.a&&E.broadcastS<ut.b);if(N<0)continue;let V=o[N];if(["heli","startgo","finishcam","celebrate","drone"].includes(V.type)||V.interrupt||V.tag||V.hard)continue;let k=V.ids||g((V.a+V.b)/2);if(!O.every(ut=>k.includes(ut))){if(E.broadcastS-V.a<8||V.b-E.broadcastS<8)Object.assign(V,{type:"side",ids:O,interrupt:E.type});else{let ut=E.broadcastS-1.8;o.splice(N,1,{...V,b:ut},{type:"side",a:ut,b:V.b,ids:O,interrupt:E.type})}P=E.broadcastS}}for(let E of o)if(E.rate=h(Math.max(0,E.a),Math.max(.5,E.b)),E.ids=E.ids||null,E.type==="side"||E.type==="headon"||E.type==="drone"){let O=E.ids||(E.type==="drone"?u((E.a+E.b)/2):g((E.a+E.b)/2));E.type==="drone"&&!E.ids&&(E.pack=!0);let N=0;for(let V=0;V<=6;V++){let k=t.stateAt(Math.max(0,E.a+(E.b-E.a)*V/6)),ut=O.map(gt=>k.byId[gt]).filter(gt=>gt&&!gt.finished).map(gt=>gt.m);ut.length&&(N=Math.max(N,Math.max(...ut)-Math.min(...ut)))}if(E.spread=N,E.type==="side"){E.dist=vi.clamp(14+1.7*E.rate,18,48);let V=vf(E.dist),k=N+7,ut=Mf(2*Math.atan(k/(2*Ex*E.dist)));E.fov=vi.clamp(Math.max(V,ut),10,34),E.side=w(E,O)}else E.type==="headon"?(E.dist=vi.clamp(16+1.9*E.rate,20,52)+N*.6,E.fov=vi.clamp(vf(E.dist-N*.3,.2),10,30)):(E.back=30+2.2*E.rate+N*.35,E.height=16+1.9*E.rate+N*.25,E.fov=40,E.side=w(E,O))}return o;function w(E,O){let N=X=>{let ct=t.stateAt(Math.max(0,X)),rt=O.map(at=>ct.byId[at]).filter(Boolean),At=rt.reduce((at,mt)=>at+mt.x,0)/rt.length,Ht=rt.reduce((at,mt)=>at+mt.z,0)/rt.length;return[At,Ht]},V=N(E.a),k=N((E.a+E.b)/2),ut=N(E.b),gt=(k[0]-V[0])*(ut[1]-k[1])-(k[1]-V[1])*(ut[0]-k[0]),U=E.fair?null:gt>0?1:-1;if(E.fair&&r){let X=r.anchors.center,ct=[ut[0]-V[0],ut[1]-V[1]],rt=[-ct[1],ct[0]];return U=(X.x-k[0])*rt[0]+(X.z-k[1])*rt[1]>0?-1:1,U}let xt=[ut[0]-V[0],ut[1]-V[1]],kt=Math.hypot(...xt)||1,F=[-xt[1]/kt,xt[0]/kt],Y=E.dist||40,j=X=>s.inPark(k[0]+F[0]*Y*X,k[1]+F[1]*Y*X);return!j(U)&&j(-U)&&(U=-U),U}}function bf({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new H,look:new H},o=new H(0,1,0),a=null,l=null,c=!0,h=null,d=new Sn,m=new ve;function u(x,y){let B=e.stateAt(Math.max(0,y)),T=(x||B.order.slice(0,1)).map(M=>B.byId[M]).filter(Boolean),I=T.filter(M=>!M.finished);I.length&&(T=I);let D=new H;for(let M of T)D.add(new H(M.x,M.y,M.z));return D.divideScalar(Math.max(1,T.length))}function g(x,y,B){let T=new H,I=0;for(let b=-2;b<=2;b++)T.add(u(x,y+b*B*.5)),I++;T.divideScalar(I);let D=u(x,y-B*1.5),M=u(x,y+B*1.5),v=new H(M.x-D.x,0,M.z-D.z);if(v.lengthSq()<1e-4){let b=x?.[0]??e.stateAt(Math.max(0,y)).order[0],P=e.stateAt(Math.max(0,y)).byId[b];v.set(P.tx,0,P.tz)}return v.normalize(),{c:T,h:v,r:new H(-v.z,0,v.x)}}let _=(x,y)=>{if(x.ids)return x.ids;if(!x._group){let B=(x.a+x.b)/2,T=e.stateAt(Math.max(0,B)),I=T.order.filter(M=>!T.byId[M].finished),D=I[0]??T.order[0];x._group=(I.length?I:T.order).filter(M=>Math.abs(T.byId[M].m-T.byId[D].m)<(x.pack?120:20)),x._group.length||(x._group=[D])}return x._group};function p(x,y){let B=n.anchors.finish,T=n.anchors.start,I,D,M=40,v=x.rate>8?2.2:1.2;switch(x.type){case"heli":{let b=(y-x.a)/Math.max(.01,x.b-x.a),P=new H(150,0,0),w=new H(T.x,T.y,T.z),E=pc(Math.min(1,b)),O=-1.2+E*1.6,N=420-E*360;I=new H(P.x+Math.cos(O)*N,170-E*140,P.z+Math.sin(O)*N).lerp(new H(w.x-T.tx*40+T.rx*25,w.y+22,w.z-T.tz*40+T.rz*25),E*E),D=P.clone().setY(10).lerp(w,Math.min(1,E*1.3)),M=50;break}case"startgo":{let b=new H(T.x,T.y,T.z),P=new H(T.tx,0,T.tz),w=new H(-P.z,0,P.x);I=b.clone().addScaledVector(P,10.5).addScaledVector(w,2.6).add(o.clone().multiplyScalar(1.9)),D=b.clone().add(o.clone().multiplyScalar(1.3)).addScaledVector(P,-1),M=42;break}case"side":{let{c:b,h:P,r:w}=g(_(x,y),y,v);I=b.clone().addScaledVector(w,x.side*x.dist).addScaledVector(P,x.dist*.18).add(o.clone().multiplyScalar(2.2+x.dist*.08)),D=b.clone().add(o.clone().multiplyScalar(1.1)),M=x.fov;break}case"headon":{let{c:b,h:P,r:w}=g(_(x,y),y,v);I=b.clone().addScaledVector(P,x.dist).addScaledVector(w,1.5).add(o.clone().multiplyScalar(1.6+x.dist*.06)),D=b.clone().add(o.clone().multiplyScalar(1.15)),M=x.fov;break}case"drone":{let{c:b,h:P,r:w}=g(_(x,y),y,v*1.3);I=b.clone().addScaledVector(P,-x.back).addScaledVector(w,x.side*x.back*.5).add(o.clone().multiplyScalar(x.height)),D=b.clone().addScaledVector(P,x.back*.15),M=x.fov;break}case"finishcam":{let b=new H(B.tx,0,B.tz),P=new H(-b.z,0,b.x);I=new H(B.x,B.y,B.z).addScaledVector(b,16).addScaledVector(P,-4).add(o.clone().multiplyScalar(2.6));let w=e.stateAt(Math.max(0,y)),E=w.order.map(N=>w.byId[N]).find(N=>!N.finished),O=new H(B.x,B.y+2.2,B.z);D=E?O.clone().lerp(new H(E.x,E.y+1.3,E.z),Math.min(.8,18/Math.max(18,E.distToFinish))):O,M=34,x.smoothLook=!0;break}case"celebrate":{let b=e.stateAt(Math.max(0,y)),P=new H;for(let N of b.order)P.add(new H(b.byId[N].x,b.byId[N].y,b.byId[N].z));P.divideScalar(b.order.length);let w=new H(B.tx,0,B.tz),E=new H(-w.z,0,w.x),O=Math.sin((y-x.a)*.08)*.5;I=P.clone().addScaledVector(w,-11*Math.cos(O)).addScaledVector(E,11*Math.sin(O)).add(o.clone().multiplyScalar(2.8)),D=P.clone().add(o.clone().multiplyScalar(1.2)),M=44;break}default:{let{c:b,h:P}=g(_(x,y),y,v);I=b.clone().addScaledVector(P,-12).add(o.clone().multiplyScalar(5)),D=b.clone()}}return{pos:I,look:D,fov:M}}function f(x,y,B){let T=B.find(w=>x>=w.a&&x<w.b)||B.at(-1),I=!1;if(T!==a){let w=c||!!T.hard;l=w?null:{from:{pos:i.position.clone(),quat:i.quaternion.clone(),fov:i.fov},t0:x},I=w,c=!1,a=T,h=null}let D=p(T,x),M=t.heightAt(D.pos.x,D.pos.z)+1.2;D.pos.y<M&&(D.pos.y=M),T.smoothLook&&((!h||y<=0)&&(h=h||D.look.clone()),h.lerp(D.look,1-Math.exp(-3*y)),D.look.copy(h)),r.pos.copy(D.pos),r.look.copy(D.look),m.lookAt(D.pos,D.look,o),d.setFromRotationMatrix(m);let v=D.pos,b=d,P=D.fov;if(l){let w=(x-l.t0)/Mx;if(w>=1||w<0)l=null;else{let E=w*w*w*(w*(w*6-15)+10),O=Math.sin(Math.PI*E)*Math.min(12,l.from.pos.distanceTo(D.pos)*.12);v=l.from.pos.clone().lerp(D.pos,E).add(o.clone().multiplyScalar(O)),b=l.from.quat.clone().slerp(d,E),P=l.from.fov+(D.fov-l.from.fov)*E}}return i.position.copy(v),i.quaternion.copy(b),Math.abs(i.fov-P)>.001&&(i.fov=P,i.updateProjectionMatrix()),{shot:T,cut:I}}function A(x=!0){a=null,l=null,c=!!x,h=null}return{update:f,reset:A,evaluate:p,get shot(){return a},get gliding(){return!!l},cam:r}}function pc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var Go=new Set(["drone","heli"]);var wx=`
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
`,Sf=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,Tx=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,Ax=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},mr=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Rx=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function wf(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let L=document.createElement("style");L.id="mr-hud-css",L.textContent=wx,document.head.appendChild(L)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-results"></div>`,i.appendChild(o);let a=L=>o.querySelector(L),l={};o.querySelectorAll("[data-k]").forEach(L=>l[L.dataset.k]=L);let c=a(".mr-tower"),h={},d={};for(let L of t){let lt=document.createElement("div");lt.className="mr-row",lt.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${L.colour.primary};border-right:4px solid ${L.colour.secondary}"></div><div class="mr-name">${mr(Cs(L))}</div><span class="mr-inis"></span><div class="mr-gap"></div></div>`,c.appendChild(lt),h[L.id]={el:lt,pos:lt.querySelector(".mr-pos"),gap:lt.querySelector(".mr-gap"),last:""};let et=document.createElement("div");et.className="mr-tag",et.innerHTML=`<span class="mr-tp mr-num"></span><span class="mr-tb"></span><span class="mr-tn" style="background:${L.colour.primary};color:#fff">${mr(Cs(L))}</span>`,et.style.opacity="0",a(".mr-tags").appendChild(et),d[L.id]={el:et,pos:et.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function m(L={}){for(let lt of t){let et=(L[lt.id]||[]).filter($=>$!=null&&$!==""),vt=et.map($=>`<span class="mr-ini" style="--bc:${mc($)}">${mr(Ix($))}</span>`).join(""),Lt=h[lt.id].el;Lt.classList.toggle("backed",et.length>0),Lt.querySelector(".mr-inis").innerHTML=vt,d[lt.id].el.querySelector(".mr-tb").innerHTML=vt}}m(e);let u=a(".mr-map canvas"),g=u.getContext("2d"),_=null,p=340,f=420;u.width=p,u.height=f;let A=n.points,x=1e9,y=1e9,B=-1e9,T=-1e9;for(let L of A)x=Math.min(x,L[0]),B=Math.max(B,L[0]),y=Math.min(y,L[2]),T=Math.max(T,L[2]);if(n.funfair){let[L,lt]=n.funfair.center,et=n.funfair.radius*.6;x=Math.min(x,L-et),B=Math.max(B,L+et),y=Math.min(y,lt-et),T=Math.max(T,lt+et)}for(let L in r.diversions)for(let lt of r.diversions[L])for(let et of lt.path)x=Math.min(x,et[0]),B=Math.max(B,et[0]),y=Math.min(y,et[1]),T=Math.max(T,et[1]);let I=26,D=Math.min((p-I*2)/(B-x),(f-I*2)/(T-y)),M=(p-(B-x)*D)/2,v=(f-(T-y)*D)/2,b=L=>M+(L-x)*D,P=L=>v+(L-y)*D;function w(){let L=document.createElement("canvas");L.width=p,L.height=f;let lt=L.getContext("2d"),et=(R,ht,Tt,It)=>{lt.beginPath(),R.forEach((q,ft)=>ft?lt.lineTo(b(q[0]),P(q[1])):lt.moveTo(b(q[0]),P(q[1]))),lt.strokeStyle=ht,lt.lineWidth=Tt,lt.lineJoin=lt.lineCap="round",lt.setLineDash(It||[]),lt.stroke(),lt.setLineDash([])},vt=(R,ht)=>{for(let Tt of s.features)Tt.kind===R&&Tt.closed&&(lt.beginPath(),Tt.pts.forEach((It,q)=>q?lt.lineTo(b(It[0]),P(It[1])):lt.moveTo(b(It[0]),P(It[1]))),lt.fillStyle=ht,lt.fill())},Lt=s.features.filter(R=>R.kind==="park").sort((R,ht)=>ht.pts.length-R.pts.length)[0];lt.save(),lt.beginPath(),Lt.pts.forEach((R,ht)=>ht?lt.lineTo(b(R[0]),P(R[1])):lt.moveTo(b(R[0]),P(R[1]))),lt.fillStyle="#9be27a",lt.fill(),lt.restore(),vt("water","#49a6ff"),vt("track","#ff7a5c");for(let R in r.diversions)for(let ht of r.diversions[R])et(ht.path,"#c79a5a",4,[6,6]);let $=[];for(let R=0;R<=r.LAP1_END_DRAW;R+=10)$.push(r.baseXZ(R));et($,"#1a1420",11),et($,"#8fa0c4",6);let Ft=[];for(let R=r.MAP_TO-80;R<=r.finishM;R+=10)Ft.push(r.baseXZ(R));et(Ft,"#1a1420",11),et(Ft,"#8fa0c4",6);let z=r.rawExt(r.finishM);return lt.fillStyle="#fff",lt.strokeStyle="#1a1420",lt.lineWidth=3,lt.fillRect(b(z[0])-7,P(z[1])-7,14,14),lt.strokeRect(b(z[0])-7,P(z[1])-7,14,14),lt.fillStyle="#1a1420",lt.fillRect(b(z[0])-7,P(z[1])-7,7,7),lt.fillRect(b(z[0]),P(z[1]),7,7),L}_=w();function E(){_=w()}let O=0,N=0,V=[],k=a(".mr-banner");function ut(){for(;V.length&&N-V[0].at>2;)V.shift();let L=V.shift();L&&(k.querySelector(".mr-b1 span").textContent=L.text,k.querySelector(".mr-b1").style.background=L.colour,k.querySelector(".mr-b2").textContent="",k.classList.remove("on"),k.offsetWidth,k.classList.add("on"),O=Math.min(1.5,L.secs))}function gt(L,lt="",et="#ff3d8b",vt=1.4){V.length>=3&&V.shift(),V.push({text:L,colour:et,secs:vt,at:N}),O<=0&&ut()}let U="";function xt(L,lt){if(N+=L,O>0?(O-=L,O<=0&&(k.classList.remove("on"),O=-.25)):O<0&&(O=Math.min(0,O+L),O===0&&ut()),!!lt){if(lt.map!=null&&o.classList.toggle("mr-nomap",!lt.map),lt.raceS!=null&&(l.clock.textContent=Ax(lt.raceS)),lt.leaderM!=null&&(l.lap.textContent=lt.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,lt.leaderM)/1e3).toFixed(1)} KM`),lt.order){let et=c.clientHeight||0,vt=(c.querySelector(".mr-row")?.offsetHeight||40)+6,Lt=0;lt.order.forEach(($,Ft)=>{let z=h[$.id];if(!z||(z.el.classList.toggle("off",!!$.hidden),$.hidden))return;Lt===3&&(Lt+=.35),z.el.style.transform=`translateY(${Lt*vt}px)`,Lt++;let ht=`${Ft}|${$.gapText}|${$.finished}`+($.posHtml||"");ht!==z.last&&(z.last=ht,z.pos.innerHTML=$.posHtml??Sf(Ft+1),z.gap.textContent=$.gapText,z.el.classList.toggle("lead",Ft===0&&!$.posHtml),z.el.classList.toggle("fin",!!$.finished))})}if(lt.tags)for(let et of lt.tags){let vt=d[et.id];vt&&(et.visible!==vt.vis&&(vt.vis=et.visible,vt.el.style.opacity=et.visible?"1":"0"),et.visible&&(vt.el.style.transform=`translate(${et.x}px, ${et.y}px) translate(-50%,-100%) scale(${et.scale??1})`,vt.p!==et.pos&&(vt.p=et.pos,vt.pos.textContent=et.pos?Tx(et.pos):"",vt.pos.style.display=et.pos?"":"none")))}if(lt.dots){g.clearRect(0,0,p,f),g.drawImage(_,0,0);for(let et of[...lt.dots].reverse())g.beginPath(),g.arc(b(et.x),P(et.z),et.lead?11:9,0,7),g.fillStyle=et.colour,g.fill(),g.lineWidth=3.5,g.strokeStyle="#1a1420",g.stroke(),et.focus&&(g.beginPath(),g.arc(b(et.x),P(et.z),15,0,7),g.strokeStyle="#fff",g.lineWidth=3,g.stroke());lt.camDot&&(g.save(),g.translate(b(lt.camDot.x),P(lt.camDot.z)),g.rotate(lt.camDot.a),g.fillStyle="rgba(26,20,32,.6)",g.beginPath(),g.moveTo(0,0),g.lineTo(-10,-22),g.lineTo(10,-22),g.fill(),g.restore())}}}function kt(L){o.classList.toggle("mr-dim",!!L)}function F(L){o.classList.toggle("mr-dimtop",!!L)}function Y(){O=0,V.length=0,k.classList.remove("on")}function j(L){let lt=a(".mr-card3");if(!L){lt.classList.remove("on");return}lt.querySelector(".mr-lane span").textContent=L.lane??"",lt.querySelector(".mr-lane").style.background=L.colour.primary,lt.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${L.colour.primary}, ${Px(L.colour.primary,-.25)})`,lt.querySelector(".mr-nick").textContent=L.nickname,lt.querySelector(".mr-nick").style.color="#fff",lt.querySelector(".mr-tagl").textContent=L.tagline||"",lt.querySelector(".mr-tagl").style.color=Rx(L.colour.primary)==="#ffffff"?"#fff":"#1a1420",lt.classList.remove("on"),lt.offsetWidth,lt.classList.add("on")}function X(L){let lt=a(".mr-count");lt.textContent=L,lt.classList.remove("pop"),lt.offsetWidth,lt.classList.add("pop")}function ct(L,lt=""){a(".mr-photo").classList.toggle("on",!!L),a(".mr-pcap").textContent=lt,a(".mr-pcap").style.display=lt?"":"none"}function rt(L,lt="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!L),a(".mr-market .mr-m2").textContent=lt}function At(L,{title:lt="",kicker:et="",theme:vt=""}={}){let Lt=a(".mr-title");if(L){Lt.querySelector(".mr-t0").textContent=et,Lt.querySelector(".mr-t1").textContent=lt;let $=Lt.querySelector(".mr-t2");$.textContent=vt,$.style.display=vt?"":"none",Lt.querySelector(".mr-t0").style.display=et?"":"none"}Lt.classList.toggle("on",!!L)}function Ht(L,lt){let et=lt[0]-L[0],vt=lt[1]-L[1],Lt=Math.hypot(et,vt)||1,$=et/Lt,Ft=vt/Lt,z=L[0]-$*Lt*.6,R=L[1]-Ft*Lt*.6,ht=a(".mr-photo .mr-line");ht.style.width=`${Lt*2.2}px`,ht.style.transform=`translate(${z}px, ${R}px) rotate(${Math.atan2(Ft,$)}rad)`}function at(L){let lt=a(".mr-results");if(!L){lt.classList.remove("on");return}lt.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+L.map(et=>`<div class="mr-rr"><span class="mr-num">${Sf(et.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${et.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${mr(et.nickname)}</span><span class="mr-t">${mr(et.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>lt.classList.add("on"))}function mt(){o.remove()}return{root:o,update:xt,setBackedBy:m,redrawMap:E,showBanner:gt,clearBanner:Y,setDim:kt,setDimTop:F,introCard:j,countdown:X,photo:ct,photoLine:Ht,results:at,market:rt,titleCard:At,dispose:mt}}function Cs(i){if(i.shortName)return i.shortName;let t=String(i.nickname||i.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),n=e.slice(-2).join(" ");return n.length<=14?n:e.at(-1).slice(0,14)}var Ef=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],Wo=new Map;function mc(i){return Wo.has(i)||Wo.set(i,Wo.size),Ef[Wo.get(i)%Ef.length]}var Cx=i=>/\p{Extended_Pictographic}/u.test(String(i));function Ix(i){let t=String(i).trim();if(Cx(t))return[...t][0];let e=t.split(/\s+/).filter(Boolean);return(e.length>1&&e[0].length<=3?e[0][0]+e[1][0]:t[0]||"?").toUpperCase()}function Px(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var Xo=(i,t,e=12,n=!0)=>Ke(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function Tf(i,t,e,n){let s=gn(42),r=new he;i.add(r);let o=[],a=[],l=(P,w=3)=>(Nn(P,w,void 0,30),P),c=(P,w,E=3)=>me(P,w,{ol:E,olRef:30}),h=[];for(let P=0;P<n.path.length;P++){let w=n.path[P],E=e.anchors.nearestOnRibbon(w[0],w[1]),O=Math.hypot(w[0]-E[0],w[1]-E[1]);h.push({x:(w[0]+E[0])/2,z:(w[1]+E[1])/2,gap:O})}let d=0;h.forEach((P,w)=>{w&&(d+=Math.hypot(P.x-h[w-1].x,P.z-h[w-1].z)),P.s=d});let m=d,u=P=>{let w=0;for(;w<h.length-2&&h[w+1].s<P;)w++;let E=h[w],O=h[w+1],N=Math.max(0,Math.min(1,(P-E.s)/Math.max(1e-6,O.s-E.s))),V=E.x+(O.x-E.x)*N,k=E.z+(O.z-E.z)*N,ut=Math.hypot(O.x-E.x,O.z-E.z)||1;return{x:V,z:k,gap:E.gap+(O.gap-E.gap)*N,tx:(O.x-E.x)/ut,tz:(O.z-E.z)/ut,y:t.heightAt(V,k)}},g=h.filter(P=>P.gap>26),_=g.length?g[0].s:m*.25,p=g.length?g.at(-1).s:m*.75,f=P=>Array.from({length:P},(w,E)=>u(_+(E+.5)/P*(p-_))),A=(P,w,E=0)=>(P.position.set(w.x,w.y-.1,w.z),P.rotation.y=Math.atan2(w.tx,w.tz)+E,r.add(P),P),x={center:u((_+p)/2),rides:[]},y=f(7);{let P=y.slice(1,6).sort((X,ct)=>ct.gap-X.gap)[0],w=new he,E=17,O=E+2.6,N=new ce(.35,.5,O/Math.cos(.32)+1,8);for(let X of[-1,1])for(let ct of[-1,1]){let rt=c(N,pt("#ffffff"));rt.position.set(X*1.8,O/2,ct*Math.tan(.32)*O/2),rt.rotation.x=-ct*.32,w.add(rt)}let V=c(new ye(6,1,8,2,.3),pt("#2e9bff"));V.position.y=.5,w.add(V);let k=new he;k.position.y=O,w.add(k);let ut=c(new Ge(E,.45,8,64),pt("#ff3d8b"));ut.rotation.y=Math.PI/2,ut.position.x=1.2,k.add(ut);let gt=c(new Ge(E,.45,8,64),pt("#ff3d8b"));gt.rotation.y=Math.PI/2,gt.position.x=-1.2,k.add(gt);let U=c(new ce(1.3,1.3,3.2,16).rotateZ(Math.PI/2),pt("#ffd23f"));k.add(U);let xt=16,kt=[],F=[];for(let X=0;X<xt;X++){let ct=X/xt*Math.PI*2,rt=c(new be(.18,E,.18).translate(0,E/2,0),pt("#ffffff"),2);rt.rotation.x=ct,rt.position.x=1.2,k.add(rt);let At=rt.clone();At.position.x=-1.2,k.add(At);let Ht=new he;Ht.position.set(0,Math.cos(ct)*E,Math.sin(ct)*E),k.add(Ht);let at=new he;Ht.add(at);let mt=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][X%5],L=c(new ye(1.7,1.3,1.5,2,.35),pt(mt));L.position.y=-1.3,at.add(L);let lt=c(new ke(1.2,.7,4).rotateY(Math.PI/4),pt("#ffffff"),2);lt.position.y=-.1,at.add(lt),kt.push(Ht);for(let et=0;et<3;et++){let vt=ct+et/3*(Math.PI*2/xt);F.push([1.2,Math.cos(vt)*E,Math.sin(vt)*E],[-1.2,Math.cos(vt)*E,Math.sin(vt)*E])}}let Y=new Ye(new pe(.32,8,6),new mn({color:16777215}),F.length),j=new Pe;F.forEach((X,ct)=>{j.position.set(...X),j.updateMatrix(),Y.setMatrixAt(ct,j.matrix),Y.setColorAt(ct,new se(["#fff27a","#ff7ac8","#7affff"][ct%3]))}),k.add(Y),A(w,P,0),a.push(X=>{k.rotation.x=X*.18;for(let ct of kt)ct.rotation.x=-X*.18}),x.rides.push({kind:"wheel",obj:w,pos:new H(P.x,P.y+O,P.z),r:E}),P.used=!0}{let P=y.filter(F=>!F.used).sort((F,Y)=>Y.gap-F.gap)[0];P.used=!0;let w=new he,E=Math.min(6.5,P.gap*.28);w.scale.setScalar(1.45);let O=Xo("#ffffff","#ff4f6d",16);o.push(O);let N=c(new ce(E,E+.3,.9,32),pt("#ffffff",{map:O}));N.position.y=.45,w.add(N);let V=new he;w.add(V);let k=c(new ce(.7,.7,5,16),pt("#ffd23f"));k.position.y=3,V.add(k);let ut=Xo("#ffd23f","#ff3d8b",16);o.push(ut);let gt=c(new ke(E+.8,2.8,16),pt("#ffffff",{map:ut}));gt.position.y=6.6,V.add(gt);let U=c(new ce(E+.8,E+.8,.7,16,1,!0),pt("#2e9bff",{side:We}));U.position.y=4.9,V.add(U);let xt=c(new pe(.5,12,8),pt("#ff3d8b"));xt.position.y=8.2,V.add(xt);let kt=[];for(let F=0;F<8;F++){let Y=F/8*Math.PI*2,j=E*.72,X=new he;X.position.set(Math.cos(Y)*j,0,Math.sin(Y)*j),X.rotation.y=-Y,V.add(X);let ct=c(new ce(.06,.06,4.2,6),pt("#ffd23f"),1.5);ct.position.y=2.9,X.add(ct);let rt=new he;X.add(rt);let At=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][F%4],Ht=c(new ye(.7,.7,1.6,2,.3),pt(At));rt.add(Ht);let at=c(new ye(.45,.9,.5,2,.2),pt(At));at.position.set(0,.55,.7),at.rotation.x=.4,rt.add(at);let mt=c(new ye(.45,.45,.8,2,.2),pt(At));mt.position.set(0,.95,1.05),rt.add(mt);let L=c(new ye(.15,.8,.3,1,.06),pt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][F%4]),2);L.position.set(0,.75,.55),L.rotation.x=.4,rt.add(L);let lt=c(new ye(.75,.2,.6,1,.08),pt("#ff3d8b"),2);lt.position.y=.4,rt.add(lt);for(let[et,vt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let Lt=c(new be(.16,.7,.16),pt(At),1.5);Lt.position.set(et,-.55,vt),Lt.rotation.x=vt>0?-.5:.5,rt.add(Lt)}rt.rotation.y=Math.PI/2,kt.push({horse:rt,ph:F*.8})}A(w,P),a.push(F=>{V.rotation.y=F*.6;for(let Y of kt)Y.horse.position.y=2+Math.sin(F*2.2+Y.ph)*.35}),x.rides.push({kind:"carousel",obj:w,pos:new H(P.x,P.y+6,P.z),r:E*1.45})}{let P=y.filter(F=>!F.used).sort((F,Y)=>Y.gap-F.gap)[0];P.used=!0;let w=new he,E=15;w.scale.setScalar(1.5);let O=Xo("#ff3d3d","#ffffff",10,!1);o.push(O);let N=c(new ce(1.6,2.6,E,16),pt("#ffffff",{map:O}));N.position.y=E/2,w.add(N);let V=c(new ke(2.6,3.4,16),pt("#2e9bff"));V.position.y=E+1.7,w.add(V);let k=c(new ce(.06,.06,2,6),pt("#ffffff"),1.5);k.position.y=E+4.2,w.add(k);let ut=c(new sn(1.2,.7).translate(.6,0,0),pt("#ffd23f",{side:We}),1.5);ut.position.y=E+4.8,w.add(ut);let gt=[],U=3.2;for(let F=0;F<=160;F++){let Y=F/160,j=Y*U*Math.PI*2,X=2.6+(1-Y)*-.8+1.6;gt.push(new H(Math.cos(j)*X,E-1-Y*(E-2),Math.sin(j)*X))}let xt=c(new Co(new ir(gt),220,.55,8,!1),pt("#ffd23f"));xt.scale.y=1,w.add(xt);let kt=c(new ye(3,.3,2,2,.1),pt("#3ddc84"),2);kt.position.set(gt.at(-1).x+1,.15,gt.at(-1).z),w.add(kt),A(w,P),a.push(F=>{ut.rotation.y=Math.sin(F*3)*.4}),x.rides.push({kind:"helter",obj:w,pos:new H(P.x,P.y+12,P.z),r:6})}let B=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],T=[];[...y.filter(P=>!P.used),...f(13).filter((P,w)=>w%2===1)].slice(0,7).forEach((P,w)=>{let[E,O]=B[w%B.length],N=new he,V=w%2?1:-1,k=c(new ye(4.2,2.4,3,2,.2),pt("#fff6e0"));k.position.y=1.2,N.add(k);let ut=c(new ye(4.4,1.1,.8,2,.15),pt(O));ut.position.set(0,.55,1.7),N.add(ut);let gt=Xo("#ffffff",O,10);o.push(gt);let U=c(new be(4.8,.18,2.4),pt("#ffffff",{map:gt}));U.position.set(0,2.9,1.4),U.rotation.x=.32,N.add(U);for(let ct of[-1,1]){let rt=c(new ce(.09,.09,2.6,6),pt("#ffffff"),1.5);rt.position.set(ct*2.2,1.6,2.4),N.add(rt)}let xt=Fn(512,128,(ct,rt,At)=>{ct.fillStyle="#1a1420",He(ct,0,0,rt,At,30),ct.fill(),ct.fillStyle=O,He(ct,8,8,rt-16,At-16,24),ct.fill(),je(ct,E,rt/2,At/2+4,E.length>11?52:64,"#ffffff","#1a1420",.2)},o),kt=me(new ye(4.2,1.05,.3,2,.1),[pt(O),pt(O),pt(O),pt(O),pt("#ffffff",{map:xt}),pt("#ffffff",{map:xt})],{ol:2.5,olRef:30});if(kt.position.set(0,3.7,.4),N.add(kt),E==="CANDYFLOSS")for(let ct=0;ct<4;ct++){let rt=c(new $e(.32,1),pt("#ff9bd2"),1.5);rt.position.set(-1.4+ct*.9,1.45,1.75),N.add(rt)}if(E==="HOOK-A-DUCK"){let ct=c(new ce(1.6,1.6,.6,20),pt("#57c7ff"),2);ct.position.set(0,.3,3.6),N.add(ct);let rt=new he;rt.position.set(0,.7,3.6),N.add(rt);for(let At=0;At<6;At++){let Ht=At/6*Math.PI*2,at=c(new pe(.22,10,8),pt("#ffd23f"),1.5);at.position.set(Math.cos(Ht)*1.1,0,Math.sin(Ht)*1.1);let mt=c(new pe(.14,8,6),pt("#ffd23f"),1.2);mt.position.set(0,.22,.12),at.add(mt),rt.add(at)}T.push(rt)}let F=e.anchors.nearestOnRibbon(P.x,P.z),Y=Math.atan2(F[0]-P.x,F[1]-P.z),j=Math.min(P.gap*.3,7)*V,X=A(N,{...P,x:P.x+P.tz*j,z:P.z-P.tx*j,y:t.heightAt(P.x+P.tz*j,P.z-P.tx*j)});X.rotation.y=Y+(V>0?0:Math.PI)*0}),a.push(P=>{for(let w of T)w.rotation.y=P*.8});{let P=[],w=[],E=[],O=[],N=[];for(let xt of[-1,1]){let kt=null;for(let F=_-10;F<=p+10;F+=9){let Y=u(F),j=(Y.gap/2-6)*xt,X=Y.x+Y.tz*j,ct=Y.z-Y.tx*j,rt=t.heightAt(X,ct),At=new H(X,rt+4.2,ct),Ht=c(new ce(.08,.1,4.3,6),pt("#ffffff"),1.5);if(Ht.position.set(X,rt+2.1,ct),r.add(Ht),kt)for(let at=0;at<=10;at++){let mt=at/10,L=kt.clone().lerp(At,mt);L.y-=Math.sin(mt*Math.PI)*.7,P.push(L),at<10&&(at%2?(w.push(L.clone()),E.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(at+Math.round(F))%4])):(O.push({v:L.clone(),a:Math.atan2(-(At.z-kt.z),At.x-kt.x)}),N.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(at+Math.round(F/9))%5])))}kt=At}}let V=new Pe,k=new Ye(new pe(.16,8,6),new mn({color:16777215}),w.length);w.forEach((xt,kt)=>{V.position.copy(xt),V.updateMatrix(),k.setMatrixAt(kt,V.matrix),k.setColorAt(kt,new se(E[kt]))}),r.add(k);let ut=new Le;ut.setAttribute("position",new ue([-.32,0,0,.32,0,0,0,-.65,0],3)),ut.setAttribute("normal",new ue([0,0,1,0,0,1,0,0,1],3));let gt=new Ye(ut,pt("#ffffff",{side:We}),O.length);O.forEach((xt,kt)=>{V.position.copy(xt.v),V.rotation.set(0,xt.a,0),V.updateMatrix(),gt.setMatrixAt(kt,V.matrix),gt.setColorAt(kt,new se(N[kt]))}),r.add(gt);let U=[];for(let xt=0;xt+1<P.length;xt++)P[xt].distanceTo(P[xt+1])<3&&U.push(P[xt],P[xt+1]);r.add(new vs(new Le().setFromPoints(U),new zi({color:3355443}))),a.push(xt=>{k.material.color.setScalar(.85+.15*Math.sin(xt*6))})}{let P=u(_-4),w=Fn(1024,256,(O,N,V)=>{O.fillStyle="#1a1420",He(O,0,0,N,V,60),O.fill(),O.fillStyle="#ff3d8b",He(O,10,10,N-20,V-20,52),O.fill(),je(O,"\u2605 FUNFAIR \u2605",N/2,V/2+6,120,"#ffe14d","#1a1420",.18)},o),E=me(new ye(10,2.4,.4,2,.15),[pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ffffff",{map:w}),pt("#ffffff",{map:w})],{ol:3,olRef:30});E.position.set(P.x,P.y+7.5,P.z),E.rotation.y=Math.atan2(P.tx,P.tz)+Math.PI/2,r.add(E);for(let O of[-1,1]){let N=c(new ce(.25,.3,7.6,8),pt("#ffd23f"));N.position.set(P.x+P.tz*4.5*O,P.y+3.8,P.z-P.tx*4.5*O),r.add(N)}}let D=[];for(let P=0;P<60;P++){let w=_+s()*(p-_),E=u(w),O=(s()-.5)*(E.gap-16),N=E.x+E.tz*O,V=E.z-E.tx*O;D.push({x:N,y:t.heightAt(N,V),z:V,yaw:s()*6.28})}function M(P,w){for(let E of h){if(E.s<_-20||E.s>p+20)continue;let O=Math.max(6,E.gap/2-4);if((P-E.x)**2+(w-E.z)**2<O*O)return!0}return!1}function v(P){for(let w of a)w(P)}function b(){r.traverse(P=>{P.geometry&&P.geometry.dispose()});for(let P of o)P.dispose?.();i.remove(r)}return{group:r,update:v,dispose:b,anchors:x,crowd:D,at:u,s0:_,s1:p,contains:M}}function Af(i,t,e,n,s,{camera:r,offsetX:o=3.2}){let a=new he;i.add(a);let l=[],c=t.sample(t.finishM+28),h=new H(c.tx,0,c.tz),d=new H(c.rx,0,c.rz),m=new H(c.x,t.heightAt(c.x,c.z),c.z),u=Math.atan2(h.x,h.z);a.position.copy(m),a.rotation.y=u;let g=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let w of g){let E=Fn(256,256,(N,V,k)=>{N.fillStyle="#2e6fe0",N.fillRect(0,0,V,k),N.fillStyle=w.col,N.fillRect(0,0,V,26),je(N,String(w.place),V/2,k/2+14,170,w.col,"#1a1420",.16)},l),O=me(new ye(2.25,w.hgt,2,3,.12),[pt("#2e6fe0"),pt("#2e6fe0"),pt(w.col),pt("#2e6fe0"),pt("#ffffff",{map:E}),pt("#2e6fe0")],{ol:3.5,olRef:12});O.position.set(w.x,w.hgt/2,0),a.add(O),w.top=w.hgt}let _=Fn(1024,256,(w,E,O)=>{w.fillStyle="#1a1420",He(w,0,0,E,O,50),w.fill(),w.fillStyle="#ff3d8b",He(w,10,10,E-20,O-20,42),w.fill(),je(w,"MARKRUN CHAMPIONS",E/2,O/2+6,80,"#ffffff","#1a1420",.16)},l),p=me(new ye(9,2.2,.3,2,.1),[pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ffffff",{map:_}),pt("#ffffff",{map:_})],{ol:3,olRef:14});p.position.set(0,5.6,-2.4),a.add(p);for(let w of[-1,1]){let E=me(new ce(.14,.16,5.6,8),pt("#ffffff"),{ol:2,olRef:14});E.position.set(w*4.3,2.8,-2.4),a.add(E)}let f=s.length,A=[];for(let w of s){let E=n[w.runnerId];if(!E)continue;let O=g.find(k=>k.place===w.place),N=O?new H(O.x,O.top,.1):null,V;if(w.place===1?V=["celebrate","jump"]:w.place===2?V=["pose","flex"]:w.place===3?V=["celebrate","fist"]:w.place===f&&f>3?V=["celebrate","collapse"]:V=["celebrate","shrug"],!N){A.push({rr:E,o:w,pose:V});continue}x(E,N,V)}A.forEach((w,E)=>{let O=E%2?1:-1,N=Math.floor(E/2),V=w.pose[1]==="collapse",k=new H(O*(V?4.6:4.2+N*1.6),0,V?1.6:.6+N*.8);x(w.rr,k,w.pose,V?-O*Math.PI/2:0)});function x(w,E,O,N=0){let V=E.clone().applyAxisAngle(new H(0,1,0),u).add(m);E.y===0&&(V.y=t.heightAt(V.x,V.z)+.05),w.root.position.copy(V),w.root.rotation.set(0,u+N,0),w.set(...O),w.setPop(null)}let y=gn(3),B=420,T=new Ye(new sn(.16,.26),new mn({side:We}),B),I=[],D=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let w=0;w<B;w++)I.push({x:(y()-.5)*14,y:y()*12,z:(y()-.5)*8,vy:1+y()*1.6,sp:y()*6,ph:y()*6.28}),T.setColorAt(w,new se(D[w%D.length]));T.frustumCulled=!1,a.add(T);let M=new Pe,v=0;function b(w,E){v+=w;for(let ut=0;ut<B;ut++){let gt=I[ut];gt.y-=gt.vy*w,gt.y<0&&(gt.y+=12),M.position.set(gt.x+Math.sin(v*1.3+gt.ph)*.5,gt.y,gt.z+Math.cos(v+gt.ph)*.4),M.rotation.set(v*gt.sp+gt.ph,v*gt.sp*.7,gt.ph),M.updateMatrix(),T.setMatrixAt(ut,M.matrix)}T.instanceMatrix.needsUpdate=!0;let O=Math.sin(v*.18)*.4,N=15-Math.min(2.5,v*.2),V=new H(Math.sin(O)*N,3+Math.sin(v*.3)*.3,Math.cos(O)*N).applyAxisAngle(new H(0,1,0),u);r.position.copy(m).add(V);let k=new H(o,2.2,0).applyAxisAngle(new H(0,1,0),u).add(m);r.lookAt(k),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function P(){a.traverse(w=>{w.geometry&&w.geometry.dispose()}),T.material.dispose();for(let w of l)w.dispose?.();i.remove(a)}return{update:b,dispose:P,center:m}}var ze=(i,t)=>{i=i.index?i.toNonIndexed():i;let e=new se(t).convertSRGBToLinear(),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Ne(s,3)),i.getAttribute("uv")&&i.deleteAttribute("uv"),i},rn=(i,t,e,n,s=0,r=1.6)=>(i.scale(r,r,r),i.rotateY(s),i.translate(t,e,n),i);function Rf(i,t,e,n){let s=gn(777),r=new he;i.add(r);let o=[],a=[],l=(g,_)=>`lawn:${Math.floor(g/140)},${Math.floor(_/140)}`,c=(g,_,p,f=.8,A)=>a.push({x:g,y:t.heightAt(g,_),z:_,yaw:p,scale:f,colour:A,zone:l(g,_)}),{ribbonSamples:h}=e.anchors;function d(g,_,p){for(let f=0;f<40;f++){let A=h[Math.floor(s()*h.length)],x=s()*Math.PI*2,y=g+s()*(_-g),B=A[0]+Math.cos(x)*y,T=A[1]+Math.sin(x)*y;if(!(!e.inPark(B,T)||e.blocked(B,T,p+1)||!e.clearOf(B,T,p)||e.onPath(B,T,p+2)))return e.reserve(B,T,p),{x:B,z:T,y:t.heightAt(B,T),toPath:Math.atan2(A[0]-B,A[1]-T)}}return null}{let g=[],_=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],p=(T,I,D,M,v,b)=>{g.push(rn(ze(new be(1.6,.2,1.6).translate(0,2,0),v),T,I,D,M));for(let[E,O]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])g.push(rn(ze(new ce(.08,.08,2,6).translate(E,1,O),"#ffffff"),T,I,D,M));g.push(rn(ze(new ke(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),b),T,I,D,M));let P=new be(.9,.12,3.3);P.rotateX(-.62),P.translate(0,1.05,2.1),g.push(rn(ze(P,b),T,I,D,M));let w=new be(.8,.08,2.4);w.rotateX(1),w.translate(0,1,-1.3),g.push(rn(ze(w,"#ffffff"),T,I,D,M))},f=(T,I,D,M,v)=>{for(let b of[-1.8,1.8])for(let P of[-.6,.6]){let w=new ce(.08,.08,2.8,6);w.rotateX(P>0?.22:-.22),w.translate(b,1.35,P*.5),g.push(rn(ze(w,v),T,I,D,M))}g.push(rn(ze(new ce(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),v),T,I,D,M));for(let b of[-.8,.8]){g.push(rn(ze(new be(.6,.08,.35).translate(b,.75,0),"#22202c"),T,I,D,M));for(let P of[-.25,.25])g.push(rn(ze(new ce(.02,.02,1.9,4).translate(b+P,1.7,0),"#888888"),T,I,D,M))}},A=(T,I,D,M)=>{let v=new pe(1.6,8,5,0,Math.PI*2,0,Math.PI/2);g.push(rn(ze(v,M),T,I,D)),g.push(rn(ze(new ce(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),T,I,D))},x=(T,I,D,M,v)=>{g.push(rn(ze(new ce(1.5,1.5,.25,16).translate(0,.35,0),M),T,I,D)),g.push(rn(ze(new ce(.1,.1,1,6).translate(0,.9,0),v),T,I,D)),g.push(rn(ze(new Ge(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),v),T,I,D))},y=(T,I,D,M,v)=>{g.push(rn(ze(new pe(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),v),T,I,D,M)),g.push(rn(ze(new pe(.3,8,6).translate(0,1.4,.55),v),T,I,D,M)),g.push(rn(ze(new ce(.12,.12,.6,6).translate(0,.3,0),"#888888"),T,I,D,M))},B=[p,f,A,x,y];for(let T of n.features){if(T.kind!=="playground"||!T.closed)continue;let I=wn(T.pts),D=(I[2]-I[0])*(I[3]-I[1]),M=Math.max(1,Math.min(9,Math.round(D/380))),v=[];for(let b=0,P=0;b<M&&P<80;P++){let w=I[0]+3+s()*(I[2]-I[0]-6),E=I[1]+3+s()*(I[3]-I[1]-6);if(!Ts(T.pts,w,E)||v.some(gt=>Math.hypot(gt[0]-w,gt[1]-E)<8.5))continue;v.push([w,E]),b++;let O=t.heightAt(w,E)-.05,N=s()*6.28,V=_[Math.floor(s()*_.length)],k=_[Math.floor(s()*_.length)],ut=B[(b+v.length+Math.floor(s()*5))%B.length];ut===p||ut===f||ut===y?ut(w,O,E,N,V,k):ut(w,O,E,V,k),s()<.6&&c(w+2.5,E+1.5,s()*6,.55)}}if(g.length){let T=me(Xe(g),pt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(T)}}{let g=Ke(64,64,(D,M,v)=>{for(let b=0;b<6;b++)for(let P=0;P<6;P++)D.fillStyle=(b+P)%2?"#ffffff":"#c8c8c8",D.fillRect(b*M/6,P*v/6,M/6+1,v/6+1)});o.push(g);let _=new sn(2.8,2.2);_.rotateX(-Math.PI/2);let p=[],f=[],A=[],x=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let D=0;D<90;D++){let M=d(12,70,3);if(!M)continue;let v=s()*6.28;p.push({x:M.x,y:M.y+.06,z:M.z,ry:v}),f.push(x[D%x.length]),A.push({x:M.x+Math.cos(v)*.7,y:M.y+.05,z:M.z-Math.sin(v)*.7,ry:v});let b=1+Math.floor(s()*3);for(let P=0;P<b;P++){let w=v+P/b*Math.PI*2+.5,E=M.x+Math.cos(w)*.9,O=M.z-Math.sin(w)*.9;c(E,O,M.toPath+(s()-.5),.62+s()*.15)}}let y=new Ye(_,pt("#ffffff",{map:g,polygonOffset:!0,polygonOffsetFactor:-1}),p.length),B=new Pe;p.forEach((D,M)=>{B.position.set(D.x,D.y,D.z),B.rotation.set(0,D.ry,0),B.updateMatrix(),y.setMatrixAt(M,B.matrix),y.setColorAt(M,new se(f[M]))}),y.receiveShadow=!0,y.computeBoundingSphere(),r.add(y),e.registerInstanced(y,p);let T=Xe([ze(new ye(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),ze(new Ge(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),I=new Ye(T,pt("#ffffff",{vertexColors:!0}),A.length);A.forEach((D,M)=>{B.position.set(D.x,D.y,D.z),B.rotation.set(0,D.ry,0),B.updateMatrix(),I.setMatrixAt(M,B.matrix)}),I.castShadow=!0,I.computeBoundingSphere(),Nn(I,1.6,void 0,20),r.add(I),e.registerInstanced(I,A)}{let g=Xe([new Dn(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new pe(.22,10,8).translate(0,.72,.42),new pe(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new pe(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new pe(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([D,M])=>new ce(.06,.06,.32,6).translate(D,.16,M)),new ce(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(D=>D.index?D.toNonIndexed():D).map(D=>(D.deleteAttribute("uv"),D))),_=Xe([ze(new pe(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),ze(new pe(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([D,M])=>ze(new Ge(.2,.06,6,12).rotateY(Math.PI/2).translate(D,.22,M),"#22202c")),ze(new ce(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),p=[],f=[],A=[],x=[],y=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let D=0;D<64;D++){let M=d(8,60,1.6);if(!M)continue;let v=s()*6.28;c(M.x,M.z,v,.82);let b=Math.sin(v),P=Math.cos(v);D%4===3?(A.push({x:M.x+b*1.4,y:M.y,z:M.z+P*1.4,ry:v,s:1}),x.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][D%4])):(p.push({x:M.x+b*1.6+P*.8,y:M.y,z:M.z+P*1.6-b*.8,ry:v+(s()-.5)*.8,s:.8+s()*.6}),f.push(y[Math.floor(s()*y.length)]))}let B=new Pe,T=(D,M,v,b)=>{let P=new Ye(D,M,v.length);return v.forEach((w,E)=>{B.position.set(w.x,w.y,w.z),B.rotation.set(0,w.ry,0),B.scale.setScalar(w.s),B.updateMatrix(),P.setMatrixAt(E,B.matrix),b&&P.setColorAt(E,new se(b[E]))}),P.castShadow=!0,P.receiveShadow=!0,P.computeBoundingSphere(),Nn(P,2,void 0,18),r.add(P),e.registerInstanced(P,v),P},I=p.length?T(g,pt("#ffffff"),p,f):null;A.length&&T(_,pt("#ffffff",{vertexColors:!0}),A,x)}{let g=[],_=[],p=[],f=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let I=0;I<26;I++){let D=d(9,40,3.2);if(!D)continue;let M=2.2+s()*.8;g.push({x:D.x,y:D.y-.05,z:D.z,s:M});let v=[f[I%f.length],f[(I+2)%f.length]];for(let b=0;b<60;b++){let P=s()*6.28,w=Math.sqrt(s())*(M-.25);_.push({x:D.x+Math.cos(P)*w,y:D.y+.25,z:D.z+Math.sin(P)*w,s:.8+s()*.5}),p.push(v[b%2])}}let A=new Pe,x=Xe([ze(new ce(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),ze(new Ge(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),y=new Ye(x,pt("#ffffff",{vertexColors:!0}),g.length);g.forEach((I,D)=>{A.position.set(I.x,I.y,I.z),A.scale.set(I.s,1,I.s),A.updateMatrix(),y.setMatrixAt(D,A.matrix)}),y.receiveShadow=!0,y.computeBoundingSphere(),Nn(y,1.6,void 0,20),r.add(y),e.registerInstanced(y,g);let B=new $e(.24,0);B.computeVertexNormals();let T=new Ye(B,pt("#ffffff"),_.length);A.scale.setScalar(1),_.forEach((I,D)=>{A.position.set(I.x,I.y,I.z),A.scale.setScalar(I.s),A.updateMatrix(),T.setMatrixAt(D,A.matrix),T.setColorAt(D,new se(p[D]))}),T.computeBoundingSphere(),r.add(T),e.registerInstanced(T,_)}{let g=t.sample(55),_=-1,p=Fe/2+9,f=g.x+g.rx*p*_,A=g.z+g.rz*p*_;e.blocked(f,A,3)&&(f=g.x-g.rx*p*_,A=g.z-g.rz*p*_);let x=new he,y=Ke(128,16,(E,O,N)=>{for(let V=0;V<8;V++)E.fillStyle=V%2?"#fff":"#3a9d5d",E.fillRect(V*16,0,16,N)});o.push(y),x.add(me(new ye(3.2,1.6,1.8,3,.25),pt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let B=me(new ye(3.4,.15,2,2,.05),pt("#f4e3c0"),{ol:2,olRef:20});B.position.y=2,x.add(B);let T=me(new be(3.8,.15,2.4),pt("#ffffff",{map:y}),{ol:2.5,olRef:20});T.position.y=3.2,x.add(T);for(let E of[-1.6,1.6]){let O=me(new ce(.06,.06,1.2,6),pt("#ffffff"),{ol:1.5});O.position.set(E,2.6,.9),x.add(O)}for(let E of[-1.1,1.1]){let O=me(new ce(.4,.4,.2,14).rotateZ(Math.PI/2),pt("#22202c"),{ol:2});O.position.set(E,.4,.95),x.add(O);let N=O.clone();N.position.z=-.95,x.add(N)}let I=me(new ce(.75,.55,1.3,16),pt("#ffffff"),{ol:3,olRef:20});I.position.y=4,x.add(I);let D=me(new ce(.82,.82,.22,16),pt("#5a3a24"),{ol:2.5,olRef:20});D.position.y=4.75,x.add(D);let M=me(new ce(.72,.62,.45,16),pt("#c98a4a"),{ol:2,olRef:20});M.position.y=3.95,x.add(M);let v=Fn(512,128,(E,O,N)=>{E.fillStyle="#1a1420",He(E,0,0,O,N,28),E.fill(),E.fillStyle="#ffd23f",He(E,6,6,O-12,N-12,22),E.fill(),je(E,"FLAT WHITES",O/2,N/2+4,62,"#ffffff","#1a1420",.2)},o),b=new Ce(new sn(2.8,.7),pt("#ffffff",{map:v}));b.position.set(0,1.4,.92),x.add(b);let P=b.clone();P.rotation.y=Math.PI,P.position.z=-.92,x.add(P);let w=Math.atan2(g.x-f,g.z-A);x.position.set(f,t.heightAt(f,A),A),x.rotation.y=w,r.add(x);for(let E=0;E<5;E++){let O=f+Math.sin(w)*(2.2+E*1.1)+Math.cos(w)*(E%2?.3:-.3),N=A+Math.cos(w)*(2.2+E*1.1);c(O,N,w+Math.PI,.8)}e.anchors.coffeeCart=x}function m(){}function u(){r.traverse(g=>{g.geometry&&g.geometry.dispose()});for(let g of o)g.dispose?.();i.remove(r)}return{group:r,crowd:a,update:m,dispose:u}}var gr=8.5;function gc(i,t={}){let{course:e,park:n,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(tt=>(o[tt]||[]).length),l=[...s?.runners||[]].sort((tt,dt)=>(tt.lane??0)-(dt.lane??0)),c=!1,h=new po({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});h.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),h.outputColorSpace=tn,h.toneMapping=Vn,h.shadowMap.enabled=!0,h.shadowMap.type=Zl;let d=h.domElement;d.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(d);let m=new go;m.fog=new mo(13496063,700,3200);let u=new hn(45,16/9,.3,9e3),g=new Do(14676223,9420912,1.45);m.add(g);let _=new Uo(16774109,2.3),p=new H(-.45,.82,.38).normalize();_.castShadow=!0,_.shadow.mapSize.set(2048,2048),_.shadow.bias=-4e-4,_.shadow.normalBias=.03,_.shadow.radius=3,m.add(_),m.add(_.target);let f=of(e,n,r),A=hf(m,f,{course:e,park:n}),x=null,y=null,B=df(f,A.anchors.crowdZones,5,A.onPath,A.blocked),T=Rf(m,f,A,n);B.push(...T.crowd);let I=new Map;for(let tt of B){let dt=tt.zone??"x";I.has(dt)||I.set(dt,[]),I.get(dt).push(tt)}let D=[...I.values()].map(tt=>uc(m,tt)),M={update:(...tt)=>{D.forEach(dt=>dt.update(...tt)),y?.update(...tt)},dispose:()=>{D.forEach(tt=>tt.dispose()),y?.dispose()}},v={};for(let tt of l){let dt=xf(tt);v[tt.id]=dt,m.add(dt.root)}let b=l.map(tt=>tt.id),P=Object.fromEntries(l.map(tt=>[tt.id,tt])),w=wf(i,{runners:l,backedBy:o,course:e,park:n,C:f}),E=null,O=null,N=[],V=null,k=[],ut=!1;function gt(tt){if(r=tt||null,f.setPlan(r),c=!!r?.runners?.some(dt=>dt.diversions&&dt.diversions.length),x&&(x.dispose(),x=null),y&&(y.dispose(),y=null),c){let dt=r.runners.find(Yt=>Yt.diversions?.length).id;x=Tf(m,f,A,f.diversions[dt][0]),A.clearArea(x.contains),D.forEach(Yt=>Yt.hideWhere(x.contains)),y=uc(m,x.crowd)}if((c||ut)&&(A.redrawGround(),w.redrawMap()),ut=c,k=[],r){O=_f(r,f,l),N=dc({plan:r,sim:O,backedIds:a,hasDiversion:c,C:f,world:A,funfair:x}),V=bf({camera:u,C:f,sim:O,world:A,funfair:x});for(let dt of r.events||[])k.push({at:dt.broadcastS,evt:{...dt,kind:"event"}});for(let dt of r.commentary||[])k.push({at:dt.broadcastS,evt:{...dt,kind:"commentary"}});k.sort((dt,Yt)=>dt.at-Yt.at)}else O=null,N=[],V=null}let U="idle",xt=!1,kt=!1,F=-gr,Y=0,j=null,X=null,ct=0,rt=!1,At=!1,Ht=0,at=0,mt=!1,L=0,lt=Math.max(.05,Number(t.speed)||1),et=null,vt=0,Lt=new Set;function $(){let tt=i.clientWidth||window.innerWidth,dt=i.clientHeight||window.innerHeight;h.setSize(tt,dt,!1),u.aspect=tt/dt,u.updateProjectionMatrix(),cc.uRes.value.set(tt*h.getPixelRatio(),dt*h.getPixelRatio())}let Ft=typeof ResizeObserver<"u"?new ResizeObserver($):null;Ft?.observe(i),window.addEventListener("resize",$),$();let z={};{let tt=b.length;b.forEach((dt,Yt)=>{let Vt=(Yt-(tt-1)/2)*Math.min(1.25,(Fe-1.6)/Math.max(1,tt-1)),C=f.sample(0);z[dt]={x:C.x+C.rx*Vt-C.tx*1.2,z:C.z+C.rz*Vt-C.tz*1.2,yaw:Math.atan2(C.tx,C.tz)},z[dt].y=f.heightAt(z[dt].x,z[dt].z)+.16})}function R(tt="idle"){for(let dt of b){let Yt=z[dt],Vt=v[dt];Vt.root.position.set(Yt.x,Yt.y,Yt.z),Vt.root.rotation.set(0,Yt.yaw,0),tt&&Vt.set(tt),Vt.setPop(null)}}R(),gt(r);let ht=(tt,dt)=>tt===1?"jump":tt===2||tt===3?"fist":tt===dt?"collapse":"kneel";function Tt(tt,dt){let Yt=O.stateAt(Math.max(0,tt)),Vt=b.length;for(let C of b){let W=Yt.byId[C],K=v[C];if(tt<0)continue;K.root.position.set(W.x,W.y,W.z);let yt=Math.atan2(W.tx,W.tz)+(W.finished&&W.post>2.4&&!(W.place>3&&W.post<4)?Math.PI*(W.place%2?1:-1)*.92:0),st=K.root.rotation.y,zt=yt-st;for(;zt>Math.PI;)zt-=2*Math.PI;for(;zt<-Math.PI;)zt+=2*Math.PI;K.root.rotation.y=st+zt*Math.min(1,dt*10);let Gt={speed:W.vRace,rate:Yt.rate,slope:W.slope},Nt=f.diversions[C]?.[0];if(Nt&&K.setProp("floss",W.m>Nt.toM-20?Math.max(.25,1-(W.m-Nt.toM)/3500):0),W.finished){let Bt=W.place;W.post<1.6?(K.set("run"),Gt.speed=3,Gt.rate=1.2):Bt>3&&W.post<4?K.set("trudge"):K.set("celebrate",ht(Bt,Vt)),K.setPop(null)}else if(W.div>.3){K.set("distracted");let Bt=x?.anchors.rides.reduce((te,ee)=>!te||ee.pos.distanceToSquared(K.root.position)<te.pos.distanceToSquared(K.root.position)?ee:te,null);if(Bt){let ee=Math.atan2(Bt.pos.x-W.x,Bt.pos.z-W.z)-K.root.rotation.y;for(;ee>Math.PI;)ee-=2*Math.PI;for(;ee<-Math.PI;)ee+=2*Math.PI;Gt.lookYaw=Math.max(-1.3,Math.min(1.3,ee))}K.setPop(["!","heart","floss"][Math.floor((W.m-W.divInfo.fromM)/120)%3])}else{K.set("run"),K.setPop(null);let Bt=f.geoOf(W.m);Gt.effort=W.m>4300?.4+(W.m-4300)/700*.5:Bt>1700&&Bt<2060?.7:.1}K.update(dt,Gt)}}let It=new H,q=null,ft=-1,ot=()=>{if(ft!==Y||!q){let tt=d.getBoundingClientRect();q=[...w.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].filter(dt=>!w.root.classList.contains("mr-dim")&&!(w.root.classList.contains("mr-dimtop")&&!dt.classList.contains("mr-map"))).map(dt=>{let Yt=dt.getBoundingClientRect(),Vt=Yt.right,C=Yt.bottom;if(dt.classList.contains("mr-tower")){C=Yt.top+dt.querySelectorAll(".mr-row").length*((dt.querySelector(".mr-row")?.offsetHeight||40)+6);for(let W of dt.querySelectorAll(".mr-badges")){let K=W.getBoundingClientRect();K.width&&(Vt=Math.max(Vt,K.right))}}return{left:Yt.left-tt.left,right:Vt-tt.left,top:Yt.top-tt.top,bottom:C-tt.top}}),ft=Y}return q};function bt(tt,dt=!0){let Yt=d.clientWidth,Vt=d.clientHeight,C=[];for(let Nt of b){let Bt=v[Nt];It.set(Bt.root.position.x,Bt.root.position.y+Bt.height+.55,Bt.root.position.z);let te=It.distanceTo(u.position);It.project(u);let ee=dt&&It.z<1&&It.z>-1&&Math.abs(It.x)<.95&&It.y<.82&&It.y>-.62&&te>9.5&&te<150;Bt.height/Math.max(.1,te)*(Vt/(2*Math.tan(vi.degToRad(u.fov)/2)))>Vt*.3&&(ee=!1),C.push({id:Nt,x:(It.x*.5+.5)*Yt,y:(-It.y*.5+.5)*Vt,visible:ee,pos:tt?tt.order.indexOf(Nt)+1:0,scale:Math.max(.7,Math.min(1.15,30/te)),dist:te})}let W=U==="race"&&Go.has(V?.shot?.type)&&!V?.gliding,K=tt?tt.order:b,yt=new Set([...K.slice(0,3),...a]);C.sort((Nt,Bt)=>K.indexOf(Nt.id)-K.indexOf(Bt.id));let st=[];for(let Nt of C){if((!W||!yt.has(Nt.id))&&(Nt.visible=!1),!Nt.visible)continue;let Bt=(Cs(P[Nt.id]).length*10+50+(o[Nt.id]?.length||0)*18)*Nt.scale,te=26*Nt.scale,ee=10,Jt={l:Nt.x-Bt/2,r:Nt.x+Bt/2,t:Nt.y-te,b:Nt.y+6};if(st.some(le=>Jt.l<le.r+4&&Jt.r>le.l-4&&Jt.t<le.b+2&&Jt.b>le.t-2)){Nt.visible=!1;continue}if(ot().some(le=>Jt.l<le.right+ee&&Jt.r>le.left-ee&&Jt.t<le.bottom+ee&&Jt.b>le.top-ee)){Nt.visible=!1;continue}st.push(Jt)}if(!tt)return U!=="race"?{tags:C}:{tags:C,raceS:0,leaderM:0,map:!1,order:b.map(Nt=>({id:Nt,hidden:!0,gapText:""}))};let zt=tt.leader.m>=4e3,Gt=tt.order.map((Nt,Bt)=>{let te=tt.byId[Nt],ee=Bt<3||a.includes(Nt),Jt=zt||te.finished?te.gapText:"";if(!Jt&&a.includes(Nt)&&Bt>0&&!te.finished){let le=tt.byId[tt.order[Bt-1]],we=tt.raceS-Si(O.byId[tt.order[Bt-1]].progress,te.m);!le.finished&&we>=0&&we<=5&&(Jt=`\u2191${we.toFixed(1)}s`)}return{id:Nt,gapText:Jt,finished:te.finished,hidden:!ee}});return{raceS:tt.raceS,leaderM:tt.leader.m,tags:C,order:Gt,map:Go.has(V?.shot?.type),dots:tt.order.map((Nt,Bt)=>({x:tt.byId[Nt].x,z:tt.byId[Nt].z,colour:P[Nt].colour.primary,lead:Bt===0,focus:V?.shot?.ids?.includes(Nt)}))}}let St=new bs(.78,1,48);St.rotateX(-Math.PI/2);let Rt={};function Pt(){for(let tt of b){let dt=Rt[tt]||(Rt[tt]=new he);dt.parent||v[tt].root.add(dt);for(let Yt of[...dt.children])dt.remove(Yt),Yt.material.dispose();(o[tt]||[]).forEach((Yt,Vt)=>{let C=new Ce(St,new mn({color:mc(Yt),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));C.scale.setScalar(1+Vt*.32),C.position.y=.06+Vt*.01,C.renderOrder=2,dt.add(C)})}}function Xt(){for(let tt of b){let dt=Rt[tt];if(!dt||!dt.children.length)continue;let Yt=u.position.distanceTo(v[tt].root.position);dt.scale.setScalar(vi.clamp(Yt*.016,.9,3.2))}}Pt();function jt(tt,dt){let Yt=Math.max(30,Math.min(220,dt)),Vt=_.shadow.camera;Vt.right!==Yt&&(Vt.left=-Yt,Vt.right=Yt,Vt.top=Yt,Vt.bottom=-Yt,Vt.near=1,Vt.far=900,Vt.updateProjectionMatrix());let C=2*Yt/_.shadow.mapSize.x,W=Math.round(tt.x/C)*C,K=Math.round(tt.z/C)*C;_.target.position.set(W,tt.y,K),_.position.set(W+p.x*400,tt.y+p.y*400,K+p.z*400)}let Zt=["wave","flex","point","stretch","spin","bow"];function fe(tt,dt){let Yt=[...tt.personality||tt.id].reduce((Vt,C)=>Vt+C.charCodeAt(0),dt);return Zt[Yt%Zt.length]}function ie(tt,dt={}){U="intro",w.setDim(!0),w.clearBanner(),w.photo(!1),w.results(null),wt(),w.market(!1),et=null,xt=!1,d.style.filter="",R("idle");let Yt=dt.perRunnerS??t.introPerRunnerS??4.2,Vt=dt.flyoverS??7;return X={t:0,idx:-1,per:Yt,fly:Vt,onDone:tt,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:Vt,perRunnerS:Yt,runners:b.slice()}}function _e(tt){let dt=X;if(!dt)return;dt.t+=tt;let Yt=z;if(dt.idx===-1){!dt.title&&dt.t>.8&&(dt.title=!0,nt(!0));let Gt=Math.min(1,dt.t/dt.fly),Nt=pc(Gt),Bt=f.sample(0),te=new H(170,0,-40),ee=2.2-Nt*2,Jt=520-Nt*470,le=new H(te.x+Math.cos(ee)*Jt,190-Nt*170,te.z+Math.sin(ee)*Jt),we=new H(Bt.x+Bt.tx*22+Bt.rx*10,Bt.y+9,Bt.z+Bt.tz*22+Bt.rz*10);le.lerp(we,Nt*Nt);let De=te.clone().setY(15).lerp(new H(Bt.x,Bt.y+1,Bt.z),Math.min(1,Nt*1.2));u.position.copy(le),u.lookAt(De),Et(50),Gt>=1&&qt();return}if(dt.group){let Gt=f.sample(0),Nt=(dt.t-dt.segStart)/3;if(u.position.set(Gt.x+Gt.tx*(9+Nt*2)+Gt.rx*2,Gt.y+2.2+Nt*.6,Gt.z+Gt.tz*(9+Nt*2)+Gt.rz*2),u.lookAt(Gt.x,Gt.y+1.3,Gt.z),Et(46),Nt>=1&&!dt.done){dt.done=!0,w.introCard(null);let Bt=dt.onDone;X=null,U="idle",Bt?.()}return}let Vt=b[dt.idx],C=Yt[Vt],W=dt.t-dt.segStart,K=new H(Math.sin(C.yaw),0,Math.cos(C.yaw)),yt=new H(-K.z,0,K.x),st=v[Vt].height,zt=3.2+st*.6-Math.min(.6,W*.12);u.position.set(C.x+K.x*zt+yt.x*.9,C.y+st*.62,C.z+K.z*zt+yt.z*.9),u.lookAt(C.x-yt.x*1.25,C.y+st*.55,C.z-yt.z*1.25),Et(40),!dt.waiting&&W>=dt.per&&qt(),dt.waiting==="released"&&W>=dt.minSeg&&qt()}function nt(tt){let dt=s||{};w.titleCard(tt,{title:dt.title||"MARKRUN",kicker:dt.number?`ROUND ${dt.number}`:"LIVE FROM FINSBURY PARK",theme:dt.theme?typeof dt.theme=="string"?dt.theme:dt.theme.label||dt.theme.name||"":""})}function qt(){let tt=X;tt.idx===-1&&nt(!1),tt.idx++,tt.segStart=tt.t;for(let C of b)v[C].set("idle");if(tt.idx>=b.length){tt.group=!0;for(let C of b)v[C].set("pose","point");w.introCard(null),setTimeout(()=>{},0);for(let C of b)v[C].set("wave");return}let dt=b[tt.idx];v[dt].set(fe(P[dt],tt.idx)==="wave"?"wave":"pose",fe(P[dt],tt.idx)),t.introCards!==!1&&w.introCard(P[dt]),tt.waiting=!1;let Vt=t.onIntroRunner?.(dt,tt.idx);Vt&&typeof Vt.then=="function"&&(tt.waiting=!0,Vt.then(()=>{X===tt&&(tt.waiting="released")},()=>{X===tt&&(tt.waiting="released")}))}function Ct(tt,dt){if(!O)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");U="race",w.setDim(!1),w.results(null),wt(),X=null,w.introCard(null),w.titleCard(!1),w.market(!1),et=null,xt=!1,d.style.filter="",F=-gr,Ht=0,at=0,ct=0,rt=!1,At=!1,Lt.clear(),mt=!!t.skipRaceTitle,w.setDimTop(!1),j={onEvent:tt,onDone:dt},R("idle"),V.reset()}let Dt=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function S(tt){switch(tt.type){case"lead_change":return["LEAD CHANGE","","#ff3d8b"];case"overtake":return a.includes(tt.by)||a.includes(tt.on)?["OVERTAKE","","#2e6fe0"]:null;case"hill":return["THE HILL","","#3aa845"];case"lap":return["LAP 2","","#2e6fe0"];case"final_stretch":return["FINAL STRETCH","","#ff8a1f"];case"diversion":return Lt.has("div")?null:(Lt.add("div"),["DISTRACTED!","","#b04bff"]);case"finish":return tt.place===1&&!O.photoFinish?["WINNER","","#ffb000"]:null;default:return null}}function G(tt){if(ct>0){ct-=tt,ct<=0&&(w.photo(!1),d.style.filter="",A.anchors.finishArch.visible=!0,V.reset(),w.showBanner("WINNER","","#ffb000"));return}let dt=F;for(F+=tt,F<-4.2&&!mt&&(mt=!0,nt(!0),w.setDimTop(!0)),F>=-3.6&&mt===!0&&(mt="done",nt(!1),w.setDimTop(!1));at<Dt.length&&F>=Dt[at][0];){let[Yt,Vt]=Dt[at++];if(w.countdown(Vt),j?.onEvent?.({kind:"countdown",n:Vt==="GO!"?0:Number(Vt),text:Vt,broadcastS:Yt}),Yt===-3)for(let C of b)v[C].set("ready")}for(;Ht<k.length&&F>=k[Ht].at;){let Yt=k[Ht++].evt;try{j?.onEvent?.(Yt)}catch(Vt){console.error(Vt)}if(Yt.kind==="event"){let Vt=S(Yt);Vt&&w.showBanner(...Vt)}}if(O.photoFinish&&!rt&&F>=O.firstFinishB){rt=!0,F=O.firstFinishB,ct=t.photoFreezeS??2.8;{let[Yt,Vt]=O.finishOrder;w.photo(!0,`${Cs(P[Yt])} or ${Cs(P[Vt])}? Checking the camera...`)}d.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",j?.onEvent?.({kind:"photo_finish",broadcastS:F,ids:O.finishOrder.slice(0,2)})}!At&&F>=O.lastFinishB+3.5&&(At=!0,j?.onDone?.())}function Z(tt){o=tt||{},a=Object.keys(o).filter(dt=>(o[dt]||[]).length),w.setBackedBy(o),Pt()}function it(tt,dt=1.2){if(!O)throw new Error("createRaceView: seek in a race needs a plan");tt=Math.max(-gr,Math.min(O.lastFinishB+3.5,Number(tt)||0)),U="race",X=null,wt(),j=j||{},w.setDim(!1),w.introCard(null),w.results(null),w.photo(!1),w.market(!1),w.clearBanner(),w.titleCard(!1),w.setDimTop(!1),d.style.filter="",A.anchors.finishArch.visible=!0,et=null,mt=tt>=-3.6?"done":tt<-4.2?!1:"done",V.reset();let Yt=Math.round(dt*30);for(let Vt=Yt;Vt>=0;Vt--){if(F=tt-Vt/30,F<-3)for(let C of b)v[C].set("idle");else if(F<0)for(let C of b)v[C].set("ready");if(Vt>0)if(V.update(F,1/30,N),F>=0)Tt(F,1/30);else for(let C of b)v[C].update(1/30,{})}F=tt,Ht=k.findIndex(Vt=>Vt.at>F),Ht<0&&(Ht=k.length),at=Dt.findIndex(Vt=>Vt[0]>F),at<0&&(at=Dt.length),rt=F>=O.firstFinishB,At=F>=O.lastFinishB+3.5,ct=0}function _t(tt){let dt=X;if(!dt)return;tt=Math.max(0,Number(tt)||0);let Yt=b.length;if(tt<dt.fly){dt.t=tt;return}nt(!1),dt.title=!0;let Vt=Math.min(Yt,Math.floor((tt-dt.fly)/dt.per));dt.idx=Vt-1,dt.t=tt,qt(),dt.segStart=dt.fly+Vt*dt.per}function Q(tt){return U==="intro"?_t(tt):it(tt)}function wt(){E&&(E.dispose(),E=null)}function Wt(tt,{card:dt}={}){U="podium",w.setDim(!0),w.clearBanner(),X=null,w.titleCard(!1),w.market(!1),et=null,xt=!1,d.style.filter="",w.photo(!1),wt();let Yt=tt?.finishOrder?.length?[...tt.finishOrder].sort((Vt,C)=>Vt.place-C.place):(O?.finishOrder||b).map((Vt,C)=>({runnerId:Vt,place:C+1,officialS:O?.byId[Vt].officialS??0,timeText:O?Vo(O.byId[Vt].officialS):""}));E=Af(m,f,A,v,Yt,{camera:u,offsetX:(dt??t.podiumCard)!==!1?3.2:0}),(dt??t.podiumCard)!==!1&&w.results(Yt.map(Vt=>({place:Vt.place,nickname:P[Vt.runnerId]?.nickname||Vt.runnerId,colour:P[Vt.runnerId]?.colour.primary||"#888",timeText:Vt.timeText||Vo(Vt.officialS)})))}let Ut=performance.now(),J=0,Mt={frames:0,acc:0,fps:0};function Et(tt){Math.abs(u.fov-tt)>.01&&(u.fov=tt,u.updateProjectionMatrix())}function $t(tt,dt=!1){Y+=tt;let Yt=null;xt||(U==="intro"&&_e(tt),U==="race"&&G(tt));let Vt=xt?0:tt;if(U==="race"){if(ct>0){let K=A.anchors.finish;A.anchors.finishArch.visible=!1,u.position.set(K.x+K.rx*9-K.tx*.6,K.y+6.4,K.z+K.rz*9-K.tz*.6),u.lookAt(K.x-K.rx*.6-K.tx*.6,K.y+.8,K.z-K.rz*.6-K.tz*.6),Et(42),u.updateMatrixWorld();let yt=new H(K.x+K.rx*3,K.y+.05,K.z+K.rz*3).project(u),st=new H(K.x-K.rx*3,K.y+.05,K.z-K.rz*3).project(u);w.photoLine([(yt.x*.5+.5)*d.clientWidth,(-yt.y*.5+.5)*d.clientHeight],[(st.x*.5+.5)*d.clientWidth,(-st.y*.5+.5)*d.clientHeight])}else if(xt&&et!=null){et+=tt;let K=O.stateAt(Math.max(0,F)),yt=K.byId[K.order[0]],st=K.order.slice(0,3).map(le=>K.byId[le]).filter(le=>Math.abs(le.m-yt.m)<25),zt=new H;for(let le of st)zt.add(new H(le.x,le.y,le.z));zt.divideScalar(Math.max(1,st.length)),vt||(vt=Math.atan2(u.position.x-zt.x,u.position.z-zt.z));let Gt=vt+et*.12,Nt=10+Math.min(25,yt.m-st.at(-1).m)*.4,Bt=Math.min(1,et/1.2),te=Bt*Bt*(3-2*Bt),ee=zt.x+Math.sin(Gt)*Nt,Jt=zt.z+Math.cos(Gt)*Nt;u.position.set(ee,Math.max(zt.y+3+te*2,f.heightAt(ee,Jt)+2.5),Jt),u.lookAt(zt.x,zt.y+2.3,zt.z),Et(44)}else V.update(F,Vt,N);if(Yt=F>=0?O.stateAt(F):null,F<0)for(let K of b)v[K].update(Vt,{});else Tt(F,ct>0?0:Vt);let W=V.shot?.type;jt(V.cam.look,Go.has(W)?160:70)}else if(U==="podium"&&E){E.update(Vt,Y);for(let W of b)v[W].update(Vt,{});jt(E.center,40)}else{for(let W of b)v[W].update(Vt,{});if(U==="idle"){let W=f.sample(0),K=Y*.12;u.position.set(W.x+Math.sin(K)*14,W.y+4.5,W.z+Math.cos(K)*14),u.lookAt(W.x,W.y+1.2,W.z),Et(45)}jt(new H(z[b[0]]?.x??0,0,z[b[0]]?.z??0),U==="intro"&&X?.idx===-1?160:40)}if(L+=tt,dt)return;Xt(),A.update(Y),x?.update(Y);let C=b.map(W=>v[W].root.position);M.update(Y,u.position,C,U==="podium"?.9:null),w.update(L,U==="race"?bt(Yt,F>-1&&et==null):bt(null,!1)),L=0,h.render(m,u)}let oe=2;function re(tt){if(kt)return;J=requestAnimationFrame(re);let dt=Math.max(0,(tt-Ut)/1e3);Ut=tt,Mt.frames++,Mt.acc+=dt,Mt.acc>1&&(Mt.fps=Mt.frames/Mt.acc,Mt.frames=0,Mt.acc=0),ge(Math.min(oe,dt)*lt)}function ge(tt){let dt=tt;if(dt<=1e-6){$t(0);return}for(;dt>1e-6;){let Yt=Math.min(dt,.1);dt-=Yt,$t(Yt,dt>1e-6)}}t.manualLoop||(J=requestAnimationFrame(re));function Me(){kt=!0,cancelAnimationFrame(J),Ft?.disconnect(),window.removeEventListener("resize",$);for(let tt in Rt)for(let dt of Rt[tt].children)dt.material.dispose();St.dispose(),wt();for(let tt of b)m.remove(v[tt].root),v[tt].dispose();M.dispose(),x?.dispose(),T.dispose(),A.dispose(),w.dispose(),m.traverse(tt=>{tt.geometry&&tt.geometry.dispose()}),gf(),lf(),h.dispose(),h.forceContextLoss?.(),d.remove()}let Se={seek(tt,dt=1.2){it(tt,dt),xt=!0,$t(0)},introAt(tt,dt=1.5){if(ie(()=>{},{}),xt=!1,tt<0){X.t=dt,_e(0),$t(0),xt=!0;return}for(X.t=X.fly,_e(0);X&&X.idx<tt;)X.t=X.segStart+X.per+.01,_e(0);for(let Yt=0;Yt<dt*30;Yt++){_e(1/30);for(let Vt of b)v[Vt].update(1/30,{})}xt=!0,$t(0)},podiumAt(tt=3){w.introCard(null),Wt(null);for(let dt=0;dt<tt*30;dt++){E.update(1/30,dt/30);for(let Yt of b)v[Yt].update(1/30,{})}xt=!0,$t(0)},photoAt(){this.seek(O.firstFinishB-.05),xt=!1,rt=!1;for(let tt=0;tt<3;tt++)$t(1/30);xt=!0,$t(0)},render(){$t(0)},unpause(){xt=!1},lookFrom(tt,dt,Yt,Vt,C,W,K=45){U="debugcam",u.position.set(tt,dt,Yt),u.lookAt(Vt,C,W),Et(K),w.setDim(!0),h.render(m,u)},step(tt,dt=!0){$t(tt,!dt)},get mode(){return U},get b(){return F},get shots(){return N},get sim(){return O},C:f,get director(){return V},renderer:h,scene:m,camera:u,info:()=>h.info,fps:()=>Mt.fps};return{playIntro:ie,playRace:Ct,showPodium:Wt,setPaused(tt,{market:dt=!0,marketText:Yt}={}){tt=!!tt,tt!==xt&&(xt=tt,U==="race"&&ct<=0&&t.marketOnPause!==!1&&dt&&(tt?(et=0,vt=0,w.market(!0,Yt??t.marketText??"Place your halfway bets!"),d.style.filter="saturate(1.2) contrast(1.06)"):(et=null,w.market(!1),d.style.filter="",V.reset(!1))))},setSpeed(tt){lt=Math.max(.05,Number(tt)||1)},seek:Q,loadPlan(tt,{backedBy:dt}={}){if(U==="race")throw new Error("createRaceView: loadPlan during a race");dt&&Z(dt),gt(tt)},setBackedBy(tt){Z(tt),O&&U!=="race"&&(N=dc({plan:r,sim:O,backedIds:a,hasDiversion:c,C:f,world:A,funfair:x}))},dispose:Me,hudRoot:w.root,get broadcastTime(){return U==="intro"?X?.t??0:F},get durationS(){return O?gr+O.lastFinishB+3.5:0},preRollS:gr,_debug:Se}}var zn=new URLSearchParams(location.search);async function xc(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function Lx(){let i=zn.get("fixture"),[t,e,n]=await Promise.all([xc("/data/course/course.json"),xc("/data/course/park.json"),xc(i?`/client/tv/race/fixtures/${i}.json`:"/data/fixtures/round.json")]);zn.get("shot")&&document.body.classList.add("shot");let s={};zn.get("backed")!=null?zn.get("backed").split(",").filter(Boolean).forEach((c,h)=>s[c]=[h%2?"Mrs M":"Mark"]):Object.assign(s,{r2:["Mark"],r4:["Mrs M"],r1:["Mark","Mrs M"]});let r=document.getElementById("sub"),o=gc(document.getElementById("stage"),{course:t,park:e,round:n.public,plan:n.racePlan,backedBy:s,speed:Number(zn.get("speed"))||1,preserveDrawingBuffer:!!zn.get("shot"),manualLoop:!!zn.get("shot"),onIntroRunner:c=>{let h=n.public.runners.find(d=>d.id===c);r.textContent=`${h.nickname} - ${h.tagline}`}});window.view=o,window.__create=gc,window.__data={course:t,park:e,round:n};let a=c=>{c.kind==="commentary"&&(r.textContent=c.text),c.kind==="countdown"&&(r.textContent=c.text)},l={intro:()=>o.playIntro(()=>{r.textContent="(betting would happen here)",zn.get("auto")!=="0"&&setTimeout(l.race,1500)}),race:()=>(r.textContent="",o.playRace(a,()=>{r.textContent="Race over",setTimeout(l.podium,2500)})),podium:()=>o.showPodium(null),pause:(()=>{let c=!1;return()=>o.setPaused(c=!c)})()};document.getElementById("ctl").addEventListener("click",c=>{let h=c.target.dataset?.a;h&&l[h]()}),zn.get("shot")||setInterval(()=>{document.getElementById("fps").textContent=`${o._debug.fps().toFixed(0)} fps`},1e3),zn.get("auto")!=="0"&&!zn.get("shot")&&l.intro(),window.__ready=!0}Lx().catch(i=>{console.error(i),document.getElementById("sub").textContent=String(i),window.__error=String(i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
