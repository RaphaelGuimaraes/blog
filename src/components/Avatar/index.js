import React from "react"
import { BigHead } from "@bigheads/core"

import * as S from "./styled"

const Avatar = () => (
  <S.AvatarWrapper>
    <BigHead
      accessory="roundGlasses"
      body="chest"
      circleColor="blue"
      clothing="shirt"
      clothingColor="black"
      eyebrows="leftLowered"
      eyes="happy"
      faceMask={false}
      faceMaskColor="white"
      facialHair="none"
      graphic="none"
      hair="short"
      hairColor="black"
      hat="none3"
      hatColor="blue"
      lashes
      lipColor="red"
      mask
      mouth="openSmile"
      skinTone="light"
    />
  </S.AvatarWrapper>
)

export default Avatar
