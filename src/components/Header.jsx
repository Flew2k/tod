export const Header = () => {
    const lol = {
        header: {
            backgroundColor: 'black',
            height: 60,
            borderBottom: '1px solid black',
            display: 'flex',
            alignItems: 'center',
            color: 'grey',
        }
    }
  return (
    <div style={lol.header}>
      <h4>ToDo List</h4>
    </div>
  );
};
