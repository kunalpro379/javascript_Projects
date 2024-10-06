const userVid=document.getElementById('vid');
window.addEventListener('load', async e=>{
const media=await navigator
.mediaDevices
.getUserMedia({audio:true,video:true});
userVid.srcObject=media;
});