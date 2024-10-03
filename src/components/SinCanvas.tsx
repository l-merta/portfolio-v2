import React, { useEffect, useRef } from 'react';

const SinCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sin_canvas = canvasRef.current;
    const sin_canvas_parent = parentRef.current;

    if (!sin_canvas || !sin_canvas_parent) return;
    const sin_ctx = sin_canvas.getContext('2d');

    const wave = {
      y: sin_canvas.height + window.innerHeight * 1.05,/// 2,//
      length: 0.005,
      amplitude: 80,
      frequency: 0.015,
      lineWidth: 1,
      tilt: Math.PI / -4, // 30 degrees in radians
    };

    let increment = wave.frequency;

    const resizeCanvas = () => {
      const parentWidth = sin_canvas_parent.clientWidth;
      const parentHeight = sin_canvas_parent.clientHeight;
      if (parentWidth > 0 && parentHeight > 0) {
        sin_canvas.width = parentWidth * 1.5; //1.5
        sin_canvas.height = parentHeight * 2.8; //2.8
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (!sin_ctx) return;

      sin_ctx.fillStyle = 'rgba(255,255,255,0.5)';
      sin_ctx.fillRect(0, 0, sin_canvas.width, sin_canvas.height);

      sin_ctx.beginPath();
      sin_ctx.moveTo(0, 0); // Start at the top-left corner
      sin_ctx.lineTo(0, wave.y + Math.sin(0 * wave.length + increment) * wave.amplitude);

      for (let i = 0; i < sin_canvas.width; i++) {
        sin_ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude);
      }

      sin_ctx.lineTo(sin_canvas.width, 0); // Finish at the top-right corner
      sin_ctx.closePath(); // Close the path to fill above the wave

      sin_ctx.fillStyle = 'black';
      sin_ctx.fill();

      sin_ctx.strokeStyle = 'black';
      sin_ctx.lineWidth = wave.lineWidth;
      sin_ctx.stroke();

      increment += wave.frequency;
    };

    // Initial resize and animate call
    resizeCanvas();
    animate();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={parentRef} className="sin_parent">
      <canvas ref={canvasRef} className="sin"></canvas>
    </div>
  );
};

export default SinCanvas;