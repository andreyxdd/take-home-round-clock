import React from 'react';

function useDocumentTitle(title: string): void {
  React.useEffect(() => {
    window.document.title = title;
  }, [title]);
}

export default useDocumentTitle;
