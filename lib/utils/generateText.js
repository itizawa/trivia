
const generateLieDownText = (text) => {

  const start = text.indexOf('<');
  const end = text.indexOf('>');

  // もし '<' or '>' が両方含まれていない時は text を返す
  if (start === -1 || end === -1) {
    return text;
  }

  const replaceText = text.substring(start, end + 1);
  return text.replace(replaceText, '○'.repeat(end - start - 1));
};

module.exports = {
  generateLieDownText,
};
