import { useAppDispatch, useAppSelector } from '@/helpers/react-redux';
import { incrementByAmount } from '@/model/app';

import checked from '../images/checked@2x.png';
import './demo.scss';

interface IProps {
  a?: string;
}

const Demo: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((v) => v.app.value);

  console.log(count, '<-- count');
  const onClick = () => {
    dispatch(incrementByAmount(Math.random()));
  };

  return (
    <div styleName="hello">
      Hello React!
      <img src={checked} alt="" />
      <div className="globals">{count}</div>
      <div styleName="stylename">styleName</div>
      <button type="button" onClick={onClick}>click me!</button>
    </div>
  );
};

export default Demo;
