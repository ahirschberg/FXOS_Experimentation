var button_text = [
  "Click me!",
  "Don't click me!", 
  "Seriously, don't click me!",
  "I don't know who you are, but if you click me again there will be consequences",
  "This is your last warning, bud. One more click and you're dead",
  "What did thou just sayest about meself, thou yellow-bellied hound? I shall inform thee that I am imployed in the top ranks of the Inquisition, and I have taken part in most numerous cladestine battles against sinners, and I have slain over 300 heretics. I am most educated in the knightly ways and the Lord boasts of my ability to kill. Thou art naught but a peasant and another heretic in my eyes. I will slay thee with most deadly force and thy blood shall flow like rain on this Earth, hark to my words. Dost thou believe thee can freely send me these letters via messenger on horseback? Thou would doest well to mull upon it a second time, peasant. As my quill scrabbles on this paper, I am alerting the Inquistion all over Europe and thou shall be executed accordingly. Thou would doest well to begin repenting, lad. I can find thee wherever thou goest, and I can slay thee in a million ways with nothing but my hands. I am not only most trained in combat with no weapons, I also have access to thousands of men with extensive training of their own and I will deploy them with orders to burn and pillage thy village, thou insolent little disease. If only thou hadst known the wicked requital that thy “snide” insult was about to bring upon thee, mayhap thou would hast watched thy foul tongue. Alas, thou did not, and now, thou shall be punished at the hands of justice, thou tottering moron. I will defecate mine rage all over thee, and thou will suffocate in my fury. Thou art as well as executed, lad.",
  "<img src='http://i.imgur.com/e3QlEMa.png' style='width: 100%; height: 100%;' alt='freakin iken'> YOU ARE THE OPPOSITE OF IKEN ITE!",
  "Ok. I forgive you.  Click me."
];
var idx = 1;
var _camera, _blob;
var cam_options = {
  mode: 'picture',
  recorderProfile: 'jpg',
  previewSize: {
    width: 352,
    height: 288
  }
};
function onSuccess(camera) {
  logs("success");
  logs(camera);
  _camera = camera;
  camera.flashMode = 'torch';
  onAccessCamera(camera);
}
function onError(error) {
  logs(error);
  console.log(error);
}

$(document).ready(function() {
  $("#clicker-btn").click(function() {
    $(this).html(button_text[idx % button_text.length]);
    
    idx++;
  })
  $("#take-picture").click(function () {
    logs("attempting to take picture...");
    navigator.mozCameras.getCamera("back", cam_options, onSuccess, onError);
  });
  $("#console-log-test").click(function () {
    console.log("test");
    logs("test");
  })
});

var storage = navigator.getDeviceStorage('sdcard');
var cameraOptions = {
  camera: navigator.mozCameras.getListOfCameras()[0]
};
var pictureOptions = {
  rotation: 90,
  pictureSize: null,
  fileFormat: null
}

function onPictureTaken( blob ) {
  logs("picture taken");
  _blob = blob;
  file = storage.addNamed(blob, 'myImage.jpg');
  //url = URL.createObjectURL(file);
  logs("writing to file.");
  logs("url is" + url);
  $("#picture-display").attr("src", url);
}

function onAccessCamera( camera ) {
  pictureOptions.pictureSize = camera.capabilities.pictureSizes[0];
  pictureOptions.fileformat  = camera.capabilities.fileFormats[0];
  logs("camera accessed");
  camera.takePicture(pictureOptions, onPictureTaken);
};

function logs(str) {
  console.log(str);
  $("#console-body").append(str + "\n");
}

function clearlog() {
  $("#console-body").empty();
}