import { DocumentRenderer } from '@keystatic/core/renderer';
import type { DocumentElement } from '@keystatic/core';

export default function BlogContent({ document }: { document: DocumentElement[] }) {
  return <DocumentRenderer document={document} />;
}
