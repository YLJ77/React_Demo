import React, {PureComponent} from 'react'
import Foo from './Foo'

class HelloWord extends PureComponent {
    render() {
        return  <div>
            <h1>Hello world</h1>
            <Foo></Foo>
        </div>
    }
}

export default HelloWord;