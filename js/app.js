$(document).ready(function() {

  var data;

  $.ajax('https://qbs.arkonline.co.uk/task/colours.json?task=2', {
    async: false,
    success: function(response){
      data = response;
    }
  })

  $(".colour-1-name").text(data[0].name);
  $(".colour-1-hex").text(rgbToHex("rgba(" + data[0].baseColour.toString() + ")"));
  $(".colour-1-sample").css('color', rgbToHex("rgba(" + data[0].baseColour.toString() + ")"));
  $(".colour1-tint-1").text(rgbToHex("rgba(" + createTint(data[0].tints[0], data[0].baseColour) + ")"));
  $(".colour1-tint-1").css('color', rgbToHex("rgba(" + createTint(data[0].tints[0], data[0].baseColour) + ")"));
  $(".colour1-tint-2").text(rgbToHex("rgba(" + createTint(data[0].tints[1], data[0].baseColour) + ")"));
  $(".colour1-tint-2").css('color', rgbToHex("rgba(" + createTint(data[0].tints[1], data[0].baseColour) + ")"));
  $(".colour1-tint-3").text(rgbToHex("rgba(" + createTint(data[0].tints[2], data[0].baseColour) + ")"));
  $(".colour1-tint-3").css('color', rgbToHex("rgba(" + createTint(data[0].tints[2], data[0].baseColour) + ")"));
  $(".colour1-tint-4").text(rgbToHex("rgba(" + createTint(data[0].tints[3], data[0].baseColour) + ")"));
  $(".colour1-tint-4").css('color', rgbToHex("rgba(" + createTint(data[0].tints[3], data[0].baseColour) + ")"));

  $(".colour-2-name").text(data[1].name);
  $(".colour-2-hex").text(rgbToHex("rgba(" + data[1].baseColour.toString() + ")"));
  $(".colour-2-sample").css('color', rgbToHex("rgba(" + data[1].baseColour.toString() + ")"));
  $(".colour2-tint-1").text(rgbToHex("rgba(" + createTint(data[1].tints[0], data[1].baseColour) + ")"));
  $(".colour2-tint-1").css('color', rgbToHex("rgba(" + createTint(data[1].tints[0], data[1].baseColour) + ")"));
  $(".colour2-tint-2").text(rgbToHex("rgba(" + createTint(data[1].tints[1], data[1].baseColour) + ")"));
  $(".colour2-tint-2").css('color', rgbToHex("rgba(" + createTint(data[1].tints[1], data[1].baseColour) + ")"));
  $(".colour2-tint-3").text(rgbToHex("rgba(" + createTint(data[1].tints[2], data[1].baseColour) + ")"));
  $(".colour2-tint-3").css('color', rgbToHex("rgba(" + createTint(data[1].tints[2], data[1].baseColour) + ")"));
  $(".colour2-tint-4").text(rgbToHex("rgba(" + createTint(data[1].tints[3], data[1].baseColour) + ")"));
  $(".colour2-tint-4").css('color', rgbToHex("rgba(" + createTint(data[1].tints[2], data[1].baseColour) + ")"));

  $(".colour-3-name").text(data[2].name);
  $(".colour-3-hex").text(rgbToHex("rgba(" + data[2].baseColour.toString() + ")"));
  $(".colour-3-sample").css('color', rgbToHex("rgba(" + data[2].baseColour.toString() + ")"));
  $(".colour3-tint-1").text(rgbToHex("rgba(" + createTint(data[2].tints[0], data[2].baseColour) + ")"));
  $(".colour3-tint-1").css('color', rgbToHex("rgba(" + createTint(data[2].tints[0], data[2].baseColour) + ")"));
  $(".colour3-tint-2").text(rgbToHex("rgba(" + createTint(data[2].tints[1], data[2].baseColour) + ")"));
  $(".colour3-tint-2").css('color', rgbToHex("rgba(" + createTint(data[2].tints[1], data[2].baseColour) + ")"));
  $(".colour3-tint-3").text(rgbToHex("rgba(" + createTint(data[2].tints[2], data[2].baseColour) + ")"));
  $(".colour3-tint-3").css('color', rgbToHex("rgba(" + createTint(data[2].tints[2], data[2].baseColour) + ")"));
  $(".colour3-tint-4").text(rgbToHex("rgba(" + createTint(data[2].tints[3], data[2].baseColour) + ")"));
  $(".colour3-tint-4").css('color', rgbToHex("rgba(" + createTint(data[2].tints[3], data[2].baseColour) + ")"));

  $(".colour-4-name").text(data[3].name);
  $(".colour-4-hex").text(rgbToHex("rgba(" + data[2].baseColour.toString() + ")"));
  $(".colour-4-sample").css('color', rgbToHex("rgba(" + data[3].baseColour.toString() + ")"));
  $(".colour4-tint-1").text(rgbToHex("rgba(" + createTint(data[3].tints[0], data[3].baseColour) + ")"));
  $(".colour4-tint-1").css('color', rgbToHex("rgba(" + createTint(data[3].tints[0], data[3].baseColour) + ")"));
  $(".colour4-tint-2").text(rgbToHex("rgba(" + createTint(data[3].tints[1], data[2].baseColour) + ")"));
  $(".colour4-tint-2").css('color', rgbToHex("rgba(" + createTint(data[3].tints[1], data[3].baseColour) + ")"));
  $(".colour4-tint-3").text(rgbToHex("rgba(" + createTint(data[3].tints[2], data[3].baseColour) + ")"));
  $(".colour4-tint-3").css('color', rgbToHex("rgba(" + createTint(data[2].tints[2], data[3].baseColour) + ")"));
  $(".colour4-tint-4").text(rgbToHex("rgba(" + createTint(data[3].tints[3], data[3].baseColour) + ")"));
  $(".colour4-tint-4").css('color', rgbToHex("rgba(" + createTint(data[3].tints[3], data[3].baseColour) + ")"));

  $(".colour-5-name").text(data[4].name);
  $(".colour-5-hex").text(rgbToHex("rgba(" + data[4].baseColour.toString() + ")"));
  $(".colour-5-sample").css('color', rgbToHex("rgba(" + data[4].baseColour.toString() + ")"));
  $(".colour5-tint-1").text(rgbToHex("rgba(" + createTint(data[4].tints[0], data[4].baseColour) + ")"));
  $(".colour5-tint-1").css('color', rgbToHex("rgba(" + createTint(data[4].tints[0], data[4].baseColour) + ")"));
  $(".colour5-tint-2").text(rgbToHex("rgba(" + createTint(data[4].tints[1], data[4].baseColour) + ")"));
  $(".colour5-tint-2").css('color', rgbToHex("rgba(" + createTint(data[4].tints[1], data[4].baseColour) + ")"));
  $(".colour5-tint-3").text(rgbToHex("rgba(" + createTint(data[4].tints[2], data[4].baseColour) + ")"));
  $(".colour5-tint-3").css('color', rgbToHex("rgba(" + createTint(data[4].tints[2], data[4].baseColour) + ")"));
  $(".colour5-tint-4").text(rgbToHex("rgba(" + createTint(data[4].tints[3], data[4].baseColour) + ")"));
  $(".colour5-tint-4").css('color', rgbToHex("rgba(" + createTint(data[4].tints[3], data[4].baseColour) + ")"));

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
