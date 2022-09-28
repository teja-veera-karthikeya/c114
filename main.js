nose_x=0;
nose_y=0;
function preload(){
    mustache_filter=loadImage('https://i.postimg.cc/Bv9NmQS9/Screenshot-2022-09-26-123428-removebg-preview.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x-40;
        nose_y=results[0].pose.nose.y-15;
        console.log("nose x ="+nose_x);
        console.log("nose y ="+nose_y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(mustache_filter,nose_x,nose_y,120,60);
}

function take_snapshot(){
    save('myFilterImage.png');
}
