import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

const dataList = [
  { id: 1, name: 'D.J. Trump', email: 'ihatesharks@email.com', ip: '100.4000.50000' },
  { id: 2, name: 'Karl Wernsman', email: 'default@email.com', ip: '400.500.60000' },
  { id: 3, name: 'Myself', email: 'littleguy@email.com', ip: 'redacted' },
  { id: 4, name: 'That Guy That Beat Me In COD', email: 'n00b@email.com', ip: '350.6000.50000' },
  { id: 5, name: 'My Best Friend', email: 'bff@email.com', ip: '560.8000.60000' },
  { id: 6, name: 'Somebody I Used to Know', email: 'badsong@email.com', ip: '680.7000.54000' },
];

export default function DdosTable() {
  return (
    <Table fullWidth data={dataList}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={100} sortable resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>
      <Column width={100} sortable resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={100} sortable resizable>
        <HeaderCell>IP Address</HeaderCell>
        <Cell dataKey="ip" />
      </Column>
    </Table>
  );
}
