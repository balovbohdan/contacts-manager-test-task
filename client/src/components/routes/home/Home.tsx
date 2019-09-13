import * as React from 'react';
import {Fade} from 'react-reveal';

import {Fader} from '@components/fader';
import {Cover} from '@components/cover';

export default () =>
    <Fader>
        <Cover/>
    </Fader>;