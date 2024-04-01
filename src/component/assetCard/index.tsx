import React, { useState, useEffect, useContext, ReactNode } from 'react';
import CustomStatistic from '../customStatistic/index'
import './index.scss'
// import axios from 'axios';

type ChildCompenontProps = {
    templateTitle: string,
    templateTitleTwo: string,
    templateNumber: number,
    icon: ReactNode,
    templatPeercentage: ReactNode,
    templatProgress: ReactNode,
    templatFn: (params: string) => void // 正确的函数类型定义 
};

const AssetCard: React.FC<ChildCompenontProps> = function ({ templateTitle, templateTitleTwo, templateNumber, icon, templatPeercentage, templatProgress, templatFn }) {

    useEffect(() => {

    }, [])

    return (
        <div className='assetCard-wrap'>
            <h5 className='title'>
                {templateTitle}
            </h5>
            <div className='assetData'>
                <span>{templateTitleTwo}</span>
                <div className='statistic-number'>
                    <CustomStatistic value={templateNumber}/>
                </div>
                <b className='percentage'>
                    {icon} <span className='span'>{templatPeercentage}</span>
                </b>
            </div>
            <div className='progress'>
                {templatProgress}
            </div>
            <div className='assetCard-btn'>
                <button onClick={() => templatFn(templateTitle)}>查看详情</button>
            </div>
        </div>
        
    );

}

export default AssetCard