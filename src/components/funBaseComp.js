import React, {useEffect, useRef, useContext} from "react";
import PropTypes from 'prop-types'
import appCtx from "../appCtx";
import Foo from './Foo'

const FunBaseComp = (props) => {
    const titleRef = useRef(null);
    const ctx = useContext(appCtx);
    console.warn(ctx);
    useEffect(() => {
        console.warn('effect');
        titleRef.current.className="foo";
        return () => {
            console.warn('clean up');
        }
    },[]);
    return <div>
        <h2 ref={titleRef}>{props.msg}</h2>
        <p>{props.children}</p>
        <h3>{ctx.ctxVal}</h3>
        <input type="text" onChange={props.action} value={props.msg}/>
        <Foo/>
    </div>
}

FunBaseComp.propTypes = {
    msg: PropTypes.string,
    action: PropTypes.func
}

export default React.memo(FunBaseComp);