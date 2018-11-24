var str = "some string";
var arr = [];

function reverse() {

var strrev = str.split('').reverse(); // сделал массивом и рев

for (var i = 0; i < strrev.length; i++)
  if ( i%2 !== 0 ){

  arr.push(strrev[i].toUpperCase());  //можно через .unshift в начало
                                     //и без реверса

  } else arr.push(strrev[i]);

	str = arr.join(''); //изменили глобал

	console.log('Задом наперед + ЧЕТ в верхнем и НЕЧ в нижнем = ' + str);
	}

	function quickSort (arr) {

	return arr.sort();
	};

	function bubbleSort (arr) {
	var bubblearr = [];
	for (var i = 1; i < arr.length; i++)
	if ( arr[i] > arr[0] ) {
	bubblearr.push(arr[i]);
	// bubblearr.push(arr[0]);
	}
	//else bubblearr.push(arr[1]);
	console.log(bubblearr);
	}

	//здесь функция которая принемает в себя колбэк
	function someFunction(f){
	var date = new Date();
	for (var i = 0; i < 10000; i++) f(arr);
	return new Date() - date;
	}

	reverse(str);
	alert('Время быстрой сортировки=' + someFunction(quickSort) + 'ms');
	alert('Время бабл сортировки' + someFunction(bubbleSort) + 'ms');
