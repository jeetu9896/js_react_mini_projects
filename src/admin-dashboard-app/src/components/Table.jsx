import React, { useState, useMemo } from "react";
import "./Table.css";

// Mock data
const mockData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active", role: "Admin", joinDate: "2025-01-15" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Active", role: "User", joinDate: "2025-02-10" },
  { id: 3, name: "Cara Williams", email: "cara@example.com", status: "Inactive", role: "User", joinDate: "2025-01-20" },
  { id: 4, name: "David Brown", email: "david@example.com", status: "Active", role: "Moderator", joinDate: "2025-03-05" },
  { id: 5, name: "Eve Davis", email: "eve@example.com", status: "Active", role: "User", joinDate: "2025-02-28" },
  { id: 6, name: "Frank Miller", email: "frank@example.com", status: "Pending", role: "User", joinDate: "2025-03-20" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", status: "Active", role: "Admin", joinDate: "2025-01-08" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com", status: "Inactive", role: "User", joinDate: "2024-12-15" },
];

const Table = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "name", order: "asc" });
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Filter by search
  const filtered = useMemo(
    () =>
      mockData.filter(
        (row) =>
          row.name.toLowerCase().includes(search.toLowerCase()) ||
          row.email.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  // Sort
  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const aVal = a[sort.key];
      const bVal = b[sort.key];
      if (aVal < bVal) return sort.order === "asc" ? -1 : 1;
      if (aVal > bVal) return sort.order === "asc" ? 1 : -1;
      return 0;
    });
    return copy;
  }, [filtered, sort]);

  // Paginate
  const start = (page - 1) * rowsPerPage;
  const paged = sorted.slice(start, start + rowsPerPage);
  const totalPages = Math.ceil(sorted.length / rowsPerPage);

  const handleSort = (key) => {
    setPage(1);
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "asc" });
    }
  };

  const handleDelete = (id) => {
    alert(`Delete user #${id}`);
  };

  const handleEdit = (id) => {
    alert(`Edit user #${id}`);
  };

  return (
    <div className="table-root">
      <div className="table-header">
        <h2>Users</h2>
        <input
          type="text"
          placeholder="Search by name or email…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="search-input"
        />
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("name")} className="sortable">
                Name {sort.key === "name" && <span>{sort.order === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th onClick={() => handleSort("email")} className="sortable">
                Email {sort.key === "email" && <span>{sort.order === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th onClick={() => handleSort("role")} className="sortable">
                Role {sort.key === "role" && <span>{sort.order === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th onClick={() => handleSort("status")} className="sortable">
                Status {sort.key === "status" && <span>{sort.order === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th onClick={() => handleSort("joinDate")} className="sortable">
                Join Date {sort.key === "joinDate" && <span>{sort.order === "asc" ? "↑" : "↓"}</span>}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paged.length > 0 ? (
              paged.map((row) => (
                <tr key={row.id}>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>
                    <span className={`badge badge-${row.role.toLowerCase()}`}>{row.role}</span>
                  </td>
                  <td>
                    <span className={`badge-status status-${row.status.toLowerCase()}`}>{row.status}</span>
                  </td>
                  <td>{row.joinDate}</td>
                  <td>
                    <button className="btn-sm btn-edit" onClick={() => handleEdit(row.id)}>
                      Edit
                    </button>
                    <button className="btn-sm btn-delete" onClick={() => handleDelete(row.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <span className="result-count">
          Showing {paged.length > 0 ? start + 1 : 0} – {Math.min(start + rowsPerPage, sorted.length)} of {sorted.length}
        </span>
        <div className="pagination">
          <button onClick={() => setPage(1)} disabled={page === 1}>
            First
          </button>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </button>
          <span className="page-info">
            {page} / {totalPages}
          </span>
          <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
            Next
          </button>
          <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;