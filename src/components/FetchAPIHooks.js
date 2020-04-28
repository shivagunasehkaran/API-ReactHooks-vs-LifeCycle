import React, { useEffect, useState } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';

const FetchAPIHooks = (url) => {
    const [state, setState] = useState({ data: [], loading: true });

    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));

        fetch(url, {
            headers: new Headers({
                Accept: "application/vnd.github.cloak-preview"
            })
        }).then(x => x.json()).then(y => {
            setState({ data: y.items, loading: false });
        }).catch(err => console.log(err));

    }, [url]) // service calls based on URL change & remove url here for only one time call
    return state;
};

export default FetchAPIHooks;