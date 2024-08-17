import { createGlobalStyle } from 'styled-components';

import { Spacing } from '../../theme';

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: linear-gradient(rgb(246 246 246) 0%, rgb(254 254 254) 100%), rgb(254 242 234);
        height: 100vh;
        padding: ${Spacing.L} ${Spacing.M};
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
