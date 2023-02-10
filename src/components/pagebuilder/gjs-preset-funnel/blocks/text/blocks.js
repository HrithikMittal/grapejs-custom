import { renderBlock } from "../../helpers";

export function basicTextBlock({ category }) {
  return {
    category: category,
    label: "Text",
    icon: `<svg viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.0344 29L20.3544 21.88H8.35438L5.71438 29H0.634375L11.6744 0.639998H17.2344L28.2744 29H23.0344ZM14.3544 5.84L10.0344 17.44H18.6744L14.3544 5.84ZM30.2766 23.72C30.2766 22.0667 30.8099 20.7467 31.8766 19.76C32.9699 18.7467 34.3966 18.1067 36.1566 17.84L41.1566 17.08C42.1166 16.9467 42.5966 16.48 42.5966 15.68C42.5966 14.8 42.2899 14.0933 41.6766 13.56C41.0632 13 40.1432 12.72 38.9166 12.72C37.7432 12.72 36.8099 13.0533 36.1166 13.72C35.4232 14.36 35.0232 15.2 34.9166 16.24L30.6766 15.28C30.8632 13.52 31.7032 12.0267 33.1966 10.8C34.6899 9.54667 36.5832 8.92 38.8766 8.92C41.7032 8.92 43.7832 9.6 45.1166 10.96C46.4766 12.32 47.1566 14.0667 47.1566 16.2V25.88C47.1566 27.16 47.2366 28.2 47.3966 29H43.0766C42.9432 28.6 42.8766 27.7733 42.8766 26.52C41.5966 28.5733 39.5966 29.6 36.8766 29.6C34.9032 29.6 33.3032 29.0267 32.0766 27.88C30.8766 26.7067 30.2766 25.32 30.2766 23.72ZM37.7566 25.96C39.1966 25.96 40.3566 25.5733 41.2366 24.8C42.1432 24 42.5966 22.7067 42.5966 20.92V20.04L37.5166 20.8C35.7832 21.0933 34.9166 21.9733 34.9166 23.44C34.9166 24.1333 35.1699 24.7333 35.6766 25.24C36.1832 25.72 36.8766 25.96 37.7566 25.96Z" fill="#9A9797" />
  </svg>`,
    attributes: { class: "" },
    content: `<section className="bdg-sect">
    <h1 className="heading">Insert title here</h1>
    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </section>`,
    render: renderBlock
  };
}

export function headlineBlock({ category }) {
  return {
    category: category,
    label: "Headline",
    icon: `<svg viewBox="10 0 47.5 40" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <path d="M46.9772 29H42.1372V16.88H28.8172V29H24.0172V0.639998H28.8172V12.36H42.1372V0.639998H46.9772V29Z" fill="#9A9797" />
          </svg>`,
    attributes: {
      class: "font-semibold"
    },
    content: "<h1>This is a headline text</h1>",
    render: renderBlock
  };
}

export function linkBlock({ category }) {
  return {
    category: category,
    label: "Link Block",
    icon: ``,
    attributes: {},
    content: {
      type: "link",
      editable: false,
      droppable: true,
      style: {
        display: "inline-block",
        padding: "5px",
        "min-height": "50px",
        "min-width": "50px"
      }
    },
    render: renderBlock
  };
}

export function bulletListBlock({ category }) {
  return {
    category: category,
    label: "Bullet list",
    icon: ` <svg viewBox="0 0 109 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="5" fill="#9A9797" />
    <circle cx="5" cy="22" r="5" fill="#9A9797" />
    <circle cx="5" cy="39" r="5" fill="#9A9797" />
    <rect x="23" y="2" width="86" height="7" rx="3.5" fill="#9A9797" />
    <rect x="23" y="19" width="86" height="7" rx="3.5" fill="#9A9797" />
    <rect x="23" y="36" width="86" height="7" rx="3.5" fill="#9A9797" />
  </svg>`,
    attributes: {},
    content: {
      attributes: {
        className: "gjs-component"
      },
      tagName: "ul",
      type: "text",
      components: [
        {
          tagName: "li",
          type: "text",
          content: "list item"
        }
      ]
    },
    render: renderBlock
  };
}

export function quoteBlock({ category }) {
  return {
    category: category,
    label: "Quote",
    attributes: { class: "fa fa-quote-right" },
    content: `<blockquote className="quote">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
    </blockquote>`
  };
}

export function textBlock({ category }) {
  return {
    label: "Text",
    id: "block-text",
    icon: `<svg viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.0344 29L20.3544 21.88H8.35438L5.71438 29H0.634375L11.6744 0.639998H17.2344L28.2744 29H23.0344ZM14.3544 5.84L10.0344 17.44H18.6744L14.3544 5.84ZM30.2766 23.72C30.2766 22.0667 30.8099 20.7467 31.8766 19.76C32.9699 18.7467 34.3966 18.1067 36.1566 17.84L41.1566 17.08C42.1166 16.9467 42.5966 16.48 42.5966 15.68C42.5966 14.8 42.2899 14.0933 41.6766 13.56C41.0632 13 40.1432 12.72 38.9166 12.72C37.7432 12.72 36.8099 13.0533 36.1166 13.72C35.4232 14.36 35.0232 15.2 34.9166 16.24L30.6766 15.28C30.8632 13.52 31.7032 12.0267 33.1966 10.8C34.6899 9.54667 36.5832 8.92 38.8766 8.92C41.7032 8.92 43.7832 9.6 45.1166 10.96C46.4766 12.32 47.1566 14.0667 47.1566 16.2V25.88C47.1566 27.16 47.2366 28.2 47.3966 29H43.0766C42.9432 28.6 42.8766 27.7733 42.8766 26.52C41.5966 28.5733 39.5966 29.6 36.8766 29.6C34.9032 29.6 33.3032 29.0267 32.0766 27.88C30.8766 26.7067 30.2766 25.32 30.2766 23.72ZM37.7566 25.96C39.1966 25.96 40.3566 25.5733 41.2366 24.8C42.1432 24 42.5966 22.7067 42.5966 20.92V20.04L37.5166 20.8C35.7832 21.0933 34.9166 21.9733 34.9166 23.44C34.9166 24.1333 35.1699 24.7333 35.6766 25.24C36.1832 25.72 36.8766 25.96 37.7566 25.96Z" fill="#9A9797" />
      </svg>`,
    category: category,
    attributes: {
      title: "Enter text here"
    },
    content: {
      type: "text",
      attributes: {
        className: "gjs-component"
      },
      components: {
        type: "text",
        content: "Hello World"
      }
    },
    render: renderBlock
  };
}

export function audioBlock({ category }) {
  return {
    label: "Audio",
    icon: `<svg viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.855 30.9219C0.831 30.9219 0 31.7529 0 32.7759V45.1449C0 46.1689 0.831 46.9989 1.855 46.9989C2.879 46.9989 3.71 46.1679 3.71 45.1449V32.7759C3.711 31.7519 2.88 30.9219 1.855 30.9219Z" fill="#9A9797" />
    <path d="M7.26809 18.5547C6.24409 18.5547 5.41309 19.3847 5.41309 20.4097V45.1457C5.41309 46.1717 6.24409 47.0017 7.26809 47.0017C8.29209 47.0017 9.12309 46.1707 9.12309 45.1467V20.4097C9.12309 19.3847 8.29209 18.5547 7.26809 18.5547Z" fill="#9A9797" />
    <path d="M12.6792 24.7344C11.6552 24.7344 10.8242 25.5664 10.8242 26.5894V45.1424C10.8242 46.1664 11.6552 46.9964 12.6792 46.9964C13.7032 46.9964 14.5342 46.1654 14.5342 45.1424V26.5904C14.5342 25.5644 13.7032 24.7344 12.6792 24.7344Z" fill="#9A9797" />
    <path d="M18.0913 12.3672C17.0683 12.3672 16.2373 13.1972 16.2373 14.2222V45.1422C16.2373 46.1672 17.0683 46.9972 18.0913 46.9972C19.1153 46.9972 19.9463 46.1662 19.9463 45.1422V14.2222C19.9463 13.1972 19.1153 12.3672 18.0913 12.3672Z" fill="#9A9797" />
    <path d="M23.5044 0C22.4804 0 21.6494 0.831 21.6494 1.855V45.145C21.6494 46.169 22.4804 46.999 23.5044 46.999C24.5274 46.999 25.3594 46.168 25.3594 45.145V1.855C25.3594 0.831 24.5274 0 23.5044 0Z" fill="#9A9797" />
    <path d="M39.7339 24.7344C38.7109 24.7344 37.8799 25.5664 37.8799 26.5894V45.1424C37.8799 46.1664 38.7109 46.9964 39.7339 46.9964C40.7569 46.9964 41.5879 46.1654 41.5879 45.1424V26.5904C41.5899 25.5644 40.7589 24.7344 39.7339 24.7344Z" fill="#9A9797" />
    <path d="M45.145 12.3672C44.122 12.3672 43.291 13.1972 43.291 14.2222V45.1422C43.291 46.1672 44.122 46.9972 45.145 46.9972C46.169 46.9982 47 46.1672 47 45.1432V14.2232C47 13.1972 46.169 12.3672 45.145 12.3672Z" fill="#9A9797" />
    <path d="M28.9145 18.5547C27.8905 18.5547 27.0605 19.3847 27.0605 20.4097V45.1457C27.0605 46.1707 27.8905 47.0007 28.9145 47.0007C29.9385 47.0007 30.7685 46.1697 30.7685 45.1457V20.4097C30.7705 19.3847 29.9385 18.5547 28.9145 18.5547Z" fill="#9A9797" />
    <path d="M34.3267 37.1055C33.3027 37.1055 32.4727 37.9355 32.4727 38.9595V45.1445C32.4727 46.1685 33.3027 46.9985 34.3267 46.9985C35.3507 46.9985 36.1807 46.1675 36.1807 45.1445V38.9605C36.1837 37.9365 35.3517 37.1055 34.3267 37.1055Z" fill="#9A9797" />
  </svg>`,
    category: category,
    content: {
      type: "audio",
      activate: true,
      attributes: {
        style: `display: inline-block;width: 100%;`
      }
    },
    render: renderBlock
  };
}
