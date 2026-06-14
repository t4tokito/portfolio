import { useEffect, useRef } from 'react'

const SystemBg = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 13
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789<>/{}[]|&_~#%+=@$£¥¢€システムコードターミナルネットワーク'

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 5, 5, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        const alpha = Math.min(1, 0.015 + (y / canvas.height) * 0.08)
        ctx.fillStyle = `rgba(244, 244, 245, ${alpha})`
        ctx.font = `${fontSize}px "Space Grotesk", monospace`
        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const id = setInterval(draw, 45)
    return () => {
      clearInterval(id)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}

export default SystemBg
