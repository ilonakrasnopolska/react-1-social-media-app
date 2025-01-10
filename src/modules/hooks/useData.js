import { useSelector } from 'react-redux';

const useData = (key) => {
  return useSelector(state => state[key]);
};

export default useData;
