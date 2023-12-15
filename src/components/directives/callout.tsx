interface CalloutProps {
  children: string;
}

const Callout: React.FC<CalloutProps> = ({ children }) => {
  return <div className="p-2 bg-gray-300 rounded-lg my-4">{children}</div>;
};

export default Callout;
