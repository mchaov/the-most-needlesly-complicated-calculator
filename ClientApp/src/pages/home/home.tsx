import * as React from "react";
import { observe, Lambda } from "mobx";
import { observer } from "mobx-react";
import { AppState } from "../../state";
import { Match, Router } from "found";
import "./home.less";

import * as CMP from "../../components";

const emptyState = {
    num1: "",
    num2: "",
    action: ""
}

@observer
export class Home extends React.Component<{
    store: AppState,
    router: Router,
    match: Match
}, {
    num1: string
    num2: string
    action: string
}> {
    disposer: Lambda

    constructor(props) {
        super(props);

        this.state = {
            num1: "",
            num2: "",
            action: ""
        }

        this.disposer = observe(this.props.store, "result", x => {
            this.setState({ ...emptyState, num1: x.newValue.toString() });
        })

    }

    addNumber(x) {
        if (this.state.num1 === "") {
            this.setState({ num1: x });
        }
        if (this.state.num1 && this.state.action === "") {
            this.setState({ num1: this.state.num1.concat(x) });
        }
        if (this.state.num1 && this.state.action !== "" && this.state.num2 === "") {
            this.setState({ num2: x });
        }
        if (this.state.num1 && this.state.action !== "" && this.state.num2 !== "") {
            this.setState({ num2: this.state.num2.concat(x) });
        }
    }

    addAction(x) {
        if (x === "sqrt") {
            this.setState({ action: x, num2: "" });
        } else {
            this.setState({ action: x });
        }
    }

    clearSelection() {
        this.setState(emptyState);
        this.props.store.setResult("");
    }

    getResult() {
        this.props.store.route({
            num1: this.state.num1,
            num2: this.state.num2,
            action: this.state.action
        });
        this.setState(emptyState);
    }

    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <input
                                    key={`${this.props.store.result}_${this.state.num1}_${this.state.action}_${this.state.num2}`}
                                    type="email"
                                    className="form-control"
                                    defaultValue={`${this.state.num1} ${this.state.action} ${this.state.num2}`} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <CMP.NumberButton text="7" action={this.addNumber.bind(this, "7")} />
                                <CMP.NumberButton text="8" action={this.addNumber.bind(this, "8")} />
                                <CMP.NumberButton text="9" action={this.addNumber.bind(this, "9")} />
                            </div>
                            <div className="row">
                                <CMP.NumberButton text="4" action={this.addNumber.bind(this, "4")} />
                                <CMP.NumberButton text="5" action={this.addNumber.bind(this, "5")} />
                                <CMP.NumberButton text="6" action={this.addNumber.bind(this, "6")} />
                            </div>
                            <div className="row">
                                <CMP.NumberButton text="1" action={this.addNumber.bind(this, "1")} />
                                <CMP.NumberButton text="2" action={this.addNumber.bind(this, "2")} />
                                <CMP.NumberButton text="3" action={this.addNumber.bind(this, "3")} />
                            </div>
                            <div className="row">
                                <CMP.NumberButton text="0" action={this.addNumber.bind(this, "0")} />
                                <CMP.NumberButton text="." action={this.addNumber.bind(this, ".")} />
                                <CMP.NumberButton text="C" action={this.clearSelection.bind(this)} />
                            </div>
                        </div>
                        <div className="col pl-4">
                            <div className="row">
                                <CMP.ActionButton text="√" action={this.addAction.bind(this, "sqrt")} />
                                <CMP.ActionButton text="^" action={this.addAction.bind(this, "^")} />
                            </div>
                            <div className="row">
                                <CMP.ActionButton text="-" action={this.addAction.bind(this, "-")} />
                                <CMP.ActionButton text="+" action={this.addAction.bind(this, "+")} />
                            </div>
                            <div className="row">
                                <CMP.ActionButton text="*" action={this.addAction.bind(this, "*")} />
                                <CMP.ActionButton text="/" action={this.addAction.bind(this, "/")} />
                            </div>
                            <div className="row">
                                <CMP.ActionButton text="Enter" action={this.getResult.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
