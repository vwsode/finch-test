import { createGlobalStyle } from 'styled-components';

import { Spacing } from '../../theme';

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: linear-gradient(180deg, #4568DC 0%, #B06AB3 100%), #EF8E48;
        height: 100vh;
        padding: ${Spacing.L} ${Spacing.M};
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
