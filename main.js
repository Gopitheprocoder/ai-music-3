song_1="";
song_2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("The Score-Unstoppable (Lyric Video).mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNET Is Initialized');
    }

function draw(){
    image(video,0,0,600,500);
}

function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX="+leftWristX+"leftwristY="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX="+rightWristX+"rightwristY="+rightWristY);
}
}
function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
