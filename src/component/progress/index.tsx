import React from 'react';
import { Flex, Progress } from 'antd';
import type {ProgressProps } from 'antd'


const ProgressBarShape: React.FC = () => (
    <Flex vertical gap="small" style={{ width: 200 }}>
        <Progress percent={77} size="small" status='normal'/>
        <Progress percent={26} size="small" status="active" />
        <Progress percent={85} size="small" status="exception" />
        <Progress percent={100} size="small" />
    </Flex>
);
const ProgressRotundity: React.FC = () => (
    <Flex align="center" wrap="wrap" gap={30}>
        <Progress type="dashboard" percent={36} size={180} gapDegree={130}/>
    </Flex>
);

const twoColors: ProgressProps['strokeColor'] = {
    '0%': '#108ee9',
    '100%': '#87d068',
  };

const ProgressYes: React.FC = () => (
    <Flex align="center" wrap="wrap" gap={30}>
         <Progress type="dashboard" percent={100} size={150}  strokeColor={twoColors}  />
    </Flex>
);



export {
    ProgressBarShape,
    ProgressRotundity,
    ProgressYes,
}