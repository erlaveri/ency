'use client'

import Typography from '@tiptap/extension-typography'
import {useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {RichTextEditor} from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import {RefObject} from "react";
import {Editor} from "@tiptap/core";
import Placeholder from '@tiptap/extension-placeholder';

type Props = {
  ref?: RefObject<Editor | null>;
  placeholder?: string;
}

export default function AppRichTextEditor({ref, placeholder}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Underline,
      Typography,
      Placeholder.configure({placeholder})
    ],
  });

  ref && (ref.current = editor);

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold/>
          <RichTextEditor.Italic/>
          <RichTextEditor.Underline/>
          <RichTextEditor.Strikethrough/>
          <RichTextEditor.ClearFormatting/>
          <RichTextEditor.Highlight/>
          <RichTextEditor.Code/>
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content/>
    </RichTextEditor>
  );
}