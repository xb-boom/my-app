import React, { ReactNode } from "react";
import CommonUtils from '../../component/common/index'
import UserData from '../../component/userData/index'
import Notice from '../../component/notice/index'
import AssetsCard from '../../component/assetCard/index'
import { ProgressBarShape, ProgressRotundity, ProgressYes } from '../../component/progress/index'
import { CaretUpOutlined } from '@ant-design/icons'

import './index.scss'
type CompenontProps = {
    templateTitle: string,
    templateTitleTwo: string,
    templateNumber: number,
    icon: ReactNode,
    templatPeercentage: ReactNode,
    templatProgress?: ReactNode,
    templatFn: (params: string) => void // 正确的函数类型定义 
};
const assetCardArray: Array<CompenontProps> = [
    {
        templateTitle: '资产',
        templateTitleTwo: '净资产',
        templateNumber: 50233131,
        icon: <CaretUpOutlined />,
        templatPeercentage: '16%',
        templatProgress: <ProgressYes />,
        templatFn: (params: string) => {
            alert(`这是${params}详情页`); // 在这里处理参数  
        }
    },
    {
        templateTitle: '总体收支情况',
        templateTitleTwo: '收入',
        templateNumber: 133131,
        icon: <CaretUpOutlined />,
        templatPeercentage: '16%',
        templatFn: (params: string) => {
            alert(`这是${params}详情页`); // 在这里处理参数  
        }
    },
    {
        templateTitle: '专户资金收支情况',
        templateTitleTwo: '收入',
        templateNumber: 5345874,
        icon: <CaretUpOutlined />,
        templatPeercentage: '20%',
        templatProgress: <ProgressBarShape />,
        templatFn: (params: string) => {
            alert(`这是${params}详情页`); // 在这里处理参数  
        }
    },
    {
        templateTitle: '预算执行进度',
        templateTitleTwo: '一般公共预算',
        templateNumber: 20000,
        icon: <CaretUpOutlined />,
        templatPeercentage: '9%',
        templatProgress: <ProgressRotundity />,
        templatFn: (params: string) => {
            alert(`这是${params}详情页`); // 在这里处理参数  
        }
    }
]

function Home() {

    return (
        <>
            <CommonUtils />
            <div className="grid">
                <UserData />
                <Notice />
            </div>
            <div className="assetCardGrid">
                {
                    assetCardArray.map((item, idx) => {
                        return (
                            <AssetsCard
                                key={idx}
                                templateTitle={item.templateTitle}
                                templateTitleTwo={item.templateTitleTwo}
                                templateNumber={item.templateNumber}
                                icon={item.icon}
                                templatPeercentage={item.templatPeercentage}
                                templatProgress={item.templatProgress}
                                templatFn={item.templatFn}
                            />
                        )
                    })
                }
            </div>

        </>
    )
}

export default Home