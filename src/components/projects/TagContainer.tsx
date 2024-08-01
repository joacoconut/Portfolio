import "./tags.css"

interface Props {
    children: JSX.Element | JSX.Element[];
    noMargin?:boolean;
}

const TagContainer = ({children, noMargin }:Props) => {
  return (
      <div className={`tags-container  ${noMargin && 'no-margin'}`}>
        {children}
      </div>
  );
};

export default TagContainer;
