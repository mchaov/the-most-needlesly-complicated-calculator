import * as React from "react";
import { MainMenu } from "../mainMenu";
import { AppState } from "../../state";
import "./header.less";

export class Header extends React.Component<{
    store: AppState
}, {}> {
    render() {
        return (
            <header className="header">
                <MainMenu store={this.props.store} />
            </header>
        )
    }
}