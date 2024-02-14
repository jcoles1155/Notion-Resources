import Header from '../../components/header'
import ExtLink from '../../components/ext-link'
import Features from '../../components/features'
import sharedStyles from '../../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>JC's Notion Resources</h1>
        <h2>
          Blazing Fast Notion Blog with Next.js'{' '}
          <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            SSG
          </ExtLink>
        </h2>

        <Features />

        <div className="explanation">
          <p>
            I've been storing resources from Youtube, Feedly, and any other
            channels I can get my hands on for years now, and shoving it all
            into Notion. Now with this site, I'm able to easily share!
          </p>
          <p>
            This is a statically generated{' '}
            <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
            <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
            is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>
            . It leverages some upcoming features in Next.js like{' '}
            <ExtLink href="https://github.com/vercel/next.js/issues/9524">
              SSG support
            </ExtLink>{' '}
            and{' '}
            <ExtLink href="https://github.com/vercel/next.js/issues/8626">
              built-in CSS support
            </ExtLink>{' '}
            which allow us to achieve all of the benefits listed above including
            blazing fast speeds, great local editing experience, and always
            being available!
          </p>
        </div>
      </div>
      <footer>
        <span>Deploy your own!</span>
        <ExtLink href="https://vercel.com/new/git/external?repository-url=https://github.com/ijjk/notion-blog/tree/main&project-name=notion-blog&repository-name=notion-blog">
          <img
            src="https://vercel.com/button"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
      </footer>
    </>
  )
}
