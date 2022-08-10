import { createBrowserHistory } from 'history';
import qs from 'qs';

const history = createBrowserHistory();
history.location = {
    ...history.location,
    query: qs.parse(history.location.search.substr(1)),
    state: {
    }
};
history.listen(() => {
    history.location = {
        ...history.location,
        query: qs.parse(history.location.search.substr(1)),
        state: history.location.state || {
        }
    };
});

const {
    go, goBack, push, replace, getRedirectPath
} = history;

export {
    go, goBack, push, replace, getRedirectPath
};

export default history;

700367977