import { useEffect, useState } from 'react'
import { Bluerage, SafeAreaInsets } from '../Bluerage'

interface SafeAreaLayoutProps {
  children: React.ReactNode
}

export function SafeAreaLayout({ children }: SafeAreaLayoutProps) {
  const [insets, setInsets] = useState<SafeAreaInsets>(Bluerage.getSafeAreaInsets())

  useEffect(() => {
    // Subscribe to safe area insets changes
    const unsubscribe = Bluerage.onSafeAreaInsetsChange(setInsets)

    return () => {
      unsubscribe()
    }
  }, [])
  
  return (
    <div 
      className="min-h-screen"
      style={{
        paddingTop: `${insets.top}px`,
        paddingLeft: `${insets.left}px`,
        paddingRight: `${insets.right}px`,
        paddingBottom: `${insets.bottom}px`
      }}
    >
      {children}
    </div>
  )
} 