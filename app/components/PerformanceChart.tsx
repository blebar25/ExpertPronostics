'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface PerformanceChartProps {
  data: {
    investmentBalances: number[];
    profitBalances: number[];
    months: string[];
  };
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: data.months,
        datasets: [
          {
            label: 'Capital de mise',
            data: data.investmentBalances,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            tension: 0.3,
            fill: true
          },
          {
            label: 'Gains cumulés',
            data: data.profitBalances,
            borderColor: 'rgb(153, 102, 255)',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.dataset.label}: ${context.parsed.y}€`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `${value}€`
            }
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="w-full h-[400px]">
      <canvas ref={chartRef} style={{ placeSelf: 'center' }} />
    </div>
  );
};

export default PerformanceChart;