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
  $(".c1-rgba1").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour1-tint-1").css('color', rgbToHex("rgba(" + createTint(data[0].tints[0], data[0].baseColour) + ")"));
  $(".colour1-tint-2").text(rgbToHex("rgba(" + createTint(data[0].tints[1], data[0].baseColour) + ")"));
  $(".c1-rgba2").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour1-tint-2").css('color', rgbToHex("rgba(" + createTint(data[0].tints[1], data[0].baseColour) + ")"));
  $(".colour1-tint-3").text(rgbToHex("rgba(" + createTint(data[0].tints[2], data[0].baseColour) + ")"));
  $(".c1-rgba3").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour1-tint-3").css('color', rgbToHex("rgba(" + createTint(data[0].tints[2], data[0].baseColour) + ")"));
  $(".colour1-tint-4").text(rgbToHex("rgba(" + createTint(data[0].tints[3], data[0].baseColour) + ")"));
  $(".c1-rgba4").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour1-tint-4").css('color', rgbToHex("rgba(" + createTint(data[0].tints[3], data[0].baseColour) + ")"));
  $(".colour1-tint-5").text(rgbToHex("rgba(" + createTint(data[0].tints[4], data[0].baseColour) + ")"));
  $(".c1-rgba5").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour1-tint-5").css('color', rgbToHex("rgba(" + createTint(data[0].tints[4], data[0].baseColour) + ")"));

  $(".colour-2-name").text(data[1].name);
  $(".colour-2-hex").text(rgbToHex("rgba(" + data[1].baseColour.toString() + ")"));
  $(".colour-2-sample").css('color', rgbToHex("rgba(" + data[1].baseColour.toString() + ")"));
  $(".colour2-tint-1").text(rgbToHex("rgba(" + createTint(data[1].tints[0], data[1].baseColour) + ")"));
  $(".c2-rgba1").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour2-tint-1").css('color', rgbToHex("rgba(" + createTint(data[1].tints[0], data[1].baseColour) + ")"));
  $(".colour2-tint-2").text(rgbToHex("rgba(" + createTint(data[1].tints[1], data[1].baseColour) + ")"));
  $(".c2-rgba2").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour2-tint-2").css('color', rgbToHex("rgba(" + createTint(data[1].tints[1], data[1].baseColour) + ")"));
  $(".colour2-tint-3").text(rgbToHex("rgba(" + createTint(data[1].tints[2], data[1].baseColour) + ")"));
  $(".c2-rgba3").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour2-tint-3").css('color', rgbToHex("rgba(" + createTint(data[1].tints[2], data[1].baseColour) + ")"));
  $(".colour2-tint-4").text(rgbToHex("rgba(" + createTint(data[1].tints[3], data[1].baseColour) + ")"));
  $(".c2-rgba4").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour2-tint-4").css('color', rgbToHex("rgba(" + createTint(data[1].tints[3], data[1].baseColour) + ")"));
  $(".colour2-tint-5").text(rgbToHex("rgba(" + createTint(data[1].tints[4], data[1].baseColour) + ")"));
  $(".c2-rgba5").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour2-tint-5").css('color', rgbToHex("rgba(" + createTint(data[1].tints[4], data[1].baseColour) + ")"));

  $(".colour-3-name").text(data[2].name);
  $(".colour-3-hex").text(rgbToHex("rgba(" + data[2].baseColour.toString() + ")"));
  $(".colour-3-sample").css('color', rgbToHex("rgba(" + data[2].baseColour.toString() + ")"));
  $(".colour3-tint-1").text(rgbToHex("rgba(" + createTint(data[2].tints[0], data[2].baseColour) + ")"));
  $(".c3-rgba1").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour3-tint-1").css('color', rgbToHex("rgba(" + createTint(data[2].tints[0], data[2].baseColour) + ")"));
  $(".colour3-tint-2").text(rgbToHex("rgba(" + createTint(data[2].tints[1], data[2].baseColour) + ")"));
  $(".c3-rgba2").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour3-tint-2").css('color', rgbToHex("rgba(" + createTint(data[2].tints[1], data[2].baseColour) + ")"));
  $(".colour3-tint-3").text(rgbToHex("rgba(" + createTint(data[2].tints[2], data[2].baseColour) + ")"));
  $(".c3-rgba3").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour3-tint-3").css('color', rgbToHex("rgba(" + createTint(data[2].tints[2], data[2].baseColour) + ")"));
  $(".colour3-tint-4").text(rgbToHex("rgba(" + createTint(data[2].tints[3], data[2].baseColour) + ")"));
  $(".c3-rgba4").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour3-tint-4").css('color', rgbToHex("rgba(" + createTint(data[2].tints[3], data[2].baseColour) + ")"));
  $(".colour3-tint-5").text(rgbToHex("rgba(" + createTint(data[2].tints[4], data[2].baseColour) + ")"));
  $(".c3-rgba5").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour3-tint-5").css('color', rgbToHex("rgba(" + createTint(data[2].tints[4], data[2].baseColour) + ")"));

  $(".colour-4-name").text(data[3].name);
  $(".colour-4-hex").text(rgbToHex("rgba(" + data[3].baseColour.toString() + ")"));
  $(".colour-4-sample").css('color', rgbToHex("rgba(" + data[3].baseColour.toString() + ")"));
  $(".colour4-tint-1").text(rgbToHex("rgba(" + createTint(data[3].tints[0], data[3].baseColour) + ")"));
  $(".c4-rgba1").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour4-tint-1").css('color', rgbToHex("rgba(" + createTint(data[3].tints[0], data[3].baseColour) + ")"));
  $(".colour4-tint-2").text(rgbToHex("rgba(" + createTint(data[3].tints[1], data[2].baseColour) + ")"));
  $(".c4-rgba2").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour4-tint-2").css('color', rgbToHex("rgba(" + createTint(data[3].tints[1], data[3].baseColour) + ")"));
  $(".colour4-tint-3").text(rgbToHex("rgba(" + createTint(data[3].tints[2], data[3].baseColour) + ")"));
  $(".c4-rgba3").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour4-tint-3").css('color', rgbToHex("rgba(" + createTint(data[2].tints[2], data[3].baseColour) + ")"));
  $(".colour4-tint-4").text(rgbToHex("rgba(" + createTint(data[3].tints[3], data[3].baseColour) + ")"));
  $(".c4-rgba4").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour4-tint-4").css('color', rgbToHex("rgba(" + createTint(data[3].tints[3], data[3].baseColour) + ")"));
  $(".colour4-tint-5").text(rgbToHex("rgba(" + createTint(data[3].tints[4], data[3].baseColour) + ")"));
  $(".c4-rgba5").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour4-tint-5").css('color', rgbToHex("rgba(" + createTint(data[3].tints[4], data[3].baseColour) + ")"));

  $(".colour-5-name").text(data[4].name);
  $(".colour-5-hex").text(rgbToHex("rgba(" + data[4].baseColour.toString() + ")"));
  $(".colour-5-sample").css('color', rgbToHex("rgba(" + data[4].baseColour.toString() + ")"));
  $(".colour5-tint-1").text(rgbToHex("rgba(" + createTint(data[4].tints[0], data[4].baseColour) + ")"));
  $(".c5-rgba1").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour5-tint-1").css('color', rgbToHex("rgba(" + createTint(data[4].tints[0], data[4].baseColour) + ")"));
  $(".colour5-tint-2").text(rgbToHex("rgba(" + createTint(data[4].tints[1], data[4].baseColour) + ")"));
  $(".c5-rgba2").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour5-tint-2").css('color', rgbToHex("rgba(" + createTint(data[4].tints[1], data[4].baseColour) + ")"));
  $(".colour5-tint-3").text(rgbToHex("rgba(" + createTint(data[4].tints[2], data[4].baseColour) + ")"));
  $(".c5-rgba3").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour5-tint-3").css('color', rgbToHex("rgba(" + createTint(data[4].tints[2], data[4].baseColour) + ")"));
  $(".colour5-tint-4").text(rgbToHex("rgba(" + createTint(data[4].tints[3], data[4].baseColour) + ")"));
  $(".c5-rgba4").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour5-tint-4").css('color', rgbToHex("rgba(" + createTint(data[4].tints[3], data[4].baseColour) + ")"));
  $(".colour5-tint-5").text(rgbToHex("rgba(" + createTint(data[4].tints[4], data[4].baseColour) + ")"));
  $(".c5-rgba5").text(createTint(data[0].tints[1], data[0].baseColour));
  $(".colour5-tint-5").css('color', rgbToHex("rgba(" + createTint(data[4].tints[4], data[4].baseColour) + ")"));

  // Saved Colours

  var savedData;

  $.getJSON("data.json", function(json) {
    $(".imported-colour-name").text(json[0].name);
    $(".imported-colour-hex").text(rgbToHex("rgba(" + json[0].baseColour.toString() + ")"));
    $(".imported-colour-sample").css('color', rgbToHex("rgba(" + json[0].baseColour.toString() + ")"));
    $(".exported-tint-1").text(rgbToHex("rgba(" + createTint(json[0].tints[0], json[0].baseColour) + ")"));
    $(".exported-rgba-1").text(createTint(json[0].tints[1], json[0].baseColour));
    $(".exported-tint-1").css('color', rgbToHex("rgba(" + createTint(json[0].tints[0], json[0].baseColour) + ")"));
    $(".exported-tint-2").text(rgbToHex("rgba(" + createTint(json[0].tints[1], json[0].baseColour) + ")"));
    $(".exported-rgba-2").text(createTint(json[0].tints[1], json[0].baseColour));
    $(".exported-tint-2").css('color', rgbToHex("rgba(" + createTint(json[0].tints[1], json[0].baseColour) + ")"));
  });

  // Create new Colours

  $(".enter-new-colour").submit(function() {
    var nameInput = $('.name-input').val();
    $(".new-colour-name").text(nameInput);
    var newColourValue = $('.new-colour-input').val();
    var hexValue = $(this).siblings('span');
      hexValue.text(rgbToHex("rgba(" + newColourValue.toString() + ")"));
      $(".new-colour-sample").css('color', rgbToHex("rgba(" + newColourValue.toString() + ")"));
      $(".new-colour-tint-1").text(rgbToHex("rgba(" + createTint(defaultTints.tints[0], newColourValue) + ")"));
      $(".new-colour-rgba1").text(createTint(defaultTints.tints[0], newColourValue));
      $(".new-colour-tint-1").css('color', rgbToHex("rgba(" + createTint(defaultTints.tints[0], newColourValue) + ")"));
      $(".new-colour-tint-2").text(rgbToHex("rgba(" + createTint(defaultTints.tints[1], newColourValue) + ")"));
      $(".new-colour-rgba2").text(createTint(defaultTints.tints[1], newColourValue));
      $(".new-colour-tint-2").css('color', rgbToHex("rgba(" + createTint(defaultTints.tints[1], newColourValue) + ")"));
      hexValue = '';
      createJson(nameInput, newColourValue);
    return false;
  });

  // Edit colours

  $(".edit-form").submit(function() {
    var textValue = $('.text-input').val();
    var hexValue = $(this).siblings('span');
      hexValue.text(rgbToHex("rgba(" + textValue.toString() + ")"));
      textValue = '';
      hexValue = '';
      return false;
  });

  // Increase/Decrease Alpha

  $(function() {
    $(".increaseAlpha").click(function() {
      var alpha  = $(this).siblings('span.alpha');
      alpha.text((Math.min(1, Number(alpha.text()) + 0.1)).toFixed(1))
    });
    $(".decreaseAlpha").click(function() {
      var alpha = $(this).siblings('span.alpha');
      alpha.text((Math.max(0, Number(alpha.text()) - 0.1)).toFixed(1))
    });
  });

});

// Create Json

function createJson(nameInput, newColourValue) {
  var jsonText = [{"name": nameInput,
                  "baseColour": newColourValue.split(', ').map(Number),
                  "tints": [
                        		[10, 12, 150],
                        		[10, 50, 120]
                  ]
  }];
  exportJson(jsonText);
};

// Export Json

function exportJson(jsonText) {
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonText));

  var a = document.createElement('a');
  a.href = 'data:' + data;
  a.download = '/data.json';
  a.innerHTML = 'download JSON';

  var container = document.getElementById('container');
  container.appendChild(a);
}

// RGB to hex

function rgbToHex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

// Create Tints

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

// mock tints

var defaultTints =	{"tints": [
		[10, 12, 150],
		[10, 50, 120]
]};
