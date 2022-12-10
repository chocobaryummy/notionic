// https://react-svgr.com/playground/
import * as React from 'react'

const NotionAvatar = (props) => (
  <svg
    style={{
      justifyContent: 'center',
      alignSelf: 'center',
      transform: 'scale(-1,1)'
    }}
    viewBox='0 0 1500 1500'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    {...props}
  >
    <switch>
      <g>
        <image
          style={{
            overflow: "visible",
          }}
          width={441}
          height={625}
          xlinkHref="data:image/jpeg;base64,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 lf/Z"
          transform="matrix(.24 0 0 .24 42 214.8)"
        />
      </g>
    </switch>
  </svg>
)

export default NotionAvatar
