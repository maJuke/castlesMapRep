@extends('layout')

@section('title_name')
    Главная страница
@endsection

@section('main_content')

    <div id="map" class="map"></div>
    <script src="https://api-maps.yandex.ru/2.1/?apikey=***MY_YANDEX_API_HERE***&lang=ru_RU"
        type="text/javascript">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script type='module' src="js/mapinit.js"></script>

@endsection