import { createGlobalStyle } from 'styled-components';
import UnifrakturCook from '../assets/fonts/UnifrakturCook-Bold.ttf'
import Staatliches from '../assets/fonts/Staatliches-Regular.ttf'

const Typography = createGlobalStyle`
    @font-face {
        font-family: 'UnifrakturCook', cursive;
        src: url(${UnifrakturCook});
        font-style: normal;
    }
    @font-face {
        font-family: 'Staatliches', cursive;
        src: url(${Staatliches});
        font-style: normal;
    }
    @font-face {
        font-family: Cyber;
        src: url('https://assets.codepen.io/605876/Blender-Pro-Bold.otf');
        font-display: swap;
    }
    html{
        font-family: 'Staatliches', cursive;
        color: var(--gray-1);
    }
    // *{
    //     font-family: 'Staatliches', cursive;
    //     color: var(--gray-1);
    // }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Montserrat SemiBold'
    }
`;

export default Typography;
