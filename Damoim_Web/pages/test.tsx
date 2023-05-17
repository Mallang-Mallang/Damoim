import Test from '@/components/test';
import React, { useState } from 'react';

function test() {
  const [keyWord, setKeyWord] = useState('대림대');
  return (
    <>
      <Test keyWord={keyWord} />
    </>
  );
}

export default test;
