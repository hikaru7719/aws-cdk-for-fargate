# aws-cdk-for-fargate

aws-cdk を使って ECS の fargate 起動タイプを構築するサンプルです。

# 実行方法

```
$ git clone https://github.com/hikaru7719/aws-cdk-for-fargate.git
```

## app の依存ライブラリのインストール

```
$ cd app
$ yarn install
```

## cdk の依存ライブラリのインストール

```
$ cd cdk
$ yarn install
```

## cdk の初期化

```
$ cd cdk
$ yarn cdk bootstrap
```

## デプロイ

```
$ cd cdk
$ yarn cdk deploy
```

## スタックの削除

```
$ cdk destory
```
