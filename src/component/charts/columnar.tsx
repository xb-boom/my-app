import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface EChartsReactProps {
    options: any;
    title?: string
    style?: React.CSSProperties;
    className?: string;
    onChartReady?: (chart: echarts.ECharts) => void;
}

const EChartsReact: React.FC<EChartsReactProps> = ({ options, style, className, title, onChartReady }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<echarts.ECharts | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);
            chartInstanceRef.current = chartInstance;
            chartInstance.setOption(options);
            if (onChartReady) {
                onChartReady(chartInstance);
            }
        }
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.dispose();
            }
        };
    }, [options, onChartReady]);

    return (
        <div className='echartsBox'>
            <h5 className='title'>
                {title}
            </h5>
            <div ref={chartRef} style={style} className={className} />
        </div>
    )
};


const AEchars: React.FC = () => {
    var series = [
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
    ];
    const options = {
        legend: {
            data: ['借款笔数', '还款笔数', '投资笔数']
        },
        color: ['#c7eaa2','#88c2ef','#eec596'],
        xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        yAxis: {
            type: 'value'
        },
        series: series as any
    };
    return <EChartsReact options={options} style={{ width: '100%', height: 250 }} title='产品实时订单检测' />
};

const BEchars: React.FC = () => {
    const options = {
        tooltip: {
            trigger: 'item'
        },
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
                emphasis: {
                    //   label: {
                    //     show: true,
                    //     fontSize: 40,
                    //     fontWeight: 'bold'
                    //   }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '百度' },
                    { value: 735, name: '微博' },
                    { value: 580, name: '抖音' },
                ]
            }
        ]
    };


    return <EChartsReact options={options} style={{ width: '100%', height: 250 }} title='用户来源' />
};


export {
    AEchars, 
    BEchars
}