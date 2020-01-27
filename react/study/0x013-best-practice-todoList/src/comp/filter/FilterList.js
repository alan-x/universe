import React from 'react'
import {STATE_TODO_COMPLETE, STATE_TODO_DELETE, STATE_TODO_NORMAL} from "../../service/TodoService";
import FilterItem from "./FilterItem";
import './FilterList.css'

class FilterList extends React.Component {
    constructor() {
        super()
        this.state = {
            filterList: [
                {
                    name: "所有",
                    value: ''
                },
                {
                    name: '待完成',
                    value: STATE_TODO_NORMAL
                },
                {
                    name: '已完成',
                    value: STATE_TODO_COMPLETE
                },
                {
                    name: '回收站',
                    value: STATE_TODO_DELETE
                }
            ]
        }

    }

    render() {
        const {filterList} = this.state
        const {now} = this.props
        return <div className='filter-list'>
            {
                filterList.map((filter, index) => {
                    return <FilterItem now={now} filter={filter} key={index} onClick={this.props.onClick}/>
                })
            }
        </div>
    }
}

export default FilterList