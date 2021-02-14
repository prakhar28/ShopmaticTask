import React from 'react'
import { Text } from 'react-native'

const TextComponent = ({
  title,
  type,
  style,
  numberOfLines,
  children,
  lineHeight,
  textAlign
}) => (
  <Text
    numberOfLines={numberOfLines}
    allowFontScaling={false}
    style={[
      {
        fontSize: type?.fontSize,
        fontFamily: type?.fontFamily,
        color: type?.color,
        lineHeight: lineHeight,
        textAlign: textAlign
      },
      style
    ]}>
    {title}
    {children}
  </Text>
)

export default TextComponent
