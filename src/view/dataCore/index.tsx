import React, {useState} from "react";
import './index.scss'
// import { AEchars, BEchars } from '../../component/charts/columnar'
import EchartsRenderer from '../../component/charts/index'

function DataCore() {
    const [echartsDataA, setEchartsA] = useState({
        legend: {
            data:['借款笔数', '还款笔数', '投资笔数']
        },
        color: ['#c7eaa2','#88c2ef','#eec596'],
        xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [{
                    value: 100,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 150,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 80,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 70,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 60,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 87,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }],
                type: 'bar',
                stack: 'a',
                name: '借款笔数'
            },
            {
                data: [{
                    value: 60,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 46,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 60,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 60,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 10,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 60,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 80,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }],
                type: 'bar',
                stack: 'b',
                name: '还款笔数'
            },
            {
                data: [{
                    value: 10,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 46,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 65,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 60,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 21,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 60,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }, {
                    value: 76,
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0]
                    }
                }],
                type: 'bar',
                stack: 'c',
                name: '投资笔数'
            },
        ]
    })
    const [echartsDataB, setEchartsB] = useState({
        tooltip: { trigger: 'item' },
        color: ['#c7eaa2','#88c2ef','#eec596'],
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '详细信息',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: { show: false },
                data: [
                    { value: 1048, name: '百度' },
                    { value: 735, name: '微博' },
                    { value: 580, name: '抖音' },
                ]
            }
        ]
    })
    return (
        <>
            <div className="orderDataGrid">
                <div className="echartsBox">
                    <EchartsRenderer
                        chartInstanceId="dataBarEcharts"
                        option={echartsDataA}
                        chartContainerId="dataBarEcharts"
                    />
                </div>
                <div className="echartsBox">
                    <EchartsRenderer
                        chartInstanceId="sourcePieEcharts"
                        option={echartsDataB}
                        chartContainerId="sourcePieEcharts"
                    />
                </div>
            </div>
        </>
    )
}

export default DataCore