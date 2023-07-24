/* eslint-disable react/prop-types */
import Filters from './Filters';

function Header({ changeFilters }) {

  return (
    <header>
      <h1>Library</h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}

export default Header
