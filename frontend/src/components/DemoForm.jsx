import { useState } from 'react'

// Form that only shows a thank-you message (no backend yet).
// mode: "replace" swaps the form contents, "hide" swaps the whole form, "after" shows the message below it.
export default function DemoForm({ mode = 'replace', done, children, ...props }) {
  const [sent, setSent] = useState(false)
  const onSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  if (sent && mode === 'hide') return done
  return (
    <>
      <form {...props} onSubmit={onSubmit}>
        {sent && mode === 'replace' ? done : children}
      </form>
      {sent && mode === 'after' && done}
    </>
  )
}
