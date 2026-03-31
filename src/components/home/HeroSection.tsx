"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
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

const heroFillBaseClass =
  "fill-transparent [fill-opacity:1] [will-change:fill] [stroke-width:1] [stroke-dasharray:2000] [stroke-dashoffset:0]";

const heroLineBaseClass =
  "opacity-0 fill-none [stroke-width:1] [stroke-dasharray:2000] [stroke-dashoffset:0]";

const heroFillReadyClasses = [
  `${heroFillBaseClass} animate-[kv-fill_1s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:4.1s]`,
  `${heroFillBaseClass} animate-[kv-fill_1s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:4.15s]`,
  `${heroFillBaseClass} animate-[kv-fill_1s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:4.2s]`,
  `${heroFillBaseClass} animate-[kv-fill_1s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:4.25s]`,
  `${heroFillBaseClass} animate-[kv-fill_1s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:4.3s]`,
  `${heroFillBaseClass} animate-[kv-fill_1s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:4.35s]`,
  `${heroFillBaseClass} animate-[kv-fill_1s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:4.4s]`,
];

const heroLineReadyClasses = [
  `${heroLineBaseClass} [stroke:rgb(220_110_135)] animate-[kv-draw_6.7s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:0s]`,
  `${heroLineBaseClass} [stroke:rgb(237_149_122)] animate-[kv-draw_6.7s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:0s]`,
  `${heroLineBaseClass} [stroke:rgb(255_206_72)] animate-[kv-draw_6.7s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:0.55s]`,
  `${heroLineBaseClass} [stroke:rgb(150_218_139)] animate-[kv-draw_6.7s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:0.65s]`,
  `${heroLineBaseClass} [stroke:rgb(0_210_208)] animate-[kv-draw_6.7s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:0.55s]`,
  `${heroLineBaseClass} [stroke:rgb(0_182_229)] animate-[kv-draw_6.7s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:0.55s]`,
  `${heroLineBaseClass} [stroke:rgb(135_137_245)] animate-[kv-draw_6.7s_cubic-bezier(0.63,0,0.5,0.99)_forwards] [animation-delay:0.75s]`,
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copyVisible, setCopyVisible] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setCopyVisible(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const perlin2 = buildPerlin2D();
    const scene = new THREE.Scene();

    const HEADER_HEIGHT = 120;
    const canvasHeight = window.innerHeight - HEADER_HEIGHT;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / canvasHeight,
      1,
      10000,
    );

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, canvasHeight);
    renderer.setClearColor(0xffffff, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const lineParam1 = {
      lineNum: 150,
      lineLength: 300,
      lineInterval: 0.4,
      segmentNum: 200,
      amplitude: 20,
      opacity: 0.4,
      time: 4000,
    };
    const lineParam2 = {
      lineNum: 150,
      lineLength: 300,
      lineInterval: 0.2,
      segmentNum: 200,
      amplitude: 30,
      opacity: 0.1,
      time: 4000,
    };

    const lineParam = {
      lineNum: lineParam1.lineNum,
      lineLength: lineParam1.lineLength,
      lineInterval: 3,
      segmentNum: lineParam1.segmentNum,
      amplitude: 0,
      opacity: 0,
      time: lineParam1.time,
    };

    const cameraVars1 = { x: 100, y: 14, z: 0 };
    const cameraVars2 = { x: 0, y: 0, z: 150 };
    const cameraVars = { x: 200, y: 50, z: 0 };
    const lineArr: THREE.Line[] = [];
    for (let i = 0; i < lineParam1.lineNum; i++) {
      const points: THREE.Vector3[] = [];
      for (let t = 0; t <= lineParam1.segmentNum; t++) {
        const x =
          (lineParam1.lineLength / lineParam1.segmentNum) * t -
          lineParam1.lineLength / 2;
        const z = 0.3 * i - 0.3 * (lineParam1.lineNum / 2);
        points.push(new THREE.Vector3(x, 0, z));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        transparent: true,
        color: 0,
        opacity: 0,
      });
      const line = new THREE.Line(geo, mat);
      lineArr[i] = line;
      scene.add(line);
    }

    let rafId = 0;

    function render() {
      rafId = requestAnimationFrame(render);
      camera.position.set(cameraVars.x, cameraVars.y, cameraVars.z);
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

    const morphTo = (n: number) => {
      const lp = n === 1 ? lineParam1 : lineParam2;
      const cv = n === 1 ? cameraVars1 : cameraVars2;
      gsap.to(lineParam, {
        lineLength: lp.lineLength,
        lineInterval: lp.lineInterval,
        amplitude: lp.amplitude,
        opacity: lp.opacity,
        duration: 3,
        ease: "power3.out",
      });
      gsap.to(cameraVars, {
        x: cv.x,
        y: cv.y,
        z: cv.z,
        duration: 3,
        ease: "power3.out",
      });
    };

    const transition = (n: number) => {
      if (n === 2) {
        gsap.to(lineParam, {
          lineInterval: 3,
          lineLength: 500,
          amplitude: 0,
          opacity: 0,
          duration: 1,
          ease: "power3.in",
          onComplete: () => morphTo(2),
        });
        gsap.to(cameraVars, {
          x: 0,
          y: 0,
          z: 130,
          duration: 1,
          ease: "power3.in",
        });
      } else {
        gsap.to(lineParam, {
          lineInterval: 3,
          amplitude: 0,
          opacity: 0,
          duration: 1,
          ease: "power3.in",
          onComplete: () => morphTo(1),
        });
        gsap.to(cameraVars, {
          x: 200,
          y: 50,
          z: 0,
          duration: 1,
          ease: "power3.in",
        });
      }
    };

    gsap.to(lineParam, {
      lineInterval: lineParam1.lineInterval,
      amplitude: lineParam1.amplitude,
      opacity: lineParam1.opacity,
      duration: 3,
      ease: "power3.out",
    });
    gsap.to(cameraVars, {
      x: cameraVars1.x,
      y: cameraVars1.y,
      z: cameraVars1.z,
      duration: 3,
      ease: "power3.out",
    });

    let currentState = 1;
    let startupComplete = false;
    const startupTimer = setTimeout(() => {
      startupComplete = true;
    }, 3500);

    const kvSection = document.getElementById("kv");
    const onScroll = () => {
      if (!startupComplete) return;
      const heroHeight = kvSection?.offsetHeight ?? window.innerHeight;
      const newState = window.scrollY > heroHeight * 0.8 ? 2 : 1;
      if (newState !== currentState) {
        currentState = newState;
        transition(newState);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      const h = window.innerHeight - HEADER_HEIGHT;
      camera.aspect = window.innerWidth / h;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(startupTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      gsap.killTweensOf(lineParam);
      gsap.killTweensOf(cameraVars);
      lineArr.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.LineBasicMaterial).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div className="fixed top-[120px] left-0 z-0 h-[calc(100dvh-120px)] w-full">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>

      <section
        id="kv"
        className="relative z-0 mt-[120px] h-[calc(100dvh-120px)] w-full"
      >
        <div className="relative h-full w-full">
          <h1
            className={`absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-300 ${copyVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative mx-auto w-[clamp(280px,40.2778vw,580px)] translate-x-[2%]">
              <svg
                className="relative z-[1] h-auto w-full"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 476.7 74.5"
                aria-label="共想と、共創。"
              >
                <g id="kv-copy-item-01" transform="translate(24019.828 9878.5)">
                  <path
                    id="kv-copy-item-01-1"
                    className={
                      copyVisible ? heroFillReadyClasses[0] : heroFillBaseClass
                    }
                    d="M-24001.1-9868.8c0.1-2.8-0.1-5.5-0.5-8.2h9.6c-0.4,2.7-0.5,5.4-0.4,8.1v5.3h17.8v-5.1c0.1-2.7,0-5.5-0.4-8.2h9.6c-0.4,2.7-0.6,5.5-0.5,8.2v5.1h6.5c3,0,5.9-0.1,8.9-0.5v9.4c-2.9-0.3-5.9-0.4-8.9-0.4h-6.5v16.6h8.1c3.4,0,6.8-0.1,10.2-0.5v9.5c-3.4-0.4-6.7-0.5-10.1-0.5h-51.1c-3.4,0-6.8,0.1-10.1,0.5v-9.5c3.4,0.4,6.7,0.5,10.1,0.5h7.7v-16.6h-5.8c-2.9-0.1-5.8,0.1-8.7,0.4v-9.4c2.9,0.4,5.8,0.5,8.7,0.5h5.8V-9868.8z M-23989.3-9823.7c-3.5,4.4-7.5,8.3-12.1,11.5c-3.6,2.7-7.4,4.9-11.5,6.7c-1.7-2.7-3.7-5.1-6-7.3c4.6-1.7,8.9-3.9,12.9-6.7c3.6-2.3,6.7-5.4,9.2-8.9L-23989.3-9823.7z M-23974.6-9838.5v-16.6h-17.8v16.6L-23974.6-9838.5z M-23970.4-9828.5c6.3,7.3,11.8,11,23,15.5c-2.2,2.3-4.2,4.9-5.8,7.7c-9.4-4.3-17.7-10.5-24.5-18.3L-23970.4-9828.5z"
                  />
                  <path
                    id="kv-copy-item-01-2"
                    className={
                      copyVisible ? heroFillReadyClasses[1] : heroFillBaseClass
                    }
                    d="M-23909.7-9861.1c3.4,5.3,6.2,8.1,11.4,10.9c-1.7,2.3-3,4.9-4,7.6c-3.6-2.8-6.7-6.2-9.2-10.1c0.2,3.5,0.3,6.5,0.3,8.5v4.4c-0.1,2.3,0.1,4.6,0.4,6.9h-8.9c0.3-2.3,0.4-4.5,0.4-6.8v-4.3c0-0.1,0.1-1.2,0.1-3c0.1-0.6,0.1-1.2,0.1-1.7c0-1,0-1,0.2-3.5c-2.9,5.8-6.8,11-11.5,15.4c-1.3-2.7-2.9-5.1-4.8-7.4c5.9-4.3,10.6-10,13.7-16.7h-4.1c-2.4,0-4.8,0.1-7.2,0.3v-8.4c2.4,0.3,4.9,0.4,7.3,0.3h6.2v-3.1c0-2-0.1-4-0.4-6h8.9c-0.3,2.1-0.5,4.2-0.4,6.3v2.8h4.8c2.1,0,4.3-0.1,6.4-0.3v8.4c-2.1-0.2-4.2-0.3-6.3-0.3L-23909.7-9861.1z M-23934-9813.4c4.7-6.2,6.2-9.5,8.3-17.8l7.5,3.3c-2.6,9.6-3.5,11.5-8.6,19.7L-23934-9813.4z M-23905.8-9817.4c0,1.5,0.4,2.1,1.6,2.4c1.7,0.4,3.4,0.6,5.1,0.5c8.9,0,11.3-0.2,12.4-1.3c0.8-0.9,1.2-3.3,1.3-7.7c2.7,1.3,5.5,2,8.5,2.3c-1.2,13.8-2.3,14.6-19.5,14.6c-7.4,0-10.4-0.2-12.8-0.8c-4-1.1-5.2-2.6-5.2-7.1v-9.2c0.1-2.5-0.1-5-0.4-7.5h9.4c-0.4,2.5-0.5,5-0.4,7.5L-23905.8-9817.4z M-23897.8-9834.7c0.2-2.3,0.2-4,0.2-6.7v-27c0-2.4-0.1-4.9-0.3-7.3c2.5,0.3,5.1,0.4,7.7,0.3h17.2c2.5,0,5.1-0.1,7.6-0.3c-0.3,2.4-0.4,4.9-0.3,7.3v27c0,2.6,0.1,5.1,0.3,7.7c-0.1,0-2.5-0.1-7.2-0.2h-18c-1.8,0-2.6,0-5.2,0.1c3.2,3.1,6.1,6.4,8.8,9.9l-6.7,5.1c-2.7-4.5-5.9-8.6-9.7-12.2L-23897.8-9834.7z M-23889.5-9863.6h15.5v-4.6h-15.5V-9863.6z M-23889.5-9852.4h15.5v-4.5h-15.5V-9852.4z M-23889.5-9841h15.5v-4.8h-15.5V-9841z M-23868.8-9808.9c-3.9-8.5-6.5-13-11.1-19.1l7.5-3.7c4.4,5.6,8.2,11.7,11.4,18L-23868.8-9808.9z"
                  />
                </g>
                <path
                  id="kv-copy-item-02"
                  className={
                    copyVisible ? heroFillReadyClasses[2] : heroFillBaseClass
                  }
                  d="M186.2,28c-1.1-3.6-1.4-5.8-2.4-16c-0.2-3-0.6-5.9-1.5-8.7c5,0.1,8.2,0.3,10.4,0.9c1.2,0.3,1.8,0.9,1.8,1.8c0,0.5-0.1,0.9-0.2,1.4c-0.6,1.8-0.8,3.7-0.8,5.6c0.1,4.5,0.6,9.1,1.7,13.5c0.5,1.6,1,2.1,1.9,2.1c2,0,9.2-3.8,13.2-6.8c1.1-0.8,1.2-0.9,1.6-0.9c0.7,0,1.5,0.6,2.7,2.1c2.1,2.8,3.7,5.8,3.7,7c0,0.9-0.6,1.5-2,1.9c-6.6,2-13,4.5-19.2,7.4c-10,4.9-14.6,9.5-14.6,14.6c0,5,4.2,7.1,14.8,7.1c6.5-0.1,12.9-0.7,19.3-1.8c0.4-0.1,0.7-0.1,1.1-0.2c0.6,0,1.2,0.4,1.4,1c0.5,2.6,0.7,5.2,0.8,7.8c0.2,0.9-0.4,1.7-1.3,1.9c0,0-0.1,0-0.1,0c-1.8,0.4-11.8,1-18,1c-10.5,0-17.5-1.4-21.9-4.4c-3.7-2.5-5.7-6.6-5.7-11.5c0-3.7,1.1-7.4,3.3-10.4c2.9-4.3,6-7,12.9-11.1C187.7,31.9,186.6,30,186.2,28z"
                />
                <path
                  id="kv-copy-item-03"
                  className={
                    copyVisible ? heroFillReadyClasses[3] : heroFillBaseClass
                  }
                  d="M240.4,52.2c1.5-1.3,1.9-1.6,2.5-1.6c1.1,0,6,3.6,9.6,7.1c4.1,3.8,8.7,9.3,8.7,10.4c0,0.7-0.2,0.9-2.5,3c-3.1,2.9-3.8,3.4-4.4,3.4c-0.5,0-1-0.3-1.4-1.2c-2.9-5.1-9.5-11.8-15.3-15.6c-0.7-0.5-1-0.8-1-1.3C236.6,55.8,236.8,55.6,240.4,52.2z"
                />
                <g id="kv-copy-item-04" transform="translate(24019.828 9878.5)">
                  <path
                    id="kv-copy-item-04-1"
                    className={
                      copyVisible ? heroFillReadyClasses[4] : heroFillBaseClass
                    }
                    d="M-23722-9868.8c0.1-2.8-0.1-5.5-0.5-8.2h9.6c-0.4,2.7-0.5,5.4-0.4,8.1v5.3h17.8v-5.1c0.1-2.7,0-5.5-0.4-8.2h9.6c-0.4,2.7-0.6,5.5-0.5,8.2v5.1h6.5c3,0,5.9-0.1,8.9-0.5v9.4c-2.9-0.3-5.9-0.4-8.9-0.4h-6.5v16.6h8.1c3.4,0,6.8-0.1,10.2-0.5v9.5c-3.4-0.4-6.7-0.5-10.1-0.5h-51.1c-3.4,0-6.8,0.1-10.1,0.5v-9.5c3.4,0.4,6.7,0.5,10.1,0.5h7.7v-16.6h-5.8c-2.9-0.1-5.8,0.1-8.7,0.4v-9.4c2.9,0.4,5.8,0.5,8.7,0.5h5.8V-9868.8z M-23710.2-9823.7c-3.5,4.4-7.5,8.3-12.1,11.5c-3.6,2.7-7.4,4.9-11.5,6.7c-1.7-2.7-3.7-5.1-6-7.3c4.6-1.7,8.9-3.9,12.9-6.7c3.6-2.3,6.7-5.4,9.2-8.9L-23710.2-9823.7z M-23695.5-9838.5v-16.6h-17.8v16.6L-23695.5-9838.5z M-23691.3-9828.5c6.3,7.3,11.8,11,23,15.5c-2.2,2.3-4.2,4.9-5.8,7.7c-9.4-4.3-17.7-10.5-24.5-18.3L-23691.3-9828.5z"
                  />
                  <path
                    id="kv-copy-item-04-2"
                    className={
                      copyVisible ? heroFillReadyClasses[5] : heroFillBaseClass
                    }
                    d="M-23643-9822.1v-2.3c-1.3,6.2-3.6,12.1-6.9,17.5c-1.9-2.6-4-4.9-6.4-7c5.5-8.3,7.4-17.3,7.4-34.4c0-2.7-0.1-4.7-0.2-6.7c-0.4,0.3-0.9,0.6-1.4,0.9c-1.5-2.7-3.4-5.1-5.7-7.2c4.8-2.5,9.2-5.7,13.2-9.4c2.5-2.1,4.6-4.6,6.5-7.2h8.6c4.4,5,9.1,8.4,17.3,12.3c-1.7,2.4-3.1,5-4.1,7.7c-3-1.7-4.2-2.5-6.4-3.9v3.6c-1.5-0.2-3-0.3-4.5-0.2h-11c-1.5,0-3.1,0.1-4.6,0.2v-2.8c-3.3,2.7-5.5,4.4-6.7,5.3c2.3,0.2,3.8,0.2,6.5,0.2h20c2.8,0,4-0.1,6.2-0.2c-0.2,1.6-0.2,3.5-0.2,5.9v13.1c0,2,0.1,4,0.2,5.9c-2.3-0.2-3.2-0.2-5.3-0.2h-21.2c-0.2,1.5-0.2,2.2-0.4,3.1c1.3,0.1,2,0.1,4.1,0.1h18.4c1.8,0,3.6-0.1,5.3-0.2c-0.2,1.9-0.3,3.8-0.3,5.7v9.4c0,2.1,0.1,4.2,0.3,6.3h-8.2v-2.4h-12.6v3.5h-8.1c0.3-2.1,0.4-4.2,0.3-6.3L-23643-9822.1z M-23641-9840.3c-0.1,1.5-0.2,1.7-0.3,3.2h17.7v-3.2H-23641z M-23623.6-9846.1v-3.2h-17.2v3.2L-23623.6-9846.1z M-23625.8-9864.3h1.1c-2.5-1.9-4.8-4.1-6.9-6.5c-1.7,2.3-3.7,4.5-5.8,6.5H-23625.8L-23625.8-9864.3z M-23635.1-9815.3h12.4v-6.2h-12.4V-9815.3z M-23600.6-9872.2c-0.4,2.7-0.5,5.5-0.4,8.2v31.5c-0.1,2.8,0,5.6,0.3,8.4h-8.9c0.3-2.8,0.4-5.6,0.3-8.4v-31.3c0.1-2.8-0.1-5.6-0.4-8.4L-23600.6-9872.2z M-23584.5-9877.6c-0.4,3.2-0.6,6.4-0.5,9.5v52.4c0,7.4-2.1,9-11.8,9c-1.7,0-2,0-7.2-0.2c-0.3-2.9-1-5.7-2.1-8.4c3.1,0.5,6.2,0.8,9.3,0.8c2.9,0,3.6-0.5,3.6-2.5v-50.9c0.1-3.3-0.1-6.5-0.5-9.8L-23584.5-9877.6z"
                  />
                </g>
                <path
                  id="kv-copy-item-05"
                  className={
                    copyVisible ? heroFillReadyClasses[6] : heroFillBaseClass
                  }
                  d="M476.7,60.4c0,7.7-6.2,13.9-13.9,13.9s-13.9-6.2-13.9-13.9c0-7.7,6.2-13.9,13.9-13.9C470.5,46.6,476.7,52.8,476.7,60.4z M455.4,60.4c0,4.1,3.3,7.5,7.5,7.5s7.5-3.3,7.5-7.5S467,53,462.8,53c0,0,0,0,0,0C458.7,53,455.4,56.3,455.4,60.4L455.4,60.4z"
                />

                <g id="kv-copy-line-01" transform="translate(24019.828 9878.5)">
                  <path
                    id="kv-copy-line-01-1"
                    className={
                      copyVisible ? heroLineReadyClasses[0] : heroLineBaseClass
                    }
                    d="M-24001.1-9868.8c0.1-2.8-0.1-5.5-0.5-8.2h9.6c-0.4,2.7-0.5,5.4-0.4,8.1v5.3h17.8v-5.1c0.1-2.7,0-5.5-0.4-8.2h9.6c-0.4,2.7-0.6,5.5-0.5,8.2v5.1h6.5c3,0,5.9-0.1,8.9-0.5v9.4c-2.9-0.3-5.9-0.4-8.9-0.4h-6.5v16.6h8.1c3.4,0,6.8-0.1,10.2-0.5v9.5c-3.4-0.4-6.7-0.5-10.1-0.5h-51.1c-3.4,0-6.8,0.1-10.1,0.5v-9.5c3.4,0.4,6.7,0.5,10.1,0.5h7.7v-16.6h-5.8c-2.9-0.1-5.8,0.1-8.7,0.4v-9.4c2.9,0.4,5.8,0.5,8.7,0.5h5.8V-9868.8z M-23989.3-9823.7c-3.5,4.4-7.5,8.3-12.1,11.5c-3.6,2.7-7.4,4.9-11.5,6.7c-1.7-2.7-3.7-5.1-6-7.3c4.6-1.7,8.9-3.9,12.9-6.7c3.6-2.3,6.7-5.4,9.2-8.9L-23989.3-9823.7z M-23974.6-9838.5v-16.6h-17.8v16.6L-23974.6-9838.5z M-23970.4-9828.5c6.3,7.3,11.8,11,23,15.5c-2.2,2.3-4.2,4.9-5.8,7.7c-9.4-4.3-17.7-10.5-24.5-18.3L-23970.4-9828.5z"
                  />
                  <path
                    id="kv-copy-line-01-2"
                    className={
                      copyVisible ? heroLineReadyClasses[1] : heroLineBaseClass
                    }
                    d="M-23909.7-9861.1c3.4,5.3,6.2,8.1,11.4,10.9c-1.7,2.3-3,4.9-4,7.6c-3.6-2.8-6.7-6.2-9.2-10.1c0.2,3.5,0.3,6.5,0.3,8.5v4.4c-0.1,2.3,0.1,4.6,0.4,6.9h-8.9c0.3-2.3,0.4-4.5,0.4-6.8v-4.3c0-0.1,0.1-1.2,0.1-3c0.1-0.6,0.1-1.2,0.1-1.7c0-1,0-1,0.2-3.5c-2.9,5.8-6.8,11-11.5,15.4c-1.3-2.7-2.9-5.1-4.8-7.4c5.9-4.3,10.6-10,13.7-16.7h-4.1c-2.4,0-4.8,0.1-7.2,0.3v-8.4c2.4,0.3,4.9,0.4,7.3,0.3h6.2v-3.1c0-2-0.1-4-0.4-6h8.9c-0.3,2.1-0.5,4.2-0.4,6.3v2.8h4.8c2.1,0,4.3-0.1,6.4-0.3v8.4c-2.1-0.2-4.2-0.3-6.3-0.3L-23909.7-9861.1z M-23934-9813.4c4.7-6.2,6.2-9.5,8.3-17.8l7.5,3.3c-2.6,9.6-3.5,11.5-8.6,19.7L-23934-9813.4z M-23905.8-9817.4c0,1.5,0.4,2.1,1.6,2.4c1.7,0.4,3.4,0.6,5.1,0.5c8.9,0,11.3-0.2,12.4-1.3c0.8-0.9,1.2-3.3,1.3-7.7c2.7,1.3,5.5,2,8.5,2.3c-1.2,13.8-2.3,14.6-19.5,14.6c-7.4,0-10.4-0.2-12.8-0.8c-4-1.1-5.2-2.6-5.2-7.1v-9.2c0.1-2.5-0.1-5-0.4-7.5h9.4c-0.4,2.5-0.5,5-0.4,7.5L-23905.8-9817.4z M-23897.8-9834.7c0.2-2.3,0.2-4,0.2-6.7v-27c0-2.4-0.1-4.9-0.3-7.3c2.5,0.3,5.1,0.4,7.7,0.3h17.2c2.5,0,5.1-0.1,7.6-0.3c-0.3,2.4-0.4,4.9-0.3,7.3v27c0,2.6,0.1,5.1,0.3,7.7c-0.1,0-2.5-0.1-7.2-0.2h-18c-1.8,0-2.6,0-5.2,0.1c3.2,3.1,6.1,6.4,8.8,9.9l-6.7,5.1c-2.7-4.5-5.9-8.6-9.7-12.2L-23897.8-9834.7z M-23889.5-9863.6h15.5v-4.6h-15.5V-9863.6z M-23889.5-9852.4h15.5v-4.5h-15.5V-9852.4z M-23889.5-9841h15.5v-4.8h-15.5V-9841z M-23868.8-9808.9c-3.9-8.5-6.5-13-11.1-19.1l7.5-3.7c4.4,5.6,8.2,11.7,11.4,18L-23868.8-9808.9z"
                  />
                </g>
                <path
                  id="kv-copy-line-02"
                  className={
                    copyVisible ? heroLineReadyClasses[2] : heroLineBaseClass
                  }
                  d="M186.2,28c-1.1-3.6-1.4-5.8-2.4-16c-0.2-3-0.6-5.9-1.5-8.7c5,0.1,8.2,0.3,10.4,0.9c1.2,0.3,1.8,0.9,1.8,1.8c0,0.5-0.1,0.9-0.2,1.4c-0.6,1.8-0.8,3.7-0.8,5.6c0.1,4.5,0.6,9.1,1.7,13.5c0.5,1.6,1,2.1,1.9,2.1c2,0,9.2-3.8,13.2-6.8c1.1-0.8,1.2-0.9,1.6-0.9c0.7,0,1.5,0.6,2.7,2.1c2.1,2.8,3.7,5.8,3.7,7c0,0.9-0.6,1.5-2,1.9c-6.6,2-13,4.5-19.2,7.4c-10,4.9-14.6,9.5-14.6,14.6c0,5,4.2,7.1,14.8,7.1c6.5-0.1,12.9-0.7,19.3-1.8c0.4-0.1,0.7-0.1,1.1-0.2c0.6,0,1.2,0.4,1.4,1c0.5,2.6,0.7,5.2,0.8,7.8c0.2,0.9-0.4,1.7-1.3,1.9c0,0-0.1,0-0.1,0c-1.8,0.4-11.8,1-18,1c-10.5,0-17.5-1.4-21.9-4.4c-3.7-2.5-5.7-6.6-5.7-11.5c0-3.7,1.1-7.4,3.3-10.4c2.9-4.3,6-7,12.9-11.1C187.7,31.9,186.6,30,186.2,28z"
                />
                <path
                  id="kv-copy-line-03"
                  className={
                    copyVisible ? heroLineReadyClasses[3] : heroLineBaseClass
                  }
                  d="M240.4,52.2c1.5-1.3,1.9-1.6,2.5-1.6c1.1,0,6,3.6,9.6,7.1c4.1,3.8,8.7,9.3,8.7,10.4c0,0.7-0.2,0.9-2.5,3c-3.1,2.9-3.8,3.4-4.4,3.4c-0.5,0-1-0.3-1.4-1.2c-2.9-5.1-9.5-11.8-15.3-15.6c-0.7-0.5-1-0.8-1-1.3C236.6,55.8,236.8,55.6,240.4,52.2z"
                />
                <g id="kv-copy-line-04" transform="translate(24019.828 9878.5)">
                  <path
                    id="kv-copy-line-04-1"
                    className={
                      copyVisible ? heroLineReadyClasses[4] : heroLineBaseClass
                    }
                    d="M-23722-9868.8c0.1-2.8-0.1-5.5-0.5-8.2h9.6c-0.4,2.7-0.5,5.4-0.4,8.1v5.3h17.8v-5.1c0.1-2.7,0-5.5-0.4-8.2h9.6c-0.4,2.7-0.6,5.5-0.5,8.2v5.1h6.5c3,0,5.9-0.1,8.9-0.5v9.4c-2.9-0.3-5.9-0.4-8.9-0.4h-6.5v16.6h8.1c3.4,0,6.8-0.1,10.2-0.5v9.5c-3.4-0.4-6.7-0.5-10.1-0.5h-51.1c-3.4,0-6.8,0.1-10.1,0.5v-9.5c3.4,0.4,6.7,0.5,10.1,0.5h7.7v-16.6h-5.8c-2.9-0.1-5.8,0.1-8.7,0.4v-9.4c2.9,0.4,5.8,0.5,8.7,0.5h5.8V-9868.8z M-23710.2-9823.7c-3.5,4.4-7.5,8.3-12.1,11.5c-3.6,2.7-7.4,4.9-11.5,6.7c-1.7-2.7-3.7-5.1-6-7.3c4.6-1.7,8.9-3.9,12.9-6.7c3.6-2.3,6.7-5.4,9.2-8.9L-23710.2-9823.7z M-23695.5-9838.5v-16.6h-17.8v16.6L-23695.5-9838.5z M-23691.3-9828.5c6.3,7.3,11.8,11,23,15.5c-2.2,2.3-4.2,4.9-5.8,7.7c-9.4-4.3-17.7-10.5-24.5-18.3L-23691.3-9828.5z"
                  />
                  <path
                    id="kv-copy-line-04-2"
                    className={
                      copyVisible ? heroLineReadyClasses[5] : heroLineBaseClass
                    }
                    d="M-23643-9822.1v-2.3c-1.3,6.2-3.6,12.1-6.9,17.5c-1.9-2.6-4-4.9-6.4-7c5.5-8.3,7.4-17.3,7.4-34.4c0-2.7-0.1-4.7-0.2-6.7c-0.4,0.3-0.9,0.6-1.4,0.9c-1.5-2.7-3.4-5.1-5.7-7.2c4.8-2.5,9.2-5.7,13.2-9.4c2.5-2.1,4.6-4.6,6.5-7.2h8.6c4.4,5,9.1,8.4,17.3,12.3c-1.7,2.4-3.1,5-4.1,7.7c-3-1.7-4.2-2.5-6.4-3.9v3.6c-1.5-0.2-3-0.3-4.5-0.2h-11c-1.5,0-3.1,0.1-4.6,0.2v-2.8c-3.3,2.7-5.5,4.4-6.7,5.3c2.3,0.2,3.8,0.2,6.5,0.2h20c2.8,0,4-0.1,6.2-0.2c-0.2,1.6-0.2,3.5-0.2,5.9v13.1c0,2,0.1,4,0.2,5.9c-2.3-0.2-3.2-0.2-5.3-0.2h-21.2c-0.2,1.5-0.2,2.2-0.4,3.1c1.3,0.1,2,0.1,4.1,0.1h18.4c1.8,0,3.6-0.1,5.3-0.2c-0.2,1.9-0.3,3.8-0.3,5.7v9.4c0,2.1,0.1,4.2,0.3,6.3h-8.2v-2.4h-12.6v3.5h-8.1c0.3-2.1,0.4-4.2,0.3-6.3L-23643-9822.1z M-23641-9840.3c-0.1,1.5-0.2,1.7-0.3,3.2h17.7v-3.2H-23641z M-23623.6-9846.1v-3.2h-17.2v3.2L-23623.6-9846.1z M-23625.8-9864.3h1.1c-2.5-1.9-4.8-4.1-6.9-6.5c-1.7,2.3-3.7,4.5-5.8,6.5H-23625.8L-23625.8-9864.3z M-23635.1-9815.3h12.4v-6.2h-12.4V-9815.3z M-23600.6-9872.2c-0.4,2.7-0.5,5.5-0.4,8.2v31.5c-0.1,2.8,0,5.6,0.3,8.4h-8.9c0.3-2.8,0.4-5.6,0.3-8.4v-31.3c0.1-2.8-0.1-5.6-0.4-8.4L-23600.6-9872.2z M-23584.5-9877.6c-0.4,3.2-0.6,6.4-0.5,9.5v52.4c0,7.4-2.1,9-11.8,9c-1.7,0-2,0-7.2-0.2c-0.3-2.9-1-5.7-2.1-8.4c3.1,0.5,6.2,0.8,9.3,0.8c2.9,0,3.6-0.5,3.6-2.5v-50.9c0.1-3.3-0.1-6.5-0.5-9.8L-23584.5-9877.6z"
                  />
                </g>
                <path
                  id="kv-copy-line-05"
                  className={
                    copyVisible ? heroLineReadyClasses[6] : heroLineBaseClass
                  }
                  d="M476.7,60.4c0,7.7-6.2,13.9-13.9,13.9s-13.9-6.2-13.9-13.9c0-7.7,6.2-13.9,13.9-13.9C470.5,46.6,476.7,52.8,476.7,60.4z M455.4,60.4c0,4.1,3.3,7.5,7.5,7.5s7.5-3.3,7.5-7.5S467,53,462.8,53c0,0,0,0,0,0C458.7,53,455.4,56.3,455.4,60.4L455.4,60.4z"
                />
              </svg>
            </div>
          </h1>
        </div>
      </section>
    </>
  );
}
