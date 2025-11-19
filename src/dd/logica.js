function calcularTiempoDesde(fechaInicio) {

    const fechaInicial = new Date(fechaInicio);
    const fechaActual = new Date();

    let anios = fechaActual.getFullYear() - fechaInicial.getFullYear();
    let meses = fechaActual.getMonth() - fechaInicial.getMonth();
    let diads = fechaActual.getDate() - fechaInicial.getDate();

    if (meses < 0) {
        anios--;
        meses += 12;
    }

    if (diads < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(
            fechaActual.getFullYear(),
            fechaActual.getMonth(),
            0
        ).getDate();
        diads += ultimoDiaMesAnterior;
    }
    const mesesTotales = anios * 12 + meses;
    const unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
    const díasTotales = Math.floor((fechaActual - fechaInicial) / unDiaEnMilisegundos);

    let yearsSep = document.getElementById('yearsSep--back');
    yearsSep.innerText = anios;
    let mesesSep = document.getElementById('mesesSep--back');
    mesesSep.innerText = mesesTotales;
    let diasSep = document.getElementById('diasSep--back');
    diasSep.innerText = díasTotales;

    let yearsAll = document.getElementById('yearsAll--back');
    yearsAll.innerText = anios;
    let mesesAll = document.getElementById('mesesAll--back');
    mesesAll.innerText = meses;
    let diasAll = document.getElementById('diasAll--back');
    diasAll.innerText = diads;
    esese();
}
const fecha = "2023-10-10"; //YYYY-MM-DD
calcularTiempoDesde(fecha);



function calcularTiempoDesde2(fechaInicio) {

    const fechaInicial = new Date(fechaInicio);
    const fechaActual = new Date();

    let anios = fechaActual.getFullYear() - fechaInicial.getFullYear();
    let meses = fechaActual.getMonth() - fechaInicial.getMonth();
    let diads = fechaActual.getDate() - fechaInicial.getDate();

    if (meses < 0) {
        anios--;
        meses += 12;
    }

    if (diads < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(
            fechaActual.getFullYear(),
            fechaActual.getMonth(),
            0
        ).getDate();
        diads += ultimoDiaMesAnterior;
    }
    const mesesTotales = anios * 12 + meses;
    const unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
    const díasTotales = Math.floor((fechaActual - fechaInicial) / unDiaEnMilisegundos);

    let yearsSep = document.getElementById('yearsSep--meet');
    yearsSep.innerText = anios;
    let mesesSep = document.getElementById('mesesSep--meet');
    mesesSep.innerText = mesesTotales;
    let diasSep = document.getElementById('diasSep--meet');
    diasSep.innerText = díasTotales;

    let yearsAll = document.getElementById('yearsAll--meet');
    yearsAll.innerText = anios;
    let mesesAll = document.getElementById('mesesAll--meet');
    mesesAll.innerText = meses;
    let diasAll = document.getElementById('diasAll--meet');
    diasAll.innerText = diads;
    esese();
}
const fecha2 = "2022-12-09"; //YYYY-MM-DD
calcularTiempoDesde2(fecha2);


function esese(){
    let titulos = document.querySelectorAll('.title--counter');
    let valores = document.querySelectorAll('.value--counter');

    titulos.forEach((titulo, index) => {
        let tipo = titulo.getAttribute('data-type');

        if (tipo === "year") {
          if(valores[index].innerText == '1'){
            titulo.innerText = 'Año';
          }
          else{
            titulo.innerText = 'Años';
          }
        }
        else if(tipo === "mes"){
            if(valores[index].innerText == '1'){
                titulo.innerText = 'Mes';
            }
            else{
                titulo.innerText = 'Meses';
            }
        }
        else{
            if(valores[index] == 1){
                titulo.innerText = 'Día';
            }
            else{
                titulo.innerText = 'Días';
            }
        }
    });
}

function obtenerFechaActual() {
    const fechaActual = new Date();

    const diasSemanaArr = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    const mesesAño = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    
    const diaSemana = diasSemanaArr[fechaActual.getDay()];
    const hoy = fechaActual.getDate();
    const mes = mesesAño[fechaActual.getMonth()];
    const año = fechaActual.getFullYear();
    
    document.getElementById('mes_date').innerText = mes;
    document.getElementById('year_date').innerText = año;
    document.getElementById('dia_nombre').innerText = diaSemana;
    document.getElementById('dia_numero').innerText = hoy;
    
    // Ayer
    const fechaAyer = new Date(fechaActual);
    fechaAyer.setDate(hoy - 1);
    document.getElementById('ayer_nombre').innerText = diasSemanaArr[fechaAyer.getDay()];
    document.getElementById('ayer_numero').innerText = fechaAyer.getDate();
    
    // Mañana
    const fechaTomorrow = new Date(fechaActual);
    fechaTomorrow.setDate(hoy + 1);
    document.getElementById('tomorrow_nombre').innerText = diasSemanaArr[fechaTomorrow.getDay()];
    document.getElementById('tomorrow_numero').innerText = fechaTomorrow.getDate();
}
obtenerFechaActual();


function updateProgress(targetDate) {
    const today = new Date();
    const year = today.getFullYear();
    const target = new Date(year, targetDate.month - 1, targetDate.day); 

    if (target < today) {
        target.setFullYear(year + 1);
    }

    const daysLeft = Math.ceil((target - today) / (1000 * 60 * 60 * 24));

    const startOfYear = new Date(year, 0, 1);
    const endOfYear = new Date(year, 11, 31);
    const totalDaysInYear = Math.ceil((endOfYear - startOfYear) / (1000 * 60 * 60 * 24));

    const percentage = (daysLeft / totalDaysInYear) * 100;
    const offset = 251.2 - (251.2 * percentage / 100);

    document.getElementById('daysLeft').innerText = daysLeft;
    document.querySelector('.circle-progress').style.strokeDashoffset = offset;
}
updateProgress({ month: 12, day: 9 }); 


function updateProgress2(targetDate) {
    const today = new Date();
    const year = today.getFullYear();
    const target = new Date(year, targetDate.month - 1, targetDate.day); 

    if (target < today) {
        target.setFullYear(year + 1);
    }

    const daysLeft = Math.ceil((target - today) / (1000 * 60 * 60 * 24));

    const startOfYear = new Date(year, 0, 1);
    const endOfYear = new Date(year, 11, 31);
    const totalDaysInYear = Math.ceil((endOfYear - startOfYear) / (1000 * 60 * 60 * 24));

    const percentage = (daysLeft / totalDaysInYear) * 100;
    const offset = 251.2 - (251.2 * percentage / 100);

    document.getElementById('daysLeft2').innerText = daysLeft;
    document.querySelector('.circle-progress2').style.strokeDashoffset = offset;
}
updateProgress2({ month: 10, day: 10 }); 

