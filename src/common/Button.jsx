const Button = ({ children, btnStyles, greenWhite = false }) => {
  return (
    <div
      className={` font-semibold rounded-[4px] text-center  ${btnStyles} ${
        greenWhite ? 'bg-green-600 text-white ' : 'bg-white border border-gray-400 text-slate-600'
      } `}
    >
      {children}
    </div>
  );
};

export default Button;
