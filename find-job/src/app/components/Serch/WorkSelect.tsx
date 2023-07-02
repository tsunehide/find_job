"use client"
import React, {useMemo} from 'react'
import Select from 'react-select'
import style from './WorkSelect.module.scss'
import Image from 'next/image'

export type UseSelectProps = {
  selected: Work | null;
  setWork: (user: Work | null) => void;
};

export type Work = {
  id: number;
  salary: number;
}

const sampleData: Work[] = [
  {
    id: 1,
    salary: 900,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 1100,
  },
  {
    id: 4,
    salary: 1200,
  },
  {
    id: 5,
    salary: 1300,
  },
  {
    id: 6,
    salary: 1400,
  },
]

type WorkOption = {
  label: string;
  value: number;
  salary: number;
}

function convertToWork(args: WorkOption | null): Work | null {
  if (!args) return null;
  return {
    id: args.value,
    salary: args.salary,
  };
}

function convertToOption(work: Work): WorkOption {
  return {
    label: work.salary.toString() + "~",
    value: work.id,
    salary: work.salary,
  };
}

const renderIcon = () => {
  return (
    <Image src="/dropdown.svg" width={10} height={10} alt={''} className='w-[10px] h-[10px]'/>
  )
}

export const WorkSelect: React.FC<UseSelectProps> = ({selected, setWork}) => {
  const value = useMemo(
    () => (selected ? convertToOption(selected) : null),
    [selected]
  );

  const onChange = (newWork: WorkOption | null) => {
      setWork(convertToWork(newWork));
  };

  
  return (
    <>
      <Select
        className={style.select}
        classNamePrefix="rs"
        instanceId="work"
        value={value}
        onChange={onChange}
        options={sampleData.map(convertToOption)}
        // arrowRenderer={renderIcon}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator:() => renderIcon(),
        }}
      />
    </>
  )
}