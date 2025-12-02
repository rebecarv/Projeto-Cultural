// --- LÓGICA DO MENU HAMBURGER---
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuLinks = document.getElementById('menuLinks');

    if (menuToggle && menuLinks) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' para mostrar/esconder
            menuLinks.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link (útil em Single Page Apps)
        menuLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Fechar apenas se a tela for pequena (lógica mobile)
                if (window.innerWidth <= 768) {
                    menuLinks.classList.remove('active');
                }
            });
        });
    }
});

// --- CONFIGURAÇÃO DO MAPA (Visual Dark) ---
        // Coordenadas de exemplo em SP (Praça Carlos Gomes, perto de locais alternativos)
        var latitude = -23.5509;
        var longitude = -46.6343;

        var map = L.map('mapa-container').setView([latitude, longitude], 14);


        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Marcador personalizado 
        var circle = L.circleMarker([latitude, longitude], {
            color: '#ffaa8f', // Cor da borda 
            fillColor: '#ffaa8f', // Cor do preenchimento
            fillOpacity: 0.8,
            radius: 10
        }).addTo(map);

        circle.bindPopup('<b>SUPERVÃO AO VIVO</b><br>Cine Joia - 23h').openPopup();