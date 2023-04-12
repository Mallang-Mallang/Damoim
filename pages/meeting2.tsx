import Map from '@/components/common/Map';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const meeting2 = () => {
  return (
    <div className="flex-col justify-center items-center h-full">
      <div className="w-full h-full">
        <Map latitude={37.403331351471266} longitude={126.93067769029214} />
      </div>
    </div>
  );
};

export default meeting2;
