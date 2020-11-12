import { GlobalStyles } from "./assets/styles/global";
import { Route, Switch } from "react-router-dom";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import NotFound from "./screens/NotFound";

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/weather/:city" component={Detail} />
            <Route component={NotFound} />
        </Switch>
    </ThemeProvider>
);

export default App;
