'use client'

import {createRef, useCallback, useEffect, useRef, useState} from "react";
import AppRichTextEditor from "@/components/AppRichTextEditor";
import {Button, Container, MultiSelect, NativeSelect, Select, Text} from "@mantine/core";
import {Editor} from "@tiptap/core";
import {getEncyItems} from "@/app/ency/actions";

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
  const questionRef = useRef<Editor>(null);
  const answerRef = useRef<Editor>(null);

  const [encyItems, setEncyItems] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const items = await getEncyItems();
      setEncyItems(items);
    })()
  }, [])

  return (
    <>
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

        <Text mt="md">Question:</Text>
        <AppRichTextEditor ref={questionRef}/>

        <Text mt="md">Answer:</Text>
        <AppRichTextEditor ref={answerRef}/>


        <Button onClick={() => {
          console.log(questionRef.current?.getHTML());
        }}>Save</Button>
      </Container>
    </>
  );
}


