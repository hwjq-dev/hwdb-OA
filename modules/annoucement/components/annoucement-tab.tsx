'use client';

import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { AnnoucementCreateForm } from './annoucement-create-form';
import { AnnoucementList } from './annoucement-list';

export const AnnoucementTab = () => {
  const [value, setValue] = useState('tab-1');

  return (
    <Tabs value={value} onValueChange={(value) => setValue(value)}>
      <div className="w-full flex justify-center">
        <TabsList className="w-fit">
          <TabsTrigger
            value="tab-1"
            className="relative px-7 py-1.5 text-base font-medium data-[state=inactive]:text-primary"
          >
            全部
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="px-5 py-1.5 text-base font-medium data-[state=inactive]:text-primary"
          >
            发布
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        value="tab-1"
        className="h-[75dvh] overflow-y-auto pb-2 scrollbar scrollbar-none"
      >
        <AnnoucementList />
      </TabsContent>
      <TabsContent value="tab-2" className="h-[75dvh] flex flex-col border-none pt-4">
        <AnnoucementCreateForm />
      </TabsContent>
    </Tabs>
  );
};
