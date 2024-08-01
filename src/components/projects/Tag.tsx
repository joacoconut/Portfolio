import "./tags.css"
import { validateTypes } from '../../interfaces/interfaces';

interface TagProps {
  type: validateTypes;
}

const Tag = ({ type }: TagProps) => {
  return (
    <>
      <span className={`tag ${type}`}>
        {type}
      </span>
    </>
  );
};

export default Tag;
