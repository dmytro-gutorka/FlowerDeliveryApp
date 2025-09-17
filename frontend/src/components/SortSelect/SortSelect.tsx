import { MenuItem, TextField } from '@mui/material';
import { PRODUCT_SORT_BY } from '../../app/constants.ts';
import type { SortTypes } from '../../types/types.ts';

interface SortSelectProps {
  onSortChange: (sortType: SortTypes) => void;
  sortType: SortTypes;
}

export default function SortSelect({ onSortChange, sortType }: SortSelectProps) {
  return (
    <TextField
      onChange={(e) => onSortChange(e.target.value as SortTypes)}
      variant="standard"
      select
      label="Sort By"
      defaultValue={sortType}
      sx={{ width: 150 }}
    >
      <MenuItem value={PRODUCT_SORT_BY.PRICE_DESC}>Expensive First</MenuItem>
      <MenuItem value={PRODUCT_SORT_BY.PRICE_ASC}>Cheap First</MenuItem>
      <MenuItem value={PRODUCT_SORT_BY.DATE_DESC}>Last added</MenuItem>
      <MenuItem value={PRODUCT_SORT_BY.DATE_ASC}>First added</MenuItem>
    </TextField>
  );
}
