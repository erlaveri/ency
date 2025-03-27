'use client'

import {useCallback} from "react";
import Editor from "@/components/Editor";
import {Button, Container, MultiSelect, NativeSelect, Select} from "@mantine/core";

const Types = [
  {name: 'Question', code: 'question'},
  {name: 'Coding', code: 'coding'},
  {name: 'Logic', code: 'logic'},
  {name: 'Language', code: 'language'},
];

const Languages: any[] = [
  {name: 'JS', code: 'js'},
  {name: 'TS', code: 'ts'},
  {name: 'HTML', code: 'html'},
  {name: 'CSS', code: 'css'},
];

const Categories: any[] = [
  {name: 'Frontend', code: 'frontend'},
  {name: 'Backend', code: 'backend'},
  {name: 'General', code: 'general'},
  {name: 'System Design', code: 'sysdes'},
  {name: 'Algorithms', code: 'alg'},
  {name: 'Patterns', code: 'patterns'},
  {name: 'DOM', code: 'dom'},
  {name: 'NodeJS', code: 'nodejs'},
  {name: 'React', code: 'react'},
];


export default function EncyPage() {

  const ss = useCallback(async () => {
    console.log(window);
  }, [])

  return (
    <Container size="md">
      <div>
        <Select
          label="Type"
          placeholder="Pick value"
          data={Types.map(item => ({label: item.name, value: item.code}))}
        />


        <MultiSelect
          mt="md"
          label="Tags"
          placeholder="Pick value"
          data={[...Languages, ...Categories].map(item => ({label: item.name, value: item.code}))}
        />

      </div>

      Question:
      Answer:

      <hr/>

      <Editor/>
      <hr/>
      <hr/>
      <hr/>

      <Button>Save</Button>
    </Container>
  );
}
