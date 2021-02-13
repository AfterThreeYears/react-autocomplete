import React, { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Options from './Options';
import Protal from './Protal';

interface Props {
  options: {
    label: string;
    value: string
  }[],
  value: string;
  onChange: (value: string) => void;
}

const AutoComplete: FC<Props> = (props) => {
  const { options, onChange } = props;
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = inputRef.current;
    if (current) {
      const {
        left,
        top,
        height,
        width
      } = current.getBoundingClientRect();
      setStyle({
        position: 'absolute',
        border: '1px solid',
        top: top + height + document.documentElement.scrollTop,
        left: left,
        width: width
      });
    }
  }, []);


  const leftOptions = useMemo(() => {
    if (!inputValue) return [];
    return options.filter(option => option.label.includes(inputValue));
  }, [inputValue, options]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue],
  )

  const handleOptionsChange = useCallback(
    (option: { value: string; label: string }) => {
      setInputValue(option.label);
      onChange(option.value);
    },
    [onChange],
  )

  const handleFocus = useCallback(
    () => {
      setVisible(true);
    },
    [],
  )

  const handleBlur = useCallback(
    () => {
      setTimeout(() => {
        setVisible(false);
      }, 100);
    },
    [],
  )
  return (
    <div>
      <input ref={inputRef} value={inputValue} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      {visible && leftOptions.length
        ? <Protal>
            <section style={style}>
              <Options options={leftOptions} onChange={handleOptionsChange} />
            </section>
          </Protal>
        : null
       }
    </div>
  )
}

export default AutoComplete;