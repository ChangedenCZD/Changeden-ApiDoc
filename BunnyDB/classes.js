/**
 * @api {put} /class/ 1.添加
 * @apiVersion 0.0.1
 * @apiName Create Class
 * @apiGroup Class
 *
 * @apiDescription 在某应用中添加一个类
 *
 * @apiParam {String} className 类名
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.userId 用户Id
 * @apiSuccess {Object} result.classInfo 类详情
 * @apiSuccess {String} result.classInfo.classId 类Id
 * @apiSuccess {String} result.classInfo.className 类名
 * @apiSuccess {String} result.classInfo.appId 所属应用Id
 */
function createClass() {
}

/**
 * @api {put} /class/:classId 2.修改
 * @apiVersion 0.0.1
 * @apiName Update Class
 * @apiGroup Class
 *
 * @apiDescription 修改某个类的类名
 *
 * @apiParam {String} classId   类Id
 * @apiParam {String} className   新类名
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.userId 用户Id
 */
function updateClass() {
}

/**
 * @api {delete} /class/:classId 3.删除
 * @apiVersion 0.0.1
 * @apiName Delete Class
 * @apiGroup Class
 *
 * @apiDescription 删除某个类
 *
 * @apiParam {String} classId   类Id
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.userId 用户Id
 */
function deleteClass() {
}

/**
 * @api {get} /class/ 4.列表
 * @apiVersion 0.0.1
 * @apiName Fetch Class
 * @apiGroup Class
 *
 * @apiDescription 获取某个应用中的类列表
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.userId 用户Id
 * @apiSuccess {Object} result.list 类集合
 * */
function classList() {
}

/**
 * @api {put} /class/key/:classId 5.修改键
 * @apiVersion 0.0.1
 * @apiName Update Key For Class
 * @apiGroup Class
 *
 * @apiDescription 删除某个类
 *
 * @apiParam {String} classId   类Id
 * @apiParam {String} fromKey   原始Key
 * @apiParam {String} toKey 新Key
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 */
function updateKeyForClass() {
}

/**
 * @api {delete} /class/key/:classId 3.删除键
 * @apiVersion 0.0.1
 * @apiName Delete Key For Class
 * @apiGroup Class
 *
 * @apiDescription 删除某个类
 *
 * @apiParam {String} classId   类Id
 * @apiParam {String} objectKey   键
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 */
function deleteKeyForClass() {
}