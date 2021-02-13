import { FC, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const Protal: FC = (props) => {
  const rootRef = useRef<HTMLDivElement>(document.createElement('div'));
  useEffect(() => {
    const current = rootRef.current;
    if (current) {
      document.body.append(current);
    }
    return () => {
      if (current) {
        document.body.removeChild(current);
      }
    }
  }, [])
  return ReactDOM.createPortal(
    props.children,
    rootRef.current
  )
}

export default Protal
