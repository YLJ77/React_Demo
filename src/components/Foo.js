import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'

class Foo extends PureComponent {
    render() {
        console.warn(this.props);
        return <h1>Foo</h1>
    }
}

export default withRouter(Foo)
