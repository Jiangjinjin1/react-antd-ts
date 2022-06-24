import React from 'react'

import EChartsReact from 'echarts-for-react'

const EchartsDemo1: React.FC = () => {
    const getOption = () => {
        return {
            tooltip: {
                trigger: 'axis', // tooltip的触发方式：axis(坐标轴出发，主要在柱状等类目图中使用);item(点击数据项触发，主要用于散点图或者饼图)
            },
            legend: {
                //设置图标
                data: ['Evaporation', 'Precipitation', 'Temperature'],
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisPointer: {
                        //坐标轴指示器配置
                        type: 'shadow', // 设置鼠标上移的时候显示垂直于x轴的阴影，还可以设置位line，那会显示垂直于x轴的直线
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Precipitation',
                    axisLine: {
                        show: true, //是否显示y轴那条线
                    },
                    axisLabel: {
                        formatter: '{value} ml', //y轴刻度显示内容格式化
                    },
                },
                {
                    type: 'value',
                    name: 'Temperature',
                    axisLine: {
                        show: true,
                    },
                    axisLabel: {
                        formatter: '{value} °C',
                    },
                },
            ],
            series: [
                // 三个系列对应展示三个图标的值
                {
                    name: 'Evaporation',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                },
                {
                    name: 'Precipitation',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                },
                {
                    name: 'Temperature',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                },
            ],
            //窗口缩放设置
            dataZoom: {
                start: 0,
                end: 100,
                filterMode: 'empty',
                handleIcon:
                    'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '240%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                },
                height: 6,
                backgroundColor: '#DDDDDD',
                fillerColor: '#007ACE',
                bottom: 10,
                showDataShadow: false,
                showDetail: false,
            },
        }
    }
    return (
        <div style={{ width: '40%', border: '1px solid ' }}>
            <EChartsReact option={getOption()} />
        </div>
    )
}
export default EchartsDemo1
