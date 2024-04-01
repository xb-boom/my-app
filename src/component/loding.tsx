import React from 'react';
import { Spin } from 'antd';
import { useMyContext } from '../utils/Mycontext'

const Loding: React.FC = () => {
  const { isLoading, setLoading } = useMyContext();  
  return (
    <>
      <Spin spinning={isLoading} fullscreen />
    </>
  );
};

export default Loding;
