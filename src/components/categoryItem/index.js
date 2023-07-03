import './index.css'

const CategoryItem = props => {
  const {categoryDetails, getTheItem} = props
  const {displayText, tabId} = categoryDetails

  const selectTheCategory = () => {
    getTheItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        onClick={selectTheCategory}
        className="category-item"
      >
        {displayText}
      </button>
    </li>
  )
}

export default CategoryItem
