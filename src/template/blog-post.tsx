import React from 'react'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({pageContext}) => {
console.log(pageContext)
return(
    <div>
        {pageContext.title}
        <h1>{pageContext.publishDate}</h1>
        {documentToReactComponents(pageContext.detail.json) }
    </div>
)
}