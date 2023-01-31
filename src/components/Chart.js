import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { XAxis, YAxis, Tooltip, Bar, BarChart } from 'recharts';

const data = [
  { type: 'Dog', dislike: 400, like: 2400, ind: 5000 },
  { type: 'Cat', dislike: 300, like: 1200, ind: 7000 },
  { type: 'Child', dislike: 600, like: 2400, ind: 8400 },
];
export default function ColorChart() {
  const [dataKey, setDataKey] = useState('pv');
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-label">Data Key</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={dataKey}
          label="Data Key"
          onChange={(e) => setDataKey(e.target.value)}
        >
          <MenuItem value="dislike">Dislike</MenuItem>
          <MenuItem value="like">Like</MenuItem>
          <MenuItem value="ind">Indifferent</MenuItem>
        </Select>
      </FormControl>

      <BarChart width={800} height={600} data={data}>
        <Bar dataKey={dataKey} fill="#886678" />
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </>
  );
}
