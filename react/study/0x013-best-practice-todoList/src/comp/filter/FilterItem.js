import React from 'react'

class FilterItem extends React.Component {
    render() {
        const {filter, now} = this.props
        return (
            // 如果点击了当前按钮, 就禁用当前按钮
            <button disabled={now === filter.value ?'disable':''} className={ 'btn btn-link' }
                    onClick={() => this.props.onClick(filter.value)}>{filter.name}</button>
        )


    }
}

export default FilterItem