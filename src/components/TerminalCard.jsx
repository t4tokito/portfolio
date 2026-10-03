import React from 'react'

/**
 * Card — dark clean surface.
 * Keeps old TerminalCard API so pages don't break.
 */
const TerminalCard = ({ file, icon: Icon, className = '', bodyClassName = '', children, title }) => {
  return (
    <div className={`glass-card overflow-hidden ${className}`}>
      {(file || title || Icon) && (
        <div className="flex items-center gap-2.5 px-5 md:px-6 pt-5 pb-1">
          {Icon && (
            <span className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-accent shrink-0">
              <Icon size={15} />
            </span>
          )}
          <span className="font-space font-medium text-[13px] text-muted tracking-tight">
            {title || file}
          </span>
        </div>
      )}
      <div className={`px-5 md:px-6 pb-5 md:pb-6 pt-3 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default TerminalCard
