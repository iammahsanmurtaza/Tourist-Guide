import MyIcon from './MyIcon.jsx'
import Text1 from './Text1.jsx'
export default function Header () {
  return (
    <>
      <div className='w-full flex justify-center pt-6 px-4 bg-[#f4595e] border border-black'>
        <div className='flex items-center gap-3 text-white pb-6'>
          <MyIcon />
          <Text1 />
        </div>
      </div>
    </>
  )
}
