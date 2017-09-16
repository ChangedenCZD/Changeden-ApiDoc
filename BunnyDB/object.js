/**
 * @api {post} /object/:classId 1.添加
 * @apiVersion 0.0.1
 * @apiName Insert Object
 * @apiGroup Object
 *
 * @apiDescription 在某个类中添加记录
 *
 * @apiParam {String} classId 类Id
 * @apiParam {String} key value
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
 * @apiSuccess {Object} result.objectId 记录Id
 */
function insertObject() {
}

/**
 * @api {put} /object/:objectId 2.修改
 * @apiVersion 0.0.1
 * @apiName Update Object
 * @apiGroup Object
 *
 * @apiDescription 修改某个记录
 *
 * @apiParam {String} objectId   记录Id
 * @apiParam {String} key value
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
 * @apiSuccess {Object} result.objectId 记录Id
 */
function updateObject() {
}

/**
 * @api {delete} /object/id/:objectId 3.删除
 * @apiVersion 0.0.1
 * @apiName Delete Class
 * @apiGroup Object
 *
 * @apiDescription 删除某个记录
 *
 * @apiParam {String} objectId   记录Id
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
 * @apiSuccess {Object} result.objectId 记录Id
 */
function deleteObject() {
}

/**
 * @api {get} /object/:classId 4.列表
 * @apiVersion 0.0.1
 * @apiName Fetch Object List
 * @apiGroup Object
 *
 * @apiDescription 获取某个类的记录列表
 *
 * @apiParam {String} classId   类Id
 *
 * @apiParam {String} where   Sql中的Where语句
 * @apiParam {String} groupBy   Sql中的Group By语句
 * @apiParam {String} orderBy   Sql中的Order By语句
 * @apiParam {String} limit   Sql中的Limit语句
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {Object} result.list 记录集合
 * */
function objectList() {
}

/**
 * @api {put} /object/id/:objectId 5.详情
 * @apiVersion 0.0.1
 * @apiName Fetch Object Detail
 * @apiGroup Object
 *
 * @apiDescription 删除某个类
 *
 * @apiParam {String} objectId   类Id
 *
 * @apiHeader {String} X-APP-ID 应用Id
 * @apiHeader {String} X-APP-KEY 应用操作码
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {Object} result.object 记录详情
 */
function objectDetail() {
}