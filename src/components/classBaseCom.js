import React, {PureComponent} from 'react';
import AppCtx from '../appCtx'

export default class ClassBaseCom extends PureComponent {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    static contextType = AppCtx;
    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
/*
        return <AppCtx.Consumer>
            {ctx => {
                return <div>
                    <h1>{ctx.ctxVal}</h1>
                    <input ref={this.inputRef} />
                </div>
            }}
        </AppCtx.Consumer>
*/
        return <div>
            <h1>{this.context.ctxVal}</h1>
            <input ref={this.inputRef} />
        </div>

    }
}
