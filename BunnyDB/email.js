/**
 * @api {post} /email/reg/:account 1.注册验证码
 * @apiVersion 0.0.1
 * @apiName Send a Sign Up Verification Code
 * @apiGroup Email
 *
 * @apiDescription 发送注册验证码
 *
 * @apiParam {String} account 用户名
 * @apiParam {String} email 验证码接收邮箱（必须与注册时填的邮箱一致）
 *
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {String} message 响应信息
 * @apiSuccess {Date} timeStamp 处理结束时间
 * @apiSuccess {Date} startTime 请求开始时间
 * @apiSuccess {Object} result 返回结果
 */
function sendRegEmail() {
}
