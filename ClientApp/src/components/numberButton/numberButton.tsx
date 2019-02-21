import * as React from "react";

export class NumberButton extends React.Component<{
    text: string
    action: Function
}, {}> {
    render() {
        return (
            <button
                onClick={e => { this.props.action(e) }}
                className="col btn btn-primary m-1" >
                {this.props.text}
            </button>
        )
    }
}
