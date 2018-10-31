import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from '../pages';

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />

                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        )
    }
}

export default App;