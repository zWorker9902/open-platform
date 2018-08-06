const Mock = require('mockjs');

module.exports = {
  "/test/abc": function (){
    const data = Mock.mock({
      'list|10-10': [ {
        'id|1-100': 1,
        name: Mock.Random.cname(),
        'age|18-60': 1,
        'details': '说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明',
      } ]
    })
    return data.list
  },
  "/operation/partners/sdk/list": function (){
    return {
      "success": true,
      "result": {
        "totalNum": 8,
        "sdkInfos": [
          {
            "id": 1,
            "language": "java",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 103829,
            "name": "zcy-open-java-sdk",
            "description": "java sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          },
          {
            "id": 2,
            "language": "C++",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 38940,
            "name": "zcy-open-c++-sdk",
            "description": "C++ sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          },
          {
            "id": 3,
            "language": "Php",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 4381947,
            "name": "zcy-open-php-sdk",
            "description": "Php sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          },
          {
            "id": 4,
            "language": "C#",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 103829,
            "name": "zcy-open-c#-sdk",
            "description": "C# sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          },
          {
            "id": 5,
            "language": "java",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 103829,
            "name": "zcy-open-java-sdk",
            "description": "java sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          },
          {
            "id": 6,
            "language": "java",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 103829,
            "name": "zcy-java-php-sdk",
            "description": "java sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          },
          {
            "id": 7,
            "language": "KONG",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 103829,
            "name": "zcy-open-kong-sdk",
            "description": "KONG sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          },
          {
            "id": 8,
            "language": "JavaScript",
            "version": "2.1.0",
            "downloadUrl": "http://rap.cai-inc.com/workspace/myWorkspace.do?projectId=170#4188",
            "size": 103829,
            "name": "zcy-open-javascript-sdk",
            "description": "JavaScript sdk新增加网络监测和侦检测，优化数据结构和世界杯打火机的共和国我的 v 饿啊剧的时光",
            "lastOperatorId": 2330,
            "lastOperatorName": "张三",
            "createTime": 1531139509000,
            "updateTime": 1531139512000
          }
        ]
      },
      "code": null,
      "message": null
    }
  },

}
