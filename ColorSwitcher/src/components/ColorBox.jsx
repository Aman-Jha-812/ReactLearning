

const ColorBox = ({color}) => {
  return (
    <div style={{
      backgroundColor:color,
    }}className='w-[300px] h-[300px] rounded-2xl content-center text-emerald-400 text-3xl border-2 '>
      {color.toUpperCase()}
    </div>
  )
}

export default ColorBox
