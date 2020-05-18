import React from "react"

import AnchorLink from "../components/mdx/anchor-link" // TODO
import SEO from "../components/seo"

import DocsTitle from "../components/docs-title"

const NotFoundPage = () => (
  <>
    <SEO title="Not found"/>
    <h1>Not found</h1>
    <p>Unfortunately, the page you requested cannot be found.</p>
    {/* TODO - get className from somewhere? */}
    <p><AnchorLink href="/">Go to <DocsTitle/> docs home</AnchorLink></p>
  </>
)

export default NotFoundPage
