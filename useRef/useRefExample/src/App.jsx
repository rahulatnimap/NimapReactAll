import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const childRef = useRef(null)
  var scrollHeight = document.body.scrollHeight
  var scrollWidth = document.body.scrollWidth

  const [view , setView] = useState(false)
  const [ bscroll , setBscroll] = useState(false)
  const [ lscroll , setLscroll] = useState(false)

  useEffect(() => {
    childRef.current = childRef.current.getBoundingClientRect()

    console.log('ref.current', childRef.current)
    console.log("Initial scrollHeight:", scrollHeight)
    console.log("Initial scrollWidth:", scrollWidth)


    if(childRef.current.bottom > scrollHeight){
      setBscroll(true)
    } 
    if(childRef.current.left > scrollWidth){
      setLscroll(true)}
  }, [])

  const handleHover = (e) => {
    e.stopPropagation()
    setView(prev => !prev)
  }

  return (
    <>
    <div className='container'>
      <div onMouseEnter={handleHover} onMouseLeave={handleHover}  className='box'>innerbox</div>
      <div ref={childRef}  style={{ visibility : !view ? "hidden" : "visible" , marginTop : bscroll ? "-300px" : "0px" }}  className='hover' >box after hover</div>
    </div>
    </>
  )
}

export default App
