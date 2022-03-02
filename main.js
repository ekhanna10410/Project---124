function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(550, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#81aef7');
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function gotPoses(results) 
{
   if(results.length > 0)
   {
       console.log(results);
   }
}