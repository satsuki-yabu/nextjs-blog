

import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

// name変数に代入
const name = 'Satsuki'
// siteTitleにサイト名を代入
export const siteTitle = 'Next.js Sample Website'

// ここのchildrenとhomeはどこから？
export default function Layout({ children, home }) {
  return (
    // layoutの中を作成している。classNameにstyles.containerを代入、記法はJSX、内部でJavascriptを使うときは{}
    // →layout.module.cssをきかせる。
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* metaタグはなんだろう？？ */}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              // 複数使うので文字列リテラルで囲む
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  // 写真にstyleをきかせている、二つある。文字列リテラルを使っている。
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            {/* classNameに、適用されるcssを記載して印をつける。
            その名前と同じ箇所の */}
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}