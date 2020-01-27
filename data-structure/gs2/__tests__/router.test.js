const registerHandler = require('./../router').registerHandler
const findHandler = require('./../router').findHandler

registerHandler('Get', 'http://www.xxx.com/weibos', 'queryWeibo')
registerHandler('post', 'http://www.xxx.com/weibos', 'addWeibo')
registerHandler('Delete', 'http://www.xxx.com/weibos', 'deleteWeibo')
registerHandler('Update', 'http://www.xxx.com/weibos', 'updateWeibo')

registerHandler('Get', 'http://www.xxx.com/comments', 'queryComment')
registerHandler('post', 'http://www.xxx.com/comments', 'queryComment')
registerHandler('Delete', 'http://www.xxx.com/comments', 'queryComment')
registerHandler('Update', 'http://www.xxx.com/comments', 'queryComment')


test('find the router', () => {
    expect(findHandler('Get', 'http://www.xxx.com/weibos')).toEqual('queryWeibo')
    expect(findHandler('post', 'http://www.xxx.com/weibos')).toEqual('addWeibo')
    expect(findHandler('Delete', 'http://www.xxx.com/weibos')).toEqual('deleteWeibo')
    expect(findHandler('Update', 'http://www.xxx.com/weibos')).toEqual('updateWeibo')


    expect(findHandler('Get', 'http://www.xxx.com/comments')).toEqual('queryComment')
    expect(findHandler('post', 'http://www.xxx.com/comments')).toEqual('queryComment')
    expect(findHandler('Delete', 'http://www.xxx.com/comments')).toEqual('queryComment')
    expect(findHandler('Update', 'http://www.xxx.com/comments')).toEqual('queryComment')
})


test('not find the router', () => {
    expect(findHandler('Get', 'http://www.xxx.com/werwer')).toEqual('')

})
