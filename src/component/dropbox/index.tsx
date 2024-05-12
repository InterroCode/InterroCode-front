import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ListSubheader from '@mui/material/ListSubheader'

import { SelectFields } from '@/model/step'

import { DropStyles, DropSizes } from '@/component/dropbox/style.tsx'
import { cx } from '@emotion/css'

interface StepperDropBoxProps {
  fields: string[] | string[][]
  stepTitle: string
  handleSelect?: (event: SelectChangeEvent<string>) => void
  selectFields: SelectFields
  selectNum: number
  isGroup: boolean
}

const StepperDropBox = (props: StepperDropBoxProps) => {
  const { fields, stepTitle, handleSelect, selectFields, selectNum, isGroup } = props
  if (selectNum === 1) {
    return (
      <div>
        <FormControl sx={{ mt: 5, mb: 5 }} className={cx(DropStyles['default'], DropSizes['small'])}>
          <InputLabel id={`demo-${stepTitle}-label`}>{stepTitle}*</InputLabel>
          <Select
            labelId={`demo-${stepTitle}-label`}
            value={selectFields[stepTitle as keyof SelectFields]}
            name={stepTitle}
            onChange={handleSelect}
            input={<OutlinedInput id={`select-multiple-${stepTitle}`} label={`${stepTitle}*`} />}>
            {fields.map(field => {
              return <MenuItem value={field}>{field}</MenuItem>
            })}
          </Select>
        </FormControl>
        <div>{`${stepTitle}: ${selectFields[`${stepTitle}` as keyof SelectFields]}`}</div>
      </div>
    )
  } else if (selectNum === 2 && !isGroup) {
    return (
      <div>
        <div>
          <FormControl sx={{ mt: 5 }} className={cx(DropStyles['default'], DropSizes['medium'])}>
            <InputLabel id={`demo-multiple-main_${stepTitle}-label`}>main_{stepTitle}*</InputLabel>
            <Select
              labelId={`demo-multiple-main_${stepTitle}-label`}
              value={selectFields[`main_${stepTitle}` as keyof SelectFields]}
              name={`main_${stepTitle}`}
              onChange={handleSelect}
              input={<OutlinedInput id={`select-multiple-main_${stepTitle}`} label={`main_${stepTitle}*`} />}>
              {fields
                .filter(field => field !== selectFields[`sub_${stepTitle}` as keyof SelectFields])
                .map(field => {
                  return <MenuItem value={field}>{field}</MenuItem>
                })}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ mt: 1, mb: 5 }} className={cx(DropStyles['default'], DropSizes['medium'])}>
            <InputLabel id={`demo-multiple-sub_${stepTitle}-label`}>sub_{stepTitle}</InputLabel>
            <Select
              labelId={`demo-multiple-sub_${stepTitle}-label`}
              value={selectFields[`sub_${stepTitle}` as keyof SelectFields]}
              name={`sub_${stepTitle}`}
              onChange={handleSelect}
              input={<OutlinedInput id={`select-multiple-sub_${stepTitle}`} label={`sub_${stepTitle}`} />}>
              {fields
                .filter(field => field !== selectFields[`main_${stepTitle}` as keyof SelectFields])
                .map(field => {
                  return <MenuItem value={field}>{field}</MenuItem>
                })}
            </Select>
          </FormControl>
        </div>

        <div>
          <div>{`main_${stepTitle}: ${selectFields[`main_${stepTitle}` as keyof SelectFields]}`}</div>
          <div>{`sub_${stepTitle}: ${selectFields[`sub_${stepTitle}` as keyof SelectFields]}`}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <FormControl sx={{ mt: 5 }} className={cx(DropStyles['default'], DropSizes['medium'])}>
            <InputLabel id={`demo-main_${stepTitle}-label`}>main_{stepTitle}*</InputLabel>
            <Select
              labelId={`demo-main_${stepTitle}-label`}
              value={selectFields[`main_${stepTitle}` as keyof SelectFields]}
              name={`main_${stepTitle}`}
              onChange={handleSelect}
              input={<OutlinedInput id={`select-main_${stepTitle}`} label={`main_${stepTitle}*`} />}>
              <ListSubheader>프론트엔드</ListSubheader>
              {Array.isArray(fields[0]) &&
                fields[0]
                  .filter(field => field !== selectFields[`sub_${stepTitle}` as keyof SelectFields])
                  .map(field => {
                    return <MenuItem value={field}>{field}</MenuItem>
                  })}
              <ListSubheader>백엔드</ListSubheader>
              {Array.isArray(fields[1]) &&
                fields[1]
                  .filter(field => field !== selectFields[`sub_${stepTitle}` as keyof SelectFields])
                  .map(field => {
                    return <MenuItem value={field}>{field}</MenuItem>
                  })}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ mt: 1, mb: 5 }} className={cx(DropStyles['default'], DropSizes['medium'])}>
            <InputLabel id={`demo-sub_${stepTitle}-label`}>sub_{stepTitle}</InputLabel>
            <Select
              labelId={`demo-sub_${stepTitle}-label`}
              value={selectFields[`sub_${stepTitle}` as keyof SelectFields]}
              name={`sub_${stepTitle}`}
              onChange={handleSelect}
              input={<OutlinedInput id={`select-sub_${stepTitle}`} label={`sub_${stepTitle}`} />}>
              <ListSubheader>프론트엔드</ListSubheader>
              {Array.isArray(fields[0]) &&
                fields[0]
                  .filter(field => field !== selectFields[`main_${stepTitle}` as keyof SelectFields])
                  .map(field => {
                    return <MenuItem value={field}>{field}</MenuItem>
                  })}
              <ListSubheader>백엔드</ListSubheader>
              {Array.isArray(fields[1]) &&
                fields[1]
                  .filter(field => field !== selectFields[`main_${stepTitle}` as keyof SelectFields])
                  .map(field => {
                    return (
                      <MenuItem value={field} className={cx(DropStyles['default'])}>
                        {field}
                      </MenuItem>
                    )
                  })}
            </Select>
          </FormControl>
        </div>
        <div>
          <div>{`main_${stepTitle}: ${selectFields[`main_${stepTitle}` as keyof SelectFields]}`}</div>
          <div>{`sub_${stepTitle}: ${selectFields[`sub_${stepTitle}` as keyof SelectFields]}`}</div>
        </div>
      </div>
    )
  }
}

export default StepperDropBox
