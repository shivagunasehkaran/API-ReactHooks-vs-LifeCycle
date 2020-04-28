import React, { PureComponent } from 'react';

export class SideEffect extends PureComponent {
    componentDidMount() {
        this.checkForChanges({ watch: [] }, this.props);
    }

    componentDidUpdate(prevProps) {
        this.checkForChanges(prevProps, this.props);
    }

    checkForChanges(prevProps, nextProps) {
        const hasChanged = JSON.stringify(prevProps) !== JSON.stringify(nextProps);
        if (hasChanged) nextProps.onChange();
    }

    render() {
        return null;
    }
}