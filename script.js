
src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""// --- CONFIGURAÇÃO DO MAPA ---
        // 1. Inicializa o mapa nas coordenadas (Latitude, Longitude) e Zoom
        // Exemplo: Coordenadas de um teatro em SP. Você pode pegar no Google Maps clicando com botão direito > "O que há aqui?"
        var map = L.map('mapa-container').setView([-23.5453, -46.6388], 15);

        // 2. Adiciona o desenho do mapa (OpenStreetMap - Gratuito)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // 3. Adiciona o pino (Marker)
        L.marker([-23.5453, -46.6388]).addTo(map)
            .bindPopup('<b>Show da Banda Beta</b><br>Sábado às 20h.')
            .openPopup();