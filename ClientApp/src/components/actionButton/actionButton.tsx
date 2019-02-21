import * as React from "react";

export class ActionButton extends React.Component<{
    text: string
    action: Function
}, {}> {
    render() {
        return (
            <button
                onClick={e => { this.props.action(e) }}
                className="col btn btn-outline-secondary m-1" >
                {this.props.text}
            </button>
        )
    }
}
