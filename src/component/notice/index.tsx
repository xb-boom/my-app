import React, { useEffect } from 'react';
import { Button, Empty } from 'antd';
import './index.scss'
// import axios from 'axios';
import {

} from '@ant-design/icons';
interface ChildCompenontProps {
}
const Notice: React.FC<ChildCompenontProps> = function () {

    useEffect(() => {

    }, [])

    return (
        <div className='notice-wrap'>
            <h5 className='title'>
                待办事项
            </h5>
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 60 }}
                description={
                    <span>
                         <a href="#API">暂无待办</a>
                    </span>
                }
            >
                <Button type="primary">创建新事项</Button>
            </Empty>

        </div>
    );

}

export default Notice