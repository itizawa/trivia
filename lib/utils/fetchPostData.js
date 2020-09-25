import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'lib/news');

export default function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName, index) => {
    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents);

    // データを id と合わせる
    return {
      id: index,
      ...matterResult.data,
    };
  });
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;

  });
}
