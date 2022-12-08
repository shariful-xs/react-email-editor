import React, { useState } from "react";
import sanitizeHtml from "sanitize-html";
import { useNode } from "@craftjs/core";

const HtmlGenerate = () => {
  const {
    actions: { setProp },
  } = useNode();

  const [html, setHtml] = useState(
    `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`
  );

  // config sanitize
  const sanitizeConf = {
    allowedTags: [
      "address",
      "article",
      "aside",
      "footer",
      "header",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hgroup",
      "main",
      "nav",
      "section",
      "blockquote",
      "dd",
      "div",
      "dl",
      "dt",
      "figcaption",
      "figure",
      "hr",
      "li",
      "main",
      "ol",
      "p",
      "pre",
      "ul",
      "a",
      "abbr",
      "b",
      "bdi",
      "bdo",
      "br",
      "cite",
      "code",
      "data",
      "dfn",
      "em",
      "i",
      "kbd",
      "mark",
      "q",
      "rb",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "time",
      "u",
      "var",
      "wbr",
      "caption",
      "col",
      "colgroup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr",
    ],
    disallowedTagsMode: "discard",
    allowedAttributes: {
      a: ["href", "name", "target"],
      // We don't currently allow img itself by default, but
      // these attributes would make sense if we did.
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
    },
    // Lots of these won't come up by default because we don't allow them
    selfClosing: [
      "img",
      "br",
      "hr",
      "area",
      "base",
      "basefont",
      "input",
      "link",
      "meta",
    ],
    // URL schemes we permit
    allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,
    enforceHtmlBoundary: false,
  };

  const handleChange = (event) => {
    setHtml(event.target.value);
  };

  const sanitize = () => {
    setHtml(sanitizeHtml(html, sanitizeConf));
    setProp((props) => (props.genearateHTML = html));
  };

  return (
    <textarea
      style={{
        width: "100%",
        height: "150px",
        padding: "12px 20px",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f8f8f8",
        fontSize: "16px",
        resize: "none",
        outline: "1px solid #ccc",
      }}
      value={html}
      onChange={handleChange}
      onBlur={sanitize}
    />
  );
};

export default HtmlGenerate;
