'use client'

const items = [
  {name: 'sdfsd'}
];

export default function EncyPage() {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
