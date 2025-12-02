
// --- CONFIGURAÇÃO DO MAPA (Visual Dark) ---
        
        // Coordenadas de exemplo em SP (Praça Carlos Gomes, perto de locais alternativos)
        var latitude = -23.5509;
        var longitude = -46.6343;

        var map = L.map('mapa-container').setView([latitude, longitude], 14);

        // !!! A MUDANÇA PRINCIPAL NO MAPA ESTÁ AQUI !!!
        // Em vez do OpenStreetMap padrão (claro), usamos o "CartoDB Dark Matter"
        // que é um mapa gratuito e escuro, perfeito para o tema do site.
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Marcador personalizado (Um círculo ciano em vez do pino azul padrão)
        var circle = L.circleMarker([latitude, longitude], {
            color: '#00f7ff', // Cor da borda (Ciano)
            fillColor: '#00f7ff', // Cor do preenchimento
            fillOpacity: 0.8,
            radius: 10
        }).addTo(map);

        circle.bindPopup('<b>SUPERVÃO AO VIVO</b><br>Cine Joia - 23h').openPopup();