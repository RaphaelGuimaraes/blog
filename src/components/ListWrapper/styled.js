import styled from "styled-components"

export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    padding: 10px;
    transition: background 0.5s;
  }
`
