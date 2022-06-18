import React from 'react'
import { sleep } from '@utils/utilExt'

const MAX_RETRY_COUNT = 10

export default function lazyRequire(importComponent) {
    class lazyRequire extends React.PureComponent {
        constructor(props) {
            super(props)

            this.retryCount = 0
            this.state = {
                component: null,
                // 0:未加载 1:加载成功 2:加载失败
                loadStatus: 0,
            }
        }

        async componentDidMount() {
            this.componentLoader()
        }

        componentLoader = async () => {
            try {
                const { default: component } = await importComponent()
                this.setState({
                    component,
                    loadStatus: 1,
                })
            } catch (e) {
                if (this.retryCount >= MAX_RETRY_COUNT) {
                    this.setState({
                        loadStatus: 2,
                    })
                    return
                }
                await sleep(200)
                this.componentLoader()
                this.retryCount++
                console.log('LazyRequire Err info:', e.message)
            }
        }

        resetLoader = () => {
            this.retryCount = 0
            this.setState({
                component: null,
                loadStatus: 0,
            })
        }

        render() {
            const Content = this.state.component
            if (!Content) return null

            return <Content {...this.props} />
        }
    }

    return lazyRequire
}
