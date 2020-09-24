import styled from "styled-components"
import media from "styled-media-query"

export const AvatarWrapper = styled.section`
  border-radius: 50%;
  height: 15rem;
  margin: auto;
  width: 15rem;

  ${media.lessThan("large")`
    height: 3rem;
    width: 3rem;
    margin-top: -7px;
  `}
`
