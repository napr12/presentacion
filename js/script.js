function desplegarMenu() {
    let listaMenu = document.getElementById('listaMenu');
    let botonMenu = document.getElementById('abreMenu');
    let cierreMenu = document.getElementById('cierraMenu');
    let elementoLista = document.getElementsByClassName('header__nav--elementoLista');
    listaMenu.style.display = 'inline-block';
    botonMenu.style.display = 'none';
    cierreMenu.style.display = 'inline-block';
    elementoLista.style.display = 'inline';
}