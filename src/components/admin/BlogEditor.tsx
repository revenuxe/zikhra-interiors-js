import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Heading3, Link as LinkIcon, Image as ImageIcon, Undo, Redo, Quote } from "lucide-react";

interface BlogEditorProps {
  content: string;
  onChange: (html: string) => void;
  onImageUpload: () => void;
}

const MenuButton = ({ onClick, active, children, title }: { onClick: () => void; active?: boolean; children: React.ReactNode; title: string }) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
      active ? "bg-gold/20 text-gold" : "text-muted-foreground hover:bg-muted/20 hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

const BlogEditor = ({ content, onChange, onImageUpload }: BlogEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Image.configure({ inline: false, allowBase64: true }),
      LinkExtension.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Start writing your blog post..." }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "prose prose-invert prose-sm max-w-none min-h-[300px] p-4 focus:outline-none font-sans prose-headings:font-serif prose-headings:text-gold prose-p:text-foreground/80 prose-strong:text-foreground prose-a:text-gold",
      },
    },
  });

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="rounded-2xl border border-border/30 overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-0.5 p-2 border-b border-border/30 bg-card">
        <MenuButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Bold">
          <Bold className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Italic">
          <Italic className="w-4 h-4" />
        </MenuButton>
        <div className="w-px h-6 bg-border/30 mx-1 self-center" />
        <MenuButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive("heading", { level: 1 })} title="H1">
          <Heading1 className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })} title="H2">
          <Heading2 className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })} title="H3">
          <Heading3 className="w-4 h-4" />
        </MenuButton>
        <div className="w-px h-6 bg-border/30 mx-1 self-center" />
        <MenuButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Bullet List">
          <List className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Numbered List">
          <ListOrdered className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Quote">
          <Quote className="w-4 h-4" />
        </MenuButton>
        <div className="w-px h-6 bg-border/30 mx-1 self-center" />
        <MenuButton onClick={addLink} active={editor.isActive("link")} title="Add Link">
          <LinkIcon className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={onImageUpload} title="Insert Image">
          <ImageIcon className="w-4 h-4" />
        </MenuButton>
        <div className="w-px h-6 bg-border/30 mx-1 self-center" />
        <MenuButton onClick={() => editor.chain().focus().undo().run()} title="Undo">
          <Undo className="w-4 h-4" />
        </MenuButton>
        <MenuButton onClick={() => editor.chain().focus().redo().run()} title="Redo">
          <Redo className="w-4 h-4" />
        </MenuButton>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default BlogEditor;
