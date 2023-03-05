var a=10,b=5,c=6,d=4;
var x=a+b;
console.log("---Artithmatic---");
document.write(a+b,"<br>","<br>");
document.write(a);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log(a**b);
console.log(++b);
console.log(a++);
console.log(c--);
console.log(--d);

console.log("---Comparision---");
var a=5,b=8;
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

console.log("---Assignment---");
var a=6,b=4;
console.log(a=b);
console.log(a+=b);
console.log(a-=b);
console.log(a/=b);
console.log(a%=b);
console.log(a*=b);

console.log("---Logical---");
var a=4,b=6,c=3;
console.log((a<b)&&(a>c));
console.log((a>b)||(a>c));
console.log(!((a<b)&&(a>c)));

console.log("---Test---");
var a=4,b=4,c=4;
console.log((a==b)&&(b==c)&&(c!=a));

var a=1,b=2,c=3;
console.log((a*b)&&(b*c)&&(c*a));

var a=7,b=5;
console.log((a+b)&&(a-b)&&(a%b));

var a=2,b=3,c=4;
console.log((a<b)||(b<c)||(a>c));

var a=49,b=a--;
console.log(++a);
console.log(--a);
console.log(--a);

var x=2,y=4,z=10;
console.log((x>y)&&(z<x)&&(y<z));

console.log("---ifelse---");
var a=prompt("Enter your age"),b=18;
if(a<b){
	console.log("you are not eligible");
	}
else{
	console.log("you are eligible");
	}
	
console.log("---Ternary---");
var a=prompt("Enter your age"),b=18;
(a<b)?console.log("you are not eligible"):console.log("you are eligible");

console.log("---elseif---");
var a=prompt("Enter your mark"),b=35;
if(a<b){
	console.log("fail");
	}
else if(a==b){
	console.log("pass");
	}
else{
	console.log("pass");
	}
