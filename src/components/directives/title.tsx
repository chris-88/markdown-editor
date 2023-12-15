interface HeadingProps {
  children: string;
}

const Title: React.FC<HeadingProps> = ({ children }) => {
  return (
    <div className="text-2xl text-center h-16 bg-transparent text-black mt-7">
      {children}
    </div>
  );
};

export default Title;
