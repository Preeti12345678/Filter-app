var x_nose=0;
var y_nose=0;
function preload(){
   clown_nose=loadImage('https://i.postimg.cc/xCrRc7T2/clown-nose2.png');
}
 function setup(){
     canvas=createCanvas(300,300);
     canvas.center();
     video=createCapture(VIDEO);
     video.size(300,300);
     video.hide();

     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
 }
 function draw(){
     image(video,0,0,300,300);
    image(clown_nose,x_nose,y_nose,30,30);
}
function take_snapshot(){
    save('myfilter_image.png');
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        x_nose=results[0].pose.nose.x-13;
        y_nose=results[0].pose.nose.y-14;
        console.log("Nose x= "+x_nose);
        console.log("Nose y= "+y_nose);
        
    }
}
