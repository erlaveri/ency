'use client'

import {useCallback} from "react";

const Types = [
  {name: 'Question', code: 'question'},
  {name: 'Coding', code: 'coding'},
  {name: 'Logic', code: 'logic'},
];

const Languages = [
  {name: 'JS', code: 'js'},
  {name: 'TS', code: 'ts'},
  {name: 'HTML', code: 'html'},
  {name: 'CSS', code: 'css'},
];

const Categories = [
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
    <div>
      <div>
        <select name="type">
          {Types.map(item => (<option key={item.code} value={item.code}>{item.name}</option>))}
        </select>
      </div>
      <hr className="mb-3"/>
      <div>
        <select name="languagies" multiple>
          {Languages.map(item => (<option key={item.code} value={item.code}>{item.name}</option>))}
        </select>
      </div>
      <hr className="mb-3"/>
      <div>
        <select name="categories" multiple>
          {Categories.map(item => (<option key={item.code} value={item.code}>{item.name}</option>))}
        </select>
      </div>
      <hr/>


      <input type="button" value="Save"/>
    </div>
  );
}
