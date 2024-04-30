noseX = 0;
noseY = 0;

function preload() {
  bigodin = loadImage('https://i.postimg.cc/255C3d2G/Pngtree-hand-drawn-beard-fake-mustache-5359923.png')
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nariz x = " + noseX);
        console.log("nariz y = " + noseY);
    }
}

function draw() {
  image(video, 0, 0, 380, 350);
  image(bigodin, noseX, noseY, 100, 100);
}

function takeSnapshot() {
    save('bigodinho');
}