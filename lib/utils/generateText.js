
/**
 * テキスト中の "<" と ">" に挟まれた文字を伏字に変換する
 * @param {string} text 伏字に変換するテキスト
 * @return {string} 変換後のテキスト
 */
const generateLieDownText = (text) => {

  const start = text.indexOf('<');
  const end = text.indexOf('>');

  // もし '<' or '>' が両方含まれていない時は text を返す
  if (start === -1 || end === -1) {
    return text;
  }

  const targetText = text.substring(start, end + 1);

  // 伏字に置き換える
  const replacedText = text.replace(targetText, '○'.repeat(end - start - 1));

  // 再起関数
  return generateLieDownText(replacedText);
};

module.exports = {
  generateLieDownText,
};
