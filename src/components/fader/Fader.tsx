import * as React from 'react';
import {Fade} from 'react-reveal';

export const Fader = ({children}) =>
    <Fade timeout={400}>{children}</Fade>;