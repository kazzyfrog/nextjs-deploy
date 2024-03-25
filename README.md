[![Deploy Next.js site to Pages](https://github.com/kazzyfrog/nextjs-deploy/actions/workflows/nextjs.yml/badge.svg)](https://github.com/kazzyfrog/nextjs-deploy/actions/workflows/nextjs.yml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next.js V14.1.3 を、Github Pagesにデプロイする

> Github Actionsを用いて、ビルドプロセスを自動化するデモプロジェクト！

**詳細は次の記事に記載：**

https://zenn.dev/kazzyfrog/articles/8e24dfe951aad9

## ポイント

- Next.js V14.1.3 を、Github Pagesにデプロイするには、大きく２つの方法がある。
- どちらも、用意されたNext.jsデプロイ用のテンプレをベースに：
1. next.config.js ファイルで、`output: 'export',`と、画像のbasePathを指定する
1. next.config.mjs ファイルの場合、上記に加えて、アクションズのワークフロー（nextjs.yml）に、`generator_config_file: next.config.mjs`を追加する

Next.js V14.1.3現時点では、`create-next-app`では、next.config.mjsがデフォルトで作成されるので、注意が必要！

### おまけ

Github Actipnsのバッジも入手して、貼り付けることができる！
