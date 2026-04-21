import Country from './Country.jsx'
import data from './data.js'
export default function EntryComponent () {
  const dataComponent = data.map(data => {
    return (
      <Country
        country={data.country}
        watch={data.watch}
        map1={data.googleMapsLink}
        image={data.img.src}
        text1={data.text1}
      />
    )
  })
  return (
    <>
      {dataComponent}
    </>
  )
}
