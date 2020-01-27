function init() {
    return []
}

function insert(arr, index, data) {
    arr[index] = data
    return arr
}

function find(arr, data) {
    return arr.find(d => d === data)
}

function delete_(arr, index) {
    arr.splice(index,1)
    return arr
}

function main() {
    let arr = init()

    arr = insert(arr, 0, 1)
    arr = insert(arr, 1, 2)
    arr = insert(arr, 2, 3)
    arr = insert(arr, 3, 4)
    arr = insert(arr, 4, 5)
    arr = insert(arr, 5, 6)

    find(arr, 1)
    find(arr, 2)
    find(arr, 3)
    find(arr, 4)
    find(arr, 5)

    delete_(arr,0)
    delete_(arr,1)
    delete_(arr,2)
    delete_(arr,3)
    delete_(arr,4)
    delete_(arr,5)
}

let data=[1,2,3]
data.push(4)
data.push(5)
data.push(6)
data.filter(d=>d===1)
data.splice(0,1)