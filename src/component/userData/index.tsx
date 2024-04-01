import React, { useState, useEffect, useContext, ReactNode } from 'react';
import './index.scss'
import axios from 'axios';
import CustomStatistic from '../customStatistic/index'
import {

} from '@ant-design/icons';
interface ChildCompenontProps {
}
interface userdata {
    bigNumber: number,
    addNumber: string,
    oldNumber: number,
}


const utilsArray: Array<userdata> = [
    {
        bigNumber: 124,
        addNumber: ' 添加客户数量（人）',
        oldNumber: 117
    },
    {
        bigNumber: 20564,
        addNumber: ' 添加客户数量（人）',
        oldNumber: 17116
    },
    {
        bigNumber: 654,
        addNumber: ' 总计处理事项（件）',
        oldNumber: 601
    },
]



const UserData: React.FC<ChildCompenontProps> = function () {

    useEffect(() => {

    }, [])

    return (
        <div className='userData-wrap'>
            <h5 className='title'>
                个人数据
            </h5>
            <ul>
                {
                    utilsArray.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <span className='bigNumber'>
                                    <CustomStatistic value={item.bigNumber} />
                                </span>
                                <p className='addNumber'>
                                    {item.addNumber}
                                </p>
                                <div className='oldNumber'>
                                    昨日 <CustomStatistic value={item.oldNumber} />
                                </div>
                            </li>
                        )
                    })

                }

            </ul>
        </div>
    );

}

export default UserData