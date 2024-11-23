let center = [43.115542, 131.885494];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 15
	});

    const promise = axios.get('http://127.0.0.1:80/api/castleslist');

    promise.then(promise => {
        if (promise.status === 200) {
            promise.data.castles.forEach(element => {
                map.geoObjects.add(
                    new ymaps.Placemark(
                        [element.castle_lat, element.castle_lon],
                        {}, 
                        {}));
            });
        } else {
            console.log('Ошибочный статус: ', promise.status);
        }
    }).catch(error => {
        console.error('Ошибка при запросе к API: ', error);
    });


    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
}

ymaps.ready(init);