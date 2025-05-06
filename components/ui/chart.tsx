"use client"

import * as React from "react"
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

import { cn } from "@/lib/utils"

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: any
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-full h-full", className)} {...props}>
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface BarChartProps {
  data: any[]
  xAxis: { dataKey: string; scaleType?: string; tickRotation?: number }[]
  yAxis: { dataKey: string; scaleType?: string }[]
  series: { dataKey: string; label: string; valueFormatter?: (value: any) => string; color?: string }[]
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(({ data, xAxis, yAxis, series }, ref) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={xAxis[0]?.dataKey} angle={xAxis[0]?.tickRotation || 0} textAnchor="end" height={60} />
        <YAxis />
        <Tooltip
          formatter={(value, name) => {
            const serie = series.find((s) => s.dataKey === name)
            if (serie?.valueFormatter) {
              return [serie.valueFormatter(value), serie.label]
            }
            return [value, name]
          }}
        />
        {series.map((s) => (
          <Bar key={s.dataKey} dataKey={s.dataKey} name={s.label} fill={s.color || "#0A2463"} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  )
})
BarChart.displayName = "BarChart"

// Estos componentes son simplificados ya que Recharts maneja los tooltips de manera diferente
const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const ChartTooltipContent = () => {
  return null
}

export { BarChart, ChartContainer, ChartTooltip, ChartTooltipContent }
