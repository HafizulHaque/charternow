import { db } from "@/db"
import { users } from "@/db/schema";

export default async function UserListPage() {

  let usersData = await db.select().from(users);
  console.log(usersData);

  return (
    <div>
      <table className="cstm-table">
        <thead>
          <tr className="bg-gray-100">
            <th className="cstm-table-header">ID</th>
            <th className="cstm-table-header">Name</th>
            <th className="cstm-table-header">Email</th>
            <th className="cstm-table-header">Phone</th>
            <th className="cstm-table-header">Created At</th>
            <th className="cstm-table-header">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {usersData?.length > 0 ? usersData.map(user => (
            <tr key={user.id} className="cstm-table-row">
              <td className="cstm-table-cell">{user.id}</td>
              <td className="cstm-table-cell">{user.name}</td>
              <td className="cstm-table-cell">{user.email}</td>
              <td className="cstm-table-cell">{user.phone}</td>
              <td className="cstm-table-cell">{user.createdAt.toDateString()}</td>
              <td className="cstm-table-cell">{user.updatedAt.toDateString()}</td>
            </tr>
          )) : (
            <tr><td colSpan={6} className="cstm-table-cell">No data found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}



