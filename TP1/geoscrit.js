document.getElementByld('locationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Obtención de los valores del formulario

    let latitud = document.getElementByld('latitud').value.trim();
    let longitud = document.getElementByld('longitud').value.trim();

    //Reemplazar coma por punto si se ingresó con formato decimal en español(ej. 28,353...)
    latitud = latitud.replace(',', '.');
    longitud = longitud.replace(',', '.');

    //Validación básica de valores numéricos
    if (isNaN(latitud) || isNaN(longitud) || latitud==='' || longitud===''){
        alert('Por favor, ingrese coordenadas válidas.');
        return;
    } 

    //Contrucción de URL de Google Maps con las coordenadas
    const urlGoogleMaps = `https://www.google.com/maps?q=${latitud},${longitud}`;

    // Abrir Google Maps en una nueva pestaña
    window.open(urlGoogleMaps,'_blank')
});