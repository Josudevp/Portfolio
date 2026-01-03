document.addEventListener('DOMContentLoaded', () => {
    const dotLayer = document.querySelector('#global-dot-tracking');

    if (dotLayer) {
        window.addEventListener('mousemove', (e) => {
            // Usamos clientX/Y para que sea relativo a la pantalla fija
            const x = e.clientX;
            const y = e.clientY;

            // Enviamos las coordenadas al CSS
            dotLayer.style.setProperty('--mouse-x', `${x}px`);
            dotLayer.style.setProperty('--mouse-y', `${y}px`);
        });
    }
});

