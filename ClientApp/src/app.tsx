import * as React from "react";
import * as Pages from "./pages";
import { AppState } from "./state";
import { observer } from "mobx-react";
import * as Partials from "./partials";
import { createBrowserRouter, Match, Router } from "found";
import "./app.less"

const stateInstance = new AppState();

@observer
export class App extends React.Component<{
    router: Router,
    match: Match
}, {
    store: AppState
}> {
    constructor(props) {
        super(props);

        this.state = {
            store: stateInstance
        };

        // dev mode, debug mode :)
        window["App"] = this;
        window["AppState"] = stateInstance;
    }

    render() {
        return (
            <div>
                <Partials.Header store={this.state.store} />
                {this.props.children}
                <Partials.Footer />
            </div>
        )
    }
}

export const BrowserRouter = createBrowserRouter({
    routeConfig: [
        {
            path: "/",
            Component: App,
            children: [
                {
                    Component: props => {
                        return <Pages.Home {...props} store={stateInstance} />;
                    }
                },
            ]
        },
    ],

    renderError: ({ error }) => <div>{error.status === 404 ? "Not found" : "Error"}</div>
});