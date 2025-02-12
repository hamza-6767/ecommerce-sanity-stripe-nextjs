// components/ClientProvider.jsx
'use client';

import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

export default function ClientProvider({ children }) {
  return (
    <StateContext>
      {children}
      <Toaster />git commit --allow-empty -m "Trigger rebuild"
    </StateContext>
  );
}