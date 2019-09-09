import React from 'react';
import { Table } from 'semantic-ui-react';
import { uniqueId, trim } from 'lodash';

const usersTable = ({ users, filterValue }) => {
  const headers = users[0];
  const filterUsers = filterValue
    ? users.filter((it) => it.name === trim(filterValue))
    : users;
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {Object.keys(headers).map((key) => (
            <Table.HeaderCell key={uniqueId('header-table__')}>
              {key}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {filterUsers.map((it) => (
            <Table.Row key={it.id}>
              {Object.keys(it).map((key) => {
                if (key === 'address') {
                  return (
                    <Table.Cell key={uniqueId('cell-table__')}>
                      {it[key].city}
                    </Table.Cell>
                  );
                }
                if (key === 'company') {
                  return (
                    <Table.Cell key={uniqueId('cell-table__')}>
                      {it[key].name}
                    </Table.Cell>
                  );
                }
                return (
                  <Table.Cell key={uniqueId('cell-table__')}>
                    {it[key]}
                  </Table.Cell>
                );
              })}
            </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default usersTable;
