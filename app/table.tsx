"use client"
import { CheckBadgeIcon, CogIcon } from '@heroicons/react/24/outline';

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
  Bold
} from '@tremor/react';
import moment from 'moment';
import { useState } from 'react';

export interface University {
  id: number;
  name: string;
  initials: string;
  href: string;
  scholar: string;
  created_at: string;
  updated_at: string;

}

export default async function UniversityStatusTable({ university }: { university: University[] }) {
  const [selectedUser, setSelectedUser] = useState<University | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);


  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Üniversite ismi</TableHeaderCell>
          <TableHeaderCell>Yaratılma tarihi</TableHeaderCell>
          <TableHeaderCell>Son otomatik tarama</TableHeaderCell>
          <TableHeaderCell>Aktiflik durumu</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {university.map((university) => (
          <TableRow key={university.id}>
            <TableCell>
              <Text><a href={university.href} target="_blank" rel="noopener noreferrer"><Bold>{university.name}</Bold></a></Text>
            </TableCell>
            <TableCell>
              <Badge size="md" icon={CogIcon} color={'cyan'}>{moment(university.created_at).locale('tr-TR').format('LL')}</Badge>
            </TableCell>
            <TableCell>
              <Badge size="md" icon={CogIcon} color={'orange'}>{moment(university.updated_at).locale('tr-TR').format('LL')}</Badge>
            </TableCell>
            <TableCell>
              <Badge size="md" icon={CheckBadgeIcon} color={'emerald'}>Aktif</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
