
function getMessage (a, b) {
  var message;
  if (typeof a === 'boolean') {
    if (a === true) {
      message = 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    } else {
      message = 'Переданное GIF-изображение не анимировано'
    }
  } else if (typeof a === 'number') {
    message = 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + b*4 + ' атрибутов';
  } else if (Array.isArray(a) & Array.isArray(b)) {
    var length = 0
    for (var i = 0; i < a.length; i++) {
      length += (a[i] * b [i])
    }
    message = 'Общая площадь артефактов сжатия: ' + length + ' пикселей';
  } else if (Array.isArray(a)) {
    var sum = 0
    for (var x = 0; x < a.length; x++) {
      sum += a[x]
    }
    message = 'Количество красных точек во всех строчках изображения: ' + sum;
  }
  return message;
}
