import React from "react";
import { Table } from "@mantine/core";
import Cookies from "js-cookie";
import { useGetContactQuery } from "../redux/api/contactApi";

const ContactTable = () => {
  const token = Cookies.get("token");
  const user = JSON.parse(Cookies.get("user"));
  console.log(user);
  console.log(token);
  const { data } = useGetContactQuery(token);
  console.log(data);

  const ContactData = data?.contacts?.data;
  const rows = ContactData?.map((element) => (
    <tr key={element?.id}>
      <td>{element?.name}</td>
      <td>{element?.email === null ? "exapmle@gmail.com" : element?.email}</td>
      <td>{element?.phone}</td>
      <td>
        {element?.address === null ? "exapmle@gmail.com" : element?.address}
      </td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default ContactTable;
