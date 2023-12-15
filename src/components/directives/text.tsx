interface TextProps {
  children: string;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <div className="my-4">{children}</div>;
};

export default Text;
