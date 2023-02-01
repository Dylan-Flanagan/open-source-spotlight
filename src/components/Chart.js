import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { XAxis, YAxis, Tooltip, Bar, BarChart } from 'recharts';

const data = [
  { type: 'Dog', dislike: 1000, like: 10000, ind: 5000 },
  { type: 'Cat', dislike: 3000, like: 4000, ind: 7000 },
  { type: 'Child', dislike: 10000, like: 100, ind: 50 },
];
export default function PetChart() {
  const [dataKey, setDataKey] = useState('like');
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-label">Data Key</InputLabel>
        <Select
          labelId="select-label-id"
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
        <Bar dataKey={dataKey} fill="#886672" />
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </>
  );
}
