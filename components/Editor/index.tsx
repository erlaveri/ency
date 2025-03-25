import './styles.scss'

// import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // Highlight,
      Typography,
    ],
    content: `Hello`,
  })

  return (
    <EditorContent editor={editor} />
  )
}