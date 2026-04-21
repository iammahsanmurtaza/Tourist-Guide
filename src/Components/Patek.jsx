export default function Patek () {
  const date = new Date('2026-04-20')
  const date1 = new Date('2026-06-20')
  return (
    <>
      <div className='px-4 sm:px-6 md:px-10 mt-10'>
        <div className='flex flex-col md:flex-row items-center gap-6'>
          <img
            src='https://patek-res.cloudinary.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/202455-51891'
            alt='Patek Phillip'
            className='w-full max-w-sm md:w-80 rounded-2xl object-cover'
          />

          <div className='text-center md:text-left'>
            <div className='flex flex-col md:flex-row gap-6 '>
              <h5 className='text-lg md:text-xl font-semibold'>SWITZERLAND</h5>
              <a
                href='https://maps.app.goo.gl/bwzDwg8eMCNofB5u5'
                target='_blank'
                rel='noopener noreferrer'
                className='
                    pt-0.5
                    text-gray-700
                    transition-colors duration-300
                    hover:text-[#25f4ee]
                    active:text-[#f4595e]
                    visited:text-red-500
                    '
              >
                Go to location
              </a>
            </div>
            <div
              className='
                pt-1
                font-inter
                text-2xl sm:text-3xl md:text-3xl lg:text-3xl
                font-bold
                leading-tight
            '
            >
              Patek Phillip
            </div>
            <div
              className='pt-2 sm:pt-6
              text-sm sm:text-base
              font-bold
              text-gray-700
              font-inter
              tracking-wide'
            >
              {date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}{' '}
              -{' '}
              {date1.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
            <div
              className=' 
              max-w-xl
              font-[cursive]
              italic
              
              text-[10px] sm:text-xs md:text-sm
              font-medium
              
              text-gray-500
              
              leading-relaxed
              tracking-normal
              '
            >
              Patek Philippe speaks the language of legacy. Forged with 
              unmatched mastery, it turns time into art and heritage 
              into elegance. Every detail whispers perfection, every 
              movement carries noble precision. It is not merely worn, 
              but inherited—an emblem of class, beauty, and timeless 
              distinction beyond generations.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
