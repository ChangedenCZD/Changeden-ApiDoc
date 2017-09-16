#### 注册并登录一个BunnyDB账户[（用户Api）](https://bunnydb.changeden.net/#api-User)：
* 注册前，请先[检测用户名](https://bunnydb.changeden.net/#api-User-Check_Account)是否可用；
* 如果用户名可用，请尝试[注册](https://bunnydb.changeden.net/#api-User-Sign_Up)一个新的账号；
* 注册时，需要通过邮箱获取验证码，请尝试[发送注册验证码](https://bunnydb.changeden.net/#api-Email-Send_a_Sign_Up_Verification_Code)进行获取；
* 注册成功后（或已有账号），请尝试[登录](https://bunnydb.changeden.net/#api-User-Sign_In)；
* 登录成功后，请妥善保管[登录Api](https://bunnydb.changeden.net/#api-User-Sign_In)所返回的[accessToken]()；

#### 创建一个新的应用[（应用Api）](https://bunnydb.changeden.net/#api-Application)：
* 以下所有请求都需要传入一个Header（"X-TOKEN":"[登录Api](https://bunnydb.changeden.net/#api-User-Sign_In)所返回的[accessToken]()"）。
* [创建](https://bunnydb.changeden.net/#api-Application-Create_Application)一个应用；
* [修改](https://bunnydb.changeden.net/#api-Application-Update_Application)应用的一些参数；
* 获取该账号下的[所有应用](https://bunnydb.changeden.net/#api-Application-Application_List)；
* 获取某个应用的[详情](https://bunnydb.changeden.net/#api-Application-Application_Detail)，详情中会返回[appKey]()；
* 在操作[类](https://bunnydb.changeden.net/#api-Class)和在操作[记录](https://bunnydb.changeden.net/#api-Object)时需要用到某个应用对应的[appId]()与[appKey]()；
* [删除](https://bunnydb.changeden.net/#api-Application-Delete_Application)某个应用；

#### 在应用中添加一个类[（类Api）](https://bunnydb.changeden.net/#api-Class)：
* 以下所有请求都需要传入一个Header（"X-APP-ID":"某个应用的[appId]()","X-APP-KEY":"某个应用的[appKey]()"）。
* 注：目前同一个应用中，类名不能重复。
* [添加](https://bunnydb.changeden.net/#api-Class-Create_Class)一个类；
* [修改](https://bunnydb.changeden.net/#api-Class-Update_Class)类名；
* [删除](https://bunnydb.changeden.net/#api-Class-Delete_Class)某个类；
* 如果要去掉类中的某个字段，可尝试[删除键](https://bunnydb.changeden.net/#api-Class-Delete_Key_For_Class)；
* 获取某个应用中的[类列表](https://bunnydb.changeden.net/#api-Class-Fetch_Class)；
* 修改类中的某个字段名称，请使用[修改键](https://bunnydb.changeden.net/class/key/:classId)；

#### 在类中操作记录[（记录Api）](https://bunnydb.changeden.net/#api-Object)：
* 以下所有请求都需要传入一个Header（"X-APP-ID":"某个应用的[appId]()","X-APP-KEY":"某个应用的[appKey]()"）。
* [添加](https://bunnydb.changeden.net/#api-Object-Insert_Object)一个记录；
* [更新](https://bunnydb.changeden.net/#api-Object-Update_Object)已有的记录，可尝试添加更多字段；
* [删除](https://bunnydb.changeden.net/#api-Object-Delete_Class)某个记录；
* 获取某个类中的记录[列表](https://bunnydb.changeden.net/#api-Object-Fetch_Object_List)，可在请求体(request.body)中添加WHERE、GROUP BY、ORDER BY、LIMIT，等Sql语法;
* 获取某个记录[详情](https://bunnydb.changeden.net/#api-Object-Fetch_Object_Detail)；