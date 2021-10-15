const Button = (props) => {
  const { onClick, icon, label, loading, disabled } = props;

  return (
    <button
      {...props}
      className={`${
        disabled || loading === 'loading'
          ? 'pointer-events-none bg-gray-600 text-gray-400 border-transparent'
          : ''
      } flex items-center justify-center gap-2 p-2 border-[1px] transition duration-150 ease-in-out rounded-md hover:bg-gray-600`}
      onClick={onClick}
    >
      <span className={`${loading === 'loading' ? 'animate-spin' : ''}`}>{icon}</span>
      <span className="pr-1">{label}</span>
    </button>
  );
};

export default Button;
