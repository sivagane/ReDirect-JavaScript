// function Redirect(){
// 			window.location="http://www.google.com";
// 		}


// function Redirect(){
// 	window.location="http://www.google.com";
// }
// // document.write("You will be redirected to this website in 10 seconds");
// setTimeout('Redirect()', 10000);


//To redirect to the particular page after some timelimt.
// function Redirect(){
// document.getElementById('delaymsg').innerHTML='You will be redirected to the website in  <span id="countDown">10</span>seconds....';
// var count=10;
// setInterval(function(){
// 	count--;
// 	document.getElementById('countDown').innerHTML=count;
//     if(count==0){
//     	window.location="http://www.google.com";
//     }
// },1000);
// }



//To Go to the particular site according to the browser in my PC.
var browserName=Navigator.appName;
if(browserName=="Microsoft Inernet Explore"){
	window.location="https://www.google.com";
}
else
	if(browserName="Google Chrome"){
	window.location="https://www.facebook.com";
}
else{
	window.location="http://www.bing.com";
}