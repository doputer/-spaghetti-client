import { Link } from 'react-router-dom';

export interface AnchorProps {
  to: string;
  text: string;
}

export const Anchor = ({ to, text }: AnchorProps) => {
  return (
    <div className={`w-full text-center`}>
      <Link to={to}>{text}</Link>
    </div>
  );
};
