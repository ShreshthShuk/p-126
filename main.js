badlier = "";
bones = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    badlier = loadSound("Bad-Liar_320(PagalaSongs).mp3");
    bones = loadSound("Bones_320(PagalaSongs).mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PosenNet is Intialized");
}

function draw(){
    image(video,0,0,600,530);
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
         
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
