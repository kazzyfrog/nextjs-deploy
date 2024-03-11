This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next.js V14.1.3 を、Github Pagesにデプロイする

> Github Actionsを用いて、ビルドプロセスを自動化するデモプロジェクト！

これに関する、大まかな流れは[こちら](https://zenn.dev/pino0701/articles/nextjs_github_pages)の記事の通りです。

## 注意点：
- [basePath](https://nextjs.org/docs/app/api-reference/next-config-js/basePath)は、サブディレクトリにデプロイする際に設定する必要がありますが、GitHub Actionsのワークフローファイルで自動的に追加されるため、next.config.jsでbasePathは設定してません。
  - ただし、Imageコンポーネントは、別途手動でbasePath付きに変換する必要があります。
- GitHub ActionsのNext.jsテンプレートは、最新のAppRouterに対応していないので書き換える必要があります。
  - 具体的には、App Routerでは`next export`が必要ないため、このステップを消します。
  - `next build`で [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) が行われるように、`next.config.js`に変更を加えます：`nextConfig = {output: "export",}`
- 最新バージョン(V14.1.3)では、デフォルトで`next.config.mjs`が使われているので、`next.config.js`に変更する必要があります。
  - 書き換えないと、buildの以下のステップでエラーをスローします。：
  ```
  // nextjs.yml
  
  - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  ```
  ```
  // error

  tar: dist: Cannot open: No such file or directory
  tar: Error is not recoverable: exiting now
  Error: Process completed with exit code 2.
  ```
