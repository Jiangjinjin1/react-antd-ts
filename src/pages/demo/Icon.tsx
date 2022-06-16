import Icon, { createFromIconfontCN } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React, { FC } from 'react';

const Demo2: FC = () => {

    const HeartSvg = () => (
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="5547" width="200" height="200">
            <path
                d="M800 835.328l-574.496 0.032A2.464 2.464 0 0 1 224 834.656v-118.656c0-5.856 5.92-14.944 12.096-17.44 1.056-0.448 69.408-30.272 149.952-50.464 41.248-10.336 85.632-18.208 125.952-18.208 36.64 0 76.736 6.496 114.816 15.456a1061.6 1061.6 0 0 1 161.856 53.536c5.312 2.176 11.328 11.296 11.328 17.12v119.36zM400.992 326.88A103.136 103.136 0 0 1 504.16 224a103.168 103.168 0 0 1 103.2 102.88v123.104a103.168 103.168 0 0 1-103.2 102.88 103.136 103.136 0 0 1-103.168-102.88v-123.104zM813.728 640c-3.904-1.728-58.56-25.6-129.312-45.76a883.616 883.616 0 0 0-72.608-17.6c36.096-30.592 59.552-75.68 59.552-126.656v-123.104A167.168 167.168 0 0 0 504.192 160c-92.16 0-167.2 74.72-167.2 166.88v123.104c0 52.352 24.768 98.624 62.72 129.28-25.472 5.376-50.112 11.872-72.8 18.656a1098.656 1098.656 0 0 0-115.648 41.664C182.016 651.328 160 684.192 160 716v131.68l1.696 4.992c9.504 27.936 35.136 46.72 63.808 46.72h572.992a65.536 65.536 0 0 0 64.96-56.96l0.544-126.4c0-31.616-21.952-64.416-50.272-76.032z"
                p-id="5548"></path>
        </svg>
    )

    const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
        <Icon component={HeartSvg} {...props} />
    )

    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });

    return (
        <div>
            自定义icon
            <HeartIcon style={{ color: 'hotpink', fontSize: 20 }} />
            <div>
                <IconFont type="icon-shoppingcart" style={{fontSize: 30}} />
            </div>
        </div>
    )
}

export default Demo2;
