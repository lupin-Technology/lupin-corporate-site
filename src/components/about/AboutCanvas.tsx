"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";

function buildPerlin2D() {
  const grad3 = [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [0, -1],
    [0, 1],
  ];
  const p = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  const perm = Array.from({ length: 512 }, (_, i) => p[i & 255]);
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a: number, b: number, t: number) => a + t * (b - a);
  const dot2 = (g: number[], x: number, y: number) => g[0] * x + g[1] * y;
  return (x: number, y: number): number => {
    const xi = Math.floor(x) & 255;
    const yi = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const aa = perm[perm[xi] + yi];
    const ab = perm[perm[xi] + yi + 1];
    const ba = perm[perm[xi + 1] + yi];
    const bb = perm[perm[xi + 1] + yi + 1];
    return lerp(
      lerp(dot2(grad3[aa % 12], xf, yf), dot2(grad3[ba % 12], xf - 1, yf), u),
      lerp(
        dot2(grad3[ab % 12], xf, yf - 1),
        dot2(grad3[bb % 12], xf - 1, yf - 1),
        u,
      ),
      v,
    );
  };
}

export function AboutCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const perlin2 = buildPerlin2D();
    const scene = new THREE.Scene();

    const w = window.innerWidth;
    const h = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.setClearColor(0xffffff, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 1));

    const lineParam = {
      lineNum: 150,
      lineLength: 300,
      lineInterval: 0.2,
      segmentNum: 200,
      amplitude: 30,
      opacity: 0.1,
      time: 4000,
    };
    const cameraPos = { x: 0, y: 0, z: 150 };

    const lineArr: THREE.Line[] = [];
    for (let i = 0; i < lineParam.lineNum; i++) {
      const points: THREE.Vector3[] = [];
      for (let t = 0; t <= lineParam.segmentNum; t++) {
        const x =
          (lineParam.lineLength / lineParam.segmentNum) * t -
          lineParam.lineLength / 2;
        const z = 0.3 * i - 0.3 * (lineParam.lineNum / 2);
        points.push(new THREE.Vector3(x, 0, z));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        transparent: true,
        color: 0,
        opacity: 0,
      });
      lineArr[i] = new THREE.Line(geo, mat);
      scene.add(lineArr[i]);
    }

    let rafId = 0;
    function render() {
      rafId = requestAnimationFrame(render);
      camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
      camera.lookAt(scene.position);
      const time = Date.now() / lineParam.time;
      for (let i = 0; i < lineParam.lineNum; i++) {
        const line = lineArr[i];
        const arr = line.geometry.attributes.position.array as Float32Array;
        for (let t = 0; t <= lineParam.segmentNum; t++) {
          const x =
            (lineParam.lineLength / lineParam.segmentNum) * t -
            lineParam.lineLength / 2;
          const r = t / (80 + i);
          const o = i / 50 + time;
          const y = lineParam.amplitude * perlin2(r, o);
          const d =
            i * lineParam.lineInterval -
            lineParam.lineNum * (lineParam.lineInterval / 2);
          arr[3 * t] = x;
          arr[3 * t + 1] = y;
          arr[3 * t + 2] = d;
        }
        const hue = Math.round((i / lineParam.lineNum) * 360) + 90;
        const lightness = Math.round((i / lineParam.lineNum) * 30) + 20;
        const mat = line.material as THREE.LineBasicMaterial;
        mat.color = new THREE.Color(`hsl(${hue}, 50%, ${lightness}%)`);
        mat.opacity = lineParam.opacity;
        line.geometry.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
    }
    render();

    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      lineArr.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.LineBasicMaterial).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute top-0 left-[-8vw] z-0 h-screen w-screen transition-opacity duration-[2000ms]">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-[68%]"
      />
    </div>
  );
}
