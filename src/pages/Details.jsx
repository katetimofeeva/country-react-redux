import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useEffect } from 'react';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails } from '../store/details/details-selectors'
import {loadCountryByName, resetCountry} from '../store/details/details-actions'


export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const {country, error, status}=useSelector(selectDetails)
  
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name))
    return ()=>{ dispatch(resetCountry)}
  }, [name, dispatch])
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h3>Loading...</h3>}
      {status === 'error' && <h3>{error}</h3>}
      {country && <Info push={navigate} {...country} />}
    </div>
  );
};
