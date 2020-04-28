import React from 'react';
import { View, Text } from 'react-native';

const Child = (props) => {
    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            {/* <Text>{props.comments_url}</Text> */}
            {/* <Text>{props.html_url}</Text> */}
            <Text>{props.url}</Text>
        </View>
    );
};

export default Child;