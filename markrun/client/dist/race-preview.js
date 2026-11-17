var Wl="170";var wf=0,pc=1,Tf=2;var Rh=1,Xl=2,Kn=3,xi=0,nn=1,We=2,mi=0,ls=1,mc=2,gc=3,xc=4,Af=5,Ci=100,Rf=101,Cf=102,If=103,Pf=104,Lf=200,Df=201,Uf=202,Nf=203,ba=204,Sa=205,Ff=206,zf=207,Of=208,Bf=209,kf=210,Hf=211,Vf=212,Gf=213,Wf=214,Ea=0,wa=1,Ta=2,us=3,Aa=4,Ra=5,Ca=6,Ia=7,Ch=0,Xf=1,qf=2,Hn=0,Yf=1,$f=2,Zf=3,Jf=4,Kf=5,jf=6,Qf=7;var Ih=300,ds=301,ps=302,Pa=303,La=304,Lo=306,Di=1e3,Pi=1001,Da=1002,fn=1003,tu=1004;var dr=1005;var Bn=1006,Vo=1007;var Li=1008;var ei=1009,Ph=1010,Lh=1011,Xs=1012,ql=1013,Ui=1014,kn=1015,rr=1016,Yl=1017,$l=1018,ms=1020,Dh=35902,Uh=1021,Nh=1022,_n=1023,Fh=1024,zh=1025,cs=1026,gs=1027,Zl=1028,Jl=1029,Oh=1030,Kl=1031;var jl=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,Ua=35840,Na=35841,Fa=35842,za=35843,Oa=36196,Ba=37492,ka=37496,Ha=37808,Va=37809,Ga=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,$a=37815,Za=37816,Ja=37817,Ka=37818,ja=37819,Qa=37820,tl=37821,$r=36492,el=36494,nl=36495,Bh=36283,il=36284,sl=36285,rl=36286;var Zr=2300,ol=2301,Go=2302,yc=2400,_c=2401,vc=2402;var eu=3200,nu=3201;var kh=0,iu=1,di="",tn="srgb",Ms="srgb-linear",Do="linear",Re="srgb";var Hi=7680;var Mc=519,su=512,ru=513,ou=514,Hh=515,au=516,lu=517,cu=518,hu=519,al=35044;var bc="300 es",Qn=2e3,Jr=2001,yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=1234567,ks=Math.PI/180,qs=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function Ql(i,t){return(i%t+t)%t}function fu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function uu(i,t,e){return i!==t?(e-i)/(t-i):0}function Hs(i,t,e){return(1-e)*i+e*t}function du(i,t,e,n){return Hs(i,t,1-Math.exp(-e*n))}function pu(i,t=1){return t-Math.abs(Ql(i,t*2)-t)}function mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yu(i,t){return i+Math.random()*(t-i)}function _u(i){return i*(.5-Math.random())}function vu(i){i!==void 0&&(Sc=i);let t=Sc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mu(i){return i*ks}function bu(i){return i*qs}function Su(i){return(i&i-1)===0&&i!==0}function Eu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),m=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*m,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*m,a*c);break;case"ZXZ":i.set(l*m,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vh={DEG2RAD:ks,RAD2DEG:qs,generateUUID:Vn,clamp:en,euclideanModulo:Ql,mapLinear:fu,inverseLerp:uu,lerp:Hs,damp:du,pingpong:pu,smoothstep:mu,smootherstep:gu,randInt:xu,randFloat:yu,randFloatSpread:_u,seededRandom:vu,degToRad:Mu,radToDeg:bu,isPowerOfTwo:Su,ceilPowerOfTwo:Eu,floorPowerOfTwo:wu,setQuaternionFromProperEuler:Tu,normalize:Ae,denormalize:In},Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xe=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],m=n[7],d=n[2],f=n[5],g=n[8],M=s[0],p=s[3],u=s[6],w=s[1],x=s[4],v=s[7],B=s[2],R=s[5],T=s[8];return r[0]=o*M+a*w+l*B,r[3]=o*p+a*x+l*R,r[6]=o*u+a*v+l*T,r[1]=c*M+h*w+m*B,r[4]=c*p+h*x+m*R,r[7]=c*u+h*v+m*T,r[2]=d*M+f*w+g*B,r[5]=d*p+f*x+g*R,r[8]=d*u+f*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],m=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*m+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=m*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new xe;function Gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Au(){let i=Kr("canvas");return i.style.display="block",i}var Ec={};function Os(i){i in Ec||(Ec[i]=!0,console.warn(i))}function Ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Iu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var be={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Do:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wc=[.64,.33,.3,.6,.15,.06],Tc=[.2126,.7152,.0722],Ac=[.3127,.329],Rc=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);be.define({[Ms]:{primaries:wc,whitePoint:Ac,transfer:Do,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:Tc,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:wc,whitePoint:Ac,transfer:Re,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:Tc,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var Vi,ll=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=Kr("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pu=0,jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xo(s[o].image)):r.push(Xo(s[o]))}else r=Xo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lu=0,pn=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=Bn,o=Li,a=_n,l=ei,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Vn(),this.name="",this.source=new jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Ih;pn.DEFAULT_ANISOTROPY=1;var Ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],d=l[1],f=l[5],g=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(m-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+M)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,v=(f+1)/2,B=(u+1)/2,R=(h+d)/4,T=(m+M)/4,C=(g+p)/4;return x>v&&x>B?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=T/n):v>B?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=C/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=T/r,s=C/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(m-M)*(m-M)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(m-M)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qr=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=M;return}if(m!==M||l!==d||c!==f||h!==g){let p=1-a,u=l*d+c*f+h*g+m*M,w=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let B=Math.sqrt(x),R=Math.atan2(B,u*w);p=Math.sin(p*R)/B,a=Math.sin(a*R)/B}let v=a*w;if(l=l*p+d*v,c=c*p+f*v,h=h*p+g*v,m=m*p+M*v,p===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=B,c*=B,h*=B,m*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*m+l*f-c*d,t[e+1]=l*g+h*d+c*m-a*f,t[e+2]=c*g+h*f+a*d-l*m,t[e+3]=h*g-a*m-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),m=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*m+c*f*g,this._y=c*f*m-d*h*g,this._z=c*h*g+d*f*m,this._w=c*h*m-d*f*g;break;case"YXZ":this._x=d*h*m+c*f*g,this._y=c*f*m-d*h*g,this._z=c*h*g-d*f*m,this._w=c*h*m+d*f*g;break;case"ZXY":this._x=d*h*m-c*f*g,this._y=c*f*m+d*h*g,this._z=c*h*g+d*f*m,this._w=c*h*m-d*f*g;break;case"ZYX":this._x=d*h*m-c*f*g,this._y=c*f*m+d*h*g,this._z=c*h*g-d*f*m,this._w=c*h*m+d*f*g;break;case"YZX":this._x=d*h*m+c*f*g,this._y=c*f*m+d*h*g,this._z=c*h*g-d*f*m,this._w=c*h*m-d*f*g;break;case"XZY":this._x=d*h*m-c*f*g,this._y=c*f*m-d*h*g,this._z=c*h*g+d*f*m,this._w=c*h*m+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],m=e[10],d=n+a+m;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>m){let f=2*Math.sqrt(1+n-a-m);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>m){let f=2*Math.sqrt(1+a-n-m);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+m-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),m=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*m+this._w*d,this._x=n*m+this._x*d,this._y=s*m+this._y*d,this._z=r*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),m=2*(r*n-o*e);return this.x=e+l*c+o*m-a*h,this.y=n+l*h+a*c-r*m,this.z=s+l*m+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qo=new k,Ic=new Gn,ii=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),mr.subVectors(this.max,Rs),Gi.subVectors(t.a,Rs),Wi.subVectors(t.b,Rs),Xi.subVectors(t.c,Rs),ai.subVectors(Wi,Gi),li.subVectors(Xi,Wi),bi.subVectors(Gi,Xi);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-bi.z,bi.y,ai.z,0,-ai.x,li.z,0,-li.x,bi.z,0,-bi.x,-ai.y,ai.x,0,-li.y,li.x,0,-bi.y,bi.x,0];return!Yo(e,Gi,Wi,Xi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Gi,Wi,Xi,mr))?!1:(gr.crossVectors(ai,li),e=[gr.x,gr.y,gr.z],Yo(e,Gi,Wi,Xi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,pr=new ii,Gi=new k,Wi=new k,Xi=new k,ai=new k,li=new k,bi=new k,Rs=new k,mr=new k,gr=new k,Si=new k;function Yo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Du=new ii,Cs=new k,$o=new k,_i=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Du.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add($o)),this.expandByPoint(Cs.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new k,Zo=new k,xr=new k,ci=new k,Jo=new k,yr=new k,Ko=new k,to=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zo.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Zo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=ci.dot(this.direction),l=-ci.dot(xr),c=ci.lengthSq(),h=Math.abs(1-o*o),m,d,f,g;if(h>0)if(m=o*l-a,d=o*a-l,g=r*h,m>=0)if(d>=-g)if(d<=g){let M=1/h;m*=M,d*=M,f=m*(m+o*d+2*a)+d*(o*m+d+2*l)+c}else d=r,m=Math.max(0,-(o*d+a)),f=-m*m+d*(d+2*l)+c;else d=-r,m=Math.max(0,-(o*d+a)),f=-m*m+d*(d+2*l)+c;else d<=-g?(m=Math.max(0,-(-o*r+a)),d=m>0?-r:Math.min(Math.max(-r,-l),r),f=-m*m+d*(d+2*l)+c):d<=g?(m=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(m=Math.max(0,-(o*r+a)),d=m>0?r:Math.min(Math.max(-r,-l),r),f=-m*m+d*(d+2*l)+c);else d=o>0?-r:r,m=Math.max(0,-(o*d+a)),f=-m*m+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Zo).addScaledVector(xr,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(t.min.z-d.z)*m,l=(t.max.z-d.z)*m):(a=(t.max.z-d.z)*m,l=(t.min.z-d.z)*m),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){Jo.subVectors(e,t),yr.subVectors(n,t),Ko.crossVectors(Jo,yr);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let l=a*this.direction.dot(yr.crossVectors(ci,yr));if(l<0)return null;let c=a*this.direction.dot(Jo.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(Ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,l,c,h,m,d,f,g,M,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,m,d,f,g,M,p)}set(t,e,n,s,r,o,a,l,c,h,m,d,f,g,M,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=m,u[14]=d,u[3]=f,u[7]=g,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*m,g=a*h,M=a*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=f+g*c,e[5]=d-M*c,e[9]=-a*l,e[2]=M-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*m,g=c*h,M=c*m;e[0]=d+M*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*m,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*m,g=c*h,M=c*m;e[0]=d-M*a,e[4]=-o*m,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=M-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*m,g=a*h,M=a*m;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+M,e[1]=l*m,e[5]=M*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,M=a*c;e[0]=l*h,e[4]=M-d*m,e[8]=g*m+f,e[1]=m,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*m+g,e[10]=d-M*m}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,M=a*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=d*m+M,e[5]=o*h,e[9]=f*m-g,e[2]=g*m-f,e[6]=a*h,e[10]=M*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Nu)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),hi.crossVectors(n,xn),hi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),hi.crossVectors(n,xn)),hi.normalize(),_r.crossVectors(xn,hi),s[0]=hi.x,s[4]=_r.x,s[8]=xn.x,s[1]=hi.y,s[5]=_r.y,s[9]=xn.y,s[2]=hi.z,s[6]=_r.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],m=n[5],d=n[9],f=n[13],g=n[2],M=n[6],p=n[10],u=n[14],w=n[3],x=n[7],v=n[11],B=n[15],R=s[0],T=s[4],C=s[8],_=s[12],y=s[1],E=s[5],A=s[9],b=s[13],D=s[2],O=s[6],U=s[10],G=s[14],V=s[3],ut=s[7],mt=s[11],P=s[15];return r[0]=o*R+a*y+l*D+c*V,r[4]=o*T+a*E+l*O+c*ut,r[8]=o*C+a*A+l*U+c*mt,r[12]=o*_+a*b+l*G+c*P,r[1]=h*R+m*y+d*D+f*V,r[5]=h*T+m*E+d*O+f*ut,r[9]=h*C+m*A+d*U+f*mt,r[13]=h*_+m*b+d*G+f*P,r[2]=g*R+M*y+p*D+u*V,r[6]=g*T+M*E+p*O+u*ut,r[10]=g*C+M*A+p*U+u*mt,r[14]=g*_+M*b+p*G+u*P,r[3]=w*R+x*y+v*D+B*V,r[7]=w*T+x*E+v*O+B*ut,r[11]=w*C+x*A+v*U+B*mt,r[15]=w*_+x*b+v*G+B*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],m=t[6],d=t[10],f=t[14],g=t[3],M=t[7],p=t[11],u=t[15];return g*(+r*l*m-s*c*m-r*a*d+n*c*d+s*a*f-n*l*f)+M*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*m-e*a*f-r*o*m+n*o*f+r*a*h-n*c*h)+u*(-s*a*h-e*l*m+e*a*d+s*o*m-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],m=t[9],d=t[10],f=t[11],g=t[12],M=t[13],p=t[14],u=t[15],w=m*p*c-M*d*c+M*l*f-a*p*f-m*l*u+a*d*u,x=g*d*c-h*p*c-g*l*f+o*p*f+h*l*u-o*d*u,v=h*M*c-g*m*c+g*a*f-o*M*f-h*a*u+o*m*u,B=g*m*l-h*M*l-g*a*d+o*M*d+h*a*p-o*m*p,R=e*w+n*x+s*v+r*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=w*T,t[1]=(M*d*r-m*p*r-M*s*f+n*p*f+m*s*u-n*d*u)*T,t[2]=(a*p*r-M*l*r+M*s*c-n*p*c-a*s*u+n*l*u)*T,t[3]=(m*l*r-a*d*r-m*s*c+n*d*c+a*s*f-n*l*f)*T,t[4]=x*T,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*u+e*d*u)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*u-e*l*u)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*T,t[8]=v*T,t[9]=(g*m*r-h*M*r-g*n*f+e*M*f+h*n*u-e*m*u)*T,t[10]=(o*M*r-g*a*r+g*n*c-e*M*c-o*n*u+e*a*u)*T,t[11]=(h*a*r-o*m*r-h*n*c+e*m*c+o*n*f-e*a*f)*T,t[12]=B*T,t[13]=(h*M*s-g*m*s+g*n*d-e*M*d-h*n*p+e*m*p)*T,t[14]=(g*a*s-o*M*s-g*n*l+e*M*l+o*n*p-e*a*p)*T,t[15]=(o*m*s-h*a*s+h*n*l-e*m*l-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,m=a+a,d=r*c,f=r*h,g=r*m,M=o*h,p=o*m,u=a*m,w=l*c,x=l*h,v=l*m,B=n.x,R=n.y,T=n.z;return s[0]=(1-(M+u))*B,s[1]=(f+v)*B,s[2]=(g-x)*B,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+u))*R,s[6]=(p+w)*R,s[7]=0,s[8]=(g+x)*T,s[9]=(p-w)*T,s[10]=(1-(d+M))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=qi.set(s[0],s[1],s[2]).length(),o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);let c=1/r,h=1/o,m=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=m,Rn.elements[9]*=m,Rn.elements[10]*=m,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),m=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){let l=this.elements,c=1/(e-t),h=1/(n-s),m=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,M;if(a===Qn)g=(o+r)*m,M=-2*m;else if(a===Jr)g=r*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qi=new k,Rn=new ve,Uu=new k(0,0,0),Nu=new k(1,1,1),hi=new k,_r=new k,xn=new k,Pc=new ve,Lc=new Gn,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],m=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fu=0,Dc=new k,Yi=new Gn,$n=new ve,vr=new k,Is=new k,zu=new k,Ou=new Gn,Uc=new k(1,0,0),Nc=new k(0,1,0),Fc=new k(0,0,1),zc={type:"added"},Bu={type:"removed"},$i={type:"childadded",child:null},jo={type:"childremoved",child:null},Ce=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Pn,n=new Gn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new xe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Is,vr,this.up):$n.lookAt(vr,Is,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix($n),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),jo.child=t,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),m=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new k(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new k,Zn=new k,Qo=new k,Jn=new k,Zi=new k,Ji=new k,Oc=new k,ta=new k,ea=new k,na=new k,ia=new Ve,sa=new Ve,ra=new Ve,pi=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Zn.subVectors(n,e),Qo.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Zn),l=Cn.dot(Qo),c=Zn.dot(Zn),h=Zn.dot(Qo),m=o*c-a*a;if(m===0)return r.set(0,0,0),null;let d=1/m,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ia,r.x),o.addScaledVector(sa,r.y),o.addScaledVector(ra,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Zn.subVectors(t,e),Cn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),Ji.subVectors(r,n),ta.subVectors(t,n);let l=Zi.dot(ta),c=Ji.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);let h=Zi.dot(ea),m=Ji.dot(ea);if(h>=0&&m<=h)return e.copy(s);let d=l*m-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zi,o);na.subVectors(t,r);let f=Zi.dot(na),g=Ji.dot(na);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ji,a);let p=h*g-f*m;if(p<=0&&m-h>=0&&f-g>=0)return Oc.subVectors(r,s),a=(m-h)/(m-h+(f-g)),e.copy(s).addScaledVector(Oc,a);let u=1/(p+M+d);return o=M*u,a=d*u,e.copy(n).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=Ql(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=oa(o,r,t+1/3),this.g=oa(o,r,t),this.b=oa(o,r,t-1/3)}return be.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return be.fromWorkingColorSpace(an.copy(this),t),Math.round(en(an.r*255,0,255))*65536+Math.round(en(an.g*255,0,255))*256+Math.round(en(an.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.fromWorkingColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let m=o-a;switch(c=h<=.5?m/(o+a):m/(2-o-a),o){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=tn){be.fromWorkingColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Mr);let n=Hs(fi.h,Mr.h,e),s=Hs(fi.s,Mr.s,e),r=Hs(fi.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new se;se.NAMES=Wh;var ku=0,si=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Vn(),this.name="",this.blending=ls,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Sa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},bn=class extends si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new k,br=new Bt,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}};var no=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var io=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hu=0,Mn=new ve,aa=new Ce,Ki=new k,yn=new ii,Ps=new ii,Qe=new k,Ie=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?io:no)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(yn.min,Ps.min),yn.expandByPoint(Qe),Qe.addVectors(yn.max,Ps.max),yn.expandByPoint(Qe)):(yn.expandByPoint(Ps.min),yn.expandByPoint(Ps.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),Qe.add(Ki)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new k,l[C]=new k;let c=new k,h=new k,m=new k,d=new Bt,f=new Bt,g=new Bt,M=new k,p=new k;function u(C,_,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,_),m.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,y),h.sub(c),m.sub(c),f.sub(d),g.sub(d);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(m,-f.y).multiplyScalar(E),p.copy(m).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),a[C].add(M),a[_].add(M),a[y].add(M),l[C].add(p),l[_].add(p),l[y].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,_=w.length;C<_;++C){let y=w[C],E=y.start,A=y.count;for(let b=E,D=E+A;b<D;b+=3)u(t.getX(b+0),t.getX(b+1),t.getX(b+2))}let x=new k,v=new k,B=new k,R=new k;function T(C){B.fromBufferAttribute(s,C),R.copy(B);let _=a[C];x.copy(_),x.sub(B.multiplyScalar(B.dot(_))).normalize(),v.crossVectors(R,_);let E=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,E)}for(let C=0,_=w.length;C<_;++C){let y=w[C],E=y.start,A=y.count;for(let b=E,D=E+A;b<D;b+=3)T(t.getX(b+0)),T(t.getX(b+1)),T(t.getX(b+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,m=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,m=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let u=0;u<h;u++)d[g++]=c[f++]}return new Ne(d,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,m=c.length;h<m;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,d=c.length;m<d;m++){let f=c[m];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let d=0,f=m.length;d<f;d++)h.push(m[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bc=new ve,Ei=new to,Sr=new _i,kc=new k,Er=new k,wr=new k,Tr=new k,la=new k,Ar=new k,Hc=new k,Rr=new k,Pe=class extends Ce{constructor(t=new Ie,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],m=r[l];h!==0&&(la.fromBufferAttribute(m,t),o?Ar.addScaledVector(la,h):Ar.addScaledVector(la.sub(e),h))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Sr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Sr,kc)===null||Ei.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(Bc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let p=d[g],u=o[p.materialIndex],w=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=w,B=x;v<B;v+=3){let R=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);s=Cr(this,u,t,n,c,h,m,R,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let p=g,u=M;p<u;p+=3){let w=a.getX(p),x=a.getX(p+1),v=a.getX(p+2);s=Cr(this,o,t,n,c,h,m,w,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){let p=d[g],u=o[p.materialIndex],w=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=w,B=x;v<B;v+=3){let R=v,T=v+1,C=v+2;s=Cr(this,u,t,n,c,h,m,R,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let p=g,u=M;p<u;p+=3){let w=p,x=p+1,v=p+2;s=Cr(this,o,t,n,c,h,m,w,x,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Vu(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,wr),i.getVertexPosition(c,Tr);let h=Vu(i,t,e,n,Er,wr,Tr,Hc);if(h){let m=new k;pi.getBarycoord(Hc,Er,wr,Tr,m),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,m,new Bt)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,m,new Bt)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,m,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};pi.getNormal(Er,wr,Tr,d.normal),h.face=d,h.barycoord=m}return h}var Me=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],m=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(m,2));function g(M,p,u,w,x,v,B,R,T,C,_){let y=v/T,E=B/C,A=v/2,b=B/2,D=R/2,O=T+1,U=C+1,G=0,V=0,ut=new k;for(let mt=0;mt<U;mt++){let P=mt*E-b;for(let _t=0;_t<O;_t++){let Gt=_t*y-A;ut[M]=Gt*w,ut[p]=P*x,ut[u]=D,c.push(ut.x,ut.y,ut.z),ut[M]=0,ut[p]=0,ut[u]=R>0?1:-1,h.push(ut.x,ut.y,ut.z),m.push(_t/T),m.push(1-mt/C),G+=1}}for(let mt=0;mt<C;mt++)for(let P=0;P<T;P++){let _t=d+P+O*mt,Gt=d+P+O*(mt+1),N=d+(P+1)+O*(mt+1),Z=d+(P+1)+O*mt;l.push(_t,Gt,Z),l.push(Gt,N,Z),V+=6}a.addGroup(f,V,_),f+=V,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Gu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var tc={clone:xs,merge:cn},Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},so=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new k,Vc=new Bt,Gc=new Bt,hn=class extends so{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,Gc),e.subVectors(Gc,Vc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ji=-90,Qi=1,fl=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(ji,Qi,t,e);s.layers=this.layers,this.add(s);let r=new hn(ji,Qi,t,e);r.layers=this.layers,this.add(r);let o=new hn(ji,Qi,t,e);o.layers=this.layers,this.add(o);let a=new hn(ji,Qi,t,e);a.layers=this.layers,this.add(a);let l=new hn(ji,Qi,t,e);l.layers=this.layers,this.add(l);let c=new hn(ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(m,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ro=class extends pn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ul=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:mi});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Bn),new fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ca=new k,qu=new k,Yu=new xe,jn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ca.subVectors(n,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new _i,Ir=new k,Ys=class{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],m=s[6],d=s[7],f=s[8],g=s[9],M=s[10],p=s[11],u=s[12],w=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,p-f,v-u).normalize(),n[1].setComponents(l+r,d+c,p+f,v+u).normalize(),n[2].setComponents(l+o,d+h,p+g,v+w).normalize(),n[3].setComponents(l-o,d-h,p-g,v-w).normalize(),n[4].setComponents(l-a,d-m,p-M,v-x).normalize(),e===Qn)n[5].setComponents(l+a,d+m,p+M,v+x).normalize();else if(e===Jr)n[5].setComponents(a,m,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $u(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,m=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,a),m.length===0)i.bufferSubData(c,0,h);else{m.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<m.length;f++){let g=m[d],M=m[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,m[d]=M)}m.length=d+1;for(let f=0,g=m.length;f<g;f++){let M=m[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sn=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,m=t/a,d=e/l,f=[],g=[],M=[],p=[];for(let u=0;u<h;u++){let w=u*d-o;for(let x=0;x<c;x++){let v=x*m-r;g.push(v,-w,0),M.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){let x=w+c*u,v=w+c*(u+1),B=w+1+c*(u+1),R=w+1+c*u;f.push(x,v,R),f.push(v,B,R)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(M,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
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
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ld=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
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
#endif`,Yd=`struct PhysicalMaterial {
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
}`,$d=`
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
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sp=`#if defined( USE_POINTS_UV )
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
#endif`,rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dp=`float getShadowMask() {
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,nm=`#define DISTANCE
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
}`,im=`#define DISTANCE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,pm=`#define NORMAL
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
}`,mm=`#define NORMAL
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
}`,gm=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,ym=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,vm=`#define TOON
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
}`,Mm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,Am=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Zu,alphahash_pars_fragment:Ju,alphamap_fragment:Ku,alphamap_pars_fragment:ju,alphatest_fragment:Qu,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:od,bsdfs:ad,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:dd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:xd,common:yd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:vd,displacementmap_pars_vertex:Md,displacementmap_vertex:bd,emissivemap_fragment:Sd,emissivemap_pars_fragment:Ed,colorspace_fragment:wd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Hd,envmap_vertex:Pd,fog_vertex:Ld,fog_pars_vertex:Dd,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:zd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Bd,lights_pars_begin:kd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:$d,lights_fragment_maps:Zd,lights_fragment_end:Jd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:tp,map_fragment:ep,map_pars_fragment:np,map_particle_fragment:ip,map_particle_pars_fragment:sp,metalnessmap_fragment:rp,metalnessmap_pars_fragment:op,morphinstance_vertex:ap,morphcolor_vertex:lp,morphnormal_vertex:cp,morphtarget_pars_vertex:hp,morphtarget_vertex:fp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:pp,normal_pars_vertex:mp,normal_vertex:gp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:vp,iridescence_pars_fragment:Mp,opaque_fragment:bp,packing:Sp,premultiplied_alpha_fragment:Ep,project_vertex:wp,dithering_fragment:Tp,dithering_pars_fragment:Ap,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Pp,shadowmap_vertex:Lp,shadowmask_pars_fragment:Dp,skinbase_vertex:Up,skinning_pars_vertex:Np,skinning_vertex:Fp,skinnormal_vertex:zp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:kp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:Gp,uv_pars_fragment:Wp,uv_pars_vertex:Xp,uv_vertex:qp,worldpos_vertex:Yp,background_vert:$p,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Kp,cube_vert:jp,cube_frag:Qp,depth_vert:tm,depth_frag:em,distanceRGBA_vert:nm,distanceRGBA_frag:im,equirect_vert:sm,equirect_frag:rm,linedashed_vert:om,linedashed_frag:am,meshbasic_vert:lm,meshbasic_frag:cm,meshlambert_vert:hm,meshlambert_frag:fm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:pm,meshnormal_frag:mm,meshphong_vert:gm,meshphong_frag:xm,meshphysical_vert:ym,meshphysical_frag:_m,meshtoon_vert:vm,meshtoon_frag:Mm,points_vert:bm,points_frag:Sm,shadow_vert:Em,shadow_frag:wm,sprite_vert:Tm,sprite_frag:Am},$t={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},On={basic:{uniforms:cn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:cn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new se(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:cn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:cn([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:cn([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new se(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:cn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:cn([$t.points,$t.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:cn([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:cn([$t.common,$t.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:cn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:cn([$t.sprite,$t.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:cn([$t.common,$t.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:cn([$t.lights,$t.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};On.physical={uniforms:cn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var Pr={r:0,b:0,g:0},Ti=new Pn,Rm=new ve;function Cm(i,t,e,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,h,m=null,d=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function M(w){let x=!1,v=g(w);v===null?u(a,l):v&&v.isColor&&(u(v,1),x=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,x){let v=g(x);v&&(v.isCubeTexture||v.mapping===Lo)?(h===void 0&&(h=new Pe(new Me(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:xs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(x.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(Ti)),h.material.toneMapped=be.getTransfer(v.colorSpace)!==Re,(m!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pe(new sn(2,2),new un({name:"BackgroundMaterial",uniforms:xs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=be.getTransfer(v.colorSpace)!==Re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,m=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,x){w.getRGB(Pr,Xh(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(a,l)},render:M,addToRenderList:p}}function Im(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,E,A,b,D){let O=!1,U=m(b,A,E);r!==U&&(r=U,c(r.object)),O=f(y,b,A,D),O&&g(y,b,A,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(y,E,A,b),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function m(y,E,A){let b=A.wireframe===!0,D=n[y.id];D===void 0&&(D={},n[y.id]=D);let O=D[E.id];O===void 0&&(O={},D[E.id]=O);let U=O[b];return U===void 0&&(U=d(l()),O[b]=U),U}function d(y){let E=[],A=[],b=[];for(let D=0;D<e;D++)E[D]=0,A[D]=0,b[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:A,attributeDivisors:b,object:y,attributes:{},index:null}}function f(y,E,A,b){let D=r.attributes,O=E.attributes,U=0,G=A.getAttributes();for(let V in G)if(G[V].location>=0){let mt=D[V],P=O[V];if(P===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(P=y.instanceColor)),mt===void 0||mt.attribute!==P||P&&mt.data!==P.data)return!0;U++}return r.attributesNum!==U||r.index!==b}function g(y,E,A,b){let D={},O=E.attributes,U=0,G=A.getAttributes();for(let V in G)if(G[V].location>=0){let mt=O[V];mt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));let P={};P.attribute=mt,mt&&mt.data&&(P.data=mt.data),D[V]=P,U++}r.attributes=D,r.attributesNum=U,r.index=b}function M(){let y=r.newAttributes;for(let E=0,A=y.length;E<A;E++)y[E]=0}function p(y){u(y,0)}function u(y,E){let A=r.newAttributes,b=r.enabledAttributes,D=r.attributeDivisors;A[y]=1,b[y]===0&&(i.enableVertexAttribArray(y),b[y]=1),D[y]!==E&&(i.vertexAttribDivisor(y,E),D[y]=E)}function w(){let y=r.newAttributes,E=r.enabledAttributes;for(let A=0,b=E.length;A<b;A++)E[A]!==y[A]&&(i.disableVertexAttribArray(A),E[A]=0)}function x(y,E,A,b,D,O,U){U===!0?i.vertexAttribIPointer(y,E,A,D,O):i.vertexAttribPointer(y,E,A,b,D,O)}function v(y,E,A,b){M();let D=b.attributes,O=A.getAttributes(),U=E.defaultAttributeValues;for(let G in O){let V=O[G];if(V.location>=0){let ut=D[G];if(ut===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){let mt=ut.normalized,P=ut.itemSize,_t=t.get(ut);if(_t===void 0)continue;let Gt=_t.buffer,N=_t.type,Z=_t.bytesPerElement,nt=N===i.INT||N===i.UNSIGNED_INT||ut.gpuType===ql;if(ut.isInterleavedBufferAttribute){let J=ut.data,lt=J.stride,at=ut.offset;if(J.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)u(V.location+Tt,J.meshPerAttribute);y.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)p(V.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let Tt=0;Tt<V.locationSize;Tt++)x(V.location+Tt,P/V.locationSize,N,mt,lt*Z,(at+P/V.locationSize*Tt)*Z,nt)}else{if(ut.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)u(V.location+J,ut.meshPerAttribute);y.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let J=0;J<V.locationSize;J++)p(V.location+J);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let J=0;J<V.locationSize;J++)x(V.location+J,P/V.locationSize,N,mt,P*Z,P/V.locationSize*J*Z,nt)}}else if(U!==void 0){let mt=U[G];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(V.location,mt);break;case 3:i.vertexAttrib3fv(V.location,mt);break;case 4:i.vertexAttrib4fv(V.location,mt);break;default:i.vertexAttrib1fv(V.location,mt)}}}}w()}function B(){C();for(let y in n){let E=n[y];for(let A in E){let b=E[A];for(let D in b)h(b[D].object),delete b[D];delete E[A]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let E=n[y.id];for(let A in E){let b=E[A];for(let D in b)h(b[D].object),delete b[D];delete E[A]}delete n[y.id]}function T(y){for(let E in n){let A=n[E];if(A[y.id]===void 0)continue;let b=A[y.id];for(let D in b)h(b[D].object),delete b[D];delete A[y.id]}}function C(){_(),o=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:_,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:p,disableUnusedAttributes:w}}function Pm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,m){m!==0&&(i.drawArraysInstanced(n,c,h,m),e.update(h,n,m))}function a(c,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,m);let f=0;for(let g=0;g<m;g++)f+=h[g];e.update(f,n,1)}function l(c,h,m,d){if(m===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,m);let g=0;for(let M=0;M<m;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Lm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==kn&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:m,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:B,maxSamples:R}}function Dm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new jn,a=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let f=m.length!==0||d||n!==0||s;return s=d,n=m.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=h(m,d,0)},this.setState=function(m,d,f){let g=m.clippingPlanes,M=m.clipIntersection,p=m.clipShadows,u=i.get(m);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let w=r?0:n,x=w*4,v=u.clippingState||null;l.value=v,v=h(g,d,x,f);for(let B=0;B!==x;++B)v[B]=e[B];u.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,d,f,g){let M=m!==null?m.length:0,p=null;if(M!==0){if(p=l.value,g!==!0||p===null){let u=f+M*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,v=f;x!==M;++x,v+=4)o.copy(m[x]).applyMatrix4(w,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function Um(i){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=ds:a===La&&(o.mapping=ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pa||a===La)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ul(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var oo=class extends so{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},os=4,Wc=[.125,.215,.35,.446,.526,.582],Ii=20,ha=new oo,Xc=new se,fa=null,ua=0,da=0,pa=!1,Ri=(1+Math.sqrt(5))/2,ts=1/Ri,qc=[new k(-Ri,ts,0),new k(Ri,ts,0),new k(-ts,0,Ri),new k(ts,0,Ri),new k(0,Ri,-ts),new k(0,Ri,ts),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fa=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,ua,da),this._renderer.xr.enabled=pa,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:rr,format:_n,colorSpace:Ms,depthBuffer:!1},s=Yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=Fm(r,t,e)}return s}_compileMaterial(t){let e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,s){let a=new hn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,d=h.toneMapping;h.getClearColor(Xc),h.toneMapping=Hn,h.autoClear=!1;let f=new bn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Pe(new Me,f),M=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,M=!0):(f.color.copy(Xc),M=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):w===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let x=this._cubeSize;Lr(s,w*x,u>2?x:0,x,x),h.setRenderTarget(s),M&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=m,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ds||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qc[(s-r-1)%qc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,m=new Pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),M=r/g,p=isFinite(r)?1+Math.floor(h*M):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);let u=[],w=0;for(let T=0;T<Ii;++T){let C=T/M,_=Math.exp(-C*C/2);u.push(_),T===0?w+=_:T<p&&(w+=2*_)}for(let T=0;T<u.length;T++)u[T]=u[T]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let v=this._sizeLods[s],B=3*v*(s>x-os?s-x+os:0),R=4*(this._cubeSize-v);Lr(e,B,R,3*v,2*v),l.setRenderTarget(e),l.render(m,ha)}};function Nm(i){let t=[],e=[],n=[],s=i,r=i-os+1+Wc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-os?l=Wc[o-i+os-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,m=1+c,d=[h,h,m,h,m,m,h,h,m,m,h,m],f=6,g=6,M=3,p=2,u=1,w=new Float32Array(M*g*f),x=new Float32Array(p*g*f),v=new Float32Array(u*g*f);for(let R=0;R<f;R++){let T=R%3*2/3-1,C=R>2?0:-1,_=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];w.set(_,M*g*R),x.set(d,p*g*R);let y=[R,R,R,R,R,R];v.set(y,u*g*R)}let B=new Ie;B.setAttribute("position",new Ne(w,M)),B.setAttribute("uv",new Ne(x,p)),B.setAttribute("faceIndex",new Ne(v,u)),t.push(B),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yc(i,t,e){let n=new ni(i,t,e);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fm(i,t,e){let n=new Float32Array(Ii),s=new k(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function $c(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Zc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function zm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pa||l===La,h=l===ds||l===ps;if(c||h){let m=t.get(a),d=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ao(i)),m=c?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ao(i)),m=c?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",r),m.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Om(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bm(i,t,e,n){let s={},r=new WeakMap;function o(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let M=d.morphAttributes[g];for(let p=0,u=M.length;p<u;p++)t.remove(M[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(m,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(m){let d=m.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=m.morphAttributes;for(let g in f){let M=f[g];for(let p=0,u=M.length;p<u;p++)t.update(M[p],i.ARRAY_BUFFER)}}function c(m){let d=[],f=m.index,g=m.attributes.position,M=0;if(f!==null){let w=f.array;M=f.version;for(let x=0,v=w.length;x<v;x+=3){let B=w[x+0],R=w[x+1],T=w[x+2];d.push(B,R,R,T,T,B)}}else if(g!==void 0){let w=g.array;M=g.version;for(let x=0,v=w.length/3-1;x<v;x+=3){let B=x+0,R=x+1,T=x+2;d.push(B,R,R,T,T,B)}}else return;let p=new(Gh(d)?io:no)(d,1);p.version=M;let u=r.get(m);u&&t.remove(u),r.set(m,p)}function h(m){let d=r.get(m);if(d){let f=m.index;f!==null&&d.version<f.version&&c(m)}else c(m);return r.get(m)}return{get:a,update:l,getWireframeAttribute:h}}function km(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let p=0;for(let u=0;u<g;u++)p+=f[u];e.update(p,n,1)}function m(d,f,g,M){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/o,f[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,M,0,g);let u=0;for(let w=0;w<g;w++)u+=f[w]*M[w];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Hm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vm(i,t,e){let n=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==m){let _=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),M===!0&&(x=3);let v=a.attributes.position.count*x,B=1;v>t.maxTextureSize&&(B=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let R=new Float32Array(v*B*4*m),T=new Qr(R,v,B,m);T.type=kn,T.needsUpdate=!0;let C=x*4;for(let y=0;y<m;y++){let E=p[y],A=u[y],b=w[y],D=v*B*4*y;for(let O=0;O<E.count;O++){let U=O*C;f===!0&&(s.fromBufferAttribute(E,O),R[D+U+0]=s.x,R[D+U+1]=s.y,R[D+U+2]=s.z,R[D+U+3]=0),g===!0&&(s.fromBufferAttribute(A,O),R[D+U+4]=s.x,R[D+U+5]=s.y,R[D+U+6]=s.z,R[D+U+7]=0),M===!0&&(s.fromBufferAttribute(b,O),R[D+U+8]=s.x,R[D+U+9]=s.y,R[D+U+10]=s.z,R[D+U+11]=b.itemSize===4?s.w:1)}}d={count:m,texture:T,size:new Bt(v,B)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,m=t.get(l,h);if(s.get(m)!==c&&(t.update(m),s.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return m}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var lo=class extends pn{constructor(t,e,n,s,r,o,a,l,c,h=cs){if(h!==cs&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=Ui),n===void 0&&h===gs&&(n=ms),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yh=new pn,Jc=new lo(1,1),$h=new Qr,Zh=new hl,Jh=new ro,Kc=[],jc=[],Qc=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Uo(i,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Je(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Je(e,n)}}function Jm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Je(e,n)}}function Km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jc.compareFunction=Hh,r=Jc):r=Yh,e.setTexture2D(t||r,s)}function o0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zh,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jh,s)}function l0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function c0(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return $m;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Km;case 35667:case 35671:return jm;case 35668:case 35672:return Qm;case 35669:case 35673:return t0;case 5125:return e0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(i,t){i.uniform1fv(this.addr,t)}function f0(i,t){let e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function u0(i,t){let e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function d0(i,t){let e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function p0(i,t){let e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m0(i,t){let e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g0(i,t){let e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function x0(i,t){i.uniform1iv(this.addr,t)}function y0(i,t){i.uniform2iv(this.addr,t)}function _0(i,t){i.uniform3iv(this.addr,t)}function v0(i,t){i.uniform4iv(this.addr,t)}function M0(i,t){i.uniform1uiv(this.addr,t)}function b0(i,t){i.uniform2uiv(this.addr,t)}function S0(i,t){i.uniform3uiv(this.addr,t)}function E0(i,t){i.uniform4uiv(this.addr,t)}function w0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yh,r[o])}function T0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zh,r[o])}function A0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Jh,r[o])}function R0(i,t,e){let n=this.cache,s=t.length,r=Uo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$h,r[o])}function C0(i){switch(i){case 5126:return h0;case 35664:return f0;case 35665:return u0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return b0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}var dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}},pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C0(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ma=/(\w+)(\])?(\[|\.)?/g;function nh(i,t){i.seq.push(t),i.map[t.id]=t}function I0(i,t,e){let n=i.name,s=n.length;for(ma.lastIndex=0;;){let r=ma.exec(n),o=ma.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nh(e,c===void 0?new dl(a,i,t):new pl(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new ml(a),nh(e,m)),e=m}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);I0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ih(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var P0=37297,L0=0;function D0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sh=new xe;function U0(i){be._getMatrix(sh,be.workingColorSpace,i);let t=`mat3( ${sh.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case Do:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+D0(i.getShaderSource(t),o)}else return s}function N0(i,t){let e=U0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F0(i,t){let e;switch(t){case Yf:e="Linear";break;case $f:e="Reinhard";break;case Zf:e="Cineon";break;case Jf:e="ACESFilmic";break;case jf:e="AgX";break;case Qf:e="Neutral";break;case Kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dr=new k;function z0(){be.getLuminanceCoefficients(Dr);let i=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function B0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function k0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Bs(i){return i!==""}function oh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ah(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(H0,G0)}var V0=new Map;function G0(i,t){let e=de[t];if(e===void 0){let n=V0.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gl(e)}var W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(W0,X0)}function X0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function q0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Y0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case ps:t="ENVMAP_TYPE_CUBE";break;case Lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ps:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ch:t="ENVMAP_BLENDING_MULTIPLY";break;case Xf:t="ENVMAP_BLENDING_MIX";break;case qf:t="ENVMAP_BLENDING_ADD";break}return t}function J0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function K0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=q0(e),c=Y0(e),h=$0(e),m=Z0(e),d=J0(e),f=O0(e),g=B0(r),M=s.createProgram(),p,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),u.length>0&&(u+=`
`)):(p=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),u=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?de.tonemapping_pars_fragment:"",e.toneMapping!==Hn?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=gl(o),o=oh(o,e),o=ah(o,e),a=gl(a),a=oh(a,e),a=ah(a,e),o=lh(o),a=lh(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=w+p+o,v=w+u+a,B=ih(s,s.VERTEX_SHADER,x),R=ih(s,s.FRAGMENT_SHADER,v);s.attachShader(M,B),s.attachShader(M,R),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(E){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(M).trim(),b=s.getShaderInfoLog(B).trim(),D=s.getShaderInfoLog(R).trim(),O=!0,U=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,B,R);else{let G=rh(s,B,"vertex"),V=rh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+A+`
`+G+`
`+V)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(b===""||D==="")&&(U=!1);U&&(E.diagnostics={runnable:O,programLog:A,vertexShader:{log:b,prefix:p},fragmentShader:{log:D,prefix:u}})}s.deleteShader(B),s.deleteShader(R),C=new fs(s,M),_=k0(s,M)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,P0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=R,this}var j0=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yl(t),e.set(t,n)),n}},yl=class{constructor(t){this.id=j0++,this.code=t,this.usedTimes=0}};function Q0(i,t,e,n,s,r,o){let a=new eo,l=new xl,c=new Set,h=[],m=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,y,E,A,b){let D=A.fog,O=b.geometry,U=_.isMeshStandardMaterial?A.environment:null,G=(_.isMeshStandardMaterial?e:t).get(_.envMap||U),V=G&&G.mapping===Lo?G.image.height:null,ut=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let mt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,P=mt!==void 0?mt.length:0,_t=0;O.morphAttributes.position!==void 0&&(_t=1),O.morphAttributes.normal!==void 0&&(_t=2),O.morphAttributes.color!==void 0&&(_t=3);let Gt,N,Z,nt;if(ut){let Q=On[ut];Gt=Q.vertexShader,N=Q.fragmentShader}else Gt=_.vertexShader,N=_.fragmentShader,l.update(_),Z=l.getVertexShaderID(_),nt=l.getFragmentShaderID(_);let J=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),at=b.isInstancedMesh===!0,Tt=b.isBatchedMesh===!0,dt=!!_.map,H=!!_.matcap,q=!!G,z=!!_.aoMap,Lt=!!_.lightMap,xt=!!_.bumpMap,bt=!!_.normalMap,Ot=!!_.displacementMap,$=!!_.emissiveMap,zt=!!_.metalnessMap,F=!!_.roughnessMap,I=_.anisotropy>0,ft=_.clearcoat>0,Rt=_.dispersion>0,Pt=_.iridescence>0,Y=_.sheen>0,ct=_.transmission>0,rt=I&&!!_.anisotropyMap,vt=ft&&!!_.clearcoatMap,Et=ft&&!!_.clearcoatNormalMap,Ct=ft&&!!_.clearcoatRoughnessMap,It=Pt&&!!_.iridescenceMap,Wt=Pt&&!!_.iridescenceThicknessMap,Jt=Y&&!!_.sheenColorMap,qt=Y&&!!_.sheenRoughnessMap,ce=!!_.specularMap,ie=!!_.specularColorMap,_e=!!_.specularIntensityMap,st=ct&&!!_.transmissionMap,Yt=ct&&!!_.thicknessMap,wt=!!_.gradientMap,Nt=!!_.alphaMap,S=_.alphaTest>0,W=!!_.alphaHash,K=!!_.extensions,it=Hn;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(it=i.toneMapping);let yt={shaderID:ut,shaderType:_.type,shaderName:_.name,vertexShader:Gt,fragmentShader:N,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:nt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&b._colorsTexture!==null,instancing:at,instancingColor:at&&b.instanceColor!==null,instancingMorph:at&&b.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ms,alphaToCoverage:!!_.alphaToCoverage,map:dt,matcap:H,envMap:q,envMapMode:q&&G.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:Lt,bumpMap:xt,normalMap:bt,displacementMap:d&&Ot,emissiveMap:$,normalMapObjectSpace:bt&&_.normalMapType===iu,normalMapTangentSpace:bt&&_.normalMapType===kh,metalnessMap:zt,roughnessMap:F,anisotropy:I,anisotropyMap:rt,clearcoat:ft,clearcoatMap:vt,clearcoatNormalMap:Et,clearcoatRoughnessMap:Ct,dispersion:Rt,iridescence:Pt,iridescenceMap:It,iridescenceThicknessMap:Wt,sheen:Y,sheenColorMap:Jt,sheenRoughnessMap:qt,specularMap:ce,specularColorMap:ie,specularIntensityMap:_e,transmission:ct,transmissionMap:st,thicknessMap:Yt,gradientMap:wt,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:Nt,alphaTest:S,alphaHash:W,combine:_.combine,mapUv:dt&&M(_.map.channel),aoMapUv:z&&M(_.aoMap.channel),lightMapUv:Lt&&M(_.lightMap.channel),bumpMapUv:xt&&M(_.bumpMap.channel),normalMapUv:bt&&M(_.normalMap.channel),displacementMapUv:Ot&&M(_.displacementMap.channel),emissiveMapUv:$&&M(_.emissiveMap.channel),metalnessMapUv:zt&&M(_.metalnessMap.channel),roughnessMapUv:F&&M(_.roughnessMap.channel),anisotropyMapUv:rt&&M(_.anisotropyMap.channel),clearcoatMapUv:vt&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:Et&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:qt&&M(_.sheenRoughnessMap.channel),specularMapUv:ce&&M(_.specularMap.channel),specularColorMapUv:ie&&M(_.specularColorMap.channel),specularIntensityMapUv:_e&&M(_.specularIntensityMap.channel),transmissionMapUv:st&&M(_.transmissionMap.channel),thicknessMapUv:Yt&&M(_.thicknessMap.channel),alphaMapUv:Nt&&M(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(bt||I),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!O.attributes.uv&&(dt||Nt),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:lt,skinning:b.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:_t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:dt&&_.map.isVideoTexture===!0&&be.getTransfer(_.map.colorSpace)===Re,decodeVideoTextureEmissive:$&&_.emissiveMap.isVideoTexture===!0&&be.getTransfer(_.emissiveMap.colorSpace)===Re,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===We,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:K&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&_.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function u(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)y.push(E),y.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(w(y,_),x(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function w(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function x(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let y=g[_.type],E;if(y){let A=On[y];E=tc.clone(A.uniforms)}else E=_.uniforms;return E}function B(_,y){let E;for(let A=0,b=h.length;A<b;A++){let D=h[A];if(D.cacheKey===y){E=D,++E.usedTimes;break}}return E===void 0&&(E=new K0(i,y,_,r),h.push(E)),E}function R(_){if(--_.usedTimes===0){let y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function T(_){l.remove(_)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:v,acquireProgram:B,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:C}}function tg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function eg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(m,d,f,g,M,p){let u=i[t];return u===void 0?(u={id:m.id,object:m,geometry:d,material:f,groupOrder:g,renderOrder:m.renderOrder,z:M,group:p},i[t]=u):(u.id=m.id,u.object=m,u.geometry=d,u.material=f,u.groupOrder=g,u.renderOrder=m.renderOrder,u.z=M,u.group=p),t++,u}function a(m,d,f,g,M,p){let u=o(m,d,f,g,M,p);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function l(m,d,f,g,M,p){let u=o(m,d,f,g,M,p);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function c(m,d){e.length>1&&e.sort(m||eg),n.length>1&&n.sort(d||hh),s.length>1&&s.sort(d||hh)}function h(){for(let m=t,d=i.length;m<d;m++){let f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ng(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new fh,i.set(n,[o])):s>=r.length?(o=new fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new se};break;case"SpotLight":e={position:new k,direction:new k,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function sg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rg=0;function og(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ag(i){let t=new ig,e=sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new ve,o=new ve;function a(c){let h=0,m=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,M=0,p=0,u=0,w=0,x=0,v=0,B=0,R=0,T=0;c.sort(og);for(let _=0,y=c.length;_<y;_++){let E=c[_],A=E.color,b=E.intensity,D=E.distance,O=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=A.r*b,m+=A.g*b,d+=A.b*b;else if(E.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(E.sh.coefficients[U],b);T++}else if(E.isDirectionalLight){let U=t.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=E.shadow.matrix,w++}n.directional[f]=U,f++}else if(E.isSpotLight){let U=t.get(E);U.position.setFromMatrixPosition(E.matrixWorld),U.color.copy(A).multiplyScalar(b),U.distance=D,U.coneCos=Math.cos(E.angle),U.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),U.decay=E.decay,n.spot[M]=U;let G=E.shadow;if(E.map&&(n.spotLightMap[B]=E.map,B++,G.updateMatrices(E),E.castShadow&&R++),n.spotLightMatrix[M]=G.matrix,E.castShadow){let V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=O,v++}M++}else if(E.isRectAreaLight){let U=t.get(E);U.color.copy(A).multiplyScalar(b),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=U,p++}else if(E.isPointLight){let U=t.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),U.distance=E.distance,U.decay=E.decay,E.castShadow){let G=E.shadow,V=e.get(E);V.shadowIntensity=G.intensity,V.shadowBias=G.bias,V.shadowNormalBias=G.normalBias,V.shadowRadius=G.radius,V.shadowMapSize=G.mapSize,V.shadowCameraNear=G.camera.near,V.shadowCameraFar=G.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=U,g++}else if(E.isHemisphereLight){let U=t.get(E);U.skyColor.copy(E.color).multiplyScalar(b),U.groundColor.copy(E.groundColor).multiplyScalar(b),n.hemi[u]=U,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$t.LTC_FLOAT_1,n.rectAreaLTC2=$t.LTC_FLOAT_2):(n.rectAreaLTC1=$t.LTC_HALF_1,n.rectAreaLTC2=$t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==p||C.hemiLength!==u||C.numDirectionalShadows!==w||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==B||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+B-R,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=M,C.rectAreaLength=p,C.hemiLength=u,C.numDirectionalShadows=w,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=B,C.numLightProbes=T,n.version=rg++)}function l(c,h){let m=0,d=0,f=0,g=0,M=0,p=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let x=c[u];if(x.isDirectionalLight){let v=n.directional[m];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(x.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){let v=n.hemi[M];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:n}}function uh(i){let t=new ag(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new uh(i),t.set(s,[a])):r>=o.length?(a=new uh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var _l=class extends si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vl=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`;function fg(i,t,e){let n=new Ys,s=new Bt,r=new Bt,o=new Ve,a=new _l({depthPacking:nu}),l=new vl,c={},h=e.maxTextureSize,m={[xi]:nn,[nn]:xi,[We]:We},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:cg,fragmentShader:hg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let u=this.type;this.render=function(R,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),A=i.state;A.setBlending(mi),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let b=u!==Kn&&this.type===Kn,D=u===Kn&&this.type!==Kn;for(let O=0,U=R.length;O<U;O++){let G=R[O],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ut=V.getFrameExtents();if(s.multiply(ut),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,V.mapSize.y=r.y)),V.map===null||b===!0||D===!0){let P=this.type!==Kn?{minFilter:fn,magFilter:fn}:{};V.map!==null&&V.map.dispose(),V.map=new ni(s.x,s.y,P),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let mt=V.getViewportCount();for(let P=0;P<mt;P++){let _t=V.getViewport(P);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),A.viewport(o),V.updateMatrices(G,P),n=V.getFrustum(),v(T,C,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===Kn&&w(V,C),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(_,y,E)};function w(R,T){let C=t.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ni(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,M,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,C,f,M,null)}function x(R,T,C,_){let y=null,E=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)y=E;else if(y=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let A=y.uuid,b=T.uuid,D=c[A];D===void 0&&(D={},c[A]=D);let O=D[b];O===void 0&&(O=y.clone(),D[b]=O,T.addEventListener("dispose",B)),y=O}if(y.visible=T.visible,y.wireframe=T.wireframe,_===Kn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:m[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let A=i.properties.get(y);A.light=C}return y}function v(R,T,C,_,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Kn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let b=t.update(R),D=R.material;if(Array.isArray(D)){let O=b.groups;for(let U=0,G=O.length;U<G;U++){let V=O[U],ut=D[V.materialIndex];if(ut&&ut.visible){let mt=x(R,ut,_,y);R.onBeforeShadow(i,R,T,C,b,mt,V),i.renderBufferDirect(C,null,b,mt,R,V),R.onAfterShadow(i,R,T,C,b,mt,V)}}}else if(D.visible){let O=x(R,D,_,y);R.onBeforeShadow(i,R,T,C,b,O,null),i.renderBufferDirect(C,null,b,O,R,null),R.onAfterShadow(i,R,T,C,b,O,null)}}let A=R.children;for(let b=0,D=A.length;b<D;b++)v(A[b],T,C,_,y)}function B(R){R.target.removeEventListener("dispose",B);for(let C in c){let _=c[C],y=R.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}var ug={[Ea]:wa,[Ta]:Ca,[Aa]:Ia,[us]:Ra,[wa]:Ea,[Ca]:Ta,[Ia]:Aa,[Ra]:us};function dg(i,t){function e(){let st=!1,Yt=new Ve,wt=null,Nt=new Ve(0,0,0,0);return{setMask:function(S){wt!==S&&!st&&(i.colorMask(S,S,S,S),wt=S)},setLocked:function(S){st=S},setClear:function(S,W,K,it,yt){yt===!0&&(S*=it,W*=it,K*=it),Yt.set(S,W,K,it),Nt.equals(Yt)===!1&&(i.clearColor(S,W,K,it),Nt.copy(Yt))},reset:function(){st=!1,wt=null,Nt.set(-1,0,0,0)}}}function n(){let st=!1,Yt=!1,wt=null,Nt=null,S=null;return{setReversed:function(W){if(Yt!==W){let K=t.get("EXT_clip_control");Yt?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT);let it=S;S=null,this.setClear(it)}Yt=W},getReversed:function(){return Yt},setTest:function(W){W?J(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(W){wt!==W&&!st&&(i.depthMask(W),wt=W)},setFunc:function(W){if(Yt&&(W=ug[W]),Nt!==W){switch(W){case Ea:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ra:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=W}},setLocked:function(W){st=W},setClear:function(W){S!==W&&(Yt&&(W=1-W),i.clearDepth(W),S=W)},reset:function(){st=!1,wt=null,Nt=null,S=null,Yt=!1}}}function s(){let st=!1,Yt=null,wt=null,Nt=null,S=null,W=null,K=null,it=null,yt=null;return{setTest:function(Q){st||(Q?J(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(Q){Yt!==Q&&!st&&(i.stencilMask(Q),Yt=Q)},setFunc:function(Q,St,Ht){(wt!==Q||Nt!==St||S!==Ht)&&(i.stencilFunc(Q,St,Ht),wt=Q,Nt=St,S=Ht)},setOp:function(Q,St,Ht){(W!==Q||K!==St||it!==Ht)&&(i.stencilOp(Q,St,Ht),W=Q,K=St,it=Ht)},setLocked:function(Q){st=Q},setClear:function(Q){yt!==Q&&(i.clearStencil(Q),yt=Q)},reset:function(){st=!1,Yt=null,wt=null,Nt=null,S=null,W=null,K=null,it=null,yt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},m={},d=new WeakMap,f=[],g=null,M=!1,p=null,u=null,w=null,x=null,v=null,B=null,R=null,T=new se(0,0,0),C=0,_=!1,y=null,E=null,A=null,b=null,D=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,G=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=G>=2);let ut=null,mt={},P=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Gt=new Ve().fromArray(P),N=new Ve().fromArray(_t);function Z(st,Yt,wt,Nt){let S=new Uint8Array(4),W=i.createTexture();i.bindTexture(st,W),i.texParameteri(st,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(st,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let K=0;K<wt;K++)st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?i.texImage3D(Yt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,S):i.texImage2D(Yt+K,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,S);return W}let nt={};nt[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(us),xt(!1),bt(pc),J(i.CULL_FACE),z(mi);function J(st){h[st]!==!0&&(i.enable(st),h[st]=!0)}function lt(st){h[st]!==!1&&(i.disable(st),h[st]=!1)}function at(st,Yt){return m[st]!==Yt?(i.bindFramebuffer(st,Yt),m[st]=Yt,st===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Yt),st===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Yt),!0):!1}function Tt(st,Yt){let wt=f,Nt=!1;if(st){wt=d.get(Yt),wt===void 0&&(wt=[],d.set(Yt,wt));let S=st.textures;if(wt.length!==S.length||wt[0]!==i.COLOR_ATTACHMENT0){for(let W=0,K=S.length;W<K;W++)wt[W]=i.COLOR_ATTACHMENT0+W;wt.length=S.length,Nt=!0}}else wt[0]!==i.BACK&&(wt[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(wt)}function dt(st){return g!==st?(i.useProgram(st),g=st,!0):!1}let H={[Ci]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};H[If]=i.MIN,H[Pf]=i.MAX;let q={[Lf]:i.ZERO,[Df]:i.ONE,[Uf]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[kf]:i.SRC_ALPHA_SATURATE,[Of]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Hf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function z(st,Yt,wt,Nt,S,W,K,it,yt,Q){if(st===mi){M===!0&&(lt(i.BLEND),M=!1);return}if(M===!1&&(J(i.BLEND),M=!0),st!==Af){if(st!==p||Q!==_){if((u!==Ci||v!==Ci)&&(i.blendEquation(i.FUNC_ADD),u=Ci,v=Ci),Q)switch(st){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",st);break}else switch(st){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",st);break}w=null,x=null,B=null,R=null,T.set(0,0,0),C=0,p=st,_=Q}return}S=S||Yt,W=W||wt,K=K||Nt,(Yt!==u||S!==v)&&(i.blendEquationSeparate(H[Yt],H[S]),u=Yt,v=S),(wt!==w||Nt!==x||W!==B||K!==R)&&(i.blendFuncSeparate(q[wt],q[Nt],q[W],q[K]),w=wt,x=Nt,B=W,R=K),(it.equals(T)===!1||yt!==C)&&(i.blendColor(it.r,it.g,it.b,yt),T.copy(it),C=yt),p=st,_=!1}function Lt(st,Yt){st.side===We?lt(i.CULL_FACE):J(i.CULL_FACE);let wt=st.side===nn;Yt&&(wt=!wt),xt(wt),st.blending===ls&&st.transparent===!1?z(mi):z(st.blending,st.blendEquation,st.blendSrc,st.blendDst,st.blendEquationAlpha,st.blendSrcAlpha,st.blendDstAlpha,st.blendColor,st.blendAlpha,st.premultipliedAlpha),o.setFunc(st.depthFunc),o.setTest(st.depthTest),o.setMask(st.depthWrite),r.setMask(st.colorWrite);let Nt=st.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(st.stencilWriteMask),a.setFunc(st.stencilFunc,st.stencilRef,st.stencilFuncMask),a.setOp(st.stencilFail,st.stencilZFail,st.stencilZPass)),$(st.polygonOffset,st.polygonOffsetFactor,st.polygonOffsetUnits),st.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(st){y!==st&&(st?i.frontFace(i.CW):i.frontFace(i.CCW),y=st)}function bt(st){st!==wf?(J(i.CULL_FACE),st!==E&&(st===pc?i.cullFace(i.BACK):st===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),E=st}function Ot(st){st!==A&&(U&&i.lineWidth(st),A=st)}function $(st,Yt,wt){st?(J(i.POLYGON_OFFSET_FILL),(b!==Yt||D!==wt)&&(i.polygonOffset(Yt,wt),b=Yt,D=wt)):lt(i.POLYGON_OFFSET_FILL)}function zt(st){st?J(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function F(st){st===void 0&&(st=i.TEXTURE0+O-1),ut!==st&&(i.activeTexture(st),ut=st)}function I(st,Yt,wt){wt===void 0&&(ut===null?wt=i.TEXTURE0+O-1:wt=ut);let Nt=mt[wt];Nt===void 0&&(Nt={type:void 0,texture:void 0},mt[wt]=Nt),(Nt.type!==st||Nt.texture!==Yt)&&(ut!==wt&&(i.activeTexture(wt),ut=wt),i.bindTexture(st,Yt||nt[st]),Nt.type=st,Nt.texture=Yt)}function ft(){let st=mt[ut];st!==void 0&&st.type!==void 0&&(i.bindTexture(st.type,null),st.type=void 0,st.texture=void 0)}function Rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function ct(){try{i.texSubImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(st){console.error("THREE.WebGLState:",st)}}function Jt(st){Gt.equals(st)===!1&&(i.scissor(st.x,st.y,st.z,st.w),Gt.copy(st))}function qt(st){N.equals(st)===!1&&(i.viewport(st.x,st.y,st.z,st.w),N.copy(st))}function ce(st,Yt){let wt=c.get(Yt);wt===void 0&&(wt=new WeakMap,c.set(Yt,wt));let Nt=wt.get(st);Nt===void 0&&(Nt=i.getUniformBlockIndex(Yt,st.name),wt.set(st,Nt))}function ie(st,Yt){let Nt=c.get(Yt).get(st);l.get(Yt)!==Nt&&(i.uniformBlockBinding(Yt,Nt,st.__bindingPointIndex),l.set(Yt,Nt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,mt={},m={},d=new WeakMap,f=[],g=null,M=!1,p=null,u=null,w=null,x=null,v=null,B=null,R=null,T=new se(0,0,0),C=0,_=!1,y=null,E=null,A=null,b=null,D=null,Gt.set(0,0,i.canvas.width,i.canvas.height),N.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:lt,bindFramebuffer:at,drawBuffers:Tt,useProgram:dt,setBlending:z,setMaterial:Lt,setFlipSided:xt,setCullFace:bt,setLineWidth:Ot,setPolygonOffset:$,setScissorTest:zt,activeTexture:F,bindTexture:I,unbindTexture:ft,compressedTexImage2D:Rt,compressedTexImage3D:Pt,texImage2D:It,texImage3D:Wt,updateUBOMapping:ce,uniformBlockBinding:ie,texStorage2D:Et,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:ct,compressedTexSubImage2D:rt,compressedTexSubImage3D:vt,scissor:Jt,viewport:qt,reset:_e}}function dh(i,t,e,n){let s=pg(n);switch(e){case Uh:return i*t;case Fh:return i*t;case zh:return i*t*2;case Zl:return i*t/s.components*s.byteLength;case Jl:return i*t/s.components*s.byteLength;case Oh:return i*t*2/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case Nh:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case jl:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case za:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $r:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bh:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pg(i){switch(i){case ei:case Ph:return{byteLength:1,components:1};case Xs:case Lh:case rr:return{byteLength:2,components:1};case Yl:case $l:return{byteLength:2,components:4};case Ui:case ql:case kn:return{byteLength:4,components:1};case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,m,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,I){return f?new OffscreenCanvas(F,I):Kr("canvas")}function M(F,I,ft){let Rt=1,Pt=zt(F);if((Pt.width>ft||Pt.height>ft)&&(Rt=ft/Math.max(Pt.width,Pt.height)),Rt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Y=Math.floor(Rt*Pt.width),ct=Math.floor(Rt*Pt.height);m===void 0&&(m=g(Y,ct));let rt=I?g(Y,ct):m;return rt.width=Y,rt.height=ct,rt.getContext("2d").drawImage(F,0,0,Y,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pt.width+"x"+Pt.height+") to ("+Y+"x"+ct+")."),rt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pt.width+"x"+Pt.height+")."),F;return F}function p(F){return F.generateMipmaps}function u(F){i.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(F,I,ft,Rt,Pt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Y=I;if(I===i.RED&&(ft===i.FLOAT&&(Y=i.R32F),ft===i.HALF_FLOAT&&(Y=i.R16F),ft===i.UNSIGNED_BYTE&&(Y=i.R8)),I===i.RED_INTEGER&&(ft===i.UNSIGNED_BYTE&&(Y=i.R8UI),ft===i.UNSIGNED_SHORT&&(Y=i.R16UI),ft===i.UNSIGNED_INT&&(Y=i.R32UI),ft===i.BYTE&&(Y=i.R8I),ft===i.SHORT&&(Y=i.R16I),ft===i.INT&&(Y=i.R32I)),I===i.RG&&(ft===i.FLOAT&&(Y=i.RG32F),ft===i.HALF_FLOAT&&(Y=i.RG16F),ft===i.UNSIGNED_BYTE&&(Y=i.RG8)),I===i.RG_INTEGER&&(ft===i.UNSIGNED_BYTE&&(Y=i.RG8UI),ft===i.UNSIGNED_SHORT&&(Y=i.RG16UI),ft===i.UNSIGNED_INT&&(Y=i.RG32UI),ft===i.BYTE&&(Y=i.RG8I),ft===i.SHORT&&(Y=i.RG16I),ft===i.INT&&(Y=i.RG32I)),I===i.RGB_INTEGER&&(ft===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),ft===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),ft===i.UNSIGNED_INT&&(Y=i.RGB32UI),ft===i.BYTE&&(Y=i.RGB8I),ft===i.SHORT&&(Y=i.RGB16I),ft===i.INT&&(Y=i.RGB32I)),I===i.RGBA_INTEGER&&(ft===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),ft===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),ft===i.UNSIGNED_INT&&(Y=i.RGBA32UI),ft===i.BYTE&&(Y=i.RGBA8I),ft===i.SHORT&&(Y=i.RGBA16I),ft===i.INT&&(Y=i.RGBA32I)),I===i.RGB&&ft===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),I===i.RGBA){let ct=Pt?Do:be.getTransfer(Rt);ft===i.FLOAT&&(Y=i.RGBA32F),ft===i.HALF_FLOAT&&(Y=i.RGBA16F),ft===i.UNSIGNED_BYTE&&(Y=ct===Re?i.SRGB8_ALPHA8:i.RGBA8),ft===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),ft===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(F,I){let ft;return F?I===null||I===Ui||I===ms?ft=i.DEPTH24_STENCIL8:I===kn?ft=i.DEPTH32F_STENCIL8:I===Xs&&(ft=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Ui||I===ms?ft=i.DEPTH_COMPONENT24:I===kn?ft=i.DEPTH_COMPONENT32F:I===Xs&&(ft=i.DEPTH_COMPONENT16),ft}function B(F,I){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==fn&&F.minFilter!==Bn?Math.log2(Math.max(I.width,I.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?I.mipmaps.length:1}function R(F){let I=F.target;I.removeEventListener("dispose",R),C(I),I.isVideoTexture&&h.delete(I)}function T(F){let I=F.target;I.removeEventListener("dispose",T),y(I)}function C(F){let I=n.get(F);if(I.__webglInit===void 0)return;let ft=F.source,Rt=d.get(ft);if(Rt){let Pt=Rt[I.__cacheKey];Pt.usedTimes--,Pt.usedTimes===0&&_(F),Object.keys(Rt).length===0&&d.delete(ft)}n.remove(F)}function _(F){let I=n.get(F);i.deleteTexture(I.__webglTexture);let ft=F.source,Rt=d.get(ft);delete Rt[I.__cacheKey],o.memory.textures--}function y(F){let I=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Rt=0;Rt<6;Rt++){if(Array.isArray(I.__webglFramebuffer[Rt]))for(let Pt=0;Pt<I.__webglFramebuffer[Rt].length;Pt++)i.deleteFramebuffer(I.__webglFramebuffer[Rt][Pt]);else i.deleteFramebuffer(I.__webglFramebuffer[Rt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[Rt])}else{if(Array.isArray(I.__webglFramebuffer))for(let Rt=0;Rt<I.__webglFramebuffer.length;Rt++)i.deleteFramebuffer(I.__webglFramebuffer[Rt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Rt=0;Rt<I.__webglColorRenderbuffer.length;Rt++)I.__webglColorRenderbuffer[Rt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[Rt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let ft=F.textures;for(let Rt=0,Pt=ft.length;Rt<Pt;Rt++){let Y=n.get(ft[Rt]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(ft[Rt])}n.remove(F)}let E=0;function A(){E=0}function b(){let F=E;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),E+=1,F}function D(F){let I=[];return I.push(F.wrapS),I.push(F.wrapT),I.push(F.wrapR||0),I.push(F.magFilter),I.push(F.minFilter),I.push(F.anisotropy),I.push(F.internalFormat),I.push(F.format),I.push(F.type),I.push(F.generateMipmaps),I.push(F.premultiplyAlpha),I.push(F.flipY),I.push(F.unpackAlignment),I.push(F.colorSpace),I.join()}function O(F,I){let ft=n.get(F);if(F.isVideoTexture&&Ot(F),F.isRenderTargetTexture===!1&&F.version>0&&ft.__version!==F.version){let Rt=F.image;if(Rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(ft,F,I);return}}e.bindTexture(i.TEXTURE_2D,ft.__webglTexture,i.TEXTURE0+I)}function U(F,I){let ft=n.get(F);if(F.version>0&&ft.__version!==F.version){N(ft,F,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ft.__webglTexture,i.TEXTURE0+I)}function G(F,I){let ft=n.get(F);if(F.version>0&&ft.__version!==F.version){N(ft,F,I);return}e.bindTexture(i.TEXTURE_3D,ft.__webglTexture,i.TEXTURE0+I)}function V(F,I){let ft=n.get(F);if(F.version>0&&ft.__version!==F.version){Z(ft,F,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture,i.TEXTURE0+I)}let ut={[Di]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},mt={[fn]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},P={[su]:i.NEVER,[hu]:i.ALWAYS,[ru]:i.LESS,[Hh]:i.LEQUAL,[ou]:i.EQUAL,[cu]:i.GEQUAL,[au]:i.GREATER,[lu]:i.NOTEQUAL};function _t(F,I){if(I.type===kn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Bn||I.magFilter===Vo||I.magFilter===dr||I.magFilter===Li||I.minFilter===Bn||I.minFilter===Vo||I.minFilter===dr||I.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ut[I.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ut[I.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ut[I.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,mt[I.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,mt[I.minFilter]),I.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,P[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===fn||I.minFilter!==dr&&I.minFilter!==Li||I.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let ft=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Gt(F,I){let ft=!1;F.__webglInit===void 0&&(F.__webglInit=!0,I.addEventListener("dispose",R));let Rt=I.source,Pt=d.get(Rt);Pt===void 0&&(Pt={},d.set(Rt,Pt));let Y=D(I);if(Y!==F.__cacheKey){Pt[Y]===void 0&&(Pt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ft=!0),Pt[Y].usedTimes++;let ct=Pt[F.__cacheKey];ct!==void 0&&(Pt[F.__cacheKey].usedTimes--,ct.usedTimes===0&&_(I)),F.__cacheKey=Y,F.__webglTexture=Pt[Y].texture}return ft}function N(F,I,ft){let Rt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(Rt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(Rt=i.TEXTURE_3D);let Pt=Gt(F,I),Y=I.source;e.bindTexture(Rt,F.__webglTexture,i.TEXTURE0+ft);let ct=n.get(Y);if(Y.version!==ct.__version||Pt===!0){e.activeTexture(i.TEXTURE0+ft);let rt=be.getPrimaries(be.workingColorSpace),vt=I.colorSpace===di?null:be.getPrimaries(I.colorSpace),Et=I.colorSpace===di||rt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Ct=M(I.image,!1,s.maxTextureSize);Ct=$(I,Ct);let It=r.convert(I.format,I.colorSpace),Wt=r.convert(I.type),Jt=x(I.internalFormat,It,Wt,I.colorSpace,I.isVideoTexture);_t(Rt,I);let qt,ce=I.mipmaps,ie=I.isVideoTexture!==!0,_e=ct.__version===void 0||Pt===!0,st=Y.dataReady,Yt=B(I,Ct);if(I.isDepthTexture)Jt=v(I.format===gs,I.type),_e&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Jt,Ct.width,Ct.height):e.texImage2D(i.TEXTURE_2D,0,Jt,Ct.width,Ct.height,0,It,Wt,null));else if(I.isDataTexture)if(ce.length>0){ie&&_e&&e.texStorage2D(i.TEXTURE_2D,Yt,Jt,ce[0].width,ce[0].height);for(let wt=0,Nt=ce.length;wt<Nt;wt++)qt=ce[wt],ie?st&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,qt.width,qt.height,It,Wt,qt.data):e.texImage2D(i.TEXTURE_2D,wt,Jt,qt.width,qt.height,0,It,Wt,qt.data);I.generateMipmaps=!1}else ie?(_e&&e.texStorage2D(i.TEXTURE_2D,Yt,Jt,Ct.width,Ct.height),st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct.width,Ct.height,It,Wt,Ct.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,Ct.width,Ct.height,0,It,Wt,Ct.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ie&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Jt,ce[0].width,ce[0].height,Ct.depth);for(let wt=0,Nt=ce.length;wt<Nt;wt++)if(qt=ce[wt],I.format!==_n)if(It!==null)if(ie){if(st)if(I.layerUpdates.size>0){let S=dh(qt.width,qt.height,I.format,I.type);for(let W of I.layerUpdates){let K=qt.data.subarray(W*S/qt.data.BYTES_PER_ELEMENT,(W+1)*S/qt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,W,qt.width,qt.height,1,It,K)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,qt.width,qt.height,Ct.depth,It,qt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,wt,Jt,qt.width,qt.height,Ct.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,qt.width,qt.height,Ct.depth,It,Wt,qt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,wt,Jt,qt.width,qt.height,Ct.depth,0,It,Wt,qt.data)}else{ie&&_e&&e.texStorage2D(i.TEXTURE_2D,Yt,Jt,ce[0].width,ce[0].height);for(let wt=0,Nt=ce.length;wt<Nt;wt++)qt=ce[wt],I.format!==_n?It!==null?ie?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,wt,0,0,qt.width,qt.height,It,qt.data):e.compressedTexImage2D(i.TEXTURE_2D,wt,Jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?st&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,qt.width,qt.height,It,Wt,qt.data):e.texImage2D(i.TEXTURE_2D,wt,Jt,qt.width,qt.height,0,It,Wt,qt.data)}else if(I.isDataArrayTexture)if(ie){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Jt,Ct.width,Ct.height,Ct.depth),st)if(I.layerUpdates.size>0){let wt=dh(Ct.width,Ct.height,I.format,I.type);for(let Nt of I.layerUpdates){let S=Ct.data.subarray(Nt*wt/Ct.data.BYTES_PER_ELEMENT,(Nt+1)*wt/Ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,Ct.width,Ct.height,1,It,Wt,S)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,It,Wt,Ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,Ct.width,Ct.height,Ct.depth,0,It,Wt,Ct.data);else if(I.isData3DTexture)ie?(_e&&e.texStorage3D(i.TEXTURE_3D,Yt,Jt,Ct.width,Ct.height,Ct.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,It,Wt,Ct.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,Ct.width,Ct.height,Ct.depth,0,It,Wt,Ct.data);else if(I.isFramebufferTexture){if(_e)if(ie)e.texStorage2D(i.TEXTURE_2D,Yt,Jt,Ct.width,Ct.height);else{let wt=Ct.width,Nt=Ct.height;for(let S=0;S<Yt;S++)e.texImage2D(i.TEXTURE_2D,S,Jt,wt,Nt,0,It,Wt,null),wt>>=1,Nt>>=1}}else if(ce.length>0){if(ie&&_e){let wt=zt(ce[0]);e.texStorage2D(i.TEXTURE_2D,Yt,Jt,wt.width,wt.height)}for(let wt=0,Nt=ce.length;wt<Nt;wt++)qt=ce[wt],ie?st&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,It,Wt,qt):e.texImage2D(i.TEXTURE_2D,wt,Jt,It,Wt,qt);I.generateMipmaps=!1}else if(ie){if(_e){let wt=zt(Ct);e.texStorage2D(i.TEXTURE_2D,Yt,Jt,wt.width,wt.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Wt,Ct)}else e.texImage2D(i.TEXTURE_2D,0,Jt,It,Wt,Ct);p(I)&&u(Rt),ct.__version=Y.version,I.onUpdate&&I.onUpdate(I)}F.__version=I.version}function Z(F,I,ft){if(I.image.length!==6)return;let Rt=Gt(F,I),Pt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+ft);let Y=n.get(Pt);if(Pt.version!==Y.__version||Rt===!0){e.activeTexture(i.TEXTURE0+ft);let ct=be.getPrimaries(be.workingColorSpace),rt=I.colorSpace===di?null:be.getPrimaries(I.colorSpace),vt=I.colorSpace===di||ct===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Et=I.isCompressedTexture||I.image[0].isCompressedTexture,Ct=I.image[0]&&I.image[0].isDataTexture,It=[];for(let Nt=0;Nt<6;Nt++)!Et&&!Ct?It[Nt]=M(I.image[Nt],!0,s.maxCubemapSize):It[Nt]=Ct?I.image[Nt].image:I.image[Nt],It[Nt]=$(I,It[Nt]);let Wt=It[0],Jt=r.convert(I.format,I.colorSpace),qt=r.convert(I.type),ce=x(I.internalFormat,Jt,qt,I.colorSpace),ie=I.isVideoTexture!==!0,_e=Y.__version===void 0||Rt===!0,st=Pt.dataReady,Yt=B(I,Wt);_t(i.TEXTURE_CUBE_MAP,I);let wt;if(Et){ie&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,ce,Wt.width,Wt.height);for(let Nt=0;Nt<6;Nt++){wt=It[Nt].mipmaps;for(let S=0;S<wt.length;S++){let W=wt[S];I.format!==_n?Jt!==null?ie?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S,0,0,W.width,W.height,Jt,W.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S,ce,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S,0,0,W.width,W.height,Jt,qt,W.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S,ce,W.width,W.height,0,Jt,qt,W.data)}}}else{if(wt=I.mipmaps,ie&&_e){wt.length>0&&Yt++;let Nt=zt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,ce,Nt.width,Nt.height)}for(let Nt=0;Nt<6;Nt++)if(Ct){ie?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,It[Nt].width,It[Nt].height,Jt,qt,It[Nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,ce,It[Nt].width,It[Nt].height,0,Jt,qt,It[Nt].data);for(let S=0;S<wt.length;S++){let K=wt[S].image[Nt].image;ie?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S+1,0,0,K.width,K.height,Jt,qt,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S+1,ce,K.width,K.height,0,Jt,qt,K.data)}}else{ie?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,Jt,qt,It[Nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,ce,Jt,qt,It[Nt]);for(let S=0;S<wt.length;S++){let W=wt[S];ie?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S+1,0,0,Jt,qt,W.image[Nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,S+1,ce,Jt,qt,W.image[Nt])}}}p(I)&&u(i.TEXTURE_CUBE_MAP),Y.__version=Pt.version,I.onUpdate&&I.onUpdate(I)}F.__version=I.version}function nt(F,I,ft,Rt,Pt,Y){let ct=r.convert(ft.format,ft.colorSpace),rt=r.convert(ft.type),vt=x(ft.internalFormat,ct,rt,ft.colorSpace),Et=n.get(I),Ct=n.get(ft);if(Ct.__renderTarget=I,!Et.__hasExternalTextures){let It=Math.max(1,I.width>>Y),Wt=Math.max(1,I.height>>Y);Pt===i.TEXTURE_3D||Pt===i.TEXTURE_2D_ARRAY?e.texImage3D(Pt,Y,vt,It,Wt,I.depth,0,ct,rt,null):e.texImage2D(Pt,Y,vt,It,Wt,0,ct,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),bt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,Pt,Ct.__webglTexture,0,xt(I)):(Pt===i.TEXTURE_2D||Pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Rt,Pt,Ct.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(F,I,ft){if(i.bindRenderbuffer(i.RENDERBUFFER,F),I.depthBuffer){let Rt=I.depthTexture,Pt=Rt&&Rt.isDepthTexture?Rt.type:null,Y=v(I.stencilBuffer,Pt),ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=xt(I);bt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Y,I.width,I.height):ft?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Y,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Y,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,F)}else{let Rt=I.textures;for(let Pt=0;Pt<Rt.length;Pt++){let Y=Rt[Pt],ct=r.convert(Y.format,Y.colorSpace),rt=r.convert(Y.type),vt=x(Y.internalFormat,ct,rt,Y.colorSpace),Et=xt(I);ft&&bt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,vt,I.width,I.height):bt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,vt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,vt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(F,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Rt=n.get(I.depthTexture);Rt.__renderTarget=I,(!Rt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),O(I.depthTexture,0);let Pt=Rt.__webglTexture,Y=xt(I);if(I.depthTexture.format===cs)bt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Pt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Pt,0);else if(I.depthTexture.format===gs)bt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Pt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Pt,0);else throw new Error("Unknown depthTexture format")}function at(F){let I=n.get(F),ft=F.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==F.depthTexture){let Rt=F.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),Rt){let Pt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,Rt.removeEventListener("dispose",Pt)};Rt.addEventListener("dispose",Pt),I.__depthDisposeCallback=Pt}I.__boundDepthTexture=Rt}if(F.depthTexture&&!I.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");lt(I.__webglFramebuffer,F)}else if(ft){I.__webglDepthbuffer=[];for(let Rt=0;Rt<6;Rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[Rt]),I.__webglDepthbuffer[Rt]===void 0)I.__webglDepthbuffer[Rt]=i.createRenderbuffer(),J(I.__webglDepthbuffer[Rt],F,!1);else{let Pt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=I.__webglDepthbuffer[Rt];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),J(I.__webglDepthbuffer,F,!1);else{let Rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,Pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(F,I,ft){let Rt=n.get(F);I!==void 0&&nt(Rt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ft!==void 0&&at(F)}function dt(F){let I=F.texture,ft=n.get(F),Rt=n.get(I);F.addEventListener("dispose",T);let Pt=F.textures,Y=F.isWebGLCubeRenderTarget===!0,ct=Pt.length>1;if(ct||(Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture()),Rt.__version=I.version,o.memory.textures++),Y){ft.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(I.mipmaps&&I.mipmaps.length>0){ft.__webglFramebuffer[rt]=[];for(let vt=0;vt<I.mipmaps.length;vt++)ft.__webglFramebuffer[rt][vt]=i.createFramebuffer()}else ft.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){ft.__webglFramebuffer=[];for(let rt=0;rt<I.mipmaps.length;rt++)ft.__webglFramebuffer[rt]=i.createFramebuffer()}else ft.__webglFramebuffer=i.createFramebuffer();if(ct)for(let rt=0,vt=Pt.length;rt<vt;rt++){let Et=n.get(Pt[rt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&bt(F)===!1){ft.__webglMultisampledFramebuffer=i.createFramebuffer(),ft.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let rt=0;rt<Pt.length;rt++){let vt=Pt[rt];ft.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ft.__webglColorRenderbuffer[rt]);let Et=r.convert(vt.format,vt.colorSpace),Ct=r.convert(vt.type),It=x(vt.internalFormat,Et,Ct,vt.colorSpace,F.isXRRenderTarget===!0),Wt=xt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,It,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(ft.__webglDepthRenderbuffer=i.createRenderbuffer(),J(ft.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Rt.__webglTexture),_t(i.TEXTURE_CUBE_MAP,I);for(let rt=0;rt<6;rt++)if(I.mipmaps&&I.mipmaps.length>0)for(let vt=0;vt<I.mipmaps.length;vt++)nt(ft.__webglFramebuffer[rt][vt],F,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt);else nt(ft.__webglFramebuffer[rt],F,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(I)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let rt=0,vt=Pt.length;rt<vt;rt++){let Et=Pt[rt],Ct=n.get(Et);e.bindTexture(i.TEXTURE_2D,Ct.__webglTexture),_t(i.TEXTURE_2D,Et),nt(ft.__webglFramebuffer,F,Et,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),p(Et)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(rt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Rt.__webglTexture),_t(rt,I),I.mipmaps&&I.mipmaps.length>0)for(let vt=0;vt<I.mipmaps.length;vt++)nt(ft.__webglFramebuffer[vt],F,I,i.COLOR_ATTACHMENT0,rt,vt);else nt(ft.__webglFramebuffer,F,I,i.COLOR_ATTACHMENT0,rt,0);p(I)&&u(rt),e.unbindTexture()}F.depthBuffer&&at(F)}function H(F){let I=F.textures;for(let ft=0,Rt=I.length;ft<Rt;ft++){let Pt=I[ft];if(p(Pt)){let Y=w(F),ct=n.get(Pt).__webglTexture;e.bindTexture(Y,ct),u(Y),e.unbindTexture()}}}let q=[],z=[];function Lt(F){if(F.samples>0){if(bt(F)===!1){let I=F.textures,ft=F.width,Rt=F.height,Pt=i.COLOR_BUFFER_BIT,Y=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(F),rt=I.length>1;if(rt)for(let vt=0;vt<I.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let vt=0;vt<I.length;vt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Pt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Pt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[vt]);let Et=n.get(I[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,ft,Rt,0,0,ft,Rt,Pt,i.NEAREST),l===!0&&(q.length=0,z.length=0,q.push(i.COLOR_ATTACHMENT0+vt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(q.push(Y),z.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let vt=0;vt<I.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[vt]);let Et=n.get(I[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let I=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function xt(F){return Math.min(s.maxSamples,F.samples)}function bt(F){let I=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Ot(F){let I=o.render.frame;h.get(F)!==I&&(h.set(F,I),F.update())}function $(F,I){let ft=F.colorSpace,Rt=F.format,Pt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ft!==Ms&&ft!==di&&(be.getTransfer(ft)===Re?(Rt!==_n||Pt!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),I}function zt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=b,this.resetTextureUnits=A,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=G,this.setTextureCube=V,this.rebindTextures=Tt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=bt}function gg(i,t){function e(n,s=di){let r,o=be.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Lh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===ql)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===_n)return i.RGBA;if(n===Fh)return i.LUMINANCE;if(n===zh)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===Jl)return i.RED_INTEGER;if(n===Oh)return i.RG;if(n===Kl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$r||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$r)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ml=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},he=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},xg={type:"move"},Vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=h.position.distanceTo(m.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new pn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:yg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,m=null,d=null,f=null,g=null,M=new bl,p=e.getContextAttributes(),u=null,w=null,x=[],v=[],B=new Bt,R=null,T=new hn;T.viewport=new Ve;let C=new hn;C.viewport=new Ve;let _=[T,C],y=new Ml,E=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Z=x[N];return Z===void 0&&(Z=new Vs,x[N]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(N){let Z=x[N];return Z===void 0&&(Z=new Vs,x[N]=Z),Z.getGripSpace()},this.getHand=function(N){let Z=x[N];return Z===void 0&&(Z=new Vs,x[N]=Z),Z.getHandSpace()};function b(N){let Z=v.indexOf(N.inputSource);if(Z===-1)return;let nt=x[Z];nt!==void 0&&(nt.update(N.inputSource,N.frame,c||o),nt.dispatchEvent({type:N.type,data:N.inputSource}))}function D(){s.removeEventListener("select",b),s.removeEventListener("selectstart",b),s.removeEventListener("selectend",b),s.removeEventListener("squeeze",b),s.removeEventListener("squeezestart",b),s.removeEventListener("squeezeend",b),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",O);for(let N=0;N<x.length;N++){let Z=v[N];Z!==null&&(v[N]=null,x[N].disconnect(Z))}E=null,A=null,M.reset(),t.setRenderTarget(u),f=null,d=null,m=null,s=null,w=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",b),s.addEventListener("selectstart",b),s.addEventListener("selectend",b),s.addEventListener("squeeze",b),s.addEventListener("squeezestart",b),s.addEventListener("squeezeend",b),s.addEventListener("end",D),s.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){let Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ni(f.framebufferWidth,f.framebufferHeight,{format:_n,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,nt=null,J=null;p.depth&&(J=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=p.stencil?gs:cs,nt=p.stencil?ms:Ui);let lt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};m=new XRWebGLBinding(s,e),d=m.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ni(d.textureWidth,d.textureHeight,{format:_n,type:ei,depthTexture:new lo(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function O(N){for(let Z=0;Z<N.removed.length;Z++){let nt=N.removed[Z],J=v.indexOf(nt);J>=0&&(v[J]=null,x[J].disconnect(nt))}for(let Z=0;Z<N.added.length;Z++){let nt=N.added[Z],J=v.indexOf(nt);if(J===-1){for(let at=0;at<x.length;at++)if(at>=v.length){v.push(nt),J=at;break}else if(v[at]===null){v[at]=nt,J=at;break}if(J===-1)break}let lt=x[J];lt&&lt.connect(nt)}}let U=new k,G=new k;function V(N,Z,nt){U.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(nt.matrixWorld);let J=U.distanceTo(G),lt=Z.projectionMatrix.elements,at=nt.projectionMatrix.elements,Tt=lt[14]/(lt[10]-1),dt=lt[14]/(lt[10]+1),H=(lt[9]+1)/lt[5],q=(lt[9]-1)/lt[5],z=(lt[8]-1)/lt[0],Lt=(at[8]+1)/at[0],xt=Tt*z,bt=Tt*Lt,Ot=J/(-z+Lt),$=Ot*-z;if(Z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX($),N.translateZ(Ot),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),lt[10]===-1)N.projectionMatrix.copy(Z.projectionMatrix),N.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let zt=Tt+Ot,F=dt+Ot,I=xt-$,ft=bt+(J-$),Rt=H*dt/F*zt,Pt=q*dt/F*zt;N.projectionMatrix.makePerspective(I,ft,Rt,Pt,zt,F),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ut(N,Z){Z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let Z=N.near,nt=N.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(nt=M.depthFar)),y.near=C.near=T.near=Z,y.far=C.far=T.far=nt,(E!==y.near||A!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,A=y.far),T.layers.mask=N.layers.mask|2,C.layers.mask=N.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;let J=N.parent,lt=y.cameras;ut(y,J);for(let at=0;at<lt.length;at++)ut(lt[at],J);lt.length===2?V(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),mt(N,y,J)};function mt(N,Z,nt){nt===null?N.matrix.copy(Z.matrixWorld):(N.matrix.copy(nt.matrixWorld),N.matrix.invert(),N.matrix.multiply(Z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Z.projectionMatrix),N.projectionMatrixInverse.copy(Z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=qs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let P=null;function _t(N,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let J=!1;nt.length!==y.cameras.length&&(y.cameras.length=0,J=!0);for(let at=0;at<nt.length;at++){let Tt=nt[at],dt=null;if(f!==null)dt=f.getViewport(Tt);else{let q=m.getViewSubImage(d,Tt);dt=q.viewport,at===0&&(t.setRenderTargetTextures(w,q.colorTexture,d.ignoreDepthValues?void 0:q.depthStencilTexture),t.setRenderTarget(w))}let H=_[at];H===void 0&&(H=new hn,H.layers.enable(at),H.viewport=new Ve,_[at]=H),H.matrix.fromArray(Tt.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(Tt.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(dt.x,dt.y,dt.width,dt.height),at===0&&(y.matrix.copy(H.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),J===!0&&y.cameras.push(H)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){let at=m.getDepthInformation(nt[0]);at&&at.isValid&&at.texture&&M.init(t,at,s.renderState)}}for(let nt=0;nt<x.length;nt++){let J=v[nt],lt=x[nt];J!==null&&lt!==void 0&&lt.update(J,Z,c||o)}P&&P(N,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let Gt=new qh;Gt.setAnimationLoop(_t),this.setAnimationLoop=function(N){P=N},this.dispose=function(){}}},Ai=new Pn,vg=new ve;function Mg(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Xh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,w,x,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),m(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&f(p,u,v)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),M(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,w,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===nn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===nn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let w=t.get(u),x=w.envMap,v=w.envMapRotation;x&&(p.envMap.value=x,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),p.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Ai)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,w,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*w,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function m(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function f(p,u,w){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){let w=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,x){let v=x.program;n.uniformBlockBinding(w,v)}function c(w,x){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",p));let B=x.program;n.updateUBOMapping(w,B);let R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){let x=m();w.__bindingPointIndex=x;let v=i.createBuffer(),B=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,B,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function m(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let x=s[w.id],v=w.uniforms,B=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,T=v.length;R<T;R++){let C=Array.isArray(v[R])?v[R]:[v[R]];for(let _=0,y=C.length;_<y;_++){let E=C[_];if(f(E,R,_,B)===!0){let A=E.__offset,b=Array.isArray(E.value)?E.value:[E.value],D=0;for(let O=0;O<b.length;O++){let U=b[O],G=M(U);typeof U=="number"||typeof U=="boolean"?(E.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,A+D,E.__data)):U.isMatrix3?(E.__data[0]=U.elements[0],E.__data[1]=U.elements[1],E.__data[2]=U.elements[2],E.__data[3]=0,E.__data[4]=U.elements[3],E.__data[5]=U.elements[4],E.__data[6]=U.elements[5],E.__data[7]=0,E.__data[8]=U.elements[6],E.__data[9]=U.elements[7],E.__data[10]=U.elements[8],E.__data[11]=0):(U.toArray(E.__data,D),D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,x,v,B){let R=w.value,T=x+"_"+v;if(B[T]===void 0)return typeof R=="number"||typeof R=="boolean"?B[T]=R:B[T]=R.clone(),!0;{let C=B[T];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return B[T]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(w){let x=w.uniforms,v=0,B=16;for(let T=0,C=x.length;T<C;T++){let _=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,E=_.length;y<E;y++){let A=_[y],b=Array.isArray(A.value)?A.value:[A.value];for(let D=0,O=b.length;D<O;D++){let U=b[D],G=M(U),V=v%B,ut=V%G.boundary,mt=V+ut;v+=ut,mt!==0&&B-mt<G.storage&&(v+=B-mt),A.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,v+=G.storage}}}let R=v%B;return R>0&&(v+=B-R),w.__size=v,w.__cache={},this}function M(w){let x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function p(w){let x=w.target;x.removeEventListener("dispose",p);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var co=class{constructor(t={}){let{canvas:e=Au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),M=new Int32Array(4),p=null,u=null,w=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Hn,this.toneMappingExposure=1;let v=this,B=!1,R=0,T=0,C=null,_=-1,y=null,E=new Ve,A=new Ve,b=null,D=new se(0),O=0,U=e.width,G=e.height,V=1,ut=null,mt=null,P=new Ve(0,0,U,G),_t=new Ve(0,0,U,G),Gt=!1,N=new Ys,Z=!1,nt=!1,J=new ve,lt=new ve,at=new k,Tt=new Ve,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},H=!1;function q(){return C===null?V:1}let z=n;function Lt(L,et){return e.getContext(L,et)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",S,!1),e.addEventListener("webglcontextcreationerror",W,!1),z===null){let et="webgl2";if(z=Lt(et,L),z===null)throw Lt(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let xt,bt,Ot,$,zt,F,I,ft,Rt,Pt,Y,ct,rt,vt,Et,Ct,It,Wt,Jt,qt,ce,ie,_e,st;function Yt(){xt=new Om(z),xt.init(),ie=new gg(z,xt),bt=new Lm(z,xt,t,ie),Ot=new dg(z,xt),bt.reverseDepthBuffer&&d&&Ot.buffers.depth.setReversed(!0),$=new Hm(z),zt=new tg,F=new mg(z,xt,Ot,zt,bt,ie,$),I=new Um(v),ft=new zm(v),Rt=new $u(z),_e=new Im(z,Rt),Pt=new Bm(z,Rt,$,_e),Y=new Gm(z,Pt,Rt,$),Jt=new Vm(z,bt,F),Ct=new Dm(zt),ct=new Q0(v,I,ft,xt,bt,_e,Ct),rt=new Mg(v,zt),vt=new ng,Et=new lg(xt),Wt=new Cm(v,I,ft,Ot,Y,f,l),It=new fg(v,Y,bt),st=new bg(z,$,bt,Ot),qt=new Pm(z,xt,$),ce=new km(z,xt,$),$.programs=ct.programs,v.capabilities=bt,v.extensions=xt,v.properties=zt,v.renderLists=vt,v.shadowMap=It,v.state=Ot,v.info=$}Yt();let wt=new Sl(v,z);this.xr=wt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let L=xt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=xt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(U,G,!1))},this.getSize=function(L){return L.set(U,G)},this.setSize=function(L,et,ht=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=L,G=et,e.width=Math.floor(L*V),e.height=Math.floor(et*V),ht===!0&&(e.style.width=L+"px",e.style.height=et+"px"),this.setViewport(0,0,L,et)},this.getDrawingBufferSize=function(L){return L.set(U*V,G*V).floor()},this.setDrawingBufferSize=function(L,et,ht){U=L,G=et,V=ht,e.width=Math.floor(L*ht),e.height=Math.floor(et*ht),this.setViewport(0,0,L,et)},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(P)},this.setViewport=function(L,et,ht,gt){L.isVector4?P.set(L.x,L.y,L.z,L.w):P.set(L,et,ht,gt),Ot.viewport(E.copy(P).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(_t)},this.setScissor=function(L,et,ht,gt){L.isVector4?_t.set(L.x,L.y,L.z,L.w):_t.set(L,et,ht,gt),Ot.scissor(A.copy(_t).multiplyScalar(V).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(L){Ot.setScissorTest(Gt=L)},this.setOpaqueSort=function(L){ut=L},this.setTransparentSort=function(L){mt=L},this.getClearColor=function(L){return L.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(L=!0,et=!0,ht=!0){let gt=0;if(L){let tt=!1;if(C!==null){let Vt=C.texture.format;tt=Vt===jl||Vt===Kl||Vt===Jl}if(tt){let Vt=C.texture.type,Xt=Vt===ei||Vt===Ui||Vt===Xs||Vt===ms||Vt===Yl||Vt===$l,ne=Wt.getClearColor(),te=Wt.getClearAlpha(),fe=ne.r,me=ne.g,oe=ne.b;Xt?(g[0]=fe,g[1]=me,g[2]=oe,g[3]=te,z.clearBufferuiv(z.COLOR,0,g)):(M[0]=fe,M[1]=me,M[2]=oe,M[3]=te,z.clearBufferiv(z.COLOR,0,M))}else gt|=z.COLOR_BUFFER_BIT}et&&(gt|=z.DEPTH_BUFFER_BIT),ht&&(gt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",S,!1),e.removeEventListener("webglcontextcreationerror",W,!1),vt.dispose(),Et.dispose(),zt.dispose(),I.dispose(),ft.dispose(),Y.dispose(),_e.dispose(),st.dispose(),ct.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Dt),wt.removeEventListener("sessionend",j),Mt.stop()};function Nt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let L=$.autoReset,et=It.enabled,ht=It.autoUpdate,gt=It.needsUpdate,tt=It.type;Yt(),$.autoReset=L,It.enabled=et,It.autoUpdate=ht,It.needsUpdate=gt,It.type=tt}function W(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function K(L){let et=L.target;et.removeEventListener("dispose",K),it(et)}function it(L){yt(L),zt.remove(L)}function yt(L){let et=zt.get(L).programs;et!==void 0&&(et.forEach(function(ht){ct.releaseProgram(ht)}),L.isShaderMaterial&&ct.releaseShaderCache(L))}this.renderBufferDirect=function(L,et,ht,gt,tt,Vt){et===null&&(et=dt);let Xt=tt.isMesh&&tt.matrixWorld.determinant()<0,ne=Qt(L,et,ht,gt,tt);Ot.setMaterial(gt,Xt);let te=ht.index,fe=1;if(gt.wireframe===!0){if(te=Pt.getWireframeAttribute(ht),te===void 0)return;fe=2}let me=ht.drawRange,oe=ht.attributes.position,Se=me.start*fe,Le=(me.start+me.count)*fe;Vt!==null&&(Se=Math.max(Se,Vt.start*fe),Le=Math.min(Le,(Vt.start+Vt.count)*fe)),te!==null?(Se=Math.max(Se,0),Le=Math.min(Le,te.count)):oe!=null&&(Se=Math.max(Se,0),Le=Math.min(Le,oe.count));let De=Le-Se;if(De<0||De===1/0)return;_e.setup(tt,gt,ne,ht,te);let dn,we=qt;if(te!==null&&(dn=Rt.get(te),we=ce,we.setIndex(dn)),tt.isMesh)gt.wireframe===!0?(Ot.setLineWidth(gt.wireframeLinewidth*q()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(tt.isLine){let ae=gt.linewidth;ae===void 0&&(ae=1),Ot.setLineWidth(ae*q()),tt.isLineSegments?we.setMode(z.LINES):tt.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else tt.isPoints?we.setMode(z.POINTS):tt.isSprite&&we.setMode(z.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)we.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))we.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let ae=tt._multiDrawStarts,Xn=tt._multiDrawCounts,Te=tt._multiDrawCount,Tn=te?Rt.get(te).bytesPerElement:1,ki=zt.get(gt).currentProgram.getUniforms();for(let gn=0;gn<Te;gn++)ki.setValue(z,"_gl_DrawID",gn),we.render(ae[gn]/Tn,Xn[gn])}else if(tt.isInstancedMesh)we.renderInstances(Se,De,tt.count);else if(ht.isInstancedBufferGeometry){let ae=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Xn=Math.min(ht.instanceCount,ae);we.renderInstances(Se,De,Xn)}else we.render(Se,De)};function Q(L,et,ht){L.transparent===!0&&L.side===We&&L.forceSinglePass===!1?(L.side=nn,L.needsUpdate=!0,Ft(L,et,ht),L.side=xi,L.needsUpdate=!0,Ft(L,et,ht),L.side=We):Ft(L,et,ht)}this.compile=function(L,et,ht=null){ht===null&&(ht=L),u=Et.get(ht),u.init(et),x.push(u),ht.traverseVisible(function(tt){tt.isLight&&tt.layers.test(et.layers)&&(u.pushLight(tt),tt.castShadow&&u.pushShadow(tt))}),L!==ht&&L.traverseVisible(function(tt){tt.isLight&&tt.layers.test(et.layers)&&(u.pushLight(tt),tt.castShadow&&u.pushShadow(tt))}),u.setupLights();let gt=new Set;return L.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Vt=tt.material;if(Vt)if(Array.isArray(Vt))for(let Xt=0;Xt<Vt.length;Xt++){let ne=Vt[Xt];Q(ne,ht,tt),gt.add(ne)}else Q(Vt,ht,tt),gt.add(Vt)}),x.pop(),u=null,gt},this.compileAsync=function(L,et,ht=null){let gt=this.compile(L,et,ht);return new Promise(tt=>{function Vt(){if(gt.forEach(function(Xt){zt.get(Xt).currentProgram.isReady()&&gt.delete(Xt)}),gt.size===0){tt(L);return}setTimeout(Vt,10)}xt.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let St=null;function Ht(L){St&&St(L)}function Dt(){Mt.stop()}function j(){Mt.start()}let Mt=new qh;Mt.setAnimationLoop(Ht),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(L){St=L,wt.setAnimationLoop(L),L===null?Mt.stop():Mt.start()},wt.addEventListener("sessionstart",Dt),wt.addEventListener("sessionend",j),this.render=function(L,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(et),et=wt.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,et,C),u=Et.get(L,x.length),u.init(et),x.push(u),lt.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),N.setFromProjectionMatrix(lt),nt=this.localClippingEnabled,Z=Ct.init(this.clippingPlanes,nt),p=vt.get(L,w.length),p.init(),w.push(p),wt.enabled===!0&&wt.isPresenting===!0){let Vt=v.xr.getDepthSensingMesh();Vt!==null&&At(Vt,et,-1/0,v.sortObjects)}At(L,et,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ut,mt),H=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,H&&Wt.addToRenderList(p,L),this.info.render.frame++,Z===!0&&Ct.beginShadows();let ht=u.state.shadowsArray;It.render(ht,L,et),Z===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let gt=p.opaque,tt=p.transmissive;if(u.setupLights(),et.isArrayCamera){let Vt=et.cameras;if(tt.length>0)for(let Xt=0,ne=Vt.length;Xt<ne;Xt++){let te=Vt[Xt];re(gt,tt,L,te)}H&&Wt.render(L);for(let Xt=0,ne=Vt.length;Xt<ne;Xt++){let te=Vt[Xt];Kt(p,L,te,te.viewport)}}else tt.length>0&&re(gt,tt,L,et),H&&Wt.render(L),Kt(p,L,et);C!==null&&(F.updateMultisampleRenderTarget(C),F.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(v,L,et),_e.resetDefaultState(),_=-1,y=null,x.pop(),x.length>0?(u=x[x.length-1],Z===!0&&Ct.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function At(L,et,ht,gt){if(L.visible===!1)return;if(L.layers.test(et.layers)){if(L.isGroup)ht=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(et);else if(L.isLight)u.pushLight(L),L.castShadow&&u.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||N.intersectsSprite(L)){gt&&Tt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(lt);let Xt=Y.update(L),ne=L.material;ne.visible&&p.push(L,Xt,ne,ht,Tt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||N.intersectsObject(L))){let Xt=Y.update(L),ne=L.material;if(gt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Tt.copy(L.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Tt.copy(Xt.boundingSphere.center)),Tt.applyMatrix4(L.matrixWorld).applyMatrix4(lt)),Array.isArray(ne)){let te=Xt.groups;for(let fe=0,me=te.length;fe<me;fe++){let oe=te[fe],Se=ne[oe.materialIndex];Se&&Se.visible&&p.push(L,Xt,Se,ht,Tt.z,oe)}}else ne.visible&&p.push(L,Xt,ne,ht,Tt.z,null)}}let Vt=L.children;for(let Xt=0,ne=Vt.length;Xt<ne;Xt++)At(Vt[Xt],et,ht,gt)}function Kt(L,et,ht,gt){let tt=L.opaque,Vt=L.transmissive,Xt=L.transparent;u.setupLightsView(ht),Z===!0&&Ct.setGlobalState(v.clippingPlanes,ht),gt&&Ot.viewport(E.copy(gt)),tt.length>0&&X(tt,et,ht),Vt.length>0&&X(Vt,et,ht),Xt.length>0&&X(Xt,et,ht),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function re(L,et,ht,gt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[gt.id]===void 0&&(u.state.transmissionRenderTarget[gt.id]=new ni(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?rr:ei,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));let Vt=u.state.transmissionRenderTarget[gt.id],Xt=gt.viewport||E;Vt.setSize(Xt.z,Xt.w);let ne=v.getRenderTarget();v.setRenderTarget(Vt),v.getClearColor(D),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),H&&Wt.render(ht);let te=v.toneMapping;v.toneMapping=Hn;let fe=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),u.setupLightsView(gt),Z===!0&&Ct.setGlobalState(v.clippingPlanes,gt),X(L,ht,gt),F.updateMultisampleRenderTarget(Vt),F.updateRenderTargetMipmap(Vt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let oe=0,Se=et.length;oe<Se;oe++){let Le=et[oe],De=Le.object,dn=Le.geometry,we=Le.material,ae=Le.group;if(we.side===We&&De.layers.test(gt.layers)){let Xn=we.side;we.side=nn,we.needsUpdate=!0,ot(De,ht,gt,dn,we,ae),we.side=Xn,we.needsUpdate=!0,me=!0}}me===!0&&(F.updateMultisampleRenderTarget(Vt),F.updateRenderTargetMipmap(Vt))}v.setRenderTarget(ne),v.setClearColor(D,O),fe!==void 0&&(gt.viewport=fe),v.toneMapping=te}function X(L,et,ht){let gt=et.isScene===!0?et.overrideMaterial:null;for(let tt=0,Vt=L.length;tt<Vt;tt++){let Xt=L[tt],ne=Xt.object,te=Xt.geometry,fe=gt===null?Xt.material:gt,me=Xt.group;ne.layers.test(ht.layers)&&ot(ne,et,ht,te,fe,me)}}function ot(L,et,ht,gt,tt,Vt){L.onBeforeRender(v,et,ht,gt,tt,Vt),L.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),tt.onBeforeRender(v,et,ht,gt,L,Vt),tt.transparent===!0&&tt.side===We&&tt.forceSinglePass===!1?(tt.side=nn,tt.needsUpdate=!0,v.renderBufferDirect(ht,et,gt,tt,L,Vt),tt.side=xi,tt.needsUpdate=!0,v.renderBufferDirect(ht,et,gt,tt,L,Vt),tt.side=We):v.renderBufferDirect(ht,et,gt,tt,L,Vt),L.onAfterRender(v,et,ht,gt,tt,Vt)}function Ft(L,et,ht){et.isScene!==!0&&(et=dt);let gt=zt.get(L),tt=u.state.lights,Vt=u.state.shadowsArray,Xt=tt.state.version,ne=ct.getParameters(L,tt.state,Vt,et,ht),te=ct.getProgramCacheKey(ne),fe=gt.programs;gt.environment=L.isMeshStandardMaterial?et.environment:null,gt.fog=et.fog,gt.envMap=(L.isMeshStandardMaterial?ft:I).get(L.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&L.envMap===null?et.environmentRotation:L.envMapRotation,fe===void 0&&(L.addEventListener("dispose",K),fe=new Map,gt.programs=fe);let me=fe.get(te);if(me!==void 0){if(gt.currentProgram===me&&gt.lightsStateVersion===Xt)return Zt(L,ne),me}else ne.uniforms=ct.getUniforms(L),L.onBeforeCompile(ne,v),me=ct.acquireProgram(ne,te),fe.set(te,me),gt.uniforms=ne.uniforms;let oe=gt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(oe.clippingPlanes=Ct.uniform),Zt(L,ne),gt.needsLights=Ee(L),gt.lightsStateVersion=Xt,gt.needsLights&&(oe.ambientLightColor.value=tt.state.ambient,oe.lightProbe.value=tt.state.probe,oe.directionalLights.value=tt.state.directional,oe.directionalLightShadows.value=tt.state.directionalShadow,oe.spotLights.value=tt.state.spot,oe.spotLightShadows.value=tt.state.spotShadow,oe.rectAreaLights.value=tt.state.rectArea,oe.ltc_1.value=tt.state.rectAreaLTC1,oe.ltc_2.value=tt.state.rectAreaLTC2,oe.pointLights.value=tt.state.point,oe.pointLightShadows.value=tt.state.pointShadow,oe.hemisphereLights.value=tt.state.hemi,oe.directionalShadowMap.value=tt.state.directionalShadowMap,oe.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,oe.spotShadowMap.value=tt.state.spotShadowMap,oe.spotLightMatrix.value=tt.state.spotLightMatrix,oe.spotLightMap.value=tt.state.spotLightMap,oe.pointShadowMap.value=tt.state.pointShadowMap,oe.pointShadowMatrix.value=tt.state.pointShadowMatrix),gt.currentProgram=me,gt.uniformsList=null,me}function Ut(L){if(L.uniformsList===null){let et=L.currentProgram.getUniforms();L.uniformsList=fs.seqWithValue(et.seq,L.uniforms)}return L.uniformsList}function Zt(L,et){let ht=zt.get(L);ht.outputColorSpace=et.outputColorSpace,ht.batching=et.batching,ht.batchingColor=et.batchingColor,ht.instancing=et.instancing,ht.instancingColor=et.instancingColor,ht.instancingMorph=et.instancingMorph,ht.skinning=et.skinning,ht.morphTargets=et.morphTargets,ht.morphNormals=et.morphNormals,ht.morphColors=et.morphColors,ht.morphTargetsCount=et.morphTargetsCount,ht.numClippingPlanes=et.numClippingPlanes,ht.numIntersection=et.numClipIntersection,ht.vertexAlphas=et.vertexAlphas,ht.vertexTangents=et.vertexTangents,ht.toneMapping=et.toneMapping}function Qt(L,et,ht,gt,tt){et.isScene!==!0&&(et=dt),F.resetTextureUnits();let Vt=et.fog,Xt=gt.isMeshStandardMaterial?et.environment:null,ne=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ms,te=(gt.isMeshStandardMaterial?ft:I).get(gt.envMap||Xt),fe=gt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,me=!!ht.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),oe=!!ht.morphAttributes.position,Se=!!ht.morphAttributes.normal,Le=!!ht.morphAttributes.color,De=Hn;gt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(De=v.toneMapping);let dn=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,we=dn!==void 0?dn.length:0,ae=zt.get(gt),Xn=u.state.lights;if(Z===!0&&(nt===!0||L!==y)){let vn=L===y&&gt.id===_;Ct.setState(gt,L,vn)}let Te=!1;gt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Xn.state.version||ae.outputColorSpace!==ne||tt.isBatchedMesh&&ae.batching===!1||!tt.isBatchedMesh&&ae.batching===!0||tt.isBatchedMesh&&ae.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ae.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ae.instancing===!1||!tt.isInstancedMesh&&ae.instancing===!0||tt.isSkinnedMesh&&ae.skinning===!1||!tt.isSkinnedMesh&&ae.skinning===!0||tt.isInstancedMesh&&ae.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ae.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ae.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ae.instancingMorph===!1&&tt.morphTexture!==null||ae.envMap!==te||gt.fog===!0&&ae.fog!==Vt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ct.numPlanes||ae.numIntersection!==Ct.numIntersection)||ae.vertexAlphas!==fe||ae.vertexTangents!==me||ae.morphTargets!==oe||ae.morphNormals!==Se||ae.morphColors!==Le||ae.toneMapping!==De||ae.morphTargetsCount!==we)&&(Te=!0):(Te=!0,ae.__version=gt.version);let Tn=ae.currentProgram;Te===!0&&(Tn=Ft(gt,et,tt));let ki=!1,gn=!1,Ts=!1,Ue=Tn.getUniforms(),zn=ae.uniforms;if(Ot.useProgram(Tn.program)&&(ki=!0,gn=!0,Ts=!0),gt.id!==_&&(_=gt.id,gn=!0),ki||y!==L){Ot.buffers.depth.getReversed()?(J.copy(L.projectionMatrix),Cu(J),Iu(J),Ue.setValue(z,"projectionMatrix",J)):Ue.setValue(z,"projectionMatrix",L.projectionMatrix),Ue.setValue(z,"viewMatrix",L.matrixWorldInverse);let ri=Ue.map.cameraPosition;ri!==void 0&&ri.setValue(z,at.setFromMatrixPosition(L.matrixWorld)),bt.logarithmicDepthBuffer&&Ue.setValue(z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Ue.setValue(z,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,gn=!0,Ts=!0)}if(tt.isSkinnedMesh){Ue.setOptional(z,tt,"bindMatrix"),Ue.setOptional(z,tt,"bindMatrixInverse");let vn=tt.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ue.setValue(z,"boneTexture",vn.boneTexture,F))}tt.isBatchedMesh&&(Ue.setOptional(z,tt,"batchingTexture"),Ue.setValue(z,"batchingTexture",tt._matricesTexture,F),Ue.setOptional(z,tt,"batchingIdTexture"),Ue.setValue(z,"batchingIdTexture",tt._indirectTexture,F),Ue.setOptional(z,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ue.setValue(z,"batchingColorTexture",tt._colorsTexture,F));let As=ht.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Jt.update(tt,ht,Tn),(gn||ae.receiveShadow!==tt.receiveShadow)&&(ae.receiveShadow=tt.receiveShadow,Ue.setValue(z,"receiveShadow",tt.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(zn.envMap.value=te,zn.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&et.environment!==null&&(zn.envMapIntensity.value=et.environmentIntensity),gn&&(Ue.setValue(z,"toneMappingExposure",v.toneMappingExposure),ae.needsLights&&kt(zn,Ts),Vt&&gt.fog===!0&&rt.refreshFogUniforms(zn,Vt),rt.refreshMaterialUniforms(zn,gt,V,G,u.state.transmissionRenderTarget[L.id]),fs.upload(z,Ut(ae),zn,F)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(fs.upload(z,Ut(ae),zn,F),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Ue.setValue(z,"center",tt.center),Ue.setValue(z,"modelViewMatrix",tt.modelViewMatrix),Ue.setValue(z,"normalMatrix",tt.normalMatrix),Ue.setValue(z,"modelMatrix",tt.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){let vn=gt.uniformsGroups;for(let ri=0,oi=vn.length;ri<oi;ri++){let dc=vn[ri];st.update(dc,Tn),st.bind(dc,Tn)}}return Tn}function kt(L,et){L.ambientLightColor.needsUpdate=et,L.lightProbe.needsUpdate=et,L.directionalLights.needsUpdate=et,L.directionalLightShadows.needsUpdate=et,L.pointLights.needsUpdate=et,L.pointLightShadows.needsUpdate=et,L.spotLights.needsUpdate=et,L.spotLightShadows.needsUpdate=et,L.rectAreaLights.needsUpdate=et,L.hemisphereLights.needsUpdate=et}function Ee(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,et,ht){zt.get(L.texture).__webglTexture=et,zt.get(L.depthTexture).__webglTexture=ht;let gt=zt.get(L);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=ht===void 0,gt.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,et){let ht=zt.get(L);ht.__webglFramebuffer=et,ht.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(L,et=0,ht=0){C=L,R=et,T=ht;let gt=!0,tt=null,Vt=!1,Xt=!1;if(L){let te=zt.get(L);if(te.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(z.FRAMEBUFFER,null),gt=!1;else if(te.__webglFramebuffer===void 0)F.setupRenderTarget(L);else if(te.__hasExternalTextures)F.rebindTextures(L,zt.get(L.texture).__webglTexture,zt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let oe=L.depthTexture;if(te.__boundDepthTexture!==oe){if(oe!==null&&zt.has(oe)&&(L.width!==oe.image.width||L.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(L)}}let fe=L.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Xt=!0);let me=zt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(me[et])?tt=me[et][ht]:tt=me[et],Vt=!0):L.samples>0&&F.useMultisampledRTT(L)===!1?tt=zt.get(L).__webglMultisampledFramebuffer:Array.isArray(me)?tt=me[ht]:tt=me,E.copy(L.viewport),A.copy(L.scissor),b=L.scissorTest}else E.copy(P).multiplyScalar(V).floor(),A.copy(_t).multiplyScalar(V).floor(),b=Gt;if(Ot.bindFramebuffer(z.FRAMEBUFFER,tt)&&gt&&Ot.drawBuffers(L,tt),Ot.viewport(E),Ot.scissor(A),Ot.setScissorTest(b),Vt){let te=zt.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+et,te.__webglTexture,ht)}else if(Xt){let te=zt.get(L.texture),fe=et||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,te.__webglTexture,ht||0,fe)}_=-1},this.readRenderTargetPixels=function(L,et,ht,gt,tt,Vt,Xt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=zt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xt!==void 0&&(ne=ne[Xt]),ne){Ot.bindFramebuffer(z.FRAMEBUFFER,ne);try{let te=L.texture,fe=te.format,me=te.type;if(!bt.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=L.width-gt&&ht>=0&&ht<=L.height-tt&&z.readPixels(et,ht,gt,tt,ie.convert(fe),ie.convert(me),Vt)}finally{let te=C!==null?zt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(L,et,ht,gt,tt,Vt,Xt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=zt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xt!==void 0&&(ne=ne[Xt]),ne){let te=L.texture,fe=te.format,me=te.type;if(!bt.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(et>=0&&et<=L.width-gt&&ht>=0&&ht<=L.height-tt){Ot.bindFramebuffer(z.FRAMEBUFFER,ne);let oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.bufferData(z.PIXEL_PACK_BUFFER,Vt.byteLength,z.STREAM_READ),z.readPixels(et,ht,gt,tt,ie.convert(fe),ie.convert(me),0);let Se=C!==null?zt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(z.FRAMEBUFFER,Se);let Le=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ru(z,Le,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Vt),z.deleteBuffer(oe),z.deleteSync(Le),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,et=null,ht=0){L.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),et=arguments[0]||null,L=arguments[1]);let gt=Math.pow(2,-ht),tt=Math.floor(L.image.width*gt),Vt=Math.floor(L.image.height*gt),Xt=et!==null?et.x:0,ne=et!==null?et.y:0;F.setTexture2D(L,0),z.copyTexSubImage2D(z.TEXTURE_2D,ht,0,0,Xt,ne,tt,Vt),Ot.unbindTexture()},this.copyTextureToTexture=function(L,et,ht=null,gt=null,tt=0){L.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,L=arguments[1],et=arguments[2],tt=arguments[3]||0,ht=null);let Vt,Xt,ne,te,fe,me,oe,Se,Le,De=L.isCompressedTexture?L.mipmaps[tt]:L.image;ht!==null?(Vt=ht.max.x-ht.min.x,Xt=ht.max.y-ht.min.y,ne=ht.isBox3?ht.max.z-ht.min.z:1,te=ht.min.x,fe=ht.min.y,me=ht.isBox3?ht.min.z:0):(Vt=De.width,Xt=De.height,ne=De.depth||1,te=0,fe=0,me=0),gt!==null?(oe=gt.x,Se=gt.y,Le=gt.z):(oe=0,Se=0,Le=0);let dn=ie.convert(et.format),we=ie.convert(et.type),ae;et.isData3DTexture?(F.setTexture3D(et,0),ae=z.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(F.setTexture2DArray(et,0),ae=z.TEXTURE_2D_ARRAY):(F.setTexture2D(et,0),ae=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,et.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,et.unpackAlignment);let Xn=z.getParameter(z.UNPACK_ROW_LENGTH),Te=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Tn=z.getParameter(z.UNPACK_SKIP_PIXELS),ki=z.getParameter(z.UNPACK_SKIP_ROWS),gn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,fe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,me);let Ts=L.isDataArrayTexture||L.isData3DTexture,Ue=et.isDataArrayTexture||et.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let zn=zt.get(L),As=zt.get(et),vn=zt.get(zn.__renderTarget),ri=zt.get(As.__renderTarget);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<ne;oi++)Ts&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(L).__webglTexture,tt,me+oi),L.isDepthTexture?(Ue&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(et).__webglTexture,tt,Le+oi),z.blitFramebuffer(te,fe,Vt,Xt,oe,Se,Vt,Xt,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ue?z.copyTexSubImage3D(ae,tt,oe,Se,Le+oi,te,fe,Vt,Xt):z.copyTexSubImage2D(ae,tt,oe,Se,Le+oi,te,fe,Vt,Xt);Ot.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ue?L.isDataTexture||L.isData3DTexture?z.texSubImage3D(ae,tt,oe,Se,Le,Vt,Xt,ne,dn,we,De.data):et.isCompressedArrayTexture?z.compressedTexSubImage3D(ae,tt,oe,Se,Le,Vt,Xt,ne,dn,De.data):z.texSubImage3D(ae,tt,oe,Se,Le,Vt,Xt,ne,dn,we,De):L.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,tt,oe,Se,Vt,Xt,dn,we,De.data):L.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,tt,oe,Se,De.width,De.height,dn,De.data):z.texSubImage2D(z.TEXTURE_2D,tt,oe,Se,Vt,Xt,dn,we,De);z.pixelStorei(z.UNPACK_ROW_LENGTH,Xn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Tn),z.pixelStorei(z.UNPACK_SKIP_ROWS,ki),z.pixelStorei(z.UNPACK_SKIP_IMAGES,gn),tt===0&&et.generateMipmaps&&z.generateMipmap(ae),Ot.unbindTexture()},this.copyTextureToTexture3D=function(L,et,ht=null,gt=null,tt=0){return L.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ht=arguments[0]||null,gt=arguments[1]||null,L=arguments[2],et=arguments[3],tt=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,et,ht,gt,tt)},this.initRenderTarget=function(L){zt.get(L).__webglFramebuffer===void 0&&F.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?F.setTextureCube(L,0):L.isData3DTexture?F.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?F.setTexture2DArray(L,0):F.setTexture2D(L,0),Ot.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,Ot.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var ho=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fo=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},uo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=al,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new k,$s=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zs=class extends si{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},es,Ls=new k,ns=new k,is=new k,ss=new Bt,Ds=new Bt,Kh=new ve,Ur=new k,Us=new k,Nr=new k,ph=new Bt,ga=new Bt,mh=new Bt,po=class extends Ce{constructor(t=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uo(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new $s(n,3,0,!1)),es.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=es,this.material=t,this.center=new Bt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Kh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fr(Ur.set(-.5,-.5,0),is,o,ns,s,r),Fr(Us.set(.5,-.5,0),is,o,ns,s,r),Fr(Nr.set(.5,.5,0),is,o,ns,s,r),ph.set(0,0),ga.set(1,0),mh.set(1,1);let a=t.ray.intersectTriangle(Ur,Us,Nr,!1,Ls);if(a===null&&(Fr(Us.set(-.5,.5,0),is,o,ns,s,r),ga.set(0,1),a=t.ray.intersectTriangle(Ur,Nr,Us,!1,Ls),a===null))return;let l=t.ray.origin.distanceTo(Ls);l<t.near||l>t.far||e.push({distance:l,point:Ls.clone(),uv:pi.getInterpolation(Ls,Ur,Us,Nr,ph,ga,mh,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fr(i,t,e,n,s,r){ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ds.x=r*ss.x-s*ss.y,Ds.y=s*ss.x+r*ss.y):Ds.copy(ss),i.copy(t),i.x+=Ds.x,i.y+=Ds.y,i.applyMatrix4(Kh)}var Js=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=fn,h=fn,m,d){super(null,o,a,l,c,h,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ks=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rs=new ve,gh=new ve,zr=[],xh=new ii,Sg=new ve,Ns=new Pe,Fs=new _i,Ye=class extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),xh.copy(t.boundingBox).applyMatrix4(rs),this.boundingBox.union(xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rs),Fs.copy(t.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rs),gh.multiplyMatrices(n,rs),Ns.matrixWorld=gh,Ns.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let l=zr[o];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Js(new Float32Array(s*this.count),s,this.count,Zl,kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ni=class extends si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},mo=new k,go=new k,yh=new ve,zs=new to,Or=new _i,xa=new k,_h=new k,El=class extends Ce{constructor(t=new Ie,e=new Ni){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)mo.fromBufferAttribute(e,s-1),go.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;yh.copy(s).invert(),zs.copy(t.ray).applyMatrix4(yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let M=f,p=g-1;M<p;M+=c){let u=h.getX(M),w=h.getX(M+1),x=Br(this,t,zs,l,u,w);x&&e.push(x)}if(this.isLineLoop){let M=h.getX(g-1),p=h.getX(f),u=Br(this,t,zs,l,M,p);u&&e.push(u)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let M=f,p=g-1;M<p;M+=c){let u=Br(this,t,zs,l,M,M+1);u&&e.push(u)}if(this.isLineLoop){let M=Br(this,t,zs,l,g-1,f);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Br(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(mo.fromBufferAttribute(o,s),go.fromBufferAttribute(o,r),e.distanceSqToSegment(mo,go,xa,_h)>n)return;xa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(xa);if(!(l<t.near||l>t.far))return{distance:l,point:_h.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var vh=new k,Mh=new k,ys=class extends El{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vh.distanceTo(Mh);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends pn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Bt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new k,s=[],r=[],o=[],a=new k,l=new ve;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(en(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(en(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*m+this.aX,c=d*m+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wl=class extends js{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,m){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+m)+(l-a)/m;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var kr=new k,ya=new nc,_a=new nc,va=new nc,Qs=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),c=kr);let m=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(m),f),M=Math.pow(m.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),ya.initNonuniformCatmullRom(c.x,m.x,d.x,h.x,g,M,p),_a.initNonuniformCatmullRom(c.y,m.y,d.y,h.y,g,M,p),va.initNonuniformCatmullRom(c.z,m.z,d.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,m.x,d.x,h.x,this.tension),_a.initCatmullRom(c.y,m.y,d.y,h.y,this.tension),va.initCatmullRom(c.z,m.z,d.z,h.z,this.tension));return n.set(ya.calc(l),_a.calc(l),va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Eg(i,t){let e=1-i;return e*e*t}function wg(i,t){return 2*(1-i)*i*t}function Tg(i,t){return i*i*t}function Gs(i,t,e,n){return Eg(i,t)+wg(i,e)+Tg(i,n)}function Ag(i,t){let e=1-i;return e*e*e*t}function Rg(i,t){let e=1-i;return 3*e*e*i*t}function Cg(i,t){return 3*(1-i)*i*i*t}function Ig(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return Ag(i,t)+Rg(i,e)+Cg(i,n)+Ig(i,s)}var xo=class extends Sn{constructor(t=new Bt,e=new Bt,n=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tl=class extends Sn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(t,s.x,r.x,o.x,a.x),Ws(t,s.y,r.y,o.y,a.y),Ws(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends Sn{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Al=class extends Sn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Sn{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Sn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(bh(a,l.x,c.x,h.x,m.x),bh(a,l.y,c.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},bo=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Qs,CubicBezierCurve:xo,CubicBezierCurve3:Tl,EllipseCurve:js,LineCurve:yo,LineCurve3:Al,QuadraticBezierCurve:_o,QuadraticBezierCurve3:vo,SplineCurve:Mo}),Rl=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new bo[s.type]().fromJSON(s))}return this}},tr=class extends Rl{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new yo(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new _o(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new xo(this.currentPoint.clone(),new Bt(t,e),new Bt(n,s),new Bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Mo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new js(t,e,n,s,r,o,a,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},er=class i extends Ie{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=en(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,m=new k,d=new Bt,f=new k,g=new k,M=new k,p=0,u=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:p=t[w+1].x-t[w].x,u=t[w+1].y-t[w].y,f.x=u*1,f.y=-p,f.z=u*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:p=t[w+1].x-t[w].x,u=t[w+1].y-t[w].y,f.x=u*1,f.y=-p,f.z=u*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(g)}for(let w=0;w<=e;w++){let x=n+w*h*s,v=Math.sin(x),B=Math.cos(x);for(let R=0;R<=t.length-1;R++){m.x=t[R].x*v,m.y=t[R].y,m.z=t[R].x*B,o.push(m.x,m.y,m.z),d.x=w/e,d.y=R/(t.length-1),a.push(d.x,d.y);let T=l[3*R+0]*v,C=l[3*R+1],_=l[3*R+0]*B;c.push(T,C,_)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){let v=x+w*t.length,B=v,R=v+t.length,T=v+t.length+1,C=v+1;r.push(B,R,C),r.push(T,C,R)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ln=class i extends er{constructor(t=1,e=1,n=4,s=8){let r=new tr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var le=class i extends Ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],d=[],f=[],g=0,M=[],p=n/2,u=0;w(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function w(){let v=new k,B=new k,R=0,T=(e-t)/n;for(let C=0;C<=r;C++){let _=[],y=C/r,E=y*(e-t)+t;for(let A=0;A<=s;A++){let b=A/s,D=b*l+a,O=Math.sin(D),U=Math.cos(D);B.x=E*O,B.y=-y*n+p,B.z=E*U,m.push(B.x,B.y,B.z),v.set(O,T,U).normalize(),d.push(v.x,v.y,v.z),f.push(b,1-y),_.push(g++)}M.push(_)}for(let C=0;C<s;C++)for(let _=0;_<r;_++){let y=M[_][C],E=M[_+1][C],A=M[_+1][C+1],b=M[_][C+1];(t>0||_!==0)&&(h.push(y,E,b),R+=3),(e>0||_!==r-1)&&(h.push(E,A,b),R+=3)}c.addGroup(u,R,0),u+=R}function x(v){let B=g,R=new Bt,T=new k,C=0,_=v===!0?t:e,y=v===!0?1:-1;for(let A=1;A<=s;A++)m.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;let E=g;for(let A=0;A<=s;A++){let D=A/s*l+a,O=Math.cos(D),U=Math.sin(D);T.x=_*U,T.y=p*y,T.z=_*O,m.push(T.x,T.y,T.z),d.push(0,y,0),R.x=O*.5+.5,R.y=U*.5*y+.5,f.push(R.x,R.y),g++}for(let A=0;A<s;A++){let b=B+A,D=E+A;v===!0?h.push(D,D+1,b):h.push(D+1,D,b),C+=3}c.addGroup(u,C,v===!0?1:2),u+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ke=class i extends le{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cl=class i extends Ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let x=new k,v=new k,B=new k;for(let R=0;R<e.length;R+=3)f(e[R+0],x),f(e[R+1],v),f(e[R+2],B),l(x,v,B,w)}function l(w,x,v,B){let R=B+1,T=[];for(let C=0;C<=R;C++){T[C]=[];let _=w.clone().lerp(v,C/R),y=x.clone().lerp(v,C/R),E=R-C;for(let A=0;A<=E;A++)A===0&&C===R?T[C][A]=_:T[C][A]=_.clone().lerp(y,A/E)}for(let C=0;C<R;C++)for(let _=0;_<2*(R-C)-1;_++){let y=Math.floor(_/2);_%2===0?(d(T[C][y+1]),d(T[C+1][y]),d(T[C][y])):(d(T[C][y+1]),d(T[C+1][y+1]),d(T[C+1][y]))}}function c(w){let x=new k;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(w),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){let w=new k;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];let v=p(w)/2/Math.PI+.5,B=u(w)/Math.PI+.5;o.push(v,1-B)}g(),m()}function m(){for(let w=0;w<o.length;w+=6){let x=o[w+0],v=o[w+2],B=o[w+4],R=Math.max(x,v,B),T=Math.min(x,v,B);R>.9&&T<.1&&(x<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),B<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,x){let v=w*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){let w=new k,x=new k,v=new k,B=new k,R=new Bt,T=new Bt,C=new Bt;for(let _=0,y=0;_<r.length;_+=9,y+=6){w.set(r[_+0],r[_+1],r[_+2]),x.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),R.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),B.copy(w).add(x).add(v).divideScalar(3);let E=p(B);M(R,y+0,w,E),M(T,y+2,x,E),M(C,y+4,v,E)}}function M(w,x,v,B){B<0&&w.x===1&&(o[x]=w.x-1),v.x===0&&v.z===0&&(o[x]=B/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Fi=class extends tr{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new tr().fromJSON(s))}return this}},Pg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=jh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,m,d,f;if(n&&(r=Fg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)m=i[g],d=i[g+1],m<a&&(a=m),d<l&&(l=d),m>c&&(c=m),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return nr(r,o,e,a,l,f,0),o}};function jh(i,t,e,n,s){let r,o;if(s===Yg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Sh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Sh(r,i[r],i[r+1],o);return o&&No(o,o.next)&&(sr(o),o=o.next),o}function zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(No(e,e.next)||Be(e.prev,e,e.next)===0)){if(sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function nr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Dg(i,n,s,r):Lg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),sr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ug(zi(i),t,e),nr(i,t,e,n,s,r,2)):o===2&&Ng(i,t,e,n,s,r):nr(zi(i),t,e,n,s,r,1);break}}}function Lg(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,m=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=m&&g.y<=f&&as(s,a,r,l,o,c,g.x,g.y)&&Be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Be(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,m=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<m?h<d?h:d:m<d?m:d,M=a>l?a>c?a:c:l>c?l:c,p=h>m?h>d?h:d:m>d?m:d,u=Il(f,g,t,e,n),w=Il(M,p,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=u&&v&&v.z<=w;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&as(a,h,l,m,c,d,x.x,x.y)&&Be(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&as(a,h,l,m,c,d,v.x,v.y)&&Be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=u;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&as(a,h,l,m,c,d,x.x,x.y)&&Be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&as(a,h,l,m,c,d,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ug(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!No(s,r)&&Qh(s,n,n.next,r)&&ir(s,r)&&ir(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),sr(n),sr(n.next),n=i=r),n=n.next}while(n!==i);return zi(n)}function Ng(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wg(o,a)){let l=tf(o,a);o=zi(o,o.next),l=zi(l,l.next),nr(o,t,e,n,s,r,0),nr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fg(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=jh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Gg(c));for(s.sort(zg),r=0;r<s.length;r++)e=Og(s[r],e);return e}function zg(i,t){return i.x-t.x}function Og(i,t){let e=Bg(i,t);if(!e)return t;let n=tf(e,i);return zi(n,n.next),zi(e,e.next)}function Bg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,m;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&as(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(m=Math.abs(o-e.y)/(r-e.x),ir(e,i)&&(m<h||m===h&&(e.x>s.x||e.x===s.x&&kg(s,e)))&&(s=e,h=m)),e=e.next;while(e!==a);return s}function kg(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function Hg(i,t,e,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vg(s)}function Vg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function as(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xg(i,t)&&(ir(i,t)&&ir(t,i)&&qg(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||No(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function No(i,t){return i.x===t.x&&i.y===t.y}function Qh(i,t,e,n){let s=Vr(Be(i,t,e)),r=Vr(Be(i,t,n)),o=Vr(Be(e,n,i)),a=Vr(Be(e,n,t));return!!(s!==r&&o!==a||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||o===0&&Hr(e,i,n)||a===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vr(i){return i>0?1:i<0?-1:0}function Xg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ir(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function qg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tf(i,t){let e=new Pl(i.i,i.x,i.y),n=new Pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sh(i,t,e,n){let s=new Pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eh(t),wh(n,t);let o=t.length;e.forEach(Eh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wh(n,e[l]);let a=Pg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Eh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var So=class i extends Ie{constructor(t=new Fi([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:$g,x,v=!1,B,R,T,C;u&&(x=u.getSpacedPoints(h),v=!0,d=!1,B=u.computeFrenetFrames(h,!1),R=new k,T=new k,C=new k),d||(p=0,f=0,g=0,M=0);let _=a.extractPoints(c),y=_.shape,E=_.holes;if(!gi.isClockWise(y)){y=y.reverse();for(let H=0,q=E.length;H<q;H++){let z=E[H];gi.isClockWise(z)&&(E[H]=z.reverse())}}let b=gi.triangulateShape(y,E),D=y;for(let H=0,q=E.length;H<q;H++){let z=E[H];y=y.concat(z)}function O(H,q,z){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(q,z)}let U=y.length,G=b.length;function V(H,q,z){let Lt,xt,bt,Ot=H.x-q.x,$=H.y-q.y,zt=z.x-H.x,F=z.y-H.y,I=Ot*Ot+$*$,ft=Ot*F-$*zt;if(Math.abs(ft)>Number.EPSILON){let Rt=Math.sqrt(I),Pt=Math.sqrt(zt*zt+F*F),Y=q.x-$/Rt,ct=q.y+Ot/Rt,rt=z.x-F/Pt,vt=z.y+zt/Pt,Et=((rt-Y)*F-(vt-ct)*zt)/(Ot*F-$*zt);Lt=Y+Ot*Et-H.x,xt=ct+$*Et-H.y;let Ct=Lt*Lt+xt*xt;if(Ct<=2)return new Bt(Lt,xt);bt=Math.sqrt(Ct/2)}else{let Rt=!1;Ot>Number.EPSILON?zt>Number.EPSILON&&(Rt=!0):Ot<-Number.EPSILON?zt<-Number.EPSILON&&(Rt=!0):Math.sign($)===Math.sign(F)&&(Rt=!0),Rt?(Lt=-$,xt=Ot,bt=Math.sqrt(I)):(Lt=Ot,xt=$,bt=Math.sqrt(I/2))}return new Bt(Lt/bt,xt/bt)}let ut=[];for(let H=0,q=D.length,z=q-1,Lt=H+1;H<q;H++,z++,Lt++)z===q&&(z=0),Lt===q&&(Lt=0),ut[H]=V(D[H],D[z],D[Lt]);let mt=[],P,_t=ut.concat();for(let H=0,q=E.length;H<q;H++){let z=E[H];P=[];for(let Lt=0,xt=z.length,bt=xt-1,Ot=Lt+1;Lt<xt;Lt++,bt++,Ot++)bt===xt&&(bt=0),Ot===xt&&(Ot=0),P[Lt]=V(z[Lt],z[bt],z[Ot]);mt.push(P),_t=_t.concat(P)}for(let H=0;H<p;H++){let q=H/p,z=f*Math.cos(q*Math.PI/2),Lt=g*Math.sin(q*Math.PI/2)+M;for(let xt=0,bt=D.length;xt<bt;xt++){let Ot=O(D[xt],ut[xt],Lt);J(Ot.x,Ot.y,-z)}for(let xt=0,bt=E.length;xt<bt;xt++){let Ot=E[xt];P=mt[xt];for(let $=0,zt=Ot.length;$<zt;$++){let F=O(Ot[$],P[$],Lt);J(F.x,F.y,-z)}}}let Gt=g+M;for(let H=0;H<U;H++){let q=d?O(y[H],_t[H],Gt):y[H];v?(T.copy(B.normals[0]).multiplyScalar(q.x),R.copy(B.binormals[0]).multiplyScalar(q.y),C.copy(x[0]).add(T).add(R),J(C.x,C.y,C.z)):J(q.x,q.y,0)}for(let H=1;H<=h;H++)for(let q=0;q<U;q++){let z=d?O(y[q],_t[q],Gt):y[q];v?(T.copy(B.normals[H]).multiplyScalar(z.x),R.copy(B.binormals[H]).multiplyScalar(z.y),C.copy(x[H]).add(T).add(R),J(C.x,C.y,C.z)):J(z.x,z.y,m/h*H)}for(let H=p-1;H>=0;H--){let q=H/p,z=f*Math.cos(q*Math.PI/2),Lt=g*Math.sin(q*Math.PI/2)+M;for(let xt=0,bt=D.length;xt<bt;xt++){let Ot=O(D[xt],ut[xt],Lt);J(Ot.x,Ot.y,m+z)}for(let xt=0,bt=E.length;xt<bt;xt++){let Ot=E[xt];P=mt[xt];for(let $=0,zt=Ot.length;$<zt;$++){let F=O(Ot[$],P[$],Lt);v?J(F.x,F.y+x[h-1].y,x[h-1].x+z):J(F.x,F.y,m+z)}}}N(),Z();function N(){let H=s.length/3;if(d){let q=0,z=U*q;for(let Lt=0;Lt<G;Lt++){let xt=b[Lt];lt(xt[2]+z,xt[1]+z,xt[0]+z)}q=h+p*2,z=U*q;for(let Lt=0;Lt<G;Lt++){let xt=b[Lt];lt(xt[0]+z,xt[1]+z,xt[2]+z)}}else{for(let q=0;q<G;q++){let z=b[q];lt(z[2],z[1],z[0])}for(let q=0;q<G;q++){let z=b[q];lt(z[0]+U*h,z[1]+U*h,z[2]+U*h)}}n.addGroup(H,s.length/3-H,0)}function Z(){let H=s.length/3,q=0;nt(D,q),q+=D.length;for(let z=0,Lt=E.length;z<Lt;z++){let xt=E[z];nt(xt,q),q+=xt.length}n.addGroup(H,s.length/3-H,1)}function nt(H,q){let z=H.length;for(;--z>=0;){let Lt=z,xt=z-1;xt<0&&(xt=H.length-1);for(let bt=0,Ot=h+p*2;bt<Ot;bt++){let $=U*bt,zt=U*(bt+1),F=q+Lt+$,I=q+xt+$,ft=q+xt+zt,Rt=q+Lt+zt;at(F,I,ft,Rt)}}}function J(H,q,z){l.push(H),l.push(q),l.push(z)}function lt(H,q,z){Tt(H),Tt(q),Tt(z);let Lt=s.length/3,xt=w.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);dt(xt[0]),dt(xt[1]),dt(xt[2])}function at(H,q,z,Lt){Tt(H),Tt(q),Tt(Lt),Tt(q),Tt(z),Tt(Lt);let xt=s.length/3,bt=w.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);dt(bt[0]),dt(bt[1]),dt(bt[3]),dt(bt[1]),dt(bt[2]),dt(bt[3])}function Tt(H){s.push(l[H*3+0]),s.push(l[H*3+1]),s.push(l[H*3+2])}function dt(H){r.push(H.x),r.push(H.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bo[s.type]().fromJSON(s)),new i(n,t.options)}},$g={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Bt(r,o),new Bt(a,l),new Bt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],m=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Bt(o,1-l),new Bt(c,1-m),new Bt(d,1-g),new Bt(M,1-u)]:[new Bt(a,1-l),new Bt(h,1-m),new Bt(f,1-g),new Bt(p,1-u)]}};function Zg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $e=class i extends Cl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Eo=class i extends Ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],m=t,d=(e-t)/s,f=new k,g=new Bt;for(let M=0;M<=s;M++){for(let p=0;p<=n;p++){let u=r+p/n*o;f.x=m*Math.cos(u),f.y=m*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}m+=d}for(let M=0;M<s;M++){let p=M*(n+1);for(let u=0;u<n;u++){let w=u+p,x=w,v=w+n+1,B=w+n+2,R=w+1;a.push(x,v,R),a.push(v,B,R)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},wo=class i extends Ie{constructor(t=new Fi([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(o,2));function c(h){let m=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,u=g.length;p<u;p++){let w=g[p];gi.isClockWise(w)===!0&&(g[p]=w.reverse())}let M=gi.triangulateShape(f,g);for(let p=0,u=g.length;p<u;p++){let w=g[p];f=f.concat(w)}for(let p=0,u=f.length;p<u;p++){let w=f[p];s.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let p=0,u=M.length;p<u;p++){let w=M[p],x=w[0]+m,v=w[1]+m,B=w[2]+m;n.push(x,v,B),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Jg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Jg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pe=class i extends Ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],m=new k,d=new k,f=[],g=[],M=[],p=[];for(let u=0;u<=n;u++){let w=[],x=u/n,v=0;u===0&&o===0?v=.5/e:u===n&&l===Math.PI&&(v=-.5/e);for(let B=0;B<=e;B++){let R=B/e;m.x=-t*Math.cos(s+R*r)*Math.sin(o+x*a),m.y=t*Math.cos(o+x*a),m.z=t*Math.sin(s+R*r)*Math.sin(o+x*a),g.push(m.x,m.y,m.z),d.copy(m).normalize(),M.push(d.x,d.y,d.z),p.push(R+v,1-x),w.push(c++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){let x=h[u][w+1],v=h[u][w],B=h[u+1][w],R=h[u+1][w+1];(u!==0||o>0)&&f.push(x,v,R),(u!==n-1||l<Math.PI)&&f.push(v,B,R)}this.setIndex(f),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(M,3)),this.setAttribute("uv",new ue(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ge=class i extends Ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new k,m=new k,d=new k;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let M=g/s*r,p=f/n*Math.PI*2;m.x=(t+e*Math.cos(p))*Math.cos(M),m.y=(t+e*Math.cos(p))*Math.sin(M),m.z=e*Math.sin(p),a.push(m.x,m.y,m.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(m,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let M=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(M,p,w),o.push(p,u,w)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var To=class i extends Ie{constructor(t=new vo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new Bt,h=new k,m=[],d=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function M(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),w(),u()}function p(x){h=t.getPointAt(x/e,h);let v=o.normals[x],B=o.binormals[x];for(let R=0;R<=s;R++){let T=R/s*Math.PI*2,C=Math.sin(T),_=-Math.cos(T);l.x=_*v.x+C*B.x,l.y=_*v.y+C*B.y,l.z=_*v.z+C*B.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,m.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){let B=(s+1)*(x-1)+(v-1),R=(s+1)*x+(v-1),T=(s+1)*x+v,C=(s+1)*(x-1)+v;g.push(B,R,C),g.push(R,T,C)}}function w(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new bo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ao=class extends si{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Gr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Kg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ll=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:r=t,a=2*e-n;break;case vc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:o=t,l=2*n-e;break;case vc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,p=M*g,u=-d*p+2*d*M-d*g,w=(1+d)*p+(-1.5-2*d)*M+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*M+.5*g,v=f*p-f*M;for(let B=0;B!==a;++B)r[B]=u*o[h+B]+w*o[c+B]+x*o[l+B]+v*o[m+B];return r}},Dl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),m=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*m+o[l+d]*h;return r}},Ul=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gr(e,this.TimeBufferType),this.values=Gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gr(t.times,Array),values:Gr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zr:e=this.InterpolantFactoryMethodDiscrete;break;case ol:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Kg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let m=a*n,d=m-n,f=m+n;for(let g=0;g!==n;++g){let M=e[m+g];if(M!==e[d+g]||M!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let m=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[m+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ol;var Oi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Zr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nl=class extends Dn{};Nl.prototype.ValueTypeName="color";var Fl=class extends Dn{};Fl.prototype.ValueTypeName="number";var zl=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ro=class extends Dn{InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Zr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends Dn{};Ol.prototype.ValueTypeName="vector";var Bl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,d=c.length;m<d;m+=2){let f=c[m],g=c[m+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},jg=new Bl,kl=class{constructor(t){this.manager=t!==void 0?t:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Co=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Io=class extends Co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ma=new ve,Th=new k,Ah=new k,Hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vl=class extends Hl{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends Co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ic="\\[\\]\\.:\\/",Qg=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",tx="[^"+ic.replace("\\.","")+"]",ex=/((?:WC+[\/:])*)/.source.replace("WC",sc),nx=/(WCOD+)?/.source.replace("WCOD",tx),ix=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),rx=new RegExp("^"+ex+nx+ix+sx+"$"),ox=["material","materials","bones","map"],Gl=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(t){let e=rx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ox.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Gl;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ex=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);var ax=2.3,Fe=7.2,Fo=.16,vi=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function ef(i,t,e){let n=i.points,s=n.length-1,r=i.lengthM/s,o=N=>{let Z=Math.max(0,Math.min(s,N/r)),nt=Math.min(s-1,Math.floor(Z)),J=Z-nt,lt=n[Math.max(0,nt-1)],at=n[nt],Tt=n[nt+1],dt=n[Math.min(s,nt+2)],H=q=>.5*(2*at[q]+(-lt[q]+Tt[q])*J+(2*lt[q]-5*at[q]+4*Tt[q]-dt[q])*J*J+(-lt[q]+3*at[q]-3*Tt[q]+dt[q])*J*J*J);return[H(0),H(2),at[1]+(Tt[1]-at[1])*J]},a=N=>{if(N<=i.lengthM)return o(N);let Z=o(i.lengthM-20),nt=o(i.lengthM),J=(N-i.lengthM)/20;return[nt[0]+(nt[0]-Z[0])*J,nt[1]+(nt[1]-Z[1])*J,nt[2]]},l=2700,c=2585,h=i.overlaps.filter(([N,Z])=>Z>N).sort((N,Z)=>N[1]-Z[1]),m=N=>{for(let J=0;J<h.length-1;J++){let[lt,at]=h[J],[Tt,dt]=h[J+1];if(N<=dt)return lt+(N-at)*(Tt-lt)/(dt-at)}let[Z,nt]=h.at(-1);return Z+(N-nt)},d=[];for(let N=0;N<=l;N+=2)d.push([N,...o(N)]);let f=2600,g=4900,M=[];for(let N=f;N<=g;N+=10){let Z=o(N),nt=m(N),J=nt,lt=1e9;for(let at of d){if(Math.abs(at[0]-nt)>60)continue;let Tt=(at[1]-Z[0])**2+(at[2]-Z[1])**2;Tt<lt&&(lt=Tt,J=at[0])}M.push(J)}let p=M.map((N,Z)=>{let nt=0,J=0;for(let lt=-3;lt<=3;lt++){let at=Z+lt;at>=0&&at<M.length&&(nt+=M[at],J++)}return nt/J});for(let N=1;N<p.length;N++)p[N]=Math.max(p[N],p[N-1]+.5);let u=N=>{let Z=(N-f)/10,nt=Math.max(0,Math.min(p.length-2,Math.floor(Z))),J=Z-nt;return p[nt]+(p[nt+1]-p[nt])*J},w={};function x(N){for(let Z of Object.keys(w))delete w[Z];for(let Z of N?.runners||[])!Z.diversions||!Z.diversions.length||(w[Z.id]=Z.diversions.map(nt=>{let J=nt.path,lt=[0];for(let at=1;at<J.length;at++)lt.push(lt[at-1]+Math.hypot(J[at][0]-J[at-1][0],J[at][1]-J[at-1][1]));return{...nt,cum:lt,len:lt.at(-1)}}))}x(e);let v=(N,Z)=>{let nt=Math.max(0,Math.min(1,(Z-N.fromM)/(N.toM-N.fromM)))*N.len,J=0;for(;J<N.cum.length-2&&N.cum[J+1]<nt;)J++;let lt=(nt-N.cum[J])/Math.max(1e-6,N.cum[J+1]-N.cum[J]);return[N.path[J][0]+(N.path[J+1][0]-N.path[J][0])*lt,N.path[J][1]+(N.path[J+1][1]-N.path[J][1])*lt]};function B(N){if(N<f-60){let lt=a(N);return[lt[0],lt[1]]}let Z=a(N);if(N>=g+40)return[Z[0],Z[1]];let nt=vi(f-60,f+60,N)*(1-vi(g-60,g,N));if(nt<=0)return[Z[0],Z[1]];let J=o(Math.min(l,u(Math.max(f,Math.min(g,N)))));return[Z[0]+(J[0]-Z[0])*nt,Z[1]+(J[1]-Z[1])*nt]}function R(N,Z){let nt=B(N),J=Z&&w[Z];if(J){for(let lt of J)if(N>lt.fromM&&N<lt.toM){let at=vi(lt.fromM,lt.fromM+30,N)*(1-vi(lt.toM-30,lt.toM,N)),Tt=v(lt,N);return nt=[nt[0]+(Tt[0]-nt[0])*at,nt[1]+(Tt[1]-nt[1])*at],{x:nt[0],z:nt[1],div:at,divInfo:lt}}}return{x:nt[0],z:nt[1],div:0,divInfo:null}}let[T,C,_,y]=t.bounds,E={x0:T-60,z0:C-60,cell:5};E.nx=Math.ceil((_+60-E.x0)/E.cell)+1,E.nz=Math.ceil((y+60-E.z0)/E.cell)+1,E.h=new Float32Array(E.nx*E.nz);let A=[];for(let N=0;N<=s;N+=2)A.push(n[N]);let b=0;for(let N of A)b+=N[1];b/=A.length;let D=(N,Z)=>Math.sin(N*.011+1.3)*Math.cos(Z*.009-.4)*2.2+Math.sin(N*.027+Z*.019)*.9;for(let N=0;N<E.nz;N++)for(let Z=0;Z<E.nx;Z++){let nt=E.x0+Z*E.cell,J=E.z0+N*E.cell,lt=0,at=0,Tt=1e9;for(let q of A){let z=(q[0]-nt)**2+(q[2]-J)**2;z<Tt&&(Tt=z);let Lt=1/(z+400),xt=Lt*Lt;lt+=xt,at+=xt*q[1]}let dt=vi(30,160,Math.sqrt(Tt)),H=at/lt*(1-dt*.4)+b*dt*.4+D(nt,J)*dt;E.h[N*E.nx+Z]=H*ax}let O=t.features.filter(N=>N.closed&&["water","track","tennis","pitch"].includes(N.kind)&&N.pts.length>3);for(let N of O){let Z=En(N.pts),nt=[];for(let at=Math.max(0,Math.floor((Z[1]-12-E.z0)/E.cell));at<=Math.min(E.nz-1,Math.ceil((Z[3]+12-E.z0)/E.cell));at++)for(let Tt=Math.max(0,Math.floor((Z[0]-12-E.x0)/E.cell));Tt<=Math.min(E.nx-1,Math.ceil((Z[2]+12-E.x0)/E.cell));Tt++){let dt=E.x0+Tt*E.cell,H=E.z0+at*E.cell,q=or(N.pts,dt,H);q<12&&nt.push([at*E.nx+Tt,q])}let J=0,lt=0;for(let[at,Tt]of nt)Tt<0&&(J+=E.h[at],lt++);if(lt){J/=lt,N.kind==="water"&&(J=Math.min(...nt.filter(at=>at[1]<0).map(at=>E.h[at[0]]))-.2),N._level=J;for(let[at,Tt]of nt){let dt=1-vi(0,12,Tt);E.h[at]=E.h[at]*(1-dt)+J*dt-(N.kind==="water"?1.6*(1-vi(-6,0,Tt)):0)}}}{for(let H=0;H<3;H++){let q=new Float32Array(E.h);for(let z=1;z<E.nz-1;z++)for(let Lt=1;Lt<E.nx-1;Lt++){let xt=z*E.nx+Lt;q[xt]=(E.h[xt]*4+E.h[xt-1]+E.h[xt+1]+E.h[xt-E.nx]+E.h[xt+E.nx])/8}E.h.set(q)}let N=new Float32Array(E.nx*E.nz).fill(1e9),Z=new Float32Array(E.nx*E.nz),nt=new Float32Array(E.nx*E.nz),J=(H,q)=>E.h[q*E.nx+H],lt=(H,q)=>{let z=Math.round((H-E.x0)/E.cell),Lt=Math.round((q-E.z0)/E.cell);return J(Math.max(0,Math.min(E.nx-1,z)),Math.max(0,Math.min(E.nz-1,Lt)))},at=[[0,c],[2540,2690],[g-80,i.lengthM+45]],Tt=[];for(let[H,q]of at)for(let z=H;z<=q;z+=2){let Lt=B(z);Tt.push([Lt[0],Lt[1],lt(Lt[0],Lt[1])])}for(let H=0;H<4;H++)for(let q=1;q<Tt.length-1;q++)Tt[q][2]=(Tt[q-1][2]+Tt[q][2]*2+Tt[q+1][2])/4;let dt=Fe/2+7;for(let[H,q,z]of Tt){let Lt=Math.floor((H-dt-E.x0)/E.cell),xt=Math.ceil((H+dt-E.x0)/E.cell),bt=Math.floor((q-dt-E.z0)/E.cell),Ot=Math.ceil((q+dt-E.z0)/E.cell);for(let $=Math.max(0,bt);$<=Math.min(E.nz-1,Ot);$++)for(let zt=Math.max(0,Lt);zt<=Math.min(E.nx-1,xt);zt++){let F=Math.hypot(E.x0+zt*E.cell-H,E.z0+$*E.cell-q);if(F>dt)continue;let I=$*E.nx+zt,ft=(1-F/dt)**2;Z[I]+=ft,nt[I]+=ft*z,F<N[I]&&(N[I]=F)}}for(let H=0;H<N.length;H++)if(N[H]<dt&&Z[H]>0){let q=1-vi(Fe/2+.5,dt,N[H]);E.h[H]=E.h[H]*(1-q)+nt[H]/Z[H]*q}E.pathSamples=Tt}let U=O.filter(N=>N.kind==="water").sort((N,Z)=>Z.pts.length-N.pts.length)[0];function G(N,Z){let nt=(N-E.x0)/E.cell,J=(Z-E.z0)/E.cell,lt=Math.max(0,Math.min(E.nx-2,Math.floor(nt))),at=Math.max(0,Math.min(E.nz-2,Math.floor(J))),Tt=Math.max(0,Math.min(1,nt-lt)),dt=Math.max(0,Math.min(1,J-at)),H=E.h[at*E.nx+lt],q=E.h[at*E.nx+lt+1],z=E.h[(at+1)*E.nx+lt],Lt=E.h[(at+1)*E.nx+lt+1];return Tt+dt<=1?H+(q-H)*Tt+(z-H)*dt:Lt+(z-Lt)*(1-Tt)+(q-Lt)*(1-dt)}let V=new k;function ut(N,Z,nt={}){let J=R(N,Z),lt=Math.max(0,N-4),at=lt+8,Tt=R(lt,Z),dt=R(at,Z),H=dt.x-Tt.x,q=dt.z-Tt.z,z=Math.hypot(H,q)||1;return H/=z,q/=z,nt.x=J.x,nt.z=J.z,nt.y=G(J.x,J.z)+Fo,nt.tx=H,nt.tz=q,nt.rx=-q,nt.rz=H,nt.slope=(G(dt.x,dt.z)-G(Tt.x,Tt.z))/Math.max(1,z),nt.div=J.div,nt.divInfo=J.divInfo,nt}function mt(N,Z=25){let nt=Math.max(0,N-Z),J=B(nt),lt=B(nt+2*Z),at=Math.hypot(lt[0]-J[0],lt[1]-J[1])||1;return V.set((lt[0]-J[0])/at,0,(lt[1]-J[1])/at).clone()}let P=[{from:0,to:c,lift:0},{from:2540,to:2690,lift:.02},{from:g-80,to:i.lengthM+45,lift:.035}],_t=i.lengthM;return{P:n,raw:o,rawExt:a,baseXZ:B,LAP1_END_DRAW:c,xzAt:R,sample:ut,heading:mt,heightAt:G,terrain:E,ribbons:P,finishM:_t,lake:U,flat:O,geoOf:N=>N>=f&&N<=g?u(N):N,diversions:w,setPlan:x,LAP1_END:l,MAP_FROM:f,MAP_TO:g}}function En(i){let t=[1e9,1e9,-1e9,-1e9];for(let e of i)t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);return t}function Ss(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[s],[l,c]=i[r];a>e!=c>e&&t<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function or(i,t,e){let n=1e9;for(let s=0,r=i.length-1;s<i.length;r=s++){let[o,a]=i[r],[l,c]=i[s],h=l-o,m=c-a,d=h*h+m*m||1,f=Math.max(0,Math.min(1,((t-o)*h+(e-a)*m)/d));n=Math.min(n,Math.hypot(t-o-h*f,e-a-m*f))}return Ss(i,t,e)?-n:n}function Xe(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ie,c=0;for(let h=0;h<i.length;++h){let m=i[h],d=0;if(e!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in m.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(m.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in m.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(m.morphAttributes[f])}if(t){let f;if(e)f=m.index.count;else if(m.attributes.position!==void 0)f=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,m=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)m.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(m)}for(let h in r){let m=nf(r[h]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,m)}for(let h in o){let m=o[h][0].length;if(m===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<m;++d){let f=[];for(let M=0;M<o[h].length;++M)f.push(o[h][M][d]);let g=nf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function nf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ne(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let m=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let M=h.getComponent(d,g);a.setComponent(d+m,g,M)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var ar=new k;function wn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ar.copy(t),ar[n]=0,ar.normalize();let c=.5*o/(o+a),h=1-ar.angleTo(i)/l;return Math.sign(ar[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ye=class extends Me{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new k,l=new k,c=new k(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,m=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new k,M=.5/s;for(let p=0,u=0;p<h.length;p+=3,u+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*M,l.y-=Math.sign(l.y)*M,l.z-=Math.sign(l.z)*M,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,m[p+0]=l.x,m[p+1]=l.y,m[p+2]=l.z,Math.floor(p/f)){case 0:g.set(1,0,0),d[u+0]=wn(g,l,"z","y",r,n),d[u+1]=1-wn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),d[u+0]=1-wn(g,l,"z","y",r,n),d[u+1]=1-wn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),d[u+0]=1-wn(g,l,"x","z",r,t),d[u+1]=wn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[u+0]=1-wn(g,l,"x","z",r,t),d[u+1]=1-wn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[u+0]=1-wn(g,l,"x","y",r,t),d[u+1]=1-wn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),d[u+0]=wn(g,l,"x","y",r,t),d[u+1]=1-wn(g,l,"y","x",r,e);break}}};var Mi=null;function lx(){if(Mi)return Mi;let i=[118,172,228,255],t=new Uint8Array(i.length*4);return i.forEach((e,n)=>t.set([e,e,e,255],n*4)),Mi=new Js(t,i.length,1,_n),Mi.minFilter=Mi.magFilter=fn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0,Mi}var lr=new Map;function pt(i,t={}){let e=!t.map&&(typeof i=="number"||typeof i=="string")?`${i}|${JSON.stringify(t)}`:null;if(e&&!t.map&&lr.has(e))return lr.get(e);let n=new Ao({color:new se(i??16777215),gradientMap:lx(),...t});return e&&!t.map&&lr.set(e,n),n}function sf(){for(let i of lr.values())i.dispose();lr.clear(),cr.forEach(i=>i.dispose()),cr.clear()}var rc={uRes:{value:new Bt(1920,1080)}},cr=new Map;function cx(i=3,t=1709088,e=14){let n=`${i}|${t}|${e}`;if(cr.has(n))return cr.get(n);let s=new un({uniforms:{...tc.clone($t.fog),uRes:rc.uRes,uWidth:{value:i},uRef:{value:e},uColor:{value:new se(t)}},vertexShader:`
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
      }`,side:nn,fog:!0});return cr.set(n,s),s}function oc(i){if(i.getAttribute("onormal"))return i;i.getAttribute("normal")||i.computeVertexNormals();let t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new Map,s=a=>`${Math.round(t.getX(a)*1e3)},${Math.round(t.getY(a)*1e3)},${Math.round(t.getZ(a)*1e3)}`,r=[];for(let a=0;a<t.count;a++){let l=s(a),c=n.get(l);c||(c=[0,0,0],n.set(l,c)),c[0]+=e.getX(a),c[1]+=e.getY(a),c[2]+=e.getZ(a),r.push(c)}let o=new Float32Array(t.count*3);for(let a=0;a<t.count;a++){let l=r[a],c=Math.hypot(l[0],l[1],l[2])||1;o[a*3]=l[0]/c,o[a*3+1]=l[1]/c,o[a*3+2]=l[2]/c}return i.setAttribute("onormal",new Ne(o,3)),i}function Un(i,t=3,e,n){oc(i.geometry);let s=cx(t,e,n),r;return i.isInstancedMesh?(r=new Ye(i.geometry,s,i.count),r.instanceMatrix=i.instanceMatrix,r.count=i.count,i.frustumCulled&&i.boundingSphere?(r.boundingSphere=i.boundingSphere,r.frustumCulled=!0):(r.frustumCulled=!1,i.frustumCulled=!1),i.userData.outline=r):(r=new Pe(i.geometry,s),r.frustumCulled=i.frustumCulled),r.castShadow=!1,r.receiveShadow=!1,r.userData.isOutline=!0,r.renderOrder=i.renderOrder,i.add(r),r}function ge(i,t,{cast:e=!0,receive:n=!0,ol:s=0,olColor:r,olRef:o}={}){let a=new Pe(i,t);return a.castShadow=e,a.receiveShadow=n,s&&Un(a,s,r,o),a}function Ke(i,t,e,{repeat:n=!1,srgb:s=!0,aniso:r=8}={}){let o=document.createElement("canvas");o.width=i,o.height=t;let a=o.getContext("2d");e(a,i,t);let l=new _s(o);return s&&(l.colorSpace=tn),n&&(l.wrapS=l.wrapT=Di),l.anisotropy=r,l}var ac='"Lilita One", "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif',ee=mn(20240817);function mn(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Nn(i,t,e,n){let s=Ke(i,t,e);return document.fonts&&document.fonts.load&&document.fonts.load('64px "Lilita One"').then(()=>{let r=s.image.getContext("2d");r.clearRect(0,0,i,t),e(r,i,t),s.needsUpdate=!0}).catch(()=>{}),n?.push(s),s}function je(i,t,e,n,s,r="#fff",o="#1a1420",a=.16,l="center"){i.font=`${s}px ${ac}`,i.textAlign=l,i.textBaseline="middle",i.lineJoin="round",i.lineWidth=s*a,i.strokeStyle=o,i.strokeText(t,e,n),i.fillStyle=r,i.fillText(t,e,n)}function of(i,t,e){let{course:n,park:s,hasFunfair:r}=e,o=[],a=new he;i.add(a);let l=S=>(a.add(S),S),c=t.terrain,h=(c.nx-1)*c.cell,m=(c.nz-1)*c.cell,d=new Map,f=6,g=(S,W)=>`${Math.floor(S/f)},${Math.floor(W/f)}`,M=(S,W,K)=>{let it=g(S,W),yt=d.get(it);yt||d.set(it,yt=[]),yt.push([S,W,K])},p=(S,W,K)=>{let it=Math.floor(S/f),yt=Math.floor(W/f),Q=Math.ceil((K+30)/f);for(let St=-Q;St<=Q;St++)for(let Ht=-Q;Ht<=Q;Ht++){let Dt=d.get(`${it+St},${yt+Ht}`);if(Dt){for(let[j,Mt,At]of Dt)if((j-S)**2+(Mt-W)**2<(At+K)**2)return!1}}return!0},u=[];for(let S of t.ribbons)for(let W=S.from;W<=S.to;W+=3){let K=t.baseXZ(W);u.push(K),M(K[0],K[1],Fe/2+1.5)}for(let S in t.diversions)for(let W of t.diversions[S])for(let K of W.path)M(K[0],K[1],4);let w=s.features.filter(S=>S.kind==="park").sort((S,W)=>W.pts.length-S.pts.length)[0].pts,x=(S,W)=>Ss(w,S,W),B=s.features.filter(S=>S.closed&&["water","track","tennis","pitch","playground","building"].includes(S.kind)).map(S=>[En(S.pts),S]),R=(S,W,K=2)=>B.some(([it,yt])=>S>it[0]-K&&S<it[2]+K&&W>it[1]-K&&W<it[3]+K&&or(yt.pts,S,W)<K),T=1.7,C=[];function _(S,W){C.push({im:S,list:W})}let y=new ve().makeScale(0,0,0);function E(S){for(let{im:W,list:K}of C){let it=!1;K.forEach((yt,Q)=>{!yt.cleared&&S(yt.x,yt.z)&&(yt.cleared=!0,W.setMatrixAt(Q,y),it=!0)}),it&&(W.instanceMatrix.needsUpdate=!0)}}function A(){let S=b.image.getContext("2d");D(S,b.image.width,b.image.height),b.needsUpdate=!0}let b=Ke(Math.round(h*T),Math.round(m*T),(S,W,K)=>D(S,W,K),{aniso:8});o.push(b);function D(S,W,K){let it=j=>(j-c.x0)*T,yt=j=>(j-c.z0)*T,Q=(j,Mt=!0)=>{S.beginPath(),j.forEach((At,Kt)=>Kt?S.lineTo(it(At[0]),yt(At[1])):S.moveTo(it(At[0]),yt(At[1]))),Mt&&S.closePath()};S.fillStyle="#d8d2c2",S.fillRect(0,0,W,K);for(let j=0;j<9e3;j++)S.fillStyle=ee()<.5?"#cfc8b6":"#e2dccd",S.fillRect(ee()*W,ee()*K,3,3);Q(w),S.fillStyle="#66cf45",S.fill(),S.save(),Q(w),S.clip(),S.translate(W/2,K/2),S.rotate(-.62);for(let j=-2e3;j<2e3;j+=2*14*T)S.fillStyle="rgba(255,255,140,0.10)",S.fillRect(j,-2500,14*T,5e3);S.setTransform(1,0,0,1,0,0);for(let j=0;j<26e3;j++){let Mt=ee()*W,At=ee()*K;S.fillStyle=ee()<.6?"rgba(40,140,40,0.35)":"rgba(190,255,120,0.35)",S.fillRect(Mt,At,2+ee()*2,2+ee()*3)}S.restore();let St=(j,Mt,At)=>{for(let Kt of s.features)Kt.kind===j&&Kt.closed&&(Q(Kt.pts),S.fillStyle=Mt,S.fill(),At&&(S.strokeStyle=At,S.lineWidth=2,S.stroke()))};St("grass","#72d64e"),St("garden","#86dc5c"),St("wood","#3f9e3a"),St("scrub","#5cb544");for(let j of s.features)if(j.kind==="pitch"&&j.closed){S.save(),Q(j.pts),S.clip(),S.fillStyle="#5ccc3f",S.fill();let Mt=En(j.pts);for(let At=Mt[0];At<Mt[2];At+=8)S.fillStyle="rgba(255,255,255,0.10)",S.fillRect(it(At),yt(Mt[1]),4*T,(Mt[3]-Mt[1])*T);S.restore(),Q(j.pts),S.strokeStyle="#ffffff",S.lineWidth=2.2,S.stroke()}for(let j of s.features)if(j.kind==="playground"&&j.closed){Q(j.pts),S.fillStyle="#7fcfb4",S.fill(),S.save(),Q(j.pts),S.clip();let Mt=En(j.pts);for(let At=0;At<260;At++)S.fillStyle=ee()<.5?"rgba(20,80,70,0.18)":"rgba(255,255,255,0.22)",S.fillRect(it(Mt[0]+ee()*(Mt[2]-Mt[0])),yt(Mt[1]+ee()*(Mt[3]-Mt[1])),3,3);for(let At=0;At<(Mt[2]-Mt[0])*(Mt[3]-Mt[1])/400;At++)S.beginPath(),S.arc(it(Mt[0]+ee()*(Mt[2]-Mt[0])),yt(Mt[1]+ee()*(Mt[3]-Mt[1])),1.6*T,0,7),S.fillStyle=["#ffd93b","#57c7ff","#ff6f91"][At%3],S.fill();S.restore(),Q(j.pts),S.strokeStyle="#ffffff",S.lineWidth=.8*T,S.stroke()}let Ht=j=>{let Mt=0;for(let At=0,Kt=j.pts.length-1;At<j.pts.length;Kt=At++)Mt+=(j.pts[Kt][0]+j.pts[At][0])*(j.pts[Kt][1]-j.pts[At][1]);return Math.abs(Mt/2)};for(let j of s.features)if(j.kind==="track"&&j.closed&&Ht(j)>5e3){S.save(),Q(j.pts),S.clip(),S.fillStyle="#e2523a",S.fill();let Mt=9*T,At=zo(j.pts),Kt=En(j.pts),re=Kt[2]-Kt[0],X=Kt[3]-Kt[1],ot=Ut=>j.pts.map(Zt=>[At[0]+(Zt[0]-At[0])*Ut,At[1]+(Zt[1]-At[1])*Ut]),Ft=1-2*9/Math.min(re,X);for(let Ut=1;Ut<=5;Ut++)Q(ot(1-(1-Ft)*(Ut/6))),S.strokeStyle="rgba(255,255,255,0.9)",S.lineWidth=1.6,S.stroke();Q(ot(Ft)),S.fillStyle="#5ccc3f",S.fill(),S.strokeStyle="#ffffff",S.lineWidth=3,S.stroke(),S.restore(),Q(j.pts),S.strokeStyle="#ffffff",S.lineWidth=3,S.stroke()}for(let j of s.features)if(j.kind==="track"&&j.closed&&Ht(j)<=5e3){let Mt=j.tags?.surface==="sand";if(!j.tags?.surface)continue;Q(j.pts),S.fillStyle=Mt?"#f2d58f":"#e2523a",S.fill(),S.strokeStyle="#ffffff",S.lineWidth=1.5,S.stroke()}for(let j of s.features)if(j.kind==="tennis"&&j.closed){Q(j.pts),S.fillStyle="#3f9fd1",S.fill(),S.strokeStyle="#ffffff",S.lineWidth=2.5,S.stroke();let Mt=zo(j.pts),At=En(j.pts);S.save(),Q(j.pts),S.clip(),S.strokeStyle="rgba(255,255,255,0.9)",S.lineWidth=1.5,S.beginPath(),S.moveTo(it(Mt[0]),yt(At[1])),S.lineTo(it(Mt[0]),yt(At[3])),S.stroke(),S.restore()}for(let j of s.features)j.kind==="water"&&j.closed&&(Q(j.pts),S.strokeStyle="#f4efe0",S.lineWidth=3.4*T,S.lineJoin="round",S.stroke(),S.fillStyle="#2f8fe0",S.fill());for(let j of s.features)j.kind==="path"&&(Q(j.pts,!1),S.lineCap="round",S.lineJoin="round",S.strokeStyle="#c9ad78",S.lineWidth=3.6*T,S.stroke());for(let j of s.features)j.kind==="path"&&(Q(j.pts,!1),S.strokeStyle="#ecd8a6",S.lineWidth=2.6*T,S.stroke());let Dt=j=>({primary:15,secondary:12,tertiary:11,residential:8,unclassified:8,service:5,trunk:16})[j.tags?.highway]||7;for(let j of s.features)j.kind==="road"&&(Q(j.pts,j.closed),S.lineCap="round",S.lineJoin="round",S.strokeStyle="#ece6d6",S.lineWidth=(Dt(j)+4)*T,S.stroke());for(let j of s.features)j.kind==="road"&&(Q(j.pts,j.closed),S.strokeStyle="#7f8597",S.lineWidth=Dt(j)*T,S.stroke());for(let j of s.features)j.kind==="road"&&Dt(j)>=11&&(Q(j.pts,!1),S.setLineDash([5*T,5*T]),S.strokeStyle="#f4f1e6",S.lineWidth=.5*T,S.stroke(),S.setLineDash([]));for(let j of s.features)j.kind==="rail"&&(Q(j.pts,!1),S.strokeStyle="#9b8f84",S.lineWidth=5*T,S.stroke());for(let j of s.features)j.kind==="rail"&&(Q(j.pts,!1),S.setLineDash([1,2]),S.strokeStyle="#5b4f46",S.lineWidth=3*T,S.stroke(),S.setLineDash([]),Q(j.pts,!1),S.strokeStyle="#c9ccd6",S.lineWidth=.8,S.stroke());for(let j of s.features)j.kind==="building"&&j.closed&&(Q(j.pts),S.fillStyle="#9c968a",S.fill());for(let j in t.diversions)for(let Mt of t.diversions[j])S.beginPath(),Mt.path.forEach((At,Kt)=>Kt?S.lineTo(it(At[0]),yt(At[1])):S.moveTo(it(At[0]),yt(At[1]))),S.lineCap="round",S.lineJoin="round",S.strokeStyle="rgba(196,160,96,0.85)",S.lineWidth=4*T,S.stroke(),S.setLineDash([2*T,3*T]),S.strokeStyle="rgba(255,240,200,0.8)",S.lineWidth=.6*T,S.stroke(),S.setLineDash([])}{let S=c.nx*c.nz,W=new Float32Array(S*3),K=new Float32Array(S*2);for(let At=0;At<c.nz;At++)for(let Kt=0;Kt<c.nx;Kt++){let re=At*c.nx+Kt;W[re*3]=c.x0+Kt*c.cell,W[re*3+1]=c.h[re],W[re*3+2]=c.z0+At*c.cell,K[re*2]=Kt/(c.nx-1),K[re*2+1]=1-At/(c.nz-1)}let it=new Uint32Array((c.nx-1)*(c.nz-1)*6),yt=0;for(let At=0;At<c.nz-1;At++)for(let Kt=0;Kt<c.nx-1;Kt++){let re=At*c.nx+Kt,X=re+1,ot=re+c.nx,Ft=ot+1;it[yt++]=re,it[yt++]=ot,it[yt++]=X,it[yt++]=X,it[yt++]=ot,it[yt++]=Ft}let Q=new Ie;Q.setAttribute("position",new Ne(W,3)),Q.setAttribute("uv",new Ne(K,2)),Q.setIndex(new Ne(it,1)),Q.computeVertexNormals();let St=pt(16777215,{map:b}),Ht=Ke(256,256,(At,Kt,re)=>{At.fillStyle="#808080",At.fillRect(0,0,Kt,re);for(let X=0;X<1800;X++){let ot=100+Math.floor(ee()*70);At.fillStyle=`rgb(${ot},${ot},${ot})`;let Ft=ee()*Kt,Ut=ee()*re;At.fillRect(Ft,Ut,2,3+ee()*5)}for(let X=0;X<500;X++)At.fillStyle="rgba(255,255,255,0.18)",At.fillRect(ee()*Kt,ee()*re,2,2)},{repeat:!0,srgb:!1});o.push(Ht),St.onBeforeCompile=At=>{At.uniforms.uDetail={value:Ht},At.vertexShader=At.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),At.fragmentShader=At.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
          float dd = length(vWPos - cameraPosition);
          float d1 = texture2D(uDetail, vWPos.xz / 3.0).r, d2 = texture2D(uDetail, vWPos.xz / 11.0).r;
          float fade = 1.0 - smoothstep(25.0, 140.0, dd);
          diffuseColor.rgb *= mix(1.0, 0.8 + 0.4 * mix(d2, d1, fade), 0.55);`)},St.customProgramCacheKey=()=>"terrain-detail";let Dt=ge(Q,St,{cast:!1});Dt.name="terrain",l(Dt);let j=new Pe(new Eo(700,5200,48,1),pt(13227680));j.rotation.x=-Math.PI/2,j.position.set(c.x0+h/2,-2,c.z0+m/2),j.receiveShadow=!1,l(j);let Mt=new Pe(new sn(h+1800,m+1800),pt(13686197));Mt.rotation.x=-Math.PI/2,Mt.position.set(c.x0+h/2,-3,c.z0+m/2),l(Mt)}let O=Ke(256,256,(S,W,K)=>{S.fillStyle="#7f8fb0",S.fillRect(0,0,W,K);for(let it=0;it<1600;it++)S.fillStyle=ee()<.5?"rgba(255,255,255,0.07)":"rgba(30,40,70,0.08)",S.fillRect(ee()*W,ee()*K,2,2);S.fillStyle="#6b7a9b",S.fillRect(0,0,W*.035,K),S.fillRect(W*.965,0,W*.035,K),S.fillStyle="#ffffff",S.fillRect(W*.06,0,W*.045,K),S.fillRect(W*.895,0,W*.045,K),S.fillStyle="rgba(255,255,255,0.35)",S.fillRect(W*.49,0,W*.02,K*.5)},{repeat:!0});o.push(O);{let S=[];for(let Q of t.ribbons)S.push(U(Q));let W=Xe(S),K=ge(W,pt(16777215,{map:O}),{cast:!1});K.name="path",l(K);let it=Xe(t.ribbons.map(Q=>U(Q,!0))),yt=ge(it,pt(5924226),{cast:!1});l(yt)}function U(S,W=!1){let K=[];for(let j=S.from;j<=S.to+.01;j+=2)K.push(t.baseXZ(j));let it=[],yt=[],Q=[],St=0;for(let j=0;j<K.length;j++){let Mt=K[Math.max(0,j-1)],At=K[Math.min(K.length-1,j+1)],Kt=At[0]-Mt[0],re=At[1]-Mt[1],X=Math.hypot(Kt,re)||1;Kt/=X,re/=X;let ot=-re,Ft=Kt,Ut=Fe/2,Zt=[K[j][0]-ot*Ut,K[j][1]-Ft*Ut],Qt=[K[j][0]+ot*Ut,K[j][1]+Ft*Ut],kt=t.heightAt(K[j][0],K[j][1]),Ee=Math.max(t.heightAt(Zt[0],Zt[1]),kt-.05)+Fo+S.lift,L=Math.max(t.heightAt(Qt[0],Qt[1]),kt-.05)+Fo+S.lift;W?(it.push(Zt[0]-ot*.15,Ee-.45,Zt[1]-Ft*.15,Zt[0],Ee,Zt[1],Qt[0],L,Qt[1],Qt[0]+ot*.15,L-.45,Qt[1]+Ft*.15),yt.push(0,0,0,1,0,1,0,0)):(it.push(Zt[0],Ee,Zt[1],Qt[0],L,Qt[1]),yt.push(0,St/8,1,St/8)),j&&(St+=2)}let Ht=W?4:2;for(let j=0;j<K.length-1;j++){let Mt=j*Ht,At=(j+1)*Ht;W?(Q.push(Mt,At,Mt+1,Mt+1,At,At+1),Q.push(Mt+2,At+2,Mt+3,Mt+3,At+2,At+3)):Q.push(Mt,At,Mt+1,Mt+1,At,At+1)}let Dt=new Ie;if(Dt.setAttribute("position",new ue(it,3)),Dt.setAttribute("uv",new ue(yt,2)),Dt.setIndex(Q),Dt.computeVertexNormals(),Dt.getAttribute("normal").getY(0)<0&&!W){let j=Dt.index.array;for(let Mt=0;Mt<j.length;Mt+=3){let At=j[Mt+1];j[Mt+1]=j[Mt+2],j[Mt+2]=At}Dt.computeVertexNormals()}return Dt}let G={uTime:{value:0}},V=s.features.filter(S=>S.kind==="water"&&S.closed);for(let S of V){let W=(S._level??Math.min(...S.pts.map(St=>t.heightAt(St[0],St[1]))))+.05,K=new Fi(S.pts.map(St=>new Bt(St[0],-St[1]))),it=new wo(K,4);it.rotateX(-Math.PI/2),it.translate(0,W,0);let yt=new un({uniforms:{...G,...$t.fog},vertexShader:`varying vec3 vW;
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
        }`,fog:!0}),Q=new Pe(it,yt);Q.name="water",l(Q),o.push(yt),S._waterLevel=W}let ut=[];if(t.lake){let S=t.lake,W=En(S.pts),K=[16767291,16735581,5752831,16777215,16748497,8257418],it=new ye(2,.7,3.6,2,.32),yt=new ye(1.2,.5,.8,2,.2);for(let Q=0,St=0;Q<9&&St<300;St++){let Ht=W[0]+ee()*(W[2]-W[0]),Dt=W[1]+ee()*(W[3]-W[1]);if(or(S.pts,Ht,Dt)>-7)continue;let j=new he,Mt=ge(it,pt(K[Q%K.length]),{ol:2.5});j.add(Mt);let At=ge(yt,pt(16777215),{ol:2});At.position.y=.45,j.add(At);let Kt=ge(new pe(.42,12,8),pt(K[(Q+2)%K.length]),{ol:2});Kt.position.set(0,.9,.7),j.add(Kt),j.position.set(Ht,(S._waterLevel??0)+.1,Dt),j.rotation.y=ee()*6.28,l(j),ut.push({g:j,ph:ee()*6.28,x:Ht,z:Dt,a:j.rotation.y}),Q++}}{let S=Ke(128,128,(Q,St,Ht)=>{Q.fillStyle="#ffffff",Q.fillRect(0,0,St,Ht),Q.fillStyle="#ffffff",Q.fillRect(0,0,14,14),Q.fillStyle="#3b4a6b",Q.fillRect(34,30,60,58),Q.fillStyle="#9ec9ff",Q.fillRect(38,34,52,50),Q.fillStyle="#ffffff",Q.fillRect(62,34,4,50),Q.fillRect(38,56,52,4),Q.fillStyle="rgba(0,0,0,0.08)",Q.fillRect(0,118,St,10)},{repeat:!0});o.push(S);let W={generateTopUV:(Q,St,Ht,Dt,j)=>[new Bt(.02,.98),new Bt(.02,.98),new Bt(.02,.98)],generateSideWallUV:(Q,St,Ht,Dt,j,Mt)=>{let At=St[Ht*3],Kt=St[Ht*3+1],re=St[Ht*3+2],X=St[Dt*3],ot=St[Dt*3+1],Ft=St[Dt*3+2],Ut=St[j*3+2],Zt=St[Mt*3+2],Qt=(Math.abs(Kt-ot)<Math.abs(At-X)?At:Kt)/4.2,kt=(Math.abs(Kt-ot)<Math.abs(At-X)?X:ot)/4.2;return[new Bt(Qt,re/3.2),new Bt(kt,Ft/3.2),new Bt(kt,Ut/3.2),new Bt(Qt,Zt/3.2)]}},K=["#e98a64","#f3d9a6","#d86f5a","#f6efe0","#a8c8e6","#f2b5a0","#c9b6e4","#f4c46a"],it=["#5d6488","#7a5d6c","#4f6b78"],yt=[];for(let Q of s.features){if(Q.kind!=="building"||!Q.closed||Q.pts.length<4)continue;let St=zo(Q.pts);if(x(St[0],St[1]))continue;let Ht=parseFloat(Q.tags?.["building:levels"])||(ee()<.7?3:4),Dt=Math.min(30,Ht*3.1),j=new Fi(Q.pts.map(Ut=>new Bt(Ut[0],-Ut[1]))),Mt;try{Mt=new So(j,{depth:Dt,bevelEnabled:!1,UVGenerator:W})}catch{continue}Mt.rotateX(-Math.PI/2);let At=Math.min(...Q.pts.map(Ut=>t.heightAt(Ut[0],Ut[1])))-1.5;Mt.translate(0,At,0);let Kt=Mt.getAttribute("normal"),re=Kt.count,X=new Float32Array(re*3),ot=new se(K[Math.floor(ee()*K.length)]).convertSRGBToLinear(),Ft=new se(it[Math.floor(ee()*it.length)]).convertSRGBToLinear();for(let Ut=0;Ut<re;Ut++){let Zt=Kt.getY(Ut)>.5?Ft:ot;X[Ut*3]=Zt.r,X[Ut*3+1]=Zt.g,X[Ut*3+2]=Zt.b}Mt.setAttribute("color",new Ne(X,3)),yt.push(Mt.index?Mt.toNonIndexed():Mt)}if(yt.length){let Q=Xe(yt),St=ge(Q,pt(16777215,{map:S,vertexColors:!0}),{cast:!0,ol:1.6,olRef:60});St.name="buildings",l(St)}}let mt=t.sample(t.finishM),P=t.sample(0),_t={start:P,finish:mt},Gt=new he;l(Gt);function N(S,W,K,it){let yt=new he,Q=Fe/2+1.4,St=.85,Ht=Ke(256,32,(re,X,ot)=>{for(let Ft=0;Ft<16;Ft++)re.fillStyle=Ft%2?K:it,re.fillRect(Ft*X/16,0,X/16+1,ot)},{repeat:!1});o.push(Ht);let Dt=new Ge(Q,St,14,40,Math.PI);Dt.scale(1,1.25,1);let j=ge(Dt,pt(16777215,{map:Ht}),{ol:3.5});yt.add(j);let Mt=new le(St*1.4,St*1.6,.8,16);for(let re of[-1,1]){let X=ge(Mt,pt(it),{ol:3});X.position.set(re*Q,.3,0),yt.add(X)}let At=Nn(1024,256,(re,X,ot)=>{re.fillStyle="#1b1b3a",He(re,0,0,X,ot,60),re.fill(),re.fillStyle=K,He(re,12,12,X-24,ot-24,50),re.fill(),je(re,"MARKRUN",X/2,ot*.42,150,"#ffffff","#1b1b3a",.18),je(re,W,X/2,ot*.83,56,"#ffe14d","#1b1b3a",.2)},o),Kt=ge(new ye(Q*1.55,Q*.4,.7,3,.25),[pt(it),pt(it),pt(it),pt(it),pt(16777215,{map:At}),pt(16777215,{map:At})],{ol:3.5});return Kt.position.y=Q*1.25+St*1.25+Q*.2-.15,yt.add(Kt),yt.position.set(S.x,S.y-.1,S.z),yt.rotation.y=Math.atan2(-S.rz,S.rx),Gt.add(yt),yt}_t.finishArch=N(mt,"FINISH","#ff3d8b","#ffd23f"),N(P,"START","#2e9bff","#ffd23f");let Z=Ke(256,64,(S,W,K)=>{let yt=W/16;for(let Q=0;Q<16;Q++)for(let St=0;St<4;St++)S.fillStyle=(Q+St)%2?"#111":"#fff",S.fillRect(Q*yt,St*yt,yt,yt)});o.push(Z);function nt(S,W,K,it=.03){let yt=new sn(Fe,K);yt.rotateX(-Math.PI/2);let Q=new Pe(yt,pt(16777215,{map:W,transparent:!0,alphaTest:.3,polygonOffset:!0,polygonOffsetFactor:-2}));return Q.position.set(S.x,S.y+it,S.z),Q.rotation.y=Math.atan2(-S.rz,S.rx),Q.receiveShadow=!0,l(Q),Q}nt(mt,Z,2.2,.05);let J=Nn(512,128,(S,W,K)=>{S.fillStyle="#ffffff",S.fillRect(0,0,W,22),je(S,"START",W/2,80,72,"#ffffff","rgba(0,0,0,0)",0)},o);{let S=t.sample(2.5);nt(S,J,3,.05).rotation.y+=Math.PI}let lt=new Ce;function at(S,W,K,{ol:it=0,olRef:yt,cast:Q=!0,colors:St,chunk:Ht=0}={}){if(!K.length)return null;if(Ht){let j=new Map;K.forEach((At,Kt)=>{let re=`${Math.floor(At.x/Ht)},${Math.floor(At.z/Ht)}`,X=j.get(re);X||j.set(re,X={l:[],c:[]}),X.l.push(At),St&&X.c.push(St[Kt])});let Mt=null;for(let{l:At,c:Kt}of j.values()){let re=at(S,W,At,{ol:it,olRef:yt,cast:Q,colors:St?Kt:null});Mt=Mt||re}return Mt}let Dt=new Ye(S,W,K.length);return K.forEach((j,Mt)=>{lt.position.set(j.x,j.y,j.z),lt.rotation.set(j.rx||0,j.ry||0,j.rz||0),lt.scale.set(j.sx??j.s??1,j.sy??j.s??1,j.sz??j.s??1),lt.updateMatrix(),Dt.setMatrixAt(Mt,lt.matrix),St&&Dt.setColorAt(Mt,new se(St[Mt]))}),Dt.castShadow=Q,Dt.receiveShadow=!0,Dt.computeBoundingSphere(),it&&Un(Dt,it,void 0,yt),_(Dt,K),l(Dt),Dt}let Tt=[];{let S=K=>{let it=t.rawExt(K-12),yt=t.rawExt(K),Q=t.rawExt(K+12),St=Math.atan2(yt[1]-it[1],yt[0]-it[0]),Dt=Math.atan2(Q[1]-yt[1],Q[0]-yt[0])-St;for(;Dt>Math.PI;)Dt-=2*Math.PI;for(;Dt<-Math.PI;)Dt+=2*Math.PI;return Dt},W=[[20,t.LAP1_END_DRAW-20],[t.MAP_TO-40,t.finishM-10]];for(let[K,it]of W){let yt=null;for(let Q=K;Q<it;Q+=4){let St=S(Q);Math.abs(St)>.45?(!yt||Math.abs(St)>Math.abs(yt.d))&&(yt={m:Q,d:St}):yt&&(Tt.some(Ht=>Math.abs(Ht.m-yt.m)<50)||Tt.push(yt),yt=null)}}}let dt=[],H=[],q=[],z=[];for(let S of Tt){let W=S.d>0;for(let K=-2;K<=2;K++){let it=t.sample(S.m+K*5),yt=W?-1:1,Q=Fe/2+1.6,St=it.x+it.rx*Q*yt,Ht=it.z+it.rz*Q*yt;p(St,Ht,.3),(W?H:dt).push({x:St,y:t.heightAt(St,Ht),z:Ht,ry:Math.atan2(-it.tz,it.tx)+(yt>0?Math.PI:0)})}for(let K=-3;K<=3;K++){let it=t.sample(S.m+K*3.5),yt=W?1:-1,Q=Fe/2+.7;q.push({x:it.x+it.rx*Q*yt,y:t.heightAt(it.x+it.rx*Q*yt,it.z+it.rz*Q*yt),z:it.z+it.rz*Q*yt,ry:ee()*6});for(let St=0;St<2;St++){let Ht=t.sample(S.m+K*3.5+St*1.75),Dt=Fe/2+.1;z.push({x:Ht.x+Ht.rx*Dt*yt,y:Ht.y-.05,z:Ht.z+Ht.rz*Dt*yt,ry:Math.atan2(Ht.tx,Ht.tz),red:(K*2+St)%2===0})}}}_t.corners=Tt;{let S=Ke(256,96,(Dt,j,Mt)=>{Dt.fillStyle="#2f6fe0",Dt.fillRect(0,0,j,Mt),Dt.fillStyle="#ffffff";for(let At=0;At<4;At++){let Kt=18+At*60;Dt.beginPath(),Dt.moveTo(Kt,12),Dt.lineTo(Kt+26,12),Dt.lineTo(Kt+54,Mt/2),Dt.lineTo(Kt+26,Mt-12),Dt.lineTo(Kt,Mt-12),Dt.lineTo(Kt+28,Mt/2),Dt.closePath(),Dt.fill()}Dt.strokeStyle="#1b3f8f",Dt.lineWidth=8,Dt.strokeRect(0,0,j,Mt)}),W=S.clone();W.repeat.x=-1,W.offset.x=1,W.wrapS=Di,W.needsUpdate=!0,o.push(S,W);let it=(Dt=>{let j=new Me(3.2,1.2,.12);j.rotateX(-.32),j.translate(0,.62,.22);let Mt=new Me(3.2,1.2,.12);return Mt.rotateX(.32),Mt.translate(0,.62,-.22),Mt.rotateY(Math.PI),Xe([j,Mt])})();oc(it),at(it,pt(16777215,{map:S}),H,{ol:2.5}),at(it,pt(16777215,{map:W}),dt,{ol:2.5});let yt=Ke(16,64,(Dt,j,Mt)=>{for(let At=0;At<4;At++)Dt.fillStyle=At%2?"#ffffff":"#ff6a2b",Dt.fillRect(0,At*Mt/4,j,Mt/4)});o.push(yt);let Q=new le(.06,.32,.9,12,1);Q.translate(0,.5,0);let St=new Me(.8,.08,.8);St.translate(0,.04,0),at(Q,pt(16777215,{map:yt}),q,{ol:2}),at(St,pt(16738859),q,{ol:1.5});let Ht=new Me(.5,.22,1.75);Ht.translate(0,.11,0),at(Ht,pt(16777215),z.map(Dt=>Dt),{ol:1.5,colors:z.map(Dt=>Dt.red?15216959:16777215)})}let Lt=new he;l(Lt);function xt(S,W,K,it,yt,{postH:Q=1.6,face:St=0,scale:Ht=1}={}){let Dt=Nn(512,Math.round(512*it/K),yt,o),j=new he,Mt=ge(new ye(K,it,.25,2,.08),[pt(5978660),pt(5978660),pt(5978660),pt(5978660),pt(16777215,{map:Dt}),pt(16777215,{map:Dt})],{ol:3});Mt.position.y=Q+it/2,j.add(Mt);let At=new Me(.25,Q+it*.5,.25);for(let ot of[-1,1]){let Ft=ge(At,pt(9067062),{ol:2});Ft.position.set(ot*K*.35,(Q+it*.5)/2,-.1),j.add(Ft)}let Kt=Fe/2+2.2+K*.15,re=S.x+S.rx*Kt*W,X=S.z+S.rz*Kt*W;return j.position.set(re,t.heightAt(re,X)-.1,X),j.rotation.y=Math.atan2(-S.tx,-S.tz)+W*.5+St,j.scale.setScalar(Ht),Lt.add(j),j}let bt=1720,Ot=t.sample(bt-10);_t.hillSign=xt(Ot,1,6,3.2,(S,W,K)=>{S.fillStyle="#ffd23f",He(S,0,0,W,K,40),S.fill(),S.lineWidth=16,S.strokeStyle="#1b1b3a",He(S,8,8,W-16,K-16,34),S.stroke(),S.fillStyle="#3aa845",S.beginPath(),S.moveTo(40,K-40),S.lineTo(150,70),S.lineTo(260,K-40),S.closePath(),S.fill(),S.strokeStyle="#1b1b3a",S.lineWidth=8,S.stroke(),S.fillStyle="#fff",S.beginPath(),S.moveTo(118,118),S.lineTo(150,70),S.lineTo(182,118),S.closePath(),S.fill(),je(S,"THE",380,K*.3,72,"#ffffff","#1b1b3a",.2),je(S,"HILL",370,K*.66,120,"#ff3d8b","#1b1b3a",.16)},{postH:1.4}),_t.hillM=bt;for(let S of[1,2,3,4]){let W=S*1e3,K=t.sample(t.geoOf(W));xt(K,-1,1.6,1.3,(it,yt,Q)=>{it.fillStyle="#ffffff",He(it,0,0,yt,Q,50),it.fill(),it.fillStyle="#ff3d8b",He(it,20,20,yt-40,Q-40,36),it.fill(),je(it,`${S}K`,yt/2,Q/2+8,230,"#ffffff","#1b1b3a",.14)},{postH:.7})}let $=t.sample(2475);_t.lapBoard=xt($,1,4.4,2.6,(S,W,K)=>{S.fillStyle="#1b1b3a",He(S,0,0,W,K,40),S.fill(),S.fillStyle="#2e9bff",He(S,14,14,W-28,K-28,30),S.fill(),je(S,"LAP",W/2,K*.28,90,"#ffffff","#1b1b3a",.18),je(S,"2 OF 2",W/2,K*.66,150,"#ffe14d","#1b1b3a",.14)},{postH:1.2}),_t.lapM=2500;let zt=[],F=[],I=[],ft=[];function Rt(S,W,K,it=3.2,yt=12){let Q=null;for(let St=S;St<=W;St+=yt){let Ht=t.sample(St),Dt=Fe/2+1,j=Ht.x+Ht.rx*Dt*K,Mt=Ht.z+Ht.rz*Dt*K,At=t.heightAt(j,Mt);F.push({x:j,y:At,z:Mt});let Kt=new k(j,At+it,Mt);if(Q){let re=[];for(let X=0;X<=12;X++){let ot=X/12,Ft=Q.clone().lerp(Kt,ot);Ft.y-=Math.sin(ot*Math.PI)*.6,re.push(Ft)}I.push(re);for(let X=1;X<12;X++){let ot=re[X],Ft=re[X+1].clone().sub(re[X-1]);zt.push({x:ot.x,y:ot.y,z:ot.z,ry:Math.atan2(-Ft.z,Ft.x)})}}Q=Kt}}function Pt(S,W,K,it=Fe/2+2.2){for(let yt=S;yt<=W;yt+=2.4){let Q=t.sample(yt),St=Q.x+Q.rx*it*K,Ht=Q.z+Q.rz*it*K;ft.push({x:St,y:t.heightAt(St,Ht),z:Ht,ry:Math.atan2(Q.tx,Q.tz)})}}let Y=t.finishM;Rt(Y-70,Y+10,1),Rt(Y-70,Y+10,-1),Rt(-6,50,1),Rt(-6,50,-1),Pt(Y-60,Y+14,1),Pt(Y-60,Y+14,-1),Pt(-4,40,1),Pt(-4,40,-1);{let S=new Ie;S.setAttribute("position",new ue([-.3,0,0,.3,0,0,0,-.62,0],3)),S.setAttribute("normal",new ue([0,0,1,0,0,1,0,0,1],3));let W=zt.map((j,Mt)=>[16727435,16765503,3054591,4054148,16747069,16777215][Mt%6]);at(S,pt(16777215,{side:We}),zt,{colors:W,cast:!1});let K=new le(.07,.09,3.3,6);K.translate(0,1.65,0),at(K,pt(16777215),F,{ol:1.5});let it=new Ie().setFromPoints(I.flatMap(j=>j.slice(0,-1).flatMap((Mt,At)=>[Mt,j[At+1]]))),yt=new ys(it,new Ni({color:3355443}));l(yt),o.push(it);let Q=[];for(let j=0;j<4;j++){let Mt=new Me(.16,1,.06);Mt.translate(-.9+j*.6,.5,0),Q.push(Mt)}let St=new Me(2.4,.12,.05);St.translate(0,.65,.05),Q.push(St);let Ht=St.clone();Ht.translate(0,-.35,0),Q.push(Ht);let Dt=Xe(Q);Dt.rotateY(Math.PI/2),at(Dt,pt(16777215),ft,{ol:1.8})}let ct=[],rt=(S,W,K,it,yt,Q=1.35)=>ct.push({m0:S,m1:W,side:K,off:Fe/2+3,depth:it,density:yt,spacing:Q});rt(Y-58,Y+12,1,6,1),rt(Y-58,Y+12,-1,6,1),rt(-2,38,1,5,.9),rt(-2,38,-1,5,.9),rt(1940,2010,1,4,.7),rt(1960,2010,-1,3,.6),rt(bt-10,bt+40,-1,3,.55),rt(2440,2490,-1,3,.7),rt(bt-70,bt+10,1,3,.5),rt(bt-70,bt-20,-1,3,.45),rt(2080,2160,1,4,.75),rt(2080,2160,-1,4,.75),rt(800,860,1,3,.6),rt(1250,1310,-1,3,.6),_t.crowdZones=ct;{let S=s.pois.filter(it=>it.kind==="bench"&&x(it.pos[0],it.pos[1])&&p(it.pos[0],it.pos[1],1)).map(it=>({x:it.pos[0],y:t.heightAt(it.pos[0],it.pos[1]),z:it.pos[1],ry:ee()*6})),W=Xe([new Me(1.8,.12,.5).translate(0,.5,0),new Me(1.8,.4,.1).translate(0,.8,-.22),new Me(.1,.5,.45).translate(-.8,.25,0),new Me(.1,.5,.45).translate(.8,.25,0)]);at(W,pt(11892031),S,{ol:1.5});let K=s.pois.filter(it=>it.kind==="cafe"&&x(it.pos[0],it.pos[1])&&p(it.pos[0],it.pos[1],4));for(let it of K){let yt=new he;yt.add(ge(new ye(5,3,4,2,.2),pt(16774108),{ol:2.5})).position.y=1.5;let Q=Ke(128,16,(Dt,j,Mt)=>{for(let At=0;At<8;At++)Dt.fillStyle=At%2?"#fff":"#ff4f6d",Dt.fillRect(At*16,0,16,Mt)});o.push(Q);let St=ge(new Me(5.6,.2,2),pt(16777215,{map:Q}),{ol:2});St.position.set(0,2.9,2.3),St.rotation.x=.35,yt.add(St);let Ht=ge(new ke(4,1.6,4),pt(3054591),{ol:2.5});Ht.position.y=3.8,Ht.rotation.y=Math.PI/4,yt.add(Ht),yt.position.set(it.pos[0],t.heightAt(it.pos[0],it.pos[1]),it.pos[1]),yt.rotation.y=ee()*6,l(yt),M(it.pos[0],it.pos[1],5)}}for(let S of ct)for(let W=S.m0-8;W<=S.m1+8;W+=4){let K=t.sample(W),it=S.off+S.depth/2;M(K.x+K.rx*it*S.side,K.z+K.rz*it*S.side,S.depth/2+3)}for(let S of[P,mt])M(S.x,S.z,14);function vt(S,W){let K=null,it=1e9;for(let yt of u){let Q=(yt[0]-S)**2+(yt[1]-W)**2;Q<it&&(it=Q,K=yt)}return K}_t.nearestOnRibbon=vt,_t.ribbonSamples=u;let Et=new Map;for(let S of u){let W=`${Math.floor(S[0]/10)},${Math.floor(S[1]/10)}`,K=Et.get(W);K||Et.set(W,K=[]),K.push(S)}let Ct=(S,W,K=1)=>{let it=Math.floor(S/10),yt=Math.floor(W/10),Q=(Fe/2+K)**2;for(let St=-1;St<=1;St++)for(let Ht=-1;Ht<=1;Ht++)for(let Dt of Et.get(`${it+St},${yt+Ht}`)||[])if((Dt[0]-S)**2+(Dt[1]-W)**2<Q)return!0;return!1};_t.reserve=M,_t.clearOf=p;let It=[],Wt=(S,W,K,it)=>!p(S,W,2.5*it)||R(S,W,1.5)?!1:(It.push({x:S,z:W,kind:K,s:it}),M(S,W,2.2*it),!0);for(let S of s.pois)S.kind==="tree"&&Wt(S.pos[0],S.pos[1],0,.85+ee()*.35);for(let S of s.features)if(S.kind==="wood"&&S.closed){let W=En(S.pts),K=(W[2]-W[0])*(W[3]-W[1]);for(let it=0;it<K/90;it++){let yt=W[0]+ee()*(W[2]-W[0]),Q=W[1]+ee()*(W[3]-W[1]);Ss(S.pts,yt,Q)&&Wt(yt,Q,1,.9+ee()*.5)}}{let S=En(w);for(let W=0;W<2600;W++){let K=S[0]+ee()*(S[2]-S[0]),it=S[1]+ee()*(S[3]-S[1]);!x(K,it)||-or(w,K,it)>45&&ee()<.75||Wt(K,it,ee()<.7?1:2,.8+ee()*.5)}for(let W of s.features)if(W.kind==="road"&&!W.closed)for(let K=1;K<W.pts.length;K++){let it=W.pts[K-1],yt=W.pts[K],Q=Math.hypot(yt[0]-it[0],yt[1]-it[1]);for(let St=0;St<Q;St+=22){let Ht=St/Q,Dt=it[0]+(yt[0]-it[0])*Ht,j=it[1]+(yt[1]-it[1])*Ht,Mt=-(yt[1]-it[1])/Q,At=(yt[0]-it[0])/Q,Kt=8+ee()*2;ee()<.5&&Wt(Dt+Mt*Kt,j+At*Kt,0,.6+ee()*.2)}}}{let S=[3978315,5031250,3121226,6539594,8376650,3450963],W=new le(.32,.5,4.2,7);W.translate(0,2.1,0);let K=new $e(3.2,1);K.scale(1,1.08,1),K.translate(0,6.6,0);let it=Xe([new $e(3,1).translate(0,6.2,0),new $e(2.3,0).translate(1.9,5.3,.6),new $e(2.2,0).translate(-1.7,5.5,-.8),new $e(2,0).translate(.2,8.2,.3)].map(rf)),yt=Xe([new ke(3,4.2,8).translate(0,5,0),new ke(2.4,3.6,8).translate(0,7.2,0),new ke(1.6,3,8).translate(0,9.2,0)].map(rf)),Q=It.map(Dt=>({x:Dt.x,y:t.heightAt(Dt.x,Dt.z)-.2,z:Dt.z,ry:ee()*6.28,s:Dt.s}));at(W,pt(9067062),Q,{ol:2,olRef:40,chunk:160});let St=pt(16777215);K.computeVertexNormals(),[K,it,yt].forEach((Dt,j)=>{let Mt=Q.filter((At,Kt)=>It[Kt].kind===j);at(Dt,St,Mt,{ol:2.2,olRef:40,colors:Mt.map(()=>S[Math.floor(ee()*S.length)]),chunk:160})}),_t.treeCount=It.length}{let S=Xe([0,1,2,3].map(Q=>{let St=new ke(.09,.55,3);return St.translate(0,.27,0),St.rotateZ((Q-1.5)*.25),St.rotateY(Q*1.7),St.translate((Q-1.5)*.08,0,Q%2*.06),St.index?St.toNonIndexed():St})),W=Xe([new le(.03,.03,.35,4).translate(0,.17,0).toNonIndexed(),new $e(.13,0).translate(0,.38,0)]),K=[],it=[],yt=[];for(let Q=0;Q<9e3;Q++){let St=u[Math.floor(ee()*u.length)],Ht=ee()*6.283,Dt=Fe/2+1+ee()*22,j=St[0]+Math.cos(Ht)*Dt,Mt=St[1]+Math.sin(Ht)*Dt;if(!x(j,Mt)||R(j,Mt,.5)||!p(j,Mt,.2))continue;let At=t.heightAt(j,Mt)-.03;ee()<.62?K.push({x:j,y:At,z:Mt,ry:ee()*6,s:.5+ee()*.6}):(it.push({x:j,y:At,z:Mt,ry:ee()*6,s:.35+ee()*.25}),yt.push(["#ff5d8f","#ffd93b","#ffffff","#b06bff","#ff8a3d","#57c7ff"][Math.floor(ee()*6)]))}at(S,pt(5226296),K,{cast:!1,chunk:120}),at(W,pt(16777215),it,{cast:!1,colors:yt,chunk:120})}let Jt=new un({side:nn,depthWrite:!1,fog:!1,uniforms:{top:{value:new se(3116287)},mid:{value:new se(9425919)},bot:{value:new se(15333631)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h=vP.y; vec3 c = h>0.12? mix(mid, top, smoothstep(0.12,0.7,h)) : mix(bot, mid, smoothstep(-0.05,0.12,h)); gl_FragColor=vec4(c,1.);
#include <colorspace_fragment>
}`}),qt=new Pe(new pe(5e3,32,16),Jt);qt.renderOrder=-10,qt.frustumCulled=!1,i.add(qt),o.push(Jt,qt.geometry);let ce=Xe([[0,0,0,14],[13,-3,2,10],[-13,-4,-1,10],[6,6,-2,9],[-6,5,3,8],[22,-6,0,6],[-22,-7,1,6]].map(([S,W,K,it])=>new $e(it,2).translate(S,W,K)));ce.scale(1,.7,.8);let ie=[c.x0+h/2,c.z0+m/2],_e=[];for(let S=0;S<26;S++){let W=ee()*6.28,K=300+ee()*1300;_e.push({x:ie[0]+Math.cos(W)*K,y:170+ee()*120,z:ie[1]+Math.sin(W)*K,ry:ee()*6,s:.8+ee()*1.4})}let st=at(ce,pt(16777215,{emissive:6981808,emissiveIntensity:.35,fog:!1}),_e,{ol:1.5,olRef:300,cast:!1}),Yt=[];for(let S=0;S<18;S++){let W=S/18*6.28+ee()*.2,K=1900+ee()*500;Yt.push({x:ie[0]+Math.cos(W)*K,y:-40,z:ie[1]+Math.sin(W)*K,sx:320+ee()*260,sy:80+ee()*90,sz:260+ee()*200,ry:ee()*6})}at(new pe(1,24,12),pt(7128954),Yt,{cast:!1,colors:Yt.map((S,W)=>[8047487,6273413,9425290][W%3])});function wt(S){G.uTime.value=S;for(let W of ut)W.g.position.y=(t.lake?._waterLevel??0)+.1+Math.sin(S*1.7+W.ph)*.08,W.g.rotation.z=Math.sin(S*1.3+W.ph)*.06,W.g.rotation.y=W.a+Math.sin(S*.1+W.ph)*.4;st&&(st.position.x=Math.sin(S*.01)*40)}function Nt(){a.traverse(S=>{S.geometry&&S.geometry.dispose()});for(let S of o)S.dispose?.();i.remove(a),i.remove(qt)}return{group:a,anchors:_t,update:wt,dispose:Nt,inPark:x,clearOf:p,reserve:M,blocked:R,groundTex:b,onPath:Ct,registerInstanced:_,clearArea:E,redrawGround:A}}function rf(i){let t=i.index?i.toNonIndexed():i;return t.computeVertexNormals(),t}function zo(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function He(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}var af=[16735631,16765503,5752831,8248938,16747069,11566079,5234888,16739179,16777215,9414911],lf=[4054148,16727435,16765503,3054591,16777215];function hx(){let i=[];for(let n=0;n<=8;n++){let s=n/8,r=s*1.25,o=s<.12?.48+s*1.2:Math.sqrt(Math.max(0,1-Math.pow((s-.12)/.88,2.2)))*.62;i.push(new Bt(Math.max(.001,o),r))}i.unshift(new Bt(.001,0));let e=new er(i,12);return e.computeVertexNormals(),e}function lc(i,t){let e=mn(99),n=t.length,s=new he;if(i.add(s),!n)return{update(){},hideWhere(){},dispose(){i.remove(s)},group:s};let r=hx(),o=new pe(.15,8,5);o.scale(.8,1.15,.5);let a=new pe(.075,6,4);a.scale(.85,1.2,.5);let l=new pe(.13,6,5),c=new ke(.14,.36,6);c.translate(0,.18,0);let h=new ke(.26,.55,8);h.translate(0,.27,0);let m=new pe(.2,7,5),d=(V,ut,mt,P)=>{let _t=new Ye(V,ut,mt);return _t.castShadow=!0,_t.receiveShadow=!0,_t.userData.ol=P,s.add(_t),_t},f=d(r,pt(16777215),n,2.6),g=d(o,new bn({color:16777215}),n*2,0),M=d(a,new bn({color:1709088}),n*2,0),p=d(l,pt(16777215),n*2,2);g.castShadow=M.castShadow=!1;let u=[d(c,pt(16777215),n,2),d(h,pt(16777215),n,2),d(m,pt(16777215),n,2)],w=[0,0,0],x=new se,v=t.map((V,ut)=>{let mt=V.colour??af[Math.floor(e()*af.length)];f.setColorAt(ut,x.set(mt)),p.setColorAt(ut*2,x),p.setColorAt(ut*2+1,x);let P=e()<.3?-1:Math.floor(e()*3),_t=-1;return P>=0&&(_t=w[P]++,u[P].setColorAt(_t,x.set(lf[Math.floor(e()*lf.length)]))),{...V,s:V.scale??.85+e()*.35,ph:e()*6.28,sp:5+e()*4,tk:P,ti:_t,wave:e()<.5,ex:.3}});u.forEach((V,ut)=>{V.count=w[ut]});for(let V of[f,p,...u])V.instanceColor&&(V.instanceColor.needsUpdate=!0);let B=new ve().makeScale(0,0,0),R=new ve,T=new Gn,C=new Pn,_=new k,y=new k,E=new ve,A=new ve;function b(V,ut,mt){let P=v[V];if(P.hidden){for(let nt of[f])nt.setMatrixAt(V,B);for(let nt=0;nt<2;nt++)g.setMatrixAt(V*2+nt,B),M.setMatrixAt(V*2+nt,B),p.setMatrixAt(V*2+nt,B);P.tk>=0&&u[P.tk].setMatrixAt(P.ti,B);return}let _t=P.ex,Gt=ut*P.sp*(.5+_t*.6)+P.ph,N=Math.max(0,Math.sin(Gt))*.32*_t,Z=1-Math.cos(Gt*2)*.05*_t;C.set(0,P.yaw+Math.sin(ut*.8+P.ph)*.25*(1-_t),Math.sin(Gt*.5)*.08*_t),T.setFromEuler(C),E.compose(_.set(P.x,P.y+N,P.z),T,y.set(P.s/Math.sqrt(Z),P.s*Z,P.s/Math.sqrt(Z))),f.setMatrixAt(V,E);for(let nt=0;nt<2;nt++){let J=nt?.19:-.19;A.makeTranslation(J,.86,.5),R.multiplyMatrices(E,A),g.setMatrixAt(V*2+nt,R),A.makeTranslation(J*1.02,.84+(_t>.6?.03:0),.565),R.multiplyMatrices(E,A),M.setMatrixAt(V*2+nt,R);let lt=_t>.55?1:.15+.2*Math.max(0,Math.sin(Gt)),at=P.wave?Math.sin(Gt*1.5+nt*3)*.25*_t:0,Tt=(nt?1:-1)*(.62+lt*.05+at*.3),dt=.45+lt*.85+at;A.makeTranslation(Tt,dt,.12),R.multiplyMatrices(E,A),p.setMatrixAt(V*2+nt,R)}P.tk>=0&&(A.makeTranslation(0,1.22,0),P.tk===0&&A.multiply(new ve().makeRotationZ(Math.sin(Gt)*.3)),R.multiplyMatrices(E,A),u[P.tk].setMatrixAt(P.ti,R))}for(let V=0;V<n;V++)b(V,0,!0);let D=()=>{for(let V of[f,g,M,p,...u])V.instanceMatrix.needsUpdate=!0};D();for(let V of[f,g,M,p,...u]){if(!V.count){V.visible=!1;continue}V.computeBoundingSphere(),V.boundingSphere.radius+=2,V.userData.ol&&Un(V,V.userData.ol,void 0,18)}function O(V,ut,mt=[],P=null){let _t=!1;for(let Gt=0;Gt<n;Gt++){let N=v[Gt];if(ut&&(N.x-ut.x)**2+(N.z-ut.z)**2>260*260)continue;let Z=.25;if(P!=null)Z=P;else for(let nt of mt){let J=(nt.x-N.x)**2+(nt.z-N.z)**2;J<45*45&&(Z=Math.max(Z,1-Math.sqrt(J)/70))}N.ex+=(Z-N.ex)*.05,b(Gt,V),_t=!0}_t&&D()}function U(){for(let V of[r,o,a,l,c,h,m])V.dispose();for(let V of[f,g,M,p,...u])V.dispose();i.remove(s)}function G(V){let ut=!1;for(let mt=0;mt<n;mt++)!v[mt].hidden&&V(v[mt].x,v[mt].z)&&(v[mt].hidden=!0,b(mt,0),ut=!0);ut&&D()}return{update:O,dispose:U,hideWhere:G,group:s,members:v}}function cf(i,t,e=5,n=null,s=null){let r=mn(e),o=[];for(let[a,l]of t.entries())for(let c=l.m0;c<=l.m1;c+=l.spacing??1.35){let h=i.sample(c),m=Math.max(1,Math.round(l.depth/1.25));for(let d=0;d<m;d++){if(r()>l.density)continue;let f=l.off+d*1.25+r()*.35,g=(r()-.5)*.6,M=h.x+h.rx*f*l.side+h.tx*g,p=h.z+h.rz*f*l.side+h.tz*g;n&&n(M,p,1.4)||s&&s(M,p,.6)||o.push({zone:a,x:M,y:i.heightAt(M,p),z:p,yaw:Math.atan2(-h.rx*l.side,-h.rz*l.side)+(r()-.5)*.5})}}return o}var hf={stocky:{torso:[.9,.76,.58],leg:.66,legR:.16,arm:.66,armR:.14,head:.47,hand:.19,shoe:[.34,.25,.6]},lanky:{torso:[.56,.86,.38],leg:1.06,legR:.095,arm:.9,armR:.085,head:.39,hand:.15,shoe:[.27,.21,.62]},compact:{torso:[.68,.6,.5],leg:.52,legR:.13,arm:.52,armR:.11,head:.5,hand:.17,shoe:[.3,.23,.5]},tall:{torso:[.7,.94,.46],leg:.92,legR:.125,arm:.8,armR:.11,head:.43,hand:.17,shoe:[.31,.24,.6]}},ff=["#2b1d14","#5a3a1e","#c8642a","#e8c66a","#1d1d24","#a9a9b3","#3a2a1e","#8a5a2b","#ff5fa2"],fx=3.2,hr=new Map,jt=(i,t)=>(hr.has(i)||hr.set(i,t()),hr.get(i));function uf(){for(let i of hr.values())i.dispose();hr.clear()}function ux(i){let t=2166136261;for(let e of i)t^=e.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0}function dx(i,t,e,n,s,r){i.fillStyle=n,i.fillRect(0,0,t,e);let o=t*.25,a=e*.47,l=e*.64,c=t*.058,h="#1a1420";i.fillStyle="rgba(255,90,90,0.28)";for(let p of[-1,1])i.beginPath(),i.ellipse(o+p*c*1.75,l-e*.03,t*.022,e*.03,0,0,7),i.fill();let m=(p,u)=>{if(u==="heart"){i.fillStyle="#ff2d6f",i.strokeStyle=h,i.lineWidth=5,i.beginPath();let R=t*.03;i.moveTo(p,a+R*1.1),i.bezierCurveTo(p-R*2.2,a-R*.2,p-R*.9,a-R*1.9,p,a-R*.6),i.bezierCurveTo(p+R*.9,a-R*1.9,p+R*2.2,a-R*.2,p,a+R*1.1),i.fill(),i.stroke();return}if(u==="closed"||u==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),u==="happy"?i.arc(p,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9):(i.moveTo(p-t*.025,a),i.lineTo(p+t*.025,a)),i.stroke();return}if(u==="x"){i.strokeStyle=h,i.lineWidth=8,i.lineCap="round";let R=t*.02;i.beginPath(),i.moveTo(p-R,a-R),i.lineTo(p+R,a+R),i.moveTo(p+R,a-R),i.lineTo(p-R,a+R),i.stroke();return}if(u==="wink"&&p>o&&(u="happy"),u==="wink"&&(u="open"),u==="happy"){i.strokeStyle=h,i.lineWidth=9,i.lineCap="round",i.beginPath(),i.arc(p,a+e*.02,t*.024,Math.PI*1.1,Math.PI*1.9),i.stroke();return}let w=u==="wide"?1.3:1,x=t*.03*w,v=e*.085*w;i.fillStyle="#fff",i.strokeStyle=h,i.lineWidth=6,i.beginPath(),i.ellipse(p,a,x,v,0,0,7),i.fill(),i.stroke();let B=u==="wide"?.38:.55;i.fillStyle=h,i.beginPath(),i.ellipse(p+x*.15,a+v*.12,x*B,v*B*1.1,0,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(p+x*.35,a-v*.2,x*.22,0,7),i.fill(),u==="half"&&(i.fillStyle=n,i.fillRect(p-x-4,a-v-4,x*2+8,v*1.05),i.strokeStyle=h,i.lineWidth=7,i.beginPath(),i.moveTo(p-x-2,a-v*.1),i.lineTo(p+x+2,a-v*.1),i.stroke())},d={sleepy:"half",smug:"half",cheeky:"wink","wide-eyed":"wide"}[s]||"open";r==="happy"&&(d="happy"),r==="love"&&(d="heart"),r==="dead"&&(d="x"),r==="effort"&&s!=="goofy"&&(d="open");for(let p of[-1,1])m(o+p*c,d);i.strokeStyle=h,i.lineWidth=10,i.lineCap="round";let f=r==="effort"||s==="determined"||s==="gritted"?.35:r==="sad"||s==="worried"?-.35:s==="smug"||s==="cheeky"?.15:s==="wide-eyed"?-.2:0;for(let p of[-1,1]){let u=o+p*c,w=a-e*.13,x=t*.026,v=u-p*x,B=u+p*x;i.beginPath(),i.moveTo(B,w-f*18),i.lineTo(v,w+f*18),i.stroke()}i.lineWidth=8,i.strokeStyle=h,i.fillStyle="#7a1e2e";let g=o,M=r||"normal";if(M==="happy"||M==="normal"&&s==="grin")i.beginPath(),i.moveTo(g-t*.04,l-e*.02),i.quadraticCurveTo(g,l+e*.12,g+t*.04,l-e*.02),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.03,l-e*.018,t*.06,e*.03),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g,l+e*.06,t*.015,e*.02,0,0,7),i.fill();else if(M==="effort"){i.fillStyle="#fff",i.beginPath(),He(i,g-t*.035,l-e*.03,t*.07,e*.065,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.035,l),i.lineTo(g+t*.035,l);for(let p=-2;p<=2;p++)i.moveTo(g+p*t*.012,l-e*.03),i.lineTo(g+p*t*.012,l+e*.035);i.stroke()}else if(M==="sad"||M==="dead")i.beginPath(),i.moveTo(g-t*.03,l+e*.04),i.quadraticCurveTo(g,l-e*.04,g+t*.03,l+e*.04),i.stroke(),M==="dead"&&(i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.012,l+e*.07,t*.012,e*.04,.2,0,7),i.fill(),i.stroke());else if(M==="love"||M==="pant")i.beginPath(),i.ellipse(g,l+e*.02,t*.022,e*.05,0,0,7),i.fill(),i.stroke();else if(s==="gritted"){i.fillStyle="#fff",i.beginPath(),He(i,g-t*.04,l-e*.03,t*.08,e*.06,10),i.fill(),i.stroke(),i.lineWidth=4,i.beginPath(),i.moveTo(g-t*.04,l),i.lineTo(g+t*.04,l);for(let p=-2;p<=2;p++)i.moveTo(g+p*t*.014,l-e*.03),i.lineTo(g+p*t*.014,l+e*.03);i.stroke()}else if(s==="tongue-out")i.beginPath(),i.moveTo(g-t*.035,l),i.quadraticCurveTo(g,l+e*.05,g+t*.035,l),i.stroke(),i.fillStyle="#ff6f8a",i.beginPath(),i.ellipse(g+t*.008,l+e*.06,t*.016,e*.05,.15,0,7),i.fill(),i.stroke(),i.strokeStyle="rgba(0,0,0,0.35)",i.lineWidth=3,i.beginPath(),i.moveTo(g+t*.008,l+e*.03),i.lineTo(g+t*.01,l+e*.08),i.stroke();else if(s==="wide-eyed")i.beginPath(),i.ellipse(g,l+e*.02,t*.016,e*.04,0,0,7),i.fill(),i.stroke();else if(s==="cheeky")i.beginPath(),i.moveTo(g-t*.04,l-e*.01),i.quadraticCurveTo(g,l+e*.08,g+t*.045,l-e*.035),i.stroke();else if(s==="smug")i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.quadraticCurveTo(g+t*.01,l+e*.05,g+t*.04,l-e*.03),i.stroke();else if(s==="worried"){i.beginPath(),i.moveTo(g-t*.03,l+e*.02);for(let p=0;p<=6;p++)i.lineTo(g-t*.03+p*t*.01,l+e*.02+(p%2?-1:1)*e*.012);i.stroke()}else s==="goofy"?(i.beginPath(),i.moveTo(g-t*.04,l),i.quadraticCurveTo(g,l+e*.09,g+t*.04,l),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ff7d8f",i.beginPath(),i.ellipse(g+t*.01,l+e*.07,t*.016,e*.045,0,0,7),i.fill(),i.stroke(),i.fillStyle="#fff",i.fillRect(g-t*.02,l-2,t*.016,e*.03)):s==="determined"?(i.beginPath(),i.moveTo(g-t*.03,l+e*.01),i.lineTo(g+t*.03,l+e*.01),i.stroke()):(i.beginPath(),i.moveTo(g-t*.035,l-e*.01),i.quadraticCurveTo(g,l+e*.07,g+t*.035,l-e*.01),i.stroke());i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=6,i.beginPath(),i.arc(o,a+e*.09,t*.012,.2,Math.PI-.2),i.stroke()}function px(i,t){return Ke(256,200,(e,n,s)=>{e.fillStyle="#ffffff",He(e,0,0,n,s,20),e.fill(),e.fillStyle=t,e.fillRect(0,0,n,44),e.font=`30px ${ac}`,e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText("MARKRUN",n/2,24),je(e,String(i),n/2,128,140,"#1a1420","#1a1420",0),e.fillStyle="#c33";for(let[r,o]of[[16,60],[n-16,60],[16,s-16],[n-16,s-16]])e.beginPath(),e.arc(r,o,6,0,7),e.fill()})}function mx(i){return Ke(128,128,(t,e,n)=>{if(t.fillStyle="#ffffff",t.strokeStyle="#1a1420",t.lineWidth=8,t.beginPath(),t.arc(e/2,n/2-6,48,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(e/2-12,n-26),t.lineTo(e/2,n-4),t.lineTo(e/2+8,n-28),t.fill(),i==="!")je(t,"!",e/2,n/2-4,84,"#ff3d8b","#1a1420",.12);else if(i==="heart"){t.fillStyle="#ff2d6f";let s=e/2,r=n/2-2,o=16;t.beginPath(),t.moveTo(s,r+o*1.3),t.bezierCurveTo(s-o*2.6,r-o*.3,s-o,r-o*2.2,s,r-o*.7),t.bezierCurveTo(s+o,r-o*2.2,s+o*2.6,r-o*.3,s,r+o*1.3),t.fill(),t.stroke()}else if(i==="floss"){t.fillStyle="#ff9bd2";for(let[s,r,o]of[[54,44,18],[74,46,17],[64,30,16],[62,54,16]])t.beginPath(),t.arc(s,r,o,0,7),t.fill();t.strokeStyle="#c99a5a",t.lineWidth=6,t.beginPath(),t.moveTo(64,62),t.lineTo(64,96),t.stroke()}else if(i==="sweat"){t.fillStyle="#57c7ff";for(let[s,r]of[[50,50],[78,64]])t.beginPath(),t.moveTo(s,r-22),t.quadraticCurveTo(s+14,r,s,r+10),t.quadraticCurveTo(s-14,r,s,r-22),t.fill(),t.stroke()}})}function df(i,t={}){let e=i.look||{},n=hf[e.build]||hf.compact,s=ux(i.id+(i.nickname||"")),r=mn(s),o=i.colour?.primary||"#ff4757",a=i.colour?.secondary||"#ffffff",l=e.skin||"#f1c6a5",c=ff[s%ff.length],h=[],m=pt(o),d=pt(a),f=pt(l),g=pt(c),M=new se(a).getHSL({}).l>.85?"#ffffff":a,p=pt(M),u=pt("#ffffff"),w=pt("#22202c"),x=(Y,ct,rt=fx)=>ge(Y,ct,{ol:rt,olRef:9}),v=new he;v.name=`runner-${i.id}`;let B=new he;v.add(B);let R=new he;B.add(R);let T=n.leg/2,C=n.leg+n.shoe[1]*.75;R.position.y=C;let _=x(jt(`shorts${e.build}`,()=>new ye(n.torso[0]*.92,.32,n.torso[2]*.95,3,.12)),d);_.position.y=.02,R.add(_);let y=new he;y.position.y=.12,R.add(y);let E=x(jt(`torso${e.build}`,()=>new ye(...n.torso,4,Math.min(n.torso[2],n.torso[0])*.42)),m);E.position.y=n.torso[1]/2,y.add(E);for(let Y of[-1,1]){let ct=ge(jt(`stripe${e.build}`,()=>new Me(.06,n.torso[1]*.8,n.torso[2]*.7)),pt(a),{cast:!1});ct.position.set(Y*n.torso[0]*.5,n.torso[1]*.5,0),y.add(ct)}let A=px(i.lane??0,o);h.push(A);let b=new Pe(jt("bib",()=>new sn(1,.78)),pt(16777215,{map:A})),D=Math.min(.42,n.torso[0]*.6);b.scale.setScalar(D),b.position.set(0,n.torso[1]*.45,n.torso[2]/2+.012),y.add(b);let O=new he;O.position.y=n.torso[1]+.02,y.add(O);let U=new he;O.add(U);let G=document.createElement("canvas");G.width=1024,G.height=512;let V=new _s(G);V.colorSpace=tn,V.anisotropy=4,h.push(V);let ut=null,mt=Y=>{Y!==ut&&(ut=Y,dx(G.getContext("2d"),1024,512,l,e.face||"grin",Y),V.needsUpdate=!0)};mt("normal");let P=n.head,_t=x(jt(`head${P}`,()=>new pe(P,32,20).scale(1,.98,.96)),pt(16777215,{map:V}));_t.position.y=P*.92,U.add(_t);for(let Y of[-1,1]){let ct=x(jt(`ear${P}`,()=>new pe(P*.2,10,8).scale(.6,1,.8)),f,2.5);ct.position.set(Y*P*.97,P*.9,0),U.add(ct)}let Gt=x(jt(`nose${P}`,()=>new pe(P*.14,10,8)),f,2);Gt.position.set(0,P*.84,P*.97),U.add(Gt),q(e.hair,e.hat),z(e.hat);let N=[];for(let Y of[-1,1]){let ct=new he;ct.position.set(Y*(n.torso[0]/2+n.armR*.55),n.torso[1]-n.armR*1.1,0),y.add(ct);let rt=x(jt(`sleeve${e.build}`,()=>new pe(n.armR*1.65,14,10)),m);ct.add(rt);let vt=x(jt(`uarm${e.build}`,()=>new Ln(n.armR,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),f);ct.add(vt);let Et=new he;Et.position.y=-n.arm/2+n.armR*.4,ct.add(Et);let Ct=x(jt(`farm${e.build}`,()=>new Ln(n.armR*.95,n.arm/2-n.armR,4,10).translate(0,-n.arm/4,0)),f);Et.add(Ct);let It=x(jt(`hand${e.build}`,()=>new pe(n.hand,14,10).scale(1,1.1,.9)),f);It.position.y=-n.arm/2-n.hand*.4,Et.add(It),N.push({sh:ct,el:Et,hand:It})}let Z=[];for(let Y of[-1,1]){let ct=new he;ct.position.set(Y*n.torso[0]*.24,0,0),R.add(ct);let rt=x(jt(`thigh${e.build}`,()=>new Ln(n.legR*1.15,T-n.legR,4,10).translate(0,-T/2,0)),f);ct.add(rt);let vt=x(jt(`sleg${e.build}`,()=>new le(n.legR*1.6,n.legR*1.5,T*.5,12).translate(0,-T*.2,0)),d);ct.add(vt);let Et=new he;Et.position.y=-T,ct.add(Et);let Ct=x(jt(`shin${e.build}`,()=>new Ln(n.legR,T-n.legR,4,10).translate(0,-T/2,0)),f);Et.add(Ct);let It=x(jt(`sock${e.build}`,()=>new le(n.legR*1.12,n.legR*1.12,T*.25,10).translate(0,-T*.86,0)),pt(16777215),2.5);Et.add(It);let Wt=new he;Wt.position.y=-T,Et.add(Wt);let Jt=x(jt(`shoe${e.build}`,()=>new ye(...n.shoe,3,n.shoe[1]*.45).translate(0,-n.shoe[1]*.25,n.shoe[2]*.22)),p);Wt.add(Jt);let qt=ge(jt(`sole${e.build}`,()=>new ye(n.shoe[0]*1.04,n.shoe[1]*.3,n.shoe[2]*1.03,2,.05).translate(0,-n.shoe[1]*.62,n.shoe[2]*.22)),u,{ol:2.5,olRef:9});Wt.add(qt);let ce=ge(jt(`swoosh${e.build}`,()=>new Me(n.shoe[0]*1.06,n.shoe[1]*.18,n.shoe[2]*.5).translate(0,-n.shoe[1]*.2,n.shoe[2]*.2)),pt(o),{cast:!1});Wt.add(ce),Z.push({hp:ct,kn:Et,an:Wt})}Lt(e.accessory);let nt=new he;nt.visible=!1;{let Y=ge(jt("flossStick",()=>new le(.025,.025,.6,5).rotateX(Math.PI/2).translate(0,0,.3)),pt("#e8d0a0"),{cast:!1}),ct=ge(jt("flossFluff",()=>{let rt=mn(5);return Xe(Array.from({length:7},()=>new $e(.16+rt()*.06,1).translate((rt()-.5)*.22,(rt()-.5)*.22,.72+(rt()-.5)*.2)))}),pt("#ff9bd2"),{ol:2.5,olRef:9});nt.add(Y,ct),nt.userData.fluff=ct,nt.position.y=-n.arm/2-n.hand*.4,N[0].el.add(nt)}function J(Y,ct){Y==="floss"&&(nt.visible=ct>0,ct>0&&nt.userData.fluff.scale.setScalar(Math.max(.15,ct)))}let lt={},at=new po(new Zs({transparent:!0,depthTest:!1}));at.scale.setScalar(.9),at.visible=!1,at.renderOrder=20,v.add(at);let Tt=Y=>{if(!Y){at.visible=!1;return}lt[Y]||(lt[Y]=mx(Y),h.push(lt[Y])),at.material.map=lt[Y],at.material.needsUpdate=!0,at.visible=!0},dt=C+.12+n.torso[1]+.02+P*2;at.position.y=dt+.45;let H=new Set([E,_,_t,...N.flatMap(Y=>[Y.hand]),...Z.map(Y=>Y.an.children[0])]);for(let Y of N)Y.sh.children.forEach(ct=>ct.isMesh&&H.add(ct));for(let Y of Z)Y.hp.children.forEach(ct=>ct.isMesh&&H.add(ct));v.traverse(Y=>{Y.isMesh&&!Y.userData.isOutline&&(Y.castShadow=H.has(Y))});function q(Y,ct){let rt=Y||"short";if(rt==="bald")return;let vt=(Et=1.07,Ct=.48)=>{let It=x(jt(`hcap${P}${Et}${Ct}`,()=>new pe(P*Et,24,14,0,Math.PI*2,0,Math.PI*Ct)),g);return It.position.y=P*.92,It.rotation.x=-.32,U.add(It),It};if(rt==="curly"||rt==="afro"){let Et=jt(`curly${P}`,()=>{let It=mn(7),Wt=[];for(let Jt=0;Jt<26;Jt++){let qt=It()*Math.PI*.55,ce=It()*Math.PI*2,ie=new k(Math.sin(qt)*Math.cos(ce),Math.cos(qt),Math.sin(qt)*Math.sin(ce)).multiplyScalar(P*1.02);ie.z>P*.55&&ie.y<P*.75||Wt.push(new $e(P*.33,1).translate(ie.x,ie.y,ie.z-P*.08))}return Xe(Wt)}),Ct=x(Et,g);Ct.position.y=P*.98,rt==="afro"&&(Ct.scale.setScalar(1.28),Ct.position.y=P*1.05),U.add(Ct);return}if(ct==="beanie"||ct==="bucket"||ct==="bobble"){if(vt(1.05,.5),rt==="mullet"||rt==="long"||rt==="ponytail"){let Et=x(jt(`mul${P}`,()=>new ye(P*1.5,P*.9,P*.4,3,P*.15)),g);Et.position.set(0,P*.35,-P*.78),U.add(Et)}return}if(rt==="buzz"){let Et=x(jt(`buzz${P}`,()=>new pe(P*1.025,24,14,0,Math.PI*2,0,Math.PI*.45)),g,2);Et.position.y=P*.92,Et.rotation.x=-.32,U.add(Et);return}if(vt(),rt==="quiff"||rt==="swept"){let Et=x(jt(`quiff${P}${rt}`,()=>new pe(P*.55,16,10).scale(rt==="quiff"?1.3:1.7,rt==="quiff"?.75:.45,1)),g);Et.position.set(rt==="swept"?P*.25:0,P*1.82,P*.38),Et.rotation.set(-.5,0,rt==="swept"?-.35:0),U.add(Et)}if(rt==="mullet"){let Et=x(jt(`mul${P}`,()=>new ye(P*1.5,P*.9,P*.4,3,P*.15)),g);Et.position.set(0,P*.35,-P*.78),U.add(Et)}if(rt==="long"){let Et=x(jt(`hlong${P}`,()=>new ye(P*1.8,P*1.6,P*.5,3,P*.2)),g);Et.position.set(0,P*.4,-P*.62),U.add(Et)}if(rt==="ponytail"){let Et=new he;Et.position.set(0,P*1.35,-P*.85),U.add(Et);for(let Ct=0;Ct<3;Ct++){let It=x(jt(`pt${P}${Ct}`,()=>new pe(P*(.32-Ct*.05),12,8)),g);It.position.set(0,-Ct*P*.32,-Ct*P*.18),Et.add(It)}U.userData.pony=Et}if(rt==="bun"){let Et=x(jt(`bun${P}`,()=>new pe(P*.38,14,10)),g);Et.position.set(0,P*2,-P*.2),U.add(Et)}if(rt==="mohawk"||rt==="spiky"){let Et=rt==="mohawk"?5:9;for(let Ct=0;Ct<Et;Ct++){let It=x(jt(`spk${P}`,()=>new ke(P*.2,P*.7,8)),g),Wt=rt==="mohawk"?0:Ct/Et*Math.PI*2,Jt=rt==="mohawk"?-.9+Ct/(Et-1)*1.8:.6;It.position.set(Math.sin(Wt)*Math.sin(Jt)*P,P*.92+Math.cos(Jt)*P*1.05,(rt==="mohawk"?Math.sin(Jt):Math.cos(Wt)*Math.sin(Jt))*P),It.lookAt(It.position.clone().multiplyScalar(3)),It.rotateX(Math.PI/2),U.add(It)}}}function z(Y){if(!Y)return;let ct=pt(a==="#ffffff"||a==="#f8f8f8"?o:a),rt=pt(o);if(Y==="backwards-cap"){let vt=x(jt(`capd${P}`,()=>new pe(P*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ct);vt.position.y=P*.98,vt.rotation.x=-.18,U.add(vt);let Et=x(jt(`brim${P}`,()=>new le(P*.75,P*.75,P*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),rt);Et.position.set(0,P*1.42,-P*.62),Et.rotation.set(-.12,Math.PI,0),U.add(Et)}else if(Y==="bobble"){let vt=x(jt(`bean${P}`,()=>new pe(P*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),rt);vt.position.y=P*.96,vt.rotation.x=-.12,U.add(vt);let Et=x(jt(`brim2${P}`,()=>new Ge(P*1.05,P*.17,8,24)),ct);Et.rotation.x=Math.PI/2-.12,Et.position.y=P*1.12,U.add(Et);let Ct=x(jt(`bigbob${P}`,()=>new $e(P*.48,1)),ct);Ct.position.y=P*2.45,U.add(Ct),U.userData.bobble=Ct}else if(Y==="cap"||Y==="visor"){if(Y==="cap"){let Et=x(jt(`capd${P}`,()=>new pe(P*1.1,24,12,0,Math.PI*2,0,Math.PI*.42)),ct);Et.position.y=P*.98,Et.rotation.x=-.18,U.add(Et)}else{let Et=x(jt(`vband${P}`,()=>new Ge(P*1,P*.12,8,24)),ct);Et.rotation.x=Math.PI/2-.25,Et.position.y=P*1.35,U.add(Et)}let vt=x(jt(`brim${P}`,()=>new le(P*.75,P*.75,P*.08,20,1,!1,-Math.PI/2,Math.PI).scale(1.2,1,1.15)),rt);vt.position.set(0,P*1.42,P*.62),vt.rotation.x=.12,U.add(vt)}else if(Y==="beanie"){let vt=x(jt(`bean${P}`,()=>new pe(P*1.1,24,14,0,Math.PI*2,0,Math.PI*.5).scale(1,1.15,1)),ct);vt.position.y=P*.96,vt.rotation.x=-.12,U.add(vt);let Et=x(jt(`brim2${P}`,()=>new Ge(P*1.05,P*.17,8,24)),rt);Et.rotation.x=Math.PI/2-.12,Et.position.y=P*1.12,U.add(Et);let Ct=x(jt(`bob${P}`,()=>new $e(P*.3,1)),rt);Ct.position.y=P*2.25,U.add(Ct)}else if(Y==="headband"||Y==="sweatband"){let vt=x(jt(`hb${P}`,()=>new Ge(P*1,P*.13,8,28)),ct);vt.rotation.x=Math.PI/2-.2,vt.position.y=P*1.3,U.add(vt);let Et=x(jt(`hbt${P}`,()=>new ye(P*.2,P*.5,P*.08,2,.02)),ct);Et.position.set(.12,P*1.1,-P*1.05),Et.rotation.z=.5,U.add(Et),U.userData.tail=Et}else if(Y==="bucket"){let vt=x(jt(`buck${P}`,()=>new le(P*.8,P*1.02,P*.7,20)),ct);vt.position.y=P*1.75,U.add(vt);let Et=x(jt(`buckb${P}`,()=>new le(P*1.5,P*1.5,P*.06,24)),rt);Et.position.y=P*1.42,Et.rotation.x=.1,U.add(Et)}else if(Y==="crown"||Y==="tiara"){let vt=x(jt(`crown${P}`,()=>new le(P*.7,P*.62,P*.5,8,1,!0)),pt("#ffd23f",{side:We}));vt.position.y=P*2,U.add(vt)}else if(Y==="wizard"||Y==="party"){let vt=x(jt(`cone${P}`,()=>new ke(P*.8,P*1.8,16)),ct);vt.position.y=P*2.3,vt.rotation.z=.15,U.add(vt);let Et=x(jt(`bob${P}`,()=>new $e(P*.3,1)),rt);Et.position.set(-P*.12,P*3.15,0),U.add(Et)}else if(Y==="helmet"||Y==="bike_helmet"){let vt=x(jt(`helm${P}`,()=>new pe(P*1.14,20,12,0,Math.PI*2,0,Math.PI*.46).scale(1,.9,1.15)),ct);vt.position.y=P*1,U.add(vt)}else if(Y==="santa"){let vt=x(jt(`santa${P}`,()=>new ke(P*.95,P*1.6,16)),pt("#e8313f"));vt.position.y=P*2.2,vt.rotation.z=.5,U.add(vt);let Et=x(jt(`santar${P}`,()=>new Ge(P*.95,P*.2,8,24)),pt("#ffffff"));Et.rotation.x=Math.PI/2,Et.position.y=P*1.45,U.add(Et)}else{let vt=x(jt(`cone${P}`,()=>new ke(P*.8,P*1.8,16)),ct);vt.position.y=P*2.3,U.add(vt)}}function Lt(Y){if(Y){if(Y==="sunglasses"||Y==="glasses"){let ct=Y==="sunglasses";for(let vt of[-1,1]){let Et=x(jt(`lens${P}${ct}`,()=>new ye(P*.5,P*.32,P*.08,2,P*.06)),ct?pt("#141420"):pt("#cfefff"),2);Et.position.set(vt*P*.3,P*1.02,P*.98),Et.rotation.y=vt*.28,U.add(Et)}let rt=ge(jt(`bridge${P}`,()=>new Me(P*.3,P*.06,P*.06)),pt("#141420"),{cast:!1});rt.position.set(0,P*1.06,P*1.04),U.add(rt)}else if(Y==="medal"){let ct=x(jt("ribbon",()=>new Ge(.2,.03,6,20,Math.PI)),pt("#2e9bff"),2);ct.rotation.z=Math.PI,ct.position.set(0,n.torso[1]+.02,n.torso[2]/2-.05),ct.rotation.x=-.3,y.add(ct);let rt=x(jt("medal",()=>new le(.11,.11,.04,16).rotateX(Math.PI/2)),pt("#ffd23f",{emissive:"#664400",emissiveIntensity:.3}),2.5);rt.position.set(0,n.torso[1]-.22,n.torso[2]/2+.05),y.add(rt),b.position.y-=.1,b.position.x=.12,b.scale.multiplyScalar(.8)}else if(Y==="headphones"){let ct=x(jt(`hp${P}`,()=>new Ge(P*1.08,P*.07,6,24,Math.PI)),pt("#22202c"),2);ct.position.y=P*.95,U.add(ct);for(let rt of[-1,1]){let vt=x(jt(`hpc${P}`,()=>new le(P*.3,P*.3,P*.2,14).rotateZ(Math.PI/2)),pt(o),2.5);vt.position.set(rt*P*1.02,P*.92,0),U.add(vt)}}else if(Y==="sweatband"||Y==="wristbands"||Y==="watch")for(let ct of N){let rt=x(jt(`wb${e.build}`,()=>new le(n.armR*1.3,n.armR*1.3,.12,10).translate(0,-n.arm/2+.1,0)),pt(Y==="watch"?"#22202c":a),2);if(ct.el.add(rt),Y==="watch")break}else if(Y==="scarf"){let ct=x(jt("scarf",()=>new Ge(.22,.08,8,18)),pt(a));ct.rotation.x=Math.PI/2,ct.position.y=.02,O.add(ct);let rt=x(jt("scarft",()=>new ye(.14,.5,.06,2,.03)),pt(a));rt.position.set(.1,-.15,-.25),rt.rotation.x=.5,O.add(rt),U.userData.tail2=rt}else if(Y==="cape"){let ct=x(jt(`cape${e.build}`,()=>new sn(n.torso[0]*1.2,n.torso[1]*1.5,1,4).translate(0,-n.torso[1]*.75,0)),pt(a,{side:We}),2),rt=new he;rt.position.set(0,n.torso[1],-n.torso[2]/2-.03),rt.add(ct),y.add(rt),U.userData.cape=rt}else if(Y==="backpack"){let ct=x(jt(`bp${e.build}`,()=>new ye(n.torso[0]*.7,n.torso[1]*.7,.25,3,.08)),pt(a));ct.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.12),y.add(ct)}else if(Y==="moustache"||Y==="mustache"){let ct=x(jt(`mou${P}`,()=>new Ln(P*.09,P*.5,4,8).rotateZ(Math.PI/2)),pt("#3a2616"),2);ct.position.set(0,P*.7,P*.98),U.add(ct)}else if(Y==="beard"){let ct=x(jt(`beard${P}`,()=>new pe(P*.78,18,12,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1.05,1,.75)),g,2.5);ct.position.set(0,P*.78,P*.32),U.add(ct);let rt=x(jt(`mou${P}`,()=>new Ln(P*.09,P*.5,4,8).rotateZ(Math.PI/2)),g,2);rt.position.set(0,P*.7,P*.98),U.add(rt)}else if(Y==="bumbag"){let ct=x(jt(`bum${e.build}`,()=>new ye(n.torso[0]*.5,.2,.18,2,.07)),pt(a==="#ffffff"||a==="#f8f8f8"?"#22202c":a));ct.position.set(n.torso[0]*.12,.08,n.torso[2]/2+.08),R.add(ct);let rt=ge(jt(`strap${e.build}`,()=>new Ge(n.torso[0]*.48,.025,6,24).scale(1,n.torso[2]/n.torso[0]*1.05,1).rotateX(Math.PI/2)),pt("#22202c"),{cast:!1});rt.position.y=.1,R.add(rt)}else if(Y==="bib"){let ct=new Pe(jt("bib",()=>new sn(1,.78)),b.material);ct.scale.copy(b.scale),ct.position.set(0,n.torso[1]*.5,-n.torso[2]/2-.012),ct.rotation.y=Math.PI,y.add(ct),b.scale.multiplyScalar(1.3)}else if(Y==="bowtie")for(let ct of[-1,1]){let rt=x(jt("bow",()=>new ke(.08,.16,4).rotateZ(Math.PI/2)),pt(a),2);rt.position.set(ct*.08,n.torso[1]-.06,n.torso[2]/2+.03),rt.rotation.z=ct>0?Math.PI:0,y.add(rt)}else if(Y==="tutu"){let ct=x(jt(`tutu${e.build}`,()=>new le(n.torso[0]*.55,n.torso[0]*.9,.18,16,1,!0)),pt("#ff9bd2",{side:We}),2);ct.position.y=-.05,R.add(ct)}}}let xt={phase:r()*6.28,t:r()*10,lean:0,j:{},look:0,lookPitch:0},bt=xt.j,Ot=["hipLx","hipRx","kneeL","kneeR","ankL","ankR","shLx","shRx","shLz","shRz","elL","elR","twist","lean","bob","roll","headY","headX","bodyX","bodyY","bodyZ","hipSpread"];for(let Y of Ot)bt[Y]=0;let $={},zt="idle",F=null,I=0;function ft(Y,ct=null){(Y!==zt||ct!==F)&&(zt=Y,F=ct,I=0)}function Rt(Y,ct={}){xt.t+=Y,I+=Y;let rt=xt.t;for(let It of Ot)$[It]=0;let vt="normal",Et=10;if(zt==="run"||zt==="jog"||zt==="trudge"||zt==="distracted"){let It=Math.max(.5,ct.speed??3.5),Wt=Math.max(.2,ct.rate??1),Jt=zt==="trudge",qt=Jt?1.7:(2.55+.14*(It-3.5))*Math.pow(Wt,.3)*(zt==="jog"?.8:1);xt.phase+=Y*Math.PI*qt;let ce=xt.phase,ie=Math.sin(ce),_e=Math.cos(ce),st=Jt?.4:Math.max(.45,Math.min(1,.62+.13*(It-3.5)));$.hipLx=-st*ie,$.hipRx=st*ie,$.kneeL=.2+(Jt?.5:1.35)*Math.max(0,_e)*(.7+st*.3),$.kneeR=.2+(Jt?.5:1.35)*Math.max(0,-_e)*(.7+st*.3),$.ankL=-.2*ie,$.ankR=.2*ie;let Yt=Jt?.3:.75*st+.15;$.shLx=Yt*ie,$.shRx=-Yt*ie,$.shLz=-.18,$.shRz=.18,$.elL=Jt?-.5:-1.5,$.elR=Jt?-.5:-1.5,$.twist=.16*ie,$.roll=.05*ie,$.bob=(Jt?.03:.11)*(Math.abs(_e)-.4),$.lean=(Jt?.05:.16)+Math.max(-.25,Math.min(.45,(ct.slope??0)*1.6)),$.headX=-$.lean*.6,$.headY=-.08*ie,Et=18,vt=ct.effort>.6?"effort":ct.effort>.3?"pant":"normal",Jt&&($.headX=.35,$.lean=.25,vt="sad"),zt==="distracted"&&($.headY=ct.lookYaw??.9,$.headX=-.15,$.twist+=(ct.lookYaw??.9)*.3,vt="love")}else if(zt==="ready")$.hipLx=-.5,$.hipRx=.35,$.kneeL=.6,$.kneeR=.5,$.lean=.35,$.bob=-.12,$.shLx=.5,$.shRx=-.6,$.elL=-1.3,$.elR=-1.3,$.headX=-.25,$.bob+=Math.sin(rt*3)*.01,vt="effort";else if(zt==="wave")$.shRz=2.7,$.elR=.2*Math.sin(rt*9)-.25,$.shRx=Math.sin(rt*9)*.25,$.shLz=-.3,$.elL=-.4,$.bob=Math.abs(Math.sin(rt*4))*.05,$.headY=.1*Math.sin(rt*2),vt="happy";else if(zt==="pose"){let It=F||"flex";if(It==="flex")$.shLz=-1.5,$.shRz=1.5,$.elL=-1.9-Math.sin(rt*6)*.15,$.elR=-1.9-Math.sin(rt*6+1)*.15,$.shLx=-0,$.bob=-.06+Math.abs(Math.sin(rt*3))*.03,$.hipSpread=.25,$.kneeL=.3,$.kneeR=.3,vt="effort";else if(It==="point")$.shRx=-1.5,$.elR=0,$.shLz=-.3,$.elL=-1.6,$.shLx=-.3,$.headX=-.1,$.lean=-.05,vt="happy",$.bob=Math.sin(rt*5)*.02;else if(It==="stretch")$.hipRx=-.2,$.kneeR=2.3,$.shRx=.8,$.elR=-.6,$.shLz=-2.6,$.lean=.08+Math.sin(rt*2)*.04,vt="smug";else if(It==="spin"){let Wt=Math.min(1,I/1.1);$.bodyY=(1-(1-Wt)**2)*Math.PI*4,$.shLz=Wt<1?-1.3:-2.6,$.shRz=Wt<1?1.3:2.6,$.bob=Wt<1?Math.abs(Math.sin(rt*7))*.2:Math.abs(Math.sin(rt*5))*.12,vt="happy"}else It==="bow"?($.lean=.75+Math.sin(rt*2)*.05,$.shLx=.4,$.shRx=-1.2,$.elR=-1.6,$.shRz=.4,$.headX=-.2,vt="happy"):($.shLz=-2.5,$.shRz=2.5,$.bob=Math.abs(Math.sin(rt*6))*.25,vt="happy");vt==="smug"&&(vt="normal")}else if(zt==="celebrate"){let It=F||"jump";if(It==="jump"){let Wt=Math.abs(Math.sin(rt*5.5));$.bob=Wt*.55,$.shLz=-2.6-Wt*.3,$.shRz=2.6+Wt*.3,$.elL=-.2,$.elR=-.2,$.kneeL=$.kneeR=(1-Wt)*.8,$.hipLx=$.hipRx=-(1-Wt)*.4,vt="happy",Et=22}else if(It==="fist"){let Wt=Math.sin(rt*7);$.shRx=-2.6,$.elR=-.4+Wt*.4,$.shLx=.4,$.elL=-1.8,$.bob=Math.abs(Wt)*.08,$.lean=-.1,vt="happy"}else It==="kneel"?($.lean=.85,$.kneeL=$.kneeR=.7,$.hipLx=$.hipRx=-.6,$.bob=-.25+Math.sin(rt*7)*.025,$.shLx=$.shRx=-.55,$.elL=$.elR=-.1,$.shLz=-.15,$.shRz=.15,$.headX=-.6,vt="pant"):It==="collapse"?($.bodyX=-Math.PI/2+.05,$.shLz=-2.2,$.shRz=2.2,$.hipSpread=.4,$.kneeL=.3+Math.max(0,Math.sin(rt*9))*.4*(Math.sin(rt*.7)>.6?1:0),$.kneeR=.2,vt="dead",Et=4):It==="shrug"&&($.shLz=-.9,$.shRz=.9,$.elL=-1.4,$.elR=-1.4,$.shLx=-.5,$.shRx=-.5,$.headX=.1,$.headY=Math.sin(rt*1.5)*.3,vt="sad")}else $.bob=Math.sin(rt*2)*.015,$.shLz=-.18,$.shRz=.18,$.elL=-.25,$.elR=-.25,$.headY=Math.sin(rt*.7)*.25,$.lean=.02,$.kneeL=$.kneeR=.05;ct.lookYaw!=null&&zt!=="distracted"&&($.headY+=ct.lookYaw);let Ct=1-Math.exp(-Et*Y);for(let It of Ot){if(It==="bodyY"&&zt==="pose"&&F==="spin"){bt[It]=$[It];continue}bt[It]+=($[It]-bt[It])*Ct}if(zt==="pose"&&F==="spin"||(bt.bodyY=bt.bodyY%(Math.PI*2),bt.bodyY>Math.PI&&(bt.bodyY-=Math.PI*2)),Z[0].hp.rotation.set(bt.hipLx,0,-bt.hipSpread),Z[1].hp.rotation.set(bt.hipRx,0,bt.hipSpread),Z[0].kn.rotation.x=bt.kneeL,Z[1].kn.rotation.x=bt.kneeR,Z[0].an.rotation.x=bt.ankL-bt.kneeL*.35,Z[1].an.rotation.x=bt.ankR-bt.kneeR*.35,N[0].sh.rotation.set(bt.shLx,0,bt.shLz-0),N[1].sh.rotation.set(bt.shRx,0,bt.shRz),N[0].el.rotation.x=bt.elL,N[1].el.rotation.x=bt.elR,y.rotation.set(bt.lean,bt.twist,0),R.rotation.set(0,-bt.twist*.5,bt.roll),R.position.y=C+bt.bob,U.rotation.set(bt.headX,bt.headY,0),B.rotation.set(bt.bodyX,bt.bodyY,bt.bodyZ),B.position.y+=((zt==="celebrate"&&F==="collapse"?n.torso[2]*.5+.08:0)-B.position.y)*Ct,U.userData.bobble&&(U.userData.bobble.position.y=P*2.45+Math.abs(Math.sin(xt.phase))*.04),U.userData.pony&&(U.userData.pony.rotation.x=.4+Math.sin(xt.phase*2)*.35),U.userData.tail&&(U.userData.tail.rotation.x=.6+Math.sin(xt.phase*2)*.3),U.userData.cape&&(U.userData.cape.rotation.x=-.3-Math.min(1.1,(ct.speed??0)*.15)+Math.sin(rt*8)*.08),ct.expr&&(vt=ct.expr),mt(vt),at.visible){at.position.y=dt+.45+Math.sin(rt*6)*.08;let It=.9+Math.sin(rt*9)*.05;at.scale.set(It,It,It)}}function Pt(){for(let Y of h)Y.dispose?.();at.material.dispose()}return{id:i.id,info:i,root:v,update:Rt,set:ft,setPop:Tt,setExpr:mt,setProp:J,dispose:Pt,height:dt,hipH:C,get state(){return zt},get variant(){return F}}}function Es(i,t){if(t<=0)return 0;if(t>=i[200])return 5e3;let e=0,n=200;for(;n-e>1;){let r=e+n>>1;i[r]<=t?e=r:n=r}let s=(t-i[e])/(i[n]-i[e]);return(e+s)*25}function pf(i,t){let e=Math.max(0,Math.min(5e3,t))/25,n=Math.floor(e),s=Math.min(200,n+1);return i[n]+(e-n)*(i[s]-i[n])}function mf(i,t){let e=i.map;if(t<=0)return 0;if(t>=e.length-1)return e.at(-1)[1];let n=Math.floor(t),s=t-n;return e[n][1]+s*(e[n+1][1]-e[n][1])}function Oo(i,t){let e=i.map;if(t<=0)return 0;let n=0,s=e.length-1;if(t>=e[s][1])return e[s][0];for(;s-n>1;){let r=n+s>>1;e[r][1]<=t?n=r:s=r}return e[n][0]+(t-e[n][1])/(e[s][1]-e[n][1])}var gx=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function gf(i,t,e){let n=i.timeMap,s={};e.forEach((_,y)=>s[_.id]=_.lane??y+1);let r=i.runners.length,o=Object.values(s),a=(Math.min(...o)+Math.max(...o))/2,l=Math.min(1.25,(Fe-1.6)/Math.max(1,r-1)),c=i.runners.map((_,y)=>{let E=mf(n,_.officialS),A=((s[_.id]??y+1)-a)*l;return{..._,finishB:E,base:A,seed:y*1.7+.3}}),h=Object.fromEntries(c.map(_=>[_.id,_])),m=[...c].sort((_,y)=>_.officialS-y.officialS).map(_=>_.id),d=Object.fromEntries(m.map((_,y)=>[_,y+1])),f=h[m[0]],g=m.map(_=>h[_].officialS),M=h[m[0]].finishB,p=h[m.at(-1)].finishB,u=r>1&&g[1]-g[0]<=1.5,w=_=>Math.max(.05,(Oo(n,_+.05)-Oo(n,_-.05))/.1),x=new Map;function v(_){let y=Math.round(_*1e3);if(x.has(y))return x.get(y);let E=_<=0?0:Oo(n,_),A=_<=0?4:w(_),b={b:_,raceS:E,rate:A,byId:{},order:[]};for(let G of c){let V=Es(G.progress,E),ut=E>=G.officialS&&_>=G.finishB-1e-6,mt=(Es(G.progress,E+1)-Es(G.progress,Math.max(0,E-1)))/(E>1?2:1);b.byId[G.id]={id:G.id,m:V,finished:ut,vRace:ut?0:mt,place:d[G.id]}}for(let G of c){let V=b.byId[G.id],ut=V.m,mt=G.base;mt+=.22*Math.sin(V.m/85+G.seed);for(let Gt of c){if(Gt===G)continue;let N=b.byId[Gt.id],Z=V.m-N.m;if(Math.abs(Z)<4&&!V.finished&&!N.finished){let nt=(1-Math.abs(Z)/4)*.32;mt+=Math.sign(G.base-Gt.base||G.seed-Gt.seed)*nt}}let P=0;if(V.finished){let Gt=_-G.finishB,N=(Es(G.progress,G.officialS)-Es(G.progress,G.officialS-2))/2*w(G.finishB),Z=Math.min(14,Math.max(4,N)),nt=1.6;ut=5e3+(Gt<nt?Z*(Gt-Gt*Gt/(2*nt)):Z*nt/2+Math.min(10+d[G.id]*1.5,(Gt-nt)*.9));let lt=(d[G.id]-(r+1)/2)*1.6;mt=mt+(lt-mt)*gx(0,2.5,Gt),P=Gt}let _t=t.sample(ut,G.id);mt*=1-_t.div,mt=Math.max(-Fe/2+.6,Math.min(Fe/2-.6,mt)),Object.assign(V,{mVis:ut,x:_t.x+_t.rx*mt,z:_t.z+_t.rz*mt,y:t.heightAt(_t.x+_t.rx*mt,_t.z+_t.rz*mt)+.16,tx:_t.tx,tz:_t.tz,slope:_t.slope,div:_t.div,divInfo:_t.divInfo,lat:mt,post:P,distToFinish:Math.max(0,5e3-V.m)})}let D=c.filter(G=>b.byId[G.id].finished).sort((G,V)=>G.officialS-V.officialS),O=c.filter(G=>!b.byId[G.id].finished).sort((G,V)=>b.byId[V.id].m-b.byId[G.id].m||G.officialS-V.officialS);b.order=[...D,...O].map(G=>G.id),b.leader=b.byId[b.order[0]];let U=h[b.order[0]];for(let[G,V]of b.order.entries()){let ut=b.byId[V];if(ut.finished)ut.gapText=G===0?Bo(h[V].officialS):`+${(h[V].officialS-f.officialS).toFixed(0)}s`;else if(G===0)ut.gapText="LEADER";else{let mt=b.byId[b.order[0]].finished?f:U;ut.gapText=`+${Math.max(0,E-pf(mt.progress,ut.m)).toFixed(1)}s`}}return x.size>400&&x.clear(),x.set(y,b),b}return{stateAt:v,orderAt:_=>v(_).order,gapM:(_,y,E)=>{let A=v(E);return Math.abs((A.byId[_]?.m??0)-(A.byId[y]?.m??0))},finishedAt:(_,y)=>v(y).byId[_]?.finished,allFinishedAt:_=>_>p,firstFinishB:M,lastFinishB:p,photoFinish:u,finishOrder:m,place:d,byId:h,R:c,rateAt:w,durationS:n.durationS}}function Bo(i){let t=Math.floor(i/60),e=Math.round(i-t*60);return`${t}:${String(e).padStart(2,"0")}`}function cc({plan:i,sim:t,backedIds:e=[],hasDiversion:n}){let s=i.events||[],r=t.lastFinishB+3.5,o=[],a=(T,C,_,y,E={})=>{_-C>=1.2&&o.push({type:T,a:C,b:_,prio:y,...E})},l=t.firstFinishB,c=t.finishOrder.map(T=>({who:T,broadcastS:t.byId[T].finishB})),h=l-5.5;c.forEach((T,C)=>{let _=c[C-1];_&&T.broadcastS-_.broadcastS>7.5&&(a("front",_.broadcastS+2.2,T.broadcastS-3.2,10,{ids:[T.who],tag:"chaser"}),h=T.broadcastS-3.2),a("finishcam",h,T.broadcastS+2.2,10,{ids:[T.who]}),h=T.broadcastS+2.2}),t.photoFinish&&a("photo",l-.02,l+.02,11);let m=s.find(T=>T.type==="final_stretch");if(m){let T=m.broadcastS,C=l-5.5,_=Math.max(1,Math.round((C-T)/6)),y=["final","track","battle","final","drone","front"];for(let E=0;E<_;E++){let A=T+(C-T)*E/_,b=T+(C-T)*(E+1)/_,D=(A+b)/2,O=t.orderAt(D),U=y[E%y.length],G=[O[0]];U==="battle"&&(G=[O[0],O[1]]);let V=t.gapM(O[0],O[1],D)<12;E===0?(U="final",G=[O[0]]):V&&U!=="final"&&(U="battle",G=[O[0],O[1]]),a(U,A,b,5,{ids:G})}}let d=s.filter(T=>T.type==="diversion").sort((T,C)=>T.broadcastS-C.broadcastS);d[0]&&a("distracted",d[0].broadcastS-.4,Math.max(d[0].broadcastS+6.5,Math.min((d[0].endBroadcastS??d[0].broadcastS+8)+1.2,d[0].broadcastS+9)),9,{ids:[d[0].who],banner:!0});for(let T of s.filter(C=>C.type==="hill")){let C=t.rateAt(T.broadcastS),_=Math.max(2.6,Math.min(6,140/Math.max(1,C*3.4)));a("hill",T.broadcastS-1.4,T.broadcastS+_,7,{lap:T.lap})}let f=s.find(T=>T.type==="lap");f&&a("lapboard",f.broadcastS-2.6,f.broadcastS+2,6);for(let T of s.filter(C=>C.type==="lead_change"))a("battle",T.broadcastS-1.6,T.broadcastS+2.8,6,{ids:[T.to,T.from],tag:"lead"});let g=-1e9,M=s.filter(T=>T.type==="lead_change").map(T=>T.broadcastS);for(let T of s.filter(C=>C.type==="overtake")){let C=e.includes(T.by)||e.includes(T.on),y=t.orderAt(T.broadcastS+.5).indexOf(T.by)<=1;!C&&!y||T.broadcastS-g<11||M.some(E=>Math.abs(E-T.broadcastS)<6)||(g=T.broadcastS,a("battle",T.broadcastS-1.4,T.broadcastS+2.6,C?4:3,{ids:[T.by,T.on]}))}a("startgo",-3.2,2.4,12),a("heli",-8.5,-3.2,12),o.sort((T,C)=>C.prio-T.prio||T.a-C.a);let p=[],u=(T,C)=>!p.some(_=>T<_.b&&C>_.a);for(let T of o){if(u(T.a,T.b)){p.push(T);continue}let C=T.a,_=T.b;for(let y of p)C<y.b&&_>y.a&&(y.a<=C?C=y.b:_=Math.min(_,y.a));_-C>=2.2&&u(C,_)&&p.push({...T,a:C,b:_})}p.sort((T,C)=>T.a-C.a);let w=[],x=-8.5,v=0,B=["track","drone","front","chase","track","blimp","front","side"],R=(T,C)=>{let _=C-T;if(_<=.05)return;if(_<2.2&&w.length){w.at(-1).b=C;return}let y=Math.max(1,Math.round(_/5.2));for(let E=0;E<y;E++){let A=T+_*E/y,b=T+_*(E+1)/y,D=(A+b)/2,O=t.orderAt(D),U=B[v++%B.length],G=[O[0]],V=e.filter(ut=>!t.finishedAt(ut,D)&&t.gapM(O[0],ut,D)>25);V.length&&v%3===0?(U="chase",G=[V[v%V.length]]):U==="track"||U==="side"?G=O.filter(ut=>t.gapM(O[0],ut,D)<15).slice(0,3):(U==="drone"||U==="blimp")&&(G=O),t.allFinishedAt(D-2)&&(U="celebrate",G=t.finishOrder),w.push({type:U,a:A,b,prio:1,ids:G,filler:!0})}};for(let T of p)T.a>x&&R(x,T.a),w.push(T),x=Math.max(x,T.b);return x<r+30&&R(x,r+30),w}function xf({camera:i,C:t,sim:e,world:n,funfair:s}){let r={pos:new k,look:new k,fov:45},o={off:new k,lookOff:new k,fov:45,init:!1},a=null,l=new k,c=new k,h=new k(0,1,0),m={};function d(w,x){let v=e.stateAt(x),B=w.map(O=>v.byId[O]).filter(Boolean);if(!B.length)return{p:new k(v.leader.x,v.leader.y,v.leader.z),h:new k(v.leader.tx,0,v.leader.tz),m:v.leader.m,spread:0};let R=new k,T=0;for(let O of B)R.x+=O.x,R.y+=O.y,R.z+=O.z,T+=O.m;R.divideScalar(B.length),T/=B.length;let C=1e9,_=-1e9;for(let O of B)C=Math.min(C,O.m),_=Math.max(_,O.m);let y=B[0],E=Math.max(0,y.mVis-18),A=t.xzAt(E,y.id),b=t.xzAt(E+36,y.id),D=new k(b.x-A.x,0,b.z-A.z).normalize();return isFinite(D.x)||D.set(0,0,1),{p:R,h:D,m:T,spread:_-C,list:B}}let f=w=>new k(-w.z,0,w.x);function g(w,x,v){let B=(x-w.a)/Math.max(.01,w.b-w.a),R=n.anchors.finish,T=n.anchors.start,C,_,y=45,E=!0;switch(w.type){case"heli":{let A=new k(150,0,0),b=new k(T.x,T.y,T.z),D=hc(Math.min(1,B*1.05)),O=-1.2+D*1.6,U=420-D*360;C=new k(A.x+Math.cos(O)*U,170-D*140,A.z+Math.sin(O)*U).lerp(new k(b.x-T.tx*40+T.rx*25,b.y+22,b.z-T.tz*40+T.rz*25),D*D),_=A.clone().setY(10).lerp(b,Math.min(1,D*1.3)),y=50,E=!1;break}case"startgo":{let A=new k(T.x,T.y,T.z),b=new k(T.tx,0,T.tz),D=f(b);if(x<.6)C=A.clone().addScaledVector(b,9.5+(x+3.2)*.25).addScaledVector(D,2.6).add(h.clone().multiplyScalar(1.9)),_=A.clone().add(h.clone().multiplyScalar(1.3)).addScaledVector(b,-1),y=42;else{let O=d(e.orderAt(x).slice(0,3),x);C=O.p.clone().addScaledVector(O.h,11).addScaledVector(f(O.h),3.5).add(h.clone().multiplyScalar(2.2)),_=O.p.clone().add(h.clone().multiplyScalar(1.2)),y=44}E=!1;break}case"track":case"side":{let A=d(w.ids,x),b=f(A.h),D=w.type==="side"?-1:1,O=8+Math.min(14,A.spread*.6);C=A.p.clone().addScaledVector(b,D*(O+2)).addScaledVector(A.h,3+Math.sin(B*3)*.6).add(h.clone().multiplyScalar(2.6)),_=A.p.clone().addScaledVector(A.h,1.5).add(h.clone().multiplyScalar(1.1)),y=42;break}case"front":case"final":{let A=d(w.ids,x),b=f(A.h),D=w.type==="final"?7.5-B*1.5:7;C=A.p.clone().addScaledVector(A.h,D).addScaledVector(b,w.type==="final"?1.4:-2).add(h.clone().multiplyScalar(w.type==="final"?.9:1.8)),_=A.p.clone().add(h.clone().multiplyScalar(1.35)).addScaledVector(A.h,-2),y=w.type==="final"?38:42;break}case"chase":{let A=d(w.ids,x),b=f(A.h);C=A.p.clone().addScaledVector(A.h,-7.5).addScaledVector(b,2.2).add(h.clone().multiplyScalar(3)),_=A.p.clone().addScaledVector(A.h,5).add(h.clone().multiplyScalar(1.2)),y=46;break}case"battle":{let A=d(w.ids,x),b=f(A.h),D=Math.floor(w.a*7)%2?1:-1,O=11+Math.min(10,A.spread*.7);C=A.p.clone().addScaledVector(A.h,O*.7).addScaledVector(b,D*O*.75).add(h.clone().multiplyScalar(2.3)),_=A.p.clone().add(h.clone().multiplyScalar(1.1)),y=42;break}case"drone":case"blimp":{let A=e.stateAt(x),b=A.byId[A.order[0]],D=A.order.map(P=>A.byId[P]).filter(P=>!P.finished),O=new k;for(let P of D.length?D:[b])O.add(new k(P.x,P.y,P.z));O.divideScalar(Math.max(1,D.length));let U=D.length?D[0].m-D.at(-1).m:0,G=d([A.order[0]],x),V=w.type==="blimp"?38+Math.min(50,U*.25):20+Math.min(40,U*.25),ut=w.type==="blimp"?48:30+Math.min(40,U*.25),mt=O.clone().lerp(new k(b.x,b.y,b.z),.5);C=mt.clone().addScaledVector(G.h,-ut).addScaledVector(f(G.h),ut*.6).add(h.clone().multiplyScalar(V)),_=mt,y=46;break}case"hill":{let A=n.anchors.hillM,b=t.sample(A+105),D=new k(b.tx,0,b.tz),O=f(D);C=new k(b.x,b.y,b.z).addScaledVector(O,6.5).add(h.clone().multiplyScalar(2.2));let U=e.stateAt(x),G=U.order.map(P=>U.byId[P]).filter(P=>t.geoOf(P.m)>A-120&&t.geoOf(P.m)<A+200&&!P.finished),V=G.length?G[0]:null,ut=V?new k(V.x,V.y+1.1,V.z):new k(b.x,b.y+1,b.z);_=ut;let mt=C.distanceTo(ut);y=Vh.clamp(2*Math.atan(5.5/mt)*180/Math.PI,12,50),E=!0;break}case"lapboard":{let A=n.anchors.lapBoard,b=new k;A.getWorldPosition(b);let D=t.sample(2491),O=new k(D.tx,0,D.tz),U=f(O);C=new k(D.x,D.y,D.z).addScaledVector(U,-(4.6+3)).add(h.clone().multiplyScalar(2.4));let G=e.stateAt(x),V=G.order.map(mt=>G.byId[mt]).filter(mt=>mt.m>2350&&mt.m<2600),ut=V.length?new k(V[0].x,V[0].y+1.2,V[0].z):b.clone().add(h.clone().multiplyScalar(2));_=b.clone().add(h.clone().multiplyScalar(1.8)).lerp(ut,.45),y=46;break}case"finishcam":{let A=new k(R.tx,0,R.tz),b=f(A),D=e.stateAt(x),O=w.ids?.[0]??D.order[0],U=D.byId[O];C=new k(R.x,R.y,R.z).addScaledVector(A,16).addScaledVector(b,-4).add(h.clone().multiplyScalar(2.6));let G=new k(R.x,R.y+2.5,R.z),V=U&&!U.finished?new k(U.x,U.y+1.3,U.z):G;_=G.clone().lerp(V,U&&!U.finished?Math.min(.85,15/Math.max(15,U.distToFinish)):.3),y=U&&!U.finished&&U.distToFinish>30?30:40;break}case"celebrate":{let A=e.stateAt(x),b=new k;for(let G of A.order)b.add(new k(A.byId[G].x,A.byId[G].y,A.byId[G].z));b.divideScalar(A.order.length);let D=new k(R.tx,0,R.tz),O=f(D),U=Math.sin(x*.15)*.5;C=b.clone().addScaledVector(D,-10*Math.cos(U)).addScaledVector(O,10*Math.sin(U)).add(h.clone().multiplyScalar(2.6)),_=b.clone().add(h.clone().multiplyScalar(1.2)),y=46,E=!1;break}case"photo":{let A=new k(R.tx,0,R.tz),b=f(A);C=new k(R.x,R.y,R.z).addScaledVector(b,8.5).add(h.clone().multiplyScalar(1.3)),_=new k(R.x,R.y+1.1,R.z),y=40,E=!1;break}case"distracted":{let A=d(w.ids,x),b=f(A.h),D=n.anchors.nearestOnRibbon(A.p.x,A.p.z),O=Math.sign((D[0]-A.p.x)*b.x+(D[1]-A.p.z)*b.z)||1,U=b.clone().multiplyScalar(O),G=x-w.a;if(G<2.6&&s){let V=s.anchors.rides[0].pos,ut=G/2.6,mt=new k(V.x-A.p.x,0,V.z-A.p.z).normalize();C=A.p.clone().addScaledVector(A.h,-18+ut*2).addScaledVector(mt,-4).add(h.clone().multiplyScalar(13-ut*2)),_=new k(V.x,A.p.y+8,V.z).lerp(A.p.clone().add(h),.45+ut*.2),y=54,E=!1}else if(B<.62){let V=A.h.clone().multiplyScalar(.55).addScaledVector(U,.85).normalize();C=A.p.clone().addScaledVector(V,5.2).add(h.clone().multiplyScalar(2)),_=A.p.clone().add(h.clone().multiplyScalar(1.85)),y=46}else C=A.p.clone().addScaledVector(A.h,-12).addScaledVector(U,-9).add(h.clone().multiplyScalar(7.5)),_=A.p.clone().addScaledVector(U,10).add(h.clone().multiplyScalar(2.5)),y=52;break}default:{let A=d(w.ids||[],x);C=A.p.clone().addScaledVector(A.h,-10).add(h.clone().multiplyScalar(4)),_=A.p.clone()}}return{pos:C,look:_,fov:y,damp:E}}let M=0;function p(w,x,v){let B=v.find(y=>w>=y.a&&w<y.b)||v.at(-1),R=B.type==="distracted"?w-B.a<2.6?0:(w-B.a)/(B.b-B.a)<.62?1:2:0,T=B!==a||R!==M;M=R,a=B;let C=g(B,w,x);if(!C)return{shot:B,cut:T};let _=t.heightAt(C.pos.x,C.pos.z)+.8;if(C.pos.y<_&&(C.pos.y=_),T||!o.init||!C.damp)r.pos.copy(C.pos),r.look.copy(C.look),o.fov=C.fov,o.init=!0;else{let y=1-Math.exp(-4.5*x),E=r.pos.clone().sub(r.look),A=C.pos.clone().sub(C.look);E.lerp(A,y),r.look.copy(C.look),r.pos.copy(r.look).add(E),o.fov+=(C.fov-o.fov)*y}return i.position.copy(r.pos),i.lookAt(r.look),Math.abs(i.fov-o.fov)>.01&&(i.fov=o.fov,i.updateProjectionMatrix()),{shot:B,cut:T}}function u(){o.init=!1,a=null}return{update:p,reset:u,evaluate:g,get shot(){return a},cam:r}}function hc(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}var xx=`
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
.mr-row .mr-pos small{font-size:.42em;margin-right:2px;vertical-align:middle;color:#fff}
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
.mr-map{position:absolute;right:calc(var(--u)*2.2);top:calc(var(--u)*1.8);width:calc(var(--u)*17);height:calc(var(--u)*21);padding:calc(var(--u)*.5)}
.mr-map canvas{position:relative;width:100%;height:100%;display:block}
.mr-mapwrap{position:absolute;inset:0;background:rgba(255,255,255,.88);border:calc(var(--u)*.32) solid var(--ink);border-radius:calc(var(--u)*1.2);box-shadow:0 calc(var(--u)*.45) 0 rgba(0,0,0,.3)}
.mr-banner{position:absolute;left:50%;top:74%;transform:translate(-50%,-50%) scale(0);text-align:center;white-space:nowrap;transition:transform .35s cubic-bezier(.3,1.7,.5,1)}
.mr-banner.on{transform:translate(-50%,-50%) scale(1)}
.mr-banner .mr-b1{display:inline-block;padding:calc(var(--u)*.3) calc(var(--u)*2.4);font-size:calc(var(--u)*4.2);line-height:1.05;background:var(--pink);border:calc(var(--u)*.4) solid var(--ink);border-radius:calc(var(--u)*1.2);transform:skewX(-10deg) rotate(-3deg);box-shadow:0 calc(var(--u)*.6) 0 rgba(0,0,0,.35)}
.mr-banner .mr-b1 span{display:inline-block;transform:skewX(10deg)}
.mr-banner .mr-b2{display:block;margin-top:calc(var(--u)*.6);font-size:calc(var(--u)*1.8);-webkit-text-stroke:calc(var(--u)*.3) var(--ink);paint-order:stroke fill}
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
`,yf=i=>`${i}<sup>${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}</sup>`,yx=i=>`${i}${["th","st","nd","rd"][i%100>10&&i%100<14||i%10>3?0:i%10]}`,_x=i=>{i=Math.max(0,i);let t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`},fr=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),vx=i=>{let t=parseInt(i.slice(1),16);return(t>>16&255)*.299+(t>>8&255)*.587+(t&255)*.114>165?"#1a1420":"#ffffff"};function Mf(i,{runners:t,backedBy:e={},course:n,park:s,C:r}){if(!document.getElementById("mr-hud-css")){let dt=document.createElement("style");dt.id="mr-hud-css",dt.textContent=xx,document.head.appendChild(dt)}let o=document.createElement("div");o.className="mr-hud mr-dim",o.innerHTML=`
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
    <div class="mr-results"></div>`,i.appendChild(o);let a=dt=>o.querySelector(dt),l={};o.querySelectorAll("[data-k]").forEach(dt=>l[dt.dataset.k]=dt);let c=a(".mr-tower"),h={},m={};for(let dt of t){let H=document.createElement("div");H.className="mr-row",H.innerHTML=`<div class="mr-pos mr-num">1</div><div class="mr-card"><div class="mr-chip" style="background:${dt.colour.primary};border-right:4px solid ${dt.colour.secondary}"></div><div class="mr-name">${fr(ws(dt))}</div><div class="mr-gap"></div></div><span class="mr-badges"></span>`,c.appendChild(H),h[dt.id]={el:H,pos:H.querySelector(".mr-pos"),gap:H.querySelector(".mr-gap"),last:""};let q=document.createElement("div");q.className="mr-tag",q.innerHTML=`<span class="mr-tb"></span><span class="mr-tp mr-num"></span><span class="mr-tn" style="background:${dt.colour.primary};color:#fff">${fr(ws(dt))}</span>`,q.style.opacity="0",a(".mr-tags").appendChild(q),m[dt.id]={el:q,pos:q.querySelector(".mr-tp"),x:0,y:0,vis:!1}}function d(dt={}){for(let H of t){let q=(dt[H.id]||[]).filter(xt=>xt!=null&&xt!==""),z=q.map(xt=>`<span class="mr-badge" style="--bc:${vf(xt)}">${Mx(xt)?"":"\u2605"}${fr(String(xt)).slice(0,10)}</span>`).join(""),Lt=h[H.id].el;Lt.classList.toggle("backed",q.length>0),q.length?Lt.style.setProperty("--bc",vf(q[0])):Lt.style.removeProperty("--bc"),Lt.querySelector(".mr-badges").innerHTML=z,m[H.id].el.querySelector(".mr-tb").innerHTML=z}}d(e);let f=a(".mr-map canvas"),g=f.getContext("2d"),M=null,p=340,u=420;f.width=p,f.height=u;let w=n.points,x=1e9,v=1e9,B=-1e9,R=-1e9;for(let dt of w)x=Math.min(x,dt[0]),B=Math.max(B,dt[0]),v=Math.min(v,dt[2]),R=Math.max(R,dt[2]);if(n.funfair){let[dt,H]=n.funfair.center,q=n.funfair.radius*.6;x=Math.min(x,dt-q),B=Math.max(B,dt+q),v=Math.min(v,H-q),R=Math.max(R,H+q)}for(let dt in r.diversions)for(let H of r.diversions[dt])for(let q of H.path)x=Math.min(x,q[0]),B=Math.max(B,q[0]),v=Math.min(v,q[1]),R=Math.max(R,q[1]);let T=26,C=Math.min((p-T*2)/(B-x),(u-T*2)/(R-v)),_=(p-(B-x)*C)/2,y=(u-(R-v)*C)/2,E=dt=>_+(dt-x)*C,A=dt=>y+(dt-v)*C;function b(){let dt=document.createElement("canvas");dt.width=p,dt.height=u;let H=dt.getContext("2d"),q=($,zt,F,I)=>{H.beginPath(),$.forEach((ft,Rt)=>Rt?H.lineTo(E(ft[0]),A(ft[1])):H.moveTo(E(ft[0]),A(ft[1]))),H.strokeStyle=zt,H.lineWidth=F,H.lineJoin=H.lineCap="round",H.setLineDash(I||[]),H.stroke(),H.setLineDash([])},z=($,zt)=>{for(let F of s.features)F.kind===$&&F.closed&&(H.beginPath(),F.pts.forEach((I,ft)=>ft?H.lineTo(E(I[0]),A(I[1])):H.moveTo(E(I[0]),A(I[1]))),H.fillStyle=zt,H.fill())},Lt=s.features.filter($=>$.kind==="park").sort(($,zt)=>zt.pts.length-$.pts.length)[0];H.save(),H.beginPath(),Lt.pts.forEach(($,zt)=>zt?H.lineTo(E($[0]),A($[1])):H.moveTo(E($[0]),A($[1]))),H.fillStyle="#9be27a",H.fill(),H.restore(),z("water","#49a6ff"),z("track","#ff7a5c");for(let $ in r.diversions)for(let zt of r.diversions[$])q(zt.path,"#c79a5a",4,[6,6]);let xt=[];for(let $=0;$<=r.LAP1_END_DRAW;$+=10)xt.push(r.baseXZ($));q(xt,"#1a1420",11),q(xt,"#8fa0c4",6);let bt=[];for(let $=r.MAP_TO-80;$<=r.finishM;$+=10)bt.push(r.baseXZ($));q(bt,"#1a1420",11),q(bt,"#8fa0c4",6);let Ot=r.rawExt(r.finishM);return H.fillStyle="#fff",H.strokeStyle="#1a1420",H.lineWidth=3,H.fillRect(E(Ot[0])-7,A(Ot[1])-7,14,14),H.strokeRect(E(Ot[0])-7,A(Ot[1])-7,14,14),H.fillStyle="#1a1420",H.fillRect(E(Ot[0])-7,A(Ot[1])-7,7,7),H.fillRect(E(Ot[0]),A(Ot[1]),7,7),dt}M=b();function D(){M=b()}let O=0,U=a(".mr-banner");function G(dt,H="",q="#ff3d8b",z=2.4){U.querySelector(".mr-b1 span").textContent=dt,U.querySelector(".mr-b1").style.background=q,U.querySelector(".mr-b2").textContent=H,U.classList.remove("on"),U.offsetWidth,U.classList.add("on"),O=z}let V="";function ut(dt,H){if(O>0&&(O-=dt,O<=0&&U.classList.remove("on")),!!H){if(H.raceS!=null&&(l.clock.textContent=_x(H.raceS)),H.leaderM!=null&&(l.lap.textContent=H.leaderM>=2500?"2":"1",l.dist.textContent=`${(Math.min(5e3,H.leaderM)/1e3).toFixed(1)} KM`,l.bar.style.width=`${Math.min(100,H.leaderM/5e3*100)}%`),H.order){let q=c.clientHeight||0,z=(c.querySelector(".mr-row")?.offsetHeight||40)+6;H.order.forEach((Lt,xt)=>{let bt=h[Lt.id];if(!bt)return;bt.el.style.transform=`translateY(${xt*z}px)`;let $=`${xt}|${Lt.gapText}|${Lt.finished}`+(Lt.posHtml||"");$!==bt.last&&(bt.last=$,bt.pos.innerHTML=Lt.posHtml??yf(xt+1),bt.gap.textContent=Lt.gapText,bt.el.classList.toggle("lead",xt===0&&!Lt.posHtml),bt.el.classList.toggle("fin",!!Lt.finished))})}if(H.tags)for(let q of H.tags){let z=m[q.id];z&&(q.visible!==z.vis&&(z.vis=q.visible,z.el.style.opacity=q.visible?"1":"0"),q.visible&&(z.el.style.transform=`translate(${q.x}px, ${q.y}px) translate(-50%,-100%) scale(${q.scale??1})`,z.p!==q.pos&&(z.p=q.pos,z.pos.textContent=q.pos?yx(q.pos):"",z.pos.style.display=q.pos?"":"none")))}if(H.dots){g.clearRect(0,0,p,u),g.drawImage(M,0,0);for(let q of[...H.dots].reverse())g.beginPath(),g.arc(E(q.x),A(q.z),q.lead?11:9,0,7),g.fillStyle=q.colour,g.fill(),g.lineWidth=3.5,g.strokeStyle="#1a1420",g.stroke(),q.focus&&(g.beginPath(),g.arc(E(q.x),A(q.z),15,0,7),g.strokeStyle="#fff",g.lineWidth=3,g.stroke());H.camDot&&(g.save(),g.translate(E(H.camDot.x),A(H.camDot.z)),g.rotate(H.camDot.a),g.fillStyle="rgba(26,20,32,.6)",g.beginPath(),g.moveTo(0,0),g.lineTo(-10,-22),g.lineTo(10,-22),g.fill(),g.restore())}}}function mt(dt){o.classList.toggle("mr-dim",!!dt)}function P(dt){o.classList.toggle("mr-dimtop",!!dt)}function _t(){O=0,U.classList.remove("on")}function Gt(dt){let H=a(".mr-card3");if(!dt){H.classList.remove("on");return}H.querySelector(".mr-lane span").textContent=dt.lane??"",H.querySelector(".mr-lane").style.background=dt.colour.primary,H.querySelector(".mr-info").style.background=`linear-gradient(180deg, ${dt.colour.primary}, ${bx(dt.colour.primary,-.25)})`,H.querySelector(".mr-nick").textContent=dt.nickname,H.querySelector(".mr-nick").style.color="#fff",H.querySelector(".mr-tagl").textContent=dt.tagline||"",H.querySelector(".mr-tagl").style.color=vx(dt.colour.primary)==="#ffffff"?"#fff":"#1a1420",H.classList.remove("on"),H.offsetWidth,H.classList.add("on")}function N(dt){let H=a(".mr-count");H.textContent=dt,H.classList.remove("pop"),H.offsetWidth,H.classList.add("pop")}function Z(dt,H=""){a(".mr-photo").classList.toggle("on",!!dt),a(".mr-pcap").textContent=H,a(".mr-pcap").style.display=H?"":"none"}function nt(dt,H="Place your halfway bets!"){a(".mr-market").classList.toggle("on",!!dt),a(".mr-market .mr-m2").textContent=H}function J(dt,{title:H="",kicker:q="",theme:z=""}={}){let Lt=a(".mr-title");if(dt){Lt.querySelector(".mr-t0").textContent=q,Lt.querySelector(".mr-t1").textContent=H;let xt=Lt.querySelector(".mr-t2");xt.textContent=z,xt.style.display=z?"":"none",Lt.querySelector(".mr-t0").style.display=q?"":"none"}Lt.classList.toggle("on",!!dt)}function lt(dt,H){let q=H[0]-dt[0],z=H[1]-dt[1],Lt=Math.hypot(q,z)||1,xt=q/Lt,bt=z/Lt,Ot=dt[0]-xt*Lt*.6,$=dt[1]-bt*Lt*.6,zt=a(".mr-photo .mr-line");zt.style.width=`${Lt*2.2}px`,zt.style.transform=`translate(${Ot}px, ${$}px) rotate(${Math.atan2(bt,xt)}rad)`}function at(dt){let H=a(".mr-results");if(!dt){H.classList.remove("on");return}H.innerHTML='<div class="mr-panel mr-rh"><div class="mr-unskew">RESULTS</div></div>'+dt.map(q=>`<div class="mr-rr"><span class="mr-num">${yf(q.place)}</span><span style="width:calc(var(--u)*1.2);height:calc(var(--u)*2.2);background:${q.colour};border:2px solid #1a1420;border-radius:4px"></span><span>${fr(q.nickname)}</span><span class="mr-t">${fr(q.timeText||"")}</span></div>`).join(""),requestAnimationFrame(()=>H.classList.add("on"))}function Tt(){o.remove()}return{root:o,update:ut,setBackedBy:d,redrawMap:D,showBanner:G,clearBanner:_t,setDim:mt,setDimTop:P,introCard:Gt,countdown:N,photo:Z,photoLine:lt,results:at,market:nt,titleCard:J,dispose:Tt}}function ws(i){if(i.shortName)return i.shortName;let t=String(i.nickname||i.id).replace(/^the\s+/i,"");if(t.length<=14)return t;let e=t.split(/\s+/),n=e.slice(-2).join(" ");return n.length<=14?n:e.at(-1).slice(0,14)}var _f=["#ffd23f","#ff8fc8","#7fe0ff","#9dff8a","#ffb067","#c7a6ff"],ko=new Map;function vf(i){return ko.has(i)||ko.set(i,ko.size),_f[ko.get(i)%_f.length]}var Mx=i=>/\p{Extended_Pictographic}/u.test(String(i));function bx(i,t){let e=parseInt(i.slice(1),16),n=e>>16&255,s=e>>8&255,r=e&255,o=a=>Math.max(0,Math.min(255,Math.round(t<0?a*(1+t):a+(255-a)*t)));return`rgb(${o(n)},${o(s)},${o(r)})`}var Ho=(i,t,e=12,n=!0)=>Ke(256,256,(s,r,o)=>{for(let a=0;a<e;a++)s.fillStyle=a%2?i:t,n?s.fillRect(a*r/e,0,r/e+1,o):s.fillRect(0,a*o/e,r,o/e+1)});function bf(i,t,e,n){let s=mn(42),r=new he;i.add(r);let o=[],a=[],l=(A,b=3)=>(Un(A,b,void 0,30),A),c=(A,b,D=3)=>ge(A,b,{ol:D,olRef:30}),h=[];for(let A=0;A<n.path.length;A++){let b=n.path[A],D=e.anchors.nearestOnRibbon(b[0],b[1]),O=Math.hypot(b[0]-D[0],b[1]-D[1]);h.push({x:(b[0]+D[0])/2,z:(b[1]+D[1])/2,gap:O})}let m=0;h.forEach((A,b)=>{b&&(m+=Math.hypot(A.x-h[b-1].x,A.z-h[b-1].z)),A.s=m});let d=m,f=A=>{let b=0;for(;b<h.length-2&&h[b+1].s<A;)b++;let D=h[b],O=h[b+1],U=Math.max(0,Math.min(1,(A-D.s)/Math.max(1e-6,O.s-D.s))),G=D.x+(O.x-D.x)*U,V=D.z+(O.z-D.z)*U,ut=Math.hypot(O.x-D.x,O.z-D.z)||1;return{x:G,z:V,gap:D.gap+(O.gap-D.gap)*U,tx:(O.x-D.x)/ut,tz:(O.z-D.z)/ut,y:t.heightAt(G,V)}},g=h.filter(A=>A.gap>26),M=g.length?g[0].s:d*.25,p=g.length?g.at(-1).s:d*.75,u=A=>Array.from({length:A},(b,D)=>f(M+(D+.5)/A*(p-M))),w=(A,b,D=0)=>(A.position.set(b.x,b.y-.1,b.z),A.rotation.y=Math.atan2(b.tx,b.tz)+D,r.add(A),A),x={center:f((M+p)/2),rides:[]},v=u(7);{let A=v.slice(1,6).sort((J,lt)=>lt.gap-J.gap)[0],b=new he,D=17,O=D+2.6,U=new le(.35,.5,O/Math.cos(.32)+1,8);for(let J of[-1,1])for(let lt of[-1,1]){let at=c(U,pt("#ffffff"));at.position.set(J*1.8,O/2,lt*Math.tan(.32)*O/2),at.rotation.x=-lt*.32,b.add(at)}let G=c(new ye(6,1,8,2,.3),pt("#2e9bff"));G.position.y=.5,b.add(G);let V=new he;V.position.y=O,b.add(V);let ut=c(new Ge(D,.45,8,64),pt("#ff3d8b"));ut.rotation.y=Math.PI/2,ut.position.x=1.2,V.add(ut);let mt=c(new Ge(D,.45,8,64),pt("#ff3d8b"));mt.rotation.y=Math.PI/2,mt.position.x=-1.2,V.add(mt);let P=c(new le(1.3,1.3,3.2,16).rotateZ(Math.PI/2),pt("#ffd23f"));V.add(P);let _t=16,Gt=[],N=[];for(let J=0;J<_t;J++){let lt=J/_t*Math.PI*2,at=c(new Me(.18,D,.18).translate(0,D/2,0),pt("#ffffff"),2);at.rotation.x=lt,at.position.x=1.2,V.add(at);let Tt=at.clone();Tt.position.x=-1.2,V.add(Tt);let dt=new he;dt.position.set(0,Math.cos(lt)*D,Math.sin(lt)*D),V.add(dt);let H=new he;dt.add(H);let q=["#ffd23f","#3ddc84","#2e9bff","#ff8a3d","#b07bff"][J%5],z=c(new ye(1.7,1.3,1.5,2,.35),pt(q));z.position.y=-1.3,H.add(z);let Lt=c(new ke(1.2,.7,4).rotateY(Math.PI/4),pt("#ffffff"),2);Lt.position.y=-.1,H.add(Lt),Gt.push(dt);for(let xt=0;xt<3;xt++){let bt=lt+xt/3*(Math.PI*2/_t);N.push([1.2,Math.cos(bt)*D,Math.sin(bt)*D],[-1.2,Math.cos(bt)*D,Math.sin(bt)*D])}}let Z=new Ye(new pe(.32,8,6),new bn({color:16777215}),N.length),nt=new Ce;N.forEach((J,lt)=>{nt.position.set(...J),nt.updateMatrix(),Z.setMatrixAt(lt,nt.matrix),Z.setColorAt(lt,new se(["#fff27a","#ff7ac8","#7affff"][lt%3]))}),V.add(Z),w(b,A,0),a.push(J=>{V.rotation.x=J*.18;for(let lt of Gt)lt.rotation.x=-J*.18}),x.rides.push({kind:"wheel",obj:b,pos:new k(A.x,A.y+O,A.z),r:D}),A.used=!0}{let A=v.filter(N=>!N.used).sort((N,Z)=>Z.gap-N.gap)[0];A.used=!0;let b=new he,D=Math.min(6.5,A.gap*.28);b.scale.setScalar(1.45);let O=Ho("#ffffff","#ff4f6d",16);o.push(O);let U=c(new le(D,D+.3,.9,32),pt("#ffffff",{map:O}));U.position.y=.45,b.add(U);let G=new he;b.add(G);let V=c(new le(.7,.7,5,16),pt("#ffd23f"));V.position.y=3,G.add(V);let ut=Ho("#ffd23f","#ff3d8b",16);o.push(ut);let mt=c(new ke(D+.8,2.8,16),pt("#ffffff",{map:ut}));mt.position.y=6.6,G.add(mt);let P=c(new le(D+.8,D+.8,.7,16,1,!0),pt("#2e9bff",{side:We}));P.position.y=4.9,G.add(P);let _t=c(new pe(.5,12,8),pt("#ff3d8b"));_t.position.y=8.2,G.add(_t);let Gt=[];for(let N=0;N<8;N++){let Z=N/8*Math.PI*2,nt=D*.72,J=new he;J.position.set(Math.cos(Z)*nt,0,Math.sin(Z)*nt),J.rotation.y=-Z,G.add(J);let lt=c(new le(.06,.06,4.2,6),pt("#ffd23f"),1.5);lt.position.y=2.9,J.add(lt);let at=new he;J.add(at);let Tt=["#ffffff","#ffd6f0","#d6f0ff","#fff2b0"][N%4],dt=c(new ye(.7,.7,1.6,2,.3),pt(Tt));at.add(dt);let H=c(new ye(.45,.9,.5,2,.2),pt(Tt));H.position.set(0,.55,.7),H.rotation.x=.4,at.add(H);let q=c(new ye(.45,.45,.8,2,.2),pt(Tt));q.position.set(0,.95,1.05),at.add(q);let z=c(new ye(.15,.8,.3,1,.06),pt(["#ff3d8b","#2e9bff","#3ddc84","#ff8a3d"][N%4]),2);z.position.set(0,.75,.55),z.rotation.x=.4,at.add(z);let Lt=c(new ye(.75,.2,.6,1,.08),pt("#ff3d8b"),2);Lt.position.y=.4,at.add(Lt);for(let[xt,bt]of[[-.22,.55],[.22,.55],[-.22,-.55],[.22,-.55]]){let Ot=c(new Me(.16,.7,.16),pt(Tt),1.5);Ot.position.set(xt,-.55,bt),Ot.rotation.x=bt>0?-.5:.5,at.add(Ot)}at.rotation.y=Math.PI/2,Gt.push({horse:at,ph:N*.8})}w(b,A),a.push(N=>{G.rotation.y=N*.6;for(let Z of Gt)Z.horse.position.y=2+Math.sin(N*2.2+Z.ph)*.35}),x.rides.push({kind:"carousel",obj:b,pos:new k(A.x,A.y+6,A.z),r:D*1.45})}{let A=v.filter(N=>!N.used).sort((N,Z)=>Z.gap-N.gap)[0];A.used=!0;let b=new he,D=15;b.scale.setScalar(1.5);let O=Ho("#ff3d3d","#ffffff",10,!1);o.push(O);let U=c(new le(1.6,2.6,D,16),pt("#ffffff",{map:O}));U.position.y=D/2,b.add(U);let G=c(new ke(2.6,3.4,16),pt("#2e9bff"));G.position.y=D+1.7,b.add(G);let V=c(new le(.06,.06,2,6),pt("#ffffff"),1.5);V.position.y=D+4.2,b.add(V);let ut=c(new sn(1.2,.7).translate(.6,0,0),pt("#ffd23f",{side:We}),1.5);ut.position.y=D+4.8,b.add(ut);let mt=[],P=3.2;for(let N=0;N<=160;N++){let Z=N/160,nt=Z*P*Math.PI*2,J=2.6+(1-Z)*-.8+1.6;mt.push(new k(Math.cos(nt)*J,D-1-Z*(D-2),Math.sin(nt)*J))}let _t=c(new To(new Qs(mt),220,.55,8,!1),pt("#ffd23f"));_t.scale.y=1,b.add(_t);let Gt=c(new ye(3,.3,2,2,.1),pt("#3ddc84"),2);Gt.position.set(mt.at(-1).x+1,.15,mt.at(-1).z),b.add(Gt),w(b,A),a.push(N=>{ut.rotation.y=Math.sin(N*3)*.4}),x.rides.push({kind:"helter",obj:b,pos:new k(A.x,A.y+12,A.z),r:6})}let B=[["CANDYFLOSS","#ff9bd2"],["HOOK-A-DUCK","#57c7ff"],["DOUGHNUTS","#ffb347"],["COCONUT SHY","#8ee86b"],["TOFFEE APPLES","#ff5d5d"],["HOOK-A-DUCK","#57c7ff"]],R=[];[...v.filter(A=>!A.used),...u(13).filter((A,b)=>b%2===1)].slice(0,7).forEach((A,b)=>{let[D,O]=B[b%B.length],U=new he,G=b%2?1:-1,V=c(new ye(4.2,2.4,3,2,.2),pt("#fff6e0"));V.position.y=1.2,U.add(V);let ut=c(new ye(4.4,1.1,.8,2,.15),pt(O));ut.position.set(0,.55,1.7),U.add(ut);let mt=Ho("#ffffff",O,10);o.push(mt);let P=c(new Me(4.8,.18,2.4),pt("#ffffff",{map:mt}));P.position.set(0,2.9,1.4),P.rotation.x=.32,U.add(P);for(let lt of[-1,1]){let at=c(new le(.09,.09,2.6,6),pt("#ffffff"),1.5);at.position.set(lt*2.2,1.6,2.4),U.add(at)}let _t=Nn(512,128,(lt,at,Tt)=>{lt.fillStyle="#1a1420",He(lt,0,0,at,Tt,30),lt.fill(),lt.fillStyle=O,He(lt,8,8,at-16,Tt-16,24),lt.fill(),je(lt,D,at/2,Tt/2+4,D.length>11?52:64,"#ffffff","#1a1420",.2)},o),Gt=ge(new ye(4.2,1.05,.3,2,.1),[pt(O),pt(O),pt(O),pt(O),pt("#ffffff",{map:_t}),pt("#ffffff",{map:_t})],{ol:2.5,olRef:30});if(Gt.position.set(0,3.7,.4),U.add(Gt),D==="CANDYFLOSS")for(let lt=0;lt<4;lt++){let at=c(new $e(.32,1),pt("#ff9bd2"),1.5);at.position.set(-1.4+lt*.9,1.45,1.75),U.add(at)}if(D==="HOOK-A-DUCK"){let lt=c(new le(1.6,1.6,.6,20),pt("#57c7ff"),2);lt.position.set(0,.3,3.6),U.add(lt);let at=new he;at.position.set(0,.7,3.6),U.add(at);for(let Tt=0;Tt<6;Tt++){let dt=Tt/6*Math.PI*2,H=c(new pe(.22,10,8),pt("#ffd23f"),1.5);H.position.set(Math.cos(dt)*1.1,0,Math.sin(dt)*1.1);let q=c(new pe(.14,8,6),pt("#ffd23f"),1.2);q.position.set(0,.22,.12),H.add(q),at.add(H)}R.push(at)}let N=e.anchors.nearestOnRibbon(A.x,A.z),Z=Math.atan2(N[0]-A.x,N[1]-A.z),nt=Math.min(A.gap*.3,7)*G,J=w(U,{...A,x:A.x+A.tz*nt,z:A.z-A.tx*nt,y:t.heightAt(A.x+A.tz*nt,A.z-A.tx*nt)});J.rotation.y=Z+(G>0?0:Math.PI)*0}),a.push(A=>{for(let b of R)b.rotation.y=A*.8});{let A=[],b=[],D=[],O=[],U=[];for(let _t of[-1,1]){let Gt=null;for(let N=M-10;N<=p+10;N+=9){let Z=f(N),nt=(Z.gap/2-6)*_t,J=Z.x+Z.tz*nt,lt=Z.z-Z.tx*nt,at=t.heightAt(J,lt),Tt=new k(J,at+4.2,lt),dt=c(new le(.08,.1,4.3,6),pt("#ffffff"),1.5);if(dt.position.set(J,at+2.1,lt),r.add(dt),Gt)for(let H=0;H<=10;H++){let q=H/10,z=Gt.clone().lerp(Tt,q);z.y-=Math.sin(q*Math.PI)*.7,A.push(z),H<10&&(H%2?(b.push(z.clone()),D.push(["#fff27a","#ff7ac8","#7affff","#9dff7a"][(H+Math.round(N))%4])):(O.push({v:z.clone(),a:Math.atan2(-(Tt.z-Gt.z),Tt.x-Gt.x)}),U.push(["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d"][(H+Math.round(N/9))%5])))}Gt=Tt}}let G=new Ce,V=new Ye(new pe(.16,8,6),new bn({color:16777215}),b.length);b.forEach((_t,Gt)=>{G.position.copy(_t),G.updateMatrix(),V.setMatrixAt(Gt,G.matrix),V.setColorAt(Gt,new se(D[Gt]))}),r.add(V);let ut=new Ie;ut.setAttribute("position",new ue([-.32,0,0,.32,0,0,0,-.65,0],3)),ut.setAttribute("normal",new ue([0,0,1,0,0,1,0,0,1],3));let mt=new Ye(ut,pt("#ffffff",{side:We}),O.length);O.forEach((_t,Gt)=>{G.position.copy(_t.v),G.rotation.set(0,_t.a,0),G.updateMatrix(),mt.setMatrixAt(Gt,G.matrix),mt.setColorAt(Gt,new se(U[Gt]))}),r.add(mt);let P=[];for(let _t=0;_t+1<A.length;_t++)A[_t].distanceTo(A[_t+1])<3&&P.push(A[_t],A[_t+1]);r.add(new ys(new Ie().setFromPoints(P),new Ni({color:3355443}))),a.push(_t=>{V.material.color.setScalar(.85+.15*Math.sin(_t*6))})}{let A=f(M-4),b=Nn(1024,256,(O,U,G)=>{O.fillStyle="#1a1420",He(O,0,0,U,G,60),O.fill(),O.fillStyle="#ff3d8b",He(O,10,10,U-20,G-20,52),O.fill(),je(O,"\u2605 FUNFAIR \u2605",U/2,G/2+6,120,"#ffe14d","#1a1420",.18)},o),D=ge(new ye(10,2.4,.4,2,.15),[pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ffffff",{map:b}),pt("#ffffff",{map:b})],{ol:3,olRef:30});D.position.set(A.x,A.y+7.5,A.z),D.rotation.y=Math.atan2(A.tx,A.tz)+Math.PI/2,r.add(D);for(let O of[-1,1]){let U=c(new le(.25,.3,7.6,8),pt("#ffd23f"));U.position.set(A.x+A.tz*4.5*O,A.y+3.8,A.z-A.tx*4.5*O),r.add(U)}}let C=[];for(let A=0;A<60;A++){let b=M+s()*(p-M),D=f(b),O=(s()-.5)*(D.gap-16),U=D.x+D.tz*O,G=D.z-D.tx*O;C.push({x:U,y:t.heightAt(U,G),z:G,yaw:s()*6.28})}function _(A,b){for(let D of h){if(D.s<M-20||D.s>p+20)continue;let O=Math.max(6,D.gap/2-4);if((A-D.x)**2+(b-D.z)**2<O*O)return!0}return!1}function y(A){for(let b of a)b(A)}function E(){r.traverse(A=>{A.geometry&&A.geometry.dispose()});for(let A of o)A.dispose?.();i.remove(r)}return{group:r,update:y,dispose:E,anchors:x,crowd:C,at:f,s0:M,s1:p,contains:_}}function Sf(i,t,e,n,s,{camera:r,offsetX:o=3.2}){let a=new he;i.add(a);let l=[],c=t.sample(t.finishM+28),h=new k(c.tx,0,c.tz),m=new k(c.rx,0,c.rz),d=new k(c.x,t.heightAt(c.x,c.z),c.z),f=Math.atan2(h.x,h.z);a.position.copy(d),a.rotation.y=f;let g=[{place:2,x:-2.3,hgt:1.3,col:"#c9d3e6"},{place:1,x:0,hgt:1.9,col:"#ffd23f"},{place:3,x:2.3,hgt:.9,col:"#e59a5c"}];for(let b of g){let D=Nn(256,256,(U,G,V)=>{U.fillStyle="#2e6fe0",U.fillRect(0,0,G,V),U.fillStyle=b.col,U.fillRect(0,0,G,26),je(U,String(b.place),G/2,V/2+14,170,b.col,"#1a1420",.16)},l),O=ge(new ye(2.25,b.hgt,2,3,.12),[pt("#2e6fe0"),pt("#2e6fe0"),pt(b.col),pt("#2e6fe0"),pt("#ffffff",{map:D}),pt("#2e6fe0")],{ol:3.5,olRef:12});O.position.set(b.x,b.hgt/2,0),a.add(O),b.top=b.hgt}let M=Nn(1024,256,(b,D,O)=>{b.fillStyle="#1a1420",He(b,0,0,D,O,50),b.fill(),b.fillStyle="#ff3d8b",He(b,10,10,D-20,O-20,42),b.fill(),je(b,"MARKRUN CHAMPIONS",D/2,O/2+6,80,"#ffffff","#1a1420",.16)},l),p=ge(new ye(9,2.2,.3,2,.1),[pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ff3d8b"),pt("#ffffff",{map:M}),pt("#ffffff",{map:M})],{ol:3,olRef:14});p.position.set(0,5.6,-2.4),a.add(p);for(let b of[-1,1]){let D=ge(new le(.14,.16,5.6,8),pt("#ffffff"),{ol:2,olRef:14});D.position.set(b*4.3,2.8,-2.4),a.add(D)}let u=s.length,w=[];for(let b of s){let D=n[b.runnerId];if(!D)continue;let O=g.find(V=>V.place===b.place),U=O?new k(O.x,O.top,.1):null,G;if(b.place===1?G=["celebrate","jump"]:b.place===2?G=["pose","flex"]:b.place===3?G=["celebrate","fist"]:b.place===u&&u>3?G=["celebrate","collapse"]:G=["celebrate","shrug"],!U){w.push({rr:D,o:b,pose:G});continue}x(D,U,G)}w.forEach((b,D)=>{let O=D%2?1:-1,U=Math.floor(D/2),G=b.pose[1]==="collapse",V=new k(O*(G?4.6:4.2+U*1.6),0,G?1.6:.6+U*.8);x(b.rr,V,b.pose,G?-O*Math.PI/2:0)});function x(b,D,O,U=0){let G=D.clone().applyAxisAngle(new k(0,1,0),f).add(d);D.y===0&&(G.y=t.heightAt(G.x,G.z)+.05),b.root.position.copy(G),b.root.rotation.set(0,f+U,0),b.set(...O),b.setPop(null)}let v=mn(3),B=420,R=new Ye(new sn(.16,.26),new bn({side:We}),B),T=[],C=["#ff3d8b","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#ffffff","#b07bff"];for(let b=0;b<B;b++)T.push({x:(v()-.5)*14,y:v()*12,z:(v()-.5)*8,vy:1+v()*1.6,sp:v()*6,ph:v()*6.28}),R.setColorAt(b,new se(C[b%C.length]));R.frustumCulled=!1,a.add(R);let _=new Ce,y=0;function E(b,D){y+=b;for(let ut=0;ut<B;ut++){let mt=T[ut];mt.y-=mt.vy*b,mt.y<0&&(mt.y+=12),_.position.set(mt.x+Math.sin(y*1.3+mt.ph)*.5,mt.y,mt.z+Math.cos(y+mt.ph)*.4),_.rotation.set(y*mt.sp+mt.ph,y*mt.sp*.7,mt.ph),_.updateMatrix(),R.setMatrixAt(ut,_.matrix)}R.instanceMatrix.needsUpdate=!0;let O=Math.sin(y*.18)*.4,U=15-Math.min(2.5,y*.2),G=new k(Math.sin(O)*U,3+Math.sin(y*.3)*.3,Math.cos(O)*U).applyAxisAngle(new k(0,1,0),f);r.position.copy(d).add(G);let V=new k(o,2.2,0).applyAxisAngle(new k(0,1,0),f).add(d);r.lookAt(V),r.fov!==42&&(r.fov=42,r.updateProjectionMatrix())}function A(){a.traverse(b=>{b.geometry&&b.geometry.dispose()}),R.material.dispose();for(let b of l)b.dispose?.();i.remove(a)}return{update:E,dispose:A,center:d}}var ze=(i,t)=>{i=i.index?i.toNonIndexed():i;let e=new se(t).convertSRGBToLinear(),n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return i.setAttribute("color",new Ne(s,3)),i.getAttribute("uv")&&i.deleteAttribute("uv"),i},rn=(i,t,e,n,s=0,r=1.6)=>(i.scale(r,r,r),i.rotateY(s),i.translate(t,e,n),i);function Ef(i,t,e,n){let s=mn(777),r=new he;i.add(r);let o=[],a=[],l=(g,M)=>`lawn:${Math.floor(g/140)},${Math.floor(M/140)}`,c=(g,M,p,u=.8,w)=>a.push({x:g,y:t.heightAt(g,M),z:M,yaw:p,scale:u,colour:w,zone:l(g,M)}),{ribbonSamples:h}=e.anchors;function m(g,M,p){for(let u=0;u<40;u++){let w=h[Math.floor(s()*h.length)],x=s()*Math.PI*2,v=g+s()*(M-g),B=w[0]+Math.cos(x)*v,R=w[1]+Math.sin(x)*v;if(!(!e.inPark(B,R)||e.blocked(B,R,p+1)||!e.clearOf(B,R,p)||e.onPath(B,R,p+2)))return e.reserve(B,R,p),{x:B,z:R,y:t.heightAt(B,R),toPath:Math.atan2(w[0]-B,w[1]-R)}}return null}{let g=[],M=["#ff5d8f","#ffd23f","#2e9bff","#3ddc84","#ff8a3d","#b07bff"],p=(R,T,C,_,y,E)=>{g.push(rn(ze(new Me(1.6,.2,1.6).translate(0,2,0),y),R,T,C,_));for(let[D,O]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]])g.push(rn(ze(new le(.08,.08,2,6).translate(D,1,O),"#ffffff"),R,T,C,_));g.push(rn(ze(new ke(1.25,1,4).rotateY(Math.PI/4).translate(0,2.6,0),E),R,T,C,_));let A=new Me(.9,.12,3.3);A.rotateX(-.62),A.translate(0,1.05,2.1),g.push(rn(ze(A,E),R,T,C,_));let b=new Me(.8,.08,2.4);b.rotateX(1),b.translate(0,1,-1.3),g.push(rn(ze(b,"#ffffff"),R,T,C,_))},u=(R,T,C,_,y)=>{for(let E of[-1.8,1.8])for(let A of[-.6,.6]){let b=new le(.08,.08,2.8,6);b.rotateX(A>0?.22:-.22),b.translate(E,1.35,A*.5),g.push(rn(ze(b,y),R,T,C,_))}g.push(rn(ze(new le(.1,.1,3.8,8).rotateZ(Math.PI/2).translate(0,2.7,0),y),R,T,C,_));for(let E of[-.8,.8]){g.push(rn(ze(new Me(.6,.08,.35).translate(E,.75,0),"#22202c"),R,T,C,_));for(let A of[-.25,.25])g.push(rn(ze(new le(.02,.02,1.9,4).translate(E+A,1.7,0),"#888888"),R,T,C,_))}},w=(R,T,C,_)=>{let y=new pe(1.6,8,5,0,Math.PI*2,0,Math.PI/2);g.push(rn(ze(y,_),R,T,C)),g.push(rn(ze(new le(.4,.4,.5,8).translate(0,1.7,0),"#ffffff"),R,T,C))},x=(R,T,C,_,y)=>{g.push(rn(ze(new le(1.5,1.5,.25,16).translate(0,.35,0),_),R,T,C)),g.push(rn(ze(new le(.1,.1,1,6).translate(0,.9,0),y),R,T,C)),g.push(rn(ze(new Ge(.9,.06,6,16).rotateX(Math.PI/2).translate(0,1.2,0),y),R,T,C))},v=(R,T,C,_,y)=>{g.push(rn(ze(new pe(.45,10,8).scale(1,.9,1.4).translate(0,.95,0),y),R,T,C,_)),g.push(rn(ze(new pe(.3,8,6).translate(0,1.4,.55),y),R,T,C,_)),g.push(rn(ze(new le(.12,.12,.6,6).translate(0,.3,0),"#888888"),R,T,C,_))},B=[p,u,w,x,v];for(let R of n.features){if(R.kind!=="playground"||!R.closed)continue;let T=En(R.pts),C=(T[2]-T[0])*(T[3]-T[1]),_=Math.max(1,Math.min(9,Math.round(C/380))),y=[];for(let E=0,A=0;E<_&&A<80;A++){let b=T[0]+3+s()*(T[2]-T[0]-6),D=T[1]+3+s()*(T[3]-T[1]-6);if(!Ss(R.pts,b,D)||y.some(mt=>Math.hypot(mt[0]-b,mt[1]-D)<8.5))continue;y.push([b,D]),E++;let O=t.heightAt(b,D)-.05,U=s()*6.28,G=M[Math.floor(s()*M.length)],V=M[Math.floor(s()*M.length)],ut=B[(E+y.length+Math.floor(s()*5))%B.length];ut===p||ut===u||ut===v?ut(b,O,D,U,G,V):ut(b,O,D,G,V),s()<.6&&c(b+2.5,D+1.5,s()*6,.55)}}if(g.length){let R=ge(Xe(g),pt("#ffffff",{vertexColors:!0}),{ol:2,olRef:30});r.add(R)}}{let g=Ke(64,64,(C,_,y)=>{for(let E=0;E<6;E++)for(let A=0;A<6;A++)C.fillStyle=(E+A)%2?"#ffffff":"#c8c8c8",C.fillRect(E*_/6,A*y/6,_/6+1,y/6+1)});o.push(g);let M=new sn(2.8,2.2);M.rotateX(-Math.PI/2);let p=[],u=[],w=[],x=["#ff4f6d","#2e9bff","#3ddc84","#ffd23f","#ff8a3d","#b07bff"];for(let C=0;C<90;C++){let _=m(12,70,3);if(!_)continue;let y=s()*6.28;p.push({x:_.x,y:_.y+.06,z:_.z,ry:y}),u.push(x[C%x.length]),w.push({x:_.x+Math.cos(y)*.7,y:_.y+.05,z:_.z-Math.sin(y)*.7,ry:y});let E=1+Math.floor(s()*3);for(let A=0;A<E;A++){let b=y+A/E*Math.PI*2+.5,D=_.x+Math.cos(b)*.9,O=_.z-Math.sin(b)*.9;c(D,O,_.toPath+(s()-.5),.62+s()*.15)}}let v=new Ye(M,pt("#ffffff",{map:g,polygonOffset:!0,polygonOffsetFactor:-1}),p.length),B=new Ce;p.forEach((C,_)=>{B.position.set(C.x,C.y,C.z),B.rotation.set(0,C.ry,0),B.updateMatrix(),v.setMatrixAt(_,B.matrix),v.setColorAt(_,new se(u[_]))}),v.receiveShadow=!0,v.computeBoundingSphere(),r.add(v),e.registerInstanced(v,p);let R=Xe([ze(new ye(.7,.45,.5,2,.08).translate(0,.22,0),"#c98a4a"),ze(new Ge(.25,.04,6,12,Math.PI).translate(0,.45,0),"#8a5a36")]),T=new Ye(R,pt("#ffffff",{vertexColors:!0}),w.length);w.forEach((C,_)=>{B.position.set(C.x,C.y,C.z),B.rotation.set(0,C.ry,0),B.updateMatrix(),T.setMatrixAt(_,B.matrix)}),T.castShadow=!0,T.computeBoundingSphere(),Un(T,1.6,void 0,20),r.add(T),e.registerInstanced(T,w)}{let g=Xe([new Ln(.22,.5,4,8).rotateX(Math.PI/2).translate(0,.45,0),new pe(.22,10,8).translate(0,.72,.42),new pe(.1,6,5).scale(.6,1.4,.6).translate(-.14,.86,.36),new pe(.1,6,5).scale(.6,1.4,.6).translate(.14,.86,.36),new pe(.09,6,5).translate(0,.66,.64),...[[-.13,.25],[.13,.25],[-.13,-.25],[.13,-.25]].map(([C,_])=>new le(.06,.06,.32,6).translate(C,.16,_)),new le(.04,.03,.35,5).rotateX(-.9).translate(0,.6,-.42)].map(C=>C.index?C.toNonIndexed():C).map(C=>(C.deleteAttribute("uv"),C))),M=Xe([ze(new pe(.55,12,8,0,Math.PI*2,Math.PI*.45,Math.PI*.55).scale(1,.8,1.3).translate(0,.95,0),"#ffffff"),ze(new pe(.56,12,8,Math.PI,Math.PI,0,Math.PI*.5).scale(1,.9,.9).translate(0,.95,-.2),"#ffffff"),...[[-.45,.45],[.45,.45],[-.45,-.45],[.45,-.45]].map(([C,_])=>ze(new Ge(.2,.06,6,12).rotateY(Math.PI/2).translate(C,.22,_),"#22202c")),ze(new le(.03,.03,.9,5).rotateX(.6).translate(0,1.15,-.85),"#22202c")]),p=[],u=[],w=[],x=[],v=["#c98a4a","#3b2a20","#f2e6d0","#8a8a8a","#e0b070","#ffffff"];for(let C=0;C<64;C++){let _=m(8,60,1.6);if(!_)continue;let y=s()*6.28;c(_.x,_.z,y,.82);let E=Math.sin(y),A=Math.cos(y);C%4===3?(w.push({x:_.x+E*1.4,y:_.y,z:_.z+A*1.4,ry:y,s:1}),x.push(["#ffb3c7","#b3dcff","#c8f0b0","#fff0a0"][C%4])):(p.push({x:_.x+E*1.6+A*.8,y:_.y,z:_.z+A*1.6-E*.8,ry:y+(s()-.5)*.8,s:.8+s()*.6}),u.push(v[Math.floor(s()*v.length)]))}let B=new Ce,R=(C,_,y,E)=>{let A=new Ye(C,_,y.length);return y.forEach((b,D)=>{B.position.set(b.x,b.y,b.z),B.rotation.set(0,b.ry,0),B.scale.setScalar(b.s),B.updateMatrix(),A.setMatrixAt(D,B.matrix),E&&A.setColorAt(D,new se(E[D]))}),A.castShadow=!0,A.receiveShadow=!0,A.computeBoundingSphere(),Un(A,2,void 0,18),r.add(A),e.registerInstanced(A,y),A},T=p.length?R(g,pt("#ffffff"),p,u):null;w.length&&R(M,pt("#ffffff",{vertexColors:!0}),w,x)}{let g=[],M=[],p=[],u=["#ff5d8f","#ffd23f","#ffffff","#b06bff","#ff8a3d","#ff3d3d"];for(let T=0;T<26;T++){let C=m(9,40,3.2);if(!C)continue;let _=2.2+s()*.8;g.push({x:C.x,y:C.y-.05,z:C.z,s:_});let y=[u[T%u.length],u[(T+2)%u.length]];for(let E=0;E<60;E++){let A=s()*6.28,b=Math.sqrt(s())*(_-.25);M.push({x:C.x+Math.cos(A)*b,y:C.y+.25,z:C.z+Math.sin(A)*b,s:.8+s()*.5}),p.push(y[E%2])}}let w=new Ce,x=Xe([ze(new le(1,1.05,.35,20).translate(0,.17,0),"#4f9e3a"),ze(new Ge(1.02,.08,6,24).rotateX(Math.PI/2).translate(0,.35,0),"#ffffff")]),v=new Ye(x,pt("#ffffff",{vertexColors:!0}),g.length);g.forEach((T,C)=>{w.position.set(T.x,T.y,T.z),w.scale.set(T.s,1,T.s),w.updateMatrix(),v.setMatrixAt(C,w.matrix)}),v.receiveShadow=!0,v.computeBoundingSphere(),Un(v,1.6,void 0,20),r.add(v),e.registerInstanced(v,g);let B=new $e(.24,0);B.computeVertexNormals();let R=new Ye(B,pt("#ffffff"),M.length);w.scale.setScalar(1),M.forEach((T,C)=>{w.position.set(T.x,T.y,T.z),w.scale.setScalar(T.s),w.updateMatrix(),R.setMatrixAt(C,w.matrix),R.setColorAt(C,new se(p[C]))}),R.computeBoundingSphere(),r.add(R),e.registerInstanced(R,M)}{let g=t.sample(55),M=-1,p=Fe/2+9,u=g.x+g.rx*p*M,w=g.z+g.rz*p*M;e.blocked(u,w,3)&&(u=g.x-g.rx*p*M,w=g.z-g.rz*p*M);let x=new he,v=Ke(128,16,(D,O,U)=>{for(let G=0;G<8;G++)D.fillStyle=G%2?"#fff":"#3a9d5d",D.fillRect(G*16,0,16,U)});o.push(v),x.add(ge(new ye(3.2,1.6,1.8,3,.25),pt("#3a9d5d"),{ol:3,olRef:20})).position.y=1.15;let B=ge(new ye(3.4,.15,2,2,.05),pt("#f4e3c0"),{ol:2,olRef:20});B.position.y=2,x.add(B);let R=ge(new Me(3.8,.15,2.4),pt("#ffffff",{map:v}),{ol:2.5,olRef:20});R.position.y=3.2,x.add(R);for(let D of[-1.6,1.6]){let O=ge(new le(.06,.06,1.2,6),pt("#ffffff"),{ol:1.5});O.position.set(D,2.6,.9),x.add(O)}for(let D of[-1.1,1.1]){let O=ge(new le(.4,.4,.2,14).rotateZ(Math.PI/2),pt("#22202c"),{ol:2});O.position.set(D,.4,.95),x.add(O);let U=O.clone();U.position.z=-.95,x.add(U)}let T=ge(new le(.75,.55,1.3,16),pt("#ffffff"),{ol:3,olRef:20});T.position.y=4,x.add(T);let C=ge(new le(.82,.82,.22,16),pt("#5a3a24"),{ol:2.5,olRef:20});C.position.y=4.75,x.add(C);let _=ge(new le(.72,.62,.45,16),pt("#c98a4a"),{ol:2,olRef:20});_.position.y=3.95,x.add(_);let y=Nn(512,128,(D,O,U)=>{D.fillStyle="#1a1420",He(D,0,0,O,U,28),D.fill(),D.fillStyle="#ffd23f",He(D,6,6,O-12,U-12,22),D.fill(),je(D,"FLAT WHITES",O/2,U/2+4,62,"#ffffff","#1a1420",.2)},o),E=new Pe(new sn(2.8,.7),pt("#ffffff",{map:y}));E.position.set(0,1.4,.92),x.add(E);let A=E.clone();A.rotation.y=Math.PI,A.position.z=-.92,x.add(A);let b=Math.atan2(g.x-u,g.z-w);x.position.set(u,t.heightAt(u,w),w),x.rotation.y=b,r.add(x);for(let D=0;D<5;D++){let O=u+Math.sin(b)*(2.2+D*1.1)+Math.cos(b)*(D%2?.3:-.3),U=w+Math.cos(b)*(2.2+D*1.1);c(O,U,b+Math.PI,.8)}e.anchors.coffeeCart=x}function d(){}function f(){r.traverse(g=>{g.geometry&&g.geometry.dispose()});for(let g of o)g.dispose?.();i.remove(r)}return{group:r,crowd:a,update:d,dispose:f}}var ur=8.5;function fc(i,t={}){let{course:e,park:n,round:s}=t,r=t.plan||null,o=t.backedBy||{},a=Object.keys(o).filter(X=>(o[X]||[]).length),l=[...s?.runners||[]].sort((X,ot)=>(X.lane??0)-(ot.lane??0)),c=!1,h=new co({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserveDrawingBuffer});h.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxPixelRatio??1.5)),h.outputColorSpace=tn,h.toneMapping=Hn,h.shadowMap.enabled=!0,h.shadowMap.type=Xl;let m=h.domElement;m.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(m);let d=new fo;d.fog=new ho(13496063,700,3200);let f=new hn(45,16/9,.3,9e3),g=new Io(14676223,9420912,1.45);d.add(g);let M=new Po(16774109,2.3),p=new k(-.45,.82,.38).normalize();M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-4e-4,M.shadow.normalBias=.03,M.shadow.radius=3,d.add(M),d.add(M.target);let u=ef(e,n,r),w=of(d,u,{course:e,park:n}),x=null,v=null,B=cf(u,w.anchors.crowdZones,5,w.onPath,w.blocked),R=Ef(d,u,w,n);B.push(...R.crowd);let T=new Map;for(let X of B){let ot=X.zone??"x";T.has(ot)||T.set(ot,[]),T.get(ot).push(X)}let C=[...T.values()].map(X=>lc(d,X)),_={update:(...X)=>{C.forEach(ot=>ot.update(...X)),v?.update(...X)},dispose:()=>{C.forEach(X=>X.dispose()),v?.dispose()}},y={};for(let X of l){let ot=df(X);y[X.id]=ot,d.add(ot.root)}let E=l.map(X=>X.id),A=Object.fromEntries(l.map(X=>[X.id,X])),b=Mf(i,{runners:l,backedBy:o,course:e,park:n,C:u}),D=null,O=null,U=[],G=null,V=[],ut=!1;function mt(X){if(r=X||null,u.setPlan(r),c=!!r?.runners?.some(ot=>ot.diversions&&ot.diversions.length),x&&(x.dispose(),x=null),v&&(v.dispose(),v=null),c){let ot=r.runners.find(Ft=>Ft.diversions?.length).id;x=bf(d,u,w,u.diversions[ot][0]),w.clearArea(x.contains),C.forEach(Ft=>Ft.hideWhere(x.contains)),v=lc(d,x.crowd)}if((c||ut)&&(w.redrawGround(),b.redrawMap()),ut=c,V=[],r){O=gf(r,u,l),U=cc({plan:r,sim:O,backedIds:a,hasDiversion:c}),G=xf({camera:f,C:u,sim:O,world:w,funfair:x});for(let ot of r.events||[])V.push({at:ot.broadcastS,evt:{...ot,kind:"event"}});for(let ot of r.commentary||[])V.push({at:ot.broadcastS,evt:{...ot,kind:"commentary"}});V.sort((ot,Ft)=>ot.at-Ft.at)}else O=null,U=[],G=null}let P="idle",_t=!1,Gt=!1,N=-ur,Z=0,nt=null,J=null,lt=0,at=!1,Tt=!1,dt=0,H=0,q=!1,z=0,Lt=Math.max(.05,Number(t.speed)||1),xt=null,bt=0,Ot=new Set;function $(){let X=i.clientWidth||window.innerWidth,ot=i.clientHeight||window.innerHeight;h.setSize(X,ot,!1),f.aspect=X/ot,f.updateProjectionMatrix(),rc.uRes.value.set(X*h.getPixelRatio(),ot*h.getPixelRatio())}let zt=typeof ResizeObserver<"u"?new ResizeObserver($):null;zt?.observe(i),window.addEventListener("resize",$),$();let F={};{let X=E.length;E.forEach((ot,Ft)=>{let Ut=(Ft-(X-1)/2)*Math.min(1.25,(Fe-1.6)/Math.max(1,X-1)),Zt=u.sample(0);F[ot]={x:Zt.x+Zt.rx*Ut-Zt.tx*1.2,z:Zt.z+Zt.rz*Ut-Zt.tz*1.2,yaw:Math.atan2(Zt.tx,Zt.tz)},F[ot].y=u.heightAt(F[ot].x,F[ot].z)+.16})}function I(X="idle"){for(let ot of E){let Ft=F[ot],Ut=y[ot];Ut.root.position.set(Ft.x,Ft.y,Ft.z),Ut.root.rotation.set(0,Ft.yaw,0),X&&Ut.set(X),Ut.setPop(null)}}I(),mt(r);let ft=(X,ot)=>X===1?"jump":X===2||X===3?"fist":X===ot?"collapse":"kneel";function Rt(X,ot){let Ft=O.stateAt(Math.max(0,X)),Ut=E.length;for(let Zt of E){let Qt=Ft.byId[Zt],kt=y[Zt];if(X<0)continue;kt.root.position.set(Qt.x,Qt.y,Qt.z);let Ee=Math.atan2(Qt.tx,Qt.tz)+(Qt.finished&&Qt.post>2.4&&!(Qt.place>3&&Qt.post<4)?Math.PI*(Qt.place%2?1:-1)*.92:0),L=kt.root.rotation.y,et=Ee-L;for(;et>Math.PI;)et-=2*Math.PI;for(;et<-Math.PI;)et+=2*Math.PI;kt.root.rotation.y=L+et*Math.min(1,ot*10);let ht={speed:Qt.vRace,rate:Ft.rate,slope:Qt.slope},gt=u.diversions[Zt]?.[0];if(gt&&kt.setProp("floss",Qt.m>gt.toM-20?Math.max(.25,1-(Qt.m-gt.toM)/3500):0),Qt.finished){let tt=Qt.place;Qt.post<1.6?(kt.set("run"),ht.speed=3,ht.rate=1.2):tt>3&&Qt.post<4?kt.set("trudge"):kt.set("celebrate",ft(tt,Ut)),kt.setPop(null)}else if(Qt.div>.3){kt.set("distracted");let tt=x?.anchors.rides.reduce((Vt,Xt)=>!Vt||Xt.pos.distanceToSquared(kt.root.position)<Vt.pos.distanceToSquared(kt.root.position)?Xt:Vt,null);if(tt){let Xt=Math.atan2(tt.pos.x-Qt.x,tt.pos.z-Qt.z)-kt.root.rotation.y;for(;Xt>Math.PI;)Xt-=2*Math.PI;for(;Xt<-Math.PI;)Xt+=2*Math.PI;ht.lookYaw=Math.max(-1.3,Math.min(1.3,Xt))}kt.setPop(["!","heart","floss"][Math.floor((Qt.m-Qt.divInfo.fromM)/120)%3])}else{kt.set("run"),kt.setPop(null);let tt=u.geoOf(Qt.m);ht.effort=Qt.m>4300?.4+(Qt.m-4300)/700*.5:tt>1700&&tt<2060?.7:.1}kt.update(ot,ht)}}let Pt=new k,Y=null,ct=-1,rt=()=>{if(ct!==Z||!Y){let X=m.getBoundingClientRect();Y=[...b.root.querySelectorAll(".mr-tower, .mr-map, .mr-top")].map(ot=>{let Ft=ot.getBoundingClientRect();return{left:Ft.left-X.left,right:Ft.right-X.left,top:Ft.top-X.top,bottom:(ot.classList.contains("mr-tower")?Ft.top+ot.querySelectorAll(".mr-row").length*((ot.querySelector(".mr-row")?.offsetHeight||40)+6):Ft.bottom)-X.top}}),ct=Z}return Y};function vt(X,ot=!0){let Ft=m.clientWidth,Ut=m.clientHeight,Zt=[];for(let kt of E){let Ee=y[kt];Pt.set(Ee.root.position.x,Ee.root.position.y+Ee.height+.55,Ee.root.position.z);let L=Pt.distanceTo(f.position);Pt.project(f);let et=ot&&Pt.z<1&&Pt.z>-1&&Math.abs(Pt.x)<.95&&Pt.y<.82&&Pt.y>-.62&&L>9.5&&L<150,ht=(Pt.x*.5+.5)*Ft,gt=(-Pt.y*.5+.5)*Ut;et&&rt().some(tt=>ht>tt.left-40&&ht<tt.right+40&&gt>tt.top-10&&gt<tt.bottom+40)&&(et=!1),Zt.push({id:kt,x:(Pt.x*.5+.5)*Ft,y:(-Pt.y*.5+.5)*Ut,visible:et,pos:X?X.order.indexOf(kt)+1:0,scale:Math.max(.7,Math.min(1.15,30/L)),dist:L})}Zt.sort((kt,Ee)=>kt.dist-Ee.dist);let Qt=[];for(let kt of Zt){if(!kt.visible)continue;let Ee=(ws(A[kt.id]).length*12+60)*kt.scale;for(let L=0;L<8;L++){let et=Qt.find(ht=>Math.abs(ht.x-kt.x)<(ht.tw+Ee)/2&&Math.abs(ht.y-kt.y)<30*Math.max(ht.scale,kt.scale));if(!et)break;kt.y=et.y-31*Math.max(et.scale,kt.scale)}kt.tw=Ee,Qt.push(kt)}return X?{raceS:X.raceS,leaderM:X.leader.m,tags:Zt,order:X.order.map(kt=>({id:kt,gapText:X.byId[kt].gapText,finished:X.byId[kt].finished})),dots:X.order.map((kt,Ee)=>({x:X.byId[kt].x,z:X.byId[kt].z,colour:A[kt].colour.primary,lead:Ee===0,focus:G?.shot?.ids?.includes(kt)}))}:P!=="race"?{tags:Zt}:{tags:Zt,raceS:0,leaderM:0,order:E.map(kt=>({id:kt,gapText:"",finished:!1,posHtml:`<small>L</small>${A[kt].lane??"\u2014"}`})),dots:E.map(kt=>({x:F[kt].x,z:F[kt].z,colour:A[kt].colour.primary}))}}function Et(X,ot){let Ft=Math.max(30,Math.min(220,ot)),Ut=M.shadow.camera;Ut.right!==Ft&&(Ut.left=-Ft,Ut.right=Ft,Ut.top=Ft,Ut.bottom=-Ft,Ut.near=1,Ut.far=900,Ut.updateProjectionMatrix());let Zt=2*Ft/M.shadow.mapSize.x,Qt=Math.round(X.x/Zt)*Zt,kt=Math.round(X.z/Zt)*Zt;M.target.position.set(Qt,X.y,kt),M.position.set(Qt+p.x*400,X.y+p.y*400,kt+p.z*400)}let Ct=["wave","flex","point","stretch","spin","bow"];function It(X,ot){let Ft=[...X.personality||X.id].reduce((Ut,Zt)=>Ut+Zt.charCodeAt(0),ot);return Ct[Ft%Ct.length]}function Wt(X,ot={}){P="intro",b.setDim(!0),b.clearBanner(),b.photo(!1),b.results(null),K(),b.market(!1),xt=null,_t=!1,m.style.filter="",I("idle");let Ft=ot.perRunnerS??t.introPerRunnerS??4.2,Ut=ot.flyoverS??7;return J={t:0,idx:-1,per:Ft,fly:Ut,onDone:X,waiting:!1,segStart:0,minSeg:2.5,done:!1,group:!1},{flyoverS:Ut,perRunnerS:Ft,runners:E.slice()}}function Jt(X){let ot=J;if(!ot)return;ot.t+=X;let Ft=F;if(ot.idx===-1){!ot.title&&ot.t>.8&&(ot.title=!0,qt(!0));let ht=Math.min(1,ot.t/ot.fly),gt=hc(ht),tt=u.sample(0),Vt=new k(170,0,-40),Xt=2.2-gt*2,ne=520-gt*470,te=new k(Vt.x+Math.cos(Xt)*ne,190-gt*170,Vt.z+Math.sin(Xt)*ne),fe=new k(tt.x+tt.tx*22+tt.rx*10,tt.y+9,tt.z+tt.tz*22+tt.rz*10);te.lerp(fe,gt*gt);let me=Vt.clone().setY(15).lerp(new k(tt.x,tt.y+1,tt.z),Math.min(1,gt*1.2));f.position.copy(te),f.lookAt(me),Ht(50),ht>=1&&ce();return}if(ot.group){let ht=u.sample(0),gt=(ot.t-ot.segStart)/3;if(f.position.set(ht.x+ht.tx*(9+gt*2)+ht.rx*2,ht.y+2.2+gt*.6,ht.z+ht.tz*(9+gt*2)+ht.rz*2),f.lookAt(ht.x,ht.y+1.3,ht.z),Ht(46),gt>=1&&!ot.done){ot.done=!0,b.introCard(null);let tt=ot.onDone;J=null,P="idle",tt?.()}return}let Ut=E[ot.idx],Zt=Ft[Ut],Qt=ot.t-ot.segStart,kt=new k(Math.sin(Zt.yaw),0,Math.cos(Zt.yaw)),Ee=new k(-kt.z,0,kt.x),L=y[Ut].height,et=3.2+L*.6-Math.min(.6,Qt*.12);f.position.set(Zt.x+kt.x*et+Ee.x*.9,Zt.y+L*.62,Zt.z+kt.z*et+Ee.z*.9),f.lookAt(Zt.x-Ee.x*1.25,Zt.y+L*.55,Zt.z-Ee.z*1.25),Ht(40),!ot.waiting&&Qt>=ot.per&&ce(),ot.waiting==="released"&&Qt>=ot.minSeg&&ce()}function qt(X){let ot=s||{};b.titleCard(X,{title:ot.title||"MARKRUN",kicker:ot.number?`ROUND ${ot.number}`:"LIVE FROM FINSBURY PARK",theme:ot.theme?typeof ot.theme=="string"?ot.theme:ot.theme.label||ot.theme.name||"":""})}function ce(){let X=J;X.idx===-1&&qt(!1),X.idx++,X.segStart=X.t;for(let Zt of E)y[Zt].set("idle");if(X.idx>=E.length){X.group=!0;for(let Zt of E)y[Zt].set("pose","point");b.introCard(null),setTimeout(()=>{},0);for(let Zt of E)y[Zt].set("wave");return}let ot=E[X.idx];y[ot].set(It(A[ot],X.idx)==="wave"?"wave":"pose",It(A[ot],X.idx)),t.introCards!==!1&&b.introCard(A[ot]),X.waiting=!1;let Ut=t.onIntroRunner?.(ot,X.idx);Ut&&typeof Ut.then=="function"&&(X.waiting=!0,Ut.then(()=>{J===X&&(X.waiting="released")},()=>{J===X&&(X.waiting="released")}))}function ie(X,ot){if(!O)throw new Error("createRaceView: playRace needs a plan (pass opts.plan or call loadPlan(plan) first)");P="race",b.setDim(!1),b.results(null),K(),J=null,b.introCard(null),b.titleCard(!1),b.market(!1),xt=null,_t=!1,m.style.filter="",N=-ur,dt=0,H=0,lt=0,at=!1,Tt=!1,Ot.clear(),q=!!t.skipRaceTitle,b.setDimTop(!1),nt={onEvent:X,onDone:ot},I("idle"),G.reset()}let _e=[[-3,"3"],[-2,"2"],[-1,"1"],[0,"GO!"]];function st(X){let ot=Ft=>A[Ft]?.nickname||Ft;switch(X.type){case"lead_change":return["LEAD CHANGE!",`${ot(X.to)} hits the front`,"#ff3d8b"];case"overtake":return!a.includes(X.by)&&!a.includes(X.on)&&O.stateAt(X.broadcastS).order.indexOf(X.by)>1?null:["OVERTAKE!",`${ot(X.by)} passes ${ot(X.on)}`,"#2e6fe0"];case"hill":return[X.lap===1?"THE HILL!":"THE HILL AGAIN!","Legs of jelly incoming","#3aa845"];case"lap":return["LAP 2 OF 2","One more time round!","#2e6fe0"];case"final_stretch":return["FINAL STRETCH!","Here comes the finish","#ff8a1f"];case"diversion":return Ot.has("div")?null:(Ot.add("div"),["DISTRACTED!",`${ot(X.who)} has spotted the funfair`,"#b04bff"]);case"finish":return X.place===1&&!O.photoFinish?["WINNER!",ot(X.who),"#ffb000"]:null;case"breakaway":return["BREAKAWAY!",`${ot(X.who)} makes a break`,"#ff3d8b"];default:return null}}function Yt(X){if(lt>0){if(lt-=X,lt<=0){b.photo(!1),m.style.filter="",w.anchors.finishArch.visible=!0,G.reset();let Ft=O.finishOrder[0];b.showBanner("WINNER!",A[Ft]?.nickname||Ft,"#ffb000",2.6)}return}let ot=N;for(N+=X,N<-4.2&&!q&&(q=!0,qt(!0),b.setDimTop(!0)),N>=-3.6&&q===!0&&(q="done",qt(!1),b.setDimTop(!1));H<_e.length&&N>=_e[H][0];){let[Ft,Ut]=_e[H++];if(b.countdown(Ut),nt?.onEvent?.({kind:"countdown",n:Ut==="GO!"?0:Number(Ut),text:Ut,broadcastS:Ft}),Ft===-3)for(let Zt of E)y[Zt].set("ready")}for(;dt<V.length&&N>=V[dt].at;){let Ft=V[dt++].evt;try{nt?.onEvent?.(Ft)}catch(Ut){console.error(Ut)}if(Ft.kind==="event"){let Ut=st(Ft);Ut&&b.showBanner(...Ut)}}if(O.photoFinish&&!at&&N>=O.firstFinishB){at=!0,N=O.firstFinishB,lt=t.photoFreezeS??2.8;{let[Ft,Ut]=O.finishOrder;b.photo(!0,`${ws(A[Ft])} or ${ws(A[Ut])}? Checking the camera...`)}m.style.filter="grayscale(0.55) sepia(0.35) contrast(1.12)",nt?.onEvent?.({kind:"photo_finish",broadcastS:N,ids:O.finishOrder.slice(0,2)})}!Tt&&N>=O.lastFinishB+3.5&&(Tt=!0,nt?.onDone?.())}function wt(X){o=X||{},a=Object.keys(o).filter(ot=>(o[ot]||[]).length),b.setBackedBy(o)}function Nt(X,ot=1.2){if(!O)throw new Error("createRaceView: seek in a race needs a plan");X=Math.max(-ur,Math.min(O.lastFinishB+3.5,Number(X)||0)),P="race",J=null,K(),nt=nt||{},b.setDim(!1),b.introCard(null),b.results(null),b.photo(!1),b.market(!1),b.clearBanner(),b.titleCard(!1),b.setDimTop(!1),m.style.filter="",w.anchors.finishArch.visible=!0,xt=null,q=X>=-3.6?"done":X<-4.2?!1:"done",G.reset();let Ft=Math.round(ot*30);for(let Ut=Ft;Ut>=0;Ut--){if(N=X-Ut/30,N<-3)for(let Zt of E)y[Zt].set("idle");else if(N<0)for(let Zt of E)y[Zt].set("ready");if(Ut>0)if(G.update(N,1/30,U),N>=0)Rt(N,1/30);else for(let Zt of E)y[Zt].update(1/30,{})}N=X,dt=V.findIndex(Ut=>Ut.at>N),dt<0&&(dt=V.length),H=_e.findIndex(Ut=>Ut[0]>N),H<0&&(H=_e.length),at=N>=O.firstFinishB,Tt=N>=O.lastFinishB+3.5,lt=0}function S(X){let ot=J;if(!ot)return;X=Math.max(0,Number(X)||0);let Ft=E.length;if(X<ot.fly){ot.t=X;return}qt(!1),ot.title=!0;let Ut=Math.min(Ft,Math.floor((X-ot.fly)/ot.per));ot.idx=Ut-1,ot.t=X,ce(),ot.segStart=ot.fly+Ut*ot.per}function W(X){return P==="intro"?S(X):Nt(X)}function K(){D&&(D.dispose(),D=null)}function it(X,{card:ot}={}){P="podium",b.setDim(!0),b.clearBanner(),J=null,b.titleCard(!1),b.market(!1),xt=null,_t=!1,m.style.filter="",b.photo(!1),K();let Ft=X?.finishOrder?.length?[...X.finishOrder].sort((Ut,Zt)=>Ut.place-Zt.place):(O?.finishOrder||E).map((Ut,Zt)=>({runnerId:Ut,place:Zt+1,officialS:O?.byId[Ut].officialS??0,timeText:O?Bo(O.byId[Ut].officialS):""}));D=Sf(d,u,w,y,Ft,{camera:f,offsetX:(ot??t.podiumCard)!==!1?3.2:0}),(ot??t.podiumCard)!==!1&&b.results(Ft.map(Ut=>({place:Ut.place,nickname:A[Ut.runnerId]?.nickname||Ut.runnerId,colour:A[Ut.runnerId]?.colour.primary||"#888",timeText:Ut.timeText||Bo(Ut.officialS)})))}let yt=performance.now(),Q=0,St={frames:0,acc:0,fps:0};function Ht(X){Math.abs(f.fov-X)>.01&&(f.fov=X,f.updateProjectionMatrix())}function Dt(X,ot=!1){Z+=X;let Ft=null;_t||(P==="intro"&&Jt(X),P==="race"&&Yt(X));let Ut=_t?0:X;if(P==="race"){if(lt>0){let kt=w.anchors.finish;w.anchors.finishArch.visible=!1,f.position.set(kt.x+kt.rx*9-kt.tx*.6,kt.y+6.4,kt.z+kt.rz*9-kt.tz*.6),f.lookAt(kt.x-kt.rx*.6-kt.tx*.6,kt.y+.8,kt.z-kt.rz*.6-kt.tz*.6),Ht(42),f.updateMatrixWorld();let Ee=new k(kt.x+kt.rx*3,kt.y+.05,kt.z+kt.rz*3).project(f),L=new k(kt.x-kt.rx*3,kt.y+.05,kt.z-kt.rz*3).project(f);b.photoLine([(Ee.x*.5+.5)*m.clientWidth,(-Ee.y*.5+.5)*m.clientHeight],[(L.x*.5+.5)*m.clientWidth,(-L.y*.5+.5)*m.clientHeight])}else if(_t&&xt!=null){xt+=X;let kt=O.stateAt(Math.max(0,N)),Ee=kt.byId[kt.order[0]],L=kt.order.slice(0,3).map(te=>kt.byId[te]).filter(te=>Math.abs(te.m-Ee.m)<25),et=new k;for(let te of L)et.add(new k(te.x,te.y,te.z));et.divideScalar(Math.max(1,L.length)),bt||(bt=Math.atan2(f.position.x-et.x,f.position.z-et.z));let ht=bt+xt*.12,gt=10+Math.min(25,Ee.m-L.at(-1).m)*.4,tt=Math.min(1,xt/1.2),Vt=tt*tt*(3-2*tt),Xt=et.x+Math.sin(ht)*gt,ne=et.z+Math.cos(ht)*gt;f.position.set(Xt,Math.max(et.y+3+Vt*2,u.heightAt(Xt,ne)+2.5),ne),f.lookAt(et.x,et.y+2.3,et.z),Ht(44)}else G.update(N,Ut,U);if(Ft=N>=0?O.stateAt(N):null,N<0)for(let kt of E)y[kt].update(Ut,{});else Rt(N,lt>0?0:Ut);let Qt=G.shot?.type;Et(G.cam.look,Qt==="drone"||Qt==="blimp"||Qt==="heli"?160:45)}else if(P==="podium"&&D){D.update(Ut,Z);for(let Qt of E)y[Qt].update(Ut,{});Et(D.center,40)}else{for(let Qt of E)y[Qt].update(Ut,{});if(P==="idle"){let Qt=u.sample(0),kt=Z*.12;f.position.set(Qt.x+Math.sin(kt)*14,Qt.y+4.5,Qt.z+Math.cos(kt)*14),f.lookAt(Qt.x,Qt.y+1.2,Qt.z),Ht(45)}Et(new k(F[E[0]]?.x??0,0,F[E[0]]?.z??0),P==="intro"&&J?.idx===-1?160:40)}if(z+=X,ot)return;w.update(Z),x?.update(Z);let Zt=E.map(Qt=>y[Qt].root.position);_.update(Z,f.position,Zt,P==="podium"?.9:null),b.update(z,P==="race"?vt(Ft,N>-1&&xt==null):vt(null,!1)),z=0,h.render(d,f)}let j=2;function Mt(X){if(Gt)return;Q=requestAnimationFrame(Mt);let ot=Math.max(0,(X-yt)/1e3);yt=X,St.frames++,St.acc+=ot,St.acc>1&&(St.fps=St.frames/St.acc,St.frames=0,St.acc=0),At(Math.min(j,ot)*Lt)}function At(X){let ot=X;if(ot<=1e-6){Dt(0);return}for(;ot>1e-6;){let Ft=Math.min(ot,.1);ot-=Ft,Dt(Ft,ot>1e-6)}}t.manualLoop||(Q=requestAnimationFrame(Mt));function Kt(){Gt=!0,cancelAnimationFrame(Q),zt?.disconnect(),window.removeEventListener("resize",$),K();for(let X of E)d.remove(y[X].root),y[X].dispose();_.dispose(),x?.dispose(),R.dispose(),w.dispose(),b.dispose(),d.traverse(X=>{X.geometry&&X.geometry.dispose()}),uf(),sf(),h.dispose(),h.forceContextLoss?.(),m.remove()}let re={seek(X,ot=1.2){Nt(X,ot),_t=!0,Dt(0)},introAt(X,ot=1.5){if(Wt(()=>{},{}),_t=!1,X<0){J.t=ot,Jt(0),Dt(0),_t=!0;return}for(J.t=J.fly,Jt(0);J&&J.idx<X;)J.t=J.segStart+J.per+.01,Jt(0);for(let Ft=0;Ft<ot*30;Ft++){Jt(1/30);for(let Ut of E)y[Ut].update(1/30,{})}_t=!0,Dt(0)},podiumAt(X=3){b.introCard(null),it(null);for(let ot=0;ot<X*30;ot++){D.update(1/30,ot/30);for(let Ft of E)y[Ft].update(1/30,{})}_t=!0,Dt(0)},photoAt(){this.seek(O.firstFinishB-.05),_t=!1,at=!1;for(let X=0;X<3;X++)Dt(1/30);_t=!0,Dt(0)},render(){Dt(0)},unpause(){_t=!1},lookFrom(X,ot,Ft,Ut,Zt,Qt,kt=45){P="debugcam",f.position.set(X,ot,Ft),f.lookAt(Ut,Zt,Qt),Ht(kt),b.setDim(!0),h.render(d,f)},step(X,ot=!0){Dt(X,!ot)},get mode(){return P},get b(){return N},get shots(){return U},get sim(){return O},C:u,get director(){return G},renderer:h,scene:d,camera:f,info:()=>h.info,fps:()=>St.fps};return{playIntro:Wt,playRace:ie,showPodium:it,setPaused(X,{market:ot=!0,marketText:Ft}={}){X=!!X,X!==_t&&(_t=X,P==="race"&&lt<=0&&t.marketOnPause!==!1&&ot&&(X?(xt=0,bt=0,b.market(!0,Ft??t.marketText??"Place your halfway bets!"),m.style.filter="saturate(1.2) contrast(1.06)"):(xt=null,b.market(!1),m.style.filter="",G.reset())))},setSpeed(X){Lt=Math.max(.05,Number(X)||1)},seek:W,loadPlan(X,{backedBy:ot}={}){if(P==="race")throw new Error("createRaceView: loadPlan during a race");ot&&wt(ot),mt(X)},setBackedBy(X){wt(X),O&&P!=="race"&&(U=cc({plan:r,sim:O,backedIds:a,hasDiversion:c}))},dispose:Kt,hudRoot:b.root,get broadcastTime(){return P==="intro"?J?.t??0:N},get durationS(){return O?ur+O.lastFinishB+3.5:0},preRollS:ur,_debug:re}}var Fn=new URLSearchParams(location.search);async function uc(i){let t=await fetch(i);if(!t.ok)throw new Error(`${i}: ${t.status}`);return t.json()}async function Sx(){let i=Fn.get("fixture"),[t,e,n]=await Promise.all([uc("/data/course/course.json"),uc("/data/course/park.json"),uc(i?`/client/tv/race/fixtures/${i}.json`:"/data/fixtures/round.json")]);Fn.get("shot")&&document.body.classList.add("shot");let s={};Fn.get("backed")!=null?Fn.get("backed").split(",").filter(Boolean).forEach((c,h)=>s[c]=[h%2?"Mrs M":"Mark"]):Object.assign(s,{r2:["Mark"],r4:["Mrs M"],r1:["Mark","Mrs M"]});let r=document.getElementById("sub"),o=fc(document.getElementById("stage"),{course:t,park:e,round:n.public,plan:n.racePlan,backedBy:s,speed:Number(Fn.get("speed"))||1,preserveDrawingBuffer:!!Fn.get("shot"),manualLoop:!!Fn.get("shot"),onIntroRunner:c=>{let h=n.public.runners.find(m=>m.id===c);r.textContent=`${h.nickname} - ${h.tagline}`}});window.view=o,window.__create=fc,window.__data={course:t,park:e,round:n};let a=c=>{c.kind==="commentary"&&(r.textContent=c.text),c.kind==="countdown"&&(r.textContent=c.text)},l={intro:()=>o.playIntro(()=>{r.textContent="(betting would happen here)",Fn.get("auto")!=="0"&&setTimeout(l.race,1500)}),race:()=>o.playRace(a,()=>{r.textContent="Race over",setTimeout(l.podium,2500)}),podium:()=>o.showPodium(null),pause:(()=>{let c=!1;return()=>o.setPaused(c=!c)})()};document.getElementById("ctl").addEventListener("click",c=>{let h=c.target.dataset?.a;h&&l[h]()}),Fn.get("shot")||setInterval(()=>{document.getElementById("fps").textContent=`${o._debug.fps().toFixed(0)} fps`},1e3),Fn.get("auto")!=="0"&&!Fn.get("shot")&&l.intro(),window.__ready=!0}Sx().catch(i=>{console.error(i),document.getElementById("sub").textContent=String(i),window.__error=String(i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
