/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6Mowkj0qlr3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Pagination } from "@/components/ui/pagination"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "../ui/Badge"

export default function Component() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({ key: "id", order: "asc" })
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [selectedRows, setSelectedRows] = useState([])
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
      company: "Acme Inc.",
      role: "Manager",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-5678",
      company: "Globex Corp.",
      role: "Developer",
      status: "Active",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "555-9012",
      company: "Stark Industries",
      role: "Designer",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      phone: "555-3456",
      company: "Wayne Enterprises",
      role: "Analyst",
      status: "Active",
    },
    {
      id: 5,
      name: "Tom Davis",
      email: "tom@example.com",
      phone: "555-7890",
      company: "Stark Industries",
      role: "Developer",
      status: "Active",
    },
    {
      id: 6,
      name: "Sarah Lee",
      email: "sarah@example.com",
      phone: "555-2345",
      company: "Acme Inc.",
      role: "Manager",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "555-6789",
      company: "Globex Corp.",
      role: "Designer",
      status: "Active",
    },
    {
      id: 8,
      name: "Emily Wilson",
      email: "emily@example.com",
      phone: "555-0123",
      company: "Wayne Enterprises",
      role: "Analyst",
      status: "Active",
    },
    {
      id: 9,
      name: "David Lee",
      email: "david@example.com",
      phone: "555-4567",
      company: "Stark Industries",
      role: "Developer",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Jessica Chen",
      email: "jessica@example.com",
      phone: "555-8901",
      company: "Acme Inc.",
      role: "Manager",
      status: "Active",
    },
  ]
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const searchValue = search.toLowerCase()
      return (
        item.name.toLowerCase().includes(searchValue) ||
        item.email.toLowerCase().includes(searchValue) ||
        item.phone.toLowerCase().includes(searchValue) ||
        item.company.toLowerCase().includes(searchValue) ||
        item.role.toLowerCase().includes(searchValue) ||
        item.status.toLowerCase().includes(searchValue)
      )
    })
  }, [search])
  const sortedData = useMemo(() => {
    return filteredData.sort((a, b) => {
      if (sort.order === "asc") {
        return a[sort.key] > b[sort.key] ? 1 : -1
      } else {
        return a[sort.key] < b[sort.key] ? 1 : -1
      }
    })
  }, [filteredData, sort])
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    return sortedData.slice(startIndex, endIndex)
  }, [sortedData, page, pageSize])
  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" })
    } else {
      setSort({ key, order: "asc" })
    }
  }
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white dark:bg-gray-950"
        />
        <div className="flex items-center gap-2">
          <Select value={pageSize} onChange={(e) => setPageSize(parseInt(e.target.value))} className="w-24">
            <SelectTrigger>
              <SelectValue placeholder="Page size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={10}>10</SelectItem>
              <SelectItem value={20}>20</SelectItem>
              <SelectItem value={50}>50</SelectItem>
            </SelectContent>
          </Select>
          <Pagination currentPage={page} totalPages={Math.ceil(sortedData.length / pageSize)} onPageChange={setPage} />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer" onClick={() => handleSort("id")}>
              ID
              {sort.key === "id" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
              Name
              {sort.key === "name" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("email")}>
              Email
              {sort.key === "email" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("phone")}>
              Phone
              {sort.key === "phone" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("company")}>
              Company
              {sort.key === "company" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("role")}>
              Role
              {sort.key === "role" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
              Status
              {sort.key === "status" && <span className="ml-1">{sort.order === "asc" ? "\u2191" : "\u2193"}</span>}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow
              key={item.id}
              className={selectedRows.includes(item.id) ? "bg-gray-100 dark:bg-gray-800" : ""}
              onClick={() => handleRowSelect(item.id)}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.company}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>
                <Badge
                  variant={item.status === "Active" ? "green" : "red"}
                  className="px-2 py-1 rounded-full text-xs font-medium"
                >
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}