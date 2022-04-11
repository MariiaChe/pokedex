import PaginationItem from '@mui/material/PaginationItem';
import PropTypes from 'prop-types';

const paginationStyle = {
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center',
  margin: '20px 0'
};

function Pagination({ onPrevious, onNext, offset, total }) {
  return (
    <div style={paginationStyle}>
      <PaginationItem size="large" type="previous" onClick={onPrevious} disabled={offset === 0}/>
      <PaginationItem size="large" type="next" onClick={onNext} disabled={offset + 8 >= total}/>
    </div>
  )
};

Pagination.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Pagination;
