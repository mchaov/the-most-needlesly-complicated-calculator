import { observer } from "mobx-react";
import { AppState } from "../../state";
import * as React from "react";
import "./mainMenu.less";

@observer
export class MainMenu extends React.Component<{
    store: AppState
}, {}> {
    render() {
        return (
            <div>
            </div>
        )
    }
}