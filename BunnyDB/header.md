#BunnyDB使用教程

## 注册并登录一个BunnyDB账户[（用户Api）](https://bunnydb.changeden.net/#api-User)：
* 注册前，请先[检测用户名](https://bunnydb.changeden.net/#api-User-Check_Account)是否可用；
* 如果用户名可用，请尝试[注册](https://bunnydb.changeden.net/#api-User-Sign_Up)一个新的账号；
* 注册成功后（或已有账号），请尝试[登录](https://bunnydb.changeden.net/#api-User-Sign_In)；
* 登录成功后，请妥善保管[登录Api](https://bunnydb.changeden.net/#api-User-Sign_In)所返回的[accessToken]()；

## 创建一个新的应用[（应用Api）](https://bunnydb.changeden.net/#api-Application)：
* 以下所有请求都需要传入一个Header（"X-TOKEN":"[登录Api](https://bunnydb.changeden.net/#api-User-Sign_In)所返回的[accessToken]()"）
* [创建](https://bunnydb.changeden.net/#api-Application-Create_Application)一个应用；
* [修改](https://bunnydb.changeden.net/#api-Application-Update_Application)应用的一些参数；
* 获取该账号下的[所有应用](https://bunnydb.changeden.net/#api-Application-Application_List)；
* 获取某个应用的[详情](https://bunnydb.changeden.net/#api-Application-Application_Detail)，详情中会返回[appKey]()；
* 在操作[类](https://bunnydb.changeden.net/#api-Class)和在操作[记录](https://bunnydb.changeden.net/#api-Object)时需要用到某个应用对应的[appId]()与[appKey]()；
* [删除](https://bunnydb.changeden.net/#api-Application-Delete_Application)某个应用；

## 在应用中新建一个类[（类Api）](https://bunnydb.changeden.net/#api-Class)：
*
*
*
*
*
*