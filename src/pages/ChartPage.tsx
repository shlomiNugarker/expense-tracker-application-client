/* eslint-disable @typescript-eslint/no-explicit-any */
import { useOutletContext } from 'react-router-dom'
import { ContextProps } from './MainPage'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export const ChartPage = () => {
  const { expenses: data } = useOutletContext<ContextProps>()

  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<any>(null)

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const categories: { [key: string]: any } = {}
    data.forEach((item) => {
      categories[item.category] = (categories[item.category] || 0) + item.amount
    })

    const labels = Object.keys(categories)
    const amounts = Object.values(categories)

    const ctx = chartRef.current?.getContext('2d')
    if (!ctx) return
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total Expense',
            data: amounts,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data])

  return (
    <section className="chart-page">
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </section>
  )
}
