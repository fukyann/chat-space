# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: ralse, unique: true|
|pass|string|null: ralse, unique: true|

### Association

- has_many :massages
- has_many :groups, throught: :groups_users
- has_many :groups_users

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
 - has_many :massages
 - has_many :users, throught: :groups_users
 - has_many :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## massageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|imge|string|
|user_id|integer||null: false, foreign_key: true|
|group_id|integer||null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
