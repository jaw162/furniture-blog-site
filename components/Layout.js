import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from './Hero'

export default function Layout({ title, isHome, blog, keywords, description, children }) {
  return (
    <div data-theme='light'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Hero isHome={isHome} blog={blog} />
      {children}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: 'Furniture Blog',
    keywords: 'furniture modern stylish blog company-name',
    description: 'Furniture Store blog made using Nextjs and Strapi headless CMS'
}