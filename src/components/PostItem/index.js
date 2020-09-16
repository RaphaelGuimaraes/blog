import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { getThemeColor, getCategoryBg } from "../../utils/theme"

import * as S from "./styled"

const PostItem = ({
  slug,
  category,
  date,
  image,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
    to={slug}
  >
    <Img fluid={image.childImageSharp.fluid} />
    <S.PostItemWrapper>
      <S.PostItemTag background={getCategoryBg(category)}>
        {category}
      </S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <S.PostItemDate>
          {date} - {timeToRead} min de leitura
        </S.PostItemDate>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.shape,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
