let todoService = []

/**
 * 获取所有的 todo
 * @returns {Array}
 */
function getAll() {
    return todoService
}

/**
 * 添加一个 todo 到 todo 列表中
 * @param todo
 */
function add(todo) {
    todo.id = todoService.length
    todoService.push(todo)
}

/**
 * 根据 todo 的 id 删除一个 todo
 * @param id
 * @private
 */
function delete_(id) {
    todoService.splice(findIndexById(id), 1)
}

/**
 * 根据一个修改过的 todo 更新 todo
 * @param todo
 */
function update(todo) {
    todoService[findIndexById(todo.id)] = {...todo}
}

/**
 * 根据内容筛选符合条件的 todo
 * @param content
 * @returns {*[]}
 */
function find(content) {
    return todoService.filter(todo => todo.content === content)
}

/**
 * 根据 id 获取这个 id 在 todoList 中的索引
 * @param id
 * @returns {number}
 */
function findIndexById(id) {
    return todoService.findIndex(todo => todo.id === +id)
}
