import React, {PureComponent} from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import AppCtx from '../appCtx'
import { Route, Link } from 'react-router-dom'
import HelloWord from './HelloWord'

class ClassBaseCom extends PureComponent {
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
{/*
            <a href="/test">test</a>
            <a href="/bar">bar</a>
*/}
            <Link to='/test'>Test</Link>
<Link to={{
    pathname: '/bar',
    hash: '#yi',
    search: '?a=b'
}}>Bar</Link>
            <Route path="/test" render={() => <h1>render func route</h1>} />
            {/*<Route path="/bar" render={() => <h1>Bar</h1>} />*/}
            <Route path="/bar" component={HelloWord} />
            <h1>{this.props.counter}</h1>
            <button onClick={this.props.onIncrementCounter}>inc</button>
        </div>

    }
}
const mapStateToProps = state => {
    return {
        counter: state.counterReducer.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassBaseCom)
