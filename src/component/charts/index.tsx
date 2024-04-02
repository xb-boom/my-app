// 渲染echarts组件
import * as echarts from 'echarts';
import React, { useEffect, useRef, memo } from 'react';

// 根据屏幕尺寸设置fontSize
export const setFontSize = () => {
    const html = document.documentElement; // 获取html
    let fontSize = '100px';
    // 获取宽度
    const width = html.clientWidth;
    if (width < 1024) {
        fontSize = '54px';
    }
    if (width >= 1366) {
        fontSize = '95px';
    }
    if (width >= 1440) {
        fontSize = '100px';
    }
    if (width >= 1920) {
        fontSize = '110px';
    }
    html.style.fontSize = fontSize;
};

type Chart = {
    title?: string;
    xData?: string[];
    seriesData?: number[];
    option: any;
    chartContainerId: string;
    className?: string;
    chartInstanceId?: string;
    echartsClick?: Function;
    resizeFlag?: boolean;
    setSelectedLegend?: Function;
};

let chartInstance: any = null;

const EchartsRenderer: React.FC<Chart> = (props) => {
    const {
        option,
        chartContainerId,
        chartInstanceId,
        echartsClick,
        resizeFlag = false,
        setSelectedLegend
    } = props; //option 的值由父组件传入
    const chartWrapper = useRef<any>(null); // 在React中，通过useRef来获取组件挂载的HTML元素，也就是ECharts官网文档中所提到的父容器。

    useEffect(() => {
        if (!option && Object.keys(option).length === 0) return;
        if (!chartWrapper.current) return;
        setFontSize();
        const height = document.getElementById(chartContainerId)?.clientHeight; // 你也可以根据你的布局来自定义ECharts的宽高。
        chartWrapper.current.style.width = '100%';
        chartWrapper.current.style.height = `${height}px`; //用到了响应式布局的理念，在父元素中寻找id为dora的元素，并设置ECharts父容器的高度为其高度
        const chartInstance = echarts.init(chartWrapper.current, 'macarons'); //初始化ECharts

        // window.addEventListener('resize', function () {
        // 	chartInstance.resize();
        // });
        // 不merge配置，防止引用类型数据变化后，组件不更新
        chartInstance.setOption(option, true);
        // 图例点击事件
        chartInstance.on('legendselectchanged', function (params) {
            if (setSelectedLegend) {
                setSelectedLegend(params);
            }
        });

        const myObserver = new ResizeObserver((entry) => {
            chartInstance.resize();
        });
        myObserver.observe(chartWrapper.current);

        return () => {
            // 销毁实例，销毁后实例无法再被使用。
            chartInstance && chartInstance.dispose();
            myObserver.disconnect();

            // 添加要监听的元素，把echart的container div添加为监听对象
        };
    }, []);

    useEffect(() => {
        if (chartWrapper.current) {
            chartInstance = echarts.init(chartWrapper.current, 'macarons'); //重新渲染ECharts
            chartInstance.setOption(option, true);

            //点击前解绑，防止点击事件触发多次
            chartInstance.off('click');
            chartInstance.on('click', echartsClick);
        }
        //每次当option变化时，再次setOptions
    }, [option]);
    return <div id={chartInstanceId} ref={chartWrapper} />;
};
export default memo(EchartsRenderer);