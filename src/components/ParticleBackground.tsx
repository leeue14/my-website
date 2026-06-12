import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ParticleTheme {
  particle: string;
  line: string;
}

const THEMES: Record<"light" | "dark", ParticleTheme> = {
  light: {
    particle: "rgba(0, 0, 0, 0.18)",
    line: "rgba(0, 0, 0, 0.06)",
  },
  dark: {
    particle: "rgba(255, 255, 255, 0.22)",
    line: "rgba(255, 255, 255, 0.07)",
  },
};

function getParticleCount(width: number): number {
  if (width >= 1024) return 150;
  if (width >= 768) return 100;
  return 60;
}

function createParticles(width: number, height: number): Particle[] {
  const count = getParticleCount(width);
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    });
  }
  return particles;
}

interface Props {
  theme: "light" | "dark";
}

export default function ParticleBackground({ theme }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let connectDistance = 0;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      connectDistance = Math.min(width, height) * 0.18;
      particlesRef.current = createParticles(width, height);
    }

    function animate() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, width, height);

      const themeColors = THEMES[theme];
      const particles = particlesRef.current;

      // Update and bounce
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));
      }

      // Draw lines
      ctx!.strokeStyle = themeColors.line;
      ctx!.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDistance) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      ctx!.fillStyle = themeColors.particle;
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx!.fill();
      }

      animIdRef.current = requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(parent);

    resize();
    animIdRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animIdRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
