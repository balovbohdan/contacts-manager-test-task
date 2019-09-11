import * as React from 'react';
import {Fade} from 'react-reveal';

import {Cover} from '@components/cover';

export default () =>
    <Animation>
        <Cover/>
    </Animation>;

const Animation = ({children}) =>
        <Fade timeout={400}>{children}</Fade>;