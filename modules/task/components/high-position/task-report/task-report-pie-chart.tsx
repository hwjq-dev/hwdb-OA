'use client';

import {
  CircleCheckBig,
  CircleDotDashed,
  CircleEllipsis,
  ClockAlert,
  FileCheck,
  Warehouse,
} from 'lucide-react';
import * as React from 'react';
import { Label, Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';

const baseData = [
  { status: '执行中', value: 2, fill: '#309898', icon: CircleEllipsis },
  { status: '已完成', value: 1, fill: '#FF9F00', icon: CircleCheckBig },
  { status: '审批中', value: 1, fill: '#F4631E', icon: CircleDotDashed },
  { status: '已审批', value: 1, fill: '#CB0404', icon: FileCheck },
  { status: '已超时', value: 1, fill: '#273F4F', icon: ClockAlert },
];

const chartConfig = {
  执行中: {
    label: '执行中',
    color: '#309898',
  },
  已完成: {
    label: '已完成',
    color: '#FF9F00',
  },
  审批中: {
    label: '审批中',
    color: '#F4631E',
  },
  已审批: {
    label: '已审批',
    color: '#CB0404',
  },
  已超时: {
    label: '已超时',
    color: '#273F4F',
  },
} satisfies ChartConfig;

export const TaskReportPieChar = () => {
  const id = 'pie-interactive';
  const [activeStatus, setActiveStatus] = React.useState(baseData[0].status);

  const activeIndex = React.useMemo(
    () => baseData.findIndex((item) => item.status === activeStatus),
    [activeStatus],
  );
  const months = React.useMemo(() => baseData.map((item) => item.status), []);

  return (
    <Card
      data-chart={id}
      className="flex flex-col border-gray-200/60 shadow-[0px_0px_38px_-17px_#a6a6a6]"
    >
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <div className="flex items-center justify-between">
            <CardTitle>任务日报</CardTitle>
            <div className="flex items-center space-x-1">
              <Warehouse className="size-4 text-primary" /> <span>产品部门</span>
            </div>
          </div>
          <p className="text-sm font-light">{getFormatDatetime(new Date())}</p>
        </div>

        {/* <Select value={activeStatus} onValueChange={setActiveStatus}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="选择状态" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem key={key} value={key} className="rounded-lg [&_span]:flex">
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-xs"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select> */}
      </CardHeader>
      <CardContent className="flex flex-1 !px-0 pb-0">
        <ChartContainer id={id} config={chartConfig} className="w-3/5 h-72 max-w-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={baseData}
              dataKey="value"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {baseData[activeIndex].value.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          任务
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="status" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
        <div className="w-2/5 pl-10 pr-4">
          <div className="flex flex-col space-y-2.5">
            {baseData.map((x) => (
              <Button
                onClick={() => setActiveStatus(x.status)}
                size="sm"
                variant="secondary"
                key={x.status}
                className={cn(
                  'border-[#273F4F] text-[#273F4F] !rounded-sm',
                  { 'border-[#309898] text-[#309898]': x.status === '执行中' },
                  { 'border-[#FF9F00] text-[#FF9F00]': x.status === '已完成' },
                  { 'border-[#F4631E] text-[#F4631E]': x.status === '审批中' },
                  { 'border-[#CB0404] text-[#CB0404]': x.status === '已审批' },
                )}
              >
                <x.icon /> {x.status}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
