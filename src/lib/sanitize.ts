const escapeInput = (text: string) => {
  const map: Record = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&#39;',
    '"': '&quot;',
    '/': '&#47;',
  };
  return text.replace(/[<>&'"\/]/g, (char: string): string => map[char]);
};

export default escapeInput;
