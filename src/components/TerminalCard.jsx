import React from 'react'
import { Terminal } from 'lucide-react'

/**
 * Terminal-style window card — matches the hero console on the home page.
 * A title bar with a filename + traffic-light dots, then a body slot.
 */
const TerminalCard = ({ file = 'session.sh', icon: Icon = Terminal, className = '', bodyClassName = '', children }) => {
  return (
    <div className={`glass-card rounded-2xl overflow-hidden ${className}`}>
      {/* title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-elevated/40">
        <div className="flex items-center gap-2 text-faint font-mono text-xs">
          <Icon size={13} className="text-accent" />
          <span>{file}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-line" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
        </div>
      </div>

      {/* body */}
      <div className={`p-5 md:p-6 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default TerminalCard
