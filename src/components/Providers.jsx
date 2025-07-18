// components/Providers.jsx
'use client'

import { Provider } from 'react-redux'
import { store } from '../lib/store'

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>
}
