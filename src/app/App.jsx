import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grommet, Box, grommet } from 'grommet';

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
            <Counter actions={actions} model={model} />
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
    actions: bindActionCreators({
        decrement,
        increment
    }, dispatch),
});

const ConnectedApp = connect(mapState, mapDispatch)(App);

export default ConnectedApp;
