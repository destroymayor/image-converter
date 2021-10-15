const List = (props) => {
  const { data = [] } = props;

  return (
    <ul className="border-[1px] rounded-md min-h-[300px] grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 mb-6">
      {data.length === 0 && <span>No Data</span>}
      {data.map((item) => (
        <li
          key={item.href}
          className="flex flex-col items-center gap-2 transition duration-200 ease-in-out "
        >
          <a href={item.href} download={item.download}>
            <img src={item.href} width={240}></img>
          </a>
          <span>{item.label} / {item.width}x{item.height}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
