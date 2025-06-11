'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export const description = 'A radial chart with a custom shape';

const chartData = [{ browser: 'safari', visitors: 1260, fill: 'var(--color-safari)' }];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export const CircularChart = () => {
  return (
    <div>
      <ChartContainer config={chartConfig} className="size-36">
        <RadialBarChart data={chartData} endAngle={100} innerRadius={45} outerRadius={90}>
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[220, 64]}
          />
          <RadialBar dataKey="visitors" background />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-lg font-bold"
                      >
                        {chartData[0].visitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 16}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
};
