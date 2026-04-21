import Japan from './Japan.jsx'
import Patek from './Patek'
import RGM from './RGM.jsx'
import Country from './Country.jsx'
export default function EntryComponent () {
  return (
    <>
      <Country
        country='SwitzerLand'
        watch='Patek Phillip'
        map='https://maps.app.goo.gl/bwzDwg8eMCNofB5u5'
        image='https://patek-res.cloudinary.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/202455-51891'
        text1={`Patek Philippe speaks the language of legacy. Forged with
              unmatched mastery it turns time into art and heritage
              into elegance. Every detail whispers perfection, every
              movement carries noble precision. It is not merely worn,
              but inherited—an emblem of class, beauty, and timeless
              distinction beyond generations.`}
      />
      <Country 
        country='Japan'
        watch='Grand Seiko'
        map='https://maps.app.goo.gl/SqxHUFJrxQEx4ZRX7'
        image='https://www.grand-seiko.com/us-en/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/10/SBGM221G/SBGM221G.png'
        text1={`Grand Seiko wears silence like royalty. Every line is sculpted
              with grace, every movement beats with unwavering trust. It does
              not beg for attention; it earns admiration through pure
              refinement. Beauty lives in its details, class in its presence,
              and perfection in every second it carries forward.`}
      />
      <Country 
        country='America'
        watch='RGM'
        map='https://maps.app.goo.gl/oSAaoc24zcLBRgZz65'
        image='https://images.squarespace-cdn.com/content/v1/550b2072e4b0d3cbec5358d7/1651083460433-M8GNPAC686MCST5857K4/ENAMEL_455_08_A.jpg?format=1500w'
        text1={`RGM carries the soul of true American horology. Crafted with 
              passion and precision, it blends tradition with bold individuality. 
              Every detail reveals honest artistry, every movement reflects 
              steadfast reliability. It stands apart with quiet confidence—where 
              beauty meets craftsmanship, and class is expressed through character,
              heritage, and timeless mechanical excellence.`}
      />
    </>
  )
}
