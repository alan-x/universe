<template>
    <div id="app">
        <p>{{counter}}</p>
        <button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button>
    </div>
</template>

<script>
    import {createStore} from 'redux'
    //reducer
    const counter = (state = 0, action) => {
        switch (action.type) {
            case ACTION_INCREMENT:
                return state + 1
            case ACTION_DECREMENT:
                return state - 1
            default:
                return state
        }
    }
    // action
    const ACTION_INCREMENT = 'INCREMENT'
    const ACTION_DECREMENT = 'DECREMENT'
    // action creator
    const increment = () => ({
        type: ACTION_INCREMENT
    })
    const decrement = () => ({
        type: ACTION_DECREMENT
    })

    // store
    const store = createStore(counter)
    export default {
        name: 'app',
        data: function () {
            return {
                counter: 0
            }
        },
        created: function () {
            // 组件创建的时候监听 store 变化, 更新到 data
            this.unSub=store.subscribe(() => {
                this.counter = store.getState()
            })
        },
        beforeDestroy:function(){
            // 组件销毁的时候取消订阅
            this.unSub()
        },
        methods: {
            increment: function () {
                store.dispatch(increment())
            },
            decrement: function () {
                store.dispatch(decrement())
            }
        }
    }
</script>

<style>

</style>
