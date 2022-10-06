noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    } 
}

function draw() {
    background('#95c9fc');
    document.getElementById("font_size").innerHTML = "size of text is = " + "px";
    textSize(difference);
    fill('#4d0269');
    text('vanya', noseX, noseY);
}