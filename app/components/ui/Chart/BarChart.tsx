"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// 기본 바 색상 (보라색 예시, hex)
const BASE_COLOR = "#2E2E2E";

function hexToRgb(hex: string) {
  // hex 색상코드를 r, g, b로 분리
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!res) return [99, 68, 236]; // fallback to 보라색
  return [parseInt(res[1], 16), parseInt(res[2], 16), parseInt(res[3], 16)];
}

type BarChartData = {
  label: string;
  value: number;
}[];

const getMax = (data: BarChartData) => Math.max(...data.map((d) => d.value));
const getSum = (data: BarChartData) =>
  data.reduce((sum, d) => sum + d.value, 0);

export function BarChart({
  data,
  title = "",
  maxWidth = 500,
  baseColor = BASE_COLOR,
}: {
  data: BarChartData;
  title?: string;
  maxWidth?: number;
  baseColor?: string;
}) {
  const max = getMax(data);
  const sum = getSum(data);
  const [visible, setVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [r, g, b] = hexToRgb(baseColor);

  return (
    <div ref={chartRef} className="w-full max-w-3xl mx-auto">
      <h4 className="text-center mb-10 font-Sans tracking-tight"><span className="text-coral pr-3">Q.</span>{title}</h4>
      <div className="flex flex-col gap-2">
        {data.map((d, idx) => {
          const percent = sum ? (d.value / sum) * 100 : 0;
          const opacity = 0.8 + 1.5 * (percent / 100);
          return (
            <div key={d.label} className="flex items-center">
              <p className="w-20 lg:w-36 2xl:w-44 text-right pr-4 font-[450] text-sm">
                {d.label}
              </p>
              <div className="relative flex-1 h-8">
                <motion.div
                  className="rounded-lg h-full relative transition-all"
                  style={{
                    minWidth: 80,
                    maxWidth,
                    display: "flex",
                    alignItems: "center",
                    background: `rgba(${r},${g},${b},${opacity})`,
                  }}
                  initial={{ width: 0 }}
                  animate={{
                    width: visible ? `${(d.value / max) * 100}%` : 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: idx * 0.09,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <p className="absolute right-3 top-1/2 -translate-y-1/2 text-grey_scale_200 text-xs drop-shadow">
                    {d.value} ({percent.toFixed(1)}%)
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
