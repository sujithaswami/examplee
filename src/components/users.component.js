let header = "hello";
  let tableheader = ["id", "name", "email"];
  let user1id = 1;
  let user1name = "suji";
  let user1email = "sujitha@gmail.com";
  let users = [
    { id: 1, name: "suji", email: "suji@gmail.com" },
    { id: 2, name: "madhu", email: "madhu@gmail.com" },
    { id: 3, name: "anu", email: "anu@gmail.com" },
    { id: 4, name: "durga", email: "durga@gmail.com" }

  ];
  return (
    <div>
      <h2>{header}</h2>
      <table className ='table table-striped table hover'>
        <thead className="table-success">
          <tr>
            {
              tableheader.map(CreateHeader)

            }
          </tr>
        </thead>
        <tbody>
          {
            users.map(CreateUserRecord)
          }
        </tbody>
      </table>
      <Products></Products>
    </div>
  );
}
function CreateUserRecord(item, index, arr) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
    </tr>
  )
}
function CreateHeader(item, index, arr) {
  return (
    <th> {item} </th>
  )
}
