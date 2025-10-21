import React, { useEffect } from 'react'

const Title = ({
    name = "Chatify",
    description = "this is a chat app named chatify"
}) => {
  useEffect(() => {
    // set document title
    document.title = name

    // update or create meta description in head
    let meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    } else {
      meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
  }, [name, description])

  // do not render <title> or raw <meta> in the component body
  return null
}

export default Title
