import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

export default class ContainerViewer extends PureComponent {

    state = {
        dataSource: []
    };

    componentDidMount() {
        if (this.props.id) {
            fetch(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${this.props.id}`, {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/vnd.github.cloak-preview'
                })
            }).then(x => x.json()).then(data => {
                this.setState({ dataSource: data.items });
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.id && this.props.id !== prevProps.id) {
            fetch(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=${this.props.id}`, {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/vnd.github.cloak-preview'
                })
            }).then(x => x.json()).then(data => {
                this.setState({ dataSource: data.items });
            });
        }
    }

    renderList = () => {
        return this.state.dataSource.map((data) => {
            return (
                <View style={{ margin: 30 }}>
                    {
                        <View><Text>{data.author.avatar_url}</Text></View>
                    }
                </View>
            )
        });
    };

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, color: '#000', marginTop: 100, textAlign: 'center' }}>{'API Response :'}</Text>
                {
                    this.renderList()
                }
            </View>
        );
    }
};