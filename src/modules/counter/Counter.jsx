import React from 'react';
import { Box, Button, Text } from 'grommet';

//
// Counter Layout
//

const layoutStyleProps = {
    align: 'center',
    gap: 'small',
    pad: 'large',
    round: true,
    background: {
        color: 'light-2',
        opacity: 'strong'
    }
};

const Layout = props => {
    const { children } = props;

    return (
        <Box {...layoutStyleProps}>
            { children }
        </Box>
    );
};

//
// Counter
//

const Counter = props => {
    const { actions, model } = props;

    return (
        <Layout>
            <Text size="77px">
                { model }
            </Text>

            <Button
                label="Increment"
                onClick={actions.increment}
            />

            <Button
                label="Decrement"
                onClick={actions.decrement}
            />
        </Layout>
    );
};

export default Counter;
