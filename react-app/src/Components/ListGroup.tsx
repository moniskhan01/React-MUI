function ListGroup() {
    let items=[
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'New Delhi'
    ];

const getMessage = () =>{
    return items.length===0? <p>No Items found</p>:null;
}

// items=[];
    return (
        <>
    <h1>List</h1>
    {getMessage()}
    <ul className="list-group">

      {/* <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li> */}

    

    {items.map(item=><li key={item}>{item}</li>)
}
      
    </ul>
    </>
  );
}
export default ListGroup;
