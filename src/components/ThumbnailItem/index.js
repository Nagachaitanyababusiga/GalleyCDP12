import './index.css'

const ThumbnailItem = props => {
  const {x, MakeChanges, isActiveTab} = props
  const {id, thumbnailUrl, thumbnailAltText} = x
  const change = () => {
    MakeChanges(id)
  }
  const effect = isActiveTab ? '' : 'blured'
  return (
    <li className="list-item">
      <img src={thumbnailUrl} alt={thumbnailAltText} onClick={change} />
      <div className={effect}> </div>
    </li>
  )
}
export default ThumbnailItem
