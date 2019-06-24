var curIdx = 0; //
var fileName = "";
var resultFile = "";
var fileName = document.getElementById('fileName')
var noseX = document.getElementById('noseX')
var noseY = document.getElementById('noseY')
var leftEyeX = document.getElementById('leftEyeX')
var leftEyeY = document.getElementById('leftEyeY')
var rightEyeX = document.getElementById('rightEyeX')
var rightEyeY = document.getElementById('rightEyeY')
var leftMouthX = document.getElementById('leftMouthX')
var leftMouthY = document.getElementById('leftMouthY')
var rightMouthX = document.getElementById('rightMouthX')
var rightMouthY = document.getElementById('rightMouthY')
var fileListArr = [];
var curFileIndex = 0;

$.getJSON('./imageFileList.json', function (data) {
    fileListArr = data.list;
    $("#imgSrc").attr("src", './images/'+ fileListArr[curFileIndex]);
    fileName.value = fileListArr[curFileIndex];
})




$(document).ready(function () {
    $("img").on("click", function (event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        if (curIdx == 0) {
            noseX.value = x;
            noseY.value = y;
        } else if (curIdx == 1) {
            leftEyeX.value = x;
            leftEyeY.value = y;
        } else if (curIdx == 2) {
            rightEyeX.value = x;
            rightEyeY.value = y;
        } else if (curIdx == 3) {
            leftMouthX.value = x;
            leftMouthY.value = y;
        } else if (curIdx == 4) {
            rightMouthX.value = x;
            rightMouthY.value = y;
        }
        if (curIdx !== 5) curIdx++;

    });
});

function InputDelete() {

    if (curIdx == 1) {
        noseX.value = "";
        noseY.value = "";
    } else if (curIdx == 2) {
        leftEyeX.value = "";
        leftEyeY.value = "";
    } else if (curIdx == 3) {
        rightEyeX.value = "";
        rightEyeY.value = "";
    } else if (curIdx == 4) {
        leftMouthX.value = "";
        leftMouthY.value = "";
    } else if (curIdx == 5) {
        rightMouthX.value = "";
        rightMouthY.value = "";
    }
    if (curIdx !== 0) curIdx--;
}

function RemoveInput() {
    noseX.value = "";
    noseY.value = "";
    leftEyeX.value = "";
    leftEyeY.value = "";
    rightEyeX.value = "";
    rightEyeY.value = "";
    leftMouthX.value = "";
    leftMouthY.value = "";
    rightMouthX.value = "";
    rightMouthY.value = "";
}

function NextImage() {
    curIdx = 0;
    curFileIndex++;
    $("#imgSrc").attr("src", './images/'+ fileListArr[curFileIndex]);
    fileName.value = fileListArr[curFileIndex];
    RemoveInput();
}

function Save(){
    var coordinateArr = [
        [],
        [],
        [],
        [],
        []
    ];
    coordinateArr[0][0] = 0;
    coordinateArr[0][1] = 0;
    coordinateArr[1][0] = 0;
    coordinateArr[1][1] = 0;
    coordinateArr[2][0] = 0;
    coordinateArr[2][1] = 0;
    coordinateArr[3][0] = 0;
    coordinateArr[3][1] = 0;
    coordinateArr[4][0] = 0;
    coordinateArr[4][1] = 0;
    coordinateArr[0][0] = parseInt(document.getElementById('noseX').value)
    coordinateArr[0][1] = parseInt(document.getElementById('noseY').value)
    coordinateArr[1][0] = parseInt(document.getElementById('leftEyeX').value)
    coordinateArr[1][1] = parseInt(document.getElementById('leftEyeY').value)
    coordinateArr[2][0] = parseInt(document.getElementById('rightEyeX').value)
    coordinateArr[2][1] = parseInt(document.getElementById('rightEyeY').value)
    coordinateArr[3][0] = parseInt(document.getElementById('leftMouthX').value)
    coordinateArr[3][1] = parseInt(document.getElementById('leftMouthY').value)
    coordinateArr[4][0] = parseInt(document.getElementById('rightMouthX').value)
    coordinateArr[4][1] = parseInt(document.getElementById('rightMouthY').value)
    console.log("[saved success]");
    var result = "";
    result += fileName.value + " "
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 2; j++) {
            if (i == 4 && j == 1) result += coordinateArr[i][j];
            else result += coordinateArr[i][j] + " "
        }
    }
    result += "\n"
    resultFile += result;
}

function Export() {
    console.log(resultFile)
}