function getClima() {

    $.ajax({
        method: 'get',
        crossDomain: true,
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=70b6b90894bd4eb8279cffdd639022e8&lang=pt_br',
        dataType: 'json',
        success: function (data) {

            let conveterCelsius = (data.main.temp - 273.15);
            celsius = (Math.round(conveterCelsius) + 'C°');

            let dataAtual = (new Date());

            var hora = dataAtual.getHours();
            var min = dataAtual.getMinutes();
            var seg = dataAtual.getSeconds();

            console.log(data.weather[0].description);
            $('#temperatura').html(celsius);
            $('#umidade').html(data.main.humidity + '%');
            $('#condicao').html(data.weather[0].description);
            $('#velocidade').html(data.wind.speed + 'km/h');
            $('#barra').css({ 'width': data.main.humidity + '%' });
            $('#nascer').html(data.sys.sunrise + ' h');
            $('#por').html(data.sys.sunset + ' h');
            $('#dataAtual').html(hora + ':' + min + ':' + seg);

            let icone = 'img/' + data.weather[0].icon + '.png';
            $('#iconeCondicao').attr('src', icone);

        },
        error: function (argument) {
            alert('Falha ao obter dados!');
        }
    });
}

window.onload = function () {
    getClima();
};