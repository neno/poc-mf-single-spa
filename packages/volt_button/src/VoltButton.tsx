import React from 'react';
import { useStore } from 'store/store';

export default function VoltButton() {
  const { count, increment } = useStore();

  return <button onClick={increment}>Volt Button Counter: {count}</button>;
}
