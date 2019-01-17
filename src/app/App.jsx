import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grommet, Box, grommet } from 'grommet';

import { ActionTypes, wrapAction } from './actions';
import { Counter } from '../modules/counter';
import { decrement, increment } from '../modules/counter/actions';

//
// App Layout
//

const layoutGrandParentStyleProps = {
    background: 'dark-2',
    direction: 'column',
    height: '100%',
    justify: 'center'
};

const layoutParentStyleProps = {
    align: "center",
    background: "dark-2",
    direction: "row-responsive",
    gap: "medium",
    justify: "center",
    pad: "xlarge"
};

const Layout = props => {
    const { children } = props;

    return (
        <Grommet full={true} theme={grommet}>
            <Box {...layoutGrandParentStyleProps}>
                <Box {...layoutParentStyleProps}>
                    { children }
                </Box>
            </Box>
        </Grommet>
    );
};

//
// App
//

const App = props => {
    const { actions, model } = props;

    return (
        <Layout>
            <Counter actions={actions.counterA} model={model.counterA} />
            <Counter actions={actions.counterB} model={model.counterB} />
        </Layout>
    );
};

//
// Connected App
//

const mapState = state => ({
    model: state
});

const mapDispatch = dispatch => ({
    actions: {
        counterA: bindActionCreators({
            increment: wrapAction(ActionTypes.CounterA, increment),
            decrement: wrapAction(ActionTypes.CounterA, decrement)
        }, dispatch),

        counterB: bindActionCreators({
            increment: wrapAction(ActionTypes.CounterB, increment),
            decrement: wrapAction(ActionTypes.CounterB, decrement)
        }, dispatch)
    },
});

const ConnectedApp = connect(mapState, mapDispatch)(App);

export default ConnectedApp;
