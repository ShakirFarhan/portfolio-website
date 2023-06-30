import React from 'react'

function GradientText({ text, className, style, tag }) {
  const Tag = tag || "span"
  const defaultStyle = {
    background: "linear-gradient(90deg, rgba(177,108,234,1) 14%, rgba(255,94,105,1) 46%, rgba(255,138,86,1) 75%, rgba(255,168,75,1) 97%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  }

  const mergedStyle = { ...defaultStyle, ...style }
  return (

    <Tag className={className} style={mergedStyle}>
      {
        tag === "span" ? <br /> : ""
      }
      {text}
    </Tag>
  )
}

export default GradientText