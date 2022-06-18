import { Button } from 'antd';
import React, {FC, useEffect} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Demo13: FC = () => {
    let params = useParams();

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        console.log('渲染了id：', params.id)
        console.log('获取query：', searchParams.get('id'))
    }, [])

    const getSearchParams = () => {
        // @ts-ignore
        setSearchParams({id: 555})
    }

    return (
        <div className="App">
            通过id获取组件
            <Button type="primary" onClick={getSearchParams}>
                修改query
            </Button>
        </div>
    )
}

export default Demo13;
