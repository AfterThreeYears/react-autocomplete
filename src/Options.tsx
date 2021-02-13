import React, { FC, useCallback } from 'react'

interface Option {
  label: string;
  value: string
}

interface Props {
  options: Option[];
  onChange: (option: Option) => void;
}

const Options: FC<Props> = ({ options, onChange }) => {
  const handleClick = useCallback(
    (option) => () => {
      onChange(option)
    },
    [onChange],
  )
  return <ul>
    {options.map(option => <li key={option.value} onClick={handleClick(option)}>{option.label}</li>)}
  </ul>;
}

export default Options
