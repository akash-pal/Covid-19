
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
`;

export default function IndexPage() {
    return (
        <div>
            <GlobalStyle />
            <Stats url="https://covid19.mathdro.id/api"></Stats>
            <CountrySelector url='https://covid19.mathdro.id/api/countries'></CountrySelector>
        </div>
    );
}