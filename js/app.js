$(document).ready(function() {

  $(".red-hex").text(rgbToHex("rgba(" + json[0].baseColour.toString() + ")"));
  $(".red-sample").css('color', rgbToHex("rgba(" + json[0].baseColour.toString() + ")"));
  $(".red-tint-1").text(rgbToHex("rgba(" + createTint(json[0].tints[0], json[0].baseColour) + ")"));
  $(".red-tint-1").css('color', rgbToHex("rgba(" + createTint(json[0].tints[0], json[0].baseColour) + ")"));
  $(".red-tint-2").text(rgbToHex("rgba(" + createTint(json[0].tints[1], json[0].baseColour) + ")"));
  $(".red-tint-2").css('color', rgbToHex("rgba(" + createTint(json[0].tints[1], json[0].baseColour) + ")"));
  $(".red-tint-3").text(rgbToHex("rgba(" + createTint(json[0].tints[2], json[0].baseColour) + ")"));
  $(".red-tint-3").css('color', rgbToHex("rgba(" + createTint(json[0].tints[2], json[0].baseColour) + ")"));
  $(".red-tint-4").text(rgbToHex("rgba(" + createTint(json[0].tints[3], json[0].baseColour) + ")"));
  $(".red-tint-4").css('color', rgbToHex("rgba(" + createTint(json[0].tints[3], json[0].baseColour) + ")"));

  $(".green-hex").text(rgbToHex("rgba(" + json[1].baseColour.toString() + ")"));
  $(".green-sample").css('color', rgbToHex("rgba(" + json[1].baseColour.toString() + ")"));
  $(".green-tint-1").text(rgbToHex("rgba(" + createTint(json[1].tints[0], json[1].baseColour) + ")"));
  $(".green-tint-1").css('color', rgbToHex("rgba(" + createTint(json[1].tints[0], json[1].baseColour) + ")"));
  $(".green-tint-2").text(rgbToHex("rgba(" + createTint(json[1].tints[1], json[1].baseColour) + ")"));
  $(".green-tint-2").css('color', rgbToHex("rgba(" + createTint(json[1].tints[1], json[1].baseColour) + ")"));
  $(".green-tint-3").text(rgbToHex("rgba(" + createTint(json[1].tints[2], json[1].baseColour) + ")"));
  $(".green-tint-3").css('color', rgbToHex("rgba(" + createTint(json[1].tints[2], json[1].baseColour) + ")"));
  $(".green-tint-4").text(rgbToHex("rgba(" + createTint(json[1].tints[3], json[1].baseColour) + ")"));
  $(".green-tint-4").css('color', rgbToHex("rgba(" + createTint(json[1].tints[2], json[1].baseColour) + ")"));

  $(".blue-hex").text(rgbToHex("rgba(" + json[2].baseColour.toString() + ")"));
  $(".blue-sample").css('color', rgbToHex("rgba(" + json[2].baseColour.toString() + ")"));
  $(".blue-tint-1").text(rgbToHex("rgba(" + createTint(json[2].tints[0], json[2].baseColour) + ")"));
  $(".blue-tint-1").css('color', rgbToHex("rgba(" + createTint(json[2].tints[0], json[2].baseColour) + ")"));
  $(".blue-tint-2").text(rgbToHex("rgba(" + createTint(json[2].tints[1], json[2].baseColour) + ")"));
  $(".blue-tint-2").css('color', rgbToHex("rgba(" + createTint(json[2].tints[1], json[2].baseColour) + ")"));
  $(".blue-tint-3").text(rgbToHex("rgba(" + createTint(json[2].tints[2], json[2].baseColour) + ")"));
  $(".blue-tint-3").css('color', rgbToHex("rgba(" + createTint(json[2].tints[2], json[2].baseColour) + ")"));
  $(".blue-tint-4").text(rgbToHex("rgba(" + createTint(json[2].tints[3], json[2].baseColour) + ")"));
  $(".blue-tint-4").css('color', rgbToHex("rgba(" + createTint(json[2].tints[3], json[2].baseColour) + ")"));

});

function rgbToHex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

function createTint(tint, baseColour) {
  newTint = ''
  for (i = 0; i < 3; i++) {
    sum = (tint[i] + baseColour[i])
    var x = parseInt(sum)
    if (x > 255) {
      x = 255
    } else  if (x < 0 ) {
      x = 0
    }
    newTint += x + ', '
  }
  return newTint
}

var json = [{
  "name": "Red",
  "baseColour": [120, 0, 0],
  "tints": [
    [-10, 0, 0],
    [0, 0, 0],
    [40, 0, 0],
    [80, 0, 0]
  ]
}, {
  "name": "Green",
  "baseColour": [0, 80, 0],
  "tints": [
    [0, -100, 10],
    [0, 15, 0],
    [0, 85, 0],
    [0, -12, 0]
  ]
}, {
  "name": "Blue",
  "baseColour": [0, 0, 120],
  "tints": [
    [0, 0, -25],
    [0, 0, 25],
    [0, 0, -100],
    [5, 5, 200]
  ]
}]
