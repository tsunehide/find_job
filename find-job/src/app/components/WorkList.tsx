import { Work } from "../lib/contents";
import WorkItem from "./WorkItem";

interface contentlist{
  contentlist: Work[]
}

export default function WorkList({contentlist}:contentlist){
  return (
    contentlist.map(content => (
        <WorkItem content={content} />
    ))
);
}