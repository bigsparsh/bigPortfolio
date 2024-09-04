import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
const BlogPage = async () => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("067dd719a912471ea9a3ac10710e7fdf");
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  );
};
export default BlogPage;
