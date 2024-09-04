import React from 'react';
import { PageProps } from '@/app/types/PageProps';

const Page = ({ params }:PageProps) => {
  return (
    <div className='text-7xl'>
        {params.id}
    </div>
  );
};

export default Page;
