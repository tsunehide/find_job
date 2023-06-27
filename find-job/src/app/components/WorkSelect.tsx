"use client"
import React, {useMemo} from 'react'
import Select from 'react-select'
import style from './WorkSelect.module.scss'

export type UseSelectProps = {
  selected: Work | null;
  setWork: (user: Work | null) => void;
};

export type Work = {
  id: number;
  name: string;
}

const sampleData: Work[] = [
  {
    id: 1,
    name: "飲食店",
  },
  {
    id: 2,
    name: "コンビニ",
  },
  {
    id: 3,
    name: "ファミレス",
  },
  {
    id: 4,
    name: "居酒屋",
  },
  {
    id: 5,
    name: "カフェ",
  },
  {
    id: 6,
    name: "その他",
  },
]

type WorkOption = {
  label: string;
  value: number;
  name: string;
}

function convertToWork(args: WorkOption | null): Work | null {
  if (!args) return null;
  return {
    id: args.value,
    name: args.name,
  };
}

function convertToOption(work: Work): WorkOption {
  return {
    label: work.name,
    value: work.id,
    name: work.name,
  };
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
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </>
  )
}