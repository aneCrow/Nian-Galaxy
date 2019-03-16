# Nian-Galaxy
###### 运行在[beaker browser](https://beakerbrowser.com/)上的记本管理APP
>示例页面
dat://

---
### API

#### NianLib.user
##### .setProfile(opt?)
###### return void
- `opt.name` String.必须，用户名称
- `opt.bio`
- `opt.avatar`
- `opt.contact`
- `optnotes`
  - `title`
  - `url`
  
``
NianLib.user.setProfile({
  name: 'boo',
  bio: 'My secret Nian user',
  arvatar: 'dat://boo/img.jpg',
  contact: 'boo@bar.com , dat://boo'
})
``
##### .getProfile()
###### return Object
##### .updateProfile(opt?)
###### return void
##### .addNote(url)
###### return void
##### .removeNote(url) //TODO
###### return void
##### .cleanNote() //TODO
###### return void

#### NianLib.note

---
### User
##### localStorage/nian-userProfiles数据结构
###### 存储着基本信息，留言或回复时留下的数据
``
{
  name: 'foo',          //必须
  bio: 'bar',
  avatar: 'IMGurl',
  contact: 'url'|'email or anything',
  notes: [{
    title: 'baz',
    url: 'DATurl'       //必须
  }]
}
``

---
### Note Archive

##### 总文件结构
``
/dat.json               - Beaker metadata file
/thumb.(jpg|png)        - 缩略图(avatar)256x256
/cover.(jpg|png)        - 封面文件
/data/noteProfiles.json    - 记本 metadata file
/data/feed/             - Contains unwalled.garden/post records
/data/comments/         - Contains unwalled.garden/comment records
/data/votes/            - Contains vote records (see "the votes folder")
/data/known-sites/      - Contains cached copies of referenced sites' metadata
``
##### /data/noteProfiles.json数据结构
> createdAt =()=> (new Date()).toISOString
``
{
  "createdAt": "2018-12-07T02:52:11.947Z",
  "title": "foo",
  "author": "bar",
  "description": "baz"
  }
}
``
##### /data/feed/{createdAt}.json数据结构
``
{
  "createdAt": "2018-12-07T02:52:11.947Z",
  "content": {
    "body": "foo"
  }
}
``