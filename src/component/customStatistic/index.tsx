import React from 'react';  
import CountUp from 'react-countup';  
import { Col, Row } from 'antd';  
  
// 不知道为啥ant官网提供的代码，运行会参数报错，可能是版本问题，坑爹啊！！！
// 为了让数据动起来只能单独用 CountUp 在封装一遍了
const CustomStatistic: React.FC<{value: number }> = ({ value }) => (  
  <div>  
    <CountUp start={0} end={value} duration={2.5} separator="," />  
  </div>  
);  


// 使用方法
const Notice: React.FC = () => (  
  <Row gutter={16}>  
    <Col span={12}>  
      <CustomStatistic  value={112893} />  
    </Col>  
  </Row>  
);  
  
export default CustomStatistic;