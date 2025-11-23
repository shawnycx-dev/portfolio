import { RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type RichTextProps = {
  data: SerializedEditorState;
} & React.HTMLAttributes<HTMLDivElement>;

export function RichText( { className, ...rest }: RichTextProps ) {
  return <RichTextConverter className={className} {...rest} />;
};