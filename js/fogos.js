export function iniciarFogos() {
    const canvas = document.getElementById('fogos-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Garante que o tamanho do canvas corresponda ao layout real
    canvas.width = canvas.clientWidth;
    canvas.height = 150; // Deve bater com a altura definida no CSS

    let particles = [];

    function criarParticulas() {
        const cores = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height,
                angle: Math.random() * 2 * Math.PI,
                speed: Math.random() * 4 + 2,
                radius: Math.random() * 3 + 2,
                color: cores[Math.floor(Math.random() * cores.length)],
                alpha: 1
            });
        }
    }

    function desenhar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            const dx = Math.cos(p.angle) * p.speed;
            const dy = Math.sin(p.angle) * p.speed;

            p.x += dx;
            p.y += dy;
            p.alpha -= 0.01;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.alpha})`;
            ctx.fill();
        });

        particles = particles.filter(p => p.alpha > 0);
        if (particles.length > 0) {
            requestAnimationFrame(desenhar);
        }
    }

    function hexToRgb(hex) {
        const bigint = parseInt(hex.replace('#', ''), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    }

    criarParticulas();
    desenhar();
}
