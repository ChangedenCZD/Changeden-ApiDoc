/**
 * @api {put} /app/ 1.创建
 * @apiVersion 0.0.1
 * @apiName Create Application
 * @apiGroup Application
 *
 * @apiDescription 创建应用
 *
 * @apiParam {String} appName   应用名
 *
 * @apiHeader {String} X-TOKEN 登录所获取的应用操作权限
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.userId 用户Id
 * @apiSuccess {Object} result.application 用户Id
 * @apiSuccess {String} result.application.appId 应用Id
 * @apiSuccess {String} result.application.appName 用户名
 * @apiSuccess {String} result.application.appKey 应用操作码
 * @apiSuccess {String} result.application.appSecret 应用最高权限码
 */
function createApplication() {
}

/**
 * @api {put} /app/:appId 2.修改
 * @apiVersion 0.0.1
 * @apiName Update Application
 * @apiGroup Application
 *
 * @apiDescription 修改应用
 *
 * @apiParam {String} appId   应用Id
 * @apiParam {String} appName   应用名
 *
 * @apiHeader {String} X-TOKEN 登录所获取的应用操作权限
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.appId 应用Id
 */
function updateApplication() {
}

/**
 * @api {get} /app/ 3.列表
 * @apiVersion 0.0.1
 * @apiName Application List
 * @apiGroup Application
 *
 * @apiDescription 获取应用列表
 *
 * @apiExample 例子:
 * curl GET https://bunnydb.changeden.net/app/
 *
 * @apiHeader {String} X-TOKEN 登录所获取的应用操作权限
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.userId 用户Id
 * @apiSuccess {Object[]} result.list 应用列表
 * @apiSuccess {String} result.list.appId 应用Id
 * @apiSuccess {String} result.list.name 应用名
 * @apiSuccess {String} result.list.appKey 应用操作码
 * @apiSuccess {String} result.list.appSecret 应用最高权限码
 * @apiSuccess {String} result.list.creatorId 应用创建者Id
 * @apiSuccess {Number} result.list.status 应用状态
 * @apiSuccess {Date} result.list.createAt 应用创建时间
 * @apiSuccess {Date} result.list.updateAt 应用更新时间
 */
function applicationList() {
}

/**
 * @api {get} /app/:appName 4.详情
 * @apiVersion 0.0.1
 * @apiName Application Detail
 * @apiGroup Application
 *
 * @apiDescription 获取应用详情，尚未完成
 *
 * @apiParam {String} appName   应用名
 *
 * @apiHeader {String} X-TOKEN 登录所获取的应用操作权限
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.account 用户名
 * @apiSuccess {String} result.userId 用户Id
 */
function applicationDetail() {
}
/**
 * @api {delete} /app/:appId 5.删除
 * @apiVersion 0.0.1
 * @apiName Delete Application
 * @apiGroup Application
 *
 * @apiDescription 删除应用，尚未完成
 *
 * @apiParam {String} appId   应用Id
 *
 * @apiHeader {String} X-TOKEN 登录所获取的应用操作权限
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 * @apiSuccess {String} result.userId 用户Id
 */
function deleteApplication() {
}
