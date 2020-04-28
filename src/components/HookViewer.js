import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import FetchAPIHooks from './FetchAPIHooks';
import Child from './Child';

const HookViewer = (props) => {

    // const [dataSource, setDataSource] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetch(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${props.id}`,
    //         {
    //             method: "GET",
    //             headers: new Headers({
    //                 Accept: "application/vnd.github.cloak-preview"
    //             })
    //         }
    //     )
    //         .then(res => res.json())
    //         .then(response => {
    //             setDataSource(response.items);
    //             setIsLoading(false);
    //         })
    //         .catch(error => console.log(error));
    // }, [props.id]);

    // API call 
    const { data, loading } = FetchAPIHooks(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${props.id}`);

    return (
        <View style={{ backgroundColor: 'green', marginTop: 50, alignItems: 'center' }}>
            {
                data.map((item, key) => {
                    return (
                        <Child key={key} {...item} />
                    )
                })
            }
        </View>
    )
};

export default HookViewer;