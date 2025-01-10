# s19514tt-template

自分で使う用の(自称)最強のフロントエンド+バックエンドのテンプレートです。

## 使い方

### VSCode用の設定をコピー

```bash
mv ./..vscode/ ./.vscode/
```

### 必要に応じてMongoDBをDockerで起動

compose.ymlのMongo部分のコメントアウトを外して、以下のコマンドを実行

```bash
docker-compose up -d mongo
```
