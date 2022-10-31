/* eslint-disable no-unused-vars */
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from 'react-router-dom'

import './index.css'

const HomeMovieItems = props => {
  const {eachMovie} = props
  const {title, posterPath, id} = eachMovie
  return (
    <Link to={`/movies/${id}`}>
      <li>
        <img className="thumbnail-img" alt={title} src={posterPath} />
      </li>
    </Link>
  )
}
export default HomeMovieItems
