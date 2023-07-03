import './index.css'

const CategoryImages = props => {
  const {userDetails, markTheScore} = props
  const {thumbnailUrl, id} = userDetails

  const selectTheImage = () => {
    markTheScore(id)
  }

  return (
    <li>
      <button type="submit" onClick={selectTheImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="match-image" />
      </button>
    </li>
  )
}

export default CategoryImages
