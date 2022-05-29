// IMPORT
// hooks
import { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { addGoal } from '../../../features/goalsSlice';

///

const useNewGoal = () => {
  const dispatch = useDispatch();
  const [addGoalText, setAddGoalText] = useState('');

  const handleAddGoalTextChange = (e) => {
    setAddGoalText(e.target.value);
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (addGoalText.trim() !== '') {
      const formData = { title: addGoalText };
      dispatch(addGoal(formData));
      setAddGoalText('');
    } else return;
  };

  return { handleAddGoal, handleAddGoalTextChange, addGoalText };
};

export default useNewGoal;
