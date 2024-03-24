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

---

## next.config.js で解決する理由

### １：エラーの内容は、`./out` ディレクトリが見つからない、ということ

→つまり、configファイルに記述した、`output: 'export',`が読み込まれていない。。。

→なぜか？

### Github Actions テンプレのワークフローの`Setup Pages`が原因

原因は、ここの部分：
```
    - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          # Automatically inject basePath in your Next.js configuration file and disable
          # server side image optimization (https://nextjs.org/docs/api-reference/next/image#unoptimized).
          #
          # You may remove this line if you want to manage the configuration yourself.
          static_site_generator: next
```

ここでやっていることは、basePath（デプロイ先のPagesのURL）を自動で挿入してくれる処理。

ここに問題があった。：https://github.com/actions/configure-pages

```
case 'next':
      // Next does not want a trailing slash
      path = removeTrailingSlash(path)

      return {
        configurationFile: generatorConfigFile || './next.config.js',
        blankConfigurationFile: `${__dirname}/blank-configurations/next.js`,
        properties: {
          // Configure a base path
          basePath: path,

          // Disable server side image optimization too
          // https://nextjs.org/docs/api-reference/next/image#unoptimized
          'experimental.images.unoptimized': true,
          // No longer experimental as of Next.js v12.3.0
          'images.unoptimized': true
        }
      }
```

- configファイルが、generatorConfigFileか、`./next.config.js`となっている。
- generatorConfigFileに関しては、[こちら](https://github.com/actions/configure-pages/blob/main/src/context.js#L8)にて、`generator_config_file`の値を読み取っている。
  - アクション入力は、core.getInputで読み取ることができます。: https://github.com/actions/toolkit/tree/master/packages/core

つまり、`generator_config_file`が指定されていれば、それを設定ファイルとして検出し、basePathに関する情報を書き込む。
何も指定されていなければ、`./next.config.js`に書き込む。という処理になっている。

`create-next-app`では、next.config.mjsがデフォルトで作成されるので、注意が必要！

なので、next.config.mjs の場合は、下記のオプションを指定しないといけない。
```
generator_config_file: next.config.mjs
```

この指定をしないと、next.config.mjsがあるのに、next.config.jsが作成され、元のnext.config.mjsの内容が反映されなくなる。

なので、`output: 'export',`が読み込まれていない。。。これによって、outディレクトリがエクスポートされず、outディレクトリが見つからないというエラーが出る！

### まとめ

- Next.js V14.1.3 を、Github Pagesにデプロイするには、大きく２つの方法がある。
- どちらも用意されたNext.jsデプロイようのテンプレをベースに：
1. next.config.js ファイルで、`output: 'export',`と、画像のbasePathを指定する
1. next.config.mjs ファイルの場合、上記に加えて、アクションズのワークフロー（nextjs.yml）に、`generator_config_file: next.config.mjs`を追加する

そして、Next.js V14.1.3現時点では、`create-next-app`では、next.config.mjsがデフォルトで作成されるので、注意が必要！


### おまけ

Github Actipnsのバッジも入手して、貼り付けることができる！
